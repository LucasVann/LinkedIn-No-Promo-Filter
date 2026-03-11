chrome.storage.local.get(['active'], (res) => {
  if (res.active === false) return; // Si está desactivado, no hace nada

  const hidePromotedJobs = () => {
    const jobCards = document.querySelectorAll('li.scaffold-layout__list-item');
    jobCards.forEach(card => {
      if (card.innerText.includes('Promocionado') || card.innerText.includes('Sponsorizado')) {
        card.style.display = 'none';
      }
    });
  };

  const observer = new MutationObserver(hidePromotedJobs);
  observer.observe(document.body, { childList: true, subtree: true });
  hidePromotedJobs();
});
