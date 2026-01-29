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
              <span className="counter text-5xl font-bold text-orange-500" data-target="2000000">0</span>
              <p className="mt-3 opacity-80">In Revenue</p>
            </div>

            <div>
              <span className="counter text-5xl font-bold text-orange-500" data-target="15" data-suffix="+">0</span>
              <p className="mt-3 opacity-80">Projects / Year</p>
            </div>

            <div>
              <span className="counter text-5xl font-bold text-orange-500" data-target="26" data-suffix="Y+">0</span>
              <p className="mt-3 opacity-80">Years Experience</p>
            </div>

            <div>
              <span className="counter text-5xl font-bold text-orange-500" data-target="6" data-suffix="+">0</span>
              <p className="mt-3 opacity-80">Global Collaborations</p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= FLAGSHIP EXPERIENCES ================= */}
      <section className="py-32 bg-white dark:bg-neutral-900">

        <div className="container mx-auto px-6">

          <FadeUp>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold">
                Flagship <span className="text-orange-500">Experiences</span>
              </h2>

              <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                Monumental experiences engineered to shape culture,
                scale globally, and redefine entertainment.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              { img: "/experience-1.jpg", title: "Immersive Festivals", sub: "Mega Scale Cultural Events" },
              { img: "/experience-2.jpg", title: "Tech Installations", sub: "Future Driven Experiences" },
              { img: "/experience-3.jpg", title: "Cultural Showcases", sub: "Global Creative Platforms" },
            ].map((card) => (
              <FadeUp key={card.title}>
                <div className="group relative h-[450px] overflow-hidden rounded-2xl">

                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-black/50" />

                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-2xl font-bold">{card.title}</h3>
                    <p className="mt-2 opacity-80">{card.sub}</p>
                  </div>

                </div>
              </FadeUp>
            ))}

          </div>

        </div>

      </section>

      {/* ================= SERVICES SNAPSHOT ================= */}
      <section className="relative py-32">

        <Image
          src="/global.jpg"
          alt="Global"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 container mx-auto px-6 text-white">

          <FadeUp>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold">
                Our <span className="text-orange-500">Services</span>
              </h2>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {[
              "Event Production",
              "Creative Direction",
              "Stage & Set Design",
              "Media & Broadcasting",
              "Experiential Marketing",
              "Technical Operations",
            ].map((service) => (
              <FadeUp key={service}>
                <div className="p-10 border border-white/20 rounded-xl bg-white/5 backdrop-blur">
                  <h3 className="text-xl font-semibold mb-3">
                    {service}
                  </h3>
                  <div className="w-10 h-1 bg-orange-500 mb-6" />
                  <p className="text-gray-300">
                    High-impact execution built for scale, precision,
                    and unforgettable experiences.
                  </p>
                </div>
              </FadeUp>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}
