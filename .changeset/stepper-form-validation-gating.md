---
'@italia/stepper': minor
---

Stepper: consenti di bloccare l'avanzamento quando il form dello step non è valido

- Nuovo attributo `next-disabled` su `it-stepper`: disabilita il pulsante "Avanti" e anche "Conferma", che prima non aveva alcun binding `?disabled` e non era quindi disabilitabile dall'esterno. Viene combinato in OR con la disabilitazione automatica ai limiti della sequenza; il pulsante "Indietro" non è influenzato.
- `it-stepper-change` è ora annullabile quando è originato dal click sul pulsante "Avanti": `preventDefault()` blocca il cambio di step, lasciando al consumer la possibilità di mostrare gli errori con `reportValidity()` o di eseguire controlli asincroni. Emesso dai metodi pubblici `next()` / `prev()` resta non annullabile, così un consumer non può bloccarsi da solo dentro il proprio listener. Continua a non essere emesso quando si imposta direttamente `current`.
- `it-stepper-confirm` resta non annullabile per scelta: non ha un comportamento di default da bloccare (non avanza lo step), quindi il consumer controlla già interamente cosa succede alla conferma. Per impedire la conferma si usa `next-disabled`.
- Nuovo tipo esportato `StepperChangeEventDetail`.
- I click handler verificano `nextDisabled` anche in JS: `it-button` con `disabled` non disabilita il `<button>` nativo (applica solo `pointer-events: none` e `aria-disabled`), quindi il pulsante resta attivabile da tastiera.
- Stories, MDX ed esempio React aggiornati con entrambi gli approcci, incluse le implicazioni di accessibilità del pulsante disabilitato.
