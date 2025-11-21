"use client"

import { useEffect, useState } from "react"
import { TypingText } from "@/components/typing-text"
import { AudioPlayer } from "@/components/audio-player"
import { PhotoCollage } from "@/components/photo-collage"
import { FloatingFlowers } from "@/components/floating-flowers"
import { NotebookCard } from "@/components/notebook-card"
import { Footer } from "@/components/footer"
import { FallingFlowers } from "@/components/falling-flowers"

const mainMessage = `Pertama, kami sampaikan rasa maaf kami atas segala sikap, tingkah, dan kekurangan yang mungkin telah membuat Bu Ika kecewa dan marah, namun kami yakin rasa sayang Bu Ika ke kami lebih besar daripada rasa marah itu, kami juga yakin bahwa Bu Ika akan selalu punya pintu maaf yang lebih luas dan selalu terbuka lebar untuk kami. Kedua, kami ucapkan terima kasih yang sebesar-besarnya karena di balik semua kesalahan kami, Ibu tetap sabar membimbing, mendampingi, dan mempercayai kami. Terima kasih karena telah menemani perjalanan kami dari langkah kecil hingga kami bisa sejauh ini. Terima kasih atas setiap ilmu, nasihat, dan perhatian yang tidak pernah lelah Bu Ika berikan. Berkat semua dukungan Bu Ika, kami bisa berdiri lebih kuat dan hampir tiba di tujuan kami. Pastinya, semua nasihat itu akan menjadi bekal untuk perjalanan kami kedepannya. Bu Ika akan selalu ada di hati kami semua, untuk selama-lamanya, sebagai wali kelas yang tidak hanya membimbing, tetapi juga menjadi rumah bagi kami di setiap langkah perjalanan ini.`

export default function Home() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    setShowContent(true)
  }, [])

  return (
    <main className="min-h-screen bg-linear-to-b from-[#f8fafc] via-[#f1f5f9] to-[#fff] relative overflow-hidden pb-24 md:pb-0 font-sans">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none opacity-[0.15]" />

      <AudioPlayer />
      <FloatingFlowers />
      <FallingFlowers />

      {/* Hero Section - Title */}
      <section
        className={`min-h-screen flex items-center justify-center px-4 md:px-8 transition-opacity duration-1000 relative z-10 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-700 mb-2 leading-tight tracking-tight animate-[fadeInUp_0.8s_ease-out_0.2s_forwards] opacity-0">
            Maaf
          </h1>
          <h1 className="text-4xl md:text-6xl font-light text-slate-500 mb-6 leading-tight tracking-wide animate-[fadeInUp_0.8s_ease-out_0.4s_forwards] opacity-0 font-serif italic">
            &
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-700 mb-12 leading-tight tracking-tight animate-[fadeInUp_0.8s_ease-out_0.6s_forwards] opacity-0">
            Terima Kasih.
          </h1>

          <div className="flex items-center justify-center gap-4 mb-8 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards] opacity-0">
            <div className="w-12 h-[1px] bg-slate-400" />
            <p className="text-lg md:text-xl text-slate-600 font-medium tracking-wide uppercase text-sm">Untuk Bu Ika Nur Indah S</p>
            <div className="w-12 h-[1px] bg-slate-400" />
          </div>

          <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-xl mx-auto font-light animate-[fadeInUp_0.8s_ease-out_1s_forwards] opacity-0">
            Dari kami, kelas 12 RPL 3 Angkatan 26
          </p>
        </div>
      </section>

      {/* Letter Content Section */}
      <section className="py-32 px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <NotebookCard>
              <div className="mb-10">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-3 tracking-tight">Dear Bu Ika,</h2>
                <div className="h-0.5 w-20 bg-slate-300/70" />
              </div>

              <div className={`transition-all duration-1000 delay-500 ${showContent ? "opacity-100" : "opacity-0"}`}>
                <TypingText text={mainMessage} speed={15} />
              </div>

              <div className="mt-12 pt-8 border-t border-slate-200/60">
                <p className="text-lg md:text-xl text-slate-600 font-light mb-4 italic font-serif">With love and gratitude,</p>
                <p className="text-base md:text-lg text-slate-700 font-medium">
                  XII RPL 3 - Angkatan 26
                </p>
              </div>
            </NotebookCard>
          </div>
        </div>
      </section>

      {/* Photo Collage Section */}
      <section className="py-20 md:py-28 px-4 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-3 tracking-wide">Kenangan Bersama</h2>
             <div className="h-[1px] w-24 bg-slate-300 mx-auto" />
          </div>

          <div
            className={`transition-all duration-1000 delay-700 ${
              showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <PhotoCollage />
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section
        className={`py-20 md:py-28 px-4 md:px-8 flex items-center justify-center relative z-10 transition-opacity duration-1000 delay-1000 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-serif italic mb-8 opacity-90">
            "Doakan kami saat PKL, agar bisa membuat Ibu bangga"
          </p>
          <div className="h-[1px] w-12 bg-slate-300 mx-auto mb-8" />
          <p className="text-sm md:text-base text-slate-500 font-light tracking-widest uppercase">Terima kasih, Bu Ika.</p>
        </div>
      </section>

      {/* Decorative bottom element */}
      <div className="relative z-10 h-20 flex items-center justify-center">
        <p className="text-3xl opacity-40">❀</p>
      </div>

      <Footer />
    </main>
  )
}
