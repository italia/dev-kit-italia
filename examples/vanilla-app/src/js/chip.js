const handleDismiss = (event) => {
  const chip = event.currentTarget.closest('it-chip');
  if (chip?.hasAttribute('is-disabled')) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  if (chip) chip.remove();
};

const handleKeyDown = (event) => {
  const chip = event.currentTarget.closest('it-chip');

  // Lascia passare Tab e Shift+Tab per la navigazione
  if (event.key === 'Tab') {
    return;
  }

  // Controlla se la chip è disabilitata per altri tasti
  if (chip?.hasAttribute('is-disabled')) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }

  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    if (chip) chip.remove();
  }
};

const fn = { handleDismiss, handleKeyDown };

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-click]').forEach((el) => {
    console.log(el.getAttribute('data-click'));
    el.addEventListener('click', fn[el.getAttribute('data-click')]);
  });

  document.querySelectorAll('[data-keydown]').forEach((el) => {
    console.log(el.getAttribute('data-keydown'));
    el.addEventListener('keyDown', fn[el.getAttribute('data-keydown')]);
  });
});
