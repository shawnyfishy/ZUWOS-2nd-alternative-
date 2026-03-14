const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/features');

async function processImages() {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (!file.match(/\.(png|jpe?g)$/i)) continue;
        if (file.includes('@2x') || file.includes('@3x') || file.includes('-orig')) continue;

        const filePath = path.join(dir, file);
        const ext = path.extname(file);
        const base = path.basename(file, ext);
        const origName = `${base}-orig${ext}`;
        const origPath = path.join(dir, origName);
        
        // Backup original high-res image
        if (!fs.existsSync(origPath)) {
            fs.copyFileSync(filePath, origPath);
        }

        const metadata = await sharp(origPath).metadata();
        const maxW = metadata.width;
        
        // If the image is smaller than 1200px, it's not a massive 3x image, so just keep sizes roughly same to prevent shrinking too much.
        const isSmall = maxW < 1200;

        const w1x = isSmall ? maxW : Math.max(1, Math.round(maxW / 3));
        const w2x = isSmall ? maxW : Math.max(1, Math.round((maxW * 2) / 3));
        const w3x = maxW;

        try {
            // save @3x
            await sharp(origPath).resize(w3x).toFile(path.join(dir, `${base}@3x${ext}`));
            // save @2x
            await sharp(origPath).resize(w2x).toFile(path.join(dir, `${base}@2x${ext}`));
            // save 1x
            await sharp(origPath).resize(w1x).toFile(filePath);
            console.log(`Successfully generated Retina variants for ${file}`);
        } catch (e) {
            console.error(`Failed on ${file}`, e);
        }
    }
}

processImages().catch(console.error);
