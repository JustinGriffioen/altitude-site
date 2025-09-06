'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function CMSPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to a coming soon page or external CMS
    router.push('/coming-soon')
  }, [router])

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-2xl font-bold mb-4">CMS Redirecting...</h1>
        <p className="text-slate-300">Redirecting to content management system...</p>
      </div>
    </div>
  )
}