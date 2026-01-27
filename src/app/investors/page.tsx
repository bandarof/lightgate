import Hero from "@/components/Hero";

export default function Investors() {
  return (
    <main>

      <Hero
        title="Investors"
        subtitle="Backing long-term cultural infrastructure."
        image="/investors.jpg"
      />

      <section className="py-24">
        <div className="container max-w-3xl mx-auto text-center">
          <p>Private briefings available upon request.</p>
        </div>
      </section>

    </main>
  );
}
