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
        style={{ backgroundImage: `url('/assets/images/web/winter-ski.jpg')` }}
      >
        <div className="container">
          <div className="subpage-breadcrumb">
            <Link href="/">{isDe ? "Startseite" : isEn ? "Home" : "Domů"}</Link>
            <i className="fa-solid fa-chevron-right" style={{ fontSize: "10px" }}></i>
            <Link href="/#residence">
              {isDe ? "Erlebnisse & Berglebensstil" : isEn ? "Experiences & Alpine Lifestyle" : "Zážitky & Horský životní styl"}
            </Link>
            <i className="fa-solid fa-chevron-right" style={{ fontSize: "10px" }}></i>
            <span className="text-white">
              {isDe ? "Skigebiet Bublava" : isEn ? "Bublava Ski Resort" : "Ski Areál Bublava"}
            </span>
          </div>

          <div className="subpage-badge">
            <i className="fa-solid fa-person-skiing text-warning"></i>
            <span>
              {isDe
                ? "150 m von der Residenz • Ski-in & Ski-out Lage"
                : isEn
                ? "150 m from Residence • Ski-in & Ski-out Location"
                : "150 m od rezidence • Ski-in & Ski-out lokalita"}
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
                  {isDe ? "150 Meter" : isEn ? "150 Metres" : "150 metrů"}
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
                  {isDe ? "Frisch präparierter Carving-Hang" : isEn ? "Floodlit carving on corduroy" : "Osvětlený carving pod lanovkou"}
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
              ? "Im Gegensatz zu überfüllten Massenskigebieten bewahrt sich Bublava seine authentische, freundliche Bergatmosphäre, saubere Bergluft und breite, übersichtliche Pisten, auf denen Kinder sicher unterwegs sind. Alle Abfahrten werden täglich mit modernen Pistenraupen nach höchstem Qualitätsstandard präpariert."
              : isEn
              ? "Unlike crowded mega-resorts, Bublava preserves an authentic mountain warmth, unpolluted alpine air, and wide, well-organized slopes where children can ski safely. All pistes are groomed daily by modern snowcats to high standards."
              : "Na rozdíl od gigantických a přeplněných center si Bublava zachovává přátelskou horskou atmosféru, čistý vzduch a široké, přehledné tratě, kde se nemusíte bát pustit děti na svah samotné. Tratě jsou pravidelně denně upravovány moderními rolbami s vysokým standardem úpravy."}
          </p>

          <div className="article-visual-banner">
            <img
              src="/assets/images/web/winter-ski.jpg"
              alt={isDe ? "Pistenpanorama im Skigebiet Bublava" : isEn ? "Ski slopes at Bublava" : "Zimní panorama sjezdovek na Bublavě"}
            />
            <div className="article-visual-caption">
              {isDe
                ? "Piste Großer Bleiberg an der 4er-Sesselbahn mit Ausblick auf das Tal von Bublava"
                : isEn
                ? "Velký Bleiberg slope alongside the 4-seater chairlift overlooking the Bublava valley"
                : "Sjezdovka Velký Bleiberg pod 4sedačkovou lanovkou s výhledem na údolí Bublavy"}
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="article-section">
          <h2>
            {isDe
              ? "Übersicht der Pisten & Liftanlagen"
              : isEn
              ? "Overview of Ski Slopes & Lift Infrastructure"
              : "Přehled sjezdových tratí a přepravních zařízení"}
          </h2>
          <p>
            {isDe
              ? "Das Skigebiet bietet eine abwechslungsreiche Mischung aus Pisten für Anfänger, Genuss-Skifahrer und sportliche Carver:"
              : isEn
              ? "The resort offers a versatile variety of slopes catering to beginners, families with young children, and passionate skiers seeking crisp carving turns:"
              : "V areálu najdete pestrý mix sjezdovek, který uspokojí jak úplné začátečníky a rodiny s kočárky, tak náročné sportovní lyžaře vyhledávající svižný carving:"}
          </p>

          <ul>
            <li>
              <strong>
                {isDe ? "Kleiner Bleiberg (Blaue Piste, ca. 850 m):" : isEn ? "Malý Bleiberg (Blue run, approx. 850 m):" : "Malý Bleiberg (modrá trať, cca 850 m):"}
              </strong>{" "}
              {isDe
                ? "Sanfter, sicherer und sehr breiter Hang. Ideal für Kinder, Familien und Einsteiger. Bequemer Tellerlift."
                : isEn
                ? "A gentle, safe, and generously wide slope. Ideal for children learning, relaxed family skiing, and beginners. Served by a comfortable surface platter lift."
                : "Mírný, bezpečný a velkoryse široký svah. Ideální pro výuku dětí, pohodové rodinné lyžování a začátečníky. Obsluhován pohodlným talířovým vlekem."}
            </li>
            <li>
              <strong>
                {isDe ? "Großer Bleiberg (Rote Piste, ca. 1.000 m):" : isEn ? "Velký Bleiberg (Red run, approx. 1,000 m):" : "Velký Bleiberg (červená trať, cca 1 000 m):"}
              </strong>{" "}
              {isDe
                ? "Die sportliche Hauptabfahrt direkt entlang der modernen 4er-Sesselbahn. Dynamisches Profil mit idealem Gefälle für sportliche Schwünge auf der Kante."
                : isEn
                ? "The sporting flagship of the resort directly along the modern 4-seater chairlift. Features a dynamic pitch with an ideal gradient for high-speed carving on edge."
                : "Hlavní sportovní tepna areálu přímo podél moderní 4sedačkové lanovky. Dynamický profil s optimálním sklonem pro dlouhý čistý oblouk na hranách."}
            </li>
            <li>
              <strong>
                {isDe ? "Bleiberg Nord (Schwarze Piste, ca. 700 m):" : isEn ? "Bleiberg North (Black run, approx. 700 m):" : "Bleiberg sever (černá trať, cca 700 m):"}
              </strong>{" "}
              {isDe
                ? "Steilere Passage für geübte Skifahrer, die anspruchsvollere technische Hänge bevorzugen."
                : isEn
                ? "A steeper pitch designed for advanced skiers looking for a brisk descent down a more demanding technical incline."
                : "Prudší pasáž pro zkušené lyžaře, kteří hledají svižný sjezd v technicky náročnějším sklonu."}
            </li>
            <li>
              <strong>
                {isDe ? "Kinderland & Übungswiese:" : isEn ? "Children's Snow Park & Learning Meadow:" : "Dětský park & výuková louka:"}
              </strong>{" "}
              {isDe
                ? "Eigener geschützter Bereich für die kleinsten Skifahrer mit Zauberteppich-Förderband, bunten Spielfiguren und sanftem Auslauf."
                : isEn
                ? "A dedicated enclosure for youngsters equipped with a gentle magic carpet conveyor, playful training obstacles, and a safe runout."
                : "Vyhrazený prostor pro nejmenší lyžaře vybavený pojízdným kobercem, zábavnými figurkami a pozvolným bezpečným dojezdem."}
            </li>
            <li>
              <strong>
                {isDe ? "Funpark:" : isEn ? "Snowpark:" : "Snowpark:"}
              </strong>{" "}
              {isDe
                ? "Kicker, Boxen und Rails für Snowboarder und Freestyler je nach aktueller Schneelage."
                : isEn
                ? "Jumps, boxes, and rails for snowboarders and freestyle skiers depending on current snow coverage."
                : "Překážky, raily a skoky pro snowboardisty a freestylové lyžaře v závislosti na sněhových podmínkách."}
            </li>
          </ul>

          <h3>
            {isDe
              ? "Nachtskilauf unter Flutlicht in unvergleichlicher Atmosphäre"
              : isEn
              ? "Evening Skiing in an Unforgettable Atmosphere"
              : "Večerní lyžování v neopakovatelné atmosféře"}
          </h3>
          <p>
            {isDe
              ? "Eines der größten Highlights von Bublava ist der Flutlicht-Abendskilauf. An ausgewählten Abenden wird die Hauptpiste nachmittags frisch präpariert und bietet von 18:00 bis 21:00 Uhr beste Bedingungen auf frischem Rillenschnee unter hellen Scheinwerfern. Für unsere Residenzgäste ein echtes Privileg: Einfach die Treppe hinabgehen und den Abend auf der stimmungsvoll beleuchteten Piste genießen."
              : isEn
              ? "One of Bublava's greatest highlights is floodlit evening skiing. On selected evenings, the main slope is freshly regroomed after afternoon hours, offering fresh corduroy snow under bright floodlights from 18:00 to 21:00. For our guests, it's an extraordinary privilege: just walk down the residence stairs and spend the evening enjoying quiet, illuminated slopes."
              : "Jedním z největších taháků Bublavy je večerní lyžování pod umělým osvětlením. Vybrané dny v týdnu je hlavní sjezdovka čerstvě urolbována po odpoledním uzavření a od 18:00 do 21:00 nabízí jízdu po manšestru pod jasnými reflektory. Pro hosty našich apartmánů je to jedinečný zážitek: stačí seběhnout ze schodů rezidence a strávit večer na prázdné osvětlené sjezdovce."}
          </p>
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
                <strong>privates, abschließbares und beheiztes Skidepot</strong> mit automatischen Skischuhtrocknern. Morgens erwarten Sie herrlich warme und trockene Skischuhe. Zur Talstation sind es zu Fuß nur <strong>150 Meter (2 Minuten Fußweg)</strong>, sodass Sie während Ihres Urlaubs kein Auto benötigen. Nach dem Skifahren wechseln Sie einfach direkt in unsere <strong>Lobby Bar</strong> zu einer heißen Schokolade, erlesenem Kaffee oder wärmendem Glühwein.
              </>
            ) : isEn ? (
              <>
                Guests staying at Apartments Panorama enjoy a{" "}
                <strong>private, lockable ground-floor ski locker</strong> with built-in electric boot warmers. Every morning, your boots are warm, dry, and ready. The base station is only <strong>150 metres away (a 2-minute stroll)</strong>, completely eliminating the need for a car. Upon returning, step straight into our <strong>Lobby Bar</strong> for hot artisan coffee, cocoa, or fragrant mulled wine.
              </>
            ) : (
              <>
                Ubytovaní hosté v Apartmánech Panorama mají v přízemí budovy k dispozici{" "}
                <strong>soukromou uzamykatelnou lyžařskou kóji</strong> s integrovaným elektrickým vysoušečem lyžařských bot. Ráno vás čekají příjemně vyhřáté a suché přeskáče. K dolní stanici vleku je to pěšky pouze <strong>150 metrů (2 minuty chůze)</strong>, takže k lyžování nepotřebujete auto. Po návratu z lyžování můžete přejít přímo do našeho <strong>Lobby Baru</strong> na šálek horké čokolády, výběrové kávy nebo svařeného vína.
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
                  ? "Nur 150 m von den Apartmány Panorama (2 Minuten gemütlicher Spaziergang zu den Kassen und Liften)."
                  : isEn
                  ? "Only 150 m from Apartments Panorama (a relaxed 2-minute stroll to ticket counters and lifts)."
                  : "Pouze 150 m od Apartmánů Panorama (2 minuty klidné chůze k pokladnám a vlekům)."}
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
            <Link href="/#apartments" className="btn-cta-secondary">
              <span>{isDe ? "Wohnungen ansehen" : isEn ? "Explore Apartments" : "Prohlédnout apartmány"}</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
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
                    src="/assets/images/web/summer-hiking.jpg"
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
