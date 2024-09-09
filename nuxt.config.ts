// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['@/public/global.css'
  ],
  nitro: {
    preset: 'cloudflare-pages'
  },
  modules: ['@nuxt/image'],
  ssr: false
})