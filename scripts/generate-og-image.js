const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createOgImage() {
  const width = 1200;
  const height = 630;

  // 1. Prepare base background: residence-exterior-balconies resized/cropped to 1200x630
  const bg = await sharp(path.join(__dirname, '..', 'assets', 'images', 'web', 'residence-exterior-balconies.jpg'))
    .resize(width, height, { fit: 'cover', position: 'center' })
    .modulate({ brightness: 0.95, saturation: 1.05 })
    .toBuffer();

  // 2. Prepare inset preview: apt-living-room-panoramic with rounded corners
  const insetWidth = 430;
  const insetHeight = 280;
  
  // Create rounded corner mask for inset photo
  const roundedCorners = Buffer.from(
    `<svg><rect x="0" y="0" width="${insetWidth}" height="${insetHeight}" rx="16" ry="16"/></svg>`
  );

  const insetPhoto = await sharp(path.join(__dirname, '..', 'assets', 'images', 'web', 'apt-living-room-panoramic.jpg'))
    .resize(insetWidth, insetHeight, { fit: 'cover', position: 'center' })
    .composite([{ input: roundedCorners, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // 3. Create SVG overlay for graphics, text, badges, borders, and logo
  const svgOverlay = Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Dark luxury gradient from left to right -->
        <linearGradient id="darkVignette" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#080c11" stop-opacity="0.97"/>
          <stop offset="48%" stop-color="#080c11" stop-opacity="0.92"/>
          <stop offset="68%" stop-color="#080c11" stop-opacity="0.55"/>
          <stop offset="100%" stop-color="#080c11" stop-opacity="0.15"/>
        </linearGradient>

        <!-- Bottom gradient for extra legibility -->
        <linearGradient id="bottomVignette" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="60%" stop-color="#080c11" stop-opacity="0"/>
          <stop offset="100%" stop-color="#080c11" stop-opacity="0.88"/>
        </linearGradient>

        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="35%" stop-color="#fbbf24"/>
          <stop offset="100%" stop-color="#ff7425"/>
        </linearGradient>
        
        <filter id="cardShadow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#000000" flood-opacity="0.85"/>
        </filter>
      </defs>

      <!-- Gradient overlays -->
      <rect width="${width}" height="${height}" fill="url(#darkVignette)"/>
      <rect width="${width}" height="${height}" fill="url(#bottomVignette)"/>

      <!-- Accent Top Border -->
      <rect x="0" y="0" width="${width}" height="6" fill="url(#goldGrad)"/>

      <!-- Inset card border & background shadow -->
      <rect x="696" y="166" width="${insetWidth + 8}" height="${insetHeight + 8}" rx="20" ry="20" fill="none" stroke="rgba(255, 116, 37, 0.45)" stroke-width="2" filter="url(#cardShadow)"/>

      <!-- Logo & Eyebrow Group -->
      <g transform="translate(70, 72)">
        <!-- Mountain crest logo -->
        <g transform="translate(0, -4) scale(1.45)">
          <circle cx="24" cy="7" r="2.5" fill="#ff7425"/>
          <line x1="24" y1="2" x2="24" y2="4" stroke="#fbbf24" stroke-width="1" stroke-linecap="round"/>
          <polygon points="12,18 4,36 20,36" fill="#1e2229" stroke="rgba(255,255,255,0.2)" stroke-width="0.8"/>
          <polygon points="12,18 20,36 12,36" fill="#fbbf24" fill-opacity="0.4"/>
          <polygon points="34,16 26,36 44,36" fill="#181c22" stroke="rgba(255,255,255,0.2)" stroke-width="0.8"/>
          <polygon points="34,16 34,36 44,36" fill="#ff7425" fill-opacity="0.35"/>
          <polygon points="24,10 11,38 24,38" fill="#d95a10"/>
          <polygon points="24,10 24,38 37,38" fill="#ff7425"/>
          <polygon points="24,10 20,18 24,16 28,18" fill="#ffffff"/>
          <line x1="2" y1="41" x2="46" y2="41" stroke="#ff7425" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="16" y1="43.5" x2="32" y2="43.5" stroke="#fbbf24" stroke-width="1" stroke-linecap="round"/>
        </g>

        <!-- Brand Eyebrow -->
        <text x="88" y="30" fill="#ff7425" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="14" font-weight="700" letter-spacing="4">HORSKÁ LUXUSNÍ REZIDENCE • BUBLAVA 791</text>
        <text x="88" y="52" fill="rgba(255,255,255,0.68)" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="13" font-weight="500" letter-spacing="2">KRUŠNÉ HORY • SKI-IN / SKI-OUT</text>
      </g>

      <!-- Main Title -->
      <g transform="translate(70, 205)">
        <text x="0" y="0" fill="#ffffff" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="54" font-weight="900" letter-spacing="2">APARTMÁNY</text>
        <text x="0" y="66" fill="url(#goldGrad)" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="64" font-weight="900" letter-spacing="3">PANORAMA</text>
      </g>

      <!-- Subtitle -->
      <text x="70" y="325" fill="rgba(240,245,255,0.92)" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="20" font-weight="400">
        Designové horské apartmány přímo u sjezdovky Bublava.
      </text>

      <!-- 4 Key USPs Pills -->
      <g transform="translate(70, 365)">
        <!-- Pill 1: Všechny pokoje s balkonem -->
        <rect x="0" y="0" width="245" height="42" rx="21" fill="rgba(255,116,37,0.22)" stroke="#ff7425" stroke-width="1.4"/>
        <text x="18" y="26" fill="#ffffff" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="14" font-weight="700">✓ Všechny pokoje s balkonem</text>

        <!-- Pill 2: Přímo u lanovky -->
        <rect x="258" y="0" width="195" height="42" rx="21" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
        <text x="276" y="26" fill="#ffffff" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="14" font-weight="600">✓ Přímo u lanovky (150 m)</text>
      </g>

      <g transform="translate(70, 420)">
        <!-- Pill 3: Lobby Bar & Vyhřívaná lyžárna -->
        <rect x="0" y="0" width="265" height="42" rx="21" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
        <text x="18" y="26" fill="#ffffff" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="14" font-weight="600">✓ Kóje se sušáky &amp; Lobby Bar</text>

        <!-- Pill 4: Garance nejlepší ceny -->
        <rect x="278" y="0" width="215" height="42" rx="21" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
        <text x="296" y="26" fill="#ffffff" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="14" font-weight="600">✓ Garance nejlepší ceny</text>
      </g>

      <!-- Bottom Authority Line -->
      <g transform="translate(70, 560)">
        <line x1="0" y1="0" x2="520" y2="0" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
        <text x="0" y="24" fill="rgba(255,255,255,0.65)" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="13" font-weight="500" letter-spacing="1">Oficiální web rezidence • Online rezervace Previo • www.apartmany-panorama.cz</text>
      </g>

      <!-- Badge for Inset Interior Photo -->
      <g transform="translate(720, 415)">
        <rect x="0" y="0" width="290" height="34" rx="17" fill="rgba(8,12,17,0.92)" stroke="rgba(255,116,37,0.4)" stroke-width="1"/>
        <circle cx="18" cy="17" r="4.5" fill="#ff7425"/>
        <text x="32" y="22" fill="#ffffff" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="13" font-weight="600">Skandinávský design &amp; výhled</text>
      </g>
    </svg>
  `);

  // 4. Composite base background + inset photo + SVG overlay
  const destDir = path.join(__dirname, '..', 'assets', 'images', 'web');
  const destPublicDir = path.join(__dirname, '..', 'public', 'assets', 'images', 'web');

  const destFile = path.join(destDir, 'og-image-panorama.jpg');
  await sharp(bg)
    .composite([
      {
        input: insetPhoto,
        top: 170,
        left: 700
      },
      {
        input: svgOverlay,
        top: 0,
        left: 0
      }
    ])
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(destFile);

  if (fs.existsSync(destPublicDir)) {
    fs.copyFileSync(destFile, path.join(destPublicDir, 'og-image-panorama.jpg'));
  }

  console.log('Successfully generated og-image-panorama.jpg at', destFile);
}

createOgImage().catch(console.error);
