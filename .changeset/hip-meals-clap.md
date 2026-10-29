---
"@italia/checkbox": patch
"@italia/radio": patch
"@italia/rating": patch
"@italia/toggle": patch
"@italia/transfer": patch
---

Rimossi gli import di `forms/form-check` di Bootstrap Italia, che sovrascrivevano gli stili v3: niente più sfondo bianco quadrato dietro il cerchio di `it-radio`. Spacing degli inline di `it-checkbox` e `it-radio` allineato a BSI: 24px tra le voci, nessun margine dopo l'ultima, 16px tra le righe che vanno a capo.
