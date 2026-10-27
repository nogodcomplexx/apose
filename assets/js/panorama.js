/**
 * Apartmany Panorama - Interactive Core & Localization Engine
 * Language switching (CZ / EN), Previo Booking Hub, Video Tour, Apartment Modals
 */

const i18n = {
  cs: {
    // Navigation to Subpages (CS)
    nav_ski_bublava: 'Ski Areál Bublava (500 m)',
    nav_krusnohorska: 'Krušnohorská magistrála',
    nav_trips: 'Rozhledna & Výlety v okolí',
    nav_lobby_bar: 'Rezidenční Lobby Bar',
    or: 'nebo',

    // Calendar & Dropdown Options (CS)
    book_badge_choice: 'Dle výběru',
    book_opt_apt1: 'Panoramatický rohový apartmán (Apartmán 1)',
    book_opt_apt1_badge: 'Až 6 osob • 47 m² • Rohový balkon',
    book_opt_apt2: 'Horský apartmán s balkonem (Apartmán 2)',
    book_opt_apt2_badge: '4 osoby • 40 m² • Balkon',
    book_opt_apt3: 'Podkrovní apartmán s trámy (Apartmán 3)',
    book_opt_apt3_badge: '4 osoby • 42 m² • Výhled na sjezdovku',
    book_group_hint: 'Pro skupinový pronájem všech 3 pokojů naráz nás prosím kontaktujte přímo.',
    hero_stat_4_num: 'Privátní',
    dossier_buyout_note: 'Pro skupinový pronájem celé rezidence naráz nás prosím kontaktujte přímo:',
    whole_house_note: 'Pro skupinový pronájem celé rezidence naráz nás prosím kontaktujte přímo na',

    nav_home: 'Domů',
    nav_apartments: 'Apartmány',
    nav_about: 'Vybavení',
    nav_gallery: 'Galerie',
    nav_contact: 'Kontakt',
    nav_book_now: 'Rezervovat',
    
    hero_sub: 'HORSKÁ LUXUSNÍ REZIDENCE',
    hero_title_1: 'Apartmány',
    hero_title_stroke: 'Panorama',
    hero_desc: 'Exkluzivní horské útočiště v Krušných horách přímo u sjezdovky Bublava. 3 architektonicky promyšlené typy apartmánů – všechny s vlastním privátním balkonem a panoramatickým výhledem na sjezdovky i horské hřebeny, moderním vybavením, privátní kójí na lyže a kola se sušáky bot a možností skupinového pronájmu až pro 14 hostů.',
    hero_stat_1_num: '3',
    hero_stat_1_text: 'Architektonické typy',
    hero_stat_2_num: '14',
    hero_stat_2_text: 'Lůžek celkem',
    hero_stat_3_num: '100%',
    hero_stat_3_text: 'Všechny pokoje s balkonem',
    hero_cta_apts: 'Prohlédnout apartmány',
    hero_cta_book: 'Ověřit termíny',
    
    book_checkin: 'Příjezd',
    book_checkout: 'Odjezd',
    book_apartment: 'Apartmán',
    book_all_apts: 'Všechny 3 apartmány (až 14 hostů)',
    book_guests: 'Hosté',
    book_cta: 'Ověřit termíny',
    book_calc_hint: 'Vyberte termín pro orientační kalkulaci',
    book_dates_pill: 'Zvolit termín',
    book_select: 'Zvolit',
    book_select_apt: 'Zvolit pokoj',
    cal_reset: 'Vymazat',
    
    ticker_text_1: 'APARTMÁNY PANORAMA',
    ticker_text_2: 'VŠECHNY POKOJE S BALKONEM',
    ticker_text_3: 'SKI-IN / SKI-OUT POLOHA',
    ticker_text_4: '3 ARCHITEKTONICKÉ TYPY',
    dossier_meta_tag: 'ARCHITEKTONICKÝ DOSSIER // REZIDENCE BUBLAVA 791',
    dossier_title: '3 typy designových apartmánů s výhledem na sjezdovku a hory',
    dossier_lead: 'V naší rezidenci nabízíme 3 architektonicky promyšlené typy apartmánů ve správcovství přímo u sjezdovky Bublava. Každý typ má vlastní balkon s výhledem, privátní uzamykatelnou kóji na lyže a kola se sušáky bot na 1. NP, garantované parkování a přímý přístup do rezidenčního Lobby Baru.',
    dossier_calc_btn: 'Ověřit termíny',
    dossier_buyout_tag: 'EXKLUZIVNÍ SKUPINOVÝ POBYT // VŠECHNY 3 TYPY APARTMÁNŮ',
    dossier_buyout_title: 'Pronájem celé naší nabídky (až 14 hostů)',
    dossier_buyout_desc: 'Získejte kompletní ubytovací portfolio ve správcovství jen pro svou skupinu, rodinu či přátele: všechny 3 designové apartmány (až 14 lůžek), 3 soukromé balkony s výhledem, vyhřívané kóje se sušáky bot a garantované parkování přímo u sjezdovky.',
    dossier_buyout_btn: 'Kontaktovat pro pronájem',
    buyout_price_sub: '3 apartmány / noc',
    buyout_price_val: 'od 5 400 Kč',
    
    about_sub: 'ARCHITEKTURA & HORSKÁ FILOZOFIE',
    about_title: 'Spojení masivního dřeva, žuly a nekonečného prostoru',
    about_desc: 'Apartmány Panorama představují harmonii přírodních materiálů a velkoformátových prosklených stěn. Každý apartmán byl navržen tak, aby poskytoval ničím nerušený výhled na horský masiv a maximální akustické soukromí.',
    about_bar_1: 'Panoramatický výhled na masiv',
    about_bar_2: 'Akustický komfort a soukromí',
    about_bar_3: 'Nástupní stanice lanovky (500 m)',
    about_cta: 'Ověřit termíny',
    
    apts_sub: 'ŽIVOT V REZIDENCI & ZÁŽITKY',
    apts_title: 'Více než ubytování. Horský životní styl na Bublavě',
    apts_desc: 'Od ranního espressa v Lobby Baru přes přímý nástup na zasněženou sjezdovku až po stovky kilometrů hřebenových tras a večerní posezení u vína. Zažijte Krušné hory naplno ve všech ročních obdobích.',
    
    exp1_badge: 'Přímo v domě • 1. NP',
    exp1_title: 'Rezidenční Lobby Bar',
    exp1_desc: 'Výběrová káva, točené pivo, večerní bar a velká obrazovka pro společné chvíle',
    
    exp2_badge: '500 m od rezidence',
    exp2_title: 'Ski Areál Bublava',
    exp2_desc: '6 sjezdovek, 4sedačková lanovka, noční lyžování, půjčovny & snowpark',
    
    exp3_badge: 'Hned za domem',
    exp3_title: 'Krušnohorská magistrála',
    exp3_desc: 'Stovky km upravených běžkařských stop, cyklotrasy a hřebenové túry',
    
    exp4_badge: 'Tipy v okolí • 5–10 min',
    exp4_title: 'Rozhledna & Výlety v okolí',
    exp4_desc: 'Rozhledna Bleiberg (18 min pěšky), německá Vogtland Arena v Klingenthalu a severská tundra na Přebuzi',
    read_guide: 'Číst průvodce',
    exp_more_info: 'Více informací',
    
    comfort_sub: 'KOMFORT & VYBAVENÍ',
    comfort_title: 'Vše pro váš bezstarostný horský pobyt',
    comfort_card_1_title: 'Vlastní Kóje na Lyže & Kola',
    comfort_card_1_desc: 'Každý z našich apartmánů má vlastní uzamykatelnou privátní kóji se sušáky na lyžařské boty a bezpečným prostorem pro kola včetně dobíjení elektrokol.',
    comfort_card_2_title: 'Stylový Lobby Bar & TV Lounge',
    comfort_card_2_desc: 'Příjemná společenská zóna v přízemí pro ranní espresso, odpolední drinky a večerní sledování sportovních přenosů na velké obrazovce.',
    comfort_card_3_title: 'Privátní Balkony pro Každý Pokoj',
    comfort_card_3_desc: 'Každý jednotlivý apartmán disponuje vlastním slunným balkonem s venkovním posezením a ničím nerušeným výhledem na sjezdovky a krušnohorské lesy.',
    comfort_card_4_title: 'Bezplatné Soukromé Parkování',
    comfort_card_4_desc: 'Pohodlné soukromé parkování přímo u objektu bez nutnosti rezervace. Ke každému apartmánu náleží 1 vyhrazené parkovací stání přímo u rezidence.',
    comfort_card_5_title: 'Bezplatná Wi-Fi & Smart TV',
    comfort_card_5_desc: 'Spolehlivé bezdrátové Wi-Fi připojení zdarma ve všech apartmánech i ve společných prostorách a moderní Smart TV v každém pokoji.',
    comfort_card_6_title: 'Příjezd 15:00–18:00 & Odjezd do 11:00',
    comfort_card_6_desc: 'Příjezd s předáním klíčů v čase 15:00–18:00 (či dle předchozí individuální domluvy) a pohodlný odjezd do 11:00.',
    
    nav_faq: 'Praktické info & FAQ',
    faq_sub: 'PRAKTICKÉ INFORMACE & FAQ',
    faq_title: 'Vše, co potřebujete vědět před příjezdem',
    faq_desc: 'Ověřené informace k parkování, check-inu, vybavení apartmánů i doporučeným restauracím v okolí.',
    faq_q1_title: 'Bezplatné soukromé parkování',
    faq_q1: 'Je parkování zdarma a je nutná rezervace?',
    faq_a1: 'Bezplatné soukromé parkování je možné přímo u objektu – rezervace předem není nutná. Ke každému apartmánu náleží 1 vyhrazené parkovací stání přímo u domu.',
    faq_q2_title: 'Příjezd & Odjezd (Check-in / Check-out)',
    faq_q2: 'Jaké jsou časy příjezdu a odjezdu?',
    faq_a2: 'Příjezd (check-in) probíhá od 15:00 do 18:00 (předání klíčů). Odjezd (check-out) je do 11:00. Dřívější příjezd či pozdější odjezd můžete uvést jako speciální požadavek při rezervaci dle individuální domluvy.',
    faq_q3_title: 'Pobyt s domácími mazlíčky',
    faq_q3: 'Jsou povoleni psi a domácí mazlíčci?',
    faq_a3: 'Ano, domácí zvířata jsou u nás povolena po předchozí domluvě (může být účtován poplatek za zvýšené nároky na úklid). Pro pejsky máme k dispozici misky na vodu a krmivo.',
    faq_q4_title: 'Vlastní koupelny & Vybavení kuchyně',
    faq_q4: 'Mají apartmány vlastní koupelnu a jak je vybavena kuchyně?',
    faq_a4: 'Ano, všechny apartmány mají vlastní privátní koupelnu se sprchou, fénem, toaletou a čistými ručníky. V každém apartmánu je také kompletně vybavený kuchyňský kout (sklokeramická varná deska, moderní digestoř, mikrovlnná trouba, kávovar, rychlovarná konvice, topinkovač, lednice a veškeré nádobí) s jídelním stolem i Smart TV.',
    faq_q5_title: 'Bezplatná Wi-Fi v celém objektu',
    faq_q5: 'Jaké jsou podmínky pro internet a Wi-Fi?',
    faq_a5: 'Bezdrátový internet (Wi-Fi) je dostupný ve všech prostorách rezidence, ve všech apartmánech i v Lobby Baru a je pro všechny ubytované hosty zcela zdarma.',
    faq_q6_title: 'Vyhřívaná lyžárna & Cyklárna',
    faq_q6: 'Kde si mohu uschovat lyžařskou výbavu a kola?',
    faq_a6: 'Přímo v 1. NP má každý apartmán svou vlastní uzamykatelnou vyhřívanou kóji se sušáky na lyžařské boty a bezpečným prostorem pro lyže či kola včetně možnosti dobíjení elektrokol.',
    faq_q7_title: 'Restaurace a gastronomie v okolí',
    faq_q7: 'Kde se v okolí Bublavy dobře najíst?',
    faq_a7: 'Přímo v obci doporučujeme oblíbenou restauraci U Pražáka (600 m), Hostinec U Vichřice (700 m) nebo horskou hospůdku Aschbergschänke na česko-německé hranici (1,5 km). V obci najdete také obchod s potravinami.',
    faq_q8_title: 'Přímá online rezervace & garance ceny',
    faq_q8: 'Kde je nejvýhodnější rezervovat pobyt?',
    faq_a8: 'Přímá online rezervace na našem oficiálním webu přes certifikovaný rezervační systém vám garantuje nejnižší dostupnou cenu bez provizí a poplatků třetím stranám. Ihned po dokončení obdržíte okamžité potvrzení s garancí vašeho vybraného apartmánu.',
    
    whole_house_sub: 'EXKLUZIVNÍ PRONÁJEM',
    whole_house_title: 'Plánujete pobyt s přáteli nebo rodinné setkání?',
    whole_house_desc: 'Pronajměte si kompletní nabídku našich 3 designových apartmánů až pro 14 hostů. Užijte si 3 privátní balkony, vyhřívané kóje na lyže se sušáky bot, garantované parkování i přímý vstup do rezidenčního Lobby Baru.',
    whole_house_btn: 'Kontaktovat pro skupinový pobyt',
    
    nav_reviews: 'Reference',
    nav_book: 'Rezervovat',
    hero_stat_4_text: 'Kóje na kola & lyže',
    video_modal_sub: '4K Ultra HD • Rezidence & Apartmány',
    previo_modal_sub: 'Oficiální přímá rezervace • Garance nejlepší ceny',
    testimonial_desc: 'Přečtěte si autentické dojmy a zkušenosti hostů, kteří u nás v Bublavě strávili svou dovolenou.',
    modal_strip_checkin: 'Check-in: 15:00–18:00',
    modal_strip_checkout: 'Check-out: do 11:00',
    modal_strip_parking: 'Parkování zdarma',
    modal_strip_pets: 'Mazlíčci povoleni',
    previo_calc_label: 'Předběžná kalkulace:',
    modal_view_floorplan: '3D Půdorys',
    modal_view_photo: 'Fotografie',
    
    // Lobby Bar Translations (CS)
    lobby_sub: 'SPOLEČENSKÉ SRDCE REZIDENCE',
    lobby_title: 'Stylový Lobby Bar & Společenská zóna',
    lobby_desc: 'V přízemí rezidence na vás čeká příjemný Lobby Bar s neformální horskou atmosférou. Místo pro ranní espresso, odpolední drink po lyžování či cyklistice a večerní setkání u velkoplošné obrazovky se sportovními přenosy.',
    lobby_badge_tv: 'Velkoplošná TV & Sportovní přenosy',
    lobby_badge_coffee: 'Výběrová káva',
    lobby_f1_title: 'Čepované pivo & Bar',
    lobby_f1_desc: 'Lokální piva, výběrová vína a drinky',
    lobby_f2_title: 'Sportovní přenosy',
    lobby_f2_desc: 'Velkoplošná TV pro zápasy a závody',
    lobby_f3_title: 'Kapacita pro skupiny',
    lobby_f3_desc: 'Masivní dřevěné stoly pro celou partu',
    lobby_f4_title: 'Apres-ski & Cyklo relax',
    lobby_f4_desc: 'Příjemné zahřátí po návratu ze svahu',
    lobby_cta_gallery: 'Prohlédnout fotogalerii',
    lobby_cta_book: 'Rezervovat pobyt',
    
    // Dossier Cards & Spotlight Translations (CS)
    dossier_sub: 'DISPOZICE &amp; CENY',
    dossier_managed_tag: 'NAŠE NABÍDKA // 3 ARCHITEKTONICKÉ TYPY APARTMÁNŮ // VŠECHNY S BALKONEM',
    dossier_cards_heading: 'Vyberte si ideální typ apartmánu s výhledem na sjezdovku a hory',
    dossier_cards_lead: 'V naší rezidenci nabízíme 3 rozmanité typy apartmánů navržené pro maximální komfort párů, rodin i skupin přátel. Všechny pokoje mají vlastní privátní balkon s přímým výhledem na lyžařský areál a horské hřebeny, vyhřívanou uzamykatelnou kóji se sušáky bot na 1. NP a garantované parkování.',
    dossier_c1_title: 'Panoramatický rohový apartmán s výhledem na sjezdovku',
    dossier_c1_desc: 'Náš nejprostornější apartmán s velkým rohovým balkonem a úchvatným 180° panoramatickým výhledem na sjezdovky Bublava i horské vrcholy.',
    dossier_c2_title: 'Horský apartmán s balkonem a výhledem do údolí',
    dossier_c2_desc: 'Útulný a světlý dvoupokojový apartmán pro 4 hosty se slunným balkonem s posezením a malebným výhledem na lyžařský areál a horské hřebeny.',
    dossier_c3_title: 'Podkrovní apartmán s vyhlídkovým balkonem (Apartmán 3)',
    dossier_c3_desc: 'Útulný podkrovní apartmán ve 3. patře s privátním balkonem a nejvyšším panoramatickým výhledem na lyžařský areál i horské vrcholy.',
    dossier_btn_book: 'Rezervovat',
    dossier_btn_plan: 'Detaily',
    spotlight_spec_area_label: 'Výměra jednotky',
    spotlight_spec_outdoor_label: 'Balkon s výhledem',
    spotlight_spec_capacity_label: 'Kapacita lůžek',
    spotlight_spec_locker_label: 'Příslušenství',
    spotlight_mode_photo: 'Reálné foto',
    spotlight_mode_floorplan: '3D Půdorys',
    spotlight_detail_btn: 'Detaily',
    spotlight_book_btn: 'Rezervovat',
    spotlight_price_from: 'Cena od',
    spotlight_per_night: '/ noc',
    dossier_thumb_plan: 'Půdorys',
    testimonial_sub: 'REFERENCE & ZKUŠENOSTI',
    testimonial_title: 'Co o nás říkají naši hosté',
        
    footer_desc: 'Exkluzivní horské ubytování s atmosférou alpského luxusu, prémiovým komfortem a dechberoucími výhledy.',
    footer_address: 'Bublava 791',
    footer_phone: '+420 777 366 239',
    footer_email: 'info@apartmany-panorama.cz',
    
    previo_modal_title: 'Online rezervace',
    previo_modal_note: 'Online ověření dostupnosti a okamžitá kalkulace ceny v reálném čase.',
    previo_dates: 'Termín pobytu:',
    previo_guests: 'Hosté:',
    previo_unit: 'Vybraný apartmán:',
    previo_placeholder_info: 'Zde se integruje oficiální rezervační engine Previo. Po propojení vašeho Previo Hotel ID budou moci hosté platit platební kartou a potvrdit rezervaci okamžitě v reálném čase.',
    previo_confirm_btn: 'Přejít k dokončení rezervace',
    modal_book_previo: 'Rezervovat apartmán',
    booking_guarantee_text: 'Přímá online rezervace na našem webu garantuje nejnižší cenu bez zprostředkovatelských poplatků.',

    video_modal_title: 'Videoprohlídka Apartmány Panorama',
    video_modal_sub: '4K Ultra HD • Rezidence & Apartmány',
    previo_modal_sub: 'Oficiální přímá rezervace • Garance nejlepší ceny',
    video_modal_desc: 'Prohlédněte si atmosféru luxusních apartmánů, horské architektury a okolní přírody.',
    video_modal_note: 'Videopřehrávač je připraven pro vložení vaší finální 4K videoprohlídky rezidence.',

    gallery_sub: 'MOMENTY Z PANORAMA',
    gallery_title: 'Fotogalerie rezidence a hor',
    gallery_desc: 'Prozkoumejte autentickou atmosféru horské rezidence, designových apartmánů a okolní přírody.',
    filter_all: 'Všechny momenty (20)',
    filter_lobby: 'Lobby Bar & Lounge (1)',
    filter_residence: 'Rezidence & Exteriér (3)',
    filter_interiors: 'Apartmány & Interiéry (13)',
    filter_nature: 'Hory & Okolí (3)',
    gallery_btn_more: 'Zobrazit další fotografie',
    gallery_btn_less: 'Zobrazit méně fotografií',
    gallery_btn_cinema: 'Otevřít celou galerii v kině (20)',
    modal_amenities: 'Vybavení & Komfort',
    modal_price_from: 'Cena od',
    modal_per_night: '/ noc',
    modal_best_price: 'Garance nejlepší ceny',
    modal_book_previo: 'Rezervovat',
    modal_close_aria: 'Zavřít detail apartmánu',
    cal_today: 'Dnes',
    cal_confirm: 'Potvrdit',

    dossier_badge_1: '<strong>3 ARCHITEKTONICKÉ TYPY</strong> • 2. &amp; 3. NP',
    dossier_badge_2: '<strong>VŠECHNY S VÝHLEDEM</strong> • SJEZDOVKY &amp; HORY',
    dossier_badge_3: '<strong>AŽ 14 LŮŽEK</strong> • KAPACITA PRO SKUPINY',
    dossier_badge_4: '<strong>VLASTNÍ BALKONY</strong> • SLUNNÁ POSEZENÍ',
    dossier_badge_5: '<strong>KÓJE SE SUŠÁKY</strong> • NA 1. NP PRO KAŽDÝ BYT',
    dossier_badge_6: '<strong>LOBBY BAR 140 m²</strong> • ČEPOVANÉ PIVO &amp; LOUNGE',

    tab_apt1: 'Apartmán 1 (Panoramatický rohový • 180° výhled)',
    tab_apt2: 'Apartmán 2 (Horský balkon • 4 hosté)',
    tab_apt3: 'Apartmán 3 (Podkrovní vyhlídka • 4 hosté)',
    tab_all: 'Všechny 3 apartmány (až 14 hostů)',

    spotlight_mode_xray_badge: 'Rentgen',
    spotlight_xray_instruction: 'SPOTLIGHT X-RAY: POHYBUJTE KURZOREM PRO RENTGEN PŮDORYSU',
    spotlight_close_fp: 'Zavřít půdorys',

    dossier_c1_badge: 'APARTMÁN 1',
    dossier_c1_meta: '180° VÝHLED NA SJEZDOVKU &amp; HORY',
    dossier_c1_m1: '<i class="fa-solid fa-users"></i> Až 6 hostů',
    dossier_c1_m2: '<i class="fa-solid fa-mountain-sun"></i> Rohový balkon',
    dossier_c1_m3: '<i class="fa-solid fa-snowflake"></i> Kóje #6 se sušáky',
    dossier_c1_m4: '<i class="fa-solid fa-square-parking"></i> 1x parkování',

    dossier_c2_badge: 'APARTMÁN 2',
    dossier_c2_meta: 'VÝHLED NA SJEZDOVKU &amp; HORY',
    dossier_c2_m1: '<i class="fa-solid fa-users"></i> 4 hosté',
    dossier_c2_m2: '<i class="fa-solid fa-mountain-sun"></i> Slunný balkon',
    dossier_c2_m3: '<i class="fa-solid fa-snowflake"></i> Kóje #2 se sušáky',
    dossier_c2_m4: '<i class="fa-solid fa-square-parking"></i> 1x parkování',

    dossier_c3_badge: 'APARTMÁN 3',
    dossier_c3_meta: 'PODKROVÍ // VÝHLED NA HORY',
    dossier_c3_m1: '<i class="fa-solid fa-users"></i> 4 hosté',
    dossier_c3_m2: '<i class="fa-solid fa-mountain-sun"></i> Podkrovní balkon',
    dossier_c3_m3: '<i class="fa-solid fa-snowflake"></i> Kóje #3 se sušáky',
    dossier_c3_m4: '<i class="fa-solid fa-square-parking"></i> 1x parkování',

    dossier_price_from: 'od 1 800 Kč / noc',
    dossier_plan_btn: 'Půdorys',

    footer_guide_title: 'Průvodce &amp; Horský životní styl',
    footer_link_ski: 'Ski Areál Bublava (500 m od domu)',
    footer_link_magistrala: 'Krušnohorská magistrála &amp; Kammloipe',
    footer_link_trips: 'Rozhledna Bleiberg &amp; Výlety v okolí',
    footer_link_bar: 'Rezidenční Lobby Bar &amp; Lounge',
    footer_quick_title: 'Rychlé informace pro hosty',
    footer_quick_info: '<i class="fa-solid fa-check text-warning me-2"></i>Check-in: 15:00 – 18:00 • Check-out: do 11:00<br><i class="fa-solid fa-check text-warning me-2"></i>Bezplatné soukromé parkování přímo u objektu<br><i class="fa-solid fa-check text-warning me-2"></i>Wi-Fi zdarma ve všech prostorách<br><i class="fa-solid fa-check text-warning me-2"></i>Domácí mazlíčci povoleni (poplatek)',
    footer_direct_title: 'Přímá rezervace &amp; Garance ceny',
    footer_direct_desc: 'Rezervujte přímo přes náš oficiální rezervační systém bez provizí zprostředkovatelům za nejvýhodnější garantovanou cenu.',
    footer_direct_btn: 'Rezervovat online',
    footer_sub_apts: 'Dispozice apartmánů',
    footer_sub_gallery: 'Fotogalerie',
    footer_sub_faq: 'Časté dotazy',
    footer_sub_cookies: 'Nastavení cookies',
    footer_copy: '© 2026 Apartmány Panorama Bublava. Všechna práva vyhrazena.',
    footer_copy_tag: 'Exkluzivní horské apartmány přímo u sjezdovky v Krušných horách.'
  },
  
  en: {
    // Navigation to Subpages (EN)
    nav_ski_bublava: 'Bublava Ski Resort (500 m)',
    nav_krusnohorska: 'Ore Mountain Trail & Kammloipe',
    nav_trips: 'Bleiberg Tower & Day Trips',
    nav_lobby_bar: 'Residence Lobby Bar',
    or: 'or',

    // Calendar & Dropdown Options (EN)
    book_badge_choice: 'Any layout',
    book_opt_apt1: 'Panoramic Corner Suite (Apartment 1)',
    book_opt_apt1_badge: 'Up to 6 guests • 47 m² • Corner balcony',
    book_opt_apt2: 'Mountain Balcony Suite (Apartment 2)',
    book_opt_apt2_badge: '4 guests • 40 m² • Balcony',
    book_opt_apt3: 'Attic View Suite (Apartment 3)',
    book_opt_apt3_badge: '4 guests • 42 m² • Slope views',
    book_group_hint: 'For group buyout of all 3 suites at once, please contact us directly.',
    hero_stat_4_num: 'Private',
    dossier_buyout_note: 'For whole residence group buyouts at once, please contact us directly:',
    whole_house_note: 'For whole residence group buyouts at once, please contact us directly at',

    nav_home: 'Home',
    nav_apartments: 'Apartments',
    nav_about: 'Amenities',
    nav_gallery: 'Gallery',
    nav_contact: 'Contact',
    nav_book_now: 'Book Now',
    
    hero_sub: 'LUXURY MOUNTAIN RESIDENCE',
    hero_title_1: 'Apartments',
    hero_title_stroke: 'Panorama',
    hero_desc: 'An exclusive alpine sanctuary directly by the Bublava ski slopes in the Ore Mountains. 3 architecturally refined apartment types – all featuring private balconies with panoramic ski slope and mountain views, dedicated ski/bike lockers with boot dryers, and group buyout for up to 14 guests.',
    hero_stat_1_num: '3',
    hero_stat_1_text: 'Architectural Types',
    hero_stat_2_num: '14',
    hero_stat_2_text: 'Total Beds',
    hero_stat_3_num: '100%',
    hero_stat_3_text: 'All Rooms with Balcony',
    hero_cta_apts: 'Explore Suites',
    hero_cta_book: 'Check Dates',
    
    book_checkin: 'Check-in',
    book_checkout: 'Check-out',
    book_apartment: 'Apartment',
    book_all_apts: 'All 3 Apartments (up to 14 guests)',
    book_guests: 'Guests',
    book_cta: 'Check Availability',
    book_calc_hint: 'Select dates for pricing estimate',
    book_dates_pill: 'Select dates',
    book_select: 'Select',
    book_select_apt: 'Select room',
    cal_reset: 'Clear',
    
    ticker_text_1: 'APARTMENTS PANORAMA',
    ticker_text_2: 'ALL ROOMS WITH PRIVATE BALCONY',
    ticker_text_3: 'SKI-IN / SKI-OUT LOCATION',
    ticker_text_4: '3 ARCHITECTURAL TYPES',
    dossier_meta_tag: 'ARCHITECTURAL DOSSIER // RESIDENCE BUBLAVA 791',
    dossier_title: '3 Designer Apartment Types Overlooking the Ski Slopes & Mountains',
    dossier_lead: 'Our residence offers 3 thoughtfully designed apartment types under direct management right by the Bublava ski slope. Each type features a private balcony with panoramic mountain views, lockable heated gear locker on the ground floor, and guaranteed parking.',
    dossier_calc_btn: 'Check Dates',
    dossier_buyout_tag: 'EXCLUSIVE GROUP RETREAT // ALL 3 APARTMENT TYPES',
    dossier_buyout_title: 'Rent Our Entire Portfolio (up to 14 guests)',
    dossier_buyout_desc: 'Reserve all 3 managed designer apartments for your group, family, or retreat: up to 14 beds, 3 private mountain-view balconies, heated ski lockers with boot warmers, and guaranteed parking right at the ski resort.',
    dossier_buyout_btn: 'Contact for Group Buyout',
    buyout_price_sub: '3 suites / night',
    buyout_price_val: 'from €220',
    
    about_sub: 'ARCHITECTURE & ALPINE ETHOS',
    about_title: 'The synergy of solid timber, granite, and boundless light',
    about_desc: 'Apartmány Panorama embodies the harmony of organic materials and panoramic glass curtain walls. Each suite is oriented to deliver uninterrupted alpine views and supreme acoustic serenity.',
    about_bar_1: 'Panoramic alpine massif vistas',
    about_bar_2: 'Acoustic comfort & seclusion',
    about_bar_3: 'Proximity to express ski lift (500 m)',
    about_cta: 'Check Dates',
    
    apts_sub: 'RESIDENCE LIFESTYLE & EXPERIENCES',
    apts_title: 'More Than a Stay. The Alpine Way of Life in Bublava',
    apts_desc: 'From morning espresso at the Lobby Bar to ski-in / ski-out access and hundreds of miles of mountain trails. Discover all that our residence and the Ore Mountains have to offer year-round.',
    
    exp1_badge: 'On-site • Ground Floor',
    exp1_title: 'Residential Lobby Bar',
    exp1_desc: 'Artisan coffee, evening wine bar, fireplace & big screen for shared moments',
    
    exp2_badge: '500 m to Chairlift',
    exp2_title: 'Bublava Ski Resort',
    exp2_desc: '6 slopes, 4-seat chairlift, night skiing, equipment rental & terrain park',
    
    exp3_badge: 'Direct Trail Access',
    exp3_title: 'Ore Mountains Ridge Trail',
    exp3_desc: 'Hundreds of km of groomed cross-country tracks, bike trails & ridge hikes',
    
    exp4_badge: 'Local Highlights • 5–10 min',
    exp4_title: 'Lookout Tower & Day Trips',
    exp4_desc: 'Bleiberg lookout, Klingenthal Vogtland Arena & the wild Přebuz peat bogs',
    read_guide: 'Read Guide',
    exp_more_info: 'More information',
    
    comfort_sub: 'COMFORT & AMENITIES',
    comfort_title: 'Everything for an effortless alpine escape',
    comfort_card_1_title: 'Private Ski & Bike Lockers',
    comfort_card_1_desc: 'Each of our suites has its own lockable private locker with ski boot dryers, bicycle storage, and high-output e-bike charging.',
    comfort_card_2_title: 'Stylish Lobby Bar & TV Lounge',
    comfort_card_2_desc: 'Inviting ground-floor social lounge for morning espresso, afternoon apres-ski drinks, and evening sports broadcasts on a big screen.',
    comfort_card_3_title: 'Private Balconies for Every Room',
    comfort_card_3_desc: 'Every single apartment features its own sunny private balcony with outdoor seating and unobstructed views of the ski slopes and mountain forests.',
    comfort_card_4_title: 'Free Private Parking',
    comfort_card_4_desc: 'Convenient private on-site parking (reservation not needed). Each apartment includes 1 designated parking space directly by the residence.',
    comfort_card_5_title: 'Free Wi-Fi & Smart TV',
    comfort_card_5_desc: 'Reliable high-speed wireless Wi-Fi in all apartments and common areas, plus premium Smart TV in each room.',
    comfort_card_6_title: 'Check-in 15:00–18:00 & Check-out 11:00',
    comfort_card_6_desc: 'Check-in with key handover between 15:00 and 18:00 (or by prior personal arrangement) and relaxed check-out until 11:00.',
    
    nav_faq: 'Stay Info & FAQ',
    faq_sub: 'PRACTICAL INFO & FAQ',
    faq_title: 'Everything You Need to Know Before Arrival',
    faq_desc: 'Verified details regarding parking, check-in, apartment equipment, and recommended nearby dining.',
    faq_q1_title: 'Free Private Parking',
    faq_q1: 'Can I park there and is reservation needed?',
    faq_a1: 'Free private parking is possible on site – reservation is not needed. Each apartment includes 1 designated parking space directly by the building.',
    faq_q2_title: 'Check-in & Check-out Times',
    faq_q2: 'What are the check-in and check-out times?',
    faq_a2: 'Check-in takes place from 15:00 to 18:00 (key access). Check-out is until 11:00. Early check-in or late check-out requests can be arranged individually upon booking.',
    faq_q3_title: 'Pet-Friendly Stay',
    faq_q3: 'Are pets allowed?',
    faq_a3: 'Pets are allowed upon prior request. Additional cleaning charges may apply. Pet bowls are provided for your furry companions.',
    faq_q4_title: 'Private Bathrooms & Kitchen Amenities',
    faq_q4: 'Are there private bathrooms and what is the kitchen equipped with?',
    faq_a4: 'Yes, every apartment features a private bathroom with shower, toilet, hairdryer, and fresh towels. Each unit also includes a fully equipped kitchenette (ceramic stovetop, modern extractor hood, microwave oven, coffee maker, kettle, toaster, fridge, and full kitchenware) with dining table and Smart TV.',
    faq_q5_title: 'Free Wi-Fi Throughout',
    faq_q5: 'What is the Wi-Fi policy?',
    faq_a5: 'Wireless Wi-Fi is available in all residence areas, across all apartments and the Lobby Bar, free of charge.',
    faq_q6_title: 'Heated Ski & Bike Lockers',
    faq_q6: 'Where can I securely store ski gear and bikes?',
    faq_a6: 'On the ground floor, each apartment has its own lockable, heated ski and bike locker with electric boot dryers and e-bike charging.',
    faq_q7_title: 'Nearby Restaurants & Dining',
    faq_q7: 'Where can we eat nearby?',
    faq_a7: 'In Bublava we recommend local favorites U Pražáka (600 m walk), Hostinec U Vichřice (700 m), and alpine tavern Aschbergschänke at the German border (1.5 km). A grocery shop is also located in the village center.',
    faq_q8_title: 'Direct Online Booking & Best Price Guarantee',
    faq_q8: 'Where is the best place to book?',
    faq_a8: 'Direct online booking on our official website via our certified reservation system guarantees our lowest available rate with zero third-party commissions. You receive instant confirmation with a guaranteed reservation for your selected apartment.',
    
    whole_house_sub: 'EXCLUSIVE BUYOUT',
    whole_house_title: 'Planning a group retreat or family gathering?',
    whole_house_desc: 'Reserve our complete offering of 3 designer suites for up to 14 guests. Enjoy 3 private scenic balconies, heated gear lockers with boot dryers, parking, and direct access to the residential Lobby Bar.',
    whole_house_btn: 'Contact for Group Stay',
    
    nav_reviews: 'Reviews',
    nav_book: 'Book Now',
    hero_stat_4_text: 'Ski & Bike Lockers',
    video_modal_sub: '4K Ultra HD • Residence & Suites',
    previo_modal_sub: 'Official Direct Booking • Best Price Guarantee',
    testimonial_desc: 'Read authentic impressions and stories from guests who spent their alpine holiday with us in Bublava.',
    modal_strip_checkin: 'Check-in: 15:00–18:00',
    modal_strip_checkout: 'Check-out: until 11:00',
    modal_strip_parking: 'Free Parking',
    modal_strip_pets: 'Pets Allowed',
    previo_calc_label: 'Estimated Price:',
    modal_view_floorplan: '3D Floorplan',
    modal_view_photo: 'Photography',
    
    // Lobby Bar Translations (EN)
    lobby_sub: 'SOCIAL HEART OF THE RESIDENCE',
    lobby_title: 'Stylish Lobby Bar & Social Lounge',
    lobby_desc: 'On the ground floor of our residence awaits an inviting Lobby Bar with a relaxed alpine atmosphere. The perfect place for morning espresso, apres-ski drinks, and evening games on a big screen.',
    lobby_badge_tv: 'Big-Screen TV & Live Sports',
    lobby_badge_coffee: 'Specialty Coffee',
    lobby_f1_title: 'Draft Beer & Bar',
    lobby_f1_desc: 'Regional draft beers, curated wines, and spirits',
    lobby_f2_title: 'Live Sports',
    lobby_f2_desc: 'Big-screen TV for matches, ski races, and cups',
    lobby_f3_title: 'Group Gathering Space',
    lobby_f3_desc: 'Solid timber communal tables for your whole party',
    lobby_f4_title: 'Apres-Ski & Bike Lounge',
    lobby_f4_desc: 'Cozy and warm relaxation after a day on the slopes',
    lobby_cta_gallery: 'View Photo Gallery',
    lobby_cta_book: 'Book Your Stay',
    
    // Dossier Cards & Spotlight Translations (EN)
    dossier_sub: 'SUITE LAYOUTS &amp; RATES',
    dossier_managed_tag: 'OUR OFFER // 3 ARCHITECTURAL SUITE TYPES // ALL WITH PRIVATE BALCONY',
    dossier_cards_heading: 'Choose Your Ideal Suite with Ski Slope & Mountain Views',
    dossier_cards_lead: 'Our residence features 3 diverse suite layouts designed for couples, families, and retreats. All rooms feature a private scenic balcony, heated ground-floor gear locker with boot dryers, and free private parking.',
    dossier_c1_title: 'Panoramic Corner Suite with Ski Slope & Mountain Views',
    dossier_c1_desc: 'Our most expansive residence featuring a wrap-around corner balcony with 180° panoramic vistas over Bublava ski slopes and Ore Mountain summits.',
    dossier_c2_title: 'Mountain Balcony Suite with Valley Views',
    dossier_c2_desc: 'Bright and inviting 2-room apartment for 4 guests with private sunny balcony, lounge seating, and charming slope vistas.',
    dossier_c3_title: 'Attic Scenic Balcony Suite (Apartment 3)',
    dossier_c3_desc: 'Charming top-floor attic suite with private balcony boasting supreme mountain vistas over Bublava ski slopes and Ore Mountain ridges.',
    dossier_btn_book: 'Book',
    dossier_btn_plan: 'Details',
    spotlight_spec_area_label: 'Unit Area',
    spotlight_spec_outdoor_label: 'Balcony & Views',
    spotlight_spec_capacity_label: 'Bed Capacity',
    spotlight_spec_locker_label: 'Amenities',
    spotlight_mode_photo: 'Real Photo',
    spotlight_mode_floorplan: '3D Floorplan',
    spotlight_detail_btn: 'Details',
    spotlight_book_btn: 'Book Now',
    spotlight_price_from: 'Rates from',
    spotlight_per_night: '/ night',
    dossier_thumb_plan: 'Floor Plan',
    testimonial_sub: 'GUEST EXPERIENCES',
    testimonial_title: 'What our guests say',
        
    footer_desc: 'Exclusive mountain accommodation combining alpine luxury, premium comfort, and dramatic panoramic vistas.',
    footer_address: 'Bublava 791',
    footer_phone: '+420 777 366 239',
    footer_email: 'info@apartmany-panorama.cz',
    
    previo_modal_title: 'Online Reservation',
    previo_modal_note: 'Real-time live rate & availability check.',
    previo_dates: 'Stay Dates:',
    previo_guests: 'Guests:',
    previo_unit: 'Selected Suite:',
    previo_placeholder_info: 'This area houses your verified Previo reservation engine. Once your Previo Hotel ID is embedded, guests can pay securely by card and receive instant confirmation.',
    previo_confirm_btn: 'Proceed to Complete Reservation',
    modal_book_previo: 'Book Suite Online',
    booking_guarantee_text: 'Direct online booking on our official website guarantees our lowest rate with zero commission fees.',

    video_modal_title: 'Video Tour Apartmány Panorama',
    video_modal_desc: 'Explore the atmosphere of our luxury suites, mountain architecture, and alpine nature.',
    video_modal_note: 'The video player is ready for your official 4K residence walkthrough tour.',

    gallery_sub: 'MOMENTS FROM PANORAMA',
    gallery_title: 'Residence & Alpine Photo Gallery',
    gallery_desc: 'Discover the atmosphere of our mountain residence, designer suites, and surrounding alpine peaks.',
    filter_all: 'All Moments (20)',
    filter_lobby: 'Lobby Bar & Lounge (1)',
    filter_residence: 'Residence & Exterior (3)',
    filter_interiors: 'Suites & Interiors (13)',
    filter_nature: 'Mountains & Nature (3)',
    gallery_btn_more: 'Show more photos',
    gallery_btn_less: 'Show fewer photos',
    gallery_btn_cinema: 'Open cinema gallery (20)',
    modal_amenities: 'Amenities & Comfort',
    modal_price_from: 'Price from',
    modal_per_night: '/ night',
    modal_best_price: 'Best price guarantee',
    modal_book_previo: 'Book Now',
    modal_close_aria: 'Close suite details',
    cal_today: 'Today',
    cal_confirm: 'Confirm',

    dossier_badge_1: '<strong>3 ARCHITECTURAL TYPES</strong> • 2nd &amp; 3rd FLOOR',
    dossier_badge_2: '<strong>ALL WITH SCENIC VIEWS</strong> • SLOPES &amp; MOUNTAINS',
    dossier_badge_3: '<strong>UP TO 14 BEDS</strong> • CAPACITY FOR GROUPS',
    dossier_badge_4: '<strong>PRIVATE BALCONIES</strong> • SUNNY SEATING',
    dossier_badge_5: '<strong>LOCKERS WITH DRYERS</strong> • GROUND FLOOR FOR EACH UNIT',
    dossier_badge_6: '<strong>LOBBY BAR 140 m²</strong> • DRAFT BEER &amp; LOUNGE',

    tab_apt1: 'Suite 1 (Panoramic Corner • 180° Views)',
    tab_apt2: 'Suite 2 (Mountain Balcony • 4 Guests)',
    tab_apt3: 'Suite 3 (Attic Scenic View • 4 Guests)',
    tab_all: 'All 3 Suites (Up to 14 Guests)',

    spotlight_mode_xray_badge: 'X-Ray',
    spotlight_xray_instruction: 'SPOTLIGHT X-RAY: MOVE CURSOR TO REVEAL FLOORPLAN X-RAY',
    spotlight_close_fp: 'Close floorplan',

    dossier_c1_badge: 'APARTMENT 1',
    dossier_c1_meta: '180° PANORAMA OVER SLOPES &amp; MOUNTAINS',
    dossier_c1_m1: '<i class="fa-solid fa-users"></i> Up to 6 guests',
    dossier_c1_m2: '<i class="fa-solid fa-mountain-sun"></i> Corner balcony',
    dossier_c1_m3: '<i class="fa-solid fa-snowflake"></i> Heated locker #6',
    dossier_c1_m4: '<i class="fa-solid fa-square-parking"></i> 1x parking',

    dossier_c2_badge: 'APARTMENT 2',
    dossier_c2_meta: 'SKI SLOPE &amp; MOUNTAIN VIEWS',
    dossier_c2_m1: '<i class="fa-solid fa-users"></i> 4 guests',
    dossier_c2_m2: '<i class="fa-solid fa-mountain-sun"></i> Sunny balcony',
    dossier_c2_m3: '<i class="fa-solid fa-snowflake"></i> Heated locker #2',
    dossier_c2_m4: '<i class="fa-solid fa-square-parking"></i> 1x parking',

    dossier_c3_badge: 'APARTMENT 3',
    dossier_c3_meta: 'TOP FLOOR // ALPINE RIDGE VIEWS',
    dossier_c3_m1: '<i class="fa-solid fa-users"></i> 4 guests',
    dossier_c3_m2: '<i class="fa-solid fa-mountain-sun"></i> Scenic attic balcony',
    dossier_c3_m3: '<i class="fa-solid fa-snowflake"></i> Heated locker #3',
    dossier_c3_m4: '<i class="fa-solid fa-square-parking"></i> 1x parking',

    dossier_price_from: 'from 1 800 CZK / night',
    dossier_plan_btn: 'Floorplan',

    footer_guide_title: 'Guides &amp; Mountain Lifestyle',
    footer_link_ski: 'Bublava Ski Resort (500 m walk)',
    footer_link_magistrala: 'Ore Mountain Trail &amp; Kammloipe',
    footer_link_trips: 'Bleiberg Lookout &amp; Day Trips',
    footer_link_bar: 'Residential Lobby Bar &amp; Lounge',
    footer_quick_title: 'Essential Guest Information',
    footer_quick_info: '<i class="fa-solid fa-check text-warning me-2"></i>Check-in: 15:00 – 18:00 • Check-out: until 11:00<br><i class="fa-solid fa-check text-warning me-2"></i>Free private on-site parking at residence<br><i class="fa-solid fa-check text-warning me-2"></i>Complimentary high-speed Wi-Fi throughout<br><i class="fa-solid fa-check text-warning me-2"></i>Pet-friendly stay upon request (fee)',
    footer_direct_title: 'Direct Booking &amp; Best Rate Guarantee',
    footer_direct_desc: 'Book directly through our official reservation system with zero agency commissions for our guaranteed lowest rate.',
    footer_direct_btn: 'Book Online',
    footer_sub_apts: 'Suites &amp; Layouts',
    footer_sub_gallery: 'Photo Gallery',
    footer_sub_faq: 'Stay Info &amp; FAQ',
    footer_sub_cookies: 'Cookie Preferences',
    footer_copy: '© 2026 Apartmány Panorama Bublava. All rights reserved.',
    footer_copy_tag: 'Exclusive alpine residences right by the ski slopes in the Ore Mountains.'
  },
  de: {
      "nav_ski_bublava": "Skigebiet Bublava (500 m)",
      "nav_krusnohorska": "Kammloipe & Magistrale",
      "nav_trips": "Aussichtsturm & Ausflugsziele",
      "nav_lobby_bar": "Residenz-Lobby-Bar",
      "or": "oder",
      "read_guide": "Reiseführer lesen",
      "exp_more_info": "Mehr erfahren",
      "book_badge_choice": "Alle Kategorien",
      "book_opt_apt1": "Panorama-Eckwohnung (Wohnung 1)",
      "book_opt_apt1_badge": "Bis zu 6 Personen • 47 m² • Eckbalkon",
      "book_opt_apt2": "Alpen-Balkonwohnung (Wohnung 2)",
      "book_opt_apt2_badge": "4 Personen • 40 m² • Balkon",
      "book_opt_apt3": "Dachgeschoss-Wohnung (Wohnung 3)",
      "book_opt_apt3_badge": "4 Personen • 42 m² • Pistenblick",
      "book_group_hint": "Für Gruppenbuchungen aller 3 Wohnungen auf einmal kontaktieren Sie uns bitte direkt.",
      "hero_stat_4_num": "Privat",
      "hero_stat_4_text": "Ski- & Raddepots",
      "dossier_buyout_note": "Für Gruppenbuchungen der gesamten Residenz auf einmal kontaktieren Sie uns bitte direkt:",
      "whole_house_note": "Für Gruppenbuchungen der gesamten Residenz auf einmal kontaktieren Sie uns bitte direkt unter",
      "nav_home": "Startseite",
      "nav_apartments": "Ferienwohnungen",
      "nav_about": "Ausstattung",
      "nav_gallery": "Galerie",
      "nav_contact": "Kontakt",
      "nav_book_now": "Jetzt buchen",
      "nav_book": "Buchen",
      "nav_faq": "Infos & FAQ",
      "nav_reviews": "Bewertungen",
      "hero_sub": "EXKLUSIVE BERGRESIDENZ",
      "hero_title_1": "Apartmány",
      "hero_title_stroke": "Panorama",
      "hero_desc": "Exklusives alpines Refugium direkt an den Skipisten von Bublava im Erzgebirge. 3 architektonisch gestaltete Wohnungstypen – alle mit privatem Balkon mit 180°-Panoramablick auf Pisten und Berggipfel, eigenem beheizten Skidepot mit Skischuhtrocknern und Gruppenbuchung für bis zu 14 Gäste.",
      "hero_stat_1_num": "3",
      "hero_stat_1_text": "Wohnungstypen",
      "hero_stat_2_num": "14",
      "hero_stat_2_text": "Betten gesamt",
      "hero_stat_3_num": "100%",
      "hero_stat_3_text": "Alle mit Balkon",
      "hero_cta_apts": "Wohnungen entdecken",
      "hero_cta_book": "Verfügbarkeit prüfen",
      "book_checkin": "Anreise",
      "book_checkout": "Abreise",
      "book_apartment": "Ferienwohnung",
      "book_all_apts": "Alle 3 Wohnungen (bis 14 Gäste)",
      "book_guests": "Gäste",
      "book_cta": "Verfügbarkeit prüfen",
      "book_calc_hint": "Termine für Preisschätzung wählen",
      "book_dates_pill": "Termin wählen",
      "book_select": "Auswählen",
      "book_select_apt": "Wohnung wählen",
      "cal_reset": "Zurücksetzen",
      "cal_today": "Heute",
      "cal_confirm": "Bestätigen",
      "ticker_text_1": "APARTMÁNY PANORAMA BUBLAVA",
      "ticker_text_2": "JEDE WOHNUNG MIT PRIVATEM BALKON",
      "ticker_text_3": "NAHE DER SKIPISTE (500 M)",
      "ticker_text_4": "3 ARCHITEKTONISCHE DESIGN-TYPEN",
      "dossier_meta_tag": "ARCHITEKTUR-DOSSIER // RESIDENZ BUBLAVA 791",
      "dossier_title": "3 Designer-Wohnungstypen mit Blick auf Skipisten und Erzgebirge",
      "dossier_lead": "Unsere Residenz bietet 3 durchdachte Wohnungstypen unter direkter Verwaltung direkt an der Skipiste Bublava. Jede Wohnung verfügt über einen privaten Aussichtsbalkon mit Bergblick, ein beheiztes Skidepot mit Skischuhtrocknern und garantierte Privatparkplätze.",
      "dossier_calc_btn": "Termine prüfen",
      "dossier_buyout_tag": "EXKLUSIVES GRUPPEN-REFUGIUM // ALLE 3 WOHNUNGSTYPEN",
      "dossier_buyout_title": "Mieten Sie unser gesamtes Portfolio (bis zu 14 Gäste)",
      "dossier_buyout_desc": "Reservieren Sie alle 3 Designer-Ferienwohnungen für Ihre Familie, Freunde oder Firmenevent: bis zu 14 Betten, 3 private Balkone mit Bergblick, beheizte Skidepots mit Skischuhtrocknern und garantierte Parkplätze direkt am Skigebiet.",
      "dossier_buyout_btn": "Gruppenbuchung anfragen",
      "buyout_price_sub": "3 Wohnungen / Nacht",
      "buyout_price_val": "ab 5 400 Kč (ca. 220 €)",
      "dossier_sub": "GRUNDRISSE &amp; PREISE",
      "dossier_managed_tag": "UNSER ANGEBOT // 3 ARCHITEKTONISCHE WOHNUNGSTYPEN // ALLE MIT BALKON",
      "dossier_cards_heading": "Wählen Sie Ihre ideale Ferienwohnung mit Blick auf Piste und Berge",
      "dossier_cards_lead": "Unsere Residenz bietet 3 vielfältige Wohnungstypen für Paare, Familien und Gruppen. Jede Wohnung verfügt über einen privaten Aussichtsbalkon, ein beheiztes Skidepot mit Skischuhtrocknern im Erdgeschoss und kostenlose Privatparkplätze.",
      "dossier_tab_1": "Wohnung 1 (Eckbalkon • 180°)",
      "dossier_tab_2": "Wohnung 2 (Balkon • 4 Gäste)",
      "dossier_tab_3": "Wohnung 3 (Dachgeschoss • 4 Gäste)",
      "dossier_tab_4": "Alle 3 Wohnungen (bis 14 Gäste)",
      "tab_apt1": "Wohnung 1 (Panorama-Eckwohnung • 180° Blick)",
      "tab_apt2": "Wohnung 2 (Alpen-Balkonwohnung • 4 Gäste)",
      "tab_apt3": "Wohnung 3 (Dachgeschoss mit Aussicht • 4 Gäste)",
      "tab_all": "Alle 3 Wohnungen (Bis zu 14 Gäste)",
      "dossier_badge_1": "<strong>3 WOHNUNGSTYPEN</strong> • 2. &amp; 3. ETAGE",
      "dossier_badge_2": "<strong>ALLE MIT BERGBLICK</strong> • PISTEN &amp; BERGE",
      "dossier_badge_3": "<strong>BIS ZU 14 BETTEN</strong> • KAPAZITÄT FÜR GRUPPEN",
      "dossier_badge_4": "<strong>EIGENE BALKONE</strong> • SONNIGE SITZPLÄTZE",
      "dossier_badge_5": "<strong>BEHEIZTES SKIDEPOT</strong> • IM ERDGESCHOSS MIT TROCKNERN",
      "dossier_badge_6": "<strong>LOBBY BAR 140 m²</strong> • TSCHECHISCHES BIER &amp; LOUNGE",
      "dossier_c1_badge": "WOHNUNG 1",
      "dossier_c1_meta": "180° PANORAMA ÜBER SKIPISTEN &amp; BERGE",
      "dossier_c1_title": "Panorama-Eckwohnung mit Blick auf Skipiste & Berge",
      "dossier_c1_desc": "Unsere geräumigste Ferienwohnung mit großem Eckbalkon und 180°-Panoramablick auf die Skipisten von Bublava und die Kämme des Erzgebirges.",
      "dossier_c1_m1": "<i class=\"fa-solid fa-users\"></i> Bis zu 6 Gäste",
      "dossier_c1_m2": "<i class=\"fa-solid fa-mountain-sun\"></i> Großer Eckbalkon",
      "dossier_c1_m3": "<i class=\"fa-solid fa-snowflake\"></i> Beheiztes Depot #1",
      "dossier_c1_m4": "<i class=\"fa-solid fa-square-parking\"></i> 1x Privatparkplatz",
      "dossier_c2_badge": "WOHNUNG 2",
      "dossier_c2_meta": "BLICK AUF SKIPISTE &amp; BERGE",
      "dossier_c2_title": "Alpen-Balkonwohnung mit Talblick",
      "dossier_c2_desc": "Helle und einladende 2-Zimmer-Wohnung für 4 Personen mit sonnigem Balkon, Rattan-Lounge und malerischem Bergblick.",
      "dossier_c2_m1": "<i class=\"fa-solid fa-users\"></i> 4 Gäste",
      "dossier_c2_m2": "<i class=\"fa-solid fa-mountain-sun\"></i> Eigener Balkon",
      "dossier_c2_m3": "<i class=\"fa-solid fa-snowflake\"></i> Beheiztes Depot #2",
      "dossier_c2_m4": "<i class=\"fa-solid fa-square-parking\"></i> 1x Privatparkplatz",
      "dossier_c3_badge": "WOHNUNG 3",
      "dossier_c3_meta": "OBERSTE ETAGE // HÖCHSTER BERGBLICK",
      "dossier_c3_title": "Dachgeschoss-Wohnung mit Panoramabalkon (Wohnung 3)",
      "dossier_c3_desc": "Charmante Dachgeschoss-Ferienwohnung mit privatem Balkon und dem schönsten Ausblick über das Skigebiet Bublava und die Erzgebirgshöhen.",
      "dossier_c3_m1": "<i class=\"fa-solid fa-users\"></i> 4 Gäste",
      "dossier_c3_m2": "<i class=\"fa-solid fa-mountain-sun\"></i> Panoramabalkon",
      "dossier_c3_m3": "<i class=\"fa-solid fa-snowflake\"></i> Beheiztes Depot #3",
      "dossier_c3_m4": "<i class=\"fa-solid fa-square-parking\"></i> 1x Privatparkplatz",
      "dossier_price_from": "ab 1 800 CZK (ca. 74 €) / Nacht",
      "dossier_plan_btn": "Details & Grundriss",
      "dossier_btn_book": "Buchen",
      "dossier_btn_plan": "Details",
      "about_sub": "ARCHITEKTUR & ALPINER CHARAKTER",
      "about_title": "Harmonie aus Massivholz, Granit und grenzenlosem Licht",
      "about_desc": "Apartmány Panorama verbindet organische Baumaterialien mit großzügigen Panoramafenstern. Jede Wohnung ist so ausgerichtet, dass sie unverbaubare Ausblicke auf die Erzgebirgskämme und absolute akustische Ruhe bietet.",
      "about_bar_1": "Unverbaubarer Panoramablick auf die Gebirgskämme",
      "about_bar_2": "Höchster Schallschutz & absolute Privatsphäre",
      "about_bar_3": "Direkte Nähe zur 4er-Sesselbahn (500 m)",
      "about_cta": "Termine prüfen",
      "apts_sub": "RESIDENZ-LEBENSSTIL & ERLEBNISSE",
      "apts_title": "Mehr als nur Unterkunft. Alpiner Lebensstil in Bublava",
      "apts_desc": "Vom morgendlichen Espresso in der Lobby Bar über den bequemen Pisteneinstieg bis zu hunderten Kilometern Loipen und Wanderwegen. Entdecken Sie das Erzgebirge zu jeder Jahreszeit.",
      "exp1_badge": "Im Haus • Erdgeschoss",
      "exp1_title": "Residenz-Lobby-Bar",
      "exp1_desc": "Kaffeespezialitäten, Abendbar, Kamin & Großbildleinwand für gemeinsame Momente",
      "exp2_badge": "500 m zur Sesselbahn",
      "exp2_title": "Skigebiet Bublava",
      "exp2_desc": "7 Pisten, 4er-Sesselbahn, Flutlicht-Nachtskilauf, Skischule, Verleih & Funpark",
      "exp3_badge": "Direkter Loipeneinstieg",
      "exp3_title": "Kammloipe & Skimagistrale",
      "exp3_desc": "Hunderte Kilometer gespurte Loipen, Anbindung nach Klingenthal & Schöneck",
      "exp4_badge": "Highlights • 5–10 Min.",
      "exp4_title": "Aussichtsturm & Ausflugsziele",
      "exp4_desc": "Aussichtsturm Bleiberg, Vogtland Arena, Raumfahrtausstellung & Naturpark",
      "comfort_sub": "KOMFORT & AUSSTATTUNG",
      "comfort_title": "Alles für Ihren perfekten Bergurlaub",
      "comfort_card_1_title": "Eigene Ski- & Fahrraddepots",
      "comfort_card_1_desc": "Jede unserer Ferienwohnungen verfügt über ein abschließbares privates Depot mit Skischuhtrocknern, Fahrradabstellplatz und E-Bike-Lademöglichkeit.",
      "comfort_card_2_title": "Stilvolle Lobby Bar & TV-Lounge",
      "comfort_card_2_desc": "Gemütliche Lounge im Erdgeschoss für morgendlichen Espresso, Après-Ski-Getränke und abendliche Sportübertragungen auf der Großbildleinwand.",
      "comfort_card_3_title": "Privater Balkon für jedes Apartment",
      "comfort_card_3_desc": "Jede einzelne Ferienwohnung bietet einen eigenen sonnigen Aussichtsbalkon mit Sitzgelegenheiten und unverbaubarem Blick auf Skipisten und Bergwälder.",
      "comfort_card_4_title": "Kostenlose Privatparkplätze",
      "comfort_card_4_desc": "Bequeme private Parkplätze direkt am Haus (keine Reservierung erforderlich). Zu jeder Wohnung gehört 1 reservierter Stellplatz.",
      "comfort_card_5_title": "Kostenloses WLAN & Smart-TV",
      "comfort_card_5_desc": "Zuverlässiges Highspeed-WLAN in allen Wohnungen und Gemeinschaftsbereichen sowie moderner Smart-TV in jedem Zimmer.",
      "comfort_card_6_title": "Check-in 15:00–18:00 & Check-out 11:00",
      "comfort_card_6_desc": "Check-in mit Schlüsselübergabe von 15:00 bis 18:00 Uhr (oder nach persönlicher Absprache) und entspannter Check-out bis 11:00 Uhr.",
      "spotlight_mode_xray_badge": "Röntgen",
      "spotlight_xray_instruction": "SPOTLIGHT RÖNTGEN: BEWEGEN SIE DEN CURSOR FÜR DEN GRUNDRISS",
      "spotlight_close_fp": "Grundriss schließen",
      "spotlight_spec_area_label": "Wohnfläche",
      "spotlight_spec_outdoor_label": "Balkon & Ausblick",
      "spotlight_spec_capacity_label": "Bettenkapazität",
      "spotlight_spec_locker_label": "Ausstattung",
      "spotlight_mode_photo": "Reales Foto",
      "spotlight_mode_floorplan": "3D-Grundriss",
      "spotlight_detail_btn": "Details",
      "spotlight_book_btn": "Jetzt buchen",
      "spotlight_price_from": "Preis ab",
      "spotlight_per_night": "/ Nacht",
      "dossier_thumb_plan": "Grundriss",
      "gallery_sub": "EINDRÜCKE AUS PANORAMA",
      "gallery_title": "Residenz- & Bergbildergalerie",
      "gallery_desc": "Entdecken Sie die modernen Ferienwohnungen, den gemütlichen Lobby-Bereich und die winterliche Berglandschaft von Bublava.",
      "gallery_tab_all": "Alle Momente (20)",
      "gallery_tab_lobby": "Lobby Bar & Lounge (1)",
      "gallery_tab_residence": "Residenz & Außenbereich (3)",
      "gallery_tab_interiors": "Wohnungen & Interieur (13)",
      "gallery_tab_nature": "Berge & Natur (3)",
      "filter_all": "Alle Aufnahmen (20)",
      "filter_lobby": "Lobby Bar & Lounge (1)",
      "filter_residence": "Residenz & Außenbereich (3)",
      "filter_interiors": "Wohnungen & Interieur (13)",
      "filter_nature": "Berge & Natur (3)",
      "gallery_btn_more": "Weitere Fotos anzeigen",
      "gallery_btn_less": "Weniger Fotos anzeigen",
      "gallery_btn_cinema": "Kino-Galerie öffnen (20)",
      "lobby_sub": "GESELLIGES HERZSTÜCK DER RESIDENZ",
      "lobby_title": "Stilvolle Lobby Bar & Gemeinschafts-Lounge",
      "lobby_desc": "Im Erdgeschoss unserer Residenz erwartet Sie eine einladende Lobby Bar mit entspannter Bergatmosphäre. Der ideale Ort für morgendlichen Espresso, Après-Ski-Drinks und gesellige Abende vor der Großbildleinwand.",
      "lobby_badge_tv": "Großbildleinwand & Live-Sport",
      "lobby_badge_coffee": "Kaffeespezialitäten",
      "lobby_f1_title": "Gezapftes Bier & Bar",
      "lobby_f1_desc": "Regionales Fassbier, erlesene Weine und Spirituosen",
      "lobby_f2_title": "Live-Sportübertragungen",
      "lobby_f2_desc": "Großbildleinwand für Skirennen, Fußball und Meisterschaften",
      "lobby_f3_title": "Gemeinschaftsbereich",
      "lobby_f3_desc": "Massivholztische für gemeinsame Stunden in großer Runde",
      "lobby_f4_title": "Après-Ski & Radler-Lounge",
      "lobby_f4_desc": "Gemütliche Entspannung nach einem Tag auf den Pisten oder Loipen",
      "lobby_cta_gallery": "Bildergalerie ansehen",
      "lobby_cta_book": "Aufenthalt buchen",
      "reviews_sub": "ECHTE GÄSTEBEWERTUNGEN",
      "reviews_title": "Erfahrungen unserer Gäste",
      "reviews_desc": "Authentische Bewertungen von Gästen, die ihren Winter- oder Sommerurlaub in den Apartmány Panorama verbracht haben.",
      "reviews_rating_score": "9.8 / 10",
      "reviews_rating_label": "Hervorragende Gästebewertung",
      "testimonial_sub": "GÄSTESTIMMEN",
      "testimonial_title": "Was unsere Gäste sagen",
      "testimonial_desc": "Lesen Sie authentische Erfahrungsberichte von Gästen, die ihren Urlaub bei uns in Bublava verbracht haben.",
      "faq_sub": "WISSENSWERTES VOR DER ANREISE",
      "faq_title": "Häufig gestellte Fragen (FAQ)",
      "faq_desc": "Hier finden Sie alle wichtigen Informationen zur Anreise, Buchung, Skidepot und Ausstattung unserer Ferienwohnungen.",
      "faq_q1_title": "Kostenlose Privatparkplätze",
      "faq_q1": "Ist das Parken kostenlos und ist eine Reservierung erforderlich?",
      "faq_a1": "Kostenlose Privatparkplätze stehen direkt an der Residenz zur Verfügung – eine vorherige Reservierung ist nicht erforderlich. Zu jeder Ferienwohnung gehört 1 garantierter Privatparkplatz direkt am Haus.",
      "faq_q2_title": "Anreise & Abreise (Check-in / Check-out)",
      "faq_q2": "Wie sind die Check-in- und Check-out-Zeiten?",
      "faq_a2": "Der Check-in erfolgt von 15:00 bis 18:00 Uhr (Schlüsselübergabe). Der Check-out am Abreisetag ist bis 11:00 Uhr. Eine frühere Anreise oder spätere Abreise kann bei der Reservierung als Sonderwunsch nach Verfügbarkeit vereinbart werden.",
      "faq_q3_title": "Haustiere willkommen",
      "faq_q3": "Sind Hunde und Haustiere bei Ihnen erlaubt?",
      "faq_a3": "Ja, gut erzogene Haustiere sind nach vorheriger Absprache herzlich willkommen (es kann eine geringe Gebühr für den erhöhten Reinigungsaufwand anfallen). Für Hunde stellen wir gerne Wasser- und Futternäpfe bereit.",
      "faq_q4_title": "Private Badezimmer & Küchenausstattung",
      "faq_q4": "Verfügen die Wohnungen über ein eigenes Bad und wie ist die Küche ausgestattet?",
      "faq_a4": "Ja, alle Ferienwohnungen verfügen über ein eigenes modernes Badezimmer mit Dusche, Haartrockner, WC und frischen Handtüchern. Jedes Apartment bietet zudem eine voll ausgestattete Küchenzeile (Glaskeramik-Kochfeld, Dunstabzugshaube, Mikrowelle, Kaffeemaschine, Wasserkocher, Toaster, Kühlschrank und vollständiges Geschirr) mit Esstisch und Smart-TV.",
      "faq_q5_title": "Kostenloses WLAN im gesamten Haus",
      "faq_q5": "Wie ist der Internet- und WLAN-Zugang geregelt?",
      "faq_a5": "Kostenloses Highspeed-WLAN ist im gesamten Gebäude, in allen Ferienwohnungen sowie in der Lobby Bar für alle Hausgäste uneingeschränkt und ohne Gebühren verfügbar.",
      "faq_q6_title": "Beheizte Ski- & Fahrraddepots",
      "faq_q6": "Wo kann ich meine Skiausrüstung und Fahrräder sicher aufbewahren?",
      "faq_a6": "Direkt im Erdgeschoss verfügt jede Ferienwohnung über ein eigenes, abschließbares und beheiztes Depot mit automatischen Skischuhtrocknern und sicherem Platz für Skier oder Fahrräder inklusive Lademöglichkeit für E-Bikes.",
      "faq_q7_title": "Restaurants & Gastronomie in der Nähe",
      "faq_q7": "Wo kann man in der Umgebung gut essen?",
      "faq_a7": "In Bublava empfehlen wir die beliebten Gasthäuser U Pražáka (600 m), Hostinec U Vichřice (700 m) sowie die Berggaststätte Aschbergschänke an der deutschen Grenze (1,5 km). Ein Lebensmittelgeschäft befindet sich ebenfalls im Ortszentrum.",
      "faq_q8_title": "Direktbuchung & Bestpreisgarantie",
      "faq_q8": "Wo bucht man am günstigsten?",
      "faq_a8": "Die direkte Online-Buchung auf unserer offiziellen Website über das zertifizierte Buchungssystem garantiert den niedrigsten verfügbaren Preis ohne Vermittlungsprovisionen. Sie erhalten eine sofortige Buchungsbestätigung für Ihre gewählte Wohnung.",
      "whole_house_sub": "EXKLUSIVE GRUPPENBUCHUNG",
      "whole_house_title": "Planen Sie einen Urlaub mit Freunden oder Familie?",
      "whole_house_desc": "Buchen Sie unser gesamtes Angebot aus 3 Designer-Ferienwohnungen für bis zu 14 Personen. Genießen Sie 3 private Aussichtsbalkone, beheizte Skidepots mit Schuhtrocknern, Parkplätze und direkten Zugang zur hauseigenen Lobby Bar.",
      "whole_house_btn": "Gruppenaufenthalt anfragen",
      "contact_sub": "RESERVIERUNG & KONTAKT",
      "contact_title": "Kontaktieren Sie uns",
      "contact_desc": "Haben Sie Fragen zu den Wohnungen, Sonderwünsche oder möchten Sie die gesamte Residenz mieten? Wir sind gerne für Sie da.",
      "contact_phone_label": "Telefon",
      "contact_email_label": "E-Mail",
      "contact_address_label": "Adresse",
      "contact_address_val": "Bublava 791, 358 01 Bublava, Tschechische Republik",
      "previo_modal_title": "Online-Buchung",
      "previo_modal_sub": "Direktbuchung • Bestpreisgarantie",
      "previo_modal_note": "Online-Verfügbarkeitsprüfung und Live-Preisberechnung.",
      "previo_summary_title": "Zusammenfassung Ihrer Buchungsanfrage",
      "previo_dates": "Reisezeitraum:",
      "previo_guests": "Gäste:",
      "previo_unit": "Gewählte Wohnung:",
      "previo_placeholder_info": "Hier ist das offizielle Previo-Buchungssystem integriert. Nach Eingabe Ihrer Reisedaten erhalten Sie sofort die Bestätigung zum garantierten Bestpreis.",
      "previo_confirm_btn": "Weiter zur Buchung",
      "previo_calc_label": "Geschätzter Preis:",
      "previo_engine_title": "Offizielles Buchungssystem",
      "previo_engine_desc": "Wählen Sie Ihre Reisedaten und sichern Sie sich Ihren Aufenthalt direkt ohne Vermittlungsgebühren.",
      "previo_guarantee_badge": "Bestpreisgarantie",
      "previo_step_dates": "Reisedaten & Gäste",
      "previo_step_room": "Wohnungsauswahl",
      "previo_step_confirm": "Verbindliche Buchung",
      "previo_secure_ssl": "Sichere SSL-Verbindung",
      "modal_book_previo": "Jetzt buchen",
      "booking_guarantee_text": "Die Direktbuchung über das offizielle Buchungssystem garantiert den günstigsten Preis ohne Vermittlungsgebühren.",
      "video_modal_title": "Videorundgang Apartmány Panorama",
      "video_modal_sub": "4K Ultra HD • Residenz & Ferienwohnungen",
      "video_modal_desc": "Erleben Sie die Atmosphäre unserer exklusiven Ferienwohnungen, modernen Bergarchitektur und alpinen Natur.",
      "video_modal_note": "Der 4K-Videoplayer zeigt Ihnen den authentischen Rundgang durch unsere Residenz.",
      "modal_amenities": "Ausstattung & Komfort",
      "modal_price_from": "Preis ab",
      "modal_per_night": "/ Nacht",
      "modal_best_price": "Bestpreisgarantie",
      "modal_close_aria": "Wohnungsdetails schließen",
      "modal_strip_checkin": "Check-in: 15:00–18:00",
      "modal_strip_checkout": "Check-out: bis 11:00",
      "modal_strip_parking": "Kostenloses Parken",
      "modal_strip_pets": "Haustiere willkommen",
      "modal_view_floorplan": "3D-Grundriss",
      "modal_view_photo": "Fotografien",
      "footer_desc": "Exklusive Bergunterkunft, die alpinen Komfort, hochwertige Ausstattung und atemberaubende Panoramablicke verbindet.",
      "footer_address": "Bublava 791",
      "footer_phone": "+420 777 366 239",
      "footer_email": "info@apartmany-panorama.cz",
      "footer_guide_title": "Reiseführer &amp; Berglebensstil",
      "footer_link_ski": "Skigebiet Bublava (500 m entfernt)",
      "footer_link_magistrala": "Kammloipe &amp; Skimagistrale",
      "footer_link_trips": "Aussichtsturm Bleiberg &amp; Ausflüge",
      "footer_link_bar": "Residenz-Lobby-Bar &amp; Lounge",
      "footer_quick_title": "Wichtige Gäste-Informationen",
      "footer_quick_info": "<i class=\"fa-solid fa-check text-warning me-2\"></i>Check-in: 15:00 – 18:00 • Check-out: bis 11:00<br><i class=\"fa-solid fa-check text-warning me-2\"></i>Kostenloses privates Parken direkt an der Residenz<br><i class=\"fa-solid fa-check text-warning me-2\"></i>Kostenloses Highspeed-WLAN im gesamten Haus<br><i class=\"fa-solid fa-check text-warning me-2\"></i>Haustiere nach vorheriger Absprache willkommen",
      "footer_direct_title": "Direktbuchung &amp; Bestpreisgarantie",
      "footer_direct_desc": "Buchen Sie direkt über das offizielle Buchungssystem ohne Vermittlungsgebühren zum garantiert günstigsten Preis.",
      "footer_direct_btn": "Online buchen",
      "footer_sub_apts": "Wohnungen &amp; Grundrisse",
      "footer_sub_gallery": "Bildergalerie",
      "footer_sub_faq": "Infos &amp; FAQ",
      "footer_sub_cookies": "Cookie-Einstellungen",
      "footer_copy": "© 2026 Apartmány Panorama Bublava. Alle Rechte vorbehalten.",
      "footer_copy_tag": "Exklusive Ferienwohnungen direkt an der Skipiste im Erzgebirge."
  }
};

const panoramaReviewsData = [
  {
    badgeCs: "Apartmán 1", badgeEn: "Suite 1", badgeDe: "Ferienwohnung 1",
    quoteCs: "„Naprosto výjimečné místo. Výhled na zasněžené sjezdovky přímo z rohového balkonu byl parádní. Dokonalý klid, moderní interiér a vlek doslova pár kroků od domu.“",
    quoteEn: "“An absolutely exceptional destination. The view of snow-covered slopes straight from the corner balcony was magnificent. Absolute tranquility, contemporary interior, and the ski lift literally a few steps from the house.”",
    quoteDe: "„Ein absolut außergewöhnlicher Ort. Der Blick auf die verschneiten Pisten direkt vom Eckbalkon war großartig. Vollkommene Ruhe, modernes Interieur und der Skilift buchstäblich nur ein paar Schritte vom Haus entfernt.“",
    authorCs: "Ing. Tomáš Dvořák", authorEn: "Ing. Tomáš Dvořák", authorDe: "Ing. Tomáš Dvořák",
    stayCs: "Praha • Pobyt: únor 2026", stayEn: "Prague • Stay: February 2026", stayDe: "Prag • Aufenthalt: Februar 2026"
  },
  {
    badgeCs: "Apartmán 2", badgeEn: "Suite 2", badgeDe: "Ferienwohnung 2",
    quoteCs: "„Byli jsme nadšeni jižním balkonem s výhledem, podlahovým vytápěním a prostornou moderní koupelnou. Po celém dni na svahu je to skvělý relax. Určitě se vrátíme i v létě na elektrokola a hřebenovky.“",
    quoteEn: "“We were thrilled by the south-facing scenic balcony, cozy underfloor heating, and expansive modern bathroom. Supreme relaxation after a day on the slopes. We will definitely return in summer for e-biking and ridge trails.”",
    quoteDe: "„Wir waren begeistert vom Südbalkon mit Aussicht, der Fußbodenheizung und der geräumigen modernen Küche. Die beheizte Skibox mit Skischuhtrocknern im Erdgeschoss ist der pure Luxus nach einem Tag auf der Piste.“",
    authorCs: "MUDr. Klára & Jan Sýkorovi", authorEn: "Dr. Klára & Jan Sýkora", authorDe: "Dr. Klára & Jan Sýkora",
    stayCs: "Brno • Pobyt: únor 2026", stayEn: "Brno • Stay: February 2026", stayDe: "Brünn • Aufenthalt: Februar 2026"
  },
  {
    badgeCs: "Apartmán 3", badgeEn: "Suite 3", badgeDe: "Ferienwohnung 3",
    quoteCs: "„Jako architekt oceňuji precizní práci s přírodními materiály. Masivní dub, žula a velkoformátová okna. Špičková akustická izolace mezi apartmány – absolutní ticho a soukromí.“",
    quoteEn: "“As an architect, I appreciate the craftsmanship with natural materials. Solid oak, granite, and oversized panoramic glazing. Superb acoustic soundproofing between suites – complete silence and seclusion.”",
    quoteDe: "„Architektonisch bis ins kleinste Detail durchdacht. Die Dachwohnung hat eine wunderbare Atmosphäre, erstklassige Akustik und der Blick über die Kämme des Erzgebirges ist atemberaubend.“",
    authorCs: "Ing. arch. David Mareš", authorEn: "David Mareš, Architect", authorDe: "Dipl.-Arch. David Mareš",
    stayCs: "Liberec • Pobyt: leden 2026", stayEn: "Liberec • Stay: January 2026", stayDe: "Reichenberg • Aufenthalt: Januar 2026"
  },
  {
    badgeCs: "Celá Rezidence", badgeEn: "Full Buyout", badgeDe: "Gesamte Residenz",
    quoteCs: "„Pronajali jsme si celou rezidenci pro 3 spřátelené rodiny (celkem 12 osob). Společenský prostor v přízemí i soukromí tří samostatných apartmánů předčily očekávání. Vyhřívaná lyžárna a sušáky na boty jsou neocenitelné.“",
    quoteEn: "“We booked the entire residence buyout for 3 friendly families (12 guests in total). The ground-floor social lounge and the privacy of three self-contained suites exceeded all expectations. Heated ski lockers and boot dryers are invaluable.”",
    quoteDe: "„Wir haben alle 3 Wohnungen über Silvester mit befreundeten Familien gemietet. Es war der beste Winterurlaub: 14 Betten, jeder hatte seine Privatsphäre und abends trafen wir uns alle in der Lobby Bar. Absolute Empfehlung!“",
    authorCs: "Petra Horáková s rodinou", authorEn: "Petra Horáková with family", authorDe: "Familie Petra Horáková",
    stayCs: "Hradec Králové • Silvestr 2025/26", stayEn: "Hradec Králové • New Year’s Eve 2025/26", stayDe: "Königgrätz • Silvester 2025/26"
  },
  {
    badgeCs: "Apartmán 3", badgeEn: "Suite 3", badgeDe: "Ferienwohnung 3",
    quoteCs: "„Skvělé ubytování přímo u sjezdovky. Děti vyběhly na svah za dvě minuty a vyhřívané sušáky na lyžáky v kójích fungovaly perfektně. Rychlé Wi-Fi připojení a klidné spaní.“",
    quoteEn: "“Fantastic accommodation directly beside the piste. The kids ran to the slope in two minutes, and the heated boot warmers in the lockers worked flawlessly. Fast Wi-Fi and peaceful sleep.”",
    quoteDe: "„Traumhaftes Skifahren direkt vor der Haustür und herrlich ruhige Nächte im Dachgeschoss. Wir kommen nächsten Winter garantiert wieder nach Bublava!“",
    authorCs: "Michael & Sophie Bergmann", authorEn: "Michael & Sophie Bergmann", authorDe: "Michael & Sophie Bergmann",
    stayCs: "Wien • Pobyt: březen 2026", stayEn: "Vienna • Stay: March 2026", stayDe: "Wien • Aufenthalt: März 2026"
  },
  {
    badgeCs: "Apartmán 1", badgeEn: "Suite 1", badgeDe: "Ferienwohnung 1",
    quoteCs: "„Pobyt s rodinou a přáteli. Ocenili jsme velký rohový balkon s výhledem přímo na sjezdovku, čepované pivo v Lobby Baru a bezproblémové parkování přímo u domu.“",
    quoteEn: "“A wonderful stay with family and friends. We loved the large corner balcony directly overlooking the ski slopes, draft beer in the Lobby Bar, and seamless on-site parking.”",
    quoteDe: "„Ideal für Workation und aktiven Sport. Zuverlässiges schnelles WLAN, bequemer Arbeitstisch und in den Pausen direkt auf die Piste oder in die Loipe. Die Abende in der Lobby Bar waren ein tolles Extra.“",
    authorCs: "Radek Černý, IT Director", authorEn: "Radek Černý, IT Director", authorDe: "Radek Černý, IT-Director",
    stayCs: "Ostrava • Pobyt: únor 2026", stayEn: "Ostrava • Stay: February 2026", stayDe: "Ostrau • Aufenthalt: Februar 2026"
  },
  {
    badgeCs: "Apartmán 2", badgeEn: "Suite 2", badgeDe: "Ferienwohnung 2",
    quoteCs: "„Skutečný ski-in / ski-out komfort. Ráno nazujete lyže hned u rezidence a odpoledne sjedete přímo k domu. Velké plus za bezplatné soukromé parkování hned u domu a vyhřívanou lyžárnu.“",
    quoteEn: "“Genuine ski-in / ski-out convenience. Click into your skis right beside the residence in the morning and ski straight back home in the afternoon. Huge bonus for free private on-site parking and heated ski room.”",
    quoteDe: "„Sehr sauber, gemütlich und warm. Die Kinder liebten die Nähe zur Skischule und wir den morgendlichen Kaffee auf dem sonnigen Balkon mit Blick auf den Sessellift.“",
    authorCs: "Veronika & Filip Trojanovi", authorEn: "Veronika & Filip Trojan", authorDe: "Veronika & Filip Trojan",
    stayCs: "České Budějovice • prosinec 2025", stayEn: "České Budějovice • December 2025", stayDe: "Budweis • Dezember 2025"
  },
  {
    badgeCs: "Apartmán 3", badgeEn: "Suite 3", badgeDe: "Ferienwohnung 3",
    quoteCs: "„Apartmán v podkroví má skvělou atmosféru s dřevěnými trámy. Kuchyně je kompletně vybavená včetně myčky a kávovaru. Ranní káva na vyhlídkovém balkoně s výhledem na hory neměla chybu.“",
    quoteEn: "“The top-floor attic apartment has an enchanting ambiance with exposed timber beams. The kitchen is fully equipped with dishwasher and espresso machine. Morning coffee on the scenic balcony overlooking the peaks was unforgettable.”",
    quoteDe: "„Die Loipen der Kammloipe sind in unmittelbarer Reichweite. Das Skidepot mit Trocknern funktioniert einwandfrei. Perfekter Ausgangspunkt für Skilangläufer.“",
    authorCs: "Jakub Král", authorEn: "Jakub Král", authorDe: "Jakub Král",
    stayCs: "Pardubice • Pobyt: leden 2026", stayEn: "Pardubice • Stay: January 2026", stayDe: "Pardubitz • Aufenthalt: Januar 2026"
  },
  {
    badgeCs: "Apartmán 2", badgeEn: "Suite 2", badgeDe: "Ferienwohnung 2",
    quoteCs: "„Nádherný podzimní relax v tichu přírody. Vysoké kvalitní matrace a čisté lůžkoviny nám dopřály skvělý spánek. Všude vzorná čistota a klid Krušných hor.“",
    quoteEn: "“Splendid autumn relaxation enveloped by peaceful nature. Premium mattresses and fresh linens gave us deep, restorative sleep. Impeccable cleanliness and serene Ore Mountain tranquility throughout.”",
    quoteDe: "„Auch im Herbst ein fantastischer Aufenthalt. Farbenfrohe Wälder des Erzgebirges, Ruhe, ausgedehnte Wanderungen zur Aussicht Bleiberg und anschließend ein Glas mährischer Wein an der Bar.“",
    authorCs: "Hana Blažková", authorEn: "Hana Blažková", authorDe: "Hana Blažková",
    stayCs: "Olomouc • Pobyt: podzim 2025", stayEn: "Olomouc • Stay: Autumn 2025", stayDe: "Olmütz • Aufenthalt: Herbst 2025"
  },
  {
    badgeCs: "Apartmán 2", badgeEn: "Suite 2", badgeDe: "Ferienwohnung 2",
    quoteCs: "„Oceňujeme skvěle vybavenou kuchyň s kávovarem a myčkou, čistotu a bezproblémovou komunikaci. Večerní posezení na balkoně pod hvězdnou oblohou s výhledem do údolí bylo skvělé.“",
    quoteEn: "“We appreciated the well-equipped kitchen with coffee maker and dishwasher, flawless cleanliness, and warm host communication. Evening sitting on the balcony beneath starry skies overlooking the valley was pure bliss.”",
    quoteDe: "„Hervorragendes Preis-Leistungs-Verhältnis. Direktbuchung über die Website funktionierte reibungslos und die Parkplätze direkt vor der Haustür sind im Winter goldwert.“",
    authorCs: "Martin & Andrea Vlčkovi", authorEn: "Martin & Andrea Vlček", authorDe: "Martin & Andrea Vlček",
    stayCs: "Plzeň • Pobyt: leden 2026", stayEn: "Pilsen • Stay: January 2026", stayDe: "Pilsen • Aufenthalt: Januar 2026"
  },
  {
    badgeCs: "Apartmán 1", badgeEn: "Suite 1", badgeDe: "Ferienwohnung 1",
    quoteCs: "„Apartmán 1 má nádherný velký rohový balkon s přímým výhledem na celou sjezdovku. Plně vybavená kuchyň, pohodlné postele a perfektní čistota. Rozhodně doporučujeme.“",
    quoteEn: "“Apartment 1 features a magnificent wrap-around balcony with uninterrupted views over the entire ski area. Fully outfitted kitchen, comfortable beds, and pristine cleanliness. Highly recommended.”",
    quoteDe: "„Wohnung 1 hat einen wunderschönen großen Eckbalkon mit direktem Blick auf das gesamte Skigebiet. Voll ausgestattete Küche, bequeme Betten und makellose Sauberkeit. Sehr zu empfehlen.“",
    authorCs: "Kateřina Novotná", authorEn: "Kateřina Novotná", authorDe: "Kateřina Novotná",
    stayCs: "Praha • Pobyt: březen 2026", stayEn: "Prague • Stay: March 2026", stayDe: "Prag • Aufenthalt: März 2026"
  }
];

function updateReviewsLanguage(lang) {
  const isEn = lang === 'en';
  const isDe = lang === 'de';
  document.querySelectorAll('.floating-review-card').forEach((card, idx) => {
    const rev = panoramaReviewsData[idx % panoramaReviewsData.length];
    if (!rev) return;
    const badge = card.querySelector('.review-badge');
    const quote = card.querySelector('.review-quote');
    const author = card.querySelector('.review-author-info .review-author-name') || card.querySelector('.review-author-name');
    const stay = card.querySelector('.review-author-info .review-stay-info') || card.querySelector('.review-stay-info');
    if (badge) badge.textContent = isDe ? (rev.badgeDe || rev.badgeEn) : isEn ? rev.badgeEn : rev.badgeCs;
    if (quote) quote.textContent = isDe ? (rev.quoteDe || rev.quoteEn) : isEn ? rev.quoteEn : rev.quoteCs;
    if (author) author.textContent = isDe ? (rev.authorDe || rev.authorEn) : isEn ? rev.authorEn : rev.authorCs;
    if (stay) stay.textContent = isDe ? (rev.stayDe || rev.stayEn) : isEn ? rev.stayEn : rev.stayCs;
  });
}

function updateSpotlightSelectLanguage(lang) {
  const select = document.getElementById('spotlight-apt-select');
  if (!select) return;
  const isEn = lang === 'en';
  const isDe = lang === 'de';
  const opt1 = select.querySelector('option[value="1"]');
  const opt2 = select.querySelector('option[value="2"]');
  const opt3 = select.querySelector('option[value="3"]');
  const optAll = select.querySelector('option[value="all"]');
  if (opt1) opt1.textContent = isDe ? 'Wohnung 1: Panorama-Eckwohnung mit Balkon (bis zu 6 Gäste)' : isEn ? 'Apartment 1: Panoramic Corner Suite with Balcony (up to 6 guests)' : 'Apartmán 1: Panoramatický rohový apartmán s balkonem (až 6 hostů)';
  if (opt2) opt2.textContent = isDe ? 'Wohnung 2: Alpen-Balkonwohnung (4 Gäste)' : isEn ? 'Apartment 2: Mountain Balcony Suite (4 guests)' : 'Apartmán 2: Horský apartmán s privátním balkonem (4 hosté)';
  if (opt3) opt3.textContent = isDe ? 'Wohnung 3: Dachgeschoss-Wohnung mit Ausblick (4 Gäste)' : isEn ? 'Apartment 3: Attic View Suite (4 guests)' : 'Apartmán 3: Podkrovní apartmán s vyhlídkovým balkonem (4 hosté)';
  if (optAll) optAll.textContent = isDe ? 'Alle 3 Wohnungen: Exklusive Residenz-Gruppenbuchung (bis zu 14 Gäste)' : isEn ? 'All 3 Suites: Exclusive Group Buyout (up to 14 guests)' : 'Všechny 3 apartmány: Exkluzivní skupinový pobyt (až 14 hostů)';
}

let currentLang = 'cs';
let currentAptModalId = null;
let currentModalView = 'floorplan';
let currentModalPhotoIndex = 0;
let currentGalleryIndex = 0;
let currentSpotlightUnitId = '1';

// Alpine Calendar State & Localization Arrays
let calCheckinDate = null;
let calCheckoutDate = null;
const _calInitNow = new Date();
let calViewDate = new Date(_calInitNow.getFullYear(), _calInitNow.getMonth(), 1);
let calActiveStage = 'checkin';
let calActiveSource = 'hero';

const calMonthNamesCS = ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'];
const calMonthNamesEN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const calMonthNamesDE = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
const calDaysShortCS = ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'];
const calDaysShortEN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const calDaysShortDE = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];

function setLanguage(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  try {
    localStorage.setItem('panorama_lang', lang);
    window.dispatchEvent(new CustomEvent('panorama_lang_changed', { detail: lang }));
  } catch (e) {}
  if (currentAptModalId && document.getElementById('apt-detail-modal')?.classList.contains('active')) {
    openAptDetailModal(currentAptModalId);
  }

  // Synchronize all /rezervace links with the active language
  document.querySelectorAll('a[href^="/rezervace"]').forEach(a => {
    try {
      const url = new URL(a.href, window.location.origin);
      url.searchParams.set('lang', lang);
      a.href = url.pathname + url.search;
    } catch (e) {}
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) {
      // Clean up any previous SplitText instance before replacing text
      if (el._splitInstance) {
        try {
          el._splitInstance.revert();
        } catch (e) {}
        el._splitInstance = null;
      }
      if (el._titleTl) {
        try {
          el._titleTl.kill();
        } catch (e) {}
        el._titleTl = null;
      }

      if (i18n[lang][key].includes('<') || i18n[lang][key].includes('&')) {
        el.innerHTML = i18n[lang][key];
      } else {
        el.textContent = i18n[lang][key];
      }
    }
  });

  // Dynamically swap rotating video tour badge image
  const videoBadge = document.getElementById('hero-video-badge');
  if (videoBadge) {
    videoBadge.src = lang === 'en' ? 'assets/images/template/video-badge-en.svg' : 'assets/images/template/video-badge.svg';
  }

  // Live refresh calendar and booking bar pricing when language changes
  if (typeof renderAlpineCalendar === 'function') {
    renderAlpineCalendar();
  }
  if (typeof updateCalendarFooterHint === 'function') {
    updateCalendarFooterHint();
  }

  // Live update photo gallery cards & lightbox if open
  if (typeof updateGalleryCardsLanguage === 'function') {
    updateGalleryCardsLanguage(lang);
  }
  if (typeof updateGalleryExpandButtonText === 'function') {
    updateGalleryExpandButtonText(lang);
  }
  if (document.getElementById('panorama-lightbox')?.classList.contains('active')) {
    setPanoramaImage(currentGalleryIndex);
  }

  // Live update reviews marquee track in selected language
  if (typeof updateReviewsLanguage === 'function') {
    updateReviewsLanguage(lang);
  }

  // Update spotlight select dropdown options in selected language
  if (typeof updateSpotlightSelectLanguage === 'function') {
    updateSpotlightSelectLanguage(lang);
  }

  // Update spotlight interactive badges/texts
  const xrayBadge = document.getElementById('mode-badge-xray');
  if (xrayBadge) xrayBadge.textContent = (lang === 'de') ? 'Röntgen' : (lang === 'en') ? 'X-Ray' : 'Rentgen';

  const instrText = document.getElementById('spotlight-instruction-text');
  if (instrText) {
    instrText.textContent = (lang === 'de') ?
      'SPOTLIGHT RÖNTGEN: BEWEGEN SIE DEN CURSOR FÜR DEN GRUNDRISS' :
      (lang === 'en') ?
      'SPOTLIGHT X-RAY: MOVE CURSOR TO REVEAL FLOORPLAN X-RAY' :
      'SPOTLIGHT X-RAY: POHYBUJTE KURZOREM PRO RENTGEN PŮDORYSU';
  }

  const closeFpBtn = document.querySelector('.spotlight-floorplan-close-btn span');
  if (closeFpBtn) {
    closeFpBtn.textContent = (lang === 'de') ? 'Grundriss schließen' : (lang === 'en') ? 'Close floorplan' : 'Zavřít půdorys';
  }

  // Update hero scene caption
  if (typeof updateHeroSceneDisplay === 'function') {
    updateHeroSceneDisplay();
  }

  // Re-render Spotlight Unit content in selected language
  if (typeof switchSpotlightUnit === 'function' && typeof currentSpotlightUnitId !== 'undefined') {
    switchSpotlightUnit(currentSpotlightUnitId);
  }

  // Re-render live booking bar pricing text
  if (typeof updateBookingBarPricing === 'function') {
    updateBookingBarPricing();
  }
  // Live update apartment dropdown selected text based on current value and language
  const aptSelect = document.getElementById('book-apartment');
  const selectedVal = aptSelect ? aptSelect.value : '';
  const heroAptText = document.getElementById('apt-dropdown-selected');
  const pinnedAptText = document.getElementById('pinned-apt-selected');
  const mobileAptText = document.getElementById('pinned-mobile-apt-text');

  if (heroAptText || pinnedAptText || mobileAptText) {
    let fullTitle = '';
    let mobTitle = '';
    if (!selectedVal) {
      fullTitle = (lang === 'de') ? 'Wohnung wählen' : (lang === 'en') ? 'Select room / suite' : 'Zvolit pokoj';
      mobTitle = (lang === 'de') ? 'Wohnung wählen' : (lang === 'en') ? 'Select room' : 'Zvolit pokoj';
    } else if (selectedVal === '1' || selectedVal === '6') {
      fullTitle = (lang === 'de') ? 'Wohnung 1 (Panoramablick)' : (lang === 'en') ? 'Apartment 1 (Panoramic)' : 'Apartmán 1 (Panoramatický)';
      mobTitle = (lang === 'de') ? 'Whg 1' : (lang === 'en') ? 'Apt 1' : 'Apartmán 1';
    } else if (selectedVal === '2' || selectedVal === '5') {
      fullTitle = (lang === 'de') ? 'Wohnung 2 (Bergblick)' : (lang === 'en') ? 'Apartment 2 (Mountain)' : 'Apartmán 2 (Horský)';
      mobTitle = (lang === 'de') ? 'Whg 2' : (lang === 'en') ? 'Apt 2' : 'Apartmán 2';
    } else if (selectedVal === '3' || selectedVal === '10') {
      fullTitle = (lang === 'de') ? 'Wohnung 3 (Dachgeschoss)' : (lang === 'en') ? 'Apartment 3 (Attic)' : 'Apartmán 3 (Podkrovní)';
      mobTitle = (lang === 'de') ? 'Whg 3' : (lang === 'en') ? 'Apt 3' : 'Apartmán 3';
    }
    if (heroAptText) heroAptText.textContent = fullTitle;
    if (pinnedAptText) pinnedAptText.textContent = fullTitle;
    if (mobileAptText) mobileAptText.textContent = mobTitle;
  }

  // Re-render Previo modal engine if open
  if (document.getElementById('previo-modal')?.classList.contains('active') && typeof renderPrevioEngine === 'function') {
    renderPrevioEngine();
  }

  // Re-split and re-animate section headings in active language
  if (typeof initPanoramaTitleAnimations === 'function') {
    initPanoramaTitleAnimations(true);
  }
}

window.setLanguage = setLanguage;
window.addEventListener('panorama_lang_changed', (e) => {
  if (e && e.detail && (e.detail === 'cs' || e.detail === 'en' || e.detail === 'de') && e.detail !== currentLang) {
    setLanguage(e.detail);
  }
});

// Previo Integration Configuration & State
window.PREVIO_CONFIG = {
  // Oficiální Previo Hotel ID pro Apartmány Panorama Bublava (794997)
  hotelId: '794997',
  lang: 'cs',
  currency: 'CZK'
};
try {
  localStorage.setItem('panorama_previo_hotel_id', '794997');
} catch (e) {}

function savePrevioHotelId(id) {
  if (!id) return;
  const cleanId = String(id).trim();
  localStorage.setItem('panorama_previo_hotel_id', cleanId);
  window.PREVIO_CONFIG.hotelId = cleanId;
  renderPrevioEngine();
}

function getPrevioUrl(inDate, outDate) {
  const hotId = window.PREVIO_CONFIG.hotelId || '794997';
  const l = (typeof currentLang !== 'undefined' && currentLang === 'de') ? 'de' : (typeof currentLang !== 'undefined' && currentLang === 'en') ? 'en' : 'cs';
  let dateQuery = '';
  if (inDate && outDate) {
    const pad = (n) => String(n).padStart(2, '0');
    const arr = `${pad(inDate.getDate())}.${pad(inDate.getMonth() + 1)}.${inDate.getFullYear()}`;
    const dep = `${pad(outDate.getDate())}.${pad(outDate.getMonth() + 1)}.${outDate.getFullYear()}`;
    dateQuery = `&arrival=${arr}&departure=${dep}`;
  }
  return `https://booking.previo.cz/?hotId=${hotId}${dateQuery}&lang=${l}&currency=CZK&showTabs=reservation`;
}

function renderPrevioEngine() {
  const container = document.getElementById('previo-engine-dynamic-content');
  if (!container) return;

  const inDate = (typeof calCheckinDate !== 'undefined' && calCheckinDate) ? calCheckinDate : null;
  const outDate = (typeof calCheckoutDate !== 'undefined' && calCheckoutDate) ? calCheckoutDate : null;
  const pad = (n) => String(n).padStart(2, '0');
  const arrStr = inDate ? `${pad(inDate.getDate())}.${pad(inDate.getMonth() + 1)}.${inDate.getFullYear()}` : 'Zvolit';
  const depStr = outDate ? `${pad(outDate.getDate())}.${pad(outDate.getMonth() + 1)}.${outDate.getFullYear()}` : 'Zvolit';

  if (window.PREVIO_CONFIG.hotelId) {
    // Live Previo Iframe with dates if selected
    const url = getPrevioUrl(inDate, outDate);
    const isEnMode = (typeof currentLang !== 'undefined' && currentLang === 'en');
    const isDeMode = (typeof currentLang !== 'undefined' && currentLang === 'de');
    let dateNotice = '';
    if (inDate && outDate) {
      dateNotice = isDeMode ?
        `<i class="fa-solid fa-circle-check text-success me-1"></i> Termin ausgewählt für Aufenthalt <strong>${arrStr} – ${depStr}</strong>` :
        isEnMode ?
        `<i class="fa-solid fa-circle-check text-success me-1"></i> Dates selected for stay <strong>${arrStr} – ${depStr}</strong>` :
        `<i class="fa-solid fa-circle-check text-success me-1"></i> Termín pobytu vybrán <strong>${arrStr} – ${depStr}</strong>`;
    } else {
      dateNotice = isDeMode ?
        `<i class="fa-solid fa-calendar text-warning me-1"></i> Buchungssystem bereit für Terminauswahl` :
        isEnMode ?
        `<i class="fa-solid fa-calendar text-warning me-1"></i> Booking system ready for dates and room selection` :
        `<i class="fa-solid fa-calendar text-warning me-1"></i> Rezervační systém připraven k výběru termínu`;
    }
    const iframeTitle = isDeMode ? 'Buchungssystem' : (isEnMode ? 'Booking System' : 'Rezervační systém');
    container.innerHTML = `
      <div class="mb-2 text-start small text-white-50">
        ${dateNotice}
      </div>
      <iframe src="${url}" class="previo-live-iframe" title="${iframeTitle}" loading="lazy"></iframe>
    `;
    const btn = document.getElementById('previo-main-action-btn');
    if (btn) {
      btn.innerHTML = isDeMode ?
        `<span>Buchung im Vollbild öffnen</span> <i class="fa-sharp fa-solid fa-arrow-up-right ms-2"></i>` :
        isEnMode ?
        `<span>Open Booking in Fullscreen</span> <i class="fa-sharp fa-solid fa-arrow-up-right ms-2"></i>` :
        `<span>Otevřít rezervaci na celou obrazovku</span> <i class="fa-sharp fa-solid fa-arrow-up-right ms-2"></i>`;
    }
  } else {
    // Setup / guidance view when Hotel ID is pending
    container.innerHTML = `
      <p class="text-start text-white mb-2" style="font-size: 13.5px;">
        <i class="fa-solid fa-calendar-check text-warning me-2"></i><strong>Kalendář připraven k propojení:</strong> termín <strong>${arrStr} → ${depStr}</strong>
      </p>
      <p class="text-start text-secondary small mb-3">
        Jakmile obdržíte své <strong>Previo Hotel ID</strong> z administrace Previo (Nastavení &gt; Web &gt; Rezervační formulář), vložte jej do pole níže pro okamžité otestování, nebo jej natrvalo uložte do <code>assets/js/panorama.js</code>.
      </p>
      <div class="previo-id-prompt-box text-start mb-3">
        <label class="text-white-50 small d-block mb-1">Zadejte vaše Previo Hotel ID (např. 123456):</label>
        <div class="d-flex gap-2">
          <input type="text" id="previo-temp-id-input" class="previo-id-input" placeholder="např. 123456">
          <button type="button" class="btn btn--primary py-1 px-3" style="font-size: 12px; white-space: nowrap;" onclick="const val = document.getElementById('previo-temp-id-input').value; if(val){ savePrevioHotelId(val); } else { alert('Prosím zadejte číslo Hotel ID'); }">
            Uložit a načíst
          </button>
        </div>
      </div>
      <div class="previo-code-block text-start mb-0" style="font-size: 11px;">
        Parametry pro přenos termínu z kalendáře:<br>
        <code>https://booking.previo.cz/?hotId=VASE_ID&arrival=${arrStr}&departure=${depStr}&lang=cs&currency=CZK</code>
      </div>
    `;
  }
}

function executePrevioBooking() {
  const activeLang = currentLang || localStorage.getItem('panorama_lang') || 'cs';
  window.location.href = '/rezervace?lang=' + activeLang;
}

function openPrevioModal(aptName = '') {
  let aptParam = '';
  const nameStr = String(aptName || '').toLowerCase();

  if (nameStr.includes('všechny') || nameStr.includes('skupin') || nameStr.includes('all')) {
    aptParam = 'all';
  } else if (nameStr.includes('3') || nameStr.includes('podkrovn')) {
    aptParam = '3';
  } else if (nameStr.includes('2') || nameStr.includes('horsk') || nameStr.includes('balkon')) {
    aptParam = '2';
  } else if (nameStr.includes('1') || nameStr.includes('rohov')) {
    aptParam = '1';
  } else {
    const aptSelect = document.getElementById('book-apartment');
    const val = aptSelect?.value;
    if (val === '2' || val === '5') aptParam = '2';
    else if (val === '3' || val === '10') aptParam = '3';
    else if (val === '1' || val === '6') aptParam = '1';
    else if (val === 'all') aptParam = 'all';
    else aptParam = '';
  }

  const checkinInput = document.getElementById('book-checkin');
  const checkoutInput = document.getElementById('book-checkout');
  const checkin = checkinInput?.value || '';
  const checkout = checkoutInput?.value || '';

  const params = new URLSearchParams();
  if (aptParam) params.set('apt', aptParam);
  if (checkin) params.set('checkin', checkin);
  if (checkout) params.set('checkout', checkout);
  params.set('lang', currentLang || localStorage.getItem('panorama_lang') || 'cs');

  const queryStr = params.toString() ? '?' + params.toString() : '';
  window.location.href = '/rezervace' + queryStr;
}

function closePrevioModal() {
  // Graceful no-op in case called anywhere
}

function openVideoModal(e) {
  if (e) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
  }
  // Ensure any rogue popup is closed
  if (window.jQuery && window.jQuery.magnificPopup) {
    window.jQuery.magnificPopup.close();
  }
  const modal = document.getElementById('video-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeVideoModal() {
  const modal = document.getElementById('video-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    const iframe = document.getElementById('video-tour-iframe');
    if (iframe) {
      const s = iframe.src;
      iframe.src = s;
    }
  }
  // Dismiss any lingering Magnific Popup iframe instance completely
  if (window.jQuery && window.jQuery.magnificPopup) {
    window.jQuery.magnificPopup.close();
  }
}

const apartmentDetails = {
  1: {
    unitCode: 'Apartmán 1',
    floor: '2. patro',
    floorCs: '2. patro',
    floorEn: '2nd Floor',
    floorDe: '2. Etage',
    totalArea: '47 m²',
    innerArea: '42 m²',
    outdoorArea: 'Rohový balkon s 180° výhledem',
    outdoorAreaCs: 'Rohový balkon s 180° výhledem',
    outdoorAreaEn: 'Corner balcony with 180° view',
    outdoorAreaDe: 'Eckbalkon mit 180°-Panoramablick',
    lockerId: 'Kóje #1 se sušáky',
    lockerIdCs: 'Kóje #1 se sušáky',
    lockerIdEn: 'Ski locker #1 with boot dryers',
    lockerIdDe: 'Skidepot #1 mit Schuhtrocknern',
    img: '/assets/images/web/apt-living-room-panoramic.jpg',
    floorplan: '/assets/images/apartments/apt-06-3d-floorplan.jpg',
    blueprint: '/assets/images/blueprints/apt-06-cad-blueprint.jpg',
    photos: [
      { src: '/assets/images/web/apt-real-balcony-winter.jpg', titleCs: '180° zimní výhled na sjezdovku z balkonu', titleEn: '180° Winter Balcony View on Ski Slope', titleDe: '180°-Winterblick vom Balkon auf die Piste', thumb: '/assets/images/web/apt-real-balcony-winter.jpg' },
      { src: '/assets/images/web/apt-real-living-rocking-chair.jpg', titleCs: 'Obývací pokoj s houpacím křeslem', titleEn: 'Living Room with Rocking Chair', titleDe: 'Wohnzimmer mit Schaukelstuhl', thumb: '/assets/images/web/apt-real-living-rocking-chair.jpg' },
      { src: '/assets/images/web/apt-real-kitchen-dining.jpg', titleCs: 'Vybavená kuchyně & jídelní stůl', titleEn: 'Fully Equipped Kitchen & Dining Table', titleDe: 'Ausgestattete Küche mit Esstisch', thumb: '/assets/images/web/apt-real-kitchen-dining.jpg' },
      { src: '/assets/images/web/apt-real-bedroom-bed.jpg', titleCs: 'Klidná ložnice s manželskou postelí', titleEn: 'Master Bedroom with Double Bed', titleDe: 'Schlafzimmer mit Doppelbett', thumb: '/assets/images/web/apt-real-bedroom-bed.jpg' },
      { src: '/assets/images/web/apt-real-bathroom-shower.jpg', titleCs: 'Moderní koupelna se sprchovým koutem', titleEn: 'Modern Bathroom & Glass Shower', titleDe: 'Modernes Bad mit Glasdusche', thumb: '/assets/images/web/apt-real-bathroom-shower.jpg' },
      { src: '/assets/images/web/apt-real-balcony-summer.jpg', titleCs: 'Letní vyhlídka z balkonu do hor', titleEn: 'Summer Mountain View from Balcony', titleDe: 'Sommerlicher Ausblick vom Balkon', thumb: '/assets/images/web/apt-real-balcony-summer.jpg' },
      { src: '/assets/images/web/apt-real-living-tv-lounge.jpg', titleCs: 'Smart TV & multimediální kout', titleEn: 'Smart TV & Media Lounge', titleDe: 'Smart-TV & Multimedia-Ecke', thumb: '/assets/images/web/apt-real-living-tv-lounge.jpg' },
      { src: '/assets/images/web/apt-real-bedroom-wardrobe.jpg', titleCs: 'Šatní skříň se zrcadlem a okno', titleEn: 'Mirrored Wardrobe & Window View', titleDe: 'Spiegelschrank und Fensterblick', thumb: '/assets/images/web/apt-real-bedroom-wardrobe.jpg' },
      { src: '/assets/images/web/apt-real-entrance-hall.jpg', titleCs: 'Vstup do apartmánu', titleEn: 'Apartment Entrance Door', titleDe: 'Apartment-Eingang', thumb: '/assets/images/web/apt-real-entrance-hall.jpg' }
    ],
    cs: {
      name: 'Panoramatický rohový apartmán s výhledem na sjezdovku (Apartmán 1)',
      category: '2. PATRO // 180° VÝHLED NA SJEZDOVKU & HORY // AŽ 6 OSOB',
      size: '47 m²',
      capacity: 'Až 6 hostů (velké 2+kk)',
      price: 'od 1 800 Kč',
      tagline: '47 m² • Až 6 hostů • Rohový balkon • 180° výhled na sjezdovku a hory',
      specs: [
        { icon: 'fa-solid fa-vector-square', label: '47 m² velkorysá plocha' },
        { icon: 'fa-solid fa-users', label: '4–6 hostů (velké 2+kk)' },
        { icon: 'fa-solid fa-mountain-sun', label: 'Rohový balkon s 180° výhledem' },
        { icon: 'fa-solid fa-snowflake', label: 'Vyhřívaná kóje na lyže/kola' }
      ],
      features: [
        { icon: 'fa-solid fa-mountain-sun', label: 'Nádherný 180° rohový výhled přímo na sjezdovku a hory' },
        { icon: 'fa-solid fa-couch', label: 'Velký prosvětlený obývací pokoj s jídelním stolem' },
        { icon: 'fa-solid fa-bed', label: 'Samostatná prostorná ložnice s manželskou postelí' },
        { icon: 'fa-solid fa-kitchen-set', label: 'Vybavený kuchyňský kout (varná deska, mikrovlnka, kávovar, toustovač)' },
        { icon: 'fa-solid fa-snowflake', label: 'Vlastní uzamykatelná kóje se sušáky bot na 1. NP' },
        { icon: 'fa-solid fa-square-parking', label: '1 bezplatné soukromé parkovací stání u domu' },
        { icon: 'fa-solid fa-shower', label: 'Vlastní koupelna se sprchou, fénem a ručníky' },
        { icon: 'fa-solid fa-wifi', label: 'Bezplatná Wi-Fi v celém apartmánu' },
        { icon: 'fa-solid fa-paw', label: 'Domácí mazlíčci povoleni (po domluvě)' }
      ],
      desc: 'Náš nejprostornější apartmán s velkým rohovým balkonem a úchvatným 180° výhledem přímo na sjezdovku Bublava a krušnohorské hřebeny. Velkorysý obývací pokoj s jídelnou nabízí dostatek prostoru pro rodinu i partu přátel (až 6 hostů). Samostatná ložnice, moderní kuchyně, privátní vyhřívaná kóje na lyže a kola se sušáky bot a 1 vyhrazené parkovací stání přímo u domu.'
    },
    en: {
      name: 'Panoramic Corner Suite with Ski Slope & Mountain Views (Apartment 1)',
      category: '2nd Floor // 180° Ski Slope & Mountain Panorama // Up to 6 Guests',
      size: '47 m²',
      capacity: 'Up to 6 guests',
      price: '€124',
      tagline: '47 m² • Up to 6 guests • Corner balcony • 180° slope & mountain views',
      specs: [
        { icon: 'fa-solid fa-vector-square', label: '47 m² generous layout' },
        { icon: 'fa-solid fa-users', label: '4–6 guests (spacious 2-room)' },
        { icon: 'fa-solid fa-mountain-sun', label: 'Corner balcony with 180° vista' },
        { icon: 'fa-solid fa-snowflake', label: 'Heated gear locker with dryers' }
      ],
      features: [
        { icon: 'fa-solid fa-mountain-sun', label: '180° panoramic wrap-around views of ski pistes and alpine peaks' },
        { icon: 'fa-solid fa-couch', label: 'Generous corner living lounge with dining area' },
        { icon: 'fa-solid fa-bed', label: 'Spacious master bedroom with double bed' },
        { icon: 'fa-solid fa-kitchen-set', label: 'Equipped kitchenette (stovetop, microwave, coffee maker, toaster)' },
        { icon: 'fa-solid fa-snowflake', label: 'Private heated ski & bike locker with boot dryers' },
        { icon: 'fa-solid fa-square-parking', label: '1 free private parking space right by the building' },
        { icon: 'fa-solid fa-shower', label: 'Private bathroom with shower, hairdryer & towels' },
        { icon: 'fa-solid fa-wifi', label: 'Free Wi-Fi across the entire apartment' },
        { icon: 'fa-solid fa-paw', label: 'Pet-friendly (upon prior arrangement)' }
      ],
      desc: 'Our most spacious residence featuring a wrap-around corner balcony with dramatic 180° panoramic views over the Bublava ski slopes and surrounding Ore Mountain ridges. Comfortably accommodates up to 6 guests with master bedroom, large lounge, kitchen, private gear locker with boot dryers, and free private parking.'
    },
    de: {
          "name": "Panorama-Eckwohnung mit Blick auf Skipiste & Berge (Wohnung 1)",
          "category": "2. ETAGE // 180° PISTEN- & BERGPANORAMA // BIS ZU 6 PERSONEN",
          "size": "47 m²",
          "capacity": "Bis zu 6 Gäste (großes 2-Zimmer-Apartment)",
          "price": "ab 1 800 CZK (ca. 74 €)",
          "tagline": "47 m² • Bis zu 6 Gäste • Eckbalkon • 180°-Panoramablick auf Pisten & Berge",
          "specs": [
                {
                      "icon": "fa-solid fa-vector-square",
                      "label": "47 m² großzügige Wohnfläche"
                },
                {
                      "icon": "fa-solid fa-users",
                      "label": "4–6 Gäste (großes 2-Zimmer-Apartment)"
                },
                {
                      "icon": "fa-solid fa-mountain-sun",
                      "label": "Eckbalkon mit 180°-Panoramablick"
                },
                {
                      "icon": "fa-solid fa-snowflake",
                      "label": "Beheiztes Ski-/Raddepot mit Schuhtrocknern"
                }
          ],
          "features": [
                {
                      "icon": "fa-solid fa-mountain-sun",
                      "label": "180°-Panoramablick direkt auf die Skipisten von Bublava und die Kämme des Erzgebirges"
                },
                {
                      "icon": "fa-solid fa-couch",
                      "label": "Großzügiges sonniges Wohnzimmer mit Esstisch und Schlafcouch"
                },
                {
                      "icon": "fa-solid fa-bed",
                      "label": "Separates ruhiges Schlafzimmer mit Doppelbett"
                },
                {
                      "icon": "fa-solid fa-kitchen-set",
                      "label": "Voll ausgestattete Küche (Kochfeld, Mikrowelle, Kaffeemaschine, Toaster)"
                },
                {
                      "icon": "fa-solid fa-snowflake",
                      "label": "Eigenes abschließbares Skidepot mit Skischuhtrocknern im Erdgeschoss"
                },
                {
                      "icon": "fa-solid fa-square-parking",
                      "label": "2 kostenlose Privatparkplätze direkt am Haus"
                },
                {
                      "icon": "fa-solid fa-shower",
                      "label": "Eigenes Badezimmer mit Dusche, Haartrockner und Handtüchern"
                },
                {
                      "icon": "fa-solid fa-wifi",
                      "label": "Kostenloses Highspeed-WLAN in der gesamten Wohnung"
                },
                {
                      "icon": "fa-solid fa-paw",
                      "label": "Haustiere willkommen (nach vorheriger Absprache)"
                }
          ],
          "desc": "Unsere geräumigste Ferienwohnung mit großem Eckbalkon und atemberaubendem 180°-Panoramablick direkt auf die Skipisten von Bublava und die Erzgebirgskämme. Das weitläufige Wohnzimmer mit Essecke bietet reichlich Platz für Familien oder Freundesgruppen (bis zu 6 Personen). Separates Schlafzimmer, moderne Küche, privates beheiztes Skidepot mit Skischuhtrocknern und 1 reservierter Parkplatz direkt am Haus."
    }
  },
  2: {
    unitCode: 'Apartmán 2',
    floor: '2. patro',
    floorCs: '2. patro',
    floorEn: '2nd Floor',
    floorDe: '2. Etage',
    totalArea: '40 m²',
    innerArea: '36 m²',
    outdoorArea: 'Balkon s výhledem na hory',
    outdoorAreaCs: 'Balkon s výhledem na hory',
    outdoorAreaEn: 'Balcony with mountain & slope views',
    outdoorAreaDe: 'Balkon mit Pisten- und Bergblick',
    lockerId: 'Kóje #2 se sušáky',
    lockerIdCs: 'Kóje #2 se sušáky',
    lockerIdEn: 'Ski locker #2 with boot dryers',
    lockerIdDe: 'Skidepot #2 mit Schuhtrocknern',
    img: '/assets/images/web/apt-balcony-rattan.jpg',
    floorplan: '/assets/images/apartments/apt-05-3d-floorplan.jpg',
    blueprint: '/assets/images/blueprints/apt-05-cad-blueprint.jpg',
    photos: [
      { src: '/assets/images/web/apt-real-balcony-summer.jpg', titleCs: 'Slunný balkon s výhledem na hory', titleEn: 'Sunny Balcony with Mountain Views', titleDe: 'Sonniger Balkon mit Bergblick', thumb: '/assets/images/web/apt-real-balcony-summer.jpg' },
      { src: '/assets/images/web/apt-real-living-rocking-chair.jpg', titleCs: 'Útulný obývací prostor s posezením', titleEn: 'Cozy Living Lounge with Rocking Chair', titleDe: 'Gemütlicher Wohnbereich mit Schaukelstuhl', thumb: '/assets/images/web/apt-real-living-rocking-chair.jpg' },
      { src: '/assets/images/web/apt-real-bedroom-bed.jpg', titleCs: 'Klidová ložnice s manželskou postelí', titleEn: 'Master Bedroom with Double Bed', titleDe: 'Ruhiges Schlafzimmer mit Doppelbett', thumb: '/assets/images/web/apt-real-bedroom-bed.jpg' },
      { src: '/assets/images/web/apt-real-kitchen-dining.jpg', titleCs: 'Vybavená kuchyně & kávovar', titleEn: 'Fully Equipped Kitchen & Coffee Maker', titleDe: 'Voll ausgestattete Küche & Kaffeemaschine', thumb: '/assets/images/web/apt-real-kitchen-dining.jpg' },
      { src: '/assets/images/web/apt-real-bathroom-shower.jpg', titleCs: 'Koupelna se sprchovým koutem', titleEn: 'Bathroom & Shower Enclosure', titleDe: 'Badezimmer mit Dusche', thumb: '/assets/images/web/apt-real-bathroom-shower.jpg' },
      { src: '/assets/images/web/apt-real-balcony-winter.jpg', titleCs: 'Zimní výhled z balkonu na sjezdovku', titleEn: 'Ski Slope & Winter Mountain Vista', titleDe: 'Winterlicher Balkonblick auf die Skipiste', thumb: '/assets/images/web/apt-real-balcony-winter.jpg' },
      { src: '/assets/images/web/apt-real-bedroom-wardrobe.jpg', titleCs: 'Ložnice se šatní skříní a oknem', titleEn: 'Bedroom with Mirrored Wardrobe', titleDe: 'Schlafzimmer mit Spiegelschrank', thumb: '/assets/images/web/apt-real-bedroom-wardrobe.jpg' }
    ],
    cs: {
      name: 'Horský apartmán s privátním balkonem a výhledem (Apartmán 2)',
      category: '2. PATRO // VÝHLED NA SJEZDOVKU & HORY // 4 OSOBY',
      size: '40 m²',
      capacity: '4 hosté (2+kk)',
      price: 'od 1 800 Kč',
      tagline: '40 m² • 4 hosté • Vlastní balkon • Výhled na sjezdovku a hory',
      specs: [
        { icon: 'fa-solid fa-vector-square', label: '40 m² obytná plocha' },
        { icon: 'fa-solid fa-users', label: '4 hosté (2+kk s ložnicí)' },
        { icon: 'fa-solid fa-mountain-sun', label: 'Balkon s výhledem na hory' },
        { icon: 'fa-solid fa-snowflake', label: 'Vyhřívaná kóje na lyže/kola' }
      ],
      features: [
        { icon: 'fa-solid fa-mountain-sun', label: 'Slunný balkon s posezením a výhledem na hřebeny' },
        { icon: 'fa-solid fa-bed', label: 'Samostatná tichá ložnice s manželskou postelí' },
        { icon: 'fa-solid fa-kitchen-set', label: 'Vybavený kuchyňský kout (varná deska, mikrovlnka, kávovar, toustovač)' },
        { icon: 'fa-solid fa-snowflake', label: 'Vlastní uzamykatelná kóje se sušáky bot na 1. NP' },
        { icon: 'fa-solid fa-square-parking', label: '1 bezplatné soukromé parkovací stání u domu' },
        { icon: 'fa-solid fa-shower', label: 'Vlastní koupelna se sprchou, fénem a ručníky' },
        { icon: 'fa-solid fa-wifi', label: 'Bezplatná Wi-Fi v celém apartmánu' },
        { icon: 'fa-solid fa-paw', label: 'Domácí mazlíčci povoleni (po domluvě)' },
        { icon: 'fa-solid fa-martini-glass-citrus', label: 'Přímý vstup do rezidenčního Lobby Baru' }
      ],
      desc: 'Světlý a útulný dvoupokojový apartmán pro 4 osoby s vlastním balkonem a posezením s malebným výhledem na sjezdovku a horské hřebeny Krušných hor. Samostatná tichá ložnice, obývací pokoj s jídelnou a kompletně vybavená kuchyně se vším potřebným. K apartmánu patří vyhřívaná kóje se sušáky bot a 1 vyhrazené parkovací stání přímo u domu.'
    },
    en: {
      name: 'Mountain Balcony Suite with Alpine Views (Apartment 2)',
      category: '2nd Floor // Ski Slope & Mountain Views // 4 Guests',
      size: '40 m²',
      capacity: '4 guests',
      price: '€112',
      tagline: '40 m² • 4 guests • Private balcony • Mountain & slope views',
      specs: [
        { icon: 'fa-solid fa-vector-square', label: '40 m² living area' },
        { icon: 'fa-solid fa-users', label: '4 guests (1 bedroom + living)' },
        { icon: 'fa-solid fa-mountain-sun', label: 'Balcony with alpine vista' },
        { icon: 'fa-solid fa-snowflake', label: 'Heated gear locker with dryers' }
      ],
      features: [
        { icon: 'fa-solid fa-mountain-sun', label: 'Sunny balcony facing ski slopes and alpine ridges' },
        { icon: 'fa-solid fa-bed', label: 'Quiet master bedroom with comfortable double bed' },
        { icon: 'fa-solid fa-kitchen-set', label: 'Equipped kitchenette (stovetop, microwave, coffee maker, toaster)' },
        { icon: 'fa-solid fa-snowflake', label: 'Private heated ski & bike locker with boot dryers' },
        { icon: 'fa-solid fa-square-parking', label: '1 free private parking space right by the building' },
        { icon: 'fa-solid fa-shower', label: 'Private bathroom with shower, hairdryer & towels' },
        { icon: 'fa-solid fa-wifi', label: 'Free Wi-Fi across the entire apartment' },
        { icon: 'fa-solid fa-paw', label: 'Pet-friendly (upon prior arrangement)' },
        { icon: 'fa-solid fa-martini-glass-citrus', label: 'Direct access to the residential Lobby Bar' }
      ],
      desc: 'Bright and inviting 2-room apartment for up to 4 guests featuring a private balcony with panoramic mountain and ski slope vistas. Separate master bedroom, living room with equipped kitchen, private gear locker with boot dryers, and guaranteed parking.'
    },
    de: {
          "name": "Alpen-Balkonwohnung mit Bergblick (Wohnung 2)",
          "category": "2. ETAGE // BLICK AUF SKIPISTE & BERGE // 4 PERSONEN",
          "size": "40 m²",
          "capacity": "4 Gäste (2-Zimmer mit Schlafzimmer)",
          "price": "ab 1 800 CZK (ca. 74 €)",
          "tagline": "40 m² • 4 Gäste • Privater Balkon • Blick auf Skipiste & Berge",
          "specs": [
                {
                      "icon": "fa-solid fa-vector-square",
                      "label": "40 m² Wohnfläche"
                },
                {
                      "icon": "fa-solid fa-users",
                      "label": "4 Gäste (2-Zimmer mit separatem Schlafzimmer)"
                },
                {
                      "icon": "fa-solid fa-mountain-sun",
                      "label": "Balkon mit Bergblick"
                },
                {
                      "icon": "fa-solid fa-snowflake",
                      "label": "Beheiztes Ski-/Raddepot mit Schuhtrocknern"
                }
          ],
          "features": [
                {
                      "icon": "fa-solid fa-mountain-sun",
                      "label": "Sonniger Südbalkon mit Sitzmöbeln und Blick auf die Gebirgskämme"
                },
                {
                      "icon": "fa-solid fa-bed",
                      "label": "Separates ruhiges Schlafzimmer mit bequemem Doppelbett"
                },
                {
                      "icon": "fa-solid fa-kitchen-set",
                      "label": "Voll ausgestattete Küchenzeile (Kochfeld, Mikrowelle, Kaffeemaschine, Toaster)"
                },
                {
                      "icon": "fa-solid fa-snowflake",
                      "label": "Eigenes abschließbares Skidepot mit Skischuhtrocknern im Erdgeschoss"
                },
                {
                      "icon": "fa-solid fa-square-parking",
                      "label": "2 kostenlose Privatparkplätze direkt am Haus"
                },
                {
                      "icon": "fa-solid fa-shower",
                      "label": "Modernes Badezimmer mit Dusche, Haartrockner und Handtüchern"
                },
                {
                      "icon": "fa-solid fa-wifi",
                      "label": "Kostenloses Highspeed-WLAN in allen Räumen"
                },
                {
                      "icon": "fa-solid fa-paw",
                      "label": "Haustiere willkommen (nach Absprache)"
                },
                {
                      "icon": "fa-solid fa-martini-glass-citrus",
                      "label": "Direkter Zugang zur hauseigenen Lobby Bar"
                }
          ],
          "desc": "Helle und behagliche 2-Zimmer-Wohnung für bis zu 4 Personen mit eigenem sonnigem Balkon und bequemer Rattan-Sitzgruppe mit malerischem Blick auf die Pisten und die Höhen des Erzgebirges. Separates Schlafzimmer, Wohnzimmer mit Essecke und voll ausgestatteter Küche. Beheiztes Skidepot mit Schuhtrocknern und 1 reservierter Parkplatz direkt am Haus."
    }
  },
  3: {
    unitCode: 'Apartmán 3',
    floor: '3. patro (Podkroví)',
    floorCs: '3. patro (Podkroví)',
    floorEn: '3rd Floor (Attic)',
    floorDe: '3. Etage (Dachgeschoss)',
    totalArea: '42 m²',
    innerArea: '37 m²',
    outdoorArea: 'Podkrovní balkon s výhledem na sjezdovku a hory',
    outdoorAreaCs: 'Podkrovní balkon s výhledem na sjezdovku a hory',
    outdoorAreaEn: 'Attic balcony with highest panoramic view',
    outdoorAreaDe: 'Dachbalkon mit höchstem Panoramablick',
    lockerId: 'Kóje #3 se sušáky',
    lockerIdCs: 'Kóje #3 se sušáky',
    lockerIdEn: 'Ski locker #3 with boot dryers',
    lockerIdDe: 'Skidepot #3 mit Schuhtrocknern',
    img: '/assets/images/web/apt-kitchen-dining-full.jpg',
    floorplan: '/assets/images/apartments/apt-10-3d-floorplan.jpg',
    blueprint: '/assets/images/blueprints/apt-10-cad-blueprint.jpg',
    photos: [
      { src: '/assets/images/web/apt-real-kitchen-dining.jpg', titleCs: 'Plně vybavená kuchyně & jídelní kout', titleEn: 'Kitchen & Dining Corner', titleDe: 'Küche und Essbereich', thumb: '/assets/images/web/apt-real-kitchen-dining.jpg' },
      { src: '/assets/images/web/apt-real-living-tv-lounge.jpg', titleCs: 'Prosvětlený obývací prostor se Smart TV', titleEn: 'Sunlit Living Space & Smart TV', titleDe: 'Lichtdurchfluteter Wohnbereich mit Smart-TV', thumb: '/assets/images/web/apt-real-living-tv-lounge.jpg' },
      { src: '/assets/images/web/apt-real-balcony-winter.jpg', titleCs: 'Nejvyšší vyhlídka z balkonu na sjezdovku', titleEn: 'Highest Vantage Balcony View', titleDe: 'Höchster Ausblick vom Balkon auf die Piste', thumb: '/assets/images/web/apt-real-balcony-winter.jpg' },
      { src: '/assets/images/web/apt-real-bedroom-bed.jpg', titleCs: 'Klidová podkrovní ložnice', titleEn: 'Quiet Alpine Bedroom', titleDe: 'Ruhiges Dachgeschoss-Schlafzimmer', thumb: '/assets/images/web/apt-real-bedroom-bed.jpg' },
      { src: '/assets/images/web/apt-real-bathroom-shower.jpg', titleCs: 'Moderní koupelna se sprchou', titleEn: 'Modern Bathroom & Shower', titleDe: 'Modernes Badezimmer mit Dusche', thumb: '/assets/images/web/apt-real-bathroom-shower.jpg' },
      { src: '/assets/images/web/apt-real-balcony-summer.jpg', titleCs: 'Letní vyhlídka z balkonu do údolí', titleEn: 'Summer Valley View from Balcony', titleDe: 'Sommerlicher Ausblick ins Tal', thumb: '/assets/images/web/apt-real-balcony-summer.jpg' },
      { src: '/assets/images/web/apt-real-living-rocking-chair.jpg', titleCs: 'Odpočinkové houpací křeslo', titleEn: 'Relaxing Rocking Armchair', titleDe: 'Gemütlicher Schaukelstuhl', thumb: '/assets/images/web/apt-real-living-rocking-chair.jpg' }
    ],
    cs: {
      name: 'Podkrovní apartmán s vyhlídkovým balkonem (Apartmán 3)',
      category: '3. PATRO // NEJVYŠŠÍ VYHLÍDKA NA SJEZDOVKU & HORY // 4 OSOBY',
      size: '42 m²',
      capacity: '4 hosté (podkrovní 2+kk)',
      price: 'od 1 800 Kč',
      tagline: '42 m² • 4 hosté • Podkrovní balkon • Nejvyšší výhled na sjezdovku a hory',
      specs: [
        { icon: 'fa-solid fa-vector-square', label: '42 m² obytná plocha' },
        { icon: 'fa-solid fa-users', label: '4 hosté (podkrovní 2+kk)' },
        { icon: 'fa-solid fa-mountain-sun', label: 'Balkon s výhledem na sjezdovku & hory' },
        { icon: 'fa-solid fa-snowflake', label: 'Vyhřívaná kóje na lyže/kola' }
      ],
      features: [
        { icon: 'fa-solid fa-mountain-sun', label: 'Privátní podkrovní balkon s nejvyšším výhledem na sjezdovku i hory' },
        { icon: 'fa-solid fa-couch', label: 'Prosvětlený obývací prostor s jídelním stolem a posezením' },
        { icon: 'fa-solid fa-bed', label: 'Útulná podkrovní ložnice pro ničím nerušený horský spánek' },
        { icon: 'fa-solid fa-kitchen-set', label: 'Vybavený kuchyňský kout (varná deska, mikrovlnka, kávovar, toustovač)' },
        { icon: 'fa-solid fa-snowflake', label: 'Vyhřívaná kóje se sušáky bot na 1. NP' },
        { icon: 'fa-solid fa-square-parking', label: '1 bezplatné soukromé parkovací stání u domu' },
        { icon: 'fa-solid fa-shower', label: 'Vlastní koupelna se sprchou, fénem a ručníky' },
        { icon: 'fa-solid fa-wifi', label: 'Bezplatná Wi-Fi v celém apartmánu' },
        { icon: 'fa-solid fa-paw', label: 'Domácí mazlíčci povoleni (po domluvě)' }
      ],
      desc: 'Atmosférický podkrovní apartmán ve 3. patře s privátním balkonem s nejkrásnějším výhledem na sjezdovku Bublava i okolní horské vrcholy. Klid podkroví vytváří kouzelné zázemí pro zimní i letní dovolenou. Samostatná ložnice, obývací pokoj s kuchyní, Wi-Fi a vyhřívaná kóje se sušáky bot.'
    },
    en: {
      name: 'Attic Scenic Suite with Slope & Mountain Views (Apartment 3)',
      category: '3rd Floor // Highest Slope & Mountain Views // 4 Guests',
      size: '42 m²',
      capacity: '4 guests',
      price: '€114',
      tagline: '42 m² • 4 guests • Scenic balcony • Balcony overlooking slopes & peaks',
      specs: [
        { icon: 'fa-solid fa-vector-square', label: '42 m² living area' },
        { icon: 'fa-solid fa-users', label: '4 guests (attic 2-room)' },
        { icon: 'fa-solid fa-mountain-sun', label: 'Top floor balcony with slope & peak views' },
        { icon: 'fa-solid fa-snowflake', label: 'Heated gear locker with dryers' }
      ],
      features: [
        { icon: 'fa-solid fa-mountain-sun', label: 'Highest balcony vantage point with views of slopes and alpine summits' },
        { icon: 'fa-solid fa-couch', label: 'Sunlit living space with dining table and sofa' },
        { icon: 'fa-solid fa-bed', label: 'Quiet attic bedroom for restorative mountain sleep' },
        { icon: 'fa-solid fa-kitchen-set', label: 'Equipped kitchenette (stovetop, microwave, coffee maker, toaster)' },
        { icon: 'fa-solid fa-snowflake', label: 'Private heated ski & bike locker with boot dryers' },
        { icon: 'fa-solid fa-square-parking', label: '1 free private parking space right by the building' },
        { icon: 'fa-solid fa-shower', label: 'Private bathroom with shower, hairdryer & towels' },
        { icon: 'fa-solid fa-wifi', label: 'Free Wi-Fi across the entire apartment' },
        { icon: 'fa-solid fa-paw', label: 'Pet-friendly (upon prior arrangement)' }
      ],
      desc: 'Enchanting top-floor attic residence with a private balcony boasting supreme vistas over the ski slopes and surrounding mountain heights. Features separate bedroom, lounge with kitchen, Wi-Fi, and private heated gear locker.'
    },
    de: {
          "name": "Dachgeschoss-Wohnung mit Panoramabalkon (Wohnung 3)",
          "category": "3. ETAGE // HÖCHSTE AUSSICHT AUF SKIPISTE & BERGE // 4 PERSONEN",
          "size": "42 m²",
          "capacity": "4 Gäste (Dachgeschoss 2-Zimmer)",
          "price": "ab 1 800 CZK (ca. 74 €)",
          "tagline": "42 m² • 4 Gäste • Dachbalkon • Höchster Ausblick auf Piste und Gipfel",
          "specs": [
                {
                      "icon": "fa-solid fa-vector-square",
                      "label": "42 m² Wohnfläche"
                },
                {
                      "icon": "fa-solid fa-users",
                      "label": "4 Gäste (Dachgeschoss 2-Zimmer)"
                },
                {
                      "icon": "fa-solid fa-mountain-sun",
                      "label": "Balkon mit höchstem Ausblick"
                },
                {
                      "icon": "fa-solid fa-snowflake",
                      "label": "Beheiztes Ski-/Raddepot mit Schuhtrocknern"
                }
          ],
          "features": [
                {
                      "icon": "fa-solid fa-mountain-sun",
                      "label": "Privater Dachbalkon mit dem schönsten Blick über das Skigebiet Bublava und die Gipfel"
                },
                {
                      "icon": "fa-solid fa-couch",
                      "label": "Lichtdurchfluteter Wohnbereich mit Esstisch und bequemer Sitzecke"
                },
                {
                      "icon": "fa-solid fa-bed",
                      "label": "Gemütliches Schlafzimmer unterm Dach für erholsamen Bergschlaf"
                },
                {
                      "icon": "fa-solid fa-kitchen-set",
                      "label": "Ausgestattete Küchenzeile (Kochfeld, Mikrowelle, Kaffeemaschine, Toaster)"
                },
                {
                      "icon": "fa-solid fa-snowflake",
                      "label": "Privates beheiztes Skidepot mit Skischuhtrocknern im Erdgeschoss"
                },
                {
                      "icon": "fa-solid fa-square-parking",
                      "label": "2 kostenlose Privatparkplätze direkt am Haus"
                },
                {
                      "icon": "fa-solid fa-shower",
                      "label": "Eigenes Badezimmer mit Dusche, Haartrockner und Handtüchern"
                },
                {
                      "icon": "fa-solid fa-wifi",
                      "label": "Kostenloses WLAN in der gesamten Wohnung"
                },
                {
                      "icon": "fa-solid fa-paw",
                      "label": "Haustiere willkommen (nach Absprache)"
                }
          ],
          "desc": "Stilvolle Dachgeschoss-Ferienwohnung in der 3. Etage mit privatem Balkon und dem schönsten Weitblick auf die Skipisten von Bublava und die umliegenden Erzgebirgskämme. Die Ruhe des Dachgeschosses schafft ein zauberhaftes Refugium für Winter- wie Sommerurlaub. Separates Schlafzimmer, Wohnraum mit Küche, WLAN und beheiztes Skidepot mit Skischuhtrocknern."
    }
  },
  all: {
    unitCode: 'Všechny 3 apartmány',
    floor: '2. & 3. patro',
    floorCs: '2. & 3. patro',
    floorEn: '2nd & 3rd Floor',
    floorDe: '2. & 3. Etage',
    totalArea: '129 m²',
    innerArea: '115 m²',
    outdoorArea: '3x privátní balkon s výhledem',
    outdoorAreaCs: '3x privátní balkon s výhledem',
    outdoorAreaEn: '3x private scenic balconies',
    outdoorAreaDe: '3x private Aussichtsbalkone',
    lockerId: '3x kóje se sušáky',
    lockerIdCs: '3x kóje se sušáky',
    lockerIdEn: '3x ski lockers with dryers',
    lockerIdDe: '3x Skidepot mit Schuhtrocknern',
    img: '/assets/images/web/residence-exterior-front.jpg',
    floorplan: '/assets/images/blueprints/building-floorplan-2np.jpg',
    blueprint: '/assets/images/blueprints/building-floorplan-2np-cad.jpg',
    photos: [
      { src: '/assets/images/web/residence-exterior-front.jpg', titleCs: 'Rezidence Panorama Bublava', titleEn: 'Panorama Residence Bublava', titleDe: 'Residenz Panorama Bublava', thumb: '/assets/images/web/residence-exterior-front.jpg' },
      { src: '/assets/images/web/residence-exterior-balconies.jpg', titleCs: 'Pohled na balkony apartmánů', titleEn: 'Suites Balconies View', titleDe: 'Blick auf die Aussichtsbalkone', thumb: '/assets/images/web/residence-exterior-balconies.jpg' },
      { src: '/assets/images/web/apt-living-room-panoramic.jpg', titleCs: 'Apartmán 1 - Panoramatický obývací prostor', titleEn: 'Suite 1 - Panoramic Living Area', titleDe: 'Wohnung 1 - Panorama-Wohnbereich', thumb: '/assets/images/web/apt-living-room-panoramic.jpg' },
      { src: '/assets/images/web/apt-balcony-rattan.jpg', titleCs: 'Apartmán 2 - Slunný balkon s posezením', titleEn: 'Suite 2 - Balcony with Rattan Lounge', titleDe: 'Wohnung 2 - Sonniger Balkon mit Sitzecke', thumb: '/assets/images/web/apt-balcony-rattan.jpg' },
      { src: '/assets/images/web/apt-kitchen-dining-full.jpg', titleCs: 'Apartmán 3 - Podkrovní kuchyně a jídelní kout', titleEn: 'Suite 3 - Attic Kitchen & Dining', titleDe: 'Wohnung 3 - Dachgeschoss-Küche und Essbereich', thumb: '/assets/images/web/apt-kitchen-dining-full.jpg' },
      { src: '/assets/images/web/apt-bedroom-master.jpg', titleCs: 'Komfortní ložnice s manželskou postelí', titleEn: 'Master Bedroom with Double Bed', titleDe: 'Komfortables Schlafzimmer mit Doppelbett', thumb: '/assets/images/web/apt-bedroom-master.jpg' },
      { src: '/assets/images/apartments/real-balcony-view-slope.jpg', titleCs: 'Výhled na sjezdovku a Krušné hory', titleEn: 'Ski Slope & Mountain Views', titleDe: 'Ausblick auf Skipiste und Erzgebirge', thumb: '/assets/images/apartments/real-balcony-view-slope.jpg' }
    ],
    cs: {
      name: 'Exkluzivní pronájem všech 3 apartmánů (až 14 hostů)',
      category: '2. & 3. PATRO // 3 PRIVÁTNÍ BALKONY // AŽ 14 OSOB',
      size: '129 m²',
      capacity: 'Až 14 hostů (3 samostatné byty)',
      price: 'od 5 400 Kč',
      tagline: '129 m² • Až 14 hostů • 3x privátní balkon • Celé patro a podkroví',
      specs: [
        { icon: 'fa-solid fa-vector-square', label: '129 m² celková plocha' },
        { icon: 'fa-solid fa-users', label: 'Až 14 hostů (3 byty)' },
        { icon: 'fa-solid fa-mountain-sun', label: '3x privátní balkon' },
        { icon: 'fa-solid fa-snowflake', label: '3x vyhřívaná kóje + 3x parkování' }
      ],
      features: [
        { icon: 'fa-solid fa-layer-group', label: 'Všechny 3 prémiové apartmány (Apartmán 1, 2 a 3) pro vaši skupinu' },
        { icon: 'fa-solid fa-users', label: 'Kapacita až 14 lůžek pro velkou rodinu, partu přátel či firemní teambuilding' },
        { icon: 'fa-solid fa-mountain-sun', label: '3 samostatné balkony s nádhernými výhledy na sjezdovku a Krušné hory' },
        { icon: 'fa-solid fa-martini-glass-citrus', label: 'Přímý vstup do rezidenčního Lobby Baru (140 m²)' },
        { icon: 'fa-solid fa-snowflake', label: '3 uzamykatelné vyhřívané kóje na lyže a kola se sušáky bot' },
        { icon: 'fa-solid fa-square-parking', label: '3 garantovaná soukromá parkovací stání přímo u budovy (1 ke každému apartmánu)' },
        { icon: 'fa-solid fa-kitchen-set', label: '3 plně vybavené kuchyně a jídelní prostory' },
        { icon: 'fa-solid fa-shower', label: '3 moderní koupelny se sprchami a fénem' },
        { icon: 'fa-solid fa-wifi', label: 'Rychlá bezplatná Wi-Fi v celém objektu' }
      ],
      desc: 'Získejte kompletní zázemí pro velkou rodinu, partu přátel či firemní teambuilding: všechny 3 prémiové apartmány (až 14 lůžek, 129 m²), 3 privátní balkony s výhledem na sjezdovku a Krušné hory, přímý vstup do rezidenčního Lobby Baru (140 m²), 3 vyhřívané kóje se sušáky bot a 3 garantovaná parkovací stání přímo u rezidence (1 ke každému apartmánu). Pro skupinový pronájem všech 3 apartmánů naráz nás prosím kontaktujte přímo telefonicky (+420 777 366 239) nebo e-mailem (info@apartmany-panorama.cz).'
    },
    en: {
      name: 'Exclusive Entire Portfolio Buyout: All 3 Suites (Up to 14 Guests)',
      category: '2nd & 3rd Floor // 3 Private Balconies // Up to 14 Guests',
      size: '129 m²',
      capacity: 'Up to 14 guests (3 full suites)',
      price: '€220',
      tagline: '129 m² • Up to 14 guests • 3 private balconies • Entire floor & penthouse',
      specs: [
        { icon: 'fa-solid fa-vector-square', label: '129 m² total area' },
        { icon: 'fa-solid fa-users', label: 'Up to 14 guests (3 suites)' },
        { icon: 'fa-solid fa-mountain-sun', label: '3x private balconies' },
        { icon: 'fa-solid fa-snowflake', label: '3x gear lockers + 3x parking' }
      ],
      features: [
        { icon: 'fa-solid fa-layer-group', label: 'All 3 premium suites (Suites 1, 2 and 3) exclusively for your group' },
        { icon: 'fa-solid fa-users', label: 'Capacity of up to 14 guests for large families, reunions or retreats' },
        { icon: 'fa-solid fa-mountain-sun', label: '3 private balconies with dramatic views of slopes and Ore Mountains' },
        { icon: 'fa-solid fa-martini-glass-citrus', label: 'Direct access to the residential Lobby Bar (140 m²)' },
        { icon: 'fa-solid fa-snowflake', label: '3 heated ski & bike lockers with boot dryers' },
        { icon: 'fa-solid fa-square-parking', label: '3 private guaranteed parking spaces directly on site (1 per suite)' },
        { icon: 'fa-solid fa-kitchen-set', label: '3 fully equipped kitchens and dining areas' },
        { icon: 'fa-solid fa-shower', label: '3 private bathrooms with showers and hairdryers' },
        { icon: 'fa-solid fa-wifi', label: 'Fast complimentary Wi-Fi across all suites' }
      ],
      desc: 'Reserve the complete portfolio for family gatherings, friend retreats, or corporate offsites: all 3 luxury suites accommodating up to 14 guests (129 m²), 3 scenic balconies overlooking the slopes, direct access to the 140 m² Lobby Bar, 3 heated equipment lockers with boot dryers, and 3 guaranteed on-site parking spots (1 per apartment). For buyout inquiries of all 3 suites at once, please contact us directly (+420 777 366 239, info@apartmany-panorama.cz).'
    },
    de: {
          "name": "Exklusive Gesamtresidenz: Alle 3 Ferienwohnungen (bis zu 14 Gäste)",
          "category": "2. & 3. ETAGE // 3 PRIVATE BALKONE // BIS ZU 14 PERSONEN",
          "size": "129 m²",
          "capacity": "Bis zu 14 Gäste (3 getrennte Wohnungen)",
          "price": "ab 5 400 CZK (ca. 220 €)",
          "tagline": "129 m² • Bis zu 14 Gäste • 3x privater Balkon • Gesamte Etage & Penthouse",
          "specs": [
                {
                      "icon": "fa-solid fa-vector-square",
                      "label": "129 m² Gesamtfläche"
                },
                {
                      "icon": "fa-solid fa-users",
                      "label": "Bis zu 14 Gäste (3 Wohnungen)"
                },
                {
                      "icon": "fa-solid fa-mountain-sun",
                      "label": "3x privater Balkon"
                },
                {
                      "icon": "fa-solid fa-snowflake",
                      "label": "3x beheiztes Skidepot + 3x Parkplatz"
                }
          ],
          "features": [
                {
                      "icon": "fa-solid fa-layer-group",
                      "label": "Alle 3 Premium-Ferienwohnungen (Wohnung 1, 2 und 3) exklusiv für Ihre Gruppe"
                },
                {
                      "icon": "fa-solid fa-users",
                      "label": "Kapazität für bis zu 14 Betten für große Familien, Freundesgruppen oder Teamevents"
                },
                {
                      "icon": "fa-solid fa-mountain-sun",
                      "label": "3 separate Aussichtsbalkone mit herrlichem Blick auf Skipisten und Erzgebirge"
                },
                {
                      "icon": "fa-solid fa-martini-glass-citrus",
                      "label": "Direkter Zugang zur hauseigenen Lobby Bar (140 m²)"
                },
                {
                      "icon": "fa-solid fa-snowflake",
                      "label": "3 abschließbare beheizte Skidepots mit automatischen Schuhtrocknern"
                },
                {
                      "icon": "fa-solid fa-square-parking",
                      "label": "6 garantierte private Parkplätze direkt an der Residenz"
                },
                {
                      "icon": "fa-solid fa-kitchen-set",
                      "label": "3 voll ausgestattete Küchen und Essbereiche"
                },
                {
                      "icon": "fa-solid fa-shower",
                      "label": "3 moderne Badezimmer mit Duschen und Haartrocknern"
                },
                {
                      "icon": "fa-solid fa-wifi",
                      "label": "Schnelles kostenloses WLAN im gesamten Gebäude"
                }
          ],
          "desc": "Buchen Sie das komplette Haus für Ihre Großfamilie, Freunde oder Teambuilding: alle 3 Premium-Wohnungen (bis zu 14 Betten, 129 m²), 3 private Aussichtsbalkone mit Blick auf Skipisten und Berge, direkter Zugang zur Lobby Bar (140 m²), 3 beheizte Skidepots mit Schuhtrocknern und 3 garantierte Parkplätze direkt an der Residenz (1 pro Fewo). Für Gruppenbuchungen aller 3 Wohnungen auf einmal kontaktieren Sie uns bitte direkt per Telefon (+420 777 366 239) oder E-Mail (info@apartmany-panorama.cz)."
    }
  }
};

// Backwards compatibility aliases for legacy numbers (6 -> 1, 5 -> 2, 10 -> 3, 'buyout' / 4 -> 'all')
apartmentDetails[6] = apartmentDetails[1];
apartmentDetails[5] = apartmentDetails[2];
apartmentDetails[10] = apartmentDetails[3];
apartmentDetails['buyout'] = apartmentDetails['all'];
apartmentDetails[4] = apartmentDetails['all'];

function renderModalThumbs(apt) {
  const container = document.getElementById('apt-modal-thumbs-strip');
  if (!container) return;
  container.innerHTML = '';

  const photos = (apt.photos && apt.photos.length > 0) ? apt.photos : [{ src: apt.img, titleCs: 'Apartmán', titleEn: 'Suite', thumb: apt.img }];
  const lang = (typeof currentLang !== 'undefined' && apt[currentLang]) ? currentLang : 'cs';

  photos.forEach((photo, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `apt-modal-thumb-btn ${idx === currentModalPhotoIndex ? 'is-active' : ''}`;
    const titleText = (lang === 'de' ? (photo.titleDe || photo.titleEn) : lang === 'en' ? photo.titleEn : photo.titleCs) || (lang === 'de' ? `Foto ${idx + 1}` : `Foto ${idx + 1}`);
    btn.setAttribute('aria-label', titleText);
    btn.title = titleText;
    btn.innerHTML = `<img src="${photo.thumb || photo.src}" alt="${titleText}">`;
    btn.onclick = (e) => {
      e.stopPropagation();
      selectModalPhoto(idx);
    };
    container.appendChild(btn);
  });
}

function selectModalPhoto(index) {
  const apt = apartmentDetails[currentAptModalId];
  if (!apt) return;
  const photos = (apt.photos && apt.photos.length > 0) ? apt.photos : [{ src: apt.img, titleCs: 'Apartmán', titleEn: 'Suite' }];

  if (index < 0) index = 0;
  if (index >= photos.length) index = photos.length - 1;
  currentModalPhotoIndex = index;

  const currentPhoto = photos[index];
  const lang = (typeof currentLang !== 'undefined' && apt[currentLang]) ? currentLang : 'cs';
  const photoTitle = (lang === 'de' ? (currentPhoto.titleDe || currentPhoto.titleEn) : lang === 'en' ? currentPhoto.titleEn : currentPhoto.titleCs) || (lang === 'de' ? 'Fotografie' : 'Fotografie');

  const imgEl = document.getElementById('apt-modal-img');
  const titleEl = document.getElementById('apt-modal-photo-title');
  const taglineEl = document.getElementById('apt-modal-tagline');

  if (imgEl) {
    imgEl.style.opacity = '0.35';
    setTimeout(() => {
      imgEl.src = currentPhoto.src;
      imgEl.style.objectFit = 'cover';
      imgEl.style.padding = '0';
      imgEl.style.background = 'transparent';
      imgEl.style.opacity = '1';
    }, 120);
  }

  if (titleEl) {
    titleEl.textContent = photoTitle;
  }

  if (taglineEl) {
    taglineEl.textContent = `${index + 1} / ${photos.length} • ${photoTitle}`;
  }

  // Update thumbnail states & scroll active into view
  const thumbs = document.querySelectorAll('.apt-modal-thumb-btn');
  thumbs.forEach((thumb, idx) => {
    if (idx === index) {
      thumb.classList.add('is-active');
      thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    } else {
      thumb.classList.remove('is-active');
    }
  });
}

function prevModalPhoto(e) {
  if (e) e.stopPropagation();
  const apt = apartmentDetails[currentAptModalId];
  if (!apt || !apt.photos || apt.photos.length === 0) return;
  const newIndex = (currentModalPhotoIndex - 1 + apt.photos.length) % apt.photos.length;
  selectModalPhoto(newIndex);
}

function nextModalPhoto(e) {
  if (e) e.stopPropagation();
  const apt = apartmentDetails[currentAptModalId];
  if (!apt || !apt.photos || apt.photos.length === 0) return;
  const newIndex = (currentModalPhotoIndex + 1) % apt.photos.length;
  selectModalPhoto(newIndex);
}

function switchModalView(mode) {
  const apt = apartmentDetails[currentAptModalId];
  if (!apt) return;
  currentModalView = mode;
  const imgEl = document.getElementById('apt-modal-img');
  const btnFloorplan = document.getElementById('modal-view-floorplan-btn');
  const btnPhoto = document.getElementById('modal-view-photo-btn');
  const thumbsStrip = document.getElementById('apt-modal-thumbs-strip');
  const prevBtn = document.getElementById('apt-modal-prev-btn');
  const nextBtn = document.getElementById('apt-modal-next-btn');
  const titleEl = document.getElementById('apt-modal-photo-title');
  const taglineEl = document.getElementById('apt-modal-tagline');
  const lang = (typeof currentLang !== 'undefined' && apt[currentLang]) ? currentLang : 'cs';

  if (mode === 'floorplan' && apt.floorplan) {
    if (imgEl) {
      imgEl.style.opacity = '0.35';
      setTimeout(() => {
        imgEl.src = apt.floorplan;
        imgEl.style.objectFit = 'contain';
        imgEl.style.padding = '24px';
        imgEl.style.background = '#06080b';
        imgEl.style.opacity = '1';
      }, 120);
    }
    if (btnFloorplan) btnFloorplan.classList.add('active');
    if (btnPhoto) btnPhoto.classList.remove('active');
    if (thumbsStrip) thumbsStrip.classList.remove('is-visible');
    if (prevBtn) prevBtn.classList.remove('is-visible');
    if (nextBtn) nextBtn.classList.remove('is-visible');
    if (titleEl) titleEl.textContent = (lang === 'de') ? '3D-Grundriss' : ((lang === 'en') ? '3D Floorplan' : '3D Půdorys');
    if (taglineEl) taglineEl.textContent = `${apt.totalArea} • ${apt.floor}`;
  } else {
    if (btnPhoto) btnPhoto.classList.add('active');
    if (btnFloorplan) btnFloorplan.classList.remove('active');
    if (thumbsStrip) thumbsStrip.classList.add('is-visible');
    if (prevBtn) prevBtn.classList.add('is-visible');
    if (nextBtn) nextBtn.classList.add('is-visible');
    renderModalThumbs(apt);
    selectModalPhoto(currentModalPhotoIndex);
  }
}

function openAptDetailModal(id, viewMode) {
  if (id === 6 || id === '6') id = 1;
  else if (id === 5 || id === '5') id = 2;
  else if (id === 10 || id === '10') id = 3;
  const apt = apartmentDetails[id];
  if (!apt) return;
  currentAptModalId = id;
  currentModalPhotoIndex = 0;
  if (!viewMode) viewMode = 'photo';

  const lang = (typeof currentLang !== 'undefined' && apt[currentLang]) ? currentLang : 'cs';
  const data = apt[lang] || apt.cs;

  const titleEl = document.getElementById('apt-modal-title');
  const catEl = document.getElementById('apt-modal-category');
  const descEl = document.getElementById('apt-modal-desc');
  const priceEl = document.getElementById('apt-modal-price');
  const specsContainer = document.getElementById('apt-modal-specs');
  const featuresContainer = document.getElementById('apt-modal-features');
  const taglineEl = document.getElementById('apt-modal-tagline');

  if (titleEl) titleEl.textContent = data.name;
  if (catEl) catEl.textContent = data.category;
  if (descEl) descEl.textContent = data.desc;
  if (priceEl) priceEl.textContent = data.price;
  if (taglineEl) taglineEl.textContent = data.tagline;

  switchModalView(viewMode);

  if (specsContainer) {
    specsContainer.innerHTML = '';
    data.specs.forEach(s => {
      const chip = document.createElement('div');
      chip.className = 'apt-spec-chip';
      chip.innerHTML = `<i class="${s.icon}"></i><span>${s.label}</span>`;
      specsContainer.appendChild(chip);
    });
  }

  if (featuresContainer) {
    featuresContainer.innerHTML = '';
    data.features.forEach(f => {
      const tile = document.createElement('div');
      tile.className = 'apt-feature-tile';
      tile.innerHTML = `<i class="${f.icon}"></i><span>${f.label}</span>`;
      featuresContainer.appendChild(tile);
    });
  }

  const bookBtn = document.getElementById('apt-modal-book-btn');
  if (bookBtn) {
    bookBtn.onclick = () => {
      closeAptDetailModal();
      openPrevioModal(data.name);
    };
  }

  const modal = document.getElementById('apt-detail-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.classList.add('apt-modal-open');
  }
}

function closeAptDetailModal() {
  const modal = document.getElementById('apt-detail-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Offcanvas Menu Controls (Instant, Silky-Smooth Stagger Cascade)
function openOffcanvasMenu() {
  const menu = document.querySelector('.offcanvas-menu');
  if (menu) {
    menu.querySelectorAll('.nav-fade').forEach((el, i) => {
      el.style.animationDelay = (0.18 + 0.07 * i) + 's';
    });
    menu.classList.add('show-offcanvas-menu');
    const wrapper = menu.querySelector('.offcanvas-menu__wrapper');
    if (wrapper) wrapper.classList.remove('nav-fade-active');
    document.body.style.overflow = 'hidden';
  }
}

function closeOffcanvasMenu() {
  const menu = document.querySelector('.offcanvas-menu');
  if (menu) {
    const wrapper = menu.querySelector('.offcanvas-menu__wrapper');
    if (wrapper) wrapper.classList.add('nav-fade-active');
    setTimeout(() => {
      menu.classList.remove('show-offcanvas-menu');
      document.body.style.overflow = '';
    }, 450);
  }
}

function initMainPanorama() {
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  const savedLang = (urlLang && (urlLang === 'cs' || urlLang === 'en' || urlLang === 'de'))
    ? urlLang
    : (localStorage.getItem('panorama_lang') || 'cs');

  setLanguage(savedLang);

  if (typeof updateGalleryExpandButtonText === 'function') {
    updateGalleryExpandButtonText(savedLang);
  }

  setTimeout(() => {
    if (typeof initPanoramaTitleAnimations === 'function') {
      initPanoramaTitleAnimations();
    }
  }, 350);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeOffcanvasMenu();
      closePrevioModal();
      closeVideoModal();
      closeAptDetailModal();
    }
    const aptModal = document.getElementById('apt-detail-modal');
    if (aptModal && aptModal.classList.contains('active') && currentModalView === 'photo') {
      if (e.key === 'ArrowLeft') {
        prevModalPhoto(e);
      } else if (e.key === 'ArrowRight') {
        nextModalPhoto(e);
      }
    }
  });

  document.addEventListener('click', (e) => {
    if (e.target.closest('.open-offcanvas-nav')) {
      e.preventDefault();
      openOffcanvasMenu();
    }
    if (e.target.closest('.close-offcanvas-menu') || e.target.closest('.offcanvas-menu__backdrop')) {
      e.preventDefault();
      closeOffcanvasMenu();
    }
  });

  document.querySelectorAll('.previo-modal').forEach(m => {
    m.addEventListener('click', (e) => {
      if (e.target === m) {
        closePrevioModal();
        closeVideoModal();
        closeAptDetailModal();
      }
    });
  });

  initHeroCounters();
}

// ==========================================================================
// Subtle Animated Stats Counter (Magic UI inspired - exponential ease-out)
// ==========================================================================
function initHeroCounters() {
  const counters = document.querySelectorAll('.hero-stat-counter');
  if (!counters.length) return;

  let triggered = false;
  const runCounters = () => {
    if (triggered) return;
    triggered = true;

    counters.forEach((el) => {
      const target = parseInt(el.getAttribute('data-target') || el.textContent, 10);
      if (isNaN(target)) return;
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1400; // ms
      let startTime = null;

      function step(now) {
        if (!startTime) startTime = now;
        const progress = Math.min((now - startTime) / duration, 1);
        // Exponential ease out for quiet luxury feel
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = Math.round(target * ease);
        el.textContent = current + suffix;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target + suffix;
        }
      }
      requestAnimationFrame(step);
    });
  };

  // Trigger after preloader dissolve
  setTimeout(runCounters, 900);
}


// Fail-safe Preloader Dissolver (Guarantees silky smooth fade without sharp cut)
function dismissPreloader() {
  const p = document.getElementById('preloader');
  if (p && !p.classList.contains('loaded')) {
    p.classList.add('loaded');
    setTimeout(() => {
      p.classList.add('preloader-hidden');
      p.style.display = 'none';
    }, 900);
  }
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  setTimeout(dismissPreloader, 600);
} else {
  window.addEventListener('DOMContentLoaded', () => setTimeout(dismissPreloader, 600));
}
// Absolute safeguard: hide after max 2.2s regardless of network or assets
setTimeout(dismissPreloader, 2200);


// =============================================================================
// 12. Professional 2026 Luxury Photo Gallery & Cinema Lightbox Engine
// =============================================================================
const panoramaGalleryData = [
  {
    src: '/assets/images/web/apt-living-room-panoramic.jpg',
    titleCs: 'Designový obývací salon',
    titleEn: 'Designer Living Salon',
    titleDe: 'Designer-Wohnsalon',
    categoryCs: 'Apartmány & Interiéry',
    categoryEn: 'Apartments & Interiors',
    categoryDe: 'Ferienwohnungen & Interieur',
    categorySlug: 'interiors',
    altCs: 'Apartmány Panorama Bublava – prostorný skandinávský obývací pokoj s dřevěným lamelovým obložením, Smart TV a výhledem do lesa',
    altEn: 'Apartments Panorama Bublava – spacious Scandinavian living room with acoustic slatted oak paneling, Smart TV and forest view',
    altDe: 'Apartmány Panorama Bublava – geräumiges skandinavisches Wohnzimmer mit akustischer Eichen-Lamellenwand, Smart-TV und Waldblick',
    descCs: 'Prosvětlený obývací prostor s dřevěným lamelovým obložením, Smart TV, jídelním stolem a francouzským oknem na balkon.',
    descEn: 'Sunlit open-plan living room with designer acoustic oak slatted paneling, Smart TV, dining table and French doors to balcony.',
    descDe: 'Lichtdurchfluteter Wohnbereich mit Holzlamellenverkleidung, Smart-TV, Esstisch und bodentiefem Balkonfenster.'
  },
  {
    src: '/assets/images/web/residence-exterior-front.jpg',
    titleCs: 'Rezidence Apartmány Panorama',
    titleEn: 'Apartments Panorama Residence',
    titleDe: 'Residenz Apartmány Panorama',
    categoryCs: 'Rezidence & Exteriér',
    categoryEn: 'Residence & Exterior',
    categoryDe: 'Residenz & Außenansicht',
    categorySlug: 'residence',
    altCs: 'Rezidence Apartmány Panorama Bublava – moderní horský apartmánový dům přímo u sjezdovky s vyhrazeným parkováním',
    altEn: 'Apartments Panorama Bublava residence – modern alpine apartment building directly by ski slopes with private parking',
    altDe: 'Residenz Apartmány Panorama Bublava – modernes alpines Apartmenthaus direkt an der Skipiste mit privatem Parkplatz',
    descCs: 'Moderní horský apartmánový dům přímo u sjezdovky v Bublavě s vyhrazeným parkováním, gabionovou zdí a terasou.',
    descEn: 'Modern alpine apartment residence directly by Bublava ski resort with dedicated parking, gabion wall, and sun terrace.',
    descDe: 'Modernes alpines Apartmenthaus direkt an den Pisten in Bublava mit privaten Parkplätzen, Gabionenwand und Sonnenterrasse.'
  },
  {
    src: '/assets/images/web/apt-real-balcony-winter.jpg',
    titleCs: 'Zimní vyhlídka z balkonu na sjezdovku',
    titleEn: 'Winter Balcony View of Ski Slope',
    titleDe: 'Winterlicher Balkonblick auf die Skipiste',
    categoryCs: 'Hory & Okolí',
    categoryEn: 'Mountains & Nature',
    categoryDe: 'Berge & Natur',
    categorySlug: 'nature',
    altCs: 'Apartmány Panorama Bublava – zimní vyhlídka z balkonu na zasněžené údolí a sjezdovku',
    altEn: 'Apartments Panorama Bublava – winter balcony view of the snowy valley and ski resort',
    altDe: 'Apartmány Panorama Bublava – winterlicher Balkonblick auf das verschneite Tal und Skigebiet',
    descCs: 'Zasněžený privátní balkon s moderním posezením a výhledem přes údolí Bublavy přímo na lyžařský areál.',
    descEn: 'Snow-covered private balcony with contemporary seating and sweeping views across the valley towards the Bublava ski slopes.',
    descDe: 'Verschneiter privater Balkon mit modernen Sitzmöbeln und weitem Blick über das Tal auf die Skipisten von Bublava.'
  },
  {
    src: '/assets/images/web/apt-real-living-rocking-chair.jpg',
    titleCs: 'Obývací pokoj s houpacím křeslem',
    titleEn: 'Living Room with Rocking Chair',
    titleDe: 'Wohnzimmer mit Schaukelstuhl',
    categoryCs: 'Apartmány & Interiéry',
    categoryEn: 'Apartments & Interiors',
    categoryDe: 'Ferienwohnungen & Interieur',
    categorySlug: 'interiors',
    altCs: 'Moderní obývací pokoj s houpacím křeslem, pohovkou a vstupem na balkon – Apartmány Panorama',
    altEn: 'Modern living room with rocking chair, sofa and balcony access – Apartments Panorama',
    altDe: 'Modernes Wohnzimmer mit Schaukelstuhl, Sofa und Balkonzugang – Apartmány Panorama',
    descCs: 'Světlý obývací prostor s designovým houpacím křeslem, pohodlnou pohovkou a přímým vstupem na balkon.',
    descEn: 'Bright living space featuring a designer rocking armchair, plush sofa bed, and direct walk-out to the scenic balcony.',
    descDe: 'Heller Wohnbereich mit Designer-Schaukelstuhl, gemütlichem Schlafsofa und direktem Zugang zum Aussichtsbalkon.'
  },
  {
    src: '/assets/images/web/apt-real-kitchen-dining.jpg',
    titleCs: 'Plně vybavená kuchyně & jídelna',
    titleEn: 'Fully Equipped Kitchen & Dining Area',
    titleDe: 'Voll ausgestattete Küche & Essbereich',
    categoryCs: 'Apartmány & Interiéry',
    categoryEn: 'Apartments & Interiors',
    categoryDe: 'Ferienwohnungen & Interieur',
    categorySlug: 'interiors',
    altCs: 'Kuchyňská linka s moderními spotřebiči a jídelním stolem – Apartmány Panorama',
    altEn: 'Kitchen with modern appliances and dining table – Apartments Panorama',
    altDe: 'Küche mit modernen Geräten und Esstisch – Apartmány Panorama',
    descCs: 'Moderní kuchyň s indukční deskou, mikrovlnkou, kávovarem, rychlovarnou konvicí, toustovačem a jídelním stolem.',
    descEn: 'Contemporary kitchen fitted with induction cooktop, microwave, coffee maker, electric kettle, toaster, and dining table.',
    descDe: 'Moderne Küche mit Induktionskochfeld, Mikrowelle, Kaffeemaschine, Wasserkocher, Toaster und Esstisch.'
  },
  {
    src: '/assets/images/web/residence-exterior-balconies.jpg',
    titleCs: 'Moderní horská architektura',
    titleEn: 'Modern Alpine Architecture',
    titleDe: 'Moderne Alpenarchitektur',
    categoryCs: 'Rezidence & Exteriér',
    categoryEn: 'Residence & Exterior',
    categoryDe: 'Residenz & Außenansicht',
    categorySlug: 'residence',
    altCs: 'Apartmány Panorama v Bublavě – pohled na slunné balkony apartmánů a okolní horskou přírodu Krušných hor',
    altEn: 'Apartments Panorama in Bublava – view of sunny apartment balconies and surrounding Ore Mountains nature',
    altDe: 'Apartmány Panorama in Bublava – Blick auf die sonnigen Balkone und die umliegende Erzgebirgsnatur',
    descCs: 'Pohled na jižní fasádu rezidence se všemi vyhlídkovými balkony, upraveným svahem a smrkovými lesy Krušných hor.',
    descEn: 'View of the south facade showcasing all scenic balconies, landscaped grounds, and lush Ore Mountain spruce forests.',
    descDe: 'Blick auf die Südfassade der Residenz mit allen Aussichtsbalkonen, gepflegtem Hang und Fichtenwäldern.'
  },
  {
    src: '/assets/images/web/apt-real-bedroom-bed.jpg',
    titleCs: 'Komfortní manželské lůžko',
    titleEn: 'Comfortable Master Double Bed',
    titleDe: 'Komfortables Doppelbett',
    categoryCs: 'Apartmány & Interiéry',
    categoryEn: 'Apartments & Interiors',
    categoryDe: 'Ferienwohnungen & Interieur',
    categorySlug: 'interiors',
    altCs: 'Ložnice s manželskou postelí z masivu a lampičkami – Apartmány Panorama Bublava',
    altEn: 'Bedroom with solid wood double bed and reading lamps – Apartments Panorama Bublava',
    altDe: 'Schlafzimmer mit Massivholz-Doppelbett und Leselampen – Apartmány Panorama Bublava',
    descCs: 'Velká manželská postel z masivního dřeva s nočními lampičkami s hřejivým světlem a čerstvými ručníky.',
    descEn: 'Generous solid wood double bed with warm ambient reading lamps and fluffy fresh towels upon arrival.',
    descDe: 'Großes Massivholz-Doppelbett mit warmen Leselampen und frischen Handtüchern bei Ankunft.'
  },
  {
    src: '/assets/images/web/apt-real-balcony-summer.jpg',
    titleCs: 'Letní panoráma z balkonu',
    titleEn: 'Summer Mountain Balcony Panorama',
    titleDe: 'Sommerliches Balkonpanorama',
    categoryCs: 'Hory & Okolí',
    categoryEn: 'Mountains & Nature',
    categoryDe: 'Berge & Natur',
    categorySlug: 'nature',
    altCs: 'Letní výhled z balkonu apartmánu na zelené kopce Krušných hor a sjezdovku Bublava',
    altEn: 'Summer balcony view of lush green hills and Bublava slopes – Ore Mountains',
    altDe: 'Sommerlicher Balkonblick auf die grünen Berge und Skipisten von Bublava – Erzgebirge',
    descCs: 'Slunný letní výhled na zalesněné hřebeny Krušných hor a zelenou sjezdovku přímo z apartmánu.',
    descEn: 'Sunny summer view of lush Ore Mountain ridges and green alpine slopes directly from the apartment.',
    descDe: 'Sonniger Sommerblick auf die bewaldeten Kämme des Erzgebirges und die grünen Hänge direkt vom Apartment.'
  },
  {
    src: '/assets/images/web/apt-real-bathroom-shower.jpg',
    titleCs: 'Moderní koupelna se sprchou',
    titleEn: 'Modern Bathroom with Glass Shower',
    titleDe: 'Modernes Badezimmer mit Glasdusche',
    categoryCs: 'Apartmány & Interiéry',
    categoryEn: 'Apartments & Interiors',
    categoryDe: 'Ferienwohnungen & Interieur',
    categorySlug: 'interiors',
    altCs: 'Moderní koupelna s proskleným sprchovým koutem a zrcadlem – Apartmány Panorama',
    altEn: 'Modern bathroom with glass shower stall and mirror – Apartments Panorama',
    altDe: 'Modernes Badezimmer mit Glas-Duschkabine und Spiegel – Apartmány Panorama',
    descCs: 'Sprchový kout s dešťovou sprchou, zrcadlová skříňka s LED osvětlením, keramické umyvadlo a toaleta.',
    descEn: 'Glass shower enclosure with rain head, LED illuminated mirror cabinet, ceramic sink vanity, and toilet.',
    descDe: 'Glas-Duschkabine mit Regendusche, LED-Spiegelschrank, Keramik-Waschtisch und WC.'
  },
  {
    src: '/assets/images/web/lobby-bar-evening.jpg',
    titleCs: 'Lobby Bar & Večerní posezení',
    titleEn: 'Lobby Bar & Evening Lounge',
    titleDe: 'Lobby Bar & Abend-Lounge',
    categoryCs: 'Lobby Bar & Lounge',
    categoryEn: 'Lobby Bar & Lounge',
    categoryDe: 'Lobby Bar & Lounge',
    categorySlug: 'lobby',
    altCs: 'Rezidenční Lobby Bar v 1. NP rezidence – večerní posezení se sportovními přenosy',
    altEn: 'Residential Lobby Bar on ground floor – evening sports broadcasts and lounge',
    altDe: 'Residenz-Lobby-Bar im Erdgeschoss – abendliche Sportübertragungen und Lounge',
    descCs: 'Příjemné společenské zázemí v přízemí rezidence pro ranní espresso, odpolední drink a večerní sportovní přenosy.',
    descEn: 'Sociable ground-floor lounge for morning espresso, afternoon drinks, and evening sports broadcasts.',
    descDe: 'Geselliger Treffpunkt im Erdgeschoss für morgendlichen Espresso, Après-Ski-Drinks und Live-Sportübertragungen.'
  },
  {
    src: '/assets/images/web/apt-real-living-tv-lounge.jpg',
    titleCs: 'Multimediální relaxační kout & Smart TV',
    titleEn: 'Smart TV & Media Lounge Corner',
    titleDe: 'Smart-TV & Multimedia-Entspannungsecke',
    categoryCs: 'Apartmány & Interiéry',
    categoryEn: 'Apartments & Interiors',
    categoryDe: 'Ferienwohnungen & Interieur',
    categorySlug: 'interiors',
    altCs: 'Velká Smart TV, designový stolek a rostlina v obývacím pokoji – Apartmány Panorama',
    altEn: 'Large Smart TV, coffee table and house plant in living room – Apartments Panorama',
    altDe: 'Großer Smart-TV, Couchtisch und Zimmerpflanze im Wohnzimmer – Apartmány Panorama',
    descCs: 'Velká Smart TV s bohatou nabídkou kanálů, konferenční stolek s aroma difuzérem a moderní úložná komoda.',
    descEn: 'Large Smart TV with streaming options, modern nesting coffee table with scent diffuser, and stylish lowboard storage.',
    descDe: 'Großer Smart-TV mit reichhaltigem Programmangebot, Couchtisch mit Aroma-Diffusor und elegantes Sideboard.'
  },
  {
    src: '/assets/images/web/apt-real-bedroom-wardrobe.jpg',
    titleCs: 'Ložnice se šatní skříní a velkým oknem',
    titleEn: 'Bedroom with Mirrored Wardrobe',
    titleDe: 'Schlafzimmer mit Spiegelschrank',
    categoryCs: 'Apartmány & Interiéry',
    categoryEn: 'Apartments & Interiors',
    categoryDe: 'Ferienwohnungen & Interieur',
    categorySlug: 'interiors',
    altCs: 'Ložnice se šatní skříní se zrcadlem a oknem – Apartmány Panorama Bublava',
    altEn: 'Bedroom with mirrored wardrobe and large window – Apartments Panorama Bublava',
    altDe: 'Schlafzimmer mit Spiegelschrank und großem Fenster – Apartmány Panorama Bublava',
    descCs: 'Dostatek úložného prostoru v zrcadlové šatní skříni, příjemné denní světlo a stropní infračervené vytápění.',
    descEn: 'Ample storage in mirrored wardrobe, abundant daylight through large window, and ceiling infrared heating panel.',
    descDe: 'Viel Stauraum im Spiegelschrank, angenehmes Tageslicht und wohltuende Infrarot-Deckenheizung.'
  },
  {
    src: '/assets/images/web/apt-real-entrance-hall.jpg',
    titleCs: 'Vstup do apartmánu & přivítání',
    titleEn: 'Apartment Entrance & Welcome',
    titleDe: 'Apartment-Eingang & Willkommen',
    categoryCs: 'Apartmány & Interiéry',
    categoryEn: 'Apartments & Interiors',
    categoryDe: 'Ferienwohnungen & Interieur',
    categorySlug: 'interiors',
    altCs: 'Otevřené vstupní dveře do apartmánu Panorama s výhledem na jídelní kout',
    altEn: 'Open entrance door to Panorama apartment overlooking dining area',
    altDe: 'Geöffnete Eingangstür zum Apartment Panorama mit Blick auf die Essecke',
    descCs: 'Bezpečné akustické vstupní dveře otevírající pohled do prosluněného apartmánu s připraveným uvítáním.',
    descEn: 'Secure acoustic entry door opening directly into the bright, welcoming interior with greeting touches.',
    descDe: 'Sichere schallgedämmte Eingangstür mit Blick in das helle, einladende Apartment.'
  },
  {
    src: '/assets/images/web/apt-kitchen-dining-full.jpg',
    titleCs: 'Jídelní kout & Plně vybavená kuchyně',
    titleEn: 'Dining Lounge & Fully Equipped Kitchen',
    titleDe: 'Essbereich & Voll ausgestattete Küche',
    categoryCs: 'Apartmány & Interiéry',
    categoryEn: 'Apartments & Interiors',
    categoryDe: 'Ferienwohnungen & Interieur',
    categorySlug: 'interiors',
    altCs: 'Apartmány Panorama Bublava – plně vybavená moderní kuchyň s jídelním stolem, kávovarem a výhledem na hory',
    altEn: 'Apartments Panorama Bublava – fully equipped modern kitchen with dining table, coffee maker and scenic mountain views',
    altDe: 'Apartmány Panorama Bublava – voll ausgestattete moderne Küche mit Esstisch, Kaffeemaschine und Bergblick',
    descCs: 'Plnohodnotná kuchyňská linka s dřevěnou pracovní deskou, mikrovlnnou troubou, kávovarem a jídelním stolem pro 4 osoby.',
    descEn: 'Full kitchen with natural wood worktops, built-in microwave, coffee maker, and dining table for 4 guests.',
    descDe: 'Voll ausgestattete Küchenzeile mit Echtholz-Arbeitsplatte, Mikrowelle, Kaffeemaschine und Esstisch für 4 Personen.'
  },
  {
    src: '/assets/images/web/apt-balcony-rattan.jpg',
    titleCs: 'Privátní vyhlídkový balkon',
    titleEn: 'Private Scenic Balcony',
    titleDe: 'Privater Aussichtsbalkon',
    categoryCs: 'Rezidence & Exteriér',
    categoryEn: 'Residence & Exterior',
    categoryDe: 'Residenz & Außenansicht',
    categorySlug: 'residence',
    altCs: 'Privátní vyhlídkový balkon apartmánu s ratanovým posezením – Apartmány Panorama Bublava',
    altEn: 'Private scenic apartment balcony with rattan lounge seating – Apartments Panorama Bublava',
    altDe: 'Privater Aussichtsbalkon der Ferienwohnung mit Rattan-Sitzgruppe – Apartmány Panorama Bublava',
    descCs: 'Slunný balkon s perforovaným kovovým zábradlím, pohodlným ratanovým posezením a výhledem do zeleně a údolí Bublavy.',
    descEn: 'Sunny balcony with modern perforated steel railing, comfortable rattan armchairs, and views over Bublava valley.',
    descDe: 'Sonniger Balkon mit modernem Stahlgeländer, bequemen Rattan-Sesseln und herrlichem Blick ins Bublava-Tal.'
  },
  {
    src: '/assets/images/apartments/real-balcony-view-slope.jpg',
    titleCs: 'Výhled z balkonu na sjezdovku',
    titleEn: 'Direct Ski Slope View from Balcony',
    titleDe: 'Balkonblick direkt auf die Skipiste',
    categoryCs: 'Hory & Okolí',
    categoryEn: 'Mountains & Surroundings',
    categoryDe: 'Berge & Umgebung',
    categorySlug: 'nature',
    altCs: 'Reálný výhled z balkonu apartmánu Panorama na lyžařský areál Bublava a Krušné hory',
    altEn: 'Real view from apartment balcony overlooking the ski slope and chairlift in Bublava – Ore Mountains',
    altDe: 'Realer Blick vom Balkon der Apartmány Panorama auf das Skigebiet Bublava und das Erzgebirge',
    descCs: 'Autentická fotografie přímo z balkonu rezidence s pohledem přes zasněžené údolí na sjezdovku a lanovku Bublava.',
    descEn: 'Authentic photo from the apartment balcony overlooking the snow-covered valley, ski pistes, and chairlift in Bublava.',
    descDe: 'Authentisches Foto direkt vom Balkon mit Blick über das verschneite Tal auf Pisten und Sessellift in Bublava.'
  },
  {
    src: '/assets/images/web/apt-bedroom-master.jpg',
    titleCs: 'Klidová manželská ložnice',
    titleEn: 'Peaceful Master Bedroom',
    titleDe: 'Ruhiges Hauptschlafzimmer',
    categoryCs: 'Apartmány & Interiéry',
    categoryEn: 'Apartments & Interiors',
    categoryDe: 'Ferienwohnungen & Interieur',
    categorySlug: 'interiors',
    altCs: 'Komfortní ložnice s manželskou postelí a prémiovým ložním prádlem – Apartmány Panorama Bublava',
    altEn: 'Comfortable master bedroom with double bed and premium linens – Apartments Panorama Bublava',
    altDe: 'Komfortables Schlafzimmer mit Doppelbett und Premium-Bettwäsche – Apartmány Panorama Bublava',
    descCs: 'Prostorná manželská postel s úložnými zásuvkami, prémiové pruhované povlečení a tiché prostředí pro nerušený spánek.',
    descEn: 'Spacious double bed with under-bed storage drawers, premium striped linens, and a peaceful mountain setting.',
    descDe: 'Großzügiges Doppelbett mit Bettkästen, feine gestreifte Bettwäsche und absolute Ruhe für erholsamen Schlaf.'
  },
  {
    src: '/assets/images/web/apt-living-lounge-warm.jpg',
    titleCs: 'Útulný obývací prostor v teplém světle',
    titleEn: 'Cozy Sunlit Living Lounge',
    titleDe: 'Gemütliche Wohn-Lounge im warmen Licht',
    categoryCs: 'Apartmány & Interiéry',
    categoryEn: 'Apartments & Interiors',
    categoryDe: 'Ferienwohnungen & Interieur',
    categorySlug: 'interiors',
    altCs: 'Útulný obývací prostor v teplém odpoledním světle s pohodlnou pohovkou – Apartmány Panorama',
    altEn: 'Cozy living lounge bathed in warm afternoon sunlight with comfortable sofa – Apartments Panorama',
    altDe: 'Gemütlicher Wohnbereich im warmen Nachmittagslicht mit bequemer Schlafcouch – Apartmány Panorama',
    descCs: 'Pohodlná rozkládací pohovka s polštáři, konferenční stolky a příjemné odpolední světlo prostupující celým apartmánem.',
    descEn: 'Comfortable sofa bed with plush pillows, nested coffee tables, and warm afternoon light filling the apartment.',
    descDe: 'Bequemes Schlafsofa mit Kissen, Couchtische und warmes Nachmittagslicht im gesamten Apartment.'
  },
  {
    src: '/assets/images/web/apt-bathroom-shower.jpg',
    titleCs: 'Moderní koupelna se sprchou',
    titleEn: 'Modern Bathroom & Shower',
    titleDe: 'Modernes Badezimmer mit Dusche',
    categoryCs: 'Apartmány & Interiéry',
    categoryEn: 'Apartments & Interiors',
    categoryDe: 'Ferienwohnungen & Interieur',
    categorySlug: 'interiors',
    altCs: 'Moderní koupelna s proskleným sprchovým koutem a zrcadlovou skříňkou – Apartmány Panorama Bublava',
    altEn: 'Modern bathroom with glass corner shower enclosure and mirror cabinet – Apartments Panorama Bublava',
    altDe: 'Modernes Badezimmer mit Glas-Eckdusche und Spiegelschrank – Apartmány Panorama Bublava',
    descCs: 'Rohový sprchový kout s hlavovou i ruční sprchou, zrcadlová skříňka s osvětlením a teplé pískové keramické obklady.',
    descEn: 'Corner glass shower enclosure with rain shower head, illuminated mirror cabinet, and warm sandstone tiling.',
    descDe: 'Eck-Glasdusche mit Regen- und Handbrause, beleuchteter Spiegelschrank und warme Sandstein-Fliesen.'
  },
  {
    src: '/assets/images/web/apt-kitchen-counter-detail.jpg',
    titleCs: 'Detail kuchyňské linky a dřezu',
    titleEn: 'Kitchen Workspace & Sink Detail',
    titleDe: 'Küchenarbeitsplatz & Spüldetail',
    categoryCs: 'Apartmány & Interiéry',
    categoryEn: 'Apartments & Interiors',
    categoryDe: 'Ferienwohnungen & Interieur',
    categorySlug: 'interiors',
    altCs: 'Detail kuchyňské linky s černým granitovým dřezem, kávovarem a indukční varnou deskou – Apartmány Panorama',
    altEn: 'Detail of kitchen workspace with black granite sink, coffee maker and induction hob – Apartments Panorama',
    altDe: 'Küchendetail mit schwarzer Granitspüle, Kaffeemaschine und Induktionskochfeld – Apartmány Panorama',
    descCs: 'Černý granitový dřez, designová vysoká baterie, kapslový kávovar, rychlovarná konvice a indukční varná deska.',
    descEn: 'Black granite composite sink, designer high-arc faucet, capsule coffee machine, kettle, and induction cooktop.',
    descDe: 'Schwarze Granit-Verbundspüle, Designer-Armatur, Kapsel-Kaffeemaschine, Wasserkocher und Induktionskochfeld.'
  }
];

let isLightboxZoomed = false;

function initPanoramaGalleryFilmstrip() {
  const strip = document.getElementById('lb-filmstrip');
  if (!strip) return;
  strip.innerHTML = '';
  const isEn = typeof currentLang !== 'undefined' && currentLang === 'en';
  panoramaGalleryData.forEach((item, index) => {
    const thumb = document.createElement('div');
    thumb.className = `lightbox-thumb ${index === currentGalleryIndex ? 'active' : ''}`;
    thumb.setAttribute('data-index', index);
    thumb.onclick = (e) => {
      e.stopPropagation();
      setPanoramaImage(index);
    };
    const isDe = typeof currentLang !== 'undefined' && currentLang === 'de';
    const title = isDe ? (item.titleDe || item.titleEn) : (isEn ? item.titleEn : item.titleCs);
    thumb.innerHTML = `<img src="${item.src}" alt="${title}" loading="lazy">`;
    strip.appendChild(thumb);
  });
}

function openPanoramaLightbox(index = 0) {
  currentGalleryIndex = index;
  const modal = document.getElementById('panorama-lightbox');
  if (!modal) return;
  
  initPanoramaGalleryFilmstrip();
  setPanoramaImage(index);
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePanoramaLightbox() {
  const modal = document.getElementById('panorama-lightbox');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
  resetLightboxZoom();
}

function setPanoramaImage(index) {
  if (index < 0) index = panoramaGalleryData.length - 1;
  if (index >= panoramaGalleryData.length) index = 0;
  currentGalleryIndex = index;
  
  resetLightboxZoom();

  const item = panoramaGalleryData[index];
  const img = document.getElementById('lb-main-image');
  const countEl = document.getElementById('lb-current-index');
  const totalEl = document.getElementById('lb-total-count');
  const catEl = document.getElementById('lb-category');
  const titleEl = document.getElementById('lb-title');
  const descEl = document.getElementById('lb-desc');
  
  const isEn = typeof currentLang !== 'undefined' && currentLang === 'en';
  const isDe = typeof currentLang !== 'undefined' && currentLang === 'de';
  const categoryText = isDe ? (item.categoryDe || item.categoryEn || item.categoryCs) : isEn ? (item.categoryEn || item.categoryCs) : item.categoryCs;
  const titleText = isDe ? (item.titleDe || item.titleEn || item.titleCs) : isEn ? (item.titleEn || item.titleCs) : item.titleCs;
  const descText = isDe ? (item.descDe || item.descEn || item.descCs) : isEn ? (item.descEn || item.descCs) : item.descCs;
  const altText = isDe ? (item.altDe || item.titleDe) : isEn ? (item.altEn || item.titleEn) : (item.altCs || item.titleCs);

  if (countEl) countEl.textContent = String(index + 1).padStart(2, '0');
  if (totalEl) totalEl.textContent = String(panoramaGalleryData.length).padStart(2, '0');
  if (catEl) catEl.textContent = categoryText;
  if (titleEl) titleEl.textContent = titleText;
  if (descEl) descEl.textContent = descText;
  
  if (img) {
    img.style.opacity = '0';
    img.src = item.src;
    img.alt = altText;
    img.onload = () => {
      img.style.opacity = '1';
    };
  }

  // Update filmstrip active state & scroll into view
  document.querySelectorAll('.lightbox-thumb').forEach((thumb, i) => {
    if (i === index) {
      thumb.classList.add('active');
      thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    } else {
      thumb.classList.remove('active');
    }
  });
}

function nextPanoramaImage() {
  setPanoramaImage(currentGalleryIndex + 1);
}

function prevPanoramaImage() {
  setPanoramaImage(currentGalleryIndex - 1);
}

function toggleLightboxZoom() {
  const img = document.getElementById('lb-main-image');
  const btn = document.getElementById('lb-zoom-btn');
  if (!img) return;
  isLightboxZoomed = !isLightboxZoomed;
  if (isLightboxZoomed) {
    img.classList.add('zoomed');
    if (btn) btn.innerHTML = '<i class="fa-solid fa-magnifying-glass-minus"></i>';
  } else {
    resetLightboxZoom();
  }
}

function resetLightboxZoom() {
  const img = document.getElementById('lb-main-image');
  const btn = document.getElementById('lb-zoom-btn');
  isLightboxZoomed = false;
  if (img) img.classList.remove('zoomed');
  if (btn) btn.innerHTML = '<i class="fa-solid fa-magnifying-glass-plus"></i>';
}

let lastImageTapTime = 0;
function handleLightboxImageClick(e) {
  if (e && e.pointerType === 'touch') {
    const now = Date.now();
    if (now - lastImageTapTime < 320) {
      toggleLightboxZoom();
      lastImageTapTime = 0;
    } else {
      lastImageTapTime = now;
    }
  } else {
    // Desktop mouse click zooms directly
    toggleLightboxZoom();
  }
}

function toggleLightboxFullscreen() {
  const modal = document.getElementById('panorama-lightbox');
  if (!modal) return;
  if (!document.fullscreenElement) {
    modal.requestFullscreen().catch(err => console.log(err));
  } else {
    document.exitFullscreen().catch(err => console.log(err));
  }
}

let isGalleryExpanded = false;

function toggleGalleryExpand() {
  const grid = document.getElementById('panorama-gallery-grid');
  const btn = document.getElementById('gallery-toggle-btn');
  const btnIcon = btn ? btn.querySelector('.gallery-toggle-icon i') : null;
  if (!grid) return;

  isGalleryExpanded = !isGalleryExpanded;

  if (isGalleryExpanded) {
    grid.classList.add('is-expanded');
    if (btnIcon) {
      btnIcon.className = 'fa-solid fa-chevron-up';
    }
  } else {
    grid.classList.remove('is-expanded');
    if (btnIcon) {
      btnIcon.className = 'fa-solid fa-chevron-down';
    }
    const galleryEl = document.getElementById('gallery');
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: 'smooth' });
    }
  }
  updateGalleryExpandButtonText();
}

function updateGalleryExpandButtonText(customLang) {
  const btn = document.getElementById('gallery-toggle-btn');
  if (!btn) return;
  const btnText = btn.querySelector('.gallery-btn-text');
  if (!btnText) return;

  const lang = customLang || (typeof currentLang !== 'undefined' ? currentLang : 'cs');
  const isEn = lang === 'en';
  const isDe = lang === 'de';

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const activeBtn = document.querySelector('.gallery-filter-btn.active');
  const activeFilter = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';

  if (isGalleryExpanded) {
    btnText.textContent = isDe ? 'Weniger Fotos anzeigen' : (isEn ? 'Show fewer photos' : 'Zobrazit méně fotografií');
    btn.style.display = 'inline-flex';
  } else {
    const cards = document.querySelectorAll('.gallery-card');
    let totalInFilter = 0;
    cards.forEach(card => {
      const cardCat = card.getAttribute('data-category');
      if (activeFilter === 'all' || cardCat === activeFilter) {
        totalInFilter++;
      }
    });

    const visibleThreshold = isMobile ? 4 : 7;
    const remaining = Math.max(0, totalInFilter - visibleThreshold);

    if (totalInFilter <= visibleThreshold) {
      btn.style.display = 'none';
    } else {
      btn.style.display = 'inline-flex';
      btnText.textContent = isDe
        ? `Weitere Fotos anzeigen (${remaining})`
        : (isEn ? `Show more photos (${remaining})` : `Zobrazit další fotografie (${remaining})`);
    }
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('resize', () => {
    updateGalleryExpandButtonText();
  });
}

// Category Filter in Section Grid
function filterPanoramaGallery(category) {
  document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
    if (btn.getAttribute('data-filter') === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  document.querySelectorAll('.gallery-card').forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat === category) {
      card.classList.remove('filtered-out');
      card.style.opacity = '0';
      card.style.transform = 'translateY(15px)';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 50);
    } else {
      card.classList.add('filtered-out');
    }
  });

  updateGalleryExpandButtonText();
}

// Live update on-page gallery cards when language changes
function updateGalleryCardsLanguage(lang) {
  const isEn = lang === 'en';
  const isDe = lang === 'de';
  document.querySelectorAll('.gallery-card').forEach((card, idx) => {
    const data = panoramaGalleryData[idx];
    if (!data) return;
    const badge = card.querySelector('.gallery-badge');
    const title = card.querySelector('.gallery-card-title');
    const desc = card.querySelector('.gallery-card-desc');
    const img = card.querySelector('img');
    if (badge) badge.textContent = isDe ? (data.categoryDe || data.categoryEn) : isEn ? data.categoryEn : data.categoryCs;
    if (title) title.textContent = isDe ? (data.titleDe || data.titleEn) : isEn ? data.titleEn : data.titleCs;
    if (desc) desc.textContent = isDe ? (data.descDe || data.descEn) : isEn ? data.descEn : data.descCs;
    if (img) img.alt = isDe ? (data.altDe || data.titleDe || data.titleEn) : isEn ? (data.altEn || data.titleEn) : (data.altCs || data.titleCs);
  });
}

// Keyboard navigation & touch gestures
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('panorama-lightbox');
  if (modal && modal.classList.contains('active')) {
    if (e.key === 'ArrowRight') {
      nextPanoramaImage();
    } else if (e.key === 'ArrowLeft') {
      prevPanoramaImage();
    } else if (e.key === 'Escape') {
      closePanoramaLightbox();
    }
  }

  const aptModal = document.getElementById('apt-detail-modal');
  if (aptModal && aptModal.classList.contains('active')) {
    if (e.key === 'Escape') {
      closeAptDetailModal();
    }
  }

  if (e.key === 'Escape') {
    closeAlpineCalendar();
    const dropdown = document.getElementById('apt-dropdown-container');
    if (dropdown) {
      dropdown.classList.remove('open');
      document.getElementById('apt-dropdown-trigger')?.setAttribute('aria-expanded', 'false');
    }
  }
});

// Mobile Touch gestures: Swipe next/prev & pull-down to dismiss
let touchStartX = 0;
let touchStartY = 0;
let touchStartTime = 0;

document.addEventListener('touchstart', (e) => {
  const modal = document.getElementById('panorama-lightbox');
  if (modal && modal.classList.contains('active')) {
    if (e.target.closest('#lb-filmstrip') || e.target.closest('.lightbox-actions') || e.target.closest('.lightbox-topbar')) return;
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
    touchStartTime = Date.now();
  }
}, { passive: true });

document.addEventListener('touchend', (e) => {
  const modal = document.getElementById('panorama-lightbox');
  if (modal && modal.classList.contains('active')) {
    if (e.target.closest('#lb-filmstrip') || e.target.closest('.lightbox-actions') || e.target.closest('.lightbox-topbar')) return;
    const touchEndX = e.changedTouches[0].screenX;
    const touchEndY = e.changedTouches[0].screenY;
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;
    const timeElapsed = Date.now() - touchStartTime;

    // Do not swipe images if zoomed in
    if (isLightboxZoomed) return;

    // Horizontal swipe (next / prev)
    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY) * 1.2 && timeElapsed < 600) {
      if (diffX < 0) {
        nextPanoramaImage();
      } else {
        prevPanoramaImage();
      }
    }
    // Pull down to dismiss (> 80px downward swipe)
    else if (diffY > 80 && Math.abs(diffY) > Math.abs(diffX) * 1.5 && timeElapsed < 600) {
      closePanoramaLightbox();
    }
  }
}, { passive: true });


// =============================================================================
// 14. Bespoke Luxury Alpine Dropdown, Pricing Engine & Date Range Calendar
// =============================================================================

// Pricing Configuration (Placeholders subject to owner refinement)
const APARTMENT_PRICES = {
  'all': {
    pricePerNight: 5400,
    cs: 'Všechny 3 apartmány (až 14 hostů)',
    en: 'All 3 Apartments (Up to 14 guests)'
  },
  '1': {
    pricePerNight: 1800,
    cs: 'Panoramatický rohový apartmán (Apartmán 1 • až 6 hostů)',
    en: 'Panoramic Corner Suite (Apartment 1 • up to 6 guests)'
  },
  '2': {
    pricePerNight: 1800,
    cs: 'Horský apartmán s privátním balkonem (Apartmán 2 • 4 hosté)',
    en: 'Mountain Balcony Suite (Apartment 2 • 4 guests)'
  },
  '3': {
    pricePerNight: 1800,
    cs: 'Podkrovní apartmán s vyhlídkovým balkonem (Apartmán 3 • 4 hosté)',
    en: 'Attic Scenic Suite (Apartment 3 • 4 guests)'
  }
};
// Aliases for legacy numbers (6, 5, 10)
APARTMENT_PRICES['6'] = APARTMENT_PRICES['1'];
APARTMENT_PRICES['5'] = APARTMENT_PRICES['2'];
APARTMENT_PRICES['10'] = APARTMENT_PRICES['3'];

function getSelectedApartmentId() {
  const hiddenSelect = document.getElementById('book-apartment');
  return (hiddenSelect && hiddenSelect.value) ? hiddenSelect.value : '';
}

function formatStayPrice(amount) {
  const isEn = typeof currentLang !== 'undefined' && currentLang === 'en';
  const isDe = typeof currentLang !== 'undefined' && currentLang === 'de';
  if (isDe) {
    return `${amount.toLocaleString('de-DE')} CZK`;
  }
  if (isEn) {
    return `${amount.toLocaleString('en-US')} CZK`;
  }
  return `${amount.toLocaleString('cs-CZ')} Kč`;
}

function getNightsStayWord(count) {
  const isEn = typeof currentLang !== 'undefined' && currentLang === 'en';
  const isDe = typeof currentLang !== 'undefined' && currentLang === 'de';
  if (isDe) {
    return count === 1 ? 'Nacht' : 'Nächte';
  }
  if (isEn) {
    return count === 1 ? 'night' : 'nights';
  }
  if (count === 1) return 'noc';
  if (count >= 2 && count <= 4) return 'noci';
  return 'nocí';
}

function getStayPricing(nightsCount) {
  const aptId = getSelectedApartmentId();
  const aptData = (aptId && APARTMENT_PRICES[aptId]) ? APARTMENT_PRICES[aptId] : {
    pricePerNight: 1800,
    cs: 'Orientační kalkulace',
    en: 'Estimated pricing'
  };
  const nights = Math.max(1, nightsCount || 1);
  const totalPrice = aptData.pricePerNight * nights;
  const isMinStayMet = nights >= 2;
  const nightWord = getNightsStayWord(nights);
  const formattedPrice = formatStayPrice(totalPrice);

  return {
    aptId,
    aptData,
    nights,
    nightWord,
    totalPrice,
    formattedPrice,
    isMinStayMet,
    isExactApt: Boolean(aptId)
  };
}

function updateBookingBarPricing(pricingData) {
  const livePriceEl = document.getElementById('booking-live-price');
  const pinnedLivePriceEl = document.getElementById('pinned-booking-live-price');
  if (!livePriceEl && !pinnedLivePriceEl) return;

  const isEn = typeof currentLang !== 'undefined' && currentLang === 'en';
  let pricing = pricingData;
  if (!pricing && calCheckinDate && calCheckoutDate) {
    const diff = Math.max(1, Math.round(Math.abs(calCheckoutDate - calCheckinDate) / (1000 * 60 * 60 * 24)));
    pricing = getStayPricing(diff);
  }

  const isDe = typeof currentLang !== 'undefined' && currentLang === 'de';
  // If dates are not selected yet:
  if (!pricing || !calCheckinDate || !calCheckoutDate) {
    const defaultText = isDe ? 'Termine für Preisschätzung wählen' : (isEn ? 'Select dates for pricing estimate' : 'Vyberte termín pro orientační kalkulaci');
    const defaultHtml = `<i class="fa-solid fa-calendar-day" style="font-size: 10px; color: #ff9d5c;"></i><span data-i18n="book_calc_hint">${defaultText}</span>`;
    if (livePriceEl) {
      livePriceEl.className = 'booking-live-price';
      livePriceEl.innerHTML = defaultHtml;
    }
    if (pinnedLivePriceEl) {
      pinnedLivePriceEl.className = 'booking-live-price pinned-live-price';
      pinnedLivePriceEl.innerHTML = defaultHtml;
    }
    const pMobSub = document.getElementById('pinned-mobile-sub-text');
    if (pMobSub) pMobSub.textContent = defaultText;
    return;
  }

  const prefix = pricing.isExactApt ? (isDe ? 'Geschätzter Preis:' : isEn ? 'Est. price:' : 'Kalkulace:') : (isDe ? 'Ab ca.:' : isEn ? 'From:' : 'Orientačně od:');
  const htmlSuccess = `<i class="fa-solid fa-tag" style="font-size: 10px; color: #ff9d5c;"></i><span>${prefix} <strong>${pricing.formattedPrice}</strong> <span style="font-size: 10px; opacity: 0.7;">(${pricing.nights} ${pricing.nightWord})</span></span>`;
  const warnText = isDe ? 'Mindestaufenthalt: <strong>2 Nächte</strong>' : (isEn ? 'Min. stay: <strong>2 nights</strong>' : 'Min. délka pobytu: <strong>2 noci</strong>');
  const htmlWarning = `<i class="fa-solid fa-circle-exclamation" style="font-size: 10px; color: #ff8a43;"></i><span>${warnText}</span>`;

  if (livePriceEl) {
    livePriceEl.className = pricing.isMinStayMet ? 'booking-live-price' : 'booking-live-price is-warning';
    livePriceEl.innerHTML = pricing.isMinStayMet ? htmlSuccess : htmlWarning;
  }

  if (pinnedLivePriceEl) {
    pinnedLivePriceEl.className = pricing.isMinStayMet ? 'booking-live-price pinned-live-price' : 'booking-live-price pinned-live-price is-warning';
    pinnedLivePriceEl.innerHTML = pricing.isMinStayMet ? htmlSuccess : htmlWarning;
  }
}

// --- A. Custom Apartment Dropdown ---
function toggleAptDropdown(e) {
  if (e) e.stopPropagation();
  const dropdown = document.getElementById('apt-dropdown-container');
  if (!dropdown) return;
  const isOpen = dropdown.classList.contains('open');
  closeAlpineCalendar();
  document.getElementById('pinned-apt-dropdown-container')?.classList.remove('open');
  if (isOpen) {
    dropdown.classList.remove('open');
    document.getElementById('apt-dropdown-trigger')?.setAttribute('aria-expanded', 'false');
  } else {
    dropdown.classList.add('open');
    document.getElementById('apt-dropdown-trigger')?.setAttribute('aria-expanded', 'true');
  }
}

function closePinnedAptDropdown() {
  const menu = document.getElementById('pinned-apt-dropdown-menu');
  if (menu) menu.classList.remove('open');
  document.getElementById('pinned-apt-dropdown-container')?.classList.remove('open');
  document.getElementById('pinned-apt-dropdown-trigger')?.setAttribute('aria-expanded', 'false');
  document.getElementById('pinned-mobile-apt-pill')?.classList.remove('active');
}

function togglePinnedAptDropdown(e) {
  if (e) e.stopPropagation();
  const menu = document.getElementById('pinned-apt-dropdown-menu');
  if (!menu) return;
  const isOpen = menu.classList.contains('open');
  closeAlpineCalendar();
  document.getElementById('apt-dropdown-container')?.classList.remove('open');
  if (isOpen) {
    closePinnedAptDropdown();
  } else {
    menu.classList.add('open');
    document.getElementById('pinned-apt-dropdown-container')?.classList.add('open');
    document.getElementById('pinned-apt-dropdown-trigger')?.setAttribute('aria-expanded', 'true');
    document.getElementById('pinned-mobile-apt-pill')?.classList.add('active');
  }
}

function selectAptOption(val, title, el) {
  const hiddenSelect = document.getElementById('book-apartment');
  if (hiddenSelect) {
    hiddenSelect.value = val;
    for (let i = 0; i < hiddenSelect.options.length; i++) {
      if (hiddenSelect.options[i].value === val) {
        hiddenSelect.selectedIndex = i;
        break;
      }
    }
    hiddenSelect.dispatchEvent(new Event('change'));
  }

  // Concise titles for mobile pill
  const isEn = typeof currentLang !== 'undefined' && currentLang === 'en';
  let mobileTitle = title;
  if (!val) mobileTitle = isEn ? 'Select room' : 'Zvolit pokoj';
  else if (val === 'all') mobileTitle = isEn ? 'All (3)' : 'Všechny (3)';
  else if (val === '1' || val === '6') mobileTitle = isEn ? 'Apt 1' : 'Apartmán 1';
  else if (val === '2' || val === '5') mobileTitle = isEn ? 'Apt 2' : 'Apartmán 2';
  else if (val === '3' || val === '10') mobileTitle = isEn ? 'Apt 3' : 'Apartmán 3';

  // Update hero dropdown text
  const selectedText = document.getElementById('apt-dropdown-selected');
  if (selectedText) {
    selectedText.textContent = title;
  }

  // Update pinned dropdown text
  const pinnedSelectedText = document.getElementById('pinned-apt-selected');
  if (pinnedSelectedText) {
    pinnedSelectedText.textContent = title;
  }

  // Update mobile summary text
  const mobileAptText = document.getElementById('pinned-mobile-apt-text');
  if (mobileAptText) {
    mobileAptText.textContent = mobileTitle;
  }

  // Synchronize active classes on all matching options across both bars
  document.querySelectorAll(`.custom-dropdown__option`).forEach(opt => {
    if (opt.getAttribute('data-value') === val) {
      opt.classList.add('selected');
      opt.setAttribute('aria-selected', 'true');
    } else {
      opt.classList.remove('selected');
      opt.setAttribute('aria-selected', 'false');
    }
  });

  // Close both dropdowns
  const dropdown = document.getElementById('apt-dropdown-container');
  if (dropdown) {
    dropdown.classList.remove('open');
    document.getElementById('apt-dropdown-trigger')?.setAttribute('aria-expanded', 'false');
  }
  closePinnedAptDropdown();

  // Live recalculate pricing for chosen apartment
  updateCalBarDisplays();
}

// --- B. Custom Alpine Date Range Calendar Engine ---

function formatCalISO(d) {
  if (!d) return '';
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function formatCalDisplay(d) {
  if (!d) {
    if (typeof currentLang !== 'undefined' && currentLang === 'de') return 'Wählen';
    if (typeof currentLang !== 'undefined' && currentLang === 'en') return 'Select';
    return 'Zvolit';
  }
  if (typeof currentLang !== 'undefined' && currentLang === 'en') {
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  }
  return `${d.getDate()}. ${d.getMonth() + 1}. ${d.getFullYear()}`;
}

function getCalDayShort(d) {
  if (!d) return '—';
  const dayIdx = d.getDay();
  if (typeof currentLang !== 'undefined' && currentLang === 'de') return calDaysShortDE[dayIdx];
  if (typeof currentLang !== 'undefined' && currentLang === 'en') return calDaysShortEN[dayIdx];
  return calDaysShortCS[dayIdx];
}

function updateCalBarDisplays() {
  const isEn = typeof currentLang !== 'undefined' && currentLang === 'en';
  const isDe = typeof currentLang !== 'undefined' && currentLang === 'de';
  const selectLabel = isDe ? 'Wählen' : (isEn ? 'Select' : 'Zvolit');
  const selectDatesLabel = isDe ? 'Termin wählen' : (isEn ? 'Select dates' : 'Zvolit termín');

  const inVal = document.getElementById('checkin-val-display');
  const inDay = document.getElementById('checkin-day-display');
  const inHidden = document.getElementById('book-checkin');
  if (inVal) inVal.textContent = calCheckinDate ? formatCalDisplay(calCheckinDate) : selectLabel;
  if (inDay) inDay.textContent = calCheckinDate ? getCalDayShort(calCheckinDate) : '—';
  if (inHidden) inHidden.value = calCheckinDate ? formatCalISO(calCheckinDate) : '';

  // Sync pinned checkin
  const pInVal = document.getElementById('pinned-checkin-val');
  const pInDay = document.getElementById('pinned-checkin-day');
  if (pInVal) pInVal.textContent = calCheckinDate ? formatCalDisplay(calCheckinDate) : selectLabel;
  if (pInDay) pInDay.textContent = calCheckinDate ? getCalDayShort(calCheckinDate) : '—';

  const outVal = document.getElementById('checkout-val-display');
  const outDay = document.getElementById('checkout-day-display');
  const outHidden = document.getElementById('book-checkout');
  if (outVal) outVal.textContent = calCheckoutDate ? formatCalDisplay(calCheckoutDate) : selectLabel;
  if (outDay) outDay.textContent = calCheckoutDate ? getCalDayShort(calCheckoutDate) : '—';
  if (outHidden) outHidden.value = calCheckoutDate ? formatCalISO(calCheckoutDate) : '';

  // Sync pinned checkout
  const pOutVal = document.getElementById('pinned-checkout-val');
  const pOutDay = document.getElementById('pinned-checkout-day');
  if (pOutVal) pOutVal.textContent = calCheckoutDate ? formatCalDisplay(calCheckoutDate) : selectLabel;
  if (pOutDay) pOutDay.textContent = calCheckoutDate ? getCalDayShort(calCheckoutDate) : '—';

  const stageInVal = document.getElementById('cal-stage-in-val');
  const stageOutVal = document.getElementById('cal-stage-out-val');
  if (stageInVal) stageInVal.textContent = calCheckinDate ? formatCalDisplay(calCheckinDate) : selectLabel;
  if (stageOutVal) stageOutVal.textContent = calCheckoutDate ? formatCalDisplay(calCheckoutDate) : selectLabel;

  const nightsBadge = document.getElementById('cal-stage-nights-badge');
  let pricing = null;

  if (calCheckinDate && calCheckoutDate) {
    const diffTime = Math.abs(calCheckoutDate - calCheckinDate);
    const diffDays = Math.max(1, Math.round(diffTime / (1000 * 60 * 60 * 24)));
    pricing = getStayPricing(diffDays);

    if (nightsBadge) {
      if (pricing.isMinStayMet) {
        nightsBadge.className = 'cal-stage-nights valid';
        nightsBadge.textContent = `${pricing.nights} ${pricing.nightWord} • ${pricing.formattedPrice}`;
      } else {
        nightsBadge.className = 'cal-stage-nights warning';
        nightsBadge.textContent = isEn ? `${pricing.nights} night (min. 2)` : `${pricing.nights} noc (min. 2)`;
      }
    }
  } else {
    if (nightsBadge) {
      nightsBadge.className = 'cal-stage-nights';
      nightsBadge.textContent = '—';
    }
  }

  // Update mobile summary text
  const pMobDates = document.getElementById('pinned-mobile-dates-text');
  if (pMobDates) {
    if (calCheckinDate && calCheckoutDate) {
      const sameMonth = calCheckinDate.getMonth() === calCheckoutDate.getMonth() && calCheckinDate.getFullYear() === calCheckoutDate.getFullYear();
      if (sameMonth) {
        pMobDates.textContent = `${calCheckinDate.getDate()}. – ${calCheckoutDate.getDate()}. ${calCheckoutDate.getMonth() + 1}.`;
      } else {
        pMobDates.textContent = `${calCheckinDate.getDate()}.${calCheckinDate.getMonth() + 1}. – ${calCheckoutDate.getDate()}.${calCheckoutDate.getMonth() + 1}.`;
      }
    } else {
      pMobDates.textContent = selectDatesLabel;
    }
  }

  const pMobSub = document.getElementById('pinned-mobile-sub-text');
  if (pMobSub) {
    const isDe = typeof currentLang !== 'undefined' && currentLang === 'de';
    if (pricing) {
      if (pricing.isMinStayMet) {
        const prefix = pricing.isExactApt ? (isDe ? 'Geschätzter Preis:' : (isEn ? 'Est. price:' : 'Kalkulace:')) : (isDe ? 'Ab ca.:' : (isEn ? 'From:' : 'Orientačně od:'));
        pMobSub.textContent = `${prefix} ${pricing.formattedPrice} (${pricing.nights} ${pricing.nightWord})`;
      } else {
        pMobSub.textContent = isDe ? 'Mindestaufenthalt: 2 Nächte' : (isEn ? 'Min. stay: 2 nights' : 'Min. délka pobytu: 2 noci');
      }
    } else {
      pMobSub.textContent = isDe ? 'Termine für Preisschätzung wählen' : (isEn ? 'Select dates for pricing estimate' : 'Vyberte termín pro orientační kalkulaci');
    }
  }

  updateCalendarFooterHint();
  updateBookingBarPricing(pricing);
}

function renderAlpineCalendar() {
  const year = calViewDate.getFullYear();
  const month = calViewDate.getMonth();

  const titleEl = document.getElementById('cal-month-title');
  if (titleEl) {
    const isEn = typeof currentLang !== 'undefined' && currentLang === 'en';
    const isDe = typeof currentLang !== 'undefined' && currentLang === 'de';
    const monthName = isDe ? calMonthNamesDE[month] : (isEn ? calMonthNamesEN[month] : calMonthNamesCS[month]);
    titleEl.textContent = `${monthName} ${year}`;
  }

  const weekdaysEl = document.getElementById('cal-weekdays-row');
  if (weekdaysEl) {
    if (typeof currentLang !== 'undefined' && currentLang === 'de') {
      weekdaysEl.innerHTML = '<span>Mo</span><span>Di</span><span>Mi</span><span>Do</span><span>Fr</span><span class="weekend">Sa</span><span class="weekend">So</span>';
    } else if (typeof currentLang !== 'undefined' && currentLang === 'en') {
      weekdaysEl.innerHTML = '<span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span class="weekend">Sa</span><span class="weekend">Su</span>';
    } else {
      weekdaysEl.innerHTML = '<span>Po</span><span>Út</span><span>St</span><span>Čt</span><span>Pá</span><span class="weekend">So</span><span class="weekend">Ne</span>';
    }
  }

  const inPill = document.getElementById('cal-stage-checkin-pill');
  const outPill = document.getElementById('cal-stage-checkout-pill');
  if (inPill && outPill) {
    if (calActiveStage === 'checkin') {
      inPill.classList.add('active');
      outPill.classList.remove('active');
    } else {
      inPill.classList.remove('active');
      outPill.classList.add('active');
    }
  }

  const grid = document.getElementById('cal-days-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();

  let startingDay = firstDayOfMonth.getDay() - 1;
  if (startingDay === -1) startingDay = 6;

  for (let i = 0; i < startingDay; i++) {
    const emptyCell = document.createElement('div');
    emptyCell.className = 'cal-day empty';
    grid.appendChild(emptyCell);
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const checkinTime = calCheckinDate ? new Date(calCheckinDate.getFullYear(), calCheckinDate.getMonth(), calCheckinDate.getDate()).getTime() : null;
  const checkoutTime = calCheckoutDate ? new Date(calCheckoutDate.getFullYear(), calCheckoutDate.getMonth(), calCheckoutDate.getDate()).getTime() : null;

  for (let day = 1; day <= daysInMonth; day++) {
    const currentDayDate = new Date(year, month, day);
    const dayTime = currentDayDate.getTime();
    const dayCell = document.createElement('div');
    dayCell.className = 'cal-day';
    dayCell.textContent = day;

    if (dayTime < today.getTime()) {
      dayCell.classList.add('disabled');
    } else {
      if (checkinTime && dayTime === checkinTime) {
        dayCell.classList.add('range-start');
      }
      if (checkoutTime && dayTime === checkoutTime) {
        dayCell.classList.add('range-end');
      }
      if (checkinTime && checkoutTime && dayTime > checkinTime && dayTime < checkoutTime) {
        dayCell.classList.add('in-range');
      }
      if (dayTime === today.getTime()) {
        dayCell.classList.add('today');
      }

      if (calActiveStage === 'checkout' && calCheckinDate) {
        dayCell.addEventListener('mouseenter', () => {
          highlightCalHoverRange(checkinTime, dayTime);
        });
      }

      dayCell.addEventListener('click', (e) => {
        e.stopPropagation();
        handleCalDateSelection(currentDayDate);
      });
    }

    grid.appendChild(dayCell);
  }

  grid.onmouseleave = () => {
    if (calActiveStage === 'checkout' && calCheckinDate) {
      grid.querySelectorAll('.cal-day').forEach(cell => cell.classList.remove('in-range-hover'));
      updateCalBarDisplays();
    }
  };

  updateCalBarDisplays();
}

function highlightCalHoverRange(startTime, hoverTime) {
  if (!startTime || !hoverTime) return;
  const grid = document.getElementById('cal-days-grid');
  if (!grid) return;
  const year = calViewDate.getFullYear();
  const month = calViewDate.getMonth();

  const days = grid.querySelectorAll('.cal-day:not(.empty):not(.disabled)');
  days.forEach(cell => {
    const dayNum = parseInt(cell.textContent, 10);
    const cellTime = new Date(year, month, dayNum).getTime();
    if (hoverTime > startTime && cellTime > startTime && cellTime <= hoverTime) {
      cell.classList.add('in-range-hover');
    } else {
      cell.classList.remove('in-range-hover');
    }
  });

  if (hoverTime > startTime) {
    const nights = Math.max(1, Math.round((hoverTime - startTime) / (1000 * 60 * 60 * 24)));
    const pricing = getStayPricing(nights);
    const nightsBadge = document.getElementById('cal-stage-nights-badge');
    if (nightsBadge) {
      if (pricing.isMinStayMet) {
        nightsBadge.className = 'cal-stage-nights valid';
        nightsBadge.textContent = `${pricing.nights} ${pricing.nightWord} • ${pricing.formattedPrice}`;
      } else {
        nightsBadge.className = 'cal-stage-nights warning';
        const isEn = typeof currentLang !== 'undefined' && currentLang === 'en';
        nightsBadge.textContent = isEn ? `${pricing.nights} night (min. 2)` : `${pricing.nights} noc (min. 2)`;
      }
    }
    updateCalendarFooterHint(null, nights);
  }
}

function setAlpineCalHint(type, text) {
  const container = document.getElementById('cal-footer-hint');
  const badge = document.getElementById('cal-hint-badge');
  const textEl = document.getElementById('cal-hint-text');
  if (textEl && text) {
    textEl.innerHTML = text;
  }
  if (!badge) return;

  if (container) {
    container.classList.remove('is-success', 'is-warning');
  }

  if (type === 'success') {
    badge.className = 'cal-hint-badge success';
    badge.innerHTML = '<i class="fa-solid fa-check"></i>';
    if (container) container.classList.add('is-success');
  } else if (type === 'action') {
    badge.className = 'cal-hint-badge action';
    badge.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
  } else if (type === 'price') {
    badge.className = 'cal-hint-badge price';
    badge.innerHTML = '<i class="fa-solid fa-tag"></i>';
  } else if (type === 'warning') {
    badge.className = 'cal-hint-badge warning';
    badge.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>';
    if (container) container.classList.add('is-warning');
  } else {
    badge.className = 'cal-hint-badge';
    badge.innerHTML = '<i class="fa-regular fa-calendar"></i>';
  }
}

function updateCalendarFooterHint(customStatus, hoverNights) {
  const isEn = typeof currentLang !== 'undefined' && currentLang === 'en';
  const isDe = typeof currentLang !== 'undefined' && currentLang === 'de';

  const actionMsg = isDe ? 'Wählen Sie nun das Abreisedatum (mind. 2 Nächte)' : (isEn ? 'Now select check-out date (min. 2 nights)' : 'Nyní vyberte datum odjezdu (min. 2 noci)');
  const warnMsg = isDe ? 'Mindestaufenthalt: 2 Nächte' : (isEn ? 'Min. stay: 2 nights' : 'Min. délka pobytu: 2 noci');
  const neutralMsg = isDe ? 'Wählen Sie das Anreisedatum' : (isEn ? 'Select check-in date' : 'Zvolte datum příjezdu');

  if (customStatus === 'action') {
    setAlpineCalHint('action', actionMsg);
    return;
  }

  if (hoverNights !== undefined) {
    const pricing = getStayPricing(hoverNights);
    if (pricing.isMinStayMet) {
      const prefix = pricing.isExactApt ? (isDe ? 'Geschätzter Preis:' : isEn ? 'Est. price:' : 'Kalkulace:') : (isDe ? 'Ab ca.:' : isEn ? 'From:' : 'Orientačně od:');
      setAlpineCalHint('price', `${prefix} <strong class="cal-price-highlight">${pricing.formattedPrice}</strong> <span class="cal-price-sub">(${pricing.nights} ${pricing.nightWord})</span>`);
    } else {
      setAlpineCalHint('warning', warnMsg);
    }
    return;
  }

  if (calCheckinDate && calCheckoutDate) {
    const diffDays = Math.max(1, Math.round(Math.abs(calCheckoutDate - calCheckinDate) / (1000 * 60 * 60 * 24)));
    const pricing = getStayPricing(diffDays);

    if (customStatus === 'success') {
      if (pricing.isMinStayMet) {
        const succPrefix = isDe ? 'Termin bestätigt' : (isEn ? 'Dates confirmed' : 'Termín nastaven');
        setAlpineCalHint('success', `${succPrefix} • <strong class="cal-price-highlight">${pricing.formattedPrice}</strong>`);
      } else {
        setAlpineCalHint('warning', warnMsg);
      }
      return;
    }

    if (pricing.isMinStayMet) {
      const prefix = pricing.isExactApt ? (isDe ? 'Geschätzter Preis:' : isEn ? 'Est. price:' : 'Kalkulace:') : (isDe ? 'Ab ca.:' : isEn ? 'From:' : 'Orientačně od:');
      setAlpineCalHint('price', `${prefix} <strong class="cal-price-highlight">${pricing.formattedPrice}</strong> <span class="cal-price-sub">(${pricing.nights} ${pricing.nightWord})</span>`);
    } else {
      setAlpineCalHint('warning', warnMsg);
    }
    return;
  }

  if (calCheckinDate && !calCheckoutDate) {
    setAlpineCalHint('action', actionMsg);
    return;
  }

  // Both dates are null
  setAlpineCalHint('neutral', neutralMsg);
}

function handleCalDateSelection(date) {
  if (calActiveStage === 'checkin' || !calCheckinDate) {
    calCheckinDate = date;
    calCheckoutDate = null;
    calActiveStage = 'checkout';
    renderAlpineCalendar();
    updateCalendarFooterHint('action');
    updateCalBarDisplays();
  } else {
    // stage is 'checkout'
    if (date <= calCheckinDate) {
      calCheckinDate = date;
      calCheckoutDate = null;
      calActiveStage = 'checkout';
      renderAlpineCalendar();
      updateCalendarFooterHint('action');
      updateCalBarDisplays();
    } else {
      calCheckoutDate = date;
      calActiveStage = 'checkout';
      renderAlpineCalendar();
      updateCalendarFooterHint('success');
      updateCalBarDisplays();
    }
  }
}

function setCalendarStage(stage) {
  calActiveStage = stage;
  if (stage === 'checkout') {
    if (calCheckinDate && !calCheckoutDate) {
      updateCalendarFooterHint('action');
    } else {
      updateCalendarFooterHint();
    }
  } else {
    updateCalendarFooterHint();
  }
  renderAlpineCalendar();
}

function prevAlpineMonth() {
  calViewDate.setMonth(calViewDate.getMonth() - 1);
  renderAlpineCalendar();
}

function nextAlpineMonth() {
  calViewDate.setMonth(calViewDate.getMonth() + 1);
  renderAlpineCalendar();
}

function resetAlpineCalendarDates() {
  calCheckinDate = null;
  calCheckoutDate = null;
  const d = new Date();
  calViewDate = new Date(d.getFullYear(), d.getMonth(), 1);
  calActiveStage = 'checkin';
  renderAlpineCalendar();
  updateCalBarDisplays();
  updateCalendarFooterHint();
}

function toggleAlpineCalendar(field, source = 'hero') {
  const popover = document.getElementById('alpine-calendar-popover');
  const inTrigger = document.getElementById('checkin-trigger');
  const outTrigger = document.getElementById('checkout-trigger');
  const pInTrigger = document.getElementById('pinned-checkin-trigger');
  const pOutTrigger = document.getElementById('pinned-checkout-trigger');
  if (!popover) return;

  // Close any open dropdowns
  document.getElementById('apt-dropdown-container')?.classList.remove('open');
  closePinnedAptDropdown();

  // Reparent calendar popover to active container so it opens downwards in hero and UPWARDS in pinned bar
  if (source === 'pinned') {
    const pinnedSlot = document.getElementById('pinned-calendar-slot');
    if (pinnedSlot && popover.parentElement !== pinnedSlot) {
      pinnedSlot.appendChild(popover);
    }
    popover.classList.add('is-pinned-calendar');
  } else {
    const heroSlot = document.getElementById('hero-calendar-slot');
    if (heroSlot && popover.parentElement !== heroSlot) {
      heroSlot.appendChild(popover);
    }
    popover.classList.remove('is-pinned-calendar');
  }

  const isOpen = popover.classList.contains('active');
  if (isOpen && calActiveStage === field && calActiveSource === source) {
    closeAlpineCalendar();
    return;
  }

  calActiveSource = source;
  calActiveStage = field || (calCheckinDate ? 'checkout' : 'checkin');
  if (calActiveStage === 'checkin' && calCheckinDate) {
    calViewDate = new Date(calCheckinDate.getFullYear(), calCheckinDate.getMonth(), 1);
  } else if (calActiveStage === 'checkout' && calCheckoutDate) {
    calViewDate = new Date(calCheckoutDate.getFullYear(), calCheckoutDate.getMonth(), 1);
  } else if (calCheckinDate) {
    calViewDate = new Date(calCheckinDate.getFullYear(), calCheckinDate.getMonth(), 1);
  } else {
    const _now = new Date();
    calViewDate = new Date(_now.getFullYear(), _now.getMonth(), 1);
  }

  popover.classList.add('active');

  if (source === 'pinned') {
    if (pInTrigger) pInTrigger.classList.toggle('active', calActiveStage === 'checkin');
    if (pOutTrigger) pOutTrigger.classList.toggle('active', calActiveStage === 'checkout');
    if (inTrigger) inTrigger.classList.remove('active');
    if (outTrigger) outTrigger.classList.remove('active');
  } else {
    if (inTrigger) inTrigger.classList.toggle('active', calActiveStage === 'checkin');
    if (outTrigger) outTrigger.classList.toggle('active', calActiveStage === 'checkout');
    if (pInTrigger) pInTrigger.classList.remove('active');
    if (pOutTrigger) pOutTrigger.classList.remove('active');
  }
  
  if (calActiveStage === 'checkout') {
    updateCalendarFooterHint('action');
  } else {
    updateCalendarFooterHint();
  }
  renderAlpineCalendar();
}

function closeAlpineCalendar() {
  const popover = document.getElementById('alpine-calendar-popover');
  if (popover) popover.classList.remove('active');
  document.getElementById('checkin-trigger')?.classList.remove('active');
  document.getElementById('checkout-trigger')?.classList.remove('active');
  document.getElementById('pinned-checkin-trigger')?.classList.remove('active');
  document.getElementById('pinned-checkout-trigger')?.classList.remove('active');
  updateCalBarDisplays();
}

// Global click outside listener
document.addEventListener('click', (e) => {
  const heroDropdown = document.getElementById('apt-dropdown-container');
  if (heroDropdown && !heroDropdown.contains(e.target)) {
    heroDropdown.classList.remove('open');
    document.getElementById('apt-dropdown-trigger')?.setAttribute('aria-expanded', 'false');
  }

    const pinnedMenu = document.getElementById('pinned-apt-dropdown-menu');
  const pAptTrigger = document.getElementById('pinned-apt-dropdown-trigger');
  const pMobAptPill = document.getElementById('pinned-mobile-apt-pill');
  if (pinnedMenu && pinnedMenu.classList.contains('open')) {
    if (!pinnedMenu.contains(e.target) &&
        !pAptTrigger?.contains(e.target) &&
        !pMobAptPill?.contains(e.target)) {
      closePinnedAptDropdown();
    }
  }

  const cal = document.getElementById('alpine-calendar-popover');
  const inTrigger = document.getElementById('checkin-trigger');
  const outTrigger = document.getElementById('checkout-trigger');
  const pInTrigger = document.getElementById('pinned-checkin-trigger');
  const pOutTrigger = document.getElementById('pinned-checkout-trigger');
  const pMobTrigger = document.getElementById('pinned-mobile-trigger');
  const pMobDatePill = document.getElementById('pinned-mobile-date-pill');

  if (cal && cal.classList.contains('active')) {
    const isInsideCal = (typeof e.composedPath === 'function' && e.composedPath().some(el => el === cal || el.id === 'alpine-calendar-popover')) ||
                        cal.contains(e.target);
    if (!isInsideCal &&
        !inTrigger?.contains(e.target) && !outTrigger?.contains(e.target) &&
        !pInTrigger?.contains(e.target) && !pOutTrigger?.contains(e.target) &&
        !pMobTrigger?.contains(e.target) &&
        !pMobDatePill?.contains(e.target) &&
        !e.target.closest('#pinned-mobile-date-pill') &&
        !e.target.closest('.custom-date-trigger')) {
      closeAlpineCalendar();
    }
  }
});

// Pinned Booking Bar omnipresence scroll watcher
function initPinnedBookingBar() {
  const pinnedBar = document.getElementById('pinned-booking-bar');
  if (!pinnedBar) return;

  function checkScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || (document.querySelector('.my-app')?.scrollTop) || 0;
    const isMobile = window.innerWidth < 992;
    const threshold = isMobile ? 120 : 260;
    // Show pinned bar once scrolled past threshold
    if (scrollY > threshold) {
      pinnedBar.classList.add('is-visible');
    } else {
      if (pinnedBar.classList.contains('is-visible')) {
        const cal = document.getElementById('alpine-calendar-popover');
        if (cal && cal.classList.contains('is-pinned-calendar') && cal.classList.contains('active')) {
          closeAlpineCalendar();
        }
        document.getElementById('pinned-apt-dropdown-container')?.classList.remove('open');
        pinnedBar.classList.remove('is-visible');
      }
    }
  }

  window.addEventListener('scroll', checkScroll, { passive: true });
  window.addEventListener('touchmove', checkScroll, { passive: true });
  document.addEventListener('scroll', checkScroll, { passive: true });
  const myApp = document.querySelector('.my-app');
  if (myApp) {
    myApp.addEventListener('scroll', checkScroll, { passive: true });
  }
  checkScroll();

  // Also support GSAP ScrollTrigger if active
  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.create({
      trigger: '.banner',
      start: 'bottom 80%',
      onLeave: () => pinnedBar.classList.add('is-visible'),
      onEnterBack: () => {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop || (document.querySelector('.my-app')?.scrollTop) || 0;
        const isMobile = window.innerWidth < 992;
        const threshold = isMobile ? 120 : 260;
        if (scrollY <= threshold) {
          pinnedBar.classList.remove('is-visible');
        }
      }
    });
  }
}

/* ==========================================================================
   Hero Split Canvas Interactive Showcase Slider
   ========================================================================== */
const heroScenes = [
  { id: 1, cs: "Rezidence Panorama & Sjezdovka", en: "Panorama Residence & Ski Slopes", de: "Residenz Panorama & Skipisten" },
  { id: 2, cs: "Horská architektura & Balkony", en: "Alpine Architecture & Balconies", de: "Alpenarchitektur & Balkone" },
  { id: 3, cs: "Panoramatický obývací salon", en: "Panoramic Designer Living Salon", de: "Panoramischer Designer-Wohnsalon" }
];
let currentHeroScene = 0;
let heroAutoCycleTimer = null;

function updateHeroSceneDisplay() {
  const isEn = typeof currentLang !== 'undefined' && currentLang === 'en';
  for (let i = 1; i <= 3; i++) {
    const slide = document.getElementById('hero-slide-' + i);
    const diamonds = document.querySelectorAll('.hero-diamond');
    const dia = diamonds[i - 1];
    if (slide) {
      if (i === currentHeroScene + 1) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    }
    if (dia) {
      if (i === currentHeroScene + 1) {
        dia.classList.add('active');
      } else {
        dia.classList.remove('active');
      }
    }
  }
  const captionEl = document.getElementById('hero-scene-caption');
  if (captionEl) {
    const isDe = typeof currentLang !== 'undefined' && currentLang === 'de';
    captionEl.textContent = isDe ? (heroScenes[currentHeroScene].de || heroScenes[currentHeroScene].en) : (isEn ? heroScenes[currentHeroScene].en : heroScenes[currentHeroScene].cs);
  }
}

function nextHeroScene() {
  currentHeroScene = (currentHeroScene + 1) % heroScenes.length;
  updateHeroSceneDisplay();
}

function prevHeroScene() {
  currentHeroScene = (currentHeroScene - 1 + heroScenes.length) % heroScenes.length;
  updateHeroSceneDisplay();
}

function setHeroScene(num) {
  currentHeroScene = num - 1;
  updateHeroSceneDisplay();
}

function initHeroSplitSlider() {
  updateHeroSceneDisplay();
  const rightPanel = document.querySelector('.hero-split__right');
  if (rightPanel) {
    heroAutoCycleTimer = setInterval(nextHeroScene, 6500);
    rightPanel.addEventListener('mouseenter', () => {
      if (heroAutoCycleTimer) clearInterval(heroAutoCycleTimer);
    });
    rightPanel.addEventListener('mouseleave', () => {
      if (heroAutoCycleTimer) clearInterval(heroAutoCycleTimer);
      heroAutoCycleTimer = setInterval(nextHeroScene, 6500);
    });
  }
}

// ==========================================================================
// Architectural Dossier: Spotlight X-Ray Reveal & Filtering
// ==========================================================================
function initSpotlightXRay() {
  const canvas = document.getElementById('spotlight-canvas');
  if (!canvas) return;

  // Initialize default view to clean real photo
  setSpotlightMode('photo');

  // Skip mouse-tracking HUD pointer handlers if touch device with no hover
  const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  if (isTouchDevice) return;

  const rect = canvas.getBoundingClientRect();
  const initW = rect.width || canvas.offsetWidth || 700;
  const initH = rect.height || canvas.offsetHeight || 520;
  let defaultX = initW * 0.52;
  let defaultY = initH * 0.48;

  let mouseX = defaultX;
  let mouseY = defaultY;
  let currentX = defaultX;
  let currentY = defaultY;
  let isHovered = false;
  let animId = null;

  const coordsEl = document.getElementById('spotlight-hud-coords');

  function updateHudCoords(x, y, w, h) {
    if (coordsEl) {
      const cadX = ((x / (w || 700)) * 18.5).toFixed(1);
      const cadY = ((((h || 520) - y) / (h || 520)) * 11.2).toFixed(1);
      coordsEl.textContent = `X: ${cadX}m | Y: ${cadY}m | ELEV: +6.40m`;
    }
  }
  updateHudCoords(defaultX, defaultY, initW, initH);

  canvas.style.setProperty('--mouse-x', `${defaultX.toFixed(1)}px`);
  canvas.style.setProperty('--mouse-y', `${defaultY.toFixed(1)}px`);

  canvas.addEventListener('pointerenter', () => {
    isHovered = true;
    if (currentSpotlightMode === 'xray' && !animId) updateSpotlight();
  });

  canvas.addEventListener('pointerleave', () => {
    isHovered = false;
    const r = canvas.getBoundingClientRect();
    mouseX = (r.width || initW) * 0.52;
    mouseY = (r.height || initH) * 0.48;
    updateHudCoords(mouseX, mouseY, r.width, r.height);
    if (currentSpotlightMode === 'xray' && !animId) updateSpotlight();
  });

  canvas.addEventListener('pointermove', (e) => {
    const r = canvas.getBoundingClientRect();
    mouseX = e.clientX - r.left;
    mouseY = e.clientY - r.top;
    updateHudCoords(mouseX, mouseY, r.width, r.height);
    if (currentSpotlightMode === 'xray' && !animId) updateSpotlight();
  });

  function updateSpotlight() {
    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;

    canvas.style.setProperty('--mouse-x', `${currentX.toFixed(1)}px`);
    canvas.style.setProperty('--mouse-y', `${currentY.toFixed(1)}px`);

    if (currentSpotlightMode === 'xray' && (isHovered || Math.abs(mouseX - currentX) > 0.5 || Math.abs(mouseY - currentY) > 0.5)) {
      animId = requestAnimationFrame(updateSpotlight);
    } else {
      animId = null;
    }
  }
}

let currentSpotlightMode = 'photo';

function setSpotlightMode(mode) {
  const canvas = document.getElementById('spotlight-canvas');
  const fullBp = document.getElementById('spotlight-full-blueprint');
  const captionEl = document.getElementById('spotlight-caption-text');
  if (!canvas) return;

  // Toggle back to photo if clicking the same active mode (xray or floorplan)
  if (currentSpotlightMode === mode && mode !== 'photo') {
    mode = 'photo';
  }

  currentSpotlightMode = mode;

  // Update mode buttons active state
  ['photo', 'xray', 'floorplan'].forEach(m => {
    const btn = document.getElementById(`mode-btn-${m}`);
    if (btn) {
      if (m === mode) {
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      }
    }
  });

  const isEn = typeof currentLang !== 'undefined' && currentLang === 'en';
  const isDe = typeof currentLang !== 'undefined' && currentLang === 'de';

  if (mode === 'photo') {
    canvas.classList.remove('is-xray-active');
    canvas.classList.remove('is-floorplan-active');
    if (fullBp) fullBp.classList.remove('is-visible');
    if (captionEl) {
      captionEl.textContent = isDe
        ? 'Echte Fotografie der Wohnung. Erkunden Sie das Interieur oder aktivieren Sie den Spotlight-Röntgenmodus.'
        : isEn
        ? 'Real apartment photograph. Explore the interior or activate the Spotlight X-Ray.'
        : 'Reálná fotografie apartmánu. Prozkoumejte interiér nebo zapněte Spotlight X-Ray rentgen.';
    }
  } else if (mode === 'xray') {
    canvas.classList.add('is-xray-active');
    canvas.classList.remove('is-floorplan-active');
    if (fullBp) fullBp.classList.remove('is-visible');
    if (captionEl) {
      captionEl.textContent = isDe
        ? 'Spotlight-Röntgen aktiv: Bewegen Sie den Cursor über das Foto, um den CAD-Grundriss zu erkunden.'
        : isEn
        ? 'Spotlight X-Ray active: Move your cursor across the photo to inspect the CAD blueprint.'
        : 'Spotlight X-Ray aktivní: Pohybujte kurzorem po fotografii pro interaktivní rentgen CAD půdorysu.';
    }
  } else if (mode === 'floorplan') {
    canvas.classList.remove('is-xray-active');
    canvas.classList.add('is-floorplan-active');
    if (fullBp) fullBp.classList.add('is-visible');
    if (captionEl) {
      captionEl.textContent = isDe
        ? '3D-Raummodell der Raumaufteilung inklusive privatem Balkon, Ausstattung und Skidepot.'
        : isEn
        ? '3D spatial floorplan model including private balcony, equipment, and ski locker.'
        : '3D prostorový model dispozice apartmánu včetně balkonu, vybavení a kóje.';
    }
  }
}

function toggleSpotlightBlueprint() {
  setSpotlightMode(currentSpotlightMode === 'floorplan' ? 'photo' : 'floorplan');
}

function filterDossier(cat) {
  const btns = document.querySelectorAll('.dossier-tab-btn');
  btns.forEach(b => b.classList.remove('active'));

  const activeBtn = document.querySelector(`.dossier-tab-btn[data-filter="${cat}"]`);
  if (activeBtn) activeBtn.classList.add('active');

  const cards = document.querySelectorAll('.dossier-card');
  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (cat === 'all' || cardCat === cat) {
      card.classList.remove('is-hidden');
    } else {
      card.classList.add('is-hidden');
    }
  });

  const buyoutBanner = document.getElementById('dossier-buyout-banner');
  if (buyoutBanner) {
    if (cat === 'all' || cat === 'buyout') {
      buyoutBanner.style.display = 'flex';
    } else {
      buyoutBanner.style.display = 'none';
    }
  }
}

// Initialize on load
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  renderAlpineCalendar();
  initPinnedBookingBar();
  initHeroSplitSlider();
  initSpotlightXRay();
} else {
  window.addEventListener('DOMContentLoaded', () => {
    renderAlpineCalendar();
    initPinnedBookingBar();
    initHeroSplitSlider();
    initSpotlightXRay();
  });
}



// ==========================================================================
// Spotlight X-Ray Master Studio & Collapsible Grid Logic (Proposal A)
// ==========================================================================

// ==========================================================================
// Managed Units Logic (Rooms 1, 2, 3 & Full Buyout)
// ==========================================================================
const managedUnitIds = [1, 2, 3, 'all'];

function switchSpotlightUnit(rawId) {
  let id = rawId;
  if (id === 'all' || id === 4 || id === '4' || id === 'buyout') {
    id = 'all';
  } else {
    id = parseInt(id);
    // Support backwards compatibility for legacy IDs (6 -> 1, 5 -> 2, 10 -> 3)
    if (id === 6) id = 1;
    else if (id === 5) id = 2;
    else if (id === 10) id = 3;
  }

  if (!managedUnitIds.includes(id)) {
    id = 1;
  }
  const apt = apartmentDetails[id];
  if (!apt) return;
  currentSpotlightUnitId = id;

  const lang = (typeof currentLang !== 'undefined' && apt[currentLang]) ? currentLang : 'cs';
  const data = apt[lang] || apt.cs;

  // 1. Update Spotlight Layers
  const photoLayer = document.querySelector('.spotlight-layer--photo');
  const bpLayer = document.querySelector('.spotlight-layer--blueprint');
  const fullBpLayer = document.getElementById('spotlight-full-blueprint');

  if (photoLayer && apt.img) {
    photoLayer.style.backgroundImage = `url('${apt.img}')`;
  }
  if (bpLayer && apt.blueprint) {
    bpLayer.style.backgroundImage = `url('${apt.blueprint}')`;
  }
  if (fullBpLayer && apt.floorplan) {
    fullBpLayer.style.backgroundImage = `url('${apt.floorplan}')`;
  }

  // 2. Update Badge, Counter, and Select dropdown
  const badgeEl = document.getElementById('spotlight-unit-badge');
  const counterEl = document.getElementById('spotlight-nav-counter');
  const selectEl = document.getElementById('spotlight-apt-select');

  const unitIndex = managedUnitIds.indexOf(id) + 1;
  if (badgeEl) {
    if (id === 'all') {
      badgeEl.textContent = (lang === 'de') ? '2. & 3. ETAGE // ALLE 3 FERIENWOHNUNGEN MIT BALKON' : (lang === 'en') ? '2nd & 3rd FLOOR // ALL 3 SUITES WITH BALCONIES' : '2. & 3. PATRO // VŠECHNY 3 APARTMÁNY S BALKONY';
    } else {
      const floorStr = (lang === 'de') ? (apt.floorDe || apt.floor) : (lang === 'en') ? (apt.floorEn || apt.floor) : (apt.floorCs || apt.floor);
      const viewStr = (lang === 'de') ? 'BLICK AUF DIE SKIPISTE & BERGE' : (lang === 'en') ? 'SKI SLOPE & MOUNTAIN VIEWS' : 'VÝHLED NA SJEZDOVKU & HORY';
      badgeEl.textContent = `${floorStr.toUpperCase()} // ${viewStr}`;
    }
  }
  if (counterEl) {
    if (id === 'all') {
      counterEl.textContent = (lang === 'de') ? 'ALLE (3)' : (lang === 'en') ? 'ALL (3)' : 'VŠECHNY (3)';
    } else {
      counterEl.textContent = `0${unitIndex} / 03`;
    }
  }

  // Sync quick filter tabs
  ['tab-btn-1', 'tab-btn-2', 'tab-btn-3', 'tab-btn-6', 'tab-btn-5', 'tab-btn-10', 'tab-btn-all'].forEach(btnId => {
    const btn = document.getElementById(btnId);
    if (btn) {
      if ((id === 'all' && btnId === 'tab-btn-all') ||
          (id === 1 && (btnId === 'tab-btn-1' || btnId === 'tab-btn-6')) ||
          (id === 2 && (btnId === 'tab-btn-2' || btnId === 'tab-btn-5')) ||
          (id === 3 && (btnId === 'tab-btn-3' || btnId === 'tab-btn-10'))) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    }
  });
  if (selectEl && String(selectEl.value) !== String(id)) selectEl.value = id;

  // 3. Update Title & Description
  const titleEl = document.getElementById('spotlight-title');
  const descEl = document.getElementById('spotlight-desc');
  if (titleEl) titleEl.textContent = data.name;
  if (descEl) descEl.textContent = data.desc;

  // 4. Update 4 Spec Boxes
  const areaEl = document.getElementById('spotlight-spec-area');
  const outdoorLabel = document.getElementById('spotlight-spec-outdoor-label');
  const outdoorEl = document.getElementById('spotlight-spec-outdoor');
  const capEl = document.getElementById('spotlight-spec-capacity');
  const lockerEl = document.getElementById('spotlight-spec-locker');

  if (areaEl) areaEl.textContent = apt.totalArea;
  if (outdoorLabel) outdoorLabel.textContent = (lang === 'de') ? 'Balkon & Aussicht' : (lang === 'en') ? 'Balconies & Views' : 'Balkon s výhledem';
  if (outdoorEl) {
    outdoorEl.textContent = (lang === 'de') ? (apt.outdoorAreaDe || apt.outdoorArea) : (lang === 'en') ? (apt.outdoorAreaEn || apt.outdoorArea) : (apt.outdoorAreaCs || apt.outdoorArea);
  }
  if (capEl) capEl.textContent = data.capacity;
  if (lockerEl) {
    if (id === 'all') {
      lockerEl.textContent = (lang === 'de') ? '3x Skidepot + 3x Parkplatz' : (lang === 'en') ? '3x lockers + 3x parking' : '3x kóje + 3x parkování';
    } else {
      lockerEl.textContent = (lang === 'de') ? ((apt.lockerIdDe || `Skidepot #${id}`) + ' + 1x Parkplatz') : (lang === 'en') ? ((apt.lockerIdEn || `Locker #${id}`) + ' + 1x parking') : `${apt.lockerId} + 1x park`;
    }
  }

  // 5. Update Price & Action Buttons
  const priceEl = document.getElementById('spotlight-price');
  if (priceEl) priceEl.textContent = data.price;

  const priceFromEl = document.querySelector('.dossier-price-tag .dossier-price-from');
  if (priceFromEl) {
    priceFromEl.textContent = (lang === 'de') ? 'Preis ab' : (lang === 'en') ? 'Rates from' : 'Cena od';
  }
  const perNightEl = document.querySelector('.dossier-price-tag .dossier-price-num span:last-child');
  if (perNightEl) {
    perNightEl.textContent = (lang === 'de') ? ' / Nacht' : (lang === 'en') ? ' / night' : ' / noc';
  }

  const bookBtn = document.getElementById('spotlight-book-btn');
  const detailBtn = document.getElementById('spotlight-detail-btn');
  const bottomBar = document.querySelector('.spotlight-bottom-bar');
  const spotlightCard = document.querySelector('.dossier-spotlight-card');
  const buyoutNote = document.getElementById('spotlight-buyout-note');

  if (id === 'all') {
    if (spotlightCard) spotlightCard.classList.add('is-buyout-active');
    if (bottomBar) bottomBar.style.display = 'none';
    if (detailBtn) detailBtn.style.display = 'none';
    if (buyoutNote) {
      buyoutNote.style.display = 'block';
      buyoutNote.innerHTML = (lang === 'de')
        ? '<i class="fa-solid fa-phone me-1"></i> <strong>Gruppenbuchung:</strong> Um alle 3 Wohnungen auf einmal zu buchen, kontaktieren Sie uns bitte direkt per Telefon unter <a href="tel:+420 777 366 239" style="color: #fff; text-decoration: underline; font-weight: 600;">+420 777 366 239</a> oder per E-Mail an <a href="mailto:info@apartmany-panorama.cz" style="color: #fff; text-decoration: underline; font-weight: 600;">info@apartmany-panorama.cz</a>.'
        : (lang === 'en')
        ? '<i class="fa-solid fa-phone me-1"></i> <strong>Group Buyout:</strong> To book all 3 suites at once, please contact us directly by phone at <a href="tel:+420 777 366 239" style="color: #fff; text-decoration: underline; font-weight: 600;">+420 777 366 239</a> or via email at <a href="mailto:info@apartmany-panorama.cz" style="color: #fff; text-decoration: underline; font-weight: 600;">info@apartmany-panorama.cz</a>.'
        : '<i class="fa-solid fa-phone me-1"></i> <strong>Skupinový pronájem:</strong> Pro rezervaci všech 3 apartmánů naráz nás prosím kontaktujte přímo telefonicky na <a href="tel:+420 777 366 239" style="color: #fff; text-decoration: underline; font-weight: 600;">+420 777 366 239</a> nebo e-mailem na <a href="mailto:info@apartmany-panorama.cz" style="color: #fff; text-decoration: underline; font-weight: 600;">info@apartmany-panorama.cz</a>.';
    }
    if (bookBtn) {
      const groupText = (lang === 'de') ? 'Für Gruppe anfragen' : (lang === 'en') ? 'Contact for Group' : 'Kontaktovat pro skupinu';
      bookBtn.innerHTML = `<span>${groupText}</span><i class="fa-solid fa-phone ms-1"></i>`;
      bookBtn.onclick = () => window.location.href = 'tel:+420 777 366 239';
    }
    if (typeof setSpotlightMode === 'function') {
      setSpotlightMode('photo');
    }
  } else {
    if (spotlightCard) spotlightCard.classList.remove('is-buyout-active');
    if (bottomBar) bottomBar.style.display = '';
    if (buyoutNote) buyoutNote.style.display = 'none';
    if (bookBtn) {
      const bookText = (lang === 'de') ? 'Online buchen' : (lang === 'en') ? 'Book Online' : 'Rezervovat';
      bookBtn.innerHTML = `<span>${bookText}</span><i class="fa-sharp fa-solid fa-arrow-up-right ms-1"></i>`;
      bookBtn.onclick = () => openPrevioModal(data.name);
    }
    if (detailBtn) {
      detailBtn.style.display = '';
      detailBtn.onclick = () => openAptDetailModal(id, 'floorplan');
      const detailText = (lang === 'de') ? 'Details' : (lang === 'en') ? 'Details' : 'Detaily';
      detailBtn.innerHTML = `<i class="fa-solid fa-circle-info me-1"></i><span>${detailText}</span>`;
    }
  }

  // Update caption text for active mode
  const captionEl = document.getElementById('spotlight-caption-text');
  if (captionEl) {
    if (typeof currentSpotlightMode === 'undefined' || currentSpotlightMode === 'photo') {
      captionEl.textContent = (lang === 'de')
        ? 'Echte Fotografie der Wohnung. Erkunden Sie das Interieur oder aktivieren Sie den Spotlight-Röntgenmodus.'
        : (lang === 'en')
        ? 'Real apartment photograph. Explore the interior or activate the Spotlight X-Ray.'
        : 'Reálná fotografie apartmánu. Prozkoumejte interiér nebo zapněte Spotlight X-Ray rentgen.';
    } else if (currentSpotlightMode === 'xray') {
      captionEl.textContent = (lang === 'de')
        ? 'Spotlight-Röntgen aktiv: Bewegen Sie den Cursor über das Foto, um den CAD-Grundriss zu erkunden.'
        : (lang === 'en')
        ? 'Spotlight X-Ray active: Move your cursor across the photo to inspect the CAD blueprint.'
        : 'Spotlight X-Ray aktivní: Pohybujte kurzorem po fotografii pro interaktivní rentgen CAD půdorysu.';
    } else if (currentSpotlightMode === 'floorplan') {
      captionEl.textContent = (lang === 'de')
        ? '3D-Raummodell der Raumaufteilung inklusive privatem Balkon, Ausstattung und Skidepot.'
        : (lang === 'en')
        ? '3D spatial floorplan model including private balcony, equipment, and ski locker.'
        : '3D prostorový model dispozice apartmánu včetně balkonu, vybavení a kóje.';
    }
  }

  // 6. Highlight active card in 3-card showcase
  document.querySelectorAll('.dossier-card').forEach(c => {
    if (id !== 'all' && parseInt(c.getAttribute('data-id')) === id) {
      c.classList.add('is-focused-unit');
    } else {
      c.classList.remove('is-focused-unit');
    }
  });

  const buyoutBanner = document.getElementById('dossier-buyout-banner');
  if (buyoutBanner) {
    if (id === 'all') {
      buyoutBanner.classList.add('is-focused-unit');
    } else {
      buyoutBanner.classList.remove('is-focused-unit');
    }
  }
}

function nextSpotlightUnit() {
  let currIdx = managedUnitIds.indexOf(currentSpotlightUnitId);
  let nextIdx = (currIdx + 1) % managedUnitIds.length;
  switchSpotlightUnit(managedUnitIds[nextIdx]);
}

function prevSpotlightUnit() {
  let currIdx = managedUnitIds.indexOf(currentSpotlightUnitId);
  let prevIdx = (currIdx - 1 + managedUnitIds.length) % managedUnitIds.length;
  switchSpotlightUnit(managedUnitIds[prevIdx]);
}

function selectDossierCard(id) {
  id = parseInt(id);
  switchSpotlightUnit(id);
  const studio = document.querySelector('.dossier-spotlight-card');
  if (studio) {
    studio.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function toggleCardImage(event, id) {
  if (event) event.stopPropagation();
  id = parseInt(id);
  const card = document.querySelector(`.dossier-card[data-id="${id}"]`);
  if (!card) return;
  const img = card.querySelector('.dossier-card-thumb img');
  const btnText = card.querySelector('.dossier-thumb-plan-btn span');
  const btnIcon = card.querySelector('.dossier-thumb-plan-btn i');
  const apt = apartmentDetails[id];
  if (!img || !apt) return;

  const isEn = typeof currentLang !== 'undefined' && currentLang === 'en';
  const isDe = typeof currentLang !== 'undefined' && currentLang === 'de';

  const currentView = img.getAttribute('data-view') || 'photo';
  if (currentView === 'photo') {
    img.style.opacity = '0.25';
    setTimeout(() => {
      img.src = apt.floorplan;
      img.setAttribute('data-view', 'floorplan');
      img.style.opacity = '1';
    }, 150);
    if (btnText) btnText.textContent = isDe ? 'Foto' : (isEn ? 'Photo' : 'Fotografie');
    if (btnIcon) btnIcon.className = 'fa-solid fa-camera me-1';
  } else {
    img.style.opacity = '0.25';
    setTimeout(() => {
      img.src = apt.img;
      img.setAttribute('data-view', 'photo');
      img.style.opacity = '1';
    }, 150);
    if (btnText) btnText.textContent = isDe ? 'Grundriss' : (isEn ? 'Floor Plan' : 'Půdorys');
    if (btnIcon) btnIcon.className = 'fa-solid fa-compass-drafting me-1';
  }
}


function toggleDossierGrid() {
  isDossierGridExpanded = !isDossierGridExpanded;
  const grid = document.getElementById('dossier-grid');
  const toggleBtn = document.getElementById('dossier-catalog-toggle');
  const label = document.getElementById('dossier-toggle-label');
  const chevron = document.getElementById('dossier-toggle-chevron');

  if (isDossierGridExpanded) {
    if (grid) {
      grid.classList.remove('dossier-grid--collapsed');
      grid.classList.add('dossier-grid--expanded');
    }
    if (label) label.textContent = 'Skrýt přehledovou mřížku apartmánů';
    if (chevron) {
      chevron.classList.remove('fa-chevron-down');
      chevron.classList.add('fa-chevron-up');
    }
    if (toggleBtn) toggleBtn.classList.add('is-active');
  } else {
    if (grid) {
      grid.classList.remove('dossier-grid--expanded');
      grid.classList.add('dossier-grid--collapsed');
    }
    if (label) label.textContent = 'Zobrazit všech 12 apartmánů v mřížce';
    if (chevron) {
      chevron.classList.remove('fa-chevron-up');
      chevron.classList.add('fa-chevron-down');
    }
    if (toggleBtn) toggleBtn.classList.remove('is-active');

    const spotlight = document.querySelector('.dossier-spotlight-card');
    if (spotlight) {
      spotlight.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

// Modify filterDossier to also auto-switch Spotlight Unit when a floor tab is clicked
const originalFilterDossier = filterDossier;
filterDossier = function(cat) {
  if (typeof originalFilterDossier === 'function') {
    originalFilterDossier(cat);
  }
  if (cat === '2np' && currentSpotlightUnitId > 6) {
    switchSpotlightUnit(1);
  } else if (cat === '3np' && currentSpotlightUnitId <= 6) {
    switchSpotlightUnit(7);
  } else if (cat === 'buyout' || cat === 'all') {
    switchSpotlightUnit('all');
  }
};

// Ensure GSAP ScrollTrigger recalculates after images and fonts load on mobile
/**
 * Unified Title Reveal Animation (Desktop, Tablet & Mobile)
 * Restores luxury SplitText cascading character reveal on scroll across all devices and languages.
 */
function initPanoramaTitleAnimations(isLanguageChange) {
  if (typeof gsap === 'undefined' || typeof SplitText === 'undefined') return;

  // 1. Clean up any existing ScrollTriggers on .title-anim to avoid memory leaks or orphan triggers
  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.getAll().forEach(st => {
      if (st.trigger && st.trigger.classList && st.trigger.classList.contains('title-anim')) {
        st.kill(true);
      }
    });
  }

  const titles = gsap.utils.toArray('.title-anim');
  if (!titles || titles.length === 0) return;

  titles.forEach((elem) => {
    // If element already completed animation and language did not change, keep it visible
    if (elem.dataset.titleAnimDone === 'true' && !isLanguageChange) {
      return;
    }

    // Revert previous SplitText if attached
    if (elem._splitInstance) {
      try {
        elem._splitInstance.revert();
      } catch (e) {}
      elem._splitInstance = null;
    }
    if (elem._titleTl) {
      try {
        elem._titleTl.kill();
      } catch (e) {}
      elem._titleTl = null;
    }

    // CRITICAL: Ensure element displays its active localized string from i18n dictionary
    const i18nKey = elem.getAttribute('data-i18n');
    const activeL = (typeof currentLang !== 'undefined' && i18n[currentLang]) ? currentLang : (localStorage.getItem('panorama_lang') || 'cs');
    if (i18nKey && i18n[activeL] && i18n[activeL][i18nKey]) {
      const translated = i18n[activeL][i18nKey];
      if (translated.includes('<') || translated.includes('&')) {
        elem.innerHTML = translated;
      } else {
        elem.textContent = translated;
      }
    }

    delete elem.dataset.titleAnimDone;
    delete elem.dataset.mobileAnimInit;
    delete elem.dataset.mobileAnimDone;

    try {
      const split = new SplitText(elem, {
        type: 'chars, words',
        lineThreshold: 0.5,
      });
      elem._splitInstance = split;

      function playReveal() {
        if (elem.dataset.titleAnimDone === 'true') return;
        elem.dataset.titleAnimDone = 'true';
        gsap.to(split.chars, {
          duration: 0.8,
          x: 0,
          autoAlpha: 1,
          stagger: 0.025,
          ease: 'power2.out',
          clearProps: 'transform,opacity,visibility'
        });
      }

      elem._playTitleReveal = playReveal;

      const rect = elem.getBoundingClientRect();
      const isAlreadyVisible = (rect.top < window.innerHeight * 0.85);

      if (isAlreadyVisible) {
        gsap.set(split.chars, { autoAlpha: 1, x: 0 });
        elem.dataset.titleAnimDone = 'true';
      } else {
        // Set initial state: shifted to right (65px) and invisible
        gsap.set(split.chars, { autoAlpha: 0, x: 65 });

        if (typeof ScrollTrigger !== 'undefined') {
          elem._titleTl = gsap.to(split.chars, {
            duration: 0.8,
            x: 0,
            autoAlpha: 1,
            stagger: 0.025,
            ease: 'power2.out',
            clearProps: 'transform,opacity,visibility',
            scrollTrigger: {
              trigger: elem,
              start: 'top 90%',
              toggleActions: 'play none none none',
              once: true,
              onEnter: () => {
                elem.dataset.titleAnimDone = 'true';
              }
            }
          });
        }
      }
    } catch (err) {
      console.warn('SplitText error:', err);
      elem.style.visibility = 'visible';
      elem.style.opacity = '1';
    }
  });

  // Native IntersectionObserver fallback (works on iOS Safari, mobile, tablets and desktop)
  if ('IntersectionObserver' in window) {
    if (window._titleIntersectionObserver) {
      try { window._titleIntersectionObserver.disconnect(); } catch (e) {}
    }
    window._titleIntersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          if (typeof el._playTitleReveal === 'function') {
            el._playTitleReveal();
          }
          window._titleIntersectionObserver.unobserve(el);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -25px 0px'
    });

    titles.forEach(elem => {
      if (elem.dataset.titleAnimDone !== 'true') {
        window._titleIntersectionObserver.observe(elem);
      }
    });
  }

  // Scroll and touch fallback
  const checkVisibleTitles = () => {
    titles.forEach((elem) => {
      if (elem.dataset.titleAnimDone === 'true') return;
      const rect = elem.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
        if (typeof elem._playTitleReveal === 'function') {
          elem._playTitleReveal();
        }
      }
    });
  };

  if (!window._titleScrollListenerAttached) {
    window._titleScrollListenerAttached = true;
    window.addEventListener('scroll', checkVisibleTitles, { passive: true });
    window.addEventListener('touchmove', checkVisibleTitles, { passive: true });
  }

  // Immediate check for any titles entering or already in view
  setTimeout(checkVisibleTitles, 100);
  setTimeout(checkVisibleTitles, 300);

  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.refresh();
  }
}
window.initPanoramaTitleAnimations = initPanoramaTitleAnimations;

/**
 * Mobile Scroll Animations & Skill Bar Initializer
 * Guarantees luxury scroll reveals on phone screens without altering desktop logic
 */
function initMobileScrollAnimations() {
  if (typeof initPanoramaTitleAnimations === 'function') {
    initPanoramaTitleAnimations();
  }
  if (typeof gsap === 'undefined') return;



  // 2. Skill Bars Counter & Fill Animation (Native IntersectionObserver + Scroll Fallback)
  const skillBars = document.querySelectorAll('.agency .skill-bar-single');
  if (skillBars.length > 0) {
    function animateBar(elem) {
      if (elem.dataset.barAnimDone) return;
      elem.dataset.barAnimDone = 'true';

      const w = elem.querySelector('.skill-bar-percent');
      const p = elem.querySelector('.percent-value');
      const wrapper = elem.querySelector('.skill-bar-wrapper');
      const targetPercent = wrapper ? (wrapper.getAttribute('data-percent') || '100%') : '100%';
      const targetNum = parseInt(targetPercent, 10) || 100;

      if (!w || !p) return;

      // Kill any paused/frozen GSAP tweens from plugins.js
      if (typeof gsap !== 'undefined') {
        gsap.killTweensOf([w, p]);
        
        const counter = { val: 0 };
        gsap.to(w, {
          width: targetPercent,
          duration: 1.6,
          ease: 'power2.out'
        });
        gsap.to(counter, {
          val: targetNum,
          duration: 1.6,
          ease: 'power2.out',
          onUpdate: function() {
            p.textContent = Math.round(counter.val) + '%';
          },
          onComplete: function() {
            p.textContent = targetPercent;
          }
        });
      } else {
        w.style.width = targetPercent;
        p.textContent = targetPercent;
      }
    }

    if ('IntersectionObserver' in window) {
      const barObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateBar(entry.target);
            barObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px'
      });

      skillBars.forEach(b => barObserver.observe(b));
    }

    // Scroll listener fallback for mobile touch
    const onScrollCheck = () => {
      skillBars.forEach(b => {
        if (b.dataset.barAnimDone) return;
        const rect = b.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
          animateBar(b);
        }
      });
    };
    window.addEventListener('scroll', onScrollCheck, { passive: true });
    window.addEventListener('touchmove', onScrollCheck, { passive: true });
    // Also run once in case already visible
    setTimeout(onScrollCheck, 500);
  }

  // 3. Robust Ticker Fallback (ensures horizontal marquee never stacks)
  if (typeof jQuery !== 'undefined' && jQuery.fn && jQuery.fn.slick) {
    const $ticker = jQuery('.portfolio__text-slider');
    if ($ticker.length > 0 && !$ticker.hasClass('slick-initialized')) {
      $ticker.slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        cssEase: 'linear',
        variableWidth: true,
      });
    }
  }
}

// 2026 Luxury Architectural FAQ Accordion Toggle
function toggleLuxuryAccordion(btn) {
  const item = btn.closest('.accordion-item-luxury');
  if (!item) return;
  const isActive = item.classList.contains('active');
  
  if (isActive) {
    item.classList.remove('active');
    btn.setAttribute('aria-expanded', 'false');
  } else {
    item.classList.add('active');
    btn.setAttribute('aria-expanded', 'true');
  }
}

// Initialize on DOMContentLoaded and load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initMobileScrollAnimations, 200);
  });
} else {
  setTimeout(initMobileScrollAnimations, 200);
}

window.addEventListener('load', () => {
  setTimeout(initMobileScrollAnimations, 400);
  if (typeof ScrollTrigger !== 'undefined') {
    setTimeout(() => { ScrollTrigger.refresh(); }, 250);
    setTimeout(() => { ScrollTrigger.refresh(); }, 800);
  }
});

// Initialize Main Panorama Application
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMainPanorama);
} else {
  initMainPanorama();
}
