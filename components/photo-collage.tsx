"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence, PanInfo } from "framer-motion"
import { Eye } from "lucide-react"

export function PhotoCollage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

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
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[180px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >
        {photos.map((photo, idx) => (
          <motion.div
            key={idx}
            layoutId={`photo-container-${idx}`}
            className={`relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl cursor-pointer group ${photo.className}`}
            onClick={() => setSelectedIndex(idx)}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.9 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { type: "spring", stiffness: 100, damping: 20 }
              }
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <motion.img
              layoutId={`photo-img-${idx}`}
              src={photo.src || "/placeholder.svg"}
              alt={`Class photo ${idx + 1}`}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <motion.span 
                className="text-white/90 bg-white/10 backdrop-blur-md p-3 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
              >
                <Eye size={20} />
              </motion.span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center pointer-events-none">
              <motion.button
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-12 right-0 md:right-0 md:-top-10 text-white/70 hover:text-white transition-colors z-60 bg-white/10 p-2 rounded-full pointer-events-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>
              
              <motion.img
                layoutId={`photo-img-${selectedIndex}`}
                src={photos[selectedIndex].src || "/placeholder.svg"}
                alt="Full view"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl pointer-events-auto"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={0.7}
                onDragEnd={(e, { offset, velocity }: PanInfo) => {
                  if (Math.abs(offset.y) > 100 || Math.abs(velocity.y) > 500) {
                    setSelectedIndex(null)
                  }
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
