"use client";

import { FadeUp } from "@/components/Motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Team members from PDF
const leadership = [
  { name: "أمير الرمّاوي", title: "المؤسس والمدير التنفيذي", role: "FOUNDER & CEO" },
  { name: "لؤي الحجازي", title: "الشريك والمسؤول التشغيلي", role: "PARTNER & COO" }
];

const core_team = [
  { name: "علاء تمار", title: "منتج المحتوى", role: "CONTENT CREATOR" },
  { name: "آية الرمّاوي", title: "مديرة المحتوى", role: "CONTENT DIRECTOR" },
  { name: "معيز رحمان", title: "رئيس الإنتاج الإعلامي", role: "MEDIA PROD. HEAD" },
  { name: "سارة الغبراء", title: "المنتج", role: "PRODUCER" },
  { name: "محمد يماني", title: "تطوير الأعمال", role: "BUS. DEVELOPMENT" },
  { name: "محمد طيار", title: "التفعيل الرقمي", role: "DIGITAL ACTIVATION" },
  { name: "وسام كردي", title: "عمليات الأعمال", role: "BUSINESS OPERATIONS" }
];

// Creative Directors from PDF
const creative_directors = [
  {
    name: "جاسم الساعدي",
    title: "مخرج أفلام وإعلانات",
    description: "مخرج متخصص في الأفلام والإعلانات التجارية",
    website: "www.jassimalsaady.com"
  },
  {
    name: "عماد السيد",
    title: "مدير التصوير - السعودية والإمارات",
    description: "متخصص في التصوير السينمائي والإنتاج الاحترافي",
    website: "www.emadelsayed.com"
  }
];

// Partners from PDF
const partners = [
  { name: "Apex MICE", type: "Partners" },
  { name: "Deep Advertising Agency", type: "Partners" },
  { name: "Yelooish", type: "Partners" },
  { name: "Above Limits", type: "Partners" },
  { name: "Manifest", type: "Partners" },
  { name: "Retrive", type: "Partners" },
  { name: "LAMP Mice Solution", type: "Partners" }
];

const trusted_by = [
  "Tamer",
  "Pepsico",
  "Tetra Pak",
  "Olayan",
  "Zain",
  "Reza Hygiene",
  "BRF",
  "GSK",
  "Kinan",
  "Bupa",
  "Sunblast Group",
  "Nazer"
];

export default function TeamAr() {
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
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                فريقنا <span className="text-orange-500">المميز</span>
              </h1>
              <p className="mt-8 max-w-2xl text-xl opacity-90">
                مجموعة من المحترفين والمبدعين المتفانين في إنشاء تجارب ثقافية استثنائية.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="relative py-32 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-orange-500">القيادة</span>
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                رائدونا في بناء لايتجيت
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {leadership.map((member) => (
              <FadeUp key={member.name}>
                <div className="relative group h-full">
                  <div className="relative bg-white dark:bg-neutral-800 rounded-xl p-12 border border-gray-200 dark:border-neutral-700 group-hover:border-orange-500/50 group-hover:shadow-[0_0_30px_rgba(255,115,0,0.15)] transition-all duration-500 text-right">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-orange-500 font-semibold mb-1">{member.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CORE TEAM ================= */}
      <section className="relative py-32 bg-gray-50 dark:bg-neutral-900">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold">
                فريق <span className="text-orange-500">الأساس</span>
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                المتخصصون الذين يجعلون الأحلام واقعًا
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {core_team.map((member) => (
              <FadeUp key={member.name}>
                <div className="relative group h-full">
                  <div className="relative bg-white dark:bg-neutral-800 rounded-xl p-6 border border-gray-200 dark:border-neutral-700 group-hover:border-orange-500/50 group-hover:shadow-[0_0_30px_rgba(255,115,0,0.15)] transition-all duration-500 text-right">
                    <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
                      {member.name}
                    </h4>
                    <p className="text-orange-500 font-semibold text-sm mb-1">{member.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{member.role}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CREATIVE DIRECTORS ================= */}
      <section className="relative py-32 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold">
                المخرجون <span className="text-orange-500">المبدعون</span>
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                شركاؤنا من المتخصصين الحائزين على جوائز
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-10">
            {creative_directors.map((director) => (
              <FadeUp key={director.name}>
                <div className="relative group h-full">
                  <div className="relative bg-white dark:bg-neutral-800 rounded-xl p-10 border border-gray-200 dark:border-neutral-700 group-hover:border-orange-500/50 group-hover:shadow-[0_0_30px_rgba(255,115,0,0.15)] transition-all duration-500 text-right">
                    <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {director.name}
                    </h4>
                    <p className="text-orange-500 font-semibold mb-3">{director.title}</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {director.description}
                    </p>
                    <a 
                      href={`https://${director.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:text-orange-600 font-semibold text-sm"
                    >
                      {director.website}
                    </a>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PARTNERS ================= */}
      <section className="relative py-32 bg-gray-50 dark:bg-neutral-900">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold">
                الشركاء <span className="text-orange-500">الاستراتيجيون</span>
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                المؤسسات التي نعمل بها لتحقيق النجاح المشترك
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.map((partner) => (
              <FadeUp key={partner.name}>
                <div className="relative group h-full">
                  <div className="relative bg-white dark:bg-neutral-800 rounded-xl p-8 border border-gray-200 dark:border-neutral-700 group-hover:border-orange-500/50 group-hover:shadow-[0_0_30px_rgba(255,115,0,0.15)] transition-all duration-500 text-center">
                    <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                      {partner.name}
                    </h4>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRUSTED BY ================= */}
      <section className="relative py-32 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold">
                نثق بنا <span className="text-orange-500">العلامات العالمية</span>
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-items-center">
            {trusted_by.map((brand) => (
              <FadeUp key={brand}>
                <div className="text-center p-4">
                  <p className="font-semibold text-gray-700 dark:text-gray-300">
                    {brand}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-32 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="max-w-3xl mx-auto text-white text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                هل ترغب في الانضمام إلى فريقنا؟
              </h2>
              <p className="text-lg mb-10 opacity-90">
                نحن دائمًا نبحث عن مواهب مميزة وشغوفة
              </p>
              <Link
                href="/ar/contact"
                className="inline-flex items-center gap-3 px-10 py-4 
                         rounded-full bg-white text-orange-500
                         font-medium text-lg
                         hover:bg-gray-100
                         transition-all duration-300"
              >
                تواصل معنا
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

    </main>
  );
}
