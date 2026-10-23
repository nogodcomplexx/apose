import React from "react";
import type { Metadata } from "next";
import SubpageHeader from "@/components/SubpageHeader";
import SubpageFooter from "@/components/SubpageFooter";
import VyletyContent from "./VyletyContent";

export const metadata: Metadata = {
  title: "Rozhledna Bleiberg & Výlety v okolí Bublavy",
  description:
    "Průvodce nejkrásnějšími výlety z Bublavy. Rozhledna Bleiberg (18 min pěšky), severská rašeliniště na Přebuzi, tajemný důl Rolava, Vogtland Arena i vesmírné muzeum.",
  keywords: [
    "výlety Bublava",
    "Rozhledna Bleiberg",
    "Olověný vrch Bublava",
    "Vogtland Arena Klingenthal",
    "důl Rolava Sauersack",
    "Přebuz rašeliniště",
    "turistika Krušné hory",
    "památky v okolí Bublavy",
    "ubytování pro turisty Bublava",
    "Apartmány Panorama Bublava",
  ],
  alternates: {
    canonical: "https://apose-eight.vercel.app/vylety-okoli",
    languages: {
      "cs-CZ": "https://apose-eight.vercel.app/vylety-okoli",
      "en-US": "https://apose-eight.vercel.app/vylety-okoli?lang=en",
      "de-DE": "https://apose-eight.vercel.app/vylety-okoli?lang=de",
    },
  },
  openGraph: {
    title: "Rozhledna Bleiberg & Výlety v okolí | Tipy na výlety z Apartmánů Panorama",
    description:
      "Objevte divokou přírodu rašelinišť, slavnou rozhlednu i špičkovou architekturu skokanského areálu v těsné blízkosti Bublavy.",
    url: "https://apose-eight.vercel.app/vylety-okoli",
    images: [
      {
        url: "/assets/images/web/location-village.jpg",
        width: 1200,
        height: 800,
        alt: "Příroda a okolí obce Bublava v Krušných horách",
      },
    ],
  },
};

export default function VyletyOkoliPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Rozhledna Bleiberg a nejkrásnější výlety v okolí Bublavy v Krušných horách",
    description:
      "Tipy na pěší i motoristické výlety z Apartmánů Panorama: Olověný vrch, Přebuz, Rolava, Vogtland Arena a německé pohraničí.",
    image: "https://apose-eight.vercel.app/assets/images/web/location-village.jpg",
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
    mainEntityOfPage: "https://apose-eight.vercel.app/vylety-okoli",
  };

  return (
    <div className="subpage-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <SubpageHeader activeSlug="vylety-okoli" />

      {/* Localized Content */}
      <VyletyContent />

      {/* Footer */}
      <SubpageFooter />
    </div>
  );
}
