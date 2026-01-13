import Link from "next/link";

export default function About() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      expertise: "Strategy & Leadership",
      bio: "15+ years in digital marketing leadership",
      emoji: "👩‍💼",
    },
    {
      name: "Michael Chen",
      role: "VP of Paid Advertising",
      expertise: "PPC & Analytics",
      bio: "Expert in Google Ads and Facebook marketing",
      emoji: "👨‍💻",
    },
    {
      name: "Emily Rodriguez",
      role: "SEO Manager",
      expertise: "Technical & Content SEO",
      bio: "Specialized in ranking high-competition keywords",
      emoji: "👩‍🔬",
    },
    {
      name: "David Park",
      role: "Content Director",
      expertise: "Content Strategy & Creation",
      bio: "Award-winning content strategist and writer",
      emoji: "✍️",
    },
    {
      name: "Jessica Lee",
      role: "Social Media Lead",
      expertise: "Social Media & Community",
      bio: "Built communities with millions of followers",
      emoji: "📱",
    },
    {
      name: "Alex Thompson",
      role: "Web Designer & Developer",
      expertise: "UX/UI & Conversion Optimization",
      bio: "Creates beautiful, high-converting websites",
      emoji: "🎨",
    },
  ];

  const values = [
    {
      title: "Data-Driven",
      description: "Every decision backed by analytics and measurable results",
      icon: "📊",
    },
    {
      title: "Client-Focused",
      description: "Your success is our success. We're committed to your growth",
      icon: "🎯",
    },
    {
      title: "Innovative",
      description: "Always exploring new strategies and technologies",
      icon: "💡",
    },
    {
      title: "Transparent",
      description: "Clear communication and honest reporting every step of the way",
      icon: "🔍",
    },
    {
      title: "Collaborative",
      description: "We work as an extension of your team, not separate from it",
      icon: "🤝",
    },
    {
      title: "Excellence",
      description: "We never settle for good enough. Excellence is our standard",
      icon: "⭐",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            About Lightgate
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            We're a team of passionate digital marketing professionals dedicated to helping businesses achieve remarkable growth.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Lightgate was founded in 2010 with a simple mission: to help businesses thrive in the digital age. What started as a small team of digital enthusiasts has grown into a full-service marketing agency with a proven track record of success.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Over the years, we've worked with hundreds of businesses—from startups to Fortune 500 companies—helping them navigate the ever-changing digital landscape and achieve their marketing goals.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to be a leading digital marketing agency, known for our innovative strategies, talented team, and most importantly, our clients' success.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-12 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <p className="text-gray-600">Our Journey to Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              These principles guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Talented professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-lg font-semibold text-blue-600 mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">
                  {member.expertise}
                </p>
                <p className="text-gray-600">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-200 mb-2">
                15+
              </div>
              <p className="text-blue-100">Years of Experience</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-200 mb-2">
                200+
              </div>
              <p className="text-blue-100">Successful Projects</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-200 mb-2">
                50+
              </div>
              <p className="text-blue-100">Team Members</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-200 mb-2">
                98%
              </div>
              <p className="text-blue-100">Client Retention</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Our Approach
          </h2>

          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  1. Deep Discovery
                </h3>
                <p className="text-lg text-gray-600">
                  We take time to understand your business, industry, competitors, and target audience. This foundation is crucial to developing effective strategies.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <div className="text-6xl text-center">🔍</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="bg-blue-50 p-8 rounded-lg order-2 md:order-1">
                <div className="text-6xl text-center">📋</div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  2. Strategic Planning
                </h3>
                <p className="text-lg text-gray-600">
                  We develop a comprehensive strategy tailored to your goals, combining industry best practices with creative thinking.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  3. Expert Execution
                </h3>
                <p className="text-lg text-gray-600">
                  Our talented team executes campaigns with precision, ensuring every detail aligns with your strategy and objectives.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <div className="text-6xl text-center">⚡</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="bg-blue-50 p-8 rounded-lg order-2 md:order-1">
                <div className="text-6xl text-center">📈</div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  4. Continuous Optimization
                </h3>
                <p className="text-lg text-gray-600">
                  We monitor performance, gather insights, and continuously optimize campaigns to maximize your ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's talk about how we can help grow your business.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
