# MICHELLE — Website

Live website: https://zetty-penalosa-portfolio.vercel.app/

This site is published under a branded subdirectory of the existing `lqfalsario/lqsynergy-portfolio` repository because the currently connected GitHub integration does not offer repository creation. To host it on its own repository at `https://lqfalsario.github.io/zetty-penalosa-portfolio/`, create `lqfalsario/zetty-penalosa-portfolio`, move these files to its repository root, and enable GitHub Pages in Settings > Pages. To put `zetty-penalosa` in the GitHub domain, an account or custom domain owned by Michelle is required.

The legacy path `/zetty/` redirects to this branded URL, preserving the browser URL fragment (e.g., `#work`).

## About this portfolio

A responsive, accessible, premium-styled static website built for Michelle. It uses an aubergine-and-champagne editorial design inspired by the existing Lawrence Falsario / LQ Synergy portfolio, but highlights lead generation and sales operations instead of email marketing.

## What is included

- `index.html`: Home, About, Services, Selected Experience, Process, Skills, Tools, Experience, Professional Development, and Contact sections.
- `resume.html`: A public-safe, printable résumé, with no personal home address, salaries, phone number, or third-party references.
- `lead-tracker.html`: Interactive sample prospect tracker with status filtering and a downloadable demonstration CSV. **Every example account is fictional.**
- `styles.css`: Responsive CSS, including tablet/mobile adjustments and print styles.
- `main.js` and `tracker.js`: Mobile menu, localized clocks, interaction, and CSV export.
- `assets/`: Website favicon and portrait adapted from the supplied résumé.
- `DESIGN.md`: Site design notes, elegant brand palette, typography and reference sources.

## Open locally

Double-click `index.html`. The site works as static files, even without a build step. The Google Fonts request requires internet connectivity; fallback fonts are included.

To preview over a local server (recommended):

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080/` in a browser.

## Publish on GitHub Pages

1. Create a **new public repository** for Michelle's portfolio (do not replace Lawrence's existing portfolio).
2. Upload the contents of this folder to the repository root.
3. Under GitHub repository **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Save, wait for Pages to publish, then open the URL GitHub gives you.

Do not publish before Michelle reviews the name, email, portrait, LinkedIn URL, employment timeline, and whether she is comfortable making this information public.

## Content verification notes

Background is drawn from the Google Drive folder supplied by the user, the shared ChatGPT conversation, and Michelle's professional profile excerpts. The 2-year lead-gen and 10-year customer service durations are self-reported in the supplied application. Company experiences are described as duties, not unsupported outcomes. The sample tracker is clearly labeled fictional and must not be presented as actual campaign results.

The LinkedIn URL was derived from an indexed public profile/post and should be confirmed by Michelle before publishing. The portrait comes from her résumé and should be published only with her approval.

No analytics, tracking scripts, server, forms, or user data collection are included. Contact uses a standard `mailto:` link.