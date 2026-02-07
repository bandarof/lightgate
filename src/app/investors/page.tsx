import Hero from "@/components/Hero";
import { FadeUp } from "@/components/Motion";
import Image from "next/image";

const highlights = [
  {
    title: "Cultural Infrastructure",
    description:
      "Scalable platforms that activate tourism, heritage preservation, and economic impact.",
  },
  {
    title: "Recurring Revenue",
    description:
      "Multi-season programming, licensing, and global partnership models.",
  },
  {
    title: "Government Alignment",
    description:
      "Built to support national vision strategies and destination development goals.",
  },
];

const milestones = [
  {
    title: "Global Festival Network",
    description: "Aligned partners across Europe, Asia, and MENA regions.",
    image: "/milestone-international.jpg",
  },
  {
    title: "Strategic Partnerships",
    description: "Collaborations with top-tier production and technology vendors.",
    image: "/milestone-peaceboat.jpg",
  },
  {
    title: "Sustainable Programming",
    description: "Year-round cultural programming and CSR activation plans.",
    image: "/milestone-csr.jpg",
  },
];

export default function Investors() {
  return (
    <main>
      <Hero
        title="Investors"
        subtitle="Backing long-term cultural infrastructure."
        image="/investors.jpg"
      />

      <section className="py-24">
        <div className="container max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Lightgate is building the next generation of cultural destinations—anchored by immersive
            festivals, digital platforms, and global partnerships. We work with aligned investors to
            scale these ecosystems sustainably.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <FadeUp>
            <div className="grid gap-10 lg:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-neutral-50 dark:bg-neutral-900/60">
        <div className="container">
          <FadeUp>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="text-sm uppercase tracking-[0.3em] text-orange-500">
                  Growth Milestones
                </span>
                <h2 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">
                  Building momentum for global cultural impact
                </h2>
              </div>
              <p className="max-w-xl text-lg text-gray-600 dark:text-gray-300">
                Our investor roadmap focuses on repeatable programming, new market expansion, and
                strategic partnerships that increase audience reach.
              </p>
            </div>
          </FadeUp>

          <div className="mt-16 grid gap-10 lg:grid-cols-3">
            {milestones.map((milestone) => (
              <FadeUp key={milestone.title}>
                <div className="h-full overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
                  <div className="relative h-52">
                    <Image
                      src={milestone.image}
                      alt={milestone.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {milestone.title}
                    </h3>
                    <p className="mt-3 text-gray-600 dark:text-gray-300">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <FadeUp>
            <div className="rounded-3xl border border-neutral-200 bg-white p-12 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                    Private briefings available upon request
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    We share detailed financial models, partnership structures, and rollout
                    strategies for qualified investors.
                  </p>
                  <a
                    href="/contact"
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-white transition hover:bg-orange-600"
                  >
                    Request a briefing
                  </a>
                </div>
                <div className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-orange-100 p-8 dark:border-neutral-800 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900">
                  <p className="text-sm uppercase tracking-[0.3em] text-orange-500">
                    Investor Focus
                  </p>
                  <ul className="mt-6 space-y-4 text-gray-700 dark:text-gray-300">
                    <li>Equity + strategic partnership opportunities</li>
                    <li>Joint ventures for destination development</li>
                    <li>IP licensing and regional expansion</li>
                    <li>Operational oversight and reporting</li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
