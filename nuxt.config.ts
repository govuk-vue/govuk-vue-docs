import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      meta: [
        { property: 'og:image', content: 'https://govukvue.org/assets/images/gv-opengraph.png'},
        { property: 'og:image:alt', content: 'GOV.UK Vue'},
        { property: 'og:description', content: 'GOV.UK components for Vue'},
        { name: 'description', content: 'GOV.UK Vue provides Vue components for the GOV.UK Design System.' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'GOV.UK Vue - GOV.UK components for Vue' },
        { name: 'twitter:image:alt', content: 'GOV.UK Vue crown logo'},
        { name: 'twitter:description', content: 'GOV.UK components for Vue'}
      ],
      htmlAttrs: {
        class: 'govuk-template govuk-template--rebranded',
        lang: 'en-GB'
      },
      bodyAttrs: {
        class: 'govuk-template__body js-enabled govuk-frontend-supported'
      },
    }
  },
  components: {
    global: true,
    dirs: ['~/components','~/.generated-examples']
  },
  modules: [
    '@nuxt/content'
  ],
  vite: {
    resolve: {
      dedupe: [
        'vue'
      ]
    },
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: 'node_modules/govuk-frontend/dist/govuk/assets/*',
            dest: 'assets'
          }
        ]
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true
        }
      }
    }
  },
  content: {
    documentDriven: true,
    highlight: {
      theme: 'monokai'
    }
  },
  meta: {
    title: 'GOV.UK Vue',
  }
})
