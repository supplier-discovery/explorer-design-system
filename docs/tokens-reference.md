# Design Token Reference

Complete token reference generated from `design-system.json`.

Token files: `src/tokens/`  
CSS variables: `src/index.css`  
Tailwind mapping: `tailwind.config.ts`

---

## Spacing

Base unit: **4px**. All values are multiples of 4.

| Token | Value | Tailwind |
|---|---|---|
| `spacing.0` | `0px` | `p-0`, `m-0` |
| `spacing.1` | `4px` | `p-1`, `m-1` |
| `spacing.2` | `8px` | `p-2`, `m-2` |
| `spacing.3` | `12px` | `p-3`, `m-3` |
| `spacing.4` | `16px` | `p-4`, `m-4` |
| `spacing.5` | `20px` | `p-5`, `m-5` |
| `spacing.6` | `24px` | `p-6`, `m-6` |
| `spacing.8` | `32px` | `p-8`, `m-8` |
| `spacing.10` | `40px` | `p-10`, `m-10` |
| `spacing.12` | `48px` | `p-12`, `m-12` |
| `spacing.16` | `64px` | `p-16`, `m-16` |
| `spacing.20` | `80px` | `p-20`, `m-20` |
| `spacing.24` | `96px` | `p-24`, `m-24` |
| `spacing.32` | `128px` | `p-32`, `m-32` |

### Section Spacing

| Token | Value |
|---|---|
| `sectionSpacing.xs` | `8px` |
| `sectionSpacing.sm` | `16px` |
| `sectionSpacing.md` | `24px` |
| `sectionSpacing.lg` | `32px` |
| `sectionSpacing.xl` | `40px` |

---

## Border Radius

| Token | CSS Var | Value | Tailwind |
|---|---|---|---|
| `radius.none` | `--radius-none` | `0px` | `rounded-none` |
| `radius.xs` | `--radius-xs` | `2px` | `rounded-xs` |
| `radius.sm` | `--radius-sm` | `4px` | `rounded-sm` |
| `radius.md` | `--radius-md` | `8px` | `rounded-md` |
| `radius.lg` | `--radius-lg` | `12px` | `rounded-lg` |
| `radius.xl` | `--radius-xl` | `16px` | `rounded-xl` |
| `radius.2xl` | `--radius-2xl` | `24px` | `rounded-2xl` |
| `radius.full` | `--radius-full` | `9999px` | `rounded-full` |

### Component Shape Tokens

| Component | Radius | Padding |
|---|---|---|
| Card | `16px` | `24px` |
| Input | `8px` | `16px` × `12px` |
| Dialog | `20px` | `24px` |

---

## Shadows / Elevation

| Level | CSS Var | Tailwind | Value |
|---|---|---|---|
| 0 | `--shadow-elevation-0` | `shadow-elevation-0` | `none` |
| 1 | `--shadow-elevation-1` | `shadow-elevation-1` | `0px 1px 2px rgba(0,0,0,0.05)` |
| 2 | `--shadow-elevation-2` | `shadow-elevation-2` | `0px 4px 6px rgba(0,0,0,0.1)` |
| 3 | `--shadow-elevation-3` | `shadow-elevation-3` | `0px 10px 15px rgba(0,0,0,0.1)` |
| 4 | `--shadow-elevation-4` | `shadow-elevation-4` | `0px 20px 25px rgba(0,0,0,0.1)` |
| 5 | `--shadow-elevation-5` | `shadow-elevation-5` | `0px 25px 50px rgba(0,0,0,0.15)` |
| hover | `--shadow-hover` | `shadow-hover` | `0px 8px 20px rgba(0,0,0,0.1)` |

**Elevation guidelines:**
- Level 0 → Flat: page background, table rows
- Level 1 → Cards, raised surfaces
- Level 2 → Dropdowns, tooltips
- Level 3 → Popovers, floating menus
- Level 4 → Dialogs, modals
- Level 5 → Critical overlays

---

## Motion

| Token | CSS Var | Value |
|---|---|---|
| `motion.duration.fast` | `--duration-fast` | `150ms` |
| `motion.duration.normal` | `--duration-normal` | `200ms` |
| `motion.duration.slow` | `--duration-slow` | `300ms` |
| `motion.easing.default` | `--easing-default` | `ease` |
| `motion.easing.in` | `--easing-in` | `ease-in` |
| `motion.easing.out` | `--easing-out` | `ease-out` |
| `motion.easing.inOut` | `--easing-in-out` | `ease-in-out` |

```tsx
// Usage in Tailwind
<div className="transition-colors duration-normal ease-in-out" />

// Usage in CSS-in-JS (if needed)
style={{ transition: `all var(--duration-normal) var(--easing-in-out)` }}
```

---

## Breakpoints

Mobile-first. Use `min-width` media queries.

| Name | Min Width | Container Max |
|---|---|---|
| `sm` | `640px` | `600px` |
| `md` | `768px` | `900px` |
| `lg` | `1024px` | `1200px` |
| `xl` | `1280px` | `1440px` |
| `2xl` | `1536px` | `1440px` |

```tsx
// Mobile-first responsive example
<div className="text-base md:text-lg lg:text-xl" />
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" />
```

---

## Grid

| Property | Value |
|---|---|
| Columns | 12 |
| Column Gap | `24px` |
| Row Gap | `24px` |

---

## Component Tokens

### Button

| Property | Values |
|---|---|
| Variants | `filled`, `outlined`, `text`, `tonal` |
| Size sm | `30px` height |
| Size md | `36px` height |
| Size lg | `42px` height |
| Icon spacing | `8px` |
| States | `default`, `hover`, `active`, `focus`, `disabled`, `loading` |

### Input

| Property | Values |
|---|---|
| States | `default`, `hover`, `focus`, `error`, `disabled` |
| Radius | `8px` |
| Padding X | `16px` |
| Padding Y | `12px` |

### Table

| Feature | Supported |
|---|---|
| Sorting | ✓ |
| Pagination | ✓ |
| Sticky header | ✓ |
| Empty state | ✓ |
| Loading state | ✓ |
| Density compact | ✓ |
| Density comfortable | ✓ |

### Dialog

| Size | Use Case |
|---|---|
| `sm` | Confirmations, alerts |
| `md` | Standard forms |
| `lg` | Complex forms, content |
| `xl` | Full-content panels |

Focus trap and Escape key close are required on all dialogs.
