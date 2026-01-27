import { FadeUp } from "@/components/Motion";

export default function Home() {
  return (
    <main>

      {/* ================= HERO ================= */}
      <section className="hero">
        <img src="/home.jpg" className="hero-bg" />

        <FadeUp>
          <div className="container">
            <span className="index">01</span>
            <h1>Illuminating the World Through Culture</h1>
            <p>Lightgate is a global cultural platform.</p>
          </div>
        </FadeUp>
      </section>

      {/* ========== INTRO TEXT BLOCK ========== */}
      <section className="py-32">
        <div className="container max-w-4xl">

          <FadeUp>
            <p className="text-2xl leading-relaxed">
              Lightgate is not just another event maker,
              it's a global phenomenon that will redefine
              entertainment.
              <br /><br />
              We are building a truly unique festive event
              experience that blends groundbreaking
              technology, unparalleled scale, and a never-
              before-seen festive event concept.
            </p>
          </FadeUp>

        </div>
      </section>

      {/* ========== CULTURE IMAGE + STATS ========== */}
      <section className="relative h-[90vh] flex items-center justify-center text-white">

        <img
          src="/culture.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-6xl w-full px-6">

          <FadeUp>
            <h2 className="text-5xl mb-6">WE ARE IN NUMBERS</h2>
            <p className="mb-16 opacity-80">
              The number statement of our achievements and journey
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-12 text-center">

            <FadeUp>
              <div>
                <span className="text-6xl font-bold counter" data-target="2000000">2M+</span>
                <p className="mt-2">In-revenue</p>
              </div>
            </FadeUp>

            <FadeUp>
              <div>
                <span className="text-6xl font-bold counter" data-target="15">15+</span>
                <p className="mt-2">projects handled every year</p>
              </div>
            </FadeUp>

            <FadeUp>
              <div>
                <span className="text-6xl font-bold counter" data-target="26">26Y+</span>
                <p className="mt-2">
                  experience in the events & media
                  production industry
                </p>
              </div>
            </FadeUp>

            <FadeUp>
              <div>
                <span className="text-6xl font-bold counter" data-target="6">6+</span>
                <p className="mt-2">
                  collaborations with national and
                  international Events and Media experts.
                </p>
              </div>
            </FadeUp>

          </div>

        </div>
      </section>

    </main>
  );
}
