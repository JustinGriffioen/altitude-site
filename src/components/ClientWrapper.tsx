'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

interface ClientWrapperProps {
  children: ReactNode
  className?: string
  animation?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight'
  delay?: number
}

export default function ClientWrapper({ 
  children, 
  className = '', 
  animation = 'fadeIn',
  delay = 0 
}: ClientWrapperProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const getAnimationProps = () => {
    const baseProps = {
      initial: { opacity: 0 },
      animate: inView ? { opacity: 1 } : { opacity: 0 },
      transition: { duration: 0.6, delay }
    }

    switch (animation) {
      case 'slideUp':
        return {
          ...baseProps,
          initial: { opacity: 0, y: 50 },
          animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
        }
      case 'slideInLeft':
        return {
          ...baseProps,
          initial: { opacity: 0, x: -50 },
          animate: inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
        }
      case 'slideInRight':
        return {
          ...baseProps,
          initial: { opacity: 0, x: 50 },
          animate: inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
        }
      default:
        return baseProps
    }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      {...getAnimationProps()}
    >
      {children}
    </motion.div>
  )
}
