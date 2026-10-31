# Priscilla Ijomah — Portfolio

Personal portfolio website for **Priscilla Ijomah**, a Product Designer who creates simple, useful, and engaging digital experiences.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | [Motion](https://motion.dev) (`motion/react`) |
| Font | [Montserrat](https://fonts.google.com/specimen/Montserrat) (Google Fonts) |
| Icons | [Lucide React](https://lucide.dev) |
| Package Manager | pnpm |
| Deployment | [Vercel](https://vercel.com) |

---

## Features

- **Smooth animations** — Scroll-triggered reveals, staggered entrances, hover micro-interactions, and floating effects powered by Motion.
- **Scroll-spy navigation** — Header active state updates automatically as you scroll through sections.
- **Responsive design** — Fully responsive across mobile, tablet, and desktop.
- **Interactive contact form** — Opens the user's email client with pre-filled content.
- **Resume download** — "View my resume" button opens `Priscilla-Ijomah-Resume.pdf` in a new tab.
- **Social link preview** — OpenGraph and Twitter meta tags configured for rich WhatsApp/social previews.
- **SEO optimised** — Robots, keywords, and structured metadata set up for discoverability.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with metadata & fonts
│   ├── page.tsx          # Home page
│   └── globals.css       # Tailwind theme tokens & global styles
├── components/
│   ├── animation/        # Reusable animation wrappers (FadeIn, StaggerContainer)
│   ├── common/           # Shared UI: Button, Typography, Input, HorizontalLine
│   ├── sections/         # Page sections: Hero, About, Services, Portfolio, Skills, DesignProcess
│   └── ui/               # Layout UI: Header, Footer, ContactForm
public/
├── assets/               # Images and SVG icons
├── docs/
│   └── Priscilla-Ijomah-Resume.pdf
└── og-image.jpg          # Social preview image (OpenGraph / WhatsApp)
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

```bash
npm install -g pnpm
```

### Install dependencies

```bash
pnpm install
```

### Run development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
pnpm build
```

### Start production server

```bash
pnpm start
```

---

## Deployment

The site is deployed on [Vercel](https://vercel.com). The production URL is automatically used for OpenGraph meta tags — no environment variables need to be configured manually.

To deploy your own fork:

1. Push the repository to GitHub.
2. Import the project on [vercel.com/new](https://vercel.com/new).
3. Vercel will auto-detect Next.js and deploy with zero configuration.

> If you use a **custom domain**, set the `NEXT_PUBLIC_SITE_URL` environment variable in Vercel to your domain (e.g. `https://priscillaijomah.com`) so OpenGraph images resolve correctly.

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Introduction, role title, bio, and skill pills |
| **About** | Background, design focus, approach, and goals |
| **Services** | Website & App Design, UI/UX, Animations, UX Research |
| **Design Process** | 6-step workflow: Discover → Define → Ideate → Design → Prototype → Test |
| **Skills & Tools** | Design skills checklist and tool stack (Figma, FigJam, HTML, CSS) |
| **Portfolio** | Selected projects with case study links |
| **Contact** | Email form + direct links for Email, WhatsApp, and LinkedIn |

---

Built by [IfeCodes](https://github.com/ALADETAN-IFE)
