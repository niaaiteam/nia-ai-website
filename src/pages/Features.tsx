import { useScrollAnimation } from '../hooks/useScrollAnimation'

// Icon Component (reused from App.tsx)
const Icon = ({ name, className = "h-8 w-8" }: { name: string; className?: string }) => {
  const iconPaths = {
    phone: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",
    calendar: "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z",
    chat: "M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1 .2 0 .5-.1.7-.3L14.6 18H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z",
    shield: "M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z",
    lightning: "M7 2v11h3v9l7-12h-4l4-8z",
    globe: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
    brain: "M21,9V7.5C21,5.01 18.99,3 16.5,3C13.74,3 11.5,5.24 11.5,8H9.5C9.5,5.24 7.26,3 4.5,3C2.01,3 0,5.01 0,7.5V9C0,11.49 2.01,13.5 4.5,13.5H7.5V15.5C7.5,18.26 9.74,20.5 12.5,20.5C15.26,20.5 17.5,18.26 17.5,15.5V13.5H20.5C18.99,13.5 21,11.49 21,9Z",
    analytics: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"
  }

  return (
    <svg className={`${className} text-nia-purple`} fill="currentColor" viewBox="0 0 24 24">
      <path d={iconPaths[name as keyof typeof iconPaths]} />
    </svg>
  )
}

const Features = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation()

  const detailedFeatures = [
    {
      icon: "phone",
      title: "24/7 Call Handling",
      description: "Never miss a call again. Our AI answers every call with professional courtesy and intelligence.",
      details: [
        "Instant call pickup - no wait times",
        "Natural conversation flow",
        "Handles multiple languages",
        "Seamless call transfers when needed",
        "Custom greetings for your business"
      ],
      benefits: "Increase customer satisfaction by 40% and capture 100% of potential leads"
    },
    {
      icon: "calendar",
      title: "Smart Scheduling",
      description: "Automatically schedule appointments and manage your calendar with intelligent booking systems.",
      details: [
        "Real-time calendar integration",
        "Automatic conflict detection",
        "Send confirmation emails & SMS",
        "Reschedule and cancellation handling",
        "Time zone management"
      ],
      benefits: "Reduce scheduling time by 80% and eliminate double bookings"
    },
    {
      icon: "chat",
      title: "Natural Conversations",
      description: "Advanced NLP ensures conversations feel natural and human-like, building customer trust.",
      details: [
        "Context-aware responses",
        "Emotional intelligence",
        "Industry-specific knowledge",
        "Learning from past interactions",
        "Personalized communication style"
      ],
      benefits: "98% of customers can't tell they're talking to AI"
    },
    {
      icon: "shield",
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance ensure your data stays protected.",
      details: [
        "End-to-end encryption",
        "HIPAA & SOC 2 compliant",
        "Regular security audits",
        "Data residency options",
        "Access control & monitoring"
      ],
      benefits: "Zero security incidents since launch - your data is completely safe"
    },
    {
      icon: "lightning",
      title: "Instant Responses",
      description: "Lightning-fast processing ensures customers never wait for answers.",
      details: [
        "Sub-second response times",
        "Edge computing optimization",
        "Predictive response caching",
        "Global CDN network",
        "99.99% uptime guarantee"
      ],
      benefits: "Reduce customer wait time to under 2 seconds average"
    },
    {
      icon: "globe",
      title: "Multi-Language Support",
      description: "Communicate with customers in their preferred language with native fluency.",
      details: [
        "50+ languages supported",
        "Regional dialects & accents",
        "Cultural context awareness",
        "Real-time translation",
        "Localized business knowledge"
      ],
      benefits: "Expand to global markets without language barriers"
    },
    {
      icon: "brain",
      title: "AI Learning Engine",
      description: "Continuously learns and improves from every interaction to serve your customers better.",
      details: [
        "Machine learning optimization",
        "Performance analytics",
        "Custom training on your data",
        "A/B testing capabilities",
        "Feedback loop integration"
      ],
      benefits: "AI gets 15% smarter every month based on your business needs"
    },
    {
      icon: "analytics",
      title: "Advanced Analytics",
      description: "Deep insights into customer interactions, call patterns, and business performance.",
      details: [
        "Real-time dashboards",
        "Customer sentiment analysis",
        "Call volume predictions",
        "ROI tracking",
        "Custom reporting"
      ],
      benefits: "Make data-driven decisions that boost revenue by 25%"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-16 bg-gradient-to-br from-nia-bg-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-nia-dark mb-6">
              Powerful Features
            </h1>
            <p className="text-xl text-nia-gray max-w-3xl mx-auto leading-relaxed">
              Discover the advanced capabilities that make Nia the smartest AI receptionist
              for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section ref={featuresRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {detailedFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`transition-all duration-700 delay-${index * 100} ${featuresVisible ? 'animate-scale-in' : 'opacity-0'}`}
              >
                <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-nia-purple/20 hover:shadow-xl transition-all group">
                  {/* Feature Header */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-nia-purple/10 rounded-2xl flex items-center justify-center group-hover:bg-nia-purple/20 transition-colors">
                      <Icon name={feature.icon} className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-nia-dark mb-2">{feature.title}</h3>
                      <p className="text-nia-gray leading-relaxed">{feature.description}</p>
                    </div>
                  </div>

                  {/* Feature Details */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-nia-dark">Key Capabilities:</h4>
                    <ul className="space-y-2">
                      {feature.details.map((detail) => (
                        <li key={detail} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-nia-purple rounded-full" />
                          <span className="text-nia-gray">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Benefits */}
                    <div className="mt-6 p-4 bg-nia-bg-light rounded-lg">
                      <h5 className="font-semibold text-nia-purple mb-2">Business Impact:</h5>
                      <p className="text-nia-dark text-sm">{feature.benefits}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-nia-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-nia-dark mb-4">Seamless Integrations</h2>
            <p className="text-xl text-nia-gray">Works with all your favorite business tools</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "Salesforce", "HubSpot", "Calendly", "Zoom", "Microsoft Teams", "Google Workspace",
              "Slack", "Zapier", "QuickBooks", "Stripe", "Mailchimp", "WordPress"
            ].map((integration, index) => (
              <div
                key={integration}
                className={`bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300 delay-${index * 50}`}
              >
                <div className="h-12 flex items-center justify-center mb-3">
                  <div className="w-8 h-8 bg-nia-purple/20 rounded" />
                </div>
                <p className="text-sm font-medium text-nia-dark">{integration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-nia-purple to-nia-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience These Features?</h2>
          <p className="text-xl text-white/90 mb-8">
            Start your free trial and see how Nia transforms your business communication
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-nia-purple px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/90 transition-colors shadow-lg">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features
