export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="hero">
        <img
          src="/hero.jpg"
          className="hero-bg"
          alt="Lightgate"
        />

        <div className="container fade-up">
          <span className="index">01</span>
          <h1>
            Illuminating the World Through<br />
            Culture
          </h1>
          <p>Lightgate is a global cultural platform.</p>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="manifesto">
        <div className="container fade-up">
          <h2>Culture Is Infrastructure</h2>
          <p>
            We design cultural systems that shape how people
            gather, experience, and imagine the future.
          </p>
        </div>
      </section>

    </main>
  );
}
