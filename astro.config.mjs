import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://blackbit-studio.replit.app',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  output: 'static',
  adapter: node({
    mode: 'standalone'
  }),
  vite: {
    server: {
      host: '0.0.0.0',
      port: 5000,
      strictPort: true,
    },
    build: {
      cssCodeSplit: true,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
