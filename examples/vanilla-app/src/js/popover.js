// Helper per gestire click sui link
const handleLinkClick = (e) => {
  e.preventDefault();
};

// Gestione elementi disabilitati con hover
const disabledHoverBtn = document.getElementById('disabled-hover-btn');
const popoverDisabledHover = document.getElementById('popover-disabled-hover');
const disabledHoverContent = document.getElementById('disabled-hover-content');

if (disabledHoverBtn && popoverDisabledHover) {
  disabledHoverBtn.addEventListener('mouseenter', () => {
    popoverDisabledHover.openPopover();
  });

  disabledHoverBtn.addEventListener('mouseleave', () => {
    popoverDisabledHover.closePopover();
  });

  disabledHoverBtn.addEventListener('focus', () => {
    popoverDisabledHover.openPopover();
  });

  disabledHoverBtn.addEventListener('blur', (e) => {
    const target = e.relatedTarget;
    if (!target || !popoverDisabledHover.contains(target)) {
      popoverDisabledHover.closePopover();
    }
  });

  if (disabledHoverContent) {
    disabledHoverContent.addEventListener('blur', (e) => {
      const target = e.relatedTarget;
      if (!target || !popoverDisabledHover.contains(target)) {
        popoverDisabledHover.closePopover();
      }
    });
  }
}

// Helper per gestire click sui link
document.querySelectorAll('.link-click').forEach((link) => {
  link.addEventListener('click', handleLinkClick);
});

// Eventi
const eventPopover = document.getElementById('popover-events');

if (eventPopover) {
  eventPopover.addEventListener('it-popover-open', (e) => {
    console.log('Popover aperto', e);
  });

  eventPopover.addEventListener('it-popover-close', (e) => {
    console.log('Popover chiuso', e);
  });
}
