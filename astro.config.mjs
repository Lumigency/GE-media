import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import sanity from '@sanity/astro';

const env = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), '');
const projectId = env.PUBLIC_SANITY_PROJECT_ID;
const dataset = env.PUBLIC_SANITY_DATASET || 'production';

// Le Studio Sanity (espace d'écriture sur /studio) n'est activé qu'une fois le projet Sanity créé.
const sanityIntegrations = projectId
  ? [sanity({ projectId, dataset, useCdn: false, apiVersion: '2026-10-01', studioBasePath: '/studio' }), react()]
  : [];

export default defineConfig({
  site: 'https://jauge.media',
  trailingSlash: 'never',
  build: { format: 'file' },
  output: 'static',
  adapter: vercel({ webAnalytics: { enabled: true } }),
  integrations: [
    ...sanityIntegrations,
    sitemap({
      filter: (page) => !/\/(studio|api|404)/.test(page),
    }),
  ],
});
