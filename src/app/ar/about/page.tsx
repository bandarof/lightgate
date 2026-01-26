import { FadeUp } from "@/components/Motion";
import ImageSection from "@/components/ImageSection";

export default function ArabicAbout() {
  return (
    <main dir="rtl" className="text-right">

      {/* HERO */}
      <section className="hero">
        <img src="/global.jpg" className="hero-bg" />
        <FadeUp>
          <div className="container">
            <span className="index">٠١</span>
            <h1>عن لايتجيت</h1>
            <p>
              لايتجيت شركة بنية تحتية ثقافية
              تبني أسس الاقتصادات الإبداعية المستقبلية.
            </p>
          </div>
        </FadeUp>
      </section>

      <ImageSection src="/culture.jpg" />

      {/* WHO WE ARE */}
      <section className="manifesto">
        <FadeUp>
          <div className="container">
            <h2>من نحن</h2>
            <p>
              نصمم منصات ومؤسسات وتجارب
              تمكّن المبدعين والمجتمعات.
              عملنا يقع عند تقاطع الثقافة
              والتكنولوجيا والتبادل العالمي.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* BELIEFS */}
      <section>
        <FadeUp>
          <div className="container">
            <h2>ما نؤمن به</h2>
            <p>
              الثقافة ليست زخرفة.  
              الثقافة قوة.  
              الثقافة بنية تحتية.
            </p>
          </div>
        </FadeUp>
      </section>

    </main>
  );
}

