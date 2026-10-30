import type { APIRoute } from 'astro';
import { LIENS } from '../../data/liens';

// Redirection jauge.media/go/<outil> → site de l'outil (ou lien affilié une fois configuré).
// Redirection temporaire (302) : on peut changer la destination à tout moment.
export const prerender = false;

export const GET: APIRoute = ({ params, redirect }) => {
  const link = LIENS[params.slug ?? ''];
  if (!link) return redirect('/bons-plans', 302);
  return new Response(null, {
    status: 302,
    headers: {
      Location: link.url,
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
};
