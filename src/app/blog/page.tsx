import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Intelligence Blog | OSINT, GEOINT & Defense Intelligence Insights | Altitude Intelligence',
  description: 'Stay updated with the latest intelligence industry insights, OSINT techniques, GEOINT analysis, and defense intelligence trends from Altitude Intelligence experts.',
  keywords: 'intelligence blog, OSINT blog, GEOINT analysis, defense intelligence news, intelligence trends, security intelligence insights, intelligence industry updates',
  openGraph: {
    title: 'Intelligence Blog | OSINT, GEOINT & Defense Intelligence Insights',
    description: 'Stay updated with the latest intelligence industry insights, OSINT techniques, GEOINT analysis, and defense intelligence trends from Altitude Intelligence experts.',
    url: 'https://altitude-intelligence.com/blog',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altitude-intelligence.com/blog',
  },
}

const blogPosts = [
  {
    id: 'osint-trends-2024',
    title: 'OSINT Trends and Techniques for 2024: What Intelligence Professionals Need to Know',
    excerpt: 'Explore the latest open source intelligence trends, tools, and methodologies that are shaping the intelligence landscape in 2024.',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'OSINT',
    featured: true,
  },
  {
    id: 'geoint-satellite-analysis',
    title: 'Advanced GEOINT Analysis: Leveraging Satellite Imagery for Intelligence Operations',
    excerpt: 'Learn how modern geospatial intelligence techniques are revolutionizing intelligence analysis and operational planning.',
    date: '2024-01-10',
    readTime: '12 min read',
    category: 'GEOINT',
    featured: true,
  },
  {
    id: 'border-security-intelligence',
    title: 'Border Security Intelligence: Detecting Illicit Activities with Multi-Source Data Fusion',
    excerpt: 'Discover how combining RF signals, satellite imagery, and OSINT creates comprehensive border security intelligence solutions.',
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'Border Security',
    featured: false,
  },
  {
    id: 'maritime-domain-awareness',
    title: 'Maritime Domain Awareness: Tracking Dark Vessels and Suspicious Activities',
    excerpt: 'Understanding the challenges and solutions for maritime intelligence operations in an era of increasing maritime threats.',
    date: '2023-12-28',
    readTime: '9 min read',
    category: 'Maritime Intelligence',
    featured: false,
  },
  {
    id: 'crisis-response-intelligence',
    title: 'Intelligence Support for Humanitarian Crisis Response: Lessons from Recent Operations',
    excerpt: 'How intelligence capabilities can support humanitarian operations and crisis response efforts worldwide.',
    date: '2023-12-20',
    readTime: '7 min read',
    category: 'Crisis Response',
    featured: false,
  },
  {
    id: 'corporate-risk-intelligence',
    title: 'Corporate Risk Intelligence: Protecting Business Assets in a Complex World',
    excerpt: 'The growing importance of intelligence capabilities for corporate risk management and supply chain security.',
    date: '2023-12-15',
    readTime: '6 min read',
    category: 'Corporate Intelligence',
    featured: false,
  },
]

export default function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Intelligence{' '}
              <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Stay updated with the latest intelligence industry insights, OSINT techniques, 
              GEOINT analysis, and defense intelligence trends from our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-primary-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Link 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors text-sm"
                    >
                      Read More
                      <ArrowRight className="ml-1" size={14} />
                    </Link>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Intelligence Solutions?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Contact our experts to discuss your specific intelligence requirements 
            and see how we can support your mission.
          </p>
          <Link 
            href="/contact"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Get Started Today
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
