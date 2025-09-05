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
  FolderOpen,
  Building
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProjectsList() {
  const router = useRouter()
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [sectorFilter, setSectorFilter] = useState('all')

  useEffect(() => {
    loadProjects()
  }, [])

  const loadProjects = async () => {
    try {
      // Here you would fetch from your database
      const mockProjects = [
        {
          id: '1',
          title: 'Border Security Enhancement - Mexico-US Border',
          client: 'Government Agency',
          sector: 'Defense & Security',
          duration: '6 months',
          status: 'published',
          publishedAt: '2024-12-01T10:00:00Z',
          updatedAt: '2024-12-01T10:00:00Z',
          results: 4
        },
        {
          id: '2',
          title: 'Maritime Domain Awareness - Gulf of Aden',
          client: 'International Maritime Organization',
          sector: 'Maritime Security',
          duration: '8 months',
          status: 'draft',
          publishedAt: null,
          updatedAt: '2024-11-28T15:30:00Z',
          results: 4
        },
        {
          id: '3',
          title: 'Critical Infrastructure Protection - Energy Sector',
          client: 'Energy Corporation',
          sector: 'Commercial',
          duration: '12 months',
          status: 'published',
          publishedAt: '2024-11-15T09:15:00Z',
          updatedAt: '2024-11-15T09:15:00Z',
          results: 4
        }
      ]
      
      setProjects(mockProjects)
    } catch (error) {
      console.error('Error loading projects:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (projectId: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return
    
    try {
      // Here you would delete from your database
      console.log('Deleting project:', projectId)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setProjects(prev => prev.filter(project => project.id !== projectId))
      alert('Project deleted successfully!')
    } catch (error) {
      console.error('Error deleting project:', error)
      alert('Error deleting project')
    }
  }

  const toggleStatus = async (projectId: string, currentStatus: string) => {
    try {
      const newStatus = currentStatus === 'published' ? 'draft' : 'published'
      
      // Here you would update in your database
      console.log('Updating project status:', projectId, newStatus)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500))
      
      setProjects(prev => prev.map(project => 
        project.id === projectId 
          ? { 
              ...project, 
              status: newStatus,
              publishedAt: newStatus === 'published' ? new Date().toISOString() : project.publishedAt
            }
          : project
      ))
    } catch (error) {
      console.error('Error updating project status:', error)
      alert('Error updating project status')
    }
  }

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter
    const matchesSector = sectorFilter === 'all' || project.sector === sectorFilter
    return matchesSearch && matchesStatus && matchesSector
  })

  if (isLoading) {
    return <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-white">Loading projects...</div>
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
              <h1 className="text-3xl font-bold font-display">Projects</h1>
            </div>
            <Link
              href="/cms/projects/new"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
            >
              <Plus className="mr-2" size={16} />
              New Project
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
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="all">All Status</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
              <select
                value={sectorFilter}
                onChange={(e) => setSectorFilter(e.target.value)}
                className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="all">All Sectors</option>
                <option value="Defense & Security">Defense & Security</option>
                <option value="Maritime Security">Maritime Security</option>
                <option value="Commercial">Commercial</option>
                <option value="Humanitarian">Humanitarian</option>
                <option value="Critical Infrastructure">Critical Infrastructure</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Projects List */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filteredProjects.length === 0 ? (
            <div className="bg-slate-800 rounded-2xl p-12 border border-slate-700 text-center">
              <FolderOpen className="mx-auto text-slate-400 mb-4" size={48} />
              <h3 className="text-xl font-bold text-white mb-2">No projects found</h3>
              <p className="text-slate-400 mb-6">
                {searchTerm || statusFilter !== 'all' || sectorFilter !== 'all'
                  ? 'No projects match your current filters.' 
                  : 'Get started by creating your first project.'
                }
              </p>
              <Link
                href="/cms/projects/new"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
              >
                <Plus className="mr-2" size={16} />
                Create First Project
              </Link>
            </div>
          ) : (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-bold text-white hover:text-green-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        project.status === 'published' 
                          ? 'bg-green-600 text-green-100' 
                          : 'bg-yellow-600 text-yellow-100'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-6 text-sm text-slate-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <Building size={14} />
                        <span>{project.client}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FolderOpen size={14} />
                        <span>{project.sector}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{project.duration}</span>
                      </div>
                      <div className="text-slate-500">
                        {project.results} outcomes
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6 text-sm text-slate-400">
                      <div>
                        {project.publishedAt 
                          ? `Published ${new Date(project.publishedAt).toLocaleDateString()}`
                          : `Updated ${new Date(project.updatedAt).toLocaleDateString()}`
                        }
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 ml-6">
                    <button
                      onClick={() => toggleStatus(project.id, project.status)}
                      className={`p-2 rounded-lg transition-colors ${
                        project.status === 'published'
                          ? 'text-green-400 hover:bg-green-600/20'
                          : 'text-yellow-400 hover:bg-yellow-600/20'
                      }`}
                      title={project.status === 'published' ? 'Unpublish' : 'Publish'}
                    >
                      {project.status === 'published' ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                    
                    <Link
                      href={`/cms/projects/${project.id}`}
                      className="p-2 text-green-400 hover:bg-green-600/20 rounded-lg transition-colors"
                      title="Edit"
                    >
                      <Edit size={16} />
                    </Link>
                    
                    <button
                      onClick={() => handleDelete(project.id)}
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
