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
      className="px-3 py-1 border rounded-md text-sm hover:bg-gray-100"
    >
      {isArabic ? "EN" : "AR"}
    </button>
  );
}
