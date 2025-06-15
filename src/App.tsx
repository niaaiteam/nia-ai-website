import { useState } from 'react'
import { useScrollAnimation } from './hooks/useScrollAnimation'

// Icon Component
const Icon = ({ name, className = "h-8 w-8" }: { name: string; className?: string }) => {
  const iconPaths = {
    phone: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",
    calendar: "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z",
    chat: "M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1 .2 0 .5-.1.7-.3L14.6 18H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z",
    shield: "M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z",
    lightning: "M7 2v11h3v9l7-12h-4l4-8z",
    globe: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
  }

  return (
    <svg className={`${className} text-nia-purple`} fill="currentColor" viewBox="0 0 24 24">
      <path d={iconPaths[name as keyof typeof iconPaths]} />
    </svg>
  )
}

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://ext.same-assets.com/2901683797/2551623821.png"
              alt="Nia"
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-nia-dark hover:text-nia-purple transition-colors">Features</a>
            <a href="#how-it-works" className="text-nia-dark hover:text-nia-purple transition-colors">How It Works</a>
            <a href="#pricing" className="text-nia-dark hover:text-nia-purple transition-colors">Pricing</a>
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
              <a href="#features" className="block px-3 py-2 text-nia-dark hover:text-nia-purple">Features</a>
              <a href="#how-it-works" className="block px-3 py-2 text-nia-dark hover:text-nia-purple">How It Works</a>
              <a href="#pricing" className="block px-3 py-2 text-nia-dark hover:text-nia-purple">Pricing</a>
              <a href="#signin" className="block px-3 py-2 text-nia-dark hover:text-nia-purple">Sign In</a>
              <button className="w-full mt-2 bg-nia-purple text-white px-6 py-2 rounded-lg">Get Started</button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

// Hero Section
const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-nia-bg-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in-up">
          <p className="text-nia-purple font-medium mb-4 tracking-wide uppercase text-sm">
            Next-Gen AI Technology
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-nia-dark mb-6">
            Meet Nia
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-nia-dark mb-8">
            Your AI Receptionist
          </h2>
          <p className="text-xl text-nia-gray max-w-3xl mx-auto mb-12 leading-relaxed">
            Nia is your Personal Neural Intelligent Assistant that transforms business communication.
            Handle calls, schedule appointments, and provide customer support 24/7 with human-like intelligence.
          </p>
          <button className="bg-nia-purple text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-nia-purple/90 transition-colors shadow-lg">
            Get Started Free
          </button>
        </div>
      </div>
    </section>
  )
}

// Status Banner
const StatusBanner = () => {
  return (
    <section className="py-8 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-8">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-nia-dark font-medium">Nia is Active</span>
          </div>
          <div className="text-nia-gray">
            Handling <span className="font-bold text-nia-dark">247</span> calls today!
          </div>
          <svg className="h-6 w-6 text-nia-purple" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        </div>

        {/* Chat Interface Mockup */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-nia-purple to-nia-teal rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <div>
                <p className="font-medium text-nia-dark">Nia AI Assistant</p>
                <p className="text-sm text-nia-gray">Online now</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-nia-bg-light rounded-2xl p-4 max-w-xs">
                <p className="text-nia-dark">"Hello! I'm Nia. How can I help you today?"</p>
              </div>

              <div className="flex items-center space-x-2 text-sm text-nia-gray">
                <svg className="h-4 w-4 text-nia-teal" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
                <span>Appointment scheduled for 2 PM!</span>
              </div>

              <div className="flex items-center space-x-2 text-sm text-nia-gray">
                <svg className="h-4 w-4 text-nia-yellow" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span>Customer satisfaction: 98%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Industry Cards
const IndustrySection = () => {
  const industries = [
    "Healthcare & Medical", "Legal Firms", "Real Estate", "Restaurants & Hospitality",
    "Dental Practices", "Veterinary Clinics", "Salons & Spas", "Fitness Centers",
    "Accounting Firms", "Insurance Agencies", "Consulting Services", "E-commerce",
    "Property Management", "Auto Dealerships", "Financial Services", "Home Services"
  ]

  return (
    <section className="py-20 bg-nia-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-nia-dark mb-4">Perfect for Every Industry</h2>
          <p className="text-xl text-nia-gray max-w-3xl mx-auto">
            Nia adapts to your business needs, providing professional AI reception services across all industries
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {industries.map((industry) => (
            <div
              key={industry}
              className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <p className="text-sm text-nia-dark group-hover:text-nia-purple transition-colors font-medium">
                {industry}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: "phone",
      title: "24/7 Call Handling",
      description: "Never miss a call again. Our AI answers every call with professional courtesy and intelligence."
    },
    {
      icon: "calendar",
      title: "Smart Scheduling",
      description: "Automatically schedule appointments and manage your calendar with intelligent booking systems."
    },
    {
      icon: "chat",
      title: "Natural Conversations",
      description: "Advanced NLP ensures conversations feel natural and human-like, building customer trust."
    },
    {
      icon: "shield",
      title: "Secure & Private",
      description: "Enterprise-grade security ensures all customer data and conversations remain protected."
    },
    {
      icon: "lightning",
      title: "Instant Responses",
      description: "Lightning-fast response times ensure customers never wait, improving satisfaction rates."
    },
    {
      icon: "globe",
      title: "Multi-Language",
      description: "Communicate with customers in their preferred language with our multilingual AI system."
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-nia-dark mb-4">Why Choose Nia for Your Business</h2>
          <p className="text-xl text-nia-gray max-w-3xl mx-auto">
            Nia combines cutting-edge neural intelligence with human-like conversation to deliver exceptional customer experiences for modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-8 rounded-2xl border border-gray-100 hover:border-nia-purple/20 hover:shadow-lg transition-all group"
            >
              <div className="w-16 h-16 bg-nia-purple/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-nia-purple/20 transition-colors">
                <Icon name={feature.icon} className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-nia-dark mb-4">{feature.title}</h3>
              <p className="text-nia-gray leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Demo Section
const DemoSection = () => {
  const [phoneNumber, setPhoneNumber] = useState('')

  return (
    <section className="py-20 bg-gradient-to-br from-nia-purple to-nia-teal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Experience Nia in Action</h2>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Enter your phone number below and receive a demonstration call from Nia, your Personal Neural Intelligent Assistant.
          See firsthand how natural and professional Nia sounds.
        </p>

        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="tel"
              placeholder="Your Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
            />
            <button className="bg-white text-nia-purple px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
              Call Me
            </button>
          </div>
          <p className="text-white/70 text-sm mt-4">
            Your number is safe with us. We'll only use it for this demonstration call.
          </p>
        </div>
      </div>
    </section>
  )
}

// How It Works Section
const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Setup & Configure Nia",
      description: "Customize Nia's responses, set your business hours, and configure appointment scheduling to match your workflow."
    },
    {
      number: "02",
      title: "Connect Your Phone System",
      description: "Integrate Nia with your existing phone system or get a new number. Setup takes just a few minutes with our guided process."
    },
    {
      number: "03",
      title: "Nia Handles Everything",
      description: "Your AI receptionist answers calls, schedules appointments, and provides customer support 24/7 with human-like intelligence."
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-nia-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-nia-dark mb-4">How Nia Works</h2>
          <p className="text-xl text-nia-gray max-w-3xl mx-auto">
            Get started with Nia in minutes. Our simple setup process gets your AI receptionist ready to handle calls and serve your customers professionally.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-20 h-20 bg-nia-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-nia-dark mb-4">{step.title}</h3>
              <p className="text-nia-gray leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Stats Section
const StatsSection = () => {
  const stats = [
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "< 2s", label: "Average Response Time" },
    { number: "24/7", label: "Always Available" },
    { number: "50+", label: "Languages Supported" }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-nia-dark mb-4">Transform Your Business Communication</h2>
          <p className="text-xl text-nia-gray max-w-3xl mx-auto">
            Join thousands of businesses that have revolutionized their customer service with Nia's intelligent AI receptionist.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-8 rounded-2xl bg-nia-bg-light">
              <div className="text-4xl font-bold text-nia-purple mb-2">{stat.number}</div>
              <div className="text-nia-gray font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Footer Section
const FooterSection = () => {
  return (
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
  )
}

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <StatusBanner />
      <IndustrySection />
      <FeaturesSection />
      <DemoSection />
      <HowItWorksSection />
      <StatsSection />
      <FooterSection />
    </div>
  )
}

export default App
