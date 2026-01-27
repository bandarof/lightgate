import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle?: string;
  image: string;
}

export default function Hero({ title, subtitle, image }: HeroProps) {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">

      {/* Background */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-3xl px-6">

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          {title}
        </h1>

        {subtitle && (
          <p className="text-xl md:text-2xl opacity-90">
            {subtitle}
          </p>
        )}

      </div>

    </section>
  );
}
