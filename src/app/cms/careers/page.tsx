'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Briefcase, Plus } from 'lucide-react'

export default function CareersCMSPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Link 
                href="/cms"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
              </Link>
              <h1 className="text-3xl font-bold">Careers Management</h1>
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center">
              <Plus className="mr-2" size={16} />
              New Job Posting
            </button>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <div className="text-center">
              <Briefcase className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-white mb-2">Careers Management Coming Soon</h2>
              <p className="text-slate-300 mb-6">
                Full careers management capabilities are currently under development. 
                You'll be able to create, edit, and manage job postings here.
              </p>
              <div className="space-y-2 text-sm text-slate-400">
                <p>• Create and edit job postings</p>
                <p>• Manage application tracking</p>
                <p>• Department organization</p>
                <p>• Application analytics</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}