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
    preset: 'netlify-static',
    prerender: {
      ignore: ['/https://dashboard.chiro-tools.com/create-account']
    }
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
    'nuxt-simple-sitemap',
    '@nuxt/content',
  ],
  runtimeConfig: {
    public: {
      gtmId: 'G-W02B60F8Y5',
    },
  },
  vuetify: {
    moduleOptions: {
      importComposables: false,
      styles: { configFile: '/assets/scss/settings.scss' },
    },
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'material-theme-palenight',
        // Theme used if `html.dark`
        dark: 'github-dark',
      },
    },
    markdown: {
      toc: {
        depth: 5,
        searchDepth: 5,
      },
    },
  },
  sourcemap: {
    server: false,
    client: false,
  },
  experimental: {
    inlineSSRStyles: false,
  },
  // hooks: {
  //   'build:manifest': (manifest) => {
  //     // find the app entry, css list
  //     const css = manifest['node_modules/nuxt/dist/app/entry.js']?.css
  //     if (css) {
  //       // start from the end of the array and go to the beginning
  //       for (let i = css.length - 1; i >= 0; i--) {
  //         // if it starts with 'entry', remove it from the list
  //         if (css[i].startsWith('entry')) { css.splice(i, 1) }
  //       }
  //     }
  //   }
  // }
})
