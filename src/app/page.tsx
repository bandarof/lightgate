import { FadeUp } from "@/components/Motion";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>

      <Hero
        title="Illuminating the World Through Culture"
        subtitle="Lightgate is a global cultural platform."
        image="/home.jpg"
      />

      {/* SEPARATOR */}
      <div className="h-32"></div>

      <section className="manifesto">
        <FadeUp>
          <div className="container">
            <h2>Culture Is Infrastructure</h2>
            <p>
              We design cultural systems that shape how people gather,
              experience, and imagine the future.
            </p>
          </div>
        </FadeUp>
      </section>

    </main>
  );
}
