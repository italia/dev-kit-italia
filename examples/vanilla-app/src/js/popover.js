import '@italia/button';
import '@italia/icon';
import '@italia/popover';
import '../style.css';

// Controllo programmatico
const controlledPopover = document.getElementById('controlled-popover');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const toggleBtn = document.getElementById('toggle-btn');

openBtn.addEventListener('click', () => {
  controlledPopover.openPopover();
});

closeBtn.addEventListener('click', () => {
  controlledPopover.closePopover();
});

toggleBtn.addEventListener('click', () => {
  controlledPopover.toggle();
});

// Eventi
const eventPopover = document.getElementById('event-popover');

eventPopover.addEventListener('it-popover-open', (event) => {
  console.log('Popover aperto', event);
});

eventPopover.addEventListener('it-popover-close', (event) => {
  console.log('Popover chiuso', event);
});
