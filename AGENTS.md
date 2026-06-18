# Agent Instructions: ganjardev-web

## Architecture & Data
- **Nuxt 4 Mode:** The project runs Nuxt in v4 compatibility mode (`future.compatibilityVersion: 4`). All Vue source files (pages, components, composables, assets) must go inside the `app/` directory, not the project root.
- **Content Storage:** 
  - Prose/Markdown uses `@nuxt/content` v3 (see `content.config.ts`). Source files are in the root `content/` directory.
  - Structured lists (projects, timeline, stack) are stored as JSON files in `app/data/`.
- **Localization (i18n):** The project does not use `@nuxtjs/i18n`. It uses a custom `useLocale` composable. JSON data files are duplicated with language suffixes (e.g., `content_en.json`, `content_id.json`) and imported conditionally based on the active locale.

## Design & Styling (Strict)
Read `DESIGN.md` before making any UI changes. The site enforces a rigorous "terminal/man-page" aesthetic.
- **Typography:** 100% monospace (JetBrains Mono). Never introduce sans-serif or serif fonts.
- **Iconography:** No SVG icons or emoji. Use only ASCII bracket markers (`[+]`, `[-]`, `[x]`, `+`, `−`) for bullets, toggles, and section glyphs.
- **Borders & Shadows:** No drop shadows, ever. Depth is conveyed purely through color contrast (e.g., the dark TUI mockup).
- **Shapes:** Containers and sections are sharp (`rounded-none`). Only interactive elements (buttons, inputs, pills) get a 4px radius (`rounded-sm`).
- **Colors:** Use the custom Tailwind tokens defined in `tailwind.config.js` (e.g., `bg-canvas`, `text-ink`, `border-hairline`, `text-body`). Do not use default Tailwind colors like `gray-500` or `blue-500` for the marketing chrome.

## Developer Commands
- Start dev server: `npm run dev`
- Build for production: `npm run build`
