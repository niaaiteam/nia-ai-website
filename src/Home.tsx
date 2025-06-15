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

// Hero Section
const HeroSection = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()

  return (
    <section ref={heroRef} className="pt-32 pb-20 sm:pt-36 lg:pt-40 sm:pb-16 bg-gradient-to-br from-nia-bg-light to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-1000 ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-nia-purple font-medium mb-6 sm:mb-4 tracking-wide uppercase text-sm">
            Next-Gen AI Technology
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-nia-purple mb-6 sm:mb-8 leading-tight">
            Meet Nia
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-nia-dark mb-8 sm:mb-12 leading-tight">
            Your AI Receptionist
          </h2>
          <p className="text-lg sm:text-xl text-nia-gray max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed px-4 sm:px-0">
            Nia is your Personal Neural Intelligent Assistant that transforms business communication.
            Handle calls, schedule appointments, and provide customer support 24/7 with human-like intelligence.
          </p>
          <button className="bg-nia-purple text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-nia-purple/90 transition-colors shadow-lg animate-pulse w-full sm:w-auto max-w-xs">
            Get Started Free
          </button>
        </div>
      </div>
    </section>
  )
}

// Status Banner
const StatusBanner = () => {
  const { ref: statusRef, isVisible: statusVisible } = useScrollAnimation()

  return (
    <section ref={statusRef} className="py-10 sm:py-8 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 transition-all duration-1000 ${statusVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-nia-dark font-medium text-center">Nia is Active</span>
          </div>
          <div className="text-nia-gray text-center">
            Handling <span className="font-bold text-nia-dark">247</span> calls today!
          </div>
          <svg className="h-6 w-6 text-nia-purple" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        </div>

        {/* Chat Interface Mockup */}
        <div className={`mt-16 sm:mt-12 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${statusVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8 animate-float mx-4 sm:mx-0">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-6 space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-nia-purple to-nia-teal rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <div>
                  <p className="font-semibold text-nia-dark text-lg">Nia AI Assistant</p>
                  <p className="text-sm text-nia-gray flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                    Online now
                  </p>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-sm text-nia-gray">Response time</p>
                <p className="font-bold text-nia-purple text-lg">&lt; 2 seconds</p>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-6">
              {/* Left Side - Chat Message */}
              <div>
                <div className="bg-nia-bg-light rounded-2xl p-4 mb-4">
                  <p className="text-nia-dark font-medium">"Hello! I'm Nia. How can I help you today?"</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-nia-gray">
                    <svg className="h-4 w-4 text-nia-teal flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                    </svg>
                    <span>Appointment scheduled for 2 PM!</span>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-nia-gray">
                    <svg className="h-4 w-4 text-nia-yellow flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span>Customer satisfaction: 98%</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Live Stats */}
              <div className="bg-gradient-to-br from-nia-purple/5 to-nia-teal/5 rounded-xl p-5 sm:p-4 mt-4 md:mt-0">
                <h4 className="font-semibold text-nia-dark mb-4 sm:mb-3 text-base">Live Performance</h4>
                <div className="space-y-4 sm:space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-nia-gray">Calls handled today</span>
                    <span className="font-bold text-nia-purple text-base">247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-nia-gray">Average call duration</span>
                    <span className="font-bold text-nia-purple text-base">3:42</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-nia-gray">Issues resolved</span>
                    <span className="font-bold text-nia-purple text-base">94%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-4 sm:mt-3">
                    <div className="bg-gradient-to-r from-nia-purple to-nia-teal h-2 rounded-full" style={{width: '94%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Industry Carousel
const IndustrySection = () => {
  const { ref: industryRef, isVisible: industryVisible } = useScrollAnimation()
  const industries = [
    { name: "Healthcare & Medical", emoji: "🏥" },
    { name: "Legal Firms", emoji: "⚖️" },
    { name: "Real Estate", emoji: "🏘️" },
    { name: "Restaurants & Hospitality", emoji: "🍽️" },
    { name: "Dental Practices", emoji: "🦷" },
    { name: "Veterinary Clinics", emoji: "🐕" },
    { name: "Salons & Spas", emoji: "💅" },
    { name: "Fitness Centers", emoji: "💪" },
    { name: "Accounting Firms", emoji: "📊" },
    { name: "Insurance Agencies", emoji: "🛡️" },
    { name: "Consulting Services", emoji: "💼" },
    { name: "E-commerce", emoji: "🛍️" },
    { name: "Property Management", emoji: "🏢" },
    { name: "Auto Dealerships", emoji: "🚗" },
    { name: "Financial Services", emoji: "💰" },
    { name: "Home Services", emoji: "🔧" }
  ]

  // Duplicate the array to create seamless loop
  const duplicatedIndustries = [...industries, ...industries]

  return (
    <section ref={industryRef} className="py-24 sm:py-20 bg-nia-bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${industryVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-nia-dark mb-6 sm:mb-6 leading-tight">Perfect for Every Industry</h2>
          <p className="text-lg sm:text-xl text-nia-gray max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            Nia adapts to your business needs, providing professional AI reception services across all industries
          </p>
        </div>

        {/* Moving Carousel */}
        <div className="relative">
          <div className="flex animate-scroll-left space-x-6">
            {duplicatedIndustries.map((industry, index) => (
              <div
                key={`${industry.name}-${index}`}
                className="flex-shrink-0 bg-white rounded-lg px-6 py-4 shadow-md hover:shadow-lg transition-all cursor-pointer group border border-gray-100 hover:border-nia-purple/20"
              >
                <div className="flex items-center space-x-3 whitespace-nowrap">
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {industry.emoji}
                  </span>
                  <p className="text-sm font-medium text-nia-dark group-hover:text-nia-purple transition-colors">
                    {industry.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Features Section
const FeaturesSection = () => {
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation()
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
    <section id="features" ref={featuresRef} className="py-24 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${featuresVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-nia-dark mb-6 sm:mb-6 leading-tight">Why Choose Nia for Your Business</h2>
          <p className="text-lg sm:text-xl text-nia-gray max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            Nia combines cutting-edge neural intelligence with human-like conversation to deliver exceptional customer experiences for modern businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`p-6 sm:p-8 rounded-2xl border border-gray-100 hover:border-nia-purple/20 hover:shadow-lg hover:scale-105 transition-all group duration-500 delay-${index * 100} ${featuresVisible ? 'animate-scale-in' : 'opacity-0'}`}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-nia-purple/10 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-nia-purple/20 transition-colors">
                <Icon name={feature.icon} className="h-7 w-7 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-nia-dark mb-3 sm:mb-4 leading-tight">{feature.title}</h3>
              <p className="text-nia-gray leading-relaxed text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Demo Section with Working Form
const DemoSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { ref: demoRef, isVisible: demoVisible } = useScrollAnimation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', phone: '', email: '', company: '' })
    }, 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-nia-purple to-nia-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-bounce-in">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-nia-purple" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Thank You!</h2>
            <p className="text-xl text-white/90">
              We'll call you within the next 10 minutes to demonstrate Nia's capabilities.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="demo" ref={demoRef} className="py-24 sm:py-20 bg-gradient-to-br from-nia-purple to-nia-teal">
      <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${demoVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 leading-tight">Experience Nia in Action</h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
            Get a live demonstration call from Nia. See firsthand how natural and professional our AI receptionist sounds.
          </p>
        </div>

        <div className={`max-w-2xl mx-auto transition-all duration-1000 delay-300 ${demoVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 space-y-6 mx-4 sm:mx-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">Company (Optional)</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                  placeholder="Your Company"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-nia-purple px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-all shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2 hover:scale-105"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Scheduling Demo Call...</span>
                </>
              ) : (
                <span>Get My Demo Call</span>
              )}
            </button>

            <p className="text-white/70 text-sm text-center">
              We'll call you within 10 minutes during business hours. Your information is completely secure.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

// How It Works Section
const HowItWorksSection = () => {
  const { ref: worksRef, isVisible: worksVisible } = useScrollAnimation()
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
    <section id="how-it-works" ref={worksRef} className="py-24 sm:py-20 bg-nia-bg-light">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${worksVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-nia-dark mb-6 sm:mb-6 leading-tight">How Nia Works</h2>
          <p className="text-lg sm:text-xl text-nia-gray max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            Get started with Nia in minutes. Our simple setup process gets your AI receptionist ready to handle calls and serve your customers professionally.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className={`text-center transition-all duration-700 delay-${index * 200} ${worksVisible ? 'animate-scale-in' : 'opacity-0'} px-4 sm:px-0`}>
              <div className="w-18 h-18 sm:w-20 sm:h-20 bg-nia-purple rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-6 hover:scale-110 transition-transform">
                <span className="text-xl sm:text-2xl font-bold text-white">{step.number}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-nia-dark mb-4 sm:mb-4 leading-tight">{step.title}</h3>
              <p className="text-nia-gray leading-relaxed text-sm sm:text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Stats Section
const StatsSection = () => {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation()
  const stats = [
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "< 2s", label: "Average Response Time" },
    { number: "24/7", label: "Always Available" },
    { number: "50+", label: "Languages Supported" }
  ]

  return (
    <section ref={statsRef} className="py-24 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${statsVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-nia-dark mb-6 sm:mb-6 leading-tight">Transform Your Business Communication</h2>
          <p className="text-lg sm:text-xl text-nia-gray max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            Join thousands of businesses that have revolutionized their customer service with Nia's intelligent AI receptionist.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-6 sm:p-8 rounded-2xl bg-nia-bg-light hover:scale-105 transition-all duration-500 delay-${index * 100} ${statsVisible ? 'animate-bounce-in' : 'opacity-0'}`}
            >
              <div className="text-2xl sm:text-4xl font-bold text-nia-purple mb-2">{stat.number}</div>
              <div className="text-nia-gray font-medium text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Main Home Component
function Home() {
  return (
    <>
      <HeroSection />
      <StatusBanner />
      <IndustrySection />
      <FeaturesSection />
      <DemoSection />
      <HowItWorksSection />
      <StatsSection />
    </>
  )
}

export default Home
