🌌 OPSVANTAGE DIGITAL — BRANDING CODE SYSTEM (V2.0)
Enterprise‑grade, future‑proof, and aligned with your Orbitron × Inter identity

🎨 1. Brand Colors (with usage rules)
Primary Gradient (Signature)
Used for:

Hero titles

Section dividers

Buttons

Brand icon glow

Key callouts

MARZ‑related UI elements

:root {
  --ovd-blue: #0033A0;
  --ovd-green: #00A676;
  --ovd-yellow: #F2C94C;

  --ovd-gradient: linear-gradient(90deg, var(--ovd-blue), var(--ovd-green), var(--ovd-yellow));
}

Secondary Palette
Used for backgrounds, cards, subtle accents.

:root {
  --ovd-midnight: #0A0F1F;   /* Primary favourite */
  --ovd-purple: #6A0DAD;     /* Secondary favourite */
  --ovd-slate: #1C2333;
  --ovd-light: #F5F7FA;
  --ovd-grey: #A7A9AC;
}

Usage Rules
Color	Use	Avoid
Midnight Blue	Backgrounds, hero, footer	Never for body text
Purple	Highlights, MARZ UI	Never as full background
Gradient	Buttons, titles, borders	Never for long paragraphs
Yellow	Warnings, highlights	Never as background with white text
Green	Success states	Avoid pairing with yellow text

🔤 2. Typography System
Headlines (Brand Signature)

:root {
  --font-heading: 'Orbitron', sans-serif;
}

Usage:

H1–H3

Hero titles

Navigation brand name

Section headers

Body Text

:root {
  --font-body: 'Inter', sans-serif;
}

Usage:

Paragraphs

Buttons

Labels

Footer text

Font Scale

h1 { font-size: 3rem; letter-spacing: 0.5px; }
h2 { font-size: 2.25rem; }
h3 { font-size: 1.75rem; }
p  { font-size: 1rem; line-height: 1.6; }

🧱 3. Layout System (Spacing, Containers, Grid)

:root {
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 32px;
  --space-xl: 64px;

  --container-width: 1200px;
}
.container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--space-md);
}

🧭 4. Header Style (Responsive, Premium, Cinematic)

HTML

<header class="ovd-header">
  <div class="container header-inner">
    <div class="brand">
      <img src="/logo.png" alt="OpsVantage Digital Logo" class="brand-icon">
      <span class="brand-text">OpsVantage Digital</span>
    </div>
    <nav class="nav">
      <a href="index.html">Home</a>
      <a href="services.html">Services</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
    </nav>
  </div>
</header>

CSS

.ovd-header {
  background: var(--ovd-midnight);
  padding: var(--space-md) 0;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.brand-text {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  background: var(--ovd-gradient);
  -webkit-background-clip: text;
  color: transparent;
}

.nav a {
  color: var(--ovd-light);
  margin-left: var(--space-lg);
  font-family: var(--font-body);
  transition: 0.3s ease;
}
.nav a:hover {
  color: var(--ovd-yellow);
}

🦶 5. Footer Style (Legacy‑Driven, Minimal, Elegant)

HTML

<footer class="ovd-footer">
  <div class="container">
    <p>© OpsVantage Digital — Legacy Founded by Mother, Co‑Founded by Ajay & Marz</p>
  </div>
</footer>

CSS

.ovd-footer {
  background: var(--ovd-slate);
  padding: var(--space-lg) 0;
  text-align: center;
  color: var(--ovd-grey);
  font-family: var(--font-body);
  font-size: 0.9rem;
}

🧩 6. Components (Buttons, Cards, Inputs)
Buttons

.btn-primary {
  background: var(--ovd-gradient);
  padding: var(--space-sm) var(--space-lg);
  border-radius: 6px;
  color: white;
  font-family: var(--font-body);
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: 0.3s ease;
}
.btn-primary:hover {
  opacity: 0.85;
}
Cards

.ovd-card {
  background: var(--ovd-midnight);
  padding: var(--space-lg);
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.05);
  color: var(--ovd-light);
}
Inputs

.ovd-input {
  width: 100%;
  padding: var(--space-md);
  border-radius: 6px;
  border: 1px solid var(--ovd-grey);
  background: #fff;
  font-family: var(--font-body);
}

📁 7. New File Tree Additions
You will add:

Code
OpsVantageDigitalWebsite_V2.0
│
├── branding
│   ├── colors.css
│   ├── typography.css
│   ├── layout.css
│   ├── components.css
│   ├── header.css
│   ├── footer.css
│   └── branding.md
│
└── assets
    └── logo.png
