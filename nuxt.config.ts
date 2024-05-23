import { defineNuxtConfig } from 'nuxt/config';
import dotenv from 'dotenv';

dotenv.config();

export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      directusUrl: process.env.DIRECTUS_URL,
      directusToken: process.env.DIRECTUS_TOKEN,
    },
  },
  plugins: ['~/plugins/axios.js'],
});
