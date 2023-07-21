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
        class: 'govuk-template'
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
    server: {
      fs: {
        allow: ["C:/Users/Matt/Documents/GitHub/govuk-vue/dist"]
      }
    },
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
