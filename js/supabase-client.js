/**
 * FYN — Supabase Cloud Database Client
 * Connected to project: cappiaman's Project (hnujsrtxtbadioumhitw)
 */

const SUPABASE_CONFIG = {
  url: 'https://hnujsrtxtbadioumhitw.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhudWpzcnR4dGJhZGlvdW1oaXR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTU1MjU0MTYsImV4cCI6MjExMTEwMTQxNn0.E5RxqJztCs5Tq5XdIREVIn9nSIvYJew4vaOE6DJQODs',
  publishableKey: 'sb_publishable_GCNxzIvGUbWm4DChCd_kbw_XvGxHXNh'
};

let _supabaseClient = null;

function getSupabaseClient() {
  if (!_supabaseClient && window.supabase) {
    _supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
    console.log('[FYN] Supabase Cloud client initialized:', SUPABASE_CONFIG.url);
  }
  return _supabaseClient;
}

window.FYN_SUPABASE = {
  config: SUPABASE_CONFIG,
  getClient: getSupabaseClient,
  async checkConnection() {
    const sb = getSupabaseClient();
    if (!sb) return { connected: false, error: 'Supabase SDK not loaded' };
    try {
      const { data, error } = await sb.from('users').select('id, name, username').limit(3);
      if (error) throw error;
      return { connected: true, data };
    } catch (err) {
      console.warn('[FYN] Supabase ping failed:', err);
      return { connected: false, error: err.message };
    }
  }
};
