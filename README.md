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
- Jedes Rezept hat eine Adresse mit stabiler ID, beispielsweise `index.html#kokosmakronen-sally`. Diese lässt sich auch als Browser-Lesezeichen speichern oder teilen. Browser-Zurück/Vorwärts wird unterstützt.

## Rezepte ergänzen

Die Startseite zeigt das Inhaltsverzeichnis. Enthalten sind Kokosmakronen, Zitronenkekse mit Lemon Curd, Vanillekipferl, Kaffeetaler, Nürnberger Lebkuchen und Zimtsterne nach Sallys Welt sowie Aperol-Spritz-Plätzchen nach den bereitgestellten Screenshots von foodwerk.de sowie Schokoladenschnitten aus einer handschriftlichen Vorlage. Das Kapitel „Salate“ enthält den Schichtsalat mit Thunfischsoße aus einer fotografierten Rezeptseite.

Ein weiteres Objekt in `window.RECIPES` in `recipes.js` ergänzen. Kapitel in `window.CHAPTERS` bestimmen die Reihenfolge der Kapitel, innerhalb der Kapitel gilt die Reihenfolge der Rezeptdatensätze. Für das folgende Beispiel zuerst das Kapitel `suppen` ergänzen. Beispiel:

```js
{
  id: 'kartoffelsuppe', // eindeutig, dauerhaft; keine Leerzeichen
  title: 'Kartoffelsuppe',
  chapter: 'suppen',
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

## Rezepte und Quellen

„Kokosmakronen & Kokosbusserl“ basiert auf [Sallys Welt: Kokosmakronen / Kokosbusserl](https://sallys-blog.de/rezepte/kokosmakronen-kokosbusserl), abgerufen am 14. November 2026. Mengen und Backdaten wurden anhand der Originalseite geprüft; die Anleitung ist in eigenen Worten zusammengefasst. Die lokale SVG-Illustration wurde für dieses Kochbuch erstellt und ist kein Originalfoto von Sallys Welt.

Externe Rezepte können das optionale Feld `source: { label: 'Name der Quelle', url: 'https://…' }` erhalten. Die Quelle erscheint am Rezept und wird mit durchsucht. Der Link öffnet eine neue Registerkarte; das externe Original ist nur online verfügbar. Das gespeicherte Rezept samt Illustration bleibt offline lesbar.


## Rezept aus Screenshots: Aperol-Spritz-Plätzchen

Der Eintrag `aperol-spritz-plaetzchen` wurde aus drei vom Nutzer bereitgestellten Screenshots eines Beitrags von foodwerk.de übertragen. Er enthält Mengen für ca. 25 gefüllte Plätzchen, 175 °C Ober-/Unterhitze, 8–12 Minuten Backzeit, ca. 45 Minuten Teigkühlung und ca. 1 Stunde Kühlung der Ganache. Der letzte Satz zur Glasur ist abgeschnitten: Eintauchen, Dekorieren und Trocknen wurden sinngemäß ergänzt und im Rezept gekennzeichnet. Ein direkter Beitragslink ist nicht bekannt. Die Illustration ist eine eigene SVG-Grafik.

Zutaten unterstützen optional `group` (z. B. „Mürbeteig“, „Ganache“, „Glasur“). Gleiche Gruppen zusammenhängend anordnen; beim Gruppenwechsel erscheint eine Zwischenüberschrift. `source` kann bei Vorlagen ohne URL nur `label` und optional `note` enthalten; dann wird die Herkunft ohne erfundenen Link angezeigt.

## Drucken

„Drucken“ oberhalb des geöffneten Rezepts öffnet den Druckdialog des Browsers. Dort sind Papierdruck und, falls vom Gerät angeboten, Speichern als PDF möglich. Gedruckt wird nur das aktuelle Rezept mit Zutaten, Anleitung, Küchennotiz und Quelle. Navigation und App-Bedienung werden ausgeblendet. Die Druckansicht nutzt eine einspaltige A4-Darstellung mit Seitenumbrüchen für längere Rezepte; Ränder und Papierformat lassen sich im Druckdialog ändern.

## Zitronenkekse mit Lemon Curd

Quelle: [Sallys Welt · Zitronenkekse mit Lemon Curd](https://sallys-blog.de/rezepte/zitronenkekse-mit-lemon-curd), geprüft am 14. November 2026. Der Quellenlink ist ohne Trackingparameter gespeichert. Die Anleitung ist in eigenen Worten zusammengefasst. Die Stückzahl war im ausgelesenen Quellentext nicht angegeben; der Eintrag nennt daher eine Rezeptmenge. Die Illustration ist eine eigene lokale SVG-Grafik.

## Vanillekipferl

Quelle: [Sallys Welt · Vanillekipferl](https://sallys-blog.de/rezepte/vanillekipferl), geprüft am 14. November 2026. Zutaten, Backdaten und Formhinweise wurden geprüft und die Anleitung in eigenen Worten zusammengefasst. Eine feste Stückzahl war im ausgelesenen Quellentext nicht angegeben; der Eintrag nennt eine Rezeptmenge. Die Illustration ist eine eigene lokale SVG-Grafik.

## Kaffeetaler

Quelle: [Sallys Welt · Bunter Plätzchen-Teller / Kaffeetaler](https://sallys-blog.de/rezepte/kaffeetaler), direktes HTML geprüft am 14. November 2026. Übernommen wurden die Mengen des Einzelrezepts für 20 Stück (einschließlich 0,5 TL Vanilleextrakt), nicht die Mengen des kombinierten Plätzchentellers. Die Übersicht nennt 60 Minuten Kühlung; die Anleitung nennt mindestens 1 Stunde plus weitere 30 Minuten. Im Kochbuch stehen die beiden Arbeitsschritte getrennt. Die Anleitung ist in eigenen Worten zusammengefasst, die lokale SVG-Illustration selbst erstellt.

## Nürnberger Lebkuchen und Zimtsterne

Quellen: [Sallys Welt · Nürnberger Lebkuchen – klassisch](https://sallys-blog.de/rezepte/lebkuchen-rezept-nurnberger-lebkuchen-klassisch) und [Sallys Welt · Zimtsterne](https://sallys-blog.de/rezepte/zimtsterne), Originalseiten einschließlich Mengenfelder geprüft am 14. November 2026. Die Angaben gelten für 24 Lebkuchen mit 90-mm-Oblaten beziehungsweise 25 Zimtsterne. Die Anleitungen sind in eigenen Worten zusammengefasst. Bei den Lebkuchen sind Zitronenguss und Kuvertüre als wählbare Dekoration getrennt; die Backzeit folgt der Anleitung statt der kürzeren Übersichtsangabe. Beide Illustrationen sind eigene lokale SVG-Grafiken.

## Schokoladenschnitten aus handschriftlicher Vorlage

Aus dem vom Nutzer bereitgestellten Foto übertragen: Grundmenge jeweils 125 g Blockschokolade, Zucker und Palmin, 1 Päckchen Vanillinzucker, 3 Eigelb, 1 Ei und 6 Oblaten (ca. 12 × 20 cm). Die blassen Bleistiftmengen wurden als Verdreifachung gelesen und nicht übernommen. Die Vorlage nennt etwa 5 Minuten Kochzeit, weist auf Anbrenngefahr hin und sieht Rautenschnitte nach dem Erkalten vor. Die genaue Schichtaufteilung ist nicht beschrieben; diese Unklarheit ist im Rezept vermerkt. Die Illustration ist eine eigene schematische Darstellung, kein Foto des fertigen Gerichts.

## Inhaltsverzeichnis und Kapitel

Die Startseite ist das Inhaltsverzeichnis mit direkt verlinkten Rezepten und automatisch berechneten Buchseiten. Die acht Gebäckrezepte stehen im Kapitel **Plätzchen**, der Schichtsalat mit Thunfischsoße im Kapitel **Salate**. Unter **Herzhaft** stehen Tortilla-Teig und Rindfleisch-Tortillas als **Mexican Diner** sowie die Sushi-Bowl mit Lachs und Garnelen und der Avocado-Bacon-Egg-Burger. Im Kapitel **Kuchen** stehen die Blaubeer-Eistorte mit Knusperboden und die Passionsfrucht-Käsetorte. Über „Inhalt“ oder den Buchtitel gelangt man jederzeit zurück; die Rezeptsuche enthält zusätzlich einen Kapitel-Filter. Kapitel-Filter, Textsuche und Lesezeichen lassen sich kombinieren.

Neue Kapitel am Anfang von `recipes.js` in `window.CHAPTERS` ergänzen, zum Beispiel:

```js
{ id: 'suppen', title: 'Suppen', description: 'Wärmende Lieblingsgerichte für den Suppenteller.' }
```

Neue Rezepte erhalten dazu `chapter: 'suppen'` und `category: 'Suppen'`. Inhaltsverzeichnis, Suchfilter und Buchreihenfolge passen sich automatisch an. Leere Kapitel bleiben unsichtbar. Rezept-IDs und gespeicherte Lesezeichen bleiben unverändert. `#kapitel/plaetzchen` öffnet das Kapitel, `#inhaltsverzeichnis` die Startseite; der frühere Link `#willkommen` führt ebenfalls zum Inhaltsverzeichnis.

## Schichtsalat mit Thunfischsoße

Aus dem vom Nutzer bereitgestellten Foto einer gedruckten Rezeptseite übertragen; Buch und Verfasser sind nicht erkennbar. Das Rezept gehört zum Kapitel `salate` / „Salate“ und gilt für vier Personen. Die am rechten Rand abgeschnittenen Wortenden bei der Vorbereitung und Soßenzubereitung wurden sinngemäß vervollständigt und im Rezept kenntlich gemacht. Die Vorlage nennt keine genaue Durchziehzeit; es wurde keine geschätzt. Die lokale Illustration ist selbst erstellt.

## Mexican Diner · Herzhaft

Tortilla-Teig und Rindfleisch-Tortillas wurden aus dem Nutzerfoto der gedruckten Seite 21 übertragen, jeweils für sechs Personen. Buch und Verfasser sind unbekannt. Der Teig ist laut Vorlage flüssig wie Crêpe-Teig, mit 10 g Salz und einer Stunde Kühlschrankruhe. Für die Kochplatte nennt der Ausschnitt keine Temperatur. Beim Rindfleisch wurden 25 cl Bouillon als 250 ml erläutert. Das optionale selbst gemachte Bohnenpüree ist als Alternative zum fertigen Püree getrennt. Die separat referenzierte Tomatensauce ist nicht abgebildet; dafür wurden weder Mengen noch eine Anleitung erfunden. Die nicht angeforderte Hühnchenvariante wurde nicht aufgenommen. Beide Illustrationen sind selbst erstellte SVG-Grafiken.

Zusammengehörige Rezepte unterstützen `menu` (z. B. „Mexican Diner“) und `relatedRecipeIds` (Liste vorhandener Rezept-IDs). Der Menüname erscheint am Rezept, im Inhaltsverzeichnis und in Suchtreffern und wird mit durchsucht. Passende Rezepte werden direkt verlinkt, auch offline. Ungültige oder auf sich selbst zeigende Verweise werden nicht angezeigt.

## Sushi-Bowl mit Lachs und Garnelen

Auf ausdrückliche Auswahl des Nutzers aus einer eigenen E-Mail übernommen und unter `herzhaft` eingeordnet. Die Mengen gelten für fünf Personen. Die Wassermenge wurde als Volumenverhältnis zum Reis übernommen, ohne Gramm in Milliliter umzudeuten. Es wurden keine Gesamtzubereitungszeit oder unbekannten Mengen ergänzt. Die Illustration ist eine eigene lokale SVG-Grafik. Private Mailadressen, Nachrichten-IDs, Mail-Links und sonstige Korrespondenz werden nicht im Repository veröffentlicht. Weitere bei der Mailsuche gefundene Rezepte sind nicht Teil dieser Ergänzung.

## Avocado-Bacon-Egg-Burger

Auf ausdrückliche Auswahl des Nutzers aus einer eigenen E-Mail übernommen und unter `herzhaft` eingeordnet. Mengen für drei Personen, mit separater Limetten-Aioli beziehungsweise optionaler Chipotle-Mayo. Die ungefähre Bratzeit aus der Vorlage bleibt als Richtwert erhalten; der Anleitungsschritt erläutert zusätzlich das vollständige Durchgaren des Hackfleischs. Zusätzlicher Limettensaft für die Avocado ist ohne erfundene Menge aufgeführt. Die Illustration ist eine eigene lokale SVG-Grafik. Private Maildaten und weitere nicht ausgewählte Rezepte werden nicht veröffentlicht.

## Blaubeer-Eistorte mit Knusperboden · Kuchen

Quelle: [Gilla auf Chefkoch · Blaubeer-Eistorte mit Knusperboden](https://www.chefkoch.de/rezepte/191211081343346/Blaubeer-Eistorte-mit-Knusperboden.html), geprüft am 15. November 2026. Mengen für eine Springform mit 24 cm Durchmesser; eine Stückzahl wurde nicht geschätzt. Das Rezept verwendet fertiges Vanilleeis, hat keine Backzeit und nennt 35 Minuten Arbeitszeit sowie eine Stunde im Gefrierfach. Der Hinweis auf bei Bedarf längeres Gefrieren ist eine praktische Ergänzung. Die Anleitung ist in eigenen Worten zusammengefasst, die lokale SVG-Illustration selbst erstellt.

## Passionsfrucht-Käsetorte · Kuchen

Aus der im Chat bereitgestellten Rezeptvorlage übernommen: 16 Stücke, Springformen mit 26 cm Durchmesser, ca. 50 Minuten Zubereitung plus Abkühl- und Kühlzeit. Die beiden Teighälften werden nacheinander jeweils ca. 25 Minuten gebacken; die geschichtete Torte wird ca. 3 Stunden gekühlt. Die Zutaten sind nach Arbeitsschritten aufgeteilt: insgesamt 425 g Zucker (225 + 100 + 100 g) und 8 Eier (4 + 4). Ungebundener Fruchtmix für die Creme und mit Stärke gebundene Soße sind in der Anleitung ausdrücklich getrennt. Nährwerte laut Nutzervorlage pro Stück übernommen, nicht nachgerechnet. Kein externer Quellenlink oder Verfasser bekannt; Illustration selbst erstellt.

## Auswahl aus „filofex rezepte.pdf“

Nur die fünf ausdrücklich ausgewählten Rezepte sind übernommen: Cake Pops (PDF-Seite 4), Börek (6), Blechkuchen (3), Tassenkuchen mit beiden Varianten (5) und Omas Apfelpfannkuchen (8). Cake Pops, Blech- und Tassenkuchen gehören zu „Kuchen“, Börek zu „Herzhaft“, Apfelpfannkuchen zum neuen Kapitel „Süßspeisen“. Das eingebettete Rezeptbild auf Seite 8 wurde visuell gelesen. Die vollständige PDF wird nicht veröffentlicht, da sie auch nicht angeforderte persönliche Inhalte enthält.

- Cake Pops: Nur Zutaten und ca. 15 Stück überliefert. Keine Zubereitung, kein Gerät, keine Temperatur und keine Garzeit ergänzt. Als unvollständige Notiz gekennzeichnet.
- Blechkuchen: 190 °C, 30 Minuten ohne Vorheizen aus der Vorlage. Heizart und Blechgröße fehlen. Rührfolge und Verteilen auf dem Blech sind als redaktionelle Ergänzung markiert. Kein Backpulver ergänzt.
- Tassenkuchen: Zwei alternative Zutatenlisten, nicht zusammenmischen. 2 Minuten bei 800 Watt und Hinweis auf heiße Steinguttassen übernommen; Verrühren und mikrowellengeeignetes Gefäß als praktische Ergänzung gekennzeichnet.
- Börek: Sesam aus der Anleitung ohne erfundene Menge ergänzt; offensichtliche Schreibfehler bereinigt. Die fälschlich „Pizzateig“ betitelte Dublette auf Seite 7 ist nicht übernommen.
- Apfelpfannkuchen: 2 Portionen, ca. 15 Minuten Arbeitszeit und alle Mengen aus dem sichtbaren Rezeptbild übernommen.

Jeder Eintrag trägt PDF-Dateiname und Seitennummer als Herkunft. Alle fünf SVG-Illustrationen sind selbst erstellt und keine kopierten Bilder aus der PDF.

## Vögel · Süßspeisen

Aus der vom Nutzer fotografierten handschriftlichen Rezeptseite übertragen. Mehl und Zucker wurden anschließend vom Nutzer korrigiert beziehungsweise bestätigt: 500 g Mehl und 100 g Zucker. Hinzu kommen laut Vorlage 1 Packung Hefe und 2 Eier. Weitere Zutaten sind Salz, Vanillinzucker, etwas zerlassene Rama und etwas lauwarme Milch. Das Wort nach den Eiern wurde als „Arrak“ gelesen und als unsicher markiert. Der Klammerzusatz bei Zucker zum Wenden ist nicht eindeutig; keine Zuckersorte festgelegt. Die Vorlage beschreibt Verdoppeln des Teigvolumens, goldbraunes Ausbacken in heißem Fett wie Küchle und heißes Wenden in Zucker. Hefeart, fehlende Mengen, Formgebung, Zeit und Temperatur wurden nicht erfunden. Das Rezept ist als unvollständige Familiennotiz gekennzeichnet. Die eigene Illustration ist schematisch und behauptet keine überlieferte Gebäckform.
