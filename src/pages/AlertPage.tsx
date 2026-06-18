import { useState } from "react"
import { X, Info, CheckCircle2, AlertTriangle, XCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { ComponentLayout, InfoGrid } from "@/components/portal/ComponentLayout"
import { Section, DosDonts, PropsTable, KeyboardTable } from "@/components/portal/Section"
import { PreviewBox, PreviewRow } from "@/components/portal/PreviewBox"
import { CodeTabs } from "@/components/portal/CodeBlock"

// ─── Inline Alert ─────────────────────────────────────────────────────────────

type AlertVariant = "info" | "success" | "warning" | "error"

const alertConfig: Record<AlertVariant, {
  icon: React.ComponentType<{ className?: string }>
  classes: string
  iconClasses: string
}> = {
  info:    { icon: Info,          classes: "border-primary/20 bg-primary/5",  iconClasses: "text-primary"   },
  success: { icon: CheckCircle2,  classes: "border-success/20 bg-success/5",  iconClasses: "text-success"   },
  warning: { icon: AlertTriangle, classes: "border-warning/20 bg-warning/5",  iconClasses: "text-warning"   },
  error:   { icon: XCircle,       classes: "border-error/20 bg-error/5",      iconClasses: "text-error"     },
}

interface AlertProps {
  variant?: AlertVariant
  title?: string
  children: React.ReactNode
  dismissible?: boolean
  onDismiss?: () => void
  className?: string
}

function Alert({ variant = "info", title, children, dismissible, onDismiss, className }: AlertProps) {
  const { icon: Icon, classes, iconClasses } = alertConfig[variant]
  return (
    <div
      role="alert"
      className={cn(
        "flex items-start gap-3 rounded-xl border p-4",
        classes,
        className
      )}
    >
      <Icon className={cn("mt-0.5 h-5 w-5 shrink-0", iconClasses)} aria-hidden="true" />
      <div className="flex-1 min-w-0">
        {title && <p className="text-sm font-semibold text-foreground">{title}</p>}
        <div className={cn("text-sm text-muted-foreground", title && "mt-0.5")}>
          {children}
        </div>
      </div>
      {dismissible && (
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss alert"
          className="shrink-0 rounded-md p-1 text-muted-foreground transition-colors hover:bg-background hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}

// ─── Code examples ────────────────────────────────────────────────────────────

const reactCode = `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal, Info, CheckCircle2, AlertTriangle, XCircle } from "lucide-react"

// Info
<Alert>
  <Info className="h-4 w-4" />
  <AlertTitle>Heads up</AlertTitle>
  <AlertDescription>
    You can add components to your app using the CLI.
  </AlertDescription>
</Alert>

// Success
<Alert className="border-success/20 bg-success/5">
  <CheckCircle2 className="h-4 w-4 text-success" />
  <AlertTitle>Payment successful</AlertTitle>
  <AlertDescription>Your order has been confirmed. Check your email for details.</AlertDescription>
</Alert>

// Warning
<Alert className="border-warning/20 bg-warning/5">
  <AlertTriangle className="h-4 w-4 text-warning" />
  <AlertTitle>Approaching limit</AlertTitle>
  <AlertDescription>You've used 90% of your monthly quota.</AlertDescription>
</Alert>

// Error / Destructive
<Alert variant="destructive">
  <XCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong. Please try again.</AlertDescription>
</Alert>

// Without title (inline)
<Alert>
  <Info className="h-4 w-4" />
  <AlertDescription>This action cannot be undone.</AlertDescription>
</Alert>`

const tailwindCode = `{/* Info */}
<div role="alert" className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
  <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
  <div>
    <p className="text-sm font-semibold text-foreground">Heads up</p>
    <p className="mt-0.5 text-sm text-muted-foreground">You can add components with the CLI.</p>
  </div>
</div>

{/* Success */}
<div role="alert" className="flex items-start gap-3 rounded-xl border border-success/20 bg-success/5 p-4">
  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
  <div>
    <p className="text-sm font-semibold text-foreground">All done!</p>
    <p className="mt-0.5 text-sm text-muted-foreground">Your changes have been saved.</p>
  </div>
</div>

{/* Dismissible */}
<div role="alert" className="flex items-start gap-3 rounded-xl border border-warning/20 bg-warning/5 p-4">
  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-warning" />
  <div className="flex-1">
    <p className="text-sm text-muted-foreground">Action required before your trial ends.</p>
  </div>
  <button aria-label="Dismiss" className="rounded-md p-1 text-muted-foreground hover:bg-background">
    <X className="h-4 w-4" />
  </button>
</div>`

const shadcnInstall = `# Install alert component
npx shadcn@latest add alert

# Usage
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the CLI.
  </AlertDescription>
</Alert>`

// ─── AlertPage ────────────────────────────────────────────────────────────────

export default function AlertPage() {
  const [dismissed, setDismissed] = useState<Record<string, boolean>>({})

  const dismiss = (id: string) => setDismissed((prev) => ({ ...prev, [id]: true }))

  return (
    <ComponentLayout
      name="Alert"
      description="A contextual message banner that communicates status, warnings, errors, or informational content to the user."
      category="Feedback"
      status="stable"
      tags={["shadcn/ui", "Accessible", "Status"]}
    >
      <InfoGrid items={[
        { label: "Variants", value: "4 (info / success / warning / error)" },
        { label: "States",   value: "Default, Dismissible"                 },
        { label: "Role",     value: 'role="alert"'                         },
        { label: "WCAG",     value: "AA 2.2"                               },
      ]} />

      {/* Overview */}
      <Section title="Overview">
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            Alerts display page-level messages that are important but non-blocking. They use
            colour and iconography to signal intent and are always accompanied by descriptive
            text. The <code className="font-mono">role="alert"</code> attribute ensures the
            message is announced immediately by screen readers when it appears.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-success/20 bg-success/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When to Use</p>
              <ul className="space-y-1.5">
                {[
                  "Informational messages: tips, help, contextual guidance",
                  "Success confirmations after an action",
                  "Warnings about approaching limits or upcoming changes",
                  "Non-blocking error messages",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />{i}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-warning/20 bg-warning/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When NOT to Use</p>
              <ul className="space-y-1.5">
                {[
                  "Blocking errors that require action — use a Dialog",
                  "Brief transient feedback — use a Toast",
                  "Form field validation — use inline field errors",
                  "System-wide announcements — use a Banner",
                ].map((i) => (
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
          <PreviewRow label="Info">
            <Alert variant="info" title="New feature available">
              The new dashboard is now in beta. Enable it in Settings → Beta Features.
            </Alert>
          </PreviewRow>
          <PreviewRow label="Success">
            <Alert variant="success" title="Payment successful">
              Your subscription has been renewed. Next billing date: July 17, 2026.
            </Alert>
          </PreviewRow>
          <PreviewRow label="Warning">
            <Alert variant="warning" title="Approaching usage limit">
              You've used 90% of your monthly API quota. Consider upgrading your plan.
            </Alert>
          </PreviewRow>
          <PreviewRow label="Error">
            <Alert variant="error" title="Export failed">
              We couldn't process your export. Check your network connection and try again.
            </Alert>
          </PreviewRow>
          <PreviewRow label="Without title (inline)">
            <Alert variant="info">
              This action will permanently delete the record and cannot be undone.
            </Alert>
          </PreviewRow>
          <PreviewRow label="Dismissible">
            {dismissed["warning-demo"] ? (
              <p className="text-sm text-muted-foreground italic">Alert dismissed.</p>
            ) : (
              <Alert variant="warning" title="Action required" dismissible onDismiss={() => dismiss("warning-demo")}>
                Your trial ends in 3 days. Add a payment method to continue.
              </Alert>
            )}
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

      {/* Variants */}
      <Section title="Variant Reference">
        <div className="rounded-xl border border-border overflow-hidden text-sm">
          {([
            { variant: "info",    icon: "Info",          usage: "Neutral information, tips, guidance, contextual help." },
            { variant: "success", icon: "CheckCircle2",  usage: "Positive confirmation: saved, published, payment ok." },
            { variant: "warning", icon: "AlertTriangle", usage: "Caution: approaching limit, deprecated feature, risk." },
            { variant: "error",   icon: "XCircle",       usage: "Non-blocking error: failed action, validation issue."  },
          ] as const).map(({ variant, icon, usage }) => (
            <div key={variant} className="flex items-start gap-4 border-b border-border last:border-0 px-5 py-4">
              <div className="w-24 shrink-0">
                <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold capitalize",
                  variant === "info"    && "bg-primary/10 text-primary",
                  variant === "success" && "bg-success/15 text-success",
                  variant === "warning" && "bg-warning/15 text-warning",
                  variant === "error"   && "bg-error/10 text-error",
                )}>
                  {variant}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed"><code className="font-mono text-xs text-foreground">{icon}</code> — {usage}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Do's and Don'ts */}
      <Section title="Do's and Don'ts">
        <DosDonts
          dos={[
            { text: "Always include an icon that matches the variant — colour + icon together communicate intent." },
            { text: "Keep alert text concise: one sentence for the message, one for the action (if any)." },
            { text: "Use role=\"alert\" so screen readers announce the content immediately when it renders." },
            { text: "Provide a dismiss button for non-critical alerts that don't require action." },
          ]}
          donts={[
            { text: "Don't show multiple alerts of the same type simultaneously — consolidate related messages." },
            { text: "Don't use colour alone to indicate alert type — always pair with an icon and text." },
            { text: "Don't use alerts for transient feedback (e.g. copy success) — use Toast instead." },
            { text: "Don't put interactive controls (forms, dropdowns) inside an alert." },
          ]}
        />
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable props={[
          { name: "variant",     type: '"info" | "success" | "warning" | "error"', default: '"info"', description: "Sets the icon, border, and background colour." },
          { name: "title",       type: "string",   default: "—",     description: "Optional bold title displayed above the description." },
          { name: "children",    type: "ReactNode", required: true,  description: "Alert body content." },
          { name: "dismissible", type: "boolean",  default: "false", description: "Shows a close button in the top-right corner." },
          { name: "onDismiss",   type: "() => void", default: "—",   description: "Callback when the dismiss button is clicked." },
          { name: "className",   type: "string",   default: "—",     description: "Additional Tailwind classes." },
        ]} />
      </Section>

      {/* Accessibility */}
      <Section title="Accessibility">
        <KeyboardTable rows={[
          { keys: ["Tab"],        action: "Move focus to the dismiss button (if present)" },
          { keys: ["Enter / Space"], action: "Activate the dismiss button"                },
        ]} />
        <div className="mt-4 rounded-xl border border-border p-5 text-sm">
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-2"><span className="font-mono text-primary shrink-0">role="alert"</span><span>Applied to the alert container — content is announced to screen readers immediately when rendered.</span></li>
            <li className="flex gap-2"><span className="font-mono text-primary shrink-0">aria-live</span><span>Implicitly set to "assertive" by <code className="font-mono">role="alert"</code>. Avoid overusing — only use for genuinely important messages.</span></li>
            <li className="flex gap-2"><span className="font-mono text-primary shrink-0">icons</span><span>Icons are decorative (<code className="font-mono">aria-hidden="true"</code>). Meaning is conveyed by text content.</span></li>
          </ul>
        </div>
      </Section>
    </ComponentLayout>
  )
}
