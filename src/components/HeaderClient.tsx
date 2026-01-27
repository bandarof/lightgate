"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageToggle from "./LanguageToggle";

export default function HeaderClient() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isArabic = pathname.startsWith("/ar");

  /* ---------------------------------- */
  /* TRANSLATIONS */
  /* ---------------------------------- */

  const t = {
    home: isArabic ? "الرئيسية" : "Home",
    services: isArabic ? "الخدمات" : "Services",
    portfolio: isArabic ? "الأعمال" : "Portfolio",
    about: isArabic ? "من نحن" : "About",
    contact: isArabic ? "تواصل" : "Contact",
    cta: isArabic ? "ابدأ الآن" : "Get Started",
  };

  /* ---------------------------------- */
  /* ROUTE HELPER */
  /* ---------------------------------- */

  const link = (path: string) => {
    if (isArabic) {
      return path === "/" ? "/ar" : `/ar${path}`;
    }
    return path;
  };

  const navItems = [
    { href: link("/"), label: t.home },
    { href: link("/services"), label: t.services },
    { href: link("/portfolio"), label: t.portfolio },
    { href: link("/about"), label: t.about },
    { href: link("/contact"), label: t.contact },
  ];

  /* ---------------------------------- */

  return (
    <header
      className="sticky top-0 z-50 bg-white border-b"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div
        className={`max-w-7xl mx-auto px-4 h-16 flex items-center justify-between
        ${isArabic ? "flex-row-reverse" : ""}`}
      >

        {/* LOGO */}
        <Link
          href={link("/")}
          className="text-2xl font-bold text-blue-600"
        >
          Lightgate
        </Link>

        {/* DESKTOP NAV */}
        <nav
          className={`hidden md:flex items-center gap-8
          ${isArabic ? "flex-row-reverse" : ""}`}
        >
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
            href={link("/contact")}
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            {t.cta}
          </Link>
        </nav>

        {/* MOBILE RIGHT */}
        <div
          className={`md:hidden flex items-center gap-3
          ${isArabic ? "flex-row-reverse" : ""}`}
        >
          <LanguageToggle />

          <button
            onClick={() => setOpen(!open)}
            className="p-2 border rounded-md"
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="md:hidden bg-white border-t px-4 py-4 space-y-3"
          dir={isArabic ? "rtl" : "ltr"}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-gray-700"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href={link("/contact")}
            onClick={() => setOpen(false)}
            className="block bg-blue-600 text-white text-center py-2 rounded-md"
          >
            {t.cta}
          </Link>
        </div>
      )}
    </header>
  );
}
