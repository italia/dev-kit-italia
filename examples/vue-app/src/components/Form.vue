<script setup>
function formDataToObject(fd) {
  const obj = {};

  for (const [key, value] of fd.entries()) {
    if (obj[key] !== undefined) {
      // Se la key esiste già → trasformala in array
      if (!Array.isArray(obj[key])) {
        obj[key] = [obj[key]];
      }
      obj[key].push(value);
    } else {
      obj[key] = value;
    }
  }

  return obj;
}

const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(document.getElementById('form'));
  const data = formDataToObject(formData);
  console.log(data);
  // Handle form submission logic here
  /*
    Per i campi di tipo checkbox multiple (stesso [name] e valori delle checkbox diversi),
    il valore si ottiene con formData.getAll(field_name) dove field_name è il valore dell'attributo [name] delle checkbox
    */
};
</script>

<template>
  <h1>it-form</h1>

  <form id="form" @submit="{ handleSubmit }" class="mb-4">
    <it-input id="nome" name="nome">
      <span slot="label">Nome</span>
    </it-input>
    <it-input id="cognome" name="cognome">
      <span slot="label">Cognome</span>
    </it-input>
    <it-input id="email" name="email" type="email" support-text="Inserisci la tua email">
      <span slot="label">E-mail</span>
    </it-input>
    <it-input id="figli" name="figli" type="number" support-text="Numero di figli" required min="0" max="10">
      <span slot="label">Numero di figli</span>
    </it-input>
    <it-input id="telefono" name="telefono" type="tel">
      <it-icon name="it-telephone" slot="prepend" size="sm"></it-icon>
      <span slot="label">Telefono</span>
    </it-input>
    <it-input id="orario" name="orario" type="time" min="10:00" max="12:00" step="1800" required>
      <span slot="label">Orario</span>
    </it-input>
    <it-input id="disabilitato" name="disabilitato" value="valore del campo" disabled>
      <span slot="label">Campo disabilitato</span>
    </it-input>
    <it-input
      id="field-readonly-example"
      type="text"
      name="field-readonly-example"
      value="Contenuto in sola lettura"
      readonly>
      <span slot="label">Campo readonly</span>
    </it-input>
    <it-input
      id="field-readonlyplaintext-example"
      type="text"
      name="field-readonlyplaintext-example"
      value="Contenuto in sola lettura"
      readonly plaintext>
      <span slot="label">Campo readonly normalizzato come plaintext</span>
    </it-input>


    <it-checkbox-group required group name="animali" class="mb-4" value='["gatto","topo"]'>
      <span slot="legend">Animali preferiti</span>
      <it-checkbox value="cane">
        <span slot="label">Cane</span>
      </it-checkbox>
      <it-checkbox value="gatto">
        <span slot="label">Gatto</span>
      </it-checkbox>
      <it-checkbox value="topo">
        <span slot="label">Topo</span>
      </it-checkbox>
    </it-checkbox-group>

    <it-radio-group name="gruppo1" required>
      <span slot="label">Gruppo di radio</span>
      <it-radio id="radio1"  value="opzione1">
        <span slot="label">Radio di esempio 1</span>
      </it-radio>
      <it-radio id="radio2"  value="opzione2">
        <span slot="label">Radio di esempio 2</span>
      </it-radio>
      <it-radio id="radio3"  value="opzione3">
        <span slot="label">Radio di esempio 3</span>
      </it-radio>
    </it-radio-group>

    <it-input
      id="messaggio"
      name="messaggio"
      type="textarea"
      support-text="Inserisci il tuo messaggio"
    >
      <span slot="label">Messaggio</span>
    </it-input>
    <it-checkbox id="privacy" name="privacy" support-text="Accetto le condizioni sulla privacy">
      <span slot="label">Privacy</span>
    </it-checkbox>

    <it-input
      id="field-password-example"
      type="password"
      name="field-password-example"
      minlength="8"
      support-text="Inserisci almeno 8 caratteri e alcuni caratteri speciali." required>
        <span slot="label">Campo password</span>
    </it-input>
    <it-input
      id="field-password-strength-example"
      type="password"
      name="field-password-strength-example"
      minlength="8"
      support-text="Inserisci almeno 8 caratteri e alcuni caratteri speciali."
      strength-meter suggestions required>
        <span slot="label">Campo password</span>
    </it-input>
    <it-button type="submit" variant="primary" block> Invia </it-button>
  </form>
</template>
