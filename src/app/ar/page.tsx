import { FadeUp } from "@/components/Motion";
import ImageSection from "@/components/ImageSection";

export default function ArabicHome() {
  return (
    <main dir="rtl" className="text-right">

      {/* HERO */}
      <section className="hero">
        <img src="/hero.jpg" className="hero-bg" />
        <FadeUp>
          <div className="container">
            <span className="index">٠١</span>
            <h1>نضيء العالم من خلال الثقافة</h1>
            <p>
              لايتجيت منصة ثقافية عالمية تبني البنية التحتية
              للاقتصادات الإبداعية ومؤسسات المستقبل.
            </p>
          </div>
        </FadeUp>
      </section>

      <ImageSection src="/culture.jpg" />

      {/* MANIFESTO */}
      <section className="manifesto">
        <FadeUp>
          <div className="container">
            <h2>الثقافة هي البنية التحتية</h2>
            <p>
              الثقافة تشكّل طريقة تنظيم المجتمعات
              وابتكارها وفهمها لذاتها.  
              نحن نصمم أنظمة ثقافية تعمل كبنية تحتية:
              مرنة، قابلة للتوسع، ومولدة للقيمة.
            </p>
          </div>
        </FadeUp>
      </section>

      <ImageSection src="/global.jpg" />

      {/* GLOBAL */}
      <section className="dark">
        <FadeUp>
          <div className="container">
            <h2>عالمية بالتصميم</h2>
            <p>
              تعمل لايتجيت عبر الحدود واللغات
              والوسائط، لتربط المبدعين والمؤسسات
              والجمهور في منظومة واحدة.
            </p>
          </div>
        </FadeUp>
      </section>

    </main>
  );
}

