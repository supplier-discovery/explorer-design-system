import { useState } from "react"
import { Loader2, Plus, ArrowRight, Mail, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { ComponentLayout, InfoGrid } from "@/components/portal/ComponentLayout"
import { Section, DosDonts, PropsTable, KeyboardTable } from "@/components/portal/Section"
import { PreviewBox, PreviewRow } from "@/components/portal/PreviewBox"
import { CodeTabs } from "@/components/portal/CodeBlock"

// ─── Inline Button component ─────────────────────────────────────────────────
// This is the live preview implementation using design tokens via Tailwind.
// The code examples below show the shadcn/ui equivalent.

type BtnVariant = "filled" | "outlined" | "text" | "tonal" | "destructive"
type BtnSize    = "sm" | "md" | "lg"

interface BtnProps {
  variant?: BtnVariant
  size?: BtnSize
  disabled?: boolean
  loading?: boolean
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  children?: React.ReactNode
  className?: string
  onClick?: () => void
}

const variantClasses: Record<BtnVariant, string> = {
  filled:      "bg-primary text-white hover:bg-primary-dark active:bg-primary-dark shadow-elevation-1 hover:shadow-elevation-2",
  outlined:    "border border-primary text-primary bg-transparent hover:bg-primary/10 active:bg-primary/15",
  text:        "text-primary bg-transparent hover:bg-primary/10 active:bg-primary/15",
  tonal:       "bg-primary/10 text-primary hover:bg-primary/20 active:bg-primary/25",
  destructive: "bg-error text-white hover:bg-error-dark active:bg-error-dark shadow-elevation-1",
}

const sizeClasses: Record<BtnSize, string> = {
  sm: "h-[30px] px-3 text-xs rounded-md gap-1.5",
  md: "h-[36px] px-4 text-sm rounded-lg gap-2",
  lg: "h-[42px] px-5 text-base rounded-lg gap-2",
}

function Btn({ variant = "filled", size = "md", disabled, loading, iconLeft, iconRight, children, className, onClick }: BtnProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center font-medium transition-all select-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-40",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {loading && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
      {!loading && iconLeft}
      {children}
      {!loading && iconRight}
    </button>
  )
}

// ─── Code examples ────────────────────────────────────────────────────────────

const reactCode = `import { Button } from "@/components/ui/button"
import { Plus, Loader2 } from "lucide-react"

// Variants
<Button>Filled</Button>
<Button variant="outline">Outlined</Button>
<Button variant="ghost">Text / Ghost</Button>
<Button variant="secondary">Tonal</Button>
<Button variant="destructive">Destructive</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Medium</Button>
<Button size="lg">Large</Button>

// With icon
<Button>
  <Plus className="mr-2 h-4 w-4" />
  Add Item
</Button>

// Icon right
<Button>
  Continue
  <ArrowRight className="ml-2 h-4 w-4" />
</Button>

// Loading state
<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Saving…
</Button>

// Disabled
<Button disabled>Disabled</Button>`

const htmlCode = `<!-- Filled button (primary action) -->
<button
  type="button"
  class="inline-flex items-center justify-center h-9 px-4 rounded-lg
         bg-[#02332E] text-white text-sm font-medium
         hover:bg-[rgba(2,51,46,0.8)] transition-colors
         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
         disabled:opacity-40 disabled:pointer-events-none"
>
  Button
</button>

<!-- Outlined button -->
<button
  type="button"
  class="inline-flex items-center justify-center h-9 px-4 rounded-lg
         border border-[#02332E] text-[#02332E] text-sm font-medium
         hover:bg-[rgba(2,51,46,0.1)] transition-colors"
>
  Button
</button>`

const tailwindCode = `{/* Filled */}
<button className="inline-flex items-center justify-center h-[36px] px-4 rounded-lg
  bg-primary text-white text-sm font-medium gap-2
  hover:bg-primary-dark transition-all shadow-elevation-1
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
  disabled:opacity-40 disabled:pointer-events-none">
  Filled
</button>

{/* Outlined */}
<button className="inline-flex items-center justify-center h-[36px] px-4 rounded-lg
  border border-primary text-primary text-sm font-medium
  hover:bg-primary/10 transition-colors
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
  Outlined
</button>

{/* Tonal */}
<button className="inline-flex items-center justify-center h-[36px] px-4 rounded-lg
  bg-primary/10 text-primary text-sm font-medium
  hover:bg-primary/20 transition-colors">
  Tonal
</button>`

const shadcnInstall = `# 1. Install the component
npx shadcn@latest add button

# 2. The file lands at src/components/ui/button.tsx
# 3. It uses class-variance-authority (CVA) for variants

# Import and use
import { Button } from "@/components/ui/button"

<Button>Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="link">Link</Button>`

// ─── ButtonPage ───────────────────────────────────────────────────────────────

export default function ButtonPage() {
  const [loadingDemo, setLoadingDemo] = useState(false)

  function handleLoadingDemo() {
    setLoadingDemo(true)
    setTimeout(() => setLoadingDemo(false), 2000)
  }

  return (
    <ComponentLayout
      name="Button"
      description="Triggers an action or event when clicked. The most fundamental interactive element in any UI."
      category="Forms"
      status="stable"
      tags={["shadcn/ui", "Radix UI", "Accessible"]}
    >
      <InfoGrid items={[
        { label: "Variants",  value: "5"       },
        { label: "Sizes",     value: "3"        },
        { label: "States",    value: "6"        },
        { label: "WCAG",      value: "AA 2.2"   },
      ]} />

      {/* Overview */}
      <Section title="Overview">
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            Buttons communicate actions that users can take. They are typically placed
            in interfaces at locations such as dialogs, modal windows, forms, cards, and toolbars.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-success/20 bg-success/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When to Use</p>
              <ul className="space-y-1.5">
                {["Submitting a form", "Confirming an action in a dialog", "Triggering a primary workflow step", "Opening a modal or drawer", "Inline actions in a table or list"].map((i) => (
                  <li key={i} className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />{i}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-warning/20 bg-warning/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When NOT to Use</p>
              <ul className="space-y-1.5">
                {["Navigating to a different page (use a Link)", "Long labels — keep button text concise", "Too many primary buttons on one screen", "Replacing checkboxes or toggle switches"].map((i) => (
                  <li key={i} className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Live Preview */}
      <Section title="Preview" description="All five variants at medium size with default state.">
        <PreviewBox>
          <Btn variant="filled">Filled</Btn>
          <Btn variant="outlined">Outlined</Btn>
          <Btn variant="text">Text</Btn>
          <Btn variant="tonal">Tonal</Btn>
          <Btn variant="destructive">Destructive</Btn>
        </PreviewBox>
      </Section>

      {/* Code Examples */}
      <Section title="Code Examples">
        <CodeTabs tabs={[
          { label: "React",       code: reactCode,      language: "tsx"  },
          { label: "HTML",        code: htmlCode,       language: "html" },
          { label: "Tailwind",    code: tailwindCode,   language: "tsx"  },
          { label: "shadcn/ui",   code: shadcnInstall,  language: "bash" },
        ]} />
      </Section>

      {/* Variants */}
      <Section title="Variants" description="Use the variant that matches the action's importance and context.">
        <div className="rounded-xl border border-border overflow-hidden">
          {(["filled", "outlined", "text", "tonal", "destructive"] as BtnVariant[]).map((v) => (
            <div key={v} className="flex items-center gap-6 px-5 py-4 border-b border-border last:border-0">
              <div className="w-28 shrink-0">
                <p className="text-xs font-semibold text-foreground capitalize">{v}</p>
              </div>
              <Btn variant={v}>{v.charAt(0).toUpperCase() + v.slice(1)}</Btn>
              <p className="text-xs text-muted-foreground hidden sm:block">
                {{
                  filled: "Primary actions. Highest emphasis. Use once per section.",
                  outlined: "Secondary actions alongside a filled button.",
                  text: "Low-emphasis actions, links, or inline contextual actions.",
                  tonal: "Medium emphasis — softer than outlined. Good for secondary actions.",
                  destructive: "Irreversible or dangerous actions like delete or revoke.",
                }[v]}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Sizes */}
      <Section title="Sizes">
        <PreviewBox>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <Btn size="sm">Small</Btn>
              <code className="text-xs font-mono text-muted-foreground">h-[30px]</code>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Btn size="md">Medium</Btn>
              <code className="text-xs font-mono text-muted-foreground">h-[36px]</code>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Btn size="lg">Large</Btn>
              <code className="text-xs font-mono text-muted-foreground">h-[42px]</code>
            </div>
          </div>
        </PreviewBox>
      </Section>

      {/* States */}
      <Section title="States" description="Every interactive state must be visually distinct.">
        <PreviewBox layout="stack">
          <PreviewRow label="Default">
            <Btn>Default</Btn>
          </PreviewRow>
          <PreviewRow label="Disabled (opacity-40, pointer-events-none)">
            <Btn disabled>Disabled</Btn>
            <Btn variant="outlined" disabled>Disabled</Btn>
            <Btn variant="text" disabled>Disabled</Btn>
          </PreviewRow>
          <PreviewRow label="Loading (spinner replaces icon, pointer disabled)">
            <Btn loading>Loading</Btn>
            <Btn variant="outlined" loading>Saving…</Btn>
          </PreviewRow>
          <PreviewRow label="Loading demo (click to trigger 2s)">
            <Btn loading={loadingDemo} onClick={handleLoadingDemo}>
              {loadingDemo ? "Processing…" : "Click to Demo"}
            </Btn>
          </PreviewRow>
        </PreviewBox>
      </Section>

      {/* With Icons */}
      <Section title="With Icons" description="Icons reinforce the action. Always pair with text unless space is critically limited.">
        <PreviewBox layout="stack">
          <PreviewRow label="Icon left">
            <Btn iconLeft={<Plus className="h-4 w-4" />}>Add Item</Btn>
            <Btn variant="outlined" iconLeft={<Mail className="h-4 w-4" />}>Send Email</Btn>
          </PreviewRow>
          <PreviewRow label="Icon right">
            <Btn iconRight={<ArrowRight className="h-4 w-4" />}>Continue</Btn>
          </PreviewRow>
          <PreviewRow label="Icon only (use aria-label)">
            <Btn className="w-9 px-0" aria-label="Add item"><Plus className="h-4 w-4" /></Btn>
            <Btn variant="outlined" className="w-9 px-0" aria-label="Delete"><Trash2 className="h-4 w-4" /></Btn>
            <Btn variant="destructive" className="w-9 px-0" aria-label="Delete permanently"><Trash2 className="h-4 w-4" /></Btn>
          </PreviewRow>
        </PreviewBox>
      </Section>

      {/* Do's and Don'ts */}
      <Section title="Do's and Don'ts">
        <DosDonts
          dos={[
            { text: "Use a single filled (primary) button per section — it signals the main action." },
            { text: "Keep labels concise: 1–3 words. 'Save Changes' not 'Click here to save your changes'." },
            { text: "Always provide an aria-label for icon-only buttons." },
            { text: "Use destructive variant only for irreversible actions (delete, revoke, cancel subscription)." },
            { text: "Ensure touch targets are at least 44×44px — critical on mobile." },
          ]}
          donts={[
            { text: "Don't use multiple filled buttons side-by-side — secondary action should use outlined or text." },
            { text: "Don't use a button for navigation between pages — use a Link element." },
            { text: "Don't disable a button without explaining why in helper text nearby." },
            { text: "Don't use ALL CAPS labels — use sentence case for readability." },
            { text: "Don't strip the focus ring — it's required for keyboard accessibility." },
          ]}
        />
      </Section>

      {/* Props */}
      <Section title="Props" description="shadcn/ui Button extends the native HTML button element.">
        <PropsTable props={[
          { name: "variant",   type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"', default: '"default"',  description: "Visual style of the button."           },
          { name: "size",      type: '"default" | "sm" | "lg" | "icon"',                                        default: '"default"',  description: "Controls button height and padding."  },
          { name: "disabled",  type: "boolean",                                                                  default: "false",      description: "Prevents interaction."               },
          { name: "asChild",   type: "boolean",                                                                  default: "false",      description: "Renders as child element via Radix Slot." },
          { name: "className", type: "string",                                                                   default: "—",         description: "Additional Tailwind classes."         },
          { name: "onClick",   type: "() => void",                                                               default: "—",         description: "Click handler."                      },
          { name: "type",      type: '"button" | "submit" | "reset"',                                            default: '"button"',  description: "HTML button type. Always set explicitly in forms." },
        ]} />
      </Section>

      {/* Accessibility */}
      <Section title="Accessibility" description="Built on a native <button> element — fully keyboard and screen-reader accessible.">
        <KeyboardTable rows={[
          { keys: ["Enter", "Space"], action: "Activates the button" },
          { keys: ["Tab"],           action: "Moves focus to the button" },
          { keys: ["Shift+Tab"],     action: "Moves focus away from the button" },
        ]} />
        <div className="mt-4 rounded-xl border border-border p-5 space-y-3 text-sm">
          <p className="font-semibold text-foreground">ARIA & Semantic notes</p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-2"><span className="text-primary font-mono shrink-0">role</span><span>Implicit <code className="font-mono">role="button"</code> on native button. Never use <code className="font-mono">div</code> or <code className="font-mono">span</code> as a button.</span></li>
            <li className="flex gap-2"><span className="text-primary font-mono shrink-0">aria-label</span><span>Required when the button contains only an icon — describes the action to screen readers.</span></li>
            <li className="flex gap-2"><span className="text-primary font-mono shrink-0">aria-disabled</span><span>Use instead of <code className="font-mono">disabled</code> when you need the element focusable but not actionable.</span></li>
            <li className="flex gap-2"><span className="text-primary font-mono shrink-0">aria-busy</span><span>Set to <code className="font-mono">true</code> during loading states to announce the progress to assistive technology.</span></li>
          </ul>
        </div>
      </Section>

      {/* Responsive */}
      <Section title="Responsive Behavior">
        <div className="rounded-xl border border-border overflow-hidden text-sm">
          {[
            { bp: "Mobile (< 640px)", notes: "Full-width buttons in forms. Icon-only for inline actions. Min touch target 44px." },
            { bp: "Tablet (640–1024px)", notes: "Auto-width buttons. Icon + label pattern recommended." },
            { bp: "Desktop (> 1024px)", notes: "Fixed-width. Multiple buttons in a row use gap-3 spacing." },
          ].map(({ bp, notes }) => (
            <div key={bp} className="flex gap-4 border-b border-border last:border-0 px-5 py-3">
              <p className="w-44 shrink-0 font-medium text-foreground">{bp}</p>
              <p className="text-muted-foreground">{notes}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Best Practices */}
      <Section title="Best Practices">
        <div className="rounded-xl border border-border p-5 space-y-3">
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            {[
              "Use filled (primary) sparingly — one per view section to clearly communicate the main action.",
              "Hierarchy: Filled > Outlined > Tonal > Text. Mix variants to establish visual priority.",
              "In a dialog, place the primary action on the right and cancel/secondary on the left.",
              "On mobile, use full-width buttons (w-full) inside forms for easier tap targets.",
              "Always set type=\"button\" or type=\"submit\" explicitly — browser defaults can cause accidental form submissions.",
              "When a destructive action cannot be undone, show a confirmation dialog before executing it.",
              "Use consistent label verbs: 'Save', 'Delete', 'Cancel'. Avoid vague labels like 'OK' or 'Yes'.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </ComponentLayout>
  )
}
