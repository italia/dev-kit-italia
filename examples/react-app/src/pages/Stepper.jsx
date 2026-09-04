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
