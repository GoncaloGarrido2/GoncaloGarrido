#!/usr/bin/env bash
# Gera Goncalo-Garrido-CV.pdf a partir de cv.html (Chrome headless + metadados).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
OUT_PDF="$(cd "$ROOT/.." && pwd)/Goncalo-Garrido-CV.pdf"
TMP_PDF="$(mktemp /tmp/cv-XXXXXX.pdf)"
PORT="${CV_HTTP_PORT:-8765}"

CHROME="${CHROME:-google-chrome}"
if ! command -v "$CHROME" >/dev/null 2>&1; then
  CHROME=google-chrome-stable
fi

python3 -m http.server "$PORT" --bind 127.0.0.1 --directory "$ROOT" >/tmp/cv-build-http.log 2>&1 &
HTTP_PID=$!
cleanup() { kill "$HTTP_PID" 2>/dev/null || true; rm -f "$TMP_PDF"; }
trap cleanup EXIT
sleep 0.4

# Chrome por vezes não sai após --print-to-pdf; timeout cobre o hang.
set +e
timeout 90s "$CHROME" \
  --headless=new \
  --disable-gpu \
  --no-pdf-header-footer \
  --print-to-pdf="$TMP_PDF" \
  --virtual-time-budget=20000 \
  --run-all-compositor-stages-before-draw \
  --font-render-hinting=none \
  "http://127.0.0.1:${PORT}/cv.html" >/tmp/cv-build-chrome.log 2>&1
set -e

if [[ ! -s "$TMP_PDF" ]]; then
  echo "Falha: PDF vazio ou não gerado" >&2
  tail -30 /tmp/cv-build-chrome.log >&2 || true
  exit 1
fi

python3 - "$TMP_PDF" "$OUT_PDF" <<'PY'
import sys
from pypdf import PdfReader, PdfWriter

src, dst = sys.argv[1], sys.argv[2]
reader = PdfReader(src)
writer = PdfWriter()
for page in reader.pages:
    writer.add_page(page)
writer.add_metadata({
    "/Author": "Gonçalo Garrido",
    "/Title": "CV · Gonçalo Garrido · Desenvolvedor de software",
    "/Subject": "Currículo: backend, mobile e integração de sistemas · Porto",
    "/Keywords": "Gonçalo Garrido, desenvolvedor, WorkInNet, InspGest, Android, C#, Delty, Porto",
    "/Creator": "Gonçalo Garrido portfolio",
    "/Producer": "Gonçalo Garrido portfolio",
    "/Language": "pt-PT",
})
with open(dst, "wb") as f:
    writer.write(f)
print(f"Wrote {dst} ({len(reader.pages)} pages)")
PY
