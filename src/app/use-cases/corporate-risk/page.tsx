import UseCasePageTemplate from '@/components/UseCasePageTemplate'
import { useCasesData } from '@/lib/pageData'

export default function CorporateRiskPage() {
  const data = useCasesData.find(useCase => useCase.id === 'corporate-risk')!
  
  return <UseCasePageTemplate data={data} />
}
