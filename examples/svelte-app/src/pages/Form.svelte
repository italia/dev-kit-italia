<script>
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(document.getElementById('form'));
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    //
    /*
    Per i campi di tipo checkbox multiple (stesso [name] e valori delle checkbox diversi),
    il valore si ottiene con formData.getAll(field_name) dove field_name è il valore dell'attributo [name] delle checkbox
    */
  };
</script>

<h1>it-form</h1>

<form id="form" on:submit={handleSubmit}>
  <it-input id="nome-basic" name="nome"><span slot="label">Nome</span></it-input>
  <it-input id="cognome-basic" name="cognome"><span slot="label">Cognome</span></it-input>
  <it-input id="email-basic" name="email" type="email" support-text="Inserisci la tua email" required>
    <span slot="label">E-mail</span>
  </it-input>
  <it-input id="figli-basic" name="figli" type="number" support-text="Numero di figli" required min="0" max="10">
    <span slot="label">Numero di figli</span>
  </it-input>
  <it-input id="telefono" name="telefono-basic" type="tel">
    <it-icon name="it-telephone" slot="prepend" size="sm"></it-icon>
    <span slot="label">Telefono</span>
  </it-input>
  <it-input id="orario" name="orario-basic" type="time">
    <span slot="label">Orario</span>
  </it-input>
  <it-input id="disabilitato" name="disabilitato-basic" value="valore del campo" disabled>
    <span slot="label">Campo disabilitato</span>
  </it-input>
  <it-input
    id="field-readonly-example"
    type="text"
    name="field-readonly-example"
    value="Contenuto in sola lettura"
    readonly
  >
    <span slot="label">Campo readonly</span>
  </it-input>
  <it-input
    id="field-readonlyplaintext-example"
    type="text"
    name="field-readonlyplaintext-example"
    value="Contenuto in sola lettura"
    readonly
    plaintext
  >
    <span slot="label">Campo readonly normalizzato come plaintext</span>
  </it-input>

  <fieldset class="mb-4">
    <legend>Animali preferiti</legend>
    <it-checkbox id="animali" name="animali" value="cane" group><span slot="label">Cane</span></it-checkbox>
    <it-checkbox id="animali" name="animali" value="gatto" group><span slot="label">Gatto</span></it-checkbox>
    <it-checkbox id="animali" name="animali" value="topo" group><span slot="label">Topo</span></it-checkbox>
    <it-checkbox id="animali" name="animali" value="serpente" group><span slot="label">Serpente</span></it-checkbox>
  </fieldset>

  <fieldset>
    <legend>Gruppo di radio</legend>
    <it-radio-group name="gruppo1">
      <it-radio id="radio1" name="gruppo1" value="opzione1" checked>
        <span slot="label">Radio di esempio 1</span>
      </it-radio>
      <it-radio id="radio2" name="gruppo1" value="opzione2">
        <span slot="label">Radio di esempio 2</span>
      </it-radio>
      <it-radio id="radio3" name="gruppo1" value="opzione3">
        <span slot="label">Radio di esempio 3</span>
      </it-radio>
    </it-radio-group>
  </fieldset>

  <it-input id="messaggio-basic" name="messaggio" type="textarea" support-text="Inserisci il tuo messaggio"
    ><span slot="label">Messaggio</span></it-input
  >
  <it-checkbox
    id="privacy-basic"
    name="privacy"
    support-text="Accetto le condizioni sulla privacy"
    required
    class="mb-4"><span slot="label">Privacy</span></it-checkbox
  >

  <it-input
    id="field-password-example"
    type="password"
    name="field-password-example"
    minlength="8"
    support-text="Inserisci almeno 8 caratteri e alcuni caratteri speciali."
    required
  >
    <span slot="label">Campo password</span>
  </it-input>
  <it-input
    id="field-password-strength-example"
    type="password"
    name="field-password-strength-example"
    minlength="8"
    support-text="Inserisci almeno 8 caratteri e alcuni caratteri speciali."
    strength-meter
    suggestions
    required
  >
    <span slot="label">Campo password</span>
  </it-input>
  <it-button type="submit" variant="primary" block name="submit"> Invia </it-button>
</form>
