const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(document.getElementById('form'));
  const data = Object.fromEntries(formData.entries());

  console.log(data);
  // Handle form submission logic here
  /*
  Per i campi di tipo checkbox multiple (stesso [name] e valori delle checkbox diversi),
  il valore si ottiene con formData.getAll(field_name) dove field_name è il valore dell'attributo [name] delle checkbox
  */
};

document.addEventListener('DOMContentLoaded', () => {
  // form basica, con validazione del browser
  const form = document.getElementById('form');
  form.addEventListener('submit', handleSubmit);

  // form con validazione custom con JustValidate

  const fmc = document.querySelector('#form-custom-validation');

  // Inizializziamo JustValidate senza selettore, passando il form element
  const validate = new JustValidate(fmc);

  // Funzione helper per leggere valore da <it-input>
  const getItInputValue = (selector) => {
    const el = fmc.querySelector(selector);
    return el?.value || ''; // .value dovrebbe essere esposto dal tuo componente
  };
  const getItCheckboxValue = (selector) => {
    const el = fmc.querySelector(selector);
    return el?.checked || false; // .checked dovrebbe essere esposto dal tuo componente
  };

  // Aggiungiamo regole
  validate
    .addField('it-input[id="email"]', [
      {
        rule: 'required',
        errorMessage: 'Email obbligatoria',
      },
      {
        validator: () => {
          const value = getItInputValue('it-input[id="email"]');
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
        },
        errorMessage: 'Formato email non valido',
      },
    ])
    .addField('it-input[id="messaggio"]', [
      {
        validator: () => {
          const value = getItInputValue('it-input[id="messaggio"]');
          return value.length > 10;
        },
        errorMessage: 'Inserire almeno 10 caratteri',
      },
    ])
    .addField(
      'it-checkbox[id="privacy"]',
      [
        {
          validator: () => {
            const value = getItCheckboxValue('it-checkbox[id="privacy"]');
            return value;
          },
          errorMessage: "L'accettazione della privacy è obbligatoria",
        },
      ],
      {
        events: ['it-change'], // 👈 FORZA l’ascolto sul change
      },
    );

  validate.onValidate((props) => {
    const { fields } = props;

    // Rimuovi TUTTI i messaggi creati da JustValidate (questi sono quelli prima del bottone submit)
    document.querySelectorAll('.just-validate-error-label').forEach((el) => el.remove());
    // aggiorna il Web Component
    Object.keys(fields).forEach((k) => {
      const f = fields[k];
      const wc = f.elem;
      if (wc) {
        wc.validationText = f.isValid ? '' : f.errorMessage;
      }
    });
  });

  fmc.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validate.isValid) {
      console.log('Form valido!');
      // gestire qui il submit della form
      // fetch('/submit', { method: 'POST', body: ... })
    }
  });
  // oppure
  // validate.onSuccess(( event ) => {
  //  submit della form
  //   event.currentTarget.submit();
  // });
});
