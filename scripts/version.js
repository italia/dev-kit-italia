#!/usr/bin/env node
/* eslint-disable no-console */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

/**
 * Comando principale di rilascio
 */
function release() {
  console.log('🚀 Inizio il processo di versionamento...\n');

  try {
    // 1. Esegui il comando di versionamento dei changeset
    console.log('🔧 Esecuzione del versionamento dei changeset...');
    execSync('pnpm exec changeset version', { stdio: 'inherit' });

    // 2. Aggiungi entry "version bump" dove necessario
    execSync('node scripts/add-version-bump.js', { stdio: 'inherit' });

    // 3. Genera il changelog unificato
    execSync('node scripts/generate-unified-changelog.js', { stdio: 'inherit' });

    // 4. Aggiorna la versione in packages/globals/src/index.ts
    console.log('🔧 Aggiornamento della versione in packages/globals/src/index.ts...');
    const globalsPackageJsonPath = join(rootDir, 'packages/globals/package.json');
    const globalsIndexPath = join(rootDir, 'packages/globals/src/index.ts');

    const globalsPackageJson = JSON.parse(readFileSync(globalsPackageJsonPath, 'utf-8'));
    const { version } = globalsPackageJson;

    let indexContent = readFileSync(globalsIndexPath, 'utf-8');
    indexContent = indexContent.replace(/version:\s*['"][\d\w.-]+['"]/, `version: '${version}'`);

    writeFileSync(globalsIndexPath, indexContent, 'utf-8');
    console.log(`✅ Versione aggiornata a ${version} in packages/globals/src/index.ts`);

    console.log('\n✅ Versionamento completato con successo!');
  } catch (error) {
    console.log('\n❌ Errore durante il versionamento:', error.message);
    process.exit(1);
  }
}

// Esegui il comando
release();
