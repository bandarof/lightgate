import { FadeUp } from "@/components/Motion";
import Image from "next/image";

const القيم = [
  {
    title: "رسالتنا",
    description:
      "توحيد ثقافات العالم عبر تجارب احتفالية مدعومة بالتقنية وتفاعل إنساني أصيل.",
  },
  {
    title: "رؤيتنا",
    description:
      "أن نصبح المنصة الثقافية الأولى عالميًا لتجارب لا تُنسى تجمع الناس والفنون والتراث.",
  },
  {
    title: "وعدنا",
    description:
      "تصميم منظومات ثقافية تعزز الانتماء، وتُبرز هوية المكان، وتخلق أثرًا مستدامًا.",
  },
];

const المعالم = [
  {
    title: "ولادة لايتجيت",
    description: "إطلاق الرؤية كمنصة تجمع الاحتفالات العالمية.",
    image: "/milestone-birth.jpg",
  },
  {
    title: "الشراكات الدولية",
    description: "تحالفات مع منتجين عالميين وشبكات ثقافية متنوعة.",
    image: "/milestone-international.jpg",
  },
  {
    title: "المسؤولية المجتمعية",
    description: "برامج مستدامة تُعزز الثقافة والتعليم والمشاركة المجتمعية.",
    image: "/milestone-csr.jpg",
  },
];

export default function AboutAr() {
  return (
    <main dir="rtl">
      <section className="hero min-h-screen flex items-center">
        <img src="/about.jpg" className="hero-bg" alt="من نحن" />

        <FadeUp>
          <div className="container text-right">
            <h1 className="text-6xl font-bold">من نحن</h1>
            <p className="mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-300">
              لايتجيت منصة ثقافية عالمية تعيد تعريف الترفيه من خلال التجارب الغامرة والاحتفالات
              المتعددة الثقافات.
            </p>
          </div>
        </FadeUp>
      </section>

      <section>
        <div className="container">
          <FadeUp>
            <div className="grid gap-10 lg:grid-cols-3">
              {القيم.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm text-right dark:border-neutral-800 dark:bg-neutral-950"
                >
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
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
            <div className="max-w-3xl text-right">
              <span className="text-sm uppercase tracking-[0.3em] text-orange-500">
                رحلتنا
              </span>
              <h2 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">
                خطوات بارزة في بناء المنصة الثقافية
              </h2>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                نستثمر في الشراكات والإبداع والتشغيل المتقن لبناء منظومة ثقافية عالمية.
              </p>
            </div>
          </FadeUp>

          <div className="mt-16 grid gap-10 lg:grid-cols-3">
            {المعالم.map((milestone) => (
              <FadeUp key={milestone.title}>
                <div className="h-full overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm text-right dark:border-neutral-800 dark:bg-neutral-950">
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
            <div className="rounded-3xl border border-orange-200 bg-gradient-to-r from-orange-50 via-white to-orange-100 p-12 text-right shadow-sm dark:border-neutral-800 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                هل ترغب في العمل معنا؟
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                اكتشف كيف يمكن للايتجيت أن تساعد في تطوير وجهتك الثقافية القادمة.
              </p>
              <a
                href="/ar/contact"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-white transition hover:bg-orange-600"
              >
                تواصل معنا
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
