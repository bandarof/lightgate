export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <span className="index">01</span>
          <h1>Illuminating the World Through Culture</h1>
          <p>Lightgate is a global cultural platform.</p>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="manifesto">
        <div className="container">
          <h2>Culture Is Infrastructure</h2>
          <p>
            We believe culture is the invisible system shaping how people
            build, share, and imagine the future.
          </p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="capabilities">
        <div className="container grid-3">
          <div>
            <h3>Platforms</h3>
            <p>Digital ecosystems for communities.</p>
          </div>

          <div>
            <h3>Media</h3>
            <p>Stories, documentaries, archives.</p>
          </div>

          <div>
            <h3>Experiences</h3>
            <p>Events, installations, exhibitions.</p>
          </div>
        </div>
      </section>

    </main>
  );
}
