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
  FileText
} from 'lucide-react'
import { motion } from 'framer-motion'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  slug: string
  status: string
  publishedAt: string | null
  updatedAt: string
  wordCount: number
}

export default function BlogList() {
  const router = useRouter()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    try {
      // Here you would fetch from your database
      // For now, we'll simulate loading
      const mockPosts = [
        {
          id: '1',
          title: 'OSINT Trends 2024: What\'s Next in Open Source Intelligence',
          excerpt: 'Explore the latest developments in OSINT technology and methodologies that are shaping the future of intelligence gathering.',
          slug: 'osint-trends-2024',
          status: 'published',
          publishedAt: '2024-12-01T10:00:00Z',
          updatedAt: '2024-12-01T10:00:00Z',
          wordCount: 1250
        },
        {
          id: '2',
          title: 'GEOINT Analysis: Satellite Imagery Processing Techniques',
          excerpt: 'Learn about advanced satellite imagery analysis methods used in modern intelligence operations.',
          slug: 'geoint-analysis-techniques',
          status: 'draft',
          publishedAt: null,
          updatedAt: '2024-11-28T15:30:00Z',
          wordCount: 890
        },
        {
          id: '3',
          title: 'RF Intelligence: Signal Detection and Analysis',
          excerpt: 'Understanding radio frequency intelligence and its applications in modern surveillance operations.',
          slug: 'rf-intelligence-signal-detection',
          status: 'published',
          publishedAt: '2024-11-15T09:15:00Z',
          updatedAt: '2024-11-15T09:15:00Z',
          wordCount: 2100
        }
      ]
      
      setPosts(mockPosts)
    } catch (error) {
      console.error('Error loading posts:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (postId: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return
    
    try {
      // Here you would delete from your database
      console.log('Deleting post:', postId)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setPosts(prev => prev.filter(post => post.id !== postId))
      alert('Blog post deleted successfully!')
    } catch (error) {
      console.error('Error deleting post:', error)
      alert('Error deleting blog post')
    }
  }

  const toggleStatus = async (postId: string, currentStatus: string) => {
    try {
      const newStatus = currentStatus === 'published' ? 'draft' : 'published'
      
      // Here you would update in your database
      console.log('Updating post status:', postId, newStatus)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500))
      
      setPosts(prev => prev.map(post => 
        post.id === postId 
          ? { 
              ...post, 
              status: newStatus,
              publishedAt: newStatus === 'published' ? new Date().toISOString() : post.publishedAt
            }
          : post
      ))
    } catch (error) {
      console.error('Error updating post status:', error)
      alert('Error updating post status')
    }
  }

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || post.status === statusFilter
    return matchesSearch && matchesStatus
  })

  if (isLoading) {
    return <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-white">Loading posts...</div>
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
              <h1 className="text-3xl font-bold font-display">Blog Posts</h1>
            </div>
            <Link
              href="/cms/blog/new"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
            >
              <Plus className="mr-2" size={16} />
              New Post
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
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Posts List */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filteredPosts.length === 0 ? (
            <div className="bg-slate-800 rounded-2xl p-12 border border-slate-700 text-center">
              <FileText className="mx-auto text-slate-400 mb-4" size={48} />
              <h3 className="text-xl font-bold text-white mb-2">No posts found</h3>
              <p className="text-slate-400 mb-6">
                {searchTerm || statusFilter !== 'all' 
                  ? 'No posts match your current filters.' 
                  : 'Get started by creating your first blog post.'
                }
              </p>
              <Link
                href="/cms/blog/new"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
              >
                <Plus className="mr-2" size={16} />
                Create First Post
              </Link>
            </div>
          ) : (
            filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
                        {post.title}
                      </h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        post.status === 'published' 
                          ? 'bg-green-600 text-green-100' 
                          : 'bg-yellow-600 text-yellow-100'
                      }`}>
                        {post.status}
                      </span>
                    </div>
                    
                    <p className="text-slate-300 mb-4 line-clamp-2">{post.excerpt}</p>
                    
                    <div className="flex items-center space-x-6 text-sm text-slate-400">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>
                          {post.publishedAt 
                            ? `Published ${new Date(post.publishedAt).toLocaleDateString()}`
                            : `Updated ${new Date(post.updatedAt).toLocaleDateString()}`
                          }
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FileText size={14} />
                        <span>{post.wordCount} words</span>
                      </div>
                      <div className="text-slate-500">
                        /{post.slug}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 ml-6">
                    <button
                      onClick={() => toggleStatus(post.id, post.status)}
                      className={`p-2 rounded-lg transition-colors ${
                        post.status === 'published'
                          ? 'text-green-400 hover:bg-green-600/20'
                          : 'text-yellow-400 hover:bg-yellow-600/20'
                      }`}
                      title={post.status === 'published' ? 'Unpublish' : 'Publish'}
                    >
                      {post.status === 'published' ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                    
                    <Link
                      href={`/cms/blog/${post.id}`}
                      className="p-2 text-blue-400 hover:bg-blue-600/20 rounded-lg transition-colors"
                      title="Edit"
                    >
                      <Edit size={16} />
                    </Link>
                    
                    <button
                      onClick={() => handleDelete(post.id)}
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
