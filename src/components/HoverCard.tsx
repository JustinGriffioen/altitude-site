'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface HoverCardProps {
  children: React.ReactNode
  hoverContent?: React.ReactNode
  className?: string
  scale?: number
  rotate?: number
}

export default function HoverCard({ 
  children, 
  hoverContent, 
  className = '',
  scale = 1.05,
  rotate = 0
}: HoverCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`relative ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        scale,
        rotate,
        transition: { duration: 0.2, ease: 'easeOut' }
      }}
    >
      {children}
      
      {hoverContent && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8
          }}
          transition={{ duration: 0.2 }}
        >
          {hoverContent}
        </motion.div>
      )}
    </motion.div>
  )
}
