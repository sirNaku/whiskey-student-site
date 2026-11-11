// @ts-check
import { defineConfig } from 'astro/config';

// On GitHub Pages the deploy workflow sets SITE_URL and BASE_PATH.
// Custom domain or a <user>.github.io repo: BASE_PATH is "/".
// Project repo without a custom domain: BASE_PATH is "/<repo-name>".
export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
});
