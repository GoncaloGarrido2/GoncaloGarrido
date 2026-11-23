# Gonçalo Garrido — site pessoal

Desenvolvedor de software — backend, mobile e integração de sistemas · Porto.

**Live:** https://goncalogarrido2.github.io/GoncaloGarrido/

## Conteúdo

- Páginas: início, sobre, currículo, portfólio, contactos
- Case studies: [Papos](case-papos.html), [Focus Launcher](case-focus-launcher.html), [Bookly](case-bookly.html)
- CV PDF canónico: [`assets/files/Goncalo-Garrido-CV.pdf`](assets/files/Goncalo-Garrido-CV.pdf)
- SEO: `robots.txt`, `sitemap.xml`, Open Graph, JSON-LD Person

## Servir localmente

Não há build step (HTML/CSS/JS estático). Qualquer servidor HTTP na raiz do repo funciona:

```bash
# Python
python3 -m http.server 8080

# Node (se tiveres)
npx --yes serve -l 8080
```

Abrir http://127.0.0.1:8080/

## Deploy (GitHub Pages)

1. Push para a branch publicada no repositório (normalmente `main`).
2. Em **Settings → Pages**, origem: branch `main` / pasta `/ (root)`.
3. O site fica em `https://goncalogarrido2.github.io/GoncaloGarrido/` (path do repositório).

Não há `CNAME` / domínio custom neste repo.

## Header / footer

Partials em [`partials/`](partials/). Após editar `header-inner.html` ou `footer.html`:

```bash
python3 scripts/sync-site-chrome.py
```

## Idioma

PT-PT por defeito; EN via seletor ou `?lang=en`. Preferir `data-i18n="chave"` (ver `assets/js/i18n.js`); o match por string completa fica só como legado.

## Fora de âmbito (adiado)

Cases Delty/clientes, homelab e ESP32/3D — ver Project store `docs/pendente-atualizacao-delty-homelab.md`.
