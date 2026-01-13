import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Drive Your Business
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Growth Today
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Unlock your full digital potential with our comprehensive marketing solutions. We help businesses like yours achieve remarkable growth through strategic planning and innovative execution.
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-12 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📊</div>
              <p className="text-gray-600">Visual content showcasing digital marketing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Lightgate?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine data-driven strategies with creative excellence to deliver results that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Proven Results
              </h3>
              <p className="text-gray-600">
                Our data-driven approach has helped 200+ businesses achieve their marketing goals and exceed expectations.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Expert Team
              </h3>
              <p className="text-gray-600">
                Work with seasoned marketing professionals who bring years of experience in digital strategy and execution.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Transparent Reporting
              </h3>
              <p className="text-gray-600">
                Get clear, actionable insights with detailed monthly reports that show exactly how your investment is performing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to your unique business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* SEO */}
          <div className="border-l-4 border-blue-600 pl-6 py-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Search Engine Optimization
            </h3>
            <p className="text-gray-600 mb-4">
              Boost your organic visibility and rank higher in search results with our proven SEO strategies.
            </p>
            <Link href="/services#seo" className="text-blue-600 hover:text-blue-800 font-semibold">
              Learn More →
            </Link>
          </div>

          {/* PPC */}
          <div className="border-l-4 border-blue-600 pl-6 py-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              PPC Advertising
            </h3>
            <p className="text-gray-600 mb-4">
              Maximize your ROI with targeted paid advertising campaigns across Google, Facebook, and more.
            </p>
            <Link href="/services#ppc" className="text-blue-600 hover:text-blue-800 font-semibold">
              Learn More →
            </Link>
          </div>

          {/* Social Media */}
          <div className="border-l-4 border-blue-600 pl-6 py-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Social Media Marketing
            </h3>
            <p className="text-gray-600 mb-4">
              Build authentic connections and grow your audience with compelling social media strategies.
            </p>
            <Link href="/services#social" className="text-blue-600 hover:text-blue-800 font-semibold">
              Learn More →
            </Link>
          </div>

          {/* Content Marketing */}
          <div className="border-l-4 border-blue-600 pl-6 py-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Content Marketing
            </h3>
            <p className="text-gray-600 mb-4">
              Attract and engage your audience with high-quality, strategic content that converts.
            </p>
            <Link href="/services#content" className="text-blue-600 hover:text-blue-800 font-semibold">
              Learn More →
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Digital Marketing?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's work together to create a strategy that drives real business growth.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
