import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apartmány Panorama | Luxusní horská rezidence Bublava",
  description:
    "Apartmány Panorama - 3 architektonické typy designových apartmánů s panoramatickým výhledem na sjezdovky a hory, ski-in / ski-out polohou na Bublavě.",
  keywords:
    "apartmány, hory, ubytování, luxus, Bublava, Krušné hory, ski-in ski-out, wellness, sjezdovka",
  icons: {
    icon: "/assets/images/template/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="/assets/images/template/favicon.png"
          type="image/x-icon"
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
