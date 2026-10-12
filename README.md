# Sara Mohamed — Developer Portfolio Website

A modern, production-quality personal developer portfolio website for **Sara Mohamed** (Flutter & Web Developer & Computer Science Student at Minya National University).

Built with **React, TypeScript, Vite, Tailwind CSS v4, and Lucide Icons**.

---

## 🚀 Quick Start

### 1. Installation & Local Development
```bash
# Navigate to the project directory
cd sara-portfolio-web

# Install dependencies (if not already installed)
npm install

# Start local development server with Hot Module Replacement (HMR)
npm run dev
```

Visit `http://localhost:5173` in your browser.

### 2. Production Build
```bash
# Type check and build optimized static assets
npm run build

# Preview the production build locally
npm run preview
```

---

## 📁 Architecture & File Structure

```
sara-portfolio-web/
├── index.html                     # SEO metadata, Open Graph, Twitter cards, FOUC-prevention script
├── package.json                   # Dependencies (React, Vite, Tailwind CSS v4, Lucide)
├── vite.config.ts                 # Vite + Tailwind v4 plugin config
├── tsconfig.json                  # Strict TypeScript configuration
├── public/
│   ├── favicon.svg                # Modern monogram favicon
│   └── assets/
│       ├── profile/               # Profile photo / avatar assets
│       ├── cv/                    # Curriculum vitae PDF
│       ├── certificates/          # High-resolution certificates (SVG / PNG / JPG)
│       └── projects/              # Structured folders for project screenshots
│           ├── logitrack/
│           ├── noorah/
│           ├── Nafi3/
│           ├── smart_home/
│           └── shop sport/
└── src/
    ├── main.tsx                   # Application entry
    ├── App.tsx                    # Main shell connecting navigation, modals, and sections
    ├── index.css                  # Tailwind CSS v4, custom dark variant, fonts, and scrollbars
    ├── types/
    │   └── index.ts               # Strict TypeScript interfaces
    ├── data/                      # 📌 CENTRALIZED CONTENT (Edit your data here!)
    │   ├── socialLinks.ts         # LinkedIn, GitHub, Email, WhatsApp, CV path
    │   ├── projects.ts            # Case studies, technologies, screenshots, features
    │   ├── certificates.ts        # Training certificates & bootcamps
    │   ├── skills.ts              # Categorized skills & technology badges
    │   └── education.ts           # Minya National University details
    ├── hooks/
    │   ├── useTheme.ts            # Light / dark theme toggle with localStorage persistence
    │   └── useScrollSpy.ts        # Active navbar link tracking on scroll
    └── components/
        ├── common/                # Reusable Badges, Buttons, SectionHeaders, Dialog Modals, SVGs
        ├── layout/                # Sticky Navbar, Mobile Drawer, Production Footer
        └── sections/              # Hero, About, Featured, Gallery, Lightbox, Case Study, Contact
```

---

## 🛠️ Where to Update Content & Placeholders

### 1. LinkedIn & Social Links
Open [`src/data/socialLinks.ts`](file:///C:/Users/EAA/.gemini/antigravity/scratch/sara-portfolio-web/src/data/socialLinks.ts):
- Replace `linkedin: 'https://www.linkedin.com/in/your-profile-here'` with your real LinkedIn profile URL.
- Replace `whatsappPlaceholder` with your actual phone number if desired.

### 2. Real CV / Resume PDF
Drop your real resume PDF file directly at:
```
public/assets/cv/Sara_Mohamed_Resume.pdf
```
Both the "Download CV" button and "View Resume" modal automatically reference this file.

### 3. Profile Photo
The hero photo is:
```
public/assets/profile/photo_2026-05-17_15-21-53.jpg
```
To change it, add a new image to `public/assets/profile/` and update the `src` attribute in [`src/components/sections/HeroSection.tsx`](file:///C:/Users/EAA/.gemini/antigravity/scratch/sara-portfolio-web/src/components/sections/HeroSection.tsx).

### 4. Certificates Gallery
Place your certificate scan images (PNG, JPG, or SVG) in:
```
public/assets/certificates/
```
Then in [`src/data/certificates.ts`](file:///C:/Users/EAA/.gemini/antigravity/scratch/sara-portfolio-web/src/data/certificates.ts), update the `image` path for each certificate (e.g., `image: '/assets/certificates/my-real-cert.png'`).

### 5. Project Screenshots & Case Studies
Organize your application screenshots in:
```
public/assets/projects/logitrack/
public/assets/projects/noorah/
public/assets/projects/Nafi3/
public/assets/projects/smart_home/
public/assets/projects/shop sport/
```
In [`src/data/projects.ts`](file:///C:/Users/EAA/.gemini/antigravity/scratch/sara-portfolio-web/src/data/projects.ts):
- Update `heroImage` and `screenshots` arrays with your image file paths.
- Update `liveDemoUrl`, `githubUrl`, or video demo links.
- Edit any feature or challenge items marked with `[Editable]`.

---

## 🌟 Key Features Built

- **Polished Dark / Light Mode**: Instant toggle with zero Flash of Unstyled Content (FOUC) and automatic persistence.
- **Interactive Project Case Study Modal**: Comprehensive breakdown including Problem, Solution, Key Features, Screenshots Gallery, Technical Stack, and Challenges.
- **Certificate Lightbox Gallery**: Direct visual certificate preview cards with fullscreen lightbox, Prev/Next buttons, and keyboard arrow controls.
- **Filterable Project Hub**: Real-time filtering by All, Flutter, Web, UI/UX, and Other without layout shift.
- **Zero Horizontal Overflow & Full Mobile Responsiveness**: Verified on desktop and 375px mobile viewports.
- **Centralized Content Management**: Add or edit projects, certificates, and skills without touching UI markup.
