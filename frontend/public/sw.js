const CACHE_NAME = 'alagappa-nme-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/alagappa_logo.svg',
  '/assets/nme_banner.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
