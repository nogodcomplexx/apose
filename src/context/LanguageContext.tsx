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

const PAGE_SEO: Record<string, Record<Language, { title: string; desc: string }>> = {
  "/": {
    cs: {
      title: "Apartmány Panorama Bublava | Luxusní ubytování u sjezdovky",
      desc: "Exkluzivní horské apartmány přímo u sjezdovky v Bublavě. Všechny pokoje s privátním balkonem a výhledem, vyhřívaná lyžárna, Lobby Bar i garance nejlepší ceny.",
    },
    en: {
      title: "Apartments Panorama Bublava | Luxury Alpine Accommodation by the Slopes",
      desc: "Exclusive alpine suites right by the ski slopes in Bublava. Private balconies with mountain views, heated ski depot, private Lobby Bar, and best price guarantee.",
    },
    de: {
      title: "Apartmány Panorama Bublava | Luxuriöse Ferienwohnungen an der Piste",
      desc: "Exklusive Ferienwohnungen direkt an der Skipiste in Bublava. Alle Apartments mit privatem Balkon und Bergblick, beheiztem Skidepot, Lobby Bar und Bestpreisgarantie.",
    },
  },
  "/rezervace": {
    cs: {
      title: "Rezervace ubytování | Apartmány Panorama Bublava – Nejlepší cena",
      desc: "Oficiální online rezervace ubytování v Apartmánech Panorama Bublava přímo u sjezdovky. Všechny 3 typy apartmánů s privátním balkonem a výhledem, vyhřívaná lyžárna a parkování zdarma.",
    },
    en: {
      title: "Book Your Stay | Apartments Panorama Bublava – Best Direct Price",
      desc: "Official online booking for Apartments Panorama Bublava directly by the slopes. 3 apartment categories with private balconies, heated gear lockers, and free private parking.",
    },
    de: {
      title: "Online-Buchung | Apartmány Panorama Bublava – Bester Direktpreis",
      desc: "Offizielle Online-Buchung der Apartmány Panorama Bublava direkt an der Skipiste. 3 Apartment-Kategorien mit privatem Balkon, beheiztem Skidepot und kostenfreiem Parkplatz.",
    },
  },
  "/ski-areal-bublava": {
    cs: {
      title: "Ski Areál Bublava – Lyžování 500 m od rezidence | Apartmány Panorama",
      desc: "Kompletní průvodce lyžařským střediskem Ski Areál Bublava. 6 sjezdovek, 4sedačková lanovka, noční lyžování, dětský park i půjčovna – pouhých 500 m od Apartmánů Panorama.",
    },
    en: {
      title: "Ski Resort Bublava – Skiing 500 m from Residence | Apartments Panorama",
      desc: "Complete guide to Bublava Ski Resort. 6 ski slopes, 4-seater chairlift, floodlit night skiing, children's park, and ski rental – only 500 m from Apartments Panorama.",
    },
    de: {
      title: "Skigebiet Bublava – Skifahren 500 m von der Residenz | Apartmány Panorama",
      desc: "Umfassender Skiführer für das Skigebiet Bublava. 6 Pisten, 4er-Sesselbahn, Flutlicht-Nachtskilauf, Kinderpark und Skiverleih – nur 500 m von den Apartmány Panorama.",
    },
  },
  "/krusnohorska-magistrala": {
    cs: {
      title: "Krušnohorská magistrála & Kammloipe – Běžky a cyklotrasy z Bublavy | Apartmány Panorama",
      desc: "Běžkařské stopy a letní cyklotrasy přímo z Bublavy. Napojení na Krušnohorskou magistrálu a legendární německou stopu Kammloipe pouhých 500 m od rezidence.",
    },
    en: {
      title: "Ore Mountains Highway & Kammloipe – Cross-Country & Cycling | Apartments Panorama",
      desc: "Cross-country ski trails and summer cycling routes directly from Bublava. Direct connection to the Ore Mountains Highway and Germany's famous Kammloipe just 500 m away.",
    },
    de: {
      title: "Erzgebirgsmagistrale & Kammloipe – Langlauf & Radrouten bei Bublava | Apartmány Panorama",
      desc: "Gespurte Langlaufloipen und Sommerradwege direkt ab Bublava. Direkter Einstieg in die Erzgebirgsmagistrale und die renommierte Kammloipe nur 500 m von der Residenz.",
    },
  },
  "/vylety-okoli": {
    cs: {
      title: "Rozhledna Bleiberg & Výlety v okolí Bublavy | Apartmány Panorama",
      desc: "Průvodce nejlepšími výlety a aktivitami v okolí Bublavy. Rozhledna Bleiberg, ferrata Hausberg, cyklotrasy, aquapark Schöneck a vyhlášená gastronomie v Krušných horách.",
    },
    en: {
      title: "Bleiberg Lookout Tower & Day Trips around Bublava | Apartments Panorama",
      desc: "Guide to the best day trips and activities around Bublava. Bleiberg lookout tower, Hausberg via ferrata, bike trails, Aqua Park Schöneck, and authentic Ore Mountain dining.",
    },
    de: {
      title: "Aussichtsturm Bleiberg & Ausflugsziele um Bublava | Apartmány Panorama",
      desc: "Führer zu den schönsten Ausflugszielen rund um Bublava. Aussichtsturm Bleiberg, Klettersteig Hausberg, Radwege, Aqua Park Schöneck und beste Gastronomie im Erzgebirge.",
    },
  },
  "/lobby-bar": {
    cs: {
      title: "Rezidenční Lobby Bar & Společenský prostor | Apartmány Panorama Bublava",
      desc: "Privátní Lobby Bar v přízemí Apartmánů Panorama pro ubytované hosty. Výběrová káva, nápoje, vinotéka a velkoplošná TV pro sportovní přenosy i společenské večery.",
    },
    en: {
      title: "Residence Lobby Bar & Social Lounge | Apartments Panorama Bublava",
      desc: "Private Lobby Bar on the ground floor of Apartments Panorama for resident guests. Premium coffee, drinks, wine cellar, and large smart TV for sports broadcasts and cozy evenings.",
    },
    de: {
      title: "Residenz-Lobby-Bar & Kamin-Lounge | Apartmány Panorama Bublava",
      desc: "Private Lobby-Bar im Erdgeschoss der Apartmány Panorama für Hausgäste. Ausgewählter Kaffee, Drinks, Vinothek und Großbild-TV für Sportübertragungen und gesellige Abende.",
    },
  },
};

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

  // Synchronize document title and meta description dynamically based on language & route
  useEffect(() => {
    if (typeof window === "undefined") return;
    const pathname = window.location.pathname.replace(/\/$/, "") || "/";
    const seo = PAGE_SEO[pathname] && PAGE_SEO[pathname][lang];
    if (seo) {
      document.title = seo.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", seo.desc);
      }
    }
  }, [lang]);

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
