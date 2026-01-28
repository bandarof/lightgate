"use client";

import { FadeUp } from "@/components/Motion";
import Image from "next/image";

export default function About() {
  return (
    <main>

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url(/about.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 container mx-auto px-6 text-white">
          <FadeUp>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Who We <span className="text-orange-500">Are</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg opacity-90">
              Lightgate is a global cultural force designing the future of
              entertainment through monumental experiences.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">

          <FadeUp>
            <p className="text-2xl md:text-3xl leading-relaxed font-light">
              We operate at the intersection of{" "}
              <span className="text-orange-500">culture</span>,{" "}
              <span className="text-orange-500">technology</span>, and{" "}
              <span className="text-orange-500">spectacle</span>.
            </p>

            <p className="mt-10 text-xl text-gray-600">
              From concept to execution, Lightgate builds large-scale
              entertainment ecosystems that reshape how people gather,
              celebrate, and experience culture.
            </p>
          </FadeUp>

        </div>
      </section>

      {/* ================= SEPARATOR ================= */}
      <div className="w-full h-px bg-gray-200" />

      {/* ================= IMAGE + TEXT ================= */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <FadeUp>
            <div className="relative h-[520px] rounded-2xl overflow-hidden">
              <Image
                src="/culture.jpg"
                alt="Culture"
                fill
                className="object-cover"
              />
            </div>
          </FadeUp>

          <FadeUp>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Culture Is Our <span className="text-orange-500">Infrastructure</span>
              </h2>

              <p className="text-gray-600 mb-6">
                We design cultural platforms that function like cities:
                layered, alive, scalable, and interconnected.
              </p>

              <p className="text-gray-600">
                Every Lightgate project is engineered to endure,
                evolve, and grow with its audience.
              </p>
            </div>
          </FadeUp>

        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">

          <FadeUp>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold">
                Our <span className="text-orange-500">Values</span>
              </h2>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-12">

            {[
              {
                title: "Scale",
                text: "We think in millions, not thousands.",
              },
              {
                title: "Precision",
                text: "Every detail is engineered.",
              },
              {
                title: "Impact",
                text: "Experiences that move culture forward.",
              },
            ].map((v) => (
              <FadeUp key={v.title}>
                <div className="p-10 border rounded-xl hover:shadow-xl transition">
                  <h3 className="text-2xl font-semibold mb-4">
                    {v.title}
                  </h3>
                  <div className="w-10 h-1 bg-orange-500 mb-6" />
                  <p className="text-gray-600">{v.text}</p>
                </div>
              </FadeUp>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}
