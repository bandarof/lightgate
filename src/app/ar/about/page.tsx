"use client";

import React from "react";
import { FadeUp } from "@/components/Motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Eye, Users, Award, TrendingUp, Lightbulb } from "lucide-react";

// Translation data from PDF
const sections = {
  about: "من نحن",
  history: "رحلتنا",
  mission: "مهمتنا",
  vision: "رؤيتنا",
  goals: "أهدافنا",
  milestones: "المعالم البارزة",
  numbers: "أرقامنا",
  team: "الفريق",
  partners: "الشركاء الاستراتيجيون",
  contact: "اتصل بنا",
};

// Milestones data from PDF
const milestones = [
  {
    year: "2009",
    title: "الميلاد",
    description: "بداية رحلة لايتجيت كمنصة ثقافية عالمية",
    image: "/milestone-birth.jpg"
  },
  {
    year: "2011",
    title: "المجتمع الخارجي والرحلات",
    description: "تطوير برامج الرحلات الثقافية والمغامرات",
    image: "/milestone-hiking.jpg"
  },
  {
    year: "2013",
    title: "حدث Peace Boat",
    description: "استضافة حدث تبادل ثقافي عالمي",
    image: "/milestone-peace.jpg"
  },
  {
    year: "2014",
    title: "برامج المسؤولية الاجتماعية",
    description: "إطلاق مبادرات تأثير اجتماعي",
    image: "/milestone-csr.jpg"
  },
  {
    year: "2015",
    title: "مسيرة من أجل قضية",
    description: "تنظيم فعاليات خيرية للمجتمعات",
    image: "/milestone-walk.jpg"
  },
  {
    year: "2017",
    title: "الحضور الدولي",
    description: "توسع عمليات لايتجيت إلى الأسواق العالمية",
    image: "/milestone-international.jpg"
  },
  {
    year: "2025",
    title: "SPAR قادم قريباً",
    description: "إطلاق مشروع ثقافي ضخم جديد",
    image: "/milestone-spar.jpg"
  }
];

// Numbers from PDF
const statistics = [
  {
    number: "2 M+",
    label: "الإيرادات",
    icon: TrendingUp
  },
  {
    number: "15+",
    label: "مشروع سنويًا",
    icon: Lightbulb
  },
  {
    number: "26 Y+",
    label: "خبرة في الفعاليات",
    icon: Award
  },
  {
    number: "6+",
    label: "شراكات عالمية",
    icon: Users
  }
];

// Services from PDF
const services = {
  media: [
    "وسائل التواصل الاجتماعي والتسويق الرقمي",
    "التصوير والفيديوجرافي الإبداعي",
    "التصميم الإبداعي",
    "إنتاج الصوت والموسيقى"
  ],
  events: [
    "الفعاليات التوقيعية",
    "فعاليات الشركات",
    "ذكريات الشركات",
    "المناسبات الثقافية"
  ]
};

// Process steps from PDF
const processSteps = [
  {
    number: "01",
    title: "الإحاطة والعصف الذهني",
    description: "نتعاون على لوحة رؤية لالتقاط الأهداف والمفاهيم التصميمية والتفاصيل الرئيسية."
  },
  {
    number: "02",
    title: "التنفيذ",
    description: "نجعل التصميم المعتمد واقعًا، مع إجراء التعديلات اللازمة بالتعاون مع العميل."
  },
  {
    number: "03",
    title: "الإنهاء",
    description: "نجري فحص الجودة والتركيب النهائي، مع التأكد من معايير عالية."
  },
  {
    number: "04",
    title: "التسليم",
    description: "نسلم المنتج النهائي قبل الحدث بأسبوع على الأقل مع الفحص النهائي."
  }
];

// Team members from PDF (translations)
const teamMembers = [
  { name: "أمير الرمّاوي", title: "المؤسس والمدير التنفيذي" },
  { name: "لؤي الحجازي", title: "الشريك والمسؤول التشغيلي" },
  { name: "علاء تمار", title: "منتج المحتوى" },
  { name: "آية الرمّاوي", title: "مديرة المحتوى" },
  { name: "معيز رحمان", title: "رئيس الإنتاج الإعلامي" },
  { name: "سارة الغبراء", title: "المنتج" },
  { name: "محمد يماني", title: "تطوير الأعمال" },
  { name: "محمد طيار", title: "التفعيل الرقمي" },
  { name: "وسام كردي", title: "عمليات الأعمال" }
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
            <div className="max-w-3xl ml-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm font-medium mb-6">
                من نحن
              </span>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                نضيء العالم
                <br />
                عبر <span className="text-orange-500">الثقافة</span>
              </h1>

              <p className="mt-8 max-w-2xl text-xl opacity-90 mr-auto">
                ظاهرة عالمية تعيد تعريف الترفيه من خلال التكنولوجيا الرائدة والحجم غير المسبوق والمفاهيم الاحتفالية المبتكرة.
              </p>

              <div className="mt-12 flex items-center gap-6 justify-end">
                <Link
                  href="/ar/portfolio"
                  className="inline-flex items-center gap-3 px-8 py-4 
                           rounded-full bg-gradient-to-r from-orange-500 to-orange-600
                           text-white font-medium text-lg
                           hover:from-orange-600 hover:to-orange-700
                           hover:shadow-[0_0_30px_rgba(255,115,0,0.5)]
                           transform hover:-translate-y-1
                           transition-all duration-300"
                >
                  شاهد أعمالنا
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/ar/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 
                           rounded-full bg-transparent border-2 border-white/30
                           text-white font-medium text-lg
                           hover:border-orange-500 hover:text-orange-500
                           hover:shadow-[0_0_30px_rgba(255,115,0,0.3)]
                           transition-all duration-300"
                >
                  تواصل معنا
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= ABOUT INTRO ================= */}
      <section className="relative py-28 bg-white dark:bg-neutral-900 overflow-hidden">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="max-w-3xl mx-auto text-right">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-orange-500">لايتجيت</span> ليست مجرد منظم فعاليات
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                إنها ظاهرة عالمية ستعيد تعريف الترفيه. نحن نبني تجربة احتفالية فريدة تجمع بين التكنولوجيا الرائدة والحجم غير المسبوق ومفاهيم الفعاليات المبتكرة التي لم تُرَ من قبل.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="relative py-32 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* MISSION */}
            <FadeUp>
              <div className="relative group">
                <div className="relative bg-white dark:bg-neutral-800 rounded-2xl p-10 
                              border border-gray-200 dark:border-neutral-700
                              group-hover:border-orange-500/50
                              group-hover:shadow-[0_0_30px_rgba(255,115,0,0.15)]
                              transition-all duration-500 h-full text-right">
                  
                  <div className="flex items-center justify-end gap-3 mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                      <span className="text-orange-500">المهمة</span> التي نسعى لها
                    </h2>
                    <Target className="w-10 h-10 text-orange-500" />
                  </div>

                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    تحويل الترفيه الثقافي من خلال توحيد أيقونات العالم الاحتفالية في تجربة غامرة واحدة يدفعها التكنولوجيا، احتفاءً بالتنوع العالمي وإلهام الاتصال وخلق لحظات لا تُنسى للجماهير في كل مكان.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* VISION */}
            <FadeUp>
              <div className="relative group">
                <div className="relative bg-white dark:bg-neutral-800 rounded-2xl p-10 
                              border border-gray-200 dark:border-neutral-700
                              group-hover:border-orange-500/50
                              group-hover:shadow-[0_0_30px_rgba(255,115,0,0.15)]
                              transition-all duration-500 h-full text-right">
                  
                  <div className="flex items-center justify-end gap-3 mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                      <span className="text-orange-500">الرؤية</span> الموحدة
                    </h2>
                    <Eye className="w-10 h-10 text-orange-500" />
                  </div>

                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    أن نصبح منصة الفعاليات الثقافية الرائدة عالميًا، محولين كيفية تفاعل الناس مع الفن والموسيقى والتراث من خلال مزج الابتكار والحجم والوحدة في احتفال عالمي استثنائي.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ================= OUR HISTORY ================= */}
      <section className="relative py-32 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-orange-500">رحلتنا</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                من رؤية جريئة إلى ظاهرة ثقافية عالمية
              </p>
            </div>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="space-y-8 text-right">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent border border-orange-500/10 hover:border-orange-500/50 transition-all duration-500">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">البداية (2009)</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    بدأت لايتجيت برؤية جريئة لإعادة تعريف الترفيه الثقافي من خلال توحيد أشهر المهرجانات العالمية تحت منصة واحدة رائدة. ما بدأ كمفهوم إبداعي نما ليصبح علامة تجارية قوية معروفة بمزج الابتكار والتكنولوجيا والسرد الغامر.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent border border-orange-500/10 hover:border-orange-500/50 transition-all duration-500">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">التطور والنمو</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    مع توسعنا، تطورت لايتجيت إلى شركة خدمات تجارب شاملة، تقدم التصوير الفوتوغرافي والتصميم الإبداعي وتنفيذ الفعاليات على مستوى عالمي. استمرنا في تحطيم الحدود مع الحفاظ على تركيزنا الأساسي على الابتكار الثقافي.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent border border-orange-500/10 hover:border-orange-500/50 transition-all duration-500">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">اليوم وما بعده</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    اليوم، نستمر في تحطيم الحدود وخلق لحظات لا تُنسى تربط الناس والثقافات والأفكار عبر العالم. تمثل لايتجيت شهادة على ما يمكن تحقيقه عندما تلتقي الإبداعة بالتنفيذ على نطاق واسع.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp>
              <div className="relative group">
                <div className="relative h-[600px] rounded-3xl overflow-hidden border-4 border-transparent group-hover:border-orange-500/30 transition-all duration-500">
                  <Image
                    src="/culture.jpg"
                    alt="رحلة لايتجيت"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ================= GOALS ================= */}
      <section className="relative py-32 bg-gradient-to-b from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-950">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-orange-500">أهدافنا</span>
              </h2>
            </div>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-10">
            <FadeUp>
              <div className="relative p-10 rounded-2xl bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(255,115,0,0.15)] transition-all duration-500 text-right">
                <div className="flex items-start justify-end gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                      الهدف الأول: تجربة احتفالية عالمية
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      خلق تجربة احتفالية عالمية رائدة؛ توحيد أيقونات العالم الثقافية الاحتفالية في احتفال كبير غامر واحد يجمع بين الفن والموسيقى والتكنولوجيا والسرد.
                    </p>
                  </div>
                  <div className="text-4xl font-bold text-orange-500 flex-shrink-0">01</div>
                </div>
              </div>
            </FadeUp>

            <FadeUp>
              <div className="relative p-10 rounded-2xl bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(255,115,0,0.15)] transition-all duration-500 text-right">
                <div className="flex items-start justify-end gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                      الهدف الثاني: القيادة الثقافية العالمية
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      وضع لايتجيت كقائدة عالمية في الابتكار الثقافي. تأسيس لايتجيت كمنصة رائدة تربط الناس والثقافات، وتجذب شركاء ومستثمرين ذوي رؤية، وتضع معايير عالمية جديدة للاحتفال الثقافي.
                    </p>
                  </div>
                  <div className="text-4xl font-bold text-orange-500 flex-shrink-0">02</div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ================= MILESTONES TIMELINE ================= */}
      <section className="relative py-32 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-orange-500">المعالم</span> البارزة
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                رحلتنا عبر السنين
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <FadeUp key={milestone.year}>
                <div className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-white dark:bg-neutral-800 rounded-xl overflow-hidden border border-gray-200 dark:border-neutral-700 group-hover:border-orange-500/50 transition-all duration-500 h-full flex flex-col">
                    <div className="relative h-40">
                      <Image
                        src={milestone.image}
                        alt={milestone.title}
                        fill
                        className="object-cover group-hover:scale-110 transition duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 right-3 text-white text-sm font-bold">
                        {milestone.year}
                      </div>
                    </div>
                    <div className="p-4 flex-grow flex flex-col justify-between text-right">
                      <div>
                        <h4 className="font-bold text-gray-800 dark:text-white mb-2">{milestone.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NUMBERS ================= */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 to-black">
        <Image
          src="/global.jpg"
          alt="أرقامنا"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 container mx-auto px-6 text-white text-right">
          <FadeUp>
            <div className="text-center mb-20 max-w-2xl mx-auto ml-auto">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-orange-500">أرقامنا</span> تتحدث
              </h2>
              <p className="mt-4 text-gray-300">
                إنجازاتنا وآثارنا
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {statistics.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <FadeUp key={stat.label}>
                  <div className="group">
                    <div className="flex justify-center mb-4">
                      <Icon className="w-12 h-12 text-orange-500 group-hover:scale-110 transition duration-300" />
                    </div>
                    <p className="text-5xl font-bold mb-2 text-orange-500">{stat.number}</p>
                    <p className="text-gray-300">{stat.label}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="relative py-32 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                خدماتنا <span className="text-orange-500">الشاملة</span>
              </h2>
            </div>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-16">
            <FadeUp>
              <div className="text-right">
                <h3 className="text-2xl font-bold mb-8">
                  <span className="text-orange-500">الإعلام</span> والتسويق
                </h3>
                <ul className="space-y-4">
                  {services.media.map((service) => (
                    <li key={service} className="flex items-start justify-end gap-4">
                      <span className="text-gray-600 dark:text-gray-400">{service}</span>
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            <FadeUp>
              <div className="text-right">
                <h3 className="text-2xl font-bold mb-8">
                  <span className="text-orange-500">الفعاليات</span> والاحتفالات
                </h3>
                <ul className="space-y-4">
                  {services.events.map((service) => (
                    <li key={service} className="flex items-start justify-end gap-4">
                      <span className="text-gray-600 dark:text-gray-400">{service}</span>
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="relative py-32 bg-gray-50 dark:bg-neutral-900">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-orange-500">العملية</span> الإبداعية
              </h2>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <FadeUp key={step.number}>
                <div className="relative group h-full">
                  <div className="relative bg-white dark:bg-neutral-800 rounded-xl p-8 border border-gray-200 dark:border-neutral-700 group-hover:border-orange-500/50 transition-all duration-500 h-full flex flex-col text-right">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">{step.title}</h3>
                      <div className="text-3xl font-bold text-orange-500">{step.number}</div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 flex-grow">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="relative py-32 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                فريقنا <span className="text-orange-500">المميز</span>
              </h2>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <FadeUp key={member.name}>
                <div className="relative group text-center">
                  <div className="relative bg-white dark:bg-neutral-800 rounded-xl p-8 border border-gray-200 dark:border-neutral-700 group-hover:border-orange-500/50 group-hover:shadow-[0_0_30px_rgba(255,115,0,0.15)] transition-all duration-500">
                    <h4 className="text-lg font-bold text-gray-800 dark:text-white">{member.name}</h4>
                    <p className="text-orange-500 text-sm mt-2">{member.title}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}
      <section className="relative py-32 bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-orange-500/10">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-800 rounded-3xl p-16 border border-gray-200 dark:border-neutral-700 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                هل أنت مستعد <span className="text-orange-500">لبدء المغامرة</span>؟
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
                دعنا نساعدك في خلق تجربة ثقافية لا تُنسى
              </p>
              <Link
                href="/ar/contact"
                className="inline-flex items-center gap-3 px-10 py-4 
                         rounded-full bg-gradient-to-r from-orange-500 to-orange-600
                         text-white font-medium text-lg
                         hover:from-orange-600 hover:to-orange-700
                         hover:shadow-[0_0_30px_rgba(255,115,0,0.5)]
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
