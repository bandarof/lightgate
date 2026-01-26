import { FadeUp } from "@/components/Motion";
import ImageSection from "@/components/ImageSection";

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="hero">
        <img src="/hero.jpg" className="hero-bg" />
        <FadeUp>
          <div className="container">
            <span className="index">01</span>
            <h1>Illuminating the World Through Culture</h1>
            <p>
              Lightgate is a global cultural platform building the
              infrastructure for creative economies, future institutions,
              and shared imagination.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* IMAGE */}
      <ImageSection src="/culture.jpg" />

      {/* MANIFESTO */}
      <section className="manifesto">
        <FadeUp>
          <div className="container">
            <h2>Culture Is Infrastructure</h2>
            <p>
              Culture shapes how societies organize, innovate,
              and understand themselves.  
              We design cultural systems that operate like infrastructure:
              resilient, scalable, and generative.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* IMAGE */}
      <ImageSection src="/global.jpg" />

      {/* GLOBAL */}
      <section className="dark">
        <FadeUp>
          <div className="container">
            <h2>Global by Design</h2>
            <p>
              Lightgate operates across borders, languages,
              and mediums — connecting creators, institutions,
              and audiences into one continuous ecosystem.
            </p>
          </div>
        </FadeUp>
      </section>

    </main>
  );
}
