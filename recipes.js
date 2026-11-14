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
    tip: 'Kokosmakronen nach Sallys Welt. Blättere weiter und entdecke das Rezept mit Zutaten, Backzeit und Quellenlink.'
  },
{
  "id": "kokosmakronen-sally",
  "title": "Kokosmakronen\n& Kokosbusserl",
  "category": "Plätzchen · nach Sallys Welt",
  "description": "Kokosgebäck für die Weihnachtsbäckerei. Die Zubereitung ist kurz in eigenen Worten zusammengefasst; das Original findest du über den Quellenlink.",
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
  "id": "aperol-spritz-plaetzchen",
  "title": "Aperol-Spritz-\nPlätzchen",
  "category": "Gefüllte Plätzchen · nach foodwerk.de",
  "description": "Orangen-Mürbeteig trifft auf Aperol-Ganache und orangefarbene Glasur. Übertragen aus deinen Screenshots des Beitrags von foodwerk.de.",
  "image": "assets/aperol-plaetzchen.svg",
  "imageAlt": "Eigene Illustration gefüllter runder Plätzchen mit halbseitiger orangefarbener Glasur",
  "imageCaption": "Eigene Illustration nach der Gebäckform im Screenshot",
  "servings": "ca. 25 gefüllte Plätzchen",
  "ingredientsNote": "Je zwei gebackene Kreise ergeben ein gefülltes Plätzchen.",
  "ingredients": [
    {
      "group": "Mürbeteig",
      "amount": "250 g",
      "name": "Mehl"
    },
    {
      "group": "Mürbeteig",
      "amount": "150 g",
      "name": "Butter, kalt"
    },
    {
      "group": "Mürbeteig",
      "amount": "80 g",
      "name": "Puderzucker"
    },
    {
      "group": "Mürbeteig",
      "amount": "1",
      "name": "Eigelb"
    },
    {
      "group": "Mürbeteig",
      "amount": "1 Bio-Orange",
      "name": "Abrieb"
    },
    {
      "group": "Mürbeteig",
      "amount": "1 Prise",
      "name": "Salz"
    },
    {
      "group": "Aperol-Ganache",
      "amount": "270 g",
      "name": "Weiße Kuvertüre"
    },
    {
      "group": "Aperol-Ganache",
      "amount": "50 g",
      "name": "Schlagsahne"
    },
    {
      "group": "Aperol-Ganache",
      "amount": "40 g",
      "name": "Aperol"
    },
    {
      "group": "Aperol-Glasur & Dekoration",
      "amount": "120 g",
      "name": "Puderzucker"
    },
    {
      "group": "Aperol-Glasur & Dekoration",
      "amount": "20–25 g",
      "name": "Aperol"
    },
    {
      "group": "Aperol-Glasur & Dekoration",
      "amount": "Etwas",
      "name": "Orangefarbene Lebensmittelfarbe (Gel)"
    },
    {
      "group": "Aperol-Glasur & Dekoration",
      "amount": "Nach Belieben",
      "name": "Abgeriebene Orangenschale zum Dekorieren"
    }
  ],
  "meta": [
    "175 °C Ober-/Unterhitze",
    "8–12 Min. Backzeit",
    "45 Min. Teigkühlung",
    "ca. 1 Std. Ganachekühlung"
  ],
  "steps": [
    {
      "title": "Mürbeteig herstellen",
      "text": "Mehl, kalte Butter, Puderzucker, Eigelb, Orangenabrieb und Salz zu einem glatten Teig verkneten. In Frischhaltefolie wickeln und etwa 45 Minuten kalt stellen."
    },
    {
      "title": "Ausrollen & ausstechen",
      "text": "Den Teig auf einer leicht bemehlten Arbeitsfläche ausrollen und Kreise ausstechen."
    },
    {
      "title": "Die Plätzchen backen",
      "text": "Die Kreise auf ein mit Backpapier belegtes Blech legen. Bei 175 °C Ober-/Unterhitze etwa 8–12 Minuten backen und danach vollständig auskühlen lassen."
    },
    {
      "title": "Ganache anrühren",
      "text": "Weiße Kuvertüre langsam über einem Wasserbad schmelzen. Die Schlagsahne in der Mikrowelle lauwarm erwärmen, zur Kuvertüre geben und gründlich verrühren."
    },
    {
      "title": "Aperol zugeben & kühlen",
      "text": "40 g Aperol unterrühren, bis die Ganache glatt ist. Etwa 1 Stunde im Kühlschrank fest werden lassen."
    },
    {
      "title": "Ganache cremig rühren",
      "text": "Die gekühlte Ganache nochmals rühren, bis sie cremig und spritzfähig ist. In einen Spritzbeutel füllen."
    },
    {
      "title": "Die Plätzchen füllen",
      "text": "Ganache auf die Hälfte der Plätzchen spritzen. Jeweils ein zweites Plätzchen auflegen und behutsam zusammendrücken."
    },
    {
      "title": "Glasur mischen",
      "text": "120 g Puderzucker mit 20–25 g Aperol glatt rühren und mit etwas orangefarbener Gel-Lebensmittelfarbe einfärben. Die Glasur soll dickflüssig sein; ist sie zu dünn, etwas Puderzucker ergänzen."
    },
    {
      "title": "Glasieren & dekorieren",
      "text": "Die gefüllten Plätzchen jeweils zur Hälfte in die Aperol-Glasur tauchen. Mit Orangenschale dekorieren und die Glasur trocknen lassen. Hinweis: Der letzte Satz ist im Screenshot abgeschnitten; dieser Abschluss ist sinngemäß ergänzt."
    }
  ],
  "tip": "Enthält Alkohol in der ungebackenen Füllung und Glasur. Die Kühlzeiten für Teig und Ganache sind getrennt angegeben; die Anleitung enthält keine feste Gesamtdauer.",
  "source": {
    "label": "foodwerk.de · Aperol Spritz Plätzchen (bereitgestellte Screenshots)",
    "note": "Aus drei Screenshots übertragen. Ein direkter Beitragslink liegt nicht vor; der abgeschnittene Abschluss ist am letzten Schritt gekennzeichnet."
  }
}
];
