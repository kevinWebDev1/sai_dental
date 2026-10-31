# Document 7: Implementation & Quality Gates Plan — Sai Specialized Dental Hospital

> **Project Tier:** Tier 1 (Static Showcase & Conversion Landing Page)  
> **Client:** Sai Specialized Dental Hospital (Gomti Nagar, Lucknow)  
> **Target:** 1-Page High-Converting Mobile-First Commercial Landing Page  
> **Framework:** HTML5 + CSS3 (Modular Tokens) + Vanilla JS  

---

## 1. Deliverables & Directory Structure

```
clients/active/sai-specialized-dental-hospital/
├── site/
│   ├── index.html          # Semantic HTML5 with Schema.org & GEO/SEO tags
│   ├── style.css           # Modular CSS custom properties with instant theme swap
│   ├── script.js          # Interactive WhatsApp booking & mobile menu logic
│   └── assets/             # Optimized SVG badges, clinic icons & imagery
├── docs/
│   ├── 01_content_domain_model.md
│   ├── 04_design_system.md
│   └── 07_implementation_plan.md
├── brief.md
└── README.md
```

---

## 2. Component Line Budget & Constraints

To prevent unmaintainable monolithic files:
- `index.html`: ≤ 350 lines (strictly organized into semantic `<header>`, `<main>`, `<section>`, `<footer>`, and `<nav class="mobile-bar">`).
- `style.css`: Clean modular sections referencing `:root` variables; zero inline styles.
- `script.js`: ≤ 120 lines; lightweight vanilla JavaScript with zero third-party script dependencies.

---

## 3. Implementation Checklist & Sprint Sequence

### Sprint 1: HTML5 Semantic Scaffold & SEO/GEO Architecture
- [x] Title: `Sai Specialized Dental Hospital | Top-Rated Dentist in Gomti Nagar, Lucknow`
- [x] Meta description with local intent (Vipul Khand 2, Gomti Nagar, 4.9★ rating, root canal, dental implants).
- [x] Schema.org `Dentist` JSON-LD structured data with geo coordinates, opening hours, address, and aggregate rating.
- [x] `llms.txt` integration metadata for Generative Engine Optimization (GEO).

### Sprint 2: Core Section Layouts (Sam Crawford Conversion Flow)
1. **Sticky Header:** Brand logo badge, click-to-call link, and desktop appointment CTA.
2. **Z-Pattern Hero:**
   - Left: Location chip, bold display headline (≤ 3 lines), 65ch body paragraph, dual CTA buttons (Primary WhatsApp, Secondary Phone).
   - Right: Modern high-trust dental visual with floating 4.9★ Google verified badge.
3. **Trust & Social Proof Bar:** 4.9★ rating, 151+ Google reviews, 100% sterilized equipment, pain-free technology.
4. **F-Pattern Treatments Grid:** 6 scannable treatment cards with bold benefit headers.
5. **Why Choose Us Feature Split:** Clinic hygiene, modern digital diagnostics, transparent treatment plans.
6. **Verified Gomti Nagar Patient Reviews:** High-trust testimonial quotes with star ratings.
7. **Clinic Location & Timings:** Mon-Sat timings, landmark directions, interactive Google Map embed.
8. **Terminal Call-to-Action:** High-contrast conversion block above footer.
9. **Footer:** Quick links, disclaimer, developer credit ("Engineered by Kevin").
10. **Mobile Thumb-Zone Bar:** Fixed bottom bar on `<768px` with 48px tap targets for 📞 Call and 💬 WhatsApp.

### Sprint 3: Modular CSS Tokenization & Responsive Styling
- Full integration of `:root` CSS variables for colors, typography, and spacing.
- Viewport responsiveness: Tested at 375px (iPhone SE), 390px (iPhone 14), 768px (iPad), and 1280px (Desktop).
- Micro-interactions: Smooth button hover lifts, card shadows, and focus rings.

### Sprint 4: Functional Interactivity (JavaScript)
- Dynamic WhatsApp link generator: Encodes patient message with timestamp and service preference.
- Mobile menu toggle with aria-expanded accessibility.
- Smooth scroll navigation with header offset.

---

## 4. Quality Gates & Verification Matrix

| Gate | Target Standard | Verification Method |
| :--- | :--- | :--- |
| **Mobile Responsiveness** | Zero horizontal scroll; legible text at 375px | Browser DevTools responsive emulation |
| **Tap Targets** | ≥ 48px for all mobile touch targets | CSS computed style inspection |
| **Readability Ceiling** | Body paragraphs strictly ≤ 65 characters wide | `max-width: var(--max-width-prose)` check |
| **Negative Space** | 80–120px desktop / 48–64px mobile vertical rhythm | CSS box model audit |
| **Accessibility & Contrast** | WCAG AA compliant contrast ratio (≥ 4.5:1) | Lighthouse / DevTools Color Contrast audit |
| **Load Speed** | 100% static, 0 external runtime libraries (< 100ms load) | Performance audit |
| **Modular Palette Swap** | Theme changes in < 5 seconds by editing 2 hex variables | Visual test switching to Preset B & C |

---

## 5. Deployment & Client Handover Runbook

1. **Local Test Preview:** Launch lightweight static server on `localhost:3000`.
2. **Vercel / Netlify Deploy:** Single command or drag-and-drop git push to provide live preview URL (`https://sai-dental-lucknow.vercel.app`).
3. **Client Pitch Demo:** Send preview link directly to clinic via WhatsApp with personalized opening pitch from `CLIENT_ACQUISITION_PLAYBOOK.md`.
