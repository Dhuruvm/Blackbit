import { defineConfig, envField } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://blackbit-studio.replit.app',
  env: {
    schema: {
      SANITY_PROJECT_ID: envField.string({ 
        context: "server", 
        access: "secret",
        optional: true,
        default: ""
      }),
      SANITY_DATASET: envField.string({ 
        context: "server", 
        access: "secret",
        default: "production"
      }),
      SANITY_API_VERSION: envField.string({ 
        context: "server", 
        access: "secret",
        default: "2024-01-01"
      }),
      SANITY_TOKEN: envField.string({ 
        context: "server", 
        access: "secret",
        optional: true,
        default: ""
      }),
      CONTACT_EMAIL: envField.string({ 
        context: "server", 
        access: "secret",
        optional: true,
        default: "hello@blackbit.studio"
      }),
      SITE_URL: envField.string({ 
        context: "server", 
        access: "public",
        default: "https://blackbit-studio.replit.app"
      }),
      GA_MEASUREMENT_ID: envField.string({ 
        context: "client", 
        access: "public",
        optional: true,
        default: ""
      }),
    },
    validateSecrets: false
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  vite: {
    server: {
      host: '0.0.0.0',
      port: 5000,
      strictPort: true,
      hmr: {
        clientPort: 5000,
      },
      allowedHosts: ['.replit.dev', '.replit.app', 'localhost'],
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
