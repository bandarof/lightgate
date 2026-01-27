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
    services: isArabic ? "الخدمات" : "Services",
    portfolio: isArabic ? "الأعمال" : "Portfolio",
    about: isArabic ? "من نحن" : "About",
    contact: isArabic ? "تواصل" : "Contact",
  };

  const link = (p: string) => (isArabic ? `/ar${p}` : p);

  const nav = [
    { href: link("/"), label: t.home },
    { href: link("/services"), label: t.services },
    { href: link("/portfolio"), label: t.portfolio },
    { href: link("/about"), label: t.about },
    { href: link("/contact"), label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div
        className={`max-w-7xl mx-auto px-6 h-16 flex items-center ${
          isArabic ? "flex-row-reverse" : "flex-row"
        } justify-between`}
      >
        {/* LOGO */}
        <Link href={link("/")}>
          <img src="/logo.png" className="h-8" />
        </Link>

        {/* DESKTOP */}
        <nav
          className={`hidden md:flex items-center gap-10 ${
            isArabic ? "flex-row-reverse" : ""
          }`}
        >
          {nav.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}

          <LanguageToggle />
        </nav>

        {/* MOBILE */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageToggle />
          <button onClick={() => setOpen(!open)}>☰</button>
        </div>
      </div>

      {open && (
        <div
          className={`md:hidden border-t px-6 py-6 space-y-4 ${
            isArabic ? "text-right" : ""
          }`}
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
