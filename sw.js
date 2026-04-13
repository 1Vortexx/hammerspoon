// X-ORBIT Service Worker – minimal install-prompt enabler
const CACHE = "xorbit-v1";

self.addEventListener("install", (e) => {
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(clients.claim());
});

// Pass-through fetch – no offline caching needed for the prompt to work
self.addEventListener("fetch", () => {});
