export const apiFetch = (url: string, init?: RequestInit) => {
  const urlBase = process.env.REACT_APP_API_URL || '';

  const token = localStorage.getItem('accessToken');

  const headers = new Headers();
  headers.append('Access-Control-Allow-Origin', `*`);
  headers.append('Content-type', 'application/json; charset=utf-8');

  if (token) {
    headers.append(
      'Authorization',
      `bearer ${localStorage.getItem('accessToken')}`
    );
  }

  return fetch(urlBase + url, {
    method: 'GET',
    headers,
    ...init,
  });
};

export default apiFetch;
