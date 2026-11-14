# Unser Kochbuch

Für weitere agentische Arbeit gelten die [Arbeitsregeln in AGENTS.md](AGENTS.md). Sie definieren das gemeinsame Seitenschema, Pflichtfunktionen, Design und die Pflege der Offline-App.

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

Enthalten sind eine Willkommensseite, Kokosmakronen und Rumkugeln nach Sallys Welt als Beispielrezepte und eine klar markierte Musterseite. Die Musterseite kann später entfernt werden.

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

## Als App installieren (PWA)

Die Website ist eine Progressive Web App mit eigenem Symbol und eigenem Fenster. Sie bleibt vollständig statisch und funktioniert auch unter dem GitHub-Pages-Unterordner `/Rezepte/`.

- **iPad/iPhone:** Die veröffentlichte HTTPS-Adresse in Safari öffnen → Teilen → Zum Home-Bildschirm → gegebenenfalls „Als Web-App öffnen“ aktivieren → Hinzufügen.
- **Android/Chrome und Desktop/Edge/Chrome:** „Als App installieren“ im Kochbuch wählen oder die Installationsfunktion des Browsers nutzen. Die direkte Schaltfläche erscheint, sobald der Browser die Installation anbietet.
- Bereits installierte Apps zeigen die Installationshilfe nicht mehr im eigenen App-Fenster.
- Die erstmalige Speicherung benötigt Internet. Erst nach „Offline bereit“ ist das Kochbuch ohne Verbindung verfügbar. Rezepte, Suche, Blättern und lokale Lesezeichen funktionieren dann weiterhin. Browserdaten können vom Benutzer oder Betriebssystem gelöscht werden; danach ist erneut ein Online-Aufruf nötig.
- HTTPS (bei GitHub Pages automatisch) oder `localhost` ist erforderlich. Beim direkten Öffnen von `index.html` als Datei funktioniert das Kochbuch, aber ohne Service Worker und Offline-Installation.

### Neue Versionen und Rezeptbilder

Bei **jeder Veröffentlichung** mit geänderten App-Dateien oder Rezepten die `VERSION` in `sw.js` erhöhen (z. B. `v1` → `v2`). Neue lokale Rezeptfotos zusätzlich in `FILES` aufnehmen. So werden alle Inhalte als zusammengehörige Version offline gespeichert. Weitere besuchte lokale Bilder werden ebenfalls zwischengespeichert.

Eine neue Version wird im Hintergrund geladen. Nach dem Schließen aller Kochbuchfenster wird sie beim nächsten Öffnen aktiv. Ein Hinweis zeigt an, wenn ein Update wartet. Es gibt kein erzwungenes Neuladen beim Kochen. Lesezeichen in `localStorage` bleiben beim App-Update erhalten. Der Service Worker entfernt nur eigene alte Caches dieses Kochbuchs, keine Daten anderer Projekte auf derselben GitHub-Pages-Domain.

## Handy im Hochformat

Bis 650 px Bildschirmbreite wird das Rezept als durchgehendes, einspaltiges Blatt angezeigt: Titel, Foto, Zutaten und danach die Zubereitung. Die Schrift ist zum Lesen beim Kochen größer. Oben bleiben die Rezeptsuche und die Sprungtasten „Überblick“, „Zutaten“ und „Zubereitung“ erreichbar; unten bleibt die Navigation zwischen Rezepten sichtbar. Beim Rezeptwechsel beginnt die Ansicht wieder oben. Die Bedienelemente berücksichtigen den geschützten Bildschirmrand und den Home-Indikator. Auf dem iPad bleibt die Doppelseite erhalten.

## Beispielrezept und Quellen

„Kokosmakronen & Kokosbusserl“ basiert auf [Sallys Welt: Kokosmakronen / Kokosbusserl](https://sallys-blog.de/rezepte/kokosmakronen-kokosbusserl), abgerufen am 14. November 2026. Mengen und Backdaten wurden anhand der Originalseite geprüft; die Anleitung ist in eigenen Worten zusammengefasst. Die lokale SVG-Illustration wurde für dieses Kochbuch erstellt und ist kein Originalfoto von Sallys Welt.

Externe Rezepte können das optionale Feld `source: { label: 'Name der Quelle', url: 'https://…' }` erhalten. Die Quelle erscheint am Rezept und wird mit durchsucht. Der Link öffnet eine neue Registerkarte; das externe Original ist nur online verfügbar. Das gespeicherte Rezept samt Illustration bleibt offline lesbar.

„Rumkugeln aus Kuchenresten“ basiert auf [Sallys Welt: Rumkugeln / Pralinen aus Kuchenresten](https://sallys-blog.de/rezepte/rumkugeln-pralinen-aus-kuchenresten), abgerufen am 14. November 2026. Zutaten und Zubereitungszeit wurden anhand der Originalseite geprüft; die Schritte sind in eigenen Worten zusammengefasst. Die Stückzahl hängt von der selbst gewählten Kugelgröße ab. Die Illustration ist eine eigene SVG-Grafik. Das vollständige Rezept und die Illustration sind im Offline-Speicher enthalten.

## Rezept aus Screenshots: Aperol-Spritz-Plätzchen

Der Eintrag `aperol-spritz-plaetzchen` wurde aus drei vom Nutzer bereitgestellten Screenshots eines Beitrags von foodwerk.de übertragen. Er enthält Mengen für ca. 25 gefüllte Plätzchen, 175 °C Ober-/Unterhitze, 8–12 Minuten Backzeit, ca. 45 Minuten Teigkühlung und ca. 1 Stunde Kühlung der Ganache. Der letzte Satz zur Glasur ist abgeschnitten: Eintauchen, Dekorieren und Trocknen wurden sinngemäß ergänzt und im Rezept gekennzeichnet. Ein direkter Beitragslink ist nicht bekannt. Die Illustration ist eine eigene SVG-Grafik.

Zutaten unterstützen optional `group` (z. B. „Mürbeteig“, „Ganache“, „Glasur“). Gleiche Gruppen zusammenhängend anordnen; beim Gruppenwechsel erscheint eine Zwischenüberschrift. `source` kann bei Vorlagen ohne URL nur `label` und optional `note` enthalten; dann wird die Herkunft ohne erfundenen Link angezeigt.

## Drucken

„Drucken“ oberhalb des geöffneten Rezepts öffnet den Druckdialog des Browsers. Dort sind Papierdruck und, falls vom Gerät angeboten, Speichern als PDF möglich. Gedruckt wird nur das aktuelle Rezept mit Zutaten, Anleitung, Küchennotiz und Quelle. Navigation und App-Bedienung werden ausgeblendet. Die Druckansicht nutzt eine einspaltige A4-Darstellung mit Seitenumbrüchen für längere Rezepte; Ränder und Papierformat lassen sich im Druckdialog ändern.
