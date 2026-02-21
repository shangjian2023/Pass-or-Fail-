const pngToIco = require('png-to-ico');
const fs = require('fs');
const path = require('path');

const pngPath = path.join(__dirname, 'assets', 'icon.png');
const icoPath = path.join(__dirname, 'assets', 'icon.ico');

async function createIco() {
  try {
    const buf = await pngToIco.default(pngPath);
    fs.writeFileSync(icoPath, buf);
    console.log('✅ ICO icon created successfully:', icoPath);
  } catch (err) {
    console.error('❌ Error creating ICO:', err);
    process.exit(1);
  }
}

createIco();
