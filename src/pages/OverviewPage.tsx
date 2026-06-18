import { Link } from "react-router-dom"
import { Palette, Type, AlignLeft, Layers, Zap, Circle, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { navigation } from "@/data/navigation"

// ─── Small helpers ────────────────────────────────────────────────────────────

function ColorSwatch({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1.5 min-w-0">
      <div className="h-10 w-full rounded-lg border border-border" style={{ backgroundColor: value }} />
      <p className="truncate text-xs font-medium text-foreground">{label}</p>
      <p className="truncate font-mono text-xs text-muted-foreground">{value}</p>
    </div>
  )
}

function SectionTitle({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description?: string }) {
  return (
    <div className="flex items-start gap-4 mb-8 pl-4 border-l-4 border-warning">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary mt-0.5">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        {description && <p className="mt-0.5 text-sm text-muted-foreground">{description}</p>}
      </div>
    </div>
  )
}

// ─── OverviewPage ─────────────────────────────────────────────────────────────

export default function OverviewPage() {
  const totalComponents = navigation.flatMap((g) => g.items).filter((i) => i.slug !== "").length
  const doneComponents  = navigation.flatMap((g) => g.items).filter((i) => i.status === "done" && i.slug !== "").length

  return (
    <div className="mx-auto max-w-4xl px-6 py-8 space-y-6 lg:px-8">

      {/* Hero */}
      <section className="space-y-5 pt-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
          <Circle className="h-2 w-2 fill-secondary text-secondary" />
          Foundation · v1.0.0
        </div>
        <h1 className="text-5xl font-bold tracking-tight text-foreground">
          Enterprise Design System
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          A scalable, accessible design foundation built with React, TypeScript,
          Tailwind CSS, and shadcn/ui. One source of truth for every UI decision.
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {["Consistency", "Simplicity", "Scalability", "Accessibility First", "Mobile First", "User-Centered Design"].map((p) => (
            <span key={p} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Framework",   value: "React 18"      },
          { label: "Language",    value: "TypeScript"    },
          { label: "Styling",     value: "Tailwind CSS"  },
          { label: "Components",  value: "shadcn/ui"     },
        ].map(({ label, value }) => (
          <div key={label} className="rounded-xl border border-border bg-background dark:bg-card p-4 text-center shadow-elevation-1">
            <p className="text-xs text-muted-foreground mb-1">{label}</p>
            <p className="font-semibold text-foreground">{value}</p>
          </div>
        ))}
      </section>

      {/* Component progress */}
      <section className="rounded-xl bg-background dark:bg-card shadow-elevation-3 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Component Library</h2>
            <p className="text-sm text-muted-foreground mt-0.5">
              {doneComponents} of {totalComponents} components documented
            </p>
          </div>
          <span className="text-sm font-semibold text-primary">
            {Math.round((doneComponents / totalComponents) * 100)}%
          </span>
        </div>

        {/* Progress bar */}
        <div className="h-2 w-full rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${(doneComponents / totalComponents) * 100}%` }}
          />
        </div>

        {/* Component category quick links */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {navigation
            .filter((g) => g.label !== "Overview")
            .map((group) => {
              const done = group.items.filter((i) => i.status === "done").length
              return (
                <div key={group.label} className="rounded-xl border border-border p-4 hover:shadow-elevation-2 transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-semibold text-foreground">{group.label}</p>
                    <span className="text-xs text-muted-foreground">{done}/{group.items.length}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {group.items.slice(0, 4).map((item) => (
                      <Link
                        key={item.slug}
                        to={`/components/${item.slug}`}
                        className={cn(
                          "rounded-md px-2 py-0.5 text-xs transition-colors",
                          item.status === "done"
                            ? "bg-primary/10 text-primary hover:bg-primary/20"
                            : "bg-neutral-100 dark:bg-neutral-800 text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                    {group.items.length > 4 && (
                      <span className="rounded-md bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 text-xs text-muted-foreground">
                        +{group.items.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              )
            })}
        </div>
      </section>

      {/* Color Palette */}
      <section className="rounded-xl bg-background dark:bg-card shadow-elevation-3 p-6">
        <SectionTitle icon={Palette} title="Color Palette" description="Semantic tokens — always reference via Tailwind class, never hardcode." />
        <div className="space-y-8">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">Primary</p>
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-3">
              {[
                { label: "main",  value: "#02332E" },
                { label: "900",   value: "#1B5E20" },
                { label: "700",   value: "#388E3C" },
                { label: "500",   value: "#4CAF50" },
                { label: "300",   value: "#81C784" },
                { label: "100",   value: "#C8E6C9" },
                { label: "50",    value: "#E8F5E9" },
              ].map((c) => <ColorSwatch key={c.label} {...c} />)}
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">Secondary</p>
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-3">
              {[
                { label: "main",  value: "#22C55E" },
                { label: "900",   value: "#33691E" },
                { label: "700",   value: "#689F38" },
                { label: "400",   value: "#8BC34A" },
                { label: "300",   value: "#AED581" },
                { label: "100",   value: "#DCEDC8" },
                { label: "50",    value: "#F1F8E9" },
              ].map((c) => <ColorSwatch key={c.label} {...c} />)}
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">Status</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "Success", value: "#22C55E" },
                { label: "Warning", value: "#EF6C00" },
                { label: "Error",   value: "#D32F2F" },
                { label: "Neutral", value: "#9E9E9E" },
              ].map((c) => <ColorSwatch key={c.label} {...c} />)}
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">Neutral Scale</p>
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3">
              {[
                { label: "900", value: "#212121" },
                { label: "800", value: "#424242" },
                { label: "700", value: "#616161" },
                { label: "600", value: "#757575" },
                { label: "500", value: "#9E9E9E" },
                { label: "400", value: "#BDBDBD" },
                { label: "300", value: "#E0E0E0" },
                { label: "200", value: "#EEEEEE" },
                { label: "100", value: "#F5F5F5" },
              ].map((c) => <ColorSwatch key={c.label} {...c} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="rounded-xl bg-background dark:bg-card shadow-elevation-3 p-6">
        <SectionTitle icon={Type} title="Typography Scale" description="Jost · primary · JetBrains Mono · code" />
        <div className="rounded-xl border border-border overflow-hidden">
          {[
            { label: "h1 · 48px · Bold",     cls: "text-5xl font-bold"     },
            { label: "h2 · 36px · Bold",     cls: "text-4xl font-bold"     },
            { label: "h3 · 30px · Semibold", cls: "text-3xl font-semibold" },
            { label: "h4 · 24px · Semibold", cls: "text-2xl font-semibold" },
            { label: "h5 · 20px · Semibold", cls: "text-xl font-semibold"  },
            { label: "h6 · 18px · Semibold", cls: "text-lg font-semibold"  },
            { label: "Body Large · 18px",    cls: "text-lg"                },
            { label: "Body · 16px",          cls: "text-base"              },
            { label: "Small · 14px",         cls: "text-sm"                },
            { label: "Caption · 12px",       cls: "text-xs"                },
          ].map(({ label, cls }) => (
            <div key={label} className="flex items-baseline gap-6 border-b border-border px-5 py-3 last:border-0 hover:bg-surface-hover transition-colors">
              <span className="w-52 shrink-0 font-mono text-xs text-muted-foreground">{label}</span>
              <span className={cn(cls, "text-foreground")}>The quick brown fox</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-end">
          <Link
            to="/components/typography"
            className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            View full typography guide <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* Spacing */}
      <section className="rounded-xl bg-background dark:bg-card shadow-elevation-3 p-6">
        <SectionTitle icon={AlignLeft} title="Spacing Scale" description="4px base unit — aligns with Tailwind's default spacing." />
        <div className="rounded-xl border border-border overflow-hidden">
          {[
            { token: "1",  px: "4px",   tw: "p-1"  },
            { token: "2",  px: "8px",   tw: "p-2"  },
            { token: "3",  px: "12px",  tw: "p-3"  },
            { token: "4",  px: "16px",  tw: "p-4"  },
            { token: "6",  px: "24px",  tw: "p-6"  },
            { token: "8",  px: "32px",  tw: "p-8"  },
            { token: "12", px: "48px",  tw: "p-12" },
            { token: "16", px: "64px",  tw: "p-16" },
          ].map(({ token, px, tw }) => (
            <div key={token} className="flex items-center gap-4 border-b border-border px-5 py-2.5 last:border-0 hover:bg-surface-hover transition-colors">
              <code className="w-20 shrink-0 font-mono text-xs text-muted-foreground">spacing-{token}</code>
              <span className="w-10 text-xs text-muted-foreground">{px}</span>
              <div className="h-3 rounded-sm bg-primary/30" style={{ width: px }} />
              <code className="font-mono text-xs text-primary">{tw}</code>
            </div>
          ))}
        </div>
      </section>

      {/* Shadows */}
      <section className="rounded-xl bg-background dark:bg-card shadow-elevation-3 p-6">
        <SectionTitle icon={Layers} title="Shadow & Elevation" description="6-level elevation system." />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {[0,1,2,3,4,5].map((level) => (
            <div key={level} className="flex flex-col items-center gap-3">
              <div className={cn("h-16 w-full rounded-xl border border-border bg-background", `shadow-elevation-${level}`)} />
              <code className="font-mono text-xs text-muted-foreground">elevation-{level}</code>
            </div>
          ))}
        </div>
      </section>

      {/* Motion */}
      <section className="rounded-xl bg-background dark:bg-card shadow-elevation-3 p-6">
        <SectionTitle icon={Zap} title="Motion Tokens" description="Animation durations and easing functions." />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { name: "Fast",   ms: "150ms", cssVar: "--duration-fast",   usage: "Micro-interactions, hover states" },
            { name: "Normal", ms: "200ms", cssVar: "--duration-normal", usage: "Page transitions, modals, drawers" },
            { name: "Slow",   ms: "300ms", cssVar: "--duration-slow",   usage: "Complex layout animations" },
          ].map(({ name, ms, cssVar, usage }) => (
            <div key={name} className="rounded-xl border border-border p-5 shadow-elevation-1 space-y-1.5">
              <p className="font-semibold text-foreground">{name}</p>
              <p className="text-3xl font-bold text-primary">{ms}</p>
              <code className="block font-mono text-xs text-muted-foreground">{cssVar}</code>
              <p className="text-xs text-muted-foreground">{usage}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Accessibility */}
      <section className="rounded-xl bg-background dark:bg-card shadow-elevation-3 p-6">
        <SectionTitle icon={Circle} title="Accessibility Standards" description="WCAG 2.2 AA is the baseline, not an option." />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "WCAG Level",   value: "AA 2.2"  },
            { label: "Min Contrast", value: "4.5 : 1" },
            { label: "Touch Target", value: "≥ 44px"  },
            { label: "Min Viewport", value: "320px"   },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-xl border border-border p-4 text-center shadow-elevation-1">
              <p className="text-xs text-muted-foreground mb-1">{label}</p>
              <p className="text-lg font-bold text-primary">{value}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
