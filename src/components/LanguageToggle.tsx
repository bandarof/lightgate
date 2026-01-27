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
        px-3 py-1.5
        rounded-full
        border
        text-sm
        font-medium
        flex items-center gap-2
        hover:bg-orange-500 hover:text-white
        transition
      "
    >
      <span className="text-lg">🌐</span>
      {isArabic ? "EN" : "AR"}
    </button>
  );
}
