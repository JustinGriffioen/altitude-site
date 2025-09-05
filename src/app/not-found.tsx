import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="btn-primary inline-flex items-center justify-center w-full sm:w-auto"
          >
            <Home className="mr-2" size={20} />
            Go Home
          </Link>
          
          <div className="text-sm text-gray-500">
            <Link 
              href="/contact"
              className="text-primary-600 hover:text-primary-700 transition-colors"
            >
              Contact us
            </Link>
            {' '}if you need help finding what you're looking for.
          </div>
        </div>
      </div>
    </div>
  )
}
