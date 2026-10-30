import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { SITE } from '../config';
import { getAllArticles } from '../lib/sanity';

export const GET: APIRoute = async (context) => {
  const articles = await getAllArticles();
  return rss({
    title: 'Jauge — les derniers articles',
    description: SITE.description,
    site: context.site ?? SITE.url,
    customData: '<language>fr-fr</language>',
    trailingSlash: false,
    items: articles.map((a) => ({
      title: a.title,
      description: a.excerpt,
      pubDate: new Date(a.publishedAt),
      link: `/${a.category}/${a.slug}`,
    })),
  });
};
