'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { NAVIGATION } from '@/lib/constants'
import Button from '@/components/ui/Button'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path


  return (
    <motion.nav 
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-slate-700' 
          : 'bg-slate-900/90 backdrop-blur-sm shadow-xl border-b border-slate-800'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo Only */}
          <Link href="/" className="flex items-center group">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image 
                src="/logo.png" 
                alt="Altitude Intelligence" 
                width={60}
                height={60}
                className="w-15 h-15 object-contain drop-shadow-lg"
                priority
              />
            </motion.div>
          </Link>

          {/* Book a Call Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white">
              Book a Call
            </Button>
          </motion.div>

        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation