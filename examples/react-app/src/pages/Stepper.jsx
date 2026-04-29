import { useEffect, useRef } from 'react';

const steps = [
  { label: 'Primo contenuto', icon: 'it-calendar' },
  { label: 'Secondo contenuto', icon: 'it-lock' },
  { label: 'Terzo contenuto', icon: 'it-settings' },
  { label: 'Quarto contenuto', icon: 'it-mail' },
  { label: 'Quinto contenuto', icon: 'it-file' },
  { label: 'Sesto contenuto', icon: 'it-check' },
];

const headerSteps = steps.slice(0, 3);

function StepperExample({
  dark = false,
  headerVariant = 'text',
  mobileProgress = '',
  totalSteps = steps.length,
  demoSteps = steps,
  ...flags
}) {
  const attrs = {
    current: 1,
    dark: dark || undefined,
    'header-variant': headerVariant,
    'mobile-progress': mobileProgress || undefined,
    'total-steps': totalSteps,
    ...flags,
  };

  return (
    <it-stepper {...attrs}>
      {demoSteps.map((step, index) => (
        <it-stepper-step key={step.label} label={step.label} icon={step.icon}>
          <p>Contenuto dello step {index + 1}</p>
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

        .stepper-example-stack {
          display: flex;
          flex-direction: column;
          gap: var(--bsi-spacing-xl, 2rem);
        }

        .stepper-examples it-stepper::part(content) {
          display: flex;
          min-height: 9rem;
          align-items: center;
          justify-content: center;
          border: 1px dashed var(--bsi-color-border-subtle, var(--bsi-border-color));
          background: var(--bsi-color-background-secondary-lighter, var(--bsi-body-bg));
          color: var(--bsi-body-color);
          text-align: center;
        }

        .stepper-examples it-stepper-step p {
          margin: 0;
          font-size: var(--bsi-font-size-sm);
        }

        .stepper-dark-demo {
          padding: var(--bsi-spacing-l, 1.5rem);
          background: var(--bsi-color-background-inverse, #17324d);
        }

        .stepper-dark-demo it-stepper::part(content) {
          border-color: var(--bsi-color-border-inverse, var(--bsi-color-border-subtle));
          background: transparent;
          color: var(--bsi-color-text-inverse, #fff);
        }
      `}</style>

      <h1>Stepper</h1>

      <section>
        <h2>Anteprima e attributi del componente</h2>
        <StepperExample />
      </section>

      <section className="stepper-example-stack">
        <h2>Intestazione</h2>
        <StepperExample totalSteps={3} demoSteps={headerSteps} hide-content="" hide-nav="" />
        <StepperExample totalSteps={3} demoSteps={headerSteps} headerVariant="icons" hide-content="" hide-nav="" />
        <StepperExample totalSteps={3} demoSteps={headerSteps} headerVariant="numbers" hide-content="" hide-nav="" />
      </section>

      <section className="stepper-example-stack">
        <h2>Navigazione e avanzamento</h2>
        <StepperExample mobileProgress="bar" hide-header="" mobile-progress-on-desktop="" />
        <StepperExample mobileProgress="dots" hide-header="" mobile-progress-on-desktop="" />
      </section>

      <section>
        <h2>Salva</h2>
        <StepperExample hide-header="" save-label="Salva" />
      </section>

      <section>
        <h2>Conferma</h2>
        <StepperExample hide-header="" show-confirm="" />
      </section>

      <section className="stepper-example-stack stepper-dark-demo">
        <h2 className="text-white">Sfondo scuro</h2>
        <StepperExample dark />
        <StepperExample dark totalSteps={3} demoSteps={headerSteps} hide-content="" hide-nav="" />
        <StepperExample dark totalSteps={3} demoSteps={headerSteps} headerVariant="icons" hide-content="" hide-nav="" />
        <StepperExample
          dark
          totalSteps={3}
          demoSteps={headerSteps}
          headerVariant="numbers"
          hide-content=""
          hide-nav=""
        />
      </section>
    </div>
  );
};

export default Stepper;
