import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ComponentLayout, InfoGrid } from "@/components/portal/ComponentLayout"
import { Section, DosDonts, KeyboardTable } from "@/components/portal/Section"
import { CodeTabs } from "@/components/portal/CodeBlock"

const anatomyCode = `import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Standard field
<div className="space-y-1.5">
  <Label htmlFor="email">Email address</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
  <p className="text-xs text-muted-foreground">We'll never share your email.</p>
</div>

// Required field
<div className="space-y-1.5">
  <Label htmlFor="name">
    Full name<span className="text-error ml-1">*</span>
  </Label>
  <Input id="name" placeholder="Jane Doe" />
</div>

// Error state
<div className="space-y-1.5">
  <Label htmlFor="password">Password</Label>
  <Input
    id="password"
    type="password"
    className="border-error focus-visible:ring-error"
  />
  <p className="text-xs text-error">Password must be at least 8 characters.</p>
</div>`

const stackedCode = `import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

<div className="space-y-4 max-w-sm">
  <div className="space-y-1.5">
    <Label htmlFor="fn">
      Full Name<span className="text-error ml-1">*</span>
    </Label>
    <Input id="fn" placeholder="Jane Doe" />
  </div>
  <div className="space-y-1.5">
    <Label htmlFor="em">
      Email<span className="text-error ml-1">*</span>
    </Label>
    <Input id="em" type="email" placeholder="you@example.com" />
  </div>
  <div className="space-y-1.5">
    <Label htmlFor="ro">Role</Label>
    <Input id="ro" placeholder="e.g. Product Designer" />
  </div>
  <div className="space-y-1.5">
    <Label htmlFor="bio">Bio</Label>
    <Textarea id="bio" placeholder="Tell us about yourself..." rows={3} />
  </div>
  <div className="flex gap-2 pt-2">
    <Button variant="default">Save changes</Button>
    <Button variant="outline">Cancel</Button>
  </div>
</div>`

const gridCode = `import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div className="space-y-1.5">
    <Label htmlFor="gfn">
      Full Name<span className="text-error ml-1">*</span>
    </Label>
    <Input id="gfn" placeholder="Jane Doe" />
  </div>
  <div className="space-y-1.5">
    <Label htmlFor="gem">
      Email<span className="text-error ml-1">*</span>
    </Label>
    <Input id="gem" type="email" placeholder="you@example.com" />
  </div>
  <div className="space-y-1.5">
    <Label htmlFor="gro">Role</Label>
    <Input id="gro" placeholder="e.g. Product Designer" />
  </div>
  <div className="space-y-1.5 sm:col-span-2">
    <Label htmlFor="gbio">Bio</Label>
    <Textarea id="gbio" placeholder="Tell us about yourself..." rows={3} />
  </div>
</div>
<div className="flex gap-2 pt-2">
  <Button variant="default">Save changes</Button>
  <Button variant="outline">Cancel</Button>
</div>`

const inlineCode = `import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

<div className="space-y-3 max-w-lg">
  <div className="flex items-center gap-4">
    <Label htmlFor="il1" className="w-28 text-right shrink-0">Full name</Label>
    <Input id="il1" placeholder="Jane Doe" />
  </div>
  <div className="flex items-center gap-4">
    <Label htmlFor="il2" className="w-28 text-right shrink-0">Email</Label>
    <Input id="il2" type="email" placeholder="you@example.com" />
  </div>
  <div className="flex items-center gap-4">
    <Label htmlFor="il3" className="w-28 text-right shrink-0">Role</Label>
    <Input id="il3" placeholder="Product Designer" />
  </div>
</div>`

const apiAnatomyCode = `import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Basic anatomy — Label + Input + helper text
<div className="space-y-1.5">
  <Label htmlFor="field-id">Label text</Label>
  <Input id="field-id" placeholder="Placeholder" />
  <p className="text-xs text-muted-foreground">Helper or error text goes here.</p>
</div>`

export default function FieldPage() {
  return (
    <ComponentLayout
      name="Field"
      description="A composable form field wrapper — Label, Input, and helper/error text assembled into reusable form layouts. Use to build consistent forms across the product."
      category="Forms"
      status="stable"
      tags={["Native HTML", "Accessible", "Form"]}
    >
      <InfoGrid
        items={[
          { label: "Pattern", value: "Label + Input + Helper" },
          { label: "Indicators", value: "Required · Optional" },
          { label: "Layout", value: "Stacked · Inline · Grid" },
          { label: "WCAG", value: "AA 2.2" },
        ]}
      />

      {/* Component API */}
      <Section title="Component API">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            A Field is not a single component — it is a composition of{" "}
            <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">Label</code>,{" "}
            <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">Input</code>, and helper/error text.
            There is no <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">&lt;Field&gt;</code> wrapper;
            assemble the pieces directly.
          </p>
          <CodeTabs tabs={[{ label: "shadcn/ui", code: apiAnatomyCode, language: "tsx" }]} />
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted text-left">
                  <th className="px-4 py-2 font-semibold text-foreground">Piece</th>
                  <th className="px-4 py-2 font-semibold text-foreground">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { name: "Label", purpose: "Associates a text label with its control via htmlFor/id" },
                  { name: "Input / Textarea", purpose: "The native form control — accepts all standard HTML attributes" },
                  { name: "Helper text", purpose: "Plain <p> below the input for hints or constraints" },
                  { name: "Error text", purpose: "Same <p> styled with text-error to surface validation failures" },
                ].map((row) => (
                  <tr key={row.name} className="hover:bg-muted/50">
                    <td className="px-4 py-2 font-mono text-xs text-foreground">{row.name}</td>
                    <td className="px-4 py-2 text-muted-foreground">{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Overview */}
      <Section title="Overview">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-lg border border-success/25 bg-success/5 p-4 space-y-2">
            <p className="text-sm font-semibold text-success">When to use</p>
            <ul className="space-y-1 text-sm text-foreground list-disc list-inside">
              <li>Every form field needs a label</li>
              <li>Providing input hints or constraints</li>
              <li>Showing error validation messages</li>
              <li>Consistent form layouts across the product</li>
            </ul>
          </div>
          <div className="rounded-lg border border-warning/25 bg-warning/5 p-4 space-y-2">
            <p className="text-sm font-semibold text-warning">When NOT to use</p>
            <ul className="space-y-1 text-sm text-foreground list-disc list-inside">
              <li>When context makes the label obvious (search bars with icons)</li>
              <li>Inline editing without a full form layout</li>
            </ul>
          </div>
        </div>
      </Section>

      <hr className="border-border" />

      {/* Demo Block 1: Field Anatomy */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Field Anatomy</h3>
            <p className="text-sm text-muted-foreground">The three core field states — standard, required, and error.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Standard field</p>
                <div className="space-y-1.5">
                  <Label htmlFor="f1">Email address</Label>
                  <Input id="f1" type="email" placeholder="you@example.com" />
                  <p className="text-xs text-muted-foreground">We'll never share your email.</p>
                </div>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Required field</p>
                <div className="space-y-1.5">
                  <Label htmlFor="f2">Full name<span className="text-error ml-1">*</span></Label>
                  <Input id="f2" placeholder="Jane Doe" />
                </div>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Error state</p>
                <div className="space-y-1.5">
                  <Label htmlFor="f3">Password</Label>
                  <Input id="f3" type="password" className="border-error focus-visible:ring-error" />
                  <p className="text-xs text-error">Password must be at least 8 characters.</p>
                </div>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: anatomyCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* Demo Block 2: Stacked Form Layout */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Stacked Form Layout</h3>
            <p className="text-sm text-muted-foreground">A realistic multi-field vertical form — the most common pattern.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Vertical stacked</p>
                <div className="space-y-4 max-w-sm">
                  <div className="space-y-1.5">
                    <Label htmlFor="fn">Full Name<span className="text-error ml-1">*</span></Label>
                    <Input id="fn" placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="em">Email<span className="text-error ml-1">*</span></Label>
                    <Input id="em" type="email" placeholder="you@example.com" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="ro">Role</Label>
                    <Input id="ro" placeholder="e.g. Product Designer" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" placeholder="Tell us about yourself..." rows={3} />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button variant="default">Save changes</Button>
                    <Button variant="outline">Cancel</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: stackedCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* Demo Block 3: Two-Column Grid Form */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Two-Column Grid Form</h3>
            <p className="text-sm text-muted-foreground">Same fields arranged in a responsive two-column grid for wider screens.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">2-column grid</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="gfn">Full Name<span className="text-error ml-1">*</span></Label>
                    <Input id="gfn" placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="gem">Email<span className="text-error ml-1">*</span></Label>
                    <Input id="gem" type="email" placeholder="you@example.com" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="gro">Role</Label>
                    <Input id="gro" placeholder="e.g. Product Designer" />
                  </div>
                  <div className="space-y-1.5 sm:col-span-2">
                    <Label htmlFor="gbio">Bio</Label>
                    <Textarea id="gbio" placeholder="Tell us about yourself..." rows={3} />
                  </div>
                </div>
                <div className="flex gap-2 pt-4">
                  <Button variant="default">Save changes</Button>
                  <Button variant="outline">Cancel</Button>
                </div>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: gridCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* Demo Block 4: Inline / Side-by-Side */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Inline / Side-by-Side</h3>
            <p className="text-sm text-muted-foreground">Label on the left with fixed width, input stretches to fill remaining space.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Label left, input right</p>
                <div className="space-y-3 max-w-lg">
                  <div className="flex items-center gap-4">
                    <Label htmlFor="il1" className="w-28 text-right shrink-0">Full name</Label>
                    <Input id="il1" placeholder="Jane Doe" />
                  </div>
                  <div className="flex items-center gap-4">
                    <Label htmlFor="il2" className="w-28 text-right shrink-0">Email</Label>
                    <Input id="il2" type="email" placeholder="you@example.com" />
                  </div>
                  <div className="flex items-center gap-4">
                    <Label htmlFor="il3" className="w-28 text-right shrink-0">Role</Label>
                    <Input id="il3" placeholder="Product Designer" />
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: inlineCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* Do's and Don'ts */}
      <Section title="Do's and Don'ts">
        <DosDonts
          dos={[
            { text: "Always associate Labels with inputs via htmlFor/id" },
            { text: "Show required indicators consistently" },
            { text: "Place helper text below the input" },
            { text: "Put error messages directly below the field they relate to" },
            { text: "Use consistent spacing (space-y-1.5 within field, space-y-4 between fields)" },
          ]}
          donts={[
            { text: "Don't use placeholder text as a substitute for labels" },
            { text: "Don't show error messages before the user has interacted" },
            { text: "Don't place labels to the right of inputs" },
            { text: "Don't use ALL CAPS labels" },
          ]}
        />
      </Section>

      {/* Keyboard & Accessibility */}
      <Section title="Keyboard & Accessibility">
        <KeyboardTable
          rows={[
            { keys: ["Tab"], action: "Move focus through form fields in DOM order" },
            { keys: ["Shift+Tab"], action: "Move backwards through form fields" },
            { keys: ["Enter"], action: "Submit the form (if button has type='submit')" },
          ]}
        />
      </Section>
    </ComponentLayout>
  )
}
