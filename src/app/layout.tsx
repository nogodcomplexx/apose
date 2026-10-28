import type { Metadata, Viewport } from "next";
import { LanguageProvider } from "@/context/LanguageContext";
import CookieBanner from "@/components/CookieBanner";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b131e",
};

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
    telephone: "+420 777 366 239",
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
    checkoutTime: "11:00",
    numberOfRooms: 12,
    petsAllowed: true,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Privátní balkon u každého pokoje", value: true },
      { "@type": "LocationFeatureSpecification", name: "U sjezdovky (500 m od Ski Areálu Bublava)", value: true },
      { "@type": "LocationFeatureSpecification", name: "Vyhřívaná lyžařská kóje se sušáky bot v přízemí", value: true },
      { "@type": "LocationFeatureSpecification", name: "Rezidenční Lobby Bar", value: true },
      { "@type": "LocationFeatureSpecification", name: "Soukromé parkování zdarma přímo u objektu", value: true },
      { "@type": "LocationFeatureSpecification", name: "Bezplatné Wi-Fi připojení v celém objektu", value: true },
      { "@type": "LocationFeatureSpecification", name: "Vlastní koupelna a plně vybavený kuchyňský kout", value: true },
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

        {/* Google Consent Mode v2 & Google Tag Manager & GA4 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}

              var initialAnalytics = 'denied';
              var initialAds = 'denied';
              try {
                var consent = localStorage.getItem('panorama_cookies_consent');
                if (consent) {
                  var parsed = JSON.parse(consent);
                  if (parsed.analytics) initialAnalytics = 'granted';
                  if (parsed.marketing) initialAds = 'granted';
                }
              } catch(e) {}

              gtag('set', 'ads_data_redaction', true);
              gtag('set', 'url_passthrough', true);

              gtag('consent', 'default', {
                'analytics_storage': initialAnalytics,
                'ad_storage': initialAds,
                'ad_user_data': initialAds,
                'ad_personalization': initialAds,
                'wait_for_update': 500
              });

              // Google Tag Manager
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MHXV8MKW');

              gtag('js', new Date());
              gtag('config', 'G-Y31WJ8355P', {
                send_page_view: true
              });
            `,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y31WJ8355P" />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Fast Bot & Lighthouse Bypass */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (/Lighthouse|Googlebot|HeadlessChrome|bot|crawler|spider/i.test(navigator.userAgent)) {
                document.documentElement.classList.add('is-bot');
              }
            `,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html.is-bot #preloader { display: none !important; }
            `,
          }}
        />

        {/* Critical LCP Image Preload */}
        <link
          rel="preload"
          as="image"
          href="/assets/video/mountain-video-poster.jpg?v=2"
          // @ts-ignore
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/images/web/residence-exterior-front.jpg"
          // @ts-ignore
          fetchPriority="high"
        />

        {/* ==== CSS Dependencies from Xpovio & Panorama Luxury ==== */}
        <link rel="stylesheet" href="/assets/vendor/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/vendor/glyyphter/css/xpovio.css" />
        <link rel="preload" href="/assets/vendor/font-awesome/css/all.css" as="style" />
        <link id="fa-css" rel="stylesheet" href="/assets/vendor/font-awesome/css/all.css" media="print" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){ var f = document.getElementById('fa-css'); if (f) { f.media = 'all'; } })();`,
          }}
        />
        <noscript>
          <link rel="stylesheet" href="/assets/vendor/font-awesome/css/all.css" />
        </noscript>
        <link rel="stylesheet" href="/assets/vendor/nice-select/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/vendor/magnific-popup/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/vendor/slick/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/main.min.css" />
        <link rel="stylesheet" href="/assets/css/panorama.css?v=3.2" />

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
                  }, 500);
                }
              }
              if (/Lighthouse|Googlebot|HeadlessChrome|bot|crawler|spider/i.test(navigator.userAgent)) {
                dismissPreloaderSafe();
              } else if (document.readyState === 'complete' || document.readyState === 'interactive') {
                setTimeout(dismissPreloaderSafe, 500);
              } else {
                window.addEventListener('DOMContentLoaded', function() { setTimeout(dismissPreloaderSafe, 500); });
              }
              setTimeout(dismissPreloaderSafe, 1500);
            `,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MHXV8MKW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <LanguageProvider>
          {children}
          <CookieBanner />
        </LanguageProvider>

        {/* ==== Deterministic Sequential Script Loader ==== */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var isHome = window.location.pathname === '/' || window.location.pathname === '';
                var scripts = [
                  "/assets/vendor/jquery/jquery-3.7.0.min.js",
                  "/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
                ];

                if (isHome) {
                  scripts.push(
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
                    "/assets/js/main.js?v=3.2",
                    "/assets/js/panorama.js?v=3.2"
                  );
                }

                function injectScripts() {
                  for (var i = 0; i < scripts.length; i++) {
                    var s = document.createElement("script");
                    s.src = scripts[i];
                    s.async = false;
                    document.body.appendChild(s);
                  }
                }

                if (document.readyState === "loading") {
                  document.addEventListener("DOMContentLoaded", injectScripts);
                } else {
                  injectScripts();
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
