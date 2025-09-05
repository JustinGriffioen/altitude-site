'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import { 
  Save,
  ArrowLeft,
  Plus,
  Trash2,
  Edit
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProjectsCMS() {
  const [isSaving, setIsSaving] = useState(false)
  const [projectData, setProjectData] = useState({
    title: '',
    client: '',
    sector: '',
    duration: '',
    challenge: '',
    solution: '',
    results: [''],
    status: 'draft'
  })

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Describe the project details...',
      }),
    ],
    content: '',
    editorProps: {
      attributes: {
        class: 'prose prose-invert max-w-none focus:outline-none min-h-[300px] p-4',
      },
    },
  })

  const handleSave = async () => {
    if (!projectData.title.trim()) return
    
    setIsSaving(true)
    try {
      const content = editor?.getHTML() || ''
      const project = {
        ...projectData,
        content,
        publishedAt: new Date().toISOString(),
        slug: projectData.title.toLowerCase().replace(/\s+/g, '-')
      }
      
      // Here you would save to your database
      console.log('Saving project:', project)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      alert('Project saved successfully!')
    } catch (error) {
      console.error('Error saving project:', error)
      alert('Error saving project')
    } finally {
      setIsSaving(false)
    }
  }

  const addResult = () => {
    setProjectData(prev => ({
      ...prev,
      results: [...prev.results, '']
    }))
  }

  const updateResult = (index: number, value: string) => {
    setProjectData(prev => ({
      ...prev,
      results: prev.results.map((result, i) => i === index ? value : result)
    }))
  }

  const removeResult = (index: number) => {
    setProjectData(prev => ({
      ...prev,
      results: prev.results.filter((_, i) => i !== index)
    }))
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
              <Link href="/cms" className="text-slate-400 hover:text-white transition-colors">
                <ArrowLeft size={20} />
              </Link>
              <h1 className="text-3xl font-bold font-display">Projects CMS</h1>
            </div>
            <button
              onClick={handleSave}
              disabled={isSaving || !projectData.title.trim()}
              className="bg-green-600 hover:bg-green-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
            >
              <Save className="mr-2" size={16} />
              {isSaving ? 'Saving...' : 'Save Project'}
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Information */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-6 font-display">Project Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Project Title</label>
                  <input
                    type="text"
                    value={projectData.title}
                    onChange={(e) => setProjectData(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="e.g., Border Security Enhancement"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Client</label>
                  <input
                    type="text"
                    value={projectData.client}
                    onChange={(e) => setProjectData(prev => ({ ...prev, client: e.target.value }))}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="e.g., Government Agency"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Sector</label>
                  <select
                    value={projectData.sector}
                    onChange={(e) => setProjectData(prev => ({ ...prev, sector: e.target.value }))}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select Sector</option>
                    <option value="Defense & Security">Defense & Security</option>
                    <option value="Maritime Security">Maritime Security</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Humanitarian">Humanitarian</option>
                    <option value="Critical Infrastructure">Critical Infrastructure</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Duration</label>
                  <input
                    type="text"
                    value={projectData.duration}
                    onChange={(e) => setProjectData(prev => ({ ...prev, duration: e.target.value }))}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="e.g., 6 months"
                  />
                </div>
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-6 font-display">Situation Analysis</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Initial Challenge</label>
                  <textarea
                    value={projectData.challenge}
                    onChange={(e) => setProjectData(prev => ({ ...prev, challenge: e.target.value }))}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 h-24 resize-none"
                    placeholder="Describe the initial situation and challenges faced..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Our Solution</label>
                  <textarea
                    value={projectData.solution}
                    onChange={(e) => setProjectData(prev => ({ ...prev, solution: e.target.value }))}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 h-24 resize-none"
                    placeholder="Describe the solution we implemented..."
                  />
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white font-display">Outcomes Achieved</h3>
                <button
                  onClick={addResult}
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center"
                >
                  <Plus className="mr-1" size={16} />
                  Add Result
                </button>
              </div>
              
              <div className="space-y-4">
                {projectData.results.map((result, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    <input
                      type="text"
                      value={result}
                      onChange={(e) => updateResult(index, e.target.value)}
                      className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Describe a specific outcome or result..."
                    />
                    {projectData.results.length > 1 && (
                      <button
                        onClick={() => removeResult(index)}
                        className="p-2 text-red-400 hover:text-red-300 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Description */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-6 font-display">Detailed Description</h3>
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
                  <span className="px-2 py-1 bg-yellow-600 text-yellow-100 text-xs rounded-full">Draft</span>
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
                  <div className="text-white font-medium">{projectData.title || 'Untitled Project'}</div>
                </div>
                <div>
                  <span className="text-slate-400">Client:</span>
                  <div className="text-white">{projectData.client || 'Not specified'}</div>
                </div>
                <div>
                  <span className="text-slate-400">Sector:</span>
                  <div className="text-white">{projectData.sector || 'Not specified'}</div>
                </div>
                <div>
                  <span className="text-slate-400">Duration:</span>
                  <div className="text-white">{projectData.duration || 'Not specified'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
