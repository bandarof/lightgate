"use client";

import { FadeUp } from "@/components/Motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const values = [
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

const milestones = [
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

const leadership = [
  {
    name: "جاسم السعدي",
    role: "الإبداع والإخراج",
    image: "/team-jassim.jpg",
  },
  {
    name: "علاء أبو زيد",
    role: "التشغيل والإنتاج",
    image: "/team-alaa.png",
  },
  {
    name: "سارة الزهراني",
    role: "الاستراتيجية والشراكات",
    image: "/team-sara.png",
  },
];

export default function AboutAr() {
  return (
    <main dir="rtl" className="bg-white dark:bg-neutral-950">
      {/* ================= HERO ================= */}
      <section
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url(/about.jpg)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

        <div className="relative z-10 container mx-auto px-6 text-white text-right">
          <FadeUp>
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm font-medium mb-6">
                من نحن
              </span>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                نضيء العالم
                <br />
                عبر <span className="text-orange-500">الثقافة</span>
              </h1>

              <p className="mt-8 max-w-2xl text-xl opacity-90">
                منصة ثقافية عالمية تعيد تعريف الترفيه عبر التقنية والحجم والابتكار.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-6 justify-end">
                <Link
                  href="/ar/portfolio"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium text-lg hover:from-orange-600 hover:to-orange-700 hover:shadow-[0_0_30px_rgba(255,115,0,0.5)] transform hover:-translate-y-1 transition-all duration-300"
                >
                  استعرض أعمالنا
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/ar/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-transparent border-2 border-white/30 text-white font-medium text-lg hover:border-orange-500 hover:text-orange-500 hover:shadow-[0_0_30px_rgba(255,115,0,0.3)] transition-all duration-300"
                >
                  تواصل معنا
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="relative py-32 bg-white dark:bg-neutral-900">
        <div className="relative z-10 container mx-auto px-6">
          <FadeUp>
            <div className="text-right max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                لماذا <span className="text-orange-500">لايتجيت</span>؟
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                نعمل مع المدن والمؤسسات لبناء منصات ثقافية تنبض بالحياة وتترك أثرًا طويل الأمد.
              </p>
            </div>
          </FadeUp>

          <div className="mt-16 grid gap-10 lg:grid-cols-3">
            {values.map((item) => (
              <FadeUp key={item.title}>
                <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm text-right dark:border-neutral-800 dark:bg-neutral-950">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MILESTONES ================= */}
      <section className="bg-neutral-50 dark:bg-neutral-900/60">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="text-right max-w-3xl">
              <span className="text-sm uppercase tracking-[0.3em] text-orange-500">رحلتنا</span>
              <h2 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">
                خطوات بارزة في بناء المنصة الثقافية
              </h2>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                نستثمر في الشراكات والإبداع والتشغيل المتقن لبناء منظومة ثقافية عالمية.
              </p>
            </div>
          </FadeUp>

          <div className="mt-16 grid gap-10 lg:grid-cols-3">
            {milestones.map((milestone) => (
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

      {/* ================= LEADERSHIP ================= */}
      <section>
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="text-right max-w-2xl">
                <span className="text-sm uppercase tracking-[0.3em] text-orange-500">القيادة</span>
                <h2 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">
                  فريق يقود التجربة الثقافية عالميًا
                </h2>
              </div>
              <p className="max-w-xl text-lg text-gray-600 dark:text-gray-300 text-right">
                نخبة من الخبراء في الإنتاج والإبداع والاستراتيجية يعملون لصناعة تجارب لا تُنسى.
              </p>
            </div>
          </FadeUp>

          <div className="mt-16 grid gap-10 lg:grid-cols-3">
            {leadership.map((leader) => (
              <FadeUp key={leader.name}>
                <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm text-right dark:border-neutral-800 dark:bg-neutral-950">
                  <div className="relative h-56 overflow-hidden rounded-2xl">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                    {leader.name}
                  </h3>
                  <p className="mt-2 text-orange-500 font-medium">{leader.role}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section>
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="rounded-3xl border border-orange-200 bg-gradient-to-r from-orange-50 via-white to-orange-100 p-12 text-right shadow-sm dark:border-neutral-800 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                هل ترغب في العمل معنا؟
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                اكتشف كيف يمكن للايتجيت أن تساعد في تطوير وجهتك الثقافية القادمة.
              </p>
              <Link
                href="/ar/contact"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-white transition hover:bg-orange-600"
              >
                تواصل معنا
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
