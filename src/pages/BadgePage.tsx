import { ComponentLayout, InfoGrid } from "@/components/portal/ComponentLayout"
import { Section, DosDonts, PropsTable } from "@/components/portal/Section"
import { CodeTabs } from "@/components/portal/CodeBlock"
import { CheckCircle2, AlertTriangle, XCircle, Clock, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// ─── Code examples ────────────────────────────────────────────────────────────

const shadcnCode = `// Install: npx shadcn@latest add badge
// Then extend badge.tsx with semantic variants (success/warning/neutral) and dot prop.

import { Badge } from "@/components/ui/badge"
import { XCircle } from "lucide-react"

// Built-in shadcn variants
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>

// Design System semantic variants
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="neutral">Archived</Badge>

// With dot indicator
<Badge variant="success" dot>Online</Badge>
<Badge variant="warning" dot>Away</Badge>
<Badge variant="neutral" dot>Unknown</Badge>

// With icon
<Badge variant="success">
  <CheckCircle2 className="h-3 w-3" />
  Published
</Badge>
<Badge variant="destructive">
  <XCircle className="h-3 w-3" />
  Error
</Badge>`

const tailwindCode = `{/* Default */}
<span className="inline-flex items-center rounded-full border border-transparent
  bg-primary px-2.5 py-0.5 text-xs font-semibold text-white">
  Default
</span>

{/* Success */}
<span className="inline-flex items-center rounded-full border border-success/20
  bg-success/15 px-2.5 py-0.5 text-xs font-semibold text-success">
  Active
</span>

{/* Warning */}
<span className="inline-flex items-center rounded-full border border-warning/20
  bg-warning/15 px-2.5 py-0.5 text-xs font-semibold text-warning">
  Pending
</span>

{/* With dot */}
<span className="inline-flex items-center gap-1.5 rounded-full border border-success/20
  bg-success/15 px-2.5 py-0.5 text-xs font-semibold text-success">
  <span className="h-1.5 w-1.5 rounded-full bg-success" />
  Online
</span>`

// ─── BadgePage ────────────────────────────────────────────────────────────────

export default function BadgePage() {
  return (
    <ComponentLayout
      name="Badge"
      description="A small status descriptor that conveys metadata, state, or count at a glance."
      category="Data Display"
      status="stable"
      tags={["shadcn/ui", "Accessible"]}
    >
      <InfoGrid items={[
        { label: "Variants",  value: "7"      },
        { label: "Sizes",     value: "1 (xs)" },
        { label: "States",    value: "Static" },
        { label: "WCAG",      value: "AA 2.2" },
      ]} />

      {/* Component API */}
      <Section title="Component API">
        <div className="rounded-xl border border-border overflow-hidden text-sm">
          <div className="bg-neutral-50 dark:bg-neutral-900 px-5 py-3 border-b border-border font-mono text-xs text-muted-foreground">
            {"import { Badge } from \"@/components/ui/badge\""}
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-20 shrink-0 font-mono text-xs text-primary">variant</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">"default" | "secondary" | "outline" | "destructive" | "success" | "warning" | "neutral"</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">"default"</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Colour scheme.</p>
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-20 shrink-0 font-mono text-xs text-primary">dot</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">boolean</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">false</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Renders a status dot before the label.</p>
          </div>
          <div className="flex gap-4 px-5 py-3">
            <code className="w-20 shrink-0 font-mono text-xs text-primary">className</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">string</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">—</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Additional Tailwind classes.</p>
          </div>
        </div>
      </Section>

      {/* Overview */}
      <Section title="Overview">
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            Badges are compact labels used to convey status, category, count, or metadata.
            They appear alongside content to provide quick, scannable context without interrupting the reading flow.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-success/20 bg-success/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When to Use</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Status indicators (Active, Pending, Archived)</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Notification counts on icons or nav items</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Tags and category labels on cards</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Version or environment labels (Beta, v1.0)</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />New or featured item indicators</li>
              </ul>
            </div>
            <div className="rounded-xl border border-warning/20 bg-warning/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When NOT to Use</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Long text — badges should be 1–3 words maximum</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />As a primary interactive element</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />To replace a checkbox or radio button</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />When the information requires a tooltip or explanation</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <hr className="border-border" />

      {/* ── Variants & Decorators ─────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Variants &amp; Decorators</h3>
            <p className="text-sm text-muted-foreground">Seven colour variants. Add a dot indicator or prefix icon for richer status communication.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">

              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">All variants</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="neutral">Neutral</Badge>
                </div>
              </div>

              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Dot indicator</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="success" dot>Online</Badge>
                  <Badge variant="warning" dot>Away</Badge>
                  <Badge variant="destructive" dot>Offline</Badge>
                  <Badge variant="neutral" dot>Unknown</Badge>
                </div>
              </div>

              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">With icon</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="success"><CheckCircle2 className="h-3 w-3" />Published</Badge>
                  <Badge variant="warning"><Clock className="h-3 w-3" />Pending</Badge>
                  <Badge variant="destructive"><XCircle className="h-3 w-3" />Failed</Badge>
                  <Badge><Star className="h-3 w-3" />Featured</Badge>
                </div>
              </div>

              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Notification count</p>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="relative inline-flex">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background">
                      <AlertTriangle className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-error text-[10px] font-bold text-white">3</span>
                  </div>
                </div>
              </div>

            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[
                { label: "shadcn/ui", language: "tsx", code: shadcnCode },
                { label: "Tailwind",  language: "tsx", code: tailwindCode },
              ]} />
            </div>
          </div>
        </div>
      </div>

      {/* Variant Reference */}
      <Section title="Variant Reference">
        <div className="rounded-xl border border-border overflow-hidden text-sm">
          <div className="flex items-center gap-4 border-b border-border px-5 py-3">
            <div className="w-28 shrink-0"><Badge>Default</Badge></div>
            <p className="flex-1 text-xs text-muted-foreground">Primary brand colour. Use for main category or key metadata.</p>
            <code className="shrink-0 text-xs text-muted-foreground font-mono hidden sm:block">New, Beta, v1.0</code>
          </div>
          <div className="flex items-center gap-4 border-b border-border px-5 py-3">
            <div className="w-28 shrink-0"><Badge variant="secondary">Secondary</Badge></div>
            <p className="flex-1 text-xs text-muted-foreground">Accent green. Use for positive or highlighted states.</p>
            <code className="shrink-0 text-xs text-muted-foreground font-mono hidden sm:block">Active, Enabled</code>
          </div>
          <div className="flex items-center gap-4 border-b border-border px-5 py-3">
            <div className="w-28 shrink-0"><Badge variant="outline">Outline</Badge></div>
            <p className="flex-1 text-xs text-muted-foreground">Neutral bordered. Use for tags that need less visual weight.</p>
            <code className="shrink-0 text-xs text-muted-foreground font-mono hidden sm:block">Tag, Label</code>
          </div>
          <div className="flex items-center gap-4 border-b border-border px-5 py-3">
            <div className="w-28 shrink-0"><Badge variant="destructive">Destructive</Badge></div>
            <p className="flex-1 text-xs text-muted-foreground">Error/danger. Use for critical status.</p>
            <code className="shrink-0 text-xs text-muted-foreground font-mono hidden sm:block">Error, Revoked</code>
          </div>
          <div className="flex items-center gap-4 border-b border-border px-5 py-3">
            <div className="w-28 shrink-0"><Badge variant="success">Success</Badge></div>
            <p className="flex-1 text-xs text-muted-foreground">Tinted green. Use for positive/live/active states.</p>
            <code className="shrink-0 text-xs text-muted-foreground font-mono hidden sm:block">Live, Online</code>
          </div>
          <div className="flex items-center gap-4 border-b border-border px-5 py-3">
            <div className="w-28 shrink-0"><Badge variant="warning">Warning</Badge></div>
            <p className="flex-1 text-xs text-muted-foreground">Tinted amber. Use for caution or pending states.</p>
            <code className="shrink-0 text-xs text-muted-foreground font-mono hidden sm:block">Pending, Draft</code>
          </div>
          <div className="flex items-center gap-4 px-5 py-3">
            <div className="w-28 shrink-0"><Badge variant="neutral">Neutral</Badge></div>
            <p className="flex-1 text-xs text-muted-foreground">Subdued grey. Use for archived, disabled, or secondary labels.</p>
            <code className="shrink-0 text-xs text-muted-foreground font-mono hidden sm:block">Archived, None</code>
          </div>
        </div>
      </Section>

      {/* Do's and Don'ts */}
      <Section title="Do's and Don'ts">
        <DosDonts
          dos={[
            { text: "Keep badge text to 1–3 words for scannability." },
            { text: "Use semantic variants that match meaning: success = positive, destructive = danger." },
            { text: "Pair a dot or icon with status badges for added clarity." },
            { text: "Position notification count badges consistently (top-right of the host element)." },
          ]}
          donts={[
            { text: "Don't use badges as clickable buttons — they are informational only." },
            { text: "Don't write full sentences inside a badge." },
            { text: "Don't use colour alone to convey meaning — screen readers can't see colour." },
            { text: "Don't stack more than 3 badges on a single content item." },
          ]}
        />
      </Section>

      {/* Keyboard & Accessibility */}
      <Section title="Keyboard & Accessibility">
        <div className="rounded-xl border border-border p-5 space-y-3 text-sm">
          <p className="font-semibold text-foreground">ARIA &amp; semantic notes</p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-2"><code className="shrink-0 font-mono text-primary">Semantics</code><span>Badge renders as a <code className="font-mono">div</code>. It is non-interactive — no keyboard interaction applies. For status badges, add <code className="font-mono">aria-label</code> on the parent or use a visually-hidden description.</span></li>
            <li className="flex gap-2"><code className="shrink-0 font-mono text-primary">Contrast</code><span>All badge variant colours meet 4.5:1 contrast ratio against their backgrounds.</span></li>
            <li className="flex gap-2"><code className="shrink-0 font-mono text-primary">Count</code><span>For notification counts, add <code className="font-mono">aria-label="3 notifications"</code> to the count element.</span></li>
            <li className="flex gap-2"><code className="shrink-0 font-mono text-primary">Colour</code><span>Always pair colour with text or an icon. Never use colour as the only way to convey status.</span></li>
          </ul>
        </div>
      </Section>

      {/* All Props */}
      <Section title="All Props">
        <PropsTable props={[
          { name: "variant",   type: '"default" | "secondary" | "outline" | "destructive" | "success" | "warning" | "neutral"', default: '"default"', description: "Controls the colour scheme." },
          { name: "dot",       type: "boolean",         default: "false",  description: "Renders a status dot before the badge text." },
          { name: "className", type: "string",          default: "—",      description: "Additional Tailwind classes for custom overrides." },
          { name: "children",  type: "React.ReactNode", required: true,    description: "Badge content — text, icon, or dot + text." },
        ]} />
      </Section>

    </ComponentLayout>
  )
}
