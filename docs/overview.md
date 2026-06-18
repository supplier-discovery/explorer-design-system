# Explorer Design System — Overview

**Version:** 1.0.0  
**Stack:** React · TypeScript · Tailwind CSS · shadcn/ui  
**Standard:** WCAG 2.2 AA

---

## What This Is

A single source of truth for all UI decisions: colors, typography, spacing, components,
and behavior. Everything in the codebase references tokens from this system.

---

## Technology Decision — No Material UI

This design system is built **exclusively** on shadcn/ui and custom components.
Material UI (MUI) is not used and should never be introduced.

| Concern | Why we chose shadcn/ui over MUI |
|---|---|
| Ownership | shadcn/ui copies source into your repo. You own every line. MUI is a runtime dependency you cannot modify without forking. |
| Styling | Tailwind CSS utility classes. No `sx` prop, no `styled()`, no emotion/JSS runtime. |
| Bundle size | shadcn/ui adds only what you install. MUI ships the full library. |
| Customization | Override by editing the file directly. No theme merging or `createTheme()`. |
| Accessibility | Radix UI primitives under the hood — keyboard, ARIA, focus management built in. |
| Simplicity | Readable JSX with Tailwind classes. Any developer can read and change it. |

**Absolute rule:** Do not add `@mui/*` or `@material-ui/*` to `package.json`. Ever.

---

## Design Principles

| Principle | What It Means |
|---|---|
| Consistency | Same patterns everywhere. Users learn once, use everywhere. |
| Simplicity | Remove what isn't necessary. Clarity over cleverness. |
| Scalability | Tokens and components grow without breaking what exists. |
| Accessibility First | WCAG 2.2 AA is the baseline. Not an afterthought. |
| Mobile First | Design from 320px up. Responsive by default. |
| User-Centered Design | Every decision is grounded in user needs. |

---

## UX Goals

- **Reduce Cognitive Load** — fewer decisions per screen
- **Improve Scanability** — clear hierarchy, good contrast, consistent layout
- **Increase Efficiency** — faster task completion through familiar patterns
- **Build User Trust** — polish and consistency signal reliability
- **Responsive Experience** — works on any device, any viewport

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | React 18 | Industry standard, functional component model |
| Language | TypeScript | Type safety, better DX, fewer runtime errors |
| Styling | Tailwind CSS | Utility-first, token-mapped, dark mode via `class` |
| Components | shadcn/ui | Accessible, composable, owned source code |
| Primitives | Radix UI | Headless accessibility layer under shadcn/ui |
| Icons | Lucide React | Consistent, tree-shakeable SVG icons |
| Build | Vite | Fast HMR, ES module native |

---

## Component Architecture

All components follow one of three categories:

| Category | Location | What Goes Here |
|---|---|---|
| `ui/` | `src/components/ui/` | shadcn/ui components, installed via CLI and owned by this repo |
| `shared/` | `src/components/shared/` | Reusable layout and utility components built on top of `ui/` |
| `features/` | `src/components/features/` | Page-specific feature components, composed from `shared/` and `ui/` |

**Rules:**
- `ui/` components are building blocks — no business logic
- `shared/` components are composites — layout, patterns, wrappers
- `features/` components are consumers — they assemble everything for a specific screen

---

## Project Structure

```
ExplorerDesignSystem/
├── src/
│   ├── tokens/          ← Design token TypeScript constants (single source of truth)
│   ├── components/
│   │   ├── ui/          ← shadcn/ui components (owned, editable)
│   │   ├── shared/      ← Reusable composite components
│   │   └── features/    ← Feature-specific screen components
│   ├── hooks/           ← Custom React hooks
│   ├── lib/             ← Utility functions (cn, formatters, etc.)
│   ├── types/           ← Shared TypeScript types
│   ├── App.tsx          ← Design system home / token showcase
│   ├── main.tsx         ← Entry point
│   └── index.css        ← CSS custom properties + Tailwind layers
├── docs/                ← Design system documentation (this folder)
├── public/
├── tailwind.config.ts   ← All tokens wired to Tailwind utilities
├── components.json      ← shadcn/ui CLI configuration
└── package.json
```

---

## Core Rules for Every Developer

1. **No hardcoded colors.** Use `text-primary`, `bg-error`, `border-border`, etc.
2. **No hardcoded spacing.** Use Tailwind spacing classes (`p-4`, `gap-6`, `mt-8`).
3. **No inline styles** unless the value comes from a CSS variable (e.g. `style={{ width: value }}`).
4. **Always use `cn()`** to merge Tailwind classes. Never use plain string concatenation.
5. **Prefer shadcn/ui** over building a component from scratch.
6. **Every component supports dark mode.** Test in both themes before marking done.
7. **Minimum touch target is 44px.** Required for WCAG 2.2 AA compliance.
8. **Named exports only.** No default exports except for page-level components.

---

## Adding shadcn/ui Components

```bash
# Add individual components
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add dialog
npx shadcn@latest add table
npx shadcn@latest add card

# Add multiple at once
npx shadcn@latest add button input dialog table card badge
```

Components land in `src/components/ui/` pre-wired to the design tokens.
Edit the source directly — you own it.

---

## How the Token System Works

```
design-system.json
       ↓
src/tokens/*.ts       ← TypeScript constants (use in JS logic)
       ↓
src/index.css         ← CSS custom properties (--color-primary, --shadow-elevation-2, ...)
       ↓
tailwind.config.ts    ← Tailwind utilities (bg-primary, shadow-elevation-2, ...)
       ↓
Components            ← Use Tailwind classes, never hardcode
```
