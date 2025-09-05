'use client'

import { useEffect } from 'react'

interface LazyScriptProps {
  src: string
  strategy?: 'afterInteractive' | 'lazyOnload' | 'beforeInteractive'
  onLoad?: () => void
  onError?: () => void
}

export default function LazyScript({ 
  src, 
  strategy = 'lazyOnload', 
  onLoad, 
  onError 
}: LazyScriptProps) {
  useEffect(() => {
    if (strategy === 'beforeInteractive') {
      // Load immediately
      loadScript()
    } else if (strategy === 'afterInteractive') {
      // Load after page is interactive
      if (document.readyState === 'complete') {
        loadScript()
      } else {
        window.addEventListener('load', loadScript)
      }
    } else {
      // Lazy load after a delay
      const timer = setTimeout(loadScript, 2000)
      return () => clearTimeout(timer)
    }

    function loadScript() {
      // Check if script already exists
      if (document.querySelector(`script[src="${src}"]`)) {
        onLoad?.()
        return
      }

      const script = document.createElement('script')
      script.src = src
      script.async = true
      script.defer = true
      
      script.onload = () => {
        onLoad?.()
      }
      
      script.onerror = () => {
        console.warn(`Failed to load script: ${src}`)
        onError?.()
      }

      document.head.appendChild(script)
    }
  }, [src, strategy, onLoad, onError])

  return null
}
