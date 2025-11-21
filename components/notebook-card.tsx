"use client"

import type React from "react"

interface NotebookCardProps {
  children: React.ReactNode
}

export const NotebookCard: React.FC<NotebookCardProps> = ({ children }) => {
  return (
    <div className="relative">
      {/* Main notebook card */}
      <div className="bg-white rounded-xl p-8 md:p-12 shadow-xl border border-slate-200/60 backdrop-blur-sm">
        {/* Left spiral binding effect */}
        <div className="absolute left-6 top-6 bottom-6 flex flex-col justify-around pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-6 h-6 rounded-full border-[3px] border-slate-300 bg-gradient-to-br from-slate-100 to-slate-50 shadow-sm" />
          ))}
        </div>

        {/* Content with left padding for binding */}
        <div className="ml-8 md:ml-12">{children}</div>

        {/* Grid lines background */}
        <div className="absolute inset-0 pointer-events-none rounded-xl overflow-hidden opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(0deg,#000_1px,transparent_1px)] bg-[size:100%_32px]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:32px_100%]" />
        </div>
      </div>

      {/* Sticky note accent top-right */}
      <div className="absolute top-4 -right-2 w-12 h-12 bg-amber-50 rounded-sm shadow-md transform rotate-6 border border-amber-100/50 flex items-center justify-center opacity-80">
         <span className="text-amber-800/40 text-lg opacity-60">✿</span>
      </div>
    </div>
  )
}
