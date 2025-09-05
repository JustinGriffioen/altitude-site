'use client'

import { ArrowRight, CheckCircle, Star, Zap, Clock, Layers, Settings, AlertTriangle, MapPin, Shield, BarChart3 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { SITE_CONFIG, COMPANY_STATS, USE_CASES, TECHNOLOGIES } from '@/lib/constants'
import Button from '@/components/ui/Button'
import Card, { CardBody } from '@/components/ui/Card'

// Dynamic imports for better code splitting
const ScrollReveal = dynamic(() => import('@/components/ui/ScrollReveal'), {
  ssr: false,
  loading: () => <div className="opacity-0" />
})

const AnimatedCounter = dynamic(() => import('@/components/ui/AnimatedCounter'), {
  ssr: false,
  loading: () => <span>0</span>
})

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-blue-500/5 to-blue-400/10" />
        
        {/* Hero Background Image */}
        <div className="absolute inset-0 opacity-5">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
            alt="Space technology background"
            fill
            className="object-cover"
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={75}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <motion.div 
                  className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/20 text-blue-300 text-sm font-medium tracking-wide border border-blue-500/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Intelligence-as-a-Service Platform
                </motion.div>
                
                <h1 className="text-6xl lg:text-8xl font-black text-white leading-tight">
                  Mission-Critical{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Intelligence</span>
                  <br />
                  <span className="text-5xl lg:text-6xl text-slate-300 font-bold">When It Matters Most</span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-slate-200 leading-relaxed max-w-2xl font-medium">
                  Deploy advanced intelligence services in hours, not months. 
                  Our flexible Intelligence-as-a-Service platform delivers real-time OSINT, 
                  GEOINT, and RF intelligence for defense, security, and commercial operations worldwide.
                </p>
              </div>
              
                                        <div className="flex flex-col sm:flex-row gap-6">
                            <Button size="lg" className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
                              Book a Call
                              <ArrowRight className="ml-2" size={20} />
                            </Button>
                            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-slate-900">
                              Learn More
                            </Button>
                          </div>
                          
                          {/* Key Value Propositions */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                                <Clock className="text-green-400" size={20} />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-white">24-48h Turnaround</p>
                                <p className="text-xs text-slate-300">Rapid Intelligence Delivery</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                <Shield className="text-blue-400" size={20} />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-white">GEO & Military Experts</p>
                                <p className="text-xs text-slate-300">Defense Intelligence Professionals</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                <BarChart3 className="text-purple-400" size={20} />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-white">50+ Data Products</p>
                                <p className="text-xs text-slate-300">Proven Track Record</p>
                              </div>
                            </div>
                          </div>

              {/* Enhanced Trust Indicators */}
              <div className="grid grid-cols-3 gap-8 pt-12">
                <div className="text-center">
                  <AnimatedCounter 
                    end={COMPANY_STATS.productsDelivered} 
                    suffix="+" 
                    className="text-4xl font-black text-blue-400"
                    duration={2}
                  />
                  <div className="text-sm text-slate-300 font-medium tracking-wide">Intelligence Products Delivered</div>
                </div>
                <div className="text-center">
                  <AnimatedCounter 
                    end={COMPANY_STATS.activeTheaters} 
                    suffix="+" 
                    className="text-4xl font-black text-blue-300"
                    duration={2}
                    delay={0.2}
                  />
                  <div className="text-sm text-slate-300 font-medium tracking-wide">Active Theaters</div>
                </div>
                <div className="text-center">
                  <AnimatedCounter 
                    end={COMPANY_STATS.responseTime} 
                    suffix="h" 
                    className="text-4xl font-black text-blue-500"
                    duration={2}
                    delay={0.4}
                  />
                  <div className="text-sm text-slate-300 font-medium tracking-wide">Response Time</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            >
              {/* Enhanced Dashboard Mockup */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl transform rotate-3 shadow-2xl"></div>
                <div className="relative bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-700">
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-bold text-white tracking-wide">Live Operations</span>
                      </div>
                      <div className="text-xs text-gray-400 font-medium">Last updated: 2 min ago</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="p-4 bg-slate-800 border border-slate-700">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-bold text-slate-300 tracking-wide">Border Security</span>
                          <span className="text-xs text-green-600 bg-green-900/20 px-2 py-1 rounded-full font-semibold border border-green-500/30">Active</span>
                        </div>
                        <div className="text-2xl font-black text-white mb-1">7 Detections</div>
                        <div className="text-sm text-slate-400 font-medium">Northern Sector</div>
                        <div className="mt-2 w-full bg-slate-700 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                        </div>
                      </Card>
                      
                      <Card className="p-4 bg-slate-800 border border-slate-700">
                        <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-bold text-slate-300 tracking-wide">Maritime Domain</span>
                          <span className="text-xs text-yellow-600 bg-yellow-900/20 px-2 py-1 rounded-full font-semibold border border-yellow-500/30">Monitoring</span>
                        </div>
                        <div className="text-2xl font-black text-white mb-1">23 Vessels</div>
                        <div className="text-sm text-slate-400 font-medium">Pacific Region</div>
                        <div className="mt-2 w-full bg-slate-700 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full w-2/3"></div>
                        </div>
                      </Card>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-red-900/20 rounded-lg border border-red-500/30">
                        <AlertTriangle className="w-5 h-5 text-red-400" />
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-red-300 tracking-wide">High Priority Alert</div>
                          <div className="text-xs text-red-400">Unauthorized activity detected near critical infrastructure</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
                        <MapPin className="w-5 h-5 text-blue-400" />
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-blue-300 tracking-wide">Geospatial Update</div>
                          <div className="text-xs text-blue-400">New satellite imagery processed for Sector 7</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission-Critical Use Cases */}
      <section className="py-24 bg-slate-900 relative">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-5">
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Military operations background"
            fill
            className="object-cover"
            sizes="100vw"
            quality={60}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-red-900/20 text-red-300 text-sm font-semibold tracking-wide border border-red-500/30 mb-6">
              Mission-Critical Operations
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Intelligence</span> Solutions for{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Real-World Operations</span>
            </h2>
            <p className="text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed font-medium">
              From border security intelligence to crisis response, our intelligence services are deployed 
              in the world's most challenging environments where accuracy and speed save lives. 
              Specializing in OSINT, GEOINT, and RF intelligence analysis.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {USE_CASES.slice(0, 6).map((useCase, index) => (
              <ScrollReveal key={useCase.id} direction="up" delay={index * 0.1}>
                <Card className="h-full hover:shadow-2xl transition-all duration-300 group bg-slate-800 border-2 border-slate-700 hover:border-blue-500">
                  <CardBody className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-right">
                        <div className="text-sm text-gray-300 font-medium tracking-wide">Sectors</div>
                        <div className="text-xs text-gray-400 font-medium">{useCase.sectors.join(', ')}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-black text-white mb-4 group-hover:text-primary-400 transition-colors font-display">
                      {useCase.title}
                    </h3>
                    
                    <p className="text-gray-200 mb-6 leading-relaxed font-medium">
                      {useCase.description}
                    </p>
                    
                    <div className="space-y-3">
                      {useCase.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300 font-medium">{feature}</span>
                        </div>
                      ))}
          </div>

                    <div className="mt-6 pt-6 border-t border-primary-700">
                      <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary-700 group-hover:text-white font-semibold tracking-wide">
                        Learn More
                        <ArrowRight className="ml-2" size={16} />
                      </Button>
                  </div>
                  </CardBody>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog & Projects Overview */}
      <section className="py-24 bg-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Latest <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Insights</span> & <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              Stay updated with the latest intelligence trends, case studies, and insights from our team of experts.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Blog Section */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="bg-slate-700 rounded-2xl p-8 border border-slate-600">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <BarChart3 className="text-white" size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Latest Blog Posts</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="text-lg font-semibold text-white mb-2">OSINT Trends 2024: What's Next in Open Source Intelligence</h4>
                    <p className="text-slate-300 text-sm mb-3">Explore the latest developments in OSINT technology and methodologies that are shaping the future of intelligence gathering.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">December 2024</span>
                      <Link href="/blog/osint-trends-2024" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                        Read More →
                      </Link>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="text-lg font-semibold text-white mb-2">GEOINT Analysis: Satellite Imagery Processing Techniques</h4>
                    <p className="text-slate-300 text-sm mb-3">Learn about advanced satellite imagery analysis methods used in modern intelligence operations.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">November 2024</span>
                      <Link href="/blog" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-600">
                  <Link href="/blog" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    View All Posts
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Projects Section */}
            <ScrollReveal direction="right" delay={0.4}>
              <div className="bg-slate-700 rounded-2xl p-8 border border-slate-600">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <Shield className="text-white" size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Recent Projects</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="text-lg font-semibold text-white mb-2">Border Security Enhancement - Mexico-US Border</h4>
                    <p className="text-slate-300 text-sm mb-3">Deployed multi-source intelligence fusion to identify smuggling routes and staging areas in remote desert regions.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">Defense & Security</span>
                      <Link href="/projects" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                        View Details →
                      </Link>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="text-lg font-semibold text-white mb-2">Maritime Domain Awareness - Gulf of Aden</h4>
                    <p className="text-slate-300 text-sm mb-3">Implemented RF signal detection and satellite imagery analysis to track dark vessels in high-risk waters.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">Maritime Security</span>
                      <Link href="/projects" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-600">
                  <Link href="/projects" className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    View All Projects
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Technology & Capabilities */}
      <section className="py-24 bg-primary-800 relative">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2025&q=80"
            alt="Technology background"
            fill
            className="object-cover"
            sizes="100vw"
            quality={60}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary-600/20 text-primary-700 text-sm font-semibold tracking-wide border border-primary-500/30 mb-6">
              Advanced Technology Stack
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 font-display">
              Powered by{' '}
              <span className="gradient-text">Cutting-Edge Technology</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-medium">
              Our intelligence platform combines advanced AI, real-time data fusion, 
              and proven methodologies to deliver actionable insights when seconds count.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                title: 'Real-Time Processing',
                description: 'Process intelligence data in real-time with sub-second response times for critical operations.'
              },
              {
                title: 'Multi-Source Fusion',
                description: 'Integrate satellite imagery, RF signals, OSINT, and sensor data into unified intelligence products.'
              },
              {
                title: 'AI-Powered Analysis',
                description: 'Machine learning algorithms that identify patterns and anomalies humans might miss.'
              },
              {
                title: '24/7 Operations',
                description: 'Round-the-clock monitoring and analysis with global coverage across all time zones.'
              }
            ].map((capability, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <Card className="text-center group hover:shadow-2xl transition-all duration-300 bg-primary-900 border-2 border-primary-700 hover:border-primary-500">
                  <CardBody className="p-8">
                    <div className="w-20 h-20 bg-primary-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-700 transition-colors duration-300 border border-primary-600">
                      <div className="w-8 h-8 bg-primary-400 rounded-lg"></div>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4 font-display">{capability.title}</h3>
                    <p className="text-gray-200 leading-relaxed font-medium">{capability.description}</p>
                  </CardBody>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Technology Stack */}
          <ScrollReveal direction="up" className="text-center">
            <h3 className="text-3xl font-black text-white mb-8 font-display">Technology Stack</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {TECHNOLOGIES.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-6 py-3 bg-primary-700 rounded-full text-sm font-semibold text-white shadow-lg border-2 border-primary-600 hover:border-primary-400 tracking-wide"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Quote Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 font-display">
              Get Your <span className="gradient-text">Intelligence Services Quote</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to enhance your intelligence capabilities? Get a free consultation 
              and quote for OSINT services, GEOINT analysis, and intelligence consulting.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <form className="space-y-6">
                <div>
                  <label htmlFor="inquiry-type" className="block text-sm font-medium text-gray-700 mb-2">
                    What would you like to do?
                  </label>
                  <select
                    id="inquiry-type"
                    name="inquiry-type"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  >
                    <option value="quote">Get a Quote</option>
                    <option value="contact">Contact Us</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Organization *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your intelligence requirements
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Describe your intelligence needs, current challenges, or specific requirements..."
                  />
                </div>

                <div className="text-center">
                  <Button size="lg" className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white text-xl px-12 py-4 font-semibold tracking-wide shadow-xl">
                    Get Free Quote
                    <ArrowRight className="ml-3" size={20} />
                  </Button>
                  <p className="text-sm text-gray-500 mt-4">
                    Free consultation • 24-hour turnaround time • No commitment required
                  </p>
                </div>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-accent-500/20 to-primary-400/20" />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 text-white text-sm font-bold tracking-wide border border-white/30 mb-8">
              Ready to Deploy Intelligence?
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight font-display">
              Start Your Mission with{' '}
              <span className="gradient-text">Altitude <span className="text-intelligence">Intelligence</span></span>
          </h2>
            
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              Join the organizations worldwide that trust us with their most critical intelligence operations. 
              Deploy advanced capabilities in hours, not months.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 text-xl px-16 py-8 font-semibold tracking-wide shadow-2xl">
                Get Free Quote
                <ArrowRight className="ml-3" size={24} />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 text-xl px-16 py-8 font-semibold tracking-wide">
                Contact Us
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-black text-white mb-2 font-display">
                  <AnimatedCounter end={150} suffix="+" duration={2} />
                </div>
                <div className="text-gray-200 text-sm font-medium tracking-wide">Intelligence Products</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white mb-2 font-display">
                  <AnimatedCounter end={8} suffix="+" duration={2} delay={0.2} />
                </div>
                <div className="text-gray-200 text-sm font-medium tracking-wide">Active Theaters</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white mb-2 font-display">
                  <AnimatedCounter end={24} suffix="h" duration={2} delay={0.4} />
                </div>
                <div className="text-gray-200 text-sm font-medium tracking-wide">Response Time</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white mb-2 font-display">
                  <AnimatedCounter end={12} suffix="+" duration={2} delay={0.6} />
                </div>
                <div className="text-gray-200 text-sm font-medium tracking-wide">Countries Served</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
