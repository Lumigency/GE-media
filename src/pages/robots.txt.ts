import type { APIRoute } from 'astro';
import { SITE } from '../config';

// On ouvre explicitement le site aux moteurs de recherche ET aux assistants IA :
// être lu par ces robots est la condition pour être cité dans leurs réponses.
const AI_BOTS = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', // OpenAI
  'ClaudeBot', 'Claude-SearchBot', 'Claude-User', // Anthropic
  'PerplexityBot', 'Perplexity-User', // Perplexity
  'Google-Extended', // Gemini
  'Applebot-Extended', 'Bingbot', 'DuckAssistBot', 'MistralAI-User', 'cohere-ai', 'Meta-ExternalAgent',
];

export const GET: APIRoute = () => {
  const lines = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /studio',
    'Disallow: /api/',
    'Disallow: /go/',
    '',
    ...AI_BOTS.flatMap((bot) => [`User-agent: ${bot}`, 'Allow: /', 'Disallow: /studio', 'Disallow: /go/', '']),
    `Sitemap: ${SITE.url}/sitemap-index.xml`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
