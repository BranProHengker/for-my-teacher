"use client"

export function FallingFlowers() {
  const flowers = Array.from({ length: 4 }).map((_, i) => ({
    id: i,
    delay: Math.random() * 2,
    left: Math.random() * 100,
    duration: 8 + Math.random() * 4,
  }))

  return (
    <>
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="fixed pointer-events-none text-2xl md:text-3xl"
          style={{
            left: `${flower.left}%`,
            top: "-30px",
            animation: `fallFlower ${flower.duration}s linear ${flower.delay}s infinite`,
            opacity: 0.6,
          }}
        >
          ❀
        </div>
      ))}
    </>
  )
}
