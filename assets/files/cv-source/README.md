# Fonte do CV PDF

- `cv.html` — layout tip (ink / Syne / Figtree / teal), A4, 2 páginas
- `profile.jpg` — foto do site (`assets/img/profile.jpg`)
- `build-pdf.sh` — Chrome headless → `../Goncalo-Garrido-CV.pdf` + metadados

Conteúdo alinhado a `resume.html`, `about.html` e `portfolio.html`. Não inventar métricas.

```bash
./build-pdf.sh
```

Requer `google-chrome` e `pypdf` (`pip install pypdf`).
