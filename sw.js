const CACHE_NAME = 'love-book-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/icon-192x192.png',
    '/icon-512x512.png',
    '/your-music-file.mp3'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});