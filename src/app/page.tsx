import { FadeUp } from "@/components/Motion";
import ImageSection from "@/components/ImageSection";

export default function Home() {
  return (
    <main>

      <section className="hero">
        <img src="/hero.jpg" className="hero-bg" />
        <FadeUp>
          <div className="container">
            <span className="index">01</span>
            <h1>Illuminating the World Through Culture</h1>
            <p>Lightgate is a global cultural platform.</p>
          </div>
        </FadeUp>
      </section>

      <ImageSection src="/culture.jpg" />

      <section className="manifesto">
        <FadeUp>
          <div className="container">
            <h2>Culture Is Infrastructure</h2>
            <p>
              We design cultural systems that shape how people
              gather, experience, and imagine the future.
            </p>
          </div>
        </FadeUp>
      </section>

      <ImageSection src="/global.jpg" />

      <section className="dark">
        <FadeUp>
          <div className="container">
            <h2>Global by Design</h2>
            <p>
              Lightgate operates across borders,
              languages, and mediums.
            </p>
          </div>
        </FadeUp>
      </section>

    </main>
  );
}
