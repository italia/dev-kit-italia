# Processo di Rilascio con Changesets

Questo documento descrive come utilizzare Changesets per gestire i rilasci di tutti i pacchetti del monorepo.

## Panoramica

Il processo di rilascio utilizza [Changesets](https://github.com/changesets/changesets) per:

- Raccogliere le modifiche di ciascun pacchetto in changelog separati
- Mantenere versioni sincronizzate tra tutti i pacchetti
- Generare automaticamente un **changelog unificato** nella radice del repository
- Pubblicare automaticamente tutti i pacchetti su NPM
- Creare release GitHub con changelog aggregato

## Workflow di Rilascio

### 1. Aggiungere Changesets

Per ogni modifica ai pacchetti, aggiungi un changeset:

```bash
pnpm changeset
```

Questo comando ti guiderà attraverso:

- Selezione dei pacchetti modificati
- Tipo di cambiamento (major, minor, patch)
- Descrizione delle modifiche

### 2. Pull Request di Rilascio

Changesets creerà, tramite GitHub Actions, una pull request di rilascio quando:

- Ci sono changesets non ancora applicati
- Il branch principale ha nuove modifiche

### 3. Pubblicazione Automatica

Quando la pull request di rilascio viene unita, il workflow GitHub Actions:

1. 🔨 Builda tutti i pacchetti
2. 📦 Pubblica tutti i pacchetti su NPM con certificazione di provenance
3. 📄 Crea una release GitHub con changelog aggregato

## Changelog Unificato 📋

Oltre ai changelog individuali per ogni pacchetto, il sistema genera automaticamente un **changelog unificato** (`CHANGELOG.md`) nella radice del repository che raccoglie tutte le modifiche di tutti i pacchetti per ogni versione.

### Generazione Automatica

Il changelog unificato viene generato automaticamente durante il processo di rilascio, ma può essere generato manualmente con:

```bash
node scripts/generate-unified-changelog.js
```

### Struttura del Changelog Unificato

```markdown
# Design Web Components Changelog

## 1.2.0

### `button`

### Patch Changes

- Fix button hover state styling

### `icon`

### Minor Changes

- Add new calendar icon

### `video`

### Patch Changes

- Fix video player controls on mobile

## 1.1.0

...
```

## Configurazione

### Pacchetti Sincronizzati

I seguenti pacchetti vengono rilasciati sempre con la stessa versione (configurato in `.changeset/config.json`):

- `@italia/button`
- `@italia/globals`
- `@italia/icon`
- `@italia/video`

### Pacchetti Ignorati

I seguenti pacchetti di configurazione sono esclusi dai rilasci:

- `@italia/test-config`
- `@italia/typescript-config`

### Changelog per Pacchetti Senza Modifiche

I pacchetti senza modifiche riceveranno automaticamente:

- **Nei changelog individuali**: Una voce "- Aggiornamento della versione" per documentare il rilascio
- **Nel changelog unificato**: Vengono automaticamente **esclusi** per mantenere il changelog pulito e focalizzato solo sulle modifiche significative

## Comandi Disponibili

- `pnpm changeset` - Aggiungi un nuovo changeset

## Esempi di Utilizzo

### Esempio 1: Modifica al Button Component

```bash
# 1. Dopo aver modificato il componente button
pnpm changeset
# Seleziona: @italia/button
# Tipo: patch
# Descrizione: "Fix button hover state styling"
```

### Esempio 2: Nuova Feature per multipli componenti

```bash
# 1. Dopo aver aggiunto una feature che tocca button e icon
pnpm changeset
# Seleziona: @italia/button, @italia/icon
# Tipo: minor
# Descrizione: "Add support for custom icons in buttons"
```

## Note Importanti

- ⚠️ **Non modificare manualmente i file CHANGELOG.md** - vengono generati automaticamente
- ⚠️ **Non modificare manualmente le versioni nei package.json** - vengono aggiornate automaticamente
- ✅ **Tutti i pacchetti avranno sempre la stessa versione** per semplicità di gestione
- ✅ **I changelog sono separati per pacchetto** per chiarezza nella documentazione
- ✅ **La pubblicazione su NPM include certificazione di provenance** per la sicurezza
