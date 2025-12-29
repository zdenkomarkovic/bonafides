import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Kategorija',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Naziv',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Opis',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Slika',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternativni tekst',
          type: 'string',
        },
      ],
    }),
  ],
})
