'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ProjectsCMS() {
  const router = useRouter()

  useEffect(() => {
    router.push('/cms/projects/list')
  }, [router])

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-white">Redirecting to projects list...</div>
    </div>
  )
}