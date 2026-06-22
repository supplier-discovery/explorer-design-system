import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { ComponentLayout, InfoGrid } from "@/components/portal/ComponentLayout"
import { Section, DosDonts, PropsTable, KeyboardTable } from "@/components/portal/Section"
import { CodeTabs } from "@/components/portal/CodeBlock"

// ─── Code snippets ────────────────────────────────────────────────────────────

const basicSelectCode = `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function BasicSelect() {
  const [value, setValue] = useState("")

  return (
    <div>
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger className="w-[220px]">
          <SelectValue placeholder="Select a framework..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="nextjs">Next.js</SelectItem>
          <SelectItem value="sveltekit">SvelteKit</SelectItem>
          <SelectItem value="nuxtjs">Nuxt.js</SelectItem>
          <SelectItem value="remix">Remix</SelectItem>
          <SelectItem value="astro">Astro</SelectItem>
          <SelectItem value="vuejs">Vue.js</SelectItem>
        </SelectContent>
      </Select>
      <p className="mt-2 text-sm text-muted-foreground">
        Selected: {value || "none"}
      </p>
    </div>
  )
}`

const groupedSelectCode = `import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function GroupedSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder="Select a technology..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Frontend</SelectLabel>
          <SelectItem value="react">React</SelectItem>
          <SelectItem value="vuejs">Vue.js</SelectItem>
          <SelectItem value="svelte">Svelte</SelectItem>
          <SelectItem value="angular">Angular</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Backend</SelectLabel>
          <SelectItem value="nodejs">Node.js</SelectItem>
          <SelectItem value="django">Django</SelectItem>
          <SelectItem value="laravel">Laravel</SelectItem>
          <SelectItem value="rails">Rails</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}`

const statesSelectCode = `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Default
<Select>
  <SelectTrigger className="w-[220px]">
    <SelectValue placeholder="Select an option..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>

// Disabled select
<Select disabled>
  <SelectTrigger className="w-[220px]">
    <SelectValue placeholder="Not available" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
  </SelectContent>
</Select>

// With a disabled item
<Select>
  <SelectTrigger className="w-[220px]">
    <SelectValue placeholder="Select a plan..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="free">Free</SelectItem>
    <SelectItem value="pro">Pro</SelectItem>
    <SelectItem value="enterprise" disabled>
      Enterprise (contact sales)
    </SelectItem>
  </SelectContent>
</Select>`

const labeledSelectCode = `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export function LabeledSelect() {
  return (
    <div className="space-y-2">
      <Label htmlFor="role-select">Role</Label>
      <Select>
        <SelectTrigger id="role-select" className="w-[220px]">
          <SelectValue placeholder="Select a role..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="editor">Editor</SelectItem>
          <SelectItem value="viewer">Viewer</SelectItem>
          <SelectItem value="contributor">Contributor</SelectItem>
        </SelectContent>
      </Select>
      <p className="text-xs text-muted-foreground">
        Select your primary role in the organization.
      </p>
    </div>
  )
}`

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SelectPage() {
  const [basicValue, setBasicValue] = useState("")

  return (
    <ComponentLayout
      name="Select"
      description="Displays a list of options for the user to pick from — built on @radix-ui/react-select with full keyboard navigation and ARIA roles."
      category="Forms"
      status="stable"
      tags={["Radix UI", "Accessible", "Form"]}
    >
      <InfoGrid
        items={[
          { label: "Component", value: "Select + subcomponents" },
          { label: "States", value: "Default · Open · Disabled" },
          { label: "Groups", value: "Supported" },
          { label: "Primitive", value: "@radix-ui/react-select" },
        ]}
      />

      {/* Component API */}
      <Section title="Component API">
        <div className="space-y-4">
          <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 px-4 py-3 text-sm font-mono text-foreground">
            {`import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"`}
          </div>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-2.5 text-left font-semibold text-foreground">Component</th>
                  <th className="px-4 py-2.5 text-left font-semibold text-foreground">Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { component: "SelectTrigger", role: "The button that opens the dropdown. Accepts id for label association." },
                  { component: "SelectValue", role: "Renders the selected value or placeholder text inside the trigger." },
                  { component: "SelectContent", role: "The popover panel containing all items." },
                  { component: "SelectItem", role: "An individual selectable option. Requires a value prop." },
                  { component: "SelectGroup", role: "Wraps a set of related SelectItems." },
                  { component: "SelectLabel", role: "Non-interactive heading for a SelectGroup." },
                ].map((row) => (
                  <tr key={row.component} className="hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-2.5 font-mono text-xs text-primary">{row.component}</td>
                    <td className="px-4 py-2.5 text-muted-foreground">{row.role}</td>
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
              <li>Choosing one item from a predefined list</li>
              <li>Form fields with many options (5+)</li>
              <li>When native select accessibility is needed</li>
              <li>Filtering or sorting controls</li>
            </ul>
          </div>
          <div className="rounded-lg border border-error/30 bg-error/5 p-4 space-y-2">
            <p className="text-sm font-semibold text-error">When NOT to Use</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
              <li>Toggle between 2 options — use Switch</li>
              <li>Selecting multiple items — use checkboxes</li>
              <li>When options need rich content — use Combobox</li>
            </ul>
          </div>
        </div>
      </Section>

      <hr className="border-border" />

      {/* Demo Block 1: Basic Select */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Basic Select</h3>
            <p className="text-sm text-muted-foreground">A controlled select with a placeholder and a flat list of options.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Controlled</p>
                <Select value={basicValue} onValueChange={setBasicValue}>
                  <SelectTrigger className="w-[220px]">
                    <SelectValue placeholder="Select a framework..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nextjs">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="nuxtjs">Nuxt.js</SelectItem>
                    <SelectItem value="remix">Remix</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="vuejs">Vue.js</SelectItem>
                  </SelectContent>
                </Select>
                <p className="mt-2 text-sm text-muted-foreground">
                  Selected: {basicValue || "none"}
                </p>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: basicSelectCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* Demo Block 2: With Groups */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">With Groups</h3>
            <p className="text-sm text-muted-foreground">Use SelectGroup and SelectLabel to organize options into logical categories.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Grouped options</p>
                <Select>
                  <SelectTrigger className="w-[220px]">
                    <SelectValue placeholder="Select a technology..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Frontend</SelectLabel>
                      <SelectItem value="react">React</SelectItem>
                      <SelectItem value="vuejs">Vue.js</SelectItem>
                      <SelectItem value="svelte">Svelte</SelectItem>
                      <SelectItem value="angular">Angular</SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel>Backend</SelectLabel>
                      <SelectItem value="nodejs">Node.js</SelectItem>
                      <SelectItem value="django">Django</SelectItem>
                      <SelectItem value="laravel">Laravel</SelectItem>
                      <SelectItem value="rails">Rails</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: groupedSelectCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* Demo Block 3: States */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">States</h3>
            <p className="text-sm text-muted-foreground">Default, fully disabled, and partially disabled (single item) states.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Default</p>
                <Select>
                  <SelectTrigger className="w-[220px]">
                    <SelectValue placeholder="Select an option..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Disabled select</p>
                <Select disabled>
                  <SelectTrigger className="w-[220px]">
                    <SelectValue placeholder="Not available" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">With disabled item</p>
                <Select>
                  <SelectTrigger className="w-[220px]">
                    <SelectValue placeholder="Select a plan..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="free">Free</SelectItem>
                    <SelectItem value="pro">Pro</SelectItem>
                    <SelectItem value="enterprise" disabled>Enterprise (contact sales)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: statesSelectCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* Demo Block 4: With Form Label */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">With Form Label</h3>
            <p className="text-sm text-muted-foreground">Always associate a Label with the SelectTrigger via matching htmlFor / id for accessibility.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Labeled field</p>
                <div className="space-y-2">
                  <Label htmlFor="role-select">Role</Label>
                  <Select>
                    <SelectTrigger id="role-select" className="w-[220px]">
                      <SelectValue placeholder="Select a role..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="editor">Editor</SelectItem>
                      <SelectItem value="viewer">Viewer</SelectItem>
                      <SelectItem value="contributor">Contributor</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    Select your primary role in the organization.
                  </p>
                </div>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: labeledSelectCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* Dos and Don'ts */}
      <Section title="Do's and Don'ts">
        <DosDonts
          dos={[
            { text: "Use for lists of 5 or more options" },
            { text: "Group related options with SelectLabel" },
            { text: "Always include a placeholder in SelectValue" },
            { text: "Provide a Form Label above the trigger" },
            { text: "Order options logically (alphabetical, frequency, or grouped)" },
          ]}
          donts={[
            { text: "Don't use for fewer than 3 options — use radio buttons instead" },
            { text: "Don't nest groups more than one level deep" },
            { text: "Don't use for multiple selection — use checkboxes" },
            { text: "Don't use for binary toggles — use a Switch" },
          ]}
        />
      </Section>

      {/* Keyboard & Accessibility */}
      <Section title="Keyboard & Accessibility">
        <KeyboardTable
          rows={[
            { keys: ["Space", "Enter"], action: "Open the dropdown" },
            { keys: ["↑", "↓"], action: "Navigate options" },
            { keys: ["Home", "End"], action: "Jump to first / last option" },
            { keys: ["Escape"], action: "Close without selecting" },
            { keys: ["Type character"], action: "Jump to option starting with that character" },
          ]}
        />
        <div className="mt-4 rounded-lg border border-border bg-muted/30 p-4 space-y-1.5 text-sm text-muted-foreground">
          <p><span className="font-semibold text-foreground">role="combobox"</span> is applied to the trigger, and <span className="font-semibold text-foreground">role="listbox"</span> to the content panel by Radix UI automatically.</p>
          <p>Associate a visible label using <span className="font-mono text-xs text-foreground">{"<Label htmlFor='…'>"}</span> and a matching <span className="font-mono text-xs text-foreground">id</span> on <span className="font-mono text-xs text-foreground">SelectTrigger</span>.</p>
        </div>
      </Section>

      {/* Props */}
      <Section title="All Props" description="Props for the root Select component and SelectItem.">
        <PropsTable
          props={[
            { name: "value", type: "string", description: "Controlled selected value" },
            { name: "defaultValue", type: "string", description: "Uncontrolled initial value" },
            { name: "onValueChange", type: "(value: string) => void", description: "Called when the user selects an option" },
            { name: "disabled", type: "boolean", default: "false", description: "Disables the trigger and prevents opening" },
            { name: "SelectItem.value", type: "string", required: true, description: "The value for this item" },
            { name: "SelectItem.disabled", type: "boolean", default: "false", description: "Disables this item only, leaving others interactive" },
          ]}
        />
      </Section>
    </ComponentLayout>
  )
}
