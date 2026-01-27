import Hero from "@/components/Hero";
import ImageSection from "@/components/ImageSection";
import { FadeUp } from "@/components/Motion";

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <Hero
        title="Illuminating the World Through Culture"
        subtitle="Lightgate is a global cultural platform."
        image="/hero.jpg"
      />

      {/* CULTURE IMAGE */}
      <ImageSection src="/culture.jpg" />

      {/* MANIFESTO */}
      <section className="py-24">
        <FadeUp>
          <div className="container text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Culture Is Infrastructure
            </h2>

            <p className="text-xl opacity-80">
              We design cultural systems that shape how people
              gather, experience, and imagine the future.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* GLOBAL IMAGE */}
      <ImageSection src="/global.jpg" />

      {/* GLOBAL BY DESIGN */}
      <section className="py-24 bg-black text-white">
        <FadeUp>
          <div className="container text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Global by Design
            </h2>

            <p className="text-xl opacity-80">
              Lightgate operates across borders,
              languages, and mediums.
            </p>
          </div>
        </FadeUp>
      </section>

    </main>
  );
}
