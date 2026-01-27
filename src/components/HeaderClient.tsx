"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageToggle from "./LanguageToggle";

export default function HeaderClient() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");

  const t = {
    home: isArabic ? "الرئيسية" : "Home",
    about: isArabic ? "من نحن" : "About",
    services: isArabic ? "الخدمات" : "Services",
    portfolio: isArabic ? "الأعمال" : "Portfolio",
    contact: isArabic ? "تواصل" : "Contact",
  };

  const link = (p: string) => (isArabic ? `/ar${p}` : p);

  const nav = [
    { href: link("/"), label: t.home },
    { href: link("/about"), label: t.about },
    { href: link("/services"), label: t.services },
    { href: link("/portfolio"), label: t.portfolio },
    { href: link("/contact"), label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LEFT: LOGO */}
        <Link href={link("/")}>
          <img
            src="/logo.png"
            alt="Lightgate"
            className="h-12"   // BIGGER LOGO
          />
        </Link>

        {/* CENTER: DESKTOP NAV */}
        <nav
          className={`hidden md:flex items-center gap-10 ${
            isArabic ? "text-right" : ""
          }`}
          dir={isArabic ? "rtl" : "ltr"}
        >
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="hover:text-blue-600 transition"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT: TOGGLE + HAMBURGER */}
        <div className="flex items-center gap-4">

          <LanguageToggle />

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-xl"
            aria-label="Menu"
          >
            ☰
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className={`md:hidden px-6 py-6 space-y-4 border-t ${
            isArabic ? "text-right" : ""
          }`}
          dir={isArabic ? "rtl" : "ltr"}
        >
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="block"
              onClick={() => setOpen(false)}
            >
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
