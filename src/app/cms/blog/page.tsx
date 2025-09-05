'use client'

import { useState } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import TextStyle from '@tiptap/extension-text-style'
import Color from '@tiptap/extension-color'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import { 
  Bold, 
  Italic, 
  Underline as UnderlineIcon, 
  Strikethrough, 
  Code, 
  Heading1, 
  Heading2, 
  Heading3, 
  List, 
  ListOrdered, 
  Quote, 
  Undo, 
  Redo,
  Link as LinkIcon,
  Unlink,
  Save,
  ArrowLeft
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function BlogCMS() {
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [slug, setSlug] = useState('')
  const [isSaving, setIsSaving] = useState(false)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Start writing your blog post...',
      }),
      TextStyle,
      Color,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Underline,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-400 underline',
        },
      }),
    ],
    content: '',
    editorProps: {
      attributes: {
        class: 'prose prose-invert max-w-none focus:outline-none min-h-[400px] p-6',
      },
    },
  })

  const handleSave = async () => {
    if (!editor || !title.trim()) return
    
    setIsSaving(true)
    try {
      const content = editor.getHTML()
      const blogPost = {
        title,
        excerpt,
        slug: slug || title.toLowerCase().replace(/\s+/g, '-'),
        content,
        publishedAt: new Date().toISOString(),
        status: 'draft'
      }
      
      // Here you would save to your database
      console.log('Saving blog post:', blogPost)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      alert('Blog post saved successfully!')
    } catch (error) {
      console.error('Error saving blog post:', error)
      alert('Error saving blog post')
    } finally {
      setIsSaving(false)
    }
  }

  const setLink = () => {
    const url = window.prompt('Enter URL:')
    if (url) {
      editor?.chain().focus().setLink({ href: url }).run()
    }
  }

  const unsetLink = () => {
    editor?.chain().focus().unsetLink().run()
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
              <h1 className="text-3xl font-bold font-display">Blog CMS</h1>
            </div>
            <button
              onClick={handleSave}
              disabled={isSaving || !title.trim()}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
            >
              <Save className="mr-2" size={16} />
              {isSaving ? 'Saving...' : 'Save Post'}
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Editor */}
          <div className="lg:col-span-3">
            <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
              {/* Toolbar */}
              <div className="border-b border-slate-700 p-4 bg-slate-800">
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={`p-2 rounded ${editor.isActive('bold') ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
                  >
                    <Bold size={16} />
                  </button>
                  <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={`p-2 rounded ${editor.isActive('italic') ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
                  >
                    <Italic size={16} />
                  </button>
                  <button
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    className={`p-2 rounded ${editor.isActive('underline') ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
                  >
                    <UnderlineIcon size={16} />
                  </button>
                  <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={`p-2 rounded ${editor.isActive('strike') ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
                  >
                    <Strikethrough size={16} />
                  </button>
                  
                  <div className="w-px h-6 bg-slate-600 mx-2" />
                  
                  <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={`p-2 rounded ${editor.isActive('heading', { level: 1 }) ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
                  >
                    <Heading1 size={16} />
                  </button>
                  <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={`p-2 rounded ${editor.isActive('heading', { level: 2 }) ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
                  >
                    <Heading2 size={16} />
                  </button>
                  <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={`p-2 rounded ${editor.isActive('heading', { level: 3 }) ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
                  >
                    <Heading3 size={16} />
                  </button>
                  
                  <div className="w-px h-6 bg-slate-600 mx-2" />
                  
                  <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={`p-2 rounded ${editor.isActive('bulletList') ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
                  >
                    <List size={16} />
                  </button>
                  <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={`p-2 rounded ${editor.isActive('orderedList') ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
                  >
                    <ListOrdered size={16} />
                  </button>
                  <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={`p-2 rounded ${editor.isActive('blockquote') ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
                  >
                    <Quote size={16} />
                  </button>
                  <button
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={`p-2 rounded ${editor.isActive('codeBlock') ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
                  >
                    <Code size={16} />
                  </button>
                  
                  <div className="w-px h-6 bg-slate-600 mx-2" />
                  
                  <button
                    onClick={setLink}
                    className={`p-2 rounded ${editor.isActive('link') ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
                  >
                    <LinkIcon size={16} />
                  </button>
                  <button
                    onClick={unsetLink}
                    className="p-2 rounded text-slate-300 hover:bg-slate-700"
                  >
                    <Unlink size={16} />
                  </button>
                  
                  <div className="w-px h-6 bg-slate-600 mx-2" />
                  
                  <button
                    onClick={() => editor.chain().focus().undo().run()}
                    className="p-2 rounded text-slate-300 hover:bg-slate-700"
                  >
                    <Undo size={16} />
                  </button>
                  <button
                    onClick={() => editor.chain().focus().redo().run()}
                    className="p-2 rounded text-slate-300 hover:bg-slate-700"
                  >
                    <Redo size={16} />
                  </button>
                </div>
              </div>

              {/* Editor Content */}
              <div className="p-6">
                <EditorContent editor={editor} />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Post Details */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-4 font-display">Post Details</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter post title"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Excerpt</label>
                  <textarea
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-20 resize-none"
                    placeholder="Brief description of the post"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Slug</label>
                  <input
                    type="text"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="url-friendly-slug"
                  />
                </div>
              </div>
            </div>

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
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Characters</span>
                  <span className="text-white">{editor.storage.characterCount?.characters() || 0}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
