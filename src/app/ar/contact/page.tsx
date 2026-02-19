"use client";

import { FadeUp } from "@/components/Motion";
import { Phone, Mail, MapPin, Globe, Send } from "lucide-react";
import Link from "next/link";

export default function ContactAr() {
  return (
    <main dir="rtl" className="bg-white dark:bg-neutral-950">
      
      {/* ================= HERO ================= */}
      <section
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url(/contact.jpg)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

        <div className="relative z-10 container mx-auto px-6 text-white text-right">
          <FadeUp>
            <div className="max-w-3xl ml-auto">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                تواصل <span className="text-orange-500">معنا</span>
              </h1>
              <p className="mt-8 max-w-2xl text-xl opacity-90">
                نحن هنا للاستماع إلى أفكارك وتحويل رؤيتك إلى واقع استثنائي.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="relative py-32 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold">
                معلومات <span className="text-orange-500">التواصل</span>
              </h2>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Location */}
            <FadeUp>
              <div className="relative group h-full">
                <div className="relative bg-white dark:bg-neutral-800 rounded-xl p-8 border border-gray-200 dark:border-neutral-700 group-hover:border-orange-500/50 group-hover:shadow-[0_0_30px_rgba(255,115,0,0.15)] transition-all duration-500 text-right">
                  <MapPin className="w-10 h-10 text-orange-500 mb-4 ml-auto" />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    المقر الرئيسي
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    الرياض | جدة
                    <br />
                    المملكة العربية السعودية
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Phone */}
            <FadeUp>
              <div className="relative group h-full">
                <div className="relative bg-white dark:bg-neutral-800 rounded-xl p-8 border border-gray-200 dark:border-neutral-700 group-hover:border-orange-500/50 group-hover:shadow-[0_0_30px_rgba(255,115,0,0.15)] transition-all duration-500 text-right">
                  <Phone className="w-10 h-10 text-orange-500 mb-4 ml-auto" />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    الهاتف
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    <a href="tel:+966569169169" className="hover:text-orange-500 transition">
                      +966-569169169
                    </a>
                    <br />
                    <a href="tel:+966591015666" className="hover:text-orange-500 transition">
                      +966-591015666
                    </a>
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Email */}
            <FadeUp>
              <div className="relative group h-full">
                <div className="relative bg-white dark:bg-neutral-800 rounded-xl p-8 border border-gray-200 dark:border-neutral-700 group-hover:border-orange-500/50 group-hover:shadow-[0_0_30px_rgba(255,115,0,0.15)] transition-all duration-500 text-right">
                  <Mail className="w-10 h-10 text-orange-500 mb-4 ml-auto" />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    البريد الإلكتروني
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    <a href="mailto:lightgate.fest@gmail.com" className="hover:text-orange-500 transition">
                      lightgate.fest@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Website */}
            <FadeUp>
              <div className="relative group h-full">
                <div className="relative bg-white dark:bg-neutral-800 rounded-xl p-8 border border-gray-200 dark:border-neutral-700 group-hover:border-orange-500/50 group-hover:shadow-[0_0_30px_rgba(255,115,0,0.15)] transition-all duration-500 text-right">
                  <Globe className="w-10 h-10 text-orange-500 mb-4 ml-auto" />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    الموقع الإلكتروني
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    <a href="https://www.lightgate.media" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
                      www.lightgate.media
                    </a>
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ================= SOCIAL MEDIA ================= */}
      <section className="relative py-32 bg-gray-50 dark:bg-neutral-900">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold">
                تابعنا على <span className="text-orange-500">وسائل التواصل</span>
              </h2>
            </div>
          </FadeUp>

          <div className="max-w-2xl mx-auto">
            <FadeUp>
              <div className="text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  ابق على اطلاع بأحدث أخبار لايتجيت والمشاريع المثيرة
                </p>
                <div className="flex justify-center gap-6 flex-wrap">
                  <a href="https://www.instagram.com/lightgate.fest" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold hover:shadow-[0_0_30px_rgba(255,115,0,0.5)] transition">
                    Instagram
                  </a>
                  <a href="https://www.facebook.com/lightgate.fest" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:shadow-[0_0_30px_rgba(59,89,152,0.5)] transition">
                    Facebook
                  </a>
                  <a href="https://www.tiktok.com/@lightgate.fest" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-black text-white font-semibold hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition">
                    TikTok
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="relative py-32 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold">
                أرسل <span className="text-orange-500">رسالة</span>
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                سنتواصل معك في أسرع وقت ممكن
              </p>
            </div>
          </FadeUp>

          <div className="max-w-2xl mx-auto">
            <FadeUp>
              <form className="bg-white dark:bg-neutral-800 rounded-xl p-10 border border-gray-200 dark:border-neutral-700 space-y-6 text-right">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 dark:text-white mb-2">
                      الاسم
                    </label>
                    <input 
                      type="text" 
                      placeholder="أدخل اسمك" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white focus:border-orange-500 focus:outline-none transition"
                      dir="rtl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 dark:text-white mb-2">
                      البريد الإلكتروني
                    </label>
                    <input 
                      type="email" 
                      placeholder="بريدك الإلكتروني" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white focus:border-orange-500 focus:outline-none transition"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 dark:text-white mb-2">
                    الهاتف
                  </label>
                  <input 
                    type="tel" 
                    placeholder="+966..." 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white focus:border-orange-500 focus:outline-none transition"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 dark:text-white mb-2">
                    الموضوع
                  </label>
                  <input 
                    type="text" 
                    placeholder="ما الذي تريد تحقيقه؟" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white focus:border-orange-500 focus:outline-none transition"
                    dir="rtl"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 dark:text-white mb-2">
                    الرسالة
                  </label>
                  <textarea 
                    placeholder="اكتب رسالتك هنا..." 
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white focus:border-orange-500 focus:outline-none transition"
                    dir="rtl"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-lg hover:from-orange-600 hover:to-orange-700 hover:shadow-[0_0_30px_rgba(255,115,0,0.5)] transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  أرسل الرسالة
                </button>
              </form>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ================= OFFICE HOURS ================= */}
      <section className="relative py-32 bg-gray-50 dark:bg-neutral-900">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-800 rounded-xl p-10 border border-gray-200 dark:border-neutral-700 text-right">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
                <span className="text-orange-500">ساعات</span> العمل
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">أيام العمل</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    السبت - الخميس
                    <br />
                    الساعة 09:00 - 18:00
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">الإجازات</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    الجمعة والسبت
                    <br />
                    العطلات الرسمية والأعياد
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

    </main>
  );
}
