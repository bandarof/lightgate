"use client";

import { FadeUp, useCounters } from "@/components/Motion";
import Image from "next/image";

export default function Home() {
  useCounters();

  return (
    <main>

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url(/home.jpg)" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 container mx-auto px-6 text-white">

          <FadeUp>
            <h1 className="max-w-5xl mt-4 text-5xl md:text-7xl font-bold leading-tight">
              Illuminating the World <br />
              Through{" "}
              <span className="text-orange-500">Culture</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg md:text-xl opacity-90">
              Lightgate is not just another event maker —  
              it's a global phenomenon redefining entertainment through
              culture, technology, and large-scale immersive experiences.
            </p>

            {/* CTA */}
            <div className="mt-12">
              <a
                href="/portfolio"
                className="inline-block bg-orange-500 hover:bg-orange-600 transition px-10 py-4 rounded-full text-black font-semibold"
              >
                Explore Our World
              </a>
            </div>
          </FadeUp>

        </div>
      </section>

      {/* ================= CULTURE PREVIEW STRIP ================= */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center text-white">

          {["Events", "Technology", "Media", "Culture"].map((item) => (
            <FadeUp key={item}>
              <div className="text-2xl tracking-wide font-semibold text-orange-500">
                {item}
              </div>
            </FadeUp>
          ))}

        </div>
      </section>

      {/* ================= INTRO TEXT ================= */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">

          <FadeUp>
            <p className="text-2xl md:text-3xl leading-relaxed font-light">
              Lightgate is not just another event maker,
              it's a global phenomenon that will{" "}
              <span className="text-orange-500">redefine entertainment</span>.
            </p>

            <p className="mt-10 text-xl leading-relaxed text-gray-600">
              We are building a truly unique festive event
              experience that blends{" "}
              <span className="text-orange-500">groundbreaking technology</span>,
              unparalleled scale, and a never-before-seen
              festive event concept.
            </p>
          </FadeUp>

        </div>
      </section>

      {/* ================= DIVIDER ================= */}
      <div className="w-full h-px bg-gray-200" />

      {/* ================= NUMBERS ================= */}
      <section className="relative py-32">

        <Image
          src="/culture.jpg"
          alt="Culture"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 container mx-auto px-6 text-white">

          <FadeUp>
            <div className="text-center mb-20">

              <span className="tracking-widest opacity-70">
                WE ARE IN
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                <span className="text-orange-500">NUMBERS</span>
              </h2>

              <p className="mt-4 opacity-80">
                The number statement of our achievements and journey
              </p>

            </div>
          </FadeUp>

          {/* STATS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 text-center">

            <FadeUp>
              <div>
                <span
                  className="counter text-5xl font-bold text-orange-500"
                  data-target="2000000"
                >
                  0
                </span>
                <p className="mt-3 opacity-80">In revenue</p>
              </div>
            </FadeUp>

            <FadeUp>
              <div>
                <span
                  className="counter text-5xl font-bold text-orange-500"
                  data-target="15"
                >
                  0
                </span>
                <p className="mt-3 opacity-80">
                  Projects handled every year
                </p>
              </div>
            </FadeUp>

            <FadeUp>
              <div>
                <span
                  className="counter text-5xl font-bold text-orange-500"
                  data-target="26"
                >
                  0
                </span>
                <p className="mt-3 opacity-80">
                  Experience in events & media production
                </p>
              </div>
            </FadeUp>

            <FadeUp>
              <div>
                <span
                  className="counter text-5xl font-bold text-orange-500"
                  data-target="6"
                >
                  0
                </span>
                <p className="mt-3 opacity-80">
                  National & international collaborations
                </p>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

    </main>
  );
}
