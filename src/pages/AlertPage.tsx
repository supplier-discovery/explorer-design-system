import { useState } from "react"
import { X, Info, CheckCircle2, AlertTriangle, XCircle } from "lucide-react"
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { ComponentLayout, InfoGrid } from "@/components/portal/ComponentLayout"
import { Section, DosDonts, PropsTable, KeyboardTable } from "@/components/portal/Section"
import { CodeTabs } from "@/components/portal/CodeBlock"

// ─── Code examples ────────────────────────────────────────────────────────────

const shadcnCode = `// Install: npx shadcn@latest add alert
// Then extend alert.tsx with semantic variants (info/success/warning/error).

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Info, CheckCircle2, AlertTriangle, XCircle } from "lucide-react"

// Info
<Alert variant="info">
  <Info className="h-4 w-4" />
  <AlertTitle>New feature available</AlertTitle>
  <AlertDescription>
    The new dashboard is now in beta. Enable it in Settings → Beta Features.
  </AlertDescription>
</Alert>

// Success
<Alert variant="success">
  <CheckCircle2 className="h-4 w-4" />
  <AlertTitle>Payment successful</AlertTitle>
  <AlertDescription>
    Your subscription has been renewed. Next billing date: July 17, 2026.
  </AlertDescription>
</Alert>

// Warning
<Alert variant="warning">
  <AlertTriangle className="h-4 w-4" />
  <AlertTitle>Approaching usage limit</AlertTitle>
  <AlertDescription>
    You've used 90% of your monthly API quota.
  </AlertDescription>
</Alert>

// Error
<Alert variant="error">
  <XCircle className="h-4 w-4" />
  <AlertTitle>Export failed</AlertTitle>
  <AlertDescription>
    We couldn't process your export. Check your network and try again.
  </AlertDescription>
</Alert>

// Without title (inline message)
<Alert variant="info">
  <Info className="h-4 w-4" />
  <AlertDescription>
    This action will permanently delete the record and cannot be undone.
  </AlertDescription>
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

{/* Warning */}
<div role="alert" className="flex items-start gap-3 rounded-xl border border-warning/20 bg-warning/5 p-4">
  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-warning" />
  <div>
    <p className="text-sm font-semibold text-foreground">Approaching usage limit</p>
    <p className="mt-0.5 text-sm text-muted-foreground">You've used 90% of your monthly API quota.</p>
  </div>
</div>

{/* Error */}
<div role="alert" className="flex items-start gap-3 rounded-xl border border-error/20 bg-error/5 p-4">
  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-error" />
  <div>
    <p className="text-sm font-semibold text-foreground">Export failed</p>
    <p className="mt-0.5 text-sm text-muted-foreground">Check your network and try again.</p>
  </div>
</div>

{/* Without title */}
<div role="alert" className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
  <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
  <p className="text-sm text-muted-foreground">This action will permanently delete the record and cannot be undone.</p>
</div>`

const dismissibleCode = `// Dismissible — manage visibility with state
import { useState } from "react"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { AlertTriangle, X } from "lucide-react"

function DismissibleAlert() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null
  return (
    <Alert variant="warning" className="pr-10">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Action required</AlertTitle>
      <AlertDescription>Your trial ends in 3 days.</AlertDescription>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setVisible(false)}
        aria-label="Dismiss"
        className="absolute right-2 top-2 h-8 w-8 text-muted-foreground hover:bg-background hover:text-foreground"
      >
        <X className="h-4 w-4" />
      </Button>
    </Alert>
  )
}`

// ─── AlertPage ────────────────────────────────────────────────────────────────

export default function AlertPage() {
  const [dismissed, setDismissed] = useState(false)

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

      {/* Component API */}
      <Section title="Component API">
        <div className="rounded-xl border border-border overflow-hidden text-sm">
          <div className="bg-neutral-50 dark:bg-neutral-900 px-5 py-3 border-b border-border font-mono text-xs text-muted-foreground">
            {"import { Alert, AlertTitle, AlertDescription } from \"@/components/ui/alert\""}
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-20 shrink-0 font-mono text-xs text-primary">variant</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">"info" | "success" | "warning" | "error" | "default" | "destructive"</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">"default"</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Severity colour scheme.</p>
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-20 shrink-0 font-mono text-xs text-primary">className</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">string</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">—</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Use "pr-10" for dismissible buttons.</p>
          </div>
          <div className="flex gap-4 px-5 py-3">
            <code className="w-20 shrink-0 font-mono text-xs text-primary">children</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">ReactNode</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">required</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Compose with AlertTitle, AlertDescription.</p>
          </div>
        </div>
      </Section>

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
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Informational messages: tips, help, contextual guidance</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Success confirmations after an action</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Warnings about approaching limits or upcoming changes</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Non-blocking error messages</li>
              </ul>
            </div>
            <div className="rounded-xl border border-warning/20 bg-warning/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When NOT to Use</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Blocking errors that require action — use a Dialog</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Brief transient feedback — use a Toast</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Form field validation — use inline field errors</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />System-wide announcements — use a Banner</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <hr className="border-border" />

      {/* ── Severity Variants ──────────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Severity Variants</h3>
            <p className="text-sm text-muted-foreground">Four intent levels: info, success, warning, and error. Always pair colour with an icon.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Info</p>
                <Alert variant="info">
                  <Info className="h-4 w-4" />
                  <AlertTitle>New feature available</AlertTitle>
                  <AlertDescription>
                    The new dashboard is now in beta. Enable it in Settings → Beta Features.
                  </AlertDescription>
                </Alert>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Success</p>
                <Alert variant="success">
                  <CheckCircle2 className="h-4 w-4" />
                  <AlertTitle>Payment successful</AlertTitle>
                  <AlertDescription>
                    Your subscription has been renewed. Next billing date: July 17, 2026.
                  </AlertDescription>
                </Alert>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Warning</p>
                <Alert variant="warning">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Approaching usage limit</AlertTitle>
                  <AlertDescription>
                    You've used 90% of your monthly API quota. Consider upgrading your plan.
                  </AlertDescription>
                </Alert>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Error</p>
                <Alert variant="error">
                  <XCircle className="h-4 w-4" />
                  <AlertTitle>Export failed</AlertTitle>
                  <AlertDescription>
                    We couldn't process your export. Check your network connection and try again.
                  </AlertDescription>
                </Alert>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Without title (inline message)</p>
                <Alert variant="info">
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    This action will permanently delete the record and cannot be undone.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[
                { label: "shadcn/ui", language: "tsx", code: shadcnCode },
                { label: "Tailwind",  language: "tsx", code: tailwindCode },
              ]} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Dismissible ────────────────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Dismissible</h3>
            <p className="text-sm text-muted-foreground">Control visibility with state. Add <code className="font-mono">className="pr-10"</code> and an absolute-positioned dismiss button.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Dismissible</p>
                {dismissed ? (
                  <p className="text-sm text-muted-foreground italic">Alert dismissed.</p>
                ) : (
                  <Alert variant="warning" className="pr-10">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Action required</AlertTitle>
                    <AlertDescription>
                      Your trial ends in 3 days. Add a payment method to continue.
                    </AlertDescription>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => setDismissed(true)}
                      aria-label="Dismiss alert"
                      className="absolute right-2 top-2 h-8 w-8 text-muted-foreground hover:bg-background hover:text-foreground"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </Alert>
                )}
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[
                { label: "shadcn/ui", language: "tsx", code: dismissibleCode },
              ]} />
            </div>
          </div>
        </div>
      </div>

      {/* Variant Reference */}
      <Section title="Variant Reference">
        <div className="rounded-xl border border-border overflow-hidden text-sm">
          <div className="flex items-start gap-4 border-b border-border px-5 py-4">
            <div className="w-24 shrink-0"><Alert variant="info" className="p-1.5 text-xs"><Info className="h-3 w-3" /><AlertDescription className="text-xs">info</AlertDescription></Alert></div>
            <p className="text-xs text-muted-foreground leading-relaxed"><code className="font-mono text-xs text-foreground">Info</code> — Neutral information, tips, guidance, contextual help.</p>
          </div>
          <div className="flex items-start gap-4 border-b border-border px-5 py-4">
            <div className="w-24 shrink-0"><Alert variant="success" className="p-1.5 text-xs"><CheckCircle2 className="h-3 w-3" /><AlertDescription className="text-xs">success</AlertDescription></Alert></div>
            <p className="text-xs text-muted-foreground leading-relaxed"><code className="font-mono text-xs text-foreground">CheckCircle2</code> — Positive confirmation: saved, published, payment ok.</p>
          </div>
          <div className="flex items-start gap-4 border-b border-border px-5 py-4">
            <div className="w-24 shrink-0"><Alert variant="warning" className="p-1.5 text-xs"><AlertTriangle className="h-3 w-3" /><AlertDescription className="text-xs">warning</AlertDescription></Alert></div>
            <p className="text-xs text-muted-foreground leading-relaxed"><code className="font-mono text-xs text-foreground">AlertTriangle</code> — Caution: approaching limit, deprecated feature, risk.</p>
          </div>
          <div className="flex items-start gap-4 px-5 py-4">
            <div className="w-24 shrink-0"><Alert variant="error" className="p-1.5 text-xs"><XCircle className="h-3 w-3" /><AlertDescription className="text-xs">error</AlertDescription></Alert></div>
            <p className="text-xs text-muted-foreground leading-relaxed"><code className="font-mono text-xs text-foreground">XCircle</code> — Non-blocking error: failed action, validation issue.</p>
          </div>
        </div>
      </Section>

      {/* Do's and Don'ts */}
      <Section title="Do's and Don'ts">
        <DosDonts
          dos={[
            { text: "Always include an icon that matches the variant — colour + icon together communicate intent." },
            { text: "Keep alert text concise: one sentence for the message, one for the action (if any)." },
            { text: 'Use role="alert" so screen readers announce the content immediately when it renders.' },
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

      {/* Keyboard & Accessibility */}
      <Section title="Keyboard & Accessibility">
        <KeyboardTable rows={[
          { keys: ["Tab"],            action: "Move focus to the dismiss button (if present)" },
          { keys: ["Enter", "Space"], action: "Activate the dismiss button"                   },
        ]} />
        <div className="mt-4 rounded-xl border border-border p-5 text-sm">
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-2"><span className="font-mono text-primary shrink-0">role="alert"</span><span>Applied to the alert container — content is announced to screen readers immediately when rendered.</span></li>
            <li className="flex gap-2"><span className="font-mono text-primary shrink-0">aria-live</span><span>Implicitly set to "assertive" by <code className="font-mono">role="alert"</code>. Avoid overusing — only use for genuinely important messages.</span></li>
            <li className="flex gap-2"><span className="font-mono text-primary shrink-0">icons</span><span>Icons are decorative (<code className="font-mono">aria-hidden="true"</code>). Meaning is conveyed by text content.</span></li>
          </ul>
        </div>
      </Section>

      {/* All Props */}
      <Section title="All Props">
        <PropsTable props={[
          { name: "variant",   type: '"info" | "success" | "warning" | "error" | "default" | "destructive"', default: '"default"', description: "Sets the icon colour, border, and background via design tokens." },
          { name: "className", type: "string",    default: "—",         description: 'Use "pr-10" when adding a dismiss button to reserve space.' },
          { name: "children",  type: "ReactNode",  required: true,      description: "Compose with AlertTitle, AlertDescription, and optional Button." },
        ]} />
      </Section>
    </ComponentLayout>
  )
}
