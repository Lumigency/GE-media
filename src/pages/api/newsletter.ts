import type { APIRoute } from 'astro';

// Inscription newsletter → contact ajouté à une liste Brevo.
// Variables Vercel requises : BREVO_API_KEY et BREVO_LIST_ID.
export const prerender = false;

const isEmail = (v: unknown): v is string => typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

async function readBody(request: Request): Promise<Record<string, unknown>> {
  const type = request.headers.get('content-type') || '';
  if (type.includes('application/json')) return request.json().catch(() => ({}));
  const form = await request.formData().catch(() => null);
  return form ? Object.fromEntries(form.entries()) : {};
}

export const POST: APIRoute = async ({ request, redirect }) => {
  const isJson = (request.headers.get('content-type') || '').includes('application/json');
  const reply = (status: number, message: string) =>
    isJson
      ? new Response(JSON.stringify({ message }), { status, headers: { 'Content-Type': 'application/json' } })
      : redirect(status < 300 ? '/newsletter?inscription=ok' : '/newsletter?inscription=erreur', 303);

  const body = await readBody(request);
  if (!isEmail(body.email)) return reply(400, 'Cette adresse email ne semble pas valide.');

  const apiKey = import.meta.env.BREVO_API_KEY;
  const listId = Number(import.meta.env.BREVO_LIST_ID);
  if (!apiKey || !listId) return reply(503, "L'inscription n'est pas encore ouverte. Reviens très vite !");

  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: { 'api-key': apiKey, 'Content-Type': 'application/json', accept: 'application/json' },
    body: JSON.stringify({
      email: body.email.trim().toLowerCase(),
      listIds: [listId],
      updateEnabled: true,
      attributes: { SOURCE: typeof body.source === 'string' ? body.source.slice(0, 100) : 'site' },
    }),
  });

  // 201 = créé, 204 = déjà inscrit et mis à jour
  if (res.ok) return reply(200, 'Inscription confirmée.');
  console.error('Brevo newsletter', res.status, await res.text().catch(() => ''));
  return reply(502, "Oups, l'inscription n'a pas fonctionné. Réessaie dans un instant.");
};
