// inizializzazione dopo il parsing del DOM
const initPopoverHandlers = () => {
  // chiudi qualsiasi popover accidentalmente aperto
  document.querySelectorAll('it-popover').forEach((p) => {
    try {
      // preferiamo usare l'API pubblica quando disponibile
      p.closePopover?.();
      // fallback: rimuovere attributo open se presente
      if (p.hasAttribute && p.hasAttribute('open')) p.removeAttribute('open');
    } catch (err) {
      // ignore
    }
  });

  // fallback: alcuni web component possono aprirsi più tardi durante l'upgrade; forziamo la chiusura dopo un breve delay
  setTimeout(() => {
    document.querySelectorAll('it-popover[open]').forEach((p) => {
      try {
        p.closePopover?.();
        if (p.hasAttribute && p.hasAttribute('open')) p.removeAttribute('open');
      } catch (e) {
        // ignore
      }
    });
  }, 50);

  // Helper per gestire click sui trigger
  const handled = new WeakSet();
  const attachTriggerHandler = (tr) => {
    if (!tr || handled.has(tr)) return;
    tr.addEventListener('click', (e) => {
      // se è un link che punta a '#', preveniamo il comportamento di default
      if (e.currentTarget.tagName.toLowerCase() === 'a' && e.currentTarget.getAttribute('href') === '#') {
        e.preventDefault();
      }
      const popover = e.currentTarget.closest('it-popover');
      popover?.toggle();
    });
    handled.add(tr);
  };

  // seleziona sia gli elementi con classe helper che qualsiasi elemento che usa slot="trigger"
  const triggerElements = Array.from(
    new Set([...document.querySelectorAll('.trigger-btn'), ...document.querySelectorAll('[slot="trigger"]')]),
  );
  triggerElements.forEach(attachTriggerHandler);
};

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', initPopoverHandlers);
} else {
  initPopoverHandlers();
}

// Helper per gestire click sulle azioni
document.querySelectorAll('.action-link').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const { action } = e.currentTarget.dataset;
    const popover = e.currentTarget.closest('it-popover');
    popover?.closePopover();
  console.log(`Azione selezionata: ${action}`);
  });
});

// Eventi
const eventPopover = document.getElementById('popover-events');

eventPopover?.addEventListener('it-popover-open', () => {
  console.log('✅ Popover aperto');
});

eventPopover?.addEventListener('it-popover-close', () => {
  console.log('❌ Popover chiuso');
});
