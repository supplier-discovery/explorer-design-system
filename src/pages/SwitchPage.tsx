import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ComponentLayout, InfoGrid } from "@/components/portal/ComponentLayout"
import { Section, DosDonts, PropsTable, KeyboardTable } from "@/components/portal/Section"
import { CodeTabs } from "@/components/portal/CodeBlock"

// ─── Code snippets ────────────────────────────────────────────────────────────

const statesCode = `import { useState } from "react"
import { Switch } from "@/components/ui/switch"

// Controlled off (default)
const [enabled, setEnabled] = useState(false)
<Switch checked={enabled} onCheckedChange={setEnabled} />

// Controlled on (starts checked)
const [active, setActive] = useState(true)
<Switch checked={active} onCheckedChange={setActive} />

// Disabled — off
<Switch disabled />

// Disabled — on
<Switch disabled defaultChecked />`

const withLabelCode = `import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

// Label on the right — htmlFor wires the click target
<div className="flex items-center gap-3">
  <Switch id="notifications" />
  <Label htmlFor="notifications">Notifications</Label>
</div>

// Label with supporting description
<div className="flex items-center justify-between gap-4">
  <div>
    <Label htmlFor="dark-mode" className="text-sm font-medium">
      Dark mode
    </Label>
    <p className="text-xs text-muted-foreground mt-0.5">
      Switch between light and dark themes
    </p>
  </div>
  <Switch id="dark-mode" defaultChecked />
</div>`

const settingsListCode = `import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

const [settings, setSettings] = useState({
  email: true,
  push: false,
  marketing: false,
})

const toggle = (key: keyof typeof settings) =>
  setSettings((prev) => ({ ...prev, [key]: !prev[key] }))

<div className="rounded-xl border border-border overflow-hidden">
  {/* Email notifications */}
  <div className="flex items-center justify-between gap-4 px-4 py-4 border-b border-border">
    <div>
      <Label htmlFor="email" className="text-sm font-medium">
        Email notifications
      </Label>
      <p className="text-xs text-muted-foreground mt-0.5">
        Receive updates via email
      </p>
    </div>
    <Switch
      id="email"
      checked={settings.email}
      onCheckedChange={() => toggle("email")}
    />
  </div>

  {/* Push notifications */}
  <div className="flex items-center justify-between gap-4 px-4 py-4 border-b border-border">
    <div>
      <Label htmlFor="push" className="text-sm font-medium">
        Push notifications
      </Label>
      <p className="text-xs text-muted-foreground mt-0.5">
        Get alerts on your device
      </p>
    </div>
    <Switch
      id="push"
      checked={settings.push}
      onCheckedChange={() => toggle("push")}
    />
  </div>

  {/* Marketing emails */}
  <div className="flex items-center justify-between gap-4 px-4 py-4">
    <div>
      <Label htmlFor="marketing" className="text-sm font-medium">
        Marketing emails
      </Label>
      <p className="text-xs text-muted-foreground mt-0.5">
        Promotional content
      </p>
    </div>
    <Switch
      id="marketing"
      checked={settings.marketing}
      onCheckedChange={() => toggle("marketing")}
    />
  </div>
</div>`

// ─── SwitchPage ───────────────────────────────────────────────────────────────

export default function SwitchPage() {
  const [switchOff, setSwitchOff] = useState(false)
  const [switchOn, setSwitchOn] = useState(true)
  const [emailNotif, setEmailNotif] = useState(true)
  const [pushNotif, setPushNotif] = useState(false)
  const [marketingNotif, setMarketingNotif] = useState(false)

  return (
    <ComponentLayout
      name="Switch"
      description="A control that allows the user to toggle between on and off states. Built on @radix-ui/react-switch — the button itself is the click target, no label delegation required."
      category="Forms"
      status="stable"
      tags={["Radix UI", "Accessible", "Form"]}
    >
      <InfoGrid items={[
        { label: "Component",  value: "Switch" },
        { label: "States",     value: "Default · Checked · Disabled" },
        { label: "WCAG",       value: "AA 2.2" },
        { label: "Primitive",  value: "@radix-ui/react-switch" },
      ]} />

      {/* Component API */}
      <Section title="Component API">
        <div className="rounded-xl border border-border overflow-hidden text-sm">
          <div className="bg-neutral-50 dark:bg-neutral-900 px-5 py-3 border-b border-border font-mono text-xs text-muted-foreground">
            {"import { Switch } from \"@/components/ui/switch\""}
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-36 shrink-0 font-mono text-xs text-primary">checked</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">boolean</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">—</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Controlled on/off state.</p>
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-36 shrink-0 font-mono text-xs text-primary">defaultChecked</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">boolean</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">false</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Initial uncontrolled state.</p>
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-36 shrink-0 font-mono text-xs text-primary">onCheckedChange</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">(checked: boolean) =&gt; void</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">—</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Callback when toggled.</p>
          </div>
          <div className="flex gap-4 px-5 py-3">
            <code className="w-36 shrink-0 font-mono text-xs text-primary">disabled</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">boolean</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">false</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Prevents interaction.</p>
          </div>
        </div>
      </Section>

      {/* Overview */}
      <Section title="Overview">
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            The Switch communicates an immediate binary change — flipping it takes effect right away without
            requiring a form submission. Use it for settings and preferences where the result is instant and reversible.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-success/20 bg-success/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When to Use</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Toggle system settings on/off</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Enable/disable features</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Opt-in to preferences</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Settings panels and preference pages</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Real-time effect toggles</li>
              </ul>
            </div>
            <div className="rounded-xl border border-warning/20 bg-warning/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When NOT to Use</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Selecting one item from a list — use a radio button</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Choices that require confirmation before taking effect</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Toggling more than two states</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <hr className="border-border" />

      {/* ── States ───────────────────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">States</h3>
            <p className="text-sm text-muted-foreground">All interactive and disabled states for the Switch component.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Off (interactive)</p>
                <Switch
                  checked={switchOff}
                  onCheckedChange={setSwitchOff}
                  aria-label="Toggle off example"
                />
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">On (interactive)</p>
                <Switch
                  checked={switchOn}
                  onCheckedChange={setSwitchOn}
                  aria-label="Toggle on example"
                />
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Disabled Off</p>
                <Switch disabled aria-label="Disabled off switch" />
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Disabled On</p>
                <Switch disabled defaultChecked aria-label="Disabled on switch" />
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: statesCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* ── With Label ───────────────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">With Label</h3>
            <p className="text-sm text-muted-foreground">Pairing a Switch with a Label using <code className="font-mono">htmlFor</code> — the whole label becomes a click target.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Label on right</p>
                <div className="flex items-center gap-3">
                  <Switch id="s1" />
                  <Label htmlFor="s1">Notifications</Label>
                </div>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Label with description</p>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <Label htmlFor="s2" className="text-sm font-medium">Dark mode</Label>
                    <p className="text-xs text-muted-foreground mt-0.5">Switch between light and dark themes</p>
                  </div>
                  <Switch id="s2" defaultChecked />
                </div>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: withLabelCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Settings List ────────────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Settings List</h3>
            <p className="text-sm text-muted-foreground">A realistic settings panel pattern — label + description on the left, Switch on the right.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 overflow-hidden">
              <div className="px-4">
                <div className="flex items-center justify-between gap-4 py-4 border-b border-border">
                  <div>
                    <p className="font-medium text-sm text-foreground">Email notifications</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Receive updates via email</p>
                  </div>
                  <Switch
                    id="settings-email"
                    checked={emailNotif}
                    onCheckedChange={setEmailNotif}
                  />
                </div>
                <div className="flex items-center justify-between gap-4 py-4 border-b border-border">
                  <div>
                    <p className="font-medium text-sm text-foreground">Push notifications</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Get alerts on your device</p>
                  </div>
                  <Switch
                    id="settings-push"
                    checked={pushNotif}
                    onCheckedChange={setPushNotif}
                  />
                </div>
                <div className="flex items-center justify-between gap-4 py-4">
                  <div>
                    <p className="font-medium text-sm text-foreground">Marketing emails</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Promotional content</p>
                  </div>
                  <Switch
                    id="settings-marketing"
                    checked={marketingNotif}
                    onCheckedChange={setMarketingNotif}
                  />
                </div>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: settingsListCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* Do's and Don'ts */}
      <Section title="Do's and Don'ts">
        <DosDonts
          dos={[
            { text: "Use for binary on/off settings — immediate, reversible effect." },
            { text: "Pair with a clear, concise label so the purpose is unambiguous." },
            { text: "Show the immediate effect of the toggle without requiring confirmation." },
            { text: "Use in settings and preference panels where changes take effect instantly." },
            { text: "Ensure a minimum 44px touch target — critical on mobile." },
          ]}
          donts={[
            { text: "Don't use for multi-step or multi-option selections — use a radio group." },
            { text: "Don't use without a label; the visual alone is not sufficient context." },
            { text: "Don't require a confirmation step after toggling — use a dialog for that." },
            { text: "Don't use instead of a checkbox for form data that is submitted." },
          ]}
        />
      </Section>

      {/* Keyboard */}
      <Section title="Keyboard & Accessibility">
        <KeyboardTable rows={[
          { keys: ["Space", "Enter"], action: "Toggle the switch" },
          { keys: ["Tab"],            action: "Move focus to the switch" },
          { keys: ["Shift+Tab"],      action: "Move focus backwards" },
        ]} />
      </Section>

      {/* Props */}
      <Section title="All Props">
        <PropsTable props={[
          { name: "checked",          type: "boolean",                      default: "—",     description: "Controlled on/off state." },
          { name: "defaultChecked",   type: "boolean",                      default: "false", description: "Initial uncontrolled state." },
          { name: "onCheckedChange",  type: "(checked: boolean) => void",   default: "—",     description: "Callback when toggled." },
          { name: "disabled",         type: "boolean",                      default: "false", description: "Prevents interaction." },
          { name: "className",        type: "string",                       default: "—",     description: "Merged onto the switch element." },
        ]} />
      </Section>
    </ComponentLayout>
  )
}
