this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                '/service_workers/',
                '/service_workers/index.html',
                '/service_workers/style.css',
                '/service_workers/app.js',
                '/service_workers/image-list.js',
                '/service_workers/star-wars-logo.jpg',
                '/service_workers/gallery/',
                '/service_workers/gallery/bountyHunters.jpg',
                '/service_workers/gallery/myLittleVader.jpg',
                '/service_workers/gallery/snowTroopers.jpg'
            ]);
        })
    );
});

this.addEventListener('fetch', function(event) {
    var response;
    event.respondWith(caches.match(event.request).catch(function() {
        return fetch(event.request);
    }).then(function(r) {
        response = r;
        caches.open('v1').then(function(cache) {
            cache.put(event.request, response);
        });
        return response.clone();
    }).catch(function() {
        return caches.match('/sw-test/gallery/myLittleVader.jpg');
    }));
});