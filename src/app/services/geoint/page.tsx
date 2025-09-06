import ServicePageTemplate from '@/components/ServicePageTemplate'
import { servicesData } from '@/lib/pageData'

export default function GEOINTPage() {
  const data = servicesData.find(service => service.id === 'geoint')!
  
  return <ServicePageTemplate data={data} />
}