import { FadeUp } from "@/components/Motion";

export default function About() {
  return (
    <main>

      <section className="hero min-h-screen flex items-center">
        <img src="/about.jpg" className="hero-bg" />

        <FadeUp>
          <div className="container">
            <h1 className="text-6xl font-bold">
              About <span className="text-orange-500">Lightgate</span>
            </h1>
            <p className="mt-6 max-w-xl">
              A cultural force shaping the future of global entertainment.
            </p>
          </div>
        </FadeUp>
      </section>

      <section>
        <FadeUp>
          <div className="container max-w-3xl text-lg leading-relaxed">
            <p>
              Lightgate is a global cultural platform building next-generation
              festive event experiences.
            </p>

            <p className="mt-6">
              We operate at the intersection of technology, culture, and
              large-scale experiential production.
            </p>
          </div>
        </FadeUp>
      </section>

    </main>
  );
}
