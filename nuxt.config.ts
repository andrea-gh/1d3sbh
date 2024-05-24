// nuxt.config.js
import { defineNuxtConfig } from 'nuxt/config';
import dotenv from 'dotenv';

dotenv.config();

export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    directusUrl: process.env.DIRECTUS_URL,
    directusToken: process.env.DIRECTUS_TOKEN, // This is not exposed to the client
    public: {
      directusUrl: process.env.DIRECTUS_URL, // Only expose the URL, not the token
    },
  },
  plugins: ['~/plugins/axios.js'],
});
