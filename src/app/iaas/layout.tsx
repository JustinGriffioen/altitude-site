import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Intelligence-as-a-Service (IaaS) | OSINT Services & Intelligence Consulting | Altitude Intelligence',
  description: 'Intelligence-as-a-Service solutions with OSINT services, GEOINT analysis, and intelligence consulting. Defense intelligence and security intelligence solutions with 24-hour response time.',
  keywords: 'intelligence as a service, IaaS, OSINT services, GEOINT analysis, intelligence consulting, defense intelligence, security intelligence, threat intelligence, intelligence analysis, RF intelligence',
  openGraph: {
    title: 'Intelligence-as-a-Service (IaaS) | Real Intelligence, Zero Overhead',
    description: 'Discover our Intelligence-as-a-Service solutions delivering real-time OSINT, GEOINT, and RF intelligence for defense, security, and commercial sectors.',
    url: 'https://altitude-intelligence.com/iaas',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altitude-intelligence.com/iaas',
  },
}

export default function IAASLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
