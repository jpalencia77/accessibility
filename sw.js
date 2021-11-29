const CACHE_NAME = 'v1_cache_carrusel_jaime',
  urlsToCache = [
    './',
    './style.css',
    './carrusel2.js',
    './serviceWorker.js',
    './img/imagen0.jpg',
    './img/imagen1.jpg',
    './img/imagen2.jpg',
    './img/imagen3.jpg',
    './img/imagen4.jpg',
    './img/icono.png'

  ]
  self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
          .then(cache => {
            return cache.addAll(urlsToCache)
              .then(() => self.skipWaiting())
          })
          .catch(err => console.log('Falló registro de cache', err))
      )

  })
  self.addEventListener('activate', e => {
    const cacheWhitelist = [CACHE_NAME]

    e.waitUntil(
      caches.keys()
        .then(cacheNames => {
          return Promise.all(
            cacheNames.map(cacheName => {
              //Eliminamos lo que ya no se necesita en cache
              if (cacheWhitelist.indexOf(cacheName) === -1) {
                return caches.delete(cacheName)
              }
            })
          )
        })
        // Le indica al SW activar el cache actual
        .then(() => self.clients.claim())
    )
      
})
self.addEventListener('fetch', e => {
     //Responder ya sea con el objeto en caché o continuar y buscar la url real
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) {
          //recuperar del cache
          return res
        }
        //recuperar de la petición a la url
        return fetch(e.request)
      })
  )
      
})

