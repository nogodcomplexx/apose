"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function CookieBanner() {
  const { lang: contextLang } = useLanguage();
  const [activeLang, setActiveLang] = useState<"cs" | "en" | "de">("cs");
  const [isOpen, setIsOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("panorama_lang") as "cs" | "en" | "de" | null;
      if (saved === "en" || saved === "de" || saved === "cs") {
        setActiveLang(saved);
      } else if (contextLang) {
        setActiveLang(contextLang);
      }
    } catch (e) {}

    const handleLangChange = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail === "en" || detail === "de" || detail === "cs") {
        setActiveLang(detail);
      }
    };

    window.addEventListener("panorama_lang_changed", handleLangChange);
    return () => {
      window.removeEventListener("panorama_lang_changed", handleLangChange);
    };
  }, [contextLang]);

  useEffect(() => {
    if (contextLang) {
      setActiveLang(contextLang);
    }
  }, [contextLang]);

  const isDe = activeLang === "de";
  const isEn = activeLang === "en";

  useEffect(() => {
    try {
      const consent = localStorage.getItem("panorama_cookies_consent");
      if (!consent) {
        // Wait 1 second before showing so page loads cleanly
        const timer = setTimeout(() => setIsOpen(true), 1000);
        return () => clearTimeout(timer);
      }
    } catch (e) {}
  }, []);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setShowDetails(true);
    };

    window.addEventListener("panorama_open_cookies", handleOpen);
    (window as any).openCookieSettings = () => {
      window.dispatchEvent(new CustomEvent("panorama_open_cookies"));
    };

    return () => {
      window.removeEventListener("panorama_open_cookies", handleOpen);
    };
  }, []);

  const saveConsent = (all: boolean) => {
    try {
      const consentData = {
        essential: true,
        analytics: all ? true : analyticsEnabled,
        date: new Date().toISOString(),
      };
      localStorage.setItem("panorama_cookies_consent", JSON.stringify(consentData));
      if (typeof (window as any).gtag === "function") {
        (window as any).gtag("consent", "update", {
          analytics_storage: all || analyticsEnabled ? "granted" : "denied",
          ad_storage: all || analyticsEnabled ? "granted" : "denied",
          ad_user_data: all || analyticsEnabled ? "granted" : "denied",
          ad_personalization: all || analyticsEnabled ? "granted" : "denied",
        });
      }
    } catch (e) {}
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <aside
      className="cookie-banner-lux"
      role="dialog"
      aria-live="polite"
      aria-label={isDe ? "Cookie-Einstellungen" : isEn ? "Cookie Preferences" : "Nastavení cookies"}
      style={{
        position: "fixed",
        bottom: "22px",
        right: "22px",
        maxWidth: "430px",
        width: "calc(100vw - 32px)",
        background: "rgba(10, 14, 20, 0.94)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.14)",
        borderRadius: "16px",
        boxShadow: "0 24px 50px rgba(0, 0, 0, 0.65), 0 0 30px rgba(255, 116, 37, 0.08)",
        zIndex: 99999,
        padding: "20px 22px",
        color: "#ffffff",
        fontFamily: "inherit",
        animation: "cookieSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      }}
    >
      <style>{`
        @keyframes cookieSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .cookie-btn-primary {
          background: linear-gradient(135deg, #ff8a43 0%, #ff6219 100%);
          color: #ffffff;
          border: none;
          border-radius: 9px;
          padding: 8px 16px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .cookie-btn-primary:hover {
          background: linear-gradient(135deg, #ffa268 0%, #ff7425 100%);
          transform: translateY(-1px);
          box-shadow: 0 4px 14px rgba(255, 116, 37, 0.35);
        }
        .cookie-btn-secondary {
          background: rgba(255, 255, 255, 0.05);
          color: #cbd5e1;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 9px;
          padding: 8px 14px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .cookie-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.3);
        }
        .cookie-link-text {
          background: none;
          border: none;
          color: #94a3b8;
          font-size: 12px;
          cursor: pointer;
          text-decoration: underline;
          padding: 0;
          transition: color 0.2s ease;
        }
        .cookie-link-text:hover {
          color: #ff9d5c;
        }
      `}</style>

      {/* Header with Icon and Badge */}
      <div className="d-flex align-items-center justify-content-between mb-2">
        <div className="d-flex align-items-center gap-2">
          <span
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "8px",
              background: "rgba(255, 116, 37, 0.15)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ff8a43",
              fontSize: "13px",
            }}
          >
            <i className="fa-solid fa-cookie-bite"></i>
          </span>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.8px",
              textTransform: "uppercase",
              color: "#ff9d5c",
            }}
          >
            {isDe ? "Datenschutz & Cookies" : isEn ? "Privacy & Cookies" : "Soukromí & Cookies"}
          </span>
        </div>
        <button
          type="button"
          onClick={() => saveConsent(false)}
          aria-label={isDe ? "Schließen" : isEn ? "Dismiss" : "Zavřít"}
          style={{
            background: "none",
            border: "none",
            color: "#64748b",
            fontSize: "14px",
            cursor: "pointer",
            padding: "4px",
            lineHeight: 1,
          }}
          title={isDe ? "Nur essenzielle Cookies akzeptieren" : isEn ? "Accept essential only" : "Přijmout pouze nezbytné"}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>

      {/* Lead Text */}
      <p
        style={{
          fontSize: "13px",
          lineHeight: "1.55",
          color: "#cbd5e1",
          margin: "0 0 14px 0",
        }}
      >
        {isDe
          ? "Wir verwenden essenzielle Cookies für den Buchungsablauf und anonyme Analysen zur stetigen Verbesserung Ihres Aufenthalts."
          : isEn
          ? "We use essential cookies to guarantee smooth reservations and anonymous analytics to elevate your stay. Your privacy is respected."
          : "Pro spolehlivý chod online rezervací a anonymní analýzu návštěvnosti využíváme nezbytné a analytické cookies. Vaše soukromí plně respektujeme."}
      </p>

      {/* Expandable Preferences Drawer */}
      {showDetails && (
        <div
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "10px",
            padding: "12px",
            marginBottom: "14px",
            fontSize: "12px",
          }}
        >
          <div className="d-flex align-items-center justify-content-between mb-2 pb-2 border-bottom border-secondary border-opacity-25">
            <div>
              <strong className="text-white d-block">
                {isDe ? "Essenzielle Cookies" : isEn ? "Essential Cookies" : "Nezbytné cookies"}
              </strong>
              <span className="text-white-50" style={{ fontSize: "11px" }}>
                {isDe
                  ? "Online-Buchungssystem, Spracheinstellung"
                  : isEn
                  ? "Online booking engine, language preference"
                  : "Online rezervační systém, jazyk webu"}
              </span>
            </div>
            <span className="badge bg-secondary text-uppercase" style={{ fontSize: "10px" }}>
              {isDe ? "Aktiv" : isEn ? "Active" : "Aktivní"}
            </span>
          </div>

          <div className="d-flex align-items-center justify-content-between">
            <div>
              <strong className="text-white d-block">
                {isDe ? "Anonyme Analytik" : isEn ? "Anonymous Analytics" : "Anonymní analytika"}
              </strong>
              <span className="text-white-50" style={{ fontSize: "11px" }}>
                {isDe
                  ? "Messung der Seitenleistung & Trends"
                  : isEn
                  ? "Performance metrics & visitor insights"
                  : "Měření návštěvnosti pro zlepšení webu"}
              </span>
            </div>
            <label className="form-check form-switch mb-0" style={{ cursor: "pointer" }}>
              <input
                className="form-check-input"
                type="checkbox"
                checked={analyticsEnabled}
                onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                style={{ cursor: "pointer", backgroundColor: analyticsEnabled ? "#ff7425" : undefined, borderColor: analyticsEnabled ? "#ff7425" : undefined }}
              />
            </label>
          </div>
        </div>
      )}

      {/* Action Buttons Row */}
      <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
        <button
          type="button"
          className="cookie-link-text"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails
            ? isDe
              ? "Details schließen"
              : isEn
              ? "Hide details"
              : "Skrýt podrobnosti"
            : isDe
            ? "Einstellungen"
            : isEn
            ? "Preferences"
            : "Podrobnosti"}
        </button>

        <div className="d-flex align-items-center gap-2">
          <button
            type="button"
            className="cookie-btn-secondary"
            onClick={() => saveConsent(false)}
          >
            {isDe ? "Nur essenzielle" : isEn ? "Essential only" : "Pouze nezbytné"}
          </button>
          <button
            type="button"
            className="cookie-btn-primary"
            onClick={() => saveConsent(true)}
          >
            <i className="fa-solid fa-check" style={{ fontSize: "11px" }}></i>
            <span>{isDe ? "Alle akzeptieren" : isEn ? "Accept all" : "Přijmout vše"}</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
