'use client'

import { ArrowRight, CheckCircle, MapPin, Calendar, Users, Target, Shield, BarChart3 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Button from '@/components/ui/Button'
import Card, { CardBody } from '@/components/ui/Card'

const ScrollReveal = dynamic(() => import('@/components/ui/ScrollReveal'), {
  ssr: false,
  loading: () => <div className="opacity-0" />
})

const projects = [
  {
    id: 'jasper-wildfire',
    title: 'Jasper Wildfire Intelligence Support',
    description: 'Real-time intelligence support for the Jasper Wildfire response operations, providing critical situational awareness and resource allocation intelligence.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'Crisis Response',
    date: '2024',
    duration: '2 weeks',
    team: '5 analysts',
    location: 'Jasper, Alberta',
    challenge: 'Rapidly changing wildfire conditions required real-time intelligence to support emergency response operations and resource allocation.',
    solution: 'Deployed OSINT and GEOINT capabilities to provide continuous monitoring of fire progression, weather conditions, and evacuation routes.',
    results: [
      'Real-time fire progression tracking',
      'Evacuation route optimization',
      'Resource allocation intelligence',
      'Weather pattern analysis'
    ],
    technologies: ['OSINT', 'GEOINT', 'Satellite Imagery', 'Social Media Monitoring'],
    href: '/projects/jasper-wildfire'
  }
]

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 via-orange-500/5 to-orange-400/10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.div 
              className="inline-flex items-center px-6 py-3 rounded-full bg-orange-600/20 text-orange-300 text-sm font-semibold tracking-wide border border-orange-500/30 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Intelligence Projects
            </motion.div>
            
            <h1 className="text-6xl lg:text-8xl font-black text-white leading-tight mb-8">
              Real-World <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Intelligence</span>
              <br />
              <span className="text-5xl lg:text-6xl text-slate-300 font-bold">Case Studies</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-200 leading-relaxed max-w-4xl mx-auto font-medium mb-12">
              Explore our intelligence projects and case studies showcasing real-world applications 
              of OSINT, GEOINT, and RF intelligence in mission-critical operations.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Intelligence <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Projects</span> & Case Studies
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Our intelligence teams have supported operations across defense, security, commercial, and humanitarian sectors worldwide.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} direction="up" delay={index * 0.1}>
                <Card className="h-full hover:shadow-2xl transition-all duration-300 bg-slate-700 border-2 border-slate-600 hover:border-orange-500 group overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-orange-600 text-white text-sm font-semibold rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-black text-white mb-2">{project.title}</h3>
                      <p className="text-slate-200 text-sm">{project.description}</p>
                    </div>
                  </div>
                  
                  <CardBody className="p-8">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-orange-400" />
                        <span className="text-sm text-slate-300">{project.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-orange-400" />
                        <span className="text-sm text-slate-300">{project.team}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-orange-400" />
                        <span className="text-sm text-slate-300">{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Target className="w-4 h-4 text-orange-400" />
                        <span className="text-sm text-slate-300">{project.duration}</span>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-orange-300 mb-2">Challenge</h4>
                        <p className="text-slate-300 text-sm">{project.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-orange-300 mb-2">Solution</h4>
                        <p className="text-slate-300 text-sm">{project.solution}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-orange-300 mb-3">Key Results</h4>
                      <div className="space-y-2">
                        {project.results.map((result, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-slate-300">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-orange-300 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-slate-600 text-slate-300 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link href={project.href}>
                      <Button variant="ghost" size="sm" className="w-full group-hover:bg-orange-600 group-hover:text-white font-semibold">
                        View Case Study
                        <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </Link>
                  </CardBody>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Coming Soon Section */}
          <ScrollReveal direction="up" className="mt-16">
            <Card className="bg-slate-700 border-2 border-slate-600 border-dashed">
              <CardBody className="p-12 text-center">
                <div className="w-16 h-16 bg-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="text-slate-400" size={32} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">More Projects Coming Soon</h3>
                <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                  We're continuously working on new intelligence projects and case studies. 
                  Check back regularly for updates on our latest operations and success stories.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                      Discuss Your Project
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" size="lg" className="border-2 border-slate-500 text-slate-300 hover:bg-slate-600">
                      View Our Services
                    </Button>
                  </Link>
                </div>
              </CardBody>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-orange-900 via-orange-800 to-orange-900 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Ready to Start Your <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Intelligence Project?</span>
            </h2>
            <p className="text-xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Contact our intelligence experts to discuss your specific requirements and get a customized solution for your mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-xl px-12 py-4 font-semibold">
                  Get Project Quote
                  <ArrowRight className="ml-3" size={20} />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 text-xl px-12 py-4 font-semibold">
                  View Our Services
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}