"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur border-b border-gray-200 dark:border-neutral-800">
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Lightgate"
            width={120}
            height={40}
            priority
            className="w-[120px] h-auto"
          />
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          {["Home", "About", "Portfolio", "Services", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item === "Home" ? "" : item.toLowerCase()}`}
              className="text-gray-700 dark:text-gray-300
                         hover:text-orange-500 dark:hover:text-orange-400
                         transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">

          <ThemeToggle />

          <Link
            href="/contact"
            className="px-6 h-11 flex items-center justify-center
                       rounded-lg bg-orange-500 hover:bg-orange-600
                       text-white text-sm font-medium
                       transition whitespace-nowrap"
          >
            Get Started
          </Link>

        </div>

      </div>
    </header>
  );
}
