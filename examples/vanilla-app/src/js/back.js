document.addEventListener('click', (e) => {
  const target = e.target.closest && e.target.closest('.go-back');
  if (target) {
    e.preventDefault();
    window.history.back();
  }
});
