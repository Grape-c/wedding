// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
  ],
  css: ['~/assets/css/main.css'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  routeRules: {
    // 將根路徑重定向到 HomePage
    '/': { redirect: '/HomePage' },
    // 將 404 重定向到 HomePage
    '/:pathMatch(.*)*': { redirect: '/HomePage' }
  }
})