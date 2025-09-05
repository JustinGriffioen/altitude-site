'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import { 
  Save,
  ArrowLeft,
  Plus,
  Trash2,
  Eye,
  EyeOff,
  MapPin,
  Clock,
  DollarSign
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function EditJobPosting() {
  const params = useParams()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [jobData, setJobData] = useState({
    title: '',
    department: '',
    location: '',
    type: '',
    salary: '',
    experience: '',
    status: 'draft',
    content: ''
  })
  const [requirements, setRequirements] = useState([''])
  const [responsibilities, setResponsibilities] = useState([''])

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Describe the role and company culture...',
      }),
    ],
    content: jobData.content,
    editorProps: {
      attributes: {
        class: 'prose prose-invert max-w-none focus:outline-none min-h-[300px] p-4',
      },
    },
  })

  useEffect(() => {
    if (params.id && params.id !== 'new') {
      loadJobPosting()
    } else {
      setIsLoading(false)
    }
  }, [params.id])

  useEffect(() => {
    if (editor && jobData.content) {
      editor.commands.setContent(jobData.content)
    }
  }, [editor, jobData.content])

  const loadJobPosting = async () => {
    try {
      // Here you would fetch from your database
      const mockJob = {
        id: params.id,
        title: 'Senior Intelligence Analyst',
        department: 'Intelligence Analysis',
        location: 'Vancouver, BC',
        type: 'Full-time',
        salary: '$80,000 - $120,000',
        experience: 'Senior Level',
        status: 'published',
        content: '<p>Job description content...</p>',
        requirements: [
          'Bachelor\'s degree in Intelligence Studies or related field',
          '5+ years of experience in intelligence analysis',
          'Security clearance required'
        ],
        responsibilities: [
          'Conduct intelligence analysis and reporting',
          'Collaborate with cross-functional teams',
          'Maintain security protocols'
        ]
      }
      
      setJobData(mockJob)
      setRequirements(mockJob.requirements)
      setResponsibilities(mockJob.responsibilities)
    } catch (error) {
      console.error('Error loading job posting:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSave = async () => {
    if (!jobData.title.trim()) return
    
    setIsSaving(true)
    try {
      const content = editor?.getHTML() || ''
      const updatedJob = {
        ...jobData,
        requirements: requirements.filter(req => req.trim()),
        responsibilities: responsibilities.filter(resp => resp.trim()),
        content,
        slug: jobData.title.toLowerCase().replace(/\s+/g, '-'),
        updatedAt: new Date().toISOString()
      }
      
      // Here you would save to your database
      console.log('Saving job posting:', updatedJob)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      alert('Job posting saved successfully!')
    } catch (error) {
      console.error('Error saving job posting:', error)
      alert('Error saving job posting')
    } finally {
      setIsSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this job posting?')) return
    
    setIsDeleting(true)
    try {
      // Here you would delete from your database
      console.log('Deleting job posting:', params.id)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      alert('Job posting deleted successfully!')
      router.push('/cms/careers/list')
    } catch (error) {
      console.error('Error deleting job posting:', error)
      alert('Error deleting job posting')
    } finally {
      setIsDeleting(false)
    }
  }

  const toggleStatus = () => {
    setJobData(prev => ({
      ...prev,
      status: prev.status === 'draft' ? 'published' : 'draft'
    }))
  }

  const addRequirement = () => {
    setRequirements(prev => [...prev, ''])
  }

  const updateRequirement = (index: number, value: string) => {
    setRequirements(prev => prev.map((req, i) => i === index ? value : req))
  }

  const removeRequirement = (index: number) => {
    setRequirements(prev => prev.filter((_, i) => i !== index))
  }

  const addResponsibility = () => {
    setResponsibilities(prev => [...prev, ''])
  }

  const updateResponsibility = (index: number, value: string) => {
    setResponsibilities(prev => prev.map((resp, i) => i === index ? value : resp))
  }

  const removeResponsibility = (index: number) => {
    setResponsibilities(prev => prev.filter((_, i) => i !== index))
  }

  if (isLoading) {
    return <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-white">Loading job posting...</div>
    </div>
  }

  if (!editor) {
    return <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-white">Loading editor...</div>
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
              <h1 className="text-3xl font-bold font-display">
                {params.id === 'new' ? 'New Job Posting' : 'Edit Job Posting'}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleStatus}
                className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center ${
                  jobData.status === 'published' 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'bg-yellow-600 hover:bg-yellow-700 text-white'
                }`}
              >
                {jobData.status === 'published' ? <Eye className="mr-2" size={16} /> : <EyeOff className="mr-2" size={16} />}
                {jobData.status === 'published' ? 'Published' : 'Draft'}
              </button>
              {params.id !== 'new' && (
                <button
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="bg-red-600 hover:bg-red-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center"
                >
                  <Trash2 className="mr-2" size={16} />
                  {isDeleting ? 'Deleting...' : 'Delete'}
                </button>
              )}
              <button
                onClick={handleSave}
                disabled={isSaving || !jobData.title.trim()}
                className="bg-purple-600 hover:bg-purple-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
              >
                <Save className="mr-2" size={16} />
                {isSaving ? 'Saving...' : 'Save Job Posting'}
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Information */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-6 font-display">Job Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Job Title</label>
                  <input
                    type="text"
                    value={jobData.title}
                    onChange={(e) => setJobData(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="e.g., Senior Intelligence Analyst"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Department</label>
                  <select
                    value={jobData.department}
                    onChange={(e) => setJobData(prev => ({ ...prev, department: e.target.value }))}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select Department</option>
                    <option value="Intelligence Analysis">Intelligence Analysis</option>
                    <option value="Technical Operations">Technical Operations</option>
                    <option value="Business Development">Business Development</option>
                    <option value="Operations">Operations</option>
                    <option value="Administration">Administration</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                    <input
                      type="text"
                      value={jobData.location}
                      onChange={(e) => setJobData(prev => ({ ...prev, location: e.target.value }))}
                      className="w-full pl-10 pr-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="e.g., Vancouver, BC"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Employment Type</label>
                  <select
                    value={jobData.type}
                    onChange={(e) => setJobData(prev => ({ ...prev, type: e.target.value }))}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select Type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Salary Range</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
                    <input
                      type="text"
                      value={jobData.salary}
                      onChange={(e) => setJobData(prev => ({ ...prev, salary: e.target.value }))}
                      className="w-full pl-10 pr-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="e.g., $80,000 - $120,000"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Experience Level</label>
                  <select
                    value={jobData.experience}
                    onChange={(e) => setJobData(prev => ({ ...prev, experience: e.target.value }))}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select Level</option>
                    <option value="Entry Level">Entry Level (0-2 years)</option>
                    <option value="Mid Level">Mid Level (3-5 years)</option>
                    <option value="Senior Level">Senior Level (6-10 years)</option>
                    <option value="Executive">Executive (10+ years)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white font-display">Key Responsibilities</h3>
                <button
                  onClick={addResponsibility}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center"
                >
                  <Plus className="mr-1" size={16} />
                  Add Responsibility
                </button>
              </div>
              
              <div className="space-y-4">
                {responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    <input
                      type="text"
                      value={responsibility}
                      onChange={(e) => updateResponsibility(index, e.target.value)}
                      className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Describe a key responsibility..."
                    />
                    {responsibilities.length > 1 && (
                      <button
                        onClick={() => removeResponsibility(index)}
                        className="p-2 text-red-400 hover:text-red-300 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white font-display">Requirements</h3>
                <button
                  onClick={addRequirement}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center"
                >
                  <Plus className="mr-1" size={16} />
                  Add Requirement
                </button>
              </div>
              
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    <input
                      type="text"
                      value={requirement}
                      onChange={(e) => updateRequirement(index, e.target.value)}
                      className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Describe a requirement or qualification..."
                    />
                    {requirements.length > 1 && (
                      <button
                        onClick={() => removeRequirement(index)}
                        className="p-2 text-red-400 hover:text-red-300 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Job Description */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-6 font-display">Job Description</h3>
              <EditorContent editor={editor} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Status */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-4 font-display">Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Status</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    jobData.status === 'published' 
                      ? 'bg-green-600 text-green-100' 
                      : 'bg-yellow-600 text-yellow-100'
                  }`}>
                    {jobData.status}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Word Count</span>
                  <span className="text-white">{editor.storage.characterCount?.words() || 0}</span>
                </div>
              </div>
            </div>

            {/* Preview */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-4 font-display">Preview</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-slate-400">Title:</span>
                  <div className="text-white font-medium">{jobData.title || 'Untitled Position'}</div>
                </div>
                <div>
                  <span className="text-slate-400">Department:</span>
                  <div className="text-white">{jobData.department || 'Not specified'}</div>
                </div>
                <div>
                  <span className="text-slate-400">Location:</span>
                  <div className="text-white">{jobData.location || 'Not specified'}</div>
                </div>
                <div>
                  <span className="text-slate-400">Type:</span>
                  <div className="text-white">{jobData.type || 'Not specified'}</div>
                </div>
                <div>
                  <span className="text-slate-400">Salary:</span>
                  <div className="text-white">{jobData.salary || 'Not specified'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
