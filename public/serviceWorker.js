/* eslint-disable no-restricted-globals */
// https://blog.ropnop.com/storing-tokens-in-browser/
// copied from https://github.com/ropnop/tokenstorage/blob/master/serviceWorker.js
/// <reference lib="WebWorker" />

// These listeners will make the service worker immediately available for the page
self.addEventListener('install', function (event) {
  event.waitUntil(self.skipWaiting());
  console.log('[SW] serviceworker installed!');
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
  console.log('[SW] serviceworker ready!');
});

// Hardocded checks for origins/paths to send credentials to
const whitelistedOrigins = [
  'http://localhost', // dev
  'http://localhost:3000', // dev
  'http://localhost:8007', // dev
  'https:jaredm.online//', // prod
];

const whitelistedPathRegex = /\/api\/[^.]*$/; // anything under /api

// Global token variable in the service worker
let token = '';

// Exposed "method" for saving the token
self.addEventListener('message', function (event) {
  console.log('message event', event);
  if (event.data && event.data.type === 'SET_TOKEN') {
    token = event.data.token;
    console.log('[SW] token set!');
  }
  if (event.data && event.data.type === 'CLEAR_TOKEN') {
    token = '';
    console.log('[SW] token cleared!');
  }
});

// Helper function to add the auth header if the oubound request matches the whitelists
const addAuthHeader = function (event) {
  const destURL = new URL(event.request.url);
  if (
    whitelistedOrigins.includes(destURL.origin) &&
    whitelistedPathRegex.test(destURL.pathname)
  ) {
    const modifiedHeaders = new Headers(event.request.headers);
    if (token) {
      modifiedHeaders.append('Authorization', token);
    }
    const authReq = new Request(event.request, {
      headers: modifiedHeaders,
      mode: 'cors',
    });
    event.respondWith((async () => fetch(authReq))());
  }
};

// Intercept all fetch requests and add the auth header
self.addEventListener('fetch', addAuthHeader);
