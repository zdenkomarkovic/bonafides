import Link from 'next/link'
import Image from 'next/image'
import { Property } from '@/types/property'
import { urlFor } from '@/sanity/lib/image'
import { FaBed, FaBath, FaRuler, FaMapMarkerAlt } from 'react-icons/fa'

interface PropertyCardProps {
  property: Property
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const mainImage = property.images?.[0]
  const imageUrl = mainImage ? urlFor(mainImage.asset).width(600).height(400).url() : '/placeholder.jpg'

  return (
    <Link
      href={`/nekretnine/${property.slug.current}`}
      className="group block bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imageUrl}
          alt={mainImage?.alt || property.title || 'Nekretnina'}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {property.featured && (
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
            Istaknuto
          </div>
        )}
        {property.category && (
          <div className="absolute top-4 left-4 bg-background/90 text-foreground px-3 py-1 rounded-full text-sm font-semibold">
            {property.category.title}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">
          {property.title || 'Bez naslova'}
        </h3>

        {property.location && (
          <div className="flex items-center text-muted-foreground mb-4">
            <FaMapMarkerAlt className="mr-2 flex-shrink-0" />
            <span className="line-clamp-1">{property.location}</span>
          </div>
        )}

        <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
          {property.area && (
            <div className="flex items-center">
              <FaRuler className="mr-2 text-primary" />
              <span>{property.area} m²</span>
            </div>
          )}
          {property.rooms && (
            <div className="flex items-center">
              <FaBed className="mr-2 text-primary" />
              <span>{property.rooms}</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center">
              <FaBath className="mr-2 text-primary" />
              <span>{property.bathrooms}</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="text-2xl font-bold text-primary">
            {property.price ? `€${property.price.toLocaleString()}` : 'Cena na upit'}
          </div>
          <div className="text-sm text-muted-foreground">
            Detaljnije →
          </div>
        </div>
      </div>
    </Link>
  )
}
