# Color Tokens

All colors live in `src/tokens/colors.ts` and are exposed as CSS variables in `src/index.css`.
Tailwind classes are mapped in `tailwind.config.ts`.

**Rule: Never use a hex value directly in a component. Always use a token.**

---

## Usage Pattern

```tsx
// ✅ Correct — uses token
<div className="bg-primary text-primary-contrast" />
<div className="text-error" />
<div className="border-border" />

// ❌ Wrong — hardcoded value
<div style={{ backgroundColor: "#02332E" }} />
```

---

## Primary Palette

| Token | Class | Hex | Use |
|---|---|---|---|
| `--color-primary` | `bg-primary` | `#02332E` | Main brand color, CTAs |
| `--color-primary-light` | `bg-primary-light` | `rgba(2,51,46,0.4)` | Hover states, tinted backgrounds |
| `--color-primary-dark` | `bg-primary-dark` | `rgba(2,51,46,0.8)` | Pressed states |
| `--color-primary-900` | `bg-primary-900` | `#1B5E20` | Dark text on light bg |
| `--color-primary-500` | `bg-primary-500` | `#4CAF50` | Mid-weight elements |
| `--color-primary-100` | `bg-primary-100` | `#C8E6C9` | Light tinted backgrounds |
| `--color-primary-50` | `bg-primary-50` | `#E8F5E9` | Very light backgrounds |

---

## Secondary Palette

| Token | Class | Hex | Use |
|---|---|---|---|
| `--color-secondary` | `bg-secondary` | `#22C55E` | Interactive highlights, links |
| `--color-secondary-dark` | `bg-secondary-dark` | `#02332E` | Dark secondary |
| `--color-secondary-700` | `bg-secondary-700` | `#689F38` | Mid-weight secondary |
| `--color-secondary-50` | `bg-secondary-50` | `#F1F8E9` | Light secondary background |

---

## Status Colors

| Intent | Token | Class | Hex |
|---|---|---|---|
| Success | `--color-success` | `bg-success` | `#22C55E` |
| Warning | `--color-warning` | `bg-warning` | `#EF6C00` |
| Error | `--color-error` | `bg-error` | `#D32F2F` |
| Error Light | `--color-error-light` | `bg-error-light` | `#EF5350` |

---

## Semantic Tokens (Text & Surface)

| Token | Class | Light Value |
|---|---|---|
| `--color-text-primary` | `text-text-primary` | `#000000` |
| `--color-text-secondary` | `text-text-secondary` | `#02332E` |
| `--color-text-tertiary` | `text-text-tertiary` | `#22C55E` |
| `--color-text-disabled` | `text-text-disabled` | `rgba(0,0,0,0.38)` |
| `--color-text-inverse` | `text-text-inverse` | `#FFFFFF` |
| `--color-surface-hover` | `bg-surface-hover` | `#F3F4F6` |
| `--color-surface-selected` | `bg-surface-selected` | `#E5E7EB` |

---

## shadcn/ui Semantic Variables

These are required for shadcn/ui components to work correctly.

| Variable | Light (HSL) | Maps To |
|---|---|---|
| `--background` | `0 0% 100%` | Page background |
| `--foreground` | `0 0% 0%` | Default text |
| `--primary` | `174 96% 10%` | `#02332E` |
| `--secondary` | `142 83% 45%` | `#22C55E` |
| `--muted-foreground` | `0 0% 45%` | Subdued text |
| `--border` | `0 0% 93%` | All borders |
| `--destructive` | `0 78% 51%` | `#D32F2F` |

---

## Accessibility

| Pair | Contrast Ratio | Pass |
|---|---|---|
| `#02332E` on `#FFFFFF` | ≥ 13:1 | AAA ✓ |
| `#22C55E` on `#FFFFFF` | ≥ 3.2:1 | Use with care on small text |
| `#D32F2F` on `#FFFFFF` | ≥ 5.5:1 | AA ✓ |
| White text on `#02332E` | ≥ 13:1 | AAA ✓ |

Always run the color pair through a contrast checker before shipping.
