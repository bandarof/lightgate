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
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 container mx-auto px-6 text-white">
          <FadeUp>

            <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-tight">
              Illuminating the World <br />
              Through{" "}
              <span className="text-orange-500">Culture</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg opacity-90">
              Lightgate is a global cultural platform.
            </p>

          </FadeUp>
        </div>
      </section>

      {/* ================= ABOUT TEXT ================= */}
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

      {/* ================= SEPARATOR ================= */}
      <div className="w-full h-px bg-gray-200" />

      {/* ================= NUMBERS SECTION ================= */}
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
                <span className="text-orange-500">Numbers</span>
              </h2>

              <p className="mt-4 opacity-80">
                The number statement of our achievements and journey
              </p>

            </div>
          </FadeUp>

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 text-center">

            <FadeUp>
              <div>
                <div className="counter text-5xl font-bold text-orange-500" data-target="2000000">
                  0
                </div>
                <p className="mt-3 opacity-80">In-revenue</p>
              </div>
            </FadeUp>

            <FadeUp>
              <div>
                <div className="counter text-5xl font-bold text-orange-500" data-target="15">
                  0
                </div>
                <p className="mt-3 opacity-80">
                  projects handled every year
                </p>
              </div>
            </FadeUp>

            <FadeUp>
              <div>
                <div className="counter text-5xl font-bold text-orange-500" data-target="26">
                  0
                </div>
                <p className="mt-3 opacity-80">
                  years experience in events & media production
                </p>
              </div>
            </FadeUp>

            <FadeUp>
              <div>
                <div className="counter text-5xl font-bold text-orange-500" data-target="6">
                  0
                </div>
                <p className="mt-3 opacity-80">
                  collaborations with national & international experts
                </p>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

    </main>
  );
}
