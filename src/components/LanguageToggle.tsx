"use client";

import { useState } from "react";

export default function LanguageToggle() {
  const [lang, setLang] = useState("en");

  return (
    <button
      onClick={() => {
        const next = lang === "en" ? "ar" : "en";
        setLang(next);
        document.documentElement.lang = next;
        document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
      }}
      className="lang-toggle"
    >
      {lang === "en" ? "AR" : "EN"}
    </button>
  );
}
