'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Target, Globe, Users, ArrowRight, ExternalLink, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function Projects() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [studiesRef, studiesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [resultsRef, resultsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const caseStudies = [
    {
      id: 'border-security-mexico',
      title: 'Border Security Enhancement - Mexico-US Border',
      sector: 'Defense & Security',
      challenge: 'Detecting and monitoring illicit cross-border activity in remote desert regions where traditional surveillance methods were ineffective.',
      solution: 'Deployed multi-source intelligence fusion combining satellite imagery, RF signal detection, and OSINT to identify smuggling routes and staging areas.',
      results: [
        'Identified 15 previously unknown smuggling routes',
        'Reduced false alarm rate by 40%',
        'Enabled 24/7 monitoring of 200km border section',
        'Supported 50+ successful interdiction operations'
      ],
      icon: Shield,
      color: 'from-blue-500 to-blue-600',
      duration: '6 months',
      client: 'Government Agency'
    },
    {
      id: 'maritime-piracy-somalia',
      title: 'Maritime Domain Awareness - Gulf of Aden',
      sector: 'Maritime Security',
      challenge: 'Tracking dark vessels and suspicious maritime activity in high-risk waters where AIS transponders were disabled.',
      solution: 'Implemented RF signal detection and satellite imagery analysis to track vessel movements and identify potential threats.',
      results: [
        'Tracked 200+ dark vessels over 6 months',
        'Identified 12 high-risk vessels for interdiction',
        'Reduced response time to threats by 60%',
        'Supported international naval operations'
      ],
      icon: Target,
      color: 'from-green-500 to-green-600',
      duration: '8 months',
      client: 'International Maritime Organization'
    },
    {
      id: 'infrastructure-protection-pipeline',
      title: 'Critical Infrastructure Protection - Energy Sector',
      sector: 'Commercial',
      challenge: 'Monitoring pipeline infrastructure for unauthorized access and potential sabotage threats across remote locations.',
      solution: 'Deployed comprehensive monitoring system using satellite imagery, RF detection, and ground sensor integration.',
      results: [
        'Detected 8 unauthorized access attempts',
        'Prevented 3 potential security incidents',
        'Reduced monitoring costs by 35%',
        'Achieved 99.9% uptime monitoring'
      ],
      icon: Globe,
      color: 'from-orange-500 to-orange-600',
      duration: '12 months',
      client: 'Energy Corporation'
    },
    {
      id: 'crisis-response-refugee',
      title: 'Crisis Response - Refugee Displacement Monitoring',
      sector: 'Humanitarian',
      challenge: 'Tracking population displacement and camp growth during humanitarian crisis to support aid distribution.',
      solution: 'Combined satellite imagery analysis with OSINT to monitor displacement patterns and camp development.',
      results: [
        'Tracked 50,000+ displaced persons',
        'Identified 12 new settlement areas',
        'Supported aid distribution to 15 camps',
        'Reduced assessment time by 70%'
      ],
      icon: Users,
      color: 'from-purple-500 to-purple-600',
      duration: '4 months',
      client: 'International NGO'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              Intelligence{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Projects</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-slate-200 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Real-world examples of how our Intelligence-as-a-Service solutions have delivered 
              mission-critical insights across defense, security, commercial, and humanitarian sectors.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={studiesRef} className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={studiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              Explore detailed projects showcasing how our intelligence solutions 
              have solved complex challenges across different sectors and scenarios.
            </p>
          </motion.div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={studiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${study.color} rounded-lg flex items-center justify-center`}>
                      <study.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                        {study.sector}
                      </span>
                      <div className="text-sm text-slate-500">
                        {study.duration} • {study.client}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-slate-900 mb-6">
                    {study.title}
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">Challenge</h4>
                      <p className="text-slate-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">Solution</h4>
                      <p className="text-slate-600 leading-relaxed">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start text-slate-600">
                            <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 h-full flex items-center justify-center border border-slate-200">
                    <div className="text-center">
                      <div className={`w-24 h-24 bg-gradient-to-r ${study.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                        <study.icon className="text-white" size={40} />
                      </div>
                      <h4 className="text-xl font-semibold text-slate-900 mb-2">Project Overview</h4>
                      <div className="space-y-2 text-sm text-slate-600">
                        <div className="flex justify-between">
                          <span>Duration:</span>
                          <span className="font-medium">{study.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Client:</span>
                          <span className="font-medium">{study.client}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sector:</span>
                          <span className="font-medium">{study.sector}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section ref={resultsRef} className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={resultsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Proven Results</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our Intelligence-as-a-Service solutions have consistently delivered measurable 
              results across diverse operational environments and mission requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '100+',
                label: 'Intelligence Products Delivered',
                description: 'Across defense, security, commercial, and humanitarian sectors'
              },
              {
                number: '50+',
                label: 'Successful Operations Supported',
                description: 'From border security to crisis response missions'
              },
              {
                number: '60%',
                label: 'Average Response Time Improvement',
                description: 'Faster intelligence delivery and decision-making'
              },
              {
                number: '99%',
                label: 'Client Satisfaction Rate',
                description: 'Consistent high-quality intelligence products'
              }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={resultsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-slate-900 mb-2">{stat.label}</div>
                <div className="text-sm text-slate-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Create Your Success Story?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss your specific intelligence requirements and see how our proven 
            solutions can deliver the results you need to achieve your mission.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center">
              Start Your Project
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
