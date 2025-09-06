import UseCasePageTemplate from '@/components/UseCasePageTemplate'
import { useCasesData } from '@/lib/pageData'

export default function CrisisResponsePage() {
  const data = useCasesData.find(useCase => useCase.id === 'crisis-response')!
  
  return <UseCasePageTemplate data={data} />
}
