"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function SkiArealContent() {
  const { isEn, isDe } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section
        className="subpage-hero"
        style={{ backgroundImage: `url('/assets/images/web/alpine-winter-bg.jpg')` }}
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
              {isDe ? "Skigebiet Bublava" : isEn ? "Bublava Ski Resort" : "Ski Areál Bublava"}
            </span>
          </div>

          <div className="subpage-badge">
            <i className="fa-solid fa-person-skiing text-warning"></i>
            <span>
              {isDe
                ? "500 m von der Residenz • Ski-in & Ski-out Lage"
                : isEn
                ? "500 m from Residence • Ski-in & Ski-out Location"
                : "500 m od rezidence • Ski-in & Ski-out lokalita"}
            </span>
          </div>

          <h1 className="subpage-hero-title">
            {isDe
              ? "Skigebiet Bublava: Komfortables Skivergnügen direkt vor der Haustür"
              : isEn
              ? "Bublava Ski Resort: Effortless Skiing Right on Your Doorstep"
              : "Ski Areál Bublava: Komfortní lyžování přímo za vašimi dveřmi"}
          </h1>

          <p className="subpage-hero-lead">
            {isDe
              ? "Vergessen Sie die morgendliche Autofahrt und die Parkplatzsuche. Von den Apartmány Panorama steigen Sie fast direkt aus dem beheizten Skidepot auf die Piste. Es erwarten Sie 6 abwechslungsreiche Abfahrten, eine 4er-Sesselbahn, Flutlicht-Nachtskilauf und beste Bedingungen für Familien mit Kindern."
              : isEn
              ? "Leave morning car shuttles and crowded parking queues behind. Step into your skis almost immediately from the heated ski room of Apartments Panorama. Enjoy 6 versatile ski slopes, a 4-seater chairlift, floodlit night skiing, and complete family-friendly amenities."
              : "Zapomeňte na ranní přejíždění autem a hledání parkoviště u přelidněných pokladen. Z Apartmánů Panorama vstoupíte do lyží takřka přímo z vyhřívané lyžárny rezidence. Čeká na vás 6 pestrých sjezdovek, 4sedačková lanovka, noční lyžování i zázemí pro rodiny s dětmi."}
          </p>

          {/* Quick Stats Grid */}
          <div className="subpage-stats-grid">
            <div className="subpage-stat-card">
              <div className="subpage-stat-icon">
                <i className="fa-solid fa-person-skiing"></i>
              </div>
              <div>
                <div className="subpage-stat-val">
                  {isDe ? "6 Skipisten" : isEn ? "6 Ski Slopes" : "6 sjezdovek"}
                </div>
                <div className="subpage-stat-lbl">
                  {isDe ? "Blaue, rote und schwarze Pisten" : isEn ? "Blue, red, and black runs" : "Modrá, červená i černá"}
                </div>
              </div>
            </div>

            <div className="subpage-stat-card">
              <div className="subpage-stat-icon">
                <i className="fa-solid fa-chair"></i>
              </div>
              <div>
                <div className="subpage-stat-val">
                  {isDe ? "4er-Sesselbahn" : isEn ? "4-Seater Chairlift" : "4sedačková lanovka"}
                </div>
                <div className="subpage-stat-lbl">
                  {isDe ? "Bleiberg + Lifte & Förderband" : isEn ? "Bleiberg + T-bars & carpet" : "Bleiberg + vleky & koberec"}
                </div>
              </div>
            </div>

            <div className="subpage-stat-card">
              <div className="subpage-stat-icon">
                <i className="fa-solid fa-person-walking"></i>
              </div>
              <div>
                <div className="subpage-stat-val">
                  {isDe ? "500 Meter" : isEn ? "500 Metres" : "500 metrů"}
                </div>
                <div className="subpage-stat-lbl">
                  {isDe ? "Zu Fuß von den Apartmány Panorama" : isEn ? "Walk from Apartments Panorama" : "Pěšky z Apartmánů Panorama"}
                </div>
              </div>
            </div>

            <div className="subpage-stat-card">
              <div className="subpage-stat-icon">
                <i className="fa-solid fa-moon"></i>
              </div>
              <div>
                <div className="subpage-stat-val">
                  {isDe ? "Flutlichtskilauf" : isEn ? "Night Skiing" : "Noční lyžování"}
                </div>
                <div className="subpage-stat-lbl">
                  {isDe ? "Nach Betriebsplan des Skigebiets" : isEn ? "Subject to resort operation" : "Dle aktuálního provozu areálu"}
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
              ? "Warum das Skigebiet Bublava die Perle des westlichen Erzgebirges ist"
              : isEn
              ? "Why Bublava Ski Resort Is a Gem of the Western Ore Mountains"
              : "Proč je Ski Areál Bublava klenotem západních Krušných hor?"}
          </h2>
          <p>
            {isDe
              ? "Das Skigebiet Bublava (verbunden mit dem benachbarten Areal Stříbrná) erstreckt sich an den Hängen des Bleibergs (Olověný vrch, 802 m ü. M.). Es gehört zu den beliebtesten Familien- und Sportskigebieten in der gesamten Region Karlovy Vary und im Grenzgebiet zu Sachsen. Dank der Höhenlage am westlichen Erzgebirgskamm, direkt an der sächsischen Grenze bei Klingenthal, und modernster technischer Beschneiung bietet es hervorragende Schneeverhältnisse von Dezember bis März."
              : isEn
              ? "Bublava Ski Resort (interconnected with neighboring Stříbrná) sprawls across the slopes of Olověný vrch (Bleiberg, 802 m a.s.l.). It ranks among the premier family and athletic winter sports destinations in the entire Karlovy Vary Region. Benefiting from its elevation on the western ridge of the Ore Mountains along the German border and modern artificial snowmaking, it provides dependable snow conditions throughout winter from December into March."
              : "Ski Areál Bublava (spojený se sousedním střediskem Stříbrná) se rozprostírá na úbočích vrcholu Olověný vrch (Bleiberg, 802 m n. m.). Patří mezi nejoblíbenější rodinná a sportovní lyžařská střediska v celém Karlovarském kraji. Díky příznivé poloze na západním okraji Krušných hor, těsně u německé hranice, a kompletnímu zasněžovacímu systému nabízí skvělé sněhové podmínky po celou zimní sezónu od prosince až do března."}
          </p>
          <p>
            {isDe
              ? "Im Gegensatz zu überfüllten Großskigebieten bewahrt sich Bublava eine familiäre Bergatmosphäre, saubere Bergluft und breite, übersichtliche Pisten mit sicheren Ausläufen in die Ebene. Die Pisten werden bei geeigneten Schneebedingungen maschinell präpariert (bitte beachten Sie, dass die Pistenpräparierung von den aktuellen Wetterbedingungen sowie dem Betrieb des Skigebiets abhängt und von uns nicht garantiert werden kann)."
              : isEn
              ? "Unlike crowded mega-resorts, Bublava preserves an authentic mountain warmth, unpolluted alpine air, and wide, well-organized slopes with safe, flat runouts. Pistes are groomed when snow and weather conditions permit (please note that slope grooming depends on resort operations and weather, and cannot be guaranteed)."
              : "Na rozdíl od gigantických a přeplněných center si Bublava zachovává přátelskou horskou atmosféru, čistý vzduch a široké, přehledné tratě s bezpečnými dojezdy do roviny. Sjezdovky jsou za příznivých sněhových podmínek pravidelně strojově upravovány (upozorňujeme však, že úpravu sjezdovek nemůžeme garantovat, neboť se odvíjí od aktuálních klimatických podmínek a provozu areálu)."}
          </p>
        </section>

        {/* Section 2 */}
        <section className="article-section">
          <h2>
            {isDe
              ? "Übersicht der Pisten im Skigebiet Bublava (nach Farben & Schwierigkeit)"
              : isEn
              ? "Overview of Ski Slopes in Bublava (Grouped by Color & Difficulty)"
              : "Přehled sjezdovek ve Ski areálu Bublava (přehledně podle barev)"}
          </h2>
          <p>
            {isDe
              ? "Alle Pisten im Skigebiet Bublava zeichnen sich durch überdurchschnittliche Breite, gute Einsehbarkeit und sanfte Ausläufe in die Ebene aus. Nachfolgend finden Sie das aktuelle Pistenangebot, übersichtlich nach Farben und Schwierigkeitsgraden sortiert:"
              : isEn
              ? "All slopes at Bublava Ski Resort are known for their comfortable width, excellent visibility, and gentle, safe runouts. Below is the official piste directory grouped clearly by color and difficulty rating:"
              : "Všechny sjezdové tratě ve Ski areálu Bublava jsou nadstandardně široké, bezpečné a s mírnými dojezdy do roviny. Přehled tratí jsme pro vás uspořádali podle barevné obtížnosti na základě oficiálních parametrů střediska:"}
          </p>

          {/* 🔴 Červené sjezdovky */}
          <div className="mb-4">
            <h3 style={{ color: "#ff5252", display: "flex", alignItems: "center", gap: "10px", fontSize: "1.25rem", marginBottom: "14px" }}>
              <span style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#ff5252", display: "inline-block", boxShadow: "0 0 8px rgba(255,82,82,0.6)" }}></span>
              {isDe ? "Rote Pisten (Mittelschwere Abfahrten)" : isEn ? "Red Slopes (Intermediate Runs)" : "Červené sjezdovky (střední obtížnost)"}
            </h3>
            <div className="practical-info-grid">
              <div className="practical-card" style={{ borderLeft: "3px solid #ff5252" }}>
                <div className="practical-card-title">
                  <i className="fa-solid fa-mountain" style={{ color: "#ff5252" }}></i> Lesní (1 000 m / převýšení 185 m)
                </div>
                <p className="practical-card-desc">
                  {isDe
                    ? "Die längste Piste des Skigebiets (voller 1 km). Sehr abwechslungsreicher Verlauf mit wechselndem Gefälle, 70–80 m Breite in den Waldpassagen und angenehm breiten Almwiesen bis zur 4er-Sesselbahn Stříbrný potok."
                    : isEn
                    ? "The longest slope in the entire resort (full 1 km). Diverse terrain profile with varying gradient, generous width of 70–80 m through scenic forest corridors and gentle meadow sections down to the 4-seater Stříbrný potok chairlift."
                    : "Nejdelší (celý 1 km dlouhá) sjezdovka střední obtížnosti v areálu. Pestrý profil s měnícím se sklonem, komfortní šířkou 70–80 metrů v lesních úsecích i lučních pasážích a dojezdem k lanové dráze Stříbrný potok."}
                </p>
              </div>

              <div className="practical-card" style={{ borderLeft: "3px solid #ff5252" }}>
                <div className="practical-card-title">
                  <i className="fa-solid fa-mountain" style={{ color: "#ff5252" }}></i> Červená (600 m / převýšení 105 m)
                </div>
                <p className="practical-card-desc">
                  {isDe
                    ? "Zentrale Piste auf der Bublava-Seite. Ideales Gefälle für sportliche Carving-Schwünge, dabei dank komfortabler Breite und sicherem Auslauf in die Ebene auch für Genuss-Skifahrer und ältere Kinder sehr angenehm."
                    : isEn
                    ? "Central intermediate slope on the Bublava side. Pitch-perfect gradient for dynamic carving turns, very safe and comfortable thanks to generous width and flat runout."
                    : "Centrální sjezdová trať střední obtížnosti na bublavské straně. Ideální pro svižný carving, ale díky komfortní šířce a dojezdu do roviny je zcela bezpečná a příjemná i pro méně zkušené lyžaře a starší děti."}
                </p>
              </div>
            </div>
          </div>

          {/* 🔵 Modré & Rodinné sjezdovky */}
          <div className="mb-4">
            <h3 style={{ color: "#42a5f5", display: "flex", alignItems: "center", gap: "10px", fontSize: "1.25rem", marginBottom: "14px" }}>
              <span style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#42a5f5", display: "inline-block", boxShadow: "0 0 8px rgba(66,165,245,0.6)" }}></span>
              {isDe ? "Blaue & Familienpisten (Leichte Abfahrten & Funpark)" : isEn ? "Blue & Family Slopes (Easy Runs & Fun Zone)" : "Modré & rodinné sjezdovky (lehká obtížnost)"}
            </h3>
            <div className="practical-info-grid">
              <div className="practical-card" style={{ borderLeft: "3px solid #42a5f5" }}>
                <div className="practical-card-title">
                  <i className="fa-solid fa-person-skiing" style={{ color: "#42a5f5" }}></i> Modrá (400 m / převýšení 70 m)
                </div>
                <p className="practical-card-desc">
                  {isDe
                    ? "Beliebteste Familienpiste für Kinder, Einsteiger und Skikurse. Sanft, herrlich breit und mit malerischen Ausblicken auf die winterliche Landschaft."
                    : isEn
                    ? "The most popular family slope for kids, beginners, and ski lessons. Gentle, wide, and blessed with scenic mountain vistas."
                    : "Nejoblíbenější sjezdovka pro rodiny s dětmi, začátečníky a lyžařské kurzy. Mírná, široká a s krásnými panoramatickými výhledy do horského údolí."}
                </p>
              </div>

              <div className="practical-card" style={{ borderLeft: "3px solid #42a5f5" }}>
                <div className="practical-card-title">
                  <i className="fa-solid fa-wave-square" style={{ color: "#42a5f5" }}></i> Fun trať (400 m / převýšení 70 m)
                </div>
                <p className="practical-card-desc">
                  {isDe
                    ? "Kreative Fun-Piste für Skifahrer und Snowboarder mit Bodenwellen, kleinen Schanzen und Hindernissen. Bei ausreichend Naturschnee wartet hier auch ein spektakulärer Schneetunnel."
                    : isEn
                    ? "Playful obstacle run for skiers and snowboarders featuring rolling waves, mini-kickers, and boxes. In deep snow, a unique snow tunnel is built."
                    : "Zábavná trať pro lyžaře i snowboardisty s několika terénními vlnami, skoky a překážkami. Při dostatku sněhu je pro návštěvníky připraven i originální sněhový tunel."}
                </p>
              </div>

              <div className="practical-card" style={{ borderLeft: "3px solid #42a5f5" }}>
                <div className="practical-card-title">
                  <i className="fa-solid fa-graduation-cap" style={{ color: "#42a5f5" }}></i> Školní louka (180 m / převýšení 25 m)
                </div>
                <p className="practical-card-desc">
                  {isDe
                    ? "Sehr sanfte Übungswiese direkt neben der IGLOO-Bar. Eltern können ihren Nachwuchs bei einem wärmenden Heißgetränk entspannt im Blick behalten."
                    : isEn
                    ? "Very gentle training meadow situated directly next to the IGLOO bar, where parents can comfortably watch their children's progress while sipping warm drinks."
                    : "Mírná výuková trať na široké louce v bezprostředním sousedství baru IGLOO, odkud můžete u hřejivého nápoje pohodlně sledovat první lyžařské oblouky vašich dětí."}
                </p>
              </div>

              <div className="practical-card" style={{ borderLeft: "3px solid #42a5f5" }}>
                <div className="practical-card-title">
                  <i className="fa-solid fa-children" style={{ color: "#42a5f5" }}></i> Dětský park s pojezdem (180 m / převýšení 27 m)
                </div>
                <p className="practical-card-desc">
                  {isDe
                    ? "Geschützter Kinderbereich im Zentrum des Skigebiets mit bequemem Zauberteppich-Förderband, bunten Spielfiguren und sicheren Durchfahrtsbögen."
                    : isEn
                    ? "Enclosed children's fun zone in the heart of the resort equipped with a moving magic carpet lift, colorful characters, and slalom arches."
                    : "Bezpečný prostor v centru areálu vybavený pohyblivým kobercovým pásem, hracími prvky, figurkami a brankami pro nejmenší děti."}
                </p>
              </div>
            </div>
          </div>

          {/* Upozornění ke sjezdovce Bleiberg */}
          <div className="p-3 rounded-3 mb-4" style={{ background: "rgba(255, 180, 0, 0.05)", border: "1px solid rgba(255, 180, 0, 0.2)" }}>
            <p className="small mb-0 text-white-50" style={{ lineHeight: "1.6" }}>
              <i className="fa-solid fa-triangle-exclamation text-warning me-2"></i>
              <strong className="text-white">{isDe ? "Hinweis zur Piste Bleiberg:" : isEn ? "Notice regarding Bleiberg slope:" : "Upozornění ke sjezdovce Bleiberg:"}</strong>{" "}
              {isDe
                ? "Die historische schwarze Abfahrt Bleiberg (frühere Steilabfahrt) ist derzeit dauerhaft außer Betrieb."
                : isEn
                ? "The historical black run Bleiberg (formerly the steep descent) is currently permanently closed / non-operational."
                : "Bývalá černá sjezdovka Bleiberg (dříve nejprudší svah) je v současnosti trvale mimo provoz a v areálu se již neprovozuje."}
            </p>
          </div>

          {/* Večerní lyžování s disclaimerem */}
          <h3>
            {isDe
              ? "Flutlichtskilauf am Abend (nach tagesaktuellem Betrieb des Skigebiets)"
              : isEn
              ? "Floodlit Evening Skiing (Subject to Ski Resort Operations)"
              : "Večerní lyžování pod umělým osvětlením (dle provozu areálu)"}
          </h3>
          <p>
            {isDe
              ? "Das Skizentrum Bublava bietet in der Hauptsaison an ausgewählten Tagen Abendskilauf unter Flutlichtscheinwerfern an."
              : isEn
              ? "Bublava Ski Resort occasionally features evening skiing under floodlights on selected days during the peak winter season."
              : "Ski Areál Bublava mívá ve vybraných obdobích hlavní zimní sezóny v nabídce večerní lyžování pod umělým osvětlením."}
          </p>
          <div className="p-3 rounded-3 mb-3" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <p className="small mb-0 text-white-50" style={{ lineHeight: "1.6" }}>
              <i className="fa-solid fa-circle-info text-info me-2"></i>
              <strong className="text-white">{isDe ? "Wichtiger Hinweis für Gäste:" : isEn ? "Important Notice for Guests:" : "Důležité upozornění pro hosty:"}</strong>{" "}
              {isDe
                ? "Der Betrieb des Flutlichtskilaufs hängt vollständig von den aktuellen Schnee- und Witterungsverhältnissen sowie der Betriebsentscheidung des Skizentrums Bublava ab – wir können die Durchführung des Nachtskilaufs nicht garantieren. Bitte prüfen Sie den tagesaktuellen Betriebsstatus und die Liftzeiten vorab direkt auf der offiziellen Website des Skigebiets (bublava.cz)."
                : isEn
                ? "Evening floodlit skiing operations strictly depend on current snow cover, weather conditions, and scheduling decisions made by Ski Resort Bublava – we cannot guarantee night skiing availability. Guests are strongly advised to check the daily operational schedule directly on the official ski resort website (bublava.cz) prior to heading out."
                : "Provoz večerního lyžování závisí na aktuálních sněhových a povětrnostních podmínkách a na provozním rozhodnutí Ski areálu Bublava – dostupnost večerního lyžování nemůžeme garantovat. Doporučujeme hostům si aktuální denní stav provozu a rozpis vleků předem ověřit přímo na oficiálních stránkách střediska (bublava.cz)."}
            </p>
          </div>
        </section>

        {/* Section 3: Insider Box */}
        <div className="residence-tip-box">
          <div className="residence-tip-box-header">
            <i className="fa-solid fa-star"></i>
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
                Gäste der Apartmány Panorama nutzen im Erdgeschoss ein{" "}
                <strong>privates, abschließbares und beheiztes Skidepot</strong> mit automatischen Skischuhtrocknern. Morgens erwarten Sie herrlich warme und trockene Skischuhe. Zur Talstation sind es zu Fuß nur <strong>500 Meter</strong>, sodass Sie während Ihres Urlaubs kein Auto benötigen. Nach dem Skifahren wechseln Sie einfach direkt in unsere <strong>Lobby Bar</strong> zu einer heißen Schokolade, erlesenem Kaffee oder wärmendem Glühwein.
              </>
            ) : isEn ? (
              <>
                Guests staying at Apartments Panorama enjoy a{" "}
                <strong>private, lockable ground-floor ski locker</strong> with built-in electric boot warmers. Every morning, your boots are warm, dry, and ready. The base station is only <strong>only 500 metres away</strong>, completely eliminating the need for a car. Upon returning, step straight into our <strong>Lobby Bar</strong> for hot artisan coffee, cocoa, or fragrant mulled wine.
              </>
            ) : (
              <>
                Ubytovaní hosté v Apartmánech Panorama mají v přízemí budovy k dispozici{" "}
                <strong>soukromou uzamykatelnou lyžařskou kóji</strong> s integrovaným elektrickým vysoušečem lyžařských bot. Ráno vás čekají příjemně vyhřáté a suché přeskáče. K dolní stanici vleku je to pěšky pouze <strong>500 metrů (2 minuty chůze)</strong>, takže k lyžování nepotřebujete auto. Po návratu z lyžování můžete přejít přímo do našeho <strong>Lobby Baru</strong> na šálek horké čokolády, výběrové kávy nebo svařeného vína.
              </>
            )}
          </p>
        </div>

        {/* Section 4: Služby a půjčovna */}
        <section className="article-section">
          <h2>
            {isDe
              ? "Skischule, Skiverleih & Service"
              : isEn
              ? "Ski School, Equipment Rental & Service"
              : "Lyžařská škola, půjčovna vybavení a servis"}
          </h2>
          <p>
            {isDe
              ? "Direkt an den Talstationen in Bublava finden Sie die komplette Ski-Infrastruktur:"
              : isEn
              ? "Comprehensive ski facilities operate right by the lift base stations:"
              : "Přímo u dolních stanic vleků v Bublavě funguje profesionální infrastruktura:"}
          </p>
          <ul>
            <li>
              <strong>
                {isDe ? "Ski- & Snowboardschule:" : isEn ? "Ski & Snowboard School:" : "Lyžařská a snowboardová škola:"}
              </strong>{" "}
              {isDe
                ? "Zertifizierte Skilehrer bieten Einzel- und Gruppenunterricht für Kinder ab 3 Jahren sowie Technikkurse für Erwachsene an."
                : isEn
                ? "Certified APUL instructors provide private and group lessons for children from age 3 upwards, as well as technique coaching for adults refining their carving."
                : "Zkušení certifikovaní instruktoři APUL nabízejí individuální i skupinové lekce pro děti od 3 let i pro dospělé, kteří se chtějí zdokonalit v carvingu."}
            </li>
            <li>
              <strong>
                {isDe ? "Skiverleih:" : isEn ? "Equipment Rental:" : "Půjčovna vybavení:"}
              </strong>{" "}
              {isDe
                ? "Moderne Carvingski, Helme, Langlaufski und Snowboards renommierter Marken (Atomic, Head, Salomon). Verleih für die gesamte Aufenthaltsdauer möglich."
                : isEn
                ? "Complete modern carving sets, helmets, cross-country skis, and snowboards from leading brands (Atomic, Head, Salomon). Long-term rentals for your entire stay available."
                : "Kompletní carvingové sety, helmy, běžky i snowboardy od renomovaných značek (Atomic, Head, Salomon). Možnost zapůjčení na celou dobu pobytu."}
            </li>
            <li>
              <strong>
                {isDe ? "Skiservice (Wintersteiger):" : isEn ? "Ski Service (Wintersteiger):" : "Servis lyží (Wintersteiger):"}
              </strong>{" "}
              {isDe
                ? "Präzises Kantenschleifen mit Keramikscheiben, Belagreparatur und Heißwachsen mit schnellem Express-Service."
                : isEn
                ? "Precise ceramic-disc edge grinding, base repair, and hot waxing with swift express turnaround."
                : "Broušení hran keramickými kotouči, úprava skluznic a horké voskování s expresním odbavením."}
            </li>
          </ul>
        </section>

        {/* Practical info grid */}
        <section className="article-section">
          <h2>
            {isDe ? "Praktische Besucherinformationen" : isEn ? "Practical Visitor Information" : "Praktické informace pro návštěvníky"}
          </h2>
          <div className="practical-info-grid">
            <div className="practical-card">
              <div className="practical-card-title">
                <i className="fa-solid fa-location-dot"></i>{" "}
                {isDe ? "Entfernung" : isEn ? "Distance" : "Vzdálenost"}
              </div>
              <p className="practical-card-desc">
                {isDe
                  ? "Nur 500 m von den Apartmány Panorama zu den Kassen und Liften."
                  : isEn
                  ? "Only 500 m from Apartments Panorama to ticket counters and lifts."
                  : "Pouze 500 m od Apartmánů Panorama k pokladnám a vlekům."}
              </p>
            </div>

            <div className="practical-card">
              <div className="practical-card-title">
                <i className="fa-solid fa-clock"></i>{" "}
                {isDe ? "Öffnungszeiten" : isEn ? "Operating Hours" : "Provozní doba"}
              </div>
              <p className="practical-card-desc">
                {isDe
                  ? "Tagesskilauf regulär 9:00 – 16:00 Uhr. Flutlicht-Nachtskilauf 18:00 – 21:00 Uhr (laut aktuellem Plan)."
                  : isEn
                  ? "Daily skiing normally 9:00 – 16:00. Floodlit evening skiing 18:00 – 21:00 (according to schedule)."
                  : "Denní lyžování standardně 9:00 – 16:00. Večerní lyžování 18:00 – 21:00 (dle aktuálního rozpisu)."}
              </p>
            </div>

            <div className="practical-card">
              <div className="practical-card-title">
                <i className="fa-solid fa-ticket"></i>{" "}
                {isDe ? "Skipässe" : isEn ? "Ski Passes" : "Skipasy"}
              </div>
              <p className="practical-card-desc">
                {isDe
                  ? "Moderne berührungslose RFID-Chipkarten. Punkte-, Tages-, Mehrtageskarten und Familienpakete erhältlich."
                  : isEn
                  ? "Contactless RFID chip cards. Available as point-based, full-day, multi-day passes, and family packages."
                  : "Moderní bezdotykové čipové karty. V nabídce jsou bodové, celodenní i vícedenní tarify a rodinné balíčky."}
              </p>
            </div>

            <div className="practical-card">
              <div className="practical-card-title">
                <i className="fa-solid fa-utensils"></i>{" "}
                {isDe ? "Gastronomie an der Piste" : isEn ? "On-Slope Dining" : "Gastronomie u svahu"}
              </div>
              <p className="practical-card-desc">
                {isDe
                  ? "Schneebars direkt am Lift, Berggasthaus U Pražáka (600 m) oder unsere hauseigene Lobby Bar."
                  : isEn
                  ? "Snack bars right at the chairlift, local restaurant U Pražáka (600 m), or our on-site Lobby Bar."
                  : "Bary a horské občerstvení přímo u lanovky, restaurace U Pražáka (600 m) nebo Lobby Bar v rezidenci."}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <div className="article-cta-box">
          <span className="subpage-badge mb-3">
            {isDe ? "Winterurlaub an der Skipiste" : isEn ? "Winter Holiday by the Slopes" : "Zimní dovolená na sjezdovce"}
          </span>
          <h3>
            {isDe
              ? "Erleben Sie echten Bergkomfort in den Apartmány Panorama"
              : isEn
              ? "Experience True Mountain Comfort at Apartments Panorama"
              : "Zažijte pravý horský komfort v Apartmánech Panorama"}
          </h3>
          <p>
            {isDe
              ? "Reservieren Sie Ihre Ferienwohnung mit privatem Balkon und Blick auf den verschneiten Bleiberg. Wir garantieren den besten Direktpreis ohne Vermittlungsgebühren."
              : isEn
              ? "Reserve your apartment with a private balcony overlooking snow-covered Bleiberg. We guarantee our best direct rate with zero agency commissions."
              : "Rezervujte si svůj apartmán s privátním balkonem a výhledem na zasněžený Bleiberg. Garantujeme nejvýhodnější přímou cenu bez zprostředkovatelských provizí."}
          </p>
          <div className="cta-buttons">
            <Link href="/rezervace" className="btn-cta-primary">
              <span>{isDe ? "Verfügbarkeit prüfen & buchen" : isEn ? "Check Dates & Book Now" : "Ověřit termín & Rezervovat"}</span>
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
                      ? "Hunderte Kilometer gespurte Loipen nach Přebuz, Boží Dar und Anschluss an die sächsische Kammloipe."
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
                      ? "18 Minuten zu Fuß zum Aussichtsturm, historisches Zinnbergwerk Rolava und Skisprungschanze Vogtland Arena."
                      : isEn
                      ? "18-minute scenic walk to the lookout tower, mysterious Rolava tin mine, and Vogtland Arena."
                      : "18 minut pěšky k rozhledně, tajuplný cínový důl Rolava a skokanská Vogtland Arena."}
                  </p>
                  <div className="crosslink-arrow">
                    <span>{isDe ? "Mehr erfahren" : isEn ? "Read Guide" : "Číst průvodce"}</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-4">
              <Link href="/lobby-bar" className="crosslink-card">
                <div className="crosslink-thumb">
                  <img
                    src="/assets/images/web/lobby-bar-evening.jpg"
                    alt="Rezidenční Lobby Bar"
                  />
                </div>
                <div className="crosslink-body">
                  <div className="crosslink-tag">
                    {isDe ? "Entspannung im Haus" : isEn ? "Relaxation at Residence" : "Relaxace v rezidenci"}
                  </div>
                  <h4 className="crosslink-title">
                    {isDe ? "Residenz-Lobby-Bar & Lounge" : isEn ? "Residential Lobby Bar & Lounge" : "Rezidenční Lobby Bar & Lounge"}
                  </h4>
                  <p className="crosslink-desc">
                    {isDe
                      ? "Barista-Kaffee, gezapftes Bier, erlesene Weine und Großbildleinwand für Sportübertragungen."
                      : isEn
                      ? "Artisan coffee, local draft beer, evening fine wines, and a big screen for live sports."
                      : "Výběrová káva, točené pivo, večerní vína a velká obrazovka pro sportovní přenosy."}
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
