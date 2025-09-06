'use client'

import { ArrowRight, CheckCircle, Star, Zap, Clock, Layers, Settings, AlertTriangle, MapPin, Shield, BarChart3 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { SITE_CONFIG, COMPANY_STATS, USE_CASES, TECHNOLOGIES } from '@/lib/constants'
import Button from '@/components/ui/Button'
import Card, { CardBody } from '@/components/ui/Card'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'

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
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('before-after-section')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24">
        
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Subtle floating elements for depth - using neutral colors */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/2 rounded-full blur-3xl animate-pulse delay-2000"></div>
          
          {/* Additional floating elements for depth */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/2 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-white/1 rounded-full blur-2xl animate-pulse delay-1500"></div>
          
          {/* Tech grid overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.5' opacity='0.1'%3E%3Cpath d='M0 0h100v100H0z'/%3E%3Cpath d='M0 0l100 100M100 0L0 100'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        
        {/* Hero Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="https://cdn.prod.website-files.com/6878a7ecb2912d644f2f66c9%2F688caa1059f4367fc721508d_10915129-hd_3840_2160_30fps%20%281%29-poster-00001.jpg"
          >
            <source src="https://cdn.prod.website-files.com/6878a7ecb2912d644f2f66c9%2F688caa1059f4367fc721508d_10915129-hd_3840_2160_30fps%20%281%29-transcode.mp4" type="video/mp4" />
            <source src="https://cdn.prod.website-files.com/6878a7ecb2912d644f2f66c9%2F688caa1059f4367fc721508d_10915129-hd_3840_2160_30fps%20%281%29-transcode.webm" type="video/webm" />
          </video>
        </div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90"></div>
        
        {/* Additional pattern overlays for texture */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                
                <h1 className="text-6xl lg:text-8xl font-black text-white leading-tight font-display">
                  Advanced{' '}
                  <span className="text-accent font-display">Intelligence Solutions</span>
                  <br />
                  <span className="text-5xl lg:text-6xl text-slate-300 font-bold font-display">For Modern Operations</span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-slate-200 leading-relaxed max-w-2xl font-medium">
                  Deploy cutting-edge intelligence capabilities that adapt to your mission needs. Our comprehensive platform delivers real-time insights, advanced analytics, and actionable intelligence for organizations across all sectors.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="text-lg px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white shadow-lg cursor-default">
                  Book a Call
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-4 border-2 border-slate-300 text-slate-300 hover:bg-slate-300 hover:text-slate-900 cursor-pointer"
                  onClick={scrollToNextSection}
                >
                  Learn More
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-300/20">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-emerald-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Rapid Deployment</p>
                    <p className="text-xs text-slate-300">Quick Implementation</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-slate-500/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-slate-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Expert Team</p>
                    <p className="text-xs text-slate-300">Industry Professionals</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-indigo-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Proven Solutions</p>
                    <p className="text-xs text-slate-300">Track Record of Success</p>
                  </div>
                </div>
              </div>
              

            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          onClick={scrollToNextSection}
        >
          <motion.div
            className="w-8 h-8 border-2 border-white/60 rounded-full flex items-center justify-center hover:border-white/80 transition-colors duration-300"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="w-4 h-4 text-white/80 rotate-90" />
          </motion.div>
        </motion.div>
      </section>

      {/* Before/After Intelligence Comparison */}
      <section id="before-after-section" className="py-24 bg-muted-dark-blue relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
              Before vs <span className="text-accent">After Intelligence</span>
            </h2>
            <p className="text-xl text-grey-300 max-w-3xl mx-auto">
              See the transformation from having no intelligence capabilities to deploying Intelligence-as-a-Service. 
              Drag the slider to compare the before and after.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <BeforeAfterSlider
                beforeImage="https://cdn.prod.website-files.com/6878a7ecb2912d644f2f66c9/688a07bb738f23c69bbf2441_image%20(3)-min.png"
                afterImage="https://cdn.prod.website-files.com/6878a7ecb2912d644f2f66c9/688a078c721494c9afb613e2_image%20(2)-min.png"
                beforeAlt="Before - No intelligence capabilities"
                afterAlt="After - Intelligence-as-a-Service deployed"
                className="h-96 lg:h-[500px] rounded-2xl shadow-2xl"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
              {/* Before: No Intelligence Capabilities */}
              <div className="bg-red-900/20 rounded-2xl p-8 border border-red-500/30">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="text-red-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white font-display">Before: No Intelligence</h3>
                    <div className="w-12 h-1 bg-red-400 rounded-full mt-2"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-grey-300 leading-relaxed text-lg">
                    Operating without intelligence capabilities means:
                  </p>
                  <ul className="space-y-2 text-grey-300">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">✗</span>
                      <span>No insights or intelligence in-house</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">✗</span>
                      <span>High overhead and long development cycles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">✗</span>
                      <span>Manual processes and guesswork</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">✗</span>
                      <span>Reactive decision making</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">✗</span>
                      <span>Limited situational awareness</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* After: Intelligence-as-a-Service */}
              <div className="bg-green-900/20 rounded-2xl p-8 border border-green-500/30">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-green-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white font-display">After: Intelligence-as-a-Service</h3>
                    <div className="w-12 h-1 bg-green-400 rounded-full mt-2"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-grey-300 leading-relaxed text-lg">
                    Deploy Intelligence-as-a-Service and get:
                  </p>
                  <ul className="space-y-2 text-grey-300">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span>We build your solution within your systems/operations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span>Deploy in no-time with real-time dashboards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span>Custom platform tailored to your needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span>Optional ongoing support and maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span>Zero overhead, instant intelligence</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* Why Choose Us - Moved up for better flow */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-6 font-display">
              Why Choose <span className="text-accent">Altitude Intelligence</span>
            </h2>
            <p className="text-xl text-grey-300 max-w-4xl mx-auto leading-relaxed font-medium">
              Flexible Intelligence-as-a-Service that adapts to your mission needs
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal direction="up" delay={0.1}>
              <Card className="h-full bg-grey-800/50 border-grey-700 hover:border-primary-500 transition-all duration-300">
                <CardBody className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary-dark rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Clock className="text-white" size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">On-Demand Expertise</h4>
                  <p className="text-grey-300">Use our team only when you need us. No fixed commitments or long-term contracts.</p>
                </CardBody>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <Card className="h-full bg-grey-800/50 border-grey-700 hover:border-primary-500 transition-all duration-300">
                <CardBody className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary-dark rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Settings className="text-white" size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Flexible Deliverables</h4>
                  <p className="text-grey-300">We deliver insights in the format you need—dashboards, PDF reports, map overlays, or structured data.</p>
                </CardBody>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <Card className="h-full bg-grey-800/50 border-grey-700 hover:border-primary-500 transition-all duration-300">
                <CardBody className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary-dark rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Zap className="text-white" size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Mission-Timed</h4>
                  <p className="text-grey-300">Whether you need 24-hour turnaround or ongoing monitoring, our timelines adapt to operational tempo.</p>
                </CardBody>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <Card className="h-full bg-grey-800/50 border-grey-700 hover:border-primary-500 transition-all duration-300">
                <CardBody className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary-dark rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Layers className="text-white" size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Integrated Workflow</h4>
                  <p className="text-grey-300">We can plug into your existing processes, tasking platforms, and communication tools.</p>
                </CardBody>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Experience - Moved up for credibility */}
      <section className="py-24 bg-grey-800 relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
              OUR EXPERIENCE
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="text-center">
                <AnimatedCounter 
                  end={COMPANY_STATS.productsDelivered} 
                  suffix="+" 
                  className="text-5xl font-black text-primary-muted mb-4"
                  duration={2}
                />
                <div className="text-lg text-grey-400 font-medium">intelligence products delivered to government, defense, and commercial clients</div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="text-center">
                <div className="text-5xl font-black text-primary-light mb-4">Every major active theatre</div>
                <div className="text-lg text-grey-400 font-medium">Operational support across Europe, Middle East, Africa, Asia, and North America</div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="text-center">
                <div className="text-5xl font-black text-primary-dark mb-4">Canada, U.S., and Europe</div>
                <div className="text-lg text-grey-400 font-medium">Clients including national security, public safety, and infrastructure sectors</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Key Use Cases - Moved up for better flow */}
      <section className="py-24 bg-grey-900 relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
              KEY USE CASES
            </h2>
            <p className="text-xl text-grey-200 max-w-4xl mx-auto">
              From border security to corporate risk, our intelligence products solve critical problems across sectors and scenarios.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ScrollReveal direction="left" delay={0.1}>
              <Card className="h-full bg-grey-800 border-2 border-grey-700 hover:border-primary-muted group transition-all duration-300">
                <CardBody className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary-dark rounded-xl flex items-center justify-center">
                      <Shield className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-display">Illicit Cross-Border Activity Monitoring</h3>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-muted rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-grey-200">Detect unregistered trails, disturbed ground, and forward staging sites</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-muted rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-grey-200">Use RF and GEOINT to track vehicle or foot movement across borders</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-muted rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-grey-200">Identify smuggling corridors and compounds</p>
                    </div>
                  </div>
                  <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
                    <p className="text-sm text-green-300 font-semibold mb-2">✓ Real Result:</p>
                    <p className="text-sm text-grey-300">85% increase in detection accuracy for Mexico-US border operations, enabling focused resource deployment.</p>
                  </div>
                </CardBody>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <Card className="h-full bg-grey-800 border-2 border-grey-700 hover:border-primary-muted group transition-all duration-300">
                <CardBody className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary-dark rounded-xl flex items-center justify-center">
                      <MapPin className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-display">Maritime Domain Awareness</h3>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-muted rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-grey-300">Track dark vessels using RF signal detection without AIS</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-muted rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-grey-300">Monitor suspicious movements near ports, coasts, or shipping lanes</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-muted rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-grey-300">Identify staging behavior before illicit maritime operations</p>
                    </div>
                  </div>
                  <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
                    <p className="text-sm text-green-300 font-semibold mb-2">✓ Real Result:</p>
                    <p className="text-sm text-grey-300">Successfully tracked 12 suspicious vessels in Gulf of Aden over 3 months, providing actionable intelligence to maritime authorities.</p>
                  </div>
                </CardBody>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.3}>
              <Card className="h-full bg-grey-800 border-2 border-grey-700 hover:border-primary-muted group transition-all duration-300">
                <CardBody className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary-dark rounded-xl flex items-center justify-center">
                      <AlertTriangle className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-display">Critical Infrastructure Protection</h3>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-muted rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-grey-300">Detect unusual ground activity near pipelines, power stations, or airfields</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-muted rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-grey-300">RF monitoring for unauthorized drone or communication devices</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-muted rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-grey-300">Device signal tracking to detect reconnaissance or insider threats</p>
                    </div>
                  </div>
                  <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
                    <p className="text-sm text-green-300 font-semibold mb-2">✓ Real Result:</p>
                    <p className="text-sm text-grey-300">Detected 3 potential security incidents before escalation, enabling proactive response measures for power station protection.</p>
                  </div>
                </CardBody>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <Card className="h-full bg-grey-800 border-2 border-grey-700 hover:border-primary-muted group transition-all duration-300">
                <CardBody className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary-dark rounded-xl flex items-center justify-center">
                      <BarChart3 className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-display">Corporate Risk & Geopolitical Intelligence</h3>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-muted rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-grey-300">Monitor high-risk supply chains and trade routes</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-muted rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-grey-300">Detect activity near assets in conflict zones</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-muted rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-grey-300">Support M&A due diligence with multi-layered threat mapping</p>
                    </div>
                  </div>
                  <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
                    <p className="text-sm text-green-300 font-semibold mb-2">✓ Real Result:</p>
                    <p className="text-sm text-grey-300">Identified 5 high-risk supply chain routes and provided alternatives, reducing operational risk by 60% for global corporation.</p>
                  </div>
                </CardBody>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* IaaS Section - Moved down for better flow */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal direction="up">
              <h2 className="text-5xl font-black text-white mb-6 font-display">
                What is IaaS?
              </h2>
              <h3 className="text-3xl font-bold text-primary-light mb-8 font-display">
                Actionable Intel. Anytime.
              </h3>
              <p className="text-xl text-grey-300 leading-relaxed max-w-4xl mx-auto mb-8">
                Intelligence-as-a-Service (IaaS) is our flexible model for delivering high-impact intelligence products tailored to your mission needs—without the overhead of building an in-house intelligence team. Whether you require rapid response reporting, persistent monitoring, or specialized targeting support, our IaaS model ensures you receive timely, actionable intelligence in the format you need, when you need it.
              </p>
              <p className="text-lg text-grey-400 leading-relaxed max-w-3xl mx-auto">
                We provide unclassified, multi-source analysis fused across geospatial, open-source, RF, and behavioral data to support operations, planning, and decision-making.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Technology & Capabilities - Moved down for better flow */}
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
              <span className="text-accent">Cutting-Edge Technology</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-medium">
              Our intelligence platform combines advanced AI, real-time data fusion, 
              and proven methodologies to deliver actionable insights when seconds count.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

          {/* Partners Section */}
          <ScrollReveal direction="up" className="text-center mt-16">
            <h3 className="text-3xl font-black text-white mb-8 font-display">Trusted Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {[
                { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
                { name: 'Amazon Web Services', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
                { name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' },
                { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
                { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
                { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' }
              ].map((partner, index) => (
                <motion.div
                  key={partner.name}
                  className="flex items-center justify-center p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={80}
                    height={40}
                    className="object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-primary-500/20 to-primary-400/20" />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 text-white text-sm font-bold tracking-wide border border-white/30 mb-8">
              Ready to Deploy Intelligence?
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight font-display">
              Start Your Mission with{' '}
              <span className="text-accent">Altitude Intelligence</span>
          </h2>
            
            <p className="text-xl lg:text-2xl text-slate-200 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              Join the organizations worldwide that trust us with their most critical intelligence operations. 
              Deploy advanced capabilities in hours, not months.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button size="lg" className="bg-primary-dark hover:bg-primary-muted text-white text-xl px-16 py-8 font-semibold tracking-wide shadow-2xl">
                Contact Us
                <ArrowRight className="ml-3" size={24} />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary-dark text-xl px-16 py-8 font-semibold tracking-wide">
                Learn More
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-black text-white mb-2 font-display">
                  <AnimatedCounter end={100} suffix="+" duration={2} />
                </div>
                <div className="text-slate-200 text-sm font-medium tracking-wide">Intelligence Products</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white mb-2 font-display">
                  <AnimatedCounter end={8} suffix="+" duration={2} delay={0.2} />
                </div>
                <div className="text-slate-200 text-sm font-medium tracking-wide">Active Theaters</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white mb-2 font-display">
                  <AnimatedCounter end={24} suffix="h" duration={2} delay={0.4} />
                </div>
                <div className="text-slate-200 text-sm font-medium tracking-wide">Response Time</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white mb-2 font-display">
                  <AnimatedCounter end={12} suffix="+" duration={2} delay={0.6} />
                </div>
                <div className="text-slate-200 text-sm font-medium tracking-wide">Countries Served</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
