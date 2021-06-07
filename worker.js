// This event is fired when the worker recieves a message from the main JavaScript
// The value of the message is in messageEvent.data
self.addEventListener("message", function(messageEvent) {
    if (messageEvent.data === "hello") {
        // Post a message back to the main JS
        self.postMessage("Hello to you too !");
    }

    if (messageEvent.data === "recurring") {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => self.postMessage(new Date()), i * 1000);
        }
    }
});

function cache(request, response) {
    if (response.type === "error" || response.type === "opaque") {
        return Promise.resolve(); // do not put in cache network errors
    }

    return caches
        .open(CACHE_NAME)
        .then(cache => cache.put(request, response.clone()));
}

self.addEventListener("fetch", event => {
    // Cache-First Strategy
    event.respondWith(
        caches
        .match(event.request) // check if the request has already been cached
        .then(cached => cached || fetch(event.request)) // otherwise request network
        .then(
            response =>
            cache(event.request, response) // put response in cache
            .then(() => response) // resolve promise with the network response
        )
    );
});