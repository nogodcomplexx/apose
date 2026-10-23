import React from "react";
import type { Metadata } from "next";
import SubpageHeader from "@/components/SubpageHeader";
import SubpageFooter from "@/components/SubpageFooter";
import SkiArealContent from "./SkiArealContent";

export const metadata: Metadata = {
  title: "Ski Areál Bublava – Lyžování 150 m od rezidence",
  description:
    "Kompletní průvodce lyžařským střediskem Ski Areál Bublava. 6 sjezdovek, 4sedačková lanovka, noční lyžování, dětský park i půjčovna – pouhých 150 m od Apartmánů Panorama.",
  keywords: [
    "Ski Areál Bublava",
    "lyžování Bublava",
    "ubytování u sjezdovky Bublava",
    "lyžování Krušné hory",
    "sjezdovky Bleiberg",
    "lanovka Bublava",
    "noční lyžování Bublava",
    "lyžařská škola Bublava",
    "Apartmány Panorama Bublava",
    "ski in ski out Bublava",
  ],
  alternates: {
    canonical: "https://apose-eight.vercel.app/ski-areal-bublava",
    languages: {
      "cs-CZ": "https://apose-eight.vercel.app/ski-areal-bublava",
      "en-US": "https://apose-eight.vercel.app/ski-areal-bublava?lang=en",
      "de-DE": "https://apose-eight.vercel.app/ski-areal-bublava?lang=de",
    },
  },
  openGraph: {
    title: "Ski Areál Bublava | Luxusní lyžování 150 m od Apartmánů Panorama",
    description:
      "Užijte si komfort lyžování přímo u domu. 6 sjezdovek všech náročností, 4sedačková lanovka, snowpark a moderní zasněžování v Krušných horách.",
    url: "https://apose-eight.vercel.app/ski-areal-bublava",
    images: [
      {
        url: "/assets/images/web/winter-ski.jpg",
        width: 1200,
        height: 800,
        alt: "Ski Areál Bublava – lyžování u Apartmánů Panorama",
      },
    ],
  },
};

export default function SkiArealBublavaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ski Areál Bublava – Kompletní průvodce lyžováním 150 m od rezidence Apartmány Panorama",
    description:
      "Detailní přehled sjezdovek, lanovek, služeb a praktických informací o Ski Areálu Bublava v Krušných horách.",
    image: "https://apose-eight.vercel.app/assets/images/web/winter-ski.jpg",
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
    mainEntityOfPage: "https://apose-eight.vercel.app/ski-areal-bublava",
  };

  return (
    <div className="subpage-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <SubpageHeader activeSlug="ski-areal-bublava" />

      {/* Localized Content */}
      <SkiArealContent />

      {/* Footer */}
      <SubpageFooter />
    </div>
  );
}
