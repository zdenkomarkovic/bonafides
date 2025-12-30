"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import PropertyGrid from "@/components/PropertyGrid";
import PropertyFilter, { FilterState } from "@/components/PropertyFilter";
import { Property, Category } from "@/types/property";
import { getAllProperties, getCategories } from "@/sanity/lib/api";

function PropertiesPageContent() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [initialCategoryId, setInitialCategoryId] = useState<string>("");
  const searchParams = useSearchParams();

  useEffect(() => {
    async function loadData() {
      try {
        const [propertiesData, categoriesData] = await Promise.all([
          getAllProperties(),
          getCategories(),
        ]);
        setProperties(propertiesData);
        setCategories(categoriesData);

        // Pročitaj kategoriju iz URL-a
        const categorySlug = searchParams.get("kategorija");
        if (categorySlug && categoriesData.length > 0) {
          const selectedCategory = categoriesData.find(
            (cat) => cat.slug?.current === categorySlug
          );
          if (selectedCategory) {
            setInitialCategoryId(selectedCategory._id);
            // Filtriraj odmah nekretnine po kategoriji
            const filtered = propertiesData.filter(
              (p) => p.category?._id === selectedCategory._id
            );
            setFilteredProperties(filtered);
          } else {
            setFilteredProperties(propertiesData);
          }
        } else {
          setFilteredProperties(propertiesData);
        }
      } catch (error) {
        console.error("Error loading properties:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [searchParams]);

  const handleFilterChange = (filters: FilterState) => {
    let filtered = [...properties];

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title?.toLowerCase().includes(searchLower) ||
          false ||
          p.location?.toLowerCase().includes(searchLower) ||
          false
      );
    }

    if (filters.category) {
      filtered = filtered.filter((p) => p.category?._id === filters.category);
    }

    if (filters.minPrice > 0) {
      filtered = filtered.filter((p) => p.price && p.price >= filters.minPrice);
    }

    if (filters.maxPrice > 0) {
      filtered = filtered.filter((p) => p.price && p.price <= filters.maxPrice);
    }

    if (filters.minArea > 0) {
      filtered = filtered.filter((p) => p.area && p.area >= filters.minArea);
    }

    if (filters.maxArea > 0) {
      filtered = filtered.filter((p) => p.area && p.area <= filters.maxArea);
    }

    if (filters.rooms > 0) {
      if (filters.rooms === 4) {
        filtered = filtered.filter((p) => p.rooms && p.rooms >= 4);
      } else {
        filtered = filtered.filter((p) => p.rooms === filters.rooms);
      }
    }

    setFilteredProperties(filtered);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="text-lg">Učitavanje nekretnina...</div>
        </div>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-24">
      <PropertyFilter
        categories={categories}
        onFilterChange={handleFilterChange}
        initialCategoryId={initialCategoryId}
      />

      <div className="mb-4 text-muted-foreground">
        Prikazano {filteredProperties.length} od {properties.length} nekretnina
      </div>

      <PropertyGrid properties={filteredProperties} />
    </main>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-24">
        <div className="text-center">
          <div className="text-lg">Učitavanje nekretnina...</div>
        </div>
      </div>
    }>
      <PropertiesPageContent />
    </Suspense>
  );
}
