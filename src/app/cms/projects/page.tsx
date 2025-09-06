'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, FolderOpen, Plus } from 'lucide-react'

export default function ProjectsCMSPage() {
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
              <h1 className="text-3xl font-bold">Projects Management</h1>
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center">
              <Plus className="mr-2" size={16} />
              New Project
            </button>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <div className="text-center">
              <FolderOpen className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-white mb-2">Projects Management Coming Soon</h2>
              <p className="text-slate-300 mb-6">
                Full projects management capabilities are currently under development. 
                You'll be able to create, edit, and manage case studies here.
              </p>
              <div className="space-y-2 text-sm text-slate-400">
                <p>• Create and edit case studies</p>
                <p>• Manage project portfolios</p>
                <p>• Client information tracking</p>
                <p>• Results and metrics</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}