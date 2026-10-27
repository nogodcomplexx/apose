const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.join(__dirname, '..');
const outDir = path.join(rootDir, 'out');
const assetsDir = path.join(rootDir, 'assets');
const outAssetsDir = path.join(outDir, 'assets');
const publicHtaccess = path.join(rootDir, 'public', '.htaccess');
const outHtaccess = path.join(outDir, '.htaccess');
const publicLlms = path.join(rootDir, 'public', 'llms.txt');
const outLlms = path.join(outDir, 'llms.txt');
const zipFile = path.join(rootDir, 'apartmany-panorama-ftp.zip');

console.log('=== PREPARING STATIC FTP EXPORT PACKAGE ===');

if (!fs.existsSync(outDir)) {
  console.error('ERROR: out/ directory does not exist! Run npm run build first.');
  process.exit(1);
}

// 1. Ensure out/assets has real copied files (not junction)
console.log('1. Verifying and syncing actual asset files into out/assets...');
fs.mkdirSync(outAssetsDir, { recursive: true });

const folders = ['css', 'fonts', 'icons', 'js', 'vendor', 'video', 'images'];
for (const f of folders) {
  const src = path.join(assetsDir, f);
  const dest = path.join(outAssetsDir, f);
  if (fs.existsSync(src)) {
    fs.cpSync(src, dest, { recursive: true, force: true });
  }
}

// 2. Ensure .htaccess and llms.txt are in out/
if (fs.existsSync(publicHtaccess)) {
  fs.copyFileSync(publicHtaccess, outHtaccess);
  console.log('2. Copied .htaccess into out/.htaccess');
}
if (fs.existsSync(publicLlms)) {
  fs.copyFileSync(publicLlms, outLlms);
  console.log('2b. Copied llms.txt into out/llms.txt');
}

// 3. Remove old zip if exists
if (fs.existsSync(zipFile)) {
  fs.unlinkSync(zipFile);
}

// 4. Create zip file using PowerShell on Windows
console.log('3. Packaging out/ into apartmany-panorama-ftp.zip...');
try {
  execSync(
    `powershell -Command "Compress-Archive -Path '${outDir}\\*' -DestinationPath '${zipFile}' -Force"`,
    { stdio: 'inherit' }
  );
  const stats = fs.statSync(zipFile);
  console.log(`\nSUCCESS! Created FTP package: apartmany-panorama-ftp.zip (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
  console.log('Location:', zipFile);
  console.log('You can upload this zip to your FTP server or extract its contents directly into www/ or public_html/ !');
} catch (e) {
  console.error('Failed to create zip:', e.message);
}
