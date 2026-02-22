# KAAV IT Enabling Services — Corporate Website

A modern, animated single-page corporate website for **KAAV IT Enabling Services**, a Canada-based technology services firm. Built with React 19, Vite, TailwindCSS 4, and deployed on Vercel.

🌐 **Live Site:** [kaav-ites.com](https://kaav-ites.com)

---

## 🗂️ Page Sections

| Section | Description |
|---|---|
| **Hero** | Full-viewport landing with animated headline and CTA buttons |
| **About** | Company overview, KAAV principles (K-A-A-V), stats, and tabbed values/methodology |
| **Services** | Six core service offerings with icon cards and descriptions |
| **Technologies** | Tech stack tabs across AI, Frontend, Backend, Cloud & DevOps, and Database |
| **Clients** | Client trust band with testimonial carousel |
| **Contact** | Contact form with serverless email delivery, addresses, and embedded maps |

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
| [Resend](https://resend.com) | ^6 | Transactional email API |
| [@vercel/analytics](https://vercel.com/analytics) | ^1 | Web analytics |
| [@vercel/speed-insights](https://vercel.com/docs/speed-insights) | ^1 | Core Web Vitals tracking |

---

## 📁 Project Structure

```
KAAV/
├── api/
│   └── contact.js           # Vercel Serverless Function (Resend email)
├── public/
│   ├── Images/              # Static assets (logos, favicons)
│   ├── favicon.svg          # Primary SVG favicon
│   ├── site.webmanifest     # PWA manifest
│   ├── sitemap.xml          # SEO sitemap (homepage + anchors)
│   └── robots.txt           # Search engine crawler config
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
│   │   ├── Clients.jsx      # Client showcase & testimonials
│   │   └── Contact.jsx      # Contact form & info cards
│   ├── data/                # Static content / copy
│   │   ├── company.js       # Company info & contact details
│   │   ├── services.js      # Service definitions
│   │   └── technologies.js  # Technology stack entries
│   ├── App.jsx              # Root component (Analytics + SpeedInsights)
│   └── main.jsx             # App entry point
├── index.html               # HTML shell with meta tags & JSON-LD schemas
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

# 3. Copy environment variables
cp .env.example .env.local
# Fill in VITE_GTM_ID, VITE_GA_MEASUREMENT_ID, and RESEND_API_KEY

# 4. Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`.

### Environment Variables

| Variable | Description |
|---|---|
| `VITE_GTM_ID` | Google Tag Manager container ID |
| `VITE_GA_MEASUREMENT_ID` | Google Analytics 4 measurement ID |
| `RESEND_API_KEY` | Resend API key for the contact form email |

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

### Contact Details

| Item | Detail |
|---|---|
| **Headquarters** | 6452 Chaumont Crescent, Mississauga, ON L5N 2M8, Canada |
| **Offshore Dev Center** | 405, Trade House, 14 South Tukoganj Rd, Indore, MP, India *(via Kodvix Technologies)* |
| **Email** | info@kaav-ites.com · contact@kaav-ites.com |
| **Phone** | +1 (249) 876-5343 |
| **Hours** | Mon – Fri: 9:00 AM – 6:00 PM EST |
| **Partner** | [Kodvix Technologies](https://www.kodvix.com/) |

---

## ✨ Key Features

- **Animated UI** — Framer Motion stagger animations on scroll, GSAP effects, particle canvas background
- **Custom Cursor** — Interactive mouse-follower cursor on desktop
- **Responsive Design** — Mobile-first layout with animated hamburger nav
- **Intersection Observer** — Sections animate in when scrolled into view
- **Live Metrics Dashboard** — Animated performance/uptime/security/quality bars in the About section
- **Technology Tabs** — Filterable tech stack organized by category (AI / Frontend / Backend / Cloud & DevOps / Database)
- **Single-Page Navigation** — Smooth anchor-based internal navigation
- **Contact Form** — Validated form with Vercel Serverless Function + Resend API email delivery
- **Vercel Analytics** — Real-time visitor analytics and Core Web Vitals monitoring
- **SEO Optimised** — Structured data (JSON-LD: ProfessionalService, FAQPage, ItemList), sitemap with section anchors, Open Graph tags, canonical URLs, aria-labels, and semantic HTML throughout

---

## 🔍 SEO Implementation

The site includes the following SEO enhancements:

- **Structured Data (JSON-LD):** `WebSite`, `ProfessionalService`, `FAQPage`, and `ItemList` schemas in `index.html`
- **Schema Microdata:** `Service` on service cards, `Review` + `Organization` on testimonials, `LocalBusiness` + `PostalAddress` on contact info
- **Open Graph & Twitter Cards:** Full social preview metadata with image dimensions
- **Sitemap:** `public/sitemap.xml` covering homepage and all major anchor sections
- **Robots:** `public/robots.txt` pointing crawlers to the sitemap
- **Semantic HTML:** Logical heading hierarchy (h1 → h2 → h3), aria-labels on all sections

---

## ☁️ Deployment

The site is deployed on **Vercel** with the following configuration:

- **Contact API:** `api/contact.js` is automatically deployed as a Vercel Serverless Function
- **Analytics:** `@vercel/analytics` and `@vercel/speed-insights` are active in production
- **Environment Variables:** Set `RESEND_API_KEY`, `VITE_GTM_ID`, and `VITE_GA_MEASUREMENT_ID` in the Vercel dashboard

---

## 📄 License

This project is proprietary. All rights reserved © KAAV IT Enabling Services.
