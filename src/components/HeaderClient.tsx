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

  /* ---------------- THEME ---------------- */
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const active =
      stored === "dark" || (!stored && system) ? "dark" : "light";

    document.documentElement.classList.toggle("dark", active === "dark");
    setTheme(active);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  /* ---------------- COPY ---------------- */

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
    <header
      className="
        sticky top-0 z-50
        bg-white dark:bg-neutral-950
        border-b border-gray-200 dark:border-neutral-800
      "
    >
      <div
        className={`max-w-7xl mx-auto px-6 h-[120px] flex items-center justify-between ${
          isArabic ? "flex-row-reverse" : ""
        }`}
      >
        {/* LOGO */}
        <Link href={link("/")} className="flex items-center">
          <div className="w-[180px] h-[60px] relative">
            <Image
              src="/logo.png"
              alt="Lightgate"
              fill
              className="object-contain"
              priority
            />
          </div>
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
              className="
                text-gray-900 dark:text-white
                hover:text-orange-500 transition font-medium
              "
            >
              {item.label}
            </Link>
          ))}

          <LanguageToggle />

          {/* THEME */}
          <button
            onClick={toggleTheme}
            className="
              w-11 h-11 rounded-full
              border-0
              flex items-center justify-center
              bg-gray-50 dark:bg-neutral-900
            "
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <Link
            href={link("/contact")}
            className="
              px-6 py-3 rounded-md
              bg-orange-500 text-white
              hover:bg-orange-600 transition
            "
          >
            {t.cta}
          </Link>
        </nav>

        {/* MOBILE */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageToggle />

          <button
            onClick={toggleTheme}
            className="
              w-11 h-11 rounded-full
              border-0
              flex items-center justify-center
              bg-gray-50 dark:bg-neutral-900
            "
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="
              p-3 rounded-md
              border border-gray-300 dark:border-neutral-700
              text-gray-900 dark:text-white
            "
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
            md:hidden
            bg-white dark:bg-neutral-950
            border-t border-gray-200 dark:border-neutral-800
            px-6 py-6 space-y-4
          "
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-gray-900 dark:text-white"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href={link("/contact")}
            className="
              block text-center
              bg-orange-500 text-white
              py-2 rounded-md
            "
            onClick={() => setOpen(false)}
          >
            {t.cta}
          </Link>
        </div>
      )}
    </header>
  );
}
