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

  // Using Unicode flag emojis with better fallback
  const getFlag = () => {
    if (isArabic) {
      // US flag emoji
      return String.fromCodePoint(0x1F1FA, 0x1F1F8);
    } else {
      // Saudi Arabia flag emoji
      return String.fromCodePoint(0x1F1F8, 0x1F1E6);
    }
  };

  return (
    <button
      onClick={toggle}
      className="
        flex items-center justify-center
        hover:opacity-80
        transition-opacity
        w-10 h-10
        text-2xl
      "
      aria-label={isArabic ? "Switch to English" : "Switch to Arabic"}
      title={isArabic ? "Switch to English" : "Switch to Arabic"}
    >
      <span className="text-2xl" role="img" aria-hidden="true">
        {getFlag()}
      </span>
    </button>
  );
}
