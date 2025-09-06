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
    gradient: 'from-blue-400 to-blue-600',
    bg: 'bg-blue-600/20',
    text: 'text-blue-300',
    border: 'border-blue-500/30',
    button: 'bg-blue-600 hover:bg-blue-700',
    card: 'hover:border-blue-500',
    icon: 'bg-blue-600 group-hover:bg-blue-500'
  },
  green: {
    gradient: 'from-green-400 to-green-600',
    bg: 'bg-green-600/20',
    text: 'text-green-300',
    border: 'border-green-500/30',
    button: 'bg-green-600 hover:bg-green-700',
    card: 'hover:border-green-500',
    icon: 'bg-green-600 group-hover:bg-green-500'
  },
  purple: {
    gradient: 'from-purple-400 to-purple-600',
    bg: 'bg-purple-600/20',
    text: 'text-purple-300',
    border: 'border-purple-500/30',
    button: 'bg-purple-600 hover:bg-purple-700',
    card: 'hover:border-purple-500',
    icon: 'bg-purple-600 group-hover:bg-purple-500'
  },
  orange: {
    gradient: 'from-orange-400 to-orange-600',
    bg: 'bg-orange-600/20',
    text: 'text-orange-300',
    border: 'border-orange-500/30',
    button: 'bg-orange-600 hover:bg-orange-700',
    card: 'hover:border-orange-500',
    icon: 'bg-orange-600 group-hover:bg-orange-500'
  }
}

export default function ServicePageTemplate({ data }: ServicePageTemplateProps) {
  const colors = colorClasses[data.color as keyof typeof colorClasses] || colorClasses.blue

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
              <span className="text-5xl lg:text-6xl text-slate-300 font-bold">Services</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-200 leading-relaxed max-w-4xl mx-auto font-medium mb-12">
              {data.heroDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className={`text-lg px-8 py-4 ${colors.button} text-white shadow-lg`}>
                Get {data.title} Quote
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-slate-900">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              {data.title} <span className={`bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>Capabilities</span>
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Our {data.title.toLowerCase()} specialists leverage advanced tools and methodologies to deliver comprehensive intelligence solutions.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.capabilities.map((capability, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <Card className={`h-full hover:shadow-2xl transition-all duration-300 bg-slate-700 border-2 border-slate-600 ${colors.card} group`}>
                  <CardBody className="p-8">
                    <div className={`w-16 h-16 ${colors.icon} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-${data.color}-500 transition-colors duration-300`}>
                      <div className="w-8 h-8 bg-white rounded-lg"></div>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4 text-center group-hover:text-primary-400 transition-colors">
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

      {/* Pricing Section */}
      <section className="py-24 bg-slate-900 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              {data.title} Service <span className={`bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>Pricing</span>
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Flexible {data.title.toLowerCase()} service packages designed to meet your intelligence requirements and budget.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.pricing.map((plan, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <Card className={`h-full hover:shadow-2xl transition-all duration-300 bg-slate-700 border-2 ${plan.popular ? `border-${data.color}-500` : 'border-slate-600'} ${colors.card} group relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className={`bg-${data.color}-500 text-white px-4 py-1 rounded-full text-sm font-semibold`}>
                        Most Popular
                      </div>
                    </div>
                  )}
                  <CardBody className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                    <h3 className="text-2xl font-black text-white mb-2 text-center">{plan.title}</h3>
                    <p className="text-slate-300 text-center mb-6">{plan.description}</p>
                    <div className="text-center mb-8">
                      <div className="text-4xl font-black text-white mb-2">{plan.price}</div>
                      <div className="text-slate-400">{plan.period}</div>
                    </div>
                    <div className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-sm text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      size="lg" 
                      className={`w-full ${plan.popular ? `${colors.button}` : 'bg-slate-600 hover:bg-slate-500'} text-white font-semibold`}
                    >
                      {plan.title.includes('Enterprise') ? 'Contact Us' : 'Get Started'}
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
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
            <p className="text-xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Contact our {data.title.toLowerCase()} specialists to discuss your intelligence requirements and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100 text-xl px-12 py-4 font-semibold">
                  Get {data.title} Quote
                  <ArrowRight className="ml-3" size={20} />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 text-xl px-12 py-4 font-semibold">
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
