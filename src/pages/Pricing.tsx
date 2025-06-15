import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()
  const { ref: pricingRef, isVisible: pricingVisible } = useScrollAnimation()

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small businesses just getting started",
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        "Up to 100 calls/month",
        "Basic call handling",
        "Email notifications",
        "Standard business hours",
        "Basic analytics",
        "Phone number included",
        "Email support"
      ],
      limitations: [
        "No appointment scheduling",
        "No integrations",
        "Standard response time"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with more complex needs",
      monthlyPrice: 149,
      annualPrice: 119,
      features: [
        "Up to 500 calls/month",
        "Advanced call handling",
        "Smart appointment scheduling",
        "24/7 availability",
        "Advanced analytics",
        "CRM integrations",
        "Custom greetings",
        "Priority support",
        "Multi-language support",
        "Call recordings"
      ],
      limitations: [],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      description: "For large organizations with custom requirements",
      monthlyPrice: 399,
      annualPrice: 319,
      features: [
        "Unlimited calls",
        "Custom AI training",
        "Advanced integrations",
        "Dedicated account manager",
        "Custom workflows",
        "API access",
        "White-label options",
        "SLA guarantee",
        "Advanced security",
        "Custom reporting",
        "Phone support",
        "On-premise deployment"
      ],
      limitations: [],
      popular: false,
      cta: "Contact Sales"
    }
  ]

  const faqs = [
    {
      question: "Can I change plans at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any billing differences."
    },
    {
      question: "What happens if I exceed my call limit?",
      answer: "We'll notify you when you're approaching your limit. You can either upgrade your plan or pay for additional calls at $0.50 per call."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes! All plans come with a 14-day free trial. No credit card required to start."
    },
    {
      question: "Can I use my existing phone number?",
      answer: "Absolutely! We can port your existing number or provide you with a new local or toll-free number."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees for any plan. We'll have you up and running in under 15 minutes."
    },
    {
      question: "What integrations do you support?",
      answer: "We integrate with 50+ popular business tools including Salesforce, HubSpot, Calendly, Zoom, and many more."
    }
  ]

  const getPrice = (plan: typeof pricingPlans[0]) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice
  }

  const getSavings = (plan: typeof pricingPlans[0]) => {
    if (billingCycle === 'annual') {
      const monthlyCost = plan.monthlyPrice * 12
      const annualCost = plan.annualPrice * 12
      const savings = monthlyCost - annualCost
      return Math.round((savings / monthlyCost) * 100)
    }
    return 0
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-16 bg-gradient-to-br from-nia-bg-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-nia-dark mb-8">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-nia-gray max-w-3xl mx-auto leading-relaxed mb-12">
              Choose the perfect plan for your business. All plans include our core AI features
              with no hidden fees.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-white rounded-full p-1 shadow-lg">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingCycle === 'monthly'
                    ? 'bg-nia-purple text-white'
                    : 'text-nia-gray hover:text-nia-dark'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingCycle === 'annual'
                    ? 'bg-nia-purple text-white'
                    : 'text-nia-gray hover:text-nia-dark'
                }`}
              >
                Annual
                <span className="ml-2 bg-nia-teal text-white text-xs px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section ref={pricingRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative transition-all duration-700 delay-${index * 200} ${
                  pricingVisible ? 'animate-scale-in' : 'opacity-0'
                } ${
                  plan.popular
                    ? 'transform scale-105 z-10'
                    : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-nia-purple text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`h-full bg-white rounded-3xl p-8 shadow-lg ${
                  plan.popular ? 'border-2 border-nia-purple' : 'border border-gray-200'
                } hover:shadow-xl transition-shadow`}>
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-nia-dark mb-2">{plan.name}</h3>
                    <p className="text-nia-gray mb-6">{plan.description}</p>

                    <div className="flex items-end justify-center">
                      <span className="text-5xl font-bold text-nia-dark">${getPrice(plan)}</span>
                      <span className="text-nia-gray ml-2">/{billingCycle === 'monthly' ? 'month' : 'month'}</span>
                    </div>

                    {billingCycle === 'annual' && getSavings(plan) > 0 && (
                      <p className="text-nia-teal text-sm mt-2 font-medium">
                        Save {getSavings(plan)}% with annual billing
                      </p>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <svg className="h-5 w-5 text-nia-teal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-nia-gray">{feature}</span>
                      </div>
                    ))}

                    {plan.limitations.map((limitation) => (
                      <div key={limitation} className="flex items-center space-x-3 opacity-50">
                        <svg className="h-5 w-5 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-400 line-through">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-4 rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? 'bg-nia-purple text-white hover:bg-nia-purple/90'
                      : 'bg-nia-bg-light text-nia-dark hover:bg-gray-200'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-nia-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-nia-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-nia-gray">Everything you need to know about our pricing</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-nia-dark mb-3">{faq.question}</h3>
                <p className="text-nia-gray leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-nia-purple to-nia-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of businesses already using Nia to transform their customer service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-nia-purple px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/90 transition-colors shadow-lg">
              Start 14-Day Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/10 transition-colors">
              Talk to Sales
            </button>
          </div>
          <p className="text-white/70 text-sm mt-4">
            No credit card required • Cancel anytime • 24/7 support
          </p>
        </div>
      </section>
    </div>
  )
}

export default Pricing
