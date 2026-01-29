// src/components/LanguageToggle.tsx - USING IMAGE FILES
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
      <div className="w-6 h-4 relative">
        {isArabic ? (
          <Image src="/flags/us.svg" alt="US Flag" fill className="object-contain" />
        ) : (
          <Image src="/flags/sa.svg" alt="Saudi Flag" fill className="object-contain" />
        )}
      </div>
    </button>
  );
}
