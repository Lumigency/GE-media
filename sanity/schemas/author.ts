import { defineField, defineType } from 'sanity';

export const author = defineType({
  name: 'author',
  title: 'Auteur·rice',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nom complet', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Identifiant', type: 'slug', options: { source: 'name' }, validation: (r) => r.required() }),
    defineField({ name: 'role', title: 'Rôle', type: 'string', description: 'Ex. « Cofondatrice de Jauge, experte affiliation »' }),
    defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'bio',
      title: 'Bio courte',
      type: 'text',
      rows: 4,
      description: 'Ton expérience concrète : c’est ce qui rend tes articles crédibles pour Google et les IA.',
    }),
    defineField({ name: 'linkedin', title: 'Profil LinkedIn', type: 'url' }),
    defineField({ name: 'website', title: 'Site web', type: 'url' }),
  ],
  preview: { select: { title: 'name', subtitle: 'role', media: 'photo' } },
});
