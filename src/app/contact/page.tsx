import Hero from "@/components/Hero";

export default function Contact() {
  return (
    <main>

      <Hero
        title="Contact"
        subtitle="Let’s build something meaningful."
        image="/contact.jpg"
      />

      <section className="py-24">
        <div className="container max-w-xl mx-auto text-center">
          <p>Email: contact@lightgate.io</p>
        </div>
      </section>

    </main>
  );
}
