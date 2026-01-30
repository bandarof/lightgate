"use client";

import React from "react";
import { FadeUp } from "@/components/Motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Target, Eye } from "lucide-react";
import Head from "next/head";

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Lightgate",
  "description": "A global phenomenon redefining entertainment through groundbreaking technology, unparalleled scale, and never-before-seen festive event concepts.",
  "url": "https://lightgate.com",
  "logo": "https://lightgate.com/logo.png",
  "founder": {
    "@type": "Person",
    "name": "AMEER ALRIMAWI"
  },
  "foundingDate": "2009",
  "sameAs": [
    "https://twitter.com/lightgate",
    "https://linkedin.com/company/lightgate",
    "https://instagram.com/lightgate"
  ]
};

// SIMPLE GUARANTEED WORKING ELECTRIC BACKGROUND
function SimpleElectricBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-orange-500/5 via-amber-500/3 to-orange-500/5">
      {/* Electric grid lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent animate-pulse" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent animate-pulse delay-300" />
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-orange-500/50 to-transparent animate-pulse delay-150" />
        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-amber-500/50 to-transparent animate-pulse delay-450" />
      </div>
      
      {/* Hexagonal pattern - SIMPLE CSS VERSION */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(60deg, transparent, transparent 20px, rgba(255, 115, 0, 0.3) 20px, rgba(255, 115, 0, 0.3) 21px)`,
          backgroundSize: '50px 43.3px'
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(120deg, transparent, transparent 20px, rgba(255, 165, 0, 0.2) 20px, rgba(255, 165, 0, 0.2) 21px)`,
          backgroundSize: '50px 43.3px'
        }} />
      </div>
      
      {/* Pulsing energy dots */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              animation: `pulse ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Energy bursts */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-orange-500/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              animation: `energyPulse ${Math.random() * 8 + 4}s infinite ${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// SIMPLE MISSION/VISION BACKGROUND
function SimpleMissionBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Orange glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-amber-500/5" />
      
      {/* Floating orbs */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/5 blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              animation: `float ${Math.random() * 20 + 10}s infinite ${Math.random() * 5}s ease-in-out`,
            }}
          />
        ))}
      </div>
      
      {/* Particle sparks */}
      <div className="absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-orange-400/40 to-amber-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animation: `sparkle ${Math.random() * 3 + 1}s infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// SIMPLE TIMELINE BACKGROUND
function SimpleTimelineBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-orange-500/3 via-transparent to-amber-500/2">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/30 to-transparent animate-pulse" />
      </div>
      
      {/* Energy particles along timeline */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-orange-500/30 to-amber-500/20"
            style={{
              left: `${30 + (i * 3.5)}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animation: `timelinePulse ${Math.random() * 4 + 2}s infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Main timeline node glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/5 blur-xl animate-pulse" />
    </div>
  );
}

export default function About() {
  return (
    <main className="bg-white dark:bg-neutral-950" id="main-content">
      {/* SEO Head content - using next/head for client components */}
      <Head>
        <title>About Lightgate - Redefining Cultural Entertainment Worldwide</title>
        <meta name="description" content="Discover Lightgate's mission to revolutionize cultural entertainment through innovative technology, global scale, and immersive festive event experiences." />
        <meta name="keywords" content="Lightgate, cultural entertainment, event technology, festival innovation, global events, immersive experiences" />
        <meta property="og:title" content="About Lightgate - Illuminating the World Through Culture" />
        <meta property="og:description" content="A global phenomenon redefining entertainment through groundbreaking technology and never-before-seen festive event concepts." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/about-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Lightgate - Redefining Cultural Entertainment" />
        <meta name="twitter:description" content="Discover our journey, team, and vision for global cultural innovation." />
        <meta name="twitter:image" content="/about-twitter.jpg" />
      </Head>
      
      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url(/about.jpg)" }}
        role="banner"
        aria-label="About Lightgate Hero Section"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        
        {/* Lazy loading for background */}
        <link rel="preload" href="/about.jpg" as="image" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-white">
          <FadeUp>
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm font-medium mb-4 sm:mb-6">
                ABOUT LIGHTGATE
              </span>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 sm:mb-6">
                Illuminating the World
                <br className="hidden sm:block" />
                Through <span className="text-orange-500">Culture</span>
              </h1>

              <p className="mt-4 sm:mt-8 max-w-2xl text-lg sm:text-xl opacity-90">
                A global phenomenon redefining entertainment through groundbreaking technology, 
                unparalleled scale, and never-before-seen festive event concepts.
              </p>

              <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 
                           rounded-full bg-gradient-to-r from-orange-500 to-orange-600
                           text-white font-medium text-base sm:text-lg
                           hover:from-orange-600 hover:to-orange-700
                           hover:shadow-[0_0_30px_rgba(255,115,0,0.5)]
                           transform hover:-translate-y-1
                           transition-all duration-300
                           w-full sm:w-auto text-center"
                  aria-label="View our portfolio of work"
                >
                  View Our Work
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 
                           rounded-full bg-transparent border-2 border-white/30
                           text-white font-medium text-base sm:text-lg
                           hover:border-orange-500 hover:text-orange-500
                           hover:shadow-[0_0_30px_rgba(255,115,0,0.3)]
                           transition-all duration-300
                           w-full sm:w-auto text-center"
                  aria-label="Get in touch with Lightgate"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section 
        className="relative py-16 sm:py-20 md:py-32 bg-white dark:bg-neutral-900 overflow-hidden"
        aria-labelledby="mission-vision-heading"
      >
        <h2 id="mission-vision-heading" className="sr-only">Our Mission and Vision</h2>
        
        {/* SIMPLE BUT COOL MISSION/VISION BACKGROUND */}
        <SimpleMissionBackground />

        {/* Orange gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-orange-500/5" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">

            {/* MISSION */}
            <FadeUp>
              <article className="relative group" role="article" aria-label="Our Mission">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-orange-500/10 to-transparent 
                              rounded-xl sm:rounded-3xl opacity-0 group-hover:opacity-100 
                              transition-opacity duration-500 blur-xl" />
                
                <div className="relative bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 
                              border border-gray-200/50 dark:border-neutral-700/50
                              group-hover:border-orange-500/50
                              group-hover:shadow-[0_0_30px_rgba(255,115,0,0.2)]
                              transition-all duration-500 h-full">
                  
                  {/* Animated Icon */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl mb-6 sm:mb-8
                                bg-gradient-to-br from-orange-500/20 to-orange-500/5
                                flex items-center justify-center
                                group-hover:from-orange-500/30 group-hover:to-orange-500/10
                                transition-all duration-500
                                overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent animate-pulse" />
                    <Target className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 relative z-10" aria-hidden="true" />
                  </div>

                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 animate-pulse" />
                      <span className="text-white font-bold text-base sm:text-lg relative z-10">01</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
                      Our <span className="text-orange-500">Mission</span>
                    </h3>
                  </div>

                  <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                    To revolutionize cultural entertainment by uniting the world's most iconic 
                    festivals into one immersive, technology-driven event experience—celebrating 
                    global diversity, inspiring connection, and creating unforgettable moments 
                    for audiences everywhere.
                  </p>

                  {/* Corner accents */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-orange-500/0 
                                group-hover:border-orange-500 group-hover:shadow-[0_0_10px_rgba(255,115,0,0.8)]
                                transition-all duration-500" />
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-orange-500/0 
                                group-hover:border-orange-500 group-hover:shadow-[0_0_10px_rgba(255,115,0,0.8)]
                                transition-all duration-500" />
                  
                  {/* Floating particles effect */}
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-orange-500/20 animate-ping" />
                  <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-orange-500/20 animate-ping delay-300" />
                </div>
              </article>
            </FadeUp>

            {/* VISION */}
            <FadeUp>
              <article className="relative group" role="article" aria-label="Our Vision">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-orange-500/10 to-transparent 
                              rounded-xl sm:rounded-3xl opacity-0 group-hover:opacity-100 
                              transition-opacity duration-500 blur-xl" />
                
                <div className="relative bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 
                              border border-gray-200/50 dark:border-neutral-700/50
                              group-hover:border-orange-500/50
                              group-hover:shadow-[0_0_30px_rgba(255,115,0,0.2)]
                              transition-all duration-500 h-full">
                  
                  {/* Animated Icon */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl mb-6 sm:mb-8
                                bg-gradient-to-br from-orange-500/20 to-orange-500/5
                                flex items-center justify-center
                                group-hover:from-orange-500/30 group-hover:to-orange-500/10
                                transition-all duration-500
                                overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent animate-pulse" />
                    <Eye className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 relative z-10" aria-hidden="true" />
                  </div>

                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 animate-pulse" />
                      <span className="text-white font-bold text-base sm:text-lg relative z-10">02</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
                      Our <span className="text-orange-500">Vision</span>
                    </h3>
                  </div>

                  <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                    To become the world's leading cultural event platform, transforming how 
                    people engage with art, music, and heritage by blending innovation, scale, 
                    and unity into a single, extraordinary global celebration.
                  </p>

                  {/* Corner accents */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-orange-500/0 
                                group-hover:border-orange-500 group-hover:shadow-[0_0_10px_rgba(255,115,0,0.8)]
                                transition-all duration-500" />
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-orange-500/0 
                                group-hover:border-orange-500 group-hover:shadow-[0_0_10px_rgba(255,115,0,0.8)]
                                transition-all duration-500" />
                  
                  {/* Floating particles effect */}
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-orange-500/20 animate-ping" />
                  <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-orange-500/20 animate-ping delay-300" />
                </div>
              </article>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ================= OUR HISTORY ================= */}
      <section 
        className="relative py-16 sm:py-20 md:py-32 bg-white dark:bg-neutral-950 overflow-hidden"
        aria-labelledby="history-heading"
      >
        <div className="container mx-auto px-4 sm:px-6">
          
          <FadeUp>
            <header className="text-center mb-12 sm:mb-16 md:mb-20 max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-4 sm:mb-6">
                OUR JOURNEY
              </span>
              <h2 id="history-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Our <span className="text-orange-500">History</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">
                From a bold vision to a global cultural phenomenon
              </p>
            </header>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            
            {/* Image Column */}
            <FadeUp>
              <figure className="relative group" role="figure" aria-label="Lightgate History Image">
                <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden
                              border-2 sm:border-4 border-transparent
                              group-hover:border-orange-500/30
                              transition-all duration-500">
                  <Image
                    src="/culture.jpg"
                    alt="Lightgate cultural event showing global festival celebration with diverse audience"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    priority={false}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Floating info box */}
                  <figcaption className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl 
                                bg-white/10 backdrop-blur-md border border-white/20
                                transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                                transition-all duration-500">
                    <h4 className="text-white text-base sm:text-lg font-semibold mb-1 sm:mb-2">Since 2025</h4>
                    <p className="text-gray-300 text-sm sm:text-base">Redefining cultural entertainment worldwide</p>
                  </figcaption>
                </div>
              </figure>
            </FadeUp>

            {/* Content Column with Hover Animations */}
            <FadeUp>
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <article className="relative group p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent 
                              border border-orange-500/10
                              hover:border-orange-500/50
                              hover:shadow-[0_0_20px_rgba(255,115,0,0.15)]
                              transition-all duration-500"
                              role="article"
                              aria-label="The Beginning of Lightgate">
                  <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-orange-500/10 to-transparent 
                                rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 
                                transition-opacity duration-500 blur-xl" />
                  
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-white relative z-10">
                    The Beginning
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 relative z-10">
                    Lightgate began with a bold vision to redefine cultural entertainment by 
                    uniting the world's most iconic festivals under one groundbreaking platform. 
                    What started as a creative concept has grown into a powerful brand known 
                    for blending innovation, technology, and immersive storytelling.
                  </p>
                </article>

                <article className="relative group p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent 
                              border border-orange-500/10
                              hover:border-orange-500/50
                              hover:shadow-[0_0_20px_rgba(255,115,0,0.15)]
                              transition-all duration-500"
                              role="article"
                              aria-label="Evolution and Growth of Lightgate">
                  <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-orange-500/10 to-transparent 
                                rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 
                                transition-opacity duration-500 blur-xl" />
                  
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-white relative z-10">
                    Evolution & Growth
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 relative z-10">
                    As we expanded, Lightgate evolved into a full-service experience company, 
                    offering world-class photography, creative design, and festive event execution. 
                    We've consistently pushed boundaries while maintaining our core focus on 
                    cultural innovation.
                  </p>
                </article>

                <article className="relative group p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent 
                              border border-orange-500/10
                              hover:border-orange-500/50
                              hover:shadow-[0_0_20px_rgba(255,115,0,0.15)]
                              transition-all duration-500"
                              role="article"
                              aria-label="Lightgate Today and Future Vision">
                  <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-orange-500/10 to-transparent 
                                rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 
                                transition-opacity duration-500 blur-xl" />
                  
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-white relative z-10">
                    Today & Beyond
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 relative z-10">
                    Today, we continue to push boundaries, creating unforgettable moments that 
                    connect people, cultures, and ideas across the globe. Lightgate stands as a 
                    testament to what's possible when creativity meets execution at scale.
                  </p>
                </article>
              </div>
            </FadeUp>

          </div>
        </div>
        
        {/* ================= SEAMLESS DIVIDER ================= */}
        <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 bg-gradient-to-t from-orange-500/5 via-orange-500/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-white dark:from-neutral-950 via-white/20 dark:via-neutral-950/20 to-transparent" />
        
        {/* Animated floating particles in the divider */}
        <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 overflow-hidden" aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-orange-500/10"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `${Math.random() * 48}px`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animation: `float ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </section>

      {/* ================= MAJOR MILESTONES TIMELINE ================= */}
      <section 
        className="relative py-16 sm:py-20 md:py-32 overflow-hidden"
        aria-labelledby="milestones-heading"
      >
        {/* SIMPLE TIMELINE BACKGROUND */}
        <SimpleTimelineBackground />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          
          <FadeUp>
            <header className="text-center mb-12 sm:mb-16 md:mb-20 max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-4 sm:mb-6">
                OUR JOURNEY
              </span>
              <h2 id="milestones-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Major <span className="text-orange-500">Milestones</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">
                Significant moments that defined our growth
              </p>
            </header>
          </FadeUp>

          {/* Timeline Container */}
          <div className="relative">
            {/* Main Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-orange-500/20 via-orange-500/40 to-orange-500/20 -translate-x-1/2 hidden lg:block" />
            
            {/* Timeline Items */}
            <div className="space-y-12 sm:space-y-16 lg:space-y-20">
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
                  <article 
                    className={`relative flex flex-col lg:flex-row items-center ${milestone.align === "left" ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                    role="article"
                    aria-label={`${milestone.year}: ${milestone.title}`}
                  >
                    
                    {/* Timeline Node */}
                    <div className="relative z-10 lg:absolute left-1/2 -translate-x-1/2">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full bg-orange-500 border-2 sm:border-3 lg:border-4 border-white dark:border-neutral-900 shadow-lg shadow-orange-500/30" />
                      <div className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-20" />
                    </div>

                    {/* Content Card */}
                    <div className={`lg:w-5/12 mt-6 sm:mt-8 lg:mt-0 ${milestone.align === "left" ? "lg:pr-4 lg:text-right" : "lg:pl-4"}`}>
                      <div className="relative group">
                        <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-orange-500/10 to-transparent 
                                      rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 
                                      transition-opacity duration-500 blur-xl" />
                        
                        <div className="relative bg-white dark:bg-neutral-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 
                                      border border-gray-200 dark:border-neutral-700
                                      group-hover:border-orange-500/50
                                      group-hover:shadow-[0_0_20px_rgba(255,115,0,0.15)]
                                      transition-all duration-500 h-full flex flex-col">
                          
                          {/* Year Badge */}
                          <div className={`mb-3 ${milestone.align === "left" ? "lg:flex lg:justify-end" : ""}`}>
                            <time className={`inline-block px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full 
                                          ${milestone.year === "Coming Soon" ? "bg-gradient-to-r from-orange-500 to-orange-600" : "bg-orange-500"} 
                                          text-white text-xs sm:text-sm font-bold`}
                                  dateTime={milestone.year === "Coming Soon" ? "" : milestone.year}>
                              {milestone.year}
                            </time>
                          </div>

                          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-800 dark:text-white">
                            {milestone.title}
                          </h3>
                          
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 flex-grow">
                            {milestone.description}
                          </p>

                          {/* Image Preview */}
                          <div className="rounded-lg sm:rounded-xl overflow-hidden h-28 sm:h-32 md:h-40 relative">
                            <div className="absolute inset-0">
                              <Image
                                src={milestone.image}
                                alt={`${milestone.year}: ${milestone.title}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                                loading="lazy"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  const parent = target.parentElement;
                                  if (parent) {
                                    parent.innerHTML = `
                                      <div class="flex items-center justify-center h-full w-full bg-gradient-to-br from-orange-500/10 to-orange-500/5">
                                        <div class="text-center">
                                          <div class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-300 mb-1 sm:mb-2">${milestone.year}</div>
                                          <div class="text-sm sm:text-base text-gray-400">${milestone.title}</div>
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

                    {/* Spacer for desktop */}
                    <div className="lg:w-2/12" />
                  </article>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
        
        {/* SEAMLESS DIVIDER BETWEEN MILESTONE AND TEAM SECTIONS */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-white dark:from-neutral-900 via-white/80 dark:via-neutral-900/80 to-transparent" />
      </section>

      {/* ================= CORE TEAM MEMBERS ================= */}
      <section 
        className="relative py-16 sm:py-20 md:py-32 bg-white dark:bg-neutral-900 overflow-hidden"
        aria-labelledby="team-heading"
      >
        
        {/* SIMPLE BUT ELECTRIC HEXAGONAL BACKGROUND - GUARANTEED TO SHOW */}
        <SimpleElectricBackground />
        
        {/* Top fade to connect with milestone section */}
        <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-white dark:from-neutral-900 via-white/80 dark:via-neutral-900/80 to-transparent" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          
          <FadeUp>
            <header className="text-center mb-12 sm:mb-16 md:mb-20 max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 text-orange-500 text-sm font-medium mb-4 sm:mb-6">
                OUR PEOPLE
              </span>
              <h2 id="team-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Leadership <span className="text-orange-500">Team</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">
                Visionaries driving cultural innovation forward
              </p>
            </header>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
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
                <article className="group relative" role="article" aria-label={`Team member: ${member.name}, ${member.role}`}>
                  <div className="relative h-60 sm:h-72 md:h-80 rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6
                                border border-transparent
                                group-hover:border-orange-500/70
                                group-hover:shadow-[0_0_30px_rgba(255,115,0,0.4)]
                                transition-all duration-500
                                bg-gradient-to-br from-gray-50 to-white dark:from-neutral-800 dark:to-neutral-900">
                    
                    {/* Team Member Photo */}
                    <div className="relative h-full w-full">
                      <div className="absolute inset-0">
                        <Image
                          src={member.image}
                          alt={`${member.name}, ${member.role}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const container = target.parentElement;
                            if (container) {
                              container.innerHTML = `
                                <div class="flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-orange-500/10 to-amber-500/5">
                                  <div class="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-400 mb-3 sm:mb-4">
                                    ${member.name.split(' ')[0].charAt(0)}
                                  </div>
                                  <div class="text-center">
                                    <div class="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">${member.name.split(' ')[0]}</div>
                                    <div class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">${member.role.split(' ')[0]}</div>
                                  </div>
                                </div>
                              `;
                            }
                          }}
                        />
                      </div>
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                                    opacity-0 group-hover:opacity-100 
                                    transition-all duration-500 flex items-end p-4 sm:p-6">
                        <div className="transform translate-y-4 opacity-0 
                                      group-hover:translate-y-0 group-hover:opacity-100
                                      transition-all duration-500">
                          <div className="text-white">
                            <div className="w-6 sm:w-8 h-0.5 sm:h-1 bg-gradient-to-r from-orange-400 to-amber-400 mb-2 sm:mb-3" />
                            <p className="text-xs sm:text-sm opacity-90 flex items-center gap-1 sm:gap-2">
                              <span className="text-orange-300">View Profile</span>
                              <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-orange-300" aria-hidden="true" />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-orange-500 font-medium text-xs sm:text-sm bg-gradient-to-r from-orange-500/20 to-amber-500/20 px-3 py-1 rounded-full inline-block">
                      {member.role}
                    </p>
                  </div>
                </article>
              </FadeUp>
            ))}

          </div>
          
          {/* Team synergy message */}
          <FadeUp>
            <div className="text-center mt-12 sm:mt-16 md:mt-20 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-3 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 animate-pulse" aria-hidden="true" />
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  <span className="text-orange-500 font-semibold">Electric Synergy:</span> Our team collaborates with dynamic energy and precision
                </p>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500 animate-pulse delay-300" aria-hidden="true" />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= PROFESSIONALS WE WORK WITH ================= */}
      <section 
        className="relative py-16 sm:py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-neutral-950 dark:to-neutral-900"
        aria-labelledby="collaborators-heading"
      >
        <div className="container mx-auto px-4 sm:px-6">
          
          <FadeUp>
            <header className="text-center mb-12 sm:mb-16 md:mb-20 max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-4 sm:mb-6">
                COLLABORATORS
              </span>
              <h2 id="collaborators-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Professionals We <span className="text-orange-500">Work With</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">
                Expert collaborators who enhance our creative vision
              </p>
            </header>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            
            {/* Jassim Alsaady */}
            <FadeUp>
              <article className="relative group h-full" role="article" aria-label="Collaborator: Jassim Alsaady">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-orange-500/10 to-transparent 
                              rounded-xl sm:rounded-3xl opacity-0 group-hover:opacity-100 
                              transition-opacity duration-500 blur-xl" />
                
                <div className="relative bg-white dark:bg-neutral-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 
                              border border-gray-200 dark:border-neutral-700
                              group-hover:border-orange-500/50
                              group-hover:shadow-[0_0_30px_rgba(255,115,0,0.15)]
                              transition-all duration-500 h-full flex flex-col">
                  
                  <div className="flex flex-col items-center text-center flex-grow">
                    {/* Profile image */}
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-4 sm:mb-6 overflow-hidden bg-gray-100 dark:bg-neutral-700">
                      <Image
                        src="/team-jassim.jpg"
                        alt="Jassim Alsaady, Director - Film & Commercial"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 96px, 128px"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="flex items-center justify-center h-full w-full bg-gradient-to-br from-orange-500/20 to-orange-500/5">
                                <span class="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500">J</span>
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                    
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 text-gray-800 dark:text-white">
                      JASSIM ALSAADY
                    </h3>
                    <p className="text-orange-500 font-medium text-sm sm:text-base mb-3 sm:mb-4">DIRECTOR - FILM & COMMERCIAL</p>
                    
                    <div className="w-8 sm:w-10 md:w-12 h-0.5 sm:h-1 bg-orange-500 mb-3 sm:mb-4" aria-hidden="true" />
                    
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 flex-grow">
                      Award-winning film and commercial director bringing cinematic excellence to our projects.
                    </p>
                    
                    <Link 
                      href="https://www.jassimalsady.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 sm:gap-2 text-orange-500 hover:text-orange-600
                               transition-colors duration-300 mt-auto text-sm sm:text-base"
                      aria-label="Visit Jassim Alsaady's website"
                    >
                      <span>www.jassimalsady.com</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            </FadeUp>

            {/* Emad El Sayed */}
            <FadeUp>
              <article className="relative group h-full" role="article" aria-label="Collaborator: Emad El Sayed">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-orange-500/10 to-transparent 
                              rounded-xl sm:rounded-3xl opacity-0 group-hover:opacity-100 
                              transition-opacity duration-500 blur-xl" />
                
                <div className="relative bg-white dark:bg-neutral-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 
                              border border-gray-200 dark:border-neutral-700
                              group-hover:border-orange-500/50
                              group-hover:shadow-[0_0_30px_rgba(255,115,0,0.15)]
                              transition-all duration-500 h-full flex flex-col">
                  
                  <div className="flex flex-col items-center text-center flex-grow">
                    {/* Profile image */}
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-4 sm:mb-6 overflow-hidden bg-gray-100 dark:bg-neutral-700">
                      <Image
                        src="/team-emad.jpg"
                        alt="Emad El Sayed, Creative Director"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 96px, 128px"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="flex items-center justify-center h-full w-full bg-gradient-to-br from-orange-500/20 to-orange-500/5">
                                <span class="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500">E</span>
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                    
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 text-gray-800 dark:text-white">
                      EMAD EL SAYED
                    </h3>
                    <p className="text-orange-500 font-medium text-sm sm:text-base mb-3 sm:mb-4">CREATIVE DIRECTOR</p>
                    
                    <div className="w-8 sm:w-10 md:w-12 h-0.5 sm:h-1 bg-orange-500 mb-3 sm:mb-4" aria-hidden="true" />
                    
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 flex-grow">
                      Renowned creative director specializing in brand strategy and visual storytelling.
                    </p>
                    
                    <Link 
                      href="https://www.emadelsayed.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 sm:gap-2 text-orange-500 hover:text-orange-600
                               transition-colors duration-300 mt-auto text-sm sm:text-base"
                      aria-label="Visit Emad El Sayed's website"
                    >
                      <span>www.emadelsayed.com</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ================= STRATEGIC PARTNERS ================= */}
      <section 
        className="relative py-16 sm:py-20 md:py-32 bg-white dark:bg-neutral-900"
        aria-labelledby="partners-heading"
      >
        <div className="container mx-auto px-4 sm:px-6">
          
          <FadeUp>
            <header className="text-center mb-12 sm:mb-16 md:mb-20 max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-4 sm:mb-6">
                COLLABORATIONS
              </span>
              <h2 id="partners-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Strategic <span className="text-orange-500">Partners</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">
                Trusted by industry leaders worldwide
              </p>
            </header>
          </FadeUp>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            
            {/* Strategic Partners */}
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
                  <div className="aspect-square rounded-lg sm:rounded-xl md:rounded-2xl bg-white dark:bg-neutral-800 
                                border border-gray-200 dark:border-neutral-700
                                flex items-center justify-center p-4 sm:p-6 md:p-8
                                group-hover:border-orange-500/50
                                group-hover:shadow-[0_0_15px_rgba(255,115,0,0.1)]
                                transition-all duration-500">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} - Strategic Partner`}
                        width={80}
                        height={40}
                        className="object-contain max-h-10 sm:max-h-12 md:max-h-16"
                        sizes="(max-width: 640px) 40px, (max-width: 768px) 50px, 60px"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const container = target.parentElement;
                          if (container) {
                            container.innerHTML = `
                              <div class="flex items-center justify-center h-full w-full">
                                <div class="text-gray-400 dark:text-gray-500 text-xs sm:text-sm text-center
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
            <div className="text-center mt-12 sm:mt-16">
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                We collaborate with leading brands, cultural institutions, and technology 
                partners to create groundbreaking experiences that redefine entertainment.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section 
        className="relative py-16 sm:py-20 md:py-32 overflow-hidden"
        aria-labelledby="cta-heading"
      >
        {/* Hexagonal Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-500/5">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(60deg, transparent, transparent 25px, rgba(255, 115, 0, 0.2) 25px, rgba(255, 115, 0, 0.2) 26px)`,
              backgroundSize: '50px 43.3px'
            }} />
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          
          <FadeUp>
            <header className="max-w-4xl mx-auto text-center">
              <h2 id="cta-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-white">
                Ready to Illuminate Your <span className="text-orange-500">Vision</span>?
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto">
                Let's collaborate to create unforgettable cultural experiences that 
                resonate with audiences worldwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 
                           rounded-full bg-gradient-to-r from-orange-500 to-orange-600
                           text-white font-medium text-base sm:text-lg
                           hover:from-orange-600 hover:to-orange-700
                           hover:shadow-[0_0_30px_rgba(255,115,0,0.6)]
                           transform hover:-translate-y-1
                           transition-all duration-300
                           w-full sm:w-auto text-center"
                  aria-label="Start a project with Lightgate"
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                </Link>
                
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 
                           rounded-full bg-transparent border-2 border-orange-500
                           text-orange-500 font-medium text-base sm:text-lg
                           hover:bg-orange-500 hover:text-white
                           hover:shadow-[0_0_20px_rgba(255,115,0,0.4)]
                           transition-all duration-300
                           w-full sm:w-auto text-center"
                  aria-label="View our portfolio of work"
                >
                  View Our Portfolio
                </Link>
              </div>
            </header>
          </FadeUp>

        </div>
      </section>

      {/* Add CSS animation for floating particles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-8px) translateX(4px); }
          66% { transform: translateY(4px) translateX(-4px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        
        @keyframes energyPulse {
          0%, 100% { opacity: 0; transform: scale(0.8); }
          50% { opacity: 0.1; transform: scale(1.2); }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0.1; transform: scale(0.8); }
          50% { opacity: 0.8; transform: scale(1); }
        }
        
        @keyframes timelinePulse {
          0%, 100% { opacity: 0.2; transform: translateY(0); }
          50% { opacity: 0.5; transform: translateY(-5px); }
        }
        
        /* Reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .animate-ping,
          .animate-pulse,
          [class*="animate-"] {
            animation: none !important;
          }
        }
        
        /* Performance optimizations */
        @media (max-width: 768px) {
          .backdrop-blur-sm {
            backdrop-filter: blur(4px);
          }
        }
      `}</style>

    </main>
  );
}
