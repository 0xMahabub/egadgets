export * from './fetchCatagories';

// export API endpoint
let API_ENDPOINT = '';

if (import.meta.env.DEV) {
  API_ENDPOINT =
    'http://' +
    window.location.hostname +
    ':' +
    window.location.port +
    '/.netlify/functions';
} else if (import.meta.env.PROD) {
  API_ENDPOINT = 'https://' + window.location.hostname + '/.netlify/functions';
}

export { API_ENDPOINT };
