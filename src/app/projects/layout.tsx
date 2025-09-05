import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Intelligence Projects | Defense Intelligence Success Stories | Altitude Intelligence',
  description: 'Intelligence projects showcasing OSINT services, GEOINT analysis, and intelligence consulting success. Defense intelligence and security intelligence solutions with proven results.',
  keywords: 'intelligence projects, defense intelligence success, intelligence consulting results, OSINT services projects, GEOINT analysis success, intelligence solutions results, security intelligence projects',
  openGraph: {
    title: 'Intelligence Projects | Real-World Success Stories',
    description: 'Explore detailed projects showcasing how our Intelligence-as-a-Service solutions have delivered measurable results across defense, security, commercial, and humanitarian sectors.',
    url: 'https://altitude-intelligence.com/projects',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altitude-intelligence.com/projects',
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
