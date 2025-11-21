"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, SkipBack, SkipForward, X } from "lucide-react"

interface Track {
  id: number
  name: string
  src: string
}

const TRACKS: Track[] = [
  { id: 1, name: "Kekal - Nadin Amizah", src: "/songs/Nadin Amizah - Kekal (Official Lyric Video) - Nadin Amizah.mp3" },
  {
    id: 2,
    name: "Rumah Ke Rumah - Hindia",
    src: "/songs/Hindia - Rumah Ke Rumah (_Official Lyric & Commentary Video) - Hindia.mp3",
  },
  { id: 3, name: "About You - The 1975", src: "/songs/About You - The 1975 - tinted heart.mp3" },
]

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [showQueue, setShowQueue] = useState(false)
  const [isMounted, setIsMounted] = useState(false) // Add state to track if component is mounted for autoplay
  const audioRef = useRef<HTMLAudioElement>(null)

  const currentTrack = TRACKS[currentTrackIndex]

  useEffect(() => {
    setIsMounted(true)
  }, []) // Auto-play on mount

  const handleTrackEnd = () => {
    if (currentTrackIndex < TRACKS.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1)
    } else {
      setCurrentTrackIndex(0)
      setIsPlaying(false)
    }
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentTrack.src
      if (isMounted) {
        audioRef.current.play().catch(() => {
          console.log("Audio playback not allowed")
        })
        setIsPlaying(true)
      }
    }
  }, [currentTrackIndex, isMounted]) // Auto-play on track change or initial mount

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(() => {
          console.log("Audio playback not allowed")
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handlePrevious = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1)
    } else {
      setCurrentTrackIndex(TRACKS.length - 1)
    }
  }

  const handleNext = () => {
    if (currentTrackIndex < TRACKS.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1)
    } else {
      setCurrentTrackIndex(0)
    }
  }

  const handleTrackSelect = (index: number) => {
    setCurrentTrackIndex(index)
    setShowQueue(false)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 md:bottom-6 md:right-6 md:left-auto md:w-auto md:max-w-none">
        {showQueue && (
          <>
            <div className="fixed md:absolute inset-0 md:inset-auto md:bottom-24 md:right-0 bg-black/50 md:bg-transparent md:rounded-lg md:shadow-xl md:border md:border-peach-accent/20 flex items-end md:items-stretch z-40 md:z-auto">
              <div className="w-full md:w-64 bg-white rounded-t-xl md:rounded-lg p-4 md:p-3 mb-0 md:mb-2">
                <div className="flex items-center justify-between mb-3 md:mb-2">
                  <p className="text-sm font-semibold text-peach-dark">Queue</p>
                  <button
                    onClick={() => setShowQueue(false)}
                    className="md:hidden text-gray-500 hover:text-gray-700"
                    aria-label="Close queue"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="flex flex-col gap-2 md:gap-1 max-h-60 md:max-h-48 overflow-y-auto">
                  {TRACKS.map((track, index) => (
                    <button
                      key={track.id}
                      onClick={() => handleTrackSelect(index)}
                      className={`text-left px-3 py-2 md:py-2 rounded text-sm transition-colors ${
                        index === currentTrackIndex
                          ? "bg-peach-accent text-white"
                          : "text-gray-700 hover:bg-peach-light"
                      }`}
                    >
                      {index + 1}. {track.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        <div className="bg-peach-light/90 backdrop-blur-sm rounded-t-2xl md:rounded-2xl p-3 md:p-4 shadow-lg flex flex-col gap-3 w-full md:w-72">
          {/* Song title display - responsive text sizing */}
          <div className="text-center">
            <p className="text-xs text-peach-dark/60">Now Playing</p>
            <p className="text-xs md:text-sm font-semibold text-peach-dark truncate">{currentTrack.name}</p>
          </div>

          <div className="flex items-center justify-center gap-2 md:gap-3">
            <button
              onClick={handlePrevious}
              className="bg-peach-accent hover:bg-peach-dark text-white rounded-full p-1.5 md:p-2 transition-colors"
              aria-label="Previous track"
            >
              <SkipBack size={16} className="md:w-[18px] md:h-[18px]" />
            </button>

            <button
              onClick={togglePlay}
              className="bg-peach-accent hover:bg-peach-dark text-white rounded-full p-2.5 md:p-3 transition-colors"
              aria-label={isPlaying ? "Pause audio" : "Play audio"}
            >
              {isPlaying ? (
                <Pause size={20} className="md:w-[22px] md:h-[22px]" />
              ) : (
                <Play size={20} className="md:w-[22px] md:h-[22px]" />
              )}
            </button>

            <button
              onClick={handleNext}
              className="bg-peach-accent hover:bg-peach-dark text-white rounded-full p-1.5 md:p-2 transition-colors"
              aria-label="Next track"
            >
              <SkipForward size={16} className="md:w-[18px] md:h-[18px]" />
            </button>
          </div>

          <div className="flex items-center justify-between gap-2 flex-col md:flex-row">
            <div className="flex items-center gap-2 flex-1 w-full md:w-auto">
              <Volume2 size={16} className="text-peach-dark shrink-0" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full h-1 bg-peach-light rounded-lg appearance-none cursor-pointer"
                aria-label="Volume control"
              />
            </div>

            <button
              onClick={() => setShowQueue(!showQueue)}
              className="text-peach-dark hover:text-peach-accent transition-colors text-xs font-semibold px-2 py-1 rounded hover:bg-peach-light/50 w-full md:w-auto"
              aria-label="Toggle queue"
            >
              Queue ({TRACKS.length})
            </button>
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        onEnded={handleTrackEnd}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={currentTrack.src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  )
}
