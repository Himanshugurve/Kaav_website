# KAAV IT Enabling Services — Corporate Website

A modern, animated single-page corporate website for **KAAV IT Enabling Services**, a Canada-based technology services firm. Built with React 19, Vite, TailwindCSS 4, and TypeScript.

---

## 🌐 Live Sections

| Section | Description |
|---|---|
| **Hero** | Full-viewport landing with animated headline, CTA buttons, and particle background |
| **About** | Company overview, KAAV principles (K-A-A-V), stats, specializations, tabbed values/methodology |
| **Services** | Six core service offerings with icon cards |
| **Technologies** | Tech stack showcase across Frontend, Backend, Cloud & Database categories |
| **Clients** | Client trust/testimonial band |
| **Contact** | Contact form with company address, email, and working hours |

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev) | ^19 | UI framework |
| [Vite](https://vitejs.dev) | ^7 | Build tool & dev server |
| [TypeScript](https://www.typescriptlang.org) | ~5.9 | Type safety |
| [TailwindCSS](https://tailwindcss.com) | ^4 | Utility-first CSS |
| [Framer Motion](https://www.framer.com/motion/) | ^12 | Declarative animations |
| [GSAP](https://gsap.com) | ^3 | High-performance animations |
| [Lucide React](https://lucide.dev) | ^0.563 | Icon library |
| [Mouse Follower](https://npmjs.com/package/mouse-follower) | ^1.1 | Custom cursor effect |

---

## 📁 Project Structure

```
KAAV/
├── public/
│   └── Images/              # Static assets (logo, etc.)
├── src/
│   ├── components/          # Shared UI components
│   │   ├── Header.jsx       # Fixed nav with mobile hamburger menu
│   │   ├── Footer.jsx       # Footer with links and company info
│   │   ├── ParticleBackground.jsx  # Animated canvas particles
│   │   ├── CustomCursor.jsx        # Mouse-follower custom cursor
│   │   └── ServiceIcons.jsx        # SVG icon set for services
│   ├── sections/            # Full-page sections
│   │   ├── Hero.jsx         # Landing hero section
│   │   ├── About.jsx        # Company info, stats, tabs
│   │   ├── Services.jsx     # Service cards grid
│   │   ├── Technologies.jsx # Tech stack tabs
│   │   ├── Clients.jsx      # Client showcase
│   │   └── Contact.jsx      # Contact form & info
│   ├── data/                # Static data / content
│   │   ├── company.js       # Company info & contact details
│   │   ├── services.js      # Service definitions
│   │   └── technologies.js  # Technology stack entries
│   ├── styles/              # Global styles
│   ├── App.jsx              # Root component
│   └── main.jsx             # App entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or later
- **npm** v9 or later

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Himanshugurve/Kaav_website.git
cd Kaav_website

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server with hot reloading |
| `npm run build` | Build the production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run typecheck` | Run TypeScript type checking without emitting files |

---

## 🏢 About KAAV IT Enabling Services

**KAAV** stands for:
- **K**nowledge — Sharing deep expertise through training, consulting, and advisory services
- **A**utomation — Leveraging modern technology and efficient processes to accelerate results
- **A**dvisory — Guiding clients through complex IT and digital transformation challenges
- **V**alue — Delivering measurable impact, scalable solutions, and lasting business outcomes

### Core Services

- 🖥️ **Custom Software Development** — Tailored applications from concept to deployment
- 🌐 **Web Application Development** — Responsive web apps with modern frameworks
- 📱 **Mobile App Development** — Native & cross-platform iOS/Android apps
- ☁️ **Cloud Solutions** — AWS, Azure & GCP migration, deployment, and optimization
- 🔒 **Cybersecurity Services** — Assessments, hardening, and 24/7 monitoring
- 💼 **IT Consulting & Support** — Strategic guidance and ongoing technical support

### Company Details

| Item | Detail |
|---|---|
| **Location** | 405, Trade House, 14 South Tukoganj Rd, Indore, MP (Global delivery model – Canada HQ) |
| **Email** | hr@kodvix.com |
| **Hours** | Mon – Fri: 10:00 AM – 7:00 PM |
| **Partner** | [Kodvix Technologies](https://www.kodvix.com/) |

---

## ✨ Key Features

- **Animated UI** — Framer Motion stagger animations on scroll, GSAP effects, particle canvas background
- **Custom Cursor** — Interactive mouse-follower cursor on desktop
- **Responsive Design** — Mobile-first layout with animated hamburger nav
- **Intersection Observer** — Sections animate in when scrolled into view
- **Live Metrics Dashboard** — Animated performance/uptime/security/quality bars in the About section
- **Technology Tabs** — Filterable tech stack organized by category (Frontend / Backend / Cloud / Database)
- **Single-Page Navigation** — Smooth anchor-based internal navigation

---

## 📄 License

This project is proprietary. All rights reserved © KAAV IT Enabling Services.
