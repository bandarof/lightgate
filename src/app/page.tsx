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
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <FadeUp>
            <p className="text-2xl md:text-3xl leading-relaxed font-light">
              Lightgate is not just another event maker,
              it's a global phenomenon that will{" "}
              <span className="text-orange-500">redefine entertainment</span>.
            </p>

            <p className="mt-10 text-xl leading-relaxed text-gray-600">
              We are building a truly unique festive event experience that blends{" "}
              <span className="text-orange-500">groundbreaking technology</span>,
              unparalleled scale, and a never-before-seen festive event concept.
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
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 container mx-auto px-6 text-white">

          <FadeUp>
            <div className="text-center mb-20">
              <span className="tracking-widest opacity-70">WE ARE IN</span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                <span className="text-orange-500">NUMBERS</span>
              </h2>

              <p className="mt-4 opacity-80">
                The number statement of our achievements and journey
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 text-center">

            <FadeUp>
              <div>
                <span
                  className="counter text-5xl font-bold text-orange-500"
                  data-target="2000000"
                  data-suffix="M+"
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
                  data-suffix="+"
                >
                  0
                </span>
                <p className="mt-3 opacity-80">Projects handled every year</p>
              </div>
            </FadeUp>

            <FadeUp>
              <div>
                <span
                  className="counter text-5xl font-bold text-orange-500"
                  data-target="26"
                  data-suffix="Y+"
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
                  data-suffix="+"
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

      {/* ================= FLAGSHIP EXPERIENCES ================= */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">

          <FadeUp>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold">
                Flagship <span className="text-orange-500">Experiences</span>
              </h2>

              <p className="mt-4 text-gray-600 max-w-xl mx-auto">
                Monumental experiences engineered to shape culture,
                scale globally, and redefine entertainment.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-10">

            {["experience-1.jpg","experience-2.jpg","experience-3.jpg"].map((img,i)=>(
              <FadeUp key={i}>
                <div className="relative h-[450px] rounded-2xl overflow-hidden">
                  <Image src={`/${img}`} alt="" fill className="object-cover"/>
                  <div className="absolute inset-0 bg-black/50"/>
                </div>
              </FadeUp>
            ))}

          </div>

        </div>
      </section>

      {/* ================= SERVICES SNAPSHOT (GLOBAL BG) ================= */}
      <section className="relative py-32">

        <Image
          src="/global.jpg"
          alt="Global"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 container mx-auto px-6 text-white">

          <FadeUp>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold">
                Our <span className="text-orange-500">Services</span>
              </h2>

              <p className="mt-4 opacity-80">
                End-to-end solutions for world-class events
              </p>
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
                  <h3 className="text-xl font-semibold mb-3">{service}</h3>
                  <div className="w-10 h-1 bg-orange-500 mb-6" />
                  <p className="opacity-80">
                    High-impact execution built for scale, precision, and unforgettable experiences.
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
