"use client";

import { useState } from "react";
import Link from "next/link";
import LanguageToggle from "./LanguageToggle";

export default function HeaderClient() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Lightgate
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              {item.label}
            </Link>
          ))}

          <LanguageToggle />

          <Link
            href="/contact"
            className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Get Started
          </Link>
        </nav>

        {/* MOBILE RIGHT SIDE */}
        <div className="md:hidden flex items-center gap-3">

          <LanguageToggle />

          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md border"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3">

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-gray-700"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="block bg-blue-600 text-white text-center py-2 rounded-md"
            onClick={() => setOpen(false)}
          >
            Get Started
          </Link>

        </div>
      )}
    </header>
  );
}
