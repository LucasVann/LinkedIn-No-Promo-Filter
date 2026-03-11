const btn = document.getElementById('toggleBtn');

// Leer estado actual
chrome.storage.local.get(['active'], (res) => {
  const active = res.active !== false; // Default true
  updateUI(active);
});

btn.onclick = () => {
  chrome.storage.local.get(['active'], (res) => {
    const newState = !(res.active !== false);
    chrome.storage.local.set({ active: newState }, () => {
      updateUI(newState);
      // Recargar la página para aplicar/quitar filtro inmediatamente
      chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.reload(tabs[0].id);
      });
    });
  });
};

function updateUI(active) {
  btn.textContent = active ? 'ACTIVADO' : 'DESACTIVADO';
  btn.className = active ? 'on' : 'off';
}