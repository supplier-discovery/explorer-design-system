import { ArrowRight, Star, MoreHorizontal, User, Calendar, Tag } from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ComponentLayout, InfoGrid } from "@/components/portal/ComponentLayout"
import { Section, DosDonts, PropsTable, KeyboardTable } from "@/components/portal/Section"
import { CodeTabs } from "@/components/portal/CodeBlock"

// ─── Code examples ────────────────────────────────────────────────────────────

const shadcnCode = `// Install: npx shadcn@latest add card

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Basic card with full anatomy
<Card className="w-80">
  <CardHeader>
    <CardTitle>Account Settings</CardTitle>
    <CardDescription>Manage your account preferences.</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">
      Update your profile, change your password, and configure notifications.
    </p>
  </CardContent>
  <CardFooter className="gap-3">
    <Button variant="outline">Cancel</Button>
    <Button>Save Changes</Button>
  </CardFooter>
</Card>

// Variant examples — variant prop added by this design system
<Card variant="elevated">...</Card>
<Card variant="outlined">...</Card>
<Card variant="ghost">...</Card>

// Interactive card (clickable)
<Card
  variant="default"
  interactive
  role="button"
  tabIndex={0}
  className="w-80 cursor-pointer"
>
  <CardContent className="pt-6">
    <p className="font-semibold">Click me</p>
  </CardContent>
</Card>`

const tailwindCode = `{/* Default card */}
<div className="rounded-2xl border border-border bg-background shadow-elevation-1">
  {/* Header */}
  <div className="flex flex-col gap-1 p-6 pb-0">
    <h3 className="text-base font-semibold text-foreground">Card Title</h3>
    <p className="text-sm text-muted-foreground">Card description here.</p>
  </div>

  {/* Body */}
  <div className="p-6">
    <p className="text-sm text-muted-foreground">Main card content goes here.</p>
  </div>

  {/* Footer */}
  <div className="flex items-center gap-3 border-t border-border px-6 py-4">
    <button className="rounded-lg border border-border px-4 py-2 text-sm font-medium">
      Cancel
    </button>
    <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white">
      Confirm
    </button>
  </div>
</div>

{/* Elevated variant */}
<div className="rounded-2xl border border-border bg-background shadow-elevation-3">
  ...
</div>

{/* Outlined variant */}
<div className="rounded-2xl border-2 border-border bg-transparent">
  ...
</div>`

// ─── CardPage ─────────────────────────────────────────────────────────────────

export default function CardPage() {
  return (
    <ComponentLayout
      name="Card"
      description="A flexible container for grouping related content and actions. Supports header, body, and footer sections with multiple visual variants."
      category="Data Display"
      status="stable"
      tags={["shadcn/ui", "Layout", "Container"]}
    >
      <InfoGrid items={[
        { label: "Variants",   value: "4 (default / elevated / outlined / ghost)" },
        { label: "Anatomy",    value: "Header · Body · Footer"                    },
        { label: "WCAG",       value: "AA 2.2"                                    },
        { label: "Responsive", value: "Yes"                                       },
      ]} />

      {/* Component API */}
      <Section title="Component API">
        <div className="rounded-xl border border-border overflow-hidden text-sm">
          <div className="bg-neutral-50 dark:bg-neutral-900 px-5 py-3 border-b border-border font-mono text-xs text-muted-foreground">
            {"import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from \"@/components/ui/card\""}
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-20 shrink-0 font-mono text-xs text-primary">variant</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">"default" | "elevated" | "outlined" | "ghost"</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">"default"</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Visual style — controls border, shadow, and background</p>
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-20 shrink-0 font-mono text-xs text-primary">interactive</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">boolean</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">false</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Adds hover shadow + focus ring. Combine with role/tabIndex</p>
          </div>
          <div className="flex gap-4 px-5 py-3">
            <code className="w-20 shrink-0 font-mono text-xs text-primary">className</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">string</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">—</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Extend or override Tailwind classes on any sub-component</p>
          </div>
        </div>
      </Section>

      {/* Overview */}
      <Section title="Overview">
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            Cards group related information and actions into a visually distinct container.
            They use elevation (shadow) or border treatment to separate themselves from
            the surrounding page background, drawing attention without visual noise.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-success/20 bg-success/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When to Use</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Product listings, project boards</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Profile summaries, user details</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Settings panels with multiple fields</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Dashboard stats or KPI tiles</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Article / content previews</li>
              </ul>
            </div>
            <div className="rounded-xl border border-warning/20 bg-warning/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When NOT to Use</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Simple text content without actions — use plain layout</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Table rows — cards are not substitutes for data tables</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Full-page dialogs — use Dialog or Sheet</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Overloading a single card with too many actions</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <hr className="border-border" />

      {/* ── Anatomy & Variants ──────────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Anatomy &amp; Variants</h3>
            <p className="text-sm text-muted-foreground">Core card structure with header, body, and footer — plus the four visual style variants.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">

              {/* Full anatomy */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Full anatomy (Header + Body + Footer)</p>
                <Card className="w-full max-w-sm">
                  <CardHeader className="pb-0 space-y-0 gap-1">
                    <CardTitle className="text-base text-foreground leading-tight">Account Settings</CardTitle>
                    <CardDescription>Manage your account preferences.</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground">Update your profile, change your password, and configure notifications.</p>
                  </CardContent>
                  <CardFooter className="gap-3 border-t border-border py-4">
                    <Button variant="outline">Cancel</Button>
                    <Button className="ml-auto">Save Changes</Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Variants */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Variants</p>
                <div className="grid sm:grid-cols-2 gap-4 w-full">
                  {(["default", "elevated", "outlined", "ghost"] as const).map((v) => (
                    <Card key={v} variant={v} className="p-5">
                      <p className="text-xs font-mono text-muted-foreground capitalize mb-1">{v}</p>
                      <p className="text-sm font-medium text-foreground">Card variant</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Brief description of contents here.</p>
                    </Card>
                  ))}
                </div>
              </div>

            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[
                { label: "shadcn/ui", code: shadcnCode,   language: "tsx" },
                { label: "Tailwind",  code: tailwindCode, language: "tsx" },
              ]} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Compositions ────────────────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Compositions</h3>
            <p className="text-sm text-muted-foreground">Common patterns — interactive cards, media cards, KPI tiles, and action menus.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">

              {/* Interactive */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Interactive card</p>
                <Card
                  variant="default"
                  interactive
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") e.currentTarget.click() }}
                  className="w-full max-w-sm p-5 group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold text-foreground">Project Alpha</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Last updated 2 hours ago</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </Card>
              </div>

              {/* Media card */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Card with image + metadata</p>
                <Card className="w-full max-w-sm overflow-hidden">
                  <div className="h-36 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Star className="h-10 w-10 text-primary/40" />
                  </div>
                  <CardHeader className="pb-0 space-y-0 gap-1 pt-5">
                    <CardTitle className="text-base text-foreground leading-tight">Design Tokens Guide</CardTitle>
                    <CardDescription>Learn how to use and extend the token system.</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-3 pb-3">
                    <div className="flex flex-wrap gap-2">
                      {["Design", "Tokens", "Tailwind"].map((tag) => (
                        <span key={tag} className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                          <Tag className="h-2.5 w-2.5" />{tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="gap-3 border-t border-border py-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <User className="h-3.5 w-3.5" />Design Team
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground ml-auto">
                      <Calendar className="h-3.5 w-3.5" />Jun 17, 2026
                    </div>
                  </CardFooter>
                </Card>
              </div>

              {/* Stat cards */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">KPI / Stat cards</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
                  {[
                    { label: "Total Users",     value: "12,847",  delta: "+5.2%", positive: true  },
                    { label: "Monthly Revenue", value: "$84,921", delta: "+12%",  positive: true  },
                    { label: "Churn Rate",      value: "2.1%",    delta: "+0.3%", positive: false },
                    { label: "NPS Score",       value: "72",      delta: "+4",    positive: true  },
                  ].map(({ label, value, delta, positive }) => (
                    <Card key={label} className="p-5">
                      <p className="text-xs text-muted-foreground">{label}</p>
                      <p className="text-2xl font-bold text-foreground mt-1">{value}</p>
                      <p className={cn("text-xs font-medium mt-1", positive ? "text-success" : "text-error")}>{delta}</p>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Action menu card */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Card with action menu</p>
                <Card className="w-full max-w-sm p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold text-foreground">Team Report — Q2 2026</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Generated Jun 17, 2026</p>
                    </div>
                    <Button variant="ghost" size="icon" aria-label="More options" className="h-8 w-8 text-muted-foreground">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">Summary of all Q2 team metrics, goal completion, and highlights.</p>
                </Card>
              </div>

            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[
                { label: "shadcn/ui", code: shadcnCode,   language: "tsx" },
                { label: "Tailwind",  code: tailwindCode, language: "tsx" },
              ]} />
            </div>
          </div>
        </div>
      </div>

      {/* Variant Reference */}
      <Section title="Variant Reference">
        <div className="rounded-xl border border-border overflow-hidden text-sm">
          {[
            { variant: "default",  desc: "Standard card with a 1px border and a subtle elevation-1 shadow. Use for most cards on page backgrounds." },
            { variant: "elevated", desc: "Same border as default but elevation-3 shadow. Use to visually promote a card (modal-like, featured)." },
            { variant: "outlined", desc: "2px border, no shadow, transparent background. Use on darker or textured surfaces." },
            { variant: "ghost",    desc: "No shadow, no border, subtle background tint. Use inside panels or nested layouts." },
          ].map(({ variant, desc }) => (
            <div key={variant} className="flex gap-4 border-b border-border last:border-0 px-5 py-3">
              <code className="w-24 shrink-0 font-mono text-xs text-primary">{variant}</code>
              <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Do's and Don'ts */}
      <Section title="Do's and Don'ts">
        <DosDonts
          dos={[
            { text: "Keep card content focused — one topic, one primary action per card." },
            { text: "Use consistent card widths in a grid — avoid mixing narrow and wide cards without reason." },
            { text: "Use CardFooter for actions — separating content from actions improves scannability." },
            { text: "For interactive cards, include focus-visible ring so keyboard users can see focus state." },
          ]}
          donts={[
            { text: "Don't nest cards inside cards — creates visual confusion and hierarchy collapse." },
            { text: "Don't put more than 2–3 primary actions in a card footer." },
            { text: "Don't use cards as full-page containers — they are for grouping, not page layout." },
            { text: "Don't remove the shadow/border entirely on a white background — cards need visual separation." },
          ]}
        />
      </Section>

      {/* Keyboard & Accessibility */}
      <Section title="Keyboard &amp; Accessibility">
        <KeyboardTable rows={[
          { keys: ["Tab"],            action: "Move focus to an interactive card" },
          { keys: ["Enter", "Space"], action: "Activate an interactive card (role='button')" },
          { keys: ["Shift+Tab"],      action: "Move focus away from the card" },
        ]} />
        <div className="mt-4 rounded-xl border border-border p-5 space-y-3 text-sm">
          <p className="font-semibold text-foreground">ARIA &amp; semantic notes</p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-2"><code className="shrink-0 font-mono text-primary">role="button"</code><span>Add to interactive cards along with tabIndex={"{0}"}.</span></li>
            <li className="flex gap-2"><code className="shrink-0 font-mono text-primary">aria-label</code><span>Add a descriptive label to interactive cards so screen reader users know what the card does.</span></li>
            <li className="flex gap-2"><code className="shrink-0 font-mono text-primary">focus-visible</code><span>The interactive prop adds a visible focus ring. Never suppress it.</span></li>
          </ul>
        </div>
      </Section>

      {/* All Props */}
      <Section title="All Props" description="shadcn/ui Card uses composable sub-components.">
        <PropsTable props={[
          { name: "Card (variant)",     type: '"default" | "elevated" | "outlined" | "ghost"', default: '"default"', description: "Visual style — controls border, shadow, and background."  },
          { name: "Card (interactive)", type: "boolean",    default: "false", description: "Adds hover shadow + focus ring styles. Combine with role/tabIndex for accessibility." },
          { name: "CardHeader",         type: "div props",  default: "—",     description: "Contains CardTitle and CardDescription." },
          { name: "CardTitle",          type: "div props",  default: "—",     description: "Card heading." },
          { name: "CardDescription",    type: "div props",  default: "—",     description: "Subtitle text below the title." },
          { name: "CardContent",        type: "div props",  default: "—",     description: "Main body — use className=\"pt-6\" when header is present." },
          { name: "CardFooter",         type: "div props",  default: "—",     description: "Action row at the bottom." },
          { name: "className",          type: "string",     default: "—",     description: "Extend or override Tailwind classes on any sub-component." },
        ]} />
      </Section>
    </ComponentLayout>
  )
}
