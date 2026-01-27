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
    { href: "/", label: t.home },
    { href: "/services", label: t.services },
    { href: "/portfolio", label: t.portfolio },
    { href: "/about", label: t.about },
    { href: "/contact", label: t.contact },
  ];

  return (
    <header
      className="sticky top-0 z-50 bg-white border-b"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        <Link href={link("/")} className="text-xl font-bold">
          Lightgate
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link key={n.href} href={link(n.href)}>
              {n.label}
            </Link>
          ))}
          <LanguageToggle />
        </nav>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageToggle />
          <button onClick={() => setOpen(!open)}>☰</button>
        </div>

      </div>

      {open && (
        <div className="md:hidden px-4 py-4 space-y-3 border-t">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={link(n.href)}
              onClick={() => setOpen(false)}
              className="block"
            >
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
