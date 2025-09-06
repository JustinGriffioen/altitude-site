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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  const services = [
    { name: 'OSINT Intelligence', href: '/services/osint' },
    { name: 'GEOINT Analysis', href: '/services/geoint' },
    { name: 'RF Intelligence', href: '/services/rf-intelligence' },
    { name: 'Virtual Intelligence', href: '/services/virtual-intelligence' },
    { name: 'On-Site Operations', href: '/services/onsite-operations' }
  ]

  const useCases = [
    { name: 'Border Security', href: '/use-cases/border-security' },
    { name: 'Maritime Domain', href: '/use-cases/maritime-domain' },
    { name: 'Crisis Response', href: '/use-cases/crisis-response' },
    { name: 'Corporate Risk', href: '/use-cases/corporate-risk' },
    { name: 'Critical Infrastructure', href: '/use-cases/critical-infrastructure' },
    { name: 'Disaster Response', href: '/use-cases/disaster-response' }
  ]


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
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image 
                src="/logo.png" 
                alt="Altitude Intelligence" 
                width={50}
                height={50}
                className="w-12 h-12 object-contain drop-shadow-lg"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-slate-200 hover:text-white transition-colors duration-200 font-medium"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2"
                    onMouseEnter={() => setActiveDropdown('services')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors duration-200"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Use Cases Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-slate-200 hover:text-white transition-colors duration-200 font-medium"
                onMouseEnter={() => setActiveDropdown('use-cases')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Use Cases</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'use-cases' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2"
                    onMouseEnter={() => setActiveDropdown('use-cases')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {useCases.map((useCase) => (
                      <Link
                        key={useCase.href}
                        href={useCase.href}
                        className="block px-4 py-2 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors duration-200"
                      >
                        {useCase.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Links */}
            <Link href="/projects" className="text-slate-200 hover:text-white transition-colors duration-200 font-medium">
              Projects
            </Link>
            <Link href="/about" className="text-slate-200 hover:text-white transition-colors duration-200 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-slate-200 hover:text-white transition-colors duration-200 font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-200 hover:text-white transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm">
                Book a Call
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-slate-700 py-4"
            >
              <div className="space-y-4">
                {/* Services Mobile */}
                <div>
                  <div className="text-slate-300 font-medium mb-2">Services</div>
                  <div className="space-y-2 ml-4">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block text-slate-400 hover:text-white transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Use Cases Mobile */}
                <div>
                  <div className="text-slate-300 font-medium mb-2">Use Cases</div>
                  <div className="space-y-2 ml-4">
                    {useCases.map((useCase) => (
                      <Link
                        key={useCase.href}
                        href={useCase.href}
                        className="block text-slate-400 hover:text-white transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {useCase.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Other Links Mobile */}
                <div className="space-y-2">
                  <Link href="/projects" className="block text-slate-200 hover:text-white transition-colors duration-200" onClick={() => setIsOpen(false)}>
                    Projects
                  </Link>
                  <Link href="/about" className="block text-slate-200 hover:text-white transition-colors duration-200" onClick={() => setIsOpen(false)}>
                    About
                  </Link>
                  <Link href="/contact" className="block text-slate-200 hover:text-white transition-colors duration-200" onClick={() => setIsOpen(false)}>
                    Contact
                  </Link>
                </div>

                {/* Mobile CTA */}
                <div className="pt-4">
                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setIsOpen(false)}>
                    Book a Call
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation