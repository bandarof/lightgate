"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function LocaleLink({ href, children, className }: Props) {
  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");

  const finalHref = isArabic
    ? href === "/" ? "/ar" : `/ar${href}`
    : href;

  return (
    <Link href={finalHref} className={className}>
      {children}
    </Link>
  );
}
