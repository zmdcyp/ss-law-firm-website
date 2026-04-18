# S&S Law Firm — Website

Static website for **S&S Law Firm** (Legal & Corporate Consultant, Islamabad).

## Quick start

1. Double-click `index.html` to preview in a browser, or
2. Run a local server from this folder:
   ```bash
   npx serve .
   # or
   python3 -m http.server 8000
   ```

## File structure

```
.
├── index.html          # Homepage
├── expertise.html      # Our expertise
├── team.html           # Our team
├── about.html          # About us
├── contact.html        # Contact (single Islamabad office)
├── news.html           # News/Insight
├── styles.css          # All styles (near-black + gold palette)
├── script.js           # Interaction (hero carousel, menu, testimonials)
├── assets/
│   ├── logo-shield-gold.png   # Nav logo (shield + S&S, gold on black)
│   ├── logo-full-gold.png     # Full logo, gold on black
│   └── logo-full-dark.png     # Full logo, black on white
└── README.md
```

## Contact

- **Address**: Plot# 81, I&T Center, G-9/4 Islamabad, Pakistan
- **Phone**: +92 303 9175939 | +92 333 5649275

## Design

- Near-black (`#0e0e0e`) + gold (`#c9a14a`) palette, matching the S&S brand logo
- Cormorant Garamond (serif) + Inter (sans-serif) typography
- Fully responsive (desktop + tablet + mobile)
- "Verify your legal notice" CTA in nav links to `https://v.sspak.law`

## Deployment

Pure static — upload the whole folder to any static host (Nginx, Apache, S3, Netlify, Vercel, GitHub Pages, Cloudflare Pages). No build step, no dependencies.
