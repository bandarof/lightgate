"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();

  const isArabic = pathname.startsWith("/ar");

  const toggleLanguage = () => {
    if (isArabic) {
      router.push("/");
      document.documentElement.dir = "ltr";
      document.documentElement.lang = "en";
    } else {
      router.push("/ar");
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "ar";
    }
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 border rounded-md text-sm hover:bg-gray-100"
    >
      {isArabic ? "EN" : "AR"}
    </button>
  );
}
