import type { Metadata } from 'next'
import { Orbitron, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PerformanceMonitor from '@/components/PerformanceMonitor'

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700', '800', '900'],
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
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
    <html lang="en" className={`${orbitron.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Critical CSS inline */}
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              --color-primary-600: #2563eb;
              --color-primary-700: #1d4ed8;
              --color-primary-800: #1e40af;
              --color-gray-50: #f8fafc;
              --color-gray-900: #0f172a;
              --color-gray-300: #cbd5e1;
              --color-accent-500: #f97316;
              --font-sans: var(--font-jetbrains-mono), 'JetBrains Mono', 'Fira Code', monospace;
              --font-display: var(--font-orbitron), 'Orbitron', 'Exo 2', system-ui, sans-serif;
            }
            * { box-sizing: border-box; }
            html { scroll-behavior: smooth; font-size: 16px; }
            body { font-family: var(--font-sans); line-height: 1.5; color: var(--color-gray-900); background-color: var(--color-gray-50); -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; margin: 0; padding: 0; }
            h1,h2,h3,h4,h5,h6 { font-family: var(--font-display); font-weight: 700; line-height: 1.25; letter-spacing: -0.025em; margin: 0; }
            .gradient-text { background: linear-gradient(135deg, var(--color-primary-600), var(--color-accent-500)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
            .gradient-bg-dark { background: linear-gradient(135deg, var(--color-gray-900), var(--color-primary-800)); }
            .min-h-screen { min-height: 100vh; }
            .flex { display: flex; }
            .items-center { align-items: center; }
            .justify-center { justify-content: center; }
            .relative { position: relative; }
            .absolute { position: absolute; }
            .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
            .opacity-10 { opacity: 0.1; }
            .opacity-20 { opacity: 0.2; }
            .text-white { color: white; }
            .text-gray-300 { color: var(--color-gray-300); }
            .bg-cover { background-size: cover; }
            .bg-center { background-position: center; }
            .object-cover { object-fit: cover; }
            .grid { display: grid; }
            .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
            .gap-16 { gap: 4rem; }
            .max-w-7xl { max-width: 80rem; }
            .mx-auto { margin-left: auto; margin-right: auto; }
            .px-4 { padding-left: 1rem; padding-right: 1rem; }
            .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
            .text-6xl { font-size: 3.75rem; line-height: 1; }
            .text-8xl { font-size: 6rem; line-height: 1; }
            .text-5xl { font-size: 3rem; line-height: 1; }
            .text-xl { font-size: 1.25rem; line-height: 1.75; }
            .text-2xl { font-size: 1.5rem; line-height: 2; }
            .space-y-8 > * + * { margin-top: 2rem; }
            .space-y-6 > * + * { margin-top: 1.5rem; }
            @media (min-width: 1024px) {
              .lg\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
              .lg\\:text-8xl { font-size: 6rem; }
              .lg\\:text-6xl { font-size: 3.75rem; }
              .lg\\:text-2xl { font-size: 1.5rem; }
            }
            @media (min-width: 640px) {
              .sm\\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
            }
            @media (min-width: 1024px) {
              .lg\\:px-8 { padding-left: 2rem; padding-right: 2rem; }
            }
          `
        }} />
        
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
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased">
        <PerformanceMonitor />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
