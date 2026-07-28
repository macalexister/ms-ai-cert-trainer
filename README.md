# AI Cert Trainer — AB-730 & AB-731

**➡️ App öffnen: [tinyurl.com/aicert730](https://tinyurl.com/aicert730)**
(direkt: https://macalexister.github.io/ms-ai-cert-trainer/)

Gamifizierter Prüfungstrainer für zwei Microsoft-Zertifizierungen:

| Zertifizierung | Zielgruppe | Fragen |
|---|---|---|
| **AB-730** — AI Business Professional | Anwender von Microsoft 365 Copilot | 99 |
| **AB-731** — AI Transformation Leader | Entscheider, die KI-Einführung verantworten | 93 |

Beide Prüfungen dauern 45 Minuten, die Bestehensgrenze liegt bei 700 von 1000 Punkten.

---

## Auf dem iPhone installieren

1. **https://tinyurl.com/aicert730** in **Safari** öffnen
2. Teilen-Symbol → **Zum Home-Bildschirm**
3. Die App startet im Vollbild und funktioniert danach auch **offline**

Auf Android führt derselbe Weg über Chrome („Zum Startbildschirm hinzufügen"). Am Desktop läuft die App einfach im Browser.

---

## Die fünf Lernmodi

| Modus | Wofür |
|---|---|
| ⚡ **Quick Drill** | 10 Fragen, adaptiv gewichtet auf deine schwachen Themen |
| 🎯 **Prüfungssimulation** | Nach Blueprint gewichtet, mit Timer und skaliertem Score /1000 |
| 🧭 **Domain-Training** | Gezielt einen Wissensbereich üben |
| 🔁 **Wiederholung** | Spaced Repetition — falsch beantwortete Fragen kommen wieder |
| 🃏 **Lernkarten** | Durchblättern mit Erklärungen, ohne Bewertung |

**Prüfungsreife-Score:** Die Startseite zeigt einen Wert von 0 bis 1000, gewichtet nach der offiziellen Blueprint-Verteilung und der Abdeckung des Fragenpools. Ab 700 liegst du über der Bestehensgrenze. Der Wert ist eine Selbsteinschätzungshilfe, keine Prognose.

**Gamification:** XP, 16 Level, Tagesserie, Antwort-Combos und 12 Abzeichen — als Motivationshilfe, nicht als Selbstzweck.

---

## Wie die Fragen entstanden sind

Grundlage sind die **offiziellen Microsoft Study Guides** (Stand 22. Juli 2026) sowie die zugehörigen **Lernpfade auf Microsoft Learn**. Aus den Modulinhalten stammen die konkreten Details — etwa Mengengrenzen, Feature-Namen und die aktuelle Produktterminologie 2026.

Die Fragen wurden zusätzlich auf zwei typische Schwächen maschinell erzeugter Tests geprüft und überarbeitet:

- **Positionsverzerrung** — die richtige Antwort darf nicht bevorzugt an einer Stelle stehen. Die Optionen werden deshalb bei jeder Anzeige neu gemischt.
- **Längenverzerrung** — die richtige Antwort darf nicht einfach die längste sein. Falsche Antworten bilden plausible Denkfehler ab, nicht offensichtlichen Unsinn.

**Bewertung wie in der echten Prüfung:** Bei Fragen mit mehreren richtigen Antworten zählt jede korrekte Auswahl einen Punkt, für falsche Auswahl gibt es keinen Abzug.

> ⚠️ **Wichtig:** Dies ist ein inoffizielles Lernwerkzeug. Es enthält **keine echten Prüfungsfragen** und steht in keiner Verbindung zu Microsoft. Die Fragen sind anhand der öffentlich dokumentierten Prüfungsziele selbst formuliert. Ein gutes Ergebnis hier garantiert kein Bestehen der Prüfung.

---

## Datenschutz

Die App wurde bewusst ohne Server, ohne Konten und ohne Tracking gebaut.

**Was gespeichert wird**

Dein Lernfortschritt — XP, Level, Abzeichen, Serie und die Statistik je Frage — liegt ausschließlich im `localStorage` **deines Browsers auf deinem Gerät**.

**Was nicht passiert**

- Keine Übertragung deiner Daten an einen Server
- Keine Analyse-, Tracking- oder Werbedienste
- Keine Cookies
- Keine Registrierung, kein Login, keine E-Mail-Adresse
- Keine Aufrufe an Dritt-Domains — die App lädt ausschließlich eigene Dateien

**Mehrere Personen**

Jede Person, die den Link öffnet, hat ihren eigenen, technisch getrennten Fortschritt. Niemand sieht die Ergebnisse der anderen — es gibt keine gemeinsame Datenbank und kein Leaderboard.

**Hosting**

Die App liegt als statische Website auf GitHub Pages. Beim Abruf verarbeitet GitHub technisch notwendige Verbindungsdaten wie die IP-Adresse — wie bei jedem Aufruf einer Website. Anwendungsseitig gibt es darauf keinen Zugriff. Siehe die [GitHub Privacy Statement](https://docs.github.com/site-policy/privacy-policies/github-privacy-statement).

**Deine Kontrolle**

- **Fortschritt sichern** — Export als Code oder Datei, Import auf einem anderen Gerät
- **Fortschritt zurücksetzen** — löscht alle lokal gespeicherten Daten sofort und vollständig
- Alternativ: Browserdaten für die Seite löschen — damit ist ebenfalls alles weg

**Keine Unternehmensdaten**

Die App enthält ausschließlich selbst formulierte Lerninhalte zu öffentlich dokumentierten Prüfungszielen. Interne oder vertrauliche Informationen sind nicht enthalten. Gib auch selbst keine solchen Daten ein — die App fragt ohnehin keine ab.

---

## Fortschritt auf ein anderes Gerät übertragen

Da nichts auf einem Server liegt, ist der Fortschritt an das jeweilige Gerät gebunden. Zum Wechseln:

1. Auf dem alten Gerät: **Fortschritt sichern → Exportieren → Kopieren** (oder „Als Datei")
2. Auf dem neuen Gerät: **Fortschritt sichern → Importieren**, Code einfügen, **Code prüfen**
3. Dann **Ersetzen** (überschreibt) oder **Zusammenführen** (kombiniert beide Stände)

---

## Aktualität

Die App zeigt unter „Version & Aktualität" an, wann die Inhalte zuletzt geprüft wurden. Liegt das mehr als 90 Tage zurück, erscheint automatisch ein Hinweis, den offiziellen Study Guide gegenzulesen — Microsoft aktualisiert die Prüfungsziele regelmäßig.

Updates werden beim Öffnen automatisch erkannt; ein Hinweis „Neue Version verfügbar" lädt sie nach.

---

## Lokal starten

```bash
python3 -m http.server 8765
# http://127.0.0.1:8765/index.html
```

## Aufbau

```
index.html              App-Shell, Styles, Logik
onepager.html           Einseitige Übersicht zum Teilen
version.js              Version, Prüfdatum, Changelog
data-ab730.js           Fragenpool AB-730
data-ab731.js           Fragenpool AB-731
manifest.webmanifest    PWA-Manifest
sw.js                   Service Worker (network-first, Offline-Fallback)
make-icons.py           Erzeugt die App-Icons
stamp-version.sh        Stempelt Version und Datum vor einem Release
```

Keine Build-Schritte, keine Abhängigkeiten, keine externen Bibliotheken.

---

## Lizenz und Haftung

Bereitgestellt ohne Gewähr auf Richtigkeit, Vollständigkeit oder Aktualität. Kein Microsoft-Produkt. „Microsoft", „Microsoft 365" und „Copilot" sind Marken der Microsoft Corporation.
