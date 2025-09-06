import ServicePageTemplate from '@/components/ServicePageTemplate'
import { servicesData } from '@/lib/pageData'

export default function VirtualIntelligencePage() {
  const data = servicesData.find(service => service.id === 'virtual-intelligence')!
  
  return <ServicePageTemplate data={data} />
}
