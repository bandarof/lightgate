"use client";

import { FadeUp, useCounters } from "@/components/Motion";
import Image from "next/image";

export default function Home() {
  useCounters();

  return (
    <main className="bg-white dark:bg-neutral-950">

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url(/home.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 container mx-auto px-6 text-white">
          <FadeUp>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Illuminating the World <br />
              Through <span className="text-orange-500">Culture</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg opacity-90">
              Lightgate is a global cultural platform.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-28 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-6 text-center max-w-4xl">

          <FadeUp>
            <p className="text-2xl md:text-3xl font-light">
              Lightgate is not just another event maker, it’s a global
              phenomenon that will{" "}
              <span className="text-orange-500">redefine entertainment</span>.
            </p>

            <p className="mt-10 text-xl text-gray-600 dark:text-gray-400">
              We are building a truly unique festive event experience
              blending technology, scale, and a never-before-seen concept.
            </p>
          </FadeUp>

        </div>
      </section>

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
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-4 gap-16 text-center">

            <div>
              <span className="counter text-5xl font-bold text-orange-500" data-target="2000000">
                0
              </span>
              <p className="mt-3 opacity-80">In Revenue</p>
            </div>

            <div>
              <span className="counter text-5xl font-bold text-orange-500" data-target="15" data-suffix="+">
                0
              </span>
              <p className="mt-3 opacity-80">Projects / Year</p>
            </div>

            <div>
              <span className="counter text-5xl font-bold text-orange-500" data-target="26" data-suffix="Y+">
                0
              </span>
              <p className="mt-3 opacity-80">Years Experience</p>
            </div>

            <div>
              <span className="counter text-5xl font-bold text-orange-500" data-target="6" data-suffix="+">
                0
              </span>
              <p className="mt-3 opacity-80">Global Collaborations</p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
