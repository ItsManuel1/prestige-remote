// Minimal service worker: makes the page installable (and a Web Share Target on
// Android). Everything goes to the network; nothing is cached.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* default network handling */ });
