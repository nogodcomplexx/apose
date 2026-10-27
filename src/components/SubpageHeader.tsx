"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface SubpageHeaderProps {
  activeSlug?: string;
}

export default function SubpageHeader({ activeSlug }: SubpageHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, isEn, isDe, isCs, setLang } = useLanguage();

  return (
    <>
      <header className="subpage-header">
        <div className="container-fluid px-3 px-xl-4 px-xxl-5">
          <div className="d-flex align-items-center justify-content-between">
            {/* Logo */}
            <a href="/" className="brand-logo text-decoration-none d-flex align-items-center gap-2">
              <img
                src="/assets/images/logo/panorama-logo.svg"
                alt="Apartmány Panorama Bublava"
                style={{ height: "38px", width: "auto" }}
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="d-none d-xl-block">
              <ul className="nav-links">
                <li>
                  <a href="/">{isDe ? "Startseite" : isEn ? "Home" : "Domů"}</a>
                </li>
                <li>
                  <a href="/#apartments">{isDe ? "Apartments" : isEn ? "Suites" : "Apartmány"}</a>
                </li>
                <li>
                  <a
                    href="/ski-areal-bublava"
                    className={activeSlug === "ski-areal-bublava" ? "active" : ""}
                  >
                    {isDe ? "Skigebiet Bublava" : isEn ? "Ski Resort Bublava" : "Ski Areál Bublava"}
                  </a>
                </li>
                <li>
                  <a
                    href="/krusnohorska-magistrala"
                    className={activeSlug === "krusnohorska-magistrala" ? "active" : ""}
                  >
                    {isDe ? "Kammloipe & Magistrale" : isEn ? "Ore Mountain Trail" : "Krušnohorská magistrála"}
                  </a>
                </li>
                <li>
                  <a
                    href="/vylety-okoli"
                    className={activeSlug === "vylety-okoli" ? "active" : ""}
                  >
                    {isDe ? "Ausflugsziele" : isEn ? "Trips & Sights" : "Výlety & Okolí"}
                  </a>
                </li>
                <li>
                  <a
                    href="/lobby-bar"
                    className={activeSlug === "lobby-bar" ? "active" : ""}
                  >
                    Lobby Bar
                  </a>
                </li>
                <li>
                  <a href="/#contact">{isDe ? "Kontakt" : isEn ? "Contact" : "Kontakt"}</a>
                </li>
              </ul>
            </nav>

            {/* Right actions */}
            <div className="d-flex align-items-center gap-3">
              {/* Language Switcher with Flags */}
              <div className="lang-switcher">
                <button
                  type="button"
                  className={`lang-btn ${isCs ? "active" : ""}`}
                  onClick={() => setLang("cs")}
                  aria-label="Čeština"
                  title="Čeština"
                >
                  <img src="/assets/images/flags/cz.svg" alt="CZ" className="flag-icon" />
                  <span>CZ</span>
                </button>
                <button
                  type="button"
                  className={`lang-btn ${isEn ? "active" : ""}`}
                  onClick={() => setLang("en")}
                  aria-label="English"
                  title="English"
                >
                  <img src="/assets/images/flags/en.svg" alt="EN" className="flag-icon" />
                  <span>EN</span>
                </button>
                <button
                  type="button"
                  className={`lang-btn ${isDe ? "active" : ""}`}
                  onClick={() => setLang("de")}
                  aria-label="Deutsch"
                  title="Deutsch"
                >
                  <img src="/assets/images/flags/de.svg" alt="DE" className="flag-icon" />
                  <span>DE</span>
                </button>
              </div>

              <a
                href={`/rezervace?lang=${lang}`}
                className="btn btn--secondary d-none d-sm-inline-flex"
                style={{ padding: "8px 20px", fontSize: "13px" }}
              >
                <span>{isDe ? "Jetzt buchen" : isEn ? "Book Your Stay" : "Rezervovat pobyt"}</span>
                <i className="fa-sharp fa-solid fa-arrow-up-right ms-1"></i>
              </a>

              {/* Mobile Menu Trigger */}
              <button
                type="button"
                className="d-xl-none text-white border-0 bg-transparent p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={isDe ? "Menü öffnen" : isEn ? "Toggle menu" : "Přepnout menu"}
                style={{ fontSize: "22px", cursor: "pointer" }}
              >
                <i className={`fa-solid ${mobileMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Offcanvas Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(11, 12, 16, 0.98)",
            zIndex: 1000,
            padding: "30px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom border-secondary border-opacity-25">
              <a href="/" onClick={() => setMobileMenuOpen(false)}>
                <img
                  src="/assets/images/logo/panorama-logo.svg"
                  alt="Apartmány Panorama"
                  style={{ height: "36px", width: "auto" }}
                />
              </a>
              <div className="d-flex align-items-center gap-2">
                <div className="lang-switcher m-0">
                  <button
                    type="button"
                    className={`lang-btn ${isCs ? "active" : ""}`}
                    onClick={() => setLang("cs")}
                    aria-label="Čeština"
                    title="Čeština"
                  >
                    <img src="/assets/images/flags/cz.svg" alt="CZ" className="flag-icon" />
                    <span>CZ</span>
                  </button>
                  <button
                    type="button"
                    className={`lang-btn ${isEn ? "active" : ""}`}
                    onClick={() => setLang("en")}
                    aria-label="English"
                    title="English"
                  >
                    <img src="/assets/images/flags/en.svg" alt="EN" className="flag-icon" />
                    <span>EN</span>
                  </button>
                  <button
                    type="button"
                    className={`lang-btn ${isDe ? "active" : ""}`}
                    onClick={() => setLang("de")}
                    aria-label="Deutsch"
                    title="Deutsch"
                  >
                    <img src="/assets/images/flags/de.svg" alt="DE" className="flag-icon" />
                    <span>DE</span>
                  </button>
                </div>
                <button
                  className="btn text-white p-0 border-0 fs-3 ms-2"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label={isDe ? "Schließen" : isEn ? "Close" : "Zavřít"}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>

            <nav className="mt-4">
              <ul className="list-unstyled d-flex flex-column gap-3 fs-5">
                <li>
                  <a
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white text-decoration-none d-flex align-items-center gap-3"
                  >
                    <i className="fa-solid fa-house text-warning" style={{ width: "20px", fontSize: "16px", textAlign: "center" }}></i>
                    <span>{isDe ? "Startseite" : isEn ? "Home" : "Domů"}</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/#apartments"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white text-decoration-none d-flex align-items-center gap-3"
                  >
                    <i className="fa-solid fa-bed text-warning" style={{ width: "20px", fontSize: "16px", textAlign: "center" }}></i>
                    <span>{isDe ? "Übersicht der Ferienwohnungen" : isEn ? "Apartments Overview" : "Přehled apartmánů"}</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/ski-areal-bublava"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`d-flex align-items-center gap-3 text-decoration-none ${
                      activeSlug === "ski-areal-bublava" ? "text-warning" : "text-white"
                    }`}
                  >
                    <i className="fa-solid fa-person-skiing text-warning" style={{ width: "20px", fontSize: "16px", textAlign: "center" }}></i>
                    <span>{isDe ? "Skigebiet Bublava (500 m)" : isEn ? "Bublava Ski Resort (500 m)" : "Ski Areál Bublava (500 m)"}</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/krusnohorska-magistrala"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`d-flex align-items-center gap-3 text-decoration-none ${
                      activeSlug === "krusnohorska-magistrala" ? "text-warning" : "text-white"
                    }`}
                  >
                    <i className="fa-solid fa-person-skiing-nordic text-warning" style={{ width: "20px", fontSize: "16px", textAlign: "center" }}></i>
                    <span>{isDe ? "Kammloipe & Magistrale" : isEn ? "Ore Mountain Trail & Kammloipe" : "Krušnohorská magistrála"}</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/vylety-okoli"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`d-flex align-items-center gap-3 text-decoration-none ${
                      activeSlug === "vylety-okoli" ? "text-warning" : "text-white"
                    }`}
                  >
                    <i className="fa-solid fa-compass text-warning" style={{ width: "20px", fontSize: "16px", textAlign: "center" }}></i>
                    <span>{isDe ? "Aussichtsturm & Ausflugsziele" : isEn ? "Bleiberg Tower & Day Trips" : "Rozhledna & Výlety v okolí"}</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/lobby-bar"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`d-flex align-items-center gap-3 text-decoration-none ${
                      activeSlug === "lobby-bar" ? "text-warning" : "text-white"
                    }`}
                  >
                    <i className="fa-solid fa-martini-glass text-warning" style={{ width: "20px", fontSize: "16px", textAlign: "center" }}></i>
                    <span>{isDe ? "Residenz-Lobby-Bar" : isEn ? "Residence Lobby Bar" : "Rezidenční Lobby Bar"}</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white text-decoration-none d-flex align-items-center gap-3"
                  >
                    <i className="fa-solid fa-envelope text-warning" style={{ width: "20px", fontSize: "16px", textAlign: "center" }}></i>
                    <span>{isDe ? "Kontakt & Anreise" : isEn ? "Contact & Location" : "Kontakt & Příjezd"}</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="pt-4 border-top border-secondary border-opacity-25">
            <a
              href={`/rezervace?lang=${lang}`}
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-cta-primary w-100 justify-content-center py-3"
            >
              <span>{isDe ? "Jetzt online buchen" : isEn ? "Book Online Now" : "Online rezervace pobytu"}</span>
              <i className="fa-solid fa-arrow-right ms-2"></i>
            </a>
            <div className="text-center mt-3 text-secondary" style={{ fontSize: "13px" }}>
              Bublava 791, 358 01 Bublava • +420 777 366 239
            </div>
          </div>
        </div>
      )}
    </>
  );
}
