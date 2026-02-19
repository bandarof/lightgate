"use client";

import { FadeUp } from "@/components/Motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Film, Camera, Palette, Radio, Sparkles, Users } from "lucide-react";

// Service categories from PDF
const mediaServices = [
  {
    title: "وسائل التواصل والتسويق الرقمي",
    description: "استراتيجيات وسائط اجتماعية شاملة وحملات تسويق رقمية مؤثرة",
    icon: Radio
  },
  {
    title: "التصوير والفيديوجرافيا الإبداعية",
    description: "إنتاج محتوى بصري عالي الجودة للعروض والفعاليات",
    icon: Camera
  },
  {
    title: "التصميم الإبداعي",
    description: "هوية بصرية قوية وتصاميم مخصصة لعلاماتك التجارية",
    icon: Palette
  },
  {
    title: "إنتاج الصوت والموسيقى",
    description: "تأليف الموسيقى والتعليق الصوتي والإنتاج الصوتي الاحترافي",
    icon: Radio
  }
];

const eventServices = [
  {
    title: "الفعاليات التوقيعية",
    description: "فعاليات ضخمة تترك انطباعات دائمة وتحقق تأثيرًا عالميًا",
    icon: Sparkles
  },
  {
    title: "فعاليات الشركات",
    description: "تجارب فريدة لإطلاقات المنتجات والاجتماعات والاحتفالات",
    icon: Users
  },
  {
    title: "ذكريات الشركات",
    description: "احتفالات سنويات مؤثرة وحافلة بالإثارة والابتكار",
    icon: Film
  },
  {
    title: "المناسبات الثقافية",
    description: "فعاليات تراثية تحتفي بالهويات والفنون المحلية",
    icon: Sparkles
  }
];

// Process steps from PDF
const processSteps = [
  {
    number: "01",
    title: "الإحاطة والعصف الذهني",
    description: "التعاون على لوحة الرؤية لالتقاط الأهداف والمفاهيم والتفاصيل الرئيسية",
    icon: Radio
  },
  {
    number: "02",
    title: "التنفيذ",
    description: "جعل التصميم المعتمد واقعًا مع التعديلات والتعاون المستمر",
    icon: Film
  },
  {
    number: "03",
    title: "الإنهاء والتحسين",
    description: "مراجعة الجودة والتركيب النهائي وضمان معايير عالية",
    icon: Palette
  },
  {
    number: "04",
    title: "التسليم",
    description: "تسليم المشروع النهائي مع ضمان رضا العميل الكامل",
    icon: Sparkles
  }
];

export default function ServicesAr() {
  return (
    <main dir="rtl" className="bg-white dark:bg-neutral-950">
      
      {/* ================= HERO ================= */}
      <section
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url(/services.jpg)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

        <div className="relative z-10 container mx-auto px-6 text-white text-right">
          <FadeUp>
            <div className="max-w-3xl ml-auto">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                خدماتنا
                <br />
                <span className="text-orange-500">الشاملة</span>
              </h1>

              <p className="mt-8 max-w-2xl text-xl opacity-90">
                أنظمة ثقافية متكاملة من المفهوم إلى التشغيل، استراتيجية وسينمائية وموجهة نحو الجماهير العالمية.
              </p>

              <div className="mt-12">
                <Link
                  href="/ar/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 
                           rounded-full bg-gradient-to-r from-orange-500 to-orange-600
                           text-white font-medium text-lg
                           hover:from-orange-600 hover:to-orange-700
                           hover:shadow-[0_0_30px_rgba(255,115,0,0.5)]
                           transform hover:-translate-y-1
                           transition-all duration-300"
                >
                  استفسر الآن
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= MEDIA SERVICES ================= */}
      <section className="relative py-32 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold">
                خدمات <span className="text-orange-500">الإعلام</span>
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                محتوى وسائط متكامل يجمع بين الإبداع والتقنية
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mediaServices.map((service) => {
              const Icon = service.icon;
              return (
                <FadeUp key={service.title}>
                  <div className="relative group h-full">
                    <div className="relative bg-white dark:bg-neutral-800 rounded-xl p-8 border border-gray-200 dark:border-neutral-700 group-hover:border-orange-500/50 group-hover:shadow-[0_0_30px_rgba(255,115,0,0.15)] transition-all duration-500 h-full flex flex-col text-right">
                      <Icon className="w-12 h-12 text-orange-500 mb-4 ml-auto group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 flex-grow">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= EVENT SERVICES ================= */}
      <section className="relative py-32 bg-gray-50 dark:bg-neutral-900">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold">
                خدمات <span className="text-orange-500">الفعاليات</span>
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                فعاليات استثنائية تترك تأثيرات دائمة
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventServices.map((service) => {
              const Icon = service.icon;
              return (
                <FadeUp key={service.title}>
                  <div className="relative group h-full">
                    <div className="relative bg-white dark:bg-neutral-800 rounded-xl p-8 border border-gray-200 dark:border-neutral-700 group-hover:border-orange-500/50 group-hover:shadow-[0_0_30px_rgba(255,115,0,0.15)] transition-all duration-500 h-full flex flex-col text-right">
                      <Icon className="w-12 h-12 text-orange-500 mb-4 ml-auto group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 flex-grow">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="relative py-32 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-orange-500">عملية</span> العمل
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                منهجية متقنة لضمان النجاح في كل مرحلة
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <FadeUp key={step.number}>
                  <div className="relative group h-full">
                    <div className="relative bg-white dark:bg-neutral-800 rounded-xl p-8 border border-gray-200 dark:border-neutral-700 group-hover:border-orange-500/50 group-hover:shadow-[0_0_30px_rgba(255,115,0,0.15)] transition-all duration-500 h-full flex flex-col text-right">
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div className="text-3xl font-bold text-orange-500 flex-shrink-0">
                          {step.number}
                        </div>
                        <Icon className="w-8 h-8 text-orange-500" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="relative py-32 bg-gradient-to-br from-orange-500/10 via-orange-500/5 to-orange-500/10">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="max-w-3xl mx-auto text-right">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                لماذا <span className="text-orange-500">لايتجيت</span>؟
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-neutral-800 p-8 rounded-xl border border-gray-200 dark:border-neutral-700">
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    خبرة عميقة
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    26 سنة من الخبرة في صناعة الأحداث والإعلام والثقافة
                  </p>
                </div>

                <div className="bg-white dark:bg-neutral-800 p-8 rounded-xl border border-gray-200 dark:border-neutral-700">
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    فريق عالمي
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    متخصصون من مختلف الدول والتخصصات يعملون بانسجام
                  </p>
                </div>

                <div className="bg-white dark:bg-neutral-800 p-8 rounded-xl border border-gray-200 dark:border-neutral-700">
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    شراكات استراتيجية
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    تعاون مع أفضل المزودين والشركات العالمية
                  </p>
                </div>

                <div className="bg-white dark:bg-neutral-800 p-8 rounded-xl border border-gray-200 dark:border-neutral-700">
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    نتائج مثبتة
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    15+ مشروع ناجح سنويًا مع عملاء راضين من حول العالم
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-32 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-16 text-white text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                هل أنت مستعد لتحويل رؤيتك إلى واقع؟
              </h2>
              <p className="text-lg mb-10 opacity-90">
                دعنا نساعدك في إنشاء تجربة ثقافية استثنائية
              </p>
              <Link
                href="/ar/contact"
                className="inline-flex items-center gap-3 px-10 py-4 
                         rounded-full bg-white text-orange-500
                         font-medium text-lg
                         hover:bg-gray-100
                         transition-all duration-300"
              >
                تواصل معنا الآن
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

    </main>
  );
}
