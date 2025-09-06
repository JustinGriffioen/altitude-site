import ServicePageTemplate from '@/components/ServicePageTemplate'
import { servicesData } from '@/lib/pageData'

export default function OSINTPage() {
  const data = servicesData.find(service => service.id === 'osint')!
  
  return <ServicePageTemplate data={data} />
}