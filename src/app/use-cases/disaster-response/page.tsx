import UseCasePageTemplate from '@/components/UseCasePageTemplate'
import { useCasesData } from '@/lib/pageData'

export default function DisasterResponsePage() {
  const data = useCasesData.find(useCase => useCase.id === 'disaster-response')!
  
  return <UseCasePageTemplate data={data} />
}
