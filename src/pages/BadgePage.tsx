import { cn } from "@/lib/utils"
import { ComponentLayout, InfoGrid } from "@/components/portal/ComponentLayout"
import { Section, DosDonts, PropsTable } from "@/components/portal/Section"
import { PreviewBox, PreviewRow } from "@/components/portal/PreviewBox"
import { CodeTabs } from "@/components/portal/CodeBlock"
import { CheckCircle2, AlertTriangle, XCircle, Clock, Star } from "lucide-react"

// ─── Inline Badge ─────────────────────────────────────────────────────────────

type BadgeVariant = "default" | "secondary" | "outline" | "destructive" | "success" | "warning" | "neutral"

const badgeVariantClasses: Record<BadgeVariant, string> = {
  default:     "bg-primary text-white border-transparent",
  secondary:   "bg-secondary text-white border-transparent",
  outline:     "border border-border text-foreground bg-transparent",
  destructive: "bg-error text-white border-transparent",
  success:     "bg-success/15 text-success border-success/20",
  warning:     "bg-warning/15 text-warning border-warning/20",
  neutral:     "bg-neutral-200 dark:bg-neutral-800 text-muted-foreground border-transparent",
}

interface BadgeProps {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
  dot?: boolean
}

function Badge({ variant = "default", children, className, dot }: BadgeProps) {
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
      badgeVariantClasses[variant],
      className
    )}>
      {dot && <span className={cn("h-1.5 w-1.5 rounded-full", {
        default:     "bg-white",
        secondary:   "bg-white",
        outline:     "bg-foreground",
        destructive: "bg-white",
        success:     "bg-success",
        warning:     "bg-warning",
        neutral:     "bg-neutral-500",
      }[variant])} />}
      {children}
    </span>
  )
}

// ─── Code examples ────────────────────────────────────────────────────────────

const reactCode = `import { Badge } from "@/components/ui/badge"

// Variants
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>

// Custom colours (extend with CVA or className)
<Badge className="bg-success/15 text-success border-success/20">
  Active
</Badge>
<Badge className="bg-warning/15 text-warning border-warning/20">
  Pending
</Badge>

// With dot indicator
<Badge className="bg-success/15 text-success border-success/20">
  <span className="h-1.5 w-1.5 rounded-full bg-success" />
  Online
</Badge>

// With icon
<Badge variant="destructive">
  <XCircle className="h-3 w-3" />
  Error
</Badge>`

const tailwindCode = `{/* Default */}
<span className="inline-flex items-center rounded-full border border-transparent
  bg-primary px-2.5 py-0.5 text-xs font-semibold text-white">
  Default
</span>

{/* Success */}
<span className="inline-flex items-center rounded-full border border-success/20
  bg-success/15 px-2.5 py-0.5 text-xs font-semibold text-success">
  Active
</span>

{/* With dot */}
<span className="inline-flex items-center gap-1.5 rounded-full border border-success/20
  bg-success/15 px-2.5 py-0.5 text-xs font-semibold text-success">
  <span className="h-1.5 w-1.5 rounded-full bg-success" />
  Online
</span>`

const shadcnInstall = `# 1. Install the badge component
npx shadcn@latest add badge

# 2. Import and use
import { Badge } from "@/components/ui/badge"

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>

# 3. For custom semantic variants, extend the badgeVariants CVA
# in src/components/ui/badge.tsx`

// ─── BadgePage ────────────────────────────────────────────────────────────────

export default function BadgePage() {
  return (
    <ComponentLayout
      name="Badge"
      description="A small status descriptor that conveys metadata, state, or count at a glance."
      category="Data Display"
      status="stable"
      tags={["shadcn/ui", "Accessible"]}
    >
      <InfoGrid items={[
        { label: "Variants",  value: "7"      },
        { label: "Sizes",     value: "1 (xs)" },
        { label: "States",    value: "Static" },
        { label: "WCAG",      value: "AA 2.2" },
      ]} />

      {/* Overview */}
      <Section title="Overview">
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            Badges are compact labels used to convey status, category, count, or metadata.
            They appear alongside content to provide quick, scannable context without interrupting the reading flow.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-success/20 bg-success/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When to Use</p>
              <ul className="space-y-1.5">
                {["Status indicators (Active, Pending, Archived)", "Notification counts on icons or nav items", "Tags and category labels on cards", "Version or environment labels (Beta, v1.0)", "New or featured item indicators"].map((i) => (
                  <li key={i} className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />{i}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-warning/20 bg-warning/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When NOT to Use</p>
              <ul className="space-y-1.5">
                {["Long text — badges should be 1–3 words maximum", "As a primary interactive element", "To replace a checkbox or radio button", "When the information requires a tooltip or explanation"].map((i) => (
                  <li key={i} className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Preview */}
      <Section title="Preview">
        <PreviewBox layout="stack">
          <PreviewRow label="Semantic variants">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="neutral">Neutral</Badge>
          </PreviewRow>
          <PreviewRow label="With dot indicator">
            <Badge variant="success" dot>Online</Badge>
            <Badge variant="warning" dot>Away</Badge>
            <Badge variant="destructive" dot>Offline</Badge>
            <Badge variant="neutral" dot>Unknown</Badge>
          </PreviewRow>
          <PreviewRow label="With icon">
            <Badge variant="success"><CheckCircle2 className="h-3 w-3" />Published</Badge>
            <Badge variant="warning"><Clock className="h-3 w-3" />Pending</Badge>
            <Badge variant="destructive"><XCircle className="h-3 w-3" />Failed</Badge>
            <Badge variant="default"><Star className="h-3 w-3" />Featured</Badge>
          </PreviewRow>
          <PreviewRow label="Notification count (use rounded-full bg-error)">
            <div className="relative inline-flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background">
                <AlertTriangle className="h-5 w-5 text-muted-foreground" />
              </div>
              <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-error text-[10px] font-bold text-white">3</span>
            </div>
          </PreviewRow>
        </PreviewBox>
      </Section>

      {/* Code Examples */}
      <Section title="Code Examples">
        <CodeTabs tabs={[
          { label: "React",      code: reactCode,    language: "tsx"  },
          { label: "Tailwind",   code: tailwindCode, language: "tsx"  },
          { label: "shadcn/ui",  code: shadcnInstall, language: "bash" },
        ]} />
      </Section>

      {/* Variant reference */}
      <Section title="Variant Reference">
        <div className="rounded-xl border border-border overflow-hidden text-sm">
          {([
            { v: "default",     label: "Default",     desc: "Primary brand colour. Use for main category or key metadata.",         eg: "New, Beta, v1.0" },
            { v: "secondary",   label: "Secondary",   desc: "Accent green. Use for positive or highlighted states.",                 eg: "Active, Enabled" },
            { v: "outline",     label: "Outline",     desc: "Neutral bordered. Use for tags that need less visual weight.",          eg: "Tag, Label"      },
            { v: "destructive", label: "Destructive", desc: "Error/danger. Use for critical status.",                               eg: "Error, Revoked"  },
            { v: "success",     label: "Success",     desc: "Tinted green. Use for positive/live/active states.",                   eg: "Live, Online"    },
            { v: "warning",     label: "Warning",     desc: "Tinted amber. Use for caution or pending states.",                     eg: "Pending, Draft"  },
            { v: "neutral",     label: "Neutral",     desc: "Subdued grey. Use for archived, disabled, or secondary labels.",      eg: "Archived, None"  },
          ] as const).map(({ v, label, desc, eg }) => (
            <div key={v} className="flex items-center gap-4 border-b border-border last:border-0 px-5 py-3">
              <div className="w-20 shrink-0"><Badge variant={v as BadgeVariant}>{label}</Badge></div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
              <code className="shrink-0 text-xs text-muted-foreground font-mono hidden sm:block">{eg}</code>
            </div>
          ))}
        </div>
      </Section>

      {/* Do's and Don'ts */}
      <Section title="Do's and Don'ts">
        <DosDonts
          dos={[
            { text: "Keep badge text to 1–3 words for scannability." },
            { text: "Use semantic variants that match meaning: success = positive, destructive = danger." },
            { text: "Pair a dot or icon with status badges for added clarity." },
            { text: "Position notification count badges consistently (top-right of the host element)." },
          ]}
          donts={[
            { text: "Don't use badges as clickable buttons — they are informational only." },
            { text: "Don't write full sentences inside a badge." },
            { text: "Don't use colour alone to convey meaning — screen readers can't see colour." },
            { text: "Don't stack more than 3 badges on a single content item." },
          ]}
        />
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable props={[
          { name: "variant",   type: '"default" | "secondary" | "outline" | "destructive"', default: '"default"', description: "Controls the colour scheme." },
          { name: "className", type: "string",                                               default: "—",        description: "Additional Tailwind classes for custom variants." },
          { name: "children",  type: "React.ReactNode",                                      required: true,      description: "Badge content — text, icon, or dot + text." },
        ]} />
      </Section>

      {/* Accessibility */}
      <Section title="Accessibility">
        <div className="rounded-xl border border-border p-5 space-y-3 text-sm">
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-2"><span className="text-primary font-mono shrink-0">Contrast</span><span>All badge variant colours meet 4.5:1 contrast ratio against their backgrounds.</span></li>
            <li className="flex gap-2"><span className="text-primary font-mono shrink-0">Semantics</span><span>Badge renders as a <code className="font-mono">span</code>. For status badges, add <code className="font-mono">aria-label</code> on the parent or use a visually-hidden description.</span></li>
            <li className="flex gap-2"><span className="text-primary font-mono shrink-0">Count</span><span>For notification counts, add <code className="font-mono">aria-label="3 notifications"</code> to the count element.</span></li>
            <li className="flex gap-2"><span className="text-primary font-mono shrink-0">Colour</span><span>Always pair colour with text or an icon. Never use colour as the only way to convey status.</span></li>
          </ul>
        </div>
      </Section>
    </ComponentLayout>
  )
}
