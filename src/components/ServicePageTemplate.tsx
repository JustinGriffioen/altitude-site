'use client'

import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { ServiceData } from '@/lib/pageData'
import Button from '@/components/ui/Button'
import Card, { CardBody } from '@/components/ui/Card'

const ScrollReveal = dynamic(() => import('@/components/ui/ScrollReveal'), {
  ssr: false,
  loading: () => <div className="opacity-0" />
})

interface ServicePageTemplateProps {
  data: ServiceData
}

const colorClasses = {
  blue: {
    gradient: 'from-primary-light to-primary-muted',
    bg: 'bg-primary-dark/20',
    text: 'text-primary-light',
    border: 'border-primary-muted/30',
    button: 'bg-primary-dark hover:bg-primary-muted',
    card: 'hover:border-primary-light',
    icon: 'bg-primary-dark group-hover:bg-primary-muted'
  },
  green: {
    gradient: 'from-primary-light to-primary-muted',
    bg: 'bg-primary-dark/20',
    text: 'text-primary-light',
    border: 'border-primary-muted/30',
    button: 'bg-primary-dark hover:bg-primary-muted',
    card: 'hover:border-primary-light',
    icon: 'bg-primary-dark group-hover:bg-primary-muted'
  },
  purple: {
    gradient: 'from-primary-light to-primary-muted',
    bg: 'bg-primary-dark/20',
    text: 'text-primary-light',
    border: 'border-primary-muted/30',
    button: 'bg-primary-dark hover:bg-primary-muted',
    card: 'hover:border-primary-light',
    icon: 'bg-primary-dark group-hover:bg-primary-muted'
  },
  orange: {
    gradient: 'from-primary-light to-primary-muted',
    bg: 'bg-primary-dark/20',
    text: 'text-primary-light',
    border: 'border-primary-muted/30',
    button: 'bg-primary-dark hover:bg-primary-muted',
    card: 'hover:border-primary-light',
    icon: 'bg-primary-dark group-hover:bg-primary-muted'
  }
}

export default function ServicePageTemplate({ data }: ServicePageTemplateProps) {
  const colors = colorClasses[data.color as keyof typeof colorClasses] || colorClasses.blue

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
              {data.title}
            </motion.div>
            
            <h1 className="text-6xl lg:text-8xl font-black text-white leading-tight mb-8">
              <span className={`bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>{data.title}</span>
              <br />
              <span className="text-5xl lg:text-6xl text-grey-300 font-bold">Services</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-grey-200 leading-relaxed max-w-4xl mx-auto font-medium mb-12">
              {data.heroDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className={`text-lg px-8 py-4 ${colors.button} text-white shadow-lg`}>
                Contact Us
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-grey-900">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-muted-dark-blue relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              {data.title} <span className={`bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>Capabilities</span>
            </h2>
            <p className="text-xl text-grey-200 max-w-3xl mx-auto leading-relaxed">
              Our {data.title.toLowerCase()} specialists leverage advanced tools and methodologies to deliver comprehensive intelligence solutions.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.capabilities.map((capability, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <Card className={`h-full hover:shadow-2xl transition-all duration-300 bg-muted-dark-blue border-2 border-grey-700 ${colors.card} group`}>
                  <CardBody className="p-8">
                    <div className={`w-16 h-16 ${colors.icon} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-${data.color}-500 transition-colors duration-300`}>
                      <div className="w-8 h-8 bg-white rounded-lg"></div>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4 text-center group-hover:text-primary-400 transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-grey-200 mb-6 leading-relaxed text-center">
                      {capability.description}
                    </p>
                    <div className="space-y-2">
                      {capability.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-grey-300">{feature}</span>
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


      {/* CTA Section */}
      <section className={`py-24 bg-gradient-to-br from-${data.color}-900 via-${data.color}-800 to-${data.color}-900 relative`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Ready to Deploy <span className={`bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>{data.title}?</span>
            </h2>
            <p className="text-xl text-grey-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Contact our {data.title.toLowerCase()} specialists to discuss your intelligence requirements and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-grey-900 hover:bg-grey-100 text-xl px-12 py-4 font-semibold">
                  Contact Us
                  <ArrowRight className="ml-3" size={20} />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-grey-900 text-xl px-12 py-4 font-semibold">
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
