'use client'

import { ArrowRight, CheckCircle, Shield, MapPin, AlertTriangle, Building, Globe, Users } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { UseCaseData } from '@/lib/pageData'
import Button from '@/components/ui/Button'
import Card, { CardBody } from '@/components/ui/Card'

const ScrollReveal = dynamic(() => import('@/components/ui/ScrollReveal'), {
  ssr: false,
  loading: () => <div className="opacity-0" />
})

interface UseCasePageTemplateProps {
  data: UseCaseData
}

const colorClasses = {
  red: {
    gradient: 'from-red-400 to-red-600',
    bg: 'bg-red-600/20',
    text: 'text-red-300',
    border: 'border-red-500/30',
    button: 'bg-red-600 hover:bg-red-700',
    card: 'hover:border-red-500',
    icon: 'bg-red-600 group-hover:bg-red-500'
  },
  blue: {
    gradient: 'from-blue-400 to-blue-600',
    bg: 'bg-blue-600/20',
    text: 'text-blue-300',
    border: 'border-blue-500/30',
    button: 'bg-blue-600 hover:bg-blue-700',
    card: 'hover:border-blue-500',
    icon: 'bg-blue-600 group-hover:bg-blue-500'
  },
  orange: {
    gradient: 'from-blue-400 to-blue-600',
    bg: 'bg-blue-600/20',
    text: 'text-blue-300',
    border: 'border-blue-500/30',
    button: 'bg-blue-600 hover:bg-blue-700',
    card: 'hover:border-blue-500',
    icon: 'bg-blue-600 group-hover:bg-blue-500'
  },
  purple: {
    gradient: 'from-purple-400 to-purple-600',
    bg: 'bg-purple-600/20',
    text: 'text-purple-300',
    border: 'border-purple-500/30',
    button: 'bg-purple-600 hover:bg-purple-700',
    card: 'hover:border-purple-500',
    icon: 'bg-purple-600 group-hover:bg-purple-500'
  }
}

const iconMap = {
  Shield,
  Globe,
  AlertTriangle,
  Building,
  MapPin,
  Users
}

export default function UseCasePageTemplate({ data }: UseCasePageTemplateProps) {
  const colors = colorClasses[data.color as keyof typeof colorClasses] || colorClasses.blue
  const IconComponent = iconMap[data.icon as keyof typeof iconMap] || Shield

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-very-dark-blue via-muted-dark-blue to-very-dark-blue">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className={`absolute inset-0 bg-gradient-to-r ${colors.bg.replace('/20', '/10')} via-${data.color}-500/5 to-${data.color}-400/10`} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.div 
              className={`inline-flex items-center px-6 py-3 rounded-full ${colors.bg} ${colors.text} text-sm font-semibold tracking-wide border ${colors.border} mb-8`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Intelligence Use Case
            </motion.div>
            
            <h1 className="text-6xl lg:text-8xl font-black text-white leading-tight mb-8">
              <span className={`bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>{data.title}</span>
              <br />
              <span className="text-5xl lg:text-6xl text-grey-300 font-bold">Intelligence</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-grey-200 leading-relaxed max-w-4xl mx-auto font-medium mb-12">
              {data.heroDescription}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-black text-primary-400 mb-2">24/7</div>
                <div className="text-sm text-grey-300">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-primary-400 mb-2">Real-Time</div>
                <div className="text-sm text-grey-300">Intelligence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-primary-400 mb-2">Expert</div>
                <div className="text-sm text-grey-300">Analysis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-primary-400 mb-2">Mission</div>
                <div className="text-sm text-grey-300">Critical</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 bg-muted-dark-blue relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                  The <span className={`bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>Challenge</span>
                </h2>
                <p className="text-xl text-grey-200 leading-relaxed mb-8">
                  {data.challenge}
                </p>
                <div className="space-y-4">
                  {data.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-primary-400 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                        <p className="text-grey-300">Critical intelligence requirement for effective operations.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r from-${data.color}-600 to-${data.color}-500 rounded-3xl transform rotate-3 shadow-2xl`}></div>
                <div className="relative bg-slate-900 rounded-3xl p-8 shadow-2xl border border-grey-700">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-bold text-white tracking-wide">Active Intelligence</span>
                      </div>
                      <div className="text-xs text-gray-400 font-medium">Real-time</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="p-4 bg-muted-dark-blue border border-grey-700">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-bold text-grey-300 tracking-wide">Threat Level</span>
                          <span className="text-xs text-red-600 bg-red-900/20 px-2 py-1 rounded-full font-semibold border border-red-500/30">High</span>
                        </div>
                        <div className="text-2xl font-black text-white mb-1">Active</div>
                        <div className="text-sm text-grey-400 font-medium">Monitoring</div>
                        <div className="mt-2 w-full bg-slate-700 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full w-4/5"></div>
                        </div>
                      </Card>
                      
                      <Card className="p-4 bg-muted-dark-blue border border-grey-700">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-bold text-grey-300 tracking-wide">Intelligence</span>
                          <span className="text-xs text-green-600 bg-green-900/20 px-2 py-1 rounded-full font-semibold border border-green-500/30">Live</span>
                        </div>
                        <div className="text-2xl font-black text-white mb-1">24/7</div>
                        <div className="text-sm text-grey-400 font-medium">Coverage</div>
                        <div className="mt-2 w-full bg-slate-700 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full w-full"></div>
                        </div>
                      </Card>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-primary-900/20 rounded-lg border border-primary-500/30">
                        <IconComponent className="w-5 h-5 text-primary-400" />
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-primary-300 tracking-wide">Intelligence Update</div>
                          <div className="text-xs text-primary-400">Real-time threat assessment complete</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 bg-green-900/20 rounded-lg border border-green-500/30">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-green-300 tracking-wide">Mission Status</div>
                          <div className="text-xs text-green-400">Intelligence operations active</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Our <span className={`bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>Intelligence Solution</span>
            </h2>
            <p className="text-xl text-grey-200 max-w-3xl mx-auto leading-relaxed">
              {data.solution}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.technologies.map((tech, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <Card className={`h-full hover:shadow-2xl transition-all duration-300 bg-slate-700 border-2 border-slate-600 ${colors.card} group`}>
                  <CardBody className="p-8">
                    <div className={`w-16 h-16 ${colors.icon} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-${data.color}-500 transition-colors duration-300`}>
                      <div className="w-8 h-8 bg-white rounded-lg"></div>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4 text-center group-hover:text-primary-400 transition-colors">
                      {tech}
                    </h3>
                    <p className="text-grey-200 mb-6 leading-relaxed text-center">
                      Advanced {tech.toLowerCase()} capabilities for comprehensive intelligence gathering and analysis.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-grey-300">Real-Time Analysis</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-grey-300">Expert Integration</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-grey-300">Mission-Critical Support</span>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-muted-dark-blue relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Intelligence <span className={`bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>Results</span>
            </h2>
            <p className="text-xl text-grey-200 max-w-3xl mx-auto leading-relaxed">
              Our intelligence solutions deliver measurable results that directly impact operational effectiveness and mission success.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up">
            <Card className="bg-slate-700 border-2 border-slate-600">
              <CardBody className="p-8">
                <h3 className="text-2xl font-black text-white mb-6 text-center">Key Intelligence Achievements</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    {data.results.slice(0, Math.ceil(data.results.length / 2)).map((result, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">{result}</h4>
                          <p className="text-grey-300">Delivered through comprehensive intelligence analysis and real-time monitoring capabilities.</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {data.results.slice(Math.ceil(data.results.length / 2)).map((result, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">{result}</h4>
                          <p className="text-grey-300">Achieved through expert analysis and advanced intelligence methodologies.</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardBody>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-24 bg-gradient-to-br from-${data.color}-900 via-${data.color}-800 to-${data.color}-900 relative`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Ready to Deploy <span className={`bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>{data.title} Intelligence?</span>
            </h2>
            <p className="text-xl text-grey-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Contact our intelligence experts to discuss your specific requirements and get a customized solution for your mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100 text-xl px-12 py-4 font-semibold">
                  Get Intelligence Quote
                  <ArrowRight className="ml-3" size={20} />
                </Button>
              </Link>
              <Link href="/use-cases">
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 text-xl px-12 py-4 font-semibold">
                  View All Use Cases
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
