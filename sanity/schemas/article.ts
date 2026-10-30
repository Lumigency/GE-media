import { defineArrayMember, defineField, defineType } from 'sanity';
import { CATEGORIES, SUBCATEGORIES } from '../../src/config';

const subcategoryOptions = CATEGORIES.flatMap((c) =>
  (SUBCATEGORIES[c.slug] ?? []).map((s) => ({ title: `${c.title} › ${s.label}`, value: s.value }))
);

export const article = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  groups: [
    { name: 'contenu', title: 'Contenu', default: true },
    { name: 'classement', title: 'Classement' },
    { name: 'seo', title: 'SEO & IA' },
  ],
  fields: [
    defineField({ name: 'title', title: 'Titre', type: 'string', group: 'contenu', validation: (r) => r.required().max(110) }),
    defineField({
      name: 'slug',
      title: 'Adresse de la page (slug)',
      type: 'slug',
      group: 'contenu',
      description: "Générée depuis le titre. Ne plus la modifier une fois l'article publié.",
      options: { source: 'title', maxLength: 80 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Chapeau',
      type: 'text',
      rows: 3,
      group: 'contenu',
      description: "2 phrases qui donnent envie. Affiché sur les cartes et en description si le champ SEO est vide.",
      validation: (r) => r.required().max(220),
    }),
    defineField({
      name: 'keyTakeaways',
      title: "L'essentiel (réponse directe)",
      type: 'array',
      group: 'contenu',
      of: [defineArrayMember({ type: 'string' })],
      description:
        "3 à 5 phrases qui répondent directement à la question de l'article, avec des faits précis (prix, chiffres, verdict). C'est le passage que Google et les IA reprennent en priorité.",
      validation: (r) => r.max(6),
    }),
    defineField({
      name: 'mainImage',
      title: 'Image principale',
      type: 'image',
      group: 'contenu',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Description (texte alternatif)', type: 'string', validation: (r) => r.required() })],
    }),
    defineField({ name: 'body', title: 'Corps de l’article', type: 'blockContent', group: 'contenu' }),
    defineField({
      name: 'faq',
      title: 'Questions fréquentes',
      type: 'array',
      group: 'contenu',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'faqItem',
          fields: [
            defineField({ name: 'question', title: 'Question', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'answer', title: 'Réponse', type: 'text', rows: 3, validation: (r) => r.required() }),
          ],
          preview: { select: { title: 'question', subtitle: 'answer' } },
        }),
      ],
    }),

    defineField({
      name: 'category',
      title: 'Jauge',
      type: 'string',
      group: 'classement',
      options: { list: CATEGORIES.map((c) => ({ title: c.title, value: c.slug })), layout: 'radio' },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'subcategory',
      title: 'Rubrique',
      type: 'string',
      group: 'classement',
      options: { list: subcategoryOptions },
      validation: (r) =>
        r.custom((value, ctx) => {
          if (!value) return true;
          const cat = (ctx.document as any)?.category;
          return (SUBCATEGORIES[cat] ?? []).some((s) => s.value === value) || 'Cette rubrique n’appartient pas à la jauge choisie.';
        }),
    }),
    defineField({ name: 'author', title: 'Auteur·rice', type: 'reference', to: [{ type: 'author' }], group: 'classement', validation: (r) => r.required() }),
    defineField({
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
      group: 'classement',
      initialValue: () => new Date().toISOString(),
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'updatedAt',
      title: 'Dernière mise à jour du contenu',
      type: 'datetime',
      group: 'classement',
      description: 'À renseigner quand tu mets réellement à jour l’article (prix, tests…). Affiché aux lecteurs et aux moteurs.',
    }),
    defineField({ name: 'featured', title: 'À la une', type: 'boolean', group: 'classement', initialValue: false, description: 'Affiché dans le carrousel d’accueil et le pied de page.' }),
    defineField({
      name: 'related',
      title: 'À lire aussi',
      type: 'array',
      group: 'classement',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'article' }] })],
      validation: (r) => r.max(3),
    }),

    defineField({ name: 'seoTitle', title: 'Titre SEO', type: 'string', group: 'seo', description: '60 caractères max. Par défaut : le titre.', validation: (r) => r.max(65) }),
    defineField({ name: 'seoDescription', title: 'Description SEO', type: 'text', rows: 2, group: 'seo', description: '155 caractères max. Par défaut : le chapeau.', validation: (r) => r.max(160) }),
    defineField({ name: 'noindex', title: 'Masquer aux moteurs de recherche', type: 'boolean', group: 'seo', initialValue: false }),
  ],
  orderings: [{ title: 'Date de publication', name: 'publishedDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
  preview: {
    select: { title: 'title', category: 'category', media: 'mainImage', date: 'publishedAt' },
    prepare: ({ title, category, media, date }) => ({
      title,
      media,
      subtitle: [CATEGORIES.find((c) => c.slug === category)?.title, date && new Date(date).toLocaleDateString('fr-FR')].filter(Boolean).join(' · '),
    }),
  },
});
