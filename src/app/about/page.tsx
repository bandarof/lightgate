"use client";

import { FadeUp } from "@/components/Motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Target, Eye, Globe, Award, Calendar, Sparkles } from "lucide-react";

// Static hexagonal background for about section
function StaticHexagonalBackground() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      
      // Clear and draw static pattern
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw subtle gradient background
      const gradient = ctx.createLinearGradient(
        0, 0, 
        canvas.width, canvas.height
      );
      gradient.addColorStop(0, 'rgba(255, 115, 0, 0.03)');
      gradient.addColorStop(0.5, 'rgba(255, 165, 0, 0.02)');
      gradient.addColorStop(1, 'rgba(255, 200, 0, 0.01)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw hexagonal pattern
      ctx.strokeStyle = 'rgba(255, 115, 0, 0.06)';
      ctx.lineWidth = 1;
      
      const hexSize = 70;
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
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-40"
    />
  );
}

export default function About() {
  return (
    <main className="bg-white dark:bg-neutral-950">

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-[90vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url(/about.jpg)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

        <div className="relative z-10 container mx-auto px-6 text-white">
          <FadeUp>
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm font-medium mb-6">
                ABOUT LIGHTGATE
              </span>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                Illuminating the World
                <br />
                Through <span className="text-orange-500">Culture</span>
              </h1>

              <p className="mt-8 max-w-2xl text-xl opacity-90">
                A global phenomenon redefining entertainment through groundbreaking technology, 
                unparalleled scale, and never-before-seen festive event concepts.
              </p>

              <div className="mt-12 flex items-center gap-6">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-3 px-8 py-4 
                           rounded-full bg-gradient-to-r from-orange-500 to-orange-600
                           text-white font-medium text-lg
                           hover:from-orange-600 hover:to-orange-700
                           hover:shadow-[0_0_30px_rgba(255,115,0,0.5)]
                           transform hover:-translate-y-1
                           transition-all duration-300"
                >
                  View Our Work
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 
                           rounded-full bg-transparent border-2 border-white/30
                           text-white font-medium text-lg
                           hover:border-orange-500 hover:text-orange-500
                           hover:shadow-[0_0_30px_rgba(255,115,0,0.3)]
                           transition-all duration-300"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="relative py-32 bg-white dark:bg-neutral-900 overflow-hidden">
        
        {/* Hexagonal Background Pattern */}
        <StaticHexagonalBackground />

        {/* Orange gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-orange-500/5" />

        <div className="relative z-10 container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* MISSION */}
            <FadeUp>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/10 to-transparent 
                              rounded-3xl opacity-0 group-hover:opacity-100 
                              transition-opacity duration-500 blur-xl" />
                
                <div className="relative bg-white dark:bg-neutral-800 rounded-2xl p-10 
                              border border-gray-200 dark:border-neutral-700
                              group-hover:border-orange-500/50
                              group-hover:shadow-[0_0_40px_rgba(255,115,0,0.15)]
                              transition-all duration-500 h-full">
                  
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl mb-8 
                                bg-gradient-to-br from-orange-500/20 to-orange-500/5
                                flex items-center justify-center
                                group-hover:from-orange-500/30 group-hover:to-orange-500/10
                                transition-all duration-500">
                    <Target className="w-10 h-10 text-orange-500" />
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">01</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                      Our <span className="text-orange-500">Mission</span>
                    </h2>
                  </div>

                  <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                    To revolutionize cultural entertainment by uniting the world's most iconic 
                    festivals into one immersive, technology-driven event experience—celebrating 
                    global diversity, inspiring connection, and creating unforgettable moments 
                    for audiences everywhere.
                  </p>

                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-orange-500/0 
                                group-hover:border-orange-500 group-hover:shadow-[0_0_10px_rgba(255,115,0,0.8)]
                                transition-all duration-500" />
                  <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-orange-500/0 
                                group-hover:border-orange-500 group-hover:shadow-[0_0_10px_rgba(255,115,0,0.8)]
                                transition-all duration-500" />
                </div>
              </div>
            </FadeUp>

            {/* VISION */}
            <FadeUp delay={0.1}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/10 to-transparent 
                              rounded-3xl opacity-0 group-hover:opacity-100 
                              transition-opacity duration-500 blur-xl" />
                
                <div className="relative bg-white dark:bg-neutral-800 rounded-2xl p-10 
                              border border-gray-200 dark:border-neutral-700
                              group-hover:border-orange-500/50
                              group-hover:shadow-[0_0_40px_rgba(255,115,0,0.15)]
                              transition-all duration-500 h-full">
                  
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl mb-8 
                                bg-gradient-to-br from-orange-500/20 to-orange-500/5
                                flex items-center justify-center
                                group-hover:from-orange-500/30 group-hover:to-orange-500/10
                                transition-all duration-500">
                    <Eye className="w-10 h-10 text-orange-500" />
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">02</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                      Our <span className="text-orange-500">Vision</span>
                    </h2>
                  </div>

                  <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                    To become the world's leading cultural event platform, transforming how 
                    people engage with art, music, and heritage by blending innovation, scale, 
                    and unity into a single, extraordinary global celebration.
                  </p>

                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-orange-500/0 
                                group-hover:border-orange-500 group-hover:shadow-[0_0_10px_rgba(255,115,0,0.8)]
                                transition-all duration-500" />
                  <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-orange-500/0 
                                group-hover:border-orange-500 group-hover:shadow-[0_0_10px_rgba(255,115,0,0.8)]
                                transition-all duration-500" />
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ================= OUR HISTORY ================= */}
      <section className="relative py-32 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-6">
          
          <FadeUp>
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-6">
                OUR JOURNEY
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-orange-500">History</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                From a bold vision to a global cultural phenomenon
              </p>
            </div>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Column */}
            <FadeUp>
              <div className="relative group">
                <div className="relative h-[600px] rounded-3xl overflow-hidden
                              border-4 border-transparent
                              group-hover:border-orange-500/30
                              transition-all duration-500">
                  <Image
                    src="/culture.jpg"
                    alt="Lightgate History"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Floating info box */}
                  <div className="absolute bottom-8 left-8 right-8 p-6 rounded-xl 
                                bg-white/10 backdrop-blur-md border border-white/20
                                transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                                transition-all duration-500">
                    <h4 className="text-white text-lg font-semibold mb-2">Since 2025</h4>
                    <p className="text-gray-300">Redefining cultural entertainment worldwide</p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Content Column */}
            <FadeUp delay={0.1}>
              <div className="space-y-8">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent 
                              border border-orange-500/10">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                    The Beginning
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Lightgate began with a bold vision to redefine cultural entertainment by 
                    uniting the world's most iconic festivals under one groundbreaking platform. 
                    What started as a creative concept has grown into a powerful brand known 
                    for blending innovation, technology, and immersive storytelling.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent 
                              border border-orange-500/10">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                    Evolution & Growth
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    As we expanded, Lightgate evolved into a full-service experience company, 
                    offering world-class photography, creative design, and festive event execution. 
                    We've consistently pushed boundaries while maintaining our core focus on 
                    cultural innovation.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent 
                              border border-orange-500/10">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                    Today & Beyond
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Today, we continue to push boundaries, creating unforgettable moments that 
                    connect people, cultures, and ideas across the globe. Lightgate stands as a 
                    testament to what's possible when creativity meets execution at scale.
                  </p>
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ================= MILESTONES ================= */}
      <section className="relative py-32 bg-gradient-to-b from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-950">
        <div className="container mx-auto px-6">
          
          <FadeUp>
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-6">
                KEY ACHIEVEMENTS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Major <span className="text-orange-500">Milestones</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Significant moments that shaped our journey
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {[
              {
                year: "2013",
                title: "Peace Boat - Jeddah",
                description: "Curated cultural exchange for 150+ international guests with Saudi folkloric performances and traditional crafts exhibition.",
                icon: <Globe className="w-6 h-6" />
              },
              {
                year: "2020",
                title: "Global Expansion",
                description: "Expanded operations to multiple countries, establishing Lightgate as an international cultural platform.",
                icon: <Award className="w-6 h-6" />
              },
              {
                year: "2023",
                title: "Spar Initiative",
                description: "Launched Saudi sports initiative redefining physical activity as a lifestyle through coast-to-coast events.",
                icon: <Calendar className="w-6 h-6" />
              },
              {
                year: "2025",
                title: "Digital Innovation",
                description: "Integrated advanced technology and digital experiences into all our cultural events.",
                icon: <Sparkles className="w-6 h-6" />
              }
            ].map((milestone, index) => (
              <FadeUp key={index} delay={index * 0.1}>
                <div className="relative group h-full">
                  <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/10 to-transparent 
                                rounded-2xl opacity-0 group-hover:opacity-100 
                                transition-opacity duration-500 blur-xl" />
                  
                  <div className="relative bg-white dark:bg-neutral-800 rounded-xl p-8 
                                border border-gray-200 dark:border-neutral-700
                                group-hover:border-orange-500/50
                                group-hover:shadow-[0_0_30px_rgba(255,115,0,0.15)]
                                transition-all duration-500 h-full flex flex-col">
                    
                    {/* Year Badge */}
                    <div className="mb-6">
                      <span className="inline-block px-4 py-2 rounded-full 
                                    bg-orange-500 text-white text-sm font-bold">
                        {milestone.year}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl mb-6 
                                  bg-gradient-to-br from-orange-500/20 to-orange-500/5
                                  flex items-center justify-center
                                  group-hover:from-orange-500/30 group-hover:to-orange-500/10
                                  transition-all duration-500">
                      <div className="text-orange-500">
                        {milestone.icon}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                      {milestone.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 flex-grow">
                      {milestone.description}
                    </p>

                    {/* Connecting Line (Desktop Only) */}
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 
                                    bg-gradient-to-r from-orange-500/30 to-transparent
                                    group-hover:from-orange-500 group-hover:to-orange-500/30
                                    transition-all duration-500" />
                    )}
                  </div>
                </div>
              </FadeUp>
            ))}

          </div>
        </div>
      </section>

      {/* ================= TEAM SNAPSHOT ================= */}
      <section className="relative py-32 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-6">
          
          <FadeUp>
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-6">
                OUR PEOPLE
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Leadership <span className="text-orange-500">Team</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Visionaries driving cultural innovation forward
              </p>
            </div>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {[
              {
                name: "AMEER ALRIMAWI",
                role: "FOUNDER & CEO",
                image: "/team-ameer.jpg" // Add team images to /public folder
              },
              {
                name: "LUAI HIJAZI",
                role: "PARTNER & COO",
                image: "/team-luai.jpg"
              },
              {
                name: "JASSIM ALSAADY",
                role: "DIRECTOR - FILM & COMMERCIAL",
                image: "/team-jassim.jpg"
              },
              {
                name: "AYAH ALRIMAWI",
                role: "CONTENT DIRECTOR",
                image: "/team-ayah.jpg"
              },
              {
                name: "MOIZ REHMAN",
                role: "MEDIA PRODUCTION HEAD",
                image: "/team-moiz.jpg"
              },
              {
                name: "SARA ALGHABRAH",
                role: "PRODUCER",
                image: "/team-sara.jpg"
              }
            ].map((member, index) => (
              <FadeUp key={index} delay={index * 0.1}>
                <div className="group relative">
                  <div className="relative h-80 rounded-2xl overflow-hidden mb-6
                                border-2 border-transparent
                                group-hover:border-orange-500/50
                                transition-all duration-500">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/20 
                                  transition-all duration-500 flex items-end p-6">
                      <div className="transform translate-y-4 opacity-0 
                                    group-hover:translate-y-0 group-hover:opacity-100
                                    transition-all duration-500">
                        <div className="text-white">
                          <div className="w-8 h-1 bg-white mb-3" />
                          <p className="text-sm opacity-90">View Profile</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-orange-500 font-medium">{member.role}</p>
                  </div>
                </div>
              </FadeUp>
            ))}

          </div>

          {/* View Full Team Button */}
          <FadeUp>
            <div className="text-center mt-16">
              <Link
                href="/team"
                className="inline-flex items-center gap-3 px-8 py-4 
                         rounded-full bg-transparent border-2 border-orange-500
                         text-orange-500 font-medium text-lg
                         hover:bg-orange-500 hover:text-white
                         hover:shadow-[0_0_30px_rgba(255,115,0,0.5)]
                         transform hover:-translate-y-1
                         transition-all duration-300"
              >
                Meet The Full Team
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= STRATEGIC PARTNERS ================= */}
      <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white dark:from-neutral-950 dark:to-neutral-900">
        <div className="container mx-auto px-6">
          
          <FadeUp>
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-6">
                COLLABORATIONS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Strategic <span className="text-orange-500">Partners</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Trusted by industry leaders worldwide
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            
            {Array.from({ length: 12 }).map((_, index) => (
              <FadeUp key={index} delay={index * 0.05}>
                <div className="group relative">
                  <div className="aspect-square rounded-2xl bg-white dark:bg-neutral-800 
                                border border-gray-200 dark:border-neutral-700
                                flex items-center justify-center p-8
                                group-hover:border-orange-500/50
                                group-hover:shadow-[0_0_20px_rgba(255,115,0,0.1)]
                                transition-all duration-500">
                    <div className="text-2xl font-bold text-gray-400 dark:text-gray-500
                                  group-hover:text-orange-500 transition-colors duration-500">
                      LOGO
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}

          </div>

          <FadeUp>
            <div className="text-center mt-16">
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                We collaborate with leading brands, cultural institutions, and technology 
                partners to create groundbreaking experiences that redefine entertainment.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative py-32 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-500/5">
        <div className="container mx-auto px-6">
          
          <FadeUp>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Ready to Illuminate Your <span className="text-orange-500">Vision</span>?
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                Let's collaborate to create unforgettable cultural experiences that 
                resonate with audiences worldwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 
                           rounded-full bg-gradient-to-r from-orange-500 to-orange-600
                           text-white font-medium text-lg
                           hover:from-orange-600 hover:to-orange-700
                           hover:shadow-[0_0_40px_rgba(255,115,0,0.6)]
                           transform hover:-translate-y-1
                           transition-all duration-300"
                >
                  Start a Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 
                           rounded-full bg-transparent border-2 border-orange-500
                           text-orange-500 font-medium text-lg
                           hover:bg-orange-500 hover:text-white
                           hover:shadow-[0_0_30px_rgba(255,115,0,0.4)]
                           transition-all duration-300"
                >
                  View Our Portfolio
                </Link>
              </div>
            </div>
          </FadeUp>

        </div>
      </section>

    </main>
  );
}
