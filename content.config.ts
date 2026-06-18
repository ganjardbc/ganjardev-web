import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    landing_en: defineCollection({
      type: 'page',
      source: 'en.md'
    }),
    landing_id: defineCollection({
      type: 'page',
      source: 'id.md'
    })
  }
})
