# Abhiram M S — Developer Portfolio (Swiss Minimalist & Cinematic Edition)

A high-end, digital-first developer portfolio for **Abhiram M S**, AI & Data Science Engineer. Built with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**, featuring a modern **Swiss Design Aesthetic**.

---

## 🎨 Art Direction & Design Features

- **Monochromatic Base & Crimson Accent**: Stark inky blacks (`#000000`), pure crisp whites (`#FFFFFF`), and striking crimson blood-red accents (`#E60000`).
- **High-Impact Block Transitions**: Alternating solid black and solid white sectional blocks (`#000000` ↔ `#FFFFFF`).
- **Typography & Precision Layout**: Oversized Helvetica/Inter typography, tight letter spacing, 1px ultra-thin borders, corner crosshair anchors (`+`), and bracketed micro-copy (e.g. `[01 / HERO]`).
- **Dynamic Interactions**: Infinite scrolling marquee ticker, modal project specifications view, simulated GitHub contribution activity graph, and smooth section navigation.
- **Working Contact Form**: Integrated with Web3Forms (`c7dc65ac-9c22-4ad2-bf0a-9e3250dd48ae`) for direct message delivery to `abhiramms.vyt@gmail.com`.

---

## 🚀 Technology Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: Web3Forms API

---

## 💻 Project Structure

```
d:\port/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── image.jpg.jpeg          # Abhiram's profile image
├── project1.jpg            # KTU PYQ Analyzer project image
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── types/
    │   └── index.ts
    ├── data/
    │   └── portfolioData.ts # Easily update projects, skills, education & bio here!
    └── components/
        ├── Navbar.tsx
        ├── Marquee.tsx
        ├── Hero.tsx
        ├── About.tsx
        ├── Skills.tsx
        ├── Projects.tsx
        ├── ProjectModal.tsx
        ├── Experience.tsx
        ├── Education.tsx
        ├── Achievements.tsx
        ├── GithubSection.tsx
        ├── Contact.tsx
        └── Footer.tsx
```

---

## 📦 How to Run Locally

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### Installation Steps

1. Open your terminal in the project directory:
   ```bash
   cd d:\port
   ```

2. Install all dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:3000` to view the live portfolio!

---

## 🛠️ How to Update Portfolio Data

All text, bio, social links, skills, projects, experience, and leadership entries are centralized in `src/data/portfolioData.ts`. You can easily add or edit content without modifying component code.
