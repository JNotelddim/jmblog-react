export const initializeServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(
      process.env.PUBLIC_URL + '/serviceWorker.js'
    );
  } else {
    // throw new Error('Current browser does not support service workers.');
    console.log('[SW] cannot init service worker');
  }
};
