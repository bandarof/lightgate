import { FadeUp } from "@/components/Motion";

export default function Services() {
  return (
    <main>

      <section className="hero min-h-screen flex items-center">
        <img src="/services.jpg" className="hero-bg" />

        <FadeUp>
          <div className="container">
            <h1 className="text-6xl font-bold">
              Our <span className="text-orange-500">Services</span>
            </h1>
            <p className="mt-6">
              Cultural systems from concept to operation.
            </p>
          </div>
        </FadeUp>
      </section>

      <section>
        <div className="container grid-3">

          <FadeUp>
            <div>
              <h3>Platform Development</h3>
              <p>Custom digital platforms and cultural ecosystems.</p>
            </div>
          </FadeUp>

          <FadeUp>
            <div>
              <h3>Brand & Identity</h3>
              <p>Visual systems, language, and narrative architecture.</p>
            </div>
          </FadeUp>

          <FadeUp>
            <div>
              <h3>Cultural Strategy</h3>
              <p>Long-term planning for institutions and cities.</p>
            </div>
          </FadeUp>

        </div>
      </section>

    </main>
  );
}
