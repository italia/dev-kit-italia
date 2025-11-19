<script setup>
import { registerTranslation } from '@italia/dev-kit-italia/elements.js';
const it = {
  $code: 'it',
  $name: 'Italiano',
  $dir: 'ltr',
  showHidePassword: 'Mostra/Nascondi Password (test input).',
};
registerTranslation(it);
</script>

<template>
  <h1>it-input</h1>

  <it-input id="exampleInputText" type="text" name="testo"><span slot="label">Campo di testo</span></it-input>
  <it-input id="exampleInputEmail" type="email" name="email"><span slot="label">Campo email</span></it-input>
  <it-input id="exampleInputNumber" type="number" name="number"><span slot="label">Campo numerico</span></it-input>
  <it-input id="exampleInputTel" type="tel" name="telefono"><span slot="label">Campo telefonico</span></it-input>
  <it-input id="exampleInputTime" type="time" name="orario"><span slot="label">Campo orario</span></it-input>
  <it-input id="exampleInputDate" type="date" name="data"><span slot="label">Campo data</span></it-input>
  <it-input
    id="field-disabled-example"
    type="text"
    name="field-disabled-example"
    disabled
  ><span slot="label">Campo disabilitato</span></it-input>
  <it-input
    id="field-readonly-example"
    type="text"
    name="field-readonly-example"
    readonly
    value="Contenuto in sola lettura"
  ><span slot="label">Campo readonly</span></it-input>
  <it-input
    id="field-readonlyplaintext-example"
    type="text"
    name="field-readonlyplaintext-example"
    readonly
    plaintext
    value="Contenuto in sola lettura"
  ><span slot="label">Campo readonly normalizzato come plaintext</span></it-input>

  <it-input
    id="field-password-example"
    type="password"
    name="field-password-example"
    support-text="Inserisci almeno 8 caratteri e alcuni caratteri speciali."
    minlength="8"
  ><span slot="label">Campo password</span></it-input>
  <it-input
    id="field-password-strength-example"
    type="password"
    name="field-password-strength-example"
    support-text="Inserisci almeno 8 caratteri e alcuni caratteri speciali."
    strength-meter
    minlength="8"
    suggestions
  ><span slot="label">Campo password</span></it-input>
  <it-input
    id="textarea-example"
    type="textarea"
    name="textarea-example"
    placeholder="Testo segnaposto"
  ><span slot="label">Area di testo</span></it-input>
  <it-input
    id="required-example"
    type="text"
    name="required-example"
    required=""
    placeholder="Testo segnaposto"
  ><span slot="label">Campo obbligatorio</span></it-input>
  <it-input
    id="external-validation-example"
    type="text"
    name="external-validation-example"
    validity-message="Questo campo è obbligatorio!"
    placeholder="Testo segnaposto"
    custom-validation=""
  ><span slot="label">Validazione esterna</span></it-input>
</template>
