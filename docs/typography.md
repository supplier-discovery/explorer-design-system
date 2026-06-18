# Typography

**Primary font:** Jost (loaded from Google Fonts)  
**Monospace font:** JetBrains Mono (loaded from Google Fonts)  
**Fallback stack:** system-ui · -apple-system · Segoe UI · Metropolis · sans-serif

---

## Heading Scale

| Level | Size | Weight | Line Height | Tailwind |
|---|---|---|---|---|
| h1 | 48px | 700 Bold | 1.2 | `text-5xl font-bold` |
| h2 | 36px | 700 Bold | 1.2 | `text-4xl font-bold` |
| h3 | 30px | 600 Semibold | 1.3 | `text-3xl font-semibold` |
| h4 | 24px | 600 Semibold | 1.3 | `text-2xl font-semibold` |
| h5 | 20px | 600 Semibold | 1.4 | `text-xl font-semibold` |
| h6 | 18px | 600 Semibold | 1.4 | `text-lg font-semibold` |

---

## Body Scale

| Variant | Size | Weight | Line Height | Tailwind |
|---|---|---|---|---|
| Large | 18px | 400 Regular | 1.6 | `text-lg` |
| Medium | 16px | 400 Regular | 1.5 | `text-base` |
| Small | 14px | 400 Regular | 1.5 | `text-sm` |
| Caption | 12px | 400 Regular | 1.4 | `text-xs` |

---

## Font Weights

| Name | Value | Tailwind |
|---|---|---|
| Light | 300 | `font-light` |
| Regular | 400 | `font-regular` |
| Medium | 500 | `font-medium` |
| Semibold | 600 | `font-semibold` |
| Bold | 700 | `font-bold` |
| Extra Bold | 800 | `font-extrabold` |

---

## Letter Spacing

| Name | Value | Tailwind |
|---|---|---|
| Tight | `-0.0075em` | `tracking-tight` |
| Normal | `0` | `tracking-normal` |
| Wide | `0.0075em` | `tracking-wide` |

---

## Usage Examples

```tsx
// Page heading
<h1 className="text-5xl font-bold text-foreground tracking-tight">
  Page Title
</h1>

// Section heading
<h2 className="text-2xl font-semibold text-foreground">
  Section Title
</h2>

// Body text
<p className="text-base text-muted-foreground">
  Supporting paragraph text.
</p>

// Caption / helper text
<span className="text-xs text-muted-foreground">
  Last updated 2 hours ago
</span>

// Code snippet
<code className="font-mono text-sm text-primary bg-primary/10 px-2 py-0.5 rounded">
  const value = tokens.primary
</code>
```

---

## Accessibility Notes

- Minimum body text is 14px (`text-sm`) for readability
- Line height of 1.5+ on body copy for comfortable reading
- Never set headings below 18px
- Avoid light font weights (300) for small text — use 400+ under 16px
