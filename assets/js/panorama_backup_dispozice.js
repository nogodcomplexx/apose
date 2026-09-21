/**
 * Apartmany Panorama - Interactive Core & Localization Engine
 * Language switching (CZ / EN), Previo Booking Hub, Video Tour, Apartment Modals
 */

const i18n = {
  cs: {
    nav_home: 'Domů',
    nav_apartments: 'Apartmány',
    nav_about: 'O rezidenci',
    nav_gallery: 'Galerie',
    nav_contact: 'Kontakt',
    nav_book_now: 'Rezervovat',
    
    hero_sub: 'HORSKÁ LUXUSNÍ REZIDENCE',
    hero_title_1: 'Apartmány',
    hero_title_stroke: 'Panorama',
    hero_desc: 'Exkluzivní horské útočiště v Krušných horách. 12 designových apartmánů (až 50 lůžek) s panoramatickým výhledem, vlastním Lobby Barem, soukromou kójí na lyže a kola pro každý apartmán a ski-in / ski-out polohou přímo u sjezdovky.',
    hero_stat_1_num: '12',
    hero_stat_1_text: 'Designových apartmánů',
    hero_stat_2_num: '50',
    hero_stat_2_text: 'Lůžek celkem',
    hero_stat_3_num: '100%',
    hero_stat_3_text: 'Panoramatický výhled',
    hero_cta_apts: 'Prohlédnout apartmány',
    hero_cta_book: 'Ověřit termíny v Previo',
    
    book_checkin: 'Příjezd',
    book_checkout: 'Odjezd',
    book_apartment: 'Apartmán',
    book_all_apts: 'Všechny apartmány (Celý dům • 50 lůžek)',
    book_guests: 'Hosté',
    book_cta: 'Ověřit dostupnost (Previo)',
    
    ticker_text_1: 'APARTMÁNY PANORAMA',
    ticker_text_2: 'PANORAMATICKÉ VÝHLEDY',
    ticker_text_3: 'SKI-IN / SKI-OUT POLOHA',
    ticker_text_4: '12 DESIGN RESIDENCES',
    
    about_sub: 'ARCHITEKTURA & HORSKÁ FILOZOFIE',
    about_title: 'Spojení masivního dřeva, žuly a nekonečného prostoru',
    about_desc: 'Apartmány Panorama představují harmonii přírodních materiálů a velkoformátových prosklených stěn. Každý apartmán byl navržen tak, aby poskytoval ničím nerušený výhled na horský masiv a maximální akustické soukromí.',
    about_bar_1: 'Panoramatický výhled na masiv',
    about_bar_2: 'Akustický komfort a soukromí',
    about_bar_3: 'Nástupní stanice lanovky (150 m)',
    about_cta: 'Zjistit dostupnost v Previo',
    
    apts_sub: 'NAŠE REZIDENCE',
    apts_title: '12 designových apartmánů na Bublavě',
    apts_desc: 'Celková kapacita 50 lůžek. Každý apartmán disponuje vlastní uzamykatelnou kójí na lyže a kola se sušáky bot a možností dobíjení elektrokol.',
    
    apt1_title: 'Apartmány 1–3',
    apt1_specs: '68–115 m² • 6–8 hostů • Terasa, lamely & výhled',
    apt1_price: 'od 4 800 Kč / noc',
    
    apt2_title: 'Apartmány 4–8',
    apt2_specs: '48–58 m² • 4 hosté • Jídelní stůl, kuchyně & balkon',
    apt2_price: 'od 3 600 Kč / noc',
    
    apt3_title: 'Apartmány 9–12',
    apt3_specs: '36–44 m² • 2–3 hosté • Podkroví, dřevěný dekor & klid',
    apt3_price: 'od 2 600 Kč / noc',
    
    apt4_title: 'Celá rezidence & Lobby Bar',
    apt4_specs: '12 apartmánů • 50 lůžek • Privátní bar, krb & společenská zóna',
    apt4_price: 'od 48 000 Kč / noc',
    
    comfort_sub: 'KOMFORT & VYBAVENÍ',
    comfort_title: 'Vše pro váš bezstarostný horský pobyt',
    comfort_card_1_title: 'Vlastní Kóje na Lyže & Kola',
    comfort_card_1_desc: 'Každý ze 12 apartmánů má vlastní uzamykatelnou privátní kóji se sušáky na lyžařské boty a bezpečným prostorem pro kola včetně dobíjení elektrokol.',
    comfort_card_2_title: 'Stylový Lobby Bar & TV Lounge',
    comfort_card_2_desc: 'Příjemná společenská zóna v přízemí pro ranní espresso, odpolední drinky a večerní sledování sportovních přenosů na velké obrazovce.',
    comfort_card_3_title: 'Slunečné Terasy & Krby',
    comfort_card_3_desc: 'Prostorné venkovní terasy s posezením, výhledem na horské masivy a biokrby v interiérech pro dokonalou horskou pohodu.',
    comfort_card_4_title: 'Krytá Garáž & Wallbox',
    comfort_card_4_desc: 'Pohodlné parkování v suchu pod domem s moderními dobíjecími stanicemi pro vaše elektromobily.',
    comfort_card_5_title: 'Optická Wi-Fi & Smart TV',
    comfort_card_5_desc: 'Rychlé stabilní optické připojení v celé rezidenci i v Lobby Baru a multimediální systémy v každém pokoji.',
    comfort_card_6_title: 'Bezkontaktní Check-in 24/7',
    comfort_card_6_desc: 'Flexibilní příjezd v libovolný čas díky moderním elektronickým zámkům se zabezpečeným PIN kódem bez čekání.',
    
    whole_house_sub: 'EXKLUZIVNÍ PRONÁJEM',
    whole_house_title: 'Plánujete pobyt s přáteli nebo firemní retreat?',
    whole_house_desc: 'Pronajměte si celou rezidenci Apartmány Panorama až pro 50 hostů (12 designových apartmánů). Užijte si soukromý Lobby Bar s čepovaným pivem a TV lounge, kryté garáže, lyžárnu i venkovní terasy jen pro vaši skupinu či firmu.',
    whole_house_btn: 'Poptat celou rezidenci',
    
    testimonial_sub: 'REFERENCE HOSTŮ',
    testimonial_title: 'Co o nás říkají naši hosté',
    reviews_aggregate: '48 ověřených recenzí (Booking.com, Google, Previo)',
    
    footer_desc: 'Exkluzivní horské ubytování s atmosférou alpského luxusu, prémiovým komfortem a dechberoucími výhledy.',
    footer_address: 'Bublava 791',
    footer_phone: '+420 777 123 456',
    footer_email: 'info@apartmany-panorama.cz',
    
    previo_modal_title: 'Rezervační systém Previo',
    previo_modal_note: 'Online ověření dostupnosti a okamžitá kalkulace ceny v reálném čase.',
    previo_dates: 'Termín pobytu:',
    previo_guests: 'Hosté:',
    previo_unit: 'Vybraný apartmán:',
    previo_placeholder_info: 'Zde se integruje oficiální rezervační engine Previo. Po propojení vašeho Previo Hotel ID budou moci hosté platit platební kartou a potvrdit rezervaci okamžitě v reálném čase.',
    previo_confirm_btn: 'Přejít k dokončení rezervace v Previo',

    video_modal_title: 'Videoprohlídka Apartmány Panorama',
    video_modal_sub: '4K Ultra HD • Rezidence & Apartmány',
    previo_modal_sub: 'Oficiální přímá rezervace • Garance nejlepší ceny',
    video_modal_desc: 'Prohlédněte si atmosféru luxusních apartmánů, horské architektury a okolní přírody.',
    video_modal_note: 'Videopřehrávač je připraven pro vložení vaší finální 4K videoprohlídky rezidence.',

    gallery_sub: 'MOMENTY Z PANORAMA',
    gallery_title: 'Fotogalerie rezidence a hor',
    gallery_desc: 'Prozkoumejte autentickou atmosféru horské rezidence, designových apartmánů a okolní přírody.',
    filter_all: 'Všechny momenty (12)',
    filter_lobby: 'Lobby Bar & Lounge',
    filter_residence: 'Rezidence & Exteriér',
    filter_interiors: 'Apartmány & Interiéry',
    filter_nature: 'Hory & Okolí',
    modal_amenities: 'Vybavení & Komfort',
    modal_price_from: 'Cena od',
    modal_per_night: '/ noc',
    modal_best_price: 'Garance nejlepší ceny',
    modal_book_previo: 'Rezervovat v Previo',
    modal_close_aria: 'Zavřít detail apartmánu'
  },
  
  en: {
    nav_home: 'Home',
    nav_apartments: 'Apartments',
    nav_about: 'About',
    nav_gallery: 'Gallery',
    nav_contact: 'Contact',
    nav_book_now: 'Book Now',
    
    hero_sub: 'LUXURY MOUNTAIN RESIDENCE',
    hero_title_1: 'Apartments',
    hero_title_stroke: 'Panorama',
    hero_desc: 'An exclusive alpine sanctuary in the Ore Mountains. 12 designer residences (up to 50 beds) with panoramic vistas, private Lobby Bar, dedicated ski/bike storage locker for each apartment, and ski-in / ski-out convenience.',
    hero_stat_1_num: '12',
    hero_stat_1_text: 'Designer Residences',
    hero_stat_2_num: '50',
    hero_stat_2_text: 'Total Beds',
    hero_stat_3_num: '100%',
    hero_stat_3_text: 'Panoramic Views',
    hero_cta_apts: 'Explore Suites',
    hero_cta_book: 'Check Dates on Previo',
    
    book_checkin: 'Check-in',
    book_checkout: 'Check-out',
    book_apartment: 'Apartment',
    book_all_apts: 'All Apartments (Whole House • 50 Beds)',
    book_guests: 'Guests',
    book_cta: 'Check Availability (Previo)',
    
    ticker_text_1: 'APARTMENTS PANORAMA',
    ticker_text_2: 'PANORAMIC VISTAS',
    ticker_text_3: 'SKI-IN / SKI-OUT LOCATION',
    ticker_text_4: '12 DESIGN RESIDENCES',
    
    about_sub: 'ARCHITECTURE & ALPINE ETHOS',
    about_title: 'The synergy of solid timber, granite, and boundless light',
    about_desc: 'Apartmány Panorama embodies the harmony of organic materials and panoramic glass curtain walls. Each suite is oriented to deliver uninterrupted alpine views and supreme acoustic serenity.',
    about_bar_1: 'Panoramic alpine massif vistas',
    about_bar_2: 'Acoustic comfort & seclusion',
    about_bar_3: 'Proximity to express ski lift (150 m)',
    about_cta: 'Check Dates on Previo',
    
    apts_sub: 'OUR SUITES',
    apts_title: '12 Designer Residences in Bublava',
    apts_desc: 'Total capacity of 50 beds. Each apartment features its own lockable ski and bike storage locker with boot dryers and e-bike charging sockets.',
    
    apt1_title: 'Apartments 1–3',
    apt1_specs: '68–115 m² • 6–8 Guests • Terrace, Timber Slats & View',
    apt1_price: 'from 4,800 CZK / night',
    
    apt2_title: 'Apartments 4–8',
    apt2_specs: '48–58 m² • 4 Guests • Dining Table, Kitchen & Balcony',
    apt2_price: 'from 3,600 CZK / night',
    
    apt3_title: 'Apartments 9–12',
    apt3_specs: '36–44 m² • 2–3 Guests • Loft, Warm Timber & Serenity',
    apt3_price: 'from 2,600 CZK / night',
    
    apt4_title: 'Whole Residence & Lobby Bar',
    apt4_specs: '12 Suites • 50 Beds • Private Bar, Fireplace & Social Lounge',
    apt4_price: 'from 48,000 CZK / night',
    
    comfort_sub: 'COMFORT & AMENITIES',
    comfort_title: 'Everything for an effortless alpine escape',
    comfort_card_1_title: 'Private Ski & Bike Lockers',
    comfort_card_1_desc: 'Each of the 12 apartments has its own lockable private locker with ski boot dryers, bicycle storage, and high-output e-bike charging.',
    comfort_card_2_title: 'Stylish Lobby Bar & TV Lounge',
    comfort_card_2_desc: 'Inviting ground-floor social lounge for morning espresso, afternoon apres-ski drinks, and evening sports broadcasts on a big screen.',
    comfort_card_3_title: 'Sunny Terraces & Fireplaces',
    comfort_card_3_desc: 'Spacious outdoor terraces with lounge seating, panoramic mountain views, and fireplaces in suites for cozy alpine evenings.',
    comfort_card_4_title: 'Underground Garage & Wallbox',
    comfort_card_4_desc: 'Sheltered dry parking beneath the residence equipped with modern high-speed electric vehicle charging wallboxes.',
    comfort_card_5_title: 'High-Speed Wi-Fi & Smart TV',
    comfort_card_5_desc: 'Fast stable fiber optic connectivity across the entire residence including Lobby Bar, plus premium smart TV in every room.',
    comfort_card_6_title: 'Contactless Check-in 24/7',
    comfort_card_6_desc: 'Effortless arrival at any hour with smart PIN keypad access locks without waiting or front-desk delays.',
    
    whole_house_sub: 'EXCLUSIVE BUYOUT',
    whole_house_title: 'Planning a group retreat or family gathering?',
    whole_house_desc: 'Reserve the entirety of Apartmány Panorama for up to 50 guests (12 designer apartments). Enjoy exclusive access to the private Lobby Bar with draft beer and sports TV lounge, sheltered garage, private lockers, and scenic terraces.',
    whole_house_btn: 'Inquire Whole Residence',
    
    testimonial_sub: 'GUEST STORIES',
    testimonial_title: 'What our guests say',
    reviews_aggregate: '48 verified guest reviews (Booking.com, Google, Previo)',
    
    footer_desc: 'Exclusive mountain accommodation combining alpine luxury, premium comfort, and dramatic panoramic vistas.',
    footer_address: 'Bublava 791',
    footer_phone: '+420 777 123 456',
    footer_email: 'info@apartmany-panorama.cz',
    
    previo_modal_title: 'Previo Reservation Engine',
    previo_modal_note: 'Real-time live rate & availability check.',
    previo_dates: 'Stay Dates:',
    previo_guests: 'Guests:',
    previo_unit: 'Selected Suite:',
    previo_placeholder_info: 'This area houses your verified Previo reservation engine. Once your Previo Hotel ID is embedded, guests can pay securely by card and receive instant confirmation.',
    previo_confirm_btn: 'Proceed to Complete Reservation in Previo',

    video_modal_title: 'Video Tour Apartmány Panorama',
    video_modal_desc: 'Explore the atmosphere of our luxury suites, mountain architecture, and alpine nature.',
    video_modal_note: 'The video player is ready for your official 4K residence walkthrough tour.',

    gallery_sub: 'MOMENTS FROM PANORAMA',
    gallery_title: 'Residence & Alpine Photo Gallery',
    gallery_desc: 'Discover the atmosphere of our mountain residence, designer suites, and surrounding alpine peaks.',
    filter_all: 'All Moments (12)',
    filter_lobby: 'Lobby Bar & Lounge',
    filter_residence: 'Residence & Exterior',
    filter_interiors: 'Suites & Interiors',
    filter_nature: 'Mountains & Nature',
    modal_amenities: 'Amenities & Comfort',
    modal_price_from: 'Price from',
    modal_per_night: '/ night',
    modal_best_price: 'Best price guarantee',
    modal_book_previo: 'Book on Previo',
    modal_close_aria: 'Close suite details'
  }
};

let currentLang = 'cs';

function setLanguage(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  localStorage.setItem('panorama_lang', lang);
  if (currentAptModalId && document.getElementById('apt-detail-modal')?.classList.contains('active')) {
    openAptDetailModal(currentAptModalId);
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) {
      el.textContent = i18n[lang][key];
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
}

function openPrevioModal(aptName = '') {
  const checkin = document.getElementById('book-checkin')?.value || '2026-10-15';
  const checkout = document.getElementById('book-checkout')?.value || '2026-10-19';
  const aptSelect = document.getElementById('book-apartment');
  const selectedApt = aptName || (aptSelect ? aptSelect.options[aptSelect.selectedIndex].text : 'Apartmán 1');

  const dEl = document.getElementById('modal-summary-dates');
  if (dEl) dEl.innerHTML = `${checkin} <i class="fa-solid fa-arrow-right-long text-warning mx-2"></i> ${checkout}`;
  
  const gEl = document.getElementById('modal-summary-guests');
  if (gEl) gEl.textContent = currentLang === 'en' ? '2 Adults / Guests' : '2 dospělí / hosté';
  
  const aEl = document.getElementById('modal-summary-apt');
  if (aEl) aEl.textContent = selectedApt;

  const inDate = (typeof calCheckinDate !== 'undefined' && calCheckinDate) ? calCheckinDate : new Date(checkin);
  const outDate = (typeof calCheckoutDate !== 'undefined' && calCheckoutDate) ? calCheckoutDate : new Date(checkout);
  const nights = Math.max(1, Math.round(Math.abs(outDate - inDate) / (1000 * 60 * 60 * 24)));
  if (typeof getStayPricing === 'function') {
    const pricing = getStayPricing(nights);
    const pEl = document.getElementById('modal-summary-price');
    if (pEl) {
      pEl.textContent = `${pricing.formattedPrice} (${pricing.nights} ${pricing.nightWord})`;
    }
  }

  const modal = document.getElementById('previo-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closePrevioModal() {
  const modal = document.getElementById('previo-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
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

let currentAptModalId = null;

const apartmentDetails = {
  1: {
    img: 'assets/images/web/apt-living-balcony.jpg',
    cs: {
      name: 'Apartmán 1',
      category: 'MEZONET PENTHOUSE & TERASA',
      size: '115 m²',
      capacity: '6–8 hostů',
      price: '6 800 Kč',
      tagline: '115 m² • 6–8 hostů • Krušné hory • Bublava',
      specs: [
        { icon: 'fa-solid fa-vector-square', label: '115 m² obytná plocha' },
        { icon: 'fa-solid fa-users', label: '6–8 dospělých hostů' },
        { icon: 'fa-solid fa-bed', label: '3 samostatné ložnice' },
        { icon: 'fa-solid fa-mountain-sun', label: '360° střešní terasa' }
      ],
      features: [
        { icon: 'fa-solid fa-person-skiing', label: 'Vlastní uzamykatelná kóje na lyže a kola se sušáky' },
        { icon: 'fa-solid fa-martini-glass-citrus', label: 'Přístup do privátního Lobby Baru & TV Lounge' },
        { icon: 'fa-solid fa-fire-flame-curved', label: 'Prosklený designový krb a dřevěné lamely' },
        { icon: 'fa-solid fa-bath', label: '2x designová kamenná koupelna' },
        { icon: 'fa-solid fa-wifi', label: 'Optická Wi-Fi & Smart TV s audiem' },
        { icon: 'fa-solid fa-shield-halved', label: 'Bezkontaktní přístup na PIN kód 24/7' }
      ],
      desc: 'Exkluzivní mezonetový penthouse zabírající nejvyšší patro rezidence. Nabízí velkorysé panoramatické výhledy na krušnohorské hřebeny, designový oboustranný krb, dřevěné lamely s teplým podsvícením a soukromou terasu s posezením.'
    },
    en: {
      name: 'Apartment 1',
      category: 'DUPLEX PENTHOUSE & TERRACE',
      size: '115 m²',
      capacity: '6–8 guests',
      price: '€270',
      tagline: '115 m² • 6–8 guests • Ore Mountains • Bublava',
      specs: [
        { icon: 'fa-solid fa-vector-square', label: '115 m² living area' },
        { icon: 'fa-solid fa-users', label: '6–8 adult guests' },
        { icon: 'fa-solid fa-bed', label: '3 separate bedrooms' },
        { icon: 'fa-solid fa-mountain-sun', label: '360° scenic rooftop terrace' }
      ],
      features: [
        { icon: 'fa-solid fa-person-skiing', label: 'Private lockable ski & bike locker with boot dryers' },
        { icon: 'fa-solid fa-martini-glass-citrus', label: 'Access to private resident Lobby Bar & TV Lounge' },
        { icon: 'fa-solid fa-fire-flame-curved', label: 'Glass designer fireplace & acoustic wood slats' },
        { icon: 'fa-solid fa-bath', label: '2x bespoke stone bathrooms' },
        { icon: 'fa-solid fa-wifi', label: 'High-speed optical Wi-Fi & Smart TV' },
        { icon: 'fa-solid fa-shield-halved', label: 'Contactless PIN keypad check-in 24/7' }
      ],
      desc: 'An exclusive duplex penthouse atop the residence. Features sweeping vistas over the Ore Mountains, signature fireplace, timber slat backlighting, and a private terrace with panoramic lounge seating.'
    }
  },
  2: {
    img: 'assets/images/web/apt-living-dining.jpg',
    cs: {
      name: 'Apartmán 2',
      category: 'RODINNÝ MEZONET & TERASA',
      size: '72 m²',
      capacity: '4–6 hostů',
      price: '4 400 Kč',
      tagline: '72 m² • 4–6 hostů • Krušné hory • Bublava',
      specs: [
        { icon: 'fa-solid fa-vector-square', label: '72 m² obytná plocha' },
        { icon: 'fa-solid fa-users', label: '4–6 hostů' },
        { icon: 'fa-solid fa-bed', label: '2 ložnice + obývací salon' },
        { icon: 'fa-solid fa-sun', label: 'Slunečná terasa s výhledem' }
      ],
      features: [
        { icon: 'fa-solid fa-person-skiing', label: 'Vlastní uzamykatelná kóje na lyže a kola se sušáky' },
        { icon: 'fa-solid fa-martini-glass-citrus', label: 'Přístup do privátního Lobby Baru & TV Lounge' },
        { icon: 'fa-solid fa-people-roof', label: 'Masivní dřevěný stůl a plně vybavená kuchyně' },
        { icon: 'fa-solid fa-bath', label: 'Prostorná koupelna s vanou i sprchou' },
        { icon: 'fa-solid fa-wifi', label: 'Rychlé optické připojení & Smart TV' },
        { icon: 'fa-solid fa-shield-halved', label: 'Bezkontaktní přístup na PIN kód 24/7' }
      ],
      desc: 'Prostorný rodinný apartmán s velkou prosluněnou terasou a interiérem z ušlechtilého horského dřeva. Centrem prostoru je masivní jídelní stůl a komfortní sedací souprava s výhledem do údolí.'
    },
    en: {
      name: 'Apartment 2',
      category: 'FAMILY DUPLEX & SUN TERRACE',
      size: '72 m²',
      capacity: '4–6 guests',
      price: '€175',
      tagline: '72 m² • 4–6 guests • Ore Mountains • Bublava',
      specs: [
        { icon: 'fa-solid fa-vector-square', label: '72 m² living area' },
        { icon: 'fa-solid fa-users', label: '4–6 guests' },
        { icon: 'fa-solid fa-bed', label: '2 bedrooms + living salon' },
        { icon: 'fa-solid fa-sun', label: 'Sunny panoramic terrace' }
      ],
      features: [
        { icon: 'fa-solid fa-person-skiing', label: 'Private lockable ski & bike locker with boot dryers' },
        { icon: 'fa-solid fa-martini-glass-citrus', label: 'Access to private resident Lobby Bar & TV Lounge' },
        { icon: 'fa-solid fa-people-roof', label: 'Solid timber dining table & island kitchen' },
        { icon: 'fa-solid fa-bath', label: 'Spacious bath with soaking tub & shower' },
        { icon: 'fa-solid fa-wifi', label: 'High-speed optical Wi-Fi & Smart TV' },
        { icon: 'fa-solid fa-shield-halved', label: 'Contactless PIN keypad check-in 24/7' }
      ],
      desc: 'Expansive family apartment boasting a sun-drenched terrace, bespoke larch wood craftsmanship, solid timber dining table, and stunning views over the Bublava valley.'
    }
  },
  3: {
    img: 'assets/images/web/apt-living-balcony.jpg',
    cs: {
      name: 'Apartmán 3',
      category: 'DESIGN APARTMÁN & JIŽNÍ BALKON',
      size: '68 m²',
      capacity: '4–6 hostů',
      price: '4 200 Kč',
      tagline: '68 m² • 4–6 hostů • Krušné hory • Bublava',
      specs: [
        { icon: 'fa-solid fa-vector-square', label: '68 m² obytná plocha' },
        { icon: 'fa-solid fa-users', label: '4–6 hostů' },
        { icon: 'fa-solid fa-bed', label: '2 ložnice' },
        { icon: 'fa-solid fa-compass', label: 'Jižní orientace s balkonem' }
      ],
      features: [
        { icon: 'fa-solid fa-person-skiing', label: 'Vlastní uzamykatelná kóje na lyže a kola se sušáky' },
        { icon: 'fa-solid fa-martini-glass-citrus', label: 'Přístup do privátního Lobby Baru & TV Lounge' },
        { icon: 'fa-solid fa-utensils', label: 'Moderní kuchyně s indukcí a kávovarem' },
        { icon: 'fa-solid fa-lightbulb', label: 'Ambientní LED osvětlení a krb' },
        { icon: 'fa-solid fa-wifi', label: 'Optická Wi-Fi & Smart TV' },
        { icon: 'fa-solid fa-shield-halved', label: 'Bezkontaktní přístup na PIN kód 24/7' }
      ],
      desc: 'Světlý designový apartmán s jižní orientací a balkonem. Velkoformátová okna propojují interiér s horskou přírodou a lamely z masivního dřeva vytváří útulnou atmosféru.'
    },
    en: {
      name: 'Apartment 3',
      category: 'DESIGN RESIDENCE & SOUTH BALCONY',
      size: '68 m²',
      capacity: '4–6 guests',
      price: '€165',
      tagline: '68 m² • 4–6 guests • Ore Mountains • Bublava',
      specs: [
        { icon: 'fa-solid fa-vector-square', label: '68 m² living area' },
        { icon: 'fa-solid fa-users', label: '4–6 guests' },
        { icon: 'fa-solid fa-bed', label: '2 bedrooms' },
        { icon: 'fa-solid fa-compass', label: 'South-facing with balcony' }
      ],
      features: [
        { icon: 'fa-solid fa-person-skiing', label: 'Private lockable ski & bike locker with boot dryers' },
        { icon: 'fa-solid fa-martini-glass-citrus', label: 'Access to private resident Lobby Bar & TV Lounge' },
        { icon: 'fa-solid fa-utensils', label: 'Modern kitchen with induction & coffee maker' },
        { icon: 'fa-solid fa-lightbulb', label: 'Ambient LED illumination & fireplace' },
        { icon: 'fa-solid fa-wifi', label: 'High-speed optical Wi-Fi & Smart TV' },
        { icon: 'fa-solid fa-shield-halved', label: 'Contactless PIN keypad check-in 24/7' }
      ],
      desc: 'Bright contemporary residence bathed in southern sunlight. Large architectural windows frame the mountain ridge, accompanied by fine timber slat work and private locker convenience.'
    }
  },
  4: {
    img: 'assets/images/web/apt-living-dining.jpg',
    cs: {
      name: 'Apartmán 4',
      category: 'RODINNÝ APARTMÁN & BALKON',
      size: '58 m²',
      capacity: '4 hosté',
      price: '3 800 Kč',
      tagline: '58 m² • 4 hosté • Krušné hory • Bublava',
      specs: [
        { icon: 'fa-solid fa-vector-square', label: '58 m² obytná plocha' },
        { icon: 'fa-solid fa-users', label: '4 dospělí hosté' },
        { icon: 'fa-solid fa-bed', label: 'Ložnice + sofa pro 2' },
        { icon: 'fa-solid fa-mountain', label: 'Balkon s výhledem na hory' }
      ],
      features: [
        { icon: 'fa-solid fa-person-skiing', label: 'Vlastní uzamykatelná kóje na lyže a kola se sušáky' },
        { icon: 'fa-solid fa-martini-glass-citrus', label: 'Přístup do privátního Lobby Baru & TV Lounge' },
        { icon: 'fa-solid fa-shower', label: 'Velkoformátový walk-in sprchový kout' },
        { icon: 'fa-solid fa-chair', label: 'Venkovní balkonové posezení' },
        { icon: 'fa-solid fa-wifi', label: 'Optická Wi-Fi & Smart TV' },
        { icon: 'fa-solid fa-shield-halved', label: 'Bezkontaktní přístup na PIN kód 24/7' }
      ],
      desc: 'Komfortní rodinný apartmán pro čtyřčlennou rodinu či partu přátel. Plná výbava kuchyně, prostorná koupelna a vlastní uzamykatelná kóje se sušáky bot v přízemí.'
    },
    en: {
      name: 'Apartment 4',
      category: 'FAMILY SUITE & BALCONY',
      size: '58 m²',
      capacity: '4 guests',
      price: '€150',
      tagline: '58 m² • 4 guests • Ore Mountains • Bublava',
      specs: [
        { icon: 'fa-solid fa-vector-square', label: '58 m² living area' },
        { icon: 'fa-solid fa-users', label: '4 adult guests' },
        { icon: 'fa-solid fa-bed', label: 'Bedroom + sofa bed' },
        { icon: 'fa-solid fa-mountain', label: 'Balcony with mountain views' }
      ],
      features: [
        { icon: 'fa-solid fa-person-skiing', label: 'Private lockable ski & bike locker with boot dryers' },
        { icon: 'fa-solid fa-martini-glass-citrus', label: 'Access to private resident Lobby Bar & TV Lounge' },
        { icon: 'fa-solid fa-shower', label: 'Large walk-in rain shower' },
        { icon: 'fa-solid fa-chair', label: 'Outdoor balcony lounge set' },
        { icon: 'fa-solid fa-wifi', label: 'High-speed optical Wi-Fi & Smart TV' },
        { icon: 'fa-solid fa-shield-halved', label: 'Contactless PIN keypad check-in 24/7' }
      ],
      desc: 'Comfortable family suite ideal for 4 guests. Equipped with kitchen island, scenic balcony, and individual lockable equipment storage with boot dryers.'
    }
  },
  5: {
    img: 'assets/images/web/apt-living-dining.jpg',
    cs: {
      name: 'Apartmán 5',
      category: 'RODINNÝ APARTMÁN & VÝHLED',
      size: '56 m²',
      capacity: '4 hosté',
      price: '3 700 Kč',
      tagline: '56 m² • 4 hosté • Krušné hory • Bublava',
      specs: [
        { icon: 'fa-solid fa-vector-square', label: '56 m² obytná plocha' },
        { icon: 'fa-solid fa-users', label: '4 dospělí hosté' },
        { icon: 'fa-solid fa-bed', label: 'Ložnice + rozkládací lůžko' },
        { icon: 'fa-solid fa-mountain-sun', label: 'Výhled na sjezdovku Bublava' }
      ],
      features: [
        { icon: 'fa-solid fa-person-skiing', label: 'Vlastní uzamykatelná kóje na lyže a kola se sušáky' },
        { icon: 'fa-solid fa-martini-glass-citrus', label: 'Přístup do privátního Lobby Baru & TV Lounge' },
        { icon: 'fa-solid fa-utensils', label: 'Plně vybavená designová kuchyně' },
        { icon: 'fa-solid fa-volume-xmark', label: 'Špičková akustická izolace' },
        { icon: 'fa-solid fa-wifi', label: 'Optická Wi-Fi & Smart TV' },
        { icon: 'fa-solid fa-shield-halved', label: 'Bezkontaktní přístup na PIN kód 24/7' }
      ],
      desc: 'Moderní horský apartmán s výhledem přímo na zasněžený svah ski areálu Bublava. Klidné zázemí s privátním ski depotem a rychlým přístupem do Lobby Baru.'
    },
    en: {
      name: 'Apartment 5',
      category: 'FAMILY SUITE & SLOPE VIEW',
      size: '56 m²',
      capacity: '4 guests',
      price: '€145',
      tagline: '56 m² • 4 guests • Ore Mountains • Bublava',
      specs: [
        { icon: 'fa-solid fa-vector-square', label: '56 m² living area' },
        { icon: 'fa-solid fa-users', label: '4 adult guests' },
        { icon: 'fa-solid fa-bed', label: 'Bedroom + sofa bed' },
        { icon: 'fa-solid fa-mountain-sun', label: 'Direct ski slope views' }
      ],
      features: [
        { icon: 'fa-solid fa-person-skiing', label: 'Private lockable ski & bike locker with boot dryers' },
        { icon: 'fa-solid fa-martini-glass-citrus', label: 'Access to private resident Lobby Bar & TV Lounge' },
        { icon: 'fa-solid fa-utensils', label: 'Fully equipped designer kitchen' },
        { icon: 'fa-solid fa-volume-xmark', label: 'Superior acoustic soundproofing' },
        { icon: 'fa-solid fa-wifi', label: 'High-speed optical Wi-Fi & Smart TV' },
        { icon: 'fa-solid fa-shield-halved', label: 'Contactless PIN keypad check-in 24/7' }
      ],
      desc: 'Contemporary alpine residence overlooking the ski slopes of Bublava. Enjoy ski-in / ski-out convenience, your private locker, and our ground-floor social bar.'
    }
  },
  6: {
    img: 'assets/images/web/apt-living-dining.jpg',
    cs: {
      name: 'Apartmán 6',
      category: 'DESIGN SUITE & BALKON',
      size: '54 m²',
      capacity: '4 hosté',
      price: '3 600 Kč',
      tagline: '54 m² • 4 hosté • Krušné hory • Bublava',
      specs: [
        { icon: 'fa-solid fa-vector-square', label: '54 m² obytná plocha' },
        { icon: 'fa-solid fa-users', label: '4 hosté' },
        { icon: 'fa-solid fa-bed', label: 'King Size ložnice + salon' },
        { icon: 'fa-solid fa-sun', label: 'Balkon s posezením' }
      ],
      features: [
        { icon: 'fa-solid fa-person-skiing', label: 'Vlastní uzamykatelná kóje na lyže a kola se sušáky' },
        { icon: 'fa-solid fa-martini-glass-citrus', label: 'Přístup do privátního Lobby Baru & TV Lounge' },
        { icon: 'fa-solid fa-mug-saucer', label: 'Prémiový kávovar na zrnkovou kávu' },
        { icon: 'fa-solid fa-shower', label: 'Kamenná koupelna s walk-in sprchou' },
        { icon: 'fa-solid fa-wifi', label: 'Optická Wi-Fi & Smart TV' },
        { icon: 'fa-solid fa-shield-halved', label: 'Bezkontaktní přístup na PIN kód 24/7' }
      ],
      desc: 'Elegantní apartmán z přírodního modřínu a kamene. Perfektní volba pro rodiny nebo páry hledající ničím nerušený horský odpočinek.'
    },
    en: {
      name: 'Apartment 6',
      category: 'DESIGN SUITE & BALCONY',
      size: '54 m²',
      capacity: '4 guests',
      price: '€140',
      tagline: '54 m² • 4 guests • Ore Mountains • Bublava',
      specs: [
        { icon: 'fa-solid fa-vector-square', label: '54 m² living area' },
        { icon: 'fa-solid fa-users', label: '4 guests' },
        { icon: 'fa-solid fa-bed', label: 'King size bedroom + salon' },
        { icon: 'fa-solid fa-sun', label: 'Balcony with lounge seating' }
      ],
      features: [
        { icon: 'fa-solid fa-person-skiing', label: 'Private lockable ski & bike locker with boot dryers' },
        { icon: 'fa-solid fa-martini-glass-citrus', label: 'Access to private resident Lobby Bar & TV Lounge' },
        { icon: 'fa-solid fa-mug-saucer', label: 'Bean-to-cup espresso machine' },
        { icon: 'fa-solid fa-shower', label: 'Stone bath with walk-in rain shower' },
        { icon: 'fa-solid fa-wifi', label: 'High-speed optical Wi-Fi & Smart TV' },
        { icon: 'fa-solid fa-shield-halved', label: 'Contactless PIN keypad check-in 24/7' }
      ],
      desc: 'Sophisticated mountain suite crafted with natural larch and slate stone. Features scenic balcony, private ski/bike locker, and full residence amenities.'
    }
  },
  7: {
    img: 'assets/images/web/apt-living-dining.jpg',
    cs: {
      name: 'Apartmán 7',
      category: 'RODINNÝ APARTMÁN & LESNÍ ZÁTIŠÍ',
      size: '52 m²',
      capacity: '4 hosté',
      price: '3 500 Kč',
      tagline: '52 m² • 4 hosté • Krušné hory • Bublava',
      specs: [
        { icon: 'fa-solid fa-vector-square', label: '52 m² obytná plocha' },
        { icon: 'fa-solid fa-users', label: '4 hosté' },
        { icon: 'fa-solid fa-bed', label: 'Samostatná ložnice + obývák' },
        { icon: 'fa-solid fa-tree', label: 'Výhled do jehličnatého lesa' }
      ],
      features: [
        { icon: 'fa-solid fa-person-skiing', label: 'Vlastní uzamykatelná kóje na lyže a kola se sušáky' },
        { icon: 'fa-solid fa-martini-glass-citrus', label: 'Přístup do privátního Lobby Baru & TV Lounge' },
        { icon: 'fa-solid fa-bed', label: 'Ortopedické matrace pro hluboký spánek' },
        { icon: 'fa-solid fa-volume-xmark', label: 'Akustické odhlučnění' },
        { icon: 'fa-solid fa-wifi', label: 'Optická Wi-Fi & Smart TV' },
        { icon: 'fa-solid fa-shield-halved', label: 'Bezkontaktní přístup na PIN kód 24/7' }
      ],
      desc: 'Tichý apartmán orientovaný k lesnímu hřebenu. Vůně jehličí za okny, plně vybavená kuchyně a privátní kóje na kola či lyže přímo v budově.'
    },
    en: {
      name: 'Apartment 7',
      category: 'FAMILY SUITE & FOREST GLADE',
      size: '52 m²',
      capacity: '4 guests',
      price: '€138',
      tagline: '52 m² • 4 guests • Ore Mountains • Bublava',
      specs: [
        { icon: 'fa-solid fa-vector-square', label: '52 m² living area' },
        { icon: 'fa-solid fa-users', label: '4 guests' },
        { icon: 'fa-solid fa-bed', label: 'Separate bedroom + living area' },
        { icon: 'fa-solid fa-tree', label: 'Pine forest views' }
      ],
      features: [
        { icon: 'fa-solid fa-person-skiing', label: 'Private lockable ski & bike locker with boot dryers' },
        { icon: 'fa-solid fa-martini-glass-citrus', label: 'Access to private resident Lobby Bar & TV Lounge' },
        { icon: 'fa-solid fa-bed', label: 'Orthopedic premium mattresses' },
        { icon: 'fa-solid fa-volume-xmark', label: 'Acoustic tranquility soundproofing' },
        { icon: 'fa-solid fa-wifi', label: 'High-speed optical Wi-Fi & Smart TV' },
        { icon: 'fa-solid fa-shield-halved', label: 'Contactless PIN keypad check-in 24/7' }
      ],
      desc: 'Quiet pine forest retreat offering refreshing mountain air, fully appointed kitchen, and secure ground-floor gear storage.'
    }
  },
  8: {
    img: 'assets/images/web/apt-living-dining.jpg',
    cs: {
      name: 'Apartmán 8',
      category: 'RODINNÝ APARTMÁN & VYHLÍDKA',
      size: '48 m²',
      capacity: '4 hosté',
      price: '3 400 Kč',
      tagline: '48 m² • 4 hosté • Krušné hory • Bublava',
      specs: [
        { icon: 'fa-solid fa-vector-square', label: '48 m² obytná plocha' },
        { icon: 'fa-solid fa-users', label: '4 hosté' },
        { icon: 'fa-solid fa-bed', label: 'Ložnice + rozkládací pohovka' },
        { icon: 'fa-solid fa-mountain', label: 'Vyhlídka na horský hřeben' }
      ],
      features: [
        { icon: 'fa-solid fa-person-skiing', label: 'Vlastní uzamykatelná kóje na lyže a kola se sušáky' },
        { icon: 'fa-solid fa-martini-glass-citrus', label: 'Přístup do privátního Lobby Baru & TV Lounge' },
        { icon: 'fa-solid fa-utensils', label: 'Moderní kuchyně a jídelní kout' },
        { icon: 'fa-solid fa-shower', label: 'Walk-in sprchový kout' },
        { icon: 'fa-solid fa-wifi', label: 'Optická Wi-Fi & Smart TV' },
        { icon: 'fa-solid fa-shield-halved', label: 'Bezkontaktní přístup na PIN kód 24/7' }
      ],
      desc: 'Praktický rodinný apartmán nabízející veškeré pohodlí alpské rezidence. Skvělé zázemí pro aktivní dovolenou na lyžích i horských kolech.'
    },
    en: {
      name: 'Apartment 8',
      category: 'FAMILY SUITE & MOUNTAIN VIEW',
      size: '48 m²',
      capacity: '4 guests',
      price: '€134',
      tagline: '48 m² • 4 guests • Ore Mountains • Bublava',
      specs: [
        { icon: 'fa-solid fa-vector-square', label: '48 m² living area' },
        { icon: 'fa-solid fa-users', label: '4 guests' },
        { icon: 'fa-solid fa-bed', label: 'Bedroom + sleeper sofa' },
        { icon: 'fa-solid fa-mountain', label: 'Mountain ridge view' }
      ],
      features: [
        { icon: 'fa-solid fa-person-skiing', label: 'Private lockable ski & bike locker with boot dryers' },
        { icon: 'fa-solid fa-martini-glass-citrus', label: 'Access to private resident Lobby Bar & TV Lounge' },
        { icon: 'fa-solid fa-utensils', label: 'Modern kitchen & dining nook' },
        { icon: 'fa-solid fa-shower', label: 'Walk-in rain shower' },
        { icon: 'fa-solid fa-wifi', label: 'High-speed optical Wi-Fi & Smart TV' },
        { icon: 'fa-solid fa-shield-halved', label: 'Contactless PIN keypad check-in 24/7' }
      ],
      desc: 'Practical and cozy mountain suite. Outstanding hub for ski adventures and cycling expeditions across the Ore Mountain trails.'
    }
  },
  9: {
    img: 'assets/images/web/apt-bedroom-loft.jpg',
    cs: {
      name: 'Apartmán 9',
      category: 'PODKROVNÍ STUDIO & DŘEVĚNÉ LAMELY',
      size: '44 m²',
      capacity: '3 hosté',
      price: '3 100 Kč',
      tagline: '44 m² • 3 hosté • Krušné hory • Bublava',
      specs: [
        { icon: 'fa-solid fa-vector-square', label: '44 m² obytná plocha' },
        { icon: 'fa-solid fa-users', label: '3 hosté' },
        { icon: 'fa-solid fa-bed', label: 'King Size + přistýlka' },
        { icon: 'fa-solid fa-cloud-moon', label: 'Střešní okno na noční oblohu' }
      ],
      features: [
        { icon: 'fa-solid fa-person-skiing', label: 'Vlastní uzamykatelná kóje na lyže a kola se sušáky' },
        { icon: 'fa-solid fa-martini-glass-citrus', label: 'Přístup do privátního Lobby Baru & TV Lounge' },
        { icon: 'fa-solid fa-lightbulb', label: 'Dřevěné obkladové lamely s LED podsvícením' },
        { icon: 'fa-solid fa-mug-saucer', label: 'Kávový koutek & lednice' },
        { icon: 'fa-solid fa-wifi', label: 'Optická Wi-Fi & Smart TV' },
        { icon: 'fa-solid fa-shield-halved', label: 'Bezkontaktní přístup na PIN kód 24/7' }
      ],
      desc: 'Designové podkrovní studio s luxusním dřevěným obložením za čelem postele a ambientním LED páskem. Střešní okno umožňuje sledovat hvězdy přímo z postele.'
    },
    en: {
      name: 'Apartment 9',
      category: 'LOFT STUDIO & TIMBER SLATS',
      size: '44 m²',
      capacity: '3 guests',
      price: '€122',
      tagline: '44 m² • 3 guests • Ore Mountains • Bublava',
      specs: [
        { icon: 'fa-solid fa-vector-square', label: '44 m² living area' },
        { icon: 'fa-solid fa-users', label: '3 guests' },
        { icon: 'fa-solid fa-bed', label: 'King size + extra bed' },
        { icon: 'fa-solid fa-cloud-moon', label: 'Skylight for stargazing' }
      ],
      features: [
        { icon: 'fa-solid fa-person-skiing', label: 'Private lockable ski & bike locker with boot dryers' },
        { icon: 'fa-solid fa-martini-glass-citrus', label: 'Access to private resident Lobby Bar & TV Lounge' },
        { icon: 'fa-solid fa-lightbulb', label: 'Architectural wood slats with warm LED lighting' },
        { icon: 'fa-solid fa-mug-saucer', label: 'Coffee bar & mini fridge' },
        { icon: 'fa-solid fa-wifi', label: 'High-speed optical Wi-Fi & Smart TV' },
        { icon: 'fa-solid fa-shield-halved', label: 'Contactless PIN keypad check-in 24/7' }
      ],
      desc: 'Romantic loft retreat with vertical wood-slat headboard accents and warm atmospheric illumination. Watch the starry sky right from your bed.'
    }
  },
  10: {
    img: 'assets/images/web/apt-bedroom-loft.jpg',
    cs: {
      name: 'Apartmán 10',
      category: 'PODKROVNÍ STUDIO & KLID',
      size: '42 m²',
      capacity: '3 hosté',
      price: '3 000 Kč',
      tagline: '42 m² • 3 hosté • Krušné hory • Bublava',
      specs: [
        { icon: 'fa-solid fa-vector-square', label: '42 m² obytná plocha' },
        { icon: 'fa-solid fa-users', label: '3 hosté' },
        { icon: 'fa-solid fa-bed', label: 'King Size + přistýlka' },
        { icon: 'fa-solid fa-mountain', label: 'Výhled do tichého údolí' }
      ],
      features: [
        { icon: 'fa-solid fa-person-skiing', label: 'Vlastní uzamykatelná kóje na lyže a kola se sušáky' },
        { icon: 'fa-solid fa-martini-glass-citrus', label: 'Přístup do privátního Lobby Baru & TV Lounge' },
        { icon: 'fa-solid fa-shower', label: 'Kamenný walk-in sprchový kout' },
        { icon: 'fa-solid fa-couch', label: 'Pohodlné křeslo pro čtení' },
        { icon: 'fa-solid fa-wifi', label: 'Optická Wi-Fi & Smart TV' },
        { icon: 'fa-solid fa-shield-halved', label: 'Bezkontaktní přístup na PIN kód 24/7' }
      ],
      desc: 'Atmosférické podkrovní útočiště s trámovou architekturou a dokonalým akustickým klidem pro ničím nerušený horský spánek.'
    },
    en: {
      name: 'Apartment 10',
      category: 'ATTIC STUDIO & SERENITY',
      size: '42 m²',
      capacity: '3 guests',
      price: '€118',
      tagline: '42 m² • 3 guests • Ore Mountains • Bublava',
      specs: [
        { icon: 'fa-solid fa-vector-square', label: '42 m² living area' },
        { icon: 'fa-solid fa-users', label: '3 guests' },
        { icon: 'fa-solid fa-bed', label: 'King size + extra bed' },
        { icon: 'fa-solid fa-mountain', label: 'Valley view' }
      ],
      features: [
        { icon: 'fa-solid fa-person-skiing', label: 'Private lockable ski & bike locker with boot dryers' },
        { icon: 'fa-solid fa-martini-glass-citrus', label: 'Access to private resident Lobby Bar & TV Lounge' },
        { icon: 'fa-solid fa-shower', label: 'Stone walk-in rain shower' },
        { icon: 'fa-solid fa-couch', label: 'Cozy reading armchair' },
        { icon: 'fa-solid fa-wifi', label: 'High-speed optical Wi-Fi & Smart TV' },
        { icon: 'fa-solid fa-shield-halved', label: 'Contactless PIN keypad check-in 24/7' }
      ],
      desc: 'Atmospheric attic hideaway with warm timber details and supreme silence for deeply restorative alpine sleep.'
    }
  },
  11: {
    img: 'assets/images/web/apt-bedroom-loft.jpg',
    cs: {
      name: 'Apartmán 11',
      category: 'STUDIO PRO DVA & HORŠTÍ ROMANTICI',
      size: '38 m²',
      capacity: '2 hosté',
      price: '2 700 Kč',
      tagline: '38 m² • 2 hosté • Krušné hory • Bublava',
      specs: [
        { icon: 'fa-solid fa-vector-square', label: '38 m² obytná plocha' },
        { icon: 'fa-solid fa-users', label: '2 dospělí hosté' },
        { icon: 'fa-solid fa-bed', label: 'King Size ložnice' },
        { icon: 'fa-solid fa-mountain-sun', label: 'Slunečný výhled na hřebeny' }
      ],
      features: [
        { icon: 'fa-solid fa-person-skiing', label: 'Vlastní uzamykatelná kóje na lyže a kola se sušáky' },
        { icon: 'fa-solid fa-martini-glass-citrus', label: 'Přístup do privátního Lobby Baru & TV Lounge' },
        { icon: 'fa-solid fa-mug-saucer', label: 'Kávovar Nespresso & minibar' },
        { icon: 'fa-solid fa-shower', label: 'Velká dešťová sprcha' },
        { icon: 'fa-solid fa-wifi', label: 'Optická Wi-Fi & Smart TV' },
        { icon: 'fa-solid fa-shield-halved', label: 'Bezkontaktní přístup na PIN kód 24/7' }
      ],
      desc: 'Útulné a romantické studio pro dva. Ideální volba pro lyžařský či cyklistický víkend v Krušných horách s relaxací v našem Lobby Baru.'
    },
    en: {
      name: 'Apartment 11',
      category: 'ROMANTIC STUDIO FOR TWO',
      size: '38 m²',
      capacity: '2 guests',
      price: '€106',
      tagline: '38 m² • 2 guests • Ore Mountains • Bublava',
      specs: [
        { icon: 'fa-solid fa-vector-square', label: '38 m² living area' },
        { icon: 'fa-solid fa-users', label: '2 adult guests' },
        { icon: 'fa-solid fa-bed', label: 'King size bed' },
        { icon: 'fa-solid fa-mountain-sun', label: 'Sunny ridge vistas' }
      ],
      features: [
        { icon: 'fa-solid fa-person-skiing', label: 'Private lockable ski & bike locker with boot dryers' },
        { icon: 'fa-solid fa-martini-glass-citrus', label: 'Access to private resident Lobby Bar & TV Lounge' },
        { icon: 'fa-solid fa-mug-saucer', label: 'Nespresso machine & minibar' },
        { icon: 'fa-solid fa-shower', label: 'Spacious rain shower' },
        { icon: 'fa-solid fa-wifi', label: 'High-speed optical Wi-Fi & Smart TV' },
        { icon: 'fa-solid fa-shield-halved', label: 'Contactless PIN keypad check-in 24/7' }
      ],
      desc: 'Cozy and stylish couple retreat. Perfect for a ski or bike getaway with evening relaxation at our Lobby Bar.'
    }
  },
  12: {
    img: 'assets/images/web/apt-bedroom-loft.jpg',
    cs: {
      name: 'Apartmán 12',
      category: 'STUDIO PRO DVA & LESNÍ KLID',
      size: '36 m²',
      capacity: '2 hosté',
      price: '2 600 Kč',
      tagline: '36 m² • 2 hosté • Krušné hory • Bublava',
      specs: [
        { icon: 'fa-solid fa-vector-square', label: '36 m² obytná plocha' },
        { icon: 'fa-solid fa-users', label: '2 hosté' },
        { icon: 'fa-solid fa-bed', label: 'King Size bed' },
        { icon: 'fa-solid fa-tree', label: 'Přímo u horského lesa' }
      ],
      features: [
        { icon: 'fa-solid fa-person-skiing', label: 'Vlastní uzamykatelná kóje na lyže a kola se sušáky' },
        { icon: 'fa-solid fa-martini-glass-citrus', label: 'Přístup do privátního Lobby Baru & TV Lounge' },
        { icon: 'fa-solid fa-volume-xmark', label: 'Maximální soukromí a ticho' },
        { icon: 'fa-solid fa-shower', label: 'Moderní koupelna s podlahovým vytápěním' },
        { icon: 'fa-solid fa-wifi', label: 'Optická Wi-Fi & Smart TV' },
        { icon: 'fa-solid fa-shield-halved', label: 'Bezkontaktní přístup na PIN kód 24/7' }
      ],
      desc: 'Intimní horské hnízdo přímo pod horským lesem. Čistý vzduch, příjemné teplé dřevo a vlastní uzamykatelná kóje na sportovní vybavení.'
    },
    en: {
      name: 'Apartment 12',
      category: 'STUDIO FOR TWO & FOREST SERENITY',
      size: '36 m²',
      capacity: '2 guests',
      price: '€102',
      tagline: '36 m² • 2 guests • Ore Mountains • Bublava',
      specs: [
        { icon: 'fa-solid fa-vector-square', label: '36 m² living area' },
        { icon: 'fa-solid fa-users', label: '2 guests' },
        { icon: 'fa-solid fa-bed', label: 'King size bed' },
        { icon: 'fa-solid fa-tree', label: 'Adjacent to mountain forest' }
      ],
      features: [
        { icon: 'fa-solid fa-person-skiing', label: 'Private lockable ski & bike locker with boot dryers' },
        { icon: 'fa-solid fa-martini-glass-citrus', label: 'Access to private resident Lobby Bar & TV Lounge' },
        { icon: 'fa-solid fa-volume-xmark', label: 'Maximum acoustic seclusion' },
        { icon: 'fa-solid fa-shower', label: 'Modern bathroom with floor heating' },
        { icon: 'fa-solid fa-wifi', label: 'High-speed optical Wi-Fi & Smart TV' },
        { icon: 'fa-solid fa-shield-halved', label: 'Contactless PIN keypad check-in 24/7' }
      ],
      desc: 'Intimate mountain nest directly adjacent to the evergreen forest. Crisp alpine air, warm wood accents, and personal lockable storage.'
    }
  }
};

function openAptDetailModal(id) {
  const apt = apartmentDetails[id];
  if (!apt) return;
  currentAptModalId = id;

  const lang = (typeof currentLang !== 'undefined' && apt[currentLang]) ? currentLang : 'cs';
  const data = apt[lang] || apt.cs;

  const titleEl = document.getElementById('apt-modal-title');
  const catEl = document.getElementById('apt-modal-category');
  const imgEl = document.getElementById('apt-modal-img');
  const descEl = document.getElementById('apt-modal-desc');
  const priceEl = document.getElementById('apt-modal-price');
  const specsContainer = document.getElementById('apt-modal-specs');
  const featuresContainer = document.getElementById('apt-modal-features');
  const taglineEl = document.getElementById('apt-modal-tagline');

  if (titleEl) titleEl.textContent = data.name;
  if (catEl) catEl.textContent = data.category;
  if (imgEl) {
    imgEl.src = apt.img;
    imgEl.alt = data.name;
  }
  if (descEl) descEl.textContent = data.desc;
  if (priceEl) priceEl.textContent = data.price;
  if (taglineEl) taglineEl.textContent = data.tagline;

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
    document.body.style.overflow = 'hidden';
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

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('panorama_lang') || 'cs';
  setLanguage(savedLang);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeOffcanvasMenu();
      closePrevioModal();
      closeVideoModal();
      closeAptDetailModal();
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
});


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
    src: 'assets/images/web/apt-living-balcony.jpg',
    title: 'placeholder',
    category: 'placeholder',
    categorySlug: 'interiors',
    desc: 'placeholder'
  },
  {
    src: 'assets/images/web/lobby-bar-evening.jpg',
    title: 'placeholder',
    category: 'placeholder',
    categorySlug: 'lobby',
    desc: 'placeholder'
  },
  {
    src: 'assets/images/web/apt-living-dining.jpg',
    title: 'placeholder',
    category: 'placeholder',
    categorySlug: 'interiors',
    desc: 'placeholder'
  },
  {
    src: 'assets/images/web/lobby-bar-lounge.jpg',
    title: 'placeholder',
    category: 'placeholder',
    categorySlug: 'lobby',
    desc: 'placeholder'
  },
  {
    src: 'assets/images/web/apt-bedroom-loft.jpg',
    title: 'placeholder',
    category: 'placeholder',
    categorySlug: 'interiors',
    desc: 'placeholder'
  },
  {
    src: 'assets/images/web/residence-exterior.jpg',
    title: 'placeholder',
    category: 'placeholder',
    categorySlug: 'residence',
    desc: 'placeholder'
  },
  {
    src: 'assets/images/web/winter-ski.jpg',
    title: 'placeholder',
    category: 'placeholder',
    categorySlug: 'nature',
    desc: 'placeholder'
  },
  {
    src: 'assets/images/web/gallery-chalet.jpg',
    title: 'placeholder',
    category: 'placeholder',
    categorySlug: 'residence',
    desc: 'placeholder'
  },
  {
    src: 'assets/images/web/summer-hiking.jpg',
    title: 'placeholder',
    category: 'placeholder',
    categorySlug: 'nature',
    desc: 'placeholder'
  },
  {
    src: 'assets/images/web/gallery-lodge.jpg',
    title: 'placeholder',
    category: 'placeholder',
    categorySlug: 'residence',
    desc: 'placeholder'
  },
  {
    src: 'assets/images/web/gallery-lake.jpg',
    title: 'placeholder',
    category: 'placeholder',
    categorySlug: 'nature',
    desc: 'placeholder'
  },
  {
    src: 'assets/images/web/location-village.jpg',
    title: 'placeholder',
    category: 'placeholder',
    categorySlug: 'nature',
    desc: 'placeholder'
  }
];

let currentGalleryIndex = 0;
let isLightboxZoomed = false;

function initPanoramaGalleryFilmstrip() {
  const strip = document.getElementById('lb-filmstrip');
  if (!strip) return;
  strip.innerHTML = '';
  panoramaGalleryData.forEach((item, index) => {
    const thumb = document.createElement('div');
    thumb.className = `lightbox-thumb ${index === currentGalleryIndex ? 'active' : ''}`;
    thumb.setAttribute('data-index', index);
    thumb.onclick = (e) => {
      e.stopPropagation();
      setPanoramaImage(index);
    };
    thumb.innerHTML = `<img src="${item.src}" alt="${item.title}" loading="lazy">`;
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
  
  if (countEl) countEl.textContent = String(index + 1).padStart(2, '0');
  if (totalEl) totalEl.textContent = String(panoramaGalleryData.length).padStart(2, '0');
  if (catEl) catEl.textContent = item.category;
  if (titleEl) titleEl.textContent = item.title;
  if (descEl) descEl.textContent = item.desc;
  
  if (img) {
    img.style.opacity = '0';
    img.src = item.src;
    img.alt = item.title;
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

function toggleLightboxFullscreen() {
  const modal = document.getElementById('panorama-lightbox');
  if (!modal) return;
  if (!document.fullscreenElement) {
    modal.requestFullscreen().catch(err => console.log(err));
  } else {
    document.exitFullscreen().catch(err => console.log(err));
  }
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
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 50);
    } else {
      card.classList.add('filtered-out');
    }
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

// Touch Swipe on mobile
let touchStartX = 0;
let touchEndX = 0;
document.addEventListener('touchstart', (e) => {
  const modal = document.getElementById('panorama-lightbox');
  if (modal && modal.classList.contains('active')) {
    touchStartX = e.changedTouches[0].screenX;
  }
}, { passive: true });

document.addEventListener('touchend', (e) => {
  const modal = document.getElementById('panorama-lightbox');
  if (modal && modal.classList.contains('active')) {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 50) {
      nextPanoramaImage();
    }
    if (touchEndX > touchStartX + 50) {
      prevPanoramaImage();
    }
  }
}, { passive: true });


// =============================================================================
// 14. Bespoke Luxury Alpine Dropdown, Pricing Engine & Date Range Calendar
// =============================================================================

// Pricing Configuration (Placeholders subject to owner refinement)
const APARTMENT_PRICES = {
  'all': {
    pricePerNight: 48000,
    cs: 'Celá rezidence (50 lůžek)',
    en: 'Whole Residence (50 Beds)'
  },
  '1': {
    pricePerNight: 6800,
    cs: 'Apartmán 1 (6–8 osob)',
    en: 'Apartment 1 (6–8 guests)'
  },
  '2': {
    pricePerNight: 4400,
    cs: 'Apartmán 2 (4–6 osob)',
    en: 'Apartment 2 (4–6 guests)'
  },
  '3': {
    pricePerNight: 4200,
    cs: 'Apartmán 3 (4–6 osob)',
    en: 'Apartment 3 (4–6 guests)'
  },
  '4': {
    pricePerNight: 3800,
    cs: 'Apartmán 4 (4 osoby)',
    en: 'Apartment 4 (4 guests)'
  },
  '5': {
    pricePerNight: 3700,
    cs: 'Apartmán 5 (4 osoby)',
    en: 'Apartment 5 (4 guests)'
  },
  '6': {
    pricePerNight: 3600,
    cs: 'Apartmán 6 (4 osoby)',
    en: 'Apartment 6 (4 guests)'
  },
  '7': {
    pricePerNight: 3500,
    cs: 'Apartmán 7 (4 osoby)',
    en: 'Apartment 7 (4 guests)'
  },
  '8': {
    pricePerNight: 3400,
    cs: 'Apartmán 8 (4 osoby)',
    en: 'Apartment 8 (4 guests)'
  },
  '9': {
    pricePerNight: 3100,
    cs: 'Apartmán 9 (3 osoby)',
    en: 'Apartment 9 (3 guests)'
  },
  '10': {
    pricePerNight: 3000,
    cs: 'Apartmán 10 (3 osoby)',
    en: 'Apartment 10 (3 guests)'
  },
  '11': {
    pricePerNight: 2700,
    cs: 'Apartmán 11 (2 osoby)',
    en: 'Apartment 11 (2 guests)'
  },
  '12': {
    pricePerNight: 2600,
    cs: 'Apartmán 12 (2 osoby)',
    en: 'Apartment 12 (2 guests)'
  }
};

function getSelectedApartmentId() {
  const hiddenSelect = document.getElementById('book-apartment');
  return (hiddenSelect && hiddenSelect.value) ? hiddenSelect.value : 'all';
}

function formatStayPrice(amount) {
  const isEn = typeof currentLang !== 'undefined' && currentLang === 'en';
  if (isEn) {
    return `${amount.toLocaleString('en-US')} CZK`;
  }
  return `${amount.toLocaleString('cs-CZ')} Kč`;
}

function getNightsStayWord(count) {
  const isEn = typeof currentLang !== 'undefined' && currentLang === 'en';
  if (isEn) {
    return count === 1 ? 'night' : 'nights';
  }
  if (count === 1) return 'noc';
  if (count >= 2 && count <= 4) return 'noci';
  return 'nocí';
}

function getStayPricing(nightsCount) {
  const aptId = getSelectedApartmentId();
  const aptData = APARTMENT_PRICES[aptId] || APARTMENT_PRICES['all'];
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
    isMinStayMet
  };
}

function updateBookingBarPricing(pricingData) {
  const livePriceEl = document.getElementById('booking-live-price');
  const pinnedLivePriceEl = document.getElementById('pinned-booking-live-price');
  if (!livePriceEl && !pinnedLivePriceEl) return;

  const isEn = typeof currentLang !== 'undefined' && currentLang === 'en';
  let pricing = pricingData;
  if (!pricing) {
    const diff = (calCheckinDate && calCheckoutDate) ? 
      Math.max(1, Math.round(Math.abs(calCheckoutDate - calCheckinDate) / (1000 * 60 * 60 * 24))) : 4;
    pricing = getStayPricing(diff);
  }

  const htmlSuccess = `<i class="fa-solid fa-tag" style="font-size: 10px; color: #ff9d5c;"></i><span>${isEn ? 'Est. price:' : 'Kalkulace:'} <strong>${pricing.formattedPrice}</strong> <span style="font-size: 10px; opacity: 0.7;">(${pricing.nights} ${pricing.nightWord})</span></span>`;
  const htmlWarning = `<i class="fa-solid fa-circle-exclamation" style="font-size: 10px; color: #ff8a43;"></i><span>${isEn ? 'Min. stay: <strong>2 nights</strong>' : 'Min. délka pobytu: <strong>2 noci</strong>'}</span>`;

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

function togglePinnedAptDropdown(e) {
  if (e) e.stopPropagation();
  const dropdown = document.getElementById('pinned-apt-dropdown-container');
  if (!dropdown) return;
  const isOpen = dropdown.classList.contains('open');
  closeAlpineCalendar();
  document.getElementById('apt-dropdown-container')?.classList.remove('open');
  if (isOpen) {
    dropdown.classList.remove('open');
    document.getElementById('pinned-apt-dropdown-trigger')?.setAttribute('aria-expanded', 'false');
  } else {
    dropdown.classList.add('open');
    document.getElementById('pinned-apt-dropdown-trigger')?.setAttribute('aria-expanded', 'true');
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
    mobileAptText.textContent = title;
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
  const pinnedDropdown = document.getElementById('pinned-apt-dropdown-container');
  if (pinnedDropdown) {
    pinnedDropdown.classList.remove('open');
    document.getElementById('pinned-apt-dropdown-trigger')?.setAttribute('aria-expanded', 'false');
  }

  // Live recalculate pricing for chosen apartment
  updateCalBarDisplays();
}

// --- B. Custom Alpine Date Range Calendar Engine ---
let calCheckinDate = new Date(2026, 9, 15); // Default Oct 15, 2026
let calCheckoutDate = new Date(2026, 9, 19); // Default Oct 19, 2026
let calViewDate = new Date(2026, 9, 1); // Viewed month
let calActiveStage = 'checkin'; // 'checkin' | 'checkout'
let calActiveSource = 'hero'; // 'hero' | 'pinned'

const calMonthNamesCS = ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'];
const calMonthNamesEN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const calDaysShortCS = ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'];
const calDaysShortEN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function formatCalISO(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function formatCalDisplay(d) {
  if (typeof currentLang !== 'undefined' && currentLang === 'en') {
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  }
  return `${d.getDate()}. ${d.getMonth() + 1}. ${d.getFullYear()}`;
}

function getCalDayShort(d) {
  const dayIdx = d.getDay();
  return (typeof currentLang !== 'undefined' && currentLang === 'en') ? calDaysShortEN[dayIdx] : calDaysShortCS[dayIdx];
}

function updateCalBarDisplays() {
  const inVal = document.getElementById('checkin-val-display');
  const inDay = document.getElementById('checkin-day-display');
  const inHidden = document.getElementById('book-checkin');
  if (inVal) inVal.textContent = formatCalDisplay(calCheckinDate);
  if (inDay) inDay.textContent = getCalDayShort(calCheckinDate);
  if (inHidden) inHidden.value = formatCalISO(calCheckinDate);

  // Sync pinned checkin
  const pInVal = document.getElementById('pinned-checkin-val');
  const pInDay = document.getElementById('pinned-checkin-day');
  if (pInVal) pInVal.textContent = formatCalDisplay(calCheckinDate);
  if (pInDay) pInDay.textContent = getCalDayShort(calCheckinDate);

  const outVal = document.getElementById('checkout-val-display');
  const outDay = document.getElementById('checkout-day-display');
  const outHidden = document.getElementById('book-checkout');
  if (outVal) outVal.textContent = formatCalDisplay(calCheckoutDate);
  if (outDay) outDay.textContent = getCalDayShort(calCheckoutDate);
  if (outHidden) outHidden.value = formatCalISO(calCheckoutDate);

  // Sync pinned checkout
  const pOutVal = document.getElementById('pinned-checkout-val');
  const pOutDay = document.getElementById('pinned-checkout-day');
  if (pOutVal) pOutVal.textContent = formatCalDisplay(calCheckoutDate);
  if (pOutDay) pOutDay.textContent = getCalDayShort(calCheckoutDate);

  const stageInVal = document.getElementById('cal-stage-in-val');
  const stageOutVal = document.getElementById('cal-stage-out-val');
  if (stageInVal) stageInVal.textContent = formatCalDisplay(calCheckinDate);
  if (stageOutVal) stageOutVal.textContent = formatCalDisplay(calCheckoutDate);

  const diffTime = Math.abs(calCheckoutDate - calCheckinDate);
  const diffDays = Math.max(1, Math.round(diffTime / (1000 * 60 * 60 * 24)));
  const pricing = getStayPricing(diffDays);

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

  // Update mobile summary text
  const pMobDates = document.getElementById('pinned-mobile-dates-text');
  if (pMobDates) {
    const dIn = `${calCheckinDate.getDate()}. ${calCheckinDate.getMonth() + 1}.`;
    const dOut = `${calCheckoutDate.getDate()}. ${calCheckoutDate.getMonth() + 1}.`;
    pMobDates.textContent = `${dIn} – ${dOut}`;
  }
  const pMobSub = document.getElementById('pinned-mobile-sub-text');
  if (pMobSub) {
    const isEn = typeof currentLang !== 'undefined' && currentLang === 'en';
    if (pricing.isMinStayMet) {
      pMobSub.textContent = isEn ?
        `Est. price: ${pricing.formattedPrice} (${pricing.nights} ${pricing.nightWord})` :
        `Kalkulace: ${pricing.formattedPrice} (${pricing.nights} ${pricing.nightWord})`;
    } else {
      pMobSub.textContent = isEn ? 'Min. stay: 2 nights' : 'Min. délka pobytu: 2 noci';
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
    const monthName = (typeof currentLang !== 'undefined' && currentLang === 'en') ? calMonthNamesEN[month] : calMonthNamesCS[month];
    titleEl.textContent = `${monthName} ${year}`;
  }

  const weekdaysEl = document.getElementById('cal-weekdays-row');
  if (weekdaysEl) {
    if (typeof currentLang !== 'undefined' && currentLang === 'en') {
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

      dayCell.addEventListener('click', () => {
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
    badge.innerHTML = '<i class="fa-solid fa-info"></i>';
  }
}

function updateCalendarFooterHint(customStatus, hoverNights) {
  const isEn = typeof currentLang !== 'undefined' && currentLang === 'en';

  if (customStatus === 'action') {
    setAlpineCalHint('action', isEn ? 'Select check-out date' : 'Nyní vyberte datum odjezdu');
    return;
  }

  const nights = hoverNights !== undefined ? hoverNights : (
    (calCheckinDate && calCheckoutDate) ? Math.max(1, Math.round(Math.abs(calCheckoutDate - calCheckinDate) / (1000 * 60 * 60 * 24))) : 4
  );
  const pricing = getStayPricing(nights);

  if (customStatus === 'success') {
    if (pricing.isMinStayMet) {
      setAlpineCalHint('success', isEn ?
        `Dates confirmed • <strong class="cal-price-highlight">${pricing.formattedPrice}</strong>` :
        `Termín nastaven • <strong class="cal-price-highlight">${pricing.formattedPrice}</strong>`
      );
    } else {
      setAlpineCalHint('warning', isEn ? 'Min. stay: 2 nights' : 'Min. délka pobytu: 2 noci');
    }
    return;
  }

  // Normal / Hover / Idle state
  if (pricing.isMinStayMet) {
    // Stay is >= 2 nights -> hide minimum stay notice, show live pricing calculation!
    const prefix = isEn ? 'Estimated price:' : 'Kalkulace:';
    setAlpineCalHint('price', `${prefix} <strong class="cal-price-highlight">${pricing.formattedPrice}</strong> <span class="cal-price-sub">(${pricing.nights} ${pricing.nightWord})</span>`);
  } else {
    // Stay is < 2 nights -> show warning with minimum stay notice!
    setAlpineCalHint('warning', isEn ? 'Min. stay: 2 nights' : 'Min. délka pobytu: 2 noci');
  }
}

function handleCalDateSelection(date) {
  if (calActiveStage === 'checkin') {
    calCheckinDate = date;
    if (!calCheckoutDate || calCheckoutDate <= calCheckinDate) {
      const next = new Date(date);
      next.setDate(next.getDate() + 2);
      calCheckoutDate = next;
    }
    calActiveStage = 'checkout';
    renderAlpineCalendar();
    updateCalendarFooterHint('action');
  } else {
    if (date <= calCheckinDate) {
      calCheckinDate = date;
      const next = new Date(date);
      next.setDate(next.getDate() + 2);
      calCheckoutDate = next;
      calActiveStage = 'checkout';
      renderAlpineCalendar();
      updateCalendarFooterHint('action');
    } else {
      calCheckoutDate = date;
      calActiveStage = 'checkin';
      renderAlpineCalendar();
      updateCalendarFooterHint('success');
      setTimeout(closeAlpineCalendar, 650);
    }
  }
}

function setCalendarStage(stage) {
  calActiveStage = stage;
  if (stage === 'checkout') {
    updateCalendarFooterHint('action');
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
  const d = new Date();
  calCheckinDate = new Date(d);
  calCheckoutDate = new Date(d);
  calCheckoutDate.setDate(calCheckoutDate.getDate() + 4);
  calViewDate = new Date(calCheckinDate.getFullYear(), calCheckinDate.getMonth(), 1);
  calActiveStage = 'checkin';
  renderAlpineCalendar();
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
  document.getElementById('pinned-apt-dropdown-container')?.classList.remove('open');

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
  calActiveStage = field || 'checkin';
  if (calActiveStage === 'checkin' && calCheckinDate) {
    calViewDate = new Date(calCheckinDate.getFullYear(), calCheckinDate.getMonth(), 1);
  } else if (calActiveStage === 'checkout' && calCheckoutDate) {
    calViewDate = new Date(calCheckoutDate.getFullYear(), calCheckoutDate.getMonth(), 1);
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

  const pinnedDropdown = document.getElementById('pinned-apt-dropdown-container');
  if (pinnedDropdown && !pinnedDropdown.contains(e.target)) {
    pinnedDropdown.classList.remove('open');
    document.getElementById('pinned-apt-dropdown-trigger')?.setAttribute('aria-expanded', 'false');
  }

  const cal = document.getElementById('alpine-calendar-popover');
  const inTrigger = document.getElementById('checkin-trigger');
  const outTrigger = document.getElementById('checkout-trigger');
  const pInTrigger = document.getElementById('pinned-checkin-trigger');
  const pOutTrigger = document.getElementById('pinned-checkout-trigger');
  const pMobTrigger = document.getElementById('pinned-mobile-trigger');

  if (cal && cal.classList.contains('active')) {
    if (!cal.contains(e.target) &&
        !inTrigger?.contains(e.target) && !outTrigger?.contains(e.target) &&
        !pInTrigger?.contains(e.target) && !pOutTrigger?.contains(e.target) &&
        !pMobTrigger?.contains(e.target)) {
      closeAlpineCalendar();
    }
  }
});

// Pinned Booking Bar omnipresence scroll watcher
function initPinnedBookingBar() {
  const pinnedBar = document.getElementById('pinned-booking-bar');
  if (!pinnedBar) return;

  function checkScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    // Show pinned bar once scrolled past 260px
    if (scrollY > 260) {
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
  checkScroll();

  // Also support GSAP ScrollTrigger if active
  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.create({
      trigger: '.banner',
      start: 'bottom 80%',
      onLeave: () => pinnedBar.classList.add('is-visible'),
      onEnterBack: () => {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
        if (scrollY <= 260) {
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
  { id: 1, cs: "Panoramatický výhled", en: "Panoramic Mountain View" },
  { id: 2, cs: "Stylový Lobby Bar", en: "Stylish Lobby Bar" },
  { id: 3, cs: "Designové Mezonety", en: "Design Penthouse Suites" }
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
    captionEl.textContent = isEn ? heroScenes[currentHeroScene].en : heroScenes[currentHeroScene].cs;
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

// Initialize on load
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  renderAlpineCalendar();
  initPinnedBookingBar();
  initHeroSplitSlider();
} else {
  window.addEventListener('DOMContentLoaded', () => {
    renderAlpineCalendar();
    initPinnedBookingBar();
    initHeroSplitSlider();
  });
}
