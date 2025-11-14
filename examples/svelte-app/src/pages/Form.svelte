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
  <it-input id="nome" name="nome" required>
    <span slot="label">Nome</span>
  </it-input>

  <it-input id="cognome" name="cognome">
    <span slot="label">Cognome</span>
  </it-input>

  <it-input id="email" name="email" type="email" support-text="Inserisci la tua email">
    <span slot="label">E-mail</span>
  </it-input>

  <it-input id="messaggio" name="messaggio" type="textarea" support-text="Inserisci il tuo messaggio">
    <span slot="label">Messaggio</span>
  </it-input>

  <it-checkbox id="privacy" name="privacy" support-text="Accetto le condizioni sulla privacy">
    <span slot="label">Privacy</span>
  </it-checkbox>

  <it-button type="submit" variant="primary" block name="submit"> Invia </it-button>
</form>
