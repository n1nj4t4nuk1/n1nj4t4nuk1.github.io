# javierparada.phd

Personal academic site, built with [Nuxt 3](https://nuxt.com) + [Nuxt Content](https://content.nuxt.com) + Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Site available at http://localhost:3000.

## Static build

```bash
npm run generate
```

Output written to `.output/public`. Deployed automatically to GitHub Pages on push to `main`.

## Content

All editable content lives under `content/`:

- `content/publications/` — one markdown file per paper
- `content/projects/` — one markdown file per project
- `content/news/` — one markdown file per news item
- `content/blog/` — one markdown file per blog post

The `about` page is `pages/index.vue`; the `cv` timeline is `pages/cv.vue`.

## Styling

- Colors and typography live in `tailwind.config.ts` and `assets/css/main.css`.
- Serif: Cormorant Garamond. Sans: Inter. Mono: JetBrains Mono.
- Light theme only.
