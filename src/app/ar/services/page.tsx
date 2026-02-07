import { FadeUp } from "@/components/Motion";
import Image from "next/image";

const الخدمات = [
  {
    title: "تطوير المنصات",
    description: "منصات رقمية وأنظمة ثقافية قابلة للتوسع من الفكرة حتى التشغيل.",
  },
  {
    title: "الهوية والعلامة",
    description: "لغات بصرية وسرديات مكانية تصنع هوية لا تُنسى.",
  },
  {
    title: "الاستراتيجية الثقافية",
    description: "تخطيط طويل الأمد للمؤسسات والمدن والمهرجانات الكبرى.",
  },
  {
    title: "تصميم التجارب",
    description: "مساحات تفاعلية وعروض حية وتجارب متعددة الحواس.",
  },
  {
    title: "الإنتاج والتشغيل",
    description: "إدارة شاملة للعمليات والشركاء والتنفيذ الميداني.",
  },
  {
    title: "القياس والأثر",
    description: "مؤشرات أداء وتحليلات للجمهور وتقارير لأصحاب المصلحة.",
  },
];

const المراحل = [
  {
    title: "الاستكشاف والتخطيط",
    description: "ورش عمل وبحوث سياقية لتحديد الرؤية والنطاق.",
    image: "/process-briefing.jpg",
  },
  {
    title: "الابتكار والسرد",
    description: "صياغة القصص والمسارات التي تقود التجربة بالكامل.",
    image: "/process-execution.jpg",
  },
  {
    title: "الإنتاج والتنفيذ",
    description: "تنسيق الإنتاج واللوجستيات لضمان تجربة سلسة.",
    image: "/process-delivery.jpg",
  },
  {
    title: "الإطلاق والتحسين",
    description: "تدريب الفرق وتحسين الأداء بعد الافتتاح.",
    image: "/process-finalization.jpg",
  },
];

export default function ServicesAr() {
  return (
    <main dir="rtl">
      <section className="hero min-h-screen flex items-center">
        <img src="/services.jpg" className="hero-bg" alt="الخدمات" />

        <FadeUp>
          <div className="container text-right">
            <h1 className="text-6xl font-bold">الخدمات</h1>
            <p className="mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-300">
              أنظمة ثقافية متكاملة من الفكرة حتى التشغيل على نطاق عالمي.
            </p>
          </div>
        </FadeUp>
      </section>

      <section>
        <div className="container grid gap-10 lg:grid-cols-3">
          {الخدمات.map((service) => (
            <FadeUp key={service.title}>
              <div className="space-y-3 text-right">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="bg-neutral-50 dark:bg-neutral-900/60">
        <div className="container">
          <FadeUp>
            <div className="max-w-3xl text-right">
              <span className="text-sm uppercase tracking-[0.3em] text-orange-500">
                منهجيتنا
              </span>
              <h2 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">
                مسار إنتاج واضح من الرؤية إلى الواقع
              </h2>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                نتبع منهجية مرنة تجمع بين الإبداع والدقة التشغيلية لضمان نتائج مستدامة.
              </p>
            </div>
          </FadeUp>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {المراحل.map((step) => (
              <FadeUp key={step.title}>
                <div className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-950">
                  <div className="relative h-56">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-8 text-right">
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

      <section>
        <div className="container">
          <FadeUp>
            <div className="rounded-3xl border border-orange-200 bg-gradient-to-r from-orange-50 via-white to-orange-100 p-12 text-right shadow-sm dark:border-neutral-800 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                ابدأ مشروعك الثقافي القادم
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                دعنا نساعدك في بناء تجربة تستمر وتؤثر في المجتمع.
              </p>
              <div className="mt-8 flex flex-col justify-end gap-4 sm:flex-row">
                <a
                  href="/ar/contact"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-white transition hover:bg-orange-600"
                >
                  تواصل معنا
                </a>
                <a
                  href="/ar/portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-orange-200 px-8 py-4 text-orange-600 transition hover:border-orange-400 dark:border-neutral-700 dark:text-orange-300"
                >
                  أعمالنا
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
