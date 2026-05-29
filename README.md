# Gautham Manuru Prabhu — Research Website

A research-focused academic website built for MS/PhD admissions in computer science.
It presents Gautham primarily as a machine-learning researcher (graph & temporal-graph
learning, efficient/scalable training) and secondarily as a software engineer.

Built with **Next.js 14 (App Router) · TypeScript · Tailwind CSS · shadcn/ui-style components ·
Framer Motion**, statically exported and deployed to **GitHub Pages**.

## Information architecture

A single, scannable page with anchored sections, ordered by admissions priority:

1. **Research Overview** (`Hero`) — who I am, interests, links, CV.
2. **Research Journey** (`#research`) — the narrative thesis + recurring threads. *The centerpiece.*
3. **Publications** (`#publications`) — six peer-reviewed papers, citation style, selected highlighted.
4. **Featured Research Projects** (`#projects`) — motivation / approach / contribution.
5. **Experience** (`#experience`) — research first, then professional (applied research), then education.
6. **Awards & Leadership** (`#achievements`).
7. **Contact** (`#contact`) — methods strip + channels + CV.

All content lives in [`src/lib/data.ts`](src/lib/data.ts) — edit there, never in components.

## Project structure

```
src/
  app/
    layout.tsx        # metadata, SEO, fonts, JSON-LD Person schema, theme provider
    page.tsx          # section composition
    globals.css       # design tokens (light/dark), base styles
  components/
    nav.tsx           # sticky nav + mobile menu
    footer.tsx
    theme-provider.tsx, theme-toggle.tsx
    sections/         # hero, research, publications, projects, experience, achievements, contact
    ui/               # card, badge, button, section, fade-in (shadcn-style primitives)
  lib/
    data.ts           # ← single source of truth for all content
    utils.ts          # cn(), asset() base-path helper
```

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → ./out
```

## Deploying to GitHub Pages

A workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds the static
export and publishes it on every push to `main`.

1. Create a new GitHub repository and push this folder to `main`.
2. In **Settings → Pages**, set **Source = GitHub Actions**.
3. Push — the site deploys automatically.

**User site** (`GauthamPrabhuM.github.io`): serves at the domain root, no base path needed.
**Project site** (e.g. `research-site`): the workflow auto-detects the `/research-site` base path
via `actions/configure-pages` and passes it to Next.js as `NEXT_PUBLIC_BASE_PATH` — no manual config.

> Also Vercel-compatible: `import` the repo and deploy, no changes required.

## Editing content

Open `src/lib/data.ts`. Everything — narrative, publications, projects, experience,
achievements, links — is typed and centralized. Components render whatever is there.
