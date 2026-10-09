# Mustafa Berke Şimşekler — personal portfolio

The existing personal site at [ragno-typhojem.github.io/berkepersonalpage.github.io](https://ragno-typhojem.github.io/berkepersonalpage.github.io/).

A responsive, bilingual English/Turkish portfolio covering gameplay systems, 3D environments, web and desktop tools, education, and current/past experience. The portfolio includes 15 project entries, with source links for seven projects. İLKYAR volunteering is current; METU Computer Club chairmanship and the MagicLab Game Artist internship are completed roles. Production uses plain HTML, CSS and JavaScript, with no framework, runtime dependencies, remote fonts or analytics.

## Editing

- `index.html`: complete English content, SEO metadata and structured profile.
- `script.js`: Turkish translations, language preference, mobile navigation, gallery and email copy.
- `stylesheet.css`: layout, typography, responsive breakpoints, reduced motion and print rules.
- `assets/images/`: optimized WebP derivatives of the existing photographs and screenshots.
- `assets/illustrations/`: original SVG concept diagrams, explicitly labelled as illustrations on the page.
- `assets/fonts/`: self-hosted Manrope and Space Grotesk fonts with their SIL Open Font Licenses.
- `photosrc/` and `CV_MustafaBerkeSimsekler.pdf`: preserved original assets. The existing CV PDF has not been rewritten.

## Local verification

Node.js 20 or newer; no package installation is required.

```sh
npm run check
npm run build
python3 -m http.server 8000
```

Open `http://localhost:8000/`. The build verifies local assets, internal links, translation coverage, profile metadata, JavaScript syntax and resource budgets, then creates an ignored `dist/` copy for inspection. It does **not** publish a website. GitHub Pages continues to use the repository's existing root files and configuration.

Use `?lang=en` or `?lang=tr` for a specific language. Otherwise the page uses a saved preference or the browser language. The complete English content, native project disclosures, contact links and full-size gallery links remain usable without JavaScript.

For browser QA, check narrow phones through wide desktops in both languages, keyboard navigation, menu Escape/focus behaviour, gallery arrows/Escape/focus return, clipboard success/failure, reduced motion and the no-JavaScript fallback.

See [CONTENT_SOURCES.md](CONTENT_SOURCES.md) for content and asset provenance. A project illustration is not a screenshot or evidence of release status.
