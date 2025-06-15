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
      <header className="fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-md z-50 shadow-sm border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20 sm:h-24">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <img
                    src="https://ext.same-assets.com/2901683797/2551623821.png"
                    alt="Nia"
                    className="h-12 w-auto sm:h-14 lg:h-16 transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-nia-purple/20 to-nia-teal/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                </div>
                <div className="hidden sm:block">
                  <div className="text-2xl font-bold bg-gradient-to-r from-nia-purple to-nia-teal bg-clip-text text-transparent">
                    Nia
                  </div>
                  <div className="text-xs text-nia-gray font-medium tracking-wide">
                    AI RECEPTIONIST
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              <Link
                to="/features"
                className={`relative py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                  isActive('/features')
                    ? 'text-nia-purple bg-nia-purple/10 shadow-sm'
                    : 'text-nia-dark hover:text-nia-purple hover:bg-nia-purple/5'
                }`}
              >
                Features
                {isActive('/features') && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-nia-purple rounded-full" />
                )}
              </Link>
              <Link
                to="/pricing"
                className={`relative py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                  isActive('/pricing')
                    ? 'text-nia-purple bg-nia-purple/10 shadow-sm'
                    : 'text-nia-dark hover:text-nia-purple hover:bg-nia-purple/5'
                }`}
              >
                Pricing
                {isActive('/pricing') && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-nia-purple rounded-full" />
                )}
              </Link>
              <a
                href="#demo"
                className="text-nia-dark hover:text-nia-purple hover:bg-nia-purple/5 py-2 px-4 rounded-lg font-medium transition-all duration-200"
              >
                Demo
              </a>
            </nav>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <button className="text-nia-dark hover:text-nia-purple py-2 px-4 rounded-lg font-medium transition-all duration-200 hover:bg-nia-purple/5">
                Sign In
              </button>
              <button className="bg-gradient-to-r from-nia-purple to-nia-teal text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 shadow-md">
                Get Started Free
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                <div className={`w-6 h-0.5 bg-nia-dark transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <div className={`w-6 h-0.5 bg-nia-dark transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <div className={`w-6 h-0.5 bg-nia-dark transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden">
              <div className="px-6 pt-4 pb-6 space-y-3 border-t border-gray-200/50 bg-white/98 backdrop-blur-md">
                <Link
                  to="/features"
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isActive('/features')
                      ? 'text-nia-purple bg-nia-purple/10'
                      : 'text-nia-dark hover:text-nia-purple hover:bg-nia-purple/5'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  to="/pricing"
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isActive('/pricing')
                      ? 'text-nia-purple bg-nia-purple/10'
                      : 'text-nia-dark hover:text-nia-purple hover:bg-nia-purple/5'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
                <a
                  href="#demo"
                  className="block px-4 py-3 rounded-lg font-medium text-nia-dark hover:text-nia-purple hover:bg-nia-purple/5 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Demo
                </a>
                <div className="pt-3 border-t border-gray-200/50 space-y-3">
                  <button className="block w-full text-left px-4 py-3 rounded-lg font-medium text-nia-dark hover:text-nia-purple hover:bg-nia-purple/5 transition-all duration-200">
                    Sign In
                  </button>
                  <button className="w-full bg-gradient-to-r from-nia-purple to-nia-teal text-white px-6 py-3 rounded-xl font-medium shadow-md">
                    Get Started Free
                  </button>
                </div>
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
