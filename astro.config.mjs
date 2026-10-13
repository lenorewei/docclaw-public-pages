// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';

// Cloudflare Pages build command: npm run build
// Output directory: dist
export default defineConfig({
  output: 'static',
  // Preserve copyable CLI flags and exact prose used by publication checks.
  markdown: {
    processor: satteri({ features: { smartPunctuation: false } }),
  },
});
