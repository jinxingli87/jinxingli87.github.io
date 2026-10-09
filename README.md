# jinxingli87.github.io

Personal website of Jinxing Li. Plain HTML, CSS and JavaScript — no build step, no Jekyll.

## Where to edit

| What                    | File                          |
| ----------------------- | ----------------------------- |
| About text, photo info  | `index.html`                  |
| News items              | `assets/data/news.js`         |
| Publications            | `assets/data/publications.js` |
| CV                      | `cv/index.html`               |
| Colors, fonts, layout   | `assets/css/style.css`        |
| Profile photo           | `assets/img/prof_pic.jpg`     |

- **News:** add an object `{ date: "YYYY-MM-DD", text: "..." }` to the list. The home page shows the 5 most recent; `/news/` shows all.
- **Publications:** copy an existing entry and edit it. Set `selected: true` to also show it on the home page. Badge colors/links for each `abbr` are in `VENUES` at the top of the same file.
- The navigation bar and footer are repeated in each HTML page; if you change one, change them all.

## Preview locally

Pages use root-relative links (`/assets/...`), so serve the folder rather than opening files directly:

```sh
python3 serve.py
```

Then open http://localhost:8000. `serve.py` turns off browser caching, so edits show up on a normal reload
(plain `python3 -m http.server` lets the browser keep showing old copies of the JavaScript files).

## Deploy

Push the contents of this folder to the `main` branch of the `jinxingli87.github.io` repository. In the repository settings, set GitHub Pages to deploy from that branch (root). The `.nojekyll` file tells GitHub Pages to serve the files as-is.
