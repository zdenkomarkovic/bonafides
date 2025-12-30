'use client'

import { useState, useEffect } from 'react'
import { Category } from '@/types/property'

interface PropertyFilterProps {
  categories: Category[]
  onFilterChange: (filters: FilterState) => void
  initialCategoryId?: string
}

export interface FilterState {
  category: string
  minPrice: number
  maxPrice: number
  minArea: number
  maxArea: number
  rooms: number
  search: string
}

export default function PropertyFilter({ categories, onFilterChange, initialCategoryId }: PropertyFilterProps) {
  const [filters, setFilters] = useState<FilterState>({
    category: '',
    minPrice: 0,
    maxPrice: 0,
    minArea: 0,
    maxArea: 0,
    rooms: 0,
    search: '',
  })

  // Postavi inicijalnu kategoriju kada se učita
  useEffect(() => {
    if (initialCategoryId) {
      setFilters(prev => ({ ...prev, category: initialCategoryId }))
    }
  }, [initialCategoryId])

  const handleChange = (field: keyof FilterState, value: string | number) => {
    const newFilters = { ...filters, [field]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleReset = () => {
    const resetFilters: FilterState = {
      category: '',
      minPrice: 0,
      maxPrice: 0,
      minArea: 0,
      maxArea: 0,
      rooms: 0,
      search: '',
    }
    setFilters(resetFilters)
    onFilterChange(resetFilters)
  }

  return (
    <div className="bg-card p-6 rounded-lg shadow-md border border-border mb-8">
      <h3 className="text-xl font-semibold mb-4">Pretraga Nekretnina</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Pretraga</label>
          <input
            type="text"
            placeholder="Pretraži po nazivu ili lokaciji..."
            value={filters.search}
            onChange={(e) => handleChange('search', e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Kategorija</label>
          <select
            value={filters.category}
            onChange={(e) => handleChange('category', e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Sve kategorije</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Broj soba</label>
          <select
            value={filters.rooms}
            onChange={(e) => handleChange('rooms', parseInt(e.target.value))}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="0">Bilo koji broj</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Min. cena (€)</label>
          <input
            type="number"
            placeholder="0"
            value={filters.minPrice || ''}
            onChange={(e) => handleChange('minPrice', parseInt(e.target.value) || 0)}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Max. cena (€)</label>
          <input
            type="number"
            placeholder="Bez ograničenja"
            value={filters.maxPrice || ''}
            onChange={(e) => handleChange('maxPrice', parseInt(e.target.value) || 0)}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Min. površina (m²)</label>
          <input
            type="number"
            placeholder="0"
            value={filters.minArea || ''}
            onChange={(e) => handleChange('minArea', parseInt(e.target.value) || 0)}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="mt-4">
        <button
          onClick={handleReset}
          className="px-6 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors"
        >
          Resetuj filtere
        </button>
      </div>
    </div>
  )
}
