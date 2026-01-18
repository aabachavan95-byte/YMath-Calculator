
const CACHE_NAME = 'yashavi-math-v2';
const URLS_TO_CACHE = [
  './',
  './index.html',
  './index.tsx',
  'https://cdn.tailwindcss.com',
  'https://aistudiocdn.com/react@^19.1.1',
  'https://aistudiocdn.com/react-dom@^19.1.1',
  'https://aistudiocdn.com/@google/genai@^1.20.0',
  'https://aistudiocdn.com/react-markdown@^10.1.0',
  'https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;700&display=swap'
];

self.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        // Attempt to cache critical assets individually so one failure doesn't break the rest
        return Promise.all(
            URLS_TO_CACHE.map(url => {
                return cache.add(url).catch(err => {
                    console.warn('Failed to pre-cache ' + url, err);
                });
            })
        );
      })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Clean up old caches
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);

  // Do not cache API calls to Google GenAI or other API endpoints
  if (requestUrl.hostname.includes('generativelanguage.googleapis.com') || 
      requestUrl.hostname.includes('google.com') || 
      requestUrl.pathname.includes('gemini')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request because it's a stream and can only be consumed once
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          (response) => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic' && response.type !== 'cors' && response.type !== 'opaque') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                // Use put for runtime caching
                // Ignore errors (like quota exceeded)
                try {
                    cache.put(event.request, responseToCache);
                } catch (err) {
                    console.warn('Failed to cache runtime request', err);
                }
              });

            return response;
          }
        ).catch((err) => {
            // Network failure
            console.log('Fetch failed:', err);
        });
      })
  );
});
