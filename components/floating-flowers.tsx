"use client"

export function FloatingFlowers() {
  return (
    <>
      {/* Top right flowers */}
      <div
        className="absolute top-8 right-8 text-4xl md:text-5xl opacity-70 animate-float"
        style={{ animationDelay: "0s" }}
      >
        ❀
      </div>
      <div
        className="absolute top-16 right-2 text-3xl md:text-4xl opacity-50 animate-float"
        style={{ animationDelay: "1s" }}
      >
        ✿
      </div>

      {/* Bottom left flowers */}
      <div
        className="absolute bottom-12 left-4 text-4xl md:text-5xl opacity-70 animate-float"
        style={{ animationDelay: "2s" }}
      >
        ❀
      </div>
      <div
        className="absolute bottom-20 left-16 text-3xl md:text-4xl opacity-50 animate-float"
        style={{ animationDelay: "3s" }}
      >
        ✿
      </div>

      {/* Bottom right accent */}
      <div
        className="absolute bottom-8 right-12 text-3xl md:text-4xl opacity-60 animate-float"
        style={{ animationDelay: "4s" }}
      >
        ❀
      </div>
    </>
  )
}
