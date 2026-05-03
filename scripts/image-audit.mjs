import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const defaultTargets = ['app/images'];
const supportedExtensions = new Set([
  '.avif',
  '.gif',
  '.jpeg',
  '.jpg',
  '.png',
  '.webp',
]);
const targetPaths = process.argv
  .slice(2)
  .filter((argument) => !argument.startsWith('--'));
const roots = targetPaths.length > 0 ? targetPaths : defaultTargets;

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

async function pathExists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
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

function getRecommendation({ extension, size, metadata }) {
  const maxDimension = Math.max(metadata.width ?? 0, metadata.height ?? 0);

  if (size > 1_500_000 || maxDimension > 2400) {
    return 'optimize';
  }

  if (extension === '.png' && !metadata.hasAlpha && size > 400_000) {
    return 'review png';
  }

  if (extension === '.gif') {
    return 'review gif';
  }

  return 'ok';
}

const imageFiles = [];

for (const root of roots) {
  if (await pathExists(root)) {
    imageFiles.push(...(await collectImages(root)));
  }
}

const rows = [];
const totals = new Map();
let totalBytes = 0;

for (const filePath of imageFiles) {
  const fileStat = await stat(filePath);
  const extension = path.extname(filePath).toLowerCase();
  const metadata = await sharp(filePath, {
    animated: extension === '.gif',
  }).metadata();
  const recommendation = getRecommendation({
    extension,
    size: fileStat.size,
    metadata,
  });

  rows.push({
    path: filePath,
    extension,
    size: fileStat.size,
    width: metadata.width,
    height: metadata.height,
    format: metadata.format,
    hasAlpha: metadata.hasAlpha,
    recommendation,
  });

  totalBytes += fileStat.size;
  totals.set(extension, (totals.get(extension) ?? 0) + 1);
}

rows.sort((left, right) => right.size - left.size);

console.log(`Images: ${rows.length}`);
console.log(`Total size: ${formatBytes(totalBytes)}`);
console.log('Extensions:');

for (const [extension, count] of [...totals.entries()].sort()) {
  console.log(`  ${extension}: ${count}`);
}

console.log('\nLargest images:');
console.table(
  rows.slice(0, 30).map((row) => ({
    size: formatBytes(row.size),
    dimensions: `${row.width}x${row.height}`,
    format: row.format,
    alpha: row.hasAlpha,
    action: row.recommendation,
    path: row.path,
  })),
);

const actionableRows = rows.filter((row) => row.recommendation !== 'ok');

if (actionableRows.length > 0) {
  console.log('\nSuggested follow-up:');
  console.table(
    actionableRows.slice(0, 50).map((row) => ({
      action: row.recommendation,
      size: formatBytes(row.size),
      dimensions: `${row.width}x${row.height}`,
      path: row.path,
    })),
  );
}
