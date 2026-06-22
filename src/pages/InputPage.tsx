import { useState } from "react"
import { Eye, EyeOff, Search, Mail, Lock, Phone, Globe } from "lucide-react"
import { FormField } from "@/components/ui/form-field"
import { Button } from "@/components/ui/button"
import { ComponentLayout, InfoGrid } from "@/components/portal/ComponentLayout"
import { Section, DosDonts, PropsTable, KeyboardTable } from "@/components/portal/Section"
import { CodeTabs } from "@/components/portal/CodeBlock"

// ─── Code snippets ────────────────────────────────────────────────────────────

const standardLabelCode = `// Install: npx shadcn@latest add input label
// Then add src/components/ui/form-field.tsx to your project.

import { FormField } from "@/components/ui/form-field"

// Text
<FormField label="Full Name" placeholder="John Smith" />

// Email (required)
<FormField
  label="Email Address"
  type="email"
  placeholder="you@company.com"
  required
/>

// Phone
<FormField
  label="Phone Number"
  type="tel"
  placeholder="+1 (555) 000-0000"
/>

// Number with helper text
<FormField
  label="Quantity"
  type="number"
  placeholder="0"
  helperText="Enter a value between 1 and 100."
/>

// URL
<FormField
  label="Website"
  type="url"
  placeholder="https://example.com"
/>

// Read-only — focusable and selectable, but not editable
<FormField
  label="Account ID"
  value="ACC-12345"
  readOnly
  helperText="Assigned automatically. Cannot be changed."
/>`

const floatingLabelCode = `import { FormField } from "@/components/ui/form-field"

// Add floatingLabel prop for the animated float effect.
// The label starts centred inside the input and floats to the
// top left corner on focus or when a value is present.

<FormField floatingLabel label="First Name" />

<FormField floatingLabel label="Work Email"    type="email" />

<FormField floatingLabel label="Mobile Number" type="tel" />

<FormField floatingLabel label="Password"      type="password" required />

<FormField floatingLabel label="Profile URL"   type="url" />

// Read-only — label stays floated, subtle background indicates locked state
<FormField
  floatingLabel
  label="Account ID"
  value="ACC-12345"
  readOnly
  helperText="Assigned automatically. Cannot be changed."
/>

// Combine with prefix icon — label shifts right to clear the icon
import { Lock } from "lucide-react"

<FormField
  floatingLabel
  label="Current Password"
  type="password"
  prefix={<Lock className="h-4 w-4" />}
/>`

const iconsCode = `import { FormField } from "@/components/ui/form-field"
import { Eye, EyeOff, Lock, Mail, Phone, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

// Password with visibility toggle
const [show, setShow] = useState(false)

<FormField
  label="Password"
  type={show ? "text" : "password"}
  placeholder="Enter password"
  prefix={<Lock className="h-4 w-4" />}
  suffix={
    <Button
      variant="ghost" size="icon" type="button"
      onClick={() => setShow(!show)}
      aria-label={show ? "Hide password" : "Show password"}
      className="pointer-events-auto h-6 w-6 text-muted-foreground hover:text-foreground"
    >
      {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
    </Button>
  }
/>

// Search
<FormField
  placeholder="Search products…"
  type="search"
  prefix={<Search className="h-4 w-4" />}
/>

// Email with icon
<FormField
  label="Work Email"
  type="email"
  placeholder="you@company.com"
  prefix={<Mail className="h-4 w-4" />}
/>

// Phone with icon
<FormField
  label="Mobile"
  type="tel"
  placeholder="+1 (555) 000-0000"
  prefix={<Phone className="h-4 w-4" />}
/>`

const dateTimeCode = `import { FormField } from "@/components/ui/form-field"

// Date — renders browser-native date picker
<FormField label="Birth Date" type="date" />

// Time — renders browser-native time picker
<FormField label="Meeting Time" type="time" />

// Date & Time — datetime-local type
<FormField label="Appointment" type="datetime-local" />`

const specializedCode = `import { FormField } from "@/components/ui/form-field"
import { useState } from "react"

// File upload — uses the browser's file picker
<FormField label="Profile Photo" type="file" />

// Range slider — use controlled state to show current value
const [volume, setVolume] = useState(65)

<div className="flex flex-col gap-1.5 w-full max-w-sm">
  <label className="text-sm font-medium text-foreground flex justify-between">
    <span>Volume</span>
    <span className="font-mono text-muted-foreground text-sm">{volume}</span>
  </label>
  <input
    type="range"
    min={0} max={100}
    value={volume}
    onChange={(e) => setVolume(Number(e.target.value))}
    className="w-full cursor-pointer accent-primary"
  />
</div>

// Color picker — pairs the swatch with a hex value label
const [color, setColor] = useState("#02332E")

<div className="flex flex-col gap-1.5 w-full max-w-sm">
  <label className="text-sm font-medium text-foreground">Brand Color</label>
  <div className="flex items-center gap-3">
    <input
      type="color"
      value={color}
      onChange={(e) => setColor(e.target.value)}
      className="h-10 w-14 cursor-pointer rounded-lg border border-border bg-background p-0.5"
    />
    <code className="text-sm font-mono text-muted-foreground">{color}</code>
  </div>
</div>`

const statesCode = `import { FormField } from "@/components/ui/form-field"

// Disabled — removes from tab order, opacity-40, pointer-events-none
<FormField
  label="Account ID"
  value="ACC-12345"
  disabled
  helperText="This field cannot be edited."
/>

// Read-only — stays focusable and selectable, not editable
// Subtle background indicates the field is locked.
<FormField
  label="User Email"
  value="sarah@company.com"
  readOnly
  helperText="Contact support to update your email."
/>

// Error state — sets aria-invalid + red ring + error message below
<FormField
  label="Email Address"
  type="email"
  value="not-an-email"
  error="Please enter a valid email address."
/>`

// ─── InputPage ────────────────────────────────────────────────────────────────

export default function InputPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [rangeValue, setRangeValue] = useState(65)
  const [colorValue, setColorValue] = useState("#02332E")

  return (
    <ComponentLayout
      name="Input"
      description="Form input field with standard and floating label modes, icon slots, 15 native types, and full error/disabled/read-only state support."
      category="Forms"
      status="stable"
      tags={["shadcn/ui", "Accessible", "Form"]}
    >
      <InfoGrid items={[
        { label: "Types",  value: "15"                          },
        { label: "Labels", value: "Standard · Floating"         },
        { label: "States", value: "Default · Error · Disabled · Read-only" },
        { label: "WCAG",   value: "AA 2.2"                      },
      ]} />

      {/* Component API */}
      <Section title="Component API">
        <div className="rounded-xl border border-border overflow-hidden text-sm">
          <div className="bg-neutral-50 dark:bg-neutral-900 px-5 py-3 border-b border-border font-mono text-xs text-muted-foreground">
            {'import { FormField } from "@/components/ui/form-field"'}
          </div>
          {[
            { prop: "label",         type: "string",             def: "—",        desc: "Visible label text (standard) or animated float label (floating)." },
            { prop: "type",          type: "string",             def: '"text"',   desc: "HTML input type — text, email, tel, password, number, url, date, time, datetime-local, file, range, color, search…" },
            { prop: "floatingLabel", type: "boolean",            def: "false",    desc: "Switches to floating label mode — label animates inside the input." },
            { prop: "placeholder",   type: "string",             def: "—",        desc: "Hint text. In floating mode, shown only while the input is focused." },
            { prop: "helperText",    type: "string",             def: "—",        desc: "Shown below the field when there is no error." },
            { prop: "error",         type: "string",             def: "—",        desc: "Error message. Activates error visual state and hides helperText." },
            { prop: "required",      type: "boolean",            def: "false",    desc: "Adds a red asterisk (*) after the label." },
            { prop: "disabled",      type: "boolean",            def: "false",    desc: "Prevents interaction, removes from tab order, applies opacity-40." },
            { prop: "readOnly",      type: "boolean",            def: "false",    desc: "Keeps the field focusable and selectable, but not editable." },
            { prop: "prefix",        type: "React.ReactNode",    def: "—",        desc: "Icon or element inside the input on the left." },
            { prop: "suffix",        type: "React.ReactNode",    def: "—",        desc: "Icon or interactive element inside the input on the right." },
          ].map(({ prop, type, def, desc }, i, arr) => (
            <div key={prop} className={`flex gap-4 px-5 py-3 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
              <code className="w-28 shrink-0 font-mono text-xs text-primary">{prop}</code>
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
          <p>
            <code className="font-mono">FormField</code> wraps the shadcn <code className="font-mono">Input</code> and <code className="font-mono">Label</code> primitives
            into a single compound component. Every input must have a label — either a
            standard label above the field, or a floating label that animates inside it.
            Error messages and helper text are linked via <code className="font-mono">aria-describedby</code>.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-success/20 bg-success/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When to Use</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Single-line free-form text entry (name, email, search)</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Numeric, URL, or phone inputs</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Password fields with toggle visibility</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Date, time, or color selection via native pickers</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />File attachment in forms</li>
              </ul>
            </div>
            <div className="rounded-xl border border-warning/20 bg-warning/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When NOT to Use</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Multi-line text — use Textarea</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Fixed option sets — use Select or Radio Group</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Boolean toggles — use Checkbox or Switch</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Precise range values where a slider adds context</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <hr className="border-border" />

      {/* ── Standard Label ────────────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Standard Label</h3>
            <p className="text-sm text-muted-foreground">The classic pattern — label sits above the input. Works with all input types and states.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Text</p>
                <FormField label="Full Name" placeholder="John Smith" />
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Email</p>
                <FormField label="Email Address" type="email" placeholder="you@company.com" required />
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Phone Number</p>
                <FormField label="Phone Number" type="tel" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Number</p>
                <FormField label="Quantity" type="number" placeholder="0" helperText="Enter a value between 1 and 100." />
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">URL</p>
                <FormField label="Website" type="url" placeholder="https://example.com" />
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Read-only</p>
                <FormField
                  label="Account ID"
                  value="ACC-12345"
                  readOnly
                  helperText="Assigned automatically. Cannot be changed."
                />
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[
                { label: "shadcn/ui", code: standardLabelCode, language: "tsx" },
              ]} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Floating Label ────────────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Floating Label</h3>
            <p className="text-sm text-muted-foreground">Add <code className="font-mono">floatingLabel</code> — the label starts centred in the input and animates to the top corner on focus or when a value is entered.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Text — pre-filled (floated state)</p>
                <FormField floatingLabel label="First Name" defaultValue="Sarah Connor" />
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Email — empty (resting state)</p>
                <FormField floatingLabel label="Work Email" type="email" />
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Phone — pre-filled (floated state)</p>
                <FormField floatingLabel label="Mobile Number" type="tel" defaultValue="+1 (555) 012-3456" />
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Password — with icon prefix</p>
                <FormField
                  floatingLabel
                  label="Password"
                  type="password"
                  required
                  prefix={<Lock className="h-4 w-4" />}
                />
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">URL</p>
                <FormField floatingLabel label="Profile URL" type="url" placeholder="https://" />
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Read-only — label stays floated</p>
                <FormField
                  floatingLabel
                  label="Account ID"
                  value="ACC-12345"
                  readOnly
                  helperText="Assigned automatically. Cannot be changed."
                />
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[
                { label: "shadcn/ui", code: floatingLabelCode, language: "tsx" },
              ]} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Password & Icon Inputs ────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Password &amp; Icon Inputs</h3>
            <p className="text-sm text-muted-foreground">Use <code className="font-mono">prefix</code> and <code className="font-mono">suffix</code> to embed icons or interactive elements inside the input boundary.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Password with visibility toggle</p>
                <FormField
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  prefix={<Lock className="h-4 w-4" />}
                  suffix={
                    <Button
                      variant="ghost"
                      size="icon"
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      className="pointer-events-auto h-6 w-6 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  }
                />
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Search</p>
                <FormField
                  type="search"
                  placeholder="Search products…"
                  prefix={<Search className="h-4 w-4" />}
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Email with icon</p>
                <FormField
                  label="Work Email"
                  type="email"
                  placeholder="you@company.com"
                  prefix={<Mail className="h-4 w-4" />}
                />
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Phone with icon</p>
                <FormField
                  label="Mobile"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  prefix={<Phone className="h-4 w-4" />}
                />
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">URL with icon</p>
                <FormField
                  label="Website"
                  type="url"
                  placeholder="https://example.com"
                  prefix={<Globe className="h-4 w-4" />}
                />
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[
                { label: "shadcn/ui", code: iconsCode, language: "tsx" },
              ]} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Date & Time ───────────────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Date &amp; Time</h3>
            <p className="text-sm text-muted-foreground">Native browser date and time pickers — set <code className="font-mono">type="date"</code>, <code className="font-mono">"time"</code>, or <code className="font-mono">"datetime-local"</code>. Appearance is browser-controlled.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Date</p>
                <FormField label="Birth Date" type="date" />
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Time</p>
                <FormField label="Meeting Time" type="time" />
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Date &amp; Time</p>
                <FormField label="Appointment" type="datetime-local" />
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[
                { label: "shadcn/ui", code: dateTimeCode, language: "tsx" },
              ]} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Specialized Controls ─────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Specialized Controls</h3>
            <p className="text-sm text-muted-foreground">File upload, range slider, and color picker — rendered with native inputs styled via Tailwind's <code className="font-mono">accent-*</code> and <code className="font-mono">file:</code> utilities.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">File Upload</p>
                <FormField label="Profile Photo" type="file" />
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Range Slider</p>
                <div className="flex flex-col gap-2 w-full max-w-sm">
                  <label className="text-sm font-medium text-foreground flex justify-between">
                    <span>Volume</span>
                    <span className="font-mono text-muted-foreground text-sm">{rangeValue}</span>
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={rangeValue}
                    onChange={(e) => setRangeValue(Number(e.target.value))}
                    className="w-full cursor-pointer accent-primary"
                  />
                </div>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Color Picker</p>
                <div className="flex flex-col gap-1.5 w-full max-w-sm">
                  <label className="text-sm font-medium text-foreground">Brand Color</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={colorValue}
                      onChange={(e) => setColorValue(e.target.value)}
                      className="h-10 w-14 cursor-pointer rounded-lg border border-border bg-background p-0.5"
                    />
                    <code className="text-sm font-mono text-muted-foreground">{colorValue}</code>
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[
                { label: "shadcn/ui", code: specializedCode, language: "tsx" },
              ]} />
            </div>
          </div>
        </div>
      </div>

      {/* ── States ────────────────────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">States</h3>
            <p className="text-sm text-muted-foreground">Disabled removes the field from interaction entirely. Read-only keeps it focusable. Error activates a red ring and inline message.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Disabled</p>
                <FormField
                  label="Account ID"
                  value="ACC-12345"
                  disabled
                  helperText="This field cannot be edited."
                />
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Read-only</p>
                <FormField
                  label="User Email"
                  value="sarah@company.com"
                  readOnly
                  helperText="Contact support to update your email."
                />
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Error state</p>
                <FormField
                  label="Email Address"
                  type="email"
                  value="not-an-email"
                  error="Please enter a valid email address."
                />
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Floating label — error state</p>
                <FormField
                  floatingLabel
                  label="Work Email"
                  type="email"
                  defaultValue="not-an-email"
                  error="Please enter a valid email address."
                />
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[
                { label: "shadcn/ui", code: statesCode, language: "tsx" },
              ]} />
            </div>
          </div>
        </div>
      </div>

      {/* Do's and Don'ts */}
      <Section title="Do's and Don'ts">
        <DosDonts
          dos={[
            { text: "Always associate a visible label — every input needs a <label> with htmlFor matching the input's id." },
            { text: "Use floating label for dense forms (checkout, profile) where vertical space is at a premium." },
            { text: "Show error messages inline below the field immediately after failed validation." },
            { text: "Use placeholder text as a hint example, not as a substitute for a label." },
            { text: "Provide autocomplete attributes (email, tel, current-password) for common fields." },
          ]}
          donts={[
            { text: "Don't use floating label for date, time, or file inputs — the browser UI conflicts with the animation." },
            { text: "Don't use placeholder text as the sole label — it disappears when typing begins." },
            { text: "Don't validate on every keystroke — validate on blur or form submission." },
            { text: "Don't rely on red border alone to indicate an error — always add an error message." },
          ]}
        />
      </Section>

      {/* Keyboard & Accessibility */}
      <Section title="Keyboard & Accessibility">
        <KeyboardTable rows={[
          { keys: ["Tab"],       action: "Move focus into the input"                                    },
          { keys: ["Shift+Tab"], action: "Move focus out of the input"                                  },
          { keys: ["Escape"],    action: "Clears the field value (search inputs)"                       },
          { keys: ["Space"],     action: "Opens the file picker (type=\"file\") or native pickers"      },
        ]} />
        <div className="mt-4 rounded-xl border border-border p-5 space-y-3 text-sm">
          <p className="font-semibold text-foreground">ARIA &amp; semantic notes</p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-2"><code className="shrink-0 font-mono text-primary">label</code><span>Every input must have a <code className="font-mono">&lt;label&gt;</code>. FormField auto-generates a unique ID via <code className="font-mono">React.useId()</code> and links it with <code className="font-mono">htmlFor</code>.</span></li>
            <li className="flex gap-2"><code className="shrink-0 font-mono text-primary">aria-invalid</code><span>Automatically set to <code className="font-mono">"true"</code> when the <code className="font-mono">error</code> prop is non-empty.</span></li>
            <li className="flex gap-2"><code className="shrink-0 font-mono text-primary">aria-describedby</code><span>Auto-points to the error message or helper text element. IDs are stable and generated.</span></li>
            <li className="flex gap-2"><code className="shrink-0 font-mono text-primary">aria-required</code><span>The native <code className="font-mono">required</code> attribute maps to <code className="font-mono">aria-required="true"</code> automatically in browsers.</span></li>
            <li className="flex gap-2"><code className="shrink-0 font-mono text-primary">readOnly</code><span>Prefer <code className="font-mono">readOnly</code> over <code className="font-mono">disabled</code> when users need to read or copy the value — it stays focusable and selectable.</span></li>
          </ul>
        </div>
      </Section>

      {/* All Props */}
      <Section title="All Props" description="FormField wraps shadcn Input + Label with a consistent compound API.">
        <PropsTable props={[
          { name: "label",         type: "string",             default: "—",       description: "Visible label text (standard) or animated float label (floating)."                          },
          { name: "type",          type: "string",             default: '"text"',  description: "HTML input type: text, email, tel, password, number, url, date, time, datetime-local, file, range, color, search."  },
          { name: "floatingLabel", type: "boolean",            default: "false",   description: "Enables floating label mode — label animates inside the input field."                       },
          { name: "placeholder",   type: "string",             default: "—",       description: "Hint text. In floating mode, shown only while the input is focused."                         },
          { name: "helperText",    type: "string",             default: "—",       description: "Shown below the field when there is no error."                                               },
          { name: "error",         type: "string",             default: "—",       description: "Error message. When set, activates error visual state and hides helperText."                 },
          { name: "required",      type: "boolean",            default: "false",   description: "Adds a red asterisk (*) after the label."                                                   },
          { name: "disabled",      type: "boolean",            default: "false",   description: "Prevents interaction, removes from tab order, applies opacity-40."                          },
          { name: "readOnly",      type: "boolean",            default: "false",   description: "Keeps the field focusable and text selectable, but prevents editing."                       },
          { name: "prefix",        type: "React.ReactNode",   default: "—",       description: "Icon or element rendered inside the input on the left."                                     },
          { name: "suffix",        type: "React.ReactNode",   default: "—",       description: "Icon or interactive element rendered inside the input on the right."                        },
          { name: "value",         type: "string",             default: "—",       description: "Controlled input value."                                                                    },
          { name: "defaultValue",  type: "string",             default: "—",       description: "Uncontrolled initial value. Used to initialize floating label float state."                 },
          { name: "onChange",      type: "ChangeEventHandler", default: "—",       description: "Controlled change handler."                                                                 },
          { name: "id",            type: "string",             default: "auto",    description: "Input ID. Auto-generated via React.useId() when omitted."                                  },
          { name: "className",     type: "string",             default: "—",       description: "Additional Tailwind classes on the outer wrapper."                                         },
        ]} />
      </Section>
    </ComponentLayout>
  )
}
