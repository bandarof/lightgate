import { FadeUp } from "@/components/Motion";

export default function Portfolio() {
  return (
    <main>

      <section className="hero min-h-screen flex items-center">
        <img src="/portfolio.jpg" className="hero-bg" />

        <FadeUp>
          <div className="container">
            <h1 className="text-6xl font-bold">
              Selected <span className="text-orange-500">Work</span>
            </h1>
          </div>
        </FadeUp>
      </section>

      <section>
        <div className="container grid-3">

          <FadeUp><div>Flagship Festival Concepts</div></FadeUp>
          <FadeUp><div>Immersive Experiences</div></FadeUp>
          <FadeUp><div>Large Scale Cultural Activations</div></FadeUp>

        </div>
      </section>

    </main>
  );
}

