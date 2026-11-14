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
    tip: 'Unser erstes Beispiel: Kokosmakronen nach Sallys Welt. Blättere weiter und entdecke das Rezept mit Zutaten, Backzeit und Quellenlink.'
  },
{
  "id": "kokosmakronen-sally",
  "title": "Kokosmakronen\n& Kokosbusserl",
  "category": "Plätzchen · nach Sallys Welt",
  "description": "Unser erstes Beispielrezept für die Weihnachtsbäckerei. Die Zubereitung ist kurz in eigenen Worten zusammengefasst; das Original findest du über den Quellenlink.",
  "image": "assets/kokosmakronen.svg",
  "imageAlt": "Illustration von goldgelben Kokosmakronen auf einem grünen Teller",
  "imageCaption": "Eigene Illustration · kein Foto des Originalrezepts",
  "servings": "ca. 80 Stück",
  "ingredientsNote": "Oblaten mit 40 mm Durchmesser",
  "ingredients": [
    {
      "amount": "3",
      "name": "Eiweiß"
    },
    {
      "amount": "1 Prise",
      "name": "Salz"
    },
    {
      "amount": "150 g",
      "name": "Zucker"
    },
    {
      "amount": "4 Tropfen",
      "name": "Bittermandelaroma"
    },
    {
      "amount": "200 g",
      "name": "Kokosraspeln"
    },
    {
      "amount": "80",
      "name": "Oblaten (40 mm)"
    }
  ],
  "meta": [
    "15 Min. Zubereitung",
    "15–18 Min. Backzeit",
    "150 °C Heißluft"
  ],
  "steps": [
    {
      "title": "Ofen & Blech vorbereiten",
      "text": "Den Backofen auf 150 °C Heißluft aufheizen. Ein Blech mit Backfolie auslegen."
    },
    {
      "title": "Die Kokosmasse rühren",
      "text": "Eiweiß und Salz zu festem Schnee aufschlagen. Den Zucker nach und nach zugeben und 6–8 Minuten weiterschlagen, bis keine Zuckerkristalle mehr spürbar sind. Aroma und Kokosraspeln kurz untermischen."
    },
    {
      "title": "Portionieren & backen",
      "text": "Mit einem kleinen Eisportionierer Häufchen auf die Oblaten setzen und auf dem Blech verteilen. 15–18 Minuten backen; die Oberfläche soll hell bleiben."
    },
    {
      "title": "Abkühlen lassen",
      "text": "Die Makronen erst ganz auskühlen lassen und anschließend in einer gut schließenden Keksdose aufbewahren."
    }
  ],
  "tip": "Die Backzeit gilt je Blech. Vor dem Verpacken vollständig auskühlen lassen.",
  "source": {
    "label": "Sallys Welt · Kokosmakronen / Kokosbusserl",
    "url": "https://sallys-blog.de/rezepte/kokosmakronen-kokosbusserl"
  }
},
{
  "id": "rumkugeln-sally",
  "title": "Rumkugeln aus\nKuchenresten",
  "category": "Pralinen · nach Sallys Welt",
  "description": "Kleine Pralinen für übrig gebliebenen Kuchen. Mit Haselnüssen und Kakao, nach Sallys Welt – hier in eigenen Worten zusammengefasst.",
  "image": "assets/rumkugeln.svg",
  "imageAlt": "Eigene Illustration von kakaobestäubten Rumkugeln in Papierförmchen auf einem Teller",
  "imageCaption": "Eigene Illustration · kein Foto des Originalrezepts",
  "servings": "1 Rezeptmenge",
  "ingredientsNote": "Die Stückzahl hängt von der Kugelgröße ab.",
  "ingredients": [
    {
      "amount": "50 g",
      "name": "Haselnüsse, gehackt"
    },
    {
      "amount": "500 g",
      "name": "Kuchenreste"
    },
    {
      "amount": "100 g",
      "name": "Skyr"
    },
    {
      "amount": "100 g",
      "name": "Frischkäse"
    },
    {
      "amount": "50 g",
      "name": "Brauner Rum"
    },
    {
      "amount": "1 TL",
      "name": "Vanilleextrakt"
    },
    {
      "amount": "4 EL",
      "name": "Kakao zum Wälzen"
    }
  ],
  "meta": [
    "20 Min. Zubereitung",
    "Ohne Backen",
    "Kühl aufbewahren"
  ],
  "steps": [
    {
      "title": "Haselnüsse anrösten",
      "text": "Die gehackten Nüsse ohne zusätzliches Fett in einer beschichteten Pfanne leicht bräunen, bis sie duften."
    },
    {
      "title": "Die Masse mischen",
      "text": "Den Kuchen fein zerkrümeln. Mit Nüssen, Skyr, Frischkäse, Rum und Vanille zu einer einheitlichen Masse vermengen."
    },
    {
      "title": "Kugeln formen",
      "text": "Mit einem kleinen Portionierer gleichmäßige Mengen abnehmen, rund formen und im Kakao wenden."
    },
    {
      "title": "Kalt stellen",
      "text": "In einen dicht schließenden Behälter legen und bis zum Servieren im Kühlschrank aufbewahren."
    }
  ],
  "tip": "Enthält Alkohol. Für eine Variante ohne Alkohol verweist Sally im Originalrezept auf einen alkoholfreien Ersatz.",
  "source": {
    "label": "Sallys Welt · Rumkugeln / Pralinen aus Kuchenresten",
    "url": "https://sallys-blog.de/rezepte/rumkugeln-pralinen-aus-kuchenresten"
  }
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
