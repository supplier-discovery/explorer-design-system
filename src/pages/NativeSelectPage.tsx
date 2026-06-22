import { useState } from "react"
import { NativeSelect } from "@/components/ui/native-select"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { ComponentLayout, InfoGrid } from "@/components/portal/ComponentLayout"
import { Section, DosDonts, PropsTable, KeyboardTable } from "@/components/portal/Section"
import { CodeTabs } from "@/components/portal/CodeBlock"

// ─── Code snippets ────────────────────────────────────────────────────────────

const basicNativeSelectCode = `import { NativeSelect } from "@/components/ui/native-select"

export function BasicNativeSelect() {
  const [value, setValue] = useState("")

  return (
    <div>
      <NativeSelect
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-[220px]"
      >
        <option value="" disabled>Select a country...</option>
        <option value="us">United States</option>
        <option value="gb">United Kingdom</option>
        <option value="ca">Canada</option>
        <option value="au">Australia</option>
        <option value="de">Germany</option>
        <option value="fr">France</option>
      </NativeSelect>
      <p className="mt-2 text-sm text-muted-foreground">
        Selected: {value || "none"}
      </p>
    </div>
  )
}`

const optgroupNativeSelectCode = `import { NativeSelect } from "@/components/ui/native-select"

export function OptgroupNativeSelect() {
  return (
    <NativeSelect className="w-[220px]">
      <option value="">Select a country...</option>
      <optgroup label="Americas">
        <option value="us">United States</option>
        <option value="ca">Canada</option>
        <option value="br">Brazil</option>
        <option value="mx">Mexico</option>
      </optgroup>
      <optgroup label="Europe">
        <option value="de">Germany</option>
        <option value="fr">France</option>
        <option value="gb">United Kingdom</option>
        <option value="es">Spain</option>
      </optgroup>
    </NativeSelect>
  )
}`

const multipleNativeSelectCode = `import { NativeSelect } from "@/components/ui/native-select"

export function MultipleNativeSelect() {
  return (
    <div>
      <NativeSelect multiple size={5} className="w-[220px]">
        <option value="js">JavaScript</option>
        <option value="ts">TypeScript</option>
        <option value="py">Python</option>
        <option value="rs">Rust</option>
        <option value="go">Go</option>
        <option value="swift">Swift</option>
      </NativeSelect>
      <p className="mt-2 text-xs text-muted-foreground">
        Hold Ctrl/Cmd to select multiple items
      </p>
    </div>
  )
}`

const statesNativeSelectCode = `import { NativeSelect } from "@/components/ui/native-select"
import { Label } from "@/components/ui/label"

// Default
<NativeSelect className="w-[220px]">
  <option value="">Select an option...</option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
</NativeSelect>

// Disabled
<NativeSelect disabled className="w-[220px]">
  <option value="">Not available</option>
</NativeSelect>

// Error state — override border and focus ring
<NativeSelect className="w-[220px] border-error focus-visible:ring-error">
  <option value="">Select an option...</option>
  <option value="option1">Option 1</option>
</NativeSelect>

// With label
<div className="space-y-1.5">
  <Label htmlFor="country-select">Country</Label>
  <NativeSelect id="country-select" className="w-[220px]">
    <option value="">Select a country...</option>
    <option value="us">United States</option>
    <option value="gb">United Kingdom</option>
  </NativeSelect>
</div>`

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function NativeSelectPage() {
  const [basicValue, setBasicValue] = useState("")

  return (
    <ComponentLayout
      name="Native Select"
      description="A styled native HTML <select> element. Use when you need browser-native dropdown behavior, form autofill, or maximum compatibility."
      category="Forms"
      status="stable"
      tags={["Native HTML", "Accessible", "Form"]}
    >
      <InfoGrid
        items={[
          { label: "Element", value: "<select>" },
          { label: "States", value: "Default · Focus · Disabled" },
          { label: "Groups", value: "<optgroup>" },
          { label: "WCAG", value: "AA 2.2" },
        ]}
      />

      {/* Component API */}
      <Section title="Component API">
        <div className="space-y-4">
          <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 px-4 py-3 text-sm font-mono text-foreground">
            {`import { NativeSelect } from "@/components/ui/native-select"`}
          </div>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-2.5 text-left font-semibold text-foreground">Prop</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-foreground">Type</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-foreground">Default</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { prop: "multiple", type: "boolean", def: "false", desc: "Enables multi-selection listbox mode" },
                  { prop: "size", type: "number", def: "—", desc: "Number of visible rows in listbox mode" },
                  { prop: "disabled", type: "boolean", def: "false", desc: "Prevents all interaction" },
                  { prop: "className", type: "string", def: "—", desc: "Merged onto the <select> element" },
                  { prop: "...rest", type: "React.SelectHTMLAttributes", def: "—", desc: "All native <select> attributes are forwarded" },
                ].map((row) => (
                  <tr key={row.prop} className="hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-2.5 font-mono text-xs text-primary">{row.prop}</td>
                    <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">{row.type}</td>
                    <td className="px-4 py-2.5 font-mono text-xs text-muted-foreground">{row.def}</td>
                    <td className="px-4 py-2.5 text-muted-foreground">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Overview */}
      <Section title="Overview">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-lg border border-success/30 bg-success/5 p-4 space-y-2">
            <p className="text-sm font-semibold text-success">When to Use</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
              <li>Form autofill is needed</li>
              <li>Maximum browser / OS compatibility required</li>
              <li>Mobile-first where native picker is preferred</li>
              <li>Accessibility environments that need native semantics</li>
            </ul>
          </div>
          <div className="rounded-lg border border-error/30 bg-error/5 p-4 space-y-2">
            <p className="text-sm font-semibold text-error">When NOT to Use</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
              <li>Rich option rendering is needed — use Select / Combobox</li>
              <li>Searching or filtering is needed — use Combobox</li>
              <li>Custom dropdown styling is required</li>
            </ul>
          </div>
        </div>
      </Section>

      <hr className="border-border" />

      {/* Demo Block 1: Basic */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Basic</h3>
            <p className="text-sm text-muted-foreground">A controlled native select with a flat list of options and a disabled placeholder.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Controlled</p>
                <NativeSelect
                  value={basicValue}
                  onChange={(e) => setBasicValue(e.target.value)}
                  className="w-[220px]"
                >
                  <option value="" disabled>Select a country...</option>
                  <option value="us">United States</option>
                  <option value="gb">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                  <option value="de">Germany</option>
                  <option value="fr">France</option>
                </NativeSelect>
                <p className="mt-2 text-sm text-muted-foreground">
                  Selected: {basicValue || "none"}
                </p>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: basicNativeSelectCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* Demo Block 2: With Optgroups */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">With Optgroups</h3>
            <p className="text-sm text-muted-foreground">Use native {"<optgroup>"} to categorize long option lists without any JavaScript.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Grouped countries</p>
                <NativeSelect className="w-[220px]">
                  <option value="">Select a country...</option>
                  <optgroup label="Americas">
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="br">Brazil</option>
                    <option value="mx">Mexico</option>
                  </optgroup>
                  <optgroup label="Europe">
                    <option value="de">Germany</option>
                    <option value="fr">France</option>
                    <option value="gb">United Kingdom</option>
                    <option value="es">Spain</option>
                  </optgroup>
                </NativeSelect>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: optgroupNativeSelectCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* Demo Block 3: Multiple Selection */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Multiple Selection</h3>
            <p className="text-sm text-muted-foreground">Pass multiple and size to render a scrollable listbox with multi-select behavior.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Listbox mode</p>
                <NativeSelect multiple size={5} className="w-[220px]">
                  <option value="js">JavaScript</option>
                  <option value="ts">TypeScript</option>
                  <option value="py">Python</option>
                  <option value="rs">Rust</option>
                  <option value="go">Go</option>
                  <option value="swift">Swift</option>
                </NativeSelect>
                <p className="mt-2 text-xs text-muted-foreground">
                  Hold Ctrl/Cmd to select multiple items
                </p>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: multipleNativeSelectCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* Demo Block 4: States */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">States</h3>
            <p className="text-sm text-muted-foreground">Default, disabled, error, and labeled states for form integration.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Default</p>
                <NativeSelect className="w-[220px]">
                  <option value="">Select an option...</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </NativeSelect>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Disabled</p>
                <NativeSelect disabled className="w-[220px]">
                  <option value="">Not available</option>
                </NativeSelect>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Error state</p>
                <NativeSelect className={cn("w-[220px]", "border-error focus-visible:ring-error")}>
                  <option value="">Select an option...</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </NativeSelect>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">With label</p>
                <div className="space-y-1.5">
                  <Label htmlFor="country-select">Country</Label>
                  <NativeSelect id="country-select" className="w-[220px]">
                    <option value="">Select a country...</option>
                    <option value="us">United States</option>
                    <option value="gb">United Kingdom</option>
                    <option value="ca">Canada</option>
                  </NativeSelect>
                </div>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: statesNativeSelectCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* Dos and Don'ts */}
      <Section title="Do's and Don'ts">
        <DosDonts
          dos={[
            { text: "Use when browser autofill support is needed" },
            { text: "Use optgroup to categorize long option lists" },
            { text: "Always associate a label using htmlFor" },
            { text: "Use as the default select on mobile-first forms" },
          ]}
          donts={[
            { text: "Don't use when you need custom option rendering" },
            { text: "Don't use multiple-select when the list is very long" },
            { text: "Don't try to style the native dropdown popup" },
            { text: "Don't mix Native Select and Radix Select on the same form" },
          ]}
        />
      </Section>

      {/* Keyboard & Accessibility */}
      <Section title="Keyboard & Accessibility">
        <KeyboardTable
          rows={[
            { keys: ["Space", "Enter"], action: "Open dropdown (single) or select item (multiple)" },
            { keys: ["↑", "↓"], action: "Navigate options" },
            { keys: ["Home", "End"], action: "Jump to first / last option" },
            { keys: ["Type character"], action: "Jump to matching option" },
          ]}
        />
        <div className="mt-4 rounded-lg border border-border bg-muted/30 p-4 space-y-1.5 text-sm text-muted-foreground">
          <p>The native <span className="font-mono text-xs text-foreground">{"<select>"}</span> element has built-in ARIA semantics (<span className="font-semibold text-foreground">role="combobox"</span> / <span className="font-semibold text-foreground">role="listbox"</span>) handled entirely by the browser.</p>
          <p>Always pair with a visible <span className="font-mono text-xs text-foreground">{"<label>"}</span> using <span className="font-mono text-xs text-foreground">htmlFor</span> matching the select's <span className="font-mono text-xs text-foreground">id</span> to ensure screen readers announce the field correctly.</p>
        </div>
      </Section>

      {/* Props */}
      <Section title="All Props" description="NativeSelect forwards all standard HTML select attributes in addition to these.">
        <PropsTable
          props={[
            { name: "multiple", type: "boolean", default: "false", description: "Enables multi-selection listbox mode" },
            { name: "size", type: "number", description: "Number of visible rows when in listbox mode" },
            { name: "disabled", type: "boolean", default: "false", description: "Prevents all interaction with the select" },
            { name: "className", type: "string", description: "Merged onto the underlying <select> element via cn()" },
          ]}
        />
      </Section>
    </ComponentLayout>
  )
}
