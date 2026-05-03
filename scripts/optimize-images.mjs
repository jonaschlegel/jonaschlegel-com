import { readdir, readFile, rename, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const supportedExtensions = new Set(['.jpeg', '.jpg', '.png', '.webp']);
const writeChanges = process.argv.includes('--write');
const targetArgument = process.argv.find((argument) =>
  argument.startsWith('--target='),
);
const maxDimensionArgument = process.argv.find((argument) =>
  argument.startsWith('--max-dimension='),
);
const qualityArgument = process.argv.find((argument) =>
  argument.startsWith('--quality='),
);

const targetRoot = targetArgument?.split('=')[1] ?? 'app/images';
const maxDimension = Number(maxDimensionArgument?.split('=')[1] ?? 2400);
const quality = Number(qualityArgument?.split('=')[1] ?? 82);
const minSavingsRatio = 0.02;

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

async function collectImages(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectImages(entryPath)));
      continue;
    }

    if (
      entry.isFile() &&
      supportedExtensions.has(path.extname(entry.name).toLowerCase())
    ) {
      files.push(entryPath);
    }
  }

  return files;
}

function createPipeline(filePath, metadata) {
  const extension = path.extname(filePath).toLowerCase();
  const shouldResize =
    Math.max(metadata.width ?? 0, metadata.height ?? 0) > maxDimension;
  let pipeline = sharp(filePath, { limitInputPixels: false }).rotate();

  if (shouldResize) {
    pipeline = pipeline.resize({
      width: maxDimension,
      height: maxDimension,
      fit: 'inside',
      withoutEnlargement: true,
    });
  }

  if (extension === '.jpg' || extension === '.jpeg') {
    return pipeline.jpeg({ quality, mozjpeg: true, progressive: true });
  }

  if (extension === '.webp') {
    return pipeline.webp({ quality, effort: 6 });
  }

  return pipeline.png({
    compressionLevel: 9,
    effort: 10,
    adaptiveFiltering: true,
  });
}

const imageFiles = await collectImages(targetRoot);
const results = [];
let originalBytes = 0;
let optimizedBytes = 0;

for (const filePath of imageFiles) {
  const fileStat = await stat(filePath);
  const originalBuffer = await readFile(filePath);
  const metadata = await sharp(originalBuffer, {
    limitInputPixels: false,
  }).metadata();
  const optimizedBuffer = await createPipeline(filePath, metadata).toBuffer();
  const savedBytes = originalBuffer.length - optimizedBuffer.length;
  const savingsRatio = savedBytes / originalBuffer.length;
  const shouldWrite = savedBytes > 0 && savingsRatio >= minSavingsRatio;

  originalBytes += fileStat.size;
  optimizedBytes += shouldWrite ? optimizedBuffer.length : fileStat.size;

  if (shouldWrite && writeChanges) {
    const temporaryPath = `${filePath}.tmp-optimized`;
    await writeFile(temporaryPath, optimizedBuffer);
    await rename(temporaryPath, filePath);
  }

  results.push({
    path: filePath,
    before: fileStat.size,
    after: shouldWrite ? optimizedBuffer.length : fileStat.size,
    saved: shouldWrite ? savedBytes : 0,
    changed: shouldWrite,
  });
}

const changedResults = results.filter((result) => result.changed);

console.log(
  writeChanges
    ? 'Optimized images in place.'
    : 'Dry run only. Re-run with --write to update files.',
);
console.log(`Scanned: ${results.length}`);
console.log(`Changed: ${changedResults.length}`);
console.log(`Before: ${formatBytes(originalBytes)}`);
console.log(`After: ${formatBytes(optimizedBytes)}`);
console.log(
  `Potential savings: ${formatBytes(originalBytes - optimizedBytes)}`,
);

if (changedResults.length > 0) {
  console.table(
    changedResults.slice(0, 80).map((result) => ({
      saved: formatBytes(result.saved),
      before: formatBytes(result.before),
      after: formatBytes(result.after),
      path: result.path,
    })),
  );
}
