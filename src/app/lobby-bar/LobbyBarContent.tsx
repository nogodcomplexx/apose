"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function LobbyBarContent() {
  const { isEn, isDe } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section
        className="subpage-hero"
        style={{ backgroundImage: `url('/assets/images/web/lobby-bar-evening.jpg')` }}
      >
        <div className="container">
          <div className="subpage-breadcrumb">
            <a href="/">{isDe ? "Startseite" : isEn ? "Home" : "Domů"}</a>
            <i className="fa-solid fa-chevron-right" style={{ fontSize: "10px" }}></i>
            <a href="/#residence">
              {isDe ? "Erlebnisse & Berglebensstil" : isEn ? "Experiences & Alpine Lifestyle" : "Zážitky & Horský životní styl"}
            </a>
            <i className="fa-solid fa-chevron-right" style={{ fontSize: "10px" }}></i>
            <span className="text-white">
              {isDe ? "Residenz-Lobby-Bar" : isEn ? "Residential Lobby Bar" : "Rezidenční Lobby Bar"}
            </span>
          </div>

          <div className="subpage-badge">
            <i className="fa-solid fa-martini-glass text-warning"></i>
            <span>
              {isDe
                ? "Im Haus • Erdgeschoss der Residenz (140 m²)"
                : isEn
                ? "On-Site • Residence Ground Floor (140 m²)"
                : "Přímo v domě • 1. nadzemní podlaží rezidence (140 m²)"}
            </span>
          </div>

          <h1 className="subpage-hero-title">
            {isDe
              ? "Residenz-Lobby-Bar: Ihr Gemeinschaftsraum für Morgenkaffee & Abendentspannung"
              : isEn
              ? "Residential Lobby Bar: Your Social Lounge for Morning Coffee & Evening Unwinding"
              : "Rezidenční Lobby Bar: Společenský prostor pro váš ranní i večerní relax"}
          </h1>

          <p className="subpage-hero-lead">
            {isDe
              ? "Ein großzügiger 140 m² Loungebereich im Erdgeschoss der Apartmány Panorama, der exklusiv unseren Hausgästen vorbehalten ist. Genießen Sie morgendlichen Espresso, kühles frisch gezapftes Bier, erlesene mährische Weine, bequeme Sitzgruppen für Gruppen und Familien sowie eine Großbildleinwand für Live-Sportübertragungen."
              : isEn
              ? "A generous 140 m² social lounge on the ground floor of Apartments Panorama, exclusively reserved for our resident guests. Enjoy morning espresso, crisp draft beer, curated Moravian wines, comfortable communal seating for groups and families, and a large display for live sports broadcasts."
              : "Společenské zázemí v přízemí Apartmánů Panorama o ploše 140 m². Prostor je vyhrazen pro ubytované hosty rezidence. K dispozici je ranní káva, čepované pivo, výběr moravských vín, pohodlné posezení pro skupiny i rodiny a velká obrazovka pro sportovní přenosy."}
          </p>

          {/* Quick Stats Grid */}
          <div className="subpage-stats-grid">
            <div className="subpage-stat-card">
              <div className="subpage-stat-icon">
                <i className="fa-solid fa-beer-mug-empty"></i>
              </div>
              <div>
                <div className="subpage-stat-val">
                  {isDe ? "Gezapftes Bier & Bar" : isEn ? "Draft Beer & Bar" : "Čepované pivo & Bar"}
                </div>
                <div className="subpage-stat-lbl">
                  {isDe ? "Erfrischung nach Sport & Piste" : isEn ? "Fresh drinks after sports & slopes" : "Osvěžení po sportu a sjezdovce"}
                </div>
              </div>
            </div>

            <div className="subpage-stat-card">
              <div className="subpage-stat-icon">
                <i className="fa-solid fa-mug-hot"></i>
              </div>
              <div>
                <div className="subpage-stat-val">
                  {isDe ? "Kaffeespezialitäten" : isEn ? "Specialty Coffee" : "Výběrová káva"}
                </div>
                <div className="subpage-stat-lbl">
                  {isDe ? "Espresso, Cappuccino & Tees" : isEn ? "Espresso, cappuccino & teas" : "Espresso, cappuccino & čaje"}
                </div>
              </div>
            </div>

            <div className="subpage-stat-card">
              <div className="subpage-stat-icon">
                <i className="fa-solid fa-wine-glass"></i>
              </div>
              <div>
                <div className="subpage-stat-val">
                  {isDe ? "Mährische Weine" : isEn ? "Moravian Wines" : "Moravská vína"}
                </div>
                <div className="subpage-stat-lbl">
                  {isDe ? "Ausgewählte Vinothek" : isEn ? "Curated boutique cellar selection" : "Pečlivě sestavená vinotéka"}
                </div>
              </div>
            </div>

            <div className="subpage-stat-card">
              <div className="subpage-stat-icon">
                <i className="fa-solid fa-tv"></i>
              </div>
              <div>
                <div className="subpage-stat-val">
                  {isDe ? "Großbildleinwand" : isEn ? "Big-Screen TV" : "Velká obrazovka"}
                </div>
                <div className="subpage-stat-lbl">
                  {isDe ? "Live-Sportübertragungen & Spiele" : isEn ? "Live sports broadcasts & games" : "Sportovní přenosy & hry"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Editorial Article */}
      <main className="subpage-article-container">
        {/* Section 1 */}
        <section className="article-section">
          <h2>
            {isDe
              ? "Der Komfort einer hauseigenen Lounge im Erdgeschoss"
              : isEn
              ? "The Comfort of an On-Site Social Lounge"
              : "Komfort společenského prostoru v přízemí"}
          </h2>
          <p>
            {isDe
              ? "Die meisten Ferienunterkünfte in den Bergen enden an der Wohnungstür. In den Apartmány Panorama bietet das Erdgeschoss eine großzügige 140 m² Lounge, in der sich Gäste mit Freunden treffen, mit der Familie beisammensitzen oder nach einem langen Tag im Schnee entspannen können – ohne das warme Haus verlassen zu müssen."
              : isEn
              ? "Most holiday rentals end at your apartment door. At Apartments Panorama, our ground floor features a generous 140 m² social lounge where guests can gather with friends, relax with family, or unwind after a day on the slopes without ever leaving the warmth of the building."
              : "Většina apartmánových domů na horách končí chodbou a dveřmi do pokoje. V Apartmánech Panorama nabízí 1. nadzemní podlaží velkorysý komerční a společenský prostor o ploše 140 m², kde se hosté mohou sejít s přáteli, posedět s rodinou nebo si v klidu odpočinout po celém dni na svahu, aniž by museli opouštět budovu."}
          </p>
          <p>
            {isDe
              ? "Unsere Lobby Bar verbindet warme Holztöne mit modernem alpinen Design. Sie ist exklusiv für unsere Hausgäste reserviert, was Privatsphäre, Ruhe und reichlich Platz für alle garantiert."
              : isEn
              ? "Our Lobby Bar blends warm timber tones with contemporary alpine interior design. Reserved exclusively for residence guests, it ensures privacy, calm, and generous space for everyone."
              : "Náš Lobby Bar je navržen v teplých tónech dřeva a moderního horského interiéru. Slouží jako příjemné zázemí pro hosty rezidence, což garantuje soukromí, klid a dostatek místa."}
          </p>

          <div className="article-visual-banner">
            <img
              src="/assets/images/web/lobby-bar-evening.jpg"
              alt={isDe ? "Abendliche Stimmung in der Residenz-Lobby-Bar" : isEn ? "Evening atmosphere at the Lobby Bar" : "Večerní atmosféra v rezidenčním Lobby Baru"}
            />
            <div className="article-visual-caption">
              {isDe
                ? "Der Loungebereich im Erdgeschoss der Apartmány Panorama"
                : isEn
                ? "The social lounge on the ground floor of Apartments Panorama"
                : "Společenský prostor v 1. nadzemním podlaží rezidence Apartmány Panorama"}
            </div>
          </div>
        </section>

        {/* Section 2: Nabídka */}
        <section className="article-section">
          <h2>
            {isDe ? "Was erwartet Sie in der Lobby Bar?" : isEn ? "What Awaits You at the Lobby Bar?" : "Co vás v Lobby Baru čeká?"}
          </h2>
          <ul>
            <li>
              <strong>
                {isDe ? "Morgenkaffee & vitaler Start:" : isEn ? "Morning coffee & an energetic start:" : "Ranní káva a čerstvý start:"}
              </strong>{" "}
              {isDe
                ? "Professionelle Siebträgermaschine für Espresso, Cappuccino oder Americano sowie eine Auswahl feinster Tees für einen gelungenen Start in den Skitag."
                : isEn
                ? "Professional espresso machine for espresso, cappuccino, or americano, alongside premium organic teas to kick off your day before heading to the slopes."
                : "Kávovar pro přípravu espressa, cappuccina či americana a nabídka kvalitních čajů pro příjemný začátek dne před odchodem na sjezdovku."}
            </li>
            <li>
              <strong>
                {isDe ? "Abendbar & erlesene Weine:" : isEn ? "Evening wine & draft bar:" : "Večerní bar a vinotéka:"}
              </strong>{" "}
              {isDe
                ? "Nach der Rückkehr von Piste oder Loipe genießen Sie Weine renommierter mährischer Winzer, frisch gezapftes tschechisches Bier und erfrischende alkoholfreie Getränke."
                : isEn
                ? "Celebrate the day's achievements with wines from acclaimed South Moravian winemakers, crisp draft beer, craft ciders, and refreshing soft drinks."
                : "Po návratu ze sjezdovek či hřebenovky oceníte nabídku vín od vybraných moravských vinařů, točené a řemeslné pivo i nabídku nealkoholických nápojů."}
            </li>
            <li>
              <strong>
                {isDe ? "140 m² Freiraum für unsere Gäste:" : isEn ? "140 m² space for our guests:" : "Plocha 140 m² pro hosty:"}
              </strong>{" "}
              {isDe
                ? "Reichlich Platz für Spieleabende mit der Familie, gesellige Runden oder ruhige Leseecken."
                : isEn
                ? "Generous space accommodating family card games, group celebrations, or quiet reading corners."
                : "Dostatek prostoru pro posezení rodin i větších skupin, relax po celém dni na lyžích či na kole."}
            </li>
            <li>
              <strong>
                {isDe ? "Großer HD-Bildschirm:" : isEn ? "Large HD screen:" : "Velká TV obrazovka:"}
              </strong>{" "}
              {isDe
                ? "Der perfekte Ort für gemeinsame Wintersportübertragungen, Fußballabende oder das Teilen der besten Videos vom Skitag."
                : isEn
                ? "The ideal hub for watching live winter games, football matches, or sharing high-definition ski video footage."
                : "Skvělé místo pro společné sledování sportovních přenosů či promítání fotografií a videí ze svahu."}
            </li>
            <li>
              <strong>
                {isDe ? "Gesellschaftsspiele & Bergbücher:" : isEn ? "Board games & regional library:" : "Společenské hry & horská knihovna:"}
              </strong>{" "}
              {isDe
                ? "Eine feine Auswahl an Brettspielen für Jung und Alt sowie Bildbände und Wanderkarten über das Erzgebirge."
                : isEn
                ? "A curated library of family board games, hiking guides, and photography books exploring the Ore Mountains."
                : "Výběr deskových her pro děti i dospělé a publikace mapující Krušné hory."}
            </li>
          </ul>
        </section>

        {/* Section 3: Insider Box */}
        <div className="residence-tip-box">
          <div className="residence-tip-box-header">
            <i className="fa-solid fa-mug-saucer"></i>
            <h4>
              {isDe
                ? "Vorteile für Gäste der Apartmány Panorama"
                : isEn
                ? "Privilege for Guests of Apartments Panorama"
                : "Výhoda pro hosty rezidence Apartmány Panorama"}
            </h4>
          </div>
          <p>
            {isDe ? (
              <>
                In der Lobby Bar nutzen Sie schnelles und stabiles <strong>kostenloses Highspeed-WLAN</strong> sowie ergonomische Sitzmöglichkeiten. Wenn Sie während Ihres Bergurlaubs berufliche Dinge erledigen möchten, finden Sie hier eine ruhige, produktive Arbeitsatmosphäre.
              </>
            ) : isEn ? (
              <>
                In the Lobby Bar you enjoy robust high-speed <strong>complimentary Wi-Fi</strong> and comfortable work-friendly seating. If you need to catch up on remote work during your mountain retreat, it offers a peaceful, functional setting.
              </>
            ) : (
              <>
                V Lobby Baru můžete využít také stabilní vysokorychlostní <strong>Wi-Fi připojení zdarma</strong>{" "}
                a pohodlná místa k sezení. Pokud potřebujete během pobytu vyřídit pracovní záležitosti,
                najdete zde klidné a funkční prostředí.
              </>
            )}
          </p>
        </div>

        {/* Practical info grid */}
        <section className="article-section">
          <h2>
            {isDe ? "Praktische Informationen zur Lobby Bar" : isEn ? "Practical Lobby Bar Details" : "Praktické informace o Lobby Baru"}
          </h2>
          <div className="practical-info-grid">
            <div className="practical-card">
              <div className="practical-card-title">
                <i className="fa-solid fa-location-dot"></i>{" "}
                {isDe ? "Lage & Fläche" : isEn ? "Location & Area" : "Umístění & Plocha"}
              </div>
              <p className="practical-card-desc">
                {isDe
                  ? "Erdgeschoss der Residenz (140 m²), bequem über das Treppenhaus von allen Wohnetagen erreichbar."
                  : isEn
                  ? "Ground floor of the residence (140 m²), directly accessible by stairs from all apartment floors."
                  : "1. nadzemní podlaží rezidence (140 m²), přímo přístupné schodištěm ze všech pater domu."}
              </p>
            </div>

            <div className="practical-card">
              <div className="practical-card-title">
                <i className="fa-solid fa-user-lock"></i>{" "}
                {isDe ? "Exklusivität" : isEn ? "Exclusivity" : "Přístupnost"}
              </div>
              <p className="practical-card-desc">
                {isDe
                  ? "Ausschließlich für unsere Hausgäste reserviert – für höchste Privatsphäre und Ruhe."
                  : isEn
                  ? "Reserved exclusively for our resident guests, guaranteeing peace, safety, and privacy."
                  : "Vyhrazeno pro ubytované hosty s garancí klidného prostředí a soukromí."}
              </p>
            </div>

            <div className="practical-card">
              <div className="practical-card-title">
                <i className="fa-solid fa-wifi"></i>{" "}
                {isDe ? "Konnektivität" : isEn ? "Connectivity" : "Konektivita"}
              </div>
              <p className="practical-card-desc">
                {isDe
                  ? "Kostenloses Highspeed-WLAN und reichlich Steckdosen für Laptops und Mobilgeräte."
                  : isEn
                  ? "Complimentary high-speed Wi-Fi and ample electrical sockets for laptops and work devices."
                  : "Bezplatné silné Wi-Fi pokrytí a dostatek elektrických zásuvek pro práci na notebooku."}
              </p>
            </div>

            <div className="practical-card">
              <div className="practical-card-title">
                <i className="fa-solid fa-users"></i>{" "}
                {isDe ? "Gruppenaufenthalte" : isEn ? "Group Gatherings" : "Skupinové pobyty"}
              </div>
              <p className="practical-card-desc">
                {isDe
                  ? "Idealer Gemeinschaftsraum bei Buchung aller 3 Ferienwohnungen (bis zu 14 Gäste)."
                  : isEn
                  ? "Ideal communal gathering space when booking all 3 suites together (up to 14 guests)."
                  : "Ideální prostor při pronájmu celého objektu (až 14 osob) pro společné večery a posezení."}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <div className="article-cta-box">
          <span className="subpage-badge mb-3">
            {isDe ? "Erstklassiger Bergurlaub" : isEn ? "Exceptional Alpine Setting" : "Dokonalé horské zázemí"}
          </span>
          <h3>
            {isDe
              ? "Buchen Sie Ihren Aufenthalt in den Apartmány Panorama"
              : isEn
              ? "Reserve Your Stay at Apartments Panorama"
              : "Rezervujte si svůj pobyt v Apartmánech Panorama"}
          </h3>
          <p>
            {isDe
              ? "Gönnen Sie sich einen Urlaub, der den Luxus privater Ferienwohnungen mit der exklusiven hauseigenen Lobby Bar direkt an den Skipisten verbindet."
              : isEn
              ? "Treat yourself to a mountain vacation that blends luxury suite comfort with an exclusive residential Lobby Bar right by the ski slopes."
              : "Dopřejte si dovolenou, kde se spojuje komfort plně vybaveného apartmánu s prémiovým zázemím rezidenčního Lobby Baru přímo u sjezdovky."}
          </p>
          <div className="cta-buttons">
            <Link href="/rezervace" className="btn-cta-primary">
              <span>{isDe ? "Aufenthalt zum Bestpreis buchen" : isEn ? "Book Stay at Best Direct Price" : "Zarezervovat pobyt za nejlepší cenu"}</span>
              <i className="fa-solid fa-calendar-check"></i>
            </Link>
            <a href="/#apartments" className="btn-cta-secondary">
              <span>{isDe ? "Wohnungen ansehen" : isEn ? "Explore Apartments" : "Prohlédnout apartmány"}</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </main>

      {/* Crosslink Section */}
      <section className="related-crosslink-section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="subpage-badge">
              {isDe ? "Inspiration für Ihren Aufenthalt" : isEn ? "Stay Inspiration" : "Inspirace pro váš pobyt"}
            </span>
            <h3 className="text-white mt-2">
              {isDe ? "Weitere Erlebnisse rund um die Residenz" : isEn ? "More Experiences Around the Residence" : "Další zážitky v okolí rezidence"}
            </h3>
          </div>

          <div className="row gaper gy-4">
            <div className="col-12 col-md-4">
              <Link href="/ski-areal-bublava" className="crosslink-card">
                <div className="crosslink-thumb">
                  <img
                    src="/assets/images/web/apt-real-balcony-winter.jpg"
                    alt="Ski Areál Bublava"
                  />
                </div>
                <div className="crosslink-body">
                  <div className="crosslink-tag">
                    {isDe ? "Alpiner Skilauf" : isEn ? "Downhill Skiing" : "Sjezdové lyžování"}
                  </div>
                  <h4 className="crosslink-title">
                    {isDe ? "Skigebiet Bublava (500 m)" : isEn ? "Bublava Ski Resort (500 m)" : "Ski Areál Bublava (500 m)"}
                  </h4>
                  <p className="crosslink-desc">
                    {isDe
                      ? "6 Pisten, 4er-Sesselbahn auf den Bleiberg, Flutlicht-Carving, Verleih und Skischule."
                      : isEn
                      ? "6 slopes, 4-seat chairlift on Bleiberg, night carving, ski rental and ski school."
                      : "6 sjezdovek, 4sedačková lanovka na Bleiberg, noční carving, půjčovna a lyžařská škola."}
                  </p>
                  <div className="crosslink-arrow">
                    <span>{isDe ? "Mehr erfahren" : isEn ? "Read Guide" : "Číst průvodce"}</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-4">
              <Link href="/krusnohorska-magistrala" className="crosslink-card">
                <div className="crosslink-thumb">
                  <img
                    src="/assets/images/web/krusnohorska-magistrala-card.jpg"
                    alt="Krušnohorská magistrála"
                  />
                </div>
                <div className="crosslink-body">
                  <div className="crosslink-tag">
                    {isDe ? "Langlauf & Radfahren" : isEn ? "Nordic Skis & Cycling" : "Běžky & Cyklistika"}
                  </div>
                  <h4 className="crosslink-title">
                    {isDe ? "Kammloipe & Erzgebirgs-Magistrale" : isEn ? "Ore Mountain Ridge Trail & Kammloipe" : "Krušnohorská magistrála & Kammloipe"}
                  </h4>
                  <p className="crosslink-desc">
                    {isDe
                      ? "Hunderte Kilometer gespurte Loipen nach Přebuz, Boží Dar und sächsische Kammloipe."
                      : isEn
                      ? "Hundreds of kilometres of groomed tracks toward Přebuz, Boží Dar, and the elite Saxon Kammloipe."
                      : "Stovky kilometrů upravených stop na Přebuz, Boží Dar a prestižní saskou hřebenovku."}
                  </p>
                  <div className="crosslink-arrow">
                    <span>{isDe ? "Mehr erfahren" : isEn ? "Read Guide" : "Číst průvodce"}</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-4">
              <Link href="/vylety-okoli" className="crosslink-card">
                <div className="crosslink-thumb">
                  <img
                    src="/assets/images/web/location-village.jpg"
                    alt="Rozhledna Bleiberg a výlety"
                  />
                </div>
                <div className="crosslink-body">
                  <div className="crosslink-tag">
                    {isDe ? "Natur & Kultur" : isEn ? "Nature & History" : "Příroda & Historie"}
                  </div>
                  <h4 className="crosslink-title">
                    {isDe ? "Aussichtsturm Bleiberg & Ausflugsziele" : isEn ? "Bleiberg Lookout Tower & Day Trips" : "Rozhledna Bleiberg & Výlety v okolí"}
                  </h4>
                  <p className="crosslink-desc">
                    {isDe
                      ? "18 Minuten Fußweg zum Aussichtsturm, historisches Bergwerk Rolava und Vogtland Arena Klingenthal."
                      : isEn
                      ? "18-minute scenic walk to the lookout tower, mysterious Rolava mine, and Klingenthal Vogtland Arena."
                      : "18 minut pěšky k rozhledně, tajuplný důl Rolava a skokanská Vogtland Arena v Klingenthalu."}
                  </p>
                  <div className="crosslink-arrow">
                    <span>{isDe ? "Mehr erfahren" : isEn ? "Read Guide" : "Číst průvodce"}</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
