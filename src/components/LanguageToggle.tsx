"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();

  const isArabic = pathname.startsWith("/ar");

  function toggle() {
    if (isArabic) {
      router.push(pathname.replace("/ar", "") || "/");
    } else {
      router.push("/ar" + pathname);
    }
  }

  return (
    <button
      onClick={toggle}
      className="px-3 py-1 border rounded-md text-sm font-medium"
    >
      {isArabic ? "EN" : "AR"}
    </button>
  );
}
