'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Search, MapPin, Radio, Settings, Shield, AlertTriangle, BarChart3, Clock, Layers } from 'lucide-react'
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
    { name: 'Intelligence', href: '/services/intelligence', icon: Shield },
    { name: 'OSINT Intelligence', href: '/services/osint', icon: Search },
    { name: 'GEOINT Analysis', href: '/services/geoint', icon: MapPin },
    { name: 'RF Intelligence', href: '/services/rf-intelligence', icon: Radio },
    { name: 'Virtual Intelligence', href: '/services/virtual-intelligence', icon: Settings },
    { name: 'On-Site Operations', href: '/services/onsite-operations', icon: Shield }
  ]

  const useCases = [
    { name: 'Border Security', href: '/use-cases/border-security', icon: Shield },
    { name: 'Maritime Domain', href: '/use-cases/maritime-domain', icon: MapPin },
    { name: 'Crisis Response', href: '/use-cases/crisis-response', icon: AlertTriangle },
    { name: 'Corporate Risk', href: '/use-cases/corporate-risk', icon: BarChart3 },
    { name: 'Critical Infrastructure', href: '/use-cases/critical-infrastructure', icon: Layers },
    { name: 'Disaster Response', href: '/use-cases/disaster-response', icon: Clock }
  ]


  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-2xl border-b border-grey-200' 
          : 'bg-transparent backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div 
              className="relative"
            >
              <Image 
                src="/logo.png" 
                alt="Altitude Intelligence" 
                width={400}
                height={400}
                className="w-64 h-64 object-contain drop-shadow-lg transition-all duration-500 -m-6"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {/* Use Cases Dropdown - Moved first */}
            <div className="relative">
              <button
                className={`flex items-center space-x-2 transition-colors duration-300 font-display font-semibold text-lg ${
                  isScrolled 
                    ? 'text-grey-800 hover:text-primary-600' 
                    : 'text-white hover:text-white/80'
                }`}
                onMouseEnter={() => setActiveDropdown('use-cases')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>For Whom?</span>
                <ChevronDown className="w-5 h-5" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'use-cases' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-3 w-72 rounded-xl shadow-2xl py-4 bg-white/95 backdrop-blur-md border border-grey-200"
                    onMouseEnter={() => setActiveDropdown('use-cases')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {useCases.map((useCase) => {
                      const IconComponent = useCase.icon
                      return (
                        <Link
                          key={useCase.href}
                          href={useCase.href}
                          className="flex items-center space-x-3 px-6 py-4 transition-colors duration-300 font-display font-bold text-xl text-grey-700 hover:text-primary-600 hover:bg-grey-50"
                        >
                          <IconComponent size={20} className="flex-shrink-0" />
                          <span>{useCase.name}</span>
                        </Link>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Dropdown - Moved second */}
            <div className="relative">
              <button
                className={`flex items-center space-x-2 transition-colors duration-300 font-display font-semibold text-lg ${
                  isScrolled 
                    ? 'text-grey-800 hover:text-primary-600' 
                    : 'text-white hover:text-white/80'
                }`}
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Services</span>
                <ChevronDown className="w-5 h-5" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-3 w-72 rounded-xl shadow-2xl py-4 bg-white/95 backdrop-blur-md border border-grey-200"
                    onMouseEnter={() => setActiveDropdown('services')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {services.map((service) => {
                      const IconComponent = service.icon
                      return (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="flex items-center space-x-3 px-6 py-4 transition-colors duration-300 font-display font-bold text-xl text-grey-700 hover:text-primary-600 hover:bg-grey-50"
                        >
                          <IconComponent size={20} className="flex-shrink-0" />
                          <span>{service.name}</span>
                        </Link>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Links */}
            <Link href="/projects" className={`transition-colors duration-300 font-display font-semibold text-lg ${
              isScrolled 
                ? 'text-grey-800 hover:text-primary-600' 
                : 'text-white hover:text-white/80'
            }`}>
              Projects
            </Link>
            <Link href="/about" className={`transition-colors duration-300 font-display font-semibold text-lg ${
              isScrolled 
                ? 'text-grey-800 hover:text-primary-600' 
                : 'text-white hover:text-white/80'
            }`}>
              About
            </Link>
            <Link href="/careers" className={`transition-colors duration-300 font-display font-semibold text-lg ${
              isScrolled 
                ? 'text-grey-800 hover:text-primary-600' 
                : 'text-white hover:text-white/80'
            }`}>
              Careers
            </Link>
            <Link href="/contact" className={`transition-colors duration-300 font-display font-semibold text-lg ${
              isScrolled 
                ? 'text-grey-800 hover:text-primary-600' 
                : 'text-white hover:text-white/80'
            }`}>
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors duration-300 p-2 ${
                isScrolled 
                  ? 'text-grey-800 hover:text-primary-600' 
                  : 'text-white hover:text-white/80'
              }`}
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className={`px-8 py-3 text-lg font-display font-semibold shadow-lg transition-all duration-300 ${
                isScrolled 
                  ? 'bg-primary-dark hover:bg-primary-muted text-white' 
                  : 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
              }`}>
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
              className="lg:hidden py-6 border-t border-grey-200"
            >
              <div className="space-y-4">
                {/* Use Cases Mobile - Moved first */}
                <div>
                  <div className="font-display font-black text-2xl mb-4 text-grey-800">For Whom?</div>
                  <div className="space-y-2 ml-4">
                    {useCases.map((useCase) => {
                      const IconComponent = useCase.icon
                      return (
                        <Link
                          key={useCase.href}
                          href={useCase.href}
                          className="flex items-center space-x-3 transition-colors duration-300 font-display font-bold text-lg py-2 text-grey-600 hover:text-primary-600"
                          onClick={() => setIsOpen(false)}
                        >
                          <IconComponent size={18} className="flex-shrink-0" />
                          <span>{useCase.name}</span>
                        </Link>
                      )
                    })}
                  </div>
                </div>

                {/* Services Mobile - Moved second */}
                <div>
                  <div className="font-display font-black text-2xl mb-4 text-grey-800">Services</div>
                  <div className="space-y-2 ml-4">
                    {services.map((service) => {
                      const IconComponent = service.icon
                      return (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="flex items-center space-x-3 transition-colors duration-300 font-display font-bold text-lg py-2 text-grey-600 hover:text-primary-600"
                          onClick={() => setIsOpen(false)}
                        >
                          <IconComponent size={18} className="flex-shrink-0" />
                          <span>{service.name}</span>
                        </Link>
                      )
                    })}
                  </div>
                </div>

                {/* Other Links Mobile */}
                <div className="space-y-3">
                  <Link href="/projects" className="block transition-colors duration-300 font-display font-black text-2xl py-3 text-grey-800 hover:text-primary-600" onClick={() => setIsOpen(false)}>
                    Projects
                  </Link>
                  <Link href="/about" className="block transition-colors duration-300 font-display font-black text-2xl py-3 text-grey-800 hover:text-primary-600" onClick={() => setIsOpen(false)}>
                    About
                  </Link>
                  <Link href="/careers" className="block transition-colors duration-300 font-display font-black text-2xl py-3 text-grey-800 hover:text-primary-600" onClick={() => setIsOpen(false)}>
                    Careers
                  </Link>
                  <Link href="/contact" className="block transition-colors duration-300 font-display font-black text-2xl py-3 text-grey-800 hover:text-primary-600" onClick={() => setIsOpen(false)}>
                    Contact
                  </Link>
                </div>

                {/* Mobile CTA */}
                <div className="pt-4">
                  <Button size="lg" className="w-full font-display font-black text-2xl shadow-lg transition-all duration-300 bg-primary-600 hover:bg-primary-700 text-white" onClick={() => setIsOpen(false)}>
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