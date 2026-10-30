import { defineArrayMember, defineField, defineType } from 'sanity';

// Corps d'article : texte riche + blocs spéciaux (encadré affilié, tableau comparatif, astuce, image)
export const blockContent = defineType({
  name: 'blockContent',
  title: 'Contenu',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Paragraphe', value: 'normal' },
        { title: 'Titre de section (H2)', value: 'h2' },
        { title: 'Sous-titre (H3)', value: 'h3' },
        { title: 'Citation', value: 'blockquote' },
      ],
      lists: [
        { title: 'Puces', value: 'bullet' },
        { title: 'Numérotée', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Gras', value: 'strong' },
          { title: 'Italique', value: 'em' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Lien',
            fields: [
              defineField({
                name: 'href',
                title: 'URL',
                type: 'url',
                validation: (r) => r.uri({ allowRelative: true, scheme: ['http', 'https', 'mailto'] }),
              }),
              defineField({
                name: 'affiliate',
                title: 'Lien affilié',
                type: 'boolean',
                description: 'À cocher pour tout lien rémunéré (ajoute rel="sponsored" et la mention de transparence).',
                initialValue: false,
              }),
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      title: 'Image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Description (texte alternatif)', type: 'string', validation: (r) => r.required() }),
        defineField({ name: 'caption', title: 'Légende', type: 'string' }),
      ],
    }),
    defineArrayMember({
      name: 'callout',
      title: 'Encadré astuce / attention',
      type: 'object',
      fields: [
        defineField({
          name: 'tone',
          title: 'Type',
          type: 'string',
          options: { list: [{ title: 'Astuce', value: 'tip' }, { title: 'Attention', value: 'warning' }, { title: 'Notre avis', value: 'verdict' }], layout: 'radio' },
          initialValue: 'tip',
        }),
        defineField({ name: 'title', title: 'Titre', type: 'string' }),
        defineField({ name: 'text', title: 'Texte', type: 'text', rows: 4, validation: (r) => r.required() }),
      ],
      preview: { select: { title: 'title', subtitle: 'text' }, prepare: ({ title, subtitle }) => ({ title: title || 'Encadré', subtitle }) },
    }),
    defineArrayMember({
      name: 'affiliateBox',
      title: 'Encadré outil recommandé (affilié)',
      type: 'object',
      fields: [
        defineField({ name: 'tool', title: 'Outil', type: 'string', validation: (r) => r.required() }),
        defineField({ name: 'logo', title: 'Logo', type: 'image' }),
        defineField({ name: 'pitch', title: 'Pourquoi on le recommande', type: 'text', rows: 3, validation: (r) => r.required() }),
        defineField({ name: 'offer', title: 'Offre du moment', type: 'string', description: 'Ex. « 1 mois offert », « -20 % la 1re année »' }),
        defineField({ name: 'url', title: 'Lien affilié', type: 'url', validation: (r) => r.required() }),
        defineField({ name: 'cta', title: 'Texte du bouton', type: 'string', initialValue: 'Essayer' }),
      ],
      preview: { select: { title: 'tool', subtitle: 'offer', media: 'logo' } },
    }),
    defineArrayMember({
      name: 'comparisonTable',
      title: 'Tableau comparatif',
      type: 'object',
      fields: [
        defineField({ name: 'caption', title: 'Titre du tableau', type: 'string' }),
        defineField({ name: 'columns', title: 'En-têtes de colonnes', type: 'array', of: [{ type: 'string' }], validation: (r) => r.min(2) }),
        defineField({
          name: 'rows',
          title: 'Lignes',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'row',
              fields: [{ name: 'cells', title: 'Cellules', type: 'array', of: [{ type: 'string' }] }],
              preview: { select: { cells: 'cells' }, prepare: ({ cells }) => ({ title: (cells || []).join(' · ') }) },
            },
          ],
        }),
        defineField({ name: 'source', title: 'Source / date de vérification', type: 'string', description: 'Ex. « Tarifs vérifiés le 30/10/2026 sur les sites officiels »' }),
      ],
      preview: { select: { title: 'caption' }, prepare: ({ title }) => ({ title: title || 'Tableau comparatif' }) },
    }),
  ],
});
