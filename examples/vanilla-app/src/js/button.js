const clickHandler = () => {
  alert('Pulsante cliccato!');
};

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('it-button#handleClick');
  if (button) {
    button.addEventListener('click', clickHandler);
  }
});
