// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
    },
  },
  app: {
    head: {
      title: 'ToDo App',
    },
  },
  modules: [
    'vuetify-nuxt-module',
    'nuxt-mdi',
    '@nuxt/test-utils/module',
    '@pinia/nuxt',
  ],
  mdi: {
    componentName: 'MdiIcon',
    defaultSize: '1.5em',
  },
});
