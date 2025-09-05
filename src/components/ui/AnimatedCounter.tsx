'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface AnimatedCounterProps {
  end: number
  start?: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
  delay?: number
  decimals?: number
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  start = 0,
  duration = 2,
  suffix = '',
  prefix = '',
  className,
  delay = 0,
  decimals = 0
}) => {
  const [count, setCount] = useState(start)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const timer = setTimeout(() => {
      const increment = (end - start) / (duration * 60) // 60fps
      let current = start

      const counter = setInterval(() => {
        current += increment
        if (current >= end) {
          setCount(end)
          clearInterval(counter)
        } else {
          setCount(current)
        }
      }, 1000 / 60)

      return () => clearInterval(counter)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [isInView, end, start, duration, delay])

  const formatNumber = (num: number) => {
    return num.toFixed(decimals)
  }

  return (
    <motion.span
      ref={ref}
      className={cn('font-bold', className)}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, delay }}
    >
      {prefix}{formatNumber(count)}{suffix}
    </motion.span>
  )
}

export default AnimatedCounter
