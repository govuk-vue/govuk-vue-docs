// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],
  vite: {
    server: {
      fs: {
        allow: ["C:/Users/Matt/Documents/GitHub/govuk-vue/dist"]
      }
    }
  }
})
