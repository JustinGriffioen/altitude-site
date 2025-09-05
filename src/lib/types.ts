// Core type definitions for the application

export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
  sectors: string[]
}

export interface UseCase extends Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
  sectors: string[]
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  expertise: string[]
  image: string
}

export interface CompanyStat {
  value: number
  label: string
  suffix?: string
  prefix?: string
}

export interface NavigationItem {
  name: string
  href: string
  children?: NavigationItem[]
}

export interface ContactForm {
  name: string
  email: string
  company: string
  phone?: string
  message: string
  serviceInterest?: string[]
  urgency: 'low' | 'medium' | 'high'
}

export interface CaseStudy {
  id: string
  title: string
  client: string
  sector: string
  challenge: string
  solution: string
  results: string[]
  technologies: string[]
  duration: string
  image: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  tags: string[]
  image: string
  readTime: number
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  image?: string
  rating: number
}

// Animation and UI types
export interface AnimationConfig {
  duration: number
  delay?: number
  ease?: string
  direction?: 'up' | 'down' | 'left' | 'right'
}

export interface ThemeConfig {
  mode: 'light' | 'dark' | 'system'
  primaryColor: string
  secondaryColor: string
}

// API Response types
export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  error?: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}
