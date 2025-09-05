'use client'

import { useEffect } from 'react'

interface SEOAnalyticsProps {
  pageTitle?: string
  pageDescription?: string
  pageUrl?: string
  pageType?: string
  articleTitle?: string
  articleAuthor?: string
  articlePublishedTime?: string
  articleModifiedTime?: string
  articleTags?: string[]
}

export default function SEOAnalytics({
  pageTitle,
  pageDescription,
  pageUrl,
  pageType = 'website',
  articleTitle,
  articleAuthor,
  articlePublishedTime,
  articleModifiedTime,
  articleTags = []
}: SEOAnalyticsProps) {
  useEffect(() => {
    // Google Analytics 4 tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageTitle,
        page_location: pageUrl,
        custom_map: {
          custom_parameter_1: pageType
        }
      })
    }

    // Google Search Console tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: pageTitle,
        page_location: pageUrl,
        page_type: pageType
      })
    }
  }, [pageTitle, pageUrl, pageType])

  // Generate structured data for articles
  const generateArticleStructuredData = () => {
    if (pageType === 'article' && articleTitle) {
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": articleTitle,
        "description": pageDescription,
        "author": {
          "@type": "Organization",
          "name": articleAuthor || "Altitude Intelligence"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Altitude Intelligence",
          "logo": {
            "@type": "ImageObject",
            "url": "https://altitude-intelligence.com/logo.png"
          }
        },
        "datePublished": articlePublishedTime,
        "dateModified": articleModifiedTime || articlePublishedTime,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": pageUrl
        },
        "keywords": articleTags.join(", "),
        "articleSection": "Intelligence",
        "wordCount": pageDescription?.split(' ').length || 0
      }
    }
    return null
  }

  const articleStructuredData = generateArticleStructuredData()

  return (
    <>
      {/* Google Analytics */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID', {
              page_title: '${pageTitle}',
              page_location: '${pageUrl}',
              custom_map: {
                custom_parameter_1: '${pageType}'
              }
            });
          `
        }}
      />

      {/* Google Search Console */}
      <meta name="google-site-verification" content="your-google-verification-code" />

      {/* Bing Webmaster Tools */}
      <meta name="msvalidate.01" content="your-bing-verification-code" />

      {/* Yandex Webmaster */}
      <meta name="yandex-verification" content="your-yandex-verification-code" />

      {/* Article structured data */}
      {articleStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleStructuredData)
          }}
        />
      )}

      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Performance hints */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </>
  )
}

// SEO performance monitoring hook
export const useSEOMonitoring = () => {
  useEffect(() => {
    // Monitor Core Web Vitals (simplified)
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Basic performance monitoring
      console.log('Performance monitoring enabled')
    }

    // Monitor page load performance
    if (typeof window !== 'undefined' && window.performance) {
      window.addEventListener('load', () => {
        const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart
        
        // Send to analytics
        if ((window as any).gtag) {
          (window as any).gtag('event', 'page_load_time', {
            value: Math.round(loadTime),
            custom_parameter_1: 'load_time'
          })
        }
      })
    }
  }, [])
}

// SEO audit function
export const auditSEO = () => {
  const issues = []
  
  // Check for missing meta tags
  const title = document.querySelector('title')
  if (!title || title.textContent?.length < 30) {
    issues.push('Title tag is missing or too short (should be 30-60 characters)')
  }
  
  const description = document.querySelector('meta[name="description"]')
  if (!description || (description.getAttribute('content')?.length || 0) < 120) {
    issues.push('Meta description is missing or too short (should be 120-160 characters)')
  }
  
  // Check for heading structure
  const h1 = document.querySelector('h1')
  if (!h1) {
    issues.push('Missing H1 tag')
  }
  
  // Check for alt attributes on images
  const images = document.querySelectorAll('img')
  images.forEach((img, index) => {
    if (!img.alt) {
      issues.push(`Image ${index + 1} is missing alt attribute`)
    }
  })
  
  // Check for internal links
  const internalLinks = document.querySelectorAll('a[href^="/"]')
  if (internalLinks.length < 3) {
    issues.push('Consider adding more internal links for better site structure')
  }
  
  return issues
}
