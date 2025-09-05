import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Intelligence Case Studies | Defense Intelligence Success Stories | Altitude Intelligence',
  description: 'Intelligence case studies showcasing OSINT services, GEOINT analysis, and intelligence consulting success. Defense intelligence and security intelligence solutions with proven results.',
  keywords: 'intelligence case studies, defense intelligence success, intelligence consulting results, OSINT services case studies, GEOINT analysis success, intelligence solutions results, security intelligence projects',
  openGraph: {
    title: 'Intelligence Case Studies | Real-World Success Stories',
    description: 'Explore detailed case studies showcasing how our Intelligence-as-a-Service solutions have delivered measurable results across defense, security, commercial, and humanitarian sectors.',
    url: 'https://altitude-intelligence.com/case-studies',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altitude-intelligence.com/case-studies',
  },
}

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
