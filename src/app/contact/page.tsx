import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "hello@lightgate.media",
      href: "mailto:hello@lightgate.media",
    },
    {
      icon: "📞",
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: "📍",
      label: "Address",
      value: "123 Digital Street, Tech City, TC 12345",
      href: "#",
    },
    {
      icon: "⏰",
      label: "Hours",
      value: "Mon-Fri 9:00 AM - 6:00 PM EST",
      href: "#",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Ready to grow your business? Let's talk about your digital marketing goals.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                {contactInfo.map((info, idx) => (
                  <div key={idx}>
                    <div className="text-4xl mb-3">{info.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {info.label}
                    </h3>
                    {info.href.startsWith("http") || info.href.startsWith("tel:") || info.href.startsWith("mailto:") ? (
                      <a
                        href={info.href}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.value}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors text-xl"
                    aria-label="LinkedIn"
                  >
                    in
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors text-xl"
                    aria-label="Twitter"
                  >
                    𝕏
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors text-xl"
                    aria-label="Facebook"
                  >
                    f
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "How long does it take to see results?",
                a: "Results vary by service. SEO typically takes 3-6 months to show significant results, while PPC campaigns can drive immediate traffic. We'll provide realistic timelines based on your specific goals.",
              },
              {
                q: "What's your pricing model?",
                a: "We offer flexible pricing options including monthly retainers, project-based pricing, and performance-based models. We'll discuss what works best for your budget and goals.",
              },
              {
                q: "Do you offer free consultations?",
                a: "Yes! We offer a free 30-minute consultation to discuss your goals, assess your current situation, and outline a strategy.",
              },
              {
                q: "Can you work with businesses in any industry?",
                a: "We have experience across various industries including tech, e-commerce, healthcare, real estate, and more. Let us know your industry and we'll share relevant case studies.",
              },
              {
                q: "How do you measure success?",
                a: "We establish clear KPIs at the start of every project and provide detailed monthly reports tracking progress toward your goals.",
              },
              {
                q: "What's your contract commitment?",
                a: "Contracts vary based on the service and scope. We'll discuss options ranging from project-based work to ongoing monthly retainers.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-600">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Let's Get Started
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Fill out the form above or call us at +1 (555) 123-4567
          </p>
        </div>
      </section>
    </div>
  );
}
