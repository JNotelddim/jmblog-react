export const initializeServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    console.log('[SW] registering service worker', process.env.PUBLIC_URL);
    navigator.serviceWorker
      .register('./serviceWorker.js')
      .then(function (registration) {
        // Registration was successful
        console.log(
          '[SW] registration successful with scope: ',
          registration.scope
        );
      })
      .catch(function (error) {
        console.log('[SW] registration error', error);
      });
  } else {
    // throw new Error('Current browser does not support service workers.');
    console.log('[SW] cannot init service worker');
  }
};
