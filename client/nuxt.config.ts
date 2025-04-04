// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
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
