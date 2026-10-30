import type { APIRoute } from 'astro';
import { CATEGORIES, SITE } from '../config';
import { getAllArticles } from '../lib/sanity';

// llms.txt : résumé du site destiné aux assistants IA (format proposé sur llmstxt.org)
export const GET: APIRoute = async () => {
  const articles = await getAllArticles();
  const section = (slug: string) =>
    articles
      .filter((a) => a.category === slug)
      .map((a) => `- [${a.title}](${SITE.url}/${a.category}/${a.slug})${a.excerpt ? `: ${a.excerpt}` : ''}`);

  const parts = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.description}`,
    '',
    "Jauge est un média indépendant français édité par Lumigency, écrit par des entrepreneurs pour les freelances, solopreneurs et petites structures. Les contenus s'appuient sur des tests réels, des prix vérifiés et datés, et des avis assumés. Les liens affiliés sont signalés dans chaque article.",
    '',
    '## Rubriques',
    '',
    ...CATEGORIES.map((c) => `- [${c.title}](${SITE.url}/${c.slug})`),
    '',
    ...CATEGORIES.flatMap((c) => {
      const items = section(c.slug);
      return items.length ? [`## ${c.title}`, '', ...items, ''] : [];
    }),
    '## Le média',
    '',
    `- [À propos et auteurs](${SITE.url}/a-propos)`,
    `- [Bons plans testés](${SITE.url}/bons-plans)`,
    `- [Guides](${SITE.url}/guides)`,
    `- [Newsletter](${SITE.url}/newsletter)`,
    `- [Mentions légales et politique d'affiliation](${SITE.url}/mentions-legales)`,
    '',
  ];
  return new Response(parts.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
