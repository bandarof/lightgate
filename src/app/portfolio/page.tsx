import Link from "next/link";

export default function Portfolio() {
  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Growth",
      client: "TechStore Inc.",
      category: "PPC & SEO",
      challenge: "E-commerce platform struggling with online visibility and sales",
      solution: "Implemented comprehensive PPC strategy and SEO optimization",
      results: [
        "350% increase in online sales within 6 months",
        "150% improvement in organic search traffic",
        "45% reduction in customer acquisition cost",
      ],
      image: "🛍️",
    },
    {
      id: 2,
      title: "Local Business Domination",
      client: "FitnessPro Gym Chain",
      category: "Local SEO & Social",
      challenge: "Multiple gym locations competing in local search results",
      solution: "Local SEO strategy combined with targeted social media campaigns",
      results: [
        "200% increase in local search visibility",
        "5000+ new gym members acquired",
        "First position for all target keywords",
      ],
      image: "💪",
    },
    {
      id: 3,
      title: "B2B Lead Generation",
      client: "SoftwareSolutions Ltd.",
      category: "Content & Email Marketing",
      challenge: "Need for qualified B2B leads in a competitive market",
      solution: "Created content marketing and email nurture strategy",
      results: [
        "800+ qualified leads in first quarter",
        "35% email open rate (industry avg: 21%)",
        "6-month ROI of 420%",
      ],
      image: "📧",
    },
    {
      id: 4,
      title: "Brand Awareness Campaign",
      client: "HealthWellness Co.",
      category: "Social Media & Video",
      challenge: "New brand with zero market awareness",
      solution: "Integrated social media and video content strategy",
      results: [
        "2 million+ impressions in 3 months",
        "50K+ engaged followers",
        "Strong brand recognition in target market",
      ],
      image: "📺",
    },
    {
      id: 5,
      title: "Website Redesign & Conversion",
      client: "ServicePro Agency",
      category: "Web Design & Analytics",
      challenge: "High traffic but low conversion rates",
      solution: "Complete website redesign with UX optimization",
      results: [
        "42% improvement in conversion rate",
        "60% reduction in bounce rate",
        "$500K+ in additional revenue",
      ],
      image: "🎨",
    },
    {
      id: 6,
      title: "Startup Launch Success",
      client: "InnovateTech Startup",
      category: "Full-Service Marketing",
      challenge: "New startup needing rapid market penetration",
      solution: "360-degree marketing campaign across all channels",
      results: [
        "Series A funding achieved",
        "10K+ paying customers",
        "30% month-over-month growth",
      ],
      image: "🚀",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Real results from real clients. See how we've helped businesses like yours achieve extraordinary growth.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                200+
              </div>
              <p className="text-gray-300">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                $50M+
              </div>
              <p className="text-gray-300">Client Revenue Generated</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                15+
              </div>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                98%
              </div>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Image Area */}
                <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-7xl">
                  {caseStudy.image}
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-1">
                        {caseStudy.title}
                      </h2>
                      <p className="text-gray-600">{caseStudy.client}</p>
                    </div>
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold whitespace-nowrap ml-4">
                      {caseStudy.category}
                    </span>
                  </div>

                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-700 uppercase mb-2">
                      Challenge
                    </h3>
                    <p className="text-gray-600">{caseStudy.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-700 uppercase mb-2">
                      Results
                    </h3>
                    <ul className="space-y-2">
                      {caseStudy.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-600 font-bold mt-1">✓</span>
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-block text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Get Similar Results →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Your Success Story Starts Here
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join 200+ businesses that have transformed their marketing with Lightgate.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg"
          >
            Start Your Project Today
          </Link>
        </div>
      </section>
    </div>
  );
}
