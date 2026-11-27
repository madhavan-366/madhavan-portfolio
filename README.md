# My Personal Portfolio

A modern, responsive developer portfolio built for **Madhavan K M** to present applied AI/ML engineering work, full-stack web applications, data analytics experience, and verified academic credentials.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-madhavankm.vercel.app-C49A6C?style=for-the-badge&logo=vercel&logoColor=1B1714)](https://madhavan-portfolio-sage.vercel.app/)
[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=1B1714)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

---

## About the Project

This portfolio serves as a centralized, recruiter-ready showcase for **Madhavan K M**, a B.Tech undergraduate specializing in **Artificial Intelligence and Data Science** at Rajalakshmi Institute of Technology, Chennai (**8.4 CGPA**).

Designed around a warm **Espresso Brown and Cream** aesthetic with both dark and light themes, the site highlights hands-on technical skills, end-to-end projects, industry internship contributions, academic history, and downloadable PDF credentials in a fast, single-page React application.

---

## Live Demo

- **Deployed Portfolio**: [https://madhavan-portfolio-sage.vercel.app/](https://madhavan-portfolio-sage.vercel.app/)
- **Primary Domain**: [https://madhavankm.vercel.app/](https://madhavankm.vercel.app/)

---

## Features

- **Espresso Brown & Cream Theme with Dark/Light Toggle**: Built with CSS custom properties and Tailwind theme tokens, persisting user theme preference in `localStorage` (`dark` default, `light` toggleable).
- **Responsive Layout & Sticky Navigation**: Glassmorphic header with active-section scroll tracking, mobile drawer navigation, and a top reading progress bar.
- **Hero Profile Showcase & Typewriter Roles**: Features an animated role sequence, key academic and project metrics (`8.4` CGPA, `3` featured projects, `1` industry internship, `6` certifications), direct resume download, and a profile card.
- **Filterable Skills Matrix & Tech Marquee**: Interactive category tabs across four technical domains alongside a continuous scrolling technology marquee (respects `prefers-reduced-motion`).
- **Interactive Project Architecture Modals**: Project cards link to live deployments and GitHub, plus accessible modal dialogs (`Escape` and backdrop dismissal) detailing system architecture pipelines, problem statements, solutions, and tech stacks.
- **Verified PDF Credentials & Resume Access**: Direct in-browser viewing and download links for the resume, internship certificate, course certifications, and hackathon participation records stored under `public/`.
- **Direct Contact & One-Click Email Copy**: Copy-to-clipboard email action, `mailto:` and `tel:` links, and direct GitHub and LinkedIn profile links.
- **SEO & Social Metadata**: Configured with Open Graph tags, Twitter Cards, canonical URL, and Schema.org `Person` JSON-LD structured data.

---

## Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend Core** | React 18, HTML5, CSS3, JavaScript (ES6+) |
| **Styling & Design** | Tailwind CSS 3, CSS Custom Properties, Google Fonts (`Inter`, `Poppins`, `JetBrains Mono`) |
| **Animations & UI** | Framer Motion 11, `react-type-animation`, `react-icons` (`Feather`, `Heroicons`) |
| **Build & Tooling** | Vite 5, PostCSS, Autoprefixer, ESLint (`eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`) |
| **Hosting & Routing** | Vercel (`vercel.json` SPA rewrites) |

> **Note:** This is a client-side static frontend application; no custom backend server or database is required to run or host the portfolio.

---

## Website Sections

1. **Home (`#home`)** — Value proposition, animated focus areas, primary CTAs (*View Projects*, *Download Resume*, *Get In Touch*), key stats bar (`8.4` CGPA), social links, and profile card.
2. **About (`#about`)** — Background narrative, professional attributes, and four highlight cards covering Applied AI & Machine Learning, Full-Stack Web Engineering, Data Analytics & BI Pipelines, and Academic & Industry Track Record (`8.4 CGPA`).
3. **Skills (`#skills`)** — Filterable technical competencies organized into *AI & Machine Learning*, *Full-Stack & Backend Engineering*, *Data Science, BI & Databases*, and *Tools & Cloud Deployment*, plus a rapid-stack marquee.
4. **Projects (`#projects`)** — Three featured projects (*Deepfake Detector*, *LTV Predictor*, and *Go Plan*) with live demo links, GitHub links, and interactive architecture modals.
5. **Experience (`#experience`)** — Data Analyst Internship at *Elevate Labs* (*Best Performer*), responsibilities, applied tools, verified PDF certificate link, and role availability callout (`8.4 CGPA`).
6. **Academics (`#academics`)** — *B.Tech in Artificial Intelligence and Data Science* at Rajalakshmi Institute of Technology (`2023 – 2027`, `8.4 CGPA`) and *Higher Secondary Certificate (HSC)* at Brotherhood Matric Hr Sec School (`2022 – 2023`, `90.3%`), with core coursework.
7. **Credentials (`#credentials`)** — Unified, filterable gallery of 6 certifications (Simplilearn, Tata Forage, Deloitte Forage, Springpod Amazon, and 2 NPTEL IIT Kharagpur Elite courses) and 3 hackathon/competition entries (Google Cloud Agentic AI Day, GDSC Solution Challenge, Myntra Trend. Set. Go. Challenge).
8. **Contact (`#contact`)** — Direct email card with one-click copy, phone and location info, and LinkedIn/GitHub profile cards.

---

## Project Structure

```text
madhavan-portfolio/
├── public/
│   ├── certificates/                  # Course & job simulation PDF certificates
│   ├── hackathons/                    # Hackathon participation PDFs
│   ├── internship/
│   │   └── internship-certificate.pdf # Elevate Labs internship certificate
│   ├── favicon.svg                    # Site favicon
│   ├── profile.jpeg                   # Profile photograph
│   └── resume.pdf                     # Downloadable resume PDF
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.jsx             # Navigation links, socials, back-to-top
│   │   │   └── Navbar.jsx             # Fixed navbar, theme toggle, mobile drawer
│   │   ├── sections/
│   │   │   ├── About.jsx              # Background narrative & highlight cards
│   │   │   ├── Academics.jsx          # Education history & coursework
│   │   │   ├── Certificates.jsx       # Filterable certifications & hackathons
│   │   │   ├── Contact.jsx            # Direct email copy, phone, location & profiles
│   │   │   ├── Experience.jsx         # Internship history & target roles
│   │   │   ├── Hero.jsx               # Hero intro, stats, CTAs & profile card
│   │   │   ├── Projects.jsx           # Project grid & architecture modal
│   │   │   └── Skills.jsx             # Filterable skill categories & marquee
│   │   └── ui/
│   │       ├── ScrollProgress.jsx     # Top scroll progress indicator
│   │       ├── SectionHeader.jsx      # Reusable section heading & eyebrow
│   │       └── TechMarquee.jsx        # Smooth horizontal marquee component
│   ├── data/
│   │   └── index.js                   # Centralized portfolio content & links
│   ├── hooks/
│   │   ├── useActiveSection.js        # Scroll-based active nav section tracker
│   │   ├── useScrollProgress.js       # Document scroll percentage hook
│   │   └── useTheme.js                # Dark/light theme state & persistence
│   ├── utils/
│   │   └── animations.js              # Shared Framer Motion animation variants
│   ├── App.jsx                        # Root layout composing all sections
│   ├── index.css                      # Tailwind directives, CSS variables & utilities
│   └── main.jsx                       # React entry point
├── .eslintrc.cjs                      # ESLint configuration
├── index.html                         # HTML shell, fonts & SEO/JSON-LD metadata
├── package.json                       # Dependencies and npm scripts
├── postcss.config.js                  # PostCSS plugins configuration
├── tailwind.config.js                 # Custom Espresso/Cream/Caramel theme tokens
├── vercel.json                        # Vercel SPA rewrite rules
└── vite.config.js                     # Vite build & manual chunk splitting
```

---

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** (bundled with Node.js)
- **Git**

### Installation & Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/madhavan-366/madhavan-portfolio.git
   cd madhavan-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   Open the local URL printed by Vite in your terminal (typically `http://localhost:5173`).

---

## Available Scripts

All scripts are defined in `package.json`:

| Command | Script | Description |
| :--- | :--- | :--- |
| `npm run dev` | `vite` | Starts the local Vite development server with hot module replacement (HMR). |
| `npm run build` | `vite build` | Bundles the production build into the `dist/` directory. |
| `npm run lint` | `eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0` | Runs ESLint across all `.js` and `.jsx` files with zero warnings allowed. |
| `npm run preview` | `vite preview` | Serves the production `dist/` build locally for verification. |

---

## Customization

- **Portfolio Content (`src/data/index.js`)**: Single source of truth for `personalInfo`, `education`, `skillCategories`, `allSkillsList`, `projects`, `experience`, `certificates`, `events`, and `navLinks`.
- **Theme & Styling (`src/index.css`, `tailwind.config.js`)**: Update CSS custom properties under `:root` and `html.light, body.light` or extend Tailwind color/font tokens.
- **Profile Image, Resume & Certificates (`public/`)**: Replace `public/profile.jpeg` or `public/resume.pdf` directly (keeping the same filenames), and add or update PDFs in `public/certificates/`, `public/hackathons/`, and `public/internship/`.
- **SEO & Metadata (`index.html`)**: Update the page title, meta descriptions, canonical URL, Open Graph tags, and Schema.org JSON-LD block.

---

## Deployment

The project is configured for **Vercel** deployment:

- `vercel.json` rewrites all incoming paths (`/(.*)`) to `/` so the SPA serves cleanly.
- `vite.config.js` builds static assets into `dist/` (`base: '/'`, sourcemaps disabled, and manual Rollup chunks for `vendor` and `motion`).

To deploy manually or via Vercel Git integration:

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

---

## Author

**Madhavan K M**

- **LinkedIn**: [https://www.linkedin.com/in/madhavankm366/](https://www.linkedin.com/in/madhavankm366/)
- **GitHub**: [https://github.com/madhavan-366](https://github.com/madhavan-366)

---

## License

No open-source license file is currently present in this repository. All rights reserved by the author unless explicitly stated otherwise.
