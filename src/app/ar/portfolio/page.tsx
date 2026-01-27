import { FadeUp } from "@/components/Motion";

export default function PortfolioAr() {
  return (
    <main dir="rtl">

      <section className="hero min-h-screen flex items-center">
        <img src="/portfolio.jpg" className="hero-bg" />

        <FadeUp>
          <div className="container text-right">
            <h1 className="text-6xl font-bold">الأعمال</h1>
          </div>
        </FadeUp>
      </section>

    </main>
  );
}
