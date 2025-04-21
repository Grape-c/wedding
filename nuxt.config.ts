import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  nitro: {
    preset: 'static'
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    baseURL: '/wedding/'
  },
  // routeRules: {
  //   '/': { redirect: '/HomePage' },
  //   '/:pathMatch(.*)*': { redirect: '/HomePage' }
  // },
  // compatibilityDate: '2025-04-21',
  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/image'
  ],

  css: [
    '@/assets/css/main.css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2025-04-21',
})