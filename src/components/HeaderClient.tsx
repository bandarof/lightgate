"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LanguageToggle from "./LanguageToggle";

export default function HeaderClient() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const pathname = usePathname();

  const isArabic = pathname.startsWith("/ar");

  /* ---------------- THEME INIT ---------------- */
  useEffect(() => {
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const stored = localStorage.getItem("theme");

    if (stored === "dark" || (!stored && systemDark)) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  /* ---------------- TRANSLATIONS ---------------- */

  const t = {
    home: isArabic ? "الرئيسية" : "Home",
    about: isArabic ? "من نحن" : "About",
    services: isArabic ? "الخدمات" : "Services",
    portfolio: isArabic ? "الأعمال" : "Portfolio",
    contact: isArabic ? "تواصل" : "Contact",
    cta: isArabic ? "ابدأ الآن" : "Get Started",
  };

  const link = (path: string) => (isArabic ? `/ar${path}` : path);

  const navItems = [
    { href: link("/"), label: t.home },
    { href: link("/about"), label: t.about },
    { href: link("/services"), label: t.services },
    { href: link("/portfolio"), label: t.portfolio },
    { href: link("/contact"), label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 dark:bg-neutral-950/90 backdrop-blur border-gray-200 dark:border-neutral-800">
      <div
        className={`max-w-7xl mx-auto px-6 h-20 flex items-center justify-between ${
          isArabic ? "flex-row-reverse" : ""
        }`}
      >

        {/* LOGO */}
        <Link href={link("/")}>
          <Image
            src="/logo.png"
            alt="Lightgate"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav
          className={`hidden md:flex items-center gap-10 ${
            isArabic ? "flex-row-reverse" : ""
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 dark:text-gray-200 hover:text-orange-500 transition font-medium"
            >
              {item.label}
            </Link>
          ))}

          <LanguageToggle />

          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full border border-gray-300 dark:border-neutral-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <Link
            href={link("/contact")}
            className="px-5 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
          >
            {t.cta}
          </Link>
        </nav>

        {/* MOBILE RIGHT */}
        <div
          className={`md:hidden flex items-center gap-3 ${
            isArabic ? "flex-row-reverse" : ""
          }`}
        >
          <LanguageToggle />

          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full border border-gray-300 dark:border-neutral-700 flex items-center justify-center"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md border border-gray-300 dark:border-neutral-700"
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className={`md:hidden bg-white dark:bg-neutral-950 border-t border-gray-200 dark:border-neutral-800 px-6 py-6 space-y-4 ${
            isArabic ? "text-right" : ""
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-gray-700 dark:text-gray-200"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href={link("/contact")}
            className="block bg-orange-500 text-white text-center py-2 rounded-md"
            onClick={() => setOpen(false)}
          >
            {t.cta}
          </Link>
        </div>
      )}
    </header>
  );
}
