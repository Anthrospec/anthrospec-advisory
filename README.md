# AnthroSpec Advisory LLC — Website (Tailwind Build)

Technical/stark 4-page marketing site built with **Tailwind CSS via CDN**.
No build step, no dependencies. Ready for **GitHub Pages**.

## Pages

| File | Page |
|---|---|
| `index.html` | Homepage — "Protect Your Build. Win the Bid." + 01/02/03 protocol |
| `audits.html` | Audits & Pricing — the 4 per-room flat-fee tiers |
| `clinical-edge.html` | The Clinical Edge — OTR / Clinical Care Manager credentials, WeHSA/CASPAR → ANSI |
| `portal.html` | Contractor Portal — passcode-gated page with Fillout embed slot |
| `script.js` | Mobile nav, footer year, portal gate |
| `assets/` | Logo files (`logo-mark.png`, `logo-full.png`, transparent) |

## Before you publish

1. **Portal passcode** — open `script.js` and change `GATE_CODE = "anthrospec"` to your own
   passcode. (Lightweight gate only — see the security note on `portal.html` for real
   protection options like Cloudflare Access.)
2. **Fillout form** — open `portal.html`, find the `FILLOUT FORM EMBED` comment, and paste
   your Fillout *Standard embed* snippet, replacing `YOUR_FILLOUT_FORM_ID`.
3. Contact CTAs point to `anand@anthrospecadvisory.com` — update if needed.

## Deploy to GitHub Pages

1. Create a new repo on GitHub (e.g. `anthrospec-advisory`), **public**.
2. Upload everything in this folder to the repo root (or push via git).
3. Go to **Settings → Pages**.
4. Under *Build and deployment*, set **Source** to `Deploy from a branch`,
   **Branch** to `main`, folder `/ (root)`. Save.
5. Your site goes live at `https://<your-username>.github.io/anthrospec-advisory/`
   within a minute or two.

Optional: add a custom domain under Settings → Pages → Custom domain.

## Local preview

```bash
cd anthrospec-site-tailwind
python3 -m http.server 8000
# open http://localhost:8000
```

> Note: an earlier custom-CSS version of this site lives in `../anthrospec-site/`
> if you ever want to compare the two designs.
