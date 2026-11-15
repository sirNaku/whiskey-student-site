// @ts-check
import { defineConfig } from 'astro/config';

// On GitHub Pages the deploy workflow sets SITE_URL and BASE_PATH.
export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
});
