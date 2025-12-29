import { SanityClient } from '@sanity/client'

export async function generateUniqueSlug(
  baseSlug: string,
  documentId: string | undefined,
  client: SanityClient
): Promise<string> {
  let slug = baseSlug
  let counter = 1
  let isUnique = false

  // Ako nema documentId (novi dokument), proveravamo sve slugove
  if (!documentId) {
    while (!isUnique) {
      const query = `!defined(*[_type == "property" && slug.current == $slug][0]._id)`
      const result = await client.fetch(query, { slug })

      if (result) {
        isUnique = true
      } else {
        slug = `${baseSlug}-${counter}`
        counter++
      }
    }
    return slug
  }

  // Ako ima documentId, izuzimamo trenutni dokument iz pretrage
  const id = documentId.replace(/^drafts\./, '')

  while (!isUnique) {
    const params = {
      draft: `drafts.${id}`,
      published: id,
      slug: slug,
    }

    const query = `!defined(*[_type == "property" && slug.current == $slug && !(_id in [$draft, $published])][0]._id)`
    const result = await client.fetch(query, params)

    if (result) {
      isUnique = true
    } else {
      slug = `${baseSlug}-${counter}`
      counter++
    }
  }

  return slug
}
