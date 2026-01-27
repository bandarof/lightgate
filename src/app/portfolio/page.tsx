import Hero from "@/components/Hero";
import { FadeUp } from "@/components/Motion";

export default function Portfolio() {
  return (
    <main>

      <Hero
        title="Selected Work"
        subtitle="A snapshot of systems, platforms, and initiatives."
        image="/portfolio.jpg"
      />

      <section className="py-24">
        <FadeUp>
          <div className="container grid md:grid-cols-3 gap-10">

            {["Cultural Network", "Digital Archive", "City Platform"].map((p) => (
              <div key={p} className="border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{p}</h3>
                <p>Strategic design and platform architecture.</p>
              </div>
            ))}

          </div>
        </FadeUp>
      </section>

    </main>
  );
}
