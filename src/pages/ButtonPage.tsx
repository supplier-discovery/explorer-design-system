import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { ComponentLayout, InfoGrid } from "@/components/portal/ComponentLayout"
import { Section, DosDonts, PropsTable, KeyboardTable } from "@/components/portal/Section"
import { CodeTabs } from "@/components/portal/CodeBlock"
import type { CodeTab } from "@/components/portal/CodeBlock"

// ─── Types ────────────────────────────────────────────────────────────────────

type ColorVariant = "primary" | "success" | "secondary" | "warning" | "danger" | "neutral"
type GroupStyle   = "filled" | "light" | "outline" | "ghost" | "link" | "rounded" | "pill" | "icon"
type BtnSize      = "sm" | "md" | "lg"

// ─── Color class maps ─────────────────────────────────────────────────────────

const filledColors: Record<ColorVariant, string> = {
  primary:   "bg-primary text-white hover:bg-primary/90 shadow-elevation-1",
  success:   "bg-success text-white hover:bg-success/90 shadow-elevation-1",
  secondary: "bg-secondary text-white hover:bg-secondary/90 shadow-elevation-1",
  warning:   "bg-warning text-white hover:bg-warning/90 shadow-elevation-1",
  danger:    "bg-error text-white hover:bg-error/90 shadow-elevation-1",
  neutral:   "bg-neutral-500 text-white hover:bg-neutral-600 shadow-elevation-1",
}

const lightColors: Record<ColorVariant, string> = {
  primary:   "bg-primary/10 text-primary hover:bg-primary/20",
  success:   "bg-success/10 text-success hover:bg-success/20",
  secondary: "bg-secondary/10 text-secondary hover:bg-secondary/20",
  warning:   "bg-warning/10 text-warning hover:bg-warning/20",
  danger:    "bg-error/10 text-error hover:bg-error/20",
  neutral:   "bg-neutral-200 text-neutral-700 hover:bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-600",
}

const outlineColors: Record<ColorVariant, string> = {
  primary:   "border border-primary text-primary bg-transparent hover:bg-primary/10",
  success:   "border border-success text-success bg-transparent hover:bg-success/10",
  secondary: "border border-secondary text-secondary bg-transparent hover:bg-secondary/10",
  warning:   "border border-warning text-warning bg-transparent hover:bg-warning/10",
  danger:    "border border-error text-error bg-transparent hover:bg-error/10",
  neutral:   "border border-neutral-400 text-neutral-600 bg-transparent hover:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-400 dark:hover:bg-neutral-800",
}

const ghostColors: Record<ColorVariant, string> = {
  primary:   "text-primary hover:bg-primary/10",
  success:   "text-success hover:bg-success/10",
  secondary: "text-secondary hover:bg-secondary/10",
  warning:   "text-warning hover:bg-warning/10",
  danger:    "text-error hover:bg-error/10",
  neutral:   "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800",
}

const linkColors: Record<ColorVariant, string> = {
  primary:   "text-primary underline-offset-4 hover:underline",
  success:   "text-success underline-offset-4 hover:underline",
  secondary: "text-secondary underline-offset-4 hover:underline",
  warning:   "text-warning underline-offset-4 hover:underline",
  danger:    "text-error underline-offset-4 hover:underline",
  neutral:   "text-neutral-600 underline-offset-4 hover:underline dark:text-neutral-400",
}

function getColorClasses(groupStyle: GroupStyle, colorVariant: ColorVariant): string {
  switch (groupStyle) {
    case "filled":
    case "rounded":
    case "pill":
    case "icon":    return filledColors[colorVariant]
    case "light":   return lightColors[colorVariant]
    case "outline": return outlineColors[colorVariant]
    case "ghost":   return ghostColors[colorVariant]
    case "link":    return linkColors[colorVariant]
  }
}

// ─── Size & shape class maps ──────────────────────────────────────────────────

const textSizeClasses: Record<BtnSize, string> = {
  sm: "h-8 px-3 text-xs gap-1.5",
  md: "h-9 px-4 text-sm gap-2",
  lg: "h-11 px-5 text-base gap-2",
}

const iconSizeClasses: Record<BtnSize, string> = {
  sm: "h-8 w-8",
  md: "h-9 w-9",
  lg: "h-11 w-11",
}

const linkSizeClasses: Record<BtnSize, string> = {
  sm: "text-xs px-1 py-1",
  md: "text-sm px-1 py-1.5",
  lg: "text-base px-1 py-2",
}

const shapeClasses: Record<GroupStyle, Record<BtnSize, string>> = {
  filled:  { sm: "rounded-md",   md: "rounded-lg",   lg: "rounded-lg"   },
  light:   { sm: "rounded-md",   md: "rounded-lg",   lg: "rounded-lg"   },
  outline: { sm: "rounded-md",   md: "rounded-lg",   lg: "rounded-lg"   },
  ghost:   { sm: "rounded-md",   md: "rounded-lg",   lg: "rounded-lg"   },
  link:    { sm: "",             md: "",             lg: ""             },
  rounded: { sm: "rounded-xl",   md: "rounded-2xl",  lg: "rounded-2xl"  },
  pill:    { sm: "rounded-full", md: "rounded-full", lg: "rounded-full" },
  icon:    { sm: "rounded-md",   md: "rounded-lg",   lg: "rounded-lg"   },
}

// ─── Btn component ────────────────────────────────────────────────────────────

interface BtnProps {
  groupStyle?: GroupStyle
  colorVariant?: ColorVariant
  size?: BtnSize
  label?: string
  className?: string
}

function Btn({ groupStyle = "filled", colorVariant = "primary", size = "md", label = "Button", className }: BtnProps) {
  const isIcon   = groupStyle === "icon"
  const isLink   = groupStyle === "link"
  const colorCls = getColorClasses(groupStyle, colorVariant)
  const shapeCls = shapeClasses[groupStyle][size]
  const sizeCls  = isIcon ? iconSizeClasses[size] : isLink ? linkSizeClasses[size] : textSizeClasses[size]

  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center font-medium transition-all select-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        sizeCls,
        shapeCls,
        colorCls,
        className
      )}
    >
      {isIcon ? <Plus className="h-4 w-4" /> : label}
    </button>
  )
}

// ─── Code tabs per group (React · Tailwind · HTML) ───────────────────────────

const GROUP_TABS: Record<GroupStyle, CodeTab[]> = {
  filled: [
    {
      label: "React",
      language: "tsx",
      code: `import { Button } from "@/components/ui/button"

// All 6 color variants — medium size (default)
<Button colorVariant="primary">Primary</Button>
<Button colorVariant="success">Success</Button>
<Button colorVariant="secondary">Secondary</Button>
<Button colorVariant="warning">Warning</Button>
<Button colorVariant="danger">Danger</Button>
<Button colorVariant="neutral">Neutral</Button>

// Sizes
<Button colorVariant="primary" size="sm">Small</Button>
<Button colorVariant="primary" size="md">Medium</Button>
<Button colorVariant="primary" size="lg">Large</Button>`,
    },
    {
      label: "Tailwind",
      language: "tsx",
      code: `// Sizes
// sm → h-8 px-3 text-xs rounded-md
// md → h-9 px-4 text-sm rounded-lg   (default)
// lg → h-11 px-5 text-base rounded-lg

// Primary — medium
<button className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium
  rounded-lg bg-primary text-white hover:bg-primary/90 shadow-elevation-1 transition-all
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40">
  Primary
</button>

// Swap bg-* to change color variant (keep text-white):
// bg-success   bg-secondary   bg-warning   bg-error   bg-neutral-500`,
    },
    {
      label: "HTML",
      language: "html",
      code: `<!-- Filled — Primary, medium -->
<button type="button"
  class="inline-flex items-center justify-center h-9 px-4 text-sm font-medium
         rounded-lg bg-[#02332E] text-white shadow-md transition-all
         hover:opacity-90
         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
         disabled:opacity-40 disabled:pointer-events-none">
  Primary
</button>

<!-- Small: h-8 px-3 text-xs rounded-md -->
<!-- Large: h-11 px-5 text-base rounded-lg -->`,
    },
  ],

  light: [
    {
      label: "React",
      language: "tsx",
      code: `import { Button } from "@/components/ui/button"

// Light / Tonal — subtle tinted background
<Button variant="light" colorVariant="primary">Primary</Button>
<Button variant="light" colorVariant="success">Success</Button>
<Button variant="light" colorVariant="secondary">Secondary</Button>
<Button variant="light" colorVariant="warning">Warning</Button>
<Button variant="light" colorVariant="danger">Danger</Button>
<Button variant="light" colorVariant="neutral">Neutral</Button>

// Sizes
<Button variant="light" colorVariant="primary" size="sm">Small</Button>
<Button variant="light" colorVariant="primary" size="md">Medium</Button>
<Button variant="light" colorVariant="primary" size="lg">Large</Button>`,
    },
    {
      label: "Tailwind",
      language: "tsx",
      code: `// Light / Tonal — bg at 10% opacity with matching text color

// Primary — medium
<button className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium
  rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40">
  Primary
</button>

// Color variants — swap both bg-* and text-*:
// bg-success/10   text-success   hover:bg-success/20
// bg-secondary/10 text-secondary hover:bg-secondary/20
// bg-warning/10   text-warning   hover:bg-warning/20
// bg-error/10     text-error     hover:bg-error/20
// bg-neutral-200  text-neutral-700 hover:bg-neutral-300
//   dark:bg-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-600`,
    },
    {
      label: "HTML",
      language: "html",
      code: `<!-- Light — Primary, medium -->
<button type="button"
  class="inline-flex items-center justify-center h-9 px-4 text-sm font-medium
         rounded-lg bg-[rgba(2,51,46,0.1)] text-[#02332E] transition-all
         hover:bg-[rgba(2,51,46,0.2)]
         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
         disabled:opacity-40 disabled:pointer-events-none">
  Primary
</button>

<!-- Neutral variant -->
<button type="button"
  class="... bg-neutral-200 text-neutral-700 hover:bg-neutral-300 ...">
  Neutral
</button>`,
    },
  ],

  outline: [
    {
      label: "React",
      language: "tsx",
      code: `import { Button } from "@/components/ui/button"

// Outline — transparent bg with colored border
<Button variant="outline" colorVariant="primary">Primary</Button>
<Button variant="outline" colorVariant="success">Success</Button>
<Button variant="outline" colorVariant="secondary">Secondary</Button>
<Button variant="outline" colorVariant="warning">Warning</Button>
<Button variant="outline" colorVariant="danger">Danger</Button>
<Button variant="outline" colorVariant="neutral">Neutral</Button>

// Sizes
<Button variant="outline" colorVariant="primary" size="sm">Small</Button>
<Button variant="outline" colorVariant="primary" size="md">Medium</Button>
<Button variant="outline" colorVariant="primary" size="lg">Large</Button>`,
    },
    {
      label: "Tailwind",
      language: "tsx",
      code: `// Outline — transparent background, colored border

// Primary — medium
<button className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium
  rounded-lg border border-primary text-primary bg-transparent hover:bg-primary/10
  transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40">
  Primary
</button>

// Color variants — swap border-* and text-*:
// border-success   text-success   hover:bg-success/10
// border-secondary text-secondary hover:bg-secondary/10
// border-warning   text-warning   hover:bg-warning/10
// border-error     text-error     hover:bg-error/10
// border-neutral-400 text-neutral-600 hover:bg-neutral-100
//   dark:border-neutral-600 dark:text-neutral-400`,
    },
    {
      label: "HTML",
      language: "html",
      code: `<!-- Outline — Primary, medium -->
<button type="button"
  class="inline-flex items-center justify-center h-9 px-4 text-sm font-medium
         rounded-lg border border-[#02332E] text-[#02332E] bg-transparent transition-all
         hover:bg-[rgba(2,51,46,0.1)]
         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
         disabled:opacity-40 disabled:pointer-events-none">
  Primary
</button>

<!-- Neutral variant -->
<button type="button"
  class="... border-neutral-400 text-neutral-600 hover:bg-neutral-100 ...">
  Neutral
</button>`,
    },
  ],

  ghost: [
    {
      label: "React",
      language: "tsx",
      code: `import { Button } from "@/components/ui/button"

// Ghost — no border or background, minimal weight
<Button variant="ghost" colorVariant="primary">Primary</Button>
<Button variant="ghost" colorVariant="success">Success</Button>
<Button variant="ghost" colorVariant="secondary">Secondary</Button>
<Button variant="ghost" colorVariant="warning">Warning</Button>
<Button variant="ghost" colorVariant="danger">Danger</Button>
<Button variant="ghost" colorVariant="neutral">Neutral</Button>

// Sizes
<Button variant="ghost" colorVariant="primary" size="sm">Small</Button>
<Button variant="ghost" colorVariant="primary" size="md">Medium</Button>
<Button variant="ghost" colorVariant="primary" size="lg">Large</Button>`,
    },
    {
      label: "Tailwind",
      language: "tsx",
      code: `// Ghost — no background or border; hover reveals tinted bg

// Primary — medium
<button className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium
  rounded-lg text-primary hover:bg-primary/10 transition-all
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40">
  Primary
</button>

// Color variants — swap text-* and hover:bg-*:
// text-success   hover:bg-success/10
// text-secondary hover:bg-secondary/10
// text-warning   hover:bg-warning/10
// text-error     hover:bg-error/10
// text-neutral-600 hover:bg-neutral-100
//   dark:text-neutral-400 dark:hover:bg-neutral-800`,
    },
    {
      label: "HTML",
      language: "html",
      code: `<!-- Ghost — Primary, medium -->
<button type="button"
  class="inline-flex items-center justify-center h-9 px-4 text-sm font-medium
         rounded-lg text-[#02332E] bg-transparent transition-all
         hover:bg-[rgba(2,51,46,0.1)]
         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
         disabled:opacity-40 disabled:pointer-events-none">
  Primary
</button>

<!-- Neutral variant (dark-mode aware) -->
<button type="button"
  class="... text-neutral-600 hover:bg-neutral-100
         dark:text-neutral-400 dark:hover:bg-neutral-800 ...">
  Neutral
</button>`,
    },
  ],

  link: [
    {
      label: "React",
      language: "tsx",
      code: `import { Button } from "@/components/ui/button"

// Link — plain text, underline on hover
<Button variant="link" colorVariant="primary">Primary</Button>
<Button variant="link" colorVariant="success">Success</Button>
<Button variant="link" colorVariant="secondary">Secondary</Button>
<Button variant="link" colorVariant="warning">Warning</Button>
<Button variant="link" colorVariant="danger">Danger</Button>
<Button variant="link" colorVariant="neutral">Neutral</Button>

// Sizes (font-size only — no fixed height)
<Button variant="link" colorVariant="primary" size="sm">Small</Button>
<Button variant="link" colorVariant="primary" size="md">Medium</Button>
<Button variant="link" colorVariant="primary" size="lg">Large</Button>`,
    },
    {
      label: "Tailwind",
      language: "tsx",
      code: `// Link — no background, no border; pure text with hover underline
// Sizes: text-xs (sm) | text-sm (md) | text-base (lg)

// Primary — medium
<button className="inline-flex items-center justify-center text-sm font-medium
  text-primary underline-offset-4 hover:underline transition-all
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40">
  Primary
</button>

// Color variants — swap text-*:
// text-success | text-secondary | text-warning
// text-error   | text-neutral-600 dark:text-neutral-400`,
    },
    {
      label: "HTML",
      language: "html",
      code: `<!-- Link — Primary, medium -->
<button type="button"
  class="inline-flex items-center text-sm font-medium
         text-[#02332E] underline-offset-4 transition-all
         hover:underline
         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
         disabled:opacity-40 disabled:pointer-events-none">
  Primary
</button>

<!-- Small: text-xs -->
<!-- Large: text-base -->`,
    },
  ],

  rounded: [
    {
      label: "React",
      language: "tsx",
      code: `import { Button } from "@/components/ui/button"

// Rounded — filled style with extra border radius
<Button variant="rounded" colorVariant="primary">Primary</Button>
<Button variant="rounded" colorVariant="success">Success</Button>
<Button variant="rounded" colorVariant="secondary">Secondary</Button>
<Button variant="rounded" colorVariant="warning">Warning</Button>
<Button variant="rounded" colorVariant="danger">Danger</Button>
<Button variant="rounded" colorVariant="neutral">Neutral</Button>

// Sizes
<Button variant="rounded" colorVariant="primary" size="sm">Small</Button>
<Button variant="rounded" colorVariant="primary" size="md">Medium</Button>
<Button variant="rounded" colorVariant="primary" size="lg">Large</Button>`,
    },
    {
      label: "Tailwind",
      language: "tsx",
      code: `// Rounded — same as Filled but larger border radius
// sm → rounded-xl  |  md, lg → rounded-2xl

// Primary — medium
<button className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium
  rounded-2xl bg-primary text-white hover:bg-primary/90 shadow-elevation-1 transition-all
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40">
  Primary
</button>

// Small → rounded-xl
<button className="... h-8 px-3 text-xs rounded-xl ...">Primary</button>

// Color variants same as Filled — swap bg-*:
// bg-success | bg-secondary | bg-warning | bg-error | bg-neutral-500`,
    },
    {
      label: "HTML",
      language: "html",
      code: `<!-- Rounded — Primary, medium (rounded-2xl ≈ 1rem) -->
<button type="button"
  class="inline-flex items-center justify-center h-9 px-4 text-sm font-medium
         rounded-[1rem] bg-[#02332E] text-white shadow-md transition-all
         hover:opacity-90
         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
         disabled:opacity-40 disabled:pointer-events-none">
  Primary
</button>

<!-- Small → border-radius: 0.75rem (rounded-xl) -->
<button type="button" class="... h-8 px-3 text-xs rounded-[0.75rem] ...">Small</button>`,
    },
  ],

  pill: [
    {
      label: "React",
      language: "tsx",
      code: `import { Button } from "@/components/ui/button"

// Pill — fully rounded on all sizes
<Button variant="pill" colorVariant="primary">Primary</Button>
<Button variant="pill" colorVariant="success">Success</Button>
<Button variant="pill" colorVariant="secondary">Secondary</Button>
<Button variant="pill" colorVariant="warning">Warning</Button>
<Button variant="pill" colorVariant="danger">Danger</Button>
<Button variant="pill" colorVariant="neutral">Neutral</Button>

// Sizes
<Button variant="pill" colorVariant="primary" size="sm">Small</Button>
<Button variant="pill" colorVariant="primary" size="md">Medium</Button>
<Button variant="pill" colorVariant="primary" size="lg">Large</Button>`,
    },
    {
      label: "Tailwind",
      language: "tsx",
      code: `// Pill — rounded-full on all sizes

// Small
<button className="inline-flex items-center justify-center h-8 px-3 text-xs font-medium
  rounded-full bg-primary text-white hover:bg-primary/90 shadow-elevation-1 transition-all
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40">
  Primary
</button>

// Medium
<button className="... h-9 px-4 text-sm rounded-full ...">Primary</button>

// Large
<button className="... h-11 px-5 text-base rounded-full ...">Primary</button>

// Color variants same as Filled — swap bg-*:
// bg-success | bg-secondary | bg-warning | bg-error | bg-neutral-500`,
    },
    {
      label: "HTML",
      language: "html",
      code: `<!-- Pill — Primary, medium -->
<button type="button"
  class="inline-flex items-center justify-center h-9 px-4 text-sm font-medium
         rounded-full bg-[#02332E] text-white shadow-md transition-all
         hover:opacity-90
         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
         disabled:opacity-40 disabled:pointer-events-none">
  Primary
</button>

<!-- All sizes use rounded-full: -->
<!-- Small:  h-8 px-3 text-xs  rounded-full -->
<!-- Medium: h-9 px-4 text-sm  rounded-full -->
<!-- Large:  h-11 px-5 text-base rounded-full -->`,
    },
  ],

  icon: [
    {
      label: "React",
      language: "tsx",
      code: `import { Button } from "@/components/ui/button"
import { Plus, Trash2, Search } from "lucide-react"

// Icon — always include aria-label
<Button variant="icon" colorVariant="primary" aria-label="Add item">
  <Plus className="h-4 w-4" />
</Button>
<Button variant="icon" colorVariant="success" aria-label="Confirm">
  <Plus className="h-4 w-4" />
</Button>
<Button variant="icon" colorVariant="danger" aria-label="Delete">
  <Trash2 className="h-4 w-4" />
</Button>

// Sizes
<Button variant="icon" size="sm" colorVariant="primary" aria-label="Search">
  <Search className="h-3.5 w-3.5" />
</Button>
<Button variant="icon" size="md" colorVariant="primary" aria-label="Search">
  <Search className="h-4 w-4" />
</Button>
<Button variant="icon" size="lg" colorVariant="primary" aria-label="Search">
  <Search className="h-5 w-5" />
</Button>`,
    },
    {
      label: "Tailwind",
      language: "tsx",
      code: `import { Plus } from "lucide-react"

// Icon — square, icon-only
// Sizes: h-8 w-8 rounded-md (sm) | h-9 w-9 rounded-lg (md) | h-11 w-11 rounded-lg (lg)

// Primary — medium
<button
  type="button"
  aria-label="Add item"
  className="inline-flex items-center justify-center h-9 w-9 rounded-lg
    bg-primary text-white hover:bg-primary/90 shadow-elevation-1 transition-all
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
    focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40"
>
  <Plus className="h-4 w-4" />
</button>

// Color variants same as Filled — swap bg-*:
// bg-success | bg-secondary | bg-warning | bg-error | bg-neutral-500`,
    },
    {
      label: "HTML",
      language: "html",
      code: `<!-- Icon — Primary, medium. aria-label is REQUIRED. -->
<button type="button"
  aria-label="Add item"
  class="inline-flex items-center justify-center h-9 w-9 rounded-lg
         bg-[#02332E] text-white shadow-md transition-all
         hover:opacity-90
         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
         disabled:opacity-40 disabled:pointer-events-none">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24"
       fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
    <path d="M12 5v14M5 12h14"/>
  </svg>
</button>

<!-- Sizes: h-8 w-8 (sm) | h-9 w-9 (md) | h-11 w-11 (lg) -->`,
    },
  ],
}

// ─── Group & variant metadata ─────────────────────────────────────────────────

const GROUPS: Array<{ id: GroupStyle; label: string; description: string }> = [
  { id: "filled",  label: "Filled",   description: "Solid background — highest visual emphasis. Use for primary actions." },
  { id: "light",   label: "Light",    description: "Subtle tinted background — medium emphasis. Good for secondary actions." },
  { id: "outline", label: "Outline",  description: "Transparent with colored border — secondary actions alongside a filled button." },
  { id: "ghost",   label: "Ghost",    description: "No background or border — minimal visual weight for low-emphasis actions." },
  { id: "link",    label: "Link",     description: "Plain text with hover underline — lowest visual emphasis." },
  { id: "rounded", label: "Rounded",  description: "Filled style with extra border radius — softer, friendlier appearance." },
  { id: "pill",    label: "Pill",     description: "Fully rounded (rounded-full) — common in tag-like or compact UI contexts." },
  { id: "icon",    label: "Icon",     description: "Square icon-only button — always include an aria-label." },
]

const VARIANTS: ColorVariant[] = ["primary", "success", "secondary", "warning", "danger", "neutral"]
const SIZES: BtnSize[]         = ["sm", "md", "lg"]

const SIZE_LABELS: Record<BtnSize, string> = {
  sm: "Small",
  md: "Medium",
  lg: "Large",
}

const VARIANT_LABELS: Record<ColorVariant, string> = {
  primary:   "Primary",
  success:   "Success",
  secondary: "Secondary",
  warning:   "Warning",
  danger:    "Danger",
  neutral:   "Neutral",
}

// ─── ButtonGroupRow ───────────────────────────────────────────────────────────
// 2-column layout: live buttons on light gray left, code tabs on right.

function ButtonGroupRow({ group }: { group: typeof GROUPS[number] }) {
  return (
    <div className="grid lg:grid-cols-2 gap-6 items-start">

      {/* Left — button previews on light gray background */}
      <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
        {SIZES.map((size) => (
          <div key={size} className="px-4 py-4">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              {SIZE_LABELS[size]}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {VARIANTS.map((cv) => (
                <Btn
                  key={cv}
                  groupStyle={group.id}
                  colorVariant={cv}
                  size={size}
                  label={VARIANT_LABELS[cv]}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Right — code tabs (sticky on desktop) */}
      <div className="sticky top-6">
        <CodeTabs tabs={GROUP_TABS[group.id]} />
      </div>

    </div>
  )
}

// ─── ButtonPage ───────────────────────────────────────────────────────────────

export default function ButtonPage() {
  return (
    <ComponentLayout
      name="Button"
      description="Triggers an action or event when clicked. The most fundamental interactive element in any UI."
      category="Forms"
      status="stable"
      tags={["shadcn/ui", "Radix UI", "Accessible"]}
    >
      <InfoGrid items={[
        { label: "Variants", value: "6"      },
        { label: "Sizes",    value: "3"      },
        { label: "Groups",   value: "8"      },
        { label: "WCAG",     value: "AA 2.2" },
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
                {[
                  "Submitting a form",
                  "Confirming an action in a dialog",
                  "Triggering a primary workflow step",
                  "Opening a modal or drawer",
                  "Inline actions in a table or list",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-warning/20 bg-warning/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When NOT to Use</p>
              <ul className="space-y-1.5">
                {[
                  "Navigating to a different page (use a Link)",
                  "Long labels — keep button text concise",
                  "Too many primary buttons on one screen",
                  "Replacing checkboxes or toggle switches",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Divider */}
      <hr className="border-border" />

      {/* Button Groups — one card per group, consistent header treatment */}
      {GROUPS.map((group) => (
        <div key={group.id} className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
          {/* Card header — full width, warning left border, bottom border */}
          <div className="px-6 py-4 border-b border-border">
            <div className="border-l-4 border-warning pl-4 space-y-1">
              <h3 className="text-base font-semibold text-foreground">{group.label} Buttons</h3>
              <p className="text-sm text-muted-foreground">{group.description}</p>
            </div>
          </div>
          {/* Card body */}
          <div className="p-6">
            <ButtonGroupRow group={group} />
          </div>
        </div>
      ))}

      {/* Do's and Don'ts */}
      <Section title="Do's and Don'ts">
        <DosDonts
          dos={[
            { text: "Use a single filled (primary) button per section — it signals the main action." },
            { text: "Keep labels concise: 1–3 words. 'Save Changes' not 'Click here to save your changes'." },
            { text: "Always provide an aria-label for icon-only buttons." },
            { text: "Use danger variant only for irreversible actions (delete, revoke, cancel subscription)." },
            { text: "Ensure touch targets are at least 44×44px — critical on mobile." },
          ]}
          donts={[
            { text: "Don't use multiple filled buttons side-by-side — secondary action should use outline or ghost." },
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
          { name: "variant",   type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"', default: '"default"', description: "Visual style of the button."                       },
          { name: "size",      type: '"default" | "sm" | "lg" | "icon"',                                        default: '"default"', description: "Controls button height and padding."               },
          { name: "disabled",  type: "boolean",                                                                  default: "false",     description: "Prevents interaction."                            },
          { name: "asChild",   type: "boolean",                                                                  default: "false",     description: "Renders as child element via Radix Slot."         },
          { name: "className", type: "string",                                                                   default: "—",        description: "Additional Tailwind classes."                     },
          { name: "onClick",   type: "() => void",                                                               default: "—",        description: "Click handler."                                  },
          { name: "type",      type: '"button" | "submit" | "reset"',                                            default: '"button"', description: "HTML button type. Always set explicitly in forms." },
        ]} />
      </Section>

      {/* Accessibility */}
      <Section title="Accessibility" description="Built on a native <button> element — fully keyboard and screen-reader accessible.">
        <KeyboardTable rows={[
          { keys: ["Enter", "Space"], action: "Activates the button"            },
          { keys: ["Tab"],           action: "Moves focus to the button"        },
          { keys: ["Shift+Tab"],     action: "Moves focus away from the button" },
        ]} />
        <div className="mt-4 rounded-xl border border-border p-5 space-y-3 text-sm">
          <p className="font-semibold text-foreground">ARIA &amp; Semantic notes</p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-primary font-mono shrink-0">role</span>
              <span>Implicit <code className="font-mono">role="button"</code> on native button. Never use <code className="font-mono">div</code> or <code className="font-mono">span</code> as a button.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-mono shrink-0">aria-label</span>
              <span>Required when the button contains only an icon — describes the action to screen readers.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-mono shrink-0">aria-disabled</span>
              <span>Use instead of <code className="font-mono">disabled</code> when you need the element focusable but not actionable.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-mono shrink-0">aria-busy</span>
              <span>Set to <code className="font-mono">true</code> during loading states to announce progress to assistive technology.</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* Best Practices */}
      <Section title="Best Practices">
        <div className="rounded-xl border border-border p-5">
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            {[
              "Use filled (primary) sparingly — one per view section to clearly communicate the main action.",
              "Hierarchy: Filled > Outline > Light > Ghost > Link. Mix variants to establish visual priority.",
              "In a dialog, place the primary action on the right and cancel/secondary on the left.",
              "On mobile, use full-width buttons (w-full) inside forms for easier tap targets.",
              'Always set type="button" or type="submit" explicitly — browser defaults can cause accidental form submissions.',
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
