# Restu - Landing Page

Landing page para **Restu**, plataforma de gestión de restaurantes (POS/KDS/delivery) para restaurantes chilenos.

## 🚀 Tech Stack

- **Framework**: Astro 6.4 (SSG)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript (strict mode)
- **Hosting**: GitHub Pages

## Project Structure

```
src/
├── components/        # Astro components (Header, Hero, Comparison, Pricing, Features, CtaSection, Footer)
├── layouts/          # Layout.astro (base HTML shell, global styles)
├── pages/            # index.astro (single landing page)
└── styles/           # animations.css (Tailwind + custom animations)
```

## 🧞 Commands

| Command           | Action                                      |
| :--------------- | :----------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally                  |

## ✅ Features

- **SEO Optimizado**: sitemap.xml, robots.txt, Open Graph, Twitter Cards, JSON-LD
- **Accesibilidad WCAG 2.2 AA**: focus visible, skip link, contraste de colores, reduced motion
- **Responsive Design**: mobile-first approach
- **Performance**: CSS purgado, static HTML generation
- **Deployment Automático**: GitHub Actions workflow

## 🌐 Live Demo

https://restu.cl

## 📄 License

MIT
