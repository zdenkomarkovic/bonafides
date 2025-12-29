import { groq } from 'next-sanity'

export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    image
  }
`

export const featuredPropertiesQuery = groq`
  *[_type == "property" && featured == true && status == "available"] | order(publishedAt desc) [0...6] {
    _id,
    title,
    slug,
    category->{
      _id,
      title,
      slug
    },
    price,
    location,
    area,
    rooms,
    bathrooms,
    images[]{
      asset->{
        _id,
        url
      },
      alt
    },
    parking,
    garage,
    elevator,
    balcony,
    terrace,
    garden,
    furnished,
    status,
    featured,
    publishedAt
  }
`

export const allPropertiesQuery = groq`
  *[_type == "property" && status == "available"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    category->{
      _id,
      title,
      slug
    },
    price,
    location,
    area,
    rooms,
    bathrooms,
    images[]{
      asset->{
        _id,
        url
      },
      alt
    },
    parking,
    garage,
    elevator,
    balcony,
    terrace,
    garden,
    furnished,
    status,
    featured,
    publishedAt
  }
`

export const propertyBySlugQuery = groq`
  *[_type == "property" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category->{
      _id,
      title,
      slug
    },
    price,
    location,
    area,
    rooms,
    bathrooms,
    floor,
    yearBuilt,
    description,
    images[]{
      asset->{
        _id,
        url
      },
      alt
    },
    features,
    heating,
    parking,
    garage,
    elevator,
    balcony,
    terrace,
    garden,
    furnished,
    status,
    featured,
    publishedAt
  }
`

export const propertiesByCategoryQuery = groq`
  *[_type == "property" && category._ref == $categoryId && status == "available"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    category->{
      _id,
      title,
      slug
    },
    price,
    location,
    area,
    rooms,
    bathrooms,
    images[]{
      asset->{
        _id,
        url
      },
      alt
    },
    parking,
    garage,
    elevator,
    balcony,
    terrace,
    garden,
    furnished,
    status,
    featured,
    publishedAt
  }
`
