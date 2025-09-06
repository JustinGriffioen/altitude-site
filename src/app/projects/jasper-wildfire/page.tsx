'use client'

import { ArrowRight, CheckCircle, MapPin, Calendar, Users, Target, Shield, BarChart3, AlertTriangle, Globe, Radio } from 'lucide-react'
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

export default function JasperWildfirePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-blue-500/5 to-blue-400/10" />
        
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Wildfire operations"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <motion.div 
              className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600/20 text-blue-300 text-sm font-semibold tracking-wide border border-blue-500/30 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Crisis Response Intelligence
            </motion.div>
            
            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Jasper Wildfire</span>
              <br />
              <span className="text-3xl lg:text-4xl text-slate-300 font-bold">Intelligence Support</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-200 leading-relaxed max-w-4xl mx-auto font-medium mb-8">
              Real-time intelligence support for the Jasper Wildfire response operations, providing critical 
              situational awareness and resource allocation intelligence during a rapidly evolving crisis.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-black text-blue-400 mb-2">2024</div>
                <div className="text-sm text-slate-300">Year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-blue-400 mb-2">2 Weeks</div>
                <div className="text-sm text-slate-300">Duration</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-blue-400 mb-2">5</div>
                <div className="text-sm text-slate-300">Analysts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-blue-400 mb-2">24/7</div>
                <div className="text-sm text-slate-300">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 bg-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                  The <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Challenge</span>
                </h2>
                <p className="text-xl text-slate-200 leading-relaxed mb-8">
                  The Jasper Wildfire presented a rapidly evolving crisis requiring real-time intelligence 
                  to support emergency response operations. With changing weather conditions, shifting 
                  fire boundaries, and critical evacuation decisions, emergency responders needed 
                  continuous situational awareness to protect lives and property.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-6 h-6 text-blue-400 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Rapidly Changing Conditions</h3>
                      <p className="text-slate-300">Fire progression changed hourly, requiring constant monitoring and updates.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-blue-400 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Critical Evacuation Decisions</h3>
                      <p className="text-slate-300">Real-time intelligence needed for evacuation route planning and timing.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-blue-400 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Resource Allocation</h3>
                      <p className="text-slate-300">Optimal deployment of firefighting resources based on threat assessment.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl transform rotate-3 shadow-2xl"></div>
                <div className="relative bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-700">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-bold text-white tracking-wide">Active Fire</span>
                      </div>
                      <div className="text-xs text-gray-400 font-medium">Real-time</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="p-4 bg-slate-800 border border-slate-700">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-bold text-slate-300 tracking-wide">Fire Size</span>
                          <span className="text-xs text-red-600 bg-red-900/20 px-2 py-1 rounded-full font-semibold border border-red-500/30">Growing</span>
                        </div>
                        <div className="text-2xl font-black text-white mb-1">12,847 ha</div>
                        <div className="text-sm text-slate-400 font-medium">Current Size</div>
                        <div className="mt-2 w-full bg-slate-700 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full w-4/5"></div>
                        </div>
                      </Card>
                      
                      <Card className="p-4 bg-slate-800 border border-slate-700">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-bold text-slate-300 tracking-wide">Evacuation</span>
                          <span className="text-xs text-yellow-600 bg-yellow-900/20 px-2 py-1 rounded-full font-semibold border border-yellow-500/30">Alert</span>
                        </div>
                        <div className="text-2xl font-black text-white mb-1">3 Zones</div>
                        <div className="text-sm text-slate-400 font-medium">Under Alert</div>
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
                          <div className="text-xs text-red-400">Fire approaching residential area</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
                        <MapPin className="w-5 h-5 text-blue-400" />
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-blue-300 tracking-wide">Evacuation Route</div>
                          <div className="text-xs text-blue-400">Highway 93A cleared for evacuation</div>
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
              Our <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Intelligence Solution</span>
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              We deployed a comprehensive intelligence operation combining OSINT, GEOINT, and real-time monitoring 
              to provide continuous situational awareness for emergency responders.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'OSINT Monitoring',
                description: 'Continuous monitoring of social media, news sources, and public communications for real-time updates.',
                icon: Globe,
                features: ['Social Media Monitoring', 'News Source Tracking', 'Public Communications', 'Community Reports']
              },
              {
                title: 'GEOINT Analysis',
                description: 'Satellite imagery analysis and geographic intelligence for fire progression and terrain assessment.',
                icon: MapPin,
                features: ['Satellite Imagery', 'Fire Progression Mapping', 'Terrain Analysis', 'Weather Integration']
              },
              {
                title: 'Real-Time Intelligence',
                description: '24/7 intelligence operations center providing continuous updates and analysis.',
                icon: Radio,
                features: ['24/7 Monitoring', 'Real-Time Alerts', 'Continuous Analysis', 'Rapid Response']
              }
            ].map((capability, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <Card className="h-full hover:shadow-2xl transition-all duration-300 bg-slate-700 border-2 border-slate-600 hover:border-blue-500 group">
                  <CardBody className="p-8">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                      <capability.icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4 text-center group-hover:text-blue-400 transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-slate-200 mb-6 leading-relaxed text-center">
                      {capability.description}
                    </p>
                    <div className="space-y-2">
                      {capability.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Intelligence <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Results</span>
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Our intelligence support provided critical information that directly impacted emergency response operations and community safety.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { metric: '24/7', label: 'Continuous Monitoring', description: 'Round-the-clock intelligence operations' },
              { metric: '15min', label: 'Response Time', description: 'Average time for intelligence updates' },
              { metric: '100%', label: 'Evacuation Success', description: 'All planned evacuations completed safely' },
              { metric: '50+', label: 'Intelligence Reports', description: 'Daily intelligence briefings provided' }
            ].map((result, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <Card className="text-center hover:shadow-2xl transition-all duration-300 bg-slate-700 border-2 border-slate-600 hover:border-blue-500 group">
                  <CardBody className="p-8">
                    <div className="text-4xl font-black text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                      {result.metric}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{result.label}</h3>
                    <p className="text-slate-300 text-sm">{result.description}</p>
                  </CardBody>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up">
            <Card className="bg-slate-700 border-2 border-slate-600">
              <CardBody className="p-8">
                <h3 className="text-2xl font-black text-white mb-6 text-center">Key Intelligence Achievements</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Real-Time Fire Progression Tracking</h4>
                        <p className="text-slate-300">Provided continuous updates on fire boundaries and progression rates, enabling accurate evacuation timing.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Evacuation Route Optimization</h4>
                        <p className="text-slate-300">Identified and recommended optimal evacuation routes based on real-time conditions and traffic patterns.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Resource Allocation Intelligence</h4>
                        <p className="text-slate-300">Provided data-driven recommendations for firefighting resource deployment and positioning.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Weather Pattern Analysis</h4>
                        <p className="text-slate-300">Integrated weather data to predict fire behavior and provide early warning for changing conditions.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Community Communication</h4>
                        <p className="text-slate-300">Monitored public communications to identify community needs and concerns during the crisis.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Post-Event Analysis</h4>
                        <p className="text-slate-300">Provided comprehensive after-action intelligence reports for future emergency planning.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Need <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Crisis Intelligence</span> Support?
            </h2>
            <p className="text-xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Our intelligence teams are ready to provide rapid response support for emergency situations and crisis management operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-xl px-12 py-4 font-semibold">
                  Get Crisis Intelligence Quote
                  <ArrowRight className="ml-3" size={20} />
                </Button>
              </Link>
              <Link href="/use-cases/crisis-response">
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-xl px-12 py-4 font-semibold">
                  Learn About Crisis Response
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
