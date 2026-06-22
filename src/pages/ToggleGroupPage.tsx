import { useState } from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, List, Grid } from "lucide-react"
import { ComponentLayout, InfoGrid } from "@/components/portal/ComponentLayout"
import { Section, DosDonts, PropsTable, KeyboardTable } from "@/components/portal/Section"
import { CodeTabs } from "@/components/portal/CodeBlock"

// ─── Code snippets ────────────────────────────────────────────────────────────

const singleSelectionCode = `import { useState } from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { AlignLeft, AlignCenter, AlignRight } from "lucide-react"

const [align, setAlign] = useState("")

<ToggleGroup type="single" value={align} onValueChange={setAlign}>
  <ToggleGroupItem value="left" aria-label="Align left">
    <AlignLeft className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Align center">
    <AlignCenter className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right">
    <AlignRight className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>
<p className="mt-2 text-sm text-muted-foreground">
  Alignment: {align || "none"}
</p>`

const multipleSelectionCode = `import { useState } from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Bold, Italic, Underline } from "lucide-react"

const [formatting, setFormatting] = useState<string[]>([])

<ToggleGroup type="multiple" value={formatting} onValueChange={setFormatting}>
  <ToggleGroupItem value="bold" aria-label="Bold">
    <Bold className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Italic">
    <Italic className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Underline">
    <Underline className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>
<p className="mt-2 text-sm text-muted-foreground">
  Active: {formatting.length ? formatting.join(", ") : "none"}
</p>`

const variantsCode = `import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

// Default variant
<ToggleGroup type="single">
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>

// Outline variant
<ToggleGroup type="single" variant="outline">
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>`

const viewSwitcherCode = `import { useState } from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { List, Grid } from "lucide-react"

const [view, setView] = useState("list")

<ToggleGroup
  type="single"
  value={view}
  onValueChange={(v) => v && setView(v)}
>
  <ToggleGroupItem value="list" aria-label="List view">
    <List className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="grid" aria-label="Grid view">
    <Grid className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`

// ─── ToggleGroupPage ──────────────────────────────────────────────────────────

export default function ToggleGroupPage() {
  // Single selection demo
  const [align, setAlign] = useState("")

  // Multiple selection demo
  const [formatting, setFormatting] = useState<string[]>([])

  // View switcher demo
  const [view, setView] = useState("list")

  return (
    <ComponentLayout
      name="Toggle Group"
      description="A set of two-state buttons that can be toggled independently. Built on @radix-ui/react-toggle-group — ideal for text formatting toolbars, view switchers, and filter chips."
      category="Forms"
      status="stable"
      tags={["Radix UI", "Accessible", "Form"]}
    >
      <InfoGrid items={[
        { label: "Component",  value: "ToggleGroup + ToggleGroupItem" },
        { label: "Selection",  value: "single · multiple" },
        { label: "Variants",   value: "default · outline" },
        { label: "Primitive",  value: "@radix-ui/react-toggle-group" },
      ]} />

      {/* Component API */}
      <Section title="Component API">
        <div className="rounded-xl border border-border overflow-hidden text-sm">
          <div className="bg-neutral-50 dark:bg-neutral-900 px-5 py-3 border-b border-border font-mono text-xs text-muted-foreground">
            {'import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"'}
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-40 shrink-0 font-mono text-xs text-primary">type</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">"single" | "multiple"</code>
            <code className="w-24 shrink-0 font-mono text-xs text-error hidden md:block">required</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Selection mode.</p>
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-40 shrink-0 font-mono text-xs text-primary">value</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">string | string[]</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">—</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Controlled selected value(s).</p>
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-40 shrink-0 font-mono text-xs text-primary">onValueChange</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">(value) =&gt; void</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">—</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Called on change.</p>
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-40 shrink-0 font-mono text-xs text-primary">variant</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">"default" | "outline"</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">"default"</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Applied to all items.</p>
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-40 shrink-0 font-mono text-xs text-primary">size</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">"sm" | "default" | "lg"</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">"default"</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Applied to all items.</p>
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-40 shrink-0 font-mono text-xs text-primary">disabled</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">boolean</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">false</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Disables entire group.</p>
          </div>
          <div className="flex gap-4 px-5 py-3">
            <code className="w-40 shrink-0 font-mono text-xs text-primary">ToggleGroupItem.value</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">string</code>
            <code className="w-24 shrink-0 font-mono text-xs text-error hidden md:block">required</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">This item's value.</p>
          </div>
        </div>
      </Section>

      {/* Overview */}
      <Section title="Overview">
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-success/20 bg-success/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When to Use</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Text alignment/formatting toolbar</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />View switcher (list/grid)</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Filter chips</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Mode selection</li>
              </ul>
            </div>
            <div className="rounded-xl border border-warning/20 bg-warning/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When NOT to Use</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Navigation between pages (use Tabs)</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Completely independent toggles (use individual Toggle)</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />When all items should be deselectable</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <hr className="border-border" />

      {/* ── Single Selection ──────────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Single Selection</h3>
            <p className="text-sm text-muted-foreground">Use <code className="font-mono">type="single"</code> for mutually exclusive choices. Only one item can be active at a time.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Text alignment</p>
                <ToggleGroup type="single" value={align} onValueChange={setAlign}>
                  <ToggleGroupItem value="left" aria-label="Align left"><AlignLeft className="h-4 w-4" /></ToggleGroupItem>
                  <ToggleGroupItem value="center" aria-label="Align center"><AlignCenter className="h-4 w-4" /></ToggleGroupItem>
                  <ToggleGroupItem value="right" aria-label="Align right"><AlignRight className="h-4 w-4" /></ToggleGroupItem>
                </ToggleGroup>
                <p className="mt-2 text-sm text-muted-foreground">Alignment: {align || "none"}</p>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: singleSelectionCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Multiple Selection ────────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Multiple Selection</h3>
            <p className="text-sm text-muted-foreground">Use <code className="font-mono">type="multiple"</code> when items can be toggled independently of each other.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Text formatting</p>
                <ToggleGroup type="multiple" value={formatting} onValueChange={setFormatting}>
                  <ToggleGroupItem value="bold" aria-label="Bold"><Bold className="h-4 w-4" /></ToggleGroupItem>
                  <ToggleGroupItem value="italic" aria-label="Italic"><Italic className="h-4 w-4" /></ToggleGroupItem>
                  <ToggleGroupItem value="underline" aria-label="Underline"><Underline className="h-4 w-4" /></ToggleGroupItem>
                </ToggleGroup>
                <p className="mt-2 text-sm text-muted-foreground">Active: {formatting.length ? formatting.join(", ") : "none"}</p>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: multipleSelectionCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Variants ──────────────────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Variants</h3>
            <p className="text-sm text-muted-foreground">The <code className="font-mono">variant</code> prop on ToggleGroup is applied to all child items automatically.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Default variant</p>
                <ToggleGroup type="single">
                  <ToggleGroupItem value="left">Left</ToggleGroupItem>
                  <ToggleGroupItem value="center">Center</ToggleGroupItem>
                  <ToggleGroupItem value="right">Right</ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Outline variant</p>
                <ToggleGroup type="single" variant="outline">
                  <ToggleGroupItem value="left">Left</ToggleGroupItem>
                  <ToggleGroupItem value="center">Center</ToggleGroupItem>
                  <ToggleGroupItem value="right">Right</ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: variantsCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* ── View Switcher ─────────────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">View Switcher</h3>
            <p className="text-sm text-muted-foreground">A common pattern for switching between layout modes. Guard against deselection by checking for a truthy value before updating state.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">List / Grid toggle</p>
                <ToggleGroup
                  type="single"
                  value={view}
                  onValueChange={(v) => v && setView(v)}
                >
                  <ToggleGroupItem value="list" aria-label="List view"><List className="h-4 w-4" /></ToggleGroupItem>
                  <ToggleGroupItem value="grid" aria-label="Grid view"><Grid className="h-4 w-4" /></ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: viewSwitcherCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* Do's and Don'ts */}
      <Section title="Do's and Don'ts">
        <DosDonts
          dos={[
            { text: "Use type=\"single\" for mutually exclusive choices." },
            { text: "Use type=\"multiple\" for independent toggleable features." },
            { text: "Provide aria-label on icon-only items." },
            { text: "Keep groups small (2-6 items)." },
          ]}
          donts={[
            { text: "Don't allow all items to be deselected in single mode (handle the empty string case)." },
            { text: "Don't use for primary navigation." },
            { text: "Don't put unrelated actions in one group." },
          ]}
        />
      </Section>

      {/* Keyboard */}
      <Section title="Keyboard & Accessibility">
        <KeyboardTable rows={[
          { keys: ["Space", "Enter"], action: "Toggle the focused item" },
          { keys: ["←", "→"],        action: "Move focus within the group" },
          { keys: ["Tab"],            action: "Move focus into / out of the group" },
        ]} />
      </Section>

      {/* Props */}
      <Section title="All Props" description="ToggleGroup and ToggleGroupItem props.">
        <PropsTable props={[
          { name: "type",                  type: '"single" | "multiple"',    default: "—",          required: true,  description: "Selection mode." },
          { name: "value",                 type: "string | string[]",        default: "—",                           description: "Controlled selected value(s)." },
          { name: "onValueChange",         type: "(value) => void",          default: "—",                           description: "Called on change." },
          { name: "variant",               type: '"default" | "outline"',    default: '"default"',                   description: "Applied to all items." },
          { name: "size",                  type: '"sm" | "default" | "lg"',  default: '"default"',                   description: "Applied to all items." },
          { name: "disabled",              type: "boolean",                  default: "false",                       description: "Disables entire group." },
          { name: "ToggleGroupItem.value", type: "string",                   default: "—",          required: true,  description: "This item's value." },
        ]} />
      </Section>
    </ComponentLayout>
  )
}
