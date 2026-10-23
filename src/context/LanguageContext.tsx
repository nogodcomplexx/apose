"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "cs" | "en" | "de";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  isEn: boolean;
  isDe: boolean;
  isCs: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "cs",
  setLang: () => {},
  isEn: false,
  isDe: false,
  isCs: true,
});

export const useLanguage = () => useContext(LanguageContext);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("cs");

  useEffect(() => {
    // 1. Check URL query param first (takes absolute highest precedence upon navigation)
    let initialLang: Language | null = null;
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get("lang") as Language | null;
      if (urlLang === "en" || urlLang === "cs" || urlLang === "de") {
        initialLang = urlLang;
      }
    } catch (e) {}

    // 2. If no URL parameter, read from localStorage
    if (!initialLang) {
      try {
        const saved = localStorage.getItem("panorama_lang") as Language | null;
        if (saved === "en" || saved === "cs" || saved === "de") {
          initialLang = saved;
        }
      } catch (e) {}
    }

    if (initialLang) {
      setLangState(initialLang);
      try {
        localStorage.setItem("panorama_lang", initialLang);
        window.dispatchEvent(new CustomEvent("panorama_lang_changed", { detail: initialLang }));
        if (typeof (window as any).setLanguage === "function") {
          (window as any).setLanguage(initialLang);
        }
      } catch (e) {}
    }

    const handleStorageChange = () => {
      try {
        const saved = localStorage.getItem("panorama_lang") as Language | null;
        if (saved === "en" || saved === "cs" || saved === "de") {
          setLangState(saved);
        }
      } catch (e) {}
    };

    const handleCustomChange = (e: Event) => {
      const customEvent = e as CustomEvent<Language>;
      if (customEvent.detail === "en" || customEvent.detail === "cs" || customEvent.detail === "de") {
        setLangState(customEvent.detail);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("panorama_lang_changed", handleCustomChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("panorama_lang_changed", handleCustomChange);
    };
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("panorama_lang", newLang);
      window.dispatchEvent(new CustomEvent("panorama_lang_changed", { detail: newLang }));
      if (typeof (window as any).setLanguage === "function") {
        (window as any).setLanguage(newLang);
      }
    } catch (e) {}
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        isEn: lang === "en",
        isDe: lang === "de",
        isCs: lang === "cs",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
