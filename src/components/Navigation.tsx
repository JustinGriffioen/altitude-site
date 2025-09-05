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
          ? 'bg-primary-950/95 backdrop-blur-xl shadow-2xl border-b border-primary-600/30' 
          : 'bg-primary-950/90 backdrop-blur-sm shadow-xl border-b border-primary-500/20'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Enhanced Logo - No Square, Bigger */}
          <Link href="/" className="flex items-center space-x-6 group">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image 
                src="/logo.png" 
                alt="Altitude Intelligence" 
                width={100}
                height={100}
                className="w-20 h-20 object-contain drop-shadow-lg"
                priority
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-5xl font-black text-white group-hover:text-primary-400 transition-colors duration-300 font-display tracking-tight">
                Altitude
              </span>
              <span className="text-3xl font-bold text-gray-300 group-hover:text-primary-300 transition-colors duration-300 font-display tracking-wide">
                Intelligence
              </span>
              <span className="text-sm text-gray-400 font-medium tracking-wide">
                Intelligence-as-a-Service
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAVIGATION.main.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-white bg-primary-800/50 border border-primary-600/30'
                      : 'text-gray-300 hover:text-white hover:bg-primary-800/50'
                  }`}
                >
                  {item.name}
                </Link>
                
                {/* Enhanced Submenu */}
                {item.children && (
                  <motion.div 
                    className="absolute left-0 mt-2 w-80 bg-primary-950 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-primary-600/30 overflow-hidden"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    whileHover={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-6">
                      <div className="space-y-2">
                        {item.children.map((subItem, index) => (
                          <motion.div
                            key={subItem.name}
                            initial={{ opacity: 0, x: -10 }}
                            whileHover={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                          >
                            <Link
                              href={subItem.href}
                              className="block p-3 rounded-xl hover:bg-primary-900/50 transition-colors duration-200 group"
                            >
                              <div className="font-semibold text-white group-hover:text-primary-400 transition-colors">
                                {subItem.name}
                              </div>
                              <div className="text-xs text-gray-400 mt-1">
                                {subItem.name === 'Intelligence-as-a-Service' && 'Core Platform'}
                                {subItem.name === 'Border Security' && 'Surveillance & Detection'}
                                {subItem.name === 'Maritime Domain' && 'Vessel Tracking'}
                                {subItem.name === 'Critical Infrastructure' && 'Asset Protection'}
                                {subItem.name === 'Crisis Response' && 'Emergency Support'}
                                {subItem.name === 'Corporate Risk' && 'Business Intelligence'}
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="px-8 py-3">
                Start Your Mission
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white p-2 rounded-lg hover:bg-primary-800/50 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 pt-4 pb-6 space-y-2 bg-gradient-to-br from-primary-900 to-primary-950 rounded-2xl mt-4 border border-primary-600/30">
                {NAVIGATION.main.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors duration-200 ${
                        isActive(item.href)
                          ? 'text-white bg-primary-800/50 border border-primary-600/30'
                          : 'text-gray-300 hover:text-white hover:bg-primary-800/50'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{item.name}</span>
                      {item.children && <ChevronDown size={20} className="text-gray-400" />}
                    </Link>
                    
                    {/* Mobile Submenu */}
                    {item.children && (
                      <motion.div
                        className="ml-4 space-y-1 mt-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.children.map((subItem, subIndex) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-primary-800/50 rounded-lg transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="pt-4 border-t border-primary-600/30"
                >
                  <Button size="lg" className="w-full">
                    Start Your Mission
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation