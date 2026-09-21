const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const targetLink = path.join(publicDir, 'assets');
const sourceDir = path.join(__dirname, '..', 'assets');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

if (!fs.existsSync(targetLink)) {
  try {
    if (process.platform === 'win32') {
      fs.symlinkSync(sourceDir, targetLink, 'junction');
      console.log('Created NTFS junction: public/assets -> assets');
    } else {
      // Linux (Vercel) / macOS: create relative symlink
      fs.symlinkSync('../assets', targetLink, 'dir');
      console.log('Created symlink: public/assets -> ../assets');
    }
  } catch (err) {
    console.warn('Symlink creation failed, copying essential assets...', err.message);
    const essentialFolders = ['css', 'fonts', 'icons', 'images', 'js', 'vendor', 'video'];
    fs.mkdirSync(targetLink, { recursive: true });
    for (const folder of essentialFolders) {
      const src = path.join(sourceDir, folder);
      const dest = path.join(targetLink, folder);
      if (fs.existsSync(src)) {
        fs.cpSync(src, dest, { recursive: true });
      }
    }
    console.log('Copied essential web asset folders to public/assets');
  }
} else {
  console.log('public/assets is already present and ready');
}
