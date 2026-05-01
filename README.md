# Suraj Kashyap Portfolio

Personal portfolio built with Next.js App Router, React, and TypeScript, then exported as a static site for GitHub Pages.

## About Me

I am Suraj Kashyap, a Full-Stack Engineer with 4.5+ years of experience building production-grade MERN products across React.js, Next.js, Node.js, TypeScript, and MongoDB.

My work focuses on maintainable backend architecture, polished frontend systems, and AI-first product engineering. I build REST APIs, typed application layers, secure business workflows, and modern interfaces, and I also integrate OpenAI API workflows, RAG pipelines, NLP, OCR, and real-time product features into production systems.

This portfolio highlights my engineering profile, technology depth, professional experience, GitHub contribution work, and contact channels in a single responsive Next.js application.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- CSS Modules
- React Icons
- Static export for GitHub Pages

## Project Structure

```text
.
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.module.css
│   │   └── page.tsx
│   ├── components/
│   │   ├── ExperiencePanel.tsx
│   │   ├── ProjectGrid.tsx
│   │   └── ThemeToggle.tsx
│   └── data/
│       └── site-content.ts
├── .github/workflows/
│   └── deploy-pages.yml
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Application Notes

- `src/app/page.tsx` contains the main portfolio page and much of the current page-specific content.
- `src/components/` contains reusable client-side UI pieces.
- `src/data/site-content.ts` contains typed content models and structured portfolio data for reusable sections.
- `src/app/layout.tsx` defines metadata, global fonts, and the root layout.

## Local Development

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Run linting:

```bash
npm run lint
```

Run a TypeScript check:

```bash
npx tsc --noEmit
```

Create the production build:

```bash
npm run build
```

## Deployment

The site is configured in `next.config.ts` for static export. Production output is generated in `out/`.

GitHub Pages deployment is handled by `.github/workflows/deploy-pages.yml`. The workflow:

- installs dependencies with `npm ci`
- runs `npm run lint`
- runs `npm run build`
- uploads the generated `out/` directory to GitHub Pages

If a `CNAME` file is present, the workflow and Next.js config treat the site as using a custom domain and skip the repository-name base path.

## Contact

- Email: `surajkashyap9911@gmail.com`
- Phone: `9315981404`
- LinkedIn: `https://linkedin.com/in/kashyap-suraj`
