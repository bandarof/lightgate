import Hero from "@/components/Hero";

export default function ArabicServices() {
  return (
    <main dir="rtl">

      <Hero
        title="الخدمات"
        subtitle="نبني أنظمة ثقافية من الفكرة إلى التنفيذ."
        image="/services.jpg"
      />

      <section className="py-32">
        <div className="container grid-3">

          <div>
            <h3>تطوير المنصات</h3>
            <p>
              منصات رقمية مخصصة للمؤسسات الثقافية
              والشبكات الإبداعية والتفاعل العام.
            </p>
          </div>

          <div>
            <h3>أنظمة الهوية والعلامة التجارية</h3>
            <p>
              أنظمة بصرية ولغوية
              وبنية سردية متكاملة.
            </p>
          </div>

          <div>
            <h3>الاستراتيجية الثقافية</h3>
            <p>
              تخطيط طويل المدى للمدن
              والمتاحف والمهرجانات والمؤسسات.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
