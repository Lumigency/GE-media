import type { APIRoute } from 'astro';
import { CATEGORIES, SITE } from '../config';
import { getAllArticles } from '../lib/sanity';

// Sitemap généré à partir du contenu réel :
// - une jauge n'y figure qu'à partir de son 1er article publié (avant, elle est en noindex)
// - les articles marqués « Masquer aux moteurs » dans Sanity sont exclus
const STATIC_PAGES = ['/', '/categories', '/guides', '/bons-plans', '/newsletter', '/a-propos', '/contact', '/mentions-legales'];

export const GET: APIRoute = async () => {
  const articles = (await getAllArticles()).filter((a) => !a.noindex);

  const lastByCategory = new Map<string, string>();
  for (const a of articles) {
    const d = a.updatedAt || a.publishedAt;
    if (!lastByCategory.has(a.category) || d > lastByCategory.get(a.category)!) lastByCategory.set(a.category, d);
  }

  const urls: { loc: string; lastmod?: string }[] = [
    ...STATIC_PAGES.map((p) => ({ loc: `${SITE.url}${p === '/' ? '' : p}` })),
    ...CATEGORIES.filter((c) => lastByCategory.has(c.slug)).map((c) => ({
      loc: `${SITE.url}/${c.slug}`,
      lastmod: lastByCategory.get(c.slug),
    })),
    ...articles.map((a) => ({ loc: `${SITE.url}/${a.category}/${a.slug}`, lastmod: a.updatedAt || a.publishedAt })),
  ];

  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls
      .map((u) => `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${new Date(u.lastmod).toISOString()}</lastmod>` : ''}</url>`)
      .join('\n') +
    '\n</urlset>\n';

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
