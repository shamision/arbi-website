# ARBI — Africa Restoring Bridges Initiative

Official website for the **Africa Restoring Bridges Initiative (ARBI)**, a Christian NGO working towards healed, reconciled, and prosperous communities in the Democratic Republic of Congo since 2011.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Font:** Roboto (Google Fonts)
- **Icons:** Lucide React

## Project Structure

```
app/
├── layout.tsx           # Root layout (Navbar + Footer)
├── globals.css          # Global styles & design tokens
├── page.tsx             # Home page
├── about/page.tsx       # About page
├── programs/page.tsx    # Programs page
├── where-we-work/page.tsx
├── partners/page.tsx
├── contact/page.tsx
└── donate/page.tsx

components/
├── Navbar.tsx           # Fixed top navigation
├── Footer.tsx           # Site footer
├── CTABanner.tsx        # Reusable call-to-action banner
└── SectionLabel.tsx     # Section heading label component

design/
└── arbi.pen             # Original design file (Pencil)
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, mission/vision, programs overview, impact stats, partners |
| About | `/about` | Background, vision & mission, core values, motto |
| Programs | `/programs` | Four program areas with projects |
| Where We Work | `/where-we-work` | 5 operational areas in North Kivu, target groups |
| Partners | `/partners` | Partner organizations and collaboration |
| Contact | `/contact` | Contact form, key personnel, office info |
| Donate | `/donate` | Donation options, impact levels, monthly giving |

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| Navy | `#1d2130` | Headings, buttons, text |
| Yellow | `#f2c94c` | CTAs, highlights, accents |
| Yellow BG | `#fcedc6` | Section backgrounds |
| Body | `#525560` | Body text |
| Footer | `#0b0706` | Footer background |

## Contact

- **Office:** Avenue Jacarandas, 32 D, Q. Les Volcans, Goma, North Kivu, DRC
- **Email:** sewimfuratheo@gmail.com
- **Phone:** +243-971 944 496
