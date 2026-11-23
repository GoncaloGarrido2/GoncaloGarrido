# Partials (header / footer)

Marcadores nas páginas HTML:

- `<!-- SITE_HEADER_START -->` … `<!-- SITE_HEADER_END -->`
- `<!-- SITE_FOOTER_START -->` … `<!-- SITE_FOOTER_END -->`

Para sincronizar após editar `header-inner.html` ou `footer.html`:

```bash
python3 scripts/sync-site-chrome.py
```

A homepage (`index.html`) mantém o menu mobile próprio; o script actualiza o footer e, nas páginas interiores, o header padrão.
