# Fonte editável do CV PDF

Pasta canónica para alterar o currículo que o site descarrega.

| Ficheiro | Função |
|----------|--------|
| [`cv.html`](./cv.html) | Layout + conteúdo (HTML + CSS embutido) |
| [`profile.jpg`](./profile.jpg) | Foto do cabeçalho (cópia de `assets/img/profile.jpg`) |
| [`build-pdf.sh`](./build-pdf.sh) | Regenera `../Goncalo-Garrido-CV.pdf` |
| PDF publicado | [`../Goncalo-Garrido-CV.pdf`](../Goncalo-Garrido-CV.pdf) |

**Download no site (Pages):** https://goncalogarrido2.github.io/GoncaloGarrido/assets/files/Goncalo-Garrido-CV.pdf

Links «Descarregar CV»: `index.html`, `resume.html`, `contact.html` → `assets/files/Goncalo-Garrido-CV.pdf?v=AAAA-MM-DD`.

---

## Fluxo rápido

1. Editar `cv.html` (texto e/ou CSS no `<style>`).
2. Se mudares a foto do site: copiar `assets/img/profile.jpg` → `assets/files/cv-source/profile.jpg`.
3. Regenerar o PDF: `./build-pdf.sh`
4. Bump do cache nos 3 links HTML (`?v=`).
5. Commit + push para `main` (ou PR) → GitHub Pages actualiza o download.

Não inventar experiência, métricas, clientes ou skills. Alinhar com `resume.html`, `about.html`, `portfolio.html` e `contact.html`.

---

## Editar HTML / CSS

Tudo está em `cv.html` (sem ficheiro CSS externo).

- **Tokens tip** (topo do `<style>`): `--ink`, `--accent` (teal `#2ecf9a`), fontes Syne / Figtree.
- **Cabeçalho:** bloco `.hero` (nome, role, pitch, contactos, `<img class="photo" src="profile.jpg">`).
- **Página 1:** experiência (coluna esquerda) + stacks / linguagens / ferramentas / idiomas (direita).
- **Página 2:** formação + destaques (esquerda) + projectos + contactos (direita).
- **Print:** `@page { size: A4 }` e classes `.page` (duas secções A4).

Pré-visualizar no browser antes do PDF:

```bash
cd assets/files/cv-source
python3 -m http.server 8765
# abrir http://127.0.0.1:8765/cv.html
```

Copia PT-PT: hífen ASCII `-` (evitar em dash `—`).

---

## Foto

| Onde | Path |
|------|------|
| Site (about, OG, etc.) | `assets/img/profile.jpg` (+ `.webp`) |
| CV PDF | `assets/files/cv-source/profile.jpg` |

Depois de actualizar a foto do site:

```bash
cp ../../img/profile.jpg ./profile.jpg
./build-pdf.sh
```

---

## Regenerar o PDF

Requisitos: `google-chrome` (ou `google-chrome-stable`), Python 3, `pypdf` (`pip install pypdf`). `timeout` (coreutils) evita hang do Chrome após o print.

```bash
cd assets/files/cv-source
./build-pdf.sh
```

O script:

1. Serve esta pasta em `127.0.0.1:8765` (override: `CV_HTTP_PORT=…`).
2. Chrome headless → PDF temporário.
3. Escreve metadados e grava `../Goncalo-Garrido-CV.pdf`.

Chrome alternativo: `CHROME=/caminho/chrome ./build-pdf.sh`.

---

## Cache-bust nos links (`?v=`)

Browsers e Pages podem cachear o PDF. Sempre que regenerares, actualiza a query nos **três** sítios:

- `index.html` — CTA «Descarregar CV»
- `resume.html` — botão «Descarregar CV (PDF)»
- `contact.html` — acção «Descarregar CV»

Exemplo: `assets/files/Goncalo-Garrido-CV.pdf?v=2026-11-26` → `?v=2026-12-01`.

Não é preciso mudar o nome do ficheiro.

---

## Checklist de PR / merge

- [ ] Conteúdo alinhado ao site (sem inventar)
- [ ] `profile.jpg` actual se a foto mudou
- [ ] `./build-pdf.sh` correu sem erro
- [ ] `?v=` actualizado em index / resume / contact
- [ ] PDF commitado (`assets/files/Goncalo-Garrido-CV.pdf`)
- [ ] Push para a branch que alimenta Pages (`main`)
