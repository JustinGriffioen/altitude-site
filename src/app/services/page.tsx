'use client'

import { ArrowRight, CheckCircle, Shield, Satellite, Radio, Settings, MapPin } from 'lucide-react'
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

import { servicesData } from '@/lib/pageData'

const iconMap = {
  Satellite,
  MapPin,
  Radio,
  Settings,
  Shield
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-very-dark-blue via-muted-dark-blue to-very-dark-blue">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/10 via-primary-muted/5 to-primary-light/10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.div 
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary-dark/20 text-primary-light text-sm font-semibold tracking-wide border border-primary-muted/30 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Intelligence Services
            </motion.div>
            
            <h1 className="text-6xl lg:text-8xl font-black text-white leading-tight mb-8">
              Mission-Ready{' '}
              <span className="bg-gradient-to-r from-primary-light to-primary-muted bg-clip-text text-transparent">Intelligence Services</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-grey-200 leading-relaxed max-w-4xl mx-auto font-medium mb-12">
              Deploy advanced intelligence capabilities across OSINT, GEOINT, RF Intelligence, 
              and specialized operations. Flexible delivery methods for any mission requirement.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-muted-dark-blue relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Our <span className="bg-gradient-to-r from-primary-light to-primary-muted bg-clip-text text-transparent">Intelligence Capabilities</span>
            </h2>
            <p className="text-xl text-grey-200 max-w-3xl mx-auto leading-relaxed">
              Choose from our comprehensive suite of intelligence services, each designed for specific operational requirements and mission objectives.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Settings
              return (
                <ScrollReveal key={service.id} direction="up" delay={index * 0.1}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 bg-slate-700 border-2 border-slate-600 hover:border-primary-muted group">
                    <CardBody className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 bg-primary-dark rounded-xl flex items-center justify-center">
                          <IconComponent className="text-white" size={24} />
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-primary-light font-semibold">Service</div>
                          <div className="text-xs text-slate-400">Intelligence</div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-black text-white mb-4 group-hover:text-primary-muted transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-grey-200 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="text-sm text-slate-300">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-6 border-t border-slate-600">
                        <Link href={`/services/${service.id}`}>
                          <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary-dark group-hover:text-white font-semibold">
                            Learn More
                            <ArrowRight className="ml-2" size={16} />
                          </Button>
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-dark via-primary-muted to-primary-dark relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Ready to Deploy <span className="bg-gradient-to-r from-primary-light to-primary-muted bg-clip-text text-transparent">Intelligence Services?</span>
            </h2>
            <p className="text-xl text-grey-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Contact our intelligence experts to discuss your specific requirements and get a customized solution for your mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary-dark hover:bg-gray-100 text-xl px-12 py-4 font-semibold">
                  Get Intelligence Quote
                  <ArrowRight className="ml-3" size={20} />
                </Button>
              </Link>
              <Link href="/iaas">
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary-dark text-xl px-12 py-4 font-semibold">
                  Learn About IAAS
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
