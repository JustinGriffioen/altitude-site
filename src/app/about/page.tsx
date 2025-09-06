'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Target, Globe, Users, Award, Clock, Zap, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function About() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="bg-gradient-to-br from-very-dark-blue to-muted-dark-blue py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              About{' '}
              <span className="bg-gradient-to-r from-primary-dark to-primary-muted bg-clip-text text-transparent">Altitude Intelligence</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-slate-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We're an intelligence consulting company with defense intelligence professionals 
              dedicated to making mission-critical intelligence services accessible, flexible, 
              and actionable for organizations across defense, security, commercial, and humanitarian sectors.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                To democratize access to high-quality intelligence by providing flexible, 
                on-demand Intelligence-as-a-Service solutions that eliminate the overhead 
                of building and maintaining internal intelligence capabilities.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We believe that every organization, regardless of size or sector, should have 
                access to the intelligence insights they need to make informed decisions and 
                protect their interests in an increasingly complex world.
              </p>
              <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-primary-dark text-white rounded-lg font-semibold hover:bg-primary-muted transition-colors">
                Work With Us
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-grey-50 to-slate-50 rounded-2xl p-8 border border-slate-200"
              initial={{ opacity: 0, x: 50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary-dark mt-1" size={20} />
                  <p className="text-slate-700">A world where intelligence is accessible, not exclusive</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary-dark mt-1" size={20} />
                  <p className="text-slate-700">Organizations empowered with real-time, actionable insights</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary-dark mt-1" size={20} />
                  <p className="text-slate-700">Flexible intelligence solutions that adapt to mission needs</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-primary-dark mt-1" size={20} />
                  <p className="text-slate-700">Zero overhead, maximum impact intelligence delivery</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section ref={teamRef} className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're intelligence professionals with decades of combined experience across 
              defense, security, and commercial sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Intelligence Analysts',
                description: 'Former government and military intelligence analysts with expertise in OSINT, GEOINT, and multi-source intelligence fusion.',
                icon: Shield,
                color: 'from-primary-dark to-primary-muted'
              },
              {
                title: 'Technical Specialists',
                description: 'RF engineers, data scientists, and software developers who build the tools and platforms that power our intelligence products.',
                icon: Zap,
                color: 'from-green-500 to-green-600'
              },
              {
                title: 'Domain Experts',
                description: 'Subject matter experts in border security, maritime operations, critical infrastructure, and crisis response.',
                icon: Target,
                color: 'from-red-500 to-red-600'
              },
              {
                title: 'Commercial Intelligence',
                description: 'Business intelligence professionals with experience in corporate risk, supply chain security, and geopolitical analysis.',
                icon: Globe,
                color: 'from-purple-500 to-purple-600'
              },
              {
                title: 'Humanitarian Specialists',
                description: 'Experts in humanitarian operations, disaster response, and conflict zone intelligence support.',
                icon: Users,
                color: 'from-primary-dark to-primary-muted'
              },
              {
                title: 'Quality Assurance',
                description: 'Intelligence quality managers ensuring accuracy, timeliness, and relevance of all intelligence products.',
                icon: Award,
                color: 'from-indigo-500 to-indigo-600'
              }
            ].map((role, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${role.color} rounded-lg flex items-center justify-center mb-4`}>
                  <role.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{role.title}</h3>
                <p className="text-slate-600 leading-relaxed">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section ref={valuesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These core values guide everything we do, from how we approach intelligence 
              analysis to how we work with our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Mission-First',
                description: 'Every intelligence product we deliver is designed to support real-world operations and decision-making.',
                icon: Target
              },
              {
                title: 'Flexibility',
                description: 'We adapt to your needs, not the other way around. Our solutions scale with your requirements.',
                icon: Clock
              },
              {
                title: 'Quality',
                description: 'We maintain the highest standards of accuracy, timeliness, and relevance in all our intelligence products.',
                icon: Award
              },
              {
                title: 'Innovation',
                description: 'We continuously evolve our methods and tools to stay ahead of emerging threats and opportunities.',
                icon: Zap
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-dark to-primary-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
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
            Ready to Work With Our Team?
          </motion.h2>
          <motion.p 
            className="text-xl text-grey-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss your intelligence requirements and see how our experienced team 
            can deliver the insights you need to achieve your mission.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="bg-white text-primary-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center">
              Get Started Today
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
