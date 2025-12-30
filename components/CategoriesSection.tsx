"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Category } from "@/types/property";
import { urlFor } from "@/sanity/lib/image";
import { Building2, Home, Building, Warehouse } from "lucide-react";

interface CategoriesSectionProps {
  categories: Category[];
}

// Ikone za različite kategorije (fallback ako nema slike)
const getCategoryIcon = (title?: string) => {
  if (!title) return <Building2 className="w-32 h-32" />;

  const lowerTitle = title.toLowerCase();

  if (lowerTitle.includes("stan")) return <Building2 className="w-32 h-32" />;
  if (lowerTitle.includes("kuć")) return <Home className="w-32 h-32" />;
  if (lowerTitle.includes("poslovn")) return <Building className="w-32 h-32" />;
  if (lowerTitle.includes("garaž") || lowerTitle.includes("magacin"))
    return <Warehouse className="w-32 h-32" />;

  return <Building2 className="w-32 h-32" />;
};

export default function CategoriesSection({
  categories,
}: CategoriesSectionProps) {
  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-4 md:px-10">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Pretražite po kategorijama
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pronađite savršenu nekretninu prema vašim potrebama
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/nekretnine?kategorija=${category.slug?.current || ''}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-card rounded-xl overflow-hidden shadow-lg border border-primary/10 hover:border-primary/30 transition-all cursor-pointer h-full"
                >
                  {/* Slika na vrhu */}
                  <div className="relative w-full h-64 bg-primary/10">
                    {category.image ? (
                      <Image
                        src={urlFor(category.image)
                          .width(600)
                          .height(400)
                          .url()}
                        alt={category.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-primary">
                        {getCategoryIcon(category.title)}
                      </div>
                    )}
                    {/* Gradient overlay za bolju čitljivost */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/20 to-transparent" />

                    {/* Naslov preko slike */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-3xl font-bold text-white drop-shadow-lg">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Tekst ispod */}
                  <div className="p-6 text-center">
                    {category.description && (
                      <p className="text-muted-foreground line-clamp-3 mb-4">
                        {category.description}
                      </p>
                    )}
                    <div className="inline-flex items-center gap-2 text-primary font-semibold">
                      Pregledaj
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
