// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    auth: {
      computed: {}, // Required for nuxt-auth, not sure why
    },
  },
  build: {
    transpile: ['trpc-nuxt'],
  },
  srcDir: 'src',
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxt/devtools',
    '@sidebase/nuxt-auth',
  ],
  auth: {
    provider: {
      type: 'authjs',
    },
    globalAppMiddleware: {
      isEnabled: true,
      allow404WithoutAuth: true,
      addDefaultCallbackUrl: true,
    },
  },
  components: [
    '~/components',
  ],
  i18n: {
    vueI18n: './i18n.config.ts',
  },
})
