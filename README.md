# Portfolio — Rotsiniaina RAMANANTSOA (RoutsGG)

Portfolio minimaliste « dev terminal » — React 19 + Vite + Tailwind CSS v4.

Déployé sur **https://routsgg.me** via GitHub Pages (branche `gh-pages`, `CNAME`).

## Stack

- Vite 7+, React 19, TypeScript 5.8 (strict)
- Tailwind CSS v4 via `@tailwindcss/vite` (`@theme`, pas de `tailwind.config.js`)
- `lucide-react` pour les icônes
- Animations CSS-only (IntersectionObserver, transforms)

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev      # http://localhost:5173
npm run lint     # eslint, 0 warning
npm run build    # tsc -b && vite build  -> dist/
npm run preview  # preview du build
```

## Déploiement GitHub Pages

Le fichier `CNAME` (routsgg.me) est copié automatiquement :

```bash
npm run deploy   # predeploy -> build + cp CNAME, puis gh-pages -d dist
```

Ou manuellement :

```bash
npm run build
cp CNAME dist/CNAME
npx gh-pages -d dist
```

Configurer le repo GitHub : Settings > Pages > Source: branche `gh-pages` / root.

## Structure

```
src/
├─ assets/fonts/editundo.ttf
├─ assets/images/{routs.webp, logos/, project/, Certificate/}
├─ components/layout  → Header, Footer, ScrollTop
├─ components/splash  → SplashScreen, Keyboard, KeyboardKey, TerminalLine
├─ components/sections → Hero, About, Experience, Skills, Projects, Certifications, Contact
├─ components/ui      → SectionTitle, Badge, Modal, ThemeToggle
├─ data/              → profile, education, experiences, skills, projects, certifications, keyboard, qualities
├─ hooks/             → useTypingSequence, useTheme, useScrollSpy, useLockBodyScroll, useReveal
├─ types/             → index.ts
├─ styles/index.css   → @import "tailwindcss" + @theme
├─ App.tsx
└─ main.tsx
```

## Splash Screen

Le splash occupe 100dvh, tape `./start.sh` en ~3.5-4.5s avec jitter ±40ms, illuminations synchronisées des touches AZERTY (dont Shift+; pour `.` et Shift+: pour `/`), touche Entrée 250ms, ligne `> booting portfolio…`, puis fondu 400ms. Skip par bouton, clic overlay ou `Échap`. Respecte `prefers-reduced-motion`. Hook `useTypingSequence` dédié, timers nettoyés.

## Thème

Dark par défaut, light toggle en header. Persistance `localStorage`, respect `prefers-color-scheme`. Couleurs définies dans `@theme`:

```
--color-accent: #14b8a6
--color-bg: #0a0a0a
--color-bg-second: #141414
--color-border: #262626
--color-text: #ededed
--color-text-muted: #8a8a8a
```

## Accessibilité

- `html lang="fr"`, un seul `h1`, hiérarchie `h2`/`h3`
- `alt` sur images, `aria-label` sur icônes, `role="tablist"` / focus trap modal / restauration focus
- Contraste AA, `focus-visible` sur tous les interactifs, navigation clavier complète

## Responsive

Mobile-first, `dvh`/`svh`, `env(safe-area-inset-*)`, aucune duplication desktop/mobile, grilles `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`, zéro scroll horizontal, touch targets ≥44px.

## Licence

© 2025 RoutsGG — NOOBIERAM
