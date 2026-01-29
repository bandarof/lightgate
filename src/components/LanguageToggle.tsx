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
        flex items-center justify-center
        hover:opacity-80
        transition-opacity
        w-10 h-10
      "
      aria-label={isArabic ? "Switch to English" : "Switch to Arabic"}
      title={isArabic ? "Switch to English" : "Switch to Arabic"}
    >
      {isArabic ? (
        // USA Flag SVG
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 7410 3900" 
          className="w-6 h-4"
          fill="none"
        >
          <rect width="7410" height="3900" fill="#b22234"/>
          <rect width="7410" height="3900" fill="none" stroke="#b22234" strokeWidth="300"/>
          <path d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0" stroke="#fff" strokeWidth="300"/>
          <rect width="2964" height="2100" fill="#3c3b6e"/>
          <g fill="#fff">
            <g id="s18">
              <g id="s9">
                <g id="s5">
                  <g id="s4">
                    <path id="s" d="M247,90 317.534230,307.082039 132.873218,172.917961H361.126782L176.465770,307.082039z"/>
                    <use xlinkHref="#s" y="420"/>
                    <use xlinkHref="#s" y="840"/>
                    <use xlinkHref="#s" y="1260"/>
                  </g>
                  <use xlinkHref="#s" y="1680"/>
                </g>
                <use xlinkHref="#s4" x="247" y="210"/>
              </g>
              <use xlinkHref="#s9" x="494"/>
            </g>
            <use xlinkHref="#s18" x="988"/>
            <use xlinkHref="#s9" x="1976"/>
            <use xlinkHref="#s5" x="2470"/>
          </g>
        </svg>
      ) : (
        // Saudi Arabia Flag SVG
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 750 500" 
          className="w-6 h-4"
        >
          <rect width="750" height="500" fill="#006233"/>
          <path d="M0,0H750V500H0Z" fill="none" stroke="#fff" strokeWidth="100"/>
          <text 
            x="375" 
            y="265" 
            textAnchor="middle" 
            fill="#fff" 
            fontFamily="Arial, sans-serif" 
            fontSize="180" 
            fontWeight="bold"
            style={{ userSelect: 'none' }}
          >
            ﺍﻟﻠﻪ ﺃﻛﺒﺮ
          </text>
          <path 
            d="M375,125 C375,170 340,205 295,205 C250,205 215,170 215,125 C215,80 250,45 295,45 C340,45 375,80 375,125 Z" 
            fill="none" 
            stroke="#fff" 
            strokeWidth="15"
          />
          <path 
            d="M295,85 L295,165 M255,125 L335,125" 
            stroke="#fff" 
            strokeWidth="15"
          />
        </svg>
      )}
    </button>
  );
}
