import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

// ─── StatusBadge ─────────────────────────────────────────────────────────────

type Status = "stable" | "beta" | "new" | "deprecated"

const statusStyles: Record<Status, string> = {
  stable:     "bg-success/10 text-success border-success/20",
  beta:       "bg-warning/10 text-warning border-warning/20",
  new:        "bg-secondary/10 text-secondary border-secondary/20",
  deprecated: "bg-neutral-500/10 text-neutral-500 border-neutral-500/20",
}

function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={cn(
      "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize",
      statusStyles[status]
    )}>
      {status}
    </span>
  )
}

// ─── TagBadge ─────────────────────────────────────────────────────────────────

function TagBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-background dark:bg-card px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
      {children}
    </span>
  )
}

// ─── ComponentLayout ──────────────────────────────────────────────────────────
// Wraps every component doc page with breadcrumb, title, description, and tags.

interface ComponentLayoutProps {
  name: string
  description: string
  category?: string
  status?: Status
  tags?: string[]
  children: React.ReactNode
}

export function ComponentLayout({
  name,
  description,
  category = "Components",
  status = "stable",
  tags = [],
  children,
}: ComponentLayoutProps) {
  return (
    <div className="mx-auto max-w-4xl px-6 py-8 space-y-6 lg:px-8">
      {/* Page header: breadcrumb + title/desc on left, badges on right */}
      <header className="space-y-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">
            Overview
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span>{category}</span>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground font-medium">{name}</span>
        </nav>
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-4xl font-bold text-foreground tracking-tight">{name}</h1>
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <StatusBadge status={status} />
            {tags.map((tag) => (
              <TagBadge key={tag}>{tag}</TagBadge>
            ))}
          </div>
        </div>
        <p className="text-lg text-muted-foreground">{description}</p>
      </header>

      {/* Page content — component sections */}
      {children}
    </div>
  )
}

// ─── InfoGrid ─────────────────────────────────────────────────────────────────
// Small grid of key facts shown at top of a component page.

interface InfoItem {
  label: string
  value: string
}

export function InfoGrid({ items }: { items: InfoItem[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {items.map(({ label, value }) => (
        <div key={label} className="rounded-xl border border-border bg-background p-4 shadow-elevation-1">
          <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide mb-1">{label}</p>
          <p className="text-sm font-semibold text-foreground leading-tight">{value}</p>
        </div>
      ))}
    </div>
  )
}
