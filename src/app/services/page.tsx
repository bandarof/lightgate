import Link from "next/link";

export default function Services() {
  const services = [
    {
      id: "seo",
      icon: "🔍",
      title: "Search Engine Optimization",
      description: "Improve your organic visibility and rank higher in search results",
      benefits: [
        "On-page and technical SEO optimization",
        "Comprehensive keyword research and strategy",
        "Link building and domain authority growth",
        "Monthly performance tracking and reporting",
        "Local SEO optimization for multi-location businesses",
      ],
      stats: "Average 150% increase in organic traffic within 6 months",
    },
    {
      id: "ppc",
      icon: "💰",
      title: "PPC Advertising",
      description: "Maximize ROI with targeted paid advertising campaigns",
      benefits: [
        "Google Ads management and optimization",
        "Facebook & Instagram advertising",
        "LinkedIn B2B advertising",
        "Conversion rate optimization",
        "Campaign A/B testing and refinement",
      ],
      stats: "Average 3:1 ROI on advertising spend",
    },
    {
      id: "social",
      icon: "📱",
      title: "Social Media Marketing",
      description: "Build authentic connections and grow your audience",
      benefits: [
        "Social media strategy development",
        "Content creation and scheduling",
        "Community management and engagement",
        "Influencer collaboration",
        "Social media advertising",
      ],
      stats: "Average 200% follower growth in 3 months",
    },
    {
      id: "content",
      icon: "✍️",
      title: "Content Marketing",
      description: "Attract and engage your audience with strategic content",
      benefits: [
        "Blog writing and editorial planning",
        "Video content creation",
        "Whitepaper and case study development",
        "Email marketing campaigns",
        "Content distribution strategy",
      ],
      stats: "Average 5x engagement rate improvement",
    },
    {
      id: "web-design",
      icon: "🎨",
      title: "Web Design & Development",
      description: "Create beautiful, conversion-focused websites",
      benefits: [
        "Responsive web design",
        "UX/UI optimization",
        "Website performance optimization",
        "E-commerce solutions",
        "CMS implementation",
      ],
      stats: "Average 40% increase in conversion rates",
    },
    {
      id: "analytics",
      icon: "📊",
      title: "Analytics & Reporting",
      description: "Understand your data and make informed decisions",
      benefits: [
        "Google Analytics setup and tracking",
        "Custom dashboard creation",
        "Monthly performance reports",
        "Data analysis and insights",
        "Competitive analysis",
      ],
      stats: "Average 60% better decision-making based on data",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Comprehensive digital marketing solutions designed to drive growth and maximize your ROI.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow scroll-mt-24"
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  {service.description}
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  What's Included:
                </h3>
                <ul className="space-y-3 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">✓</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <p className="text-blue-900 font-semibold">
                    📈 {service.stats}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Our Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Discovery",
                description: "We understand your business, goals, and target audience",
              },
              {
                step: "2",
                title: "Strategy",
                description: "Develop a tailored marketing strategy to reach your objectives",
              },
              {
                step: "3",
                title: "Execution",
                description: "Implement campaigns with precision and creativity",
              },
              {
                step: "4",
                title: "Optimization",
                description: "Monitor, analyze, and continuously improve results",
              },
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-600">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Choose the services that fit your needs and let's start achieving your marketing goals together.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg"
          >
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
