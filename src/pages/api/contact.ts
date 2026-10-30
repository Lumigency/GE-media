import type { APIRoute } from 'astro';
import { SITE } from '../../config';

// Formulaire de contact → email envoyé via Brevo (emails transactionnels).
// Variables Vercel : BREVO_API_KEY, CONTACT_TO_EMAIL (destinataire) et CONTACT_FROM_EMAIL (expéditeur validé dans Brevo).
export const prerender = false;

const clean = (v: unknown, max = 5000) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
const escape = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export const POST: APIRoute = async ({ request, redirect }) => {
  const isJson = (request.headers.get('content-type') || '').includes('application/json');
  const data: Record<string, unknown> = isJson
    ? await request.json().catch(() => ({}))
    : Object.fromEntries(((await request.formData().catch(() => null)) ?? new FormData()).entries());

  const reply = (status: number, message: string) =>
    isJson
      ? new Response(JSON.stringify({ message }), { status, headers: { 'Content-Type': 'application/json' } })
      : redirect(status < 300 ? '/contact?envoi=ok' : '/contact?envoi=erreur', 303);

  const prenom = clean(data.prenom, 100);
  const email = clean(data.email, 200);
  const sujet = clean(data.sujet, 100) || 'Contact';
  const message = clean(data.message);
  if (!prenom || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || message.length < 5) {
    return reply(400, 'Merci de remplir ton prénom, un email valide et ton message.');
  }
  if (!data.rgpd) return reply(400, 'Merci de cocher la case de consentement.');

  const apiKey = import.meta.env.BREVO_API_KEY;
  const to = import.meta.env.CONTACT_TO_EMAIL || SITE.contactEmail;
  const from = import.meta.env.CONTACT_FROM_EMAIL || SITE.contactEmail;
  if (!apiKey) return reply(503, `Le formulaire n'est pas encore branché. Écris-nous directement à ${to}.`);

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': apiKey, 'Content-Type': 'application/json', accept: 'application/json' },
    body: JSON.stringify({
      sender: { name: 'Jauge — formulaire', email: from },
      to: [{ email: to }],
      replyTo: { email, name: prenom },
      subject: `[Jauge] ${sujet} — ${prenom}`,
      htmlContent: `<p><strong>${escape(prenom)}</strong> (${escape(email)}) — ${escape(sujet)}</p><p>${escape(message).replace(/\n/g, '<br>')}</p>`,
    }),
  });

  if (res.ok) return reply(200, 'Message envoyé.');
  console.error('Brevo contact', res.status, await res.text().catch(() => ''));
  return reply(502, `L'envoi a échoué. Écris-nous directement à ${to}.`);
};
