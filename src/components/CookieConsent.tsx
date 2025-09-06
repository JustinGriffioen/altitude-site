'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cookie } from 'lucide-react'
import Button from '@/components/ui/Button'

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookie-consent')
    if (!hasConsented) {
      // Show cookie notice after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-grey-200 shadow-2xl"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex items-start space-x-4 flex-1">
                <div className="flex-shrink-0">
                  <Cookie className="w-8 h-8 text-primary-dark" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-grey-900 mb-2">
                    We use cookies to enhance your experience
                  </h3>
                  <p className="text-sm text-grey-600 leading-relaxed">
                    We use essential cookies to make our site work. We'd also like to set analytics cookies 
                    to help us improve our website by collecting and reporting information on how you use it. 
                    For more information, please see our{' '}
                    <a 
                      href="/privacy-policy" 
                      className="text-primary-dark hover:text-primary-muted underline font-medium"
                    >
                      Privacy Policy
                    </a>.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 lg:ml-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDecline}
                  className="text-grey-700 border-grey-300 hover:bg-grey-50"
                >
                  Decline
                </Button>
                <Button
                  size="sm"
                  onClick={handleAccept}
                  className="bg-primary-dark hover:bg-primary-muted text-white"
                >
                  Accept All
                </Button>
              </div>
              
              <button
                onClick={handleDecline}
                className="absolute top-4 right-4 text-grey-400 hover:text-grey-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieConsent
