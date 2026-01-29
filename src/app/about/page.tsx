"use client";

import React from "react";
import { FadeUp } from "@/components/Motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Target, Eye } from "lucide-react";

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

// Animated timeline background
function TimelineBackground() {
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
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Timeline animation
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
    }> = [];

    const colors = [
      'rgba(255, 115, 0, 0.4)',
      'rgba(255, 165, 0, 0.3)',
      'rgba(255, 200, 50, 0.2)',
    ];

    // Create particles along timeline
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 0.1 + Math.random() * 0.3,
      });
    }

    // Animation loop
    let animationId: number;
    let time = 0;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      // Draw gradient background
      const gradient = ctx.createLinearGradient(
        0, 0, 
        0, canvas.height
      );
      gradient.addColorStop(0, 'rgba(255, 115, 0, 0.02)');
      gradient.addColorStop(0.5, 'rgba(255, 165, 0, 0.015)');
      gradient.addColorStop(1, 'rgba(255, 200, 0, 0.01)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw timeline path
      const timelineY = canvas.height / 2;
      ctx.beginPath();
      ctx.moveTo(100, timelineY);
      ctx.lineTo(canvas.width - 100, timelineY);
      ctx.strokeStyle = 'rgba(255, 115, 0, 0.1)';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Draw timeline glow
      ctx.beginPath();
      ctx.moveTo(100, timelineY);
      ctx.lineTo(canvas.width - 100, timelineY);
      ctx.strokeStyle = 'rgba(255, 115, 0, 0.05)';
      ctx.lineWidth = 10;
      ctx.stroke();

      // Draw pulsing orb on timeline
      const pulseSize = 8 + Math.sin(time * 2) * 2;
      ctx.beginPath();
      ctx.arc(canvas.width / 2, timelineY, pulseSize, 0, Math.PI * 2);
      const pulseGradient = ctx.createRadialGradient(
        canvas.width / 2, timelineY, 0,
        canvas.width / 2, timelineY, pulseSize
      );
      pulseGradient.addColorStop(0, 'rgba(255, 115, 0, 0.8)');
      pulseGradient.addColorStop(1, 'rgba(255, 115, 0, 0)');
      ctx.fillStyle = pulseGradient;
      ctx.fill();

      // Update and draw particles
      particles.forEach((p, i) => {
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Wrap around edges
        if (p.x < -50) p.x = canvas.width + 50;
        if (p.x > canvas.width + 50) p.x = -50;
        if (p.y < -50) p.y = canvas.height + 50;
        if (p.y > canvas.height + 50) p.y = -50;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace('0.4', p.opacity.toString());
        ctx.fill();

        // Draw connection to timeline
        const distanceToTimeline = Math.abs(p.y - timelineY);
        if (distanceToTimeline < 100) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x, timelineY);
          ctx.strokeStyle = `rgba(255, 115, 0, ${0.05 * (1 - distanceToTimeline / 100)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });

      // Draw subtle waves
      for (let w = 0; w < 3; w++) {
        const waveOffset = time * 0.5 + (w * Math.PI * 2) / 3;
        const waveAmplitude = 15;
        
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 115, 0, ${0.03 + 0.02 * Math.sin(time + w)})`;
        ctx.lineWidth = 1;
        
        for (let x = 0; x < canvas.width; x += 20) {
          const y = timelineY + 
                    Math.sin(x * 0.02 + waveOffset) * waveAmplitude;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30"
    />
  );
}

// Hexagonal background for CTA section
function CTAHexagonalBackground() {
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

      // Draw MORE VISIBLE hexagonal pattern
      ctx.strokeStyle = 'rgba(255, 115, 0, 0.08)';
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

      // Draw subtle connecting dots at hexagon centers
      ctx.fillStyle = 'rgba(255, 115, 0, 0.06)';
      for (let x = 0; x < canvas.width; x += hexSize * 1.5) {
        for (let y = 0; y < canvas.height; y += hexSize * Math.sqrt(3)) {
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fill();
          
          // Draw dots at hexagon vertices too
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const hexX = x + hexSize * Math.cos(angle);
            const hexY = y + hexSize * Math.sin(angle);
            ctx.beginPath();
            ctx.arc(hexX, hexY, 1, 0, Math.PI * 2);
            ctx.fill();
          }
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
      className="absolute inset-0 w-full h-full"
    />
  );
}

export default function About() {
  return (
    <main className="bg-white dark:bg-neutral-950">

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-screen flex items-center bg-cover bg-center"
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

            {/* Content Column with Hover Animations */}
            <FadeUp>
              <div className="space-y-8">
                <div className="relative group p-8 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent 
                              border border-orange-500/10
                              hover:border-orange-500/50
                              hover:shadow-[0_0_30px_rgba(255,115,0,0.15)]
                              transition-all duration-500">
                  <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/10 to-transparent 
                                rounded-2xl opacity-0 group-hover:opacity-100 
                                transition-opacity duration-500 blur-xl" />
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white relative z-10">
                    The Beginning
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 relative z-10">
                    Lightgate began with a bold vision to redefine cultural entertainment by 
                    uniting the world's most iconic festivals under one groundbreaking platform. 
                    What started as a creative concept has grown into a powerful brand known 
                    for blending innovation, technology, and immersive storytelling.
                  </p>
                </div>

                <div className="relative group p-8 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent 
                              border border-orange-500/10
                              hover:border-orange-500/50
                              hover:shadow-[0_0_30px_rgba(255,115,0,0.15)]
                              transition-all duration-500">
                  <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/10 to-transparent 
                                rounded-2xl opacity-0 group-hover:opacity-100 
                                transition-opacity duration-500 blur-xl" />
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white relative z-10">
                    Evolution & Growth
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 relative z-10">
                    As we expanded, Lightgate evolved into a full-service experience company, 
                    offering world-class photography, creative design, and festive event execution. 
                    We've consistently pushed boundaries while maintaining our core focus on 
                    cultural innovation.
                  </p>
                </div>

                <div className="relative group p-8 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent 
                              border border-orange-500/10
                              hover:border-orange-500/50
                              hover:shadow-[0_0_30px_rgba(255,115,0,0.15)]
                              transition-all duration-500">
                  <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/10 to-transparent 
                                rounded-2xl opacity-0 group-hover:opacity-100 
                                transition-opacity duration-500 blur-xl" />
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white relative z-10">
                    Today & Beyond
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 relative z-10">
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

      {/* ================= MAJOR MILESTONES TIMELINE ================= */}
      <section className="relative py-32 bg-gradient-to-b from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-950 overflow-hidden">
        {/* Animated Timeline Background */}
        <TimelineBackground />
        
        <div className="relative z-10 container mx-auto px-6">
          
          <FadeUp>
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-6">
                OUR JOURNEY
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Major <span className="text-orange-500">Milestones</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Significant moments that defined our growth
              </p>
            </div>
          </FadeUp>

          {/* Timeline Container */}
          <div className="relative">
            {/* Main Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500/20 via-orange-500/40 to-orange-500/20 -translate-x-1/2 hidden lg:block" />
            
            {/* Timeline Items - Reduced spacing */}
            <div className="space-y-16 lg:space-y-20">
              {[
                {
                  year: "2009",
                  title: "The Birth",
                  description: "Lightgate was founded with a vision to revolutionize cultural entertainment.",
                  image: "/milestone-birth.jpg",
                  align: "left"
                },
                {
                  year: "2011",
                  title: "Hiking & Outdoor Community",
                  description: "Established community-driven outdoor activities promoting healthy lifestyles and environmental awareness.",
                  image: "/milestone-hiking.jpg",
                  align: "right"
                },
                {
                  year: "2013",
                  title: "Peace Boat Hosting Event",
                  description: "Curated cultural exchange for 150+ international guests with Saudi folkloric performances and traditional crafts exhibition.",
                  image: "/milestone-peaceboat.jpg",
                  align: "left"
                },
                {
                  year: "2014",
                  title: "CSR Programs",
                  description: "Launched comprehensive Corporate Social Responsibility initiatives focusing on community development.",
                  image: "/milestone-csr.jpg",
                  align: "right"
                },
                {
                  year: "2015",
                  title: "Walk for a Cause",
                  description: "Community-driven initiative promoting social responsibility through organized walks and fundraising events.",
                  image: "/milestone-walk.jpg",
                  align: "left"
                },
                {
                  year: "2017",
                  title: "International Presence",
                  description: "Expanded operations to multiple countries, establishing Lightgate as an international cultural platform.",
                  image: "/milestone-international.jpg",
                  align: "right"
                },
                {
                  year: "Coming Soon",
                  title: "SPAR Initiative",
                  description: "Saudi sports initiative redefining physical activity as a lifestyle through coast-to-coast events.",
                  image: "/milestone-spar.jpg",
                  align: "left"
                }
              ].map((milestone, index) => (
                <FadeUp key={index}>
                  <div className={`relative flex flex-col lg:flex-row items-center ${milestone.align === "left" ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                    
                    {/* Timeline Node */}
                    <div className="relative z-10 lg:absolute left-1/2 -translate-x-1/2">
                      <div className="w-6 h-6 rounded-full bg-orange-500 border-4 border-white dark:border-neutral-900 shadow-lg shadow-orange-500/30" />
                      <div className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-20" />
                    </div>

                    {/* Content Card */}
                    <div className={`lg:w-5/12 mt-8 lg:mt-0 ${milestone.align === "left" ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                      <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/10 to-transparent 
                                      rounded-2xl opacity-0 group-hover:opacity-100 
                                      transition-opacity duration-500 blur-xl" />
                        
                        <div className="relative bg-white dark:bg-neutral-800 rounded-2xl p-6 
                                      border border-gray-200 dark:border-neutral-700
                                      group-hover:border-orange-500/50
                                      group-hover:shadow-[0_0_30px_rgba(255,115,0,0.15)]
                                      transition-all duration-500">
                          
                          {/* Year Badge */}
                          <div className={`mb-4 ${milestone.align === "left" ? "lg:flex lg:justify-end" : ""}`}>
                            <span className={`inline-block px-3 py-1.5 rounded-full 
                                          ${milestone.year === "Coming Soon" ? "bg-gradient-to-r from-orange-500 to-orange-600" : "bg-orange-500"} 
                                          text-white text-sm font-bold`}>
                              {milestone.year}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                            {milestone.title}
                          </h3>
                          
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                            {milestone.description}
                          </p>

                          {/* Image Preview */}
                          <div className="rounded-xl overflow-hidden h-40 relative bg-gray-100 dark:bg-neutral-700">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="relative w-full h-full">
                                <Image
                                  src={milestone.image}
                                  alt={milestone.title}
                                  fill
                                  className="object-cover"
                                  onError={(e) => {
                                    // Fallback if image doesn't exist
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent) {
                                      parent.innerHTML = `
                                        <div class="flex items-center justify-center h-full w-full bg-gradient-to-br from-orange-500/10 to-orange-500/5">
                                          <div class="text-center">
                                            <div class="text-3xl font-bold text-gray-300 mb-2">${milestone.year}</div>
                                            <div class="text-md text-gray-400">${milestone.title}</div>
                                          </div>
                                        </div>
                                      `;
                                    }
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Spacer for desktop */}
                    <div className="lg:w-2/12" />
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE TEAM MEMBERS (9 members) - FIXED IMAGES ================= */}
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
                image: "/team-ameer.png"
              },
              {
                name: "LUAI HIJAZI",
                role: "PARTNER & COO",
                image: "/team-luai.png"
              },
              {
                name: "AYAH ALRIMAWI",
                role: "CONTENT DIRECTOR",
                image: "/team-ayah.png"
              },
              {
                name: "MOIZ REHMAN",
                role: "MEDIA PRODUCTION HEAD",
                image: "/team-moiz.png"
              },
              {
                name: "SARA ALGHABRAH",
                role: "PRODUCER",
                image: "/team-sara.png"
              },
              {
                name: "ALAA TAMMAR",
                role: "CONTENT CREATOR",
                image: "/team-alaa.png"
              },
              {
                name: "MOHAMAD YAMANI",
                role: "BUSINESS DEVELOPMENT",
                image: "/team-yamani.png"
              },
              {
                name: "MOHAMAD TAYYAR",
                role: "DIGITAL ACTIVATION",
                image: "/team-tayyar.png"
              },
              {
                name: "WISAM KURDI",
                role: "BUSINESS OPERATIONS",
                image: "/team-wisam.png"
              }
            ].map((member, index) => (
              <FadeUp key={index}>
                <div className="group relative">
                  <div className="relative h-80 rounded-2xl overflow-hidden mb-6
                                border-2 border-transparent
                                group-hover:border-orange-500/50
                                group-hover:shadow-[0_0_30px_rgba(255,115,0,0.2)]
                                transition-all duration-500">
                    
                    {/* Team Member Photo - REMOVED white background */}
                    <div className="relative h-full w-full">
                      <div className="absolute inset-0">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          onError={(e) => {
                            // Fallback to placeholder if image doesn't exist
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const container = target.parentElement;
                            if (container) {
                              container.innerHTML = `
                                <div class="flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-orange-500/10 to-orange-500/5">
                                  <div class="text-5xl font-bold text-gray-300 mb-4">
                                    ${member.name.split(' ')[0].charAt(0)}
                                  </div>
                                  <div class="text-center">
                                    <div class="text-lg font-semibold text-gray-800">${member.name.split(' ')[0]}</div>
                                    <div class="text-sm text-gray-600">${member.role.split(' ')[0]}</div>
                                  </div>
                                </div>
                              `;
                            }
                          }}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent 
                                  opacity-0 group-hover:opacity-100 
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
        </div>
      </section>

      {/* ================= PROFESSIONALS WE WORK WITH ================= */}
      <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white dark:from-neutral-950 dark:to-neutral-900">
        <div className="container mx-auto px-6">
          
          <FadeUp>
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-6">
                COLLABORATORS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Professionals We <span className="text-orange-500">Work With</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Expert collaborators who enhance our creative vision
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Jassim Alsaady */}
            <FadeUp>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/10 to-transparent 
                              rounded-3xl opacity-0 group-hover:opacity-100 
                              transition-opacity duration-500 blur-xl" />
                
                <div className="relative bg-white dark:bg-neutral-800 rounded-2xl p-8 
                              border border-gray-200 dark:border-neutral-700
                              group-hover:border-orange-500/50
                              group-hover:shadow-[0_0_40px_rgba(255,115,0,0.15)]
                              transition-all duration-500 h-full">
                  
                  <div className="flex flex-col items-center text-center">
                    {/* Profile image */}
                    <div className="relative w-32 h-32 rounded-full mb-6 overflow-hidden">
                      <div className="relative w-full h-full">
                        <Image
                          src="/team-jassim.jpg"
                          alt="Jassim Alsaady"
                          fill
                          className="object-cover"
                          sizes="128px"
                          onError={(e) => {
                            // Fallback to placeholder
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                                <div class="flex items-center justify-center h-full w-full bg-gradient-to-br from-orange-500/20 to-orange-500/5">
                                  <span class="text-4xl font-bold text-orange-500">J</span>
                                </div>
                              `;
                            }
                          }}
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                      JASSIM ALSAADY
                    </h3>
                    <p className="text-orange-500 font-medium mb-4">DIRECTOR - FILM & COMMERCIAL</p>
                    
                    <div className="w-12 h-1 bg-orange-500 mb-4" />
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Award-winning film and commercial director bringing cinematic excellence to our projects.
                    </p>
                    
                    <Link 
                      href="https://www.jassimalsady.com" 
                      target="_blank"
                      className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600
                               transition-colors duration-300"
                    >
                      <span>www.jassimalsady.com</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Emad El Sayed */}
            <FadeUp>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/10 to-transparent 
                              rounded-3xl opacity-0 group-hover:opacity-100 
                              transition-opacity duration-500 blur-xl" />
                
                <div className="relative bg-white dark:bg-neutral-800 rounded-2xl p-8 
                              border border-gray-200 dark:border-neutral-700
                              group-hover:border-orange-500/50
                              group-hover:shadow-[0_0_40px_rgba(255,115,0,0.15)]
                              transition-all duration-500 h-full">
                  
                  <div className="flex flex-col items-center text-center">
                    {/* Profile image */}
                    <div className="relative w-32 h-32 rounded-full mb-6 overflow-hidden">
                      <div className="relative w-full h-full">
                        <Image
                          src="/team-emad.jpg"
                          alt="Emad El Sayed"
                          fill
                          className="object-cover"
                          sizes="128px"
                          onError={(e) => {
                            // Fallback to placeholder
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                                <div class="flex items-center justify-center h-full w-full bg-gradient-to-br from-orange-500/20 to-orange-500/5">
                                  <span class="text-4xl font-bold text-orange-500">E</span>
                                </div>
                              `;
                            }
                          }}
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                      EMAD EL SAYED
                    </h3>
                    <p className="text-orange-500 font-medium mb-4">CREATIVE DIRECTOR</p>
                    
                    <div className="w-12 h-1 bg-orange-500 mb-4" />
                    
                    <p className="text-gray-600 dark:text-gray-400">
                      Renowned creative director specializing in brand strategy and visual storytelling.
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ================= STRATEGIC PARTNERS (7 partners from PDF Page 16) ================= */}
      <section className="relative py-32 bg-white dark:bg-neutral-900">
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            
            {/* 7 Strategic Partners as shown in PDF */}
            {[
              { name: "Partner 1", logo: "/partner-1.png" },
              { name: "Partner 2", logo: "/partner-2.png" },
              { name: "Partner 3", logo: "/partner-3.png" },
              { name: "Partner 4", logo: "/partner-4.png" },
              { name: "Partner 5", logo: "/partner-5.png" },
              { name: "Partner 6", logo: "/partner-6.png" },
              { name: "Partner 7", logo: "/partner-7.png" }
            ].map((partner, index) => (
              <FadeUp key={index}>
                <div className="group relative">
                  <div className="aspect-square rounded-2xl bg-white dark:bg-neutral-800 
                                border border-gray-200 dark:border-neutral-700
                                flex items-center justify-center p-8
                                group-hover:border-orange-500/50
                                group-hover:shadow-[0_0_20px_rgba(255,115,0,0.1)]
                                transition-all duration-500">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={120}
                        height={60}
                        className="object-contain max-h-16"
                        sizes="(max-width: 768px) 100px, 120px"
                        onError={(e) => {
                          // Fallback to text if logo doesn't exist
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const container = target.parentElement;
                          if (container) {
                            container.innerHTML = `
                              <div class="flex items-center justify-center h-full w-full">
                                <div class="text-gray-400 dark:text-gray-500 text-sm text-center
                                          group-hover:text-orange-500 transition-colors duration-500">
                                  ${partner.name}
                                </div>
                              </div>
                            `;
                          }
                        }}
                      />
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

      {/* ================= CTA SECTION with Hexagonal Background ================= */}
      <section className="relative py-32 overflow-hidden">
        {/* Hexagonal Background Pattern */}
        <CTAHexagonalBackground />

        {/* Orange gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-500/5" />

        <div className="relative z-10 container mx-auto px-6">
          
          <FadeUp>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 dark:text-white">
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
