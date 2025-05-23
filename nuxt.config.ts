import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/HomePage', '/'],
    },
    output: {
      dir: './dist',
      publicDir: './dist'
    }
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    baseURL: '/wedding/',
    cdnURL: '/wedding/',
    buildAssetsDir: '/static/',
    head: {
      htmlAttrs: {
        lang: 'zh-TW'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },

  routeRules: {
    '/': { redirect: '/wedding/HomePage' },
    '/wedding': { redirect: '/wedding/HomePage' }
  },

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

  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: false
  },

  typescript: {
    strict: true,
    shim: false
  },

  vite: {
    assetsInclude: ['**/*.ttf', '**/*.jpg', '**/*.png'],
    build: {
      assetsInlineLimit: 0,
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'vue': ['vue'],
            'homepage': ['./pages/HomePage.vue']
          }
        }
      }
    },
  },

  compatibilityDate: '2025-04-22',
})