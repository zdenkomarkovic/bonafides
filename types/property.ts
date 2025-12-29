export interface Category {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
  image?: any
}

export interface PropertyImage {
  asset: {
    _id: string
    url: string
  }
  alt?: string
}

export interface Property {
  _id: string
  title?: string
  slug: {
    current: string
  }
  propertyId?: string
  category?: Category
  price?: number
  location?: string
  area?: number
  rooms?: number
  bathrooms?: number
  floor?: string
  yearBuilt?: number
  description?: any[]
  images?: PropertyImage[]
  features?: string[]
  heating?: string
  parking?: boolean
  garage?: boolean
  elevator?: boolean
  balcony?: boolean
  terrace?: boolean
  garden?: boolean
  furnished?: boolean
  status?: 'available' | 'reserved' | 'sold'
  featured?: boolean
  publishedAt?: string
}
