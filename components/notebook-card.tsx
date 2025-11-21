"use client"

import type React from "react"

interface NotebookCardProps {
  children: React.ReactNode
}

export const NotebookCard: React.FC<NotebookCardProps> = ({ children }) => {
  return (
    <div className="relative">
      {/* Main notebook card */}
      <div className="bg-linear-to-br from-[#fef9f3] to-[#faf6f1] rounded-lg p-8 md:p-12 shadow-lg border border-orange-100">
        {/* Left spiral binding effect */}
        <div className="absolute left-6 top-6 bottom-6 flex flex-col justify-around pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-6 h-6 rounded-full border-2 border-orange-300 bg-white" />
          ))}
        </div>

        {/* Content with left padding for binding */}
        <div className="ml-8 md:ml-12">{children}</div>

        {/* Grid lines background */}
        <div className="absolute inset-0 pointer-events-none rounded-lg overflow-hidden opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(0deg,#cbd5e1_1px,transparent_1px)] bg-size:[100%_24px]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#cbd5e1_1px,transparent_1px)] bg-size:[32px_100%]" />
        </div>
      </div>

      {/* Sticky note accent top-right */}
      <div className="absolute top-4 -right-2 w-12 h-12 bg-pink-200 rounded-sm shadow-md transform rotate-6 border border-pink-300">
        <div className="absolute inset-1 flex items-center justify-center text-lg">❤️</div>
      </div>
    </div>
  )
}
