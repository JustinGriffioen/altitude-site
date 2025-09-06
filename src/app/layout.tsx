import type { Metadata } from 'next'
import { Orbitron, Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PerformanceMonitor from '@/components/PerformanceMonitor'
import CookieConsent from '@/components/CookieConsent'

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700', '800', '900'],
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Altitude Intelligence - Intelligence Services & Intelligence-as-a-Service (IaaS) | Defense Intelligence Solutions',
  description: 'Leading intelligence services provider offering Intelligence-as-a-Service (IaaS) solutions. OSINT services, GEOINT analysis, defense intelligence, and intelligence consulting for security operations worldwide.',
  keywords: 'intelligence services, intelligence as a service, IaaS, OSINT services, GEOINT analysis, defense intelligence, intelligence consulting, threat intelligence, security intelligence, intelligence analysis, RF intelligence, border security intelligence, maritime domain awareness, critical infrastructure protection',
  authors: [{ name: 'Altitude Intelligence', url: 'https://altitude-intelligence.com' }],
  creator: 'Altitude Intelligence',
  publisher: 'Altitude Intelligence',
  applicationName: 'Altitude Intelligence',
  category: 'Intelligence Services',
  classification: 'Defense and Security Intelligence',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://altitude-intelligence.com'),
  alternates: {
    canonical: 'https://altitude-intelligence.com',
  },
  openGraph: {
    title: 'Altitude Intelligence - Intelligence-as-a-Service (IaaS) | Defense & Security Intelligence Solutions',
    description: 'Leading Intelligence-as-a-Service provider delivering mission-critical intelligence solutions for defense, security, commercial, and humanitarian sectors. Real-time OSINT, GEOINT, and RF intelligence with 24-hour response time.',
    url: 'https://altitude-intelligence.com',
    siteName: 'Altitude Intelligence',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Altitude Intelligence - Intelligence-as-a-Service Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Altitude Intelligence - Intelligence-as-a-Service (IaaS)',
    description: 'Leading Intelligence-as-a-Service provider delivering mission-critical intelligence solutions for defense, security, commercial, and humanitarian sectors.',
    images: ['/logo.png'],
    creator: '@AltitudeIntel',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Altitude Intelligence",
    "description": "Leading Intelligence-as-a-Service provider delivering mission-critical intelligence solutions for defense, security, commercial, and humanitarian sectors.",
    "url": "https://altitude-intelligence.com",
    "logo": "https://altitude-intelligence.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "contact@altitude-intelligence.com",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vancouver",
      "addressRegion": "BC",
      "addressCountry": "CA"
    },
    "sameAs": [
      "https://linkedin.com/company/altitude-intelligence",
      "https://twitter.com/AltitudeIntel"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "10-50",
    "industry": "Intelligence Services",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "49.2827",
        "longitude": "-123.1207"
      },
      "geoRadius": "10000000"
    },
    "offers": {
      "@type": "Offer",
      "name": "Intelligence-as-a-Service",
      "description": "Flexible intelligence solutions for defense, security, commercial, and humanitarian sectors",
      "category": "Intelligence Services"
    }
  }

  return (
    <html lang="en" className={`${orbitron.variable} ${inter.variable}`}>
      <head>
        {/* Design system CSS is loaded via globals.css */}
        
        {/* Preconnect to critical third-party origins */}
        <link rel="preconnect" href="https://cdn.loom.com" />
        <link rel="preconnect" href="https://evs.sgmt.loom.com" />
        <link rel="preconnect" href="https://ds-cdn.prod-east.frontend.public.atl-paas.net" />
        <link rel="preconnect" href="https://o398470.ingest.sentry.io" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for other domains */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://js-eu1.hsforms.net" />
        <link rel="dns-prefetch" href="https://js-eu1.hs-analytics.net" />
        <link rel="dns-prefetch" href="https://client.crisp.chat" />
        <link rel="dns-prefetch" href="https://snap.licdn.com" />
        
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <PerformanceMonitor />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
