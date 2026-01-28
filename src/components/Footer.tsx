"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");

  const t = {
    tagline: isArabic
      ? "نصمم تجارب ثقافية تعيد تعريف الترفيه على نطاق عالمي."
      : "We design cultural experiences that redefine entertainment globally.",

    home: isArabic ? "الرئيسية" : "Home",
    about: isArabic ? "من نحن" : "About",
    services: isArabic ? "الخدمات" : "Services",
    portfolio: isArabic ? "الأعمال" : "Portfolio",
    contact: isArabic ? "تواصل" : "Contact",

    follow: isArabic ? "تابعنا" : "Follow Us",
    rights: isArabic
      ? "جميع الحقوق محفوظة"
      : "All rights reserved",
  };

  const link = (path: string) =>
    isArabic ? `/ar${path}` : path;

  return (
    <footer className="bg-black text-white pt-32 pb-12">
      <div className="container mx-auto px-6">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">

          {/* BRAND */}
          <div>
            <Image
              src="/logo.png"
              alt="Lightgate"
              width={120}
              height={40}
              className="mb-6"
            />

            <p className="text-gray-400 leading-relaxed max-w-sm">
              {t.tagline}
            </p>
          </div>

          {/* NAV */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {isArabic ? "الروابط" : "Links"}
            </h4>

            <ul className="space-y-3 text-gray-400">
              <li><Link href={link("/")}>{t.home}</Link></li>
              <li><Link href={link("/about")}>{t.about}</Link></li>
              <li><Link href={link("/services")}>{t.services}</Link></li>
              <li><Link href={link("/portfolio")}>{t.portfolio}</Link></li>
              <li><Link href={link("/contact")}>{t.contact}</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {isArabic ? "تواصل معنا" : "Contact"}
            </h4>

            <div className="space-y-3 text-gray-400">
              <p>Riyadh | Jeddah, KSA</p>
              <p>+966-569169169</p>
              <p>+966-591015666</p>
              <p>lightgate.fest@gmail.com</p>
              <p>www.Lightgate.media</p>
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-white/10 mb-10" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} Lightgate. {t.rights}
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-500">Instagram</a>
            <a href="#" className="hover:text-orange-500">X</a>
            <a href="#" className="hover:text-orange-500">LinkedIn</a>
          </div>

        </div>

      </div>
    </footer>
  );
}
