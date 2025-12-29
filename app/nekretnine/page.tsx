'use client'

import { useEffect, useState } from 'react'
import PropertyGrid from '@/components/PropertyGrid'
import PropertyFilter, { FilterState } from '@/components/PropertyFilter'
import { Property, Category } from '@/types/property'
import { getAllProperties, getCategories } from '@/sanity/lib/api'

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([])
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        const [propertiesData, categoriesData] = await Promise.all([
          getAllProperties(),
          getCategories(),
        ])
        setProperties(propertiesData)
        setFilteredProperties(propertiesData)
        setCategories(categoriesData)
      } catch (error) {
        console.error('Error loading properties:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  const handleFilterChange = (filters: FilterState) => {
    let filtered = [...properties]

    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      filtered = filtered.filter(
        (p) =>
          (p.title?.toLowerCase().includes(searchLower) || false) ||
          (p.location?.toLowerCase().includes(searchLower) || false)
      )
    }

    if (filters.category) {
      filtered = filtered.filter((p) => p.category?._id === filters.category)
    }

    if (filters.minPrice > 0) {
      filtered = filtered.filter((p) => p.price && p.price >= filters.minPrice)
    }

    if (filters.maxPrice > 0) {
      filtered = filtered.filter((p) => p.price && p.price <= filters.maxPrice)
    }

    if (filters.minArea > 0) {
      filtered = filtered.filter((p) => p.area && p.area >= filters.minArea)
    }

    if (filters.maxArea > 0) {
      filtered = filtered.filter((p) => p.area && p.area <= filters.maxArea)
    }

    if (filters.rooms > 0) {
      if (filters.rooms === 4) {
        filtered = filtered.filter((p) => p.rooms && p.rooms >= 4)
      } else {
        filtered = filtered.filter((p) => p.rooms === filters.rooms)
      }
    }

    setFilteredProperties(filtered)
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="text-lg">Učitavanje nekretnina...</div>
        </div>
      </div>
    )
  }

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Sve Nekretnine</h1>
        <p className="text-muted-foreground text-lg">
          Pronađite savršenu nekretninu za Vas
        </p>
      </div>

      <PropertyFilter categories={categories} onFilterChange={handleFilterChange} />

      <div className="mb-4 text-muted-foreground">
        Prikazano {filteredProperties.length} od {properties.length} nekretnina
      </div>

      <PropertyGrid properties={filteredProperties} />
    </main>
  )
}
