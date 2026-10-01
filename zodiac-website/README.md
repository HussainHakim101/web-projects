# Zodiac — A Celestial Journey

An immersive, interactive zodiac signs website featuring scroll-driven card transitions, FLIP-based card expansion animations, and a cosmic background experience.

**[Live Demo →](#)** *(Deploy to GitHub Pages)*

---

## Features

- **12 Zodiac Sign Cards** — Premium glassmorphism cards with unique visual identity for each sign
- **Scroll-Driven Transitions** — Cards smoothly interchange as you scroll, creating a celestial deck experience
- **Click-to-Expand** — FLIP animation expands any card from its exact position into a detailed full-screen view
- **Smooth Close Animation** — Cards animate back to their original scroll position on close
- **Cosmic Background** — Canvas-based animated starfield with twinkling stars, nebulae, and mouse parallax
- **3D Hover Effects** — Cursor-tracked tilt, glow, and constellation reveal on desktop
- **Constellation Art** — Each card features its sign's astronomical constellation pattern
- **Responsive Design** — Optimized for desktop, tablet, and mobile
- **Keyboard Accessible** — Full keyboard navigation and Escape to close
- **Performance Optimized** — `requestAnimationFrame`, CSS transforms, `prefers-reduced-motion` support

## Tech Stack

- **HTML5** — Semantic markup with ARIA labels
- **CSS3** — Custom properties, glassmorphism, gradients, responsive design
- **Vanilla JavaScript** — Zero dependencies, ES6+

## Project Structure

```
zodiac-website/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── script.js
│   └── zodiac-data.js
├── images/
│   └── zodiac/
│       ├── aries.svg
│       ├── taurus.svg
│       └── ... (12 constellation SVGs)
├── assets/
│   └── icons/
└── README.md
```

## Getting Started

1. Clone or download this repository
2. Open `index.html` in any modern browser
3. No build step, no server, no dependencies required

## Deployment

This project is designed for static hosting. To deploy on GitHub Pages:

1. Push the `zodiac-website/` contents to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to your branch and root folder
4. Your site will be live at `https://<username>.github.io/<repo>/`

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Interactions

| Action | Result |
|--------|--------|
| Scroll down | Cards transition and interchange smoothly |
| Scroll up | Animations reverse naturally |
| Click card | Card expands from its position with FLIP animation |
| Click × / Press Escape | Card collapses back to its original position |
| Hover card (desktop) | 3D tilt, glow increase, constellation reveal |
| Mouse move (desktop) | Parallax effect on background stars |

## Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation (Tab, Enter, Escape)
- `prefers-reduced-motion` support
- Focus management in expanded card view

## License

MIT

---

*Crafted under the stars.*
