# Madhavan K M — Personal Portfolio

A world-class personal portfolio website built with React + Vite + Framer Motion + Tailwind CSS.

## Features

- ✨ Animated loading screen
- 🎨 Dark / Light mode
- 🖱️ Custom cursor (desktop)
- 📊 Scroll progress indicator
- 🎭 Framer Motion animations throughout
- 💎 Glassmorphism UI
- 📱 Fully responsive
- ⚡ Particle background
- 🗂️ Filterable certificates gallery
- 📬 Contact form (opens email client)
- 🔍 Project modal with full details

## Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- **Framer Motion 11**
- **React Type Animation**
- **React Icons**

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

### Profile Photo
Place your profile photo at `public/profile.jpeg`. The hero section will display it automatically. Without the file, a placeholder with your initials is shown.

### Resume
Place your resume PDF at `public/resume.pdf` — the Download Resume and Resume nav buttons will link to it.

### Certificate / Event PDFs
- Internship certificate: `public/internship/internship-certificate.pdf`
- Course certificates: `public/certificates/<filename>.pdf` (see `src/data/index.js` for exact filenames)
- Event/Hackathon certificates: `public/hackathons/<filename>.pdf`

### Content
All portfolio content is centralized in `src/data/index.js`. Update that single file to change:
- Personal info, bio, social links (GitHub, LinkedIn, Email, Instagram)
- Education (Academics section)
- Skills (categorized) and "Also Familiar With" chips
- Projects (title, subtitle, description, tech stack, links)
- Experience / Internship
- Events & Participation (hackathons)
- Certificates

## Deployment to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel auto-detects Vite — click Deploy
4. Your portfolio is live!

The `vercel.json` file handles client-side routing.

---

Designed & Developed by **Madhavan K M** · 2025
