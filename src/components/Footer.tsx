"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-neutral-950 text-gray-300 overflow-hidden">

      {/* SUBTLE ANIMATED GLOW */}
      <div className="absolute inset-0 opacity-30 animate-pulse bg-[radial-gradient(circle_at_top,rgba(255,115,0,0.15),transparent_60%)]" />

      <div className="relative z-10 container mx-auto px-6 py-24">

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold text-white">Lightgate</h3>
            <p className="mt-2 max-w-sm text-sm opacity-70">
              Illuminating the world through culture.
            </p>
          </div>

          {/* LINKS */}
          <div className="flex gap-10 text-sm">
            <Link href="/about" className="hover:text-orange-400">About</Link>
            <Link href="/portfolio" className="hover:text-orange-400">Portfolio</Link>
            <Link href="/services" className="hover:text-orange-400">Services</Link>
            <Link href="/contact" className="hover:text-orange-400">Contact</Link>
          </div>

          {/* SOCIAL */}
          <a
            href="https://www.instagram.com/lightgate.co/"
            target="_blank"
            className="p-3 rounded-full border border-white/20 hover:border-orange-400 hover:text-orange-400 transition"
          >
            <Instagram size={20} />
          </a>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-20 text-center text-xs opacity-60">
          © {new Date().getFullYear()} Lightgate. All rights reserved.
        </div>

      </div>

    </footer>
  );
}

