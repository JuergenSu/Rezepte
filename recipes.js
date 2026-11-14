/* Neue Rezepte als weiteres Objekt ergänzen. IDs dauerhaft beibehalten:
   Sie werden für Direktlinks und gespeicherte Lesezeichen verwendet.
   Alle Inhalte sind Klartext; HTML ist nicht nötig. */
window.RECIPES = [
  {
    id: 'willkommen',
    title: 'Ein Buch voller\nLieblingsgerichte.',
    category: 'Willkommen am Küchentisch',
    description: 'Für die Gerichte, die bleiben. Für handgeschriebene Notizen. Und für all die schönen Momente rund um den Tisch.',
    image: 'assets/kitchen.svg',
    imageAlt: 'Illustration einer gedeckten Küchenfläche mit Teller, Olivenzweig und Leinenserviette',
    imageCaption: 'Hier beginnt unsere Rezeptsammlung.',
    servings: 'Für viele schöne Momente',
    ingredientsNote: 'Was in dieses Kochbuch gehört',
    ingredients: [
      { amount: 'Eine Prise', name: 'Neugier auf Neues' },
      { amount: 'Ein Löffel', name: 'Familientradition' },
      { amount: 'Ganz viel', name: 'Freude am Kochen' }
    ],
    meta: ['Dein digitales Kochbuch', 'Für den Küchentisch gemacht'],
    steps: [
      { title: 'Aufschlagen & ankommen', text: 'Jedes Rezept bekommt eine Doppelseite: links das Bild und die Zutaten, rechts die Zubereitung. Alles beisammen, wie in einem richtigen Kochbuch.' },
      { title: 'Einfach weiterblättern', text: 'Wische nach links oder rechts über die Buchseiten. Du kannst auch die Schaltflächen unter dem Buch oder die Pfeiltasten verwenden.' },
      { title: 'Lieblingsgerichte wiederfinden', text: 'Über „Rezepte entdecken“ suchst du nach Namen, Zutaten oder Kategorien. Mit dem Band oben rechts setzt du ein Lesezeichen. Die Adresse im Browser verlinkt direkt zur geöffneten Seite.' }
    ],
    tip: 'Noch ist Platz für deine Rezepte. Die nächste Seite zeigt das Layout als Muster – die echten Lieblingsgerichte folgen bald.'
  },
  {
    id: 'musterseite',
    title: 'Hier zieht dein\nLieblingsrezept ein.',
    category: 'Musterseite · noch kein Rezept',
    description: 'Ein kleiner Vorgeschmack auf die Gestaltung. Bald stehen hier der Name und die Geschichte deines ersten Rezepts.',
    image: 'assets/kitchen.svg',
    imageAlt: 'Platzhalterillustration mit Teller und Olivenzweig für ein zukünftiges Rezeptfoto',
    imageCaption: 'Platz für ein Foto aus deiner Küche.',
    servings: 'z. B. 4 Portionen',
    ingredientsNote: 'Musterangaben – keine Kochanleitung',
    ingredients: [
      { amount: '… g', name: 'Die erste Zutat' },
      { amount: '… EL', name: 'Eine weitere Zutat' },
      { amount: 'Nach Bedarf', name: 'Das gewisse Etwas' }
    ],
    meta: ['Dauer folgt', 'Kategorie folgt'],
    steps: [
      { title: 'Alles bereitlegen', text: 'Hier beschreiben wir später die Vorbereitung. Die einzelnen Schritte bekommen klare Überschriften und genug Raum zum Lesen.' },
      { title: 'Mit Ruhe zubereiten', text: 'Hier folgen die Arbeitsschritte mit Mengen, Temperaturen und Garzeiten. Auch längere Rezepte finden Platz: Die Seiten wachsen mit dem Inhalt.' },
      { title: 'Servieren & genießen', text: 'Zum Schluss ist Platz für das Anrichten, passende Beilagen oder eine persönliche Erinnerung.' }
    ],
    tip: 'Aus deiner Küche: Hier können später Varianten, Familiennotizen oder Tipps zur Zubereitung stehen.'
  }
];
