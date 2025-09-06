'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeAlt?: string
  afterAlt?: string
  className?: string
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = 'Before',
  afterAlt = 'After',
  className = ''
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    updateSliderPosition(e.clientX)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    updateSliderPosition(e.clientX)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    e.preventDefault()
    updateSliderPosition(e.touches[0].clientX)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault()
    setIsDragging(true)
    updateSliderPosition(e.touches[0].clientX)
  }

  const handleClick = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    updateSliderPosition(e.clientX)
  }

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false)
    const handleGlobalTouchEnd = () => setIsDragging(false)
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        updateSliderPosition(e.clientX)
      }
    }

    document.addEventListener('mouseup', handleGlobalMouseUp)
    document.addEventListener('touchend', handleGlobalTouchEnd)
    document.addEventListener('mousemove', handleGlobalMouseMove)

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp)
      document.removeEventListener('touchend', handleGlobalTouchEnd)
      document.removeEventListener('mousemove', handleGlobalMouseMove)
    }
  }, [isDragging])

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden rounded-lg group ${className} ${isDragging ? 'cursor-ew-resize' : 'cursor-pointer'}`}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
      onClick={handleClick}
    >
      {/* Before Image */}
      <div className="relative w-full h-full">
        <Image
          src={beforeImage}
          alt={beforeAlt}
          fill
          className="object-cover transition-transform duration-200 group-hover:scale-105"
          sizes="(max-width: 1131px) 100vw, 1131px"
          priority
        />
      </div>

      {/* After Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          zIndex: 1
        }}
      >
        <Image
          src={afterImage}
          alt={afterAlt}
          fill
          className="object-cover transition-transform duration-200 group-hover:scale-105"
          sizes="(max-width: 1448px) 100vw, 1448px"
          priority
        />
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white/80 shadow-lg z-10 transition-all duration-200"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      />

      {/* Slider Handle */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-200 hover:scale-110"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Handle Circle */}
        <div className="w-12 h-12 bg-white rounded-full shadow-2xl border-4 border-blue-500 flex items-center justify-center cursor-ew-resize hover:shadow-3xl transition-all duration-200">
          <div className="flex space-x-1">
            <ChevronLeft className="w-3 h-3 text-blue-500" />
            <ChevronRight className="w-3 h-3 text-blue-500" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 z-20">
        <span className="bg-black/80 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-white/20">
          {beforeAlt}
        </span>
      </div>
      <div className="absolute top-4 right-4 z-20">
        <span className="bg-black/80 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-white/20">
          {afterAlt}
        </span>
      </div>

      {/* Drag Instruction */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <span className="bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-white/20">
          Drag to compare
        </span>
      </div>
    </div>
  )
}
