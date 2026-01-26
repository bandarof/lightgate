export default function Portfolio() {
  return (
    <main>

      <section className="hero">
        <img src="/portfolio.jpg" className="hero-bg" />

        <div className="container">
          <span className="index">01</span>
          <h1>Selected Work</h1>
          <p>
            A growing collection of cultural systems,
            platforms, and initiatives.
          </p>
        </div>
      </section>

      <section>
        <div className="container grid-3">

          <div>
            <h3>Global Culture Index</h3>
            <p>
              Data platform mapping cultural ecosystems worldwide.
            </p>
          </div>

          <div>
            <h3>Lightgate Labs</h3>
            <p>
              Experimental studio for emerging cultural technologies.
            </p>
          </div>

          <div>
            <h3>City Cultural Network</h3>
            <p>
              Infrastructure connecting institutions across cities.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
