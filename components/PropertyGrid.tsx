import { Property } from '@/types/property'
import PropertyCard from './PropertyCard'

interface PropertyGridProps {
  properties: Property[]
  emptyMessage?: string
}

export default function PropertyGrid({ properties, emptyMessage = 'Nema dostupnih nekretnina.' }: PropertyGridProps) {
  if (properties.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard key={property._id} property={property} />
      ))}
    </div>
  )
}
