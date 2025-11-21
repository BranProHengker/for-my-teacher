"use client"

import { Heart } from "lucide-react"
import { useState } from "react"

export function Footer() {
  const [heartClicked, setHeartClicked] = useState(false)

  const handleHeartClick = () => {
    setHeartClicked(true)
    setTimeout(() => setHeartClicked(false), 600)
  }

  return (
    <footer className="bg-linear-to-t from-sky-50 to-transparent py-12 md:py-16 px-4 md:px-8 border-t border-sky-100 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Left section */}
          <div className="space-y-3 animate-fadeInUp" style={{ animationDelay: "0s" }}>
            <h3 className="text-lg font-semibold text-slate-700">Kelas XII RPL 3</h3>
            <p className="text-sm text-slate-600">Angkatan 26 - PKL 2025</p>
            <div className="h-1 w-8 bg-amber-600 rounded-full" />
          </div>

          {/* Center section */}
          <div className="space-y-3 text-center animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-lg font-semibold text-slate-700">Untuk</h3>
            <p className="text-sm text-slate-600">Bu Ika Nur Indah S</p>
            <p className="text-xs text-slate-500 italic">Guru & Wali Kelas Terbaik</p>
          </div>

          {/* Right section with interactive heart */}
          <div
            className="space-y-3 flex flex-col items-start md:items-end animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-sm text-slate-600">Penuh Kasih Sayang</p>
            <button
              onClick={handleHeartClick}
              className={`transition-all duration-300 transform ${
                heartClicked ? "scale-125" : "scale-100 hover:scale-110"
              }`}
            >
              <Heart
                size={24}
                className={`transition-all duration-300 ${
                  heartClicked ? "fill-rose-500 text-rose-500" : "text-slate-400 hover:text-rose-400"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-slate-300 to-transparent mb-8" />

        {/* Bottom section */}
        <div className="text-center space-y-4 animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            "Terima kasih telah menjadi lebih dari sekedar guru, tetapi juga inspirasi dan motivasi kami"
          </p>
          <p className="text-xs text-slate-500">© 2025 XII RPL 3 Angkatan 26 • Dibuat dengan cinta untuk Bu Ika</p>
        </div>

        {/* Decorative flowers */}
        <div className="flex justify-center gap-8 mt-8 text-2xl opacity-40">
          <span className="animate-float" style={{ animationDelay: "0s" }}>
            ❀
          </span>
          <span className="animate-float" style={{ animationDelay: "1s" }}>
            ✿
          </span>
          <span className="animate-float" style={{ animationDelay: "2s" }}>
            ❀
          </span>
        </div>
      </div>
    </footer>
  )
}
