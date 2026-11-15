# Arbeitsregeln für „Unser Kochbuch“

Dieses Dokument gilt für das gesamte Repository und alle zukünftigen Seiten, Rezepte und Funktionen. Es ist vor Änderungen zusammen mit der `README.md` zu lesen. Neue Arbeit muss sich in den bestehenden Rahmen einfügen. Ausdrückliche Vorgaben des Nutzers haben Vorrang. Änderungen am gemeinsamen Schema werden zentral umgesetzt und hier dokumentiert.

## 1. Ziel und technische Grenzen

Das Kochbuch ist eine persönliche, installierbare und offline nutzbare Rezeptsammlung mit der Anmutung eines aufgeschlagenen Buches. Hauptgerät ist ein iPad; Handys im Hochformat und Desktop-Browser werden ebenfalls unterstützt. Oberfläche und redaktionelle Inhalte sind auf Deutsch.

- Ausschließlich statisches HTML, CSS und JavaScript. Deployment durch Kopieren der Dateien, insbesondere auf GitHub Pages unter `/Rezepte/`.
- Kein Backend, keine Datenbank auf einem Server, kein erforderlicher Build-Schritt. Keine Frameworks oder externen Laufzeitabhängigkeiten für gewöhnliche Erweiterungen einführen.
- Alle benötigten Bilder, Symbole, Skripte und Stile lokal halten. Keine externen Webfonts, Tracker oder nur online funktionierenden Rezeptbilder.
- Relative Ressourcenpfade verwenden. Keine fest eingebauten Pfade wie `/assets/...`, die im GitHub-Pages-Unterordner scheitern.
- `index.html` muss weiterhin direkt als Datei lesbar bleiben. Installation und Service Worker benötigen HTTPS oder localhost.

## 2. Gemeinsamer Aufbau statt einzelner Rezept-HTML-Dateien

Die Startseite ist ein dynamisches Inhaltsverzeichnis, kein Rezept. Kapitel werden in `window.CHAPTERS` und Rezepte in `window.RECIPES` in `recipes.js` gepflegt. `app.js` rendert sie in dieselbe Vorlage aus `index.html`; `styles.css` definiert das gemeinsame Design. Ein neues Rezept erhält grundsätzlich keine eigene HTML-Datei und kein eigenes Layout.

| Datei | Verantwortung |
| --- | --- |
| `index.html` | Gemeinsame Buchvorlage, Navigation und Dialoge |
| `recipes.js` | Rezeptinhalte und Reihenfolge |
| `app.js` | Darstellung, Suche, Direktlinks, Blättern, Lesezeichen und Druckknopf |
| `styles.css` | Design, responsive Ansichten, Barrierearmut und Drucklayout |
| `pwa.js` | Installation, Offline-Status und Updatehinweise |
| `manifest.webmanifest` | App-Identität, Startadresse, Scope und Symbole |
| `sw.js` | Versionierter Offline-Speicher und Updateverhalten |
| `assets/` | Lokale Bilder und App-Symbole |
| `README.md` | Bedienung, Pflege und Veröffentlichung |

Zusätzliche Inhaltsseiten, etwa Kategorien oder ein Register, müssen dieselben Farben, Schriften, Abstände, Bedienelemente und App-Funktionen wiederverwenden. Ihre Navigation darf die Rezept-IDs im URL-Hash nicht überschreiben oder vorhandene Direktlinks beschädigen. Wird dafür ein neues Routing benötigt, muss es zentral mit Rückwärtskompatibilität eingeführt werden. Rezeptbezogene Funktionen werden nur dort angeboten, wo ein Rezept geöffnet ist.

## 3. Was jede Rezeptseite können muss

1. **Vollständige Darstellung:** Kategorie, eindeutiger Titel, kurze Beschreibung, lokales Bild mit Alternativtext, Portions- oder Stückangabe, Zutaten mit Mengen, nummerierte Zubereitung und verfügbare Zeit-/Temperaturangaben anzeigen.
2. **Zutaten strukturieren:** Teig, Füllung, Glasur und ähnliche Bestandteile über `ingredients[].group` trennen. Gleiche Gruppen stehen zusammen. Einfache Rezepte funktionieren ohne Gruppen.
3. **Schritte lesbar halten:** Jeder Schritt besitzt eine kurze Überschrift und einen klaren Text. Lange Inhalte müssen vollständig erreichbar bleiben; weder feste Seitenhöhen noch abgeschnittene Texte verwenden.
4. **Auffindbar sein:** Titel, Beschreibung, Kategorie, Zutatennamen, Zutatengruppen, Anleitung und Quellenname werden durch die gemeinsame Suche gefunden. Mehrere Suchwörter werden gemeinsam berücksichtigt. Einen verständlichen Zustand für leere Trefferlisten erhalten.
5. **Direkt verlinkbar sein:** Eine eindeutige, dauerhafte `id` als URL-Hash verwenden. Direktaufruf, Neuladen und Browser-Zurück/Vorwärts funktionieren. Bestehende IDs nicht ohne Migration umbenennen.
6. **Lesezeichen unterstützen:** Das Band setzt oder entfernt ein Lesezeichen. Zustand, Beschriftung und `aria-pressed` passen zusammen. Gespeicherte Rezepte erscheinen im Lesezeichenfilter.
7. **Blättern unterstützen:** Vorheriges/nächstes Rezept über Schaltflächen, horizontales Wischen und Pfeiltasten. An den Buchgrenzen sind die entsprechenden Schaltflächen deaktiviert. Vertikales Scrollen, Textauswahl und Eingaben in der Suche dürfen nicht gestört werden.
8. **Auf Handy und iPad funktionieren:** Die Ansichten aus Abschnitt 5 verwenden. Beim Rezeptwechsel auf dem Handy wieder zum Rezeptanfang gehen. Sprungtasten führen zum richtigen Abschnitt, ohne ihn unter der festen Navigation zu verstecken.
9. **Druckbar sein:** Der gemeinsame Druckknopf öffnet `window.print()` für das aktuelle Rezept. Zutaten, sämtliche Schritte, Notiz und Quelle werden vollständig gedruckt; keine Navigation oder App-Bedienung.
10. **Offline nutzbar sein:** Nach vollständiger erster Online-Speicherung müssen Inhalt, Bild, Suche, Blättern und Lesezeichen ohne Netz funktionieren. Neue erforderliche Assets in `sw.js` aufnehmen.
11. **Herkunft kenntlich machen:** Bei externen Rezepten oder Vorlagen eine Quelle anzeigen. Fehlende Informationen und ergänzte Schritte transparent kennzeichnen; nichts erfinden.
12. **Bedienbar bleiben:** Semantische Überschriften, echte Buttons, Tastaturbedienung, sichtbarer Fokus, ausreichende Kontraste und verständliche Beschriftungen verwenden. Nicht allein auf Farbe, Hover oder Symbole vertrauen.

## 4. Rezept-Datenschema

Das folgende Beispiel beschreibt die Struktur; es ist kein vollständiges Kochrezept. Alle Inhaltstexte sind Klartext. Die bestehende Darstellung arbeitet mit `textContent` und DOM-Elementen; Rezepttexte nicht als ungeprüftes HTML einsetzen.

```js
{
  id: 'eindeutiger-rezeptname',
  title: 'Rezepttitel',
  chapter: 'plaetzchen',
  category: 'Plätzchen',
  description: 'Kurze Einordnung des Gerichts.',
  image: 'assets/rezeptname.svg',
  imageAlt: 'Konkrete Beschreibung des Bildinhalts',
  imageCaption: 'Eigene Illustration oder zutreffender Bildnachweis',
  servings: 'ca. 25 Stück',
  ingredientsNote: 'Ergänzende Angabe, andernfalls leer lassen.',
  ingredients: [
    { group: 'Teig', amount: '250 g', name: 'Mehl' }
  ],
  meta: ['175 °C Ober-/Unterhitze', '8–12 Min. Backzeit'],
  steps: [
    { title: 'Vorbereiten', text: 'Vollständige Beschreibung des Arbeitsschritts.' }
  ],
  tip: 'Persönliche Notiz oder hilfreicher Hinweis.',
  source: {
    label: 'Quellenname · Originaltitel',
    url: 'https://example.com/originalrezept'
  }
}
```

- Pflicht für neue echte Rezepte: `id`, `title`, `chapter`, `category`, `description`, `image`, `imageAlt`, `servings`, nicht leere `ingredients` und `steps` sowie `meta` mit den tatsächlich bekannten Angaben.
- `imageCaption`, `ingredientsNote` und `tip` sind optional. `meta` darf leer sein, wenn keine verlässlichen Angaben vorliegen. Unbekannte Mengen oder Zeiten nicht schätzen, ohne sie als Schätzung zu kennzeichnen.
- `ingredients[].group` ist optional. Jeder Zutateneintrag enthält `amount` und `name`; jeder Schritt `title` und `text`.
- `source` ist bei externen Vorlagen erforderlich. Bei eigenen Rezepten ist es optional. Nur geprüfte HTTPS-URLs als Link angeben. Bei Screenshots ohne bekannten Beitragslink `source: { label: 'Herkunft', note: 'Hinweis zur Vorlage' }` verwenden. Keine vermutete URL einsetzen.
- Stückzahl, Temperatur, Heizart, Backzeit, Arbeitszeit und Kühlzeit auseinanderhalten. Keine erfundene Gesamtdauer aus Zeiten bilden, die sich möglicherweise überlappen.
- Neue Rezepte am Ende der Sammlung ergänzen; die Startseite bleibt das Inhaltsverzeichnis. Keine Musterrezepte oder Platzhalterseiten ohne ausdrücklichen Auftrag hinzufügen. Veraltete Hinweise auf noch fehlende Rezepte bei Bedarf aktualisieren.
- Ein neues Datenfeld erfordert die passende gemeinsame Darstellung und Dokumentation; es darf nicht nur in einem Datensatz auftauchen und sonst wirkungslos bleiben.

## 5. Verbindliches Design

### Gestaltung und Materialien

Die Anmutung bleibt ein ruhiges, persönliches Kochbuch: warmer Papiergrund, grüner Einband, dezente Papierstruktur, Falz und zurückhaltende Schatten. Keine voneinander abweichenden Rezeptdesigns einführen.

| Element | Vorgabe |
| --- | --- |
| Haupttext | `--ink: #293c32` |
| Einband, Hauptaktionen | `--green: #254d40` |
| Buchpapier | `--paper: #fcf8ee` |
| Hintergrund | `#eae8de` |
| Linien | `--line: #dedbcb` |
| Zurückhaltender Text | `--muted: #77796a`; bei kleinen Texten Kontrast prüfen |
| Titel und redaktionelle Überschriften | Georgia / Times New Roman / Serif |
| Bedienung und Anleitungstext | Systemschrift über `--sans` |
| Lesezeichen | Band am oberen rechten Buchrand; gesetzter Zustand im warmen Terrakottaton |

Vorhandene CSS-Variablen und Klassen verwenden. Abstände, Rundungen, Farben und Schatten zentral ändern statt Sonderstile pro Rezept hinzuzufügen. Rezeptbilder im Querformat zeigen, ohne sie zu verzerren. Eigene Illustrationen als solche beschriften; keine Illustration als Foto des Originalrezepts ausgeben. Bildrechte und Herkunft beachten.

### iPad und breite Bildschirme

- Oberhalb von 650 px: aufgeschlagenes Buch mit zwei gleich breiten Seiten und sichtbarem Falz.
- Links: Kategorie, Titel, Beschreibung, Bild, Portionen und Zutaten. Rechts: Metadaten, nummerierte Anleitung, Küchennotiz und Quelle.
- Lesezeichen oben rechts, Druckknopf oberhalb des Buchs, Blättern unterhalb des Buchs.
- Das Buch wächst mit dem Inhalt. In Hoch- und Querformat bleiben Text und Bedienelemente erreichbar.

### Handy im Hochformat

- Bis einschließlich 650 px: einspaltige Reihenfolge **Titel → Beschreibung → Bild → Zutaten → Zubereitung → Notiz → Quelle**.
- Kein verkleinertes Doppelseitenlayout. Zutaten und Anleitung mit etwa 16 px Schrift und großzügiger Zeilenhöhe darstellen.
- Oben bleiben Suche und die Sprungtasten „Überblick“, „Zutaten“, „Zubereitung“ erreichbar. Unten bleibt die Navigation zwischen Rezepten sichtbar.
- Lesezeichen am Rezeptanfang und Druckknopf oberhalb des Rezepts erhalten. Navigation darf keinen Text dauerhaft verdecken; passende Scrollabstände und unteren Inhaltsabstand vorsehen.
- Berührungsflächen mindestens etwa 44 × 44 px. `safe-area-inset-*`, Home-Indikator und Bildschirmränder berücksichtigen. Ab 320 px Breite kein horizontales Scrollen.
- Keine zwingenden Hover-Aktionen. Blätteranimationen bei kleinen Displays sowie bei `prefers-reduced-motion` vermeiden.

### Druck

- Einspaltige, kontrastreiche Darstellung mit A4 als Vorgabe, ca. 14 mm Rand und lesbaren Schriftgrößen. Lange Rezepte dürfen mehrere Seiten benötigen.
- Keine Kopf-/Fußnavigation, Dialoge, Sprungtasten, Lesezeichen, App- oder Offlinehinweise drucken.
- Zutaten, Gruppenüberschriften, sämtliche Schritte, Bild, Notiz und Quelle vollständig ausgeben. Keine abgeschnittenen Bereiche durch `overflow` oder feste Höhen.
- Überschriften möglichst beim folgenden Inhalt halten. Zutatenzeilen und normale kurze Schritte nicht unnötig auf zwei Druckseiten verteilen.
- Bei vorhandenen Quellenlinks die URL im Druck ausgeben. Auch PDF-Ausgabe über den Browser unterstützen.

## 6. Lokale Daten und App-Verhalten

- Lesezeichen bleiben in `localStorage` unter `unser-kochbuch:bookmarks:v1` gespeichert. Kein Serverkonto, keine Cookies und keine Synchronisierung für diese Funktion erforderlich.
- Stabile Rezept-IDs erhalten gespeicherte Lesezeichen. Den Speicherschlüssel nur mit begründeter Migration ändern. Bestehende Browserdaten nicht bei Updates löschen.
- Bei blockiertem oder vollem Speicher muss das Rezept weiter funktionieren; eine fehlende dauerhafte Speicherung verständlich anzeigen.
- Offline-Dateien liegen im Cache Storage des Service Workers; Lesezeichen liegen separat in `localStorage`.
- App-Manifest mit relativem `id`, `start_url` und `scope`, `display: standalone` und lokalen Symbolen erhalten. Die iPad-Installationshilfe erklärt Safari → Teilen → Zum Home-Bildschirm.
- App-Inhalte nur dann als offline verfügbar melden, wenn die Installation des Offline-Speichers abgeschlossen ist. Externe Quellenlinks benötigen weiterhin Internet.

## 7. Veröffentlichung und Offline-Updates

Für jede Veröffentlichung mit geänderten App-Dateien, Rezepten oder Assets:

1. `VERSION` in `sw.js` erhöhen. Keine feste Versionsnummer aus diesem Dokument übernehmen; immer die vorhandene Nummer weiterzählen.
2. Alle neuen benötigten lokalen Ressourcen in `FILES` aufnehmen. Referenzierte Dateien müssen vorhanden und ihre Schreibweisen identisch sein.
3. Den vollständigen App-Stand gemeinsam veröffentlichen. Keine Mischung aus neuen Rezeptdaten und alten Skripten voraussetzen.
4. Updates weiter warten lassen, bis alle bisherigen Kochbuchfenster geschlossen sind. Kein erzwungenes `skipWaiting()` oder automatisches Neuladen beim Kochen einführen.
5. Nur alte Caches mit dem eigenen Scope-Präfix löschen. Andere Projekte auf derselben GitHub-Pages-Domain und gespeicherte Lesezeichen unangetastet lassen.

Reine Dokumentationsänderungen wie an `README.md` oder `AGENTS.md` erfordern keine neue Cache-Version und keinen Eintrag in `FILES`. GitHub Pages veröffentlicht weiterhin den Branch `main` aus dem Repository-Stamm; kein serverseitiges Deployment einführen. Ob Einstellungen tatsächlich aktiviert sind, bei Bedarf prüfen und nicht aus der Existenz dieser Anleitung ableiten.

## 8. Quellen und Übertragung von Rezepten

- Bei Recherche die Originalquelle lesen und Mengen, Portionen, Zeiten sowie Heizart prüfen. Anleitung in eigenen Worten formulieren und das Original direkt verlinken.
- Bei vom Nutzer gelieferten Screenshots nur erkennbare Angaben übernehmen. Abgeschnittene oder unleserliche Stellen offen benennen. Sinnvolle redaktionelle Ergänzungen unmittelbar am betroffenen Schritt kennzeichnen.
- Keine frei erfundenen Mengen, Quellen, Fotos, Haltbarkeitsangaben oder Behauptungen über eine erprobte Zubereitung hinzufügen.
- Bilder lokal mit zutreffendem Nachweis ablegen. Ohne passende Bildrechte eine eigene Illustration oder den als solchen gekennzeichneten Platzhalter verwenden.
- Herkunft und wesentliche Übertragungsentscheidungen in der `README.md` festhalten.

## 9. Prüfung passend zur Änderung

Vor Abschluss die betroffenen Funktionen prüfen. Reine Dokumentationsarbeit benötigt keine Browser- oder Anwendungstests. Bei neuen Rezepten oder Änderungen am Rahmen je nach Auswirkung:

- Syntax der geänderten JavaScript-Dateien mit `node --check` prüfen; eindeutige IDs, existierende Bildpfade und vollständige Daten kontrollieren.
- Darstellung auf Handybreiten 320, 375/390 und 430 px sowie iPad 834 × 1194 und 1194 × 834 prüfen. Kein horizontaler Überlauf oder verdeckte Bedienelemente; lange Rezepte und Zutaten berücksichtigen.
- Direktlink, Zurück/Vorwärts, Suche einschließlich Zutat und Quelle, Lesezeichen mit Neuladen, Filter, Blättern und mobile Sprungtasten prüfen, soweit betroffen.
- Druckvorschau oder PDF bei geändertem Drucklayout beziehungsweise langen Rezepten auf vollständigen Inhalt prüfen.
- Bei Änderungen an Service Worker oder Assets über HTTPS/localhost und unter `/Rezepte/` testen: erste Online-Speicherung, Offline-Neuladen, lokale Bilder und Update nach dem Schließen aller Fenster. Reines Öffnen über `file://` prüft keine PWA-Funktionen.
- Keine unbehandelten JavaScript-Fehler, kaputten Ressourcen oder verlorenen Lesezeichen hinterlassen.

Abschließend knapp berichten, was geändert wurde, wo es liegt und was tatsächlich geprüft wurde. Lokale Umsetzung, Commit im Repository und öffentlich erreichbare Veröffentlichung klar unterscheiden. Eine nicht ausgeführte Prüfung oder ein nicht erfolgtes Deployment nicht als erfolgreich darstellen.

## 10. Inhaltsverzeichnis und Kapitel

- Die Startseite (ohne Hash, `#inhaltsverzeichnis`, aus Kompatibilität auch `#willkommen`) zeigt ein Inhaltsverzeichnis im Buchdesign. Sie ist kein Datensatz in `RECIPES`, erscheint nicht in der Rezeptsuche und bietet kein Rezept-Lesezeichen. Drucken gibt dort das Inhaltsverzeichnis aus.
- `window.CHAPTERS` enthält `{ id, title, description }`. Die Reihenfolge bestimmt die Kapitelreihenfolge; innerhalb eines Kapitels gilt die Reihenfolge in `RECIPES`. Leere Kapitel werden nicht angezeigt. Der Renderer gruppiert auch dann korrekt, wenn Datensätze verschiedener Kapitel in der Datei gemischt stehen.
- Jedes Rezept erhält `chapter` mit einer vorhandenen Kapitel-ID und `category` mit dem lesbaren Kategorienamen. Alle zum Zeitpunkt dieser Einführung vorhandenen Rezepte gehören zu `plaetzchen` / „Plätzchen“. Quellen gehören in `source`, nicht in die Kapitel-ID.
- Neue Kategorien als weitere Kapitel ergänzen; keine individuellen Inhaltsverzeichnis-Einträge oder Seitenzahlen von Hand pflegen. `#kapitel/<id>` führt zum entsprechenden Abschnitt. Rezept-IDs und vorhandene Direktlinks bleiben unverändert.
- Inhaltsverzeichnis, Suche und Buchnavigation verwenden dieselbe Kapitelreihenfolge. Die Suche bietet einen Kapitel-Filter, kombinierbar mit Suchtext und Lesezeichenfilter.
- Das Inhaltsverzeichnis belegt die Seiten 01/02, das erste Rezept beginnt auf 03/04. Die Seitenangaben im Inhaltsverzeichnis werden automatisch berechnet und sind Buchseiten, keine garantierten Papierseiten der Druckausgabe.
- Von jedem Rezept führt „Inhalt“ oder der Buchtitel zurück zum Inhaltsverzeichnis. Beim ersten Rezept führt Zurück dorthin; von dort führt Weiter zum ersten Rezept. Leere Sammlungen zeigen eine verständliche Meldung, keinen Fehler.
- Auf dem Handy keine Zutaten-/Zubereitung-Sprungtasten auf der Inhaltsseite zeigen. Kapitel- und Rezeptlinks müssen per Tastatur, Touch und offline funktionieren. Verborgene Rezeptinhalte dürfen nicht im Inhaltsverzeichnis mitgedruckt werden und umgekehrt.
- Bei Änderungen prüfen: Start ohne Hash, alter Willkommen-Link, Kapitel-Link, bestehender Rezept-Direktlink, Browserhistorie, Wechsel erstes/letztes Rezept, mehrere Kapitel und leere Sammlung. Bestehende Rezept-Lesezeichen bleiben erhalten.

## 11. Zusammengehörige Rezepte und Menüs

- `menu` ist ein optionaler Anzeigename für zusammengehörige Rezepte innerhalb eines Kapitels, etwa „Mexican Diner“ unter `herzhaft` / „Herzhaft“. Er erscheint in Inhaltsverzeichnis, Rezeptüberschrift und Suchtreffern und ist durchsuchbar. Das Kapitel bleibt die primäre Kategorie; keine kombinierten Kapitel-IDs für Menünamen anlegen.
- `relatedRecipeIds` ist eine optionale Liste vorhandener Rezept-IDs. Die gemeinsame Darstellung erzeugt daraus Links unter „Dazu gehört“. Fehlende Ziele und Selbstverweise werden ausgeblendet. IDs nicht umbenennen; Verweise bei Löschungen mitpflegen.
- Bei Teigen, Füllungen und Beilagen aus mehreren Vorlagen nur tatsächlich bekannte Anleitungen übernehmen. Fehlende referenzierte Rezepte offen benennen, keine scheinbar vollständige Anleitung erfinden. Nur ausdrücklich angeforderte Varianten aufnehmen.
- Neue Querverweise auf beiden Seiten sowie per Browserhistorie und offline testen; sie müssen auch im Druck als Rezeptnamen erscheinen.
