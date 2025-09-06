'use client'

import Link from 'next/link'
import { ArrowRight, Shield, Target, Globe, Users, CheckCircle, Clock, Zap, Layers, Settings } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function IAAS() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [useCasesRef, useCasesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [experienceRef, experienceInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              Intelligence-as-a-Service{' '}
              <span className="bg-gradient-to-r from-primary-light to-primary-muted bg-clip-text text-transparent">(IaaS)</span>
            </motion.h1>
            <motion.p 
              className="text-2xl text-grey-200 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Real Intelligence Services. Zero Overhead.
            </motion.p>
            <motion.p 
              className="text-xl text-grey-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Flexible Intelligence-as-a-Service platform. OSINT services, GEOINT analysis, 
              and intelligence consulting for defense intelligence and security operations.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-primary-dark text-white rounded-lg font-semibold hover:bg-primary-muted transition-colors">
                Book a Free Call
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Use Cases */}
      <section ref={useCasesRef} id="use-cases" className="py-20 bg-grey-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={useCasesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">KEY USE CASES</h2>
            <p className="text-xl text-grey-200 max-w-3xl mx-auto">
              From border security to corporate risk, our intelligence products solve critical problems 
              across sectors and scenarios.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Illicit Cross-Border Activity Monitoring',
                description: 'Detect unregistered trails, disturbed ground, and forward staging sites using RF and GEOINT to track vehicle or foot movement across borders.',
                features: [
                  'Detect unregistered trails, disturbed ground, and forward staging sites',
                  'Use RF and GEOINT to track vehicle or foot movement across borders',
                  'Identify smuggling corridors and compounds'
                ]
              },
              {
                title: 'Maritime Domain Awareness',
                description: 'Track dark vessels using RF signal detection without AIS and monitor suspicious movements near ports, coasts, or shipping lanes.',
                features: [
                  'Track dark vessels using RF signal detection without AIS',
                  'Monitor suspicious movements near ports, coasts, or shipping lanes',
                  'Identify staging behavior before illicit maritime operations'
                ]
              },
              {
                title: 'Critical Infrastructure Protection',
                description: 'Detect unusual ground activity near pipelines, power stations, or airfields with RF monitoring for unauthorized devices.',
                features: [
                  'Detect unusual ground activity near pipelines, power stations, or airfields',
                  'RF monitoring for unauthorized drone or communication devices',
                  'Device signal tracking to detect reconnaissance or insider threats'
                ]
              },
              {
                title: 'Conflict Zone Intelligence Support',
                description: 'Monitor troop or militia movements using change detection and OSINT, cross-validating satellite imagery with open-source reports.',
                features: [
                  'Monitor troop or militia movements using change detection and OSINT',
                  'Cross-validate satellite imagery with open-source reports',
                  'Task follow-up imagery for battle damage assessment'
                ]
              },
              {
                title: 'Crisis Response & Disaster Monitoring',
                description: 'Track population displacement during humanitarian emergencies and assess damage to infrastructure post-earthquake or flood.',
                features: [
                  'Track population displacement during humanitarian emergencies',
                  'Assess damage to infrastructure post-earthquake or flood',
                  'Support NGO or government response with real-time overlays'
                ]
              },
              {
                title: 'Corporate Risk & Geopolitical Intelligence',
                description: 'Monitor high-risk supply chains and trade routes, detecting activity near assets in conflict zones.',
                features: [
                  'Monitor high-risk supply chains and trade routes',
                  'Detect activity near assets in conflict zones',
                  'Support M&A due diligence with multi-layered threat mapping'
                ]
              }
            ].map((useCase, index) => (
              <motion.div 
                key={index} 
                className="bg-grey-800 rounded-xl p-6 shadow-sm border border-grey-700 hover:shadow-md hover:border-primary-muted transition-all"
                initial={{ opacity: 0, y: 50 }}
                animate={useCasesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-grey-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-grey-300">
                      <span className="text-primary-muted mr-2 mt-1">🔹</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Experience */}
      <section ref={experienceRef} className="py-20 bg-grey-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">OUR EXPERIENCE</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              {
                number: '100+',
                description: 'intelligence products delivered to government, defense, and commercial clients'
              },
              {
                number: '5+',
                description: 'Operational support across every major active theatre—Europe, Middle East, Africa, Asia, and North America'
              },
              {
                number: '3',
                description: 'Clients in Canada, the U.S., and Europe, including national security, public safety, and infrastructure sectors'
              }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-grey-900 rounded-xl p-8 shadow-sm border border-grey-700"
                initial={{ opacity: 0, y: 50 }}
                animate={experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="text-4xl font-bold text-primary-muted mb-2">{stat.number}</div>
                <div className="text-lg text-grey-300">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section ref={featuresRef} className="py-20 bg-grey-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Service Features</h2>
            <p className="text-xl text-grey-200 max-w-3xl mx-auto">
              Our Intelligence-as-a-Service platform delivers comprehensive intelligence solutions 
              with the flexibility and scalability you need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: 'Rapid Response',
                description: '24-hour turnaround for critical intelligence requirements with real-time monitoring capabilities.'
              },
              {
                icon: Zap,
                title: 'Multi-Source Fusion',
                description: 'Integrate satellite imagery, RF signals, OSINT, and device data into unified intelligence products.'
              },
              {
                icon: Layers,
                title: 'Flexible Outputs',
                description: 'Deliver insights as dashboards, reports, map overlays, shapefiles, or structured data formats.'
              },
              {
                icon: Settings,
                title: 'Custom Integration',
                description: 'Seamlessly integrate with your existing workflows, platforms, and communication systems.'
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-dark to-primary-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-grey-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-dark to-primary-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Elevate Your Intelligence Capabilities?
          </motion.h2>
          <motion.p 
            className="text-xl text-grey-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss your specific intelligence requirements and see how our flexible IaaS solutions 
            can deliver the insights you need, when you need them.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="bg-white text-primary-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-grey-100 transition-colors inline-flex items-center">
              Get Started Today
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
