import { Plus, Search, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ComponentLayout, InfoGrid } from "@/components/portal/ComponentLayout"
import { Section, DosDonts, PropsTable, KeyboardTable } from "@/components/portal/Section"
import { CodeTabs } from "@/components/portal/CodeBlock"

// ─── Code snippets ────────────────────────────────────────────────────────────
// One pair of (shadcn/ui + Tailwind) constants per button group.

const filledShadcnCode = `// Install: npx shadcn@latest add button

import { Button } from "@/components/ui/button"

// All color variants
<Button variant="filled" color="primary">Primary</Button>
<Button variant="filled" color="success">Success</Button>
<Button variant="filled" color="warning">Warning</Button>
<Button variant="filled" color="danger">Danger</Button>
<Button variant="filled" color="neutral">Neutral</Button>

// Sizes
<Button variant="filled" color="primary" size="sm">Small</Button>
<Button variant="filled" color="primary">Medium</Button>
<Button variant="filled" color="primary" size="lg">Large</Button>`

const filledTailwindCode = `// Primary — medium (h-9) — rounded-md (8px)
<button className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium
  gap-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90
  shadow-elevation-1 transition-colors
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40">
  Primary
</button>

// Small (h-8)  — h-8, px-3, text-xs, gap-1.5, rounded-sm (4px)
// Large (h-11) — h-11, px-5, text-base,       rounded-lg (12px)

// Color token swaps:
// bg-success     hover:bg-success/90
// bg-warning     hover:bg-warning/90
// bg-error       hover:bg-error/90
// bg-neutral-500 hover:bg-neutral-600`

const outlineShadcnCode = `import { Button } from "@/components/ui/button"

// Outline — transparent bg, coloured border
<Button variant="outline" color="primary">Primary</Button>
<Button variant="outline" color="success">Success</Button>
<Button variant="outline" color="warning">Warning</Button>
<Button variant="outline" color="danger">Danger</Button>
<Button variant="outline" color="neutral">Neutral</Button>

// Default (grey) outline — omit color
<Button variant="outline">Default</Button>

// Sizes
<Button variant="outline" color="primary" size="sm">Small</Button>
<Button variant="outline" color="primary">Medium</Button>
<Button variant="outline" color="primary" size="lg">Large</Button>`

const outlineTailwindCode = `// Primary outline — medium (rounded-md / 8px)
<button className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium
  gap-2 rounded-md border border-primary text-primary bg-transparent
  hover:bg-primary/10 hover:text-primary transition-colors
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40">
  Primary
</button>

// Color token swaps:
// border-success   text-success   hover:bg-success/10
// border-warning   text-warning   hover:bg-warning/10
// border-error     text-error     hover:bg-error/10
// border-neutral-400 text-neutral-600 hover:bg-neutral-100
//   dark:border-neutral-600 dark:text-neutral-400`

const linkShadcnCode = `import { Button } from "@/components/ui/button"

// Link — plain text, underline on hover, no background
<Button variant="link" color="primary">Primary</Button>
<Button variant="link" color="success">Success</Button>
<Button variant="link" color="warning">Warning</Button>
<Button variant="link" color="danger">Danger</Button>
<Button variant="link" color="neutral">Neutral</Button>

// Sizes (controls font size; touch target height preserved)
<Button variant="link" color="primary" size="sm">Small</Button>
<Button variant="link" color="primary">Medium</Button>
<Button variant="link" color="primary" size="lg">Large</Button>`

const linkTailwindCode = `// Primary link — medium (rounded-md / 8px)
<button className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium
  gap-2 rounded-md text-primary underline-offset-4 hover:underline transition-colors
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40">
  Primary
</button>

// Color token swaps (only text-* changes):
// text-success | text-warning
// text-error   | text-neutral-600 dark:text-neutral-400`

const roundedShadcnCode = `import { Button } from "@/components/ui/button"

// Rounded filled — shape="rounded" applies rounded-2xl
<Button variant="filled"  color="primary" shape="rounded">Primary</Button>
<Button variant="filled"  color="success" shape="rounded">Success</Button>
<Button variant="filled"  color="warning" shape="rounded">Warning</Button>
<Button variant="filled"  color="danger"  shape="rounded">Danger</Button>
<Button variant="filled"  color="neutral" shape="rounded">Neutral</Button>

// Rounded outline — composable: shape works with any variant
<Button variant="outline" color="primary" shape="rounded">Primary</Button>
<Button variant="outline" color="success" shape="rounded">Success</Button>
<Button variant="outline" color="warning" shape="rounded">Warning</Button>
<Button variant="outline" color="danger"  shape="rounded">Danger</Button>
<Button variant="outline" color="neutral" shape="rounded">Neutral</Button>

// Sizes (both variants)
<Button variant="filled"  color="primary" shape="rounded" size="sm">Small</Button>
<Button variant="filled"  color="primary" shape="rounded">Medium</Button>
<Button variant="filled"  color="primary" shape="rounded" size="lg">Large</Button>
<Button variant="outline" color="primary" shape="rounded" size="sm">Small</Button>
<Button variant="outline" color="primary" shape="rounded">Medium</Button>
<Button variant="outline" color="primary" shape="rounded" size="lg">Large</Button>`

const roundedTailwindCode = `// shape="rounded" overrides the size-based radius with rounded-2xl (24px)
// on all sizes. Use this when you want a softer, card-like button shape.

// Rounded filled — medium
<button className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium
  gap-2 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90
  shadow-elevation-1 transition-colors
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40">
  Primary
</button>

// Rounded outline — medium
<button className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium
  gap-2 rounded-2xl border border-primary text-primary bg-transparent
  hover:bg-primary/10 transition-colors
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40">
  Primary
</button>

// Size + rounded-2xl stays the same across sm / default / lg
// sm  — h-8 px-3 text-xs  gap-1.5 rounded-2xl
// lg  — h-11 px-5 text-base gap-2  rounded-2xl

// Color tokens same as filled / outline — only swap bg-* or border-*/text-*`

const iconShadcnCode = `import { Button } from "@/components/ui/button"
import { Plus, Search, Trash2 } from "lucide-react"

// Icon button — always include aria-label
<Button variant="filled" color="primary" size="icon" aria-label="Add item">
  <Plus />
</Button>

// Color variants (filled)
<Button variant="filled" color="success" size="icon" aria-label="Confirm"><Plus /></Button>
<Button variant="filled" color="warning" size="icon" aria-label="Warning"><Plus /></Button>
<Button variant="filled" color="danger"  size="icon" aria-label="Delete"><Trash2 /></Button>
<Button variant="filled" color="neutral" size="icon" aria-label="Neutral"><Plus /></Button>

// Style variants
<Button variant="outline" color="primary" size="icon" aria-label="Search"><Search /></Button>

// Circular icon button
<Button variant="filled" color="primary" size="icon" shape="pill" aria-label="Add">
  <Plus />
</Button>`

const disabledShadcnCode = `import { Button } from "@/components/ui/button"

// The disabled prop applies opacity-40 + pointer-events-none via Tailwind utilities.
// It also sets the native disabled attribute, removing the element from tab order.

// Filled — disabled
<Button variant="filled"  color="primary" disabled>Primary</Button>
<Button variant="filled"  color="success" disabled>Success</Button>
<Button variant="filled"  color="warning" disabled>Warning</Button>
<Button variant="filled"  color="danger"  disabled>Danger</Button>
<Button variant="filled"  color="neutral" disabled>Neutral</Button>

// Outline — disabled
<Button variant="outline" color="primary" disabled>Primary</Button>
<Button variant="outline" color="success" disabled>Success</Button>
<Button variant="outline" color="warning" disabled>Warning</Button>
<Button variant="outline" color="danger"  disabled>Danger</Button>
<Button variant="outline" color="neutral" disabled>Neutral</Button>

// Link — disabled
<Button variant="link" color="primary" disabled>Primary</Button>

// Icon — disabled
<Button variant="filled" color="primary" size="icon" disabled aria-label="Add item">
  <Plus />
</Button>

// aria-disabled — stays focusable but blocks interaction
// Use this pattern when you need to keep the element in the tab order
// (e.g. to show a tooltip explaining why the action is unavailable).
<Button variant="filled" color="primary" aria-disabled="true"
  onClick={(e) => e.preventDefault()}>
  Primary
</Button>`

const disabledTailwindCode = `// disabled:pointer-events-none disabled:opacity-40
// These two utilities are already included in the base button class.
// Just add the native disabled attribute — no extra classes needed.

<button
  disabled
  className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium
    gap-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90
    shadow-elevation-1 transition-colors
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
    focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40"
>
  Primary
</button>

// For aria-disabled (stays focusable):
<button
  aria-disabled="true"
  onClick={(e) => e.preventDefault()}
  className="... opacity-40 cursor-not-allowed"
>
  Primary
</button>`

const iconTailwindCode = `import { Plus } from "lucide-react"

// Icon button — square equal h/w, icon centred
// Default (h-9 w-9): rounded-md (8px)
// Small  (h-8 w-8):  rounded-sm (4px) via className override
// Large  (h-11 w-11): rounded-lg (12px) via className override
// Circle:  shape="pill" → rounded-full

// Primary — default size
<button
  type="button"
  aria-label="Add item"
  className="inline-flex items-center justify-center h-9 w-9 rounded-md
    bg-primary text-primary-foreground hover:bg-primary/90 shadow-elevation-1
    transition-colors focus-visible:outline-none focus-visible:ring-2
    focus-visible:ring-ring focus-visible:ring-offset-2
    disabled:pointer-events-none disabled:opacity-40"
>
  <Plus className="h-4 w-4" />
</button>

// Color tokens same as filled — swap bg-*
// Circular: replace rounded-lg with rounded-full`

// ─── ButtonPage ───────────────────────────────────────────────────────────────

export default function ButtonPage() {
  return (
    <ComponentLayout
      name="Button"
      description="Triggers an action or event when clicked. Built on shadcn/ui with a two-prop variant + color API — the same API used throughout this portal."
      category="Forms"
      status="stable"
      tags={["shadcn/ui", "Radix UI", "Accessible"]}
    >
      <InfoGrid items={[
        { label: "Styles",  value: "3 (filled · outline · link)" },
        { label: "Colors",  value: "5"      },
        { label: "Shapes",  value: "2 (default · rounded)" },
        { label: "WCAG",    value: "AA 2.2" },
      ]} />

      {/* Component API */}
      <Section title="Component API">
        <div className="rounded-xl border border-border overflow-hidden text-sm">
          <div className="bg-neutral-50 dark:bg-neutral-900 px-5 py-3 border-b border-border font-mono text-xs text-muted-foreground">
            {"import { Button } from \"@/components/ui/button\""}
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-20 shrink-0 font-mono text-xs text-primary">variant</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">"filled" | "outline" | "link"</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">"filled"</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Visual style — controls how the button looks structurally.</p>
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-20 shrink-0 font-mono text-xs text-primary">color</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">"primary" | "success" | "warning" | "danger" | "neutral"</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">"default"</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Color token — controls which design token is applied.</p>
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-20 shrink-0 font-mono text-xs text-primary">size</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">"sm" | "default" | "lg" | "icon"</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">"default"</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Height, padding, and text size.</p>
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-20 shrink-0 font-mono text-xs text-primary">shape</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">"default" | "rounded"</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">"default"</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Default scales with size: sm→4px, md→8px, lg→12px. "rounded" forces 24px on all sizes.</p>
          </div>
          <div className="flex gap-4 px-5 py-3">
            <code className="w-20 shrink-0 font-mono text-xs text-primary">asChild</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">boolean</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">false</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Renders as the child element via Radix Slot.</p>
          </div>
        </div>
      </Section>

      {/* Overview */}
      <Section title="Overview">
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            Buttons communicate actions users can take. The <code className="font-mono">variant + color</code> API separates
            <em> style</em> (how the button looks structurally) from <em>color</em> (which design token it uses),
            so you can compose any combination without adding new entries to the component.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-success/20 bg-success/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When to Use</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Submitting or saving a form</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Confirming a destructive action</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Triggering a primary workflow step</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Inline table or list actions</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Opening a modal or drawer</li>
              </ul>
            </div>
            <div className="rounded-xl border border-warning/20 bg-warning/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When NOT to Use</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Page navigation — use a Link</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Long labels — keep to 1–4 words</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Multiple primary buttons per section</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Replacing checkboxes or toggles</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <hr className="border-border" />

      {/* ── Filled Buttons ──────────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Filled Buttons</h3>
            <p className="text-sm text-muted-foreground">Solid background — highest emphasis. Primary actions, form submissions, CTAs.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Small</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="filled" color="primary" size="sm">Primary</Button>
                  <Button variant="filled" color="success" size="sm">Success</Button>
                  <Button variant="filled" color="warning" size="sm">Warning</Button>
                  <Button variant="filled" color="danger" size="sm">Danger</Button>
                  <Button variant="filled" color="neutral" size="sm">Neutral</Button>
                </div>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Medium</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="filled" color="primary">Primary</Button>
                  <Button variant="filled" color="success">Success</Button>
                  <Button variant="filled" color="warning">Warning</Button>
                  <Button variant="filled" color="danger">Danger</Button>
                  <Button variant="filled" color="neutral">Neutral</Button>
                </div>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Large</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="filled" color="primary" size="lg">Primary</Button>
                  <Button variant="filled" color="success" size="lg">Success</Button>
                  <Button variant="filled" color="warning" size="lg">Warning</Button>
                  <Button variant="filled" color="danger" size="lg">Danger</Button>
                  <Button variant="filled" color="neutral" size="lg">Neutral</Button>
                </div>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[
                { label: "shadcn/ui", language: "tsx", code: filledShadcnCode },
                { label: "Tailwind",  language: "tsx", code: filledTailwindCode },
              ]} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Outline Buttons ──────────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Outline Buttons</h3>
            <p className="text-sm text-muted-foreground">Transparent with coloured border — equal-weight secondary actions.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Small</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="outline" color="primary" size="sm">Primary</Button>
                  <Button variant="outline" color="success" size="sm">Success</Button>
                  <Button variant="outline" color="warning" size="sm">Warning</Button>
                  <Button variant="outline" color="danger" size="sm">Danger</Button>
                  <Button variant="outline" color="neutral" size="sm">Neutral</Button>
                </div>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Medium</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="outline" color="primary">Primary</Button>
                  <Button variant="outline" color="success">Success</Button>
                  <Button variant="outline" color="warning">Warning</Button>
                  <Button variant="outline" color="danger">Danger</Button>
                  <Button variant="outline" color="neutral">Neutral</Button>
                </div>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Large</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="outline" color="primary" size="lg">Primary</Button>
                  <Button variant="outline" color="success" size="lg">Success</Button>
                  <Button variant="outline" color="warning" size="lg">Warning</Button>
                  <Button variant="outline" color="danger" size="lg">Danger</Button>
                  <Button variant="outline" color="neutral" size="lg">Neutral</Button>
                </div>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[
                { label: "shadcn/ui", language: "tsx", code: outlineShadcnCode },
                { label: "Tailwind",  language: "tsx", code: outlineTailwindCode },
              ]} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Link Buttons ─────────────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Link Buttons</h3>
            <p className="text-sm text-muted-foreground">Plain text with hover underline — lowest emphasis. Inline navigation-style actions.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Small</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="link" color="primary" size="sm">Primary</Button>
                  <Button variant="link" color="success" size="sm">Success</Button>
                  <Button variant="link" color="warning" size="sm">Warning</Button>
                  <Button variant="link" color="danger" size="sm">Danger</Button>
                  <Button variant="link" color="neutral" size="sm">Neutral</Button>
                </div>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Medium</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="link" color="primary">Primary</Button>
                  <Button variant="link" color="success">Success</Button>
                  <Button variant="link" color="warning">Warning</Button>
                  <Button variant="link" color="danger">Danger</Button>
                  <Button variant="link" color="neutral">Neutral</Button>
                </div>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Large</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="link" color="primary" size="lg">Primary</Button>
                  <Button variant="link" color="success" size="lg">Success</Button>
                  <Button variant="link" color="warning" size="lg">Warning</Button>
                  <Button variant="link" color="danger" size="lg">Danger</Button>
                  <Button variant="link" color="neutral" size="lg">Neutral</Button>
                </div>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[
                { label: "shadcn/ui", language: "tsx", code: linkShadcnCode },
                { label: "Tailwind",  language: "tsx", code: linkTailwindCode },
              ]} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Rounded Buttons ──────────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Rounded Buttons</h3>
            <p className="text-sm text-muted-foreground">Add <code className="font-mono">shape="rounded"</code> to any variant for a softer <code className="font-mono">rounded-2xl</code> radius. Shown here for filled and outline.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              {/* Filled + Rounded */}
              <div className="px-4 pt-4 pb-1">
                <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Filled</p>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Small</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="filled" color="primary" size="sm" shape="rounded">Primary</Button>
                  <Button variant="filled" color="success" size="sm" shape="rounded">Success</Button>
                  <Button variant="filled" color="warning" size="sm" shape="rounded">Warning</Button>
                  <Button variant="filled" color="danger" size="sm" shape="rounded">Danger</Button>
                  <Button variant="filled" color="neutral" size="sm" shape="rounded">Neutral</Button>
                </div>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Medium</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="filled" color="primary" shape="rounded">Primary</Button>
                  <Button variant="filled" color="success" shape="rounded">Success</Button>
                  <Button variant="filled" color="warning" shape="rounded">Warning</Button>
                  <Button variant="filled" color="danger" shape="rounded">Danger</Button>
                  <Button variant="filled" color="neutral" shape="rounded">Neutral</Button>
                </div>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Large</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="filled" color="primary" size="lg" shape="rounded">Primary</Button>
                  <Button variant="filled" color="success" size="lg" shape="rounded">Success</Button>
                  <Button variant="filled" color="warning" size="lg" shape="rounded">Warning</Button>
                  <Button variant="filled" color="danger" size="lg" shape="rounded">Danger</Button>
                  <Button variant="filled" color="neutral" size="lg" shape="rounded">Neutral</Button>
                </div>
              </div>

              {/* Outline + Rounded */}
              <div className="px-4 pt-4 pb-1">
                <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Outline</p>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Small</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="outline" color="primary" size="sm" shape="rounded">Primary</Button>
                  <Button variant="outline" color="success" size="sm" shape="rounded">Success</Button>
                  <Button variant="outline" color="warning" size="sm" shape="rounded">Warning</Button>
                  <Button variant="outline" color="danger" size="sm" shape="rounded">Danger</Button>
                  <Button variant="outline" color="neutral" size="sm" shape="rounded">Neutral</Button>
                </div>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Medium</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="outline" color="primary" shape="rounded">Primary</Button>
                  <Button variant="outline" color="success" shape="rounded">Success</Button>
                  <Button variant="outline" color="warning" shape="rounded">Warning</Button>
                  <Button variant="outline" color="danger" shape="rounded">Danger</Button>
                  <Button variant="outline" color="neutral" shape="rounded">Neutral</Button>
                </div>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Large</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="outline" color="primary" size="lg" shape="rounded">Primary</Button>
                  <Button variant="outline" color="success" size="lg" shape="rounded">Success</Button>
                  <Button variant="outline" color="warning" size="lg" shape="rounded">Warning</Button>
                  <Button variant="outline" color="danger" size="lg" shape="rounded">Danger</Button>
                  <Button variant="outline" color="neutral" size="lg" shape="rounded">Neutral</Button>
                </div>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[
                { label: "shadcn/ui", language: "tsx", code: roundedShadcnCode },
                { label: "Tailwind",  language: "tsx", code: roundedTailwindCode },
              ]} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Icon Buttons ─────────────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Icon Buttons</h3>
            <p className="text-sm text-muted-foreground">Square icon-only button with <code className="font-mono">size="icon"</code> — always requires an <code className="font-mono">aria-label</code>.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Color variants (filled)</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="filled" color="primary" size="icon" aria-label="Primary action"><Plus /></Button>
                  <Button variant="filled" color="success" size="icon" aria-label="Confirm"><Plus /></Button>
                  <Button variant="filled" color="warning" size="icon" aria-label="Warning action"><Plus /></Button>
                  <Button variant="filled" color="danger"  size="icon" aria-label="Delete"><Trash2 /></Button>
                  <Button variant="filled" color="neutral" size="icon" aria-label="Neutral action"><Plus /></Button>
                </div>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Style variants (primary color)</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="filled"  color="primary" size="icon" aria-label="Filled"><Search /></Button>
                  <Button variant="outline" color="primary" size="icon" aria-label="Outline"><Search /></Button>
                  <Button variant="filled"  color="primary" size="icon" shape="pill" aria-label="Circular"><Plus /></Button>
                </div>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[
                { label: "shadcn/ui", language: "tsx", code: iconShadcnCode },
                { label: "Tailwind",  language: "tsx", code: iconTailwindCode },
              ]} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Disabled Buttons ─────────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Disabled</h3>
            <p className="text-sm text-muted-foreground">Add the <code className="font-mono">disabled</code> prop to any button. Applies <code className="font-mono">opacity-40</code> and <code className="font-mono">pointer-events-none</code>, and removes the element from the tab order.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Filled — disabled</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="filled" color="primary" disabled>Primary</Button>
                  <Button variant="filled" color="success" disabled>Success</Button>
                  <Button variant="filled" color="warning" disabled>Warning</Button>
                  <Button variant="filled" color="danger"  disabled>Danger</Button>
                  <Button variant="filled" color="neutral" disabled>Neutral</Button>
                </div>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Outline — disabled</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="outline" color="primary" disabled>Primary</Button>
                  <Button variant="outline" color="success" disabled>Success</Button>
                  <Button variant="outline" color="warning" disabled>Warning</Button>
                  <Button variant="outline" color="danger"  disabled>Danger</Button>
                  <Button variant="outline" color="neutral" disabled>Neutral</Button>
                </div>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Link — disabled</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="link" color="primary" disabled>Primary</Button>
                  <Button variant="link" color="success" disabled>Success</Button>
                  <Button variant="link" color="warning" disabled>Warning</Button>
                  <Button variant="link" color="danger"  disabled>Danger</Button>
                  <Button variant="link" color="neutral" disabled>Neutral</Button>
                </div>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Icon — disabled</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="filled"  color="primary" size="icon" disabled aria-label="Add item"><Plus /></Button>
                  <Button variant="outline" color="primary" size="icon" disabled aria-label="Search"><Search /></Button>
                  <Button variant="filled"  color="danger"  size="icon" disabled aria-label="Delete"><Trash2 /></Button>
                </div>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[
                { label: "shadcn/ui", language: "tsx", code: disabledShadcnCode },
                { label: "Tailwind",  language: "tsx", code: disabledTailwindCode },
              ]} />
            </div>
          </div>
        </div>
      </div>

      {/* Do's and Don'ts */}
      <Section title="Do's and Don'ts">
        <DosDonts
          dos={[
            { text: "Use a single filled button per section — it signals the one main action." },
            { text: "Keep labels concise: 1–3 words. 'Save Changes' not 'Click here to save your changes'." },
            { text: "Always provide an aria-label for icon-only buttons." },
            { text: "Use the danger color only for irreversible actions (delete, revoke)." },
            { text: "Ensure touch targets are at least 44×44px — critical on mobile (min h-9)." },
          ]}
          donts={[
            { text: "Don't place two filled buttons side-by-side — use outline for secondary." },
            { text: "Don't use a button for page navigation — use a Link element." },
            { text: "Don't disable a button without explaining why in nearby helper text." },
            { text: "Don't use ALL CAPS labels — use sentence case." },
            { text: "Don't strip the focus ring — required for keyboard accessibility." },
          ]}
        />
      </Section>

      {/* Keyboard */}
      <Section title="Keyboard & Accessibility">
        <KeyboardTable rows={[
          { keys: ["Enter", "Space"], action: "Activates the button" },
          { keys: ["Tab"],            action: "Moves focus to the button" },
          { keys: ["Shift+Tab"],      action: "Moves focus away from the button" },
        ]} />
        <div className="mt-4 rounded-xl border border-border p-5 space-y-3 text-sm">
          <p className="font-semibold text-foreground">ARIA &amp; semantic notes</p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-2"><code className="shrink-0 font-mono text-primary">role</code><span>Implicit <code className="font-mono">role="button"</code> on native button. Never use div or span as a button.</span></li>
            <li className="flex gap-2"><code className="shrink-0 font-mono text-primary">aria-label</code><span>Required when the button contains only an icon.</span></li>
            <li className="flex gap-2"><code className="shrink-0 font-mono text-primary">aria-disabled</code><span>Use instead of disabled when the element must stay focusable but not actionable.</span></li>
            <li className="flex gap-2"><code className="shrink-0 font-mono text-primary">aria-busy</code><span>Set to "true" during loading states to announce progress to assistive technology.</span></li>
            <li className="flex gap-2"><code className="shrink-0 font-mono text-primary">type</code><span>Always set <code className="font-mono">type="button"</code> or <code className="font-mono">type="submit"</code> explicitly — browser defaults cause accidental form submissions.</span></li>
          </ul>
        </div>
      </Section>

      {/* Props */}
      <Section title="All Props" description="Button extends the native HTML button element.">
        <PropsTable props={[
          { name: "variant",   type: '"filled" | "outline" | "link"',                                                       default: '"filled"',   description: "Visual style category."                          },
          { name: "color",     type: '"primary" | "success" | "warning" | "danger" | "neutral" | "default"',             default: '"default"',  description: "Color token to apply."                           },
          { name: "size",      type: '"sm" | "default" | "lg" | "icon"',                                                   default: '"default"',  description: "Height, padding, and text size."                  },
          { name: "shape",     type: '"default" | "rounded"',                                                              default: '"default"',  description: "Border radius, composable with any variant."     },
          { name: "disabled",  type: "boolean",                                                                            default: "false",      description: "Prevents interaction."                           },
          { name: "asChild",   type: "boolean",                                                                            default: "false",      description: "Renders as child element via Radix Slot."        },
          { name: "type",      type: '"button" | "submit" | "reset"',                                                      default: '"button"',   description: "Always set explicitly in forms."                  },
          { name: "className", type: "string",                                                                             default: "—",          description: "Additional Tailwind classes (merged via cn())."  },
          { name: "onClick",   type: "() => void",                                                                         default: "—",          description: "Click handler."                                  },
        ]} />
      </Section>
    </ComponentLayout>
  )
}
