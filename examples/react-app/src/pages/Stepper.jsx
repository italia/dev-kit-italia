import { useEffect, useRef } from 'react';

const steps = [
  { label: 'Primo contenuto', icon: 'it-calendar' },
  { label: 'Secondo contenuto', icon: 'it-lock' },
  { label: 'Terzo contenuto', icon: 'it-settings' },
];

function StepperExample({ dark = false, headerVariant = '', mobileProgress = '', ...attrs }) {
  const stepperAttrs = {
    current: 1,
    dark: dark || undefined,
    'header-variant': headerVariant || undefined,
    'mobile-progress': mobileProgress || undefined,
    ...attrs,
  };

  return (
    <it-stepper {...stepperAttrs}>
      {steps.map((step, index) => (
        <it-stepper-step key={step.label} icon={step.icon}>
          <span slot="label">{step.label}</span>
          <div className={`p-5 text-center border ${dark ? 'text-white' : 'bg-light'}`}>
            <p className="m-0">Contenuto dello step {index + 1}</p>
          </div>
        </it-stepper-step>
      ))}
    </it-stepper>
  );
}

const StepperFormValidation = () => {
  const stepperRef = useRef(null);
  const notificationRef = useRef(null);

  useEffect(() => {
    const stepper = stepperRef.current;
    if (!stepper) return;

    const form = stepper.querySelector('form');
    if (!form) return;

    // Il form è nel primo passo: solo lì l'avanzamento va bloccato.
    const isFirstStepInvalid = (step) => step === 0 && !form.checkValidity();

    // `it-input` propaga l'evento (bubbles + composed), quindi basta
    // ascoltarlo sul form.
    const handleFormChange = () => {
      stepper.nextDisabled = isFirstStepInvalid(stepper.current);
    };

    // Lo stepper non riconosce da sé l'ultimo passo: "Conferma" sostituisce
    // "Avanti" solo quando lo attiviamo noi.
    const handleStepChange = (event) => {
      const { step } = event.detail;
      stepper.showConfirm = step >= stepper.querySelectorAll('it-stepper-step').length - 1;
      stepper.nextDisabled = isFirstStepInvalid(step);
    };

    const handleConfirm = () => notificationRef.current?.show();

    handleFormChange();

    form.addEventListener('it-input', handleFormChange);
    stepper.addEventListener('it-stepper-change', handleStepChange);
    stepper.addEventListener('it-stepper-confirm', handleConfirm);

    return () => {
      form.removeEventListener('it-input', handleFormChange);
      stepper.removeEventListener('it-stepper-change', handleStepChange);
      stepper.removeEventListener('it-stepper-confirm', handleConfirm);
    };
  }, []);

  return (
    <>
      {/* Lo stepper parte disabilitato: il campo obbligatorio è vuoto. */}
      <it-stepper ref={stepperRef} {...{ 'confirm-label': 'Conferma', 'next-disabled': '' }}>
        <it-stepper-step icon="it-pencil">
          <span slot="label">Dati personali</span>
          <div className="p-5 border bg-light">
            <form>
              <it-input required name="nome" placeholder="Inserisci il nome">
                <span slot="label">Nome</span>
              </it-input>
            </form>
          </div>
        </it-stepper-step>
        <it-stepper-step icon="it-check">
          <span slot="label">Conferma</span>
          <div className="p-5 text-center border bg-light">
            <p className="m-0">Riepilogo dei dati inseriti</p>
          </div>
        </it-stepper-step>
      </it-stepper>

      <it-notification ref={notificationRef} status="success" dismissable className="mt-3">
        <span slot="title">Procedura confermata</span>I dati inseriti sono stati salvati.
      </it-notification>
    </>
  );
};

const Stepper = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const logStepperEvent = (event) => console.info(event.type, event.detail);
    root.addEventListener('it-stepper-change', logStepperEvent);
    root.addEventListener('it-stepper-save', logStepperEvent);
    root.addEventListener('it-stepper-confirm', logStepperEvent);

    return () => {
      root.removeEventListener('it-stepper-change', logStepperEvent);
      root.removeEventListener('it-stepper-save', logStepperEvent);
      root.removeEventListener('it-stepper-confirm', logStepperEvent);
    };
  }, []);

  return (
    <div ref={rootRef} className="stepper-examples">
      <style>{`
        .stepper-examples {
          display: flex;
          flex-direction: column;
          gap: var(--bsi-spacing-xl, 2rem);
        }

        .stepper-variant-stack {
          display: flex;
          flex-direction: column;
          gap: var(--bsi-spacing-xl, 2rem);
        }
      `}</style>

      <h1>Stepper</h1>

      <section>
        <h2>Solo testo</h2>
        <StepperExample headerVariant="text" />
      </section>

      <section>
        <h2>Testo e icone</h2>
        <StepperExample headerVariant="icons" />
      </section>

      <section>
        <h2>Testo e numeri</h2>
        <StepperExample headerVariant="numbers" />
      </section>

      <section>
        <h2>Navigazione degli step</h2>
        <StepperExample {...{ 'prev-label': 'Precedente', 'next-label': 'Successivo' }} />
      </section>

      <section>
        <h2>Progress bar</h2>
        <StepperExample mobileProgress="bar" {...{ 'mobile-progress-on-desktop': '' }} />
      </section>

      <section>
        <h2>Pallini</h2>
        <StepperExample mobileProgress="dots" {...{ 'mobile-progress-on-desktop': '' }} />
      </section>

      <section>
        <h2>Salva</h2>
        <StepperExample
          {...{
            'save-label': 'Salva',
            'save-title': 'Vuoi salvare il progresso?',
            'save-description': 'Potrai riprendere il flusso da questo punto in poi.',
          }}
        />
      </section>

      <section>
        <h2>Conferma</h2>
        <StepperExample {...{ 'show-confirm': '', 'confirm-label': 'Conferma' }} />
      </section>

      <section>
        <h2>Validazione del form nello step</h2>
        <StepperFormValidation />
      </section>

      <section className="bg-dark p-4">
        <h2 className="text-white">Sfondo scuro</h2>
        <StepperExample dark />
      </section>

      <section className="stepper-variant-stack bg-dark p-4">
        <h2 className="text-white">Sfondo scuro - varianti intestazione</h2>
        <StepperExample dark headerVariant="text" />
        <StepperExample dark headerVariant="icons" />
        <StepperExample dark headerVariant="numbers" />
      </section>
    </div>
  );
};

export default Stepper;
