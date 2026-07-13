import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main:       resolve(__dirname, 'index.html'),
        categories: resolve(__dirname, 'categories.html'),
        articles:   resolve(__dirname, 'articles.html'),
        guides:    resolve(__dirname, 'guides.html'),
        outils:     resolve(__dirname, 'outils.html'),
        newsletter: resolve(__dirname, 'newsletter.html'),
        'a-propos': resolve(__dirname, 'a-propos.html'),
        'acquisition-growth': resolve(__dirname, 'acquisition-growth.html'),
        'finance-assurances': resolve(__dirname, 'finance-assurances.html'),
        'ia-automatisation': resolve(__dirname, 'ia-automatisation.html'),
        'outils-logiciels': resolve(__dirname, 'outils-logiciels.html'),
      },
    },
  },
});
