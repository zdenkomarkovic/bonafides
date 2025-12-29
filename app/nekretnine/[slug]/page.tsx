import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPropertyBySlug, getAllProperties } from '@/sanity/lib/api'
import { urlFor } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'
import PropertyImageGallery from '@/components/PropertyImageGallery'
import {
  FaBed,
  FaBath,
  FaRuler,
  FaMapMarkerAlt,
  FaCalendar,
  FaBuilding,
  FaFire,
  FaCar,
  FaWarehouse,
  FaTree,
  FaCouch,
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaArrowUp,
  FaTimesCircle,
} from 'react-icons/fa'

export const dynamic = 'force-dynamic'

export async function generateStaticParams() {
  try {
    const properties = await getAllProperties()
    return properties
      .filter((property) => property?.slug?.current)
      .map((property) => ({
        slug: property.slug.current,
      }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export default async function PropertyPage({ params }: { params: { slug: string } }) {
  const property = await getPropertyBySlug(params.slug)

  if (!property) {
    notFound()
  }

  // Generate image URLs for client component
  const imageUrls = property.images?.map(image => ({
    smallUrl: urlFor(image.asset).width(300).height(200).url(),
    mediumUrl: urlFor(image.asset).width(1200).height(800).url(),
    largeUrl: urlFor(image.asset).width(1920).height(1080).url(),
    alt: image.alt
  })) || []

  const features = [
    { icon: FaRuler, label: 'Površina', value: property.area ? `${property.area} m²` : 'N/A' },
    { icon: FaBed, label: 'Sobe', value: property.rooms || 'N/A' },
    { icon: FaBath, label: 'Kupatila', value: property.bathrooms || 'N/A' },
    { icon: FaBuilding, label: 'Sprat', value: property.floor || 'N/A' },
    { icon: FaCalendar, label: 'Godina', value: property.yearBuilt || 'N/A' },
    { icon: FaFire, label: 'Grejanje', value: property.heating || 'N/A' },
  ]

  const amenities = [
    { icon: FaCar, label: 'Parking', available: property.parking || false },
    { icon: FaWarehouse, label: 'Garaža', available: property.garage || false },
    { icon: FaArrowUp, label: 'Lift', available: property.elevator || false },
    { icon: FaTree, label: 'Bašta', available: property.garden || false },
    { icon: FaCouch, label: 'Namešten', available: property.furnished || false },
  ]

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <Link
          href="/nekretnine"
          className="text-primary hover:underline inline-flex items-center"
        >
          ← Nazad na sve nekretnine
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {imageUrls.length > 0 && (
            <PropertyImageGallery
              images={imageUrls}
              propertyTitle={property.title || 'Nekretnina'}
            />
          )}

          <div className="bg-card p-6 rounded-lg shadow-md border border-border mb-8">
            <h1 className="text-3xl font-bold mb-4">{property.title || 'Bez naslova'}</h1>

            {property.location && (
              <div className="flex items-center text-muted-foreground mb-6">
                <FaMapMarkerAlt className="mr-2" />
                <span>{property.location}</span>
              </div>
            )}

            {property.category && (
              <div className="mb-6">
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold">
                  {property.category.title}
                </span>
              </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <feature.icon className="text-primary text-xl" />
                  <div>
                    <div className="text-sm text-muted-foreground">{feature.label}</div>
                    <div className="font-semibold">{feature.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {property.description && (
              <div className="border-t border-border pt-6 mb-6">
                <h2 className="text-2xl font-semibold mb-4">Opis</h2>
                <div className="prose prose-lg max-w-none">
                  <PortableText value={property.description} />
                </div>
              </div>
            )}

            {property.features && property.features.length > 0 && (
              <div className="border-t border-border pt-6 mb-6">
                <h2 className="text-2xl font-semibold mb-4">Dodatne Karakteristike</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {property.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <FaCheckCircle className="text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="border-t border-border pt-6">
              <h2 className="text-2xl font-semibold mb-4">Pogodnosti</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between ${
                      amenity.available ? 'text-foreground' : 'text-muted-foreground/60'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <amenity.icon className="text-xl" />
                      <span className={amenity.available ? '' : 'line-through'}>{amenity.label}</span>
                    </div>
                    {amenity.available ? (
                      <FaCheckCircle className="text-green-500" />
                    ) : (
                      <FaTimesCircle className="text-red-500/60" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-card p-6 rounded-lg shadow-md border border-border sticky top-4">
            <div className="text-3xl font-bold text-primary mb-6">
              {property.price ? `€${property.price.toLocaleString()}` : 'Cena na upit'}
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <FaPhone className="mr-3 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Telefon</div>
                  <a href="tel:014293923" className="font-semibold hover:text-primary">
                    014/293-923
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <FaPhone className="mr-3 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Telefon 2</div>
                  <a href="tel:014293920" className="font-semibold hover:text-primary">
                    014/293-920
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <FaEnvelope className="mr-3 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a
                    href="mailto:snezanaa50@gmail.com"
                    className="font-semibold hover:text-primary"
                  >
                    snezanaa50@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <FaPhone className="mr-3 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Mob/Viber/WhatsApp</div>
                  <a href="tel:+381638226026" className="font-semibold hover:text-primary">
                    +381 63 822 6026
                  </a>
                </div>
              </div>
            </div>

            <Link
              href="/kontakt"
              className="block w-full bg-primary text-primary-foreground text-center px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors mb-4"
            >
              Pošalji Upit
            </Link>

            <div className="text-center text-sm text-muted-foreground">
              Registarski broj: 952
            </div>
          </div>

          <div className="bg-muted p-6 rounded-lg mt-6">
            <h3 className="font-semibold mb-4">Lokacija</h3>
            <p className="text-muted-foreground mb-2">
              <strong>Adresa kancelarije:</strong>
            </p>
            <p className="text-sm">
              Ul. Karađorđeva br. 123
              <br />
              (u pasažu)
              <br />
              Valjevo, Srbija
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
