---
name: Known gotchas for S&R Web Solutions project
description: Edge cases, version mismatches, and environment quirks discovered during implementation
type: project
---

## eslint-plugin-astro version mismatch
- The approved plan specified `^2.1.0` but latest published is `1.7.0`
- Fixed by using `^1.7.0` in package.json
- Check `npm info eslint-plugin-astro version` before upgrading

## Astro 5 content collection deprecation warning
- Astro 5 auto-generates collections for `src/content/` folders not explicitly defined
- Produces a WARN at dev server start: "Auto-generating collections... This is deprecated"
- Fix: create `src/content.config.ts` defining the `clients` collection explicitly
- This is non-blocking — dev and build work fine without it

## Windows path with `&` character
- Project lives at `C:\Users\aless\Documents\S&RWebSolutions`
- The `&` in the path breaks Windows cmd shell but bash handles it fine with quoting
- `npm run dev` from cmd will fail due to `&` — run from bash or use the node_modules/.bin/astro path directly

## JSON → TypeScript typing pattern
- Use `const data = rawData as const satisfies ClientData;` in Astro frontmatter
- Plain `rawData satisfies ClientData` without assignment doesn't work at statement level
- `as const` is needed because the imported JSON is widened otherwise
