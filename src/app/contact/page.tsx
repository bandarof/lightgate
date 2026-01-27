import { FadeUp } from "@/components/Motion";

export default function Contact() {
  return (
    <main>

      <section className="hero min-h-screen flex items-center">
        <img src="/contact.jpg" className="hero-bg" />

        <FadeUp>
          <div className="container">
            <h1 className="text-6xl font-bold">
              Get <span className="text-orange-500">In Touch</span>
            </h1>
          </div>
        </FadeUp>
      </section>

      <section>
        <FadeUp>
          <div className="container max-w-xl space-y-6 text-lg">

            <p>Riyadh | Jeddah, KSA</p>
            <p>+966-569169169 | +966-591015666</p>
            <p>Lightgate.fest</p>
            <p>lightgate.fest@gmail.com</p>
            <p>www.Lightgate.media</p>

          </div>
        </FadeUp>
      </section>

    </main>
  );
}
