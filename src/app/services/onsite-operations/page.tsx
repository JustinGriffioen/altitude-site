import ServicePageTemplate from '@/components/ServicePageTemplate'
import { servicesData } from '@/lib/pageData'

export default function OnSiteOperationsPage() {
  const data = servicesData.find(service => service.id === 'onsite-operations')!
  
  return <ServicePageTemplate data={data} />
}
