// src/components/LanguageToggle.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");

  const toggle = () => {
    if (isArabic) {
      router.push(pathname.replace("/ar", "") || "/");
    } else {
      router.push("/ar" + pathname);
    }
  };

  return (
    <button
      onClick={toggle}
      className="
        flex items-center justify-center
        hover:opacity-80
        transition-opacity
        text-2xl
      "
      aria-label={isArabic ? "Switch to English" : "Switch to Arabic"}
      title={isArabic ? "Switch to English" : "Switch to Arabic"}
    >
      {/* Show Saudi flag when English is selected (click to switch to Arabic) */}
      {/* Show US flag when Arabic is selected (click to switch to English) */}
      {isArabic ? (
        // When in Arabic, show US flag (click to switch to English)
        <span className="text-2xl">🇺🇸</span>
      ) : (
        // When in English, show Saudi flag (click to switch to Arabic)
        <span className="text-2xl">🇸🇦</span>
      )}
    </button>
  );
}
