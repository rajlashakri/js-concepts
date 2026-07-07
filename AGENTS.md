# Project AI Guide

## Project summary
- This is a small Next.js app for a presentation-style page.
- Main app entry: pages/index.js
- Styling lives in styles/globals.css
- Reusable UI pieces go in components/

## Important conventions
- Use React functional components.
- Keep animation logic lightweight and client-safe.
- Avoid using browser APIs like document/querySelector during server rendering.
- Prefer using useEffect for DOM work after mount.
- Keep code examples in strings so they do not break JSX or Next.js prerendering.

## Common commands
- npm run dev
- npm run build

## Notes for AI assistants
- If you change UI structure, preserve the slide and animation behavior.
- If you add new components, import them from components/.
- If you add dependencies, update package.json accordingly.
