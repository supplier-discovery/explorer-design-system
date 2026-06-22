import { useState } from "react"
import { AlertTriangle, Trash2, LogOut, Settings } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ComponentLayout, InfoGrid } from "@/components/portal/ComponentLayout"
import { Section, DosDonts, PropsTable, KeyboardTable } from "@/components/portal/Section"
import { CodeTabs } from "@/components/portal/CodeBlock"

// ─── Code examples ────────────────────────────────────────────────────────────

const shadcnCode = `// Install: npx shadcn@latest add dialog

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Basic dialog — uncontrolled with DialogTrigger
<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile. Click save when you're done.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid gap-1.5">
        <Label htmlFor="name">Name</Label>
        <Input id="name" defaultValue="Pedro Duarte" />
      </div>
    </div>
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

// Destructive confirmation
<Dialog>
  <DialogTrigger asChild>
    <Button variant="destructive">Delete Account</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-md">
    <DialogHeader>
      <DialogTitle>Delete Account?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. All data will be permanently deleted.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Delete Account</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`

const tailwindCode = `{/* Dialog with Tailwind — use a state variable to control open/close */}

{open && (
  <>
    {/* Backdrop */}
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    />

    {/* Panel */}
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
      className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2
        w-[calc(100vw-2rem)] max-w-lg rounded-2xl border border-border
        bg-background shadow-elevation-5 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 p-6 pb-0">
        <div>
          <h2 id="dialog-title" className="text-lg font-semibold text-foreground">
            Edit Profile
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Make changes to your profile.
          </p>
        </div>
        <button
          onClick={() => setOpen(false)}
          aria-label="Close dialog"
          className="rounded-lg p-2 text-muted-foreground hover:bg-surface-hover"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Body */}
      <div className="p-6">...</div>

      {/* Footer */}
      <div className="flex items-center justify-end gap-3 border-t border-border px-6 py-4">
        <button onClick={() => setOpen(false)} className="rounded-lg border border-border px-4 py-2 text-sm font-medium">
          Cancel
        </button>
        <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white">
          Save Changes
        </button>
      </div>
    </div>
  </>
)}`

// ─── DialogPage ───────────────────────────────────────────────────────────────

export default function DialogPage() {
  const [openBasic, setOpenBasic]             = useState(false)
  const [openConfirm, setOpenConfirm]         = useState(false)
  const [openDestructive, setOpenDestructive] = useState(false)
  const [openLarge, setOpenLarge]             = useState(false)

  return (
    <ComponentLayout
      name="Dialog"
      description="A modal overlay that interrupts user flow to request confirmation, collect input, or display critical information."
      category="Overlays"
      status="stable"
      tags={["shadcn/ui", "Radix UI", "Accessible", "Modal"]}
    >
      <InfoGrid items={[
        { label: "Sizes",    value: "3 (sm / md / lg)"         },
        { label: "Trigger",  value: "Any button or element"    },
        { label: "Focus",    value: "Trap + restore on close"  },
        { label: "WCAG",     value: "AA 2.2"                   },
      ]} />

      {/* Component API */}
      <Section title="Component API">
        <div className="rounded-xl border border-border overflow-hidden text-sm">
          <div className="bg-neutral-50 dark:bg-neutral-900 px-5 py-3 border-b border-border font-mono text-xs text-muted-foreground">
            {'import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"'}
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-24 shrink-0 font-mono text-xs text-primary">open</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">boolean</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">required</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Controls visibility of the dialog.</p>
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-24 shrink-0 font-mono text-xs text-primary">onOpenChange</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">(open: boolean) =&gt; void</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">required</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Called when dialog should open or close.</p>
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-24 shrink-0 font-mono text-xs text-primary">modal</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">boolean</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">true</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">When true, renders a backdrop and traps focus.</p>
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-24 shrink-0 font-mono text-xs text-primary">DialogContent</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">div props</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">—</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">The dialog panel. Use className for max-width overrides.</p>
          </div>
          <div className="flex gap-4 px-5 py-3">
            <code className="w-24 shrink-0 font-mono text-xs text-primary">DialogTrigger</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">button props</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">—</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Wraps the trigger. Use asChild with your own button.</p>
          </div>
        </div>
      </Section>

      {/* Overview */}
      <Section title="Overview">
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            Dialogs (modals) interrupt the main workflow and demand attention. They are backed by
            a darkened overlay and trap focus until dismissed. Use Radix UI's Dialog primitive
            (via shadcn/ui) to get focus-trapping, keyboard dismissal, and ARIA attributes out of the box.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-success/20 bg-success/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When to Use</p>
              <ul className="space-y-1.5">
                {["Confirmation dialogs (delete, sign out)", "Short forms that don't merit a new page", "Important warnings requiring an explicit decision", "Image lightboxes or detail views"].map((i) => (
                  <li key={i} className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />{i}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-warning/20 bg-warning/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When NOT to Use</p>
              <ul className="space-y-1.5">
                {["Long multi-step flows — use a full page", "Non-critical messages — use an Alert or Toast", "Stacking multiple dialogs — use steps within one", "Mobile: very tall dialogs — use a Sheet (bottom drawer)"].map((i) => (
                  <li key={i} className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <hr className="border-border" />

      {/* ── Dialog Types ─────────────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Dialog Types</h3>
            <p className="text-sm text-muted-foreground">Click any trigger to open the dialog. All demos are controlled — state lives in the page component.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">

              {/* Basic dialog */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Basic dialog</p>
                <Button variant="outline" onClick={() => setOpenBasic(true)}>Open Basic Dialog</Button>
                <Dialog open={openBasic} onOpenChange={setOpenBasic}>
                  <DialogContent className="rounded-2xl max-w-lg">
                    <DialogHeader>
                      <DialogTitle>Edit Profile</DialogTitle>
                      <DialogDescription>Make changes to your profile. Click save when you're done.</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="flex flex-col gap-1.5">
                        <Label htmlFor="display-name">Display Name</Label>
                        <Input id="display-name" defaultValue="Shankar M." />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <Label htmlFor="display-email">Email</Label>
                        <Input id="display-email" type="email" defaultValue="shankar@supplier.io" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setOpenBasic(false)}>Cancel</Button>
                      <Button onClick={() => setOpenBasic(false)}>Save Changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Confirmation dialog */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Confirmation dialog</p>
                <Button onClick={() => setOpenConfirm(true)} className="gap-2">
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </Button>
                <Dialog open={openConfirm} onOpenChange={setOpenConfirm}>
                  <DialogContent className="rounded-2xl max-w-lg">
                    <DialogHeader>
                      <DialogTitle>Sign out?</DialogTitle>
                      <DialogDescription>You will be signed out from all devices. Any unsaved changes will be lost.</DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setOpenConfirm(false)}>Cancel</Button>
                      <Button onClick={() => setOpenConfirm(false)}>Sign Out</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Destructive confirmation */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Destructive confirmation</p>
                <Button variant="destructive" onClick={() => setOpenDestructive(true)} className="gap-2">
                  <Trash2 className="h-4 w-4" />
                  Delete Record
                </Button>
                <Dialog open={openDestructive} onOpenChange={setOpenDestructive}>
                  <DialogContent className="rounded-2xl max-w-sm">
                    <DialogHeader className="sr-only">
                      <DialogTitle>Delete Record</DialogTitle>
                    </DialogHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-error/10">
                        <AlertTriangle className="h-5 w-5 text-error" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Delete Record?</p>
                        <p className="mt-1 text-sm text-muted-foreground">This action cannot be undone. The record and all associated data will be permanently removed from our servers.</p>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setOpenDestructive(false)}>Cancel</Button>
                      <Button variant="destructive" onClick={() => setOpenDestructive(false)}>Delete Permanently</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Large dialog */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Large dialog</p>
                <Button variant="outline" onClick={() => setOpenLarge(true)} className="gap-2">
                  <Settings className="h-4 w-4" />
                  Advanced Settings
                </Button>
                <Dialog open={openLarge} onOpenChange={setOpenLarge}>
                  <DialogContent className="rounded-2xl max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Advanced Settings</DialogTitle>
                      <DialogDescription>Configure advanced preferences for your workspace.</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-5">
                      {["Data retention policy", "Two-factor authentication", "API access tokens", "Audit log export"].map((item) => (
                        <div key={item} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                          <div>
                            <p className="text-sm font-medium text-foreground">{item}</p>
                            <p className="text-xs text-muted-foreground">Configure {item.toLowerCase()}</p>
                          </div>
                          <Button variant="outline" size="sm">Configure</Button>
                        </div>
                      ))}
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setOpenLarge(false)}>Cancel</Button>
                      <Button onClick={() => setOpenLarge(false)}>Apply Settings</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[
                { label: "shadcn/ui", code: shadcnCode,   language: "tsx" },
                { label: "Tailwind",  code: tailwindCode, language: "tsx" },
              ]} />
            </div>
          </div>
        </div>
      </div>

      {/* Sizes */}
      <Section title="Sizes">
        <div className="rounded-xl border border-border overflow-hidden text-sm">
          {[
            { size: "sm", maxWidth: "max-w-sm (384px)",    usage: "Confirmation dialogs, simple alerts" },
            { size: "md", maxWidth: "max-w-lg (512px)",    usage: "Default — forms, settings, details" },
            { size: "lg", maxWidth: "max-w-2xl (672px)",   usage: "Complex forms, content previews"     },
          ].map(({ size, maxWidth, usage }) => (
            <div key={size} className="flex gap-4 border-b border-border last:border-0 px-5 py-3">
              <code className="w-8 shrink-0 font-mono text-xs text-primary">{size}</code>
              <code className="w-44 shrink-0 font-mono text-xs text-muted-foreground">{maxWidth}</code>
              <p className="text-xs text-muted-foreground">{usage}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Do's and Don'ts */}
      <Section title="Do's and Don'ts">
        <DosDonts
          dos={[
            { text: "Always provide a visible close button and support Escape key to dismiss." },
            { text: "Use a descriptive title and a clear, concise description for context." },
            { text: "Move initial focus to the first interactive element or the dialog container." },
            { text: "For destructive actions, make the cancel button the visually dominant option." },
          ]}
          donts={[
            { text: "Don't open a dialog from inside another dialog — use steps within a single dialog." },
            { text: "Don't use dialogs for non-critical messages that don't require user action." },
            { text: "Don't put scrollable tables or data grids inside a dialog." },
            { text: "Don't close a dialog on backdrop click if there is unsaved form data — warn the user first." },
          ]}
        />
      </Section>

      {/* Keyboard & Accessibility */}
      <Section title="Keyboard & Accessibility">
        <KeyboardTable rows={[
          { keys: ["Tab"],        action: "Move focus forward through focusable elements inside the dialog" },
          { keys: ["Shift+Tab"],  action: "Move focus backward inside the dialog" },
          { keys: ["Escape"],     action: "Close the dialog and restore focus to the trigger element" },
        ]} />
        <div className="mt-4 rounded-xl border border-border p-5 text-sm">
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-2"><span className="font-mono text-primary shrink-0">role="dialog"</span><span>Applied to the panel. <code className="font-mono">aria-modal="true"</code> tells screen readers to ignore the background content.</span></li>
            <li className="flex gap-2"><span className="font-mono text-primary shrink-0">aria-labelledby</span><span>Points to the DialogTitle id — screen readers announce it as the dialog's accessible name.</span></li>
            <li className="flex gap-2"><span className="font-mono text-primary shrink-0">aria-describedby</span><span>Points to the DialogDescription id — announces description to screen reader users on open.</span></li>
            <li className="flex gap-2"><span className="font-mono text-primary shrink-0">Focus trap</span><span>Radix UI traps focus inside the dialog. When closed, focus is restored to the element that triggered the dialog.</span></li>
          </ul>
        </div>
      </Section>

      {/* All Props */}
      <Section title="All Props">
        <PropsTable props={[
          { name: "open",               type: "boolean",                  required: true,   description: "Controls visibility of the dialog." },
          { name: "onOpenChange",       type: "(open: boolean) => void",  required: true,   description: "Called when dialog should open or close." },
          { name: "modal",              type: "boolean",                  default: "true",  description: "When true, renders a backdrop and traps focus." },
          { name: "DialogContent",      type: "div props",                default: "—",     description: "The dialog panel. Accepts className for size overrides." },
          { name: "DialogHeader",       type: "div props",                default: "—",     description: "Container for DialogTitle and DialogDescription." },
          { name: "DialogTitle",        type: "h2 props",                 default: "—",     description: "Dialog heading — linked to aria-labelledby." },
          { name: "DialogDescription",  type: "p props",                  default: "—",     description: "Subtitle — linked to aria-describedby." },
          { name: "DialogFooter",       type: "div props",                default: "—",     description: "Action buttons row at the bottom." },
          { name: "DialogTrigger",      type: "button props",             default: "—",     description: "Wraps the trigger element. Use asChild with your own button." },
        ]} />
      </Section>
    </ComponentLayout>
  )
}
