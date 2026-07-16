// @ts-check
import { defineConfig, fontProviders } from 'astro/config'

import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      name: 'Bricolage Grotesque',
      cssVariable: '--font-header',
      provider: fontProviders.fontsource(),
      styles: ['normal'],
      weights: ['500 600'],
    },
    {
      name: 'Chivo',
      cssVariable: '--font-sans',
      provider: fontProviders.fontsource(),
      styles: ['normal', 'italic'],
      weights: ['300 700'],
    },
  ],

  adapter: netlify(),

  trailingSlash: 'always',
})
