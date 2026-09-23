# Isaac Fernyhough — Engineering Portfolio

A static portfolio site showcasing engineering projects: VTOL aircraft, rocketry,
robotics and control systems work from Isaac's MEng Aerospace Engineering degree
at the University of Sheffield.

Plain HTML/CSS/JS — no build step, no dependencies to install.

## File structure

```
.
├── index.html          — the whole site (one page)
├── css/style.css        — all styling
├── js/main.js            — lightbox (click-to-zoom on photos)
├── images/               — all project photos, diagrams and flight-data plots
└── cv/Isaac_Fernyhough_CV.pdf   — CV, linked from the header/footer
```

## Viewing it locally

Just open `index.html` in a browser — no server required. (If images don't
load because of local file permissions, run a quick local server instead:
`python3 -m http.server` from this folder, then visit `http://localhost:8000`.)

## Publishing on GitHub Pages (free)

1. **Create a new repository** on GitHub — e.g. `isaacfernyhough.github.io`
   (using exactly `<your-username>.github.io` as the repo name gives you the
   cleanest possible URL — your site will be live at that address with
   nothing extra needed). If you'd rather use a different repo name, that
   works too — GitHub will just host it at `<your-username>.github.io/<repo-name>/`
   instead.

2. **Push these files to the repo.** From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

3. **Enable GitHub Pages.** On GitHub, go to your repo → **Settings** →
   **Pages** (left sidebar) → under "Build and deployment", set **Source** to
   **Deploy from a branch**, branch **main**, folder **/ (root)** → **Save**.

4. **Wait a minute or two.** GitHub will show a link at the top of that same
   Pages settings screen once it's live — that's your portfolio URL. Add it
   to your CV, LinkedIn, and anywhere else you'd like.

Any time you want to update content (new project, new photos, tweaked text),
just edit the files and push again — the live site updates automatically
within a minute or so.

## Making changes

- **Add a photo to an existing project:** drop the image file into `images/`,
  then add an `<img>` tag for it in `index.html` following the pattern of the
  other photos in that project's `photo-grid` or `data-grid`.
- **Add a whole new project to the index:** copy one of the existing
  `<div class="index-entry">` blocks near the bottom of `index.html`, update
  the `doc-no` (e.g. `PRJ.10`), title, role, images and the What/How/Results
  bullets.
- **Change the CV:** replace `cv/Isaac_Fernyhough_CV.pdf` with a new file of
  the same name, or update the filename referenced in the `href` in
  `index.html` (search for `cv/`).

## Notes

- All images have already been resized and compressed for the web (~4 MB
  total across 33 images), so the site loads quickly.
- Fonts (Space Grotesk, IBM Plex Sans, IBM Plex Mono) load from Google Fonts
  over the network — this is fine for GitHub Pages but means the page needs
  an internet connection to show the intended typefaces (it'll fall back to
  a system sans-serif otherwise, and still look reasonable).
- The site is fully responsive down to mobile and has no tracking, cookies,
  or analytics of any kind.
