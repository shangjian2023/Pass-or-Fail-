const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, 'assets', 'icon.svg');
const icoPath = path.join(__dirname, 'assets', 'icon.ico');
const pngPath = path.join(__dirname, 'assets', 'icon.png');

async function createIcon() {
  try {
    // 读取SVG文件
    const svgBuffer = fs.readFileSync(svgPath);
    
    // 生成PNG图标（256x256）
    await sharp(svgBuffer)
      .resize(256, 256)
      .png()
      .toFile(pngPath);
    
    console.log('✅ PNG icon created:', pngPath);
    
    // 生成多种尺寸的PNG
    const sizes = [16, 32, 48, 64, 128, 256];
    const pngBuffers = [];
    
    for (const size of sizes) {
      const buffer = await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toBuffer();
      pngBuffers.push({ size, buffer });
    }
    
    // 使用electron-builder内置的图标处理功能
    // 这里我们只需要确保PNG图标存在即可
    console.log('✅ All icon sizes generated successfully');
    console.log('📦 Ready for packaging with electron-builder');
    
  } catch (error) {
    console.error('❌ Error creating icon:', error);
    process.exit(1);
  }
}

createIcon();
