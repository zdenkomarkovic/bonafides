import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'property',
  title: 'Nekretnina',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Naslov',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'Kliknite "Generate" da napravite URL. Ako naslov već postoji, automatski će se dodati broj.',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) => {
          return input
            .toLowerCase()
            .replace(/ć/g, 'c')
            .replace(/č/g, 'c')
            .replace(/ž/g, 'z')
            .replace(/š/g, 's')
            .replace(/đ/g, 'd')
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '')
            .slice(0, 96)
        },
        isUnique: async (slug, context) => {
          const { document, getClient } = context

          // Ako nema _id (novi dokument), proveri samo da li slug postoji
          if (!document?._id) {
            const client = getClient({ apiVersion: '2024-01-01' })
            const query = `!defined(*[_type == "property" && slug.current == $slug][0]._id)`
            const result = await client.fetch(query, { slug })
            return result
          }

          const client = getClient({ apiVersion: '2024-01-01' })
          const id = document._id.replace(/^drafts\./, '')
          const params = {
            draft: `drafts.${id}`,
            published: id,
            slug: slug,
          }
          const query = `!defined(*[_type == "property" && slug.current == $slug && !(_id in [$draft, $published])][0]._id)`
          const result = await client.fetch(query, params)
          return result
        },
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategorija',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'price',
      title: 'Cena (EUR)',
      type: 'number',
      validation: (Rule) => Rule.positive(),
    }),
    defineField({
      name: 'location',
      title: 'Lokacija',
      type: 'string',
    }),
    defineField({
      name: 'area',
      title: 'Površina (m²)',
      type: 'number',
      validation: (Rule) => Rule.positive(),
    }),
    defineField({
      name: 'rooms',
      title: 'Broj soba',
      type: 'number',
      validation: (Rule) => Rule.positive(),
    }),
    defineField({
      name: 'bathrooms',
      title: 'Broj kupatila',
      type: 'number',
      validation: (Rule) => Rule.positive(),
    }),
    defineField({
      name: 'floor',
      title: 'Sprat',
      type: 'string',
    }),
    defineField({
      name: 'yearBuilt',
      title: 'Godina izgradnje',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Opis',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'images',
      title: 'Slike',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt tekst',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'features',
      title: 'Karakteristike',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'heating',
      title: 'Grejanje',
      type: 'string',
      options: {
        list: [
          { title: 'Centralno', value: 'centralno' },
          { title: 'Etažno', value: 'etazno' },
          { title: 'Gas', value: 'gas' },
          { title: 'Struja', value: 'struja' },
          { title: 'TA peć', value: 'ta-pec' },
          { title: 'Drugo', value: 'drugo' },
        ],
      },
    }),
    defineField({
      name: 'parking',
      title: 'Parking',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'garage',
      title: 'Garaža',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'elevator',
      title: 'Lift',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'balcony',
      title: 'Balkon',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'terrace',
      title: 'Terasa',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'garden',
      title: 'Bašta',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'furnished',
      title: 'Namešten',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Dostupno', value: 'available' },
          { title: 'Rezervisano', value: 'reserved' },
          { title: 'Prodato', value: 'sold' },
        ],
      },
      initialValue: 'available',
    }),
    defineField({
      name: 'featured',
      title: 'Istaknuto',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Datum objave',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0',
      location: 'location',
      price: 'price',
    },
    prepare(selection) {
      const { title, location, price } = selection
      return {
        ...selection,
        subtitle: `${location} - €${price?.toLocaleString()}`,
      }
    },
  },
})
