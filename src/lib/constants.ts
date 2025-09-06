// Site configuration and constants
export const SITE_CONFIG = {
  name: 'Altitude Intelligence',
  tagline: 'Intelligence-as-a-Service',
  description: 'Mission-ready intelligence solutions for defense, security, and commercial sectors',
  url: 'https://altitude-intelligence.com',
  email: 'contact@altitude-intelligence.com',
  phone: '+1 (555) 123-4567',
  location: 'Vancouver, BC, Canada',
  social: {
    linkedin: '#',
    twitter: '#',
  }
}

// Navigation structure
export const NAVIGATION = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Solutions', 
      href: '/iaas',
      children: [
        { name: 'Intelligence-as-a-Service', href: '/iaas' },
        { name: 'Border Security', href: '/iaas#border-security' },
        { name: 'Maritime Domain', href: '/iaas#maritime' },
        { name: 'Critical Infrastructure', href: '/iaas#infrastructure' },
        { name: 'Crisis Response', href: '/iaas#crisis' },
        { name: 'Corporate Risk', href: '/iaas#corporate' },
      ]
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ]
}

// Service offerings
export const SERVICES = {
  iaas: {
    title: 'Intelligence-as-a-Service',
    description: 'Flexible intelligence solutions that scale with your mission',
    features: [
      'On-demand expertise',
      'Multi-source data fusion',
      'Rapid deployment',
      'Custom integrations'
    ]
  },
  borderSecurity: {
    title: 'Border Security Intelligence',
    description: 'Advanced monitoring and detection for border operations',
    features: [
      'Illicit activity detection',
      'Trail and staging site identification',
      'Cross-border movement tracking',
      'Real-time alerts'
    ]
  },
  maritime: {
    title: 'Maritime Domain Awareness',
    description: 'Comprehensive maritime intelligence and vessel tracking',
    features: [
      'Dark vessel detection',
      'Port and coastal monitoring',
      'Suspicious activity alerts',
      'RF signal analysis'
    ]
  }
}

// Company stats
export const COMPANY_STATS = {
  productsDelivered: 100,
  activeTheaters: 5,
  responseTime: 24,
  clientCountries: 3,
  yearsExperience: 5
}

// Use cases
export const USE_CASES = [
  {
    id: 'border-security',
    title: 'Border Security Operations',
    description: 'Detect and monitor illicit cross-border activities using advanced RF and GEOINT capabilities',
    icon: 'Shield',
    features: [
      'Unregistered trail detection',
      'Forward staging site identification',
      'Vehicle and foot movement tracking',
      'Smuggling corridor mapping'
    ],
    sectors: ['Defense', 'Border Patrol', 'Customs']
  },
  {
    id: 'maritime-awareness',
    title: 'Maritime Domain Awareness',
    description: 'Comprehensive vessel tracking and suspicious activity monitoring in maritime environments',
    icon: 'Anchor',
    features: [
      'Dark vessel detection without AIS',
      'Port and coastal surveillance',
      'Suspicious movement patterns',
      'RF signal correlation'
    ],
    sectors: ['Coast Guard', 'Navy', 'Port Security']
  },
  {
    id: 'infrastructure-protection',
    title: 'Critical Infrastructure Protection',
    description: 'Monitor and protect critical infrastructure from threats and unauthorized access',
    icon: 'Building',
    features: [
      'Perimeter monitoring',
      'Unauthorized device detection',
      'Threat assessment',
      'Real-time security alerts'
    ],
    sectors: ['Energy', 'Transportation', 'Telecommunications']
  },
  {
    id: 'crisis-response',
    title: 'Crisis Response & Humanitarian Aid',
    description: 'Support humanitarian operations and crisis response with real-time intelligence',
    icon: 'Heart',
    features: [
      'Population displacement tracking',
      'Infrastructure damage assessment',
      'Resource allocation support',
      'Emergency response coordination'
    ],
    sectors: ['NGOs', 'Government', 'International Organizations']
  },
  {
    id: 'corporate-risk',
    title: 'Corporate Risk Intelligence',
    description: 'Geopolitical and supply chain risk assessment for corporate decision-making',
    icon: 'TrendingUp',
    features: [
      'Supply chain monitoring',
      'Geopolitical risk assessment',
      'Asset protection',
      'Due diligence support'
    ],
    sectors: ['Corporate', 'Finance', 'Insurance']
  },
  {
    id: 'conflict-monitoring',
    title: 'Conflict Zone Intelligence',
    description: 'Monitor troop movements and conflict dynamics using multi-source intelligence',
    icon: 'Target',
    features: [
      'Troop movement tracking',
      'Battle damage assessment',
      'OSINT integration',
      'Change detection analysis'
    ],
    sectors: ['Defense', 'Intelligence', 'International Organizations']
  },
  {
    id: 'agriculture-forestry',
    title: 'Agriculture & Forestry Intelligence',
    description: 'Remote sensing and satellite monitoring for agricultural productivity, forest health, and environmental monitoring',
    icon: 'TreePine',
    features: [
      'Crop monitoring and yield prediction',
      'Forest health assessment',
      'Drought and flood detection',
      'Environmental change tracking'
    ],
    sectors: ['Agriculture', 'Forestry', 'Environmental', 'Government']
  }
]

// Technology stack
export const TECHNOLOGIES = [
  'Satellite Imagery Analysis',
  'RF Signal Intelligence',
  'Open Source Intelligence (OSINT)',
  'Geospatial Intelligence (GEOINT)',
  'Machine Learning & AI',
  'Real-time Data Fusion',
  'Cloud Infrastructure',
  'API Integration'
]

// Team members
export const TEAM = [
  {
    name: 'Sarah Chen',
    role: 'Chief Intelligence Officer',
    bio: 'Former NSA analyst with 15+ years in signals intelligence and geospatial analysis',
    expertise: ['SIGINT', 'GEOINT', 'Threat Assessment'],
    image: '/team/sarah-chen.jpg'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Technical Director',
    bio: 'Ex-DARPA researcher specializing in AI-driven intelligence fusion and real-time analytics',
    expertise: ['AI/ML', 'Data Fusion', 'System Architecture'],
    image: '/team/marcus-rodriguez.jpg'
  },
  {
    name: 'Dr. Elena Volkov',
    role: 'Head of Operations',
    bio: 'Former UN peacekeeping intelligence officer with extensive field experience in conflict zones',
    expertise: ['Field Operations', 'Crisis Response', 'International Relations'],
    image: '/team/elena-volkov.jpg'
  }
]
