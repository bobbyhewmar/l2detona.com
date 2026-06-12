import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  app: {
    head: {
      title: 'Lineage 2 Detona', // default fallback title
      meta: [
        { name: 'description', content: 'Lineage 2 Interlude 500x Custom PVP. ' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  modules: ['@nuxt/image', '@nuxt/fonts', '@nuxtjs/i18n'],

  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'pt-BR',
    lazy: true,
    langDir: 'locales',
    locales: [
      { code: 'pt-BR', language: 'pt-BR', file: 'pt-BR.json', name: 'Português (Brasil)' },
      { code: 'en', language: 'en-US', file: 'en.json', name: 'English' },
      { code: 'es', language: 'es-ES', file: 'es.json', name: 'Español' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'l2detona_locale',
      redirectOn: 'root',
      alwaysRedirect: false,
      fallbackLocale: 'pt-BR',
    },
    vueI18n: './i18n.config.ts',
  },
  
  fonts: {
    families: [
      // only resolve this font with the `google` provider
      { name: 'Onest', provider: 'google' },
    ]
  }
})
