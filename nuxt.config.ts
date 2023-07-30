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
  css: [
    '@/assets/css/_normalize.css',
    '@/assets/css/_main.css',
    '@/assets/css/_fonts.css',
    '@/assets/css/_typography.css',
    '@/assets/css/_variables.css',
  ],
  modules: ['@pinia/nuxt'],
});
