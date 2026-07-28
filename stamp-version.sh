#!/usr/bin/env bash
# Stempelt Version und Datum in version.js und zieht den Service-Worker-Cache nach.
# Aufruf:  ./stamp-version.sh <version>
set -euo pipefail
cd "$(dirname "$0")"

TODAY=$(date +%Y-%m-%d)
NEW="${1:-}"
if [ -z "$NEW" ]; then
  echo "Aufruf: ./stamp-version.sh <version>   z. B. ./stamp-version.sh 1.4.0" >&2
  exit 1
fi

# Hinweis: BSD-sed (macOS) kennt keine 0,/muster/-Adressierung.
# Deshalb wird zeilengenau ersetzt — nur die Zeile "  version: ..." trifft zu,
# die Changelog-Einträge verwenden "v:" und bleiben unberührt.
sed -i '' "s/^  version: \"[^\"]*\",/  version: \"$NEW\",/" version.js
sed -i '' "s/^  built: \"[^\"]*\",/  built: \"$TODAY\",/" version.js
sed -i '' "s/^  contentReviewed: \"[^\"]*\",/  contentReviewed: \"$TODAY\",/" version.js
sed -i '' "s/const CACHE = \"ai-cert-trainer-[^\"]*\";/const CACHE = \"ai-cert-trainer-$NEW\";/" sw.js

# Ergebnis aus den Dateien zurücklesen und prüfen, statt die Eingabe zu wiederholen
GOT_V=$(sed -n 's/^  version: "\([^"]*\)",/\1/p' version.js)
GOT_B=$(sed -n 's/^  built: "\([^"]*\)",/\1/p' version.js)
GOT_R=$(sed -n 's/^  contentReviewed: "\([^"]*\)",/\1/p' version.js)
GOT_C=$(sed -n 's/.*const CACHE = "\([^"]*\)".*/\1/p' sw.js)

FAIL=0
[ "$GOT_V" = "$NEW" ]   || { echo "FEHLER: version blieb '$GOT_V'" >&2; FAIL=1; }
[ "$GOT_B" = "$TODAY" ] || { echo "FEHLER: built blieb '$GOT_B'" >&2; FAIL=1; }
[ "$GOT_R" = "$TODAY" ] || { echo "FEHLER: contentReviewed blieb '$GOT_R'" >&2; FAIL=1; }
[ "$GOT_C" = "ai-cert-trainer-$NEW" ] || { echo "FEHLER: SW-Cache blieb '$GOT_C'" >&2; FAIL=1; }
[ "$FAIL" = "0" ] || exit 1

echo "Version        : $GOT_V"
echo "Build-Datum    : $GOT_B"
echo "Inhalt geprüft : $GOT_R"
echo "SW-Cache       : $GOT_C"
