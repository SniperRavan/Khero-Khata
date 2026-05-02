# Khero Khata 📓✨

> A premium, high-fidelity **Neomorphic Task Management Dashboard** built entirely with Vanilla Web Technologies.

**Khero Khata** is a Single Page Application (SPA) crafted with a strict focus on **Dark Neomorphism** (soft UI). It delivers a sleek, tactile, and highly responsive interface for managing daily tasks, tracking project progress, and monitoring team activity — all without a single external dependency.

![GitHub repo size](https://img.shields.io/github/repo-size/SniperRavan/Khero-Khata?color=7c3aed&style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/SniperRavan/Khero-Khata?color=06b6d4&style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![Zero Dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen?style=flat-square)

---

## 🚀 Features

### 🎨 UI & UX Design
- **True Dark Neomorphism** — Precisely calculated dual `box-shadow` values using CSS custom properties to simulate a physical, pillowy surface illuminated by a soft top-left light source.
- **Complex Overlapping Layouts** — Absolute/relative positioning combined with CSS Grid to create sophisticated overlapping elements (e.g., the Add Task module "tucked" into the Upcoming Tasks card).
- **Gradient Scroll Affordance** — Custom scrollable containers with hidden scrollbars and a CSS `-webkit-mask-image` gradient that fades content into the background, mimicking native iOS aesthetics.
- **Responsive Layout Architecture** — Modern Flexbox and Grid (`1.6fr 1fr` splits) ensuring cards maintain strict aspect ratios across screen sizes.
- **Dynamic Theming (`theme.js`)** — Runtime theme switching support baked directly into the JavaScript layer.

### ⚙️ Technical Architecture
- **Vanilla SPA Router (`router.js`)** — A custom-built JavaScript routing engine that intercepts navigation clicks, prevents full-page reloads, and dynamically injects HTML templates into the DOM.
- **Modular Logic (`logic.js`)** — DOM manipulation scoped into initialization functions so event listeners (adding tasks, toggling checkboxes) are correctly bound whenever the router switches views.
- **Event Delegation** — Optimized event handling for dynamically created DOM elements (e.g., toggling the "completed" state of freshly added tasks).
- **Zero Dependencies** — 100% standard HTML5, CSS3, and ES6+ JavaScript. No npm, no bundler, no framework.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (Variables, Grid, Flexbox, Masks, Advanced Selectors) |
| Logic | Vanilla JavaScript (ES6+, DOM API, Event Delegation) |
| Typography | [Inter](https://fonts.google.com/specimen/Inter) & [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) via Google Fonts |

---

## 📂 Project Structure

```text
Khero-Khata/
├── index.html              # SPA shell — navigation sidebar & view container
├── README.md               # Project documentation
├── .gitignore              # Git ignore rules
├── assets/
│   └── icons/              # SVG / icon assets
├── styles/
│   ├── base.css            # Resets, typography & structural layout
│   ├── components.css      # Cards, buttons, inputs & neomorphic UI physics
│   └── themes.css          # CSS Variables — colors, shadows & spacing tokens
└── js/
    ├── router.js           # SPA navigation & HTML template injection
    ├── logic.js            # Interactive DOM logic (tasks, checkboxes)
    └── theme.js            # Runtime theme switching logic
```

---

## 💻 Getting Started

Because this project has **zero external dependencies or build steps**, running it locally is effortless.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SniperRavan/Khero-Khata.git
   ```

2. **Navigate to the directory:**
   ```bash
   cd Khero-Khata
   ```

3. **Launch the app:**
   - **Quick:** Double-click `index.html` to open it directly in your browser.
   - **Recommended:** Open the folder in [VS Code](https://code.visualstudio.com/) and use the **Live Server** extension for hot-reload during development.

> **Note:** Some browser features (e.g., ES modules) require a local HTTP server. Live Server handles this automatically.

---

## 🎨 Design Philosophy: The Neomorphic Math

Achieving authentic **Dark Neomorphism** requires precise color and shadow mathematics. Pure black backgrounds absorb all shadows and break the 3D illusion.

This project solves this with a slightly elevated base surface (`#26292d`) and a dual-shadow system:

| Element Type | Shadow Strategy |
|---|---|
| **Raised** (Cards, Buttons) | Dark drop shadow (`#1e2124`) bottom-right + soft light highlight (`#2e3136`) top-left |
| **Carved** (Inputs, Checkboxes) | Inverted `inset` shadows simulating grooves cut directly into the surface |

---

## 🔮 Future Enhancements

- [ ] **Local Storage Integration** — Persist tasks across browser sessions via `localStorage`.
- [ ] **Drag & Drop** — Reorder tasks or move them between categories using the HTML5 Drag & Drop API.
- [ ] **Backend Integration** — Connect the frontend to a Node.js/Express REST API with MongoDB or PostgreSQL.
- [ ] **PWA Support** — Add a Service Worker and Web App Manifest for offline access and installability.
- [ ] **Keyboard Accessibility** — Full keyboard navigation and ARIA attributes for a11y compliance.

---

## 👨‍💻 Author

**Sniper Ravan**

- 🐙 GitHub: [@SniperRavan](https://github.com/SniperRavan)

---

*Found this useful? Drop a ⭐ on the repo — it keeps the motivation alive!*