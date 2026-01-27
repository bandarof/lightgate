import { FadeUp } from "@/components/Motion";

export default function ServicesAr() {
  return (
    <main dir="rtl">

      <section className="hero min-h-screen flex items-center">
        <img src="/services.jpg" className="hero-bg" />

        <FadeUp>
          <div className="container text-right">
            <h1 className="text-6xl font-bold">الخدمات</h1>
          </div>
        </FadeUp>
      </section>

    </main>
  );
}
