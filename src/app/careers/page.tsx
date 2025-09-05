'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, MapPin, Clock, ArrowRight, CheckCircle, ExternalLink, Briefcase, Globe } from 'lucide-react'
import Link from 'next/link'

export default function Careers() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [benefitsRef, benefitsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [positionsRef, positionsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [cultureRef, cultureInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const openPositions = [
    {
      title: 'Senior Intelligence Analyst',
      department: 'Intelligence Operations',
      location: 'Vancouver, BC (Remote OK)',
      type: 'Full-time',
      description: 'Lead intelligence analysis projects across multiple domains including OSINT, GEOINT, and multi-source fusion.',
      requirements: [
        '5+ years intelligence analysis experience',
        'Government or military background preferred',
        'Experience with satellite imagery analysis',
        'Strong analytical and communication skills'
      ],
      icon: Briefcase,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'RF Intelligence Specialist',
      department: 'Technical Operations',
      location: 'Vancouver, BC',
      type: 'Full-time',
      description: 'Develop and implement RF signal detection and analysis capabilities for maritime and border security applications.',
      requirements: [
        'Electrical engineering or related degree',
        '3+ years RF/communications experience',
        'Signal processing and analysis skills',
        'Security clearance eligibility'
      ],
      icon: Globe,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Intelligence Product Manager',
      department: 'Product Development',
      location: 'Vancouver, BC (Remote OK)',
      type: 'Full-time',
      description: 'Manage intelligence product development lifecycle and client delivery processes.',
      requirements: [
        '3+ years product management experience',
        'Intelligence or security sector background',
        'Strong project management skills',
        'Client-facing experience preferred'
      ],
      icon: Users,
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Market-leading salaries with performance bonuses and equity participation opportunities.',
      icon: CheckCircle
    },
    {
      title: 'Flexible Work Arrangements',
      description: 'Remote work options, flexible hours, and work-life balance that supports your mission.',
      icon: Clock
    },
    {
      title: 'Professional Development',
      description: 'Continuous learning opportunities, conference attendance, and skill development programs.',
      icon: Globe
    },
    {
      title: 'Mission-Driven Work',
      description: 'Work on projects that make a real difference in defense, security, and humanitarian efforts.',
      icon: Briefcase
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health coverage, mental health support, and wellness programs.',
      icon: CheckCircle
    },
    {
      title: 'Team Environment',
      description: 'Collaborative culture with experienced professionals who share your passion for intelligence.',
      icon: Users
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              Join Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Team</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-slate-600 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Be part of a mission-driven team delivering intelligence solutions that make a real difference 
              in defense, security, commercial, and humanitarian sectors worldwide.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="#positions" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                View Open Positions
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
                General Inquiry
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section ref={cultureRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={cultureInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Work With Us</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Join a team of intelligence professionals who are passionate about delivering 
              mission-critical insights that protect and serve communities worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Mission-Driven Culture',
                description: 'Every project we work on has a real-world impact on security, defense, and humanitarian efforts.',
                icon: Briefcase
              },
              {
                title: 'Cutting-Edge Technology',
                description: 'Work with the latest intelligence tools, satellite imagery, and data analysis platforms.',
                icon: Globe
              },
              {
                title: 'Expert Team',
                description: 'Collaborate with experienced intelligence professionals from government, military, and commercial sectors.',
                icon: Users
              },
              {
                title: 'Flexible Environment',
                description: 'Remote work options and flexible schedules that support your work-life balance.',
                icon: Clock
              },
              {
                title: 'Continuous Learning',
                description: 'Ongoing professional development opportunities and access to industry conferences.',
                icon: CheckCircle
              },
              {
                title: 'Global Impact',
                description: 'Your work supports operations across multiple continents and diverse mission requirements.',
                icon: MapPin
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={cultureInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section ref={benefitsRef} className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Benefits & Perks</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We offer comprehensive benefits and perks designed to support your professional 
              growth and personal well-being.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
                initial={{ opacity: 0, y: 50 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-slate-600">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section ref={positionsRef} id="positions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={positionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Open Positions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore current opportunities to join our team of intelligence professionals 
              and make a real impact on global security and humanitarian efforts.
            </p>
          </motion.div>

          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={positionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                    <div className={`w-12 h-12 bg-gradient-to-r ${position.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <position.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{position.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                        <span className="flex items-center">
                          <Briefcase className="mr-1" size={16} />
                          {position.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="mr-1" size={16} />
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="mr-1" size={16} />
                          {position.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Apply Now
                    <ExternalLink className="ml-2" size={16} />
                  </Link>
                </div>

                <div className="mb-6">
                  <p className="text-slate-600 leading-relaxed">{position.description}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Key Requirements</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((requirement, idx) => (
                      <li key={idx} className="flex items-start text-slate-600">
                        <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={positionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-lg text-slate-600 mb-6">
              Don't see a position that matches your skills? We're always looking for talented individuals.
            </p>
            <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
              Send Us Your Resume
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
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
            Ready to Make an Impact?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join our team of intelligence professionals and help us deliver mission-critical 
            insights that protect and serve communities worldwide.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center">
              Apply Today
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
