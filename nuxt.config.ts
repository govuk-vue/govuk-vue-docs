import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      meta: [
        { property: 'og:image', content: '/assets/images/opengraph-image.png'},
        { property: 'og:image:alt', content: 'GOV.UK Vue'}
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
