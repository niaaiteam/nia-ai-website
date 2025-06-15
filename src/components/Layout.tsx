import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <img
                  src="https://ext.same-assets.com/2901683797/2551623821.png"
                  alt="Nia"
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/features"
                className={`transition-colors ${
                  isActive('/features') ? 'text-nia-purple font-medium' : 'text-nia-dark hover:text-nia-purple'
                }`}
              >
                Features
              </Link>
              <Link
                to="/about"
                className={`transition-colors ${
                  isActive('/about') ? 'text-nia-purple font-medium' : 'text-nia-dark hover:text-nia-purple'
                }`}
              >
                About
              </Link>
              <Link
                to="/pricing"
                className={`transition-colors ${
                  isActive('/pricing') ? 'text-nia-purple font-medium' : 'text-nia-dark hover:text-nia-purple'
                }`}
              >
                Pricing
              </Link>
            </nav>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-nia-dark hover:text-nia-purple transition-colors">Sign In</button>
              <button className="bg-nia-purple text-white px-6 py-2 rounded-lg hover:bg-nia-purple/90 transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 border-t">
                <Link
                  to="/features"
                  className="block px-3 py-2 text-nia-dark hover:text-nia-purple"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  to="/about"
                  className="block px-3 py-2 text-nia-dark hover:text-nia-purple"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/pricing"
                  className="block px-3 py-2 text-nia-dark hover:text-nia-purple"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
                <button className="block w-full text-left px-3 py-2 text-nia-dark hover:text-nia-purple">
                  Sign In
                </button>
                <button className="w-full mt-2 bg-nia-purple text-white px-6 py-2 rounded-lg">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="py-20 bg-gradient-to-br from-nia-dark to-nia-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Meet Nia?</h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Transform your business communication today. Start your free trial and experience the future of AI-powered customer service.
          </p>

          <button className="bg-white text-nia-purple px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/90 transition-colors shadow-lg mb-16">
            Start Free Trial
          </button>

          <div className="border-t border-white/20 pt-8">
            <p className="text-white/70">
              Nia 2024 Nia - Your Personal Neural Intelligent Assistant. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
