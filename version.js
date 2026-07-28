/* Versions- und Aktualitätsinformationen.
   Wird von stamp-version.sh vor jedem Commit automatisch aktualisiert. */

window.APP_META = {
  version: "1.7.0",
  built: "2026-07-28",
  contentReviewed: "2026-07-28",
  sources: "Offizielle Microsoft Study Guides (22. Juli 2026) + Lernpfade auf Microsoft Learn",
  changelog: [
    {
      v: "1.7.0", d: "2026-07-28",
      t: "Prüfung auf Fehler und Ratbarkeit",
      items: [
        "Prüfungssimulation: vorzeitig beendete Durchläufe zählen offene Fragen als null und gelten nicht als Versuch",
        "Mehrfachantworten: nicht mehr Optionen wählbar als gefragt",
        "Prüfungsreife erreicht jetzt tatsächlich 1000 Punkte",
        "Wiederholung: gut beherrschte Fragen kommen nach 35 Tagen erneut, statt dauerhaft zu verschwinden",
        "Importierte Daten werden streng geprüft; beschädigte Codes legen die App nicht mehr lahm",
        "Fragen überarbeitet: keine durch Formulierungsmuster ratbaren Antworten mehr, mehr Praxisszenarien"
      ]
    },
    {
      v: "1.6.0", d: "2026-07-28",
      t: "Anleitung, ruhigere Startseite, zuverlässige Updates",
      items: [
        "Neue Seite „Erste Schritte“ erklärt Einstieg, alle Modi, Bewertung und Lernplan",
        "Startseite aufgeräumt: Prüfungsformat, Lernpfad, Version und Datenschutz sind jetzt aufklappbar",
        "Fehlerbehebung: Die Update-Prüfung übersah neue Versionen, weil der Browser eine ältere Kopie verwendete",
        "Neuer Schalter „Neu laden erzwingen“ für den Notfall",
        "One-Pager: Strandszene mit Meer, Wegweiser und Kokosnuss"
      ]
    },
    {
      v: "1.5.0", d: "2026-07-28",
      t: "Datenschutzhinweis, responsives Layout und One-Pager",
      items: [
        "Eigener Datenschutzabschnitt direkt in der App statt nur im Projekt-README",
        "Auf großen Bildschirmen zweispaltige Startseite, auf dem Handy unverändert einspaltig",
        "One-Pager als HTML-Seite: Folie im Querformat, auf dem Handy ein Dokument",
        "Fehlerbehebung: der Update-Hinweis ließ sich nicht antippen",
        "Kürzerer Link: tinyurl.com/msaicert"
      ]
    },
    {
      v: "1.4.0", d: "2026-07-28",
      t: "Neues Erscheinungsbild",
      items: [
        "Flaches, fluides Design mit weichen Formen, mehr Luft und ruhigeren Flächen",
        "Typografie und Abstände skalieren stufenlos mit der Bildschirmbreite",
        "Übersehene richtige Antworten werden jetzt eigens gekennzeichnet",
        "Kurzbeschreibung der gewählten Zertifizierung auf der Startseite"
      ]
    },
    {
      v: "1.3.0", d: "2026-07-28",
      t: "Fortschritt exportieren und importieren",
      items: [
        "Fortschritt lässt sich als Code oder Datei sichern und auf einem anderen Gerät einlesen",
        "Beim Import wahlweise ersetzen oder mit dem vorhandenen Stand zusammenführen",
        "Fehlerbehebung: Nach dem Zurücksetzen wurde neuer Fortschritt nicht mehr gespeichert"
      ]
    },
    {
      v: "1.2.0", d: "2026-07-28",
      t: "Anti-Bias-Überarbeitung und prüfungsgetreue Bewertung",
      items: [
        "Antwortoptionen werden pro Anzeige neu gemischt — die Position der richtigen Antwort ist nicht mehr lernbar",
        "Rund 45 Fragen überarbeitet: Distraktoren sind jetzt plausible Denkfehler statt kurzer Abwehrsätze",
        "Mehrfachantworten werden mit Teilpunkten bewertet, wie in der echten Prüfung",
        "Hinweis „Jede korrekte Auswahl zählt einen Punkt“ und Punkteanzeige im Ergebnis"
      ]
    },
    {
      v: "1.1.0", d: "2026-07-28",
      t: "Fragen gegen die offiziellen Lernpfade geschärft",
      items: [
        "192 Fragen (vorher 145) — verifizierte Feature-Limits und Produktdetails ergänzt",
        "Terminologie 2026: Microsoft Foundry und Foundry Tools durchgängig",
        "Prüfungsformat-Panel und Lernpfad-Links je Zertifizierung",
        "Wiederholungs-Modus: Fälligkeitsberechnung korrigiert"
      ]
    },
    {
      v: "1.0.0", d: "2026-07-27",
      t: "Erste Version",
      items: [
        "145 Fragen zu AB-730 und AB-731 nach offiziellem Study Guide",
        "Quick Drill, Prüfungssimulation, Domain-Training, Spaced Repetition, Lernkarten",
        "XP, Level, Serien, Abzeichen und Prüfungsreife-Score",
        "Offline-fähig als PWA für den iPhone-Homescreen"
      ]
    }
  ]
};
