'use client'

import UseCasePageTemplate from '@/components/UseCasePageTemplate'

export default function AgricultureForestryPage() {
  const useCaseData = {
    id: 'agriculture-forestry',
    title: 'Agriculture & Forestry Intelligence',
    description: 'Advanced remote sensing and satellite monitoring for agricultural productivity, forest health, and environmental monitoring using cutting-edge intelligence technologies.',
    heroDescription: 'Transform agricultural and forestry operations with advanced remote sensing intelligence. Our satellite-based monitoring systems provide real-time insights into crop health, forest conditions, and environmental factors to optimize productivity and sustainability.',
    icon: 'TreePine',
    color: 'green',
    sectors: ['Agriculture', 'Forestry', 'Environmental Monitoring', 'Food Security'],
    features: [
      'Satellite imagery analysis for crop monitoring',
      'Forest health assessment and deforestation tracking',
      'Drought and flood prediction models',
      'Precision agriculture recommendations',
      'Environmental impact assessment',
      'Real-time weather integration'
    ],
    challenge: 'Agricultural and forestry operations face increasing challenges from climate change, resource scarcity, and the need for sustainable practices. Traditional monitoring methods are often reactive, expensive, and lack the comprehensive data needed for optimal decision-making.',
    solution: 'Our Intelligence-as-a-Service platform provides comprehensive remote sensing solutions that combine satellite imagery, weather data, and machine learning algorithms to deliver real-time insights into agricultural productivity, forest health, and environmental conditions.',
    results: [
      'Increased agricultural productivity by 30%',
      'Early detection of forest threats',
      'Reduced environmental impact',
      'Improved food security planning',
      'Cost-effective monitoring solutions',
      'Data-driven decision making'
    ],
    technologies: [
      'Multi-spectral satellite imagery',
      'Machine learning algorithms',
      'Geographic Information Systems (GIS)',
      'Weather data integration',
      'IoT sensor networks',
      'Cloud-based analytics platform'
    ]
  }

  return (
    <UseCasePageTemplate data={useCaseData} />
  )
}