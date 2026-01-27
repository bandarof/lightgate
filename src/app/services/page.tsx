import Hero from "@/components/Hero";
import { FadeUp } from "@/components/Motion";

export default function Services() {
  return (
    <main>

      <Hero
        title="Services"
        subtitle="Building cultural systems from concept to operation."
        image="/services.jpg"
      />

      <section className="py-24">
        <FadeUp>
          <div className="container grid md:grid-cols-3 gap-12">

            <div>
              <h3 className="text-2xl font-semibold mb-3">Platform Development</h3>
              <p>Custom digital platforms for cultural institutions.</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">Brand & Identity Systems</h3>
              <p>Visual language, narrative, and positioning.</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">Cultural Strategy</h3>
              <p>Long-term planning for cities, museums, and foundations.</p>
            </div>

          </div>
        </FadeUp>
      </section>

    </main>
  );
}
