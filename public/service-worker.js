// public/service-worker.js

self.addEventListener("install", (event) => {
  console.log("Service Worker installing.");
  // Perform install steps
  event.waitUntil(
    caches.open("v1").then((cache) => {
      console.log("Opened cache");
      return cache.addAll([
        "/",
        "/index.html",
        "/assets",
        "/splash-screen.css"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log("Service Worker fetching.");
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
