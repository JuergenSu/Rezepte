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
},
{
  "id": "zitronenkekse-lemon-curd",
  "title": "Zitronenkekse\nmit Lemon Curd",
  "category": "Gefüllte Plätzchen · nach Sallys Welt",
  "description": "Zarter Mürbeteig mit Zitronenfüllung und weißer Schokolade. Nach Sallys Welt, in eigenen Worten zusammengefasst.",
  "image": "assets/zitronenkekse.svg",
  "imageAlt": "Eigene Illustration runder Doppelkekse mit gelber Lemon-Curd-Füllung und weißer Schokoladendekoration",
  "imageCaption": "Eigene Illustration · kein Originalfoto",
  "servings": "1 Rezeptmenge",
  "ingredientsNote": "Stückzahl abhängig vom Ausstecher. Fertiges Lemon Curd verwenden.",
  "ingredients": [
    {
      "group": "1-2-3-Mürbeteig",
      "amount": "100 g",
      "name": "Zucker"
    },
    {
      "group": "1-2-3-Mürbeteig",
      "amount": "200 g",
      "name": "Butter, kalt"
    },
    {
      "group": "1-2-3-Mürbeteig",
      "amount": "300 g",
      "name": "Mehl"
    },
    {
      "group": "1-2-3-Mürbeteig",
      "amount": "1 Prise",
      "name": "Salz"
    },
    {
      "group": "1-2-3-Mürbeteig",
      "amount": "1 TL",
      "name": "Vanilleextrakt"
    },
    {
      "group": "Füllung & Dekoration",
      "amount": "150 g",
      "name": "Lemon Curd"
    },
    {
      "group": "Füllung & Dekoration",
      "amount": "5 g",
      "name": "Süßer Schnee"
    },
    {
      "group": "Füllung & Dekoration",
      "amount": "30 g",
      "name": "Weiße Schokolade"
    }
  ],
  "meta": [
    "60 Min. Zubereitung",
    "10–15 Min. Backzeit",
    "180 °C Heißluft",
    "3 Std. Kühlzeit laut Übersicht"
  ],
  "steps": [
    {
      "title": "Teig kühlen",
      "text": "Teigzutaten kurz verkneten, abdecken und 1–2 Stunden oder über Nacht kalt stellen."
    },
    {
      "title": "Kreise ausstechen",
      "text": "Kurz durchkneten, auf wenig Mehl 5 mm dick ausrollen. Kreise ausstechen; die Hälfte zusätzlich lochen. Auf Backfolie legen. Weitere 30 Minuten kühlen, alternativ 15 Minuten einfrieren."
    },
    {
      "title": "Backen",
      "text": "Bei vorgeheizten 180 °C Heißluft 10–15 Minuten backen, bis die Ränder leicht bräunen. Gelochte Deckel brauchen 1–2 Minuten weniger. Alternativ blechweise bei 200 °C Ober-/Unterhitze backen. Abkühlen lassen."
    },
    {
      "title": "Füllen & verzieren",
      "text": "Lemon Curd lauwarm erwärmen, dünn auf Böden spritzen. Deckel aufsetzen und Löcher nachfüllen. Schokolade schmelzen, darüberträufeln und mit süßem Schnee bestreuen."
    }
  ],
  "tip": "Laut Sally in geschlossener Dose mit Backpapier zwischen den Schichten lagern und innerhalb etwa einer Woche verzehren.",
  "source": {
    "label": "Sallys Welt · Zitronenkekse mit Lemon Curd",
    "url": "https://sallys-blog.de/rezepte/zitronenkekse-mit-lemon-curd"
  }
},
{
  "id": "vanillekipferl-sally",
  "title": "Vanillekipferl",
  "category": "Plätzchen · nach Sallys Welt",
  "description": "Zarte Mandelhörnchen mit Vanille-Puderzucker. Nach Sallys Welt, in eigenen Worten zusammengefasst.",
  "image": "assets/vanillekipferl.svg",
  "imageAlt": "Eigene Illustration von mit Puderzucker bestäubten Vanillekipferln auf einem grünen Teller",
  "imageCaption": "Eigene Illustration · kein Originalfoto",
  "servings": "1 Rezeptmenge",
  "ingredientsNote": "Stückzahl abhängig von der Größe der Kipferl.",
  "ingredients": [
    {
      "group": "Teig",
      "amount": "125 g",
      "name": "Mehl"
    },
    {
      "group": "Teig",
      "amount": "100 g",
      "name": "Butter"
    },
    {
      "group": "Teig",
      "amount": "50 g",
      "name": "Mandeln, gemahlen"
    },
    {
      "group": "Teig",
      "amount": "40 g",
      "name": "Zucker"
    },
    {
      "group": "Teig",
      "amount": "1 Prise",
      "name": "Salz"
    },
    {
      "group": "Teig",
      "amount": "1 TL",
      "name": "Vanilleextrakt"
    },
    {
      "group": "Zum Bestreuen",
      "amount": "125 g",
      "name": "Puderzucker"
    },
    {
      "group": "Zum Bestreuen",
      "amount": "1",
      "name": "Vanilleschote"
    }
  ],
  "meta": [
    "45 Min. Zubereitung",
    "10–12 Min. Backzeit",
    "160 °C Heißluft",
    "2,5 Std. Kühlzeit laut Übersicht"
  ],
  "steps": [
    {
      "title": "Teig vorbereiten",
      "text": "Teigzutaten kurz verkneten, abdecken und mindestens 1–2 Stunden oder über Nacht kalt stellen."
    },
    {
      "title": "Kipferl formen",
      "text": "Kurz durchkneten, eine 4 cm dicke Rolle formen und 2 cm breite Stücke abschneiden. Zu Kugeln, dann zu 10–12 cm langen Strängen rollen. Die Mitte dicker lassen, die Spitzen nicht zu dünn formen. Zu Hörnchen biegen und mit Abstand auf ein Blech mit Backfolie legen."
    },
    {
      "title": "Kühlen & backen",
      "text": "Weitere 30 Minuten kühlen, alternativ 15 Minuten einfrieren. Bei vorgeheizten 160 °C Heißluft 10–12 Minuten leicht bräunen. Alternativ blechweise bei 180 °C Ober-/Unterhitze backen."
    },
    {
      "title": "Mit Vanille bestreuen",
      "text": "Vanilleschote längs öffnen, Mark auskratzen und mit Puderzucker vermischen. Die noch warmen Kipferl auf dem Blech großzügig damit bestäuben. Vollständig auskühlen lassen, vorsichtig abklopfen und luftdicht verpacken."
    }
  ],
  "tip": "Übrigen Vanille-Puderzucker für weitere Plätzchen aufheben.",
  "source": {
    "label": "Sallys Welt · Vanillekipferl",
    "url": "https://sallys-blog.de/rezepte/vanillekipferl"
  }
},
{
  "id": "kaffeetaler-sally",
  "title": "Kaffeetaler",
  "category": "Plätzchen · nach Sallys Welt",
  "description": "Kaffee-Mürbeteig mit zweifarbiger Espressoglasur und Mokkabohnen. Nach Sallys Welt, in eigenen Worten zusammengefasst.",
  "image": "assets/kaffeetaler.svg",
  "imageAlt": "Eigene Illustration runder Kaffeetaler mit heller Glasur, dunklen Streifen und Mokkabohnen",
  "imageCaption": "Eigene Illustration · kein Originalfoto",
  "servings": "20 Stück",
  "ingredientsNote": "Mengen aus Sallys Einzelrezept für Kaffeetaler.",
  "ingredients": [
    {
      "group": "1-2-3-Mürbeteig",
      "amount": "100 g",
      "name": "Zucker"
    },
    {
      "group": "1-2-3-Mürbeteig",
      "amount": "200 g",
      "name": "Butter"
    },
    {
      "group": "1-2-3-Mürbeteig",
      "amount": "300 g",
      "name": "Mehl"
    },
    {
      "group": "1-2-3-Mürbeteig",
      "amount": "1 Prise",
      "name": "Salz"
    },
    {
      "group": "1-2-3-Mürbeteig",
      "amount": "0,5 TL",
      "name": "Vanilleextrakt"
    },
    {
      "group": "1-2-3-Mürbeteig",
      "amount": "25 g",
      "name": "Pulverkaffee"
    },
    {
      "group": "1-2-3-Mürbeteig",
      "amount": "1 Prise",
      "name": "Tonkabohne, gerieben"
    },
    {
      "group": "Dekoration",
      "amount": "250 g",
      "name": "Puderzucker"
    },
    {
      "group": "Dekoration",
      "amount": "1",
      "name": "Espresso, nach Konsistenz dosieren"
    },
    {
      "group": "Dekoration",
      "amount": "1 TL",
      "name": "Kakao"
    },
    {
      "group": "Dekoration",
      "amount": "100 g",
      "name": "Mokkabohnen"
    }
  ],
  "meta": [
    "60 Min. Zubereitung",
    "8–12 Min. Backzeit",
    "180 °C Ober-/Unterhitze",
    "Mind. 1 Std. + 30 Min. Kühlung"
  ],
  "steps": [
    {
      "title": "Teig zubereiten",
      "text": "Zucker und Butter verrühren. Mehl, Salz, Vanille, Pulverkaffee und Tonka zugeben und zügig verkneten. Abgedeckt mindestens 1 Stunde kalt stellen."
    },
    {
      "title": "Ausstechen & kühlen",
      "text": "Kurz durchkneten, auf wenig Mehl 5 mm dick ausrollen und ausstechen. Auf Backfolie legen und weitere 30 Minuten kühlen."
    },
    {
      "title": "Backen",
      "text": "Im vorgeheizten Ofen bei 180 °C Ober-/Unterhitze 8–12 Minuten backen. Vollständig auskühlen lassen."
    },
    {
      "title": "Glasur anrühren",
      "text": "Puderzucker mit portionsweise zugegebenem Espresso dickflüssig anrühren. Ein Viertel der Glasur mit Kakao dunkel färben."
    },
    {
      "title": "Dekorieren",
      "text": "Helle Glasur aufstreichen. Dunkle Glasur aus einem Beutel mit abgeschnittener Spitze in Streifen darübergeben, nach Wunsch mit einem Zahnstocher Muster ziehen. Mokkabohnen auflegen und Glasur fest werden lassen."
    }
  ],
  "tip": "Espresso schrittweise einrühren, damit die Glasur nicht zu dünn wird.",
  "source": {
    "label": "Sallys Welt · Bunter Plätzchen-Teller / Kaffeetaler",
    "url": "https://sallys-blog.de/rezepte/kaffeetaler"
  }
},
{
  "id": "nuernberger-lebkuchen-sally",
  "title": "Nürnberger\nLebkuchen",
  "category": "Weihnachtsgebäck · nach Sallys Welt",
  "description": "Klassische Nusslebkuchen auf Oblaten, pur oder glasiert. Nach Sallys Welt, in eigenen Worten zusammengefasst.",
  "image": "assets/lebkuchen.svg",
  "imageAlt": "Eigene Illustration runder Lebkuchen mit Zitronenguss und dunkler Schokoladenglasur",
  "imageCaption": "Eigene Illustration · kein Originalfoto",
  "servings": "24 Stück",
  "ingredientsNote": "Oblaten mit 90 mm Durchmesser. Dekoration nach Wahl.",
  "ingredients": [
    {
      "group": "Lebkuchenmasse",
      "amount": "250 g",
      "name": "Mandeln"
    },
    {
      "group": "Lebkuchenmasse",
      "amount": "250 g",
      "name": "Haselnüsse"
    },
    {
      "group": "Lebkuchenmasse",
      "amount": "200 g",
      "name": "Orangeat"
    },
    {
      "group": "Lebkuchenmasse",
      "amount": "200 g",
      "name": "Zitronat"
    },
    {
      "group": "Lebkuchenmasse",
      "amount": "6",
      "name": "Eier"
    },
    {
      "group": "Lebkuchenmasse",
      "amount": "180 g",
      "name": "Brauner Zucker"
    },
    {
      "group": "Lebkuchenmasse",
      "amount": "40 g",
      "name": "Honig"
    },
    {
      "group": "Lebkuchenmasse",
      "amount": "1 TL",
      "name": "Zimt"
    },
    {
      "group": "Lebkuchenmasse",
      "amount": "0,25 TL",
      "name": "Muskatnuss, gerieben"
    },
    {
      "group": "Lebkuchenmasse",
      "amount": "0,25 TL",
      "name": "Salz"
    },
    {
      "group": "Lebkuchenmasse",
      "amount": "1 Prise",
      "name": "Kardamom"
    },
    {
      "group": "Lebkuchenmasse",
      "amount": "0,5 TL",
      "name": "Nelken, gemahlen"
    },
    {
      "group": "Lebkuchenmasse",
      "amount": "1 TL",
      "name": "Vanilleextrakt"
    },
    {
      "group": "Lebkuchenmasse",
      "amount": "20 g",
      "name": "Ingwer, frisch oder gemahlen"
    },
    {
      "group": "Lebkuchenmasse",
      "amount": "24",
      "name": "Oblaten (90 mm)"
    },
    {
      "group": "Zitronenguss · nach Wahl",
      "amount": "150 g",
      "name": "Puderzucker"
    },
    {
      "group": "Zitronenguss · nach Wahl",
      "amount": "3 EL",
      "name": "Zitronensaft"
    },
    {
      "group": "Schokoladenglasur · nach Wahl",
      "amount": "200 g",
      "name": "Zartbitterkuvertüre"
    }
  ],
  "meta": [
    "25 Min. Zubereitung",
    "20–25 Min. Backzeit",
    "150 °C Ober-/Unterhitze"
  ],
  "steps": [
    {
      "title": "Masse herstellen",
      "text": "Nüsse, Orangeat und Zitronat fein mahlen. Eier, Zucker und Honig 4–5 Minuten schaumig schlagen. Gemahlenes und die übrigen Massezutaten außer Oblaten kurz einrühren."
    },
    {
      "title": "Auf Oblaten setzen",
      "text": "Ofen auf 150 °C Ober-/Unterhitze vorheizen. Masse portionsweise auf Oblaten geben. Mit feuchten Fingern kuppelförmig glätten, dabei 0,5 cm Rand lassen. Auf Backfolie mit Abstand verteilen."
    },
    {
      "title": "Backen",
      "text": "20–25 Minuten hellbraun backen. Für Zitronenguss lauwarm, für Schokolade vollständig auf einem Gitter abkühlen lassen."
    },
    {
      "title": "Glasur wählen",
      "text": "Für Zitronenguss Puderzucker und Saft verrühren, lauwarme Lebkuchen bestreichen. Für Schokoglasur zwei Drittel der gehackten Kuvertüre über warmem Wasser schmelzen. Vom Wasserbad nehmen, Rest einrühren und abgekühlte Lebkuchen bestreichen. Fest werden lassen."
    }
  ],
  "tip": "Auch pur servierbar. Nach dem Auskühlen luftdicht verpacken.",
  "source": {
    "label": "Sallys Welt · Nürnberger Lebkuchen – klassisch",
    "url": "https://sallys-blog.de/rezepte/lebkuchen-rezept-nurnberger-lebkuchen-klassisch"
  }
},
{
  "id": "zimtsterne-sally",
  "title": "Zimtsterne",
  "category": "Plätzchen · nach Sallys Welt",
  "description": "Mandelsterne mit Zimt und weißem Eiweißguss. Nach Sallys Welt, in eigenen Worten zusammengefasst.",
  "image": "assets/zimtsterne.svg",
  "imageAlt": "Eigene Illustration von Zimtsternen mit weißem Guss auf einem grünen Teller",
  "imageCaption": "Eigene Illustration · kein Originalfoto",
  "servings": "25 Stück",
  "ingredientsNote": "Puderzucker zusätzlich für die Arbeitsfläche bereithalten.",
  "ingredients": [
    {
      "group": "Teig",
      "amount": "500 g",
      "name": "Mandeln, gemahlen"
    },
    {
      "group": "Teig",
      "amount": "300 g",
      "name": "Puderzucker"
    },
    {
      "group": "Teig",
      "amount": "2",
      "name": "Eiweiß"
    },
    {
      "group": "Teig",
      "amount": "2 TL",
      "name": "Zimt"
    },
    {
      "group": "Teig",
      "amount": "2 EL",
      "name": "Mandelsirup"
    },
    {
      "group": "Eiweißguss",
      "amount": "1",
      "name": "Eiweiß"
    },
    {
      "group": "Eiweißguss",
      "amount": "125 g",
      "name": "Puderzucker"
    }
  ],
  "meta": [
    "20 Min. Zubereitung",
    "20 Min. Ruhezeit",
    "10–15 Min. Backzeit",
    "150 °C Ober-/Unterhitze"
  ],
  "steps": [
    {
      "title": "Teig kneten",
      "text": "Mandeln und Puderzucker mischen. Übrige Teigzutaten kurz unterkneten und den festen Teig etwa 20 Minuten ruhen lassen."
    },
    {
      "title": "Guss aufschlagen",
      "text": "Das Eiweiß für den Guss steif schlagen. Puderzucker zugeben und etwa 2 Minuten weiter aufschlagen."
    },
    {
      "title": "Sterne ausstechen",
      "text": "Ofen auf 150 °C Ober-/Unterhitze vorheizen. Teig auf einer mit Puderzucker bestreuten Matte 1 cm dick ausrollen. Sterne ausstechen und auf ein Blech mit Backfolie legen."
    },
    {
      "title": "Bestreichen & backen",
      "text": "Sterne mit dem Guss bestreichen und 10–15 Minuten backen. Die Oberfläche soll hell bleiben. Vollständig auskühlen lassen und luftdicht verpacken."
    }
  ],
  "tip": "Laut Sally werden die Sterne nach einigen Tagen weicher.",
  "source": {
    "label": "Sallys Welt · Zimtsterne",
    "url": "https://sallys-blog.de/rezepte/zimtsterne"
  }
},
{
  "id": "schokoladenschnitten",
  "title": "Schokoladen-\nschnitten",
  "category": "Familienrezept · handschriftliche Vorlage",
  "description": "Schokoladenmasse zwischen großen Oblaten, nach deiner handschriftlichen Rezeptseite. Übertragen wurde die Grundmenge ohne die blassen Bleistift-Hochrechnungen.",
  "image": "assets/schokoladenschnitten.svg",
  "imageAlt": "Eigene Illustration rautenförmiger Schokoladenschnitten zwischen Oblaten mit bunten Streuseln",
  "imageCaption": "Eigene Illustration · nach handschriftlicher Vorlage",
  "servings": "1 Rezeptmenge",
  "ingredientsNote": "6 rechteckige Oblaten, etwa 12 × 20 cm. Stückzahl abhängig von der Schnittgröße.",
  "ingredients": [
    {
      "amount": "125 g",
      "name": "Blockschokolade"
    },
    {
      "amount": "125 g",
      "name": "Zucker"
    },
    {
      "amount": "1 Päckchen",
      "name": "Vanillinzucker"
    },
    {
      "amount": "3",
      "name": "Eigelb"
    },
    {
      "amount": "1",
      "name": "Ei"
    },
    {
      "amount": "125 g",
      "name": "Palmin (Pflanzenfett)"
    },
    {
      "amount": "6",
      "name": "Oblaten (ca. 12 × 20 cm)"
    },
    {
      "amount": "Nach Bedarf",
      "name": "Bunte Streusel zum Bestreuen"
    }
  ],
  "meta": [
    "Ca. 5 Min. Kochzeit",
    "Vollständig erkalten lassen"
  ],
  "steps": [
    {
      "title": "Schokolade schmelzen",
      "text": "Die Blockschokolade zerlaufen lassen."
    },
    {
      "title": "Masse verrühren",
      "text": "Schokolade, Zucker, Vanillinzucker, Eigelb und Ei gut verrühren. Das Pflanzenfett schmelzen und dazugeben."
    },
    {
      "title": "Vorsichtig kochen",
      "text": "Alles zusammen etwa 5 Minuten kochen lassen. Die Vorlage warnt ausdrücklich vor dem Anbrennen; die Masse dabei sorgfältig rühren."
    },
    {
      "title": "Oblaten bestreichen",
      "text": "Die Masse noch heiß auf die Oblaten streichen. Ober- und Unterseite mit bunten Streuseln bestreuen. Die Vorlage nennt keine genaue Schichtaufteilung; die Illustration zeigt eine mögliche Anordnung."
    },
    {
      "title": "In Rauten schneiden",
      "text": "Vollständig erkalten lassen und danach in Rauten schneiden."
    }
  ],
  "tip": "Lesart der Vorlage: jeweils 125 g Schokolade, Zucker und Palmin. Die blassen Zusatzmengen wurden als Hochrechnung verstanden und nicht übernommen.",
  "source": {
    "label": "Handschriftliche Rezeptseite · vom Nutzer bereitgestellt",
    "note": "Ohne bekannten Verfasser oder externen Link. Unklare Schichtaufteilung ist am Arbeitsschritt kenntlich gemacht."
  }
}
];
