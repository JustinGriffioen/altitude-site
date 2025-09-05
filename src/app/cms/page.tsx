'use client'

import Link from 'next/link'
import { FileText, Briefcase, FolderOpen, Settings, Plus } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CMSDashboard() {
  const cmsSections = [
    {
      title: 'Blog Posts',
      description: 'Manage blog content and articles',
      href: '/cms/blog',
      icon: FileText,
      color: 'from-blue-500 to-blue-600',
      count: 12
    },
    {
      title: 'Projects',
      description: 'Manage project case studies and portfolios',
      href: '/cms/projects',
      icon: FolderOpen,
      color: 'from-green-500 to-green-600',
      count: 8
    },
    {
      title: 'Careers',
      description: 'Manage job postings and career content',
      href: '/cms/careers',
      icon: Briefcase,
      color: 'from-purple-500 to-purple-600',
      count: 5
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4 font-display">Content Management System</h1>
          <p className="text-slate-300 text-lg">Manage your website content with ease</p>
        </motion.div>

        {/* CMS Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cmsSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={section.href}>
                <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-xl group">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <section.icon className="text-white" size={24} />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{section.count}</div>
                      <div className="text-sm text-slate-400">Items</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-slate-300 mb-6">{section.description}</p>
                  
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span className="text-sm font-medium">Manage Content</span>
                    <Plus className="ml-2" size={16} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div 
          className="mt-16 bg-slate-800 rounded-2xl p-8 border border-slate-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 font-display">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/cms/blog/new" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-medium transition-colors flex items-center justify-center">
              <FileText className="mr-2" size={20} />
              New Blog Post
            </Link>
            <Link href="/cms/projects/new" className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-medium transition-colors flex items-center justify-center">
              <FolderOpen className="mr-2" size={20} />
              New Project
            </Link>
            <Link href="/cms/careers/new" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 rounded-lg font-medium transition-colors flex items-center justify-center">
              <Briefcase className="mr-2" size={20} />
              New Job Posting
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
