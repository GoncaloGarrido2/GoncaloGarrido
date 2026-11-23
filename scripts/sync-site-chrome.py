#!/usr/bin/env python3
"""Inject partials/header-inner.html and partials/footer.html into marked pages."""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
PARTIALS = ROOT / "partials"
HEADER = (PARTIALS / "header-inner.html").read_text(encoding="utf-8").strip() + "\n"
FOOTER = (PARTIALS / "footer.html").read_text(encoding="utf-8").strip() + "\n"

INNER_PAGES = [
    "about.html",
    "resume.html",
    "portfolio.html",
    "contact.html",
    "case-papos.html",
    "case-focus-launcher.html",
    "case-bookly.html",
]

HEADER_RE = re.compile(
    r"<!-- SITE_HEADER_START -->.*?<!-- SITE_HEADER_END -->",
    re.S,
)
FOOTER_RE = re.compile(
    r"<!-- SITE_FOOTER_START -->.*?<!-- SITE_FOOTER_END -->",
    re.S,
)


def wrap_header(active: str) -> str:
    html = HEADER
    # mark active nav link
    mapping = {
        "about.html": "about.html",
        "resume.html": "resume.html",
        "portfolio.html": "portfolio.html",
        "contact.html": "contact.html",
        "case-papos.html": "portfolio.html",
        "case-focus-launcher.html": "portfolio.html",
        "case-bookly.html": "portfolio.html",
    }
    target = mapping.get(active, "")
    if target:
        html = html.replace(
            f'href="{target}"',
            f'href="{target}" class="active"',
            1,
        )
    return f"<!-- SITE_HEADER_START -->\n{html}<!-- SITE_HEADER_END -->"


def wrap_footer() -> str:
    return f"<!-- SITE_FOOTER_START -->\n{FOOTER}<!-- SITE_FOOTER_END -->"


def ensure_markers(path: Path, is_inner: bool) -> str:
    text = path.read_text(encoding="utf-8")
    if "<!-- SITE_FOOTER_START -->" not in text:
        text = re.sub(
            r"<footer id=\"footer\"[\s\S]*?</footer>",
            wrap_footer(),
            text,
            count=1,
        )
    if is_inner and "<!-- SITE_HEADER_START -->" not in text:
        text = re.sub(
            r"<header id=\"header\"[\s\S]*?</header>",
            wrap_header(path.name),
            text,
            count=1,
        )
    return text


def apply(path: Path, is_inner: bool) -> None:
    text = ensure_markers(path, is_inner)
    if is_inner and HEADER_RE.search(text):
        text = HEADER_RE.sub(wrap_header(path.name), text)
    if FOOTER_RE.search(text):
        text = FOOTER_RE.sub(wrap_footer(), text)
    path.write_text(text, encoding="utf-8")
    print("synced", path.name)


def main():
    for name in INNER_PAGES:
        path = ROOT / name
        if path.exists():
            apply(path, is_inner=True)
    index = ROOT / "index.html"
    if index.exists():
        apply(index, is_inner=False)


if __name__ == "__main__":
    main()
