import Hero from "@/components/Hero";

export default function Services() {
  return (
    <main>

      <Hero
        title="Services"
        subtitle="We build cultural systems from concept to operation."
        image="/services.jpg"
      />

      <section className="py-32">
        <div className="container grid-3">

          <div>
            <h3>Platform Development</h3>
            <p>
              Custom digital platforms for cultural institutions,
              creative networks, and public engagement.
            </p>
          </div>

          <div>
            <h3>Brand & Identity Systems</h3>
            <p>
              Visual identity, language systems,
              and narrative architecture.
            </p>
          </div>

          <div>
            <h3>Cultural Strategy</h3>
            <p>
              Long-term planning for cities,
              museums, festivals, and foundations.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
