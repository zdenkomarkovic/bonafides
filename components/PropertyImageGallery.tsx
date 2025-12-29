"use client"

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageWithUrls {
  smallUrl: string
  mediumUrl: string
  largeUrl: string
  alt?: string
}

interface PropertyImageGalleryProps {
  images: ImageWithUrls[]
  propertyTitle: string
}

export default function PropertyImageGallery({
  images,
  propertyTitle,
}: PropertyImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImageIndex(null)
  }

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1)
    }
  }

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1)
    }
  }

  return (
    <>
      <div className="mb-8">
        {images[0] && (
          <div
            className="relative h-[500px] rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(0)}
          >
            <Image
              src={images[0].mediumUrl}
              alt={images[0].alt || propertyTitle}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              priority
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-lg font-semibold bg-black/50 px-4 py-2 rounded-lg">
                Klikni za prikaz
              </span>
            </div>
          </div>
        )}

        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-4 mt-4">
            {images.slice(1, 5).map((image, index) => (
              <div
                key={index}
                className="relative h-24 rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(index + 1)}
              >
                <Image
                  src={image.smallUrl}
                  alt={image.alt || `${propertyTitle} ${index + 2}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            aria-label="Zatvori"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-4 text-white hover:text-gray-300 z-10"
              aria-label="Prethodna slika"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedImageIndex].largeUrl}
              alt={images[selectedImageIndex].alt || propertyTitle}
              fill
              className="object-contain"
              quality={95}
            />
          </div>

          {/* Next button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-4 text-white hover:text-gray-300 z-10"
              aria-label="Sledeća slika"
            >
              <ChevronRight className="w-12 h-12" />
            </button>
          )}

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-lg">
            {selectedImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
