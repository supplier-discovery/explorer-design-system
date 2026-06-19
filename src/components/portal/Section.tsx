import { cn } from "@/lib/utils"

// ─── Section ──────────────────────────────────────────────────────────────────
// Standard page section used on every component doc page.
// title + optional description + children content.

interface SectionProps {
  title: string
  description?: string
  children: React.ReactNode
  className?: string
}

export function Section({ title, description, children, className }: SectionProps) {
  return (
    <section className={cn("rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden", className)}>
      {/* Full-width header with bottom border */}
      <div className="px-6 py-4 border-b border-border">
        <div className="border-l-4 border-warning pl-4 space-y-1">
          <h2 className="text-xl font-semibold text-foreground">{title}</h2>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
      {/* Content area */}
      <div className="p-6 space-y-5">
        {children}
      </div>
    </section>
  )
}

// ─── DosDonts ─────────────────────────────────────────────────────────────────

interface DoItem {
  text: string
}

interface DosDontsProps {
  dos: DoItem[]
  donts: DoItem[]
}

export function DosDonts({ dos, donts }: DosDontsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Do */}
      <div className="rounded-xl border-2 border-success/25 bg-success/5 p-5">
        <div className="mb-3 flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-success text-white text-xs font-bold">✓</span>
          <h4 className="font-semibold text-success">Do</h4>
        </div>
        <ul className="space-y-2.5">
          {dos.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-foreground">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Don't */}
      <div className="rounded-xl border-2 border-error/25 bg-error/5 p-5">
        <div className="mb-3 flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-error text-white text-xs font-bold">✕</span>
          <h4 className="font-semibold text-error">Don't</h4>
        </div>
        <ul className="space-y-2.5">
          {donts.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-foreground">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-error" />
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// ─── PropsTable ───────────────────────────────────────────────────────────────

export interface PropRow {
  name: string
  type: string
  default?: string
  description: string
  required?: boolean
}

export function PropsTable({ props }: { props: PropRow[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-neutral-50 dark:bg-neutral-900/60">
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">Prop</th>
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">Type</th>
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">Default</th>
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((row) => (
            <tr key={row.name} className="border-b border-border last:border-0 hover:bg-surface-hover transition-colors">
              <td className="px-4 py-3">
                <code className="font-mono text-xs font-semibold text-primary">{row.name}</code>
                {row.required && <span className="ml-1 text-xs text-error">*</span>}
              </td>
              <td className="px-4 py-3">
                <code className="font-mono text-xs text-muted-foreground">{row.type}</code>
              </td>
              <td className="px-4 py-3 text-xs text-muted-foreground">
                {row.default ? <code className="font-mono">{row.default}</code> : "—"}
              </td>
              <td className="px-4 py-3 text-xs text-muted-foreground">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ─── KeyboardTable ────────────────────────────────────────────────────────────

export interface KeyboardRow {
  keys: string[]
  action: string
}

export function KeyboardTable({ rows }: { rows: KeyboardRow[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-neutral-50 dark:bg-neutral-900/60">
            <th className="px-4 py-3 text-left font-medium text-muted-foreground w-48">Key(s)</th>
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border last:border-0">
              <td className="px-4 py-3">
                <div className="flex flex-wrap gap-1">
                  {row.keys.map((k) => (
                    <kbd
                      key={k}
                      className="inline-flex items-center rounded-md border border-border bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 font-mono text-xs"
                    >
                      {k}
                    </kbd>
                  ))}
                </div>
              </td>
              <td className="px-4 py-3 text-muted-foreground">{row.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
