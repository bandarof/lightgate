import Hero from "@/components/Hero";

export default function ArabicPortfolio() {
  return (
    <main dir="rtl">

      <Hero
        title="الأعمال"
        subtitle="نماذج من المبادرات والمنصات الثقافية."
        image="/portfolio.jpg"
      />

      <section className="py-32">
        <div className="container grid-3">

          <div>
            <h3>Lightgate Fest</h3>
            <p>مهرجان ومنصة ثقافية.</p>
          </div>

          <div>
            <h3>برامج الفن العام</h3>
            <p>تركيبات ثقافية على مستوى المدن.</p>
          </div>

          <div>
            <h3>أرشيفات رقمية</h3>
            <p>حفظ وتنشيط الذاكرة الثقافية.</p>
          </div>

        </div>
      </section>

    </main>
  );
}
