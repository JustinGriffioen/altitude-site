'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function BlogCMS() {
  const router = useRouter()

  useEffect(() => {
    router.push('/cms/blog/list')
  }, [router])

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-white">Redirecting to blog list...</div>
    </div>
  )
}