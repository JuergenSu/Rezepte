(() => {
  'use strict';
  const dialog = document.getElementById('install-dialog');
  const install = document.getElementById('install-app');
  const confirm = document.getElementById('confirm-install');
  const hint = document.getElementById('install-hint');
  const status = document.getElementById('offline-status');
  const standalone = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  let prompt = null;
  install.hidden = standalone();
  function instructions() {
    const apple = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    hint.textContent = apple
      ? 'Öffne das Kochbuch in Safari. Tippe auf „Teilen“ und dann „Zum Home-Bildschirm“. Aktiviere „Als Web-App öffnen“, falls diese Option angezeigt wird, und tippe auf „Hinzufügen“.'
      : 'Wähle im Browser-Menü „App installieren“ oder „Zum Startbildschirm hinzufügen“. Wenn dein Browser die direkte Installation unterstützt, erscheint hier eine Installieren-Schaltfläche.';
    confirm.hidden = !prompt;
  }
  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault(); prompt = event; instructions();
  });
  window.addEventListener('appinstalled', () => {
    prompt = null; install.hidden = true; dialog.close();
  });
  install.addEventListener('click', () => { instructions(); dialog.showModal(); });
  document.getElementById('close-install').addEventListener('click', () => dialog.close());
  confirm.addEventListener('click', async () => {
    if (!prompt) return;
    const pending = prompt; prompt = null; confirm.hidden = true;
    await pending.prompt();
    const choice = await pending.userChoice;
    if (choice.outcome === 'accepted') dialog.close();
  });
  if (!('serviceWorker' in navigator) || !['https:', 'http:'].includes(location.protocol) || !window.isSecureContext) {
    status.textContent = 'Installation und Offline-Nutzung sind über HTTPS oder localhost verfügbar.';
    return;
  }
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('./sw.js', { scope: './', updateViaCache: 'none' });
      function observe(worker) {
        if (!worker) return;
        worker.addEventListener('statechange', () => {
          if (worker.state === 'installed' && navigator.serviceWorker.controller) {
            status.textContent = 'Neue Version bereit. Schließe alle Kochbuchfenster und öffne die App erneut.';
          }
        });
      }
      if (registration.waiting) status.textContent = 'Neue Version bereit. Schließe alle Kochbuchfenster und öffne die App erneut.';
      observe(registration.installing);
      registration.addEventListener('updatefound', () => observe(registration.installing));
      await navigator.serviceWorker.ready;
      if (!registration.waiting) status.textContent = 'Offline bereit – dein Kochbuch ist auf diesem Gerät gespeichert.';
    } catch {
      status.textContent = 'Offline-Speicherung derzeit nicht möglich. Online kannst du das Kochbuch weiter nutzen.';
    }
  });
})();
