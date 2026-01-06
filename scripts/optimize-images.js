import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "./src/assets/img";
const outputDir = "./public/img";

fs.mkdirSync(outputDir, { recursive: true });

async function processImages() {
  const files = fs.readdirSync(inputDir);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const name = path.basename(file, ext);

    const supportedFormats = [".jpg", ".jpeg", ".png", ".webp"];

    if (!supportedFormats.includes(ext)) {
      console.log(`⏩ Saltando "${file}" (formato no soportado)`);
      continue;
    }

    const inputPath = path.join(inputDir, file);

    try {
      console.log(`🔄 Procesando: ${file}`);

      // PNG optimizado
      await sharp(inputPath)
        .png({ quality: 80, compressionLevel: 8 })
        .toFile(path.join(outputDir, `${name}.png`));

      // WebP
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(path.join(outputDir, `${name}.webp`));

      // AVIF
      await sharp(inputPath)
        .avif({ quality: 50 })
        .toFile(path.join(outputDir, `${name}.avif`));

      console.log(`✅ ${file} convertido a PNG, WebP, AVIF`);
    } catch (err) {
      console.error(`❌ Error procesando ${file}:`, err.message);
    }
  }
}

processImages().catch((err) => console.error(err));
