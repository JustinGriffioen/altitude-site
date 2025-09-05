'use client'

import Link from 'next/link'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    solutions: [
      { name: 'Intelligence-as-a-Service', href: '/iaas' },
      { name: 'Border Security', href: '/iaas#border-security' },
      { name: 'Maritime Domain Awareness', href: '/iaas#maritime' },
      { name: 'Critical Infrastructure', href: '/iaas#infrastructure' },
      { name: 'Crisis Response', href: '/iaas#crisis' },
      { name: 'Corporate Risk', href: '/iaas#corporate' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Projects', href: '/projects' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    resources: [
      { name: 'Documentation', href: '/contact' },
      { name: 'API Reference', href: '/contact' },
      { name: 'Support', href: '/contact' },
      { name: 'Privacy Policy', href: '/contact' },
      { name: 'Terms of Service', href: '/contact' },
    ],
  }

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-indigo-700 rounded-xl shadow-lg"></div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image 
                    src="/logo.png" 
                    alt="Altitude Intelligence" 
                    width={56}
                    height={56}
                    className="w-12 h-12 object-contain brightness-0 invert drop-shadow-lg"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black font-display">ALTITUDE</h3>
                <h3 className="text-xl font-bold font-display">INTELLIGENCE</h3>
                <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">Intelligence-as-a-Service</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Flexible Intelligence-as-a-Service solutions for defense, security, commercial, 
              and humanitarian sectors. Mission-ready insights with zero overhead.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Mail size={16} />
                <span>contact@altitude-intelligence.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <MapPin size={16} />
                <span>Vancouver, BC, Canada</span>
              </div>
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-black mb-6 uppercase tracking-widest">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-black mb-6 uppercase tracking-widest">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-black mb-6 uppercase tracking-widest">Resources</h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.resources.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
            
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 border border-blue-500/30">
              <h5 className="font-black mb-2 text-lg uppercase tracking-wide">Ready to get started?</h5>
              <p className="text-sm text-blue-100 mb-4 font-medium">
                Book a free consultation with our intelligence team.
              </p>
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-black text-sm hover:bg-gray-100 transition-colors inline-flex items-center uppercase tracking-wide shadow-lg"
              >
                Book a Call
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-sm text-gray-400 mb-4 md:mb-0 font-medium">
            © {currentYear} Altitude Intelligence. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer