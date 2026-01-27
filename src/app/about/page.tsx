import Hero from "@/components/Hero";
import { FadeUp } from "@/components/Motion";

export default function About() {
  return (
    <main>

      {/* HERO */}
      <Hero
        title="About Lightgate"
        subtitle="Designing cultural infrastructure for a connected world."
        image="/about.jpg"
      />

      {/* INTRO */}
      <section className="py-24">
        <FadeUp>
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Who We Are
            </h2>

            <p className="text-xl opacity-80">
              Lightgate is a global cultural platform and studio.
              We operate at the intersection of culture, technology,
              and institutional design.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* MISSION */}
      <section className="py-24 bg-gray-50">
        <FadeUp>
          <div className="container max-w-4xl mx-auto grid md:grid-cols-2 gap-12">

            <div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p>
                To build systems that allow culture to scale,
                endure, and evolve.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-4">Our Belief</h3>
              <p>
                Culture is infrastructure.
                It shapes how societies imagine themselves.
              </p>
            </div>

          </div>
        </FadeUp>
      </section>

      {/* VALUES */}
      <section className="py-24">
        <FadeUp>
          <div className="container max-w-4xl mx-auto text-center">

            <h2 className="text-4xl font-bold mb-12">
              Core Principles
            </h2>

            <div className="grid md:grid-cols-3 gap-10">

              <div>
                <h4 className="text-xl font-semibold mb-2">
                  Long-Term Thinking
                </h4>
                <p>
                  We design for decades, not quarters.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-2">
                  Cultural Integrity
                </h4>
                <p>
                  We respect context, history, and people.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-2">
                  Systemic Design
                </h4>
                <p>
                  Everything we build fits into a larger whole.
                </p>
              </div>

            </div>

          </div>
        </FadeUp>
      </section>

    </main>
  );
}
