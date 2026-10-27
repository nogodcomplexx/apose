"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import ReservationConsole from "@/components/ReservationConsole";

export default function RezervaceContent() {
  const { isEn, isDe } = useLanguage();

  return (
    <>
      {/* Hero Header */}
      <section
        className="subpage-hero"
        style={{ backgroundImage: `url('/assets/images/web/residence-exterior-front.jpg')` }}
      >
        <div className="container">
          <div className="subpage-breadcrumb">
            <a href="/">{isDe ? "Startseite" : isEn ? "Home" : "Domů"}</a>
            <i className="fa-solid fa-chevron-right" style={{ fontSize: "10px" }}></i>
            <span className="text-white">
              {isDe ? "Unterkunft buchen" : isEn ? "Accommodation Booking" : "Rezervace ubytování"}
            </span>
          </div>

          <div className="subpage-badge">
            <i className="fa-solid fa-mountain-sun text-warning"></i>
            <span>
              {isDe
                ? "Apartmány Panorama Bublava • Direkt an der Skipiste"
                : isEn
                ? "Apartments Panorama Bublava • Directly by the Slopes"
                : "Apartmány Panorama Bublava • Přímo u sjezdovky"}
            </span>
          </div>

          <h1 className="subpage-hero-title">
            {isDe
              ? "Buchen Sie Ihren Bergurlaub an der Skipiste Bublava"
              : isEn
              ? "Book Your Alpine Stay Right by the Bublava Ski Slopes"
              : "Rezervujte si svůj horský pobyt u sjezdovky Bublava"}
          </h1>

          <p className="subpage-hero-lead">
            {isDe
              ? "Alle 3 Wohnungstypen verfügen über einen privaten Balkon mit herrlichem Blick auf Skipiste und Gebirgskämme, eine voll ausgestattete Küche, ein beheiztes Skidepot mit Skischuhtrocknern im Erdgeschoss und 2 kostenlose Privatparkplätze direkt am Haus."
              : isEn
              ? "All 3 apartment layouts feature a private balcony with sweeping ski slope and alpine ridge views, a fully equipped kitchen, a heated lockable ground-floor gear locker with boot dryers, and 2 complimentary private parking spaces directly by the residence."
              : "Všechny 3 typy apartmánů mají vlastní privátní balkon s výhledem na sjezdovku a horské hřebeny, plně vybavenou kuchyni, vyhřívanou uzamykatelnou kóji se sušáky bot na 1. NP a 2 bezplatná parkovací stání přímo u rezidence."}
          </p>
        </div>
      </section>

      {/* Main Reservation Console Section */}
      <section className="section py-5" style={{ background: "#0b0c10" }}>
        <div className="container">
          <ReservationConsole />
        </div>
      </section>

      {/* FAQ & Stay Policies */}
      <section
        className="section py-5"
        style={{ background: "#08090c", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="container">
          <div className="text-center max-w-700 mx-auto mb-5">
            <span
              className="text-warning text-uppercase fw-semibold"
              style={{ fontSize: "12px", letterSpacing: "1px" }}
            >
              {isDe
                ? "HÄUFIG GESTELLTE FRAGEN & REGELN"
                : isEn
                ? "FREQUENTLY ASKED QUESTIONS & HOUSE RULES"
                : "ČASTO KLADENÉ OTÁZKY & PRAVIDLA"}
            </span>
            <h2 className="text-white h3 fw-bold mt-2">
              {isDe
                ? "Wichtige Informationen zu Ihrem Aufenthalt"
                : isEn
                ? "Essential Information for Your Stay"
                : "Důležité informace k vašemu pobytu"}
            </h2>
          </div>

          <div className="row g-4 justify-content-center">
            {/* FAQ 1: Check-in / Check-out */}
            <div className="col-12 col-md-6 col-lg-4">
              <div
                className="faq-box p-4 rounded-4"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  height: "100%",
                }}
              >
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div
                    className="faq-icon-wrap"
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      background: "rgba(255, 116, 37, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i className="fa-solid fa-clock text-warning"></i>
                  </div>
                  <h3 className="text-white h6 m-0">
                    {isDe ? "Anreise & Abreise" : isEn ? "Check-in & Check-out" : "Příjezd a odjezd"}
                  </h3>
                </div>
                <p className="text-secondary small mb-0" style={{ lineHeight: "1.7" }}>
                  {isDe ? (
                    <>
                      <strong>Check-in:</strong> von 15:00 bis 18:00 Uhr.<br />
                      <strong>Check-out:</strong> bis 11:00 Uhr vormittags.<br />
                      Falls Sie eine frühere Anreise oder spätere Abreise wünschen, kontaktieren Sie uns bitte im Voraus.
                    </>
                  ) : isEn ? (
                    <>
                      <strong>Check-in:</strong> 15:00 to 18:00.<br />
                      <strong>Check-out:</strong> until 11:00 AM.<br />
                      If you require an early check-in or late check-out, please contact us in advance.
                    </>
                  ) : (
                    <>
                      <strong>Check-in:</strong> od 15:00 do 18:00.<br />
                      <strong>Check-out:</strong> do 11:00 dopoledne.<br />
                      V případě potřeby dřívějšího příjezdu nebo pozdějšího odjezdu nás prosím kontaktujte předem.
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* FAQ 2: Parking */}
            <div className="col-12 col-md-6 col-lg-4">
              <div
                className="faq-box p-4 rounded-4"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  height: "100%",
                }}
              >
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div
                    className="faq-icon-wrap"
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      background: "rgba(255, 116, 37, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i className="fa-solid fa-square-parking text-warning"></i>
                  </div>
                  <h3 className="text-white h6 m-0">
                    {isDe ? "Parken & Anfahrt" : isEn ? "Parking & Access" : "Parkování a příjezd"}
                  </h3>
                </div>
                <p className="text-secondary small mb-0" style={{ lineHeight: "1.7" }}>
                  {isDe ? (
                    <>
                      Jede Wohnung verfügt über <strong>1 garantierten privaten Parkplatz</strong> direkt am Haus, vollkommen kostenlos. Die Zufahrtsstraße wird auch im Winter regelmäßig geräumt.
                    </>
                  ) : isEn ? (
                    <>
                      Each apartment includes <strong>1 dedicated private parking space</strong> directly in front of the residence, completely free of charge. The municipal access road is maintained and cleared throughout winter.
                    </>
                  ) : (
                    <>
                      Ke každému apartmánu patří <strong>1 vyhrazené soukromé parkovací místo</strong> přímo u domu zcela zdarma. Příjezdová komunikace je v zimě pravidelně udržována.
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* FAQ 3: Pets */}
            <div className="col-12 col-md-6 col-lg-4">
              <div
                className="faq-box p-4 rounded-4"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  height: "100%",
                }}
              >
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div
                    className="faq-icon-wrap"
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      background: "rgba(255, 116, 37, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i className="fa-solid fa-paw text-warning"></i>
                  </div>
                  <h3 className="text-white h6 m-0">
                    {isDe ? "Haustierregelung" : isEn ? "Pet-Friendly Policy" : "Domácí mazlíčci"}
                  </h3>
                </div>
                <p className="text-secondary small mb-0" style={{ lineHeight: "1.7" }}>
                  {isDe ? (
                    <>
                      Gut erzogene Vierbeiner sind <strong>nach vorheriger Absprache herzlich willkommen</strong>. Direkt am Haus beginnen weitläufige Bergwiesen und Waldwege.
                    </>
                  ) : isEn ? (
                    <>
                      Well-behaved four-legged companions are <strong>warmly welcome upon prior arrangement</strong>. Surrounding alpine meadows and forest walking trails begin right outside our doors.
                    </>
                  ) : (
                    <>
                      Vychovaní čtyřnozí mazlíčci jsou u nás <strong>vítáni po předchozí domluvě</strong>. V okolí rezidence jsou ideální louky a lesní cesty pro venčení.
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* FAQ 4: Ski & Bike Lockers */}
            <div className="col-12 col-md-6 col-lg-4">
              <div
                className="faq-box p-4 rounded-4"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  height: "100%",
                }}
              >
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div
                    className="faq-icon-wrap"
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      background: "rgba(255, 116, 37, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i className="fa-solid fa-snowflake text-warning"></i>
                  </div>
                  <h3 className="text-white h6 m-0">
                    {isDe ? "Skidepot & Fahrradraum" : isEn ? "Ski & Bike Storage" : "Lyžárna a kolárna"}
                  </h3>
                </div>
                <p className="text-secondary small mb-0" style={{ lineHeight: "1.7" }}>
                  {isDe ? (
                    <>
                      Jede Wohnung verfügt über ein eigenes <strong>abschließbares beheiztes Skidepot im Erdgeschoss</strong> mit elektrischen Skischuhtrocknern. Im Sommer dient es der sicheren Aufbewahrung von Fahrrädern.
                    </>
                  ) : isEn ? (
                    <>
                      Each apartment has its own <strong>lockable heated locker on the ground floor</strong> with electric ski boot warmers. In summer, it provides safe, secure storage for mountain bikes and e-bikes.
                    </>
                  ) : (
                    <>
                      Každý apartmán má v přízemí vlastní <strong>uzamykatelnou vyhřívanou kóji</strong> s elektrickými vysoušeči lyžařských bot. V létě slouží pro bezpečné uložení horských kol.
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* FAQ 5: Payment & Corporate Invoicing */}
            <div className="col-12 col-md-6 col-lg-4">
              <div
                className="faq-box p-4 rounded-4"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  height: "100%",
                }}
              >
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div
                    className="faq-icon-wrap"
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      background: "rgba(255, 116, 37, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i className="fa-solid fa-credit-card text-warning"></i>
                  </div>
                  <h3 className="text-white h6 m-0">
                    {isDe ? "Bezahlung & Rechnungsstellung" : isEn ? "Payment & Corporate Invoicing" : "Platba & Faktura FKSP"}
                  </h3>
                </div>
                <p className="text-secondary small mb-0" style={{ lineHeight: "1.7" }}>
                  {isDe ? (
                    <>
                      Zahlen Sie sicher online per Karte über das zertifizierte Previo-System oder per Banküberweisung. Gerne stellen wir auch <strong>Rechnungen auf Ihren Arbeitgeber oder Firmen</strong> aus.
                    </>
                  ) : isEn ? (
                    <>
                      Pay securely online by card via the certified Previo system, or via bank transfer. We also gladly issue <strong>employer invoices for benefit funds (FKSP / corporate allowances)</strong>.
                    </>
                  ) : (
                    <>
                      Platbu můžete provést online kartou přes bezpečný systém Previo nebo bankovním převodem. Rádi vám vystavíme <strong>fakturu na zaměstnavatele pro čerpání fondu FKSP</strong>.
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* FAQ 6: Lobby Bar */}
            <div className="col-12 col-md-6 col-lg-4">
              <div
                className="faq-box p-4 rounded-4"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  height: "100%",
                }}
              >
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div
                    className="faq-icon-wrap"
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      background: "rgba(255, 116, 37, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i className="fa-solid fa-martini-glass-citrus text-warning"></i>
                  </div>
                  <h3 className="text-white h6 m-0">
                    {isDe ? "Residenz-Lobby-Bar" : isEn ? "Residential Lobby Bar" : "Rezidenční Lobby Bar"}
                  </h3>
                </div>
                <p className="text-secondary small mb-0" style={{ lineHeight: "1.7" }}>
                  {isDe ? (
                    <>
                      Direkt im Erdgeschoss der Residenz können Sie unsere <strong>stilvolle 140 m² Lobby Bar</strong> mit frisch gezapftem regionalen Bier, mährischen Weinen, Barista-Kaffee und gemütlichen Sitzplätzen nach dem Skifahren besuchen.
                    </>
                  ) : isEn ? (
                    <>
                      Directly on the ground floor, you can enjoy our <strong>stylish 140 m² Lobby Bar</strong> with regional draft beer, select Moravian wines, artisan coffee, and cozy seating after a day on the slopes.
                    </>
                  ) : (
                    <>
                      Přímo v budově rezidence můžete navštívit náš <strong>stylový Lobby Bar o rozloze 140 m²</strong> s čepovaným pivem, výběrovými víny a příjemným posezením po návratu ze svahu.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
