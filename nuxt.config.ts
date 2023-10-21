import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      meta: [
        { property: 'og:image', content: 'https://govukvue.org//assets/images/gv-opengraph.png'},
        { property: 'og:image:alt', content: 'GOV.UK Vue'},
        { property: 'og:description', content: 'Vue versions of every GOV.UK component'},
        { name: 'description', content: 'GOV.UK Vue provides Vue implementations of every component in the GOV.UK Design System.' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'GOV.UK Vue' },
        { name: 'twitter:image', content: 'https://govukvue.org/assets/images/gv-twitter.png'},
        { name: 'twitter:image:alt', content: 'GOV.UK Vue crown logo'},
        { name: 'twitter:description', content: 'Vue versions of every GOV.UK component'}
      ],
      htmlAttrs: {
        class: 'govuk-template',
        lang: 'en-GB'
      },
      bodyAttrs: {
        class: 'govuk-template__body js-enabled'
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
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: 'node_modules/govuk-frontend/govuk/assets/*',
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
