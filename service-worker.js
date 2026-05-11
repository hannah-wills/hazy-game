const CACHE_NAME = "hazy-v56";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./cards.js",
  "./manifest.json",

  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",

  "./assets/images/sip-if.png",
  "./assets/images/most-likely.png",
  "./assets/images/truth-or-dare.png",
  "./assets/images/never-have-i-ever.png",
  "./assets/images/imposter.png",
  "./assets/images/would-you-rather.png",
  "./assets/images/dare-roulette.png",
  "./assets/images/kings-cup.png",

  "./assets/images/classic-pack.png",
  "./assets/images/spicy-pack.png",
  "./assets/images/crazy-pack.png",
  "./assets/images/university-pack.png",
  "./assets/images/couples-pack.png",
  "./assets/images/girls-night-pack.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.allSettled(
        FILES_TO_CACHE.map(file => cache.add(file))
      );
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheName !== CACHE_NAME)
          .map(cacheName => caches.delete(cacheName))
      );
    })
  );

  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then(networkResponse => {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        })
        .catch(() => {
          if (event.request.mode === "navigate") {
            return caches.match("./index.html");
          }
        });
    })
  );
});