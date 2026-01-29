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
        px-2.5 py-1
        rounded-full
        border border-gray-300 dark:border-neutral-700
        text-xs font-medium
        flex items-center gap-1.5
        bg-white dark:bg-neutral-800
        hover:bg-gray-50 dark:hover:bg-neutral-700
        transition-colors
        whitespace-nowrap
      "
      aria-label={isArabic ? "Switch to English" : "Switch to Arabic"}
    >
      <span className="text-sm">🌐</span>
      {isArabic ? "EN" : "AR"}
    </button>
  );
}
