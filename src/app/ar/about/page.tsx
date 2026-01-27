import Hero from "@/components/Hero";

export default function ArabicAbout() {
  return (
    <main dir="rtl">

      <Hero
        title="من نحن"
        subtitle="منصة ثقافية عالمية تشكل المستقبل."
        image="/about.jpg"
      />

      <section className="py-32">
        <div className="container">

          <p>
            لايتجيت منصة ثقافية تعمل
            عبر الحدود واللغات والوسائط.
          </p>

          <p>
            نصمم أنظمة وتجارب ومؤسسات
            تشكل الثقافة على نطاق واسع.
          </p>

        </div>
      </section>

    </main>
  );
}
