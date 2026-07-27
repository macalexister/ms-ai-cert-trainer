# AI Cert Trainer — AB-730 & AB-731

**➡️ App öffnen: [tinyurl.com/aicert730](https://tinyurl.com/aicert730)**
(direkt: https://macalexister.github.io/ms-ai-cert-trainer/)

Gamifizierter Prüfungstrainer für die Microsoft-Zertifizierungen:

- **AB-730** — AI Business Professional (70 Fragen)
- **AB-731** — AI Transformation Leader (75 Fragen)

Inhaltlich ausgerichtet an den offiziellen Microsoft Study Guides,
Stand **22. Juli 2026** ("Skills measured as of July 22, 2026").

## Funktionen

| Modus | Beschreibung |
|---|---|
| ⚡ Quick Drill | 10 Fragen, adaptiv auf schwache Themen gewichtet |
| 🎯 Prüfungssimulation | 40 Fragen, 45 Minuten, nach Blueprint-Gewichtung, skalierter Score /1000 |
| 🧭 Domain-Training | Gezieltes Üben eines Wissensbereichs |
| 🔁 Wiederholung | Spaced Repetition (Leitner-Boxen: 0/1/3/7/16 Tage) |
| 🃏 Lernkarten | Durchblättern mit Erklärungen, ohne Bewertung |

**Gamification:** XP, 16 Level, Tages-Serie, Antwort-Combos mit XP-Bonus,
12 Abzeichen, Prüfungsreife-Score (0–1000) mit Bestehensgrenze bei 700
sowie Trefferquote je Wissensbereich.

Der Fortschritt wird lokal im Browser gespeichert (`localStorage`) —
es werden keine Daten übertragen.

## Auf dem iPhone installieren

1. **https://tinyurl.com/aicert730** in **Safari** öffnen
2. Teilen-Symbol → **Zum Home-Bildschirm**
3. Die App startet danach im Vollbild und funktioniert dank Service Worker auch **offline**

## Lokal starten

```bash
python3 -m http.server 8765
# http://127.0.0.1:8765/index.html
```

## Aufbau

```
index.html              App-Shell, Styles, Logik
data-ab730.js           Fragenpool AB-730
data-ab731.js           Fragenpool AB-731
manifest.webmanifest    PWA-Manifest
sw.js                   Service Worker (network-first, Offline-Fallback)
make-icons.py           Erzeugt die App-Icons (ohne externe Abhängigkeiten)
```

## Hinweis

Inoffizielles Lernwerkzeug. Kein Microsoft-Produkt, keine echten Prüfungsfragen
und keine Garantie auf Vollständigkeit oder Aktualität. Die Fragen wurden anhand
der öffentlich dokumentierten Prüfungsziele erstellt.
