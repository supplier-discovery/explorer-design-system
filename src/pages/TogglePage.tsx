import { useState } from "react"
import { Toggle } from "@/components/ui/toggle"
import { Bold, Italic, Underline } from "lucide-react"
import { ComponentLayout, InfoGrid } from "@/components/portal/ComponentLayout"
import { Section, DosDonts, PropsTable, KeyboardTable } from "@/components/portal/Section"
import { CodeTabs } from "@/components/portal/CodeBlock"

// ─── Code snippets ────────────────────────────────────────────────────────────

const variantsCode = `import { Toggle } from "@/components/ui/toggle"

// Default variant
<Toggle>Bold</Toggle>
<Toggle pressed>Bold</Toggle>

// Outline variant
<Toggle variant="outline">Bold</Toggle>
<Toggle variant="outline" pressed>Bold</Toggle>`

const sizesCode = `import { Toggle } from "@/components/ui/toggle"

// Small
<Toggle size="sm">Small</Toggle>

// Default (medium)
<Toggle>Medium</Toggle>

// Large
<Toggle size="lg">Large</Toggle>`

const iconOnlyCode = `import { Toggle } from "@/components/ui/toggle"
import { Bold, Italic, Underline } from "lucide-react"

const [bold, setBold] = useState(false)
const [italic, setItalic] = useState(false)
const [underline, setUnderline] = useState(false)

<div className="flex items-center gap-1">
  <Toggle pressed={bold} onPressedChange={setBold} aria-label="Bold">
    <Bold className="h-4 w-4" />
  </Toggle>
  <Toggle pressed={italic} onPressedChange={setItalic} aria-label="Italic">
    <Italic className="h-4 w-4" />
  </Toggle>
  <Toggle pressed={underline} onPressedChange={setUnderline} aria-label="Underline">
    <Underline className="h-4 w-4" />
  </Toggle>
</div>`

const withTextCode = `import { Toggle } from "@/components/ui/toggle"
import { Bold, Italic, Underline } from "lucide-react"

<Toggle>
  <Bold className="h-4 w-4 mr-1.5" />Bold
</Toggle>
<Toggle>
  <Italic className="h-4 w-4 mr-1.5" />Italic
</Toggle>
<Toggle>
  <Underline className="h-4 w-4 mr-1.5" />Underline
</Toggle>`

// ─── TogglePage ───────────────────────────────────────────────────────────────

export default function TogglePage() {
  // Variants demo state
  const [defaultUnpressed, setDefaultUnpressed] = useState(false)
  const [defaultPressed, setDefaultPressed] = useState(true)
  const [outlineUnpressed, setOutlineUnpressed] = useState(false)
  const [outlinePressed, setOutlinePressed] = useState(true)

  // Icon-only demo state
  const [bold, setBold] = useState(false)
  const [italic, setItalic] = useState(false)
  const [underline, setUnderline] = useState(false)

  return (
    <ComponentLayout
      name="Toggle"
      description="A two-state button that can be either on or off. Built on @radix-ui/react-toggle — use for toolbar actions, view filters, and formatting controls."
      category="Forms"
      status="stable"
      tags={["Radix UI", "Accessible", "Form"]}
    >
      <InfoGrid items={[
        { label: "Component",  value: "Toggle" },
        { label: "Variants",   value: "default · outline" },
        { label: "Sizes",      value: "sm · default · lg" },
        { label: "Primitive",  value: "@radix-ui/react-toggle" },
      ]} />

      {/* Component API */}
      <Section title="Component API">
        <div className="rounded-xl border border-border overflow-hidden text-sm">
          <div className="bg-neutral-50 dark:bg-neutral-900 px-5 py-3 border-b border-border font-mono text-xs text-muted-foreground">
            {'import { Toggle } from "@/components/ui/toggle"'}
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-36 shrink-0 font-mono text-xs text-primary">pressed</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">boolean</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">—</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Controlled pressed state.</p>
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-36 shrink-0 font-mono text-xs text-primary">defaultPressed</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">boolean</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">false</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Uncontrolled initial state.</p>
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-36 shrink-0 font-mono text-xs text-primary">onPressedChange</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">(pressed: boolean) =&gt; void</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">—</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Called when toggled.</p>
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-36 shrink-0 font-mono text-xs text-primary">variant</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">"default" | "outline"</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">"default"</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Visual style.</p>
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-36 shrink-0 font-mono text-xs text-primary">size</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">"sm" | "default" | "lg"</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">"default"</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Button dimensions.</p>
          </div>
          <div className="flex gap-4 px-5 py-3">
            <code className="w-36 shrink-0 font-mono text-xs text-primary">disabled</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">boolean</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">false</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Prevents interaction.</p>
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
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Text formatting toolbar (bold/italic/underline)</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />View mode switcher</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Filter toggle</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Toolbar actions with active state</li>
              </ul>
            </div>
            <div className="rounded-xl border border-warning/20 bg-warning/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When NOT to Use</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Primary actions (use Button)</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />On/off settings (use Switch)</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Mutually exclusive selection (use ToggleGroup type="single")</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <hr className="border-border" />

      {/* ── Variants ──────────────────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Variants</h3>
            <p className="text-sm text-muted-foreground">Default and outline visual styles — each shown in unpressed and pressed states.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Default variant</p>
                <div className="flex items-center gap-2">
                  <Toggle pressed={defaultUnpressed} onPressedChange={setDefaultUnpressed}>Bold</Toggle>
                  <Toggle pressed={defaultPressed} onPressedChange={setDefaultPressed}>Bold</Toggle>
                </div>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Outline variant</p>
                <div className="flex items-center gap-2">
                  <Toggle variant="outline" pressed={outlineUnpressed} onPressedChange={setOutlineUnpressed}>Bold</Toggle>
                  <Toggle variant="outline" pressed={outlinePressed} onPressedChange={setOutlinePressed}>Bold</Toggle>
                </div>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: variantsCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Sizes ─────────────────────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Sizes</h3>
            <p className="text-sm text-muted-foreground">Three size options available: sm, default, and lg.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Small</p>
                <Toggle size="sm">Small</Toggle>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Medium (default)</p>
                <Toggle>Medium</Toggle>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Large</p>
                <Toggle size="lg">Large</Toggle>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: sizesCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Icon Only ─────────────────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Icon Only</h3>
            <p className="text-sm text-muted-foreground">Icon-only toggles always require an <code className="font-mono">aria-label</code> for accessibility.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Formatting toolbar</p>
                <div className="flex items-center gap-1">
                  <Toggle pressed={bold} onPressedChange={setBold} aria-label="Bold"><Bold className="h-4 w-4" /></Toggle>
                  <Toggle pressed={italic} onPressedChange={setItalic} aria-label="Italic"><Italic className="h-4 w-4" /></Toggle>
                  <Toggle pressed={underline} onPressedChange={setUnderline} aria-label="Underline"><Underline className="h-4 w-4" /></Toggle>
                </div>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: iconOnlyCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* ── With Text ─────────────────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">With Text</h3>
            <p className="text-sm text-muted-foreground">Combine an icon with a text label for more descriptive toolbar buttons.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Icon + label</p>
                <div className="flex items-center gap-2">
                  <Toggle><Bold className="h-4 w-4 mr-1.5" />Bold</Toggle>
                  <Toggle><Italic className="h-4 w-4 mr-1.5" />Italic</Toggle>
                  <Toggle><Underline className="h-4 w-4 mr-1.5" />Underline</Toggle>
                </div>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: withTextCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* Do's and Don'ts */}
      <Section title="Do's and Don'ts">
        <DosDonts
          dos={[
            { text: "Use for binary state toolbar actions." },
            { text: "Provide aria-label for icon-only toggles." },
            { text: "Group related toggles visually." },
            { text: "Use outline variant for subtler contexts." },
          ]}
          donts={[
            { text: "Don't use for primary actions (use Button)." },
            { text: "Don't use for settings (use Switch)." },
            { text: "Don't use for navigation (use tabs)." },
            { text: "Don't use more than 5-6 toggles in a row." },
          ]}
        />
      </Section>

      {/* Keyboard */}
      <Section title="Keyboard & Accessibility">
        <KeyboardTable rows={[
          { keys: ["Space", "Enter"], action: "Toggle pressed state" },
          { keys: ["Tab"],            action: "Move focus to toggle" },
          { keys: ["Shift+Tab"],      action: "Move focus backwards" },
        ]} />
      </Section>

      {/* Props */}
      <Section title="All Props" description="Toggle extends the native HTML button element via Radix UI.">
        <PropsTable props={[
          { name: "pressed",          type: "boolean",                          default: "—",          description: "Controlled pressed state." },
          { name: "defaultPressed",   type: "boolean",                          default: "false",      description: "Uncontrolled initial state." },
          { name: "onPressedChange",  type: "(pressed: boolean) => void",       default: "—",          description: "Called when toggled." },
          { name: "variant",          type: '"default" | "outline"',            default: '"default"',  description: "Visual style." },
          { name: "size",             type: '"sm" | "default" | "lg"',          default: '"default"',  description: "Button dimensions." },
          { name: "disabled",         type: "boolean",                          default: "false",      description: "Prevents interaction." },
        ]} />
      </Section>
    </ComponentLayout>
  )
}
