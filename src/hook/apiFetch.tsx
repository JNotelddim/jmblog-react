export const apiFetch = (url: string, init?: RequestInit) => {
  const urlBase = process.env.REACT_APP_API_URL || '';

  const headers = new Headers();
  headers.append('Access-Control-Allow-Origin', `*`);
  headers.append('Content-type', 'application/json; charset=utf-8');

  return fetch(urlBase + url, {
    method: 'GET',
    headers,
    ...init,
  });
};

export default apiFetch;
