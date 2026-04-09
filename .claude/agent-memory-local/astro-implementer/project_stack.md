---
name: S&R Web Solutions — stack and project structure
description: Core tech stack, folder layout, and architectural rules for the restaurant template system
type: project
---

## Stack
- Astro 5 (static-first, `.astro` pages and components)
- React only for interactive islands
- Tailwind CSS (utility-first, no separate CSS files beyond global.css)
- TypeScript strict mode (`astro/tsconfigs/strict`)
- JSON as client data source (`src/content/clients/<client>.json`)

## Folder Layout
```
src/
  components/   # Reusable UI atoms (Button.astro, etc.)
  layouts/      # Page shells (MainLayout.astro)
  pages/        # Astro route pages (index.astro)
  sections/     # Full-page sections (HeroSection.astro)
  content/
    clients/    # One JSON per client (demo-restaurant.json)
  styles/       # global.css (@tailwind directives)
  types/        # TypeScript interfaces (client.ts)
```

## Key Rules
- No header/footer/nav added to this deliverable (Phase 0–5 only)
- No React components until interactivity is actually needed
- Use `satisfies ClientData` (or `as const satisfies ClientData`) — NEVER bare `as ClientData`
- No commits, no build runs during implementation
