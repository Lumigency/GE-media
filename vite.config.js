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
        article:    resolve(__dirname, 'article.html'),
        outils:     resolve(__dirname, 'outils.html'),
        newsletter: resolve(__dirname, 'newsletter.html'),
        'a-propos': resolve(__dirname, 'a-propos.html'),
        'categorie-acquisition': resolve(__dirname, 'categorie-acquisition.html'),
        'categorie-assurances-finances': resolve(__dirname, 'categorie-assurances-finances.html'),
        'categorie-ia-automatisation': resolve(__dirname, 'categorie-ia-automatisation.html'),
        'categorie-outils-logiciels': resolve(__dirname, 'categorie-outils-logiciels.html'),
      },
    },
  },
});
