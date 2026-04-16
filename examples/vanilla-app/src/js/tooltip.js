const tooltipControlled = document.getElementById('tooltip-controlled');
const showBtn = document.getElementById('tooltip-show-btn');

if (tooltipControlled && showBtn) {
  showBtn.addEventListener('mouseenter', () => {
    tooltipControlled.showTooltip();
  });

  showBtn.addEventListener('mouseleave', () => {
    tooltipControlled.hideTooltip();
  });
}

const tooltipEventi = document.getElementById('tooltip-eventi');

if (tooltipEventi) {
  tooltipEventi.addEventListener('it-tooltip-open', (e) => {
    console.log('Tooltip aperto', e);
  });

  tooltipEventi.addEventListener('it-tooltip-close', (e) => {
    console.log('Tooltip chiuso', e);
  });
}
