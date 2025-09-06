import UseCasePageTemplate from '@/components/UseCasePageTemplate'
import { useCasesData } from '@/lib/pageData'

export default function CriticalInfrastructurePage() {
  const data = useCasesData.find(useCase => useCase.id === 'critical-infrastructure')!
  
  return <UseCasePageTemplate data={data} />
}
