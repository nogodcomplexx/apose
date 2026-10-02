import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://apose-eight.vercel.app"),
  title: {
    default: "Apartmány Panorama Bublava | Luxusní ubytování u sjezdovky",
    template: "%s | Apartmány Panorama Bublava",
  },
  description:
    "Exkluzivní horské apartmány přímo u sjezdovky v Bublavě. Všechny pokoje s privátním balkonem a výhledem, vyhřívaná lyžárna, Lobby Bar i garance nejlepší ceny.",
  keywords: [
    "Apartmány Panorama Bublava",
    "ubytování Bublava",
    "apartmány Krušné hory",
    "luxusní ubytování u sjezdovky",
    "ski-in ski-out Bublava",
    "apartmány s balkonem Krušné hory",
    "ubytování pro rodiny Bublava",
    "Ski Areál Bublava ubytování",
    "Lobby Bar Bublava",
    "dovolená Krušné hory",
    "Ferienwohnung Bublava",
    "Unterkunft Erzgebirge",
  ],
  authors: [{ name: "Apartmány Panorama Bublava", url: "https://apose-eight.vercel.app" }],
  creator: "Apartmány Panorama Bublava",
  publisher: "Apartmány Panorama Bublava",
  alternates: {
    canonical: "https://apose-eight.vercel.app",
    languages: {
      "cs-CZ": "https://apose-eight.vercel.app",
      "en-US": "https://apose-eight.vercel.app/?lang=en",
      "de-DE": "https://apose-eight.vercel.app/?lang=de",
    },
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    alternateLocale: ["en_US", "de_DE"],
    url: "https://apose-eight.vercel.app",
    siteName: "Apartmány Panorama Bublava",
    title: "Apartmány Panorama Bublava | Luxusní ubytování u sjezdovky",
    description:
      "Exkluzivní horské apartmány přímo u sjezdovky v Bublavě. Všechny pokoje s privátním balkonem a výhledem, vyhřívaná lyžárna, Lobby Bar i garance nejlepší ceny.",
    images: [
      {
        url: "/assets/images/web/og-image-panorama.jpg",
        width: 1200,
        height: 630,
        alt: "Apartmány Panorama Bublava – Luxusní horská rezidence přímo u sjezdovky",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartmány Panorama Bublava | Luxusní ubytování u sjezdovky",
    description:
      "Exkluzivní horské apartmány přímo u sjezdovky v Bublavě. Všechny pokoje s privátním balkonem a výhledem, vyhřívaná lyžárna, Lobby Bar i garance nejlepší ceny.",
    images: ["/assets/images/web/og-image-panorama.jpg"],
    creator: "@apartmany_panorama",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/assets/images/logo/panorama-mark.svg", type: "image/svg+xml" },
      { url: "/assets/images/template/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/assets/images/template/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/assets/images/logo/panorama-mark.svg",
  },
  category: "travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Apartmány Panorama Bublava",
    alternateName: "Residence Panorama Bublava",
    description:
      "Exkluzivní horské apartmány přímo u sjezdovky v Bublavě. Všechny pokoje disponují privátním balkonem s výhledem do údolí a na hory, vyhřívanou lyžárnou se sušáky bot, vlastním Lobby Barem a garantovaným parkováním.",
    url: "https://apose-eight.vercel.app",
    image: "https://apose-eight.vercel.app/assets/images/web/og-image-panorama.jpg",
    telephone: "+420 777 123 456",
    email: "info@apartmany-panorama.cz",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bublava 791",
      addressLocality: "Bublava",
      postalCode: "358 01",
      addressCountry: "CZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.380056,
      longitude: 12.499472,
    },
    priceRange: "2850 Kč - 4200 Kč",
    currenciesAccepted: "CZK, EUR",
    paymentAccepted: "Credit Card, Bank Transfer, Cash",
    checkinTime: "15:00",
    checkoutTime: "10:00",
    numberOfRooms: 12,
    petsAllowed: false,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Balkon u každého pokoje", value: true },
      { "@type": "LocationFeatureSpecification", name: "Přímo u sjezdovky (Ski-in / Ski-out)", value: true },
      { "@type": "LocationFeatureSpecification", name: "Vyhřívaná lyžařská kóje se sušáky bot", value: true },
      { "@type": "LocationFeatureSpecification", name: "Lobby Bar s krbem a sportovními přenosy", value: true },
      { "@type": "LocationFeatureSpecification", name: "Garantované parkování", value: true },
      { "@type": "LocationFeatureSpecification", name: "Vysokorychlostní optická Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Bezkontaktní přístup na PIN kód 24/7", value: true },
    ],
  };

  return (
    <html lang="cs">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="/assets/images/logo/panorama-mark.svg"
          type="image/svg+xml"
        />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ==== CSS Dependencies from Xpovio & Panorama Luxury ==== */}
        <link rel="stylesheet" href="/assets/vendor/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/vendor/glyyphter/css/xpovio.css" />
        <link rel="stylesheet" href="/assets/vendor/font-awesome/css/all.css" />
        <link rel="stylesheet" href="/assets/vendor/nice-select/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/vendor/magnific-popup/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/vendor/slick/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/main.min.css" />
        <link rel="stylesheet" href="/assets/css/panorama.css" />

        {/* ==== Safe Preloader Auto-Dissolver (Guarantees preloader dissolves smoothly and NEVER hangs) ==== */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function dismissPreloaderSafe() {
                var p = document.getElementById('preloader');
                if (p && !p.classList.contains('loaded')) {
                  p.classList.add('loaded');
                  setTimeout(function() {
                    p.classList.add('preloader-hidden');
                    p.style.display = 'none';
                  }, 850);
                }
              }
              if (document.readyState === 'complete' || document.readyState === 'interactive') {
                setTimeout(dismissPreloaderSafe, 650);
              } else {
                window.addEventListener('DOMContentLoaded', function() { setTimeout(dismissPreloaderSafe, 650); });
              }
              setTimeout(dismissPreloaderSafe, 1800);
            `,
          }}
        />
      </head>
      <body>
        {children}

        {/* ==== Deterministic Sequential Script Loader ==== */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var scripts = [
                  "/assets/vendor/jquery/jquery-3.7.0.min.js",
                  "/assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
                  "/assets/vendor/nice-select/js/jquery.nice-select.min.js",
                  "/assets/vendor/magnific-popup/js/jquery.magnific-popup.min.js",
                  "/assets/vendor/slick/js/slick.min.js",
                  "/assets/vendor/images-loaded/imagesloaded.pkgd.min.js",
                  "/assets/vendor/isotope/isotope.pkgd.min.js",
                  "/assets/vendor/gsap/gsap.min.js",
                  "/assets/vendor/gsap/ScrollTrigger.min.js",
                  "/assets/vendor/gsap/ScrollToPlugin.min.js",
                  "/assets/vendor/gsap/ScrollSmoother.min.js",
                  "/assets/vendor/gsap/SplitText.min.js",
                  "/assets/vendor/gsap/chroma.min.js",
                  "/assets/vendor/vanilla-tilt/tilt.jquery.js",
                  "/assets/js/plugins.js",
                  "/assets/js/main.js",
                  "/assets/js/panorama.js"
                ];

                function loadScript(idx) {
                  if (idx >= scripts.length) {
                    return;
                  }
                  var s = document.createElement("script");
                  s.src = scripts[idx];
                  s.async = false;
                  s.onload = function() {
                    loadScript(idx + 1);
                  };
                  s.onerror = function() {
                    console.warn("Script load error:", scripts[idx]);
                    loadScript(idx + 1);
                  };
                  document.body.appendChild(s);
                }

                if (document.readyState === "loading") {
                  document.addEventListener("DOMContentLoaded", function() {
                    loadScript(0);
                  });
                } else {
                  loadScript(0);
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
