import { FadeUp } from "@/components/Motion";
import Image from "next/image";

const الأعمال = [
  {
    title: "مفاهيم مهرجانات كبرى",
    description: "منصات ثقافية تجمع التراث العالمي بسرديات محلية.",
    image: "/experience-1.jpg",
  },
  {
    title: "تجارب غامرة",
    description: "بيئات تفاعلية متعددة الحواس مصممة للجمهور.",
    image: "/experience-2.jpg",
  },
  {
    title: "تنشيطات حضرية واسعة",
    description: "تحويل المساحات العامة إلى وجهات احتفالية نابضة.",
    image: "/experience-3.jpg",
  },
];

const مؤشرات = [
  { label: "مناطق مهرجانات مصممة", value: "+35" },
  { label: "شركاء إنتاج", value: "+120" },
  { label: "نقاط تواصل جماهيرية", value: "1.8M" },
  { label: "دول تم التعاون معها", value: "+18" },
];

export default function PortfolioAr() {
  return (
    <main dir="rtl">
      <section className="hero min-h-screen flex items-center">
        <img src="/portfolio.jpg" className="hero-bg" alt="الأعمال" />

        <FadeUp>
          <div className="container text-right">
            <h1 className="text-6xl font-bold">الأعمال المختارة</h1>
            <p className="mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-300">
              لمحة عن التجارب الثقافية التي نصممها لشركائنا حول العالم.
            </p>
          </div>
        </FadeUp>
      </section>

      <section>
        <div className="container grid gap-10 lg:grid-cols-3">
          {الأعمال.map((work) => (
            <FadeUp key={work.title}>
              <div className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-950">
                <div className="relative h-64">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-8 text-right">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {work.title}
                  </h3>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">{work.description}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="bg-neutral-950 text-white">
        <div className="container">
          <FadeUp>
            <div className="grid gap-10 lg:grid-cols-4">
              {مؤشرات.map((metric) => (
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
            <div className="rounded-3xl border border-neutral-200 bg-white p-12 shadow-sm text-right dark:border-neutral-800 dark:bg-neutral-950">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                هل ترغب بتجربة ثقافية فريدة؟
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                شاركنا رؤيتك وسنصمم تجربة تليق بجمهورك.
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
