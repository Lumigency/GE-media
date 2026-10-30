import { createClient, type SanityClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

// Mode test local : JAUGE_FIXTURE=chemin/vers/données.json exécute les requêtes sur un jeu de données local.
const fixture = import.meta.env.JAUGE_FIXTURE || process.env.JAUGE_FIXTURE;

export const sanityEnabled = Boolean(projectId) || Boolean(fixture);

// Tant que Sanity n'est pas configuré, le site se construit quand même (sans articles).
export const client: Pick<SanityClient, 'fetch'> | null = fixture
  ? await fixtureClient(fixture)
  : projectId
    ? createClient({ projectId, dataset, apiVersion: '2026-10-01', useCdn: false, perspective: 'published' })
    : null;

async function fixtureClient(file: string) {
  const { parse, evaluate } = await import('groq-js');
  const fs = await import('node:fs');
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  return {
    fetch: async (q: string, params: Record<string, unknown> = {}) =>
      (await evaluate(parse(q, { params }), { dataset: data, params })).get(),
  } as any;
}

const builder = sanityEnabled ? createImageUrlBuilder({ projectId: projectId || 'fixture', dataset }) : null;

export function imageUrl(source: any, width = 1200, height?: number): string | undefined {
  if (!builder || !source?.asset) return undefined;
  let b = builder.image(source).width(width).auto('format').quality(80);
  if (height) b = b.height(height).fit('crop');
  return b.url();
}

async function fetchSafe<T>(query: string, params: Record<string, unknown> = {}, fallback: T): Promise<T> {
  if (!client) return fallback;
  return (await client.fetch<T>(query, params)) ?? fallback;
}

export interface ArticleCard {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  category: string;
  subcategory?: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime?: number;
  mainImage?: any;
  featured?: boolean;
  noindex?: boolean;
}

const CARD_FIELDS = `
  _id, title, "slug": slug.current, excerpt, category,
  subcategory, publishedAt, updatedAt, mainImage, featured, noindex,
  "readingTime": round(length(pt::text(body)) / 1200) + 1
`;

const LISTABLE = `_type == "article" && defined(slug.current) && defined(category) && publishedAt <= now()`;

export const getAllArticles = () =>
  fetchSafe<ArticleCard[]>(`*[${LISTABLE}] | order(publishedAt desc){${CARD_FIELDS}}`, {}, []);

export const getArticlesByCategory = (category: string) =>
  fetchSafe<ArticleCard[]>(
    `*[${LISTABLE} && category == $category] | order(publishedAt desc){${CARD_FIELDS}}`,
    { category },
    []
  );

export const getFeaturedArticles = (limit = 5) =>
  fetchSafe<ArticleCard[]>(`*[${LISTABLE} && featured == true] | order(publishedAt desc)[0...$limit]{${CARD_FIELDS}}`, { limit }, []);

export const getLatestArticles = (limit = 6) =>
  fetchSafe<ArticleCard[]>(`*[${LISTABLE}] | order(publishedAt desc)[0...$limit]{${CARD_FIELDS}}`, { limit }, []);

export const getFullArticles = () =>
  fetchSafe<any[]>(
    `*[${LISTABLE}] | order(publishedAt desc){
      ${CARD_FIELDS}, seoTitle, seoDescription, keyTakeaways, faq, noindex,
      "heroCredit": mainImage.asset->creditLine,
      body[]{..., _type == "image" => {..., "credit": asset->creditLine}},
      "author": author->{name, "slug": slug.current, role, bio, photo, linkedin, website},
      "related": related[]->{${CARD_FIELDS}}
    }`,
    {},
    []
  );

export const getAuthors = () =>
  fetchSafe<any[]>(`*[_type == "author" && defined(slug.current)]{name, "slug": slug.current, role, bio, photo, linkedin, website}`, {}, []);

export function formatDate(iso?: string) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}
