// src/components/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");
  
  // Navigation items with translations - in correct order: Home, About, Services, Portfolio, Contact
  const navItems = [
    { 
      key: "home", 
      en: "Home", 
      ar: "الرئيسية", 
      href: "/",
      arHref: "/ar"
    },
    { 
      key: "about", 
      en: "About", 
      ar: "من نحن", 
      href: "/about",
      arHref: "/ar/about"
    },
    { 
      key: "services", 
      en: "Services", 
      ar: "الخدمات", 
      href: "/services",
      arHref: "/ar/services"
    },
    { 
      key: "portfolio", 
      en: "Portfolio", 
      ar: "الأعمال", 
      href: "/portfolio",
      arHref: "/ar/portfolio"
    },
    { 
      key: "contact", 
      en: "Contact", 
      ar: "اتصل بنا", 
      href: "/contact",
      arHref: "/ar/contact"
    },
  ];

  return (
    <header 
      dir={isArabic ? "rtl" : "ltr"}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur border-b border-gray-200 dark:border-neutral-800"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link href={isArabic ? "/ar" : "/"} className="flex items-center z-10">
          <Image
            src="/logo.png"
            alt="Lightgate"
            width={80}
            height={30}
            priority
            className="w-[80px] h-auto"
          />
        </Link>

        {/* NAV - Centered using flex-grow */}
        <div className="flex-1 flex justify-center">
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={isArabic ? item.arHref : item.href}
                className="text-gray-700 dark:text-gray-300
                           hover:text-orange-500 dark:hover:text-orange-400
                           transition-colors"
              >
                {isArabic ? item.ar : item.en}
              </Link>
            ))}
          </nav>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4 z-10">
          <div className="w-10 h-10 flex items-center justify-center">
            <ThemeToggle />
          </div>
          <LanguageToggle />
        </div>

      </div>
    </header>
  );
}
