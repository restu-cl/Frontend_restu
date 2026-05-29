// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://restu-cl.github.io/Frontend_restu',
  base: '/Frontend_restu',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
