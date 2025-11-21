"use client"

import type React from "react"

import { useState, useEffect } from "react"

interface TypingTextProps {
  text: string
  speed?: number
}

export const TypingText: React.FC<TypingTextProps> = ({ text, speed = 15 }) => {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, text, speed])

  return (
    <div>
      <p className="text-base md:text-lg leading-relaxed text-justify text-slate-700 whitespace-pre-wrap">
        {displayedText}
        {currentIndex < text.length && <span className="inline-block w-0.5 h-6 ml-1 bg-slate-700 animate-pulse"></span>}
      </p>
    </div>
  )
}
