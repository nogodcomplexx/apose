"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function VyletyContent() {
  const { isEn, isDe } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section
        className="subpage-hero"
        style={{ backgroundImage: `url('/assets/images/web/location-village.jpg')` }}
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
              {isDe ? "Ausflugsziele in der Region" : isEn ? "Day Trips & Sights" : "Výlety v okolí"}
            </span>
          </div>

          <div className="subpage-badge">
            <i className="fa-solid fa-compass text-warning"></i>
            <span>
              {isDe
                ? "Natur, Aussichtstürme & Bergbaugeschichte in 15 Minuten"
                : isEn
                ? "Nature, Lookouts & Historic Heritage Within 15 Minutes"
                : "Příroda, rozhledny & tajemná historie v okruhu 15 minut"}
            </span>
          </div>

          <h1 className="subpage-hero-title">
            {isDe
              ? "Aussichtsturm Bleiberg & Unvergessliche Ausflugsziele im Erzgebirge"
              : isEn
              ? "Bleiberg Lookout Tower & Unforgettable Regional Day Trips"
              : "Rozhledna Bleiberg & Nezapomenutelné výlety v okolí"}
          </h1>

          <p className="subpage-hero-lead">
            {isDe
              ? "Das Erzgebirge rund um Bublava birgt eine faszinierende Mischung aus unberührter Natur, lebendiger Geschichte und modernen Highlights. Steigen Sie zum historischen Holzturm auf den Bleiberg, erkunden Sie das geheimnisvolle verlassene Zinnbergwerk Rolava oder besuchen Sie die futuristische Weltcup-Skisprungschanze Vogtland Arena im benachbarten Klingenthal."
              : isEn
              ? "The Ore Mountains surrounding Bublava conceal an extraordinary blend of untouched nature, captivating history, and world-class attractions. Climb to the historic wooden tower atop Bleiberg, explore the mysterious ruins of Rolava tin mine, or tour the futuristic World Cup ski-jumping arena in neighboring Klingenthal."
              : "Krušné hory v okolí Bublavy skrývají neuvěřitelnou směs divoké přírody, fascinující historie a moderních světových unikátů. Vydejte se k dřevěné rozhledně na vrcholu Bleibergu, prozkoumejte tajuplný opuštěný cínový důl Rolava nebo navštivte futuristický skokanský areál světového poháru v sousedním Klingenthalu."}
          </p>

          {/* Quick Stats Grid */}
          <div className="subpage-stats-grid">
            <div className="subpage-stat-card">
              <div className="subpage-stat-icon">
                <i className="fa-solid fa-eye"></i>
              </div>
              <div>
                <div className="subpage-stat-val">
                  {isDe ? "18 Min. Fußweg" : isEn ? "18 min walk" : "18 min pěšky"}
                </div>
                <div className="subpage-stat-lbl">
                  {isDe ? "Zum Aussichtsturm Bleiberg" : isEn ? "To Bleiberg lookout tower" : "K rozhledně na Bleibergu"}
                </div>
              </div>
            </div>

            <div className="subpage-stat-card">
              <div className="subpage-stat-icon">
                <i className="fa-solid fa-landmark"></i>
              </div>
              <div>
                <div className="subpage-stat-val">
                  {isDe ? "Bergwerk Rolava" : isEn ? "Rolava Mine" : "Důl Rolava"}
                </div>
                <div className="subpage-stat-lbl">
                  {isDe ? "Mystische Ruinen im Wald" : isEn ? "Atmospheric wartime ruins" : "Tajemná historie v lesích"}
                </div>
              </div>
            </div>

            <div className="subpage-stat-card">
              <div className="subpage-stat-icon">
                <i className="fa-solid fa-building-columns"></i>
              </div>
              <div>
                <div className="subpage-stat-val">
                  {isDe ? "5 km Klingenthal" : isEn ? "5 km Klingenthal" : "5 km Klingenthal"}
                </div>
                <div className="subpage-stat-lbl">
                  {isDe ? "Vogtland Arena Schanze" : isEn ? "Vogtland Ski-Jumping Arena" : "Saská Vogtland Arena"}
                </div>
              </div>
            </div>

            <div className="subpage-stat-card">
              <div className="subpage-stat-icon">
                <i className="fa-solid fa-tree"></i>
              </div>
              <div>
                <div className="subpage-stat-val">
                  {isDe ? "Moor Přebuz" : isEn ? "Přebuz Reserve" : "NPR Přebuz"}
                </div>
                <div className="subpage-stat-lbl">
                  {isDe ? "Nordische Hochmoortundra" : isEn ? "Sub-arctic peat bog tundra" : "Severská rašeliništní tundra"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Editorial Article */}
      <main className="subpage-article-container">
        {/* Section 1: Rozhledna Bleiberg */}
        <section className="article-section">
          <h2>
            {isDe
              ? "1. Aussichtsturm Bleiberg (Olověný vrch) – 18 Minuten zu Fuß von der Residenz"
              : isEn
              ? "1. Bleiberg Lookout Tower (Olověný vrch) – 18 Minutes on Foot from Residence"
              : "1. Rozhledna Bleiberg (Olověný vrch) – 18 minut pěšky od rezidence"}
          </h2>
          <p>
            {isDe
              ? "Direkt oberhalb von Bublava erhebt sich der Gipfel des Bleibergs (Olověný vrch, 802 m ü. M.). Auf seiner Kuppe steht ein malerischer hölzerner Aussichtsturm mit Bergbaude aus dem Jahr 1933, entworfen vom Architekten Karl Müller. Der 16 Meter hohe Turm bietet einen grandiosen 360°-Rundumblick auf die böhmische und sächsische Seite des Erzgebirges, den Kaiserwald (Slavkovský les) und das Tal von Klingenthal."
              : isEn
              ? "Directly above Bublava rises the crest of Olověný vrch (Bleiberg, 802 m a.s.l.). At its summit stands a charming wooden lookout tower and mountain lodge built in 1933 designed by architect Karl Müller. The 16-metre timber tower provides a panoramic 360° vantage point over both the Czech and German sides of the Ore Mountains, the Slavkov Forest, and the Klingenthal valley."
              : "Přímo nad obcí Bublava se tyčí vrchol Olověný vrch (německy Bleiberg, 802 m n. m.). Na jeho temeni stojí půvabná dřevěná rozhledna s horskou chatou postavená v roce 1933 podle návrhu architekta Karla Müllera. Šestnáctimetrová věž nabízí velkolepý kruhový výhled na českou i německou stranu Krušných hor, vrcholy Slavkovského lesa i malebné údolí Klingenthalu."}
          </p>
          <p>
            {isDe
              ? "Von den Apartmány Panorama erreichen Sie den Aussichtsturm über einen bequemen Waldweg in nur 18 Minuten (ca. 1,2 km). Ein perfekter Morgenspaziergang mit einer Thermoskanne Kaffee oder eine Abendwanderung, um den Sonnenuntergang über den Berggipfeln zu bewundern."
              : isEn
              ? "From Apartments Panorama, a gentle forest trail brings you to the tower in just 18 minutes (approx. 1.2 km). It makes for the ultimate morning ritual with a thermos of coffee, or a serene sunset hike to watch the golden light wash across the alpine horizon."
              : "K rozhledně se z Apartmánů Panorama dostanete pohodlnou procházkou po značené stezce lesem za pouhých 18 minut (cca 1,2 km). Je to ideální ranní rituál s kávou v termosce nebo podvečerní výšlap za sledováním západu slunce nad horizontem."}
          </p>

          <div className="article-visual-banner">
            <img
              src="/assets/images/web/location-village.jpg"
              alt={isDe ? "Ausblick auf Bublava vom Bleiberg" : isEn ? "Bublava valley view from Bleiberg" : "Malebné údolí Bublavy a pohled z Olověného vrchu"}
            />
            <div className="article-visual-caption">
              {isDe
                ? "Blick auf das Tal von Bublava, eingebettet in die dichten Wälder des Erzgebirges"
                : isEn
                ? "View over the village of Bublava nestled beneath forested Ore Mountain ridges"
                : "Pohled na obec Bublavu obklopenou zalesněnými hřebeny Krušných hor"}
            </div>
          </div>
        </section>

        {/* Section 2: Přebuz a Důl Rolava */}
        <section className="article-section">
          <h2>
            {isDe
              ? "2. Přebuz & Das geheimnisvolle Zinnbergwerk Rolava (Sauersack) – 15 km"
              : isEn
              ? "2. Přebuz & The Enigmatic Rolava Tin Mine (Sauersack) – 15 km"
              : "2. Přebuz a tajuplný bývalý cínový důl Rolava (Sauersack) – 15 km"}
          </h2>
          <p>
            {isDe
              ? "Das historische Städtchen Přebuz (die kleinste Stadt Tschechiens mit unter 80 Einwohnern) liegt auf fast 900 m Höhe, umgeben von weitläufigen Naturschutzgebieten. Die hiesigen Hochmoore und Heideflächen erinnern an die wilde Weite skandinavischer Tundren, in denen seltene fleischfressende Sonnentau-Pflanzen und Moorkiefern gedeihen."
              : isEn
              ? "The historic settlement of Přebuz (the smallest town in the Czech Republic with fewer than 80 residents) is situated at an elevation close to 900 m, enveloped by expansive national nature reserves. Local peat bogs and heather moorlands evoke the ambiance of raw Scandinavian tundra, sheltering rare carnivorous sundew plants and dwarf bog pine."
              : "Městečko Přebuz (nejmenší město v České republice s necelými 80 obyvateli) leží v nadmořské výšce téměř 900 m a je obklopeno rozsáhlými národními přírodními rezervacemi. Zdejší rašeliniště a horská vřesoviště evokují atmosféru divoké skandinávské tundry, kde se daří vzácné masožravé rosnatce okrouhlolisté a borovici blatce."}
          </p>
          <p>
            {isDe
              ? "Verborgen in den dichten Wäldern bei Rolava befindet sich eines der faszinierendsten Industriedenkmäler Mitteleuropas – das ehemalige Zinnbergwerk und die Aufbereitungsanlage Sauersack. Während des Zweiten Weltkriegs unter Zwangsarbeit errichtet, bilden die moosbewachsenen Betonskelette und kreisrunden Absetzbecken heute eine mystische, fotogene Kulisse für Fotografen und Geschichtsinteressierte."
              : isEn
              ? "Tucked deep into the woodlands near Rolava lies one of Central Europe's most enigmatic industrial monuments – the wartime tin mine and ore processing complex known as Sauersack. Built during World War II with prisoner labor from across Europe, its moss-draped concrete monoliths and circular thickening basins form an eerie, photogenic backdrop cherished by photographers and history buffs alike."
              : "V hlubokých lesích u osady Rolava se ukrývá jeden z nejpůsobivějších a nejtajemnějších industriálních cílů v ČR – bývalý cínový důl a úpravna rudy Sauersack. Komplex byl vybudován za 2. světové války a pracovali v něm váleční zajatci z celé Evropy. Dnes mechem obrostlé betonové skelety gigantických zahušťovacích nádrží a budov vytvářejí mystickou kulisu, která láká fotografy i milovníky novodobé historie."}
          </p>
        </section>

        {/* Section 3: Insider Box */}
        <div className="residence-tip-box">
          <div className="residence-tip-box-header">
            <i className="fa-solid fa-map-pin"></i>
            <h4>
              {isDe
                ? "Insider-Tipp für Gäste der Apartmány Panorama"
                : isEn
                ? "Insider Tip for Guests of Apartments Panorama"
                : "Tip pro hosty rezidence Apartmány Panorama"}
            </h4>
          </div>
          <p>
            {isDe ? (
              <>
                Wenn Sie einen Ausflug nach Rolava und Přebuz planen, brechen Sie am besten frühmorgens auf, wenn leichter Morgennebel über den Hochmooren liegt – das Licht und die Stille sind in diesen Momenten überwältigend. Zurück in der Residenz versorgt Sie unser Team gerne mit detaillierten Wanderkarten und empfiehlt Ihnen verborgene Aussichtspunkte abseits der Pfade.
              </>
            ) : isEn ? (
              <>
                If heading out toward Rolava and Přebuz, set out in the early morning when mist drifts over the moors – the lighting and silence are utterly breathtaking. When you return to the residence, our team will gladly provide detailed regional trail maps and highlight hidden panoramic viewpoints off the beaten path.
              </>
            ) : (
              <>
                Pokud se chystáte na výlet k dolu Rolava a na Přebuz, vyrazte brzy ráno, kdy se nad rašeliništi
                drží ranní mlha – světlo a atmosféra jsou v tomto čase naprosto dechberoucí.
                Po návratu do rezidence vám na recepci rádi zapůjčíme podrobné tištěné turistické mapy
                a doporučíme další méně známá vyhlídková místa v okolí.
              </>
            )}
          </p>
        </div>

        {/* Section 4: Vogtland Arena & německé pomezí */}
        <section className="article-section">
          <h2>
            {isDe
              ? "3. Vogtland Arena Klingenthal (5 km) – Skispringen auf Weltcup-Niveau"
              : isEn
              ? "3. Vogtland Arena Klingenthal (5 km) – World Cup Ski Jumping"
              : "3. Vogtland Arena Klingenthal (5 km) – Světový pohár ve skocích na lyžích"}
          </h2>
          <p>
            {isDe
              ? "Gleich hinter dem Grenzübergang im sächsischen Klingenthal steht eines der modernsten Wintersportstadien der Welt – die Vogtland Arena. Das Wahrzeichen der Großschanze (HS 140) ist die futuristische, aerodynamische Kapsel auf dem Anlaufturm, die an eine Raumstation erinnert."
              : isEn
              ? "Just across the German border in neighboring Klingenthal stands one of the world's most advanced winter sports complexes – the Vogtland Arena. The defining feature of its large ski jump (HS 140) is an aerodynamic capsule lookout resembling a futuristic space station."
              : "Hned za hraničním přechodem v sousedním německém Klingenthalu se nachází jedna z nejmodernějších sportovních aren světa – Vogtland Arena. Dominantou velkého skokanského můstku (HS 140) je futuristická vyhlídková kapsle připomínající kosmickou stanici."}
          </p>
          <ul>
            <li>
              <strong>
                {isDe ? "Erlebnisbahn WieLi:" : isEn ? "WieLi Cable Rail:" : "Kabinková lanovka WieLi:"}
              </strong>{" "}
              {isDe
                ? "Eine moderne schienengeführte Kabinenbahn bringt Besucher bequem hinauf zum Schanzenturm."
                : isEn
                ? "A unique automated passenger cabin whisks visitors effortlessly up to the top of the inrun tower."
                : "Na vrchol nájezdové věže vás vyveze unikátní automatická dráhová kabinka bez řidiče."}
            </li>
            <li>
              <strong>
                {isDe ? "Aussichtsplattform auf dem Schanzenturm:" : isEn ? "Inrun Observation Viewpoint:" : "Pohled ze skokanské věže:"}
              </strong>{" "}
              {isDe
                ? "Auf der Aussichtsplattform erleben Sie hautnah denselben atemberaubenden Tiefblick wie die Skispringer vor dem Absprung."
                : isEn
                ? "Standing on the observation platform lets you experience the thrilling vertigo perspective seen by World Cup jumpers before takeoff."
                : "Z vyhlídkové plošiny ve věži zažijete stejný pohled do hlubiny, jaký mají elitní světoví skokani před odrazem."}
            </li>
            <li>
              <strong>
                {isDe ? "Events & FIS Weltcup:" : isEn ? "Events & World Cup:" : "Kulturní akce a Světový pohár:"}
              </strong>{" "}
              {isDe
                ? "Im Winter finden hier FIS-Weltcup-Wettbewerbe im Skispringen und in der Nordischen Kombination statt, im Sommer Open-Air-Konzerte."
                : isEn
                ? "Winter hosts thrilling FIS World Cup ski jumping and Nordic combined competitions, while summer brings open-air concerts and festivals."
                : "V zimě se zde konají závody SP ve skocích i severské kombinaci, v létě koncerty a festivaly pod širým nebem."}
            </li>
          </ul>

          <h3>
            {isDe
              ? "4. Deutsche Raumfahrtausstellung Morgenröthe-Rautenkranz (11 km)"
              : isEn
              ? "4. German Space Flight Exhibition Morgenröthe-Rautenkranz (11 km)"
              : "4. Německé muzeum kosmonautiky Morgenröthe-Rautenkranz (11 km)"}
          </h3>
          <p>
            {isDe
              ? "Im nahen Morgenröthe-Rautenkranz wurde Sigmund Jähn geboren, der 1978 als erster Deutscher an Bord der Raumstation Saljut 6 ins All flog. Heute begeistert die Deutsche Raumfahrtausstellung mit einem begehbaren Mir-Trainingsmodul, Original-Raumanzügen, Satelliten und Modellen. Ein hervorragendes Ausflugsziel für Familien bei jedem Wetter."
              : isEn
              ? "The nearby village of Morgenröthe-Rautenkranz is the birthplace of Sigmund Jähn, Germany's first cosmonaut in space aboard Salyut 6 in 1978. Today, the Deutsche Raumfahrtausstellung features a full-scale Mir training module, authentic spacesuits, genuine satellites, and spacecraft replicas. A fantastic visit for families whatever the weather."
              : "V nedaleké vesničce Morgenröthe-Rautenkranz se narodil první německý kosmonaut Sigmund Jähn, který v roce 1978 letěl na stanici Saljut 6. Dnes zde funguje jedinečná expozice Deutsche Raumfahrtausstellung s originálním tréninkovým modulem kosmické stanice Mir, kosmickými skafandry, reálnými satelity i modely raketoplánů. Skvělý cíl pro rodiny s dětmi i za deštivého počasí."}
          </p>

          <h3>
            {isDe
              ? "5. Die Musikstadt Kraslice & der Musikwinkel (5 km)"
              : isEn
              ? "5. The Musical Town of Kraslice (5 km)"
              : "5. Hudební město Kraslice (5 km)"}
          </h3>
          <p>
            {isDe
              ? "Historisches Zentrum des Baus von Blas- und Saiteninstrumenten. Traditionsreiche Marken wie Amati und Strunal stammen von hier und machten das hiesige Handwerk zusammen mit dem benachbarten vogtländischen Musikwinkel (Markneukirchen, Klingenthal) weltberühmt."
              : isEn
              ? "A historic center of master brass and string instrument craft. Legendary instrument makers like Amati and Strunal originated here, carrying the region's artisanal excellence into premier concert halls worldwide."
              : "Historické centrum výroby dechových a strunných nástrojů. Právě odsud pocházejí legendární hudební nástroje značek Amati a Strunal, které po staletí proslavily krušnohorské řemeslo v koncertních sálech po celém světě."}
          </p>
        </section>

                {/* Section: Aktivity a rodinné výlety v blízkém okolí (Doporučuje partnerský Hotel Švejk Bublava) */}
        <section className="article-section">
          <h2>
            {isDe
              ? "Ausgewählte Aktivitäten & Naturerlebnisse in nächster Nähe"
              : isEn
              ? "Curated Outdoor & Family Activities in Close Proximity"
              : "Výběr aktivit a rodinných výletů v bezprostředním okolí"}
          </h2>
          <p>
            {isDe
              ? "Unser Eigentümer betreibt in Bublava auch das beliebte Hotel Švejk. Aus den langjährigen Empfehlungen für unsere Gäste haben wir für Sie die attraktivsten Highlights der unmittelbaren Umgebung zusammengestellt (alle innerhalb von 4 bis 15 km erreichbar):"
              : isEn
              ? "Our owner also operates the nearby Hotel Švejk in Bublava. Drawing from local knowledge, we have selected the most rewarding activities and family excursions located in the immediate vicinity (all within 4 to 15 km):"
              : "Majitel našich apartmánů provozuje v Bublavě také rodinný hotel a restaurant Švejk. Z jeho dlouholetých doporučení pro hosty jsme pro vás vybrali ty nejlepší a nejzajímavější aktivity v těsném okolí (vše v dojezdu od 4 do 15 km):"}
          </p>

          <div className="practical-info-grid mb-4">
            {/* Ferrata & Singltrek Hausberg */}
            <div className="practical-card">
              <div className="practical-card-title">
                <i className="fa-solid fa-mountain-sun text-warning"></i> Ferrata & Singltrek Hausberg (Kraslice, 6 km)
              </div>
              <p className="practical-card-desc">
                {isDe
                  ? "Klettersteig-Areal auf 3 Felsen mit Aussichtsplattform, Seilbrücke und 3 Routen (blau A/B, rot C, schwarz C/D) sowie flowige Singletrail-Strecken für Mountainbikes im Stadtpark von Kraslice."
                  : isEn
                  ? "Cozy via ferrata park across 3 crags featuring a panoramic lookout, suspension cable bridge, and color-coded routes (blue A/B, red C, black C/D), complemented by mountain bike singletrails."
                  : "Oblíbený ferratový areál na třech skalkách Hausbergu s vyhlídkou, visutým lanovým můstkem a trasami obtížnosti od modré (A/B) přes červenou (C) až po černou (C/D), doplněný o flow traily pro horská kola v městských sadech."}
              </p>
            </div>

            {/* Loupežnická stezka */}
            <div className="practical-card">
              <div className="practical-card-title">
                <i className="fa-solid fa-person-hiking text-warning"></i> Loupežnická stezka (Kraslice, 6 km)
              </div>
              <p className="practical-card-desc">
                {isDe
                  ? "Neuer familienfreundlicher Lehrpfad unter der Burgruine Hausberg im Stadtpark, verbunden mit Legenden über hiesige Raubritter, die einst Handelsreisende überfielen. Perfekt für einen Ausflug mit Kindern."
                  : isEn
                  ? "Charming family-friendly nature trail winding through city park orchards beneath the Hausberg castle ruins, telling tales of medieval highwaymen. Ideal for families with children."
                  : "Zábavná naučná stezka v městských sadech pod zříceninou hradu Hausberg spojená s pověstí o místních loupežnících, kteří ve zdejších hvozdech přepadávali kupce. Skvělý výlet pro rodiny s dětmi."}
              </p>
            </div>

            {/* Aqua Park Schöneck */}
            <div className="practical-card">
              <div className="practical-card-title">
                <i className="fa-solid fa-water-ladder text-warning"></i> Aqua Park Schöneck – IFA Ferienpark (15 km)
              </div>
              <p className="practical-card-desc">
                {isDe
                  ? "Großes Erlebnisbad gleich hinter der sächsischen Grenze: tropisches Wellenbad, Rutschen, Whirlpools und Saunadorf. Die perfekte Schlechtwetter-Alternative oder Erholung nach dem Skifahren."
                  : isEn
                  ? "Premier indoor water world just across the German border: tropical wave pool, waterslides, whirlpools, and an authentic sauna village. Superb relaxation after outdoor sports."
                  : "Moderní krytý aquapark těsně za saskou hranicí s tropickým bazénem s vlnobitím, tobogány, vířivkami a saunovým světem. Ideální cíl při deštivém počasí i pro celoroční odpočinek po lyžování."}
              </p>
            </div>

            {/* Skalní město u Stříbrné */}
            <div className="practical-card">
              <div className="practical-card-title">
                <i className="fa-solid fa-gem text-warning"></i> Skalní město u Stříbrné & Kamenný hřib (5,9 km)
              </div>
              <p className="practical-card-desc">
                {isDe
                  ? "Romantische Felsenstadt im Tal der benachbarten Gemeinde Stříbrná. Granitklettertürme (3 bis 18 m Höhe) und die bizarre Naturformation des Steinpilzes (Kamenný hřib)."
                  : isEn
                  ? "Romantic granite rock city nestled in the adjacent valley of Stříbrná. Features climbing spires rising 3 to 18 metres and the intriguing natural Stone Mushroom rock sculpture."
                  : "Působivé žulové skalní útvary v malebném údolí sousední Stříbrné s lezeckými věžemi o výšce 3 až 18 metrů a chráněnou přírodní památkou Kamenný hřib."}
              </p>
            </div>

            {/* Tierpark Klingenthal */}
            <div className="practical-card">
              <div className="practical-card-title">
                <i className="fa-solid fa-paw text-warning"></i> Tierpark Klingenthal (4 km)
              </div>
              <p className="practical-card-desc">
                {isDe
                  ? "Idyllischer kleiner Waldzoo im sächsischen Nachbarort Klingenthal mit einheimischen und exotischen Tieren – ein entspanntes Erlebnis besonders für die jüngsten Bergurlauber."
                  : isEn
                  ? "A picturesque forest zoological park located in neighboring Klingenthal, Germany, offering a delightful family visit especially appreciated by younger travelers."
                  : "Příjemný lesní zoopark v sousedním německém Klingenthalu nabízející klidnou procházku a kontakt se zvířaty v přírodním prostředí, ideální pro nejmenší návštěvníky."}
              </p>
            </div>

            {/* Pivovar Krušnohor */}
            <div className="practical-card">
              <div className="practical-card-title">
                <i className="fa-solid fa-beer-mug-empty text-warning"></i> Řemeslný pivovar Krušnohor (Kraslice, 5 km)
              </div>
              <p className="practical-card-desc">
                {isDe
                  ? "Traditionsreiche Handwerksbrauerei in Kraslice mit Fokus auf charaktervolle Biere mit feiner Bitterkeit, handwerklich gebraut aus regionalen Zutaten."
                  : isEn
                  ? "Renowned local craft brewery in Kraslice crafting distinctive lagers and specialty ales celebrated for their crisp, memorable bitterness and alpine character."
                  : "Místní řemeslný minipivovar v Kraslicích sázící na poctivou výrobu nefiltrovaných ležáků i speciálů s výraznější hořkostí a osobitou krušnohorskou chutí."}
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Gastronomie */}
        <section className="article-section">
          <h2>
            {isDe
              ? "Empfohlene Berggastronomie in kurzer Reichweite"
              : isEn
              ? "Curated Restaurants & Alpine Dining in Easy Reach"
              : "Ověřené restaurace a horská gastronomie v docházkové vzdálenosti"}
          </h2>
          <div className="practical-info-grid">
            {/* Hotel & Restaurant Švejk Bublava */}
            <div className="practical-card" style={{ border: "1px solid rgba(255, 180, 0, 0.35)", background: "rgba(255, 180, 0, 0.03)" }}>
              <div className="practical-card-title">
                <i className="fa-solid fa-hotel text-warning"></i> Hotel & Restaurant Švejk Bublava (Partnerská restaurace)
              </div>
              <p className="practical-card-desc">
                {isDe
                  ? "Bublava 245 (ca. 900 m von der Residenz). Der Eigentümer der Apartmány Panorama führt auch dieses traditionsreiche Haus mit gemütlicher Gaststube, echter böhmischer Küche (Lendenbraten, Gulasch, Entenbraten), frisch gezapftem Pilsner Bier und großem Kinderspielplatz."
                  : isEn
                  ? "Bublava 245 (approx. 900 m from the residence). Run by the same owner, this beloved mountain tavern serves hearty traditional Czech specialties (beef sirloin, goulash, crispy roast duck), cold draft Pilsner beer, and features an outdoor children's playground."
                  : "Bublava 245 (cca 900 m od rezidence). Partnerská restaurace stejného majitele v Bublavě. Stylové prostředí, poctivá česká kuchyně (svíčková na smetaně, hovězí guláš, křupavá pečená kachna), čepovaná plzeň a velké venkovní dětské hřiště pro celou rodinu."}
              </p>
            </div>

            <div className="practical-card">
              <div className="practical-card-title">
                <i className="fa-solid fa-utensils"></i> Restaurant U Pražáka
              </div>
              <p className="practical-card-desc">
                {isDe
                  ? "Ca. 600 m von der Residenz. Deftige böhmische Küche, Wildgerichte, kühles Fassbier und herzliche Gastfreundschaft."
                  : isEn
                  ? "Approx. 600 m from the residence. Hearty Bohemian cuisine, game specialties, cold draft beer, and genuine family hospitality."
                  : "Cca 600 m od rezidence. Poctivá česká kuchyně, zvěřinové speciality, čepované pivo a rodinná pohostinnost."}
              </p>
            </div>

            <div className="practical-card">
              <div className="practical-card-title">
                <i className="fa-solid fa-beer-mug-empty"></i> Hostinec U Vichřice
              </div>
              <p className="practical-card-desc">
                {isDe
                  ? "Traditioneller Erzgebirgsgasthof (ca. 700 m) mit ungezwungener Atmosphäre, beliebt bei Einheimischen und Wanderern."
                  : isEn
                  ? "Traditional Ore Mountain tavern (approx. 700 m) with friendly, rustic ambiance popular with locals and hikers."
                  : "Tradiční krušnohorský hostinec (cca 700 m) s neformální atmosférou oblíbený mezi místními i turisty."}
              </p>
            </div>

            <div className="practical-card">
              <div className="practical-card-title">
                <i className="fa-solid fa-plate-wheat"></i> Berggasthaus Aschbergschänke
              </div>
              <p className="practical-card-desc">
                {isDe
                  ? "1,5 km entfernt auf dem Gipfel des Aschbergs (917 m) direkt an der deutschen Grenze. Sächsische Spezialitäten und Aussichtsterrasse."
                  : isEn
                  ? "1.5 km away atop Aschberg peak (917 m) on the German frontier. Classic Saxon dishes and a panoramic terrace."
                  : "1,5 km na německé hranici na vrcholu Aschbergu (917 m). Tradiční saské speciality a panoramatická terasa."}
              </p>
            </div>

            <div className="practical-card">
              <div className="practical-card-title">
                <i className="fa-solid fa-martini-glass"></i>{" "}
                {isDe ? "Residenz-Lobby-Bar" : isEn ? "Residence Lobby Bar" : "Lobby Bar v rezidenci"}
              </div>
              <p className="practical-card-desc">
                {isDe
                  ? "Direkt im Erdgeschoss der Apartmány Panorama. Barista-Kaffee, mährische Spitzenweine und frisch gezapftes Bier nach Ihren Ausflügen."
                  : isEn
                  ? "Right on the ground floor of Apartments Panorama. Artisan coffee, boutique Moravian wines, and draft beer after your excursions."
                  : "Přímo v 1. NP Apartmánů Panorama. Výběrová káva, prémiová moravská vína a relax u točeného piva a kávy po túře."}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <div className="article-cta-box">
          <span className="subpage-badge mb-3">
            {isDe ? "Entdecken Sie das westliche Erzgebirge" : isEn ? "Discover the Western Ore Mountains" : "Objevte krásy západního Krušnohoří"}
          </span>
          <h3>
            {isDe
              ? "Planen Sie einen Urlaub voller unvergesslicher Erlebnisse"
              : isEn
              ? "Plan an Unforgettable Alpine Getaway"
              : "Naplánujte si pobyt plný nezapomenutelných zážitků"}
          </h3>
          <p>
            {isDe
              ? "Wählen Sie den exklusiven Komfort der Apartmány Panorama. Nach einem Tag voller Entdeckungen empfängt Sie wohlige Wärme, vollkommene Ruhe und modernes alpines Design."
              : isEn
              ? "Choose comfortable living at Apartments Panorama. After days spent exploring lookout towers, pristine moors, and heritage trails, retreat to supreme comfort and acoustic tranquility."
              : "Zvolte si komfortní zázemí v Apartmánech Panorama. Po celodenním objevování rozhleden, rašelinišť a historických památek vás přivítá útulné ticho a prémiový horský design."}
          </p>
          <div className="cta-buttons">
            <Link href="/rezervace" className="btn-cta-primary">
              <span>{isDe ? "Aufenthalt online buchen" : isEn ? "Book Your Stay Online" : "Zarezervovat pobyt online"}</span>
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
                      ? "6 Pisten, 4er-Sesselbahn, Flutlicht-Nachtskilauf, Skischule und Skiverleih."
                      : isEn
                      ? "6 slopes, 4-seater chairlift, night carving, ski school, and equipment rental."
                      : "6 sjezdovek, 4sedačková lanovka, noční carving, lyžařská škola a půjčovna vybavení."}
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
                      ? "Hunderte Kilometer gespurte Loipen nach Přebuz, Boží Dar und Anbindung an die sächsische Kammloipe."
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
