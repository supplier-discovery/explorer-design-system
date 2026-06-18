import { ArrowRight, Star, MoreHorizontal, User, Calendar, Tag } from "lucide-react"
import { cn } from "@/lib/utils"
import { ComponentLayout, InfoGrid } from "@/components/portal/ComponentLayout"
import { Section, DosDonts, PropsTable } from "@/components/portal/Section"
import { PreviewBox, PreviewRow } from "@/components/portal/PreviewBox"
import { CodeTabs } from "@/components/portal/CodeBlock"

// ─── Inline Card primitives ───────────────────────────────────────────────────

interface CardProps {
  variant?: "default" | "elevated" | "outlined" | "ghost"
  className?: string
  children: React.ReactNode
  interactive?: boolean
  onClick?: () => void
}

const cardVariants: Record<string, string> = {
  default:  "bg-background border border-border shadow-elevation-1",
  elevated: "bg-background border border-border shadow-elevation-3",
  outlined: "bg-transparent border-2 border-border shadow-none",
  ghost:    "bg-surface-hover border border-transparent shadow-none",
}

function Card({ variant = "default", className, children, interactive, onClick }: CardProps) {
  const base = cn(
    "rounded-2xl transition-shadow duration-normal",
    cardVariants[variant],
    interactive && "cursor-pointer hover:shadow-elevation-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    className
  )
  if (interactive) {
    return <div role="button" tabIndex={0} onClick={onClick} onKeyDown={(e) => e.key === "Enter" && onClick?.() } className={base}>{children}</div>
  }
  return <div className={base}>{children}</div>
}

function CardHeader({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("flex flex-col gap-1 p-6 pb-0", className)}>{children}</div>
}

function CardBody({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("p-6", className)}>{children}</div>
}

function CardFooter({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("flex items-center gap-3 border-t border-border px-6 py-4", className)}>{children}</div>
}

function CardTitle({ className, children }: { className?: string; children: React.ReactNode }) {
  return <h3 className={cn("text-base font-semibold text-foreground leading-tight", className)}>{children}</h3>
}

function CardDescription({ className, children }: { className?: string; children: React.ReactNode }) {
  return <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
}

// ─── Code examples ────────────────────────────────────────────────────────────

const reactCode = `import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Basic card with full anatomy
<Card className="w-80">
  <CardHeader>
    <CardTitle>Account Settings</CardTitle>
    <CardDescription>Manage your account preferences.</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">
      Update your profile, change your password, and configure notifications.
    </p>
  </CardContent>
  <CardFooter className="gap-3">
    <Button variant="outline">Cancel</Button>
    <Button>Save Changes</Button>
  </CardFooter>
</Card>

// Interactive card (clickable)
<Card
  className="w-80 cursor-pointer transition-shadow hover:shadow-elevation-3"
  role="button"
  tabIndex={0}
>
  <CardContent className="pt-6">
    <p className="font-semibold">Click me</p>
  </CardContent>
</Card>`

const tailwindCode = `{/* Default card */}
<div className="rounded-2xl border border-border bg-background shadow-elevation-1">
  {/* Header */}
  <div className="flex flex-col gap-1 p-6 pb-0">
    <h3 className="text-base font-semibold text-foreground">Card Title</h3>
    <p className="text-sm text-muted-foreground">Card description here.</p>
  </div>

  {/* Body */}
  <div className="p-6">
    <p className="text-sm text-muted-foreground">Main card content goes here.</p>
  </div>

  {/* Footer */}
  <div className="flex items-center gap-3 border-t border-border px-6 py-4">
    <button className="rounded-lg border border-border px-4 py-2 text-sm font-medium">
      Cancel
    </button>
    <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white">
      Confirm
    </button>
  </div>
</div>

{/* Elevated variant */}
<div className="rounded-2xl border border-border bg-background shadow-elevation-3">
  ...
</div>

{/* Outlined variant */}
<div className="rounded-2xl border-2 border-border bg-transparent">
  ...
</div>`

const shadcnInstall = `# Install card component
npx shadcn@latest add card

# Usage
import {
  Card, CardContent, CardDescription,
  CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Project Overview</CardTitle>
    <CardDescription>A high-level summary of the project.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content here.</p>
  </CardContent>
  <CardFooter>
    <Button>View Details</Button>
  </CardFooter>
</Card>`

// ─── CardPage ─────────────────────────────────────────────────────────────────

export default function CardPage() {
  return (
    <ComponentLayout
      name="Card"
      description="A flexible container for grouping related content and actions. Supports header, body, and footer sections with multiple visual variants."
      category="Data Display"
      status="stable"
      tags={["shadcn/ui", "Layout", "Container"]}
    >
      <InfoGrid items={[
        { label: "Variants",  value: "4 (default / elevated / outlined / ghost)" },
        { label: "Anatomy",   value: "Header · Body · Footer"                    },
        { label: "WCAG",      value: "AA 2.2"                                    },
        { label: "Responsive", value: "Yes"                                      },
      ]} />

      {/* Overview */}
      <Section title="Overview">
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            Cards group related information and actions into a visually distinct container.
            They use elevation (shadow) or border treatment to separate themselves from
            the surrounding page background, drawing attention without visual noise.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-success/20 bg-success/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When to Use</p>
              <ul className="space-y-1.5">
                {["Product listings, project boards", "Profile summaries, user details", "Settings panels with multiple fields", "Dashboard stats or KPI tiles", "Article / content previews"].map((i) => (
                  <li key={i} className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />{i}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-warning/20 bg-warning/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When NOT to Use</p>
              <ul className="space-y-1.5">
                {["Simple text content without actions — use plain layout", "Table rows — cards are not substitutes for data tables", "Full-page dialogs — use Dialog or Sheet", "Overloading a single card with too many actions"].map((i) => (
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

          {/* Full anatomy */}
          <PreviewRow label="Full anatomy (Header + Body + Footer)">
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account preferences.</CardDescription>
              </CardHeader>
              <CardBody>
                <p className="text-sm text-muted-foreground">Update your profile, change your password, and configure notifications.</p>
              </CardBody>
              <CardFooter>
                <button className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover">Cancel</button>
                <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-dark ml-auto">Save Changes</button>
              </CardFooter>
            </Card>
          </PreviewRow>

          {/* Variants */}
          <PreviewRow label="Variants">
            <div className="grid sm:grid-cols-2 gap-4 w-full">
              {(["default", "elevated", "outlined", "ghost"] as const).map((v) => (
                <Card key={v} variant={v} className="p-5">
                  <p className="text-xs font-mono text-muted-foreground capitalize mb-1">{v}</p>
                  <p className="text-sm font-medium text-foreground">Card variant</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Brief description of contents here.</p>
                </Card>
              ))}
            </div>
          </PreviewRow>

          {/* Interactive */}
          <PreviewRow label="Interactive card">
            <Card variant="default" interactive className="w-full max-w-sm p-5 group">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">Project Alpha</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Last updated 2 hours ago</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </Card>
          </PreviewRow>

          {/* Media card */}
          <PreviewRow label="Card with image area + metadata">
            <Card className="w-full max-w-sm overflow-hidden">
              <div className="h-36 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Star className="h-10 w-10 text-primary/40" />
              </div>
              <CardHeader className="pt-5">
                <CardTitle>Design Tokens Guide</CardTitle>
                <CardDescription>Learn how to use and extend the token system.</CardDescription>
              </CardHeader>
              <CardBody className="pt-3 pb-3">
                <div className="flex flex-wrap gap-2">
                  {["Design", "Tokens", "Tailwind"].map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      <Tag className="h-2.5 w-2.5" />{tag}
                    </span>
                  ))}
                </div>
              </CardBody>
              <CardFooter>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <User className="h-3.5 w-3.5" />Design Team
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground ml-auto">
                  <Calendar className="h-3.5 w-3.5" />Jun 17, 2026
                </div>
              </CardFooter>
            </Card>
          </PreviewRow>

          {/* Stat card */}
          <PreviewRow label="KPI / Stat cards">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              {[
                { label: "Total Users",    value: "12,847",  delta: "+5.2%", positive: true  },
                { label: "Monthly Revenue", value: "$84,921", delta: "+12%",  positive: true  },
                { label: "Churn Rate",     value: "2.1%",    delta: "+0.3%", positive: false },
                { label: "NPS Score",      value: "72",      delta: "+4",    positive: true  },
              ].map(({ label, value, delta, positive }) => (
                <Card key={label} className="p-5">
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="text-2xl font-bold text-foreground mt-1">{value}</p>
                  <p className={cn("text-xs font-medium mt-1", positive ? "text-success" : "text-error")}>{delta}</p>
                </Card>
              ))}
            </div>
          </PreviewRow>

          {/* Context menu card */}
          <PreviewRow label="Card with action menu">
            <Card className="w-full max-w-sm p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">Team Report — Q2 2026</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Generated Jun 17, 2026</p>
                </div>
                <button className="rounded-md p-1 text-muted-foreground hover:bg-surface-hover hover:text-foreground transition-colors" aria-label="More options">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">Summary of all Q2 team metrics, goal completion, and highlights.</p>
            </Card>
          </PreviewRow>

        </PreviewBox>
      </Section>

      {/* Code Examples */}
      <Section title="Code Examples">
        <CodeTabs tabs={[
          { label: "React",     code: reactCode,     language: "tsx"  },
          { label: "Tailwind",  code: tailwindCode,  language: "tsx"  },
          { label: "shadcn/ui", code: shadcnInstall, language: "bash" },
        ]} />
      </Section>

      {/* Variant Reference */}
      <Section title="Variant Reference">
        <div className="rounded-xl border border-border overflow-hidden text-sm">
          {[
            { variant: "default",  desc: "Standard card with a 1px border and a subtle elevation-1 shadow. Use for most cards on page backgrounds." },
            { variant: "elevated", desc: "Same border as default but elevation-3 shadow. Use to visually promote a card (modal-like, featured)." },
            { variant: "outlined", desc: "2px border, no shadow, transparent background. Use on darker or textured surfaces." },
            { variant: "ghost",    desc: "No shadow, no border, subtle background tint. Use inside panels or nested layouts." },
          ].map(({ variant, desc }) => (
            <div key={variant} className="flex gap-4 border-b border-border last:border-0 px-5 py-3">
              <code className="w-24 shrink-0 font-mono text-xs text-primary">{variant}</code>
              <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Do's and Don'ts */}
      <Section title="Do's and Don'ts">
        <DosDonts
          dos={[
            { text: "Keep card content focused — one topic, one primary action per card." },
            { text: "Use consistent card widths in a grid — avoid mixing narrow and wide cards without reason." },
            { text: "Use CardFooter for actions — separating content from actions improves scannability." },
            { text: "For interactive cards, include focus-visible ring so keyboard users can see focus state." },
          ]}
          donts={[
            { text: "Don't nest cards inside cards — creates visual confusion and hierarchy collapse." },
            { text: "Don't put more than 2–3 primary actions in a card footer." },
            { text: "Don't use cards as full-page containers — they are for grouping, not page layout." },
            { text: "Don't remove the shadow/border entirely on a white background — cards need visual separation." },
          ]}
        />
      </Section>

      {/* Props */}
      <Section title="Props" description="shadcn/ui Card uses composable sub-components.">
        <PropsTable props={[
          { name: "Card",            type: "div props",  default: "—",     description: "Root container. Accepts className for variant overrides." },
          { name: "CardHeader",      type: "div props",  default: "—",     description: "Contains CardTitle and CardDescription." },
          { name: "CardTitle",       type: "h3 props",   default: "—",     description: "Card heading — rendered as h3 for semantics." },
          { name: "CardDescription", type: "p props",    default: "—",     description: "Subtitle text below the title." },
          { name: "CardContent",     type: "div props",  default: "—",     description: "Main body of the card." },
          { name: "CardFooter",      type: "div props",  default: "—",     description: "Action row at the bottom with a top border." },
          { name: "className",       type: "string",     default: "—",     description: "Extend or override Tailwind classes on any sub-component." },
        ]} />
      </Section>
    </ComponentLayout>
  )
}
