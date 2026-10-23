import React from "react";
import type { Metadata } from "next";
import SubpageHeader from "@/components/SubpageHeader";
import SubpageFooter from "@/components/SubpageFooter";
import LobbyBarContent from "./LobbyBarContent";

export const metadata: Metadata = {
  title: "Rezidenční Lobby Bar & Společenský prostor | Apartmány Panorama Bublava",
  description:
    "Prostorný Lobby Bar o ploše 140 m² v 1. NP Apartmánů Panorama vyhrazený pro ubytované hosty. Výběrová káva, čepované pivo, moravská vína, velká TV obrazovka a posezení pro skupiny i rodiny.",
  keywords: [
    "Lobby Bar Bublava",
    "ubytování s barem Bublava",
    "společenská místnost Bublava",
    "apres-ski Bublava",
    "apartmány s lobby barem",
    "Apartmány Panorama Bublava",
    "čepované pivo Bublava",
  ],
  alternates: {
    canonical: "https://apose-eight.vercel.app/lobby-bar",
    languages: {
      "cs-CZ": "https://apose-eight.vercel.app/lobby-bar",
      "en-US": "https://apose-eight.vercel.app/lobby-bar?lang=en",
      "de-DE": "https://apose-eight.vercel.app/lobby-bar?lang=de",
    },
  },
  openGraph: {
    title: "Rezidenční Lobby Bar | Apartmány Panorama Bublava",
    description:
      "Stylové společenské zázemí o ploše 140 m² v přízemí rezidence. Ranní káva, čepované pivo, moravská vína, velká TV pro sportovní přenosy i pohodlné posezení.",
    url: "https://apose-eight.vercel.app/lobby-bar",
    images: [
      {
        url: "/assets/images/web/lobby-bar-evening.jpg",
        width: 1200,
        height: 800,
        alt: "Rezidenční Lobby Bar v Apartmánech Panorama",
      },
    ],
  },
};

export default function LobbyBarPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Rezidenční Lobby Bar v Apartmánech Panorama Bublava",
    description:
      "Stylový společenský prostor pro ubytované hosty: 140 m² zázemí, výběrová káva, večerní bar, točené pivo a velká obrazovka.",
    image: "https://apose-eight.vercel.app/assets/images/web/lobby-bar-evening.jpg",
    author: {
      "@type": "Organization",
      name: "Apartmány Panorama Bublava",
    },
    publisher: {
      "@type": "Organization",
      name: "Apartmány Panorama Bublava",
      logo: {
        "@type": "ImageObject",
        url: "https://apose-eight.vercel.app/assets/images/logo/panorama-logo.svg",
      },
    },
    mainEntityOfPage: "https://apose-eight.vercel.app/lobby-bar",
  };

  return (
    <div className="subpage-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <SubpageHeader activeSlug="lobby-bar" />

      {/* Localized Content */}
      <LobbyBarContent />

      {/* Footer */}
      <SubpageFooter />
    </div>
  );
}
