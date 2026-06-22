import { useState } from "react"
import {
  CheckCircle2,
  Clock,
  Circle,
  LayoutList,
  LayoutGrid,
  GanttChart,
  Building2,
  ClipboardCheck,
  Award,
  SlidersHorizontal,
} from "lucide-react"
import { PillTabs } from "@/components/ui/pill-tabs"
import { ComponentLayout, InfoGrid } from "@/components/portal/ComponentLayout"
import { Section, DosDonts, PropsTable, KeyboardTable } from "@/components/portal/Section"
import { CodeTabs } from "@/components/portal/CodeBlock"

// ─── Code snippets ────────────────────────────────────────────────────────────

const standardCode = `import { useState } from "react"
import { Clock, CheckCircle2 } from "lucide-react"
import { PillTabs } from "@/components/ui/pill-tabs"

// Basic — no icons
const VIEWS = [
  { value: "list",  label: "List"  },
  { value: "board", label: "Board" },
  { value: "gantt", label: "Gantt" },
]

function Example() {
  const [view, setView] = useState("list")
  return (
    <PillTabs
      tabs={VIEWS}
      value={view}
      onChange={setView}
      shape="standard"
      aria-label="View mode"
    />
  )
}

// With status icons — recreates the reference screenshot pattern
const WORKFLOW_TABS = [
  {
    value:  "general",
    label:  "General Information",
    icon:   <CheckCircle2 className="text-primary-foreground" />,
  },
  {
    value:  "products",
    label:  "Product & Services",
    icon:   <Clock className="text-warning" />,
  },
  {
    value:  "certs",
    label:  "Certifications & Declarations",
    icon:   <Clock className="text-warning" />,
  },
  {
    value:  "company",
    label:  "Company Registrations",
    icon:   <Clock className="text-warning" />,
    badge:  8,
  },
  {
    value:  "confirm",
    label:  "Confirmation",
    disabled: true,
  },
]

// With badge counts
const TABS_BADGE = [
  { value: "open",   label: "Open",   badge: 12 },
  { value: "review", label: "Review", badge: 4  },
  { value: "done",   label: "Done",   badge: 31 },
]

// Individual disabled tab
const TABS_PARTIAL = [
  { value: "read",  label: "Read"  },
  { value: "edit",  label: "Edit"  },
  { value: "admin", label: "Admin", disabled: true },
]

// Sizes
<PillTabs tabs={VIEWS} value={view} onChange={setView} shape="standard" size="sm" />
<PillTabs tabs={VIEWS} value={view} onChange={setView} shape="standard" />
<PillTabs tabs={VIEWS} value={view} onChange={setView} shape="standard" size="lg" />

// Full width
<PillTabs tabs={VIEWS} value={view} onChange={setView} shape="standard" fullWidth />`

const pillCode = `import { useState } from "react"
import { PillTabs } from "@/components/ui/pill-tabs"

// Filter tabs — classic pill segmented-control style
const FILTERS = [
  { value: "all",    label: "All"    },
  { value: "active", label: "Active" },
  { value: "closed", label: "Closed" },
]

function Example() {
  const [filter, setFilter] = useState("all")
  return (
    <PillTabs
      tabs={FILTERS}
      value={filter}
      onChange={setFilter}
      shape="pill"
      aria-label="Status filter"
    />
  )
}

// Period selector (4 tabs)
const PERIODS = [
  { value: "day",   label: "Day"   },
  { value: "week",  label: "Week"  },
  { value: "month", label: "Month" },
  { value: "year",  label: "Year"  },
]

// Full width — segmented-control style
<PillTabs
  tabs={FILTERS}
  value={filter}
  onChange={setFilter}
  shape="pill"
  fullWidth
  aria-label="Status filter"
/>

// Sizes
<PillTabs tabs={FILTERS} value={filter} onChange={setFilter} shape="pill" size="sm" />
<PillTabs tabs={FILTERS} value={filter} onChange={setFilter} shape="pill" />
<PillTabs tabs={FILTERS} value={filter} onChange={setFilter} shape="pill" size="lg" />`

const tailwindCode = `{/* ── Standard Pill Tab — active (filled) ───────────────────────── */}
<button
  role="tab"
  aria-selected="true"
  tabIndex={0}
  className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium
    gap-2 rounded-md whitespace-nowrap select-none transition-all duration-fast
    bg-primary text-primary-foreground shadow-elevation-1 hover:bg-primary/90
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
    focus-visible:ring-offset-2"
>
  General Information
</button>

{/* ── Standard Pill Tab — inactive (outline) ─────────────────────── */}
<button
  role="tab"
  aria-selected="false"
  tabIndex={-1}
  className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium
    gap-2 rounded-md whitespace-nowrap select-none transition-all duration-fast
    bg-background border border-border text-muted-foreground
    hover:border-neutral-400 hover:text-foreground
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
    focus-visible:ring-offset-2"
>
  <Clock className="h-4 w-4 text-warning" />
  Product & Services
</button>

{/* ── Badge count inside a tab ───────────────────────────────────── */}
<button role="tab" aria-selected="false" tabIndex={-1}
  className="... bg-background border border-border text-muted-foreground ..."
>
  <Clock className="h-4 w-4 text-warning" />
  Company Registrations
  <span className="inline-flex items-center justify-center rounded-full px-1.5
    min-w-[18px] text-[10px] font-semibold
    bg-neutral-200 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300">
    8
  </span>
</button>

{/* ── Pill shape — swap rounded-md → rounded-full on each tab ────── */}
{/* ── Full width  — add flex-1 to each button, w-full to container ── */}`

// ─── Demo data ────────────────────────────────────────────────────────────────

const WORKFLOW_TABS = [
  {
    value: "general",
    label: "General Information",
    icon:  <CheckCircle2 className="text-primary-foreground" />,
  },
  {
    value: "products",
    label: "Product & Services",
    icon:  <Clock className="text-warning" />,
  },
  {
    value: "certs",
    label: "Certifications & Declarations",
    icon:  <Clock className="text-warning" />,
  },
  {
    value: "company",
    label: "Company Registrations",
    icon:  <Clock className="text-warning" />,
    badge: 8,
  },
  {
    value: "confirm",
    label: "Confirmation",
    disabled: true,
  },
]

const VIEWS = [
  { value: "list",  label: "List",  icon: <LayoutList /> },
  { value: "board", label: "Board", icon: <LayoutGrid /> },
  { value: "gantt", label: "Gantt", icon: <GanttChart /> },
]

const VIEWS_PLAIN = [
  { value: "list",  label: "List"  },
  { value: "board", label: "Board" },
  { value: "gantt", label: "Gantt" },
]

const FILTERS = [
  { value: "all",      label: "All"      },
  { value: "active",   label: "Active"   },
  { value: "closed",   label: "Closed"   },
]

const FILTERS_ICON = [
  { value: "all",      label: "All",      icon: <SlidersHorizontal /> },
  { value: "active",   label: "Active",   icon: <Circle /> },
  { value: "closed",   label: "Closed",   icon: <CheckCircle2 /> },
]

const PERIODS = [
  { value: "day",   label: "Day"   },
  { value: "week",  label: "Week"  },
  { value: "month", label: "Month" },
  { value: "year",  label: "Year"  },
]

const TABS_BADGE = [
  { value: "open",     label: "Open",   badge: 12 },
  { value: "in-review",label: "Review", badge: 4  },
  { value: "done",     label: "Done",   badge: 31 },
]

const TABS_PARTIAL = [
  { value: "read",  label: "Read"  },
  { value: "edit",  label: "Edit"  },
  { value: "admin", label: "Admin", disabled: true },
]

const STEPS_ICON = [
  { value: "info",    label: "Company Info",   icon: <Building2 />      },
  { value: "certs",   label: "Certifications", icon: <Award />          },
  { value: "confirm", label: "Confirmation",   icon: <ClipboardCheck /> },
]

// ─── PillTabsPage ─────────────────────────────────────────────────────────────

export default function PillTabsPage() {
  // Standard demos
  const [wf,       setWf]       = useState("general")
  const [stdSm,    setStdSm]    = useState("list")
  const [stdMd,    setStdMd]    = useState("list")
  const [stdLg,    setStdLg]    = useState("list")
  const [stdIcon,  setStdIcon]  = useState("list")
  const [stdBadge, setStdBadge] = useState("open")
  const [stdFull,  setStdFull]  = useState("list")
  const [stdDis,   setStdDis]   = useState("read")
  const [stdGDis,  setStdGDis]  = useState("list")

  // Pill demos
  const [pillSm,   setPillSm]   = useState("all")
  const [pillMd,   setPillMd]   = useState("all")
  const [pillLg,   setPillLg]   = useState("all")
  const [pillIcon, setPillIcon] = useState("all")
  const [pillPer,  setPillPer]  = useState("week")
  const [pillFull, setPillFull] = useState("all")
  const [pillStep, setPillStep] = useState("info")
  const [pillDis,  setPillDis]  = useState("all")

  return (
    <ComponentLayout
      name="Pill Tabs"
      description="A horizontal tab bar where the active tab fills with the primary color (like a filled Button) and inactive tabs sit outlined. Two shape variants: Standard (radius scales with button sizes) and Pill (fully rounded). Supports icons, badge counts, and per-tab disabled state."
      category="Forms"
      status="new"
      tags={["Accessible", "WCAG 2.2", "Segmented Control"]}
    >
      <InfoGrid items={[
        { label: "Shapes",  value: "2 (standard · pill)"    },
        { label: "Sizes",   value: "3 (sm · default · lg)"  },
        { label: "States",  value: "5"                      },
        { label: "WCAG",    value: "AA 2.2"                 },
      ]} />

      {/* Component API */}
      <Section title="Component API">
        <div className="rounded-xl border border-border overflow-hidden text-sm">
          <div className="bg-neutral-50 dark:bg-neutral-900 px-5 py-3 border-b border-border font-mono text-xs text-muted-foreground">
            {"import { PillTabs } from \"@/components/ui/pill-tabs\""}
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-24 shrink-0 font-mono text-xs text-primary">tabs</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">PillTabItem[]</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">required</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Tab descriptors — value, label, icon, badge, disabled.</p>
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-24 shrink-0 font-mono text-xs text-primary">value</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">string</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">required</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Currently selected tab value (controlled).</p>
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-24 shrink-0 font-mono text-xs text-primary">onChange</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">(value: string) =&gt; void</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">required</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Fired when a tab is selected.</p>
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-24 shrink-0 font-mono text-xs text-primary">shape</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">"standard" | "pill"</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">"standard"</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Standard = radius scales with size. Pill = rounded-full.</p>
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-24 shrink-0 font-mono text-xs text-primary">size</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">"sm" | "default" | "lg"</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">"default"</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Controls tab height, padding, and font size.</p>
          </div>
          <div className="flex gap-4 px-5 py-3">
            <code className="w-24 shrink-0 font-mono text-xs text-primary">fullWidth</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">boolean</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">false</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Stretch tabs to fill the container width equally.</p>
          </div>
        </div>
      </Section>

      {/* Overview */}
      <Section title="Overview">
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            Pill Tabs follow the <strong className="text-foreground">WAI-ARIA Tabs pattern</strong> with a button-native visual model.
            The active tab renders as a <em>filled Button</em>; inactive tabs render as <em>outline Buttons</em>.
            This makes them feel like a natural extension of the button system rather than a separate component.
          </p>

          {/* Visual model callout */}
          <div className="rounded-xl border border-border bg-neutral-50 dark:bg-neutral-900 p-5">
            <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">Visual model</p>
            <div className="flex flex-wrap gap-3 items-center">
              <span className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground shadow-elevation-1">
                <CheckCircle2 className="h-4 w-4" />
                Active tab
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-1.5 text-sm font-medium text-muted-foreground">
                <Clock className="h-4 w-4 text-warning" />
                Inactive tab
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-1.5 text-sm font-medium opacity-40 pointer-events-none">
                Disabled tab
              </span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-success/20 bg-success/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When to Use</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Workflow step indicators with status icons</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />View switchers (List / Board / Gantt)</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Status filters with badge counts</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Mode selection (Edit / Preview / Split)</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Period selectors (Day / Week / Month / Year)</li>
              </ul>
            </div>
            <div className="rounded-xl border border-warning/20 bg-warning/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When NOT to Use</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />More than 5–6 tabs — use a Select or Dropdown</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Multi-select — use Checkboxes instead</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Full page navigation — use Sidebar or route Tabs</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Labels longer than 3–4 words — they overflow on mobile</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <hr className="border-border" />

      {/* ── Version 1: Standard Pill Tabs ───────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Version 1 — Standard</h3>
            <p className="text-sm text-muted-foreground">
              Border radius scales with the button size tokens —
              <code className="font-mono"> rounded-sm</code> (sm) ·
              <code className="font-mono"> rounded-md</code> (default) ·
              <code className="font-mono"> rounded-lg</code> (lg).
              Feels like a natural extension of the filled + outline button pair.
            </p>
          </div>
        </div>

        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">

              {/* Reference reproduction */}
              <div className="px-4 py-5">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Workflow steps with status icons</p>
                <div className="overflow-x-auto">
                  <PillTabs
                    tabs={WORKFLOW_TABS}
                    value={wf}
                    onChange={setWf}
                    shape="standard"
                    aria-label="Registration workflow"
                  />
                </div>
                <p className="mt-2 text-[11px] text-muted-foreground">Active = filled primary · Pending = outlined with amber clock · Locked = disabled</p>
              </div>

              {/* Sizes */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Small (rounded-sm · 4 px)</p>
                <PillTabs tabs={VIEWS_PLAIN} value={stdSm} onChange={setStdSm} shape="standard" size="sm" aria-label="View — small" />
              </div>

              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Medium — default (rounded-md · 8 px)</p>
                <PillTabs tabs={VIEWS_PLAIN} value={stdMd} onChange={setStdMd} shape="standard" aria-label="View — medium" />
              </div>

              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Large (rounded-lg · 12 px)</p>
                <PillTabs tabs={VIEWS_PLAIN} value={stdLg} onChange={setStdLg} shape="standard" size="lg" aria-label="View — large" />
              </div>

              {/* With icons */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">With prefix icons</p>
                <PillTabs tabs={VIEWS} value={stdIcon} onChange={setStdIcon} shape="standard" aria-label="View with icons" />
              </div>

              {/* Badge counts */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">With badge counts</p>
                <PillTabs tabs={TABS_BADGE} value={stdBadge} onChange={setStdBadge} shape="standard" aria-label="Queue status" />
              </div>

              {/* Full width */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Full width</p>
                <PillTabs tabs={VIEWS_PLAIN} value={stdFull} onChange={setStdFull} shape="standard" fullWidth aria-label="View — full width" />
              </div>

              {/* Disabled tab */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Individual disabled tab</p>
                <PillTabs tabs={TABS_PARTIAL} value={stdDis} onChange={setStdDis} shape="standard" aria-label="Permissions" />
              </div>

              {/* Group disabled */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Entire group disabled</p>
                <PillTabs tabs={VIEWS_PLAIN} value={stdGDis} onChange={setStdGDis} shape="standard" disabled aria-label="View — disabled" />
              </div>

            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[
                { label: "Component", language: "tsx", code: standardCode },
                { label: "Tailwind",  language: "tsx", code: tailwindCode },
              ]} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Version 2: Pill Tabs ────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Version 2 — Fully Rounded Pill</h3>
            <p className="text-sm text-muted-foreground">
              Container tabs and active indicator both use
              <code className="font-mono"> rounded-full</code> on every size.
              A modern, capsule-style segmented control for filters, status selectors, and period pickers.
            </p>
          </div>
        </div>

        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">

              {/* Sizes */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Small</p>
                <PillTabs tabs={FILTERS} value={pillSm} onChange={setPillSm} shape="pill" size="sm" aria-label="Filter — small" />
              </div>

              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Medium — default</p>
                <PillTabs tabs={FILTERS} value={pillMd} onChange={setPillMd} shape="pill" aria-label="Filter — medium" />
              </div>

              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Large</p>
                <PillTabs tabs={FILTERS} value={pillLg} onChange={setPillLg} shape="pill" size="lg" aria-label="Filter — large" />
              </div>

              {/* With icons */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">With prefix icons</p>
                <PillTabs tabs={FILTERS_ICON} value={pillIcon} onChange={setPillIcon} shape="pill" aria-label="Filter with icons" />
              </div>

              {/* Period selector */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Period selector (4 tabs)</p>
                <PillTabs tabs={PERIODS} value={pillPer} onChange={setPillPer} shape="pill" aria-label="Date range" />
              </div>

              {/* Full width */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Full width — segmented control</p>
                <PillTabs tabs={FILTERS} value={pillFull} onChange={setPillFull} shape="pill" fullWidth aria-label="Filter — full width" />
              </div>

              {/* With icons steps */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Workflow steps — pill</p>
                <PillTabs tabs={STEPS_ICON} value={pillStep} onChange={setPillStep} shape="pill" aria-label="Steps" />
              </div>

              {/* Disabled */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Group disabled</p>
                <PillTabs tabs={FILTERS} value={pillDis} onChange={setPillDis} shape="pill" disabled aria-label="Filter — disabled" />
              </div>

            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[
                { label: "Component", language: "tsx", code: pillCode },
                { label: "Tailwind",  language: "tsx", code: tailwindCode },
              ]} />
            </div>
          </div>
        </div>
      </div>

      {/* Shape comparison */}
      <Section title="Shape Comparison">
        <div className="rounded-xl border border-border overflow-hidden text-sm">
          <div className="grid grid-cols-3 border-b border-border bg-neutral-50 dark:bg-neutral-900 px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            <span>Attribute</span>
            <span>Standard</span>
            <span>Pill (Fully Rounded)</span>
          </div>
          {[
            { attr: "Tab radius (sm)",      std: "rounded-sm — 4px",     pill: "rounded-full" },
            { attr: "Tab radius (default)", std: "rounded-md — 8px",     pill: "rounded-full" },
            { attr: "Tab radius (lg)",      std: "rounded-lg — 12px",    pill: "rounded-full" },
            { attr: "Active state",         std: "bg-primary, white text, shadow-elevation-1", pill: "Same" },
            { attr: "Inactive state",       std: "border-border, transparent bg, muted text",  pill: "Same" },
            { attr: "Best for",             std: "Workflow steps, view switchers, toolbars",  pill: "Filters, period pickers, mode toggles" },
          ].map(({ attr, std, pill }) => (
            <div key={attr} className="grid grid-cols-3 border-b border-border last:border-0 px-5 py-3 gap-4">
              <code className="font-mono text-xs text-foreground">{attr}</code>
              <p className="text-muted-foreground text-xs leading-relaxed">{std}</p>
              <p className="text-muted-foreground text-xs leading-relaxed">{pill}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* States */}
      <Section title="States Reference">
        <div className="rounded-xl border border-border overflow-hidden text-sm">
          {[
            { state: "Default (active)",   desc: "bg-primary text-primary-foreground shadow-elevation-1 — identical to a filled Button." },
            { state: "Default (inactive)", desc: "bg-background border border-border text-muted-foreground — identical to an outline Button." },
            { state: "Hover (inactive)",   desc: "border-neutral-400 text-foreground — border darkens, text becomes full opacity." },
            { state: "Focus",             desc: "2px ring (ring-ring token) + 2px offset on the focused tab. Only the active tab is in the natural Tab order; others are reachable via arrow keys (roving tabindex)." },
            { state: "Disabled (tab)",    desc: "opacity-40 pointer-events-none aria-disabled. Skipped during arrow-key navigation." },
            { state: "Disabled (group)",  desc: "pointer-events-none opacity-50 on the container — entire group is inert." },
          ].map(({ state, desc }) => (
            <div key={state} className="flex gap-4 border-b border-border last:border-0 px-5 py-3">
              <p className="w-40 shrink-0 font-medium text-foreground text-xs leading-relaxed pt-0.5">{state}</p>
              <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Do's and Don'ts */}
      <Section title="Do's and Don'ts">
        <DosDonts
          dos={[
            { text: "Always provide aria-label on the tablist — screen readers announce it before the individual tab names." },
            { text: "Use icons to convey status (e.g. a clock for pending, a check for complete) — they help at a glance." },
            { text: "Keep labels short (1–3 words). Icons reduce the need for text in tight spaces." },
            { text: "Use fullWidth in card headers or narrow panels so tabs use available space evenly." },
            { text: "Choose Standard for toolbars and workflow steps; Pill for filters and mode toggles." },
          ]}
          donts={[
            { text: "Don't use colour alone to indicate tab status — always pair with an icon or label." },
            { text: "Don't disable the currently active tab — always keep the selected state accessible." },
            { text: "Don't exceed 5–6 tabs — use a Select or Dropdown Menu for longer option lists." },
            { text: "Don't use Pill Tabs for page-level navigation — use route-based Tabs or a Sidebar." },
          ]}
        />
      </Section>

      {/* Keyboard */}
      <Section title="Keyboard & Accessibility">
        <KeyboardTable rows={[
          { keys: ["Tab"],                          action: "Enter the group (focuses active tab) or exit it to the next focusable element" },
          { keys: ["Arrow Right", "Arrow Down"],    action: "Move focus and selection to the next enabled tab (wraps around)" },
          { keys: ["Arrow Left",  "Arrow Up"],      action: "Move focus and selection to the previous enabled tab (wraps around)" },
          { keys: ["Home"],                         action: "Move focus and selection to the first enabled tab" },
          { keys: ["End"],                          action: "Move focus and selection to the last enabled tab" },
        ]} />
        <div className="mt-4 rounded-xl border border-border p-5 space-y-3 text-sm">
          <p className="font-semibold text-foreground">ARIA notes</p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-2"><code className="shrink-0 font-mono text-primary">role="tablist"</code><span>On the container div. Requires <code className="font-mono">aria-label</code> for an accessible name.</span></li>
            <li className="flex gap-2"><code className="shrink-0 font-mono text-primary">role="tab"</code><span>On each button element.</span></li>
            <li className="flex gap-2"><code className="shrink-0 font-mono text-primary">aria-selected</code><span><code className="font-mono">true</code> on the active tab, <code className="font-mono">false</code> on all others.</span></li>
            <li className="flex gap-2"><code className="shrink-0 font-mono text-primary">aria-disabled</code><span>Set on individually disabled tab buttons.</span></li>
            <li className="flex gap-2"><code className="shrink-0 font-mono text-primary">tabIndex</code><span>Roving tabindex: active tab has <code className="font-mono">tabIndex=0</code>; all others have <code className="font-mono">tabIndex=-1</code>. Only one stop in the Tab order.</span></li>
          </ul>
        </div>
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable props={[
          { name: "tabs",        type: "PillTabItem[]",              required: true,  description: "Tab descriptors — see PillTabItem below." },
          { name: "value",       type: "string",                    required: true,  description: "Currently selected tab value (controlled)." },
          { name: "onChange",    type: "(value: string) => void",   required: true,  description: "Callback fired when a tab is selected." },
          { name: "shape",       type: '"standard" | "pill"',       default: '"standard"', description: "Standard = radius scales with size. Pill = rounded-full on all sizes." },
          { name: "size",        type: '"sm" | "default" | "lg"',   default: '"default"',  description: "Controls tab height, padding, and font size (mirrors button sizes)." },
          { name: "fullWidth",   type: "boolean",                   default: "false",       description: "Stretch tabs to fill the container width equally." },
          { name: "disabled",    type: "boolean",                   default: "false",       description: "Disables the entire tab group." },
          { name: "aria-label",  type: "string",                    default: "—",           description: "Accessible name for the tablist. Required for screen readers." },
          { name: "className",   type: "string",                    default: "—",           description: "Additional Tailwind classes on the scroll wrapper." },
        ]} />
        <div className="mt-4 rounded-xl border border-border p-5 text-sm">
          <p className="font-semibold text-foreground mb-2">PillTabItem</p>
          <pre className="font-mono text-xs text-muted-foreground leading-relaxed bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4 overflow-x-auto">{`interface PillTabItem {
  value:     string          // unique key
  label:     string          // display text
  icon?:     React.ReactNode // prefix icon — pass with colour class, e.g. <Clock className="text-warning" />
  badge?:    string | number // count pill shown after label, e.g. badge={8}
  disabled?: boolean         // disable this specific tab
}`}</pre>
        </div>
      </Section>
    </ComponentLayout>
  )
}
