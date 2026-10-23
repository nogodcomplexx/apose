import React from "react";
import type { Metadata } from "next";
import SubpageHeader from "@/components/SubpageHeader";
import SubpageFooter from "@/components/SubpageFooter";
import RezervaceContent from "./RezervaceContent";

export const metadata: Metadata = {
  title: "Rezervace ubytování | Apartmány Panorama Bublava – Nejlepší cena",
  description:
    "Oficiální online rezervace ubytování v Apartmánech Panorama Bublava přímo u sjezdovky. Všechny 3 typy apartmánů s privátním balkonem a výhledem, vyhřívaná lyžárna a parkování zdarma.",
  keywords: [
    "rezervace Apartmány Panorama",
    "ubytování Bublava rezervace",
    "ubytování u sjezdovky Bublava",
    "Previo rezervace Panorama",
    "přímá rezervace Apartmány Panorama",
    "horské apartmány Krušné hory rezervace",
    "dovolená Bublava",
    "zimní pobyt Bublava",
    "lyžařské ubytování Krušné hory",
  ],
  alternates: {
    canonical: "https://apose-eight.vercel.app/rezervace",
    languages: {
      "cs-CZ": "https://apose-eight.vercel.app/rezervace",
      "en-US": "https://apose-eight.vercel.app/rezervace?lang=en",
      "de-DE": "https://apose-eight.vercel.app/rezervace?lang=de",
    },
  },
  openGraph: {
    title: "Rezervace ubytování | Apartmány Panorama Bublava",
    description:
      "Zajistěte si svůj horský pobyt přímo u sjezdovky Bublava. Garantovaná nejnižší cena při přímé online rezervaci a bezpečný certifikovaný rezervační systém Previo.",
    url: "https://apose-eight.vercel.app/rezervace",
    images: [
      {
        url: "/assets/images/web/apt-living-room-panoramic.jpg",
        width: 1200,
        height: 800,
        alt: "Apartmány Panorama Bublava – Rezervace pobytu",
      },
    ],
  },
};

export default function RezervacePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Apartmány Panorama Bublava",
    url: "https://apose-eight.vercel.app/rezervace",
    image: "https://apose-eight.vercel.app/assets/images/web/apt-living-room-panoramic.jpg",
    description:
      "Luxusní horské ubytování v Krušných horách přímo u sjezdovky Bublava. 3 designové apartmány s balkony, vyhřívanou lyžárnou se sušáky bot a Lobby Barem.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bublava 791",
      addressLocality: "Bublava",
      postalCode: "358 01",
      addressCountry: "CZ",
    },
    telephone: "+420 777 123 456",
    priceRange: "1 800 Kč – 5 400 Kč",
    checkinTime: "15:00",
    checkoutTime: "11:00",
  };

  return (
    <div className="subpage-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <SubpageHeader activeSlug="rezervace" />

      {/* Localized Content */}
      <RezervaceContent />

      {/* Footer */}
      <SubpageFooter />
    </div>
  );
}
