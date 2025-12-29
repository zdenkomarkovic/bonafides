import Link from 'next/link'
import { getFeaturedProperties } from '@/sanity/lib/api'
import PropertyGrid from './PropertyGrid'

export default async function FeaturedProperties() {
  const properties = await getFeaturedProperties()

  // Debug logging
  console.log('Featured properties count:', properties.length)
  console.log('Featured properties:', JSON.stringify(properties, null, 2))

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Istaknute Nekretnine</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Izdvajamo najkvalitetnije ponude za Vas
          </p>
        </div>

        <PropertyGrid properties={properties} emptyMessage="Trenutno nema istaknutih nekretnina." />

        <div className="text-center mt-12">
          <Link
            href="/nekretnine"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Pogledaj Sve Nekretnine
          </Link>
        </div>
      </div>
    </section>
  )
}
