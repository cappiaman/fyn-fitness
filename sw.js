// FYN Health OS - Automated Cache Purge & Live Cloud Passthrough
// Permanently clears CacheStorage and auto-unregisters so the app always reflects live cloud data
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.map((key) => caches.delete(key)));
    }).then(() => {
      return self.registration.unregister();
    }).then(() => {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', (event) => {
  // Never intercept or cache — always fetch live directly from the network / Supabase
  event.respondWith(fetch(event.request));
});
