import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'src', 'assets');

async function compressImages() {
  const files = await fs.readdir(assetsDir);
  for (const file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.png')) {
      const ext = path.extname(file);
      const base = path.basename(file, ext);
      const inputPath = path.join(assetsDir, file);
      const outputPath = path.join(assetsDir, `${base}.webp`);
      
      console.log(`Optimizing ${file}...`);
      await sharp(inputPath)
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);
      console.log(`Saved ${base}.webp`);
    }
  }
}

compressImages().catch(console.error);
