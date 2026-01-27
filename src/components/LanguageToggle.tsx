"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();

  const isArabic = pathname.startsWith("/ar");

  function toggleLang() {
    if (isArabic) {
      const newPath = pathname.replace("/ar", "") || "/";
      router.push(newPath);
    } else {
      router.push(`/ar${pathname}`);
    }
  }

  return (
    <button
      onClick={toggleLang}
      className="px-3 py-1 border rounded-md text-sm"
    >
      {isArabic ? "EN" : "AR"}
    </button>
  );
}
