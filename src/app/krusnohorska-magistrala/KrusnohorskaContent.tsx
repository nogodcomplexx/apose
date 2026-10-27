"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function KrusnohorskaContent() {
  const { isEn, isDe } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section
        className="subpage-hero"
        style={{ backgroundImage: `url('/assets/images/web/krusnohorska-magistrala-winter.jpg')` }}
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
              {isDe ? "Kammloipe & Erzgebirgs-Magistrale" : isEn ? "Ore Mountain Ridge Trail" : "Krušnohorská magistrála"}
            </span>
          </div>

          <div className="subpage-badge">
            <i className="fa-solid fa-person-hiking text-warning"></i>
            <span>
              {isDe
                ? "Westliches Kamm-Tor • Ganzjähriges alpines Paradies"
                : isEn
                ? "Western Gateway to the Ridge • Year-Round Alpine Paradise"
                : "Západní brána magistrály • Celoroční hřebenový ráj"}
            </span>
          </div>

          <h1 className="subpage-hero-title">
            {isDe
              ? "Kammloipe & Erzgebirgs-Magistrale: Hunderte Kilometer Loipen & Radwege ab Bublava"
              : isEn
              ? "Ore Mountain Trail: Hundreds of Kilometres of Tracks & Trails from Bublava"
              : "Krušnohorská magistrála: Stovky kilometrů stop a cyklotras z Bublavy"}
          </h1>

          <p className="subpage-hero-lead">
            {isDe
              ? "Bublava ist der strategische Ausgangspunkt für das westliche Erzgebirge. Im Winter schnallen Sie die Langlaufski an und gleiten über maschinell gespurte Loipen durch wilde Hochmoore nach Přebuz, Boží Dar oder direkt auf die berühmte sächsische Kammloipe. Im Sommer und Herbst verwandelt sich der Erzgebirgskamm in ein Paradies für Mountainbiker und Gravel-Fahrer."
              : isEn
              ? "Bublava serves as the strategic starting gate for the western Ore Mountains. In winter, step into your cross-country skis and glide along machine-groomed tracks across wild peat plateaus toward Přebuz, Boží Dar, or the world-renowned German Kammloipe. In summer and autumn, the ridge comes alive for mountain and gravel cycling."
              : "Bublava je strategickým výchozím bodem západní části Krušných hor. V zimě zde nazujete běžky a projedete se po strojově upravených stopách přes divoká rašeliniště na Přebuz, Boží Dar nebo na vyhlášenou saskou magistrálu Kammloipe. V létě pak magistrála ožívá pro horská i gravel kola."}
          </p>

          {/* Quick Stats Grid */}
          <div className="subpage-stats-grid">
            <div className="subpage-stat-card">
              <div className="subpage-stat-icon">
                <i className="fa-solid fa-route"></i>
              </div>
              <div>
                <div className="subpage-stat-val">242 km</div>
                <div className="subpage-stat-lbl">
                  {isDe ? "Gesamtlänge Magistrale" : isEn ? "Total main ridge trail" : "Celková délka magistrály"}
                </div>
              </div>
            </div>

            <div className="subpage-stat-card">
              <div className="subpage-stat-icon">
                <i className="fa-solid fa-snowflake"></i>
              </div>
              <div>
                <div className="subpage-stat-val">36 km Kammloipe</div>
                <div className="subpage-stat-lbl">
                  {isDe ? "Sächsische Spitzen-Loipe" : isEn ? "Elite German Nordic track" : "Saská elitní běžkařská stopa"}
                </div>
              </div>
            </div>

            <div className="subpage-stat-card">
              <div className="subpage-stat-icon">
                <i className="fa-solid fa-mountain"></i>
              </div>
              <div>
                <div className="subpage-stat-val">800–1 000 m</div>
                <div className="subpage-stat-lbl">
                  {isDe ? "Kammhöhe ü. M." : isEn ? "Ridge elevation" : "Nadmořská výška hřebene"}
                </div>
              </div>
            </div>

            <div className="subpage-stat-card">
              <div className="subpage-stat-icon">
                <i className="fa-solid fa-bicycle"></i>
              </div>
              <div>
                <div className="subpage-stat-val">
                  {isDe ? "Radroute 23" : isEn ? "Cycle Route 23" : "Cyklotrasa 23"}
                </div>
                <div className="subpage-stat-lbl">
                  {isDe ? "Beliebte Sommer-Kammroute" : isEn ? "Popular summer ridge trail" : "Populární letní hřebenovka"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Editorial Article */}
      <main className="subpage-article-container">
        {/* Section 1: Zimní běžkařská magistrála */}
        <section className="article-section">
          <h2>
            {isDe
              ? "Wintertraum auf Langlaufski: Stille Kämme und endloser Rillenschnee"
              : isEn
              ? "Winter Wonderland on Nordic Skis: Serene Ridges & Endless Corduroy"
              : "Zimní pohádka na běžkách: Tiché hřebeny a nekonečný manšestr"}
          </h2>
          <p>
            {isDe
              ? "Während das alpine Skifahren im Skigebiet Bublava Dynamik und Tempo bietet, öffnet die Erzgebirgs-Skimagistrale das Tor zu einer stillen, mystischen nordischen Landschaft. Die Route beginnt direkt in Bublava und führt über weite Hochebenen durch Rolava, das Naturschutzgebiet Přebuz, Jelení und Horní Blatná bis nach Boží Dar und zum Keilberg (Klínovec)."
              : isEn
              ? "While downhill skiing at Bublava Ski Resort delivers thrilling speed, the Ore Mountain Ski Trail (KLM) opens the gateway to silent, mystical Nordic landscapes. The trail sets off directly in Bublava and traverses elevated high plateaus through Rolava, the Přebuz National Nature Reserve, Jelení, and Horní Blatná all the way to Boží Dar and Klínovec."
              : "Zatímco sjezdové lyžování ve Ski Areálu Bublava nabízí dynamiku a rychlost, Krušnohorská lyžařská magistrála (KLM) vám otevře bránu do tiché, mystické severské přírody. Trasa začíná přímo v Bublavě a vede po náhorních plošinách přes Rolavu, národní přírodní rezervaci Přebuz, Jelení, Horní Blatnou až na Boží Dar a Klínovec."}
          </p>
          <p>
            {isDe
              ? "Die hiesige Topographie ist für ihr sanftes Profil mit weitläufigen, sanft geschwungenen Hochebenen bekannt. Daher ist der westliche Teil der Magistrale bei Genuss-Langläufern, sportlichen Familien sowie Skating-Athleten gleichermaßen beliebt."
              : isEn
              ? "The local topography is celebrated for its gentle, rolling terrain with sustained glides and mild gradients. That makes this western branch extraordinarily popular among touring Nordic skiers, active families, and endurance athletes practicing both classic stride and skate technique."
              : "Zdejší terény jsou proslulé mírným profilem s táhlými zvlněnými rovinami a jemnými stoupáními. Právě proto je západní část magistrály vyhledávaná jak rekreačními běžkaři, tak rodinami a sportovci trénujícími vytrvalostní bruslení (skate)."}
          </p>

          <div className="article-visual-banner">
            <img
              src="/assets/images/web/krusnohorska-magistrala-winter.jpg"
              alt={isDe ? "Erzgebirgs-Skimagistrale bei Bublava" : isEn ? "Ore Mountain Ski Trail near Bublava" : "Krušnohorská lyžařská magistrála na Bublavě"}
            />
            <div className="article-visual-caption">
              {isDe
                ? "Präparierte Langlaufloipen der Erzgebirgs-Skimagistrale auf den schneereichen Hochebenen bei Bublava"
                : isEn
                ? "Groomed cross-country ski tracks of the Ore Mountain Ski Trail across the elevated high plateaus near Bublava"
                : "Upravené běžecké stopy Krušnohorské lyžařské magistrály na zasněžených hřebenových planinách u Bublavy"}
            </div>
          </div>
        </section>

        {/* Section 2: Kammloipe */}
        <section className="article-section">
          <h2>
            {isDe
              ? "Direkte Anbindung an die renommierte sächsische Kammloipe"
              : isEn
              ? "Direct Connection to the Renowned German Kammloipe"
              : "Přímé napojení na prestižní německou Kammloipe"}
          </h2>
          <p>
            {isDe
              ? "Ein herausragender Vorteil der Lage von Bublava ist die unmittelbare Nähe zum sächsischen Vogtland. Nur ca. 2 Kilometer vom Ort entfernt befindet sich der direkte Einstieg in die Kammloipe – eine der am besten bewerteten und schneesichersten Langlauf-Magistralen Mitteleuropas."
              : isEn
              ? "A standout advantage of Bublava’s location is its immediate proximity to the Saxon border. Barely 2 kilometres from the village lies direct access to the Kammloipe – rated among the finest and most snow-reliable cross-country arteries in Central Europe."
              : "Obrovskou výhodou polohy Bublavy je těsná blízkost saského pomezí. Pouhé 2 kilometry od obce se nachází přímé napojení na Kammloipe – jednu z nejlépe hodnocených a sněhově nejspolehlivějších běžeckých magistrál ve střední Evropě."}
          </p>
          <ul>
            <li>
              <strong>
                {isDe ? "36 km perfekt präparierte Spuren:" : isEn ? "36 km of immaculate tracks:" : "36 km perfektní stopy:"}
              </strong>{" "}
              {isDe
                ? "Verläuft von Schöneck über Mühlleithen und Klingenthal bis nach Johanngeorgenstadt entlang des Erzgebirgskamms."
                : isEn
                ? "Stretching from Schöneck via Mühlleithen and Klingenthal all the way to Johanngeorgenstadt along the German-Czech border."
                : "Trasa se táhne od Schönecku přes Mühlleithen a Klingenthal až po Johanngeorgenstadt podél česko-německé hranice."}
            </li>
            <li>
              <strong>
                {isDe ? "Höchste Präparationsqualität für Klassisch & Skating:" : isEn ? "World-class grooming for classic and skate:" : "Špičková úprava pro klasiku i skate:"}
              </strong>{" "}
              {isDe
                ? "Wird mehrmals wöchentlich mit sächsischer Präzision in doppelter klassischer Spur und breitem Skating-Korridor gewalzt."
                : isEn
                ? "Maintained multiple times weekly with German precision across double classic tracks and wide skating lanes."
                : "Německý spolek udržuje stopu s mimořádnou precizností několikrát týdně v plné šíři."}
            </li>
            <li>
              <strong>
                {isDe ? "Hohe Schneesicherheit:" : isEn ? "Snow dependability:" : "Sněhová jistota:"}
              </strong>{" "}
              {isDe
                ? "Höhenlage zwischen 800 und 950 m ü. M. in dichten Bergfichtenwäldern, wo der Schnee oft bis in den April hinein hält."
                : isEn
                ? "Winding between 800 and 950 m above sea level through dense spruce forests where snow persists well into April."
                : "Trasa probíhá ve výškách 800 až 950 m n. m. v hlubokých horských smrčinách, kde se sníh drží často až do dubna."}
            </li>
            <li>
              <strong>
                {isDe ? "Berghütten & Einkehr:" : isEn ? "Rustic huts and hospitality:" : "Horské boudy a občerstvení:"}
              </strong>{" "}
              {isDe
                ? "Entlang der Strecke laden gemütliche Gasthöfe und tschechische Berggasthäuser zu heißer Suppe, Tee und regionalen Köstlichkeiten ein."
                : isEn
                ? "Along the route you will discover warm German gasthofs and Czech alpine taverns offering hot soups, teas, and local refreshments."
                : "Po trase narazíte na tradiční německé gasthofy a české horské hospůdky, kde se zahřejete teplou polévkou či čajem."}
            </li>
          </ul>

          <h3>
            {isDe
              ? "Empfohlene Langlauf-Runden ab Bublava"
              : isEn
              ? "Recommended Nordic Circuits from Bublava"
              : "Doporučené běžkařské okruhy z Bublavy"}
          </h3>
          <ul>
            <li>
              <strong>
                {isDe ? "Runde Bublava – Rolava – Přebuz (ca. 22 km):" : isEn ? "Bublava – Rolava – Přebuz Circuit (approx. 22 km):" : "Okruh Bublava – Rolava – Přebuz (cca 22 km):"}
              </strong>{" "}
              {isDe
                ? "Faszinierende Tour durch die unberührte Natur des ehemaligen Zinnbergbaureviers und der Hochmoore mit Einkehr in Přebuz."
                : isEn
                ? "A breathtaking journey through the wild peat reserves and historic tin mining wilderness with a rewarding tavern stop in Přebuz."
                : "Fascinující túra divokou přírodou bývalého cínového revíru a rašelinišť s občerstvením v Přebuzi."}
            </li>
            <li>
              <strong>
                {isDe ? "Ausflug auf die Kammloipe Richtung Mühlleithen (12–18 km):" : isEn ? "Kammloipe Tour toward Mühlleithen (12–18 km):" : "Výlet na Kammloipe směr Mühlleithen (12–18 km):"}
              </strong>{" "}
              {isDe
                ? "Schneller Einstieg auf den Kamm mit herrlichen Panoramablicken und erstklassiger Pistenpflege."
                : isEn
                ? "Fast access onto the Saxon crest with magnificent alpine panoramas and first-class trail conditions."
                : "Rychlý nástup na německý hřeben s famózními výhledy a prvotřídním servisem."}
            </li>
            <li>
              <strong>
                {isDe ? "Abendrunde um den Bleiberg (6 km):" : isEn ? "Sunset Bleiberg Loop (6 km):" : "Podvečerní kondiční okruh okolo Bleibergu (6 km):"}
              </strong>{" "}
              {isDe
                ? "Kürzere Runde direkt oberhalb unserer Residenz, ideal für einen Ausklang vor dem Sonnenuntergang."
                : isEn
                ? "A crisp, shorter circuit directly above our residence, perfect for an invigorating afternoon skate before dusk."
                : "Kratší pohodová trasa přímo nad naší rezidencí vhodná před západem slunce."}
            </li>
          </ul>
        </section>

        {/* Section 3: Insider Box */}
        <div className="residence-tip-box">
          <div className="residence-tip-box-header">
            <i className="fa-solid fa-person-skiing"></i>
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
                In unserer Residenz verstehen wir die Bedürfnisse von Langläufern und Radfahrern. Im Erdgeschoss steht Ihnen ein{" "}
                <strong>abschließbarer Sportraum mit Skischuhtrocknern</strong> und Platz für Wachs- und Pflegearbeiten zur Verfügung. In den Sommermonaten bieten wir <strong>sichere Fahrradabstellplätze für Mountainbikes und E-Bikes</strong> mit Akku-Lademöglichkeiten und einem Waschplatz zur Reinigung. Unser Team empfiehlt Ihnen gerne die aktuellen Loipenverhältnisse und schönsten Strecken.
              </>
            ) : isEn ? (
              <>
                At Apartments Panorama, we anticipate every need of Nordic skiers and cyclists. On the ground floor, each suite includes a{" "}
                <strong>dedicated lockable sports locker</strong> with space for ski prep and waxing. During warmer months, take advantage of our <strong>secure mountain and e-bike storage</strong> with high-output battery charging and an outdoor washing area to rinse road dust. Our staff is always delighted to recommend the best circuits for your current fitness level.
              </>
            ) : (
              <>
                V naší rezidenci chápeme potřeby běžkařů i cyklistů. V přízemí máte vyhrazenou{" "}
                <strong>uzamykatelnou úschovnu sportovního vybavení</strong> s prostorem pro servis a voskování.
                V letních měsících je k dispozici <strong>bezpečný stojan pro horská kola a elektrokola</strong> s možností
                dobíjení akumulátorů a venkovní mycí koutek na omytí bláta z cest.
                Personál vám rád doporučí aktuální stav stop a nejhezčí trasy podle vaší kondice.
              </>
            )}
          </p>
        </div>

        {/* Section 4: Letní cyklistika */}
        <section className="article-section">
          <h2>
            {isDe
              ? "Sommer- & Herbst-Radsport: Mountainbike, Gravel & E-Bike"
              : isEn
              ? "Summer & Autumn Cycling: Mountain, Gravel & E-Bikes"
              : "Letní a podzimní cyklistika: Horská, gravel i elektrokola"}
          </h2>
          <p>
            {isDe
              ? "Sobald im Frühjahr der Schnee schmilzt, wandelt sich die Magistrale in ein weitläufiges Radparadies. Die Haupt-Radroute Nr. 23 (Erzgebirgs-Magistrale) bietet glatte Waldasphaltwege, feste Schotterstraßen und abwechslungsreiche Pfade ganz ohne störenden Autoverkehr."
              : isEn
              ? "As spring snow recedes, the ridge converts into an endless cycling playground. Arterial Cycle Route 23 (Ore Mountain Trail) offers smooth asphalt forest pathways, packed gravel forestry roads, and gentle singletracks entirely free of motor traffic."
              : "Jakmile na jaře roztaje sníh, mění se magistrála v cyklistický ráj. Páteřní cyklotrasa č. 23 (Krušnohorská magistrála) nabízí hladké lesní asfaltky, zpevněné šotolinové cesty i lesní traily bez automobilového provozu."}
          </p>
          <ul>
            <li>
              <strong>
                {isDe ? "Angenehmes Profil für E-Bikes und Familien:" : isEn ? "Pleasant gradient for e-bikes & families:" : "Pohodový profil pro e-biky a rodiny:"}
              </strong>{" "}
              {isDe
                ? "Dank der Trassenführung auf den Hochebenen müssen Sie keine steilen Höhenmeter überwinden – die Kilometer verstreichen sanft zwischen Heidekraut, Bergwiesen und Fichtenwäldern."
                : isEn
                ? "Winding atop the high plateau avoids drastic climbs – miles glide effortlessly across blooming heather moorlands, pastures, and mountain forests."
                : "Díky vedení po náhorních plošinách nemusíte překonávat drastická převýšení – kilometry ubíhají v mírně zvlněném terénu mezi loukami, vřesovišti a horskými lesy."}
            </li>
            <li>
              <strong>
                {isDe ? "Gravel- & Trekkingtouren:" : isEn ? "Gravel & trekking routes:" : "Gravel a trekkingové trasy:"}
              </strong>{" "}
              {isDe
                ? "Ein dichtes Netz markierter Forstwege erlaubt zahllose Tourenkombinationen sowohl auf böhmischer als auch auf sächsischer Seite."
                : isEn
                ? "An extensive web of marked forestry roads allows endless loop options spanning both Czech and Saxon borderlands."
                : "Síť značených lesních cest umožňuje nekonečné kombinace okruhů jak na české, tak na saské straně pomezí."}
            </li>
            <li>
              <strong>
                {isDe ? "Fernwanderweg Kammweg (Via Czechia):" : isEn ? "Via Czechia / North Trail:" : "Dálková pěší trasa Hřebenovka (Via Czechia):"}
              </strong>{" "}
              {isDe
                ? "Für Wanderfreunde ist Bublava ein wichtiger Etappenort des beliebten böhmischen Fernwanderwegs entlang der Grenzgebirgskämme."
                : isEn
                ? "For hiking enthusiasts, Bublava is a key waypoint on the iconic national long-distance ridge trek linking Bohemia’s greatest border peaks."
                : "Pro milovníky pěší turistiky prochází Bublavou prestižní Severní stezka, spojující nejkrásnější vrcholy českých pohraničních hor."}
            </li>
          </ul>

          <div className="article-visual-banner mt-4">
            <img
              src="/assets/images/web/krusnohorska-magistrala-card.jpg"
              alt={isDe ? "Krušnohorská magistrála Bublava" : isEn ? "Ore Mountain Trail at Bublava" : "Krušnohorská magistrála u Bublavy"}
            />
            <div className="article-visual-caption">
              {isDe
                ? "Krušnohorská magistrála bei Bublava – ein ganzjähriges Naturerlebnis für Wanderer, Radfahrer und Langläufer"
                : isEn
                ? "Ore Mountain Trail at Bublava – a year-round haven for hikers, cyclists, and outdoor enthusiasts"
                : "Krušnohorská magistrála na Bublavě a okolních hřebenech – celoroční ráj pro pěší, cyklisty i běžkaře"}
            </div>
          </div>
        </section>

        {/* Practical info grid */}
        <section className="article-section">
          <h2>
            {isDe ? "Praktische Informationen zur Tour" : isEn ? "Practical Trail Information" : "Praktické informace pro výpravy na magistrálu"}
          </h2>
          <div className="practical-info-grid">
            <div className="practical-card">
              <div className="practical-card-title">
                <i className="fa-solid fa-location-arrow"></i>{" "}
                {isDe ? "Loipeneinstieg" : isEn ? "Trailhead" : "Nástupní místo"}
              </div>
              <p className="practical-card-desc">
                {isDe
                  ? "Der Loipeneinstieg beginnt ca. 300 m von den Apartmány Panorama oder an der Bergstation der Sesselbahn Bleiberg."
                  : isEn
                  ? "Track access begins approx. 300 m from Apartments Panorama or at the top station of Bleiberg chairlift."
                  : "Nástupní stopa začíná cca 300 m od Apartmánů Panorama nebo na horní stanici lanovky Bleiberg."}
              </p>
            </div>

            <div className="practical-card">
              <div className="practical-card-title">
                <i className="fa-solid fa-cloud-sun"></i>{" "}
                {isDe ? "Beste Reisezeit" : isEn ? "Best Season" : "Nejlepší sezóna"}
              </div>
              <p className="practical-card-desc">
                {isDe
                  ? "Langlauf: Dezember bis März. Radfahren und Wandern: Mai bis Oktober."
                  : isEn
                  ? "Cross-country skiing: December – March. Cycling and hiking: May – October."
                  : "Běžky: prosinec – březen. Cyklistika a pěší turistika: květen – říjen."}
              </p>
            </div>

            <div className="practical-card">
              <div className="practical-card-title">
                <i className="fa-solid fa-map-location-dot"></i>{" "}
                {isDe ? "Pflege & Markierung" : isEn ? "Grooming & Signage" : "Značení a úprava"}
              </div>
              <p className="practical-card-desc">
                {isDe
                  ? "Regelmäßige maschinelle Pflege (Weiße Spur Erzgebirge + Kammloipe). Hervorragend mit Tafeln markiert."
                  : isEn
                  ? "Regular snowcat grooming (White Track Ore Mountains + Kammloipe). Clearly marked with international trailblazes."
                  : "Pravidelná strojová úprava (Bílá stopa Krušné hory + Kammloipe). Značeno standardními tabulkami KČT."}
              </p>
            </div>

            <div className="practical-card">
              <div className="practical-card-title">
                <i className="fa-solid fa-shield-halved"></i>{" "}
                {isDe ? "Ausrüstung & Sicherheit" : isEn ? "Gear & Safety" : "Vybavení a bezpečí"}
              </div>
              <p className="practical-card-desc">
                {isDe
                  ? "Wir empfehlen ein geladenes Smartphone, winddichte Kleidung und ausreichend Flüssigkeit – auf dem Kamm weht oft ein frischer Wind."
                  : isEn
                  ? "We recommend a charged phone with emergency contact, windproof layers, and extra hydration for ridge breezes."
                  : "Doporučujeme nabitý telefon s aplikací Záchranka a teplou vrstvu navíc – na hřebeni bývá větrno."}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <div className="article-cta-box">
          <span className="subpage-badge mb-3">
            {isDe ? "Aktivurlaub im Erzgebirge" : isEn ? "Active Holiday in the Ore Mountains" : "Aktivní dovolená v Krušných horách"}
          </span>
          <h3>
            {isDe
              ? "Buchen Sie die perfekte Basis für Ihre Bergtouren"
              : isEn
              ? "Reserve the Perfect Basecamp for Your Mountain Adventures"
              : "Rezervujte si zázemí pro vaše sportovní výpravy"}
          </h3>
          <p>
            {isDe
              ? "Nach einer ganztägigen Kammtour entspannen Sie unter der Regendusche, genießen die Fußbodenheizung, bequeme Betten und ein Glas Wein auf Ihrem privaten Aussichtsbalkon in den Apartmány Panorama."
              : isEn
              ? "After a full day on the mountain ridge, relax with underfloor heating, a warm rainfall shower, plush bedding, and a glass of wine on your private scenic balcony."
              : "Po celodenní hřebenové túře oceníte teplou sprchu, podlahové vytápění, pohodlnou postel a sklenku dobrého vína na privátním balkoně v Apartmánech Panorama."}
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
                      ? "18 Minuten Fußweg zum Aussichtsturm, geheimnisvolles Bergwerk Rolava und Vogtland Arena Klingenthal."
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
