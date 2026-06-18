import { cn } from "@/lib/utils"

// ─── PreviewBox ───────────────────────────────────────────────────────────────
// Container for live component previews.
// Renders children centred on a neutral background.

interface PreviewBoxProps {
  children: React.ReactNode
  className?: string
  // "grid" lays children in a responsive wrapping grid
  layout?: "center" | "grid" | "stack"
  label?: string
}

export function PreviewBox({ children, className, layout = "center", label }: PreviewBoxProps) {
  return (
    <div className="rounded-xl border border-border overflow-hidden shadow-elevation-1">
      {label && (
        <div className="px-4 py-2.5 border-b border-border bg-neutral-50 dark:bg-neutral-900/60">
          <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">{label}</span>
        </div>
      )}
      <div
        className={cn(
          "bg-background p-8 min-h-[120px]",
          layout === "center" && "flex flex-wrap items-center justify-center gap-4",
          layout === "grid" && "grid grid-cols-1 sm:grid-cols-2 gap-4",
          layout === "stack" && "flex flex-col gap-6",
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}

// ─── PreviewRow ───────────────────────────────────────────────────────────────
// A single labelled row inside a PreviewBox — useful for showing variants/states side-by-side.

interface PreviewRowProps {
  label: string
  children: React.ReactNode
  className?: string
}

export function PreviewRow({ label, children, className }: PreviewRowProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">{label}</p>
      <div className="flex flex-wrap items-start gap-3">{children}</div>
    </div>
  )
}
