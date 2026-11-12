import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const notes = defineCollection({
  loader: glob({ base: './src/content/notes', pattern: '*.md' }),
  schema: () =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      pubDate: z.date(),
      lastUpdated: z.date().optional(),
    }),
})

export const collections = { notes }
