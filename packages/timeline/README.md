# @italia/timeline

Componenti web per la visualizzazione cronologica di eventi, roadmap e scadenze temporali del Design system .italia, basati su [Bootstrap Italia](https://italia.github.io/bootstrap-italia/).

## Componenti

| Componente                 | Descrizione                                                  |
| -------------------------- | ------------------------------------------------------------ |
| `<it-timeline>`            | Contenitore della timeline classica                          |
| `<it-timeline-element>`    | Singolo elemento della timeline classica con pin e contenuto |
| `<it-timeline-point-list>` | Contenitore lista compatta (point list)                      |
| `<it-timeline-point>`      | Singolo punto della timeline point list                      |

## Installazione

```bash
npm install @italia/timeline
```

## Utilizzo

### Timeline classica

```html
<it-timeline>
  <div class="col-12">
    <it-timeline-element variant="it-evidence" date="MAGGIO 2026" heading-level="h3">
      <it-icon slot="pin-icon" name="it-file" aria-hidden="true"></it-icon>
      <it-card>
        <a slot="title" href="#">Titolo del contenuto</a>
        <span slot="text">Descrizione breve.</span>
        <time slot="footer" class="it-card-date" datetime="2026-05-22">22 maggio 2026</time>
      </it-card>
    </it-timeline-element>
  </div>
</it-timeline>
```

### Timeline point list

```html
<it-timeline-point-list>
  <it-timeline-point>
    <time slot="date" datetime="2025-10-14">
      <span class="visually-hidden">14 ottobre 2025</span>
      <span class="point-visual" aria-hidden="true">
        <span class="point-main">14</span>
        <span class="point-bottom">ott</span>
      </span>
    </time>
    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </it-timeline-point>
</it-timeline-point-list>
```

## Documentazione

La documentazione completa è disponibile su [Storybook](https://italia.github.io/dev-kit-italia).

## Licenza

BSD-3-Clause
