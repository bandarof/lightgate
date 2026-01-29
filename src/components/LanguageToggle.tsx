// src/components/LanguageToggle.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

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
        w-10 h-10
      "
      aria-label={isArabic ? "Switch to English" : "Switch to Arabic"}
      title={isArabic ? "Switch to English" : "Switch to Arabic"}
    >
      {/* Show Saudi flag when English is selected (click to switch to Arabic) */}
      {/* Show US flag when Arabic is selected (click to switch to English) */}
      {isArabic ? (
        // When in Arabic, show US flag (click to switch to English)
        <div className="w-6 h-6 rounded overflow-hidden flex items-center justify-center bg-gray-100">
          <div className="w-full h-1/2 bg-blue-600"></div>
          <div className="w-full h-1/2 bg-red-600"></div>
          <div className="absolute w-4 h-4">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-red-600 rounded-full"></div>
          </div>
        </div>
      ) : (
        // When in English, show Saudi flag (click to switch to Arabic)
        <div className="w-6 h-6 rounded overflow-hidden flex items-center justify-center bg-green-600">
          <span className="text-white text-xs font-bold">SA</span>
        </div>
      )}
    </button>
  );
}
