import { FadeUp } from "@/components/Motion";
import Image from "next/image";

const المكاتب = [
  {
    city: "الرياض",
    address: "حي الملك عبدالله المالي، مبنى 4",
    phone: "+966-569169169",
    email: "riyadh@lightgate.fest",
  },
  {
    city: "جدة",
    address: "طريق الكورنيش، المنطقة الثقافية",
    phone: "+966-591015666",
    email: "jeddah@lightgate.fest",
  },
];

export default function ContactAr() {
  return (
    <main dir="rtl">
      <section className="hero min-h-screen flex items-center">
        <img src="/contact.jpg" className="hero-bg" alt="تواصل معنا" />

        <FadeUp>
          <div className="container text-right">
            <h1 className="text-6xl font-bold">تواصل معنا</h1>
            <p className="mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-300">
              أخبرنا عن مشروعك الثقافي القادم وسنقترح المسار الأنسب لتنفيذه.
            </p>
          </div>
        </FadeUp>
      </section>

      <section>
        <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeUp>
            <div className="space-y-8 text-right">
              <div>
                <span className="text-sm uppercase tracking-[0.3em] text-orange-500">
                  التواصل
                </span>
                <h2 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">
                  دعنا نصمم تجربة ثقافية لا تُنسى
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                  شاركنا أهدافك وتوقيتك وموقع المشروع، وسنرد عليك بمقترح مخصص.
                </p>
              </div>

              <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
                <p>Lightgate.fest</p>
                <p>lightgate.fest@gmail.com</p>
                <p>www.Lightgate.media</p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">ساعات العمل</p>
                  <p>الأحد - الخميس · 9:00 صباحًا - 6:00 مساءً</p>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp>
            <form className="space-y-6 rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-gray-900 dark:text-white">
                    الاسم الأول
                  </label>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-orange-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
                    placeholder="سارة"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-900 dark:text-white">
                    اسم العائلة
                  </label>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-orange-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
                    placeholder="الشهري"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-900 dark:text-white">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-orange-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
                  placeholder="name@organization.com"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-900 dark:text-white">
                  نطاق المشروع
                </label>
                <select className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-orange-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-white">
                  <option>تصميم مهرجان وإنتاج</option>
                  <option>تطوير تجربة غامرة</option>
                  <option>استراتيجية ثقافية وهوية</option>
                  <option>استفسار شراكة</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-900 dark:text-white">
                  تفاصيل إضافية
                </label>
                <textarea
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-orange-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
                  placeholder="شاركنا الأهداف والموقع والجدول الزمني."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-orange-500 px-6 py-4 text-white transition hover:bg-orange-600"
              >
                إرسال الطلب
              </button>
            </form>
          </FadeUp>
        </div>
      </section>

      <section className="bg-neutral-50 dark:bg-neutral-900/60">
        <div className="container">
          <FadeUp>
            <div className="grid gap-8 lg:grid-cols-2">
              {المكاتب.map((office) => (
                <div
                  key={office.city}
                  className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm text-right dark:border-neutral-800 dark:bg-neutral-950"
                >
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    مكتب {office.city}
                  </h3>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">{office.address}</p>
                  <p className="mt-3 text-gray-600 dark:text-gray-300">{office.phone}</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{office.email}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section>
        <div className="container">
          <FadeUp>
            <div className="rounded-3xl border border-orange-200 bg-gradient-to-r from-orange-50 via-white to-orange-100 p-12 text-right shadow-sm dark:border-neutral-800 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                    استكشف لايتجيت عن قرب
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    احجز عرضًا خاصًا لمفاهيمنا الرئيسية وتعرف على منهجيتنا.
                  </p>
                </div>
                <div className="relative h-56 overflow-hidden rounded-2xl">
                  <Image
                    src="/home.jpg"
                    alt="تجربة لايتجيت"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
