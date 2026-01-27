import Hero from "@/components/Hero";

export default function Contact() {
  return (
    <main>

      <Hero
        title="Contact"
        subtitle="Let’s build something meaningful."
        image="/contact.jpg"
      />

      <section className="py-32">
        <div className="container space-y-6">

          <p>Riyadh | Jeddah, KSA</p>
          <p>+966-569169169 | +966-591015666</p>
          <p>Lightgate.fest</p>
          <p>lightgate.fest@gmail.com</p>
          <p>www.Lightgate.media</p>

        </div>
      </section>

    </main>
  );
}
