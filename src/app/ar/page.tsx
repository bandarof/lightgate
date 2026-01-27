import { FadeUp } from "@/components/Motion";
import Hero from "@/components/Hero";

export default function ArabicHome() {
  return (
    <main dir="rtl">

      <Hero
        title="نضيء العالم من خلال الثقافة"
        subtitle="لايتجيت منصة ثقافية عالمية."
        image="/home.jpg"
      />

      <div className="h-32"></div>

      <section className="manifesto">
        <FadeUp>
          <div className="container">
            <h2>الثقافة هي البنية التحتية</h2>
            <p>
              نصمم أنظمة ثقافية تشكل طريقة تواصل الناس
              وتجربتهم وتخيلهم للمستقبل.
            </p>
          </div>
        </FadeUp>
      </section>

    </main>
  );
}
