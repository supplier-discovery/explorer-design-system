import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { ComponentLayout, InfoGrid } from "@/components/portal/ComponentLayout"
import { Section, DosDonts, PropsTable, KeyboardTable } from "@/components/portal/Section"
import { CodeTabs } from "@/components/portal/CodeBlock"

// ─── Code snippets ────────────────────────────────────────────────────────────

const basicComboboxCode = `// Install: npx shadcn@latest add popover command

import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"

const frameworks = [
  { value: "next.js",   label: "Next.js"   },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js",   label: "Nuxt.js"   },
  { value: "remix",     label: "Remix"     },
  { value: "astro",     label: "Astro"     },
  { value: "gatsby",    label: "Gatsby"    },
  { value: "ember.js",  label: "Ember.js"  },
  { value: "vue.js",    label: "Vue.js"    },
]

const [open, setOpen] = useState(false)
const [value, setValue] = useState("")

<Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger asChild>
    <Button
      variant="outline"
      role="combobox"
      aria-expanded={open}
      className="w-[220px] justify-between"
    >
      {value
        ? frameworks.find((f) => f.value === value)?.label
        : "Select framework..."}
      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-[220px] p-0">
    <Command>
      <CommandInput placeholder="Search framework..." />
      <CommandList>
        <CommandEmpty>No framework found.</CommandEmpty>
        <CommandGroup>
          {frameworks.map((framework) => (
            <CommandItem
              key={framework.value}
              value={framework.value}
              onSelect={(currentValue) => {
                setValue(currentValue === value ? "" : currentValue)
                setOpen(false)
              }}
            >
              <Check
                className={cn(
                  "mr-2 h-4 w-4",
                  value === framework.value ? "opacity-100" : "opacity-0"
                )}
              />
              {framework.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  </PopoverContent>
</Popover>`

const categoriesComboboxCode = `// Combobox with grouped categories using CommandGroup headings

import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"

const [open, setOpen] = useState(false)
const [value, setValue] = useState("")

<Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger asChild>
    <Button
      variant="outline"
      role="combobox"
      aria-expanded={open}
      className="w-[220px] justify-between"
    >
      {value ? value : "Select framework..."}
      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-[220px] p-0">
    <Command>
      <CommandInput placeholder="Search framework..." />
      <CommandList>
        <CommandEmpty>No framework found.</CommandEmpty>
        <CommandGroup heading="Meta">
          {["React", "Next.js", "Remix", "Gatsby"].map((item) => (
            <CommandItem
              key={item}
              value={item}
              onSelect={(v) => { setValue(v === value ? "" : v); setOpen(false) }}
            >
              <Check className={cn("mr-2 h-4 w-4", value === item ? "opacity-100" : "opacity-0")} />
              {item}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Community">
          {["Vue.js", "Nuxt.js", "Svelte", "SvelteKit"].map((item) => (
            <CommandItem
              key={item}
              value={item}
              onSelect={(v) => { setValue(v === value ? "" : v); setOpen(false) }}
            >
              <Check className={cn("mr-2 h-4 w-4", value === item ? "opacity-100" : "opacity-0")} />
              {item}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  </PopoverContent>
</Popover>`

// ─── Data ─────────────────────────────────────────────────────────────────────

const frameworks = [
  { value: "next.js",   label: "Next.js"   },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js",   label: "Nuxt.js"   },
  { value: "remix",     label: "Remix"     },
  { value: "astro",     label: "Astro"     },
  { value: "gatsby",    label: "Gatsby"    },
  { value: "ember.js",  label: "Ember.js"  },
  { value: "vue.js",    label: "Vue.js"    },
]

const metaFrameworks = ["React", "Next.js", "Remix", "Gatsby"]
const communityFrameworks = ["Vue.js", "Nuxt.js", "Svelte", "SvelteKit"]

// ─── ComboboxPage ─────────────────────────────────────────────────────────────

export default function ComboboxPage() {
  // Demo 1 state
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  // Demo 2 state
  const [open2, setOpen2] = useState(false)
  const [value2, setValue2] = useState("")

  return (
    <ComponentLayout
      name="Combobox"
      description="An autocomplete input built on Command + Popover — search through a list and pick one item. Ideal for large option sets where a plain Select would be overwhelming."
      category="Forms"
      status="stable"
      tags={["Radix UI", "Command", "Accessible"]}
    >
      <InfoGrid items={[
        { label: "Built on", value: "Command + Popover" },
        { label: "Search",   value: "Client-side filter" },
        { label: "States",   value: "Closed · Open · Searching · Empty" },
        { label: "WCAG",     value: "AA 2.2" },
      ]} />

      {/* Component API */}
      <Section title="Component API">
        <div className="rounded-xl border border-border overflow-hidden text-sm">
          <div className="bg-neutral-50 dark:bg-neutral-900 px-5 py-3 border-b border-border font-mono text-xs text-muted-foreground">
            {`import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"`}
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-900 px-5 py-3 border-b border-border font-mono text-xs text-muted-foreground">
            {`import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"`}
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-900 px-5 py-3 border-b border-border font-mono text-xs text-muted-foreground">
            {`import { Button } from "@/components/ui/button"`}
          </div>
          <div className="px-5 py-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              The Combobox is not a single component — it is composed from{" "}
              <code className="font-mono text-primary">Popover</code>,{" "}
              <code className="font-mono text-primary">Command</code>, and{" "}
              <code className="font-mono text-primary">Button</code>. This composition pattern gives
              you full control over the trigger appearance, the list structure, and item rendering.
              See the demos below for the full pattern.
            </p>
          </div>
        </div>
      </Section>

      {/* Overview */}
      <Section title="Overview">
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            The Combobox combines a <code className="font-mono">Popover</code> trigger with a{" "}
            <code className="font-mono">Command</code> palette to provide a searchable selection
            experience. It is the right tool when your option set is large enough that scrolling
            a plain Select would be tedious.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-success/20 bg-success/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When to Use</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Large lists where search is needed (50+ items)</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Complex data with searchable fields</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />User lookup and selection</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Country, timezone, or language pickers</li>
              </ul>
            </div>
            <div className="rounded-xl border border-warning/20 bg-warning/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When NOT to Use</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Small lists under 10 items — use Select</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Binary choices — use Switch</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />When search is not needed — use Select</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <hr className="border-border" />

      {/* ── Basic Combobox ───────────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Basic Combobox</h3>
            <p className="text-sm text-muted-foreground">
              A single-select combobox with client-side search. The trigger shows the selected label
              and falls back to placeholder text when nothing is selected.
            </p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 p-4 flex items-center justify-center min-h-[160px]">
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[220px] justify-between"
                  >
                    {value
                      ? frameworks.find((f) => f.value === value)?.label
                      : "Select framework..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[220px] p-0">
                  <Command>
                    <CommandInput placeholder="Search framework..." />
                    <CommandList>
                      <CommandEmpty>No framework found.</CommandEmpty>
                      <CommandGroup>
                        {frameworks.map((framework) => (
                          <CommandItem
                            key={framework.value}
                            value={framework.value}
                            onSelect={(currentValue) => {
                              setValue(currentValue === value ? "" : currentValue)
                              setOpen(false)
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                value === framework.value ? "opacity-100" : "opacity-0"
                              )}
                            />
                            {framework.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[
                { label: "shadcn/ui", language: "tsx", code: basicComboboxCode },
              ]} />
            </div>
          </div>
        </div>
      </div>

      {/* ── With Categories ──────────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">With Categories</h3>
            <p className="text-sm text-muted-foreground">
              Use multiple <code className="font-mono">CommandGroup</code> components with a{" "}
              <code className="font-mono">heading</code> prop to group related items. Search filters
              across all groups simultaneously.
            </p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 p-4 flex items-center justify-center min-h-[160px]">
              <Popover open={open2} onOpenChange={setOpen2}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open2}
                    className="w-[220px] justify-between"
                  >
                    {value2 ? value2 : "Select framework..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[220px] p-0">
                  <Command>
                    <CommandInput placeholder="Search framework..." />
                    <CommandList>
                      <CommandEmpty>No framework found.</CommandEmpty>
                      <CommandGroup heading="Meta">
                        {metaFrameworks.map((item) => (
                          <CommandItem
                            key={item}
                            value={item}
                            onSelect={(v) => {
                              setValue2(v === value2 ? "" : v)
                              setOpen2(false)
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                value2 === item ? "opacity-100" : "opacity-0"
                              )}
                            />
                            {item}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                      <CommandGroup heading="Community">
                        {communityFrameworks.map((item) => (
                          <CommandItem
                            key={item}
                            value={item}
                            onSelect={(v) => {
                              setValue2(v === value2 ? "" : v)
                              setOpen2(false)
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                value2 === item ? "opacity-100" : "opacity-0"
                              )}
                            />
                            {item}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[
                { label: "shadcn/ui", language: "tsx", code: categoriesComboboxCode },
              ]} />
            </div>
          </div>
        </div>
      </div>

      {/* Do's and Don'ts */}
      <Section title="Do's and Don'ts">
        <DosDonts
          dos={[
            { text: "Use for large searchable lists — combobox shines with 50+ options." },
            { text: "Show the selected label in the trigger so the user can see their choice at a glance." },
            { text: "Always include a CommandEmpty state to handle no-results gracefully." },
            { text: "Use clear, descriptive search placeholder text (e.g., 'Search countries...')." },
          ]}
          donts={[
            { text: "Don't use for small lists under 10 items — a Select is simpler and faster." },
            { text: "Don't skip the CommandEmpty fallback — leaving it out is confusing when search returns nothing." },
            { text: "Don't use for multi-select without a custom implementation — this pattern is single-select." },
            { text: "Don't forget to close the popover on item selection — call setOpen(false) in onSelect." },
          ]}
        />
      </Section>

      {/* Keyboard & Accessibility */}
      <Section title="Keyboard & Accessibility">
        <KeyboardTable rows={[
          { keys: ["Enter"],     action: "Select the highlighted item" },
          { keys: ["↑", "↓"],   action: "Navigate items" },
          { keys: ["Type"],      action: "Filter the list" },
          { keys: ["Escape"],    action: "Close the popover" },
        ]} />
      </Section>

      {/* Props */}
      <Section title="Props" description="This is a composition pattern — no single Combobox component exists. Compose Popover + Command.">
        <PropsTable props={[
          { name: "Popover.open",          type: "boolean",                   default: "—", description: "Controls popover open state." },
          { name: "Popover.onOpenChange",  type: "(open: boolean) => void",   default: "—", description: "Called when open state changes." },
          { name: "CommandInput.placeholder", type: "string",                 default: "—", description: "Search input placeholder." },
          { name: "CommandEmpty",          type: "ReactNode",                 default: "—", description: "Shown when no items match the search." },
          { name: "CommandItem.onSelect",  type: "(value: string) => void",   default: "—", description: "Called when item is selected." },
        ]} />
      </Section>
    </ComponentLayout>
  )
}
