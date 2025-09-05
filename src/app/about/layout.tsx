import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Altitude Intelligence | Intelligence Services Team & Intelligence Consulting Company',
  description: 'Intelligence consulting company with defense intelligence professionals and security intelligence experts. Learn about our intelligence services team and mission to deliver OSINT, GEOINT, and threat intelligence solutions.',
  keywords: 'intelligence consulting company, intelligence services team, defense intelligence professionals, security intelligence experts, intelligence consulting, OSINT services, GEOINT analysis, threat intelligence',
  openGraph: {
    title: 'About Altitude Intelligence | Intelligence-as-a-Service Team & Mission',
    description: 'Learn about Altitude Intelligence\'s mission to democratize access to high-quality intelligence. Meet our team of intelligence professionals with decades of combined experience.',
    url: 'https://altitude-intelligence.com/about',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altitude-intelligence.com/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
