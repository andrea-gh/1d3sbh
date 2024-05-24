import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const directus = axios.create({
    baseURL: config.public.directusUrl,
  });

  // Add a request interceptor
  directus.interceptors.request.use((request) => {
    if (process.server) {
      // Only include the token server-side
      request.headers.Authorization = `Bearer ${config.directusToken}`;
    }
    return request;
  });

  nuxtApp.provide('directus', directus);
});
