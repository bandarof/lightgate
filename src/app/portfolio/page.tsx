import Hero from "@/components/Hero";

export default function Portfolio() {
  return (
    <main>

      <Hero
        title="Portfolio"
        subtitle="Selected cultural initiatives and platforms."
        image="/portfolio.jpg"
      />

      <section className="py-32">
        <div className="container grid-3">

          <div>
            <h3>Lightgate Fest</h3>
            <p>Cultural festival and platform.</p>
          </div>

          <div>
            <h3>Public Art Programs</h3>
            <p>City-scale cultural installations.</p>
          </div>

          <div>
            <h3>Digital Archives</h3>
            <p>Preserving and activating cultural memory.</p>
          </div>

        </div>
      </section>

    </main>
  );
}
