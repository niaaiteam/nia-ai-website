import { useScrollAnimation } from '../hooks/useScrollAnimation'

const About = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation()
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation()

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Founder",
      bio: "Former Google AI researcher with 15+ years in conversational AI",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      bio: "Ex-Tesla AI engineer specializing in neural networks and voice processing",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of AI Research",
      bio: "PhD in Natural Language Processing from Stanford, published AI researcher",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-16 bg-gradient-to-br from-nia-bg-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-nia-dark mb-6">
              About Nia
            </h1>
            <p className="text-xl text-nia-gray max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing business communication with AI that understands,
              responds, and connects like never before.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 delay-300 ${missionVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-nia-dark mb-6">Our Mission</h2>
                <p className="text-lg text-nia-gray mb-6 leading-relaxed">
                  At Nia, we believe every business deserves world-class customer service,
                  24/7. Our AI-powered receptionist doesn't just answer calls—it understands
                  context, builds relationships, and grows with your business.
                </p>
                <p className="text-lg text-nia-gray leading-relaxed">
                  Founded in 2023, we've already helped thousands of businesses improve
                  their customer experience while reducing costs and increasing efficiency.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-nia-purple to-nia-teal rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-lg leading-relaxed">
                    To make professional, intelligent customer service accessible to every
                    business, regardless of size or industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-nia-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-nia-dark mb-4">Our Impact</h2>
            <p className="text-xl text-nia-gray">Numbers that speak for themselves</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Businesses Served" },
              { number: "5M+", label: "Calls Handled" },
              { number: "99.9%", label: "Uptime" },
              { number: "98%", label: "Customer Satisfaction" }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center p-8 rounded-2xl bg-white shadow-lg transition-all duration-700 delay-${index * 100} hover:scale-105 ${missionVisible ? 'animate-bounce-in' : 'opacity-0'}`}
              >
                <div className="text-4xl font-bold text-nia-purple mb-2">{stat.number}</div>
                <div className="text-nia-gray font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${teamVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-nia-dark mb-4">Meet Our Team</h2>
            <p className="text-xl text-nia-gray">The brilliant minds behind Nia</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`text-center transition-all duration-700 delay-${index * 200} ${teamVisible ? 'animate-scale-in' : 'opacity-0'}`}
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                  />
                  <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto border-4 border-nia-purple/20" />
                </div>
                <h3 className="text-xl font-bold text-nia-dark mb-2">{member.name}</h3>
                <p className="text-nia-purple font-medium mb-4">{member.role}</p>
                <p className="text-nia-gray leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-nia-dark to-nia-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Journey?</h2>
          <p className="text-xl text-white/90 mb-8">
            Be part of the AI revolution that's transforming customer service
          </p>
          <button className="bg-white text-nia-purple px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/90 transition-colors shadow-lg">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  )
}

export default About
