"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur border-b border-gray-200 dark:border-neutral-800">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO - Increased size */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Lightgate"
            width={160}
            height={50}
            priority
            className="w-[160px] h-auto"
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

        {/* RIGHT SIDE - Removed Get Started button and increased spacing */}
        <div className="flex items-center gap-6">

          <LanguageToggle />
          <ThemeToggle />

        </div>

      </div>
    </header>
  );
}
