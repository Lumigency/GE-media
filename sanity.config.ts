import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { frFRLocale } from '@sanity/locale-fr-fr';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import { article } from './sanity/schemas/article';
import { author } from './sanity/schemas/author';
import { blockContent } from './sanity/schemas/blockContent';
import { SANITY } from './src/config';

export default defineConfig({
  name: 'jauge',
  title: 'Jauge',
  projectId: SANITY.projectId,
  dataset: SANITY.dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenus')
          .items([
            S.documentTypeListItem('article').title('Articles'),
            S.documentTypeListItem('author').title('Auteur·rices'),
          ]),
    }),
    visionTool(),
    // Recherche de photos Unsplash (libres de droits) directement dans les champs image
    unsplashImageAsset(),
    frFRLocale(),
  ],
  schema: { types: [article, author, blockContent] },
});
