import React from "react";
import type { Metadata } from "next";
import SubpageHeader from "@/components/SubpageHeader";
import SubpageFooter from "@/components/SubpageFooter";
import KrusnohorskaContent from "./KrusnohorskaContent";

export const metadata: Metadata = {
  title: "Krušnohorská magistrála & Kammloipe – Běžky a cyklotrasy z Bublavy",
  description:
    "Průvodce hřebenovými trasami Krušných hor z Bublavy. Stovky kilometrů upravených stop na Přebuz a Boží Dar, cyklotrasa č. 23 i napojení na prestižní saskou Kammloipe.",
  keywords: [
    "Krušnohorská magistrála",
    "běžky Bublava",
    "Kammloipe Klingenthal",
    "cyklotrasy Krušné hory",
    "běžecké stopy Bublava Přebuz",
    "Hřebenovka Krušné hory",
    "běžkařské trasy Bublava",
    "cyklotrasa 23 Krušné hory",
    "ubytování pro běžkaře Bublava",
    "Apartmány Panorama Bublava",
  ],
  alternates: {
    canonical: "https://apose-eight.vercel.app/krusnohorska-magistrala",
    languages: {
      "cs-CZ": "https://apose-eight.vercel.app/krusnohorska-magistrala",
      "en-US": "https://apose-eight.vercel.app/krusnohorska-magistrala?lang=en",
      "de-DE": "https://apose-eight.vercel.app/krusnohorska-magistrala?lang=de",
    },
  },
  openGraph: {
    title: "Krušnohorská magistrála & Kammloipe | Hřebenové trasy přímo z Bublavy",
    description:
      "Nekonečné kilometry stop pro klasiku i bruslení a letní cyklistický ráj. Začněte svou túru přímo u Apartmánů Panorama.",
    url: "https://apose-eight.vercel.app/krusnohorska-magistrala",
    images: [
      {
        url: "/assets/images/web/krusnohorska-magistrala-card.jpg",
        width: 1200,
        height: 800,
        alt: "Krušnohorská magistrála a hřebeny Krušných hor",
      },
    ],
  },
};

export default function KrusnohorskaMagistralaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Krušnohorská magistrála a saská Kammloipe: Horský ráj pro běžkaře a cyklisty přímo z Bublavy",
    description:
      "Kompletní přehled běžkařských a cyklistických tras, napojení na německou Kammloipe a tipy pro hosty rezidence Apartmány Panorama.",
    image: "https://apose-eight.vercel.app/assets/images/web/krusnohorska-magistrala-card.jpg",
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
    mainEntityOfPage: "https://apose-eight.vercel.app/krusnohorska-magistrala",
  };

  return (
    <div className="subpage-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <SubpageHeader activeSlug="krusnohorska-magistrala" />

      {/* Localized Content */}
      <KrusnohorskaContent />

      {/* Footer */}
      <SubpageFooter />
    </div>
  );
}
