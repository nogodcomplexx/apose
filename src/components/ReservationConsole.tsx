"use client";

import React, { useState, useEffect, Suspense, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

// Apartment definitions matching Bublava reality and Previo units
export interface ApartmentOption {
  id: string; // "1", "2", "3", "all"
  name: string;
  tagline: string;
  floor: string;
  size: string;
  capacity: string;
  pricePerNight: number;
  image: string;
  badge: string;
  icon: string;
  features: string[];
}

export const APARTMENTS_CS: ApartmentOption[] = [
  {
    id: "1",
    name: "Apartmán 1 – Panoramatický rohový",
    tagline: "Vlajková loď rezidence s velkorysým rohovým balkonem a výhledem na sjezdovku",
    floor: "2. patro",
    size: "47 m²",
    capacity: "Až 6 hostů (4 lůžka + 2 přistýlky)",
    pricePerNight: 1800,
    image: "/assets/images/web/apt-living-room-panoramic.jpg",
    badge: "VLAJKOVÁ LOĎ • 47 M²",
    icon: "fa-solid fa-crown",
    features: [
      "Velkorysý rohový balkon s posezením přímo nad sjezdovkou",
      "Vlastní designová koupelna se sprchou a fénem",
      "Plně vybavená kuchyně (varná deska, kávovar, mikrovlnka)",
      "2 garantovaná parkovací stání u domu zdarma",
      "Vlastní vyhřívaná kóje se sušáky bot na 1. NP",
    ],
  },
  {
    id: "2",
    name: "Apartmán 2 – Horský s privátním balkonem",
    tagline: "Útulné horské útočiště s velkým jižním balkonem pro rodinu či páry",
    floor: "2. patro",
    size: "40 m²",
    capacity: "Až 4 hosté (2 lůžka + 2 přistýlky)",
    pricePerNight: 1800,
    image: "/assets/images/web/apt-balcony-rattan.jpg",
    badge: "PRIVÁTNÍ BALKON • 40 M²",
    icon: "fa-solid fa-mountain-sun",
    features: [
      "Slunný soukromý balkon s výhledem na krušnohorské lesy",
      "Vlastní koupelna s WC a sprchovým koutem",
      "Kompletní kuchyňský kout s jídelním stolem a Smart TV",
      "2 garantovaná parkovací stání u domu zdarma",
      "Vlastní vyhřívaná kóje se sušáky bot na 1. NP",
    ],
  },
  {
    id: "3",
    name: "Apartmán 3 – Podkrovní vyhlídka",
    tagline: "Romantické podkrovní útočiště s dřevěnými prvky a vyhlídkovým balkonem",
    floor: "3. patro (podkroví)",
    size: "42 m²",
    capacity: "Až 4 hosté (2 lůžka + 2 přistýlky)",
    pricePerNight: 1800,
    image: "/assets/images/web/apt-kitchen-dining-full.jpg",
    badge: "PODKROVNÍ VYHLÍDKA • 42 M²",
    icon: "fa-solid fa-mountain",
    features: [
      "Vyhlídkový balkon s nejvyšším bodem rozhledu na Bublavu",
      "Romantická podkrovní atmosféra s klidným spaním",
      "Plně vybavená kuchyně, kávovar a jídelní zóna",
      "2 garantovaná parkovací stání u domu zdarma",
      "Vlastní vyhřívaná kóje se sušáky bot na 1. NP",
    ],
  },
  {
    id: "all",
    name: "Všechny 3 apartmány (Skupinový pronájem)",
    tagline: "Pro skupinový pronájem celé rezidence naráz nás prosím kontaktujte přímo telefonicky či e-mailem",
    floor: "2. & 3. patro",
    size: "129 m²",
    capacity: "Až 14 lůžek",
    pricePerNight: 5400,
    image: "/assets/images/web/residence-exterior-balconies.jpg",
    badge: "AŽ 14 HOSTŮ • 3 BALKONY",
    icon: "fa-solid fa-layer-group",
    features: [
      "Pronájem celé kapacity všech 3 apartmánů řešíme individuální dohodou",
      "Pro rezervaci celé rezidence naráz nás kontaktujte na +420 777 123 456",
      "3 samostatné balkony s panoramatickým výhledem na sjezdovky",
      "3 vyhřívané kóje se sušáky bot na 1. NP + 6 parkovacích míst zdarma",
      "Přímý přístup do rezidenčního Lobby Baru (140 m², točené pivo)",
    ],
  },
];

export const APARTMENTS_EN: ApartmentOption[] = [
  {
    id: "1",
    name: "Apartment 1 – Panoramic Corner Suite",
    tagline: "Flagship suite featuring a generous wrap-around corner balcony and piste views",
    floor: "2nd Floor",
    size: "47 m²",
    capacity: "Up to 6 guests (4 beds + 2 extra beds)",
    pricePerNight: 1800,
    image: "/assets/images/web/apt-living-room-panoramic.jpg",
    badge: "FLAGSHIP SUITE • 47 M²",
    icon: "fa-solid fa-crown",
    features: [
      "Generous wrap-around balcony with lounge seating directly above the slopes",
      "Private designer stone bathroom with walk-in shower and hairdryer",
      "Fully equipped kitchen (cooktop, coffee maker, microwave, toaster)",
      "2 free private parking spaces right next to the residence",
      "Private heated gear locker with boot dryers on the 1st floor",
    ],
  },
  {
    id: "2",
    name: "Apartment 2 – Mountain Balcony Suite",
    tagline: "Warm alpine sanctuary with private south-facing balcony for families or couples",
    floor: "2nd Floor",
    size: "40 m²",
    capacity: "Up to 4 guests (2 beds + 2 extra beds)",
    pricePerNight: 1800,
    image: "/assets/images/web/apt-balcony-rattan.jpg",
    badge: "PRIVATE BALCONY • 40 M²",
    icon: "fa-solid fa-mountain-sun",
    features: [
      "Sunny private balcony overlooking Ore Mountain peaks and valley",
      "Private bathroom with WC and walk-in shower",
      "Complete kitchenette with dining area and Smart TV",
      "2 free private parking spaces right next to the residence",
      "Private heated gear locker with boot dryers on the 1st floor",
    ],
  },
  {
    id: "3",
    name: "Apartment 3 – Attic View Suite",
    tagline: "Romantic top-floor attic retreat with timber rafters and scenic balcony",
    floor: "3rd Floor (Attic)",
    size: "42 m²",
    capacity: "Up to 4 guests (2 beds + 2 extra beds)",
    pricePerNight: 1800,
    image: "/assets/images/web/apt-kitchen-dining-full.jpg",
    badge: "ATTIC VIEW • 42 M²",
    icon: "fa-solid fa-mountain",
    features: [
      "Scenic balcony with the highest panoramic vantage point over Bublava",
      "Romantic attic atmosphere with quiet master bedroom",
      "Fully equipped kitchen, premium coffee maker, and dining area",
      "2 free private parking spaces right next to the residence",
      "Private heated gear locker with boot dryers on the 1st floor",
    ],
  },
  {
    id: "all",
    name: "All 3 Apartments (Group Buyout)",
    tagline: "For a whole-residence buyout at once, please contact us directly by phone or email",
    floor: "2nd & 3rd Floor",
    size: "129 m²",
    capacity: "Up to 14 beds",
    pricePerNight: 5400,
    image: "/assets/images/web/residence-exterior-balconies.jpg",
    badge: "UP TO 14 GUESTS • 3 BALCONIES",
    icon: "fa-solid fa-layer-group",
    features: [
      "Full buyout of all 3 apartments is arranged via direct inquiry",
      "To book the entire residence, contact us at +420 777 123 456",
      "3 private balconies with panoramic vistas over the ski pistes",
      "3 heated gear lockers with boot dryers + 6 guaranteed parking spaces",
      "Direct access to the residential Lobby Bar (140 m², craft draft beer)",
    ],
  },
];

export const APARTMENTS_DE: ApartmentOption[] = [
  {
    id: "1",
    name: "Wohnung 1 – Panorama-Eckwohnung",
    tagline: "Flaggschiff der Residenz mit großzügigem Eckbalkon und direktem Pistenblick",
    floor: "2. Etage",
    size: "47 m²",
    capacity: "Bis zu 6 Gäste (4 Betten + 2 Aufbettungen)",
    pricePerNight: 1800,
    image: "/assets/images/web/apt-living-room-panoramic.jpg",
    badge: "FLAGGSCHIFF • 47 M²",
    icon: "fa-solid fa-crown",
    features: [
      "Großzügiger Eckbalkon mit Sitzmöbeln direkt über der Skipiste",
      "Eigenes Design-Badezimmer mit Dusche und Haartrockner",
      "Voll ausgestattete Küche (Kochfeld, Kaffeemaschine, Mikrowelle, Toaster)",
      "2 kostenlose Privatparkplätze direkt am Haus",
      "Eigenes beheiztes Skidepot mit Skischuhtrocknern im Erdgeschoss",
    ],
  },
  {
    id: "2",
    name: "Wohnung 2 – Alpen-Balkonwohnung",
    tagline: "Gemütliches alpines Refugium mit Südbalkon für Paare oder Familien",
    floor: "2. Etage",
    size: "40 m²",
    capacity: "Bis zu 4 Gäste (2 Betten + 2 Aufbettungen)",
    pricePerNight: 1800,
    image: "/assets/images/web/apt-balcony-rattan.jpg",
    badge: "PRIVATER BALKON • 40 M²",
    icon: "fa-solid fa-mountain-sun",
    features: [
      "Sonniger Südbalkon mit Ausblick auf die Kämme des Erzgebirges",
      "Eigenes Badezimmer mit WC und Dusche",
      "Komplette Küchenzeile mit Esstisch und Smart-TV",
      "2 kostenlose Privatparkplätze direkt am Haus",
      "Eigenes beheiztes Skidepot mit Skischuhtrocknern im Erdgeschoss",
    ],
  },
  {
    id: "3",
    name: "Wohnung 3 – Dachgeschoss mit Aussicht",
    tagline: "Romantische Dachwohnung mit Holzelementen und Panoramabalkon",
    floor: "3. Etage (Dachgeschoss)",
    size: "42 m²",
    capacity: "Bis zu 4 Gäste (2 Betten + 2 Aufbettungen)",
    pricePerNight: 1800,
    image: "/assets/images/web/apt-kitchen-dining-full.jpg",
    badge: "DACHAUSSICHT • 42 M²",
    icon: "fa-solid fa-mountain",
    features: [
      "Aussichtsbalkon mit dem höchsten Panoramapunkt über Bublava",
      "Romantische Dachatmosphäre für erholsamen Schlaf",
      "Voll ausgestattete Küche, Kaffeemaschine und Essbereich",
      "2 kostenlose Privatparkplätze direkt am Haus",
      "Eigenes beheiztes Skidepot mit Skischuhtrocknern im Erdgeschoss",
    ],
  },
  {
    id: "all",
    name: "Alle 3 Wohnungen (Gruppenbuchung)",
    tagline: "Für eine Buchung der gesamten Residenz kontaktieren Sie uns bitte direkt per Telefon oder E-Mail",
    floor: "2. & 3. Etage",
    size: "129 m²",
    capacity: "Bis zu 14 Betten",
    pricePerNight: 5400,
    image: "/assets/images/web/residence-exterior-balconies.jpg",
    badge: "BIS ZU 14 GÄSTE • 3 BALKONE",
    icon: "fa-solid fa-layer-group",
    features: [
      "Buchung aller 3 Wohnungen auf individuelle Anfrage",
      "Kontaktieren Sie uns für die gesamte Residenz unter +420 777 123 456",
      "3 private Aussichtsbalkone mit Blick auf die Skipisten",
      "3 beheizte Skidepots mit Schuhtrocknern + 6 kostenlose Parkplätze",
      "Direkter Zugang zur hauseigenen Lobby Bar (140 m², gezapftes Bier)",
    ],
  },
];

export const APARTMENTS = APARTMENTS_CS;

// Sub-component to read search params without de-opting entire page from SSG
function SearchParamsHandler({
  onSync,
}: {
  onSync: (apt: string | null, inDate: string | null, outDate: string | null) => void;
}) {
  const searchParams = useSearchParams();
  useEffect(() => {
    onSync(
      searchParams.get("apt"),
      searchParams.get("checkin"),
      searchParams.get("checkout")
    );
  }, [searchParams, onSync]);

  return null;
}

export default function ReservationConsole() {
  const [checkin, setCheckin] = useState<string>("");
  const [checkout, setCheckout] = useState<string>("");
  const { isEn, isDe } = useLanguage();

  const apartmentList = isDe ? APARTMENTS_DE : isEn ? APARTMENTS_EN : APARTMENTS_CS;

  // Helper for Previo URL format (DD.MM.YYYY)
  const formatPrevioDate = (isoStr: string) => {
    if (!isoStr) return "";
    const [y, m, d] = isoStr.split("-");
    return `${d}.${m}.${y}`;
  };

  const handleParamsSync = useCallback((aptParam: string | null, checkinParam: string | null, checkoutParam: string | null) => {
    if (checkinParam && /^\d{4}-\d{2}-\d{2}$/.test(checkinParam)) {
      setCheckin(checkinParam);
    }
    if (checkoutParam && /^\d{4}-\d{2}-\d{2}$/.test(checkoutParam)) {
      setCheckout(checkoutParam);
    }
  }, []);

  // Build official Previo Reservation PLUS URL with parameters
  const hotelId = "794997";
  const arrivalQuery = checkin ? `&arrival=${formatPrevioDate(checkin)}` : "";
  const departureQuery = checkout ? `&departure=${formatPrevioDate(checkout)}` : "";
  const langParam = isDe ? "de" : isEn ? "en" : "cs";
  const previoIframeUrl = `https://booking.previo.cz/?hotId=${hotelId}&showTabs=reservation&theme=orange&lang=${langParam}&currency=CZK${arrivalQuery}${departureQuery}`;

  // Official Previo iframe auto-resizer script loader
  useEffect(() => {
    const scriptId = "previo-booking-iframe-script";
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.id = scriptId;
      s.src = "https://booking.previo.cz/iframe/";
      s.async = true;
      s.onload = () => {
        // @ts-ignore
        if (typeof window !== "undefined" && typeof window.__previoCreateReservationIframe === "function") {
          // @ts-ignore
          window.__previoCreateReservationIframe();
        }
      };
      document.body.appendChild(s);
    } else {
      // @ts-ignore
      if (typeof window !== "undefined" && typeof window.__previoCreateReservationIframe === "function") {
        // @ts-ignore
        window.__previoCreateReservationIframe();
      }
    }
  }, [checkin, checkout, isEn, isDe]);

  return (
    <div className="reservation-console-wrapper">
      {/* Non-blocking URL search parameter listener */}
      <Suspense fallback={null}>
        <SearchParamsHandler onSync={handleParamsSync} />
      </Suspense>

      {/* STAGE INTRO */}
      <div className="reservation-dark-intro">
        <h2 className="reservation-dark-title">
          {isDe
            ? "Live-Verfügbarkeit & Sofortige Online-Buchung"
            : isEn
            ? "Real-Time Availability & Instant Online Booking"
            : "Ověření termínů & online rezervace v reálném čase"}
        </h2>
        <p className="reservation-dark-lead">
          {isDe
            ? "Buchen Sie direkt über das offizielle Reservierungssystem mit garantierter Verfügbarkeit und ohne Vermittlungsgebühren. Wählen Sie An- und Abreisedatum für Live-Preise und sofortige Bestätigung."
            : isEn
            ? "Book directly through the official accommodation engine with guaranteed availability and zero intermediary fees. Select check-in and check-out dates for live prices and instant confirmation."
            : "Rezervujete přímo v oficiálním rezervačním engine ubytování s garancí volných termínů bez provizí. Zvolte datum příjezdu a odjezdu pro okamžité zobrazení dostupných apartmánů a finální kalkulaci."}
        </p>
      </div>

      <div className="row g-4 align-items-start">
        {/* MAIN COLUMN: Luxury Previo Engine Frame */}
        <div className="col-12 col-lg-8">
          <div className="previo-luxury-terminal" id="previo-booking-section">
            <div className="previo-terminal-header">
              <div className="previo-terminal-title">
                <span className="previo-live-dot"></span>
                <span>
                  {isDe
                    ? "Offizielles Previo R+ Buchungsformular"
                    : isEn
                    ? "Official Previo R+ Booking Form"
                    : "Oficiální rezervační formulář Previo R+"}
                </span>
              </div>
              <a
                href={previoIframeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="previo-external-btn"
              >
                <span>{isDe ? "Vollbildmodus" : isEn ? "Open Fullscreen" : "Otevřít na celou obrazovku"}</span>
                <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: "11px" }}></i>
              </a>
            </div>

            <div className="previo-iframe-container">
              {/* Reservation PLUS start */}
              <iframe
                src={previoIframeUrl}
                scrolling="no"
                frameBorder="0"
                width="100%"
                height="850"
                name="previo-booking-iframe"
                id="previo-booking-iframe"
                allowTransparency={true}
                className="previo-booking-iframe"
                title={isDe ? "Offizielles Previo Buchungsformular" : isEn ? "Official Previo Booking Form" : "Oficiální rezervační formulář Previo"}
              ></iframe>
              {/* Reservation PLUS end */}
            </div>
          </div>
        </div>

        {/* SIDE COLUMN: Apartment Showcase, Included Perks, Direct Assistance */}
        <div className="col-12 col-lg-4">
          {/* Card 1: Apartment Showcase */}
          <div className="dark-sidebar-card">
            <h3 className="dark-card-title">
              <i className="fa-solid fa-hotel" style={{ color: "#ff9d5c" }}></i>
              <span>{isDe ? "Unsere Ferienwohnungen" : isEn ? "Our Available Suites" : "Naše apartmány v nabídce"}</span>
            </h3>

            {apartmentList.filter(a => a.id !== "all").map((apt) => (
              <div key={apt.id} className="dark-unit-card">
                <img
                  src={apt.image}
                  alt={apt.name}
                  className="dark-unit-thumb"
                  loading="lazy"
                />
                <div className="flex-grow-1 min-w-0">
                  <h4 className="dark-unit-title text-truncate">
                    {apt.name.includes("–") ? apt.name.split("–")[0].trim() : apt.name.split("-")[0].trim()}
                  </h4>
                  <div className="dark-unit-meta">
                    {apt.size} • {apt.floor} • {apt.capacity.split("(")[0].trim()}
                  </div>
                  <div className="dark-unit-price">
                    {isDe ? "ab" : isEn ? "from" : "od"} {apt.pricePerNight.toLocaleString("cs-CZ")} Kč{" "}
                    <span className="text-secondary fw-normal" style={{ fontSize: "11px" }}>
                      {isDe ? "/ Nacht" : isEn ? "/ night" : "/ noc"}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <small className="d-block text-white-50 mt-2" style={{ fontSize: "11px", lineHeight: "1.5" }}>
              <i className="fa-solid fa-circle-info me-1" style={{ color: "#ff9d5c" }}></i>
              {isDe
                ? "Jede Wohnung verfügt über einen privaten Balkon mit Blick auf Piste und Berge."
                : isEn
                ? "All apartments feature a private balcony with ski slope & mountain views."
                : "Všechny apartmány mají vlastní privátní balkon s výhledem na sjezdovku a hory."}
            </small>

            <div
              className="mt-3 p-3 rounded-3"
              style={{
                background: "rgba(255, 116, 37, 0.06)",
                border: "1px solid rgba(255, 116, 37, 0.28)",
              }}
            >
              <div className="d-flex align-items-center gap-2 mb-2">
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    background: "rgba(255, 116, 37, 0.18)",
                    color: "#ff9d5c",
                    fontSize: "10.5px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    padding: "2px 8px",
                    borderRadius: "6px",
                  }}
                >
                  <i className="fa-solid fa-users" style={{ fontSize: "10px" }}></i>
                  {isDe ? "Bis zu 14 Betten" : isEn ? "Up to 14 beds" : "Až 14 lůžek"}
                </span>
                <span className="fw-bold text-white" style={{ fontSize: "12px" }}>
                  {isDe ? "Gruppenbuchung der Residenz" : isEn ? "Whole Residence Buyout" : "Skupinový pronájem rezidence"}
                </span>
              </div>
              <p className="text-secondary m-0 mb-2" style={{ fontSize: "11.5px", lineHeight: "1.45" }}>
                {isDe
                  ? "Möchten Sie alle 3 Wohnungen auf einmal buchen? Kontaktieren Sie uns direkt – wir erstellen Ihnen gerne ein individuelles Gruppenangebot."
                  : isEn
                  ? "Interested in booking all 3 apartments at once? Contact us directly – we will gladly prepare a custom group offer."
                  : "Máte zájem o rezervaci všech 3 apartmánů naráz? Kontaktujte nás přímo – rádi pro vás připravíme individuální cenovou nabídku."}
              </p>
              <a
                href="tel:+420777123456"
                className="d-inline-flex align-items-center gap-2 text-decoration-none"
                style={{
                  background: "#171a25",
                  border: "1px solid rgba(255, 116, 37, 0.4)",
                  color: "#ff9d5c",
                  fontSize: "12px",
                  fontWeight: 600,
                  padding: "6px 14px",
                  borderRadius: "8px",
                  transition: "all 0.2s ease",
                }}
              >
                <i className="fa-solid fa-phone" style={{ fontSize: "11px" }}></i>
                <span>+420 777 123 456</span>
              </a>
            </div>
          </div>

          {/* Card 2: Essential Stay Perks */}
          <div className="dark-sidebar-card">
            <h3 className="dark-card-title">
              <i className="fa-solid fa-medal" style={{ color: "#ff9d5c" }}></i>
              <span>{isDe ? "In jedem Aufenthalt inklusive" : isEn ? "Included in Every Stay" : "V ceně každého pobytu"}</span>
            </h3>

            <div className="dark-perk-item">
              <div className="dark-perk-icon">
                <i className="fa-solid fa-square-parking"></i>
              </div>
              <div className="dark-perk-text">
                <strong>{isDe ? "2x Kostenloser Privatparkplatz" : isEn ? "2x Free Private Parking" : "2x parkovací stání zdarma"}</strong>
                <span>
                  {isDe
                    ? "Bequeme private Parkplätze direkt vor dem Eingang der Residenz."
                    : isEn
                    ? "Convenient private on-site parking directly at the entrance."
                    : "Pohodlné soukromé parkování přímo u vstupu do rezidence."}
                </span>
              </div>
            </div>

            <div className="dark-perk-item">
              <div className="dark-perk-icon">
                <i className="fa-solid fa-snowflake"></i>
              </div>
              <div className="dark-perk-text">
                <strong>{isDe ? "Beheiztes Ski- & Fahrraddepot" : isEn ? "Heated Ski & Bike Gear Locker" : "Vyhřívaná kóje na lyže & kola"}</strong>
                <span>
                  {isDe
                    ? "Eigenes abschließbares Depot mit elektrischen Skischuhtrocknern im Erdgeschoss."
                    : isEn
                    ? "Private lockable storage locker with electric boot dryers on the 1st floor."
                    : "Vlastní uzamykatelná kóje se sušáky bot na 1. NP."}
                </span>
              </div>
            </div>

            <div className="dark-perk-item">
              <div className="dark-perk-icon">
                <i className="fa-solid fa-mountain-sun"></i>
              </div>
              <div className="dark-perk-text">
                <strong>{isDe ? "Privater Aussichtsbalkon" : isEn ? "Private Scenic Balcony" : "Balkon s výhledem"}</strong>
                <span>
                  {isDe
                    ? "Privater Balkon mit Sitzmöbeln direkt über der Skipiste."
                    : isEn
                    ? "Private balcony with lounge seating right above the ski slopes."
                    : "Privátní balkon s posezením přímo nad sjezdovkou."}
                </span>
              </div>
            </div>

            <div className="dark-perk-item">
              <div className="dark-perk-icon">
                <i className="fa-solid fa-wifi"></i>
              </div>
              <div className="dark-perk-text">
                <strong>{isDe ? "Schnelles WLAN im gesamten Haus" : isEn ? "Fast Wi-Fi in All Rooms" : "Rychlá Wi-Fi v celém domě"}</strong>
                <span>
                  {isDe
                    ? "Kostenlose Highspeed-Verbindung für Arbeit, Streaming und Unterhaltung."
                    : isEn
                    ? "Free high-speed connection for remote work, streaming, and entertainment."
                    : "Bezplatné připojení pro práci, streaming i zábavu."}
                </span>
              </div>
            </div>

            <div className="dark-perk-item">
              <div className="dark-perk-icon">
                <i className="fa-solid fa-martini-glass-citrus"></i>
              </div>
              <div className="dark-perk-text">
                <strong>{isDe ? "Hauseigene Lobby Bar" : isEn ? "On-Site Residence Lobby Bar" : "Lobby Bar přímo v domě"}</strong>
                <span>
                  {isDe
                    ? "140 m² Lounge mit frisch gezapftem Bier, italienischem Kaffee und Großbildleinwand."
                    : isEn
                    ? "140 m² social lounge with craft draft beer, Italian coffee, and big screen."
                    : "Společenská zóna 140 m² s čepovaným pivem a velkou obrazovkou."}
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Assistance & Direct Contact */}
          <div className="dark-sidebar-card">
            <h3 className="dark-card-title">
              <i className="fa-solid fa-headset" style={{ color: "#ff9d5c" }}></i>
              <span>{isDe ? "Brauchen Sie Hilfe oder Beratung?" : isEn ? "Need Assistance or Custom Stay?" : "Potřebujete poradit či FKSP?"}</span>
            </h3>
            <p className="text-secondary small mb-3" style={{ fontSize: "12px", lineHeight: "1.6" }}>
              {isDe
                ? "Haben Sie spezielle Fragen zu Ihrem Aufenthalt, zu Gruppenbuchungen oder benötigen Sie eine Firmenrechnung?"
                : isEn
                ? "Have a specific question about your stay, group bookings, or need a corporate invoice?"
                : "Máte specifický dotaz k pobytu, skupinové rezervaci nebo potřebujete vystavit fakturu na zaměstnavatele (fond FKSP)?"}
            </p>

            <div className="dark-contact-box mb-0">
              <a href="tel:+420777123456" className="dark-contact-link">
                <i className="fa-solid fa-phone" style={{ color: "#ff9d5c" }}></i>
                <span>+420 777 123 456 (8:00 – 20:00)</span>
              </a>
              <a href="mailto:info@apartmany-panorama.cz" className="dark-contact-link mb-0">
                <i className="fa-solid fa-envelope" style={{ color: "#ff9d5c" }}></i>
                <span>info@apartmany-panorama.cz</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
