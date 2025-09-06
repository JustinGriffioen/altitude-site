export interface ServiceData {
  id: string
  title: string
  description: string
  heroDescription: string
  icon: string
  color: string
  features: string[]
  capabilities: {
    title: string
    description: string
    icon: string
    features: string[]
  }[]
}

export interface UseCaseData {
  id: string
  title: string
  description: string
  heroDescription: string
  icon: string
  color: string
  sectors: string[]
  features: string[]
  challenge: string
  solution: string
  results: string[]
  technologies: string[]
}

export const servicesData: ServiceData[] = [
  {
    id: 'osint',
    title: 'OSINT Intelligence',
    description: 'Open Source Intelligence gathering and analysis using publicly available information sources.',
    heroDescription: 'Uncover critical intelligence from publicly available sources. Our OSINT specialists gather, analyze, and synthesize information from social media, news, public records, and digital platforms to deliver actionable intelligence.',
    icon: 'Satellite',
    color: 'blue',
    features: ['Social Media Monitoring', 'News & Media Analysis', 'Public Records Research', 'Dark Web Intelligence'],
    capabilities: [
      {
        title: 'Social Media Intelligence',
        description: 'Monitor and analyze social media platforms for threat intelligence, sentiment analysis, and behavioral patterns.',
        icon: 'Globe',
        features: ['Platform Monitoring', 'Sentiment Analysis', 'Influence Mapping', 'Behavioral Profiling']
      },
      {
        title: 'News & Media Analysis',
        description: 'Comprehensive analysis of news sources, press releases, and media coverage for intelligence gathering.',
        icon: 'Search',
        features: ['Multi-Language Analysis', 'Bias Detection', 'Source Verification', 'Trend Analysis']
      },
      {
        title: 'Public Records Research',
        description: 'Deep dive into public databases, court records, and government filings for background intelligence.',
        icon: 'Shield',
        features: ['Legal Records', 'Corporate Filings', 'Property Records', 'Financial Data']
      },
      {
        title: 'Dark Web Intelligence',
        description: 'Specialized monitoring of dark web forums and marketplaces for threat intelligence and criminal activity.',
        icon: 'BarChart3',
        features: ['Forum Monitoring', 'Threat Actor Tracking', 'Market Analysis', 'Cryptocurrency Tracking']
      }
    ],
  },
  {
    id: 'geoint',
    title: 'GEOINT Analysis',
    description: 'Geospatial Intelligence using satellite imagery, mapping data, and location-based intelligence.',
    heroDescription: 'Advanced satellite imagery analysis, geographic intelligence, and spatial data fusion to deliver critical location-based intelligence for mission-critical operations.',
    icon: 'MapPin',
    color: 'blue',
    features: ['Satellite Imagery Analysis', 'Geographic Intelligence', 'Location Tracking', 'Spatial Data Fusion'],
    capabilities: [
      {
        title: 'Satellite Imagery Analysis',
        description: 'High-resolution satellite imagery processing and analysis for intelligence gathering.',
        icon: 'Satellite',
        features: ['Multi-Spectral Analysis', 'Change Detection', 'Object Recognition', 'Temporal Analysis']
      },
      {
        title: 'Geographic Intelligence',
        description: 'Comprehensive geographic data analysis and spatial intelligence reporting.',
        icon: 'Globe',
        features: ['Terrain Analysis', 'Route Planning', 'Location Intelligence', 'Geographic Profiling']
      },
      {
        title: 'Spatial Data Fusion',
        description: 'Integration of multiple geospatial data sources for comprehensive intelligence.',
        icon: 'Layers',
        features: ['Data Integration', 'Spatial Correlation', 'Multi-Source Analysis', 'Intelligence Synthesis']
      },
      {
        title: 'Location Tracking',
        description: 'Advanced tracking and monitoring capabilities for personnel and assets.',
        icon: 'MapPin',
        features: ['Real-Time Tracking', 'Historical Analysis', 'Pattern Recognition', 'Predictive Modeling']
      }
    ]
  },
  {
    id: 'rf-intelligence',
    title: 'RF Intelligence',
    description: 'Radio Frequency signal detection, analysis, and intelligence gathering from electromagnetic sources.',
    heroDescription: 'Advanced RF signal detection, analysis, and intelligence gathering from electromagnetic sources for mission-critical operations and threat assessment.',
    icon: 'Radio',
    color: 'blue',
    features: ['Signal Detection', 'RF Spectrum Analysis', 'Communication Intercepts', 'Electronic Warfare Support'],
    capabilities: [
      {
        title: 'Signal Detection',
        description: 'Advanced RF signal detection and identification across multiple frequency bands.',
        icon: 'Signal',
        features: ['Multi-Band Detection', 'Signal Classification', 'Frequency Analysis', 'Power Measurement']
      },
      {
        title: 'Spectrum Analysis',
        description: 'Comprehensive RF spectrum analysis and monitoring capabilities.',
        icon: 'BarChart3',
        features: ['Real-Time Monitoring', 'Historical Analysis', 'Interference Detection', 'Bandwidth Analysis']
      },
      {
        title: 'Communication Intercepts',
        description: 'Specialized interception and analysis of communication signals.',
        icon: 'Radio',
        features: ['Voice Intercepts', 'Data Intercepts', 'Encryption Analysis', 'Protocol Identification']
      },
      {
        title: 'Electronic Warfare',
        description: 'Electronic warfare support and countermeasures development.',
        icon: 'Shield',
        features: ['Jamming Analysis', 'Countermeasures', 'Threat Assessment', 'Vulnerability Analysis']
      }
    ],
  },
  {
    id: 'virtual-intelligence',
    title: 'Virtual Intelligence',
    description: 'Remote intelligence operations delivered through secure cloud-based platforms and virtual briefings.',
    heroDescription: 'Deploy intelligence capabilities remotely with our secure, cloud-based platform. Perfect for distributed teams and rapid response scenarios.',
    icon: 'Settings',
    color: 'blue',
    features: ['Cloud-Based Operations', 'Remote Monitoring', 'Virtual Briefings', 'Real-Time Analysis'],
    capabilities: [
      {
        title: 'Cloud-Based Operations',
        description: 'Secure cloud infrastructure for remote intelligence operations.',
        icon: 'Cloud',
        features: ['Secure Access', 'Scalable Infrastructure', 'Data Protection', 'Global Availability']
      },
      {
        title: 'Virtual Briefings',
        description: 'Interactive virtual briefings with intelligence analysts.',
        icon: 'Users',
        features: ['Live Analysis', 'Interactive Q&A', 'Custom Reports', 'Real-Time Updates']
      },
      {
        title: 'Remote Monitoring',
        description: '24/7 remote monitoring and analysis capabilities.',
        icon: 'Eye',
        features: ['Continuous Monitoring', 'Real-Time Alerts', 'Automated Analysis', 'Custom Dashboards']
      },
      {
        title: 'Real-Time Analysis',
        description: 'Live intelligence analysis and reporting capabilities.',
        icon: 'Zap',
        features: ['Live Processing', 'Instant Updates', 'Dynamic Reports', 'Collaborative Analysis']
      }
    ]
  },
  {
    id: 'onsite-operations',
    title: 'On-Site Operations',
    description: 'Deployed intelligence teams with specialized equipment for mission-critical field operations.',
    heroDescription: 'Our expert analysts deploy directly to your location with specialized equipment and real-time intelligence capabilities for mission-critical operations.',
    icon: 'Shield',
    color: 'blue',
    features: ['Field Deployment', 'Specialized Equipment', 'Direct Integration', '24/7 On-Site Support'],
    capabilities: [
      {
        title: 'Field Deployment',
        description: 'Expert analysts deploy directly to your location.',
        icon: 'MapPin',
        features: ['Expert Analysts', 'Rapid Deployment', 'Local Expertise', 'Cultural Intelligence']
      },
      {
        title: 'Specialized Equipment',
        description: 'Advanced intelligence equipment for field operations.',
        icon: 'Settings',
        features: ['RF Equipment', 'Satellite Systems', 'Analysis Tools', 'Communication Gear']
      },
      {
        title: 'Direct Integration',
        description: 'Seamless integration with your existing systems.',
        icon: 'Layers',
        features: ['System Integration', 'Data Fusion', 'Workflow Integration', 'Custom Solutions']
      },
      {
        title: '24/7 On-Site Support',
        description: 'Round-the-clock intelligence support at your location.',
        icon: 'Clock',
        features: ['Continuous Coverage', 'Rapid Response', 'Local Support', 'Emergency Protocols']
      }
    ]
  }
]

export const useCasesData: UseCaseData[] = [
  {
    id: 'border-security',
    title: 'Border Security Intelligence',
    description: 'Comprehensive intelligence solutions for border security operations, including illegal crossing detection, smuggling route analysis, and threat assessment.',
    heroDescription: 'Advanced intelligence solutions for border security operations, providing real-time monitoring, threat detection, and operational support for protecting national borders.',
    icon: 'Shield',
    color: 'blue',
    sectors: ['Defense', 'Security', 'Law Enforcement'],
    features: ['Illegal Crossing Detection', 'Smuggling Route Analysis', 'Threat Assessment', 'Real-Time Monitoring'],
    challenge: 'Border security operations require continuous monitoring of vast areas, detection of illegal activities, and rapid response to emerging threats while maintaining operational security.',
    solution: 'We deploy comprehensive intelligence solutions combining OSINT, GEOINT, and RF intelligence to provide real-time border monitoring, threat detection, and operational intelligence support.',
    results: [
      'Real-time border monitoring and threat detection',
      'Illegal crossing pattern analysis and prediction',
      'Smuggling route identification and disruption',
      'Enhanced operational security and response times'
    ],
    technologies: ['OSINT', 'GEOINT', 'RF Intelligence', 'Satellite Monitoring', 'Social Media Analysis']
  },
  {
    id: 'maritime-domain',
    title: 'Maritime Domain Awareness',
    description: 'Advanced maritime intelligence for vessel tracking, dark ship detection, and maritime security operations in high-risk waters.',
    heroDescription: 'Comprehensive maritime intelligence solutions for vessel tracking, dark ship detection, and maritime security operations in high-risk waters worldwide.',
    icon: 'Globe',
    color: 'blue',
    sectors: ['Maritime Security', 'Defense', 'Commercial'],
    features: ['Vessel Tracking', 'Dark Ship Detection', 'Maritime Security', 'Port Security'],
    challenge: 'Maritime security requires continuous monitoring of vast ocean areas, identification of suspicious vessels, and protection of critical maritime infrastructure and shipping lanes.',
    solution: 'Our maritime intelligence solutions combine satellite imagery, AIS data, and OSINT to provide comprehensive vessel tracking, dark ship detection, and maritime threat assessment.',
    results: [
      'Comprehensive vessel tracking and monitoring',
      'Dark ship detection and identification',
      'Maritime threat assessment and early warning',
      'Enhanced port and shipping security'
    ],
    technologies: ['GEOINT', 'Satellite Imagery', 'AIS Data', 'OSINT', 'RF Intelligence']
  },
  {
    id: 'crisis-response',
    title: 'Crisis Response Intelligence',
    description: 'Rapid intelligence deployment for crisis situations, natural disasters, and emergency response operations worldwide.',
    heroDescription: 'Rapid intelligence deployment for crisis situations, natural disasters, and emergency response operations worldwide, providing critical situational awareness when seconds count.',
    icon: 'AlertTriangle',
    color: 'blue',
    sectors: ['Humanitarian', 'Emergency Response', 'Government'],
    features: ['Rapid Deployment', 'Situational Awareness', 'Resource Allocation', 'Emergency Response'],
    challenge: 'Crisis situations require rapid intelligence gathering and analysis to support emergency response operations, resource allocation, and public safety decisions.',
    solution: 'We provide rapid intelligence deployment capabilities combining real-time OSINT, GEOINT, and social media monitoring to deliver critical situational awareness for emergency responders.',
    results: [
      'Rapid intelligence deployment and analysis',
      'Real-time situational awareness and updates',
      'Enhanced emergency response coordination',
      'Improved resource allocation and decision-making'
    ],
    technologies: ['OSINT', 'GEOINT', 'Social Media Monitoring', 'Real-Time Analysis', 'Crisis Communication']
  },
  {
    id: 'corporate-risk',
    title: 'Corporate Risk Assessment',
    description: 'Intelligence services for corporate security, threat assessment, and risk mitigation for business operations.',
    heroDescription: 'Comprehensive intelligence services for corporate security, threat assessment, and risk mitigation to protect business operations and personnel worldwide.',
    icon: 'Building',
    color: 'blue',
    sectors: ['Commercial', 'Corporate Security', 'Risk Management'],
    features: ['Threat Assessment', 'Risk Mitigation', 'Corporate Security', 'Business Intelligence'],
    challenge: 'Corporate operations face diverse threats including cyber attacks, physical security risks, competitive intelligence, and geopolitical instability affecting business operations.',
    solution: 'Our corporate intelligence services provide comprehensive threat assessment, risk analysis, and security intelligence to protect business operations and personnel.',
    results: [
      'Comprehensive threat assessment and analysis',
      'Proactive risk mitigation and security planning',
      'Enhanced corporate security and protection',
      'Improved business continuity and resilience'
    ],
    technologies: ['OSINT', 'Threat Intelligence', 'Risk Analysis', 'Security Assessment', 'Business Intelligence']
  },
  {
    id: 'critical-infrastructure',
    title: 'Critical Infrastructure Protection',
    description: 'Advanced intelligence solutions for protecting critical infrastructure including power grids, water systems, and transportation networks.',
    heroDescription: 'Comprehensive intelligence solutions for protecting critical infrastructure including power grids, water systems, transportation networks, and other essential services from physical and cyber threats.',
    icon: 'Shield',
    color: 'blue',
    sectors: ['Government', 'Infrastructure', 'Security'],
    features: ['Infrastructure Monitoring', 'Threat Detection', 'Vulnerability Assessment', 'Security Planning'],
    challenge: 'Critical infrastructure faces increasing threats from cyber attacks, physical sabotage, natural disasters, and geopolitical tensions that could disrupt essential services and national security.',
    solution: 'Our critical infrastructure intelligence solutions provide comprehensive monitoring, threat detection, and security assessment to protect essential infrastructure and ensure continuity of services.',
    results: [
      'Real-time infrastructure monitoring and threat detection',
      'Comprehensive vulnerability assessment and security planning',
      'Enhanced protection against cyber and physical threats',
      'Improved resilience and continuity of critical services'
    ],
    technologies: ['GEOINT', 'OSINT', 'RF Intelligence', 'Cyber Security', 'Physical Security']
  },
  {
    id: 'disaster-response',
    title: 'Disaster Response Intelligence',
    description: 'Rapid intelligence deployment for natural disasters, emergency situations, and crisis response operations worldwide.',
    heroDescription: 'Rapid intelligence deployment for natural disasters, emergency situations, and crisis response operations worldwide, providing critical situational awareness when seconds count.',
    icon: 'AlertTriangle',
    color: 'blue',
    sectors: ['Humanitarian', 'Emergency Response', 'Government'],
    features: ['Rapid Deployment', 'Situational Awareness', 'Resource Allocation', 'Emergency Response'],
    challenge: 'Disaster situations require rapid intelligence gathering and analysis to support emergency response operations, resource allocation, and public safety decisions.',
    solution: 'We provide rapid intelligence deployment capabilities combining real-time OSINT, GEOINT, and social media monitoring to deliver critical situational awareness for emergency responders.',
    results: [
      'Rapid intelligence deployment and analysis',
      'Real-time situational awareness and updates',
      'Enhanced emergency response coordination',
      'Improved resource allocation and decision-making'
    ],
    technologies: ['OSINT', 'GEOINT', 'Social Media Monitoring', 'Real-Time Analysis', 'Crisis Communication']
  },
  {
    id: 'agriculture-forestry',
    title: 'Agriculture & Forestry Intelligence',
    description: 'Advanced remote sensing and satellite monitoring for agricultural productivity, forest health, and environmental monitoring using cutting-edge intelligence technologies.',
    heroDescription: 'Comprehensive remote sensing and satellite monitoring solutions for agricultural productivity, forest health, and environmental monitoring, delivering actionable intelligence for sustainable land management and resource optimization.',
    icon: 'TreePine',
    color: 'blue',
    sectors: ['Agriculture', 'Forestry', 'Environmental', 'Government'],
    features: ['Remote Sensing Analysis', 'Crop Monitoring', 'Forest Health Assessment', 'Environmental Monitoring'],
    challenge: 'Agricultural and forestry operations require continuous monitoring of vast areas, early detection of environmental changes, and accurate assessment of crop health and forest conditions to optimize productivity and sustainability.',
    solution: 'Our agriculture and forestry intelligence solutions leverage advanced remote sensing, satellite imagery analysis, and machine learning to provide comprehensive monitoring, yield prediction, and environmental assessment capabilities.',
    results: [
      'Real-time crop monitoring and yield prediction',
      'Forest health assessment and deforestation tracking',
      'Early detection of drought, flood, and pest conditions',
      'Environmental change monitoring and sustainability reporting'
    ],
    technologies: ['Remote Sensing', 'Satellite Imagery', 'GEOINT', 'Machine Learning', 'Environmental Monitoring', 'Crop Analysis']
  }
]
