import { defineCollection } from 'astro:content'
import { glob, file } from 'astro/loaders'
import { z } from 'astro/zod'

const notes = defineCollection({
  loader: glob({ base: './src/content/notes', pattern: '*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      pubDate: z.date(),
      lastUpdated: z.date().optional(),
    }),
})

export const collections = { notes }
