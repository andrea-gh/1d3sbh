import { defineNuxtConfig } from 'nuxt/config';
import dotenv from 'dotenv';

dotenv.config();

export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      directusUrl: 'https://datastudio.ahania.com',
      directusToken: '7o5L0LDF4cakIUhpmEMoCzz5N0ee1u66',
    },
  },
  plugins: ['~/plugins/axios.js'],
});
