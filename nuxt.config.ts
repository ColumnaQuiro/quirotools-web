// https://nuxt.com/docs/api/configuration/nuxt-config
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
    },
  },
  nitro: {
    preset: 'netlify-static'
  },
  css: [
    // 'vuetify/lib/styles/main.sass',
    // '~/assets/scss/main.scss',
    // '@mdi/font/css/materialdesignicons.css'
  ],
  // build: {
  //   transpile: ['vuetify']
  // },
  vite: {
    optimizeDeps: {
      exclude: [
        'fsevents',
      ],
    },
    resolve: {
      alias: {
        'vue-i18n': 'vue-i18n/dist/vue-i18n.esm-bundler.js',
      },
    },
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json'),
        ],
        strictMessage: false,
      }),
    ],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  sitemap: {
    hostname: 'https://chiro-tools.com',
    exclude: [
      'aviso-legal',
      'politica-de-cookies',
      'politica-de-privacidad',
      'terminos-y-condiciones',
    ],
  },
  modules: [
    'vuetify-nuxt-module',
    'nuxt-simple-sitemap'
  ],
  runtimeConfig: {
    public: {
      gtmId: 'GTM-5ZC9823M',
    },
  },
  vuetify: {
    moduleOptions: {
      importComposables: false,
      styles: { configFile: '/assets/scss/settings.scss' },
    },
  },
  sourcemap: {
    server: false,
    client: false,
  },
  experimental: {
    inlineSSRStyles: false,
  }
})
