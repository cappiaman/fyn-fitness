/**
 * FYN — Official Supabase Cloud Backend Client
 * Project: FYN Health OS (oqrlyhcgilmqnynvhunr) — Region: ap-south-1 (Mumbai, India)
 * Organization: cappiaman
 */

const SUPABASE_CONFIG = {
  url: 'https://oqrlyhcgilmqnynvhunr.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xcmx5aGNnaWxtcW55bnZodW5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTU1MjMxNTEsImV4cCI6MjExMTA5OTE1MX0.gJBweQQGwLqaxj5Uu35bgxQQkx_vfKmppoazebV0YqU',
  publishableKey: 'sb_publishable_lL-6D43-pOssH8hlE_ekvA_zLZT1Vg2'
};

let _supabaseClient = null;

function getSupabaseClient() {
  if (!_supabaseClient && window.supabase) {
    _supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
    console.log('[FYN Supabase] Cloud backend initialized:', SUPABASE_CONFIG.url);
  }
  return _supabaseClient;
}

// Simple SHA-256 helper for client-side password hashing
async function sha256(str) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function generateRandomToken(len = 32) {
  const arr = new Uint8Array(len);
  crypto.getRandomValues(arr);
  return Array.from(arr).map(b => b.toString(16).padStart(2, '0')).join('');
}

window.FYN_SUPABASE = {
  config: SUPABASE_CONFIG,
  getClient: getSupabaseClient,

  // 1. Inquiries & Lead Forms submission
  async submitInquiry(data) {
    const sb = getSupabaseClient();
    if (!sb) throw new Error('Supabase SDK not loaded');

    const payload = {
      name: data.name || '',
      email: data.email || '',
      phone: data.phone || '',
      subject: data.subject || 'Website Inquiry',
      fitness_goal: data.fitness_goal || data.goal || '',
      message: data.message || '',
      status: 'new'
    };

    const { data: result, error } = await sb.from('inquiries').insert([payload]).select();
    if (error) {
      console.error('[Supabase Inquiry Error]:', error);
      throw error;
    }
    console.log('[Supabase Inquiry Saved]:', result);
    return result;
  },

  // 2. Authorization: Login
  async login(usernameOrEmail, password) {
    const sb = getSupabaseClient();
    if (!sb) throw new Error('Supabase SDK not loaded');

    // Query user by username or email
    const { data: users, error } = await sb
      .from('users')
      .select('*')
      .or(`username.eq.${usernameOrEmail.toLowerCase()},email.eq.${usernameOrEmail.toLowerCase()}`);

    if (error || !users || users.length === 0) {
      throw new Error('User not found');
    }

    const user = users[0];
    const computedHash = await sha256(password + user.salt);

    if (computedHash !== user.password_hash) {
      throw new Error('Invalid credentials');
    }

    // Create session token in Supabase
    const token = generateRandomToken(32);
    const { error: sessionErr } = await sb.from('sessions').insert([{
      token: token,
      user_id: user.id
    }]);

    if (sessionErr) {
      console.warn('[Supabase Session Warning]:', sessionErr);
    }

    // Fetch user settings
    const { data: settings } = await sb.from('user_settings').select('*').eq('user_id', user.id).single();

    return {
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        name: user.name,
        role: user.role,
        phone: user.phone || '',
        height_cm: user.height_cm || 0,
        weight_kg: user.weight_kg || 0,
        blood_reports: user.blood_reports || '',
        medical_history: user.medical_history || ''
      },
      settings: settings || {}
    };
  },

  // 3. Authorization: Register new client
  async register(data) {
    const sb = getSupabaseClient();
    if (!sb) throw new Error('Supabase SDK not loaded');

    const salt = generateRandomToken(16);
    const passwordHash = await sha256(data.password + salt);

    const userPayload = {
      username: data.username.toLowerCase().trim(),
      email: data.email.toLowerCase().trim(),
      password_hash: passwordHash,
      salt: salt,
      name: data.name.trim(),
      role: data.role || 'client',
      phone: data.phone || '',
      height_cm: parseFloat(data.height_cm || 0),
      weight_kg: parseFloat(data.weight_kg || 0),
      blood_reports: data.blood_reports || '',
      medical_history: data.medical_history || ''
    };

    const { data: insertedUsers, error: userErr } = await sb.from('users').insert([userPayload]).select();
    if (userErr) throw userErr;

    const user = insertedUsers[0];

    // Create default settings
    await sb.from('user_settings').insert([{
      user_id: user.id,
      calorie_target: 2150,
      protein_target: 150,
      carbs_target: 180,
      fat_target: 65,
      step_target: 10000,
      weight_target_kg: 72.0,
      water_target_ml: 3000
    }]);

    // Create session
    const token = generateRandomToken(32);
    await sb.from('sessions').insert([{ token, user_id: user.id }]);

    return { token, user };
  },

  // 4. Authorization: Validate Session
  async validateSession(token) {
    const sb = getSupabaseClient();
    if (!sb || !token) return null;

    const { data: sessions, error } = await sb
      .from('sessions')
      .select('user_id, users(*), created_at')
      .eq('token', token);

    if (error || !sessions || sessions.length === 0) return null;

    const session = sessions[0];
    const user = session.users;
    if (!user) return null;

    const { data: settings } = await sb.from('user_settings').select('*').eq('user_id', user.id).single();

    return {
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        name: user.name,
        role: user.role,
        phone: user.phone || '',
        height_cm: user.height_cm || 0,
        weight_kg: user.weight_kg || 0,
        blood_reports: user.blood_reports || '',
        medical_history: user.medical_history || ''
      },
      settings: settings || {}
    };
  },

  // 5. Authorization: Sign Out
  async logout(token) {
    const sb = getSupabaseClient();
    if (sb && token) {
      await sb.from('sessions').delete().eq('token', token);
    }
  },

  // 6. Real-time Telemetry Persistence
  async saveTelemetry(tableName, record) {
    const sb = getSupabaseClient();
    if (!sb) return null;
    const { data, error } = await sb.from(tableName).insert([record]).select();
    if (error) {
      console.warn(`[Supabase Save ${tableName} Error]:`, error);
      throw error;
    }
    return data;
  }
};
