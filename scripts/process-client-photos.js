const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const clientRoomsDir = path.join(__dirname, '..', 'assets', 'apartmetnt rooms');
const destWebDir = path.join(__dirname, '..', 'assets', 'images', 'web');

if (!fs.existsSync(destWebDir)) {
  fs.mkdirSync(destWebDir, { recursive: true });
}

// Mapping of client photos to clean SEO-friendly filenames
const imageConfigs = [
  {
    source: 'Apartmánový dům.png',
    destFilename: 'residence-exterior-front.jpg',
    // Also replaces residence-exterior
    aliases: ['residence-exterior.jpg'],
    altCs: 'Rezidence Apartmány Panorama Bublava – moderní horský apartmánový dům přímo u sjezdovky s vyhrazeným parkováním',
    altEn: 'Apartments Panorama Bublava residence – modern alpine apartment building directly by ski slopes with private parking',
    titleCs: 'Rezidence Apartmány Panorama Bublava',
    titleEn: 'Apartments Panorama Bublava Residence'
  },
  {
    source: 'Moderní bytový dům s balkony.png',
    destFilename: 'residence-exterior-balconies.jpg',
    aliases: ['gallery-chalet.jpg'],
    altCs: 'Apartmány Panorama v Bublavě – pohled na slunné balkony apartmánů a okolní horskou přírodu Krušných hor',
    altEn: 'Apartments Panorama in Bublava – view of sunny apartment balconies and surrounding Ore Mountains nature',
    titleCs: 'Horská rezidence a balkony',
    titleEn: 'Alpine Residence & Balconies'
  },
  {
    source: 'Moderní balkon s ratanovým posezením.png',
    destFilename: 'apt-balcony-rattan.jpg',
    aliases: ['apt-balcony-view.jpg'],
    altCs: 'Privátní vyhlídkový balkon apartmánu s ratanovým posezením – Apartmány Panorama Bublava',
    altEn: 'Private scenic apartment balcony with rattan lounge seating – Apartments Panorama Bublava',
    titleCs: 'Privátní vyhlídkový balkon',
    titleEn: 'Private Scenic Balcony'
  },
  {
    source: 'Světlý skandinávský obývací pokoj s výhledem na lesy.png',
    destFilename: 'apt-living-room-panoramic.jpg',
    aliases: ['apt-living-balcony.jpg'],
    altCs: 'Prostorný skandinávský obývací pokoj s dřevěným lamelovým obložením, Smart TV a výhledem na les – Apartmány Panorama',
    altEn: 'Spacious Scandinavian living room with acoustic slatted oak paneling, Smart TV and forest view – Apartments Panorama',
    titleCs: 'Panoramatický obývací salon',
    titleEn: 'Panoramic Living Salon'
  },
  {
    source: 'Moderní skandinávský kuchyňský kout s jídelnou.png',
    destFilename: 'apt-kitchen-dining-full.jpg',
    aliases: ['apt-living-dining.jpg'],
    altCs: 'Plně vybavená moderní kuchyň s jídelním stolem, kávovarem a výhledem do přírody – Apartmány Panorama Bublava',
    altEn: 'Fully equipped modern kitchen with dining table, coffee maker and scenic mountain views – Apartments Panorama Bublava',
    titleCs: 'Moderní kuchyně s jídelnou',
    titleEn: 'Modern Kitchen & Dining'
  },
  {
    source: 'Minimalistická ložnice se dvěma přikrývkami.png',
    destFilename: 'apt-bedroom-master.jpg',
    aliases: ['apt-bedroom-loft.jpg'],
    altCs: 'Komfortní ložnice s manželskou postelí a prémiovým ložním prádlem – Apartmány Panorama Bublava',
    altEn: 'Comfortable master bedroom with double bed and premium linens – Apartments Panorama Bublava',
    titleCs: 'Klidová ložnice',
    titleEn: 'Master Bedroom'
  },
  {
    source: 'Modern Béžová Koupelna Se Sprchou.png',
    destFilename: 'apt-bathroom-shower.jpg',
    aliases: ['gallery-lodge.jpg'],
    altCs: 'Moderní koupelna s proskleným sprchovým koutem a zrcadlovou skříňkou – Apartmány Panorama Bublava',
    altEn: 'Modern bathroom with glass corner shower enclosure and mirror cabinet – Apartments Panorama Bublava',
    titleCs: 'Moderní koupelna se sprchou',
    titleEn: 'Modern Bathroom & Shower'
  },
  {
    source: 'Minimalistní obývací pokoj v teplém světle.png',
    destFilename: 'apt-living-lounge-warm.jpg',
    aliases: [],
    altCs: 'Útulný obývací prostor v teplém odpoledním světle s pohodlnou pohovkou – Apartmány Panorama',
    altEn: 'Cozy living lounge bathed in warm afternoon sunlight with comfortable sofa – Apartments Panorama',
    titleCs: 'Obývací kout v teplém světle',
    titleEn: 'Warm Sunlit Living Lounge'
  },
  {
    source: 'Slunný skandinávský obývací kout.png',
    destFilename: 'apt-living-sofa-detail.jpg',
    aliases: [],
    altCs: 'Detail skandinávského obývacího koutu s rozkládací pohovkou a vstupem na balkon – Apartmány Panorama',
    altEn: 'Detail of Scandinavian living lounge with sofa bed and access to private balcony – Apartments Panorama',
    titleCs: 'Odpočinkový obývací kout',
    titleEn: 'Relaxing Living Nook'
  },
  {
    source: 'Moderní kuchyňský kout s dřezem.png',
    destFilename: 'apt-kitchen-counter-detail.jpg',
    aliases: [],
    altCs: 'Detail kuchyňské linky s černým granitovým dřezem, kávovarem a indukční varnou deskou – Apartmány Panorama',
    altEn: 'Detail of kitchen workspace with black granite sink, coffee maker and induction hob – Apartments Panorama',
    titleCs: 'Detail kuchyňské linky a dřezu',
    titleEn: 'Kitchen Workspace & Sink Detail'
  },
  {
    source: 'Skandináv jídelní kout zalitý sluncem.png',
    destFilename: 'apt-dining-corner-sun.jpg',
    aliases: [],
    altCs: 'Sluncem zalitý jídelní kout s dřevěným lamelovým panelem a Smart TV – Apartmány Panorama',
    altEn: 'Sun-drenched dining corner with slatted oak feature wall and Smart TV – Apartments Panorama',
    titleCs: 'Slunečný jídelní kout',
    titleEn: 'Sunlit Dining Corner'
  },
  {
    source: 'Slunečný interiér s vázá a sušenými květinami.png',
    destFilename: 'apt-interior-decor-detail.jpg',
    aliases: [],
    altCs: 'Designové interiérové detaily v přírodním stylu – Apartmány Panorama Bublava',
    altEn: 'Natural style interior design details and decor – Apartments Panorama Bublava',
    titleCs: 'Designový interiérový detail',
    titleEn: 'Interior Design Detail'
  },
  {
    source: 'Moderné kúpeľňové umývadlo s teplými tónmi.png',
    destFilename: 'apt-bathroom-vanity-detail.jpg',
    aliases: [],
    altCs: 'Detail umyvadlové skříňky s chromovou baterií a měkkými ručníky – Apartmány Panorama Bublava',
    altEn: 'Detail of bathroom washbasin vanity with chrome faucet and soft towels – Apartments Panorama Bublava',
    titleCs: 'Detail koupelnového umyvadla',
    titleEn: 'Bathroom Vanity Detail'
  },
  {
    source: 'Moderní koupelna s dřevěným obkladem.png',
    destFilename: 'apt-bathroom-tiles-detail.jpg',
    aliases: [],
    altCs: 'Koupelnové vybavení s keramickým obkladem s dekorem dřeva – Apartmány Panorama',
    altEn: 'Bathroom fixtures with wood-effect ceramic tile detailing – Apartments Panorama',
    titleCs: 'Koupelna a sanitární zázemí',
    titleEn: 'Bathroom & Sanitary Facilities'
  },
  {
    source: 'Luxusní koupelna s chromovou baterií.png',
    destFilename: 'apt-bathroom-faucet-detail.jpg',
    aliases: [],
    altCs: 'Detail chromové baterie a keramického umyvadla – Apartmány Panorama',
    altEn: 'Detail of chrome mixer faucet and ceramic washbasin – Apartments Panorama',
    titleCs: 'Chromová baterie a umyvadlo',
    titleEn: 'Chrome Faucet & Basin'
  }
];

async function processImages() {
  console.log('Starting image processing...');

  for (const item of imageConfigs) {
    const srcPath = path.join(clientRoomsDir, item.source);
    if (!fs.existsSync(srcPath)) {
      console.warn('Source file not found:', srcPath);
      continue;
    }

    const targetPath = path.join(destWebDir, item.destFilename);
    await sharp(srcPath)
      .jpeg({ quality: 88, mozjpeg: true })
      .toFile(targetPath);
    console.log(`✓ Processed ${item.source} -> ${item.destFilename}`);

    // Create aliases/replace placeholders
    for (const alias of item.aliases) {
      const aliasPath = path.join(destWebDir, alias);
      await sharp(srcPath)
        .jpeg({ quality: 88, mozjpeg: true })
        .toFile(aliasPath);
      console.log(`  ↪ Updated alias: ${alias}`);
    }
  }

  console.log('All client images processed and optimized successfully!');
}

processImages().catch(err => {
  console.error('Error processing images:', err);
  process.exit(1);
});
