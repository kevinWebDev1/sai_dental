const fs = require('fs');
const path = require('path');

// Root prospects directory where user manages scraped & renamed assets
const prospectsRootDir = path.resolve(__dirname, '../../../../prospects');
// Web destination directory where Next.js serves static assets
const webPublicProspectsDir = path.resolve(__dirname, '../public/prospects');

// Specific pitch-convincing target files (strictly ignoring before-and-after cases as requested)
const TARGET_MAP = [
  { match: /^doctor_1\.(jpg|jpeg|png|webp)$/i, destName: 'doctor_1' },
  { match: /^doctor_2\.(jpg|jpeg|png|webp)$/i, destName: 'doctor_2' },
  { match: /^clinic_desk\.(jpg|jpeg|png|webp)$/i, destName: 'clinic_desk' },
  { match: /^clinic_operatory\.(jpg|jpeg|png|webp)$/i, destName: 'clinic_operatory' },
  { match: /^clinic_waiting\.(jpg|jpeg|png|webp)$/i, destName: 'clinic_waiting' },
  { match: /^clinic_chairside_tech\.(jpg|jpeg|png|webp)$/i, destName: 'clinic_chairside_tech' },
  { match: /^(clinic_exterior|outdoor_look|ourdoor_look|outdoor)\.(jpg|jpeg|png|webp)$/i, destName: 'clinic_exterior' },
  { match: /^logo\.(png|jpg|jpeg|svg)$/i, destName: 'logo' },
];

function findPhotosFolder(prospectDir) {
  const candidates = [
    path.join(prospectDir, 'photos'),
    path.join(prospectDir, 'live_test_photos', 'photos'),
    path.join(prospectDir, 'raw_photos'),
    prospectDir,
  ];
  for (const c of candidates) {
    if (fs.existsSync(c) && fs.statSync(c).isDirectory()) {
      return c;
    }
  }
  return null;
}

function syncProspect(slug) {
  const prospectDir = path.join(prospectsRootDir, slug);
  if (!fs.existsSync(prospectDir)) {
    console.error(`❌ Prospect directory not found for: ${slug} at ${prospectDir}`);
    return;
  }

  const photosFolder = findPhotosFolder(prospectDir);
  if (!photosFolder) {
    console.error(`❌ No photos directory found inside ${slug}`);
    return;
  }

  const destFolder = path.join(webPublicProspectsDir, slug);
  if (!fs.existsSync(destFolder)) {
    fs.mkdirSync(destFolder, { recursive: true });
  }

  const files = fs.readdirSync(photosFolder);
  let syncedCount = 0;
  const syncedFiles = [];

  for (const file of files) {
    for (const rule of TARGET_MAP) {
      if (rule.match.test(file)) {
        const ext = path.extname(file).toLowerCase();
        const srcPath = path.join(photosFolder, file);
        const destFileName = `${rule.destName}${ext}`;
        const destPath = path.join(destFolder, destFileName);

        fs.copyFileSync(srcPath, destPath);
        syncedFiles.push(destFileName);
        syncedCount++;
        break;
      }
    }
  }

  console.log(`\n✅ Synced [${slug}]: ${syncedCount} pitch photos copied to public/prospects/${slug}/`);
  syncedFiles.forEach((f) => console.log(`   - ${f}`));
}

// CLI Argument Handling
const targetArg = process.argv[2] ? process.argv[2].toLowerCase().trim() : 'all';

if (!fs.existsSync(webPublicProspectsDir)) {
  fs.mkdirSync(webPublicProspectsDir, { recursive: true });
}

if (targetArg === 'all') {
  console.log('🔄 Syncing pitch photos for ALL prospects from clients/prospects/ ...');
  const prospects = fs
    .readdirSync(prospectsRootDir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name !== 'sai') // 'sai' is the active clinic, not prospect
    .map((d) => d.name);

  for (const p of prospects) {
    syncProspect(p);
  }
} else {
  console.log(`🔄 Syncing pitch photos for prospect: ${targetArg} ...`);
  syncProspect(targetArg);
}

console.log('\n✨ Sync complete! Real clinic trust photos are ready for live pitching.');
