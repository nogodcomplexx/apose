const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const targetLink = path.join(publicDir, 'assets');
const sourceDir = path.join(__dirname, '..', 'assets');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// On local Windows dev, keep the existing junction if present
if (process.platform === 'win32' && fs.existsSync(targetLink)) {
  console.log('Windows local junction public/assets is present and ready.');
} else {
  // On Linux (Vercel production build): copy actual files into public/assets
  // (avoiding symlinks pointing to ../ which Vercel Edge security blocks)
  console.log('Vercel production build: syncing assets into public/assets...');
  fs.mkdirSync(targetLink, { recursive: true });

  const folders = ['css', 'fonts', 'icons', 'js', 'vendor', 'video'];
  for (const f of folders) {
    const src = path.join(sourceDir, f);
    const dest = path.join(targetLink, f);
    if (fs.existsSync(src)) {
      fs.cpSync(src, dest, { recursive: true, force: true });
    }
  }

  // Copy images (web, apartments, blueprints, logo, template)
  const imagesDest = path.join(targetLink, 'images');
  fs.mkdirSync(imagesDest, { recursive: true });
  const imageSubfolders = ['web', 'apartments', 'blueprints', 'logo', 'template'];
  for (const sub of imageSubfolders) {
    const src = path.join(sourceDir, 'images', sub);
    const dest = path.join(imagesDest, sub);
    if (fs.existsSync(src)) {
      fs.cpSync(src, dest, { recursive: true, force: true });
    }
  }

  console.log('Vercel assets synced successfully to public/assets.');
}
