import { useState } from "react"
import { SquareCheck, CircleDot } from "lucide-react"
import { Checkbox, CheckboxToggle } from "@/components/ui/checkbox"
import { RadioGroup, RadioItem } from "@/components/ui/radio-group"
import { ComponentLayout, InfoGrid } from "@/components/portal/ComponentLayout"
import { Section, DosDonts, PropsTable, KeyboardTable } from "@/components/portal/Section"
import { CodeTabs } from "@/components/portal/CodeBlock"
import { cn } from "@/lib/utils"

// ─── Code snippets ────────────────────────────────────────────────────────────

const checkboxStatesCode = `import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

// Uncontrolled (default unchecked)
<Checkbox />

// Controlled — checked
const [checked, setChecked] = useState(false)
<Checkbox checked={checked} onCheckedChange={setChecked} />

// Indeterminate — useful for "select all" with mixed child state
<Checkbox checked="indeterminate" />

// Disabled
<Checkbox disabled />
<Checkbox checked disabled />

// Validation states
<Checkbox error />
<Checkbox checked error />
<Checkbox success />
<Checkbox checked success />`

const checkboxLabelCode = `import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

// With label — use htmlFor linking to Checkbox's id
const [terms, setTerms] = useState(false)

<div className="flex items-center gap-2.5">
  <Checkbox id="terms" checked={terms} onCheckedChange={setTerms} />
  <label htmlFor="terms" className="text-sm font-medium cursor-pointer leading-none">
    Accept terms and conditions
  </label>
</div>

// With description — use items-start + mt-0.5 on the Checkbox
const [marketing, setMarketing] = useState(true)

<div className="flex items-start gap-2.5">
  <Checkbox
    id="marketing"
    checked={marketing}
    onCheckedChange={setMarketing}
    className="mt-0.5"
  />
  <div>
    <label htmlFor="marketing" className="text-sm font-medium cursor-pointer">
      Marketing emails
    </label>
    <p className="text-xs text-muted-foreground mt-0.5">
      Receive product updates and special offers.
    </p>
  </div>
</div>`

const checkboxGroupCode = `import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

const OPTIONS = [
  { id: "email",    label: "Email",             desc: "Daily digest to your inbox"    },
  { id: "push",     label: "Push notifications", desc: "Alerts on your mobile device"  },
  { id: "sms",      label: "SMS",               desc: "Text messages for critical updates" },
  { id: "desktop",  label: "Desktop",           desc: "Notifications in your browser" },
]

const [selected, setSelected] = useState<string[]>(["email"])

function toggle(id: string) {
  setSelected((prev) =>
    prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
  )
}

const allChecked = selected.length === OPTIONS.length
const someChecked = selected.length > 0 && !allChecked

<div className="space-y-3">
  <div className="flex items-center gap-2.5">
    <Checkbox
      id="all"
      checked={allChecked ? true : someChecked ? "indeterminate" : false}
      onCheckedChange={(c) => setSelected(c ? OPTIONS.map((o) => o.id) : [])}
    />
    <label htmlFor="all" className="text-sm font-semibold cursor-pointer">
      All notifications
    </label>
  </div>

  <div className="border-l-2 border-border ml-2 pl-4 space-y-3">
    {OPTIONS.map((opt) => (
      <div key={opt.id} className="flex items-start gap-2.5">
        <Checkbox
          id={opt.id}
          checked={selected.includes(opt.id)}
          onCheckedChange={() => toggle(opt.id)}
          className="mt-0.5"
        />
        <div>
          <label htmlFor={opt.id} className="text-sm font-medium cursor-pointer">
            {opt.label}
          </label>
          <p className="text-xs text-muted-foreground">{opt.desc}</p>
        </div>
      </div>
    ))}
  </div>
</div>`

const checkboxToggleCode = `import { CheckboxToggle } from "@/components/ui/checkbox"
import { useState } from "react"

// Three sizes
<CheckboxToggle size="sm" />
<CheckboxToggle />                {/* default */}
<CheckboxToggle size="lg" />

// Controlled with label
const [darkMode, setDarkMode] = useState(false)

<div className="flex items-center justify-between">
  <div>
    <p className="text-sm font-medium">Dark mode</p>
    <p className="text-xs text-muted-foreground">Use dark theme across the app</p>
  </div>
  <CheckboxToggle checked={darkMode} onCheckedChange={setDarkMode} />
</div>

// Disabled
<CheckboxToggle checked disabled />
<CheckboxToggle disabled />`

const radioStatesCode = `import { RadioGroup, RadioItem } from "@/components/ui/radio-group"
import { useState } from "react"

const [plan, setPlan] = useState("")

// Bare controls — no labels
<RadioGroup name="plan-states" value={plan} onValueChange={setPlan}>
  <RadioItem value="a" />
  <RadioItem value="b" />
</RadioGroup>

// Disabled
<RadioGroup name="plan-disabled" value="b" disabled>
  <RadioItem value="a" />
  <RadioItem value="b" />
</RadioGroup>

// Error
<RadioGroup name="plan-error" value="a" error>
  <RadioItem value="a" />
  <RadioItem value="b" />
</RadioGroup>

// Success
<RadioGroup name="plan-success" value="b" success>
  <RadioItem value="a" />
  <RadioItem value="b" />
</RadioGroup>`

const radioLabelCode = `import { RadioGroup, RadioItem } from "@/components/ui/radio-group"
import { useState } from "react"

const [notify, setNotify] = useState("email")

<RadioGroup name="notify" value={notify} onValueChange={setNotify}>
  {[
    { value: "email", label: "Email" },
    { value: "push",  label: "Push"  },
    { value: "sms",   label: "SMS"   },
  ].map(({ value, label }) => (
    <div key={value} className="flex items-center gap-2.5">
      <RadioItem value={value} id={\`notify-\${value}\`} />
      <label htmlFor={\`notify-\${value}\`} className="text-sm font-medium cursor-pointer">
        {label}
      </label>
    </div>
  ))}
</RadioGroup>

// With description — items-start + mt-0.5 on RadioItem
<RadioGroup name="plan-desc" value={plan} onValueChange={setPlan}>
  <div className="flex items-start gap-2.5">
    <RadioItem value="free" id="plan-free" className="mt-0.5" />
    <div>
      <label htmlFor="plan-free" className="text-sm font-medium cursor-pointer">Free</label>
      <p className="text-xs text-muted-foreground">Up to 3 projects, 1 GB storage.</p>
    </div>
  </div>
</RadioGroup>`

const radioGroupCode = `import { RadioGroup, RadioItem } from "@/components/ui/radio-group"
import { useState } from "react"

// Vertical (default)
const [plan, setPlan] = useState("pro")

<RadioGroup name="plan" value={plan} onValueChange={setPlan}>
  {["starter", "pro", "enterprise"].map((v) => (
    <div key={v} className="flex items-center gap-2.5">
      <RadioItem value={v} id={\`plan-\${v}\`} />
      <label htmlFor={\`plan-\${v}\`} className="text-sm font-medium cursor-pointer capitalize">
        {v}
      </label>
    </div>
  ))}
</RadioGroup>

// Horizontal — add orientation="horizontal" to RadioGroup
const [size, setSize] = useState("md")

<RadioGroup name="size" value={size} onValueChange={setSize} orientation="horizontal">
  {["sm", "md", "lg", "xl"].map((v) => (
    <div key={v} className="flex items-center gap-2.5">
      <RadioItem value={v} id={\`size-\${v}\`} />
      <label htmlFor={\`size-\${v}\`} className="text-sm font-medium cursor-pointer uppercase">
        {v}
      </label>
    </div>
  ))}
</RadioGroup>`

// ─── SelectionControlsPage ────────────────────────────────────────────────────

export default function SelectionControlsPage() {
  const [tab, setTab] = useState<"checkboxes" | "radio">("checkboxes")

  // Checkbox — states
  const [cbInteractive, setCbInteractive] = useState(false)

  // Checkbox — with label
  const [cbTerms, setCbTerms] = useState(false)
  const [cbMarketing, setCbMarketing] = useState(true)
  const [cbNewsletter, setCbNewsletter] = useState(false)

  // Checkbox — group
  const GROUP_OPTIONS = [
    { id: "email",   label: "Email",              desc: "Daily digest to your inbox"       },
    { id: "push",    label: "Push notifications", desc: "Alerts on your mobile device"     },
    { id: "sms",     label: "SMS",                desc: "Text messages for critical updates" },
    { id: "desktop", label: "Desktop",            desc: "Notifications in your browser"    },
  ]
  const [cbGroup, setCbGroup] = useState<string[]>(["email"])
  const allChecked = cbGroup.length === GROUP_OPTIONS.length
  const someChecked = cbGroup.length > 0 && !allChecked
  const toggleGroupItem = (id: string) =>
    setCbGroup((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id])

  // Checkbox — toggle
  const [toggle1, setToggle1] = useState(false)
  const [toggle2, setToggle2] = useState(true)
  const [toggleDark, setToggleDark] = useState(false)

  // Radio — states
  const [radioBasic, setRadioBasic] = useState("")

  // Radio — with label
  const [radioLabel, setRadioLabel] = useState("email")

  // Radio — with description
  const [radioPlan, setRadioPlan] = useState("pro")

  // Radio group — vertical
  const [radioV, setRadioV] = useState("pro")

  // Radio group — horizontal
  const [radioH, setRadioH] = useState("md")

  return (
    <ComponentLayout
      name="Selection Controls"
      description="Checkboxes for multi-select and toggle states. Radio buttons for mutually exclusive single-select. Both built on Radix UI primitives with full WCAG 2.2 AA keyboard support."
      category="Forms"
      status="stable"
      tags={["Radix UI", "Accessible", "Form"]}
    >
      {/* ── Tab Switcher ──────────────────────────────────────────────────── */}
      <div className="flex gap-1 rounded-xl border border-border bg-background p-1 w-fit">
        {([
          { id: "checkboxes", label: "Checkboxes",    Icon: SquareCheck },
          { id: "radio",      label: "Radio Buttons", Icon: CircleDot   },
        ] as const).map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={cn(
              "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all",
              tab === id
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-surface-hover",
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </div>

      {/* ══ CHECKBOXES TAB ════════════════════════════════════════════════════ */}
      {tab === "checkboxes" && (
        <>
          <InfoGrid items={[
            { label: "Components", value: "Checkbox · CheckboxToggle"                    },
            { label: "Variants",   value: "Default · Error · Success"                    },
            { label: "States",     value: "Default · Checked · Indeterminate · Disabled" },
            { label: "Primitive",  value: "@radix-ui/react-checkbox"                     },
          ]} />

          {/* Component API */}
          <Section title="Component API">
            <div className="rounded-xl border border-border overflow-hidden text-sm">
              <div className="bg-neutral-50 dark:bg-neutral-900 px-5 py-3 border-b border-border font-mono text-xs text-muted-foreground">
                {'import { Checkbox, CheckboxToggle } from "@/components/ui/checkbox"'}
              </div>
              {[
                { prop: "checked",         type: "boolean | \"indeterminate\"", def: "—",      desc: "Controlled checked state. Pass \"indeterminate\" for mixed-state (select-all)." },
                { prop: "defaultChecked",  type: "boolean",                    def: "false",   desc: "Initial uncontrolled checked state." },
                { prop: "onCheckedChange", type: "(checked: boolean) => void", def: "—",       desc: "Called when the checkbox value changes." },
                { prop: "disabled",        type: "boolean",                    def: "false",   desc: "Prevents interaction and applies opacity-40." },
                { prop: "error",           type: "boolean",                    def: "false",   desc: "Applies error colour to the border and fill." },
                { prop: "success",         type: "boolean",                    def: "false",   desc: "Applies success colour to the border and fill." },
              ].map(({ prop, type, def, desc }, i, arr) => (
                <div key={prop} className={cn("flex gap-4 px-5 py-3", i < arr.length - 1 && "border-b border-border")}>
                  <code className="w-36 shrink-0 font-mono text-xs text-primary">{prop}</code>
                  <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">{type}</code>
                  <code className="w-16 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">{def}</code>
                  <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">{desc}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Overview */}
          <Section title="Overview">
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>Use checkboxes when users can select <strong className="text-foreground">zero or more</strong> options from a set, or when toggling a single binary setting. Always pair with a visible label.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-success/20 bg-success/5 p-4">
                  <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When to Use</p>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Multi-select from a list (notification preferences)</li>
                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Single binary toggle (accept terms, remember me)</li>
                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />"Select all" with indeterminate state for child groups</li>
                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Settings panels with on/off rows</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-warning/20 bg-warning/5 p-4">
                  <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When NOT to Use</p>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Mutually exclusive options — use Radio Group</li>
                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Immediately applied toggles — use Switch</li>
                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />More than ~8 options in a list — use a multi-select</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>

          <hr className="border-border" />

          {/* ── Checkbox: States ─────────────────────────────────────────────── */}
          <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
            <div className="px-6 py-4 border-b border-border">
              <div className="border-l-4 border-warning pl-4 space-y-1">
                <h3 className="text-base font-semibold text-foreground">Checkbox States</h3>
                <p className="text-sm text-muted-foreground">All visual states — click the Default checkbox to see the interactive checked transition.</p>
              </div>
            </div>
            <div className="p-6">
              <div className="grid lg:grid-cols-2 gap-6 items-start">
                <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
                  <div className="px-4 py-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Default (interactive)</p>
                    <Checkbox checked={cbInteractive} onCheckedChange={setCbInteractive} aria-label="Interactive checkbox" />
                  </div>
                  <div className="px-4 py-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Checked</p>
                    <Checkbox checked aria-label="Checked" />
                  </div>
                  <div className="px-4 py-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Indeterminate</p>
                    <Checkbox checked="indeterminate" aria-label="Indeterminate" />
                  </div>
                  <div className="px-4 py-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Disabled</p>
                    <div className="flex items-center gap-4">
                      <Checkbox disabled aria-label="Disabled unchecked" />
                      <Checkbox checked disabled aria-label="Disabled checked" />
                    </div>
                  </div>
                  <div className="px-4 py-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Error</p>
                    <div className="flex items-center gap-4">
                      <Checkbox error aria-label="Error unchecked" />
                      <Checkbox checked error aria-label="Error checked" />
                    </div>
                  </div>
                  <div className="px-4 py-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Success</p>
                    <div className="flex items-center gap-4">
                      <Checkbox success aria-label="Success unchecked" />
                      <Checkbox checked success aria-label="Success checked" />
                    </div>
                  </div>
                </div>
                <div className="sticky top-6">
                  <CodeTabs tabs={[{ label: "shadcn/ui", code: checkboxStatesCode, language: "tsx" }]} />
                </div>
              </div>
            </div>
          </div>

          {/* ── Checkbox: With Label & Description ───────────────────────────── */}
          <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
            <div className="px-6 py-4 border-b border-border">
              <div className="border-l-4 border-warning pl-4 space-y-1">
                <h3 className="text-base font-semibold text-foreground">With Label &amp; Description</h3>
                <p className="text-sm text-muted-foreground">Compose <code className="font-mono">Checkbox</code> with a <code className="font-mono">&lt;label htmlFor&gt;</code>. Add a description paragraph for extra context.</p>
              </div>
            </div>
            <div className="p-6">
              <div className="grid lg:grid-cols-2 gap-6 items-start">
                <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
                  <div className="px-4 py-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">With label</p>
                    <div className="flex items-center gap-2.5">
                      <Checkbox id="cb-terms" checked={cbTerms} onCheckedChange={setCbTerms} />
                      <label htmlFor="cb-terms" className="text-sm font-medium cursor-pointer leading-none select-none">
                        Accept terms and conditions
                      </label>
                    </div>
                  </div>
                  <div className="px-4 py-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">With label + description (pre-checked)</p>
                    <div className="flex items-start gap-2.5">
                      <Checkbox id="cb-marketing" checked={cbMarketing} onCheckedChange={setCbMarketing} className="mt-0.5" />
                      <div>
                        <label htmlFor="cb-marketing" className="text-sm font-medium cursor-pointer">Marketing emails</label>
                        <p className="text-xs text-muted-foreground mt-0.5">Receive product updates and special offers.</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">With label + description (unchecked)</p>
                    <div className="flex items-start gap-2.5">
                      <Checkbox id="cb-newsletter" checked={cbNewsletter} onCheckedChange={setCbNewsletter} className="mt-0.5" />
                      <div>
                        <label htmlFor="cb-newsletter" className="text-sm font-medium cursor-pointer">Weekly newsletter</label>
                        <p className="text-xs text-muted-foreground mt-0.5">Curated articles sent every Monday morning.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sticky top-6">
                  <CodeTabs tabs={[{ label: "shadcn/ui", code: checkboxLabelCode, language: "tsx" }]} />
                </div>
              </div>
            </div>
          </div>

          {/* ── Checkbox: Group ───────────────────────────────────────────────── */}
          <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
            <div className="px-6 py-4 border-b border-border">
              <div className="border-l-4 border-warning pl-4 space-y-1">
                <h3 className="text-base font-semibold text-foreground">Checkbox Group</h3>
                <p className="text-sm text-muted-foreground">A "Select all" checkbox using <code className="font-mono">checked="indeterminate"</code> when some — but not all — children are selected.</p>
              </div>
            </div>
            <div className="p-6">
              <div className="grid lg:grid-cols-2 gap-6 items-start">
                <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 overflow-hidden">
                  <div className="px-4 py-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Notification channels</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2.5">
                        <Checkbox
                          id="cb-all"
                          checked={allChecked ? true : someChecked ? "indeterminate" : false}
                          onCheckedChange={(c) => setCbGroup(c ? GROUP_OPTIONS.map((o) => o.id) : [])}
                        />
                        <label htmlFor="cb-all" className="text-sm font-semibold cursor-pointer select-none">
                          All notifications
                        </label>
                      </div>
                      <div className="border-l-2 border-border ml-2 pl-4 space-y-3">
                        {GROUP_OPTIONS.map((opt) => (
                          <div key={opt.id} className="flex items-start gap-2.5">
                            <Checkbox
                              id={`cb-${opt.id}`}
                              checked={cbGroup.includes(opt.id)}
                              onCheckedChange={() => toggleGroupItem(opt.id)}
                              className="mt-0.5"
                            />
                            <div>
                              <label htmlFor={`cb-${opt.id}`} className="text-sm font-medium cursor-pointer select-none">{opt.label}</label>
                              <p className="text-xs text-muted-foreground">{opt.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sticky top-6">
                  <CodeTabs tabs={[{ label: "shadcn/ui", code: checkboxGroupCode, language: "tsx" }]} />
                </div>
              </div>
            </div>
          </div>

          {/* ── Checkbox: Toggle Style ────────────────────────────────────────── */}
          <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
            <div className="px-6 py-4 border-b border-border">
              <div className="border-l-4 border-warning pl-4 space-y-1">
                <h3 className="text-base font-semibold text-foreground">Toggle Style</h3>
                <p className="text-sm text-muted-foreground"><code className="font-mono">CheckboxToggle</code> — a pill-shaped switch backed by <code className="font-mono">@radix-ui/react-switch</code>. Use when the setting takes effect immediately.</p>
              </div>
            </div>
            <div className="p-6">
              <div className="grid lg:grid-cols-2 gap-6 items-start">
                <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
                  <div className="px-4 py-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Sizes — sm / default / lg</p>
                    <div className="flex items-center gap-4">
                      <CheckboxToggle size="sm"  checked={toggle1} onCheckedChange={setToggle1} aria-label="Small toggle" />
                      <CheckboxToggle           checked={toggle2} onCheckedChange={setToggle2} aria-label="Default toggle" />
                      <CheckboxToggle size="lg" checked={toggle1} onCheckedChange={setToggle1} aria-label="Large toggle" />
                    </div>
                  </div>
                  <div className="px-4 py-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">With label + description</p>
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-medium text-foreground">Dark mode</p>
                        <p className="text-xs text-muted-foreground">Apply dark theme across the app</p>
                      </div>
                      <CheckboxToggle checked={toggleDark} onCheckedChange={setToggleDark} aria-label="Toggle dark mode" />
                    </div>
                  </div>
                  <div className="px-4 py-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Disabled</p>
                    <div className="flex items-center gap-4">
                      <CheckboxToggle disabled aria-label="Disabled off" />
                      <CheckboxToggle checked disabled aria-label="Disabled on" />
                    </div>
                  </div>
                </div>
                <div className="sticky top-6">
                  <CodeTabs tabs={[{ label: "shadcn/ui", code: checkboxToggleCode, language: "tsx" }]} />
                </div>
              </div>
            </div>
          </div>

          <Section title="Do's and Don'ts">
            <DosDonts
              dos={[
                { text: "Always label every checkbox — link with htmlFor matching the input's id." },
                { text: "Use indeterminate when a 'Select all' has some but not all children checked." },
                { text: "Group related checkboxes under a visible fieldset legend for screen readers." },
                { text: "Use CheckboxToggle when the setting takes effect immediately (no Save needed)." },
              ]}
              donts={[
                { text: "Don't use checkboxes for mutually exclusive options — use Radio Group." },
                { text: "Don't pre-check legally binding checkboxes (terms, consent) — explicit opt-in only." },
                { text: "Don't use CheckboxToggle inside a form that requires a Save/Submit action." },
                { text: "Don't use more than ~8 options — use a multi-select combobox instead." },
              ]}
            />
          </Section>

          <Section title="Keyboard & Accessibility">
            <KeyboardTable rows={[
              { keys: ["Space"],     action: "Toggle checkbox checked / unchecked"            },
              { keys: ["Tab"],       action: "Move focus to the next focusable element"        },
              { keys: ["Shift+Tab"], action: "Move focus to the previous focusable element"    },
            ]} />
            <div className="mt-4 rounded-xl border border-border p-5 space-y-3 text-sm">
              <p className="font-semibold text-foreground">ARIA notes</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2"><code className="shrink-0 font-mono text-primary">aria-checked="mixed"</code><span>Set automatically by Radix when <code className="font-mono">checked="indeterminate"</code> — screen readers announce "mixed".</span></li>
                <li className="flex gap-2"><code className="shrink-0 font-mono text-primary">role="checkbox"</code><span>Radix renders <code className="font-mono">CheckboxPrimitive.Root</code> as <code className="font-mono">&lt;button role="checkbox"&gt;</code> — the button itself is the interactive target.</span></li>
              </ul>
            </div>
          </Section>

          <Section title="All Props — Checkbox">
            <PropsTable props={[
              { name: "checked",         type: "boolean | \"indeterminate\"", default: "—",      description: "Controlled state. \"indeterminate\" shows a dash icon and sets aria-checked=\"mixed\"." },
              { name: "defaultChecked",  type: "boolean",                    default: "false",   description: "Initial uncontrolled checked state."  },
              { name: "onCheckedChange", type: "(checked: boolean) => void", default: "—",       description: "Callback when the value changes."      },
              { name: "disabled",        type: "boolean",                    default: "false",   description: "Prevents interaction and applies opacity-40." },
              { name: "error",           type: "boolean",                    default: "false",   description: "Switches border and fill to the error colour token." },
              { name: "success",         type: "boolean",                    default: "false",   description: "Switches border and fill to the success colour token." },
              { name: "id",              type: "string",                     default: "auto",    description: "Input id for external <label htmlFor> association." },
              { name: "className",       type: "string",                     default: "—",       description: "Tailwind classes merged onto the root element." },
            ]} />
          </Section>

          <Section title="All Props — CheckboxToggle">
            <PropsTable props={[
              { name: "checked",         type: "boolean",                    default: "—",         description: "Controlled on/off state." },
              { name: "defaultChecked",  type: "boolean",                    default: "false",     description: "Initial uncontrolled state." },
              { name: "onCheckedChange", type: "(checked: boolean) => void", default: "—",         description: "Callback when toggled." },
              { name: "disabled",        type: "boolean",                    default: "false",     description: "Prevents interaction." },
              { name: "size",            type: '"sm" | "default" | "lg"',    default: '"default"', description: "Controls track and thumb dimensions." },
            ]} />
          </Section>
        </>
      )}

      {/* ══ RADIO BUTTONS TAB ════════════════════════════════════════════════ */}
      {tab === "radio" && (
        <>
          <InfoGrid items={[
            { label: "Components", value: "RadioGroup · RadioItem"                },
            { label: "Variants",   value: "Default · Error · Success"             },
            { label: "States",     value: "Default · Selected · Disabled"         },
            { label: "Primitive",  value: "@radix-ui/react-radio-group"           },
          ]} />

          {/* Component API */}
          <Section title="Component API">
            <div className="rounded-xl border border-border overflow-hidden text-sm">
              <div className="bg-neutral-50 dark:bg-neutral-900 px-5 py-3 border-b border-border font-mono text-xs text-muted-foreground">
                {'import { RadioGroup, RadioItem } from "@/components/ui/radio-group"'}
              </div>
              <div className="px-5 py-2 border-b border-border bg-neutral-50/50 dark:bg-neutral-900/50">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">RadioGroup</p>
              </div>
              {[
                { prop: "name",          type: "string",                    def: "required",   desc: "HTML radio group name — ties all RadioItems together." },
                { prop: "value",         type: "string",                    def: "—",          desc: "Controlled selected value." },
                { prop: "defaultValue",  type: "string",                    def: "—",          desc: "Uncontrolled initial selected value." },
                { prop: "onValueChange", type: "(value: string) => void",   def: "—",          desc: "Called when the selected value changes." },
                { prop: "disabled",      type: "boolean",                   def: "false",      desc: "Disables the entire group." },
                { prop: "error",         type: "boolean",                   def: "false",      desc: "Applies error border colour to all items." },
                { prop: "success",       type: "boolean",                   def: "false",      desc: "Applies success border colour to all items." },
                { prop: "orientation",   type: '"vertical" | "horizontal"', def: '"vertical"', desc: "Layout direction of the group." },
              ].map(({ prop, type, def, desc }) => (
                <div key={prop} className="flex gap-4 px-5 py-3 border-b border-border">
                  <code className="w-32 shrink-0 font-mono text-xs text-primary">{prop}</code>
                  <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">{type}</code>
                  <code className="w-20 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">{def}</code>
                  <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">{desc}</p>
                </div>
              ))}
              <div className="px-5 py-2 border-b border-border bg-neutral-50/50 dark:bg-neutral-900/50">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">RadioItem</p>
              </div>
              {[
                { prop: "value",    type: "string",  def: "required", desc: "Value emitted to RadioGroup when this item is selected." },
                { prop: "id",       type: "string",  def: "auto",     desc: "Input id — pass to link an external <label htmlFor>." },
                { prop: "disabled", type: "boolean", def: "false",    desc: "Disables this item only (overrides group disabled)." },
              ].map(({ prop, type, def, desc }, i, arr) => (
                <div key={prop} className={cn("flex gap-4 px-5 py-3", i < arr.length - 1 && "border-b border-border")}>
                  <code className="w-32 shrink-0 font-mono text-xs text-primary">{prop}</code>
                  <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">{type}</code>
                  <code className="w-20 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">{def}</code>
                  <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">{desc}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Overview */}
          <Section title="Overview">
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>Use radio buttons when users must choose <strong className="text-foreground">exactly one</strong> option from a set of 2–6 mutually exclusive choices. <code className="font-mono">RadioGroup</code> manages the shared name and selected-value state; each <code className="font-mono">RadioItem</code> is rendered as a <code className="font-mono">&lt;button role="radio"&gt;</code>.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-success/20 bg-success/5 p-4">
                  <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When to Use</p>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Mutually exclusive choices (plan tier, gender, payment method)</li>
                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />2–6 visible options where all need to be seen at once</li>
                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />When comparing options side-by-side is helpful</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-warning/20 bg-warning/5 p-4">
                  <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When NOT to Use</p>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />More than 6 options — use Select dropdown</li>
                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Multi-select — use Checkbox group</li>
                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Yes/No binary — use Checkbox or Switch</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>

          <hr className="border-border" />

          {/* ── Radio: States ────────────────────────────────────────────────── */}
          <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
            <div className="px-6 py-4 border-b border-border">
              <div className="border-l-4 border-warning pl-4 space-y-1">
                <h3 className="text-base font-semibold text-foreground">Radio Button States</h3>
                <p className="text-sm text-muted-foreground">Default, selected, disabled, and validation states. Click any radio in the first row to see the selection change.</p>
              </div>
            </div>
            <div className="p-6">
              <div className="grid lg:grid-cols-2 gap-6 items-start">
                <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
                  <div className="px-4 py-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Default / Selected (interactive)</p>
                    <RadioGroup name="radio-demo" value={radioBasic} onValueChange={setRadioBasic} orientation="horizontal">
                      <RadioItem value="a" id="rd-a" aria-label="Option A" />
                      <RadioItem value="b" id="rd-b" aria-label="Option B" />
                      <RadioItem value="c" id="rd-c" aria-label="Option C" />
                    </RadioGroup>
                  </div>
                  <div className="px-4 py-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Disabled</p>
                    <RadioGroup name="radio-disabled" value="b" disabled orientation="horizontal">
                      <RadioItem value="a" aria-label="Disabled unselected" />
                      <RadioItem value="b" aria-label="Disabled selected" />
                      <RadioItem value="c" aria-label="Disabled unselected" />
                    </RadioGroup>
                  </div>
                  <div className="px-4 py-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Error</p>
                    <RadioGroup name="radio-error" value="a" error orientation="horizontal">
                      <RadioItem value="a" aria-label="Error selected" />
                      <RadioItem value="b" aria-label="Error unselected" />
                    </RadioGroup>
                  </div>
                  <div className="px-4 py-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Success</p>
                    <RadioGroup name="radio-success" value="b" success orientation="horizontal">
                      <RadioItem value="a" aria-label="Success unselected" />
                      <RadioItem value="b" aria-label="Success selected" />
                    </RadioGroup>
                  </div>
                </div>
                <div className="sticky top-6">
                  <CodeTabs tabs={[{ label: "shadcn/ui", code: radioStatesCode, language: "tsx" }]} />
                </div>
              </div>
            </div>
          </div>

          {/* ── Radio: With Label & Description ──────────────────────────────── */}
          <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
            <div className="px-6 py-4 border-b border-border">
              <div className="border-l-4 border-warning pl-4 space-y-1">
                <h3 className="text-base font-semibold text-foreground">With Label &amp; Description</h3>
                <p className="text-sm text-muted-foreground">Pass an <code className="font-mono">id</code> prop to <code className="font-mono">RadioItem</code> and link it to an external <code className="font-mono">&lt;label htmlFor&gt;</code>.</p>
              </div>
            </div>
            <div className="p-6">
              <div className="grid lg:grid-cols-2 gap-6 items-start">
                <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
                  <div className="px-4 py-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">With label</p>
                    <RadioGroup name="radio-label" value={radioLabel} onValueChange={setRadioLabel}>
                      {[
                        { value: "email", label: "Email" },
                        { value: "push",  label: "Push notifications" },
                        { value: "sms",   label: "SMS" },
                      ].map(({ value, label }) => (
                        <div key={value} className="flex items-center gap-2.5">
                          <RadioItem value={value} id={`rl-${value}`} />
                          <label htmlFor={`rl-${value}`} className="text-sm font-medium cursor-pointer select-none">{label}</label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                  <div className="px-4 py-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">With description</p>
                    <RadioGroup name="radio-plan-desc" value={radioPlan} onValueChange={setRadioPlan}>
                      {[
                        { value: "free",       label: "Free",       desc: "Up to 3 projects, 1 GB storage."              },
                        { value: "pro",        label: "Pro",        desc: "Unlimited projects, 100 GB, priority support." },
                        { value: "enterprise", label: "Enterprise", desc: "Custom limits, SSO, dedicated manager."        },
                      ].map(({ value, label, desc }) => (
                        <div key={value} className="flex items-start gap-2.5">
                          <RadioItem value={value} id={`rpd-${value}`} className="mt-0.5" />
                          <div>
                            <label htmlFor={`rpd-${value}`} className="text-sm font-medium cursor-pointer select-none">{label}</label>
                            <p className="text-xs text-muted-foreground">{desc}</p>
                          </div>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
                <div className="sticky top-6">
                  <CodeTabs tabs={[{ label: "shadcn/ui", code: radioLabelCode, language: "tsx" }]} />
                </div>
              </div>
            </div>
          </div>

          {/* ── Radio: Vertical + Horizontal Layout ───────────────────────────── */}
          <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
            <div className="px-6 py-4 border-b border-border">
              <div className="border-l-4 border-warning pl-4 space-y-1">
                <h3 className="text-base font-semibold text-foreground">Vertical &amp; Horizontal Layout</h3>
                <p className="text-sm text-muted-foreground">Default is <code className="font-mono">orientation="vertical"</code>. Add <code className="font-mono">orientation="horizontal"</code> for compact inline groups with short labels.</p>
              </div>
            </div>
            <div className="p-6">
              <div className="grid lg:grid-cols-2 gap-6 items-start">
                <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
                  <div className="px-4 py-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Vertical (default)</p>
                    <RadioGroup name="radio-v" value={radioV} onValueChange={setRadioV}>
                      {[
                        { value: "starter",    label: "Starter",    desc: "For individuals & hobbyists" },
                        { value: "pro",        label: "Pro",        desc: "For growing teams" },
                        { value: "enterprise", label: "Enterprise", desc: "For large organisations" },
                      ].map(({ value, label, desc }) => (
                        <div key={value} className="flex items-start gap-2.5">
                          <RadioItem value={value} id={`rv-${value}`} className="mt-0.5" />
                          <div>
                            <label htmlFor={`rv-${value}`} className="text-sm font-medium cursor-pointer select-none">{label}</label>
                            <p className="text-xs text-muted-foreground">{desc}</p>
                          </div>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                  <div className="px-4 py-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Horizontal</p>
                    <RadioGroup name="radio-h" value={radioH} onValueChange={setRadioH} orientation="horizontal">
                      {["sm", "md", "lg", "xl"].map((v) => (
                        <div key={v} className="flex items-center gap-1.5">
                          <RadioItem value={v} id={`rh-${v}`} />
                          <label htmlFor={`rh-${v}`} className="text-sm font-medium cursor-pointer select-none uppercase">{v}</label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
                <div className="sticky top-6">
                  <CodeTabs tabs={[{ label: "shadcn/ui", code: radioGroupCode, language: "tsx" }]} />
                </div>
              </div>
            </div>
          </div>

          <Section title="Do's and Don'ts">
            <DosDonts
              dos={[
                { text: "Use radio buttons when exactly one option must be chosen from 2–6 choices." },
                { text: "Default-select the most common or safest option in the group." },
                { text: "Keep options to 6 or fewer — use a Select dropdown for longer lists." },
                { text: "Wrap the group in a <fieldset> with a <legend> so screen readers announce the group name." },
              ]}
              donts={[
                { text: "Don't use radio when zero selections should be valid — use Checkbox." },
                { text: "Don't use radio for multi-select — use Checkbox group." },
                { text: "Don't use radio for Yes/No binary decisions — use Checkbox or Switch." },
                { text: "Don't disable the only valid option — explain why or remove it." },
              ]}
            />
          </Section>

          <Section title="Keyboard & Accessibility">
            <KeyboardTable rows={[
              { keys: ["Arrow ↑ / ↓"], action: "Move between radio options in a vertical group (auto-selects)"  },
              { keys: ["Arrow ← / →"], action: "Move between radio options in a horizontal group"               },
              { keys: ["Home / End"],  action: "Move focus to the first / last enabled radio in the group"      },
              { keys: ["Tab"],         action: "Enter the radio group with one tabstop; Tab again exits"        },
            ]} />
            <div className="mt-4 rounded-xl border border-border p-5 space-y-3 text-sm">
              <p className="font-semibold text-foreground">ARIA notes</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2"><code className="shrink-0 font-mono text-primary">role="radiogroup"</code><span>Rendered automatically on <code className="font-mono">RadioGroup</code>. Add <code className="font-mono">aria-labelledby</code> pointing to the group heading for full accessibility.</span></li>
                <li className="flex gap-2"><code className="shrink-0 font-mono text-primary">fieldset + legend</code><span>For form submissions, wrap in a <code className="font-mono">&lt;fieldset&gt;</code> with a <code className="font-mono">&lt;legend&gt;</code> so assistive technology announces the group name.</span></li>
              </ul>
            </div>
          </Section>

          <Section title="All Props — RadioGroup &amp; RadioItem">
            <PropsTable props={[
              { name: "name",              type: "string",                    default: "required",   description: "HTML radio name attribute — groups all RadioItems." },
              { name: "value",             type: "string",                    default: "—",          description: "Controlled selected value." },
              { name: "defaultValue",      type: "string",                    default: "—",          description: "Uncontrolled initial selected value." },
              { name: "onValueChange",     type: "(value: string) => void",   default: "—",          description: "Called on selection change." },
              { name: "disabled",          type: "boolean",                   default: "false",      description: "Disables the entire group." },
              { name: "error",             type: "boolean",                   default: "false",      description: "Applies error colour to all items in the group." },
              { name: "success",           type: "boolean",                   default: "false",      description: "Applies success colour to all items in the group." },
              { name: "orientation",       type: '"vertical" | "horizontal"', default: '"vertical"', description: "Stack direction of the group." },
              { name: "RadioItem.value",   type: "string",                    default: "required",   description: "The value emitted when this item is selected." },
              { name: "RadioItem.id",      type: "string",                    default: "auto",       description: "Input id for linking an external <label htmlFor>." },
              { name: "RadioItem.disabled",type: "boolean",                   default: "false",      description: "Disables this specific item only." },
            ]} />
          </Section>
        </>
      )}
    </ComponentLayout>
  )
}
