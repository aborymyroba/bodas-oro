// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://bodas-oro-2026.web.app',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});