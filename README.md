# New Palpali Sun Chadi Pasal — Premium Jewellery Website

A premium, modern, business-showcase website for **New Palpali Sun Chadi Pasal**,
a physical jewellery shop in Bhaluwang, Dang, Nepal (Est. 1962).

> ⚠️ This is a **showcase website**, not an e-commerce site.
> No shopping cart, checkout, payments, accounts or order management.

## Tech stack

- **React.js 18** + JavaScript / JSX
- **Vite 5** for the dev server and build
- **Tailwind CSS 3** for most styling
- **GSAP 3** (with ScrollTrigger) for reveal / parallax / timeline animations
- **Custom CSS** files per component for specialised layouts, video presentation and animations

## What's inside

| Section | Status | Notes |
|--------|--------|-------|
| Navbar | ✅ | Sticky, blur-on-scroll, mobile drawer, smooth-scroll nav |
| Hero | ✅ | GSAP timeline entrance, parallax bg, slow-zoom image, rotating ring decorations |
| About | ✅ | Heritage story + stat strip + 3 craft pillars (photo/video block removed per request) |
| Jewellery Collection | ✅ | **Auto-sliding row of 8 circular image boxes** — pauses on hover, reveals description |
| Jewellery Video | ✅ | 16:9 framed video player with play/pause + corner marks. Add `public/videos/shop-showcase.mp4` to enable playback |
| Gallery | ✅ | Masonry-style grid (kept as in the original design) |
| Contact (Get in Touch) | ✅ | **Facebook, Instagram, TikTok small icons + location card** + WhatsApp launcher form |
| Footer | ✅ | Brand block, link columns, visit/hours, social row (kept as in original) |
| Floating WhatsApp | ✅ | Bottom-right pulsing button |
| Scroll to Top | ✅ | Bottom-left arrow |
| Featured Collection | ❌ removed | per request |
| Why Choose Us | ❌ removed | per request |
| Visit Our Store | ❌ removed | merged into Contact section |

## Project structure

```
new-palpali-sun-chadi-pasal/
├── public/
│   ├── images/
│   │   ├── jewellery/        ← 8 category images (gold, silver, traditional, …)
│   │   ├── gallery/          ← 6 gallery images
│   │   ├── hero/             ← hero background
│   │   └── logo-placeholder.svg   ← swap this with the real logo when ready
│   ├── videos/
│   │   └── shop-showcase.mp4 ← add your own
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── JewelleryCollection.jsx / .css
│   │   ├── JewelleryVideo.jsx / .css
│   │   ├── Gallery.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   ├── Footer.jsx / .css
│   │   ├── FloatingWhatsApp.jsx / .css
│   │   └── ScrollToTop.jsx / .css
│   ├── data/jewelleryData.js     ← 8 categories + 6 gallery items
│   ├── config/shopConfig.js      ← shop name, contact, social, hours, stats (one source of truth)
│   ├── hooks/useGsapReveal.js    ← reusable GSAP fade-up reveal
│   ├── styles/index.css          ← Tailwind layers + base + reusable components
│   ├── styles/animations.css    ← global keyframe animations
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Customisation

- All shop info lives in **`src/config/shopConfig.js`** — name, phone, WhatsApp,
  email, social links, address, hours, stats and logo path.
- The 8 jewellery categories are defined in **`src/data/jewelleryData.js`** —
  name, Nepali label, description and image path.
- The 6 gallery images are defined in the same file (`galleryImages` array).
- To use your real logo, replace `public/images/logo-placeholder.svg`
  (or change `shopConfig.logo` to point at a different file).

## Notes

- The enquiry form on the Contact section has **no backend**. Submitting it
  composes a pre-filled WhatsApp message and opens WhatsApp in a new tab.
- If `public/videos/shop-showcase.mp4` is missing, the video section falls back
  to the hero image as a poster.
- All jewellery and gallery images are real photographs sourced from public web
  image search — replace them with photos of the shop's own pieces for production.
