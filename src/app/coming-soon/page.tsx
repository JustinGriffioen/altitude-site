'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Construction } from 'lucide-react'

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Construction className="w-24 h-24 text-blue-400 mx-auto mb-8" />
          <h1 className="text-4xl font-bold mb-4">Content Management System</h1>
          <p className="text-xl text-slate-300 mb-8">
            Our CMS is currently under development. Please check back later for content management capabilities.
          </p>
          <div className="space-y-4">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Homepage
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
