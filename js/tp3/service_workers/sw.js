//Executer au moment de l'initialisation du Worker
this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                'index_SW.html',
                '../../style.css'
            ]);
        })
    );
});


this.addEventListener('fetch', function(event) {
    let response;
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
