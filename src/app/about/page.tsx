import Hero from "@/components/Hero";

export default function About() {
  return (
    <main>

      <Hero
        title="About"
        subtitle="A global cultural platform shaping the future."
        image="/about.jpg"
      />

      <section className="py-32">
        <div className="container">

          <p>
            Lightgate is a cultural platform operating
            across borders, languages, and mediums.
          </p>

          <p>
            We create systems, experiences, and
            institutions that shape culture at scale.
          </p>

        </div>
      </section>

    </main>
  );
}
