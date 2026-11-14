# Unser Kochbuch

Ein digitales Kochbuch aus reinem HTML, CSS und JavaScript. Ohne Build-Schritt, externe Bibliotheken, Webfonts oder serverseitige Skripte. Alle Bilder liegen lokal im Repository.

## Öffnen und veröffentlichen

`index.html` direkt im Browser öffnen oder den gesamten Inhalt unverändert auf einen statischen Webspace kopieren. Zum lokalen Testen optional `python3 -m http.server 8000` im Projektordner starten und `http://localhost:8000` öffnen.

Für GitHub Pages unter **Settings → Pages → Build and deployment → Deploy from a branch** den Branch `main` und den Ordner `/ (root)` auswählen. Die Website liegt anschließend normalerweise unter `https://juergensu.github.io/Rezepte/`. Ein privates Repository erfordert einen GitHub-Tarif, der Pages für private Repositories unterstützt. Die Sichtbarkeit der veröffentlichten Website wird separat durch GitHub bestimmt.

## Bedienung

- iPad: Doppelseite mit Titel, Bild und Zutaten links sowie Anleitung rechts. Auf schmalen Displays stehen die Seiten untereinander.
- Blättern über horizontale Wischgesten, Pfeiltasten oder Zurück/Weiter.
- „Rezepte entdecken“ öffnet die Suche nach Titel, Zutaten, Kategorie und Anleitung. Mehrere Suchwörter werden gemeinsam gesucht.
- Das Band rechts oben setzt ein Lesezeichen. Lesezeichen werden im lokalen Browserspeicher gespeichert; es gibt keine Synchronisierung zwischen Geräten. Bei gesperrtem Speicher gelten sie nur während der Sitzung.
- Jedes Rezept hat eine Adresse mit stabiler ID, beispielsweise `index.html#musterseite`. Diese lässt sich auch als Browser-Lesezeichen speichern oder teilen. Browser-Zurück/Vorwärts wird unterstützt.

## Rezepte ergänzen

Die beiden vorhandenen Einträge sind eine Willkommensseite und eine klar markierte Musterseite, keine echten Rezepte. Sie können später entfernt werden.

Ein weiteres Objekt in `window.RECIPES` in `recipes.js` ergänzen. Die Reihenfolge bestimmt die Reihenfolge im Buch. Beispiel:

```js
{
  id: 'kartoffelsuppe', // eindeutig, dauerhaft; keine Leerzeichen
  title: 'Kartoffelsuppe',
  category: 'Suppen',
  description: 'Ein Lieblingsgericht für kalte Tage.',
  image: 'assets/kartoffelsuppe.jpg',
  imageAlt: 'Kartoffelsuppe mit frischer Petersilie',
  imageCaption: 'Aus unserer Küche',
  servings: '4 Portionen',
  ingredientsNote: '',
  ingredients: [
    { amount: '800 g', name: 'Kartoffeln' }
  ],
  meta: ['40 Minuten', 'Vegetarisch'],
  steps: [
    { title: 'Vorbereiten', text: 'Hier die vollständige Anleitung ergänzen.' }
  ],
  tip: 'Hier ist Platz für eine persönliche Küchennotiz.'
}
```

Bilder unter `assets/` ablegen, möglichst komprimiert und im Querformat. Pfade relativ halten, damit die Website auch im Unterordner `/Rezepte/` funktioniert. Alle Texte werden als Klartext ausgegeben. Lange Zutatenlisten und Anleitungen lassen die Buchseiten mitwachsen; vertikales Scrollen bleibt möglich. Bei reduzierter Bewegung in den Systemeinstellungen entfällt die Blätteranimation.
