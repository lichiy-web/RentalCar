import axios from 'axios';

export const substitution = { perPage: 'limit' };

const appApiConfig = {
  baseURL: import.meta.env.VITE_SERVER_BASE_URL,
  timeout: 4000,
};

export const appApi = axios.create(appApiConfig);
