'use client'

import React, { useRef } from 'react'
import { motion, useInView, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  delay?: number
  duration?: number
  distance?: number
  className?: string
  threshold?: number
  once?: boolean
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 30,
  className,
  threshold = 0.1,
  once = true,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { 
    once, 
    margin: '-50px 0px'
  })

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, opacity: 0 }
      case 'down':
        return { y: -distance, opacity: 0 }
      case 'left':
        return { x: distance, opacity: 0 }
      case 'right':
        return { x: -distance, opacity: 0 }
      case 'fade':
        return { opacity: 0 }
      default:
        return { y: distance, opacity: 0 }
    }
  }

  const getAnimatePosition = () => {
    switch (direction) {
      case 'up':
        return { y: 0, opacity: 1 }
      case 'down':
        return { y: 0, opacity: 1 }
      case 'left':
        return { x: 0, opacity: 1 }
      case 'right':
        return { x: 0, opacity: 1 }
      case 'fade':
        return { opacity: 1 }
      default:
        return { y: 0, opacity: 1 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={isInView ? getAnimatePosition() : getInitialPosition()}
      transition={{
        duration,
        delay,
        ease: 'easeOut'
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
