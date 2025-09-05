import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Altitude Intelligence | Intelligence Consulting Quote | Intelligence Services Contact',
  description: 'Contact our intelligence consulting team for OSINT services, GEOINT analysis, and intelligence solutions. Get intelligence consulting quote for defense intelligence and security intelligence requirements.',
  keywords: 'intelligence consulting contact, intelligence services quote, OSINT services contact, GEOINT analysis consultation, defense intelligence contact, intelligence consulting quote, intelligence services inquiry',
  openGraph: {
    title: 'Contact Altitude Intelligence | Get Intelligence Solutions Quote',
    description: 'Contact Altitude Intelligence for Intelligence-as-a-Service solutions. Get a free consultation for defense, security, commercial, and humanitarian intelligence requirements.',
    url: 'https://altitude-intelligence.com/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altitude-intelligence.com/contact',
  },
}

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 font-display">
              Contact <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Altitude Intelligence</span>
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed">
              Ready to deploy intelligence capabilities for your organization? 
              Our team is standing by to discuss your requirements and provide 
              a customized solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
            Ready to Start Your Mission?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join the organizations worldwide that trust us with their most critical 
            intelligence operations. Deploy advanced capabilities in hours, not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@altitude-intelligence.com"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Email Us Now
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call +1 (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </>
  )
}