import { FadeUp } from "@/components/Motion";
import ImageSection from "@/components/ImageSection";

export default function About() {
  return (
    <main>

      {/* HERO */}
      <section className="hero">
        <img src="/about.jpg" className="hero-bg" />

        <img src="/global.jpg" className="hero-bg" />
        <FadeUp>
          <div className="container">
            <span className="index">01</span>
            <h1>About Lightgate</h1>
            <p>
              Lightgate is a cultural infrastructure company
              building the foundations of future creative economies.
            </p>
          </div>
        </FadeUp>
      </section>

      <ImageSection src="/culture.jpg" />

      {/* WHO WE ARE */}
      <section className="manifesto">
        <FadeUp>
          <div className="container">
            <h2>Who We Are</h2>
            <p>
              We design platforms, institutions, and experiences
              that empower creators and communities.
              Our work sits at the intersection of culture,
              technology, and global exchange.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* WHAT WE BELIEVE */}
      <section>
        <FadeUp>
          <div className="container">
            <h2>What We Believe</h2>
            <p>
              Culture is not decoration.  
              Culture is power.  
              Culture is infrastructure.
            </p>
          </div>
        </FadeUp>
      </section>

    </main>
  );
}

