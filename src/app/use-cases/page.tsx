'use client'

import { ArrowRight, CheckCircle, Shield, MapPin, AlertTriangle, Building, Globe, Users } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Button from '@/components/ui/Button'
import Card, { CardBody } from '@/components/ui/Card'

const ScrollReveal = dynamic(() => import('@/components/ui/ScrollReveal'), {
  ssr: false,
  loading: () => <div className="opacity-0" />
})

import { useCasesData } from '@/lib/pageData'

const iconMap = {
  Shield,
  Globe,
  AlertTriangle,
  Building
}

export default function UseCasesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-red-500/5 to-red-400/10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.div 
              className="inline-flex items-center px-6 py-3 rounded-full bg-red-600/20 text-red-300 text-sm font-semibold tracking-wide border border-red-500/30 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Mission-Critical Use Cases
            </motion.div>
            
            <h1 className="text-6xl lg:text-8xl font-black text-white leading-tight mb-8">
              Real-World <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Intelligence</span>
              <br />
              <span className="text-5xl lg:text-6xl text-slate-300 font-bold">Use Cases</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-200 leading-relaxed max-w-4xl mx-auto font-medium mb-12">
              From border security to crisis response, our intelligence services are deployed 
              in the world's most challenging environments where accuracy and speed save lives.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-24 bg-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Intelligence <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Solutions</span> for Real Operations
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Our intelligence services are designed for mission-critical operations across defense, security, commercial, and humanitarian sectors.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCasesData.map((useCase, index) => {
              const IconComponent = iconMap[useCase.icon as keyof typeof iconMap] || Shield
              return (
                <ScrollReveal key={useCase.id} direction="up" delay={index * 0.1}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 bg-slate-700 border-2 border-slate-600 hover:border-red-500 group">
                    <CardBody className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center">
                          <IconComponent className="text-white" size={32} />
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-red-300 font-semibold">Use Case</div>
                          <div className="text-xs text-slate-400">Intelligence</div>
                        </div>
                      </div>
                      
                      <h3 className="text-3xl font-black text-white mb-4 group-hover:text-red-400 transition-colors">
                        {useCase.title}
                      </h3>
                      
                      <p className="text-slate-200 mb-6 leading-relaxed">
                        {useCase.description}
                      </p>
                      
                      <div className="mb-6">
                        <div className="text-sm text-slate-400 mb-2">Sectors:</div>
                        <div className="flex flex-wrap gap-2">
                          {useCase.sectors.map((sector, idx) => (
                            <span key={idx} className="px-3 py-1 bg-slate-600 text-slate-300 text-xs rounded-full">
                              {sector}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        {useCase.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="text-sm text-slate-300">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-6 border-t border-slate-600">
                        <Link href={`/use-cases/${useCase.id}`}>
                          <Button variant="ghost" size="sm" className="w-full group-hover:bg-red-600 group-hover:text-white font-semibold">
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
      <section className="py-24 bg-gradient-to-br from-red-900 via-red-800 to-red-900 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Ready to Deploy <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Intelligence Solutions?</span>
            </h2>
            <p className="text-xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Contact our intelligence experts to discuss your specific use case and get a customized solution for your mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-xl px-12 py-4 font-semibold">
                  Get Intelligence Quote
                  <ArrowRight className="ml-3" size={20} />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-red-600 text-xl px-12 py-4 font-semibold">
                  View All Services
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
