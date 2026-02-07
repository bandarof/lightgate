import { FadeUp } from "@/components/Motion";
import Image from "next/image";

const servicePillars = [
  {
    title: "Platform Development",
    description:
      "Custom digital platforms and cultural ecosystems that scale from concept to city-wide rollout.",
  },
  {
    title: "Brand & Identity",
    description:
      "Visual systems, spatial language, and story architecture that make destinations unforgettable.",
  },
  {
    title: "Cultural Strategy",
    description:
      "Long-term planning for institutions, mega-events, and tourism corridors.",
  },
  {
    title: "Immersive Experience Design",
    description:
      "Multi-sensory installations, interactive zones, and live performance environments.",
  },
  {
    title: "Production & Operations",
    description:
      "End-to-end production management, vendor orchestration, and day-of execution.",
  },
  {
    title: "Measurement & Impact",
    description:
      "Audience insights, KPI frameworks, and reporting dashboards for stakeholders.",
  },
];

const processSteps = [
  {
    title: "Briefing & Research",
    description:
      "Stakeholder workshops, cultural immersion, and vision alignment to define scope.",
    image: "/process-briefing.jpg",
  },
  {
    title: "Concept & Narrative",
    description:
      "Creative storytelling, spatial flow, and thematic pillars that guide every touchpoint.",
    image: "/process-execution.jpg",
  },
  {
    title: "Production & Delivery",
    description:
      "Integrated production planning, logistics, vendor coordination, and show control.",
    image: "/process-delivery.jpg",
  },
  {
    title: "Finalization & Launch",
    description:
      "Rehearsals, training, and continuous optimization to ensure flawless opening nights.",
    image: "/process-finalization.jpg",
  },
];

export default function Services() {
  return (
    <main>
      <section className="hero min-h-screen flex items-center">
        <img src="/services.jpg" className="hero-bg" alt="Services" />

        <FadeUp>
          <div className="container">
            <h1 className="text-6xl font-bold">
              Our <span className="text-orange-500">Services</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-300">
              Cultural systems from concept to operation—strategic, cinematic, and built for global
              audiences.
            </p>
          </div>
        </FadeUp>
      </section>

      <section>
        <div className="container grid-3">
          {servicePillars.slice(0, 3).map((pillar) => (
            <FadeUp key={pillar.title}>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{pillar.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="bg-neutral-50 dark:bg-neutral-900/60">
        <div className="container">
          <FadeUp>
            <div className="max-w-3xl">
              <span className="text-sm uppercase tracking-[0.3em] text-orange-500">
                Signature Capabilities
              </span>
              <h2 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">
                Building cultural ecosystems that move people
              </h2>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                From flagship festivals to immersive brand worlds, we design the cultural operating
                systems that connect governments, artists, and audiences. Every engagement is built
                around bold storytelling, thoughtful spatial design, and technology that amplifies
                human connection.
              </p>
            </div>
          </FadeUp>

          <div className="mt-16 grid gap-10 lg:grid-cols-3">
            {servicePillars.slice(3).map((pillar) => (
              <FadeUp key={pillar.title}>
                <div className="h-full rounded-2xl border border-orange-100/80 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-gray-600 dark:text-gray-300">{pillar.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <FadeUp>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="text-sm uppercase tracking-[0.3em] text-orange-500">
                  Our Process
                </span>
                <h2 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">
                  The production pathway from vision to reality
                </h2>
              </div>
              <p className="max-w-xl text-lg text-gray-600 dark:text-gray-300">
                A clear, collaborative, and accountable process that keeps stakeholders aligned while
                delivering unforgettable experiences.
              </p>
            </div>
          </FadeUp>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {processSteps.map((step) => (
              <FadeUp key={step.title}>
                <div className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-950">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">{step.description}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 text-white">
        <div className="container">
          <FadeUp>
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <span className="text-sm uppercase tracking-[0.3em] text-orange-400">
                  Engagement Models
                </span>
                <h2 className="mt-4 text-4xl font-bold">
                  Flexible collaboration for ambitious stakeholders
                </h2>
                <p className="mt-6 text-lg text-gray-300">
                  Whether you need a full cultural operating system or targeted support for a single
                  activation, we create the right team, timeline, and delivery cadence for your
                  objectives.
                </p>
              </div>
              <div className="space-y-6 rounded-2xl border border-orange-500/30 bg-white/5 p-8">
                {[
                  "Strategic discovery + feasibility studies",
                  "Creative direction + master planning",
                  "Turnkey production + show control",
                  "Ongoing optimization + training",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <span className="h-2 w-2 rounded-full bg-orange-500" />
                    <p className="text-lg text-gray-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section>
        <div className="container">
          <FadeUp>
            <div className="rounded-3xl border border-orange-200 bg-gradient-to-r from-orange-50 via-white to-orange-100 p-12 text-center shadow-sm dark:border-neutral-800 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Ready to craft your next cultural landmark?
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Collaborate with Lightgate to build experiences that inspire audiences and deliver
                long-term value.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-white transition hover:bg-orange-600"
                >
                  Start a Project
                </a>
                <a
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-orange-200 px-8 py-4 text-orange-600 transition hover:border-orange-400 dark:border-neutral-700 dark:text-orange-300"
                >
                  Explore Work
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
