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
          </div>
        </FadeUp>
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
