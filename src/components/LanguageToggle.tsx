"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageToggle() {
  const router = useRouter();
  const path = usePathname();
  const isArabic = path.startsWith("/ar");

  function toggle() {
    if (isArabic) {
      router.push(path.replace("/ar", "") || "/");
    } else {
      router.push("/ar" + path);
    }
  }

  return (
    <button
      onClick={toggle}
      className="w-10 text-center font-medium"
    >
      {isArabic ? "EN" : "AR"}
    </button>
  );
}
