import UseCasePageTemplate from '@/components/UseCasePageTemplate'
import { useCasesData } from '@/lib/pageData'

export default function BorderSecurityPage() {
  const data = useCasesData.find(useCase => useCase.id === 'border-security')!
  
  return <UseCasePageTemplate data={data} />
}
