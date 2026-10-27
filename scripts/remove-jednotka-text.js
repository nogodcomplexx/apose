const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const leftUnits = ['01', '02', '03', '07', '08', '09'];
const rightUnits = ['04', '05', '06', '10', '11', '12'];

function getBox(num) {
  if (leftUnits.includes(num)) {
    // Left-sloping floorplans: title "JEDNOTKA Č. XX - BYT..." is in upper-left
    return { left: 110, top: 105, width: 640, height: 75 };
  } else {
    // Right-sloping floorplans: title "JEDNOTKA Č. XX - BYT..." is in upper-right
    return { left: 915, top: 105, width: 655, height: 75 };
  }
}

async function removeTextFromBuffer(inputBuffer, box) {
  const image = sharp(inputBuffer);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Clone buffer to modify
  const outData = Buffer.from(data);

  const yTop = box.top;
  const yBottom = box.top + box.height - 1;
  const xLeft = box.left;
  const xRight = box.left + box.width - 1;

  const ySampleTop = Math.max(0, yTop - 2);
  const ySampleBottom = Math.min(height - 1, yBottom + 2);

  for (let y = yTop; y <= yBottom; y++) {
    const alpha = (y - yTop) / (yBottom - yTop);
    for (let x = xLeft; x <= xRight; x++) {
      const idx = (y * width + x) * channels;
      const idxTop = (ySampleTop * width + x) * channels;
      const idxBottom = (ySampleBottom * width + x) * channels;

      for (let c = 0; c < channels; c++) {
        outData[idx + c] = Math.round((1 - alpha) * data[idxTop + c] + alpha * data[idxBottom + c]);
      }
    }
  }

  return await sharp(outData, {
    raw: {
      width,
      height,
      channels
    }
  }).jpeg({ quality: 95 }).toBuffer();
}

async function cleanAll() {
  console.log('Starting seamless text removal ("JEDNOTKA Č...") on all 24 floorplans and blueprints...');

  for (let i = 1; i <= 12; i++) {
    const num = String(i).padStart(2, '0');
    const box = getBox(num);

    // 1. Clean 3D Floorplan
    const path3D = path.join(__dirname, '..', 'assets', 'images', 'apartments', `apt-${num}-3d-floorplan.jpg`);
    if (fs.existsSync(path3D)) {
      const buf3D = fs.readFileSync(path3D);
      const cleaned3D = await removeTextFromBuffer(buf3D, box);
      fs.writeFileSync(path3D, cleaned3D);

      const pub3D = path.join(__dirname, '..', 'public', 'assets', 'images', 'apartments', `apt-${num}-3d-floorplan.jpg`);
      if (fs.existsSync(pub3D) && !fs.lstatSync(pub3D).isSymbolicLink()) {
        try { fs.writeFileSync(pub3D, cleaned3D); } catch (e) {}
      }
    }

    // 2. Clean CAD Blueprint
    const pathCAD = path.join(__dirname, '..', 'assets', 'images', 'blueprints', `apt-${num}-cad-blueprint.jpg`);
    if (fs.existsSync(pathCAD)) {
      const bufCAD = fs.readFileSync(pathCAD);
      const cleanedCAD = await removeTextFromBuffer(bufCAD, box);
      fs.writeFileSync(pathCAD, cleanedCAD);

      const pubCAD = path.join(__dirname, '..', 'public', 'assets', 'images', 'blueprints', `apt-${num}-cad-blueprint.jpg`);
      if (fs.existsSync(pubCAD) && !fs.lstatSync(pubCAD).isSymbolicLink()) {
        try { fs.writeFileSync(pubCAD, cleanedCAD); } catch (e) {}
      }
    }

    console.log(`✓ Cleaned Apartment ${num}: 3D Floorplan & CAD Blueprint`);
  }

  console.log('\nAll 12 3D floorplans and 12 CAD blueprints have been seamlessly cleaned!');
}

cleanAll().catch(console.error);
