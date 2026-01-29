"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-neutral-950 text-gray-300">

      {/* ANIMATED GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-blue-500/20 animate-gradient" />

      <div className="relative z-10 container mx-auto px-6 py-24">

        <div className="grid md:grid-cols-3 gap-16">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold text-white">Lightgate</h3>
            <p className="mt-4 max-w-sm opacity-80">
              Illuminating the world through culture, technology and unforgettable experiences.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-orange-400">About</Link></li>
              <li><Link href="/services" className="hover:text-orange-400">Services</Link></li>
              <li><Link href="/contact" className="hover:text-orange-400">Contact</Link></li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>

            <a
              href="https://www.instagram.com/lightgate.co/"
              target="_blank"
              className="inline-block hover:text-orange-400 transition"
            >
              Instagram
            </a>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-20 border-t border-white/10 pt-8 text-sm text-center opacity-70">
          © {new Date().getFullYear()} Lightgate. All rights reserved.
        </div>

      </div>

      {/* KEYFRAMES */}
      <style jsx>{`
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradientMove 15s ease infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

    </footer>
  );
}
