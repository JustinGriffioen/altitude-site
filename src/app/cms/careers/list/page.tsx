'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  EyeOff, 
  Search,
  Filter,
  ArrowLeft,
  Calendar,
  Briefcase,
  MapPin,
  DollarSign
} from 'lucide-react'
import { motion } from 'framer-motion'

interface JobPosting {
  id: string
  title: string
  department: string
  location: string
  type: string
  salary: string
  experience: string
  status: string
  publishedAt: string | null
  updatedAt: string
  requirements: number
  responsibilities: number
}

export default function CareersList() {
  const router = useRouter()
  const [jobs, setJobs] = useState<JobPosting[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [departmentFilter, setDepartmentFilter] = useState('all')

  useEffect(() => {
    loadJobs()
  }, [])

  const loadJobs = async () => {
    try {
      // Here you would fetch from your database
      const mockJobs = [
        {
          id: '1',
          title: 'Senior Intelligence Analyst',
          department: 'Intelligence Analysis',
          location: 'Vancouver, BC',
          type: 'Full-time',
          salary: '$80,000 - $120,000',
          experience: 'Senior Level',
          status: 'published',
          publishedAt: '2024-12-01T10:00:00Z',
          updatedAt: '2024-12-01T10:00:00Z',
          requirements: 3,
          responsibilities: 4
        },
        {
          id: '2',
          title: 'Technical Operations Specialist',
          department: 'Technical Operations',
          location: 'Remote',
          type: 'Full-time',
          salary: '$70,000 - $100,000',
          experience: 'Mid Level',
          status: 'draft',
          publishedAt: null,
          updatedAt: '2024-11-28T15:30:00Z',
          requirements: 4,
          responsibilities: 5
        },
        {
          id: '3',
          title: 'Business Development Manager',
          department: 'Business Development',
          location: 'Vancouver, BC',
          type: 'Full-time',
          salary: '$90,000 - $130,000',
          experience: 'Senior Level',
          status: 'published',
          publishedAt: '2024-11-15T09:15:00Z',
          updatedAt: '2024-11-15T09:15:00Z',
          requirements: 5,
          responsibilities: 6
        }
      ]
      
      setJobs(mockJobs)
    } catch (error) {
      console.error('Error loading jobs:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (jobId: string) => {
    if (!confirm('Are you sure you want to delete this job posting?')) return
    
    try {
      // Here you would delete from your database
      console.log('Deleting job:', jobId)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setJobs(prev => prev.filter(job => job.id !== jobId))
      alert('Job posting deleted successfully!')
    } catch (error) {
      console.error('Error deleting job:', error)
      alert('Error deleting job posting')
    }
  }

  const toggleStatus = async (jobId: string, currentStatus: string) => {
    try {
      const newStatus = currentStatus === 'published' ? 'draft' : 'published'
      
      // Here you would update in your database
      console.log('Updating job status:', jobId, newStatus)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500))
      
      setJobs(prev => prev.map(job => 
        job.id === jobId 
          ? { 
              ...job, 
              status: newStatus,
              publishedAt: newStatus === 'published' ? new Date().toISOString() : job.publishedAt
            }
          : job
      ))
    } catch (error) {
      console.error('Error updating job status:', error)
      alert('Error updating job status')
    }
  }

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || job.status === statusFilter
    const matchesDepartment = departmentFilter === 'all' || job.department === departmentFilter
    return matchesSearch && matchesStatus && matchesDepartment
  })

  if (isLoading) {
    return <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-white">Loading jobs...</div>
    </div>
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => router.back()}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <h1 className="text-3xl font-bold font-display">Job Postings</h1>
            </div>
            <Link
              href="/cms/careers/new"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
            >
              <Plus className="mr-2" size={16} />
              New Job Posting
            </Link>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div 
          className="mb-8 bg-slate-800 rounded-2xl p-6 border border-slate-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="all">All Status</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
              <select
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
                className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="all">All Departments</option>
                <option value="Intelligence Analysis">Intelligence Analysis</option>
                <option value="Technical Operations">Technical Operations</option>
                <option value="Business Development">Business Development</option>
                <option value="Operations">Operations</option>
                <option value="Administration">Administration</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Jobs List */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filteredJobs.length === 0 ? (
            <div className="bg-slate-800 rounded-2xl p-12 border border-slate-700 text-center">
              <Briefcase className="mx-auto text-slate-400 mb-4" size={48} />
              <h3 className="text-xl font-bold text-white mb-2">No jobs found</h3>
              <p className="text-slate-400 mb-6">
                {searchTerm || statusFilter !== 'all' || departmentFilter !== 'all'
                  ? 'No jobs match your current filters.' 
                  : 'Get started by creating your first job posting.'
                }
              </p>
              <Link
                href="/cms/careers/new"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
              >
                <Plus className="mr-2" size={16} />
                Create First Job
              </Link>
            </div>
          ) : (
            filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-bold text-white hover:text-purple-400 transition-colors">
                        {job.title}
                      </h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        job.status === 'published' 
                          ? 'bg-green-600 text-green-100' 
                          : 'bg-yellow-600 text-yellow-100'
                      }`}>
                        {job.status}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-6 text-sm text-slate-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <Briefcase size={14} />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign size={14} />
                        <span>{job.salary}</span>
                      </div>
                      <div className="text-slate-500">
                        {job.type} • {job.experience}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6 text-sm text-slate-400">
                      <div>
                        {job.publishedAt 
                          ? `Published ${new Date(job.publishedAt).toLocaleDateString()}`
                          : `Updated ${new Date(job.updatedAt).toLocaleDateString()}`
                        }
                      </div>
                      <div className="text-slate-500">
                        {job.requirements} requirements • {job.responsibilities} responsibilities
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 ml-6">
                    <button
                      onClick={() => toggleStatus(job.id, job.status)}
                      className={`p-2 rounded-lg transition-colors ${
                        job.status === 'published'
                          ? 'text-green-400 hover:bg-green-600/20'
                          : 'text-yellow-400 hover:bg-yellow-600/20'
                      }`}
                      title={job.status === 'published' ? 'Unpublish' : 'Publish'}
                    >
                      {job.status === 'published' ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                    
                    <Link
                      href={`/cms/careers/${job.id}`}
                      className="p-2 text-purple-400 hover:bg-purple-600/20 rounded-lg transition-colors"
                      title="Edit"
                    >
                      <Edit size={16} />
                    </Link>
                    
                    <button
                      onClick={() => handleDelete(job.id)}
                      className="p-2 text-red-400 hover:bg-red-600/20 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </div>
  )
}
