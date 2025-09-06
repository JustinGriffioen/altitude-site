import ServicePageTemplate from '@/components/ServicePageTemplate'
import { servicesData } from '@/lib/pageData'

export default function RFIntelligencePage() {
  const data = servicesData.find(service => service.id === 'rf-intelligence')!
  
  return <ServicePageTemplate data={data} />
}