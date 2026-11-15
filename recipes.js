/* Kapitelreihenfolge und Rezeptdaten. IDs dauerhaft beibehalten. */
window.CHAPTERS = [
  {
    "id": "plaetzchen",
    "title": "Plätzchen",
    "description": "Kleine Lieblingsstücke für die Keksdose und den Weihnachtsteller."
  },
  {
    "id": "salate",
    "title": "Salate",
    "description": "Frische Schichten, cremige Soßen und Lieblingssalate zum Teilen."
  },
  {
    "id": "herzhaft",
    "title": "Herzhaft",
    "description": "Sättigende Lieblingsgerichte und gemeinsame Essen – vom Teig bis zur Füllung."
  }
];
window.RECIPES = [
  {
    "id": "kokosmakronen-sally",
    "title": "Kokosmakronen\n& Kokosbusserl",
    "category": "Plätzchen",
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
    },
    "chapter": "plaetzchen"
  },
  {
    "id": "aperol-spritz-plaetzchen",
    "title": "Aperol-Spritz-Plätzchen",
    "category": "Plätzchen",
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
    },
    "chapter": "plaetzchen"
  },
  {
    "id": "zitronenkekse-lemon-curd",
    "title": "Zitronenkekse\nmit Lemon Curd",
    "category": "Plätzchen",
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
    },
    "chapter": "plaetzchen"
  },
  {
    "id": "vanillekipferl-sally",
    "title": "Vanillekipferl",
    "category": "Plätzchen",
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
    },
    "chapter": "plaetzchen"
  },
  {
    "id": "kaffeetaler-sally",
    "title": "Kaffeetaler",
    "category": "Plätzchen",
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
    },
    "chapter": "plaetzchen"
  },
  {
    "id": "nuernberger-lebkuchen-sally",
    "title": "Nürnberger\nLebkuchen",
    "category": "Plätzchen",
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
    },
    "chapter": "plaetzchen"
  },
  {
    "id": "zimtsterne-sally",
    "title": "Zimtsterne",
    "category": "Plätzchen",
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
    },
    "chapter": "plaetzchen"
  },
  {
    "id": "schokoladenschnitten",
    "title": "Schokoladenschnitten",
    "category": "Plätzchen",
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
    },
    "chapter": "plaetzchen"
  },
  {
    "id": "schichtsalat-thunfischsosse",
    "title": "Schichtsalat mit\nThunfischsoße",
    "chapter": "salate",
    "category": "Salate",
    "description": "Salat, Tomaten, Schinken, Gurke und Ei in Schichten, dazu eine cremige Thunfischsoße. Nach deiner fotografierten Rezeptseite.",
    "image": "assets/schichtsalat.svg",
    "imageAlt": "Eigene Illustration einer Glasschüssel mit geschichtetem Salat, Gemüse, Schinken, Ei und heller Soße",
    "imageCaption": "Eigene Illustration · kein Foto des Originalrezepts",
    "servings": "4 Personen",
    "ingredientsNote": "Zutaten für Salat und Soße getrennt bereitstellen.",
    "ingredients": [
      {
        "group": "Salat",
        "amount": "1 kleiner",
        "name": "Eisbergsalat"
      },
      {
        "group": "Salat",
        "amount": "5",
        "name": "Tomaten"
      },
      {
        "group": "Salat",
        "amount": "300 g",
        "name": "Gekochter Schinken"
      },
      {
        "group": "Salat",
        "amount": "1",
        "name": "Mini-Salatgurke"
      },
      {
        "group": "Salat",
        "amount": "4",
        "name": "Eier"
      },
      {
        "group": "Salat",
        "amount": "1 Bund",
        "name": "Frühlingszwiebeln"
      },
      {
        "group": "Thunfischsoße",
        "amount": "150 g",
        "name": "Thunfisch natur (Dose)"
      },
      {
        "group": "Thunfischsoße",
        "amount": "2",
        "name": "Knoblauchzehen"
      },
      {
        "group": "Thunfischsoße",
        "amount": "1 Zitrone",
        "name": "Saft"
      },
      {
        "group": "Thunfischsoße",
        "amount": "375 ml",
        "name": "Mayonnaise"
      },
      {
        "group": "Thunfischsoße",
        "amount": "200 g",
        "name": "Joghurt"
      },
      {
        "group": "Thunfischsoße",
        "amount": "150 g",
        "name": "Crème fraîche"
      },
      {
        "group": "Thunfischsoße",
        "amount": "Nach Geschmack",
        "name": "Salz und Pfeffer"
      }
    ],
    "meta": [
      "10 Min. Eier kochen",
      "Gekühlt durchziehen lassen"
    ],
    "steps": [
      {
        "title": "Salat & Gemüse vorbereiten",
        "text": "Eisbergsalat vierteln, den Strunk entfernen, putzen, waschen und trocken schleudern. In feine Streifen schneiden. Tomaten waschen, halbieren und fein würfeln. Gurke waschen und würfeln; Frühlingszwiebeln putzen, waschen und in feine Ringe schneiden."
      },
      {
        "title": "Schinken & Eier würfeln",
        "text": "Schinken würfeln. Eier in etwa 10 Minuten hart kochen, pellen und würfeln."
      },
      {
        "title": "In die Schüssel schichten",
        "text": "Eisbergsalat, Tomaten, Schinken, Gurke, Eier und Frühlingszwiebeln in dieser Reihenfolge in eine große Glasschüssel schichten."
      },
      {
        "title": "Thunfischsoße zubereiten",
        "text": "Thunfisch abtropfen lassen. Knoblauch schälen und fein hacken. Beides mit Zitronensaft fein pürieren. Mit Mayonnaise, Joghurt und Crème fraîche verrühren; mit Salz und Pfeffer abschmecken."
      },
      {
        "title": "Kalt stellen",
        "text": "Die Soße über den Schichtsalat geben und gekühlt gut durchziehen lassen. Eine genaue Dauer nennt die Vorlage nicht."
      }
    ],
    "tip": "Am rechten Bildrand sind einige Wortenden der Vorbereitung und Soßenzubereitung abgeschnitten; diese Handgriffe wurden sinngemäß vervollständigt.",
    "source": {
      "label": "Fotografierte Rezeptseite · Schichtsalat mit Thunfischsoße",
      "note": "Vom Nutzer bereitgestellt; Buch und Verfasser sind nicht erkennbar. Die Zutatenmengen wurden aus dem Foto übertragen, ohne erfundenen Quellenlink."
    }
  },
  {
    "id": "tortilla-teig",
    "title": "Tortilla-Teig",
    "chapter": "herzhaft",
    "category": "Herzhaft",
    "menu": "Mexican Diner",
    "description": "Ein flüssiger Tortilla-Teig wie ein Crêpe-Teig aus Weizen- und Maismehl. Grundrezept für unseren Mexican Diner nach der fotografierten Vorlage.",
    "image": "assets/tortilla-teig.svg",
    "imageAlt": "Eigene Illustration eines Stapels dünner goldgelber Tortillas",
    "imageCaption": "Eigene Illustration · kein Originalfoto",
    "servings": "6 Personen",
    "ingredientsNote": "Maismehl verwenden, nicht Maisstärke. Die Vorlage nennt 10 g Salz.",
    "ingredients": [
      {
        "amount": "125 g",
        "name": "Weizenmehl"
      },
      {
        "amount": "125 g",
        "name": "Maismehl"
      },
      {
        "amount": "10 g",
        "name": "Salz"
      },
      {
        "amount": "3 EL",
        "name": "Olivenöl"
      },
      {
        "amount": "350 ml",
        "name": "Wasser"
      }
    ],
    "meta": [
      "15 Min. Zubereitung",
      "1 Std. Ruhezeit im Kühlschrank",
      "Je Seite ca. 1 Min. 30 Sek."
    ],
    "steps": [
      {
        "title": "Teig glatt rühren",
        "text": "Alle Zutaten mit einem elektrischen Rührgerät, Mixer oder Schneebesen zu einem glatten, gleichmäßigen Teig wie für Crêpes verrühren. Es sollen keine Klümpchen bleiben."
      },
      {
        "title": "Eine Stunde ruhen lassen",
        "text": "Den Teig in eine Schüssel geben und 1 Stunde im Kühlschrank ruhen lassen."
      },
      {
        "title": "Tortillas ausbacken",
        "text": "Je Tortilla 2 EL Teig abmessen und auf die Kochplatte geben. Von jeder Seite etwa 1 Minute 30 Sekunden backen. Mit dem übrigen Teig ebenso verfahren. Eine Temperaturangabe nennt der abgebildete Abschnitt nicht."
      }
    ],
    "tip": "Das ist ein flüssiger Teig zum Ausbacken, kein Teig zum Ausrollen. Die Vorlage beschreibt die Zubereitung auf einer Kochplatte.",
    "relatedRecipeIds": [
      "rindfleisch-tortillas"
    ],
    "source": {
      "label": "Fotografierte Rezeptseite · Tortilla-Teig, Seite 21",
      "note": "Vom Nutzer bereitgestellt; Buch und Verfasser nicht erkennbar. Mengen und Angaben zur Kochplatte aus dem Foto übertragen."
    }
  },
  {
    "id": "rindfleisch-tortillas",
    "title": "Rindfleisch-\nTortillas",
    "chapter": "herzhaft",
    "category": "Herzhaft",
    "menu": "Mexican Diner",
    "description": "Tortillas mit Rinderfilet, roten Bohnen, Salat, Tomate und Gouda. Zusammen mit dem Tortilla-Grundteig als Mexican Diner servieren.",
    "image": "assets/rindfleisch-tortillas.svg",
    "imageAlt": "Eigene Illustration gefüllter Tortillas mit Rindfleisch, Salat, Tomaten und geriebenem Käse",
    "imageCaption": "Eigene Illustration · kein Originalfoto",
    "servings": "6 Personen",
    "ingredientsNote": "Tomatensauce und Tortilla-Teig werden in der Vorlage separat referenziert. Der Teig ist unten verlinkt; das Saucenrezept ist nicht abgebildet.",
    "ingredients": [
      {
        "group": "Füllung",
        "amount": "250 g",
        "name": "Rinderfilet"
      },
      {
        "group": "Füllung",
        "amount": "25 cl (250 ml)",
        "name": "Fleischbouillon"
      },
      {
        "group": "Füllung",
        "amount": "1 Dose (225 g)",
        "name": "Pürierte rote Bohnen (Frijoles refritos)"
      },
      {
        "group": "Füllung",
        "amount": "1 (ca. 200 g)",
        "name": "Fleischtomate"
      },
      {
        "group": "Füllung",
        "amount": "6",
        "name": "Salatblätter, z. B. Kopf-, Romanasalat oder Eisbergsalat"
      },
      {
        "group": "Füllung",
        "amount": "80 g",
        "name": "Mittelalter Gouda"
      },
      {
        "group": "Füllung",
        "amount": "Nach Geschmack",
        "name": "Salz"
      },
      {
        "group": "Zum Füllen & Servieren",
        "amount": "1 Rezeptmenge",
        "name": "Tortilla-Teig für 6 Personen (unten verlinkt)"
      },
      {
        "group": "Zum Füllen & Servieren",
        "amount": "Nach Bedarf",
        "name": "Tomatensauce (separates Rezept fehlt im Foto)"
      },
      {
        "group": "Zum Füllen & Servieren",
        "amount": "Nach Belieben",
        "name": "Guacamole oder feine Avocadostreifen"
      },
      {
        "group": "Bohnenpüree · Alternative zum fertigen Püree",
        "amount": "1 Dose (225 g Abtropfgewicht)",
        "name": "Rote Bohnen, statt des fertigen Bohnenpürees"
      },
      {
        "group": "Bohnenpüree · Alternative zum fertigen Püree",
        "amount": "1 kleine",
        "name": "Zwiebel"
      },
      {
        "group": "Bohnenpüree · Alternative zum fertigen Püree",
        "amount": "2",
        "name": "Knoblauchzehen"
      },
      {
        "group": "Bohnenpüree · Alternative zum fertigen Püree",
        "amount": "Nach Geschmack",
        "name": "Salz und Chilipulver"
      }
    ],
    "meta": [
      "Ca. 30 Min. Fleisch garen",
      "Tortilla-Teig: 1 Std. Ruhezeit einplanen"
    ],
    "steps": [
      {
        "title": "Rindfleisch garen",
        "text": "Rinderfilet mit der Fleischbouillon in einen Topf geben, aufkochen und bei mittlerer Hitze zugedeckt etwa 30 Minuten garen. Herausnehmen, abkühlen lassen, in feine Scheiben schneiden und salzen."
      },
      {
        "title": "Gemüse & Käse vorbereiten",
        "text": "Salatblätter waschen, putzen und klein schneiden. Die Tomate blanchieren, häuten, entkernen und fein würfeln. Gouda reiben. Füllungszutaten, Tomatensauce und Bohnenpüree in Schüsseln bereitstellen."
      },
      {
        "title": "Optional: Bohnenpüree selbst machen",
        "text": "Nur wenn kein fertiges Püree verwendet wird: Bohnen abgießen, dabei die Hälfte der Dosenflüssigkeit auffangen. Bohnen mit dieser Flüssigkeit pürieren. Zwiebel schälen, hacken und glasig dünsten. Knoblauch schälen und hacken. Mit dem Püree zur Zwiebel geben, bei kleiner Hitze etwa 5 Minuten köcheln und mit Salz und Chilipulver abschmecken. Ein Fett und dessen Menge zum Dünsten sind im Foto nicht genannt."
      },
      {
        "title": "Tortillas füllen",
        "text": "Tortillas nach dem verlinkten Grundrezept backen. Eine Seite mit Bohnenpüree bestreichen. Etwas Fleisch, Salat und Tomaten darauf verteilen, mit Tomatensauce beträufeln und Käse darüberstreuen. Der Lichtreflex verdeckt im Foto einzelne Wortteile dieses Schritts; sie wurden sinngemäß ergänzt."
      },
      {
        "title": "Falten & servieren",
        "text": "Tortillas zweimal falten oder aufrollen und mit den Fingern essen. Dazu Guacamole oder feine Avocadostreifen reichen."
      }
    ],
    "tip": "Gouda kann laut Vorlage durch Cheddar ersetzt werden. Das Rezept für die Tomatensauce fehlt auf dem Foto; dafür wurde keine Anleitung erfunden.",
    "relatedRecipeIds": [
      "tortilla-teig"
    ],
    "source": {
      "label": "Fotografierte Rezeptseite · Seite 21",
      "note": "Vom Nutzer bereitgestellt. Buch und Verfasser nicht erkennbar; die Tomatensauce wird auf der Vorlage separat referenziert und ist nicht abgebildet."
    }
  },
  {
    "id": "sushi-bowl-lachs-garnelen",
    "title": "Sushi-Bowl mit\nLachs & Garnelen",
    "chapter": "herzhaft",
    "category": "Herzhaft",
    "description": "Sushi-Reis mit Räucherlachs, gebratenen Garnelen, Gurke und Avocado. Dazu Sriracha-Mayonnaise, Nori und Sesam.",
    "image": "assets/sushi-bowl.svg",
    "imageAlt": "Eigene Illustration einer Bowl mit Reis, Lachs, Garnelen, Gurke und Avocado",
    "imageCaption": "Eigene Illustration · kein Foto des fertigen Gerichts",
    "servings": "5 Personen",
    "ingredientsNote": "Die Wassermenge richtet sich laut Vorlage nach dem Volumen des Reises, nicht nach dessen Gewicht.",
    "ingredients": [
      {
        "group": "Reis",
        "amount": "400 g",
        "name": "Sushi-Reis"
      },
      {
        "group": "Reis",
        "amount": "Gleiches Volumen wie der Reis",
        "name": "Kaltes Wasser"
      },
      {
        "group": "Reis",
        "amount": "2 EL",
        "name": "Reisessig"
      },
      {
        "group": "Belag",
        "amount": "200 g",
        "name": "Räucherlachs"
      },
      {
        "group": "Belag",
        "amount": "Ca. 30",
        "name": "Garnelen (6 pro Person)"
      },
      {
        "group": "Belag",
        "amount": "2",
        "name": "Gurken"
      },
      {
        "group": "Belag",
        "amount": "2",
        "name": "Avocados"
      },
      {
        "group": "Belag",
        "amount": "Nach Bedarf",
        "name": "Noriblätter"
      },
      {
        "group": "Sauce & Abschluss",
        "amount": "Ca. 4 EL",
        "name": "Mayonnaise"
      },
      {
        "group": "Sauce & Abschluss",
        "amount": "Nach Geschmack",
        "name": "Sriracha-Sauce"
      },
      {
        "group": "Sauce & Abschluss",
        "amount": "Nach Geschmack",
        "name": "Sojasauce"
      },
      {
        "group": "Sauce & Abschluss",
        "amount": "Zum Bestreuen",
        "name": "Sesam"
      }
    ],
    "meta": [
      "15 Min. Reis köcheln",
      "10 Min. Reis ruhen lassen"
    ],
    "steps": [
      {
        "title": "Reis kochen",
        "text": "Sushi-Reis gründlich waschen. Mit dem gleichen Volumen kaltem Wasser und dem Reisessig aufkochen. 15 Minuten köcheln lassen und anschließend 10 Minuten ruhen lassen."
      },
      {
        "title": "Garnelen braten",
        "text": "Garnelen in einer Pfanne anbraten und durchgaren."
      },
      {
        "title": "Gemüse vorbereiten",
        "text": "Gurken und Avocados klein schneiden. Noriblätter in Stücke schneiden."
      },
      {
        "title": "Sauce anrühren",
        "text": "Mayonnaise mit Sriracha-Sauce nach Geschmack vermengen."
      },
      {
        "title": "Bowls anrichten",
        "text": "Reis auf die Schalen verteilen und mit etwas Sojasauce abschmecken. Gurke, Avocado, Garnelen und Räucherlachs darauf anrichten. Nori darübergeben, mit der Sriracha-Mayonnaise beträufeln und mit Sesam bestreuen."
      }
    ],
    "tip": "Die Schärfe der Sriracha-Mayonnaise lässt sich beim Anrühren nach Geschmack dosieren.",
    "source": {
      "label": "Eigenes Rezept aus einer E-Mail",
      "note": "Aus der vom Nutzer ausgewählten Rezeptmail übertragen."
    }
  },
  {
    "id": "avocado-bacon-egg-burger",
    "title": "Avocado-Bacon-\nEgg-Burger",
    "chapter": "herzhaft",
    "category": "Herzhaft",
    "description": "Burger mit Rindfleisch, knusprigem Bacon, Spiegelei und Avocado. Dazu eine cremige Limetten-Aioli, nach Wunsch mit Chipotle.",
    "image": "assets/avocado-bacon-egg-burger.svg",
    "imageAlt": "Eigene Illustration eines Burgers mit Rindfleisch, Käse, Bacon, Spiegelei und Avocadoscheiben",
    "imageCaption": "Eigene Illustration · kein Foto des fertigen Gerichts",
    "servings": "3 Personen",
    "ingredientsNote": "Für drei Burger. Limettensaft für die Sauce abmessen und etwas zum Beträufeln der Avocado bereithalten.",
    "ingredients": [
      {
        "group": "Burger",
        "amount": "3",
        "name": "Burger-Buns (Brioche oder Sesam)"
      },
      {
        "group": "Burger",
        "amount": "3 à ca. 150 g",
        "name": "Rindfleisch-Patties"
      },
      {
        "group": "Burger",
        "amount": "3 Scheiben",
        "name": "Cheddar oder Monterey Jack"
      },
      {
        "group": "Burger",
        "amount": "6 Scheiben",
        "name": "Bacon"
      },
      {
        "group": "Burger",
        "amount": "3",
        "name": "Eier"
      },
      {
        "group": "Burger",
        "amount": "1 große oder 1½ kleine",
        "name": "Avocado"
      },
      {
        "group": "Burger",
        "amount": "3–4 Blätter",
        "name": "Römersalat oder etwas Rucola"
      },
      {
        "group": "Burger",
        "amount": "1–2",
        "name": "Tomaten, in Scheiben"
      },
      {
        "group": "Burger",
        "amount": "Nach Bedarf",
        "name": "Salz, Pfeffer sowie Öl oder Butter zum Braten"
      },
      {
        "group": "Limetten-Aioli / Chipotle-Mayo",
        "amount": "4½ EL",
        "name": "Mayonnaise"
      },
      {
        "group": "Limetten-Aioli / Chipotle-Mayo",
        "amount": "1½ TL, plus etwas für die Avocado",
        "name": "Limettensaft"
      },
      {
        "group": "Limetten-Aioli / Chipotle-Mayo",
        "amount": "¾ TL oder 1 kleine Zehe",
        "name": "Knoblauchpaste oder fein gehackter Knoblauch"
      },
      {
        "group": "Limetten-Aioli / Chipotle-Mayo",
        "amount": "¾ TL, optional",
        "name": "Chipotle-Chili oder Paprikapulver"
      },
      {
        "group": "Limetten-Aioli / Chipotle-Mayo",
        "amount": "Nach Geschmack",
        "name": "Salz und Pfeffer"
      }
    ],
    "meta": [
      "3 Burger",
      "Patties: ca. 3–4 Min. je Seite"
    ],
    "steps": [
      {
        "title": "Sauce anrühren",
        "text": "Mayonnaise, 1½ TL Limettensaft, Knoblauch und Gewürze verrühren und abschmecken. Chipotle-Chili oder Paprikapulver nach Wunsch zugeben."
      },
      {
        "title": "Bacon knusprig braten",
        "text": "Bacon in einer Pfanne ohne zusätzliches Fett bei mittlerer Hitze knusprig braten. Auf Küchenpapier abtropfen lassen."
      },
      {
        "title": "Patties mit Käse braten",
        "text": "Etwas Öl in einer Pfanne erhitzen und die Patties braten. Die Vorlage nennt etwa 3–4 Minuten je Seite; je nach Dicke weiterbraten, bis das Hackfleisch vollständig durchgegart ist. In der letzten Minute Käse auflegen und schmelzen lassen."
      },
      {
        "title": "Spiegeleier braten",
        "text": "Die Eier in derselben oder einer separaten Pfanne als Spiegeleier braten und mit Salz und Pfeffer würzen."
      },
      {
        "title": "Avocado & Gemüse vorbereiten",
        "text": "Avocado halbieren, entkernen und in Scheiben schneiden. Mit etwas zusätzlichem Limettensaft beträufeln. Salat und Tomatenscheiben bereitlegen."
      },
      {
        "title": "Buns rösten",
        "text": "Burger-Buns halbieren und die Schnittflächen kurz in der Pfanne oder im Ofen rösten."
      },
      {
        "title": "Burger schichten",
        "text": "Die unteren Bun-Hälften mit Sauce bestreichen. Salat, Patty mit Käse, Bacon, Spiegelei, Avocado und Tomate darauf schichten. Die oberen Bun-Hälften ebenfalls mit Sauce bestreichen und aufsetzen."
      }
    ],
    "tip": "Für eine milde Sauce die optionale Chipotle-Chili weglassen oder Paprikapulver verwenden.",
    "source": {
      "label": "Eigenes Rezept aus einer E-Mail",
      "note": "Aus der vom Nutzer ausgewählten Rezeptmail übertragen."
    }
  }
];
