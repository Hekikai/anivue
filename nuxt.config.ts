// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  /**
   * https://nuxt.com/docs/api/configuration/nuxt-config#typescript
   */
  typescript: {
    shim: false,
    strict: true,
    typeCheck: false,
  },
  srcDir: 'src/',
  css: ['@/assets/css/_main.css', '@/assets/css/_normalize.css'],
  modules: ['@pinia/nuxt', '@unocss/nuxt'],
})
  modules: ['@pinia/nuxt'],
});
