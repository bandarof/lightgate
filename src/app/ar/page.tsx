"use client";

import { FadeUp, useCounters } from "@/components/Motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

// Background animation component for flagship experiences
function FlagshipBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      pulseSpeed: number;
      pulsePhase: number;
    }> = [];

    const colors = [
      "rgba(255, 115, 0, 0.8)",
      "rgba(255, 165, 0, 0.6)",
      "rgba(255, 200, 50, 0.5)",
      "rgba(255, 100, 0, 0.7)",
    ];

    const particleCount = Math.min(30, Math.floor(canvas.width / 50));
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 2,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 0.3 + Math.random() * 0.5,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "rgba(255, 115, 0, 0.02)");
      gradient.addColorStop(0.5, "rgba(255, 165, 0, 0.01)");
      gradient.addColorStop(1, "rgba(255, 200, 0, 0.005)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.speedX + Math.sin(time + i) * 0.1;
        p.y += p.speedY + Math.cos(time * 0.7 + i) * 0.1;
        p.pulsePhase += p.pulseSpeed;

        const pulse = 0.5 + 0.5 * Math.sin(p.pulsePhase);
        const currentSize = p.size * (0.8 + 0.4 * pulse);
        const currentOpacity = p.opacity * (0.7 + 0.3 * pulse);

        if (p.x < -50) p.x = canvas.width + 50;
        if (p.x > canvas.width + 50) p.x = -50;
        if (p.y < -50) p.y = canvas.height + 50;
        if (p.y > canvas.height + 50) p.y = -50;

        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize * 3, 0, Math.PI * 2);
        const glowGradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          currentSize * 3
        );
        glowGradient.addColorStop(0, p.color.replace("0.8", "0.3"));
        glowGradient.addColorStop(1, p.color.replace("0.8", "0"));
        ctx.fillStyle = glowGradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace("0.8", currentOpacity.toString());
        ctx.fill();

        particles.forEach((p2, j) => {
          if (i >= j) return;

          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const connectionOpacity = 0.1 * (1 - distance / 150) * currentOpacity;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 115, 0, ${connectionOpacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      const waveCount = 3;
      for (let w = 0; w < waveCount; w++) {
        const waveOffset = time * 0.5 + (w * Math.PI * 2) / waveCount;
        const waveAmplitude = 20;
        const waveFrequency = 0.01;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 115, 0, ${0.05 + 0.05 * Math.sin(time + w)})`;
        ctx.lineWidth = 2;

        for (let x = 0; x < canvas.width; x += 10) {
          const y =
            canvas.height / 2 +
            Math.sin(x * waveFrequency + waveOffset) * waveAmplitude +
            Math.cos(x * waveFrequency * 0.7 + waveOffset * 1.3) * waveAmplitude * 0.5;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      ctx.strokeStyle = "rgba(255, 115, 0, 0.03)";
      ctx.lineWidth = 0.5;

      const hexSize = 60;
      for (let x = 0; x < canvas.width; x += hexSize * 1.5) {
        for (let y = 0; y < canvas.height; y += hexSize * Math.sqrt(3)) {
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const hexX = x + hexSize * Math.cos(angle);
            const hexY = y + hexSize * Math.sin(angle);
            if (i === 0) {
              ctx.moveTo(hexX, hexY);
            } else {
              ctx.lineTo(hexX, hexY);
            }
          }
          ctx.closePath();
          ctx.stroke();
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40" />;
}

function StaticHexagonalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    ctx.strokeStyle = "rgba(255, 115, 0, 0.12)";
    ctx.lineWidth = 1.2;

    const hexSize = 50;
    for (let x = 0; x < canvas.width; x += hexSize * 1.5) {
      for (let y = 0; y < canvas.height; y += hexSize * Math.sqrt(3)) {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i;
          const hexX = x + hexSize * Math.cos(angle);
          const hexY = y + hexSize * Math.sin(angle);
          if (i === 0) {
            ctx.moveTo(hexX, hexY);
          } else {
            ctx.lineTo(hexX, hexY);
          }
        }
        ctx.closePath();
        ctx.stroke();
      }
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

export default function ArabicHome() {
  useCounters();

  return (
    <main className="bg-white dark:bg-neutral-950" dir="rtl">
      {/* ================= HERO ================= */}
      <section
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url(/home.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 container mx-auto px-6 text-white text-right">
          <FadeUp>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              نضيء العالم <br />
              من خلال <span className="text-orange-500">الثقافة</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg opacity-90">
              لايتجيت منصة ثقافية عالمية تقود تجارب احتفالية غير مسبوقة.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="relative py-28 bg-white dark:bg-neutral-900 overflow-hidden">
        <StaticHexagonalBackground />

        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-orange-500/5 to-orange-500/10" />

        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
          <FadeUp>
            <p className="text-2xl md:text-3xl font-light">
              لايتجيت ليست مجرد صانعة فعاليات، بل ظاهرة عالمية ستُعيد{" "}
              <span className="text-orange-500">تعريف الترفيه</span>.
            </p>

            <p className="mt-10 text-xl text-gray-600 dark:text-gray-400">
              نبني تجربة احتفالية فريدة تمزج التقنية بالحجم الضخم وبمفهوم لم يُسبق له مثيل.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ================= NUMBERS ================= */}
      <section className="relative py-32">
        <Image src="/culture.jpg" alt="الثقافة" fill className="object-cover" priority />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 container mx-auto px-6 text-white">
          <FadeUp>
            <div className="text-center mb-20">
              <span className="tracking-widest opacity-70">نحن بالأرقام</span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                <span className="text-orange-500">الأرقام</span>
              </h2>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-4 gap-16 text-center">
            <div>
              <span className="counter text-5xl font-bold text-orange-500" data-target="2000000">
                0
              </span>
              <p className="mt-3 opacity-80">إيرادات</p>
            </div>

            <div>
              <span
                className="counter text-5xl font-bold text-orange-500"
                data-target="15"
                data-suffix="+"
              >
                0
              </span>
              <p className="mt-3 opacity-80">مشروع سنويًا</p>
            </div>

            <div>
              <span
                className="counter text-5xl font-bold text-orange-500"
                data-target="26"
                data-suffix="Y+"
              >
                0
              </span>
              <p className="mt-3 opacity-80">سنوات خبرة</p>
            </div>

            <div>
              <span
                className="counter text-5xl font-bold text-orange-500"
                data-target="6"
                data-suffix="+"
              >
                0
              </span>
              <p className="mt-3 opacity-80">شراكات عالمية</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= THE PROCESS & FLAGSHIP EXPERIENCES ================= */}
      <section className="relative py-32 bg-white dark:bg-neutral-900 overflow-hidden">
        <FlagshipBackground />

        <div className="relative z-10 container mx-auto px-6">
          <FadeUp>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-orange-500">المنهجية</span>
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                نهج منظم يضمن تنفيذ كل مشروع بدقة وإبداع وتميز منذ الفكرة وحتى التسليم.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-4 gap-8 mb-32">
            {[
              {
                step: "01",
                title: "الإحاطة والتخطيط",
                description:
                  "نلتقط الأهداف ونصمم لوحة الرؤية لضمان خطة متكاملة قبل بدء التنفيذ.",
                image: "/process-briefing.jpg",
              },
              {
                step: "02",
                title: "التنفيذ",
                description:
                  "نحوّل التصميم إلى واقع مع مرونة في التعديلات وبالتعاون مع العميل.",
                image: "/process-execution.jpg",
              },
              {
                step: "03",
                title: "التحسين النهائي",
                description:
                  "مراجعات دقيقة وتعديلات أخيرة لضمان أعلى معايير الجودة.",
                image: "/process-finalization.jpg",
              },
              {
                step: "04",
                title: "التسليم",
                description:
                  "نسلم المشروع قبل الفعالية مع فحص نهائي لضمان رضا كامل.",
                image: "/process-delivery.jpg",
              },
            ].map((item, index) => (
              <FadeUp key={item.title} delay={index * 0.05}>
                <div className="relative group h-full">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                  <div className="relative bg-white dark:bg-neutral-800 rounded-xl p-8 border border-gray-200 dark:border-neutral-700 group-hover:border-orange-500/50 group-hover:shadow-[0_0_30px_rgba(255,115,0,0.15)] transition-all duration-500 h-full flex flex-col">
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,115,0,0.8)] transition-all duration-500">
                      {item.step}
                    </div>

                    <div className="w-full h-48 mb-6 rounded-xl overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    <h3 className="text-xl font-bold text-center mb-4 text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-500 flex-shrink-0">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-center flex-grow">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold">
                تجارب <span className="text-orange-500">ريادية</span>
              </h2>

              <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                تجارب ضخمة تصنع الثقافة وتعيد تعريف الترفيه على نطاق عالمي.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {[
              { img: "/experience-1.jpg", title: "مهرجانات غامرة", sub: "فعاليات ثقافية كبرى" },
              { img: "/experience-2.jpg", title: "تقنيات تفاعلية", sub: "تجارب مستقبلية" },
              { img: "/experience-3.jpg", title: "منصات ثقافية", sub: "مساحات إبداع عالمية" },
            ].map((card) => (
              <FadeUp key={card.title}>
                <div className="group relative h-[450px] overflow-hidden rounded-2xl border-2 border-transparent hover:border-orange-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,115,0,0.3)]">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <Image src={card.img} alt={card.title} fill className="object-cover group-hover:scale-110 transition duration-700" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  <div className="absolute bottom-8 right-8 text-white text-right">
                    <h3 className="text-2xl font-bold">{card.title}</h3>
                    <p className="mt-2 opacity-80">{card.sub}</p>
                  </div>

                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-500/0 group-hover:border-orange-500 group-hover:shadow-[0_0_10px_rgba(255,115,0,0.8)] transition-all duration-500 rounded-tl-2xl" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-orange-500/0 group-hover:border-orange-500 group-hover:shadow-[0_0_10px_rgba(255,115,0,0.8)] transition-all duration-500 rounded-tr-2xl" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-orange-500/0 group-hover:border-orange-500 group-hover:shadow-[0_0_10px_rgba(255,115,0,0.8)] transition-all duration-500 rounded-bl-2xl" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-500/0 group-hover:border-orange-500 group-hover:shadow-[0_0_10px_rgba(255,115,0,0.8)] transition-all duration-500 rounded-br-2xl" />
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <div className="text-center">
              <Link
                href="/ar/portfolio"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium text-lg hover:from-orange-600 hover:to-orange-700 hover:shadow-[0_0_30px_rgba(255,115,0,0.5)] transform hover:-translate-y-1 transition-all duration-300"
              >
                استكشف أعمالنا
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                اكتشف مجموعة متكاملة من التجارب الثقافية الضخمة
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= SERVICES SNAPSHOT ================= */}
      <section className="relative py-32">
        <Image src="/global.jpg" alt="عالمي" fill className="object-cover" />

        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 container mx-auto px-6 text-white">
          <FadeUp>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold">
                خدماتنا <span className="text-orange-500">الرئيسية</span>
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-gray-300">
                حلول شاملة لصناعة تجارب ثقافية لا تُنسى بدقة وابتكار.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {[
              "إنتاج الفعاليات",
              "الإخراج الإبداعي",
              "تصميم المسارح",
              "الإعلام والبث",
              "التسويق التجريبي",
              "العمليات التقنية",
            ].map((service) => (
              <FadeUp key={service}>
                <div className="p-10 rounded-xl bg-white/5 backdrop-blur border border-orange-500/30 hover:border-orange-500/70 hover:shadow-[0_0_30px_rgba(255,115,0,0.3)] transition-all duration-500 relative group">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

                  <div className="relative z-10 text-right">
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-orange-300 transition-colors">
                      {service}
                    </h3>
                    <div className="w-10 h-1 bg-orange-500 mb-6 group-hover:w-16 group-hover:bg-orange-400 transition-all duration-500" />
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                      تنفيذ عالي التأثير مصمم للحجم والدقة والتجارب الاستثنائية.
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <div className="text-center">
              <Link
                href="/ar/services"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-transparent border-2 border-orange-500 text-orange-500 font-medium text-lg hover:bg-orange-500 hover:text-white hover:shadow-[0_0_30px_rgba(255,115,0,0.5)] transform hover:-translate-y-1 transition-all duration-300"
              >
                عرض كل الخدمات
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="mt-4 text-gray-300">اكتشف كامل خدماتنا الاحترافية</p>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
