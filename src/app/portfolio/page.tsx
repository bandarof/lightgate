import { FadeUp } from "@/components/Motion";
import Image from "next/image";

const projects = [
  {
    title: "Flagship Festival Concepts",
    description:
      "Signature cultural platforms that unify global traditions with regional storytelling.",
    image: "/experience-1.jpg",
  },
  {
    title: "Immersive Experience Worlds",
    description:
      "Multi-sensory environments, digital layers, and kinetic installations for audiences.",
    image: "/experience-2.jpg",
  },
  {
    title: "Large-Scale Cultural Activations",
    description:
      "City-wide activations that transform public spaces into celebratory destinations.",
    image: "/experience-3.jpg",
  },
];

const metrics = [
  { label: "Festival Zones Designed", value: "35+" },
  { label: "Production Partners Managed", value: "120+" },
  { label: "Audience Touchpoints", value: "1.8M" },
  { label: "Countries Collaborated", value: "18" },
];

const showcase = [
  {
    title: "Global Heritage Corridor",
    description:
      "An interconnected journey of regional narratives, showcasing culinary, craft, and performance legacies.",
    image: "/global.jpg",
  },
  {
    title: "Cultural Innovation Lab",
    description:
      "A hub for emerging creatives blending immersive technology with heritage preservation.",
    image: "/culture.jpg",
  },
  {
    title: "Destination Night Parade",
    description:
      "A choreographed procession with light, sound, and kinetic installations across public plazas.",
    image: "/milestone-walk.jpg",
  },
];

export default function Portfolio() {
  return (
    <main>
      <section className="hero min-h-screen flex items-center">
        <img src="/portfolio.jpg" className="hero-bg" alt="Portfolio" />

        <FadeUp>
          <div className="container">
            <h1 className="text-6xl font-bold">
              Selected <span className="text-orange-500">Work</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-300">
              A curated look at the cultural ecosystems and flagship experiences we build for
              partners worldwide.
            </p>
          </div>
        </FadeUp>
      </section>

      <section>
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-3">
            {projects.map((project) => (
              <FadeUp key={project.title}>
                <div className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-950">
                  <div className="relative h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">{project.description}</p>
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
            <div className="grid gap-10 lg:grid-cols-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
                >
                  <p className="text-4xl font-bold text-orange-400">{metric.value}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.3em] text-gray-300">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section>
        <div className="container">
          <FadeUp>
            <div className="max-w-3xl">
              <span className="text-sm uppercase tracking-[0.3em] text-orange-500">
                Highlighted Programs
              </span>
              <h2 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">
                Cultural storytelling brought to life
              </h2>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                We partner with ministries, destination developers, and cultural institutions to
                create flagship experiences that connect visitors with local heritage.
              </p>
            </div>
          </FadeUp>

          <div className="mt-16 grid gap-10 lg:grid-cols-3">
            {showcase.map((item) => (
              <FadeUp key={item.title}>
                <div className="h-full rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950">
                  <div className="relative h-44 overflow-hidden rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 dark:bg-neutral-900/60">
        <div className="container">
          <FadeUp>
            <div className="rounded-3xl border border-neutral-200 bg-white p-12 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                    Let&apos;s build the next cultural landmark
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    Share your vision and we will craft a portfolio-worthy experience for your
                    audiences.
                  </p>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-white transition hover:bg-orange-600"
                >
                  Connect with us
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
