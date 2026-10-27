"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function SubpageFooter() {
  const { lang, isEn, isDe } = useLanguage();

  return (
    <footer className="footer-two section footer-cmn section pb-0" id="contact" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "#08090c" }}>
      <div className="container">
        <div className="row gaper gy-5">
          {/* Column 1: Brand & Contact */}
          <div className="col-12 col-lg-4">
            <div className="footer-two__left">
              <div className="logo mb-4">
                <a href="/" className="text-decoration-none d-inline-block">
                  <img
                    src="/assets/images/logo/panorama-logo.svg"
                    alt="Apartmány Panorama Bublava"
                    style={{ height: "42px", width: "auto" }}
                  />
                </a>
              </div>
              <p className="text-secondary mb-4" style={{ fontSize: "14px", lineHeight: "1.7" }}>
                {isDe
                  ? "Exklusive Ferienwohnungen direkt an den Skipisten in Bublava. Jedes Apartment mit privatem Balkon und herrlichem Bergblick, beheiztem Skidepot mit Skischuhtrocknern und höchstem alpinen Komfort im Erzgebirge."
                  : isEn
                  ? "Exclusive mountain suites right next to the ski pistes in Bublava. Every room features a private balcony with breathtaking views, a heated gear locker with boot dryers, and premium alpine comfort in the Ore Mountains."
                  : "Exkluzivní horské apartmány přímo u sjezdovky v Bublavě. Všechny pokoje s privátním balkonem a dechberoucím výhledem, vyhřívaná lyžárna a prémiový komfort v srdci Krušných hor."}
              </p>
              <div className="contact-links d-flex flex-column gap-2 mb-3">
                <a href="mailto:info@apartmany-panorama.cz" className="text-white text-decoration-none d-flex align-items-center gap-2">
                  <i className="fa-solid fa-envelope" style={{ color: "#ff9d5c" }}></i>
                  <span>info@apartmany-panorama.cz</span>
                </a>
                <a href="tel:+420 777 366 239" className="text-white text-decoration-none d-flex align-items-center gap-2">
                  <i className="fa-solid fa-phone" style={{ color: "#ff9d5c" }}></i>
                  <span>+420 777 366 239</span>
                </a>
                <span className="text-secondary d-flex align-items-center gap-2">
                  <i className="fa-solid fa-location-dot" style={{ color: "#ff9d5c" }}></i>
                  <span>Bublava 791, 358 01 Bublava, {isDe ? "Tschechische Republik" : isEn ? "Czech Republic" : "Česká republika"}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Průvodce a zážitky (SEO Internal Links) */}
          <div className="col-12 col-sm-6 col-lg-4">
            <h4 className="text-white mb-4" style={{ fontSize: "17px", fontWeight: "600", letterSpacing: "0.5px" }}>
              {isDe ? "Erlebnisse & Berglebensstil" : isEn ? "Guide & Mountain Lifestyle" : "Průvodce & Horský životní styl"}
            </h4>
            <ul className="list-unstyled d-flex flex-column gap-3" style={{ fontSize: "14px" }}>
              <li>
                <Link href="/ski-areal-bublava" className="text-secondary text-decoration-none d-flex align-items-center gap-2">
                  <i className="fa-solid fa-person-skiing" style={{ color: "#ff9d5c", width: "16px" }}></i>
                  <span className="text-hover-gold">
                    {isDe ? "Skigebiet Bublava (500 m vom Haus)" : isEn ? "Bublava Ski Resort (500 m away)" : "Ski Areál Bublava (500 m od domu)"}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/krusnohorska-magistrala" className="text-secondary text-decoration-none d-flex align-items-center gap-2">
                  <i className="fa-solid fa-person-hiking" style={{ color: "#ff9d5c", width: "16px" }}></i>
                  <span className="text-hover-gold">
                    {isDe ? "Kammloipe & Erzgebirgs-Magistrale" : isEn ? "Ore Mountain Trail & Kammloipe" : "Krušnohorská magistrála & Kammloipe"}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/vylety-okoli" className="text-secondary text-decoration-none d-flex align-items-center gap-2">
                  <i className="fa-solid fa-compass" style={{ color: "#ff9d5c", width: "16px" }}></i>
                  <span className="text-hover-gold">
                    {isDe ? "Aussichtsturm Bleiberg & Ausflugsziele" : isEn ? "Bleiberg Tower & Day Trips" : "Rozhledna Bleiberg & Výlety v okolí"}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/lobby-bar" className="text-secondary text-decoration-none d-flex align-items-center gap-2">
                  <i className="fa-solid fa-martini-glass" style={{ color: "#ff9d5c", width: "16px" }}></i>
                  <span className="text-hover-gold">
                    {isDe ? "Residenz-Lobby-Bar & Lounge" : isEn ? "Residence Lobby Bar & Lounge" : "Rezidenční Lobby Bar & Lounge"}
                  </span>
                </Link>
              </li>
            </ul>

            <h4 className="text-white mt-4 mb-3" style={{ fontSize: "15px", fontWeight: "600" }}>
              {isDe ? "Schnelle Gäste-Informationen" : isEn ? "Quick Guest Information" : "Rychlé informace pro hosty"}
            </h4>
            <div className="text-secondary" style={{ fontSize: "13px", lineHeight: "1.8" }}>
              {isDe ? (
                <>
                  <i className="fa-solid fa-check text-warning me-2"></i>Check-in: 15:00 – 18:00 • Check-out: bis 11:00<br />
                  <i className="fa-solid fa-check text-warning me-2"></i>Kostenlose Privatparkplätze direkt am Haus<br />
                  <i className="fa-solid fa-check text-warning me-2"></i>Kostenloses Highspeed-WLAN im gesamten Haus<br />
                  <i className="fa-solid fa-check text-warning me-2"></i>Haustiere nach vorheriger Absprache willkommen
                </>
              ) : isEn ? (
                <>
                  <i className="fa-solid fa-check text-warning me-2"></i>Check-in: 15:00 – 18:00 • Check-out: by 11:00<br />
                  <i className="fa-solid fa-check text-warning me-2"></i>Free private parking directly on-site<br />
                  <i className="fa-solid fa-check text-warning me-2"></i>Free high-speed Wi-Fi in all areas<br />
                  <i className="fa-solid fa-check text-warning me-2"></i>Pets welcome upon prior arrangement
                </>
              ) : (
                <>
                  <i className="fa-solid fa-check text-warning me-2"></i>Check-in: 15:00 – 18:00 • Check-out: do 11:00<br />
                  <i className="fa-solid fa-check text-warning me-2"></i>Bezplatné soukromé parkování přímo u objektu<br />
                  <i className="fa-solid fa-check text-warning me-2"></i>Wi-Fi zdarma ve všech prostorách<br />
                  <i className="fa-solid fa-check text-warning me-2"></i>Domácí mazlíčci povoleni (poplatek)
                </>
              )}
            </div>
          </div>

          {/* Column 3: Rezervace & Kanály */}
          <div className="col-12 col-sm-6 col-lg-4">
            <h4 className="text-white mb-4" style={{ fontSize: "17px", fontWeight: "600", letterSpacing: "0.5px" }}>
              {isDe ? "Direktbuchung & Bestpreisgarantie" : isEn ? "Direct Booking & Best Rate Guarantee" : "Přímá rezervace & Garance ceny"}
            </h4>
            <p className="text-secondary mb-3" style={{ fontSize: "14px" }}>
              {isDe
                ? "Buchen Sie direkt über das offizielle Previo-System ohne Vermittlungsgebühren zum garantiert günstigsten Preis."
                : isEn
                ? "Book directly through the official Previo engine with zero commissions at the guaranteed best available rate."
                : "Rezervujte přímo přes oficiální systém Previo bez provizí zprostředkovatelům za nejvýhodnější garantovanou cenu."}
            </p>
            <Link
              href={`/rezervace?lang=${lang}`}
              className="btn btn-cta-primary w-100 justify-content-center py-2"
            >
              <span>{isDe ? "Jetzt online buchen" : isEn ? "Book Online Now" : "Rezervovat online"}</span>
              <i className="fa-solid fa-calendar-check ms-1"></i>
            </Link>

            <div className="mt-4 pt-3 border-top border-secondary border-opacity-25 d-flex gap-3">
              <a href="/#apartments" className="text-secondary text-decoration-none small text-hover-gold">
                {isDe ? "Grundrisse & Details" : isEn ? "Suite Layouts" : "Dispozice apartmánů"}
              </a>
              <span className="text-secondary">•</span>
              <a href="/#gallery" className="text-secondary text-decoration-none small text-hover-gold">
                {isDe ? "Bildergalerie" : isEn ? "Gallery" : "Fotogalerie"}
              </a>
              <span className="text-secondary">•</span>
              <a href="/#faq" className="text-secondary text-decoration-none small text-hover-gold">
                {isDe ? "Häufige Fragen" : isEn ? "FAQ" : "Časté dotazy"}
              </a>
              <span className="text-secondary">•</span>
              <button
                type="button"
                onClick={() => {
                  if (typeof (window as any).openCookieSettings === "function") {
                    (window as any).openCookieSettings();
                  }
                }}
                className="text-secondary text-decoration-none small text-hover-gold p-0 bg-transparent border-0"
                style={{ cursor: "pointer" }}
              >
                {isDe ? "Cookie-Einstellungen" : isEn ? "Cookie Preferences" : "Nastavení cookies"}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Impressum */}
        <div className="row mt-5 pt-4 border-top border-secondary border-opacity-10 pb-4">
          <div className="col-12 col-md-6 text-center text-md-start text-secondary" style={{ fontSize: "13px" }}>
            © {new Date().getFullYear()} Apartmány Panorama Bublava. {isDe ? "Alle Rechte vorbehalten." : isEn ? "All rights reserved." : "Všechna práva vyhrazena."}
          </div>
          <div className="col-12 col-md-6 text-center text-md-end text-secondary mt-2 mt-md-0" style={{ fontSize: "13px" }}>
            {isDe
              ? "Exklusive Ferienwohnungen direkt an der Skipiste im Erzgebirge."
              : isEn
              ? "Exclusive mountain suites right next to the ski pistes in the Ore Mountains."
              : "Exkluzivní horské apartmány přímo u sjezdovky v Krušných horách."}
          </div>
        </div>
      </div>
    </footer>
  );
}
