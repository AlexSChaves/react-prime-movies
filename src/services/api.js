import axios from 'axios';

// URL_BASE = 'https://api.themoviedb.org/3'
export const api_key = '7bccd66228dec4291aa036eae9d00ee9';

export const language = 'pt-BR';

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

// export default {api, api_key};
