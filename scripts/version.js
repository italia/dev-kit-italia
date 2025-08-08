#!/usr/bin/env node
/* eslint-disable no-console */

import { execSync } from 'child_process';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

/**
 * Crea un tag di versione basato sulla versione di un pacchetto rappresentativo
 */
function createVersionTag() {
  // Usa la versione del pacchetto button come riferimento (tutti i pacchetti hanno la stessa versione)
  const packagePath = join(rootDir, 'packages', 'button', 'package.json');
  const packageJson = JSON.parse(readFileSync(packagePath, 'utf8'));
  const { version } = packageJson;
  const tag = `v${version}`;

  try {
    // Verifica se il tag esiste già
    execSync(`git rev-parse ${tag}`, { stdio: 'pipe' });
    console.log(`❌ Il tag ${tag} esiste già. Sembra che questa versione sia già stata rilasciata.`);
    process.exit(1);
  } catch {
    // Il tag non esiste, procediamo
  }

  return tag;
}

/**
 * Controlla se ci sono changeset pendenti
 */
function hasChangesets() {
  try {
    const result = execSync('pnpm exec changeset status --output=json', {
      encoding: 'utf8',
      stdio: 'pipe',
    });
    const status = JSON.parse(result);
    return status.changesets && status.changesets.length > 0;
  } catch (error) {
    console.log('⚠️ Errore nel controllo dei changeset:', error.message);
    return false;
  }
}

/**
 * Comando principale di rilascio
 */
function release() {
  console.log('🚀 Inizio il processo di versionamento...\n');

  // Controlla se ci sono changeset
  // if (!hasChangesets()) {
  //   console.log('❌ Nessun changeset trovato. Aggiungi prima i changeset con: pnpm release:changeset');
  //   process.exit(1);
  // }

  // Controllo dello stato di git
  // try {
  //   // Verifica che siamo sul branch main
  //   const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
  //   if (currentBranch !== 'main') {
  //     console.log(`❌ Il rilascio deve essere eseguito dal branch 'main'. Branch attuale: ${currentBranch}`);
  //     process.exit(1);
  //   }

  //   const status = execSync('git status --porcelain', { encoding: 'utf8' });
  //   if (status.trim()) {
  //     console.log('❌ Ci sono modifiche non committate. Committa tutte le modifiche prima del rilascio.');
  //     process.exit(1);
  //   }
  // } catch (error) {
  //   console.log('❌ Errore nel controllo dello stato di git:', error.message);
  //   process.exit(1);
  // }

  try {
    // 1. Esegui il comando di versionamento dei changeset
    console.log('🔧 Esecuzione del versionamento dei changeset...');
    execSync('pnpm exec changeset version', { stdio: 'inherit' });

    // 2. Aggiungi entry "version bump" dove necessario
    execSync('node scripts/add-version-bump.js', { stdio: 'inherit' });

    // 3. Genera il changelog unificato
    execSync('node scripts/generate-unified-changelog.js', { stdio: 'inherit' });

    // 4. Commit delle modifiche
    // console.log('💾 Commit delle modifiche...');
    // execSync('git add .', { stdio: 'inherit' });
    // execSync('git commit -m "chore: version packages"', { stdio: 'inherit' });

    // 5. Creazione del tag
    // const tag = createVersionTag();
    // console.log(`🏷️ Creazione del tag ${tag}...`);
    // execSync(`git tag ${tag}`, { stdio: 'inherit' });

    // 6. Push
    // console.log('⬆️ Push delle modifiche e del tag...');
    // execSync('git push', { stdio: 'inherit' });
    // execSync('git push --tags', { stdio: 'inherit' });

    console.log('\n✅ Versionamento completato con successo!');
    // console.log(`📦 Tag creato: ${tag}`);
    // console.log('🎯 Il workflow GitHub Actions si attiverà automaticamente per pubblicare i pacchetti su NPM.');
    // console.log('📝 Il changelog unificato è stato generato in CHANGELOG.md');
  } catch (error) {
    console.log('\n❌ Errore durante il versionamento:', error.message);
    process.exit(1);
  }
}

// Esegui il comando
release();
