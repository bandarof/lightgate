import { FadeUp } from "@/components/Motion";
import Hero from "@/components/Hero";
import Image from "next/image";

const ركائز = [
  {
    title: "ثقافة عالمية",
    description: "نحتفي بالتنوع ونصمم منصات تجمع المجتمعات عبر الفنون.",
  },
  {
    title: "تجارب غامرة",
    description: "تجارب متعددة الحواس مدعومة بالتقنية والقصص المحلية.",
  },
  {
    title: "تشغيل احترافي",
    description: "منهجيات إنتاج تضمن جودة التنفيذ والاستدامة طويلة الأمد.",
  },
];

const برامج = [
  {
    title: "المنصة العالمية",
    description: "شبكة مهرجانات مترابطة بسردية واحدة.",
    image: "/global.jpg",
  },
  {
    title: "مسارات التراث",
    description: "رحلات ثقافية تعيد إحياء الفنون والحرف التقليدية.",
    image: "/culture.jpg",
  },
  {
    title: "ليالي الضوء",
    description: "عروض ليلية تجمع الإبداع البصري بالموسيقى الحية.",
    image: "/milestone-walk.jpg",
  },
];

export default function ArabicHome() {
  useCounters();

  return (
    <main dir="rtl">
      <Hero
        title="نضيء العالم من خلال الثقافة"
        subtitle="لايتجيت منصة ثقافية عالمية تجمع الناس عبر تجارب احتفالية غير مسبوقة."
        image="/home.jpg"
      />

      <div className="h-32"></div>

      <section className="manifesto">
        <FadeUp>
          <div className="container text-right">
            <h2>الثقافة هي البنية التحتية</h2>
            <p>
              نصمم أنظمة ثقافية تشكل طريقة تواصل الناس وتجربتهم وتخيلهم للمستقبل. نعمل مع المدن
              والمؤسسات لإطلاق وجهات تعكس الهوية وتخلق أثرًا اقتصاديًا واجتماعيًا.
            </p>

            <p className="mt-10 text-xl text-gray-600 dark:text-gray-400">
              نبني تجربة احتفالية فريدة تمزج التقنية بالحجم الضخم وبمفهوم لم يُسبق له مثيل.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ================= NUMBERS ================= */}
      <section className="relative py-32">
        <Image src="/culture.jpg" alt="الثقافة" fill className="object-cover" priority />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 container mx-auto px-6 text-white">
          <FadeUp>
            <div className="text-center mb-20">
              <span className="tracking-widest opacity-70">نحن بالأرقام</span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                <span className="text-orange-500">الأرقام</span>
              </h2>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-4 gap-16 text-center">
            <div>
              <span className="counter text-5xl font-bold text-orange-500" data-target="2000000">
                0
              </span>
              <p className="mt-3 opacity-80">إيرادات</p>
            </div>

            <div>
              <span
                className="counter text-5xl font-bold text-orange-500"
                data-target="15"
                data-suffix="+"
              >
                0
              </span>
              <p className="mt-3 opacity-80">مشروع سنويًا</p>
            </div>

            <div>
              <span
                className="counter text-5xl font-bold text-orange-500"
                data-target="26"
                data-suffix="Y+"
              >
                0
              </span>
              <p className="mt-3 opacity-80">سنوات خبرة</p>
            </div>

            <div>
              <span
                className="counter text-5xl font-bold text-orange-500"
                data-target="6"
                data-suffix="+"
              >
                0
              </span>
              <p className="mt-3 opacity-80">شراكات عالمية</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= THE PROCESS & FLAGSHIP EXPERIENCES ================= */}
      <section className="relative py-32 bg-white dark:bg-neutral-900 overflow-hidden">
        <FlagshipBackground />

        <div className="relative z-10 container mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-orange-500">المنهجية</span>
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                نهج منظم يضمن تنفيذ كل مشروع بدقة وإبداع وتميز منذ الفكرة وحتى التسليم.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-4 gap-8 mb-32">
            {[
              {
                step: "01",
                title: "الإحاطة والتخطيط",
                description:
                  "نلتقط الأهداف ونصمم لوحة الرؤية لضمان خطة متكاملة قبل بدء التنفيذ.",
                image: "/process-briefing.jpg",
              },
              {
                step: "02",
                title: "التنفيذ",
                description:
                  "نحوّل التصميم إلى واقع مع مرونة في التعديلات وبالتعاون مع العميل.",
                image: "/process-execution.jpg",
              },
              {
                step: "03",
                title: "التحسين النهائي",
                description:
                  "مراجعات دقيقة وتعديلات أخيرة لضمان أعلى معايير الجودة.",
                image: "/process-finalization.jpg",
              },
              {
                step: "04",
                title: "التسليم",
                description:
                  "نسلم المشروع قبل الفعالية مع فحص نهائي لضمان رضا كامل.",
                image: "/process-delivery.jpg",
              },
            ].map((item, index) => (
              <FadeUp key={item.title} delay={index * 0.05}>
                <div className="relative group h-full">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                  <div className="relative bg-white dark:bg-neutral-800 rounded-xl p-8 border border-gray-200 dark:border-neutral-700 group-hover:border-orange-500/50 group-hover:shadow-[0_0_30px_rgba(255,115,0,0.15)] transition-all duration-500 h-full flex flex-col">
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,115,0,0.8)] transition-all duration-500">
                      {item.step}
                    </div>

                    <div className="w-full h-48 mb-6 rounded-xl overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    <h3 className="text-xl font-bold text-center mb-4 text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-500 flex-shrink-0">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-center flex-grow">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold">
                تجارب <span className="text-orange-500">ريادية</span>
              </h2>

              <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                تجارب ضخمة تصنع الثقافة وتعيد تعريف الترفيه على نطاق عالمي.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {[
              { img: "/experience-1.jpg", title: "مهرجانات غامرة", sub: "فعاليات ثقافية كبرى" },
              { img: "/experience-2.jpg", title: "تقنيات تفاعلية", sub: "تجارب مستقبلية" },
              { img: "/experience-3.jpg", title: "منصات ثقافية", sub: "مساحات إبداع عالمية" },
            ].map((card) => (
              <FadeUp key={card.title}>
                <div className="group relative h-[450px] overflow-hidden rounded-2xl border-2 border-transparent hover:border-orange-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,115,0,0.3)]">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <Image src={card.img} alt={card.title} fill className="object-cover group-hover:scale-110 transition duration-700" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  <div className="absolute bottom-8 right-8 text-white text-right">
                    <h3 className="text-2xl font-bold">{card.title}</h3>
                    <p className="mt-2 opacity-80">{card.sub}</p>
                  </div>

                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-500/0 group-hover:border-orange-500 group-hover:shadow-[0_0_10px_rgba(255,115,0,0.8)] transition-all duration-500 rounded-tl-2xl" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-orange-500/0 group-hover:border-orange-500 group-hover:shadow-[0_0_10px_rgba(255,115,0,0.8)] transition-all duration-500 rounded-tr-2xl" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-orange-500/0 group-hover:border-orange-500 group-hover:shadow-[0_0_10px_rgba(255,115,0,0.8)] transition-all duration-500 rounded-bl-2xl" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-500/0 group-hover:border-orange-500 group-hover:shadow-[0_0_10px_rgba(255,115,0,0.8)] transition-all duration-500 rounded-br-2xl" />
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <div className="text-center">
              <Link
                href="/ar/portfolio"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium text-lg hover:from-orange-600 hover:to-orange-700 hover:shadow-[0_0_30px_rgba(255,115,0,0.5)] transform hover:-translate-y-1 transition-all duration-300"
              >
                استكشف أعمالنا
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                اكتشف مجموعة متكاملة من التجارب الثقافية الضخمة
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section>
        <div className="container">
          <FadeUp>
            <div className="grid gap-10 lg:grid-cols-3">
              {ركائز.map((item) => (
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
                برامج مميزة
              </span>
              <h2 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">
                تجارب تتنقل بين القارات بروح واحدة
              </h2>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                نبني منصات ثقافية قابلة للتوسع، تجمع بين التراث والابتكار في كل مدينة.
              </p>
            </div>
          </FadeUp>

          <div className="mt-16 grid gap-10 lg:grid-cols-3">
            {برامج.map((program) => (
              <FadeUp key={program.title}>
                <div className="h-full overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm text-right dark:border-neutral-800 dark:bg-neutral-950">
                  <div className="relative h-52">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {program.title}
                    </h3>
                    <p className="mt-3 text-gray-600 dark:text-gray-300">
                      {program.description}
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
                هل ترغب في إطلاق تجربة ثقافية جديدة؟
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                فريق لايتجيت جاهز لدعمك في التخطيط والإنتاج والتنفيذ.
              </p>
              <div className="mt-8 flex flex-col justify-end gap-4 sm:flex-row">
                <a
                  href="/ar/contact"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-white transition hover:bg-orange-600"
                >
                  ابدأ الآن
                </a>
                <a
                  href="/ar/services"
                  className="inline-flex items-center justify-center rounded-full border border-orange-200 px-8 py-4 text-orange-600 transition hover:border-orange-400 dark:border-neutral-700 dark:text-orange-300"
                >
                  تعرف على خدماتنا
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
