"use client"

import { useState } from "react"
import { X } from "lucide-react"

export function PhotoCollage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

   const photos = [
    {
      src: "/images/welcome-to-singosari-temple.jpeg",
      size: "large",
      className: "md:col-span-2 md:row-span-2",
    },
    {
      src: "/images/fotoijazah.jpeg",
      size: "medium",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      src: "/images/jalan-jalan.jpeg",
      size: "medium",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      src: "/images/mariupacara.jpeg",
      size: "medium",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      src: "/images/olga.jpeg",
      size: "medium",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      src: "/images/iki-lali.jpeg",
      size: "medium",
      className: "md:col-span-1 md:row-span-1",
    },
  ]

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[180px]">
        {photos.map((photo, idx) => (
          <div
            key={idx}
            className={`relative overflow-hidden rounded-lg shadow-md cursor-pointer group ${photo.className}`}
            onClick={() => setSelectedImage(photo.src)}
          >
            <img
              src={photo.src || "/placeholder.svg"}
              alt={`Class photo ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="text-white text-sm font-medium">Klik untuk melihat</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors z-60"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Full view"
              className="max-w-full max-h-full object-contain rounded-lg animate-scaleIn"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  )
}
