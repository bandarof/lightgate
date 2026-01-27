"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    cta: isArabic ? "ابدأ الآن" : "Get Started",
  };

  const link = (path: string) =>
    isArabic ? `/ar${path}` : path;

  const navItems = [
    { href: link("/"), label: t.home },
    { href: link("/about"), label: t.about },
    { href: link("/services"), label: t.services },
    { href: link("/portfolio"), label: t.portfolio },
    { href: link("/contact"), label: t.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b ${
        isArabic ? "rtl" : "ltr"
      }`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link href={link("/")}>
          <Image
            src="/logo.png"
            alt="Lightgate"
            width={120}
            height={60}
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-orange-500 transition"
            >
              {item.label}
            </Link>
          ))}

          <div className="flex items-center gap-4">
            <LanguageToggle />

            <Link
              href={link("/contact")}
              className="px-5 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
            >
              {t.cta}
            </Link>
          </div>

        </nav>

        {/* MOBILE CONTROLS */}
        <div className="md:hidden flex items-center gap-4">

          <LanguageToggle />

          <button
            onClick={() => setOpen(!open)}
            className="p-2 border rounded-md"
          >
            ☰
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-6 space-y-4">

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-lg"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href={link("/contact")}
            onClick={() => setOpen(false)}
            className="block bg-orange-500 text-white text-center py-3 rounded-md"
          >
            {t.cta}
          </Link>

        </div>
      )}
    </header>
  );
}
