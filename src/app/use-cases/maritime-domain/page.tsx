import UseCasePageTemplate from '@/components/UseCasePageTemplate'
import { useCasesData } from '@/lib/pageData'

export default function MaritimeDomainPage() {
  const data = useCasesData.find(useCase => useCase.id === 'maritime-domain')!
  
  return <UseCasePageTemplate data={data} />
}
