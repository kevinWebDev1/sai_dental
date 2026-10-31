# Document 4: Design System & Conversion Architecture — Sai Specialized Dental Hospital

> **Project Tier:** Tier 1 (Static Showcase & Conversion Landing Page)  
> **Key Constraint:** 100% modular design token architecture — the entire color palette can be changed in 5 seconds via `:root` CSS variables to match any future client preference.  
> **Conversion Methodology:** Sam Crawford Conversion & Visual Hierarchy Framework.

---

## 1. Modular CSS Custom Property Tokens (`:root`)

All styling references these variables. Changing 2 hex values re-themes the entire website instantly.

```css
:root {
  /* =====================================================================
     PRIMARY PALETTE (Medical Trust Teal / Can be changed to Blue, Gold, Navy, etc.)
     ===================================================================== */
  --color-primary: #0f766e;        /* Deep Hospital Teal: Primary CTAs, brand badges */
  --color-primary-hover: #115e59;  /* Darker Teal for button hover states */
  --color-primary-light: #ccfbf1;  /* Soft Mint/Teal Tint for card backgrounds/tags */
  --color-primary-border: #99f6e4; /* Light border for accent cards */

  /* =====================================================================
     ACCENT PALETTE (Warm Smile Gold / Amber)
     ===================================================================== */
  --color-accent: #f59e0b;         /* Warm Gold: Stars, ratings, special badges */
  --color-accent-hover: #d97706;   /* Darker Gold */
  --color-accent-light: #fef3c7;   /* Amber tint for review pill */

  /* =====================================================================
     NEUTRALS & SURFACES (Clean Clinical Whites & Slates)
     ===================================================================== */
  --color-bg: #f8fafc;             /* Slate 50: Soft, calm page background */
  --color-surface: #ffffff;        /* Pure White: Card background */
  --color-surface-elevated: #f1f5f9;/* Slate 100: Secondary card backgrounds */
  --color-text-main: #0f172a;      /* Slate 900: High-contrast primary headings & text */
  --color-text-muted: #475569;     /* Slate 600: Secondary sub-headlines & descriptions */
  --color-text-dim: #94a3b8;       /* Slate 400: Timestamps, footnotes */
  --color-border: #e2e8f0;         /* Slate 200: Subtle card & section dividers */

  /* =====================================================================
     TYPOGRAPHY TOKENS (2-Font Discipline)
     ===================================================================== */
  --font-heading: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

  /* =====================================================================
     SPACING & MACRO NEGATIVE SPACE (Sam Crawford Breathing Room)
     ===================================================================== */
  --section-py-desktop: 96px;      /* 80px - 120px section padding desktop */
  --section-py-mobile: 56px;       /* 48px - 64px section padding mobile */
  --max-width-site: 1200px;        /* Maximum container width */
  --max-width-prose: 65ch;         /* Max reading width: 65 characters */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 24px;
  --radius-full: 9999px;

  /* =====================================================================
     ELEVATION & SHADOWS
     ===================================================================== */
  --shadow-sm: 0 1px 3px rgba(15, 23, 42, 0.06);
  --shadow-md: 0 4px 16px -2px rgba(15, 23, 42, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04);
  --shadow-lg: 0 12px 32px -4px rgba(15, 23, 42, 0.12);
  --shadow-primary: 0 8px 24px -4px rgba(15, 118, 110, 0.28);
}
```

---

## 2. Typography Hierarchy & Reading Constraints

| Token | Family | Size (Desktop / Mobile) | Weight | Line Height | Tracking | Purpose |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `displayLarge` | `--font-heading` | 52px / 36px | 800 (Bold) | 1.15 | `-0.03em` | Hero main headline |
| `headlineLarge` | `--font-heading` | 36px / 28px | 700 (Bold) | 1.25 | `-0.02em` | Section headers |
| `titleLarge` | `--font-heading` | 22px / 20px | 600 (Semi) | 1.30 | `-0.01em` | Service & review card titles |
| `bodyLarge` | `--font-body` | 18px / 16px | 400 (Regular) | 1.60 | `0` | Hero intro paragraphs |
| `bodyMedium` | `--font-body` | 15px / 14px | 400 (Regular) | 1.55 | `0` | Card body & service details |
| `labelBold` | `--font-body` | 14px / 13px | 600 (Semi) | 1.00 | `0.02em` | Badges, buttons, chips |

> [!IMPORTANT]
> **The 65-Character Ceiling:**  
> All paragraph blocks (`p`) strictly enforce `max-width: var(--max-width-prose);` (approx 580px) to prevent eye strain and maintain 100% reading retention.

---

## 3. Conversion Architecture & Layout Anatomy

### 3.1 Single-Intent Call-to-Action (CTA) Policy
- **Primary Hero Action:** Exactly **ONE** high-intent button: *"Book on WhatsApp"* (Solid `--color-primary` with phone/chat trigger).
- **Secondary Action:** Click-to-Call outline button (*"Call: 092351 79344"*).
- **Zero Distractions:** No competing third or fourth buttons in the hero viewport.

### 3.2 Z-Pattern Hero Scan Alignment
- **Top-Left (Point 1):** Sai Specialized Dental Hospital Logo & badge.
- **Top-Right (Point 2):** Reception Contact (`092351 79344`) + Quick WhatsApp button.
- **Bottom-Left (Point 3):** High-impact headline (*"Gentle, Advanced Dental Care in Gomti Nagar"*) + Google 4.9★ social proof badge.
- **Bottom-Right (Point 4):** Primary WhatsApp booking trigger + Trust indicators.

### 3.3 The Terminal CTA Rule
- Directly above the footer, a dedicated full-width contrast card featuring:
  - Big headline: *"Skip the Waiting Room — Book in 30 Seconds"*
  - Direct WhatsApp button + instant phone dialer.

### 3.4 Mobile Thumb-Zone Sticky Conversion Dock
- For viewports `< 768px`:
  - An anchored bottom bar (`position: fixed; bottom: 0; left: 0; right: 0; z-index: 999;`).
  - Contains two thumb-friendly buttons: **📞 Call Now** and **💬 WhatsApp Book**.
  - Minimum tap height: **48px** (exceeds WCAG 44px standard).

---

## 4. Alternative Client Color Presets (1-Click Switchers)

If the client asks for a different look, swap the 3 primary variables in `style.css`:

```css
/* PRESET A: Luxury Navy & Champagne (Cosmetic Dental Focus) */
--color-primary: #1e293b;
--color-primary-hover: #0f172a;
--color-accent: #d97706;

/* PRESET B: Ultra-Clean Hospital Cyan (Modern Tech Focus) */
--color-primary: #0284c7;
--color-primary-hover: #0369a1;
--color-accent: #10b981;

/* PRESET C: Royal Sapphire (Corporate Trust Focus) */
--color-primary: #1d4ed8;
--color-primary-hover: #1e40af;
--color-accent: #f59e0b;
```
