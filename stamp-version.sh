#!/usr/bin/env bash
# Stempelt das aktuelle Datum in version.js und erhoeht den Service-Worker-Cache.
# Aufruf:  ./stamp-version.sh [neue-version]
set -euo pipefail
cd "$(dirname "$0")"

TODAY=$(date +%Y-%m-%d)
CUR=$(sed -n 's/.*version: "\([^"]*\)".*/\1/p' version.js | head -1)
NEW="${1:-$CUR}"

# Build- und Pruefdatum auf heute setzen
sed -i '' "s/built: \"[0-9-]*\"/built: \"$TODAY\"/" version.js
sed -i '' "s/contentReviewed: \"[0-9-]*\"/contentReviewed: \"$TODAY\"/" version.js
sed -i '' "0,/version: \"[^\"]*\"/s//version: \"$NEW\"/" version.js

# Service-Worker-Cache invalidieren, damit Clients die neue Fassung laden
sed -i '' "s/const CACHE = \"ai-cert-trainer-[^\"]*\";/const CACHE = \"ai-cert-trainer-$NEW\";/" sw.js

echo "Version : $NEW"
echo "Datum   : $TODAY"
echo "SW-Cache: $(sed -n 's/.*const CACHE = "\([^"]*\)".*/\1/p' sw.js)"
