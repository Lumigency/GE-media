// Liens internes : jauge-media.com, ancienne adresse Vercel (ge-media*.vercel.app) ou chemin relatif.
const INTERNAL_HOST = /^(www\.)?jauge-media\.com$|^ge-media[a-z0-9-]*\.vercel\.app$/i;

export function internalPath(href: string): string | null {
  if (!href) return null;
  if (href.startsWith('/') || href.startsWith('#')) return href;
  try {
    const u = new URL(href);
    if (INTERNAL_HOST.test(u.hostname)) return (u.pathname + u.search + u.hash) || '/';
  } catch {}
  return null;
}
