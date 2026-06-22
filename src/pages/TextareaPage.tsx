import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { ComponentLayout, InfoGrid } from "@/components/portal/ComponentLayout"
import { Section, DosDonts, PropsTable, KeyboardTable } from "@/components/portal/Section"
import { CodeTabs } from "@/components/portal/CodeBlock"

// ─── Code snippets ────────────────────────────────────────────────────────────

const statesCode = `import { Textarea } from "@/components/ui/textarea"

// Default
<Textarea placeholder="Type something..." />

// Disabled
<Textarea placeholder="This field is disabled" disabled />

// Read-only
<Textarea
  readOnly
  value="This field is read-only and cannot be edited."
/>

// Error state — red border + ring
<Textarea
  className="border-error focus-visible:ring-error"
  placeholder="Enter description..."
/>

// Success state — green border + ring
<Textarea
  className="border-success focus-visible:ring-success"
  placeholder="Looks good!"
/>`

const withLabelCode = `import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

// Standard field with helper text
<div className="space-y-1.5">
  <Label htmlFor="description">Description</Label>
  <Textarea id="description" placeholder="Add a brief description..." />
  <p className="text-xs text-muted-foreground">
    Brief description of the item visible to all users.
  </p>
</div>

// Required field
<div className="space-y-1.5">
  <Label htmlFor="notes">
    Notes
    <span className="text-error ml-1">*</span>
  </Label>
  <Textarea id="notes" placeholder="Required notes..." />
</div>

// Error with message
<div className="space-y-1.5">
  <Label htmlFor="bio">Bio</Label>
  <Textarea
    id="bio"
    className="border-error focus-visible:ring-error"
    placeholder="Tell us about yourself..."
  />
  <p className="text-xs text-error">
    Bio must be at least 20 characters.
  </p>
</div>`

const resizeBehaviorCode = `import { Textarea } from "@/components/ui/textarea"

// resize-none — fixed height, no user resize handle (default)
<Textarea className="resize-none" placeholder="Fixed height..." />

// resize-y — user can drag to resize vertically only
<Textarea className="resize-y" placeholder="Vertical resize..." />

// resize — user can drag to resize in both directions
<Textarea className="resize" placeholder="Free resize..." />`

const charCountCode = `import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const MAX = 200

export function TextareaWithCounter() {
  const [value, setValue] = useState("")

  return (
    <div className="space-y-1.5">
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={MAX}
        placeholder="Write your message here..."
        rows={4}
      />
      <div className="flex justify-end">
        <span
          className={cn(
            "text-xs",
            value.length > 180 ? "text-error" : "text-muted-foreground"
          )}
        >
          {value.length}/{MAX}
        </span>
      </div>
    </div>
  )
}`

// ─── TextareaPage ─────────────────────────────────────────────────────────────

export default function TextareaPage() {
  const [charValue, setCharValue] = useState("")

  return (
    <ComponentLayout
      name="Textarea"
      description="A multi-line text input field. Wraps the native <textarea> element with consistent design tokens and form state support."
      category="Forms"
      status="stable"
      tags={["Native HTML", "Accessible", "Form"]}
    >
      <InfoGrid items={[
        { label: "Element",  value: "<textarea>" },
        { label: "States",   value: "Default · Focus · Disabled · Read-only" },
        { label: "Resize",   value: "None · Vertical · Both" },
        { label: "WCAG",     value: "AA 2.2" },
      ]} />

      {/* Component API */}
      <Section title="Component API">
        <div className="rounded-xl border border-border overflow-hidden text-sm">
          <div className="bg-neutral-50 dark:bg-neutral-900 px-5 py-3 border-b border-border font-mono text-xs text-muted-foreground">
            {"import { Textarea } from \"@/components/ui/textarea\""}
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-28 shrink-0 font-mono text-xs text-primary">placeholder</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">string</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">—</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Placeholder text shown when empty.</p>
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-28 shrink-0 font-mono text-xs text-primary">disabled</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">boolean</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">false</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Prevents interaction and applies muted styling.</p>
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-28 shrink-0 font-mono text-xs text-primary">readOnly</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">boolean</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">false</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Focusable but not editable.</p>
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-28 shrink-0 font-mono text-xs text-primary">rows</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">number</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">3</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Initial visible row count.</p>
          </div>
          <div className="flex gap-4 border-b border-border px-5 py-3">
            <code className="w-28 shrink-0 font-mono text-xs text-primary">maxLength</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">number</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">—</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Maximum character limit enforced natively.</p>
          </div>
          <div className="flex gap-4 px-5 py-3">
            <code className="w-28 shrink-0 font-mono text-xs text-primary">className</code>
            <code className="flex-1 min-w-0 font-mono text-xs text-muted-foreground hidden sm:block">string</code>
            <code className="w-24 shrink-0 font-mono text-xs text-muted-foreground hidden md:block">—</code>
            <p className="w-64 shrink-0 text-muted-foreground text-xs leading-relaxed hidden lg:block">Merged onto the textarea element via cn().</p>
          </div>
        </div>
      </Section>

      {/* Overview */}
      <Section title="Overview">
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            Use Textarea whenever users need to enter more than one line of free-form text. For a single short value
            like a name or email address, prefer <code className="font-mono">Input</code> instead.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-success/20 bg-success/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When to Use</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Multi-line text like comments or descriptions</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Long-form user input</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Notes and annotation fields</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Message composition</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Bio or About fields</li>
              </ul>
            </div>
            <div className="rounded-xl border border-warning/20 bg-warning/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When NOT to Use</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Single-line input — use Input instead</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Structured data entry — use multiple Inputs</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Very short text like names or emails</li>
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
            <p className="text-sm text-muted-foreground">All visual states — default, disabled, read-only, error, and success.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Default (interactive)</p>
                <Textarea placeholder="Type something..." />
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Disabled</p>
                <Textarea placeholder="This field is disabled" disabled />
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Read-only</p>
                <Textarea readOnly value="This field is read-only and cannot be edited." />
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Error state</p>
                <Textarea
                  className="border-error focus-visible:ring-error"
                  placeholder="Enter description..."
                />
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Success state</p>
                <Textarea
                  className="border-success focus-visible:ring-success"
                  placeholder="Looks good!"
                />
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: statesCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* ── With Label & Helper Text ─────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">With Label &amp; Helper Text</h3>
            <p className="text-sm text-muted-foreground">Associate a Label and provide context with helper or error text below the field.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Standard field</p>
                <div className="space-y-1.5">
                  <Label htmlFor="desc-standard">Description</Label>
                  <Textarea id="desc-standard" placeholder="Add a brief description..." />
                  <p className="text-xs text-muted-foreground">Brief description visible to all users.</p>
                </div>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Required field</p>
                <div className="space-y-1.5">
                  <Label htmlFor="desc-required">
                    Notes
                    <span className="text-error ml-1">*</span>
                  </Label>
                  <Textarea id="desc-required" placeholder="Required notes..." />
                </div>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Error with message</p>
                <div className="space-y-1.5">
                  <Label htmlFor="desc-error">Bio</Label>
                  <Textarea
                    id="desc-error"
                    className="border-error focus-visible:ring-error"
                    placeholder="Tell us about yourself..."
                  />
                  <p className="text-xs text-error">Bio must be at least 20 characters.</p>
                </div>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: withLabelCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Resize Behavior ──────────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Resize Behavior</h3>
            <p className="text-sm text-muted-foreground">Control the resize handle with a single Tailwind utility class.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">resize-none (default)</p>
                <Textarea className="resize-none" placeholder="Fixed height — no resize handle." />
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">resize-y (vertical)</p>
                <Textarea className="resize-y" placeholder="Drag the corner to resize vertically." />
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">resize (both)</p>
                <Textarea className="resize" placeholder="Drag the corner to resize freely." />
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: resizeBehaviorCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Character Count ──────────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Character Count</h3>
            <p className="text-sm text-muted-foreground">Track input length and warn when approaching the <code className="font-mono">maxLength</code> limit.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">With counter (max 200)</p>
                <div className="space-y-1.5">
                  <Textarea
                    value={charValue}
                    onChange={(e) => setCharValue(e.target.value)}
                    maxLength={200}
                    placeholder="Write your message here..."
                    rows={4}
                  />
                  <div className="flex justify-end">
                    <span
                      className={cn(
                        "text-xs",
                        charValue.length > 180 ? "text-error" : "text-muted-foreground"
                      )}
                    >
                      {charValue.length}/200
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: charCountCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* Do's and Don'ts */}
      <Section title="Do's and Don'ts">
        <DosDonts
          dos={[
            { text: "Set a minimum rows height that matches the expected content length." },
            { text: "Always associate a Label using htmlFor — screen readers depend on it." },
            { text: "Provide helper text for format hints or constraints." },
            { text: "Show a character count when a maxLength is set." },
            { text: "Use resize-none for fixed-height fields where overflow should be scrolled." },
          ]}
          donts={[
            { text: "Don't use Textarea for single-line input — use Input instead." },
            { text: "Don't auto-resize the height without setting user expectations." },
            { text: "Don't use maxLength without showing a counter — users can't see the limit." },
            { text: "Don't place in a layout that clips the overflow, hiding user-typed content." },
          ]}
        />
      </Section>

      {/* Keyboard */}
      <Section title="Keyboard & Accessibility">
        <KeyboardTable rows={[
          { keys: ["Tab"],       action: "Move focus into the textarea" },
          { keys: ["Shift+Tab"], action: "Move focus out" },
          { keys: ["Ctrl+A"],    action: "Select all text" },
          { keys: ["Enter"],     action: "Insert a new line" },
        ]} />
      </Section>

      {/* Props */}
      <Section title="All Props">
        <PropsTable props={[
          { name: "placeholder", type: "string",  default: "—",     description: "Placeholder text shown when the field is empty." },
          { name: "disabled",    type: "boolean", default: "false", description: "Prevents interaction and applies muted styling." },
          { name: "readOnly",    type: "boolean", default: "false", description: "Focusable but not editable." },
          { name: "rows",        type: "number",  default: "3",     description: "Initial visible row count." },
          { name: "maxLength",   type: "number",  default: "—",     description: "Maximum character limit enforced natively." },
          { name: "className",   type: "string",  default: "—",     description: "Merged onto the textarea element via cn()." },
        ]} />
      </Section>
    </ComponentLayout>
  )
}
