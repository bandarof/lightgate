export default function Home() {
  return (
    <main>
      <section className="hero">
        
        {/* image layer */}
        <img
          src="/hero.jpg"
          className="hero-bg"
          alt="Lightgate"
        />

        <div className="container fade-up">
          <span className="index">01</span>

          <h1>
            Illuminating the World Through<br/>
            Culture
          </h1>

          <p>
            Lightgate is a global cultural platform.
          </p>

        </div>
      </section>
    </main>
  );
}
