import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Mail, Eye, EyeOff, Copy, Check } from "lucide-react"
import { ComponentLayout, InfoGrid } from "@/components/portal/ComponentLayout"
import { Section, DosDonts, PropsTable, KeyboardTable } from "@/components/portal/Section"
import { CodeTabs } from "@/components/portal/CodeBlock"

// ─── Code snippets ────────────────────────────────────────────────────────────

const iconPrefixSuffixCode = `// Install: npx shadcn@latest add input
import { Input } from "@/components/ui/input"
import { Search, Mail, Eye, EyeOff } from "lucide-react"
import { useState } from "react"

// Search — icon prefix
<div className="relative">
  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
  <Input className="pl-9" placeholder="Search..." />
</div>

// Email — icon prefix
<div className="relative">
  <Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
  <Input type="email" className="pl-9" placeholder="you@example.com" />
</div>

// Password — icon suffix toggle
function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        className="pr-9"
        placeholder="Enter password"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
    </div>
  )
}`

const textPrefixSuffixCode = `import { Input } from "@/components/ui/input"

// URL — text prefix
<div className="relative flex items-center">
  <div className="absolute left-3 flex h-full items-center border-r border-input pr-2 text-sm text-muted-foreground pointer-events-none">
    https://
  </div>
  <Input className="pl-[4.5rem]" placeholder="your-site.com" />
</div>

// Domain — text suffix
<div className="relative">
  <Input className="pr-14" placeholder="username" />
  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
    .com
  </div>
</div>

// Currency — prefix "$" + suffix "USD"
<div className="relative">
  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
    $
  </div>
  <Input className="pl-6 pr-12" placeholder="0.00" />
  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-muted-foreground pointer-events-none">
    USD
  </div>
</div>`

const buttonAddonCode = `import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

// Search button suffix
<div className="relative">
  <Input className="pr-20" placeholder="Search products..." />
  <Button
    type="button"
    size="sm"
    variant="filled"
    color="primary"
    className="absolute right-1 top-1/2 -translate-y-1/2 h-8"
  >
    Search
  </Button>
</div>

// Copy to clipboard
function CopyInput() {
  const [value, setValue] = useState("")
  const [copied, setCopied] = useState(false)

  return (
    <div className="relative">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="pr-20"
        placeholder="Paste or type something..."
      />
      <Button
        type="button"
        size="sm"
        variant="outline"
        className="absolute right-1 top-1/2 -translate-y-1/2 h-8 px-2"
        onClick={() => {
          navigator.clipboard.writeText(value)
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        }}
      >
        {copied ? (
          <><Check className="h-3.5 w-3.5 mr-1" />Copied</>
        ) : (
          <><Copy className="h-3.5 w-3.5 mr-1" />Copy</>
        )}
      </Button>
    </div>
  )
}`

const stackedAddonCode = `import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// Website URL — text prefix (full example)
<div className="relative flex items-center">
  <div className="absolute left-3 flex h-full items-center border-r border-input pr-2 text-sm text-muted-foreground pointer-events-none">
    https://
  </div>
  <Input className="pl-[4.5rem]" placeholder="your-site.com" />
</div>

// Amount with currency select
<div className="flex">
  <Input className="rounded-r-none flex-1" placeholder="0.00" />
  <select className="h-10 rounded-l-none rounded-r-md border border-input bg-background px-2 text-sm text-muted-foreground appearance-none">
    <option>USD</option>
    <option>EUR</option>
    <option>GBP</option>
  </select>
</div>

// Phone with country code button
<div className="flex">
  <Button
    type="button"
    variant="outline"
    className="rounded-r-none border-r-0 shrink-0 px-3 font-normal text-muted-foreground"
  >
    +1
  </Button>
  <Input className="rounded-l-none" placeholder="(555) 000-0000" />
</div>`

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function InputGroupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [copyValue, setCopyValue] = useState("")
  const [copied, setCopied] = useState(false)

  return (
    <ComponentLayout
      name="Input Group"
      description="Combines an Input with prefix/suffix addons — icons, text labels, or buttons — to create enhanced input compositions without a separate wrapper component."
      category="Forms"
      status="stable"
      tags={["Composition", "Native HTML", "Form"]}
    >
      {/* Info Grid */}
      <InfoGrid
        items={[
          { label: "Pattern", value: "Relative + absolute positioning" },
          { label: "Addons", value: "Icon · Text · Button" },
          { label: "States", value: "Default · Focus · Disabled" },
          { label: "WCAG", value: "AA 2.2" },
        ]}
      />

      {/* Component API */}
      <Section title="Component API">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Input Group is a <strong className="text-foreground">composition pattern</strong>, not a component. It combines a{" "}
          <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">relative</code> wrapper div, an{" "}
          <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">Input</code> with padding offsets, and absolutely
          positioned addon elements (icons, text nodes, or buttons). No extra wrapper component is needed — the spacing rules
          below are the entire API.
        </p>

        <div className="overflow-hidden rounded-xl border border-border mt-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Addon type</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Input className</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Addon positioning</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border hover:bg-surface-hover transition-colors">
                <td className="px-4 py-3 text-xs font-medium text-foreground">Icon prefix</td>
                <td className="px-4 py-3">
                  <code className="font-mono text-xs text-primary">pl-9</code>
                </td>
                <td className="px-4 py-3">
                  <code className="font-mono text-xs text-muted-foreground">left-2.5 absolute top-1/2 -translate-y-1/2</code>
                </td>
              </tr>
              <tr className="border-b border-border hover:bg-surface-hover transition-colors">
                <td className="px-4 py-3 text-xs font-medium text-foreground">Text prefix</td>
                <td className="px-4 py-3">
                  <code className="font-mono text-xs text-primary">pl-[4.5rem]</code>
                </td>
                <td className="px-4 py-3">
                  <code className="font-mono text-xs text-muted-foreground">left-3 absolute top-1/2 -translate-y-1/2</code>
                </td>
              </tr>
              <tr className="hover:bg-surface-hover transition-colors">
                <td className="px-4 py-3 text-xs font-medium text-foreground">Button suffix</td>
                <td className="px-4 py-3">
                  <code className="font-mono text-xs text-primary">pr-[5rem]</code>
                </td>
                <td className="px-4 py-3">
                  <code className="font-mono text-xs text-muted-foreground">right-1 absolute inset-y-1</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* Overview */}
      <Section title="Overview">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">When to use</h3>
            <ul className="space-y-2">
              {[
                "Search inputs needing a magnifying glass icon",
                "URL inputs with an https:// text prefix",
                'Currency inputs with a "$" prefix',
                "Password inputs with a show/hide visibility toggle",
                "Copy-to-clipboard fields with an inline Copy button",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">When NOT to use</h3>
            <ul className="space-y-2">
              {[
                "Simple inputs that don't need addons",
                "When the addon label is already obvious from surrounding context",
                "When a separate button placed below the input would work better",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-error" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <hr className="border-border" />

      {/* ── Demo Block 1: Icon Prefix / Suffix ── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Icon Prefix / Suffix</h3>
            <p className="text-sm text-muted-foreground">
              Absolutely positioned icons provide visual context without disrupting the input's native focus ring or layout flow.
            </p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              {/* Search */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Search</p>
                <div className="relative">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                  <Input className="pl-9" placeholder="Search..." />
                </div>
              </div>
              {/* Email */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Email</p>
                <div className="relative">
                  <Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                  <Input type="email" className="pl-9" placeholder="you@example.com" />
                </div>
              </div>
              {/* Password toggle */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Password toggle</p>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    className="pr-9"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: iconPrefixSuffixCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Demo Block 2: Text Prefix / Suffix ── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Text Prefix / Suffix</h3>
            <p className="text-sm text-muted-foreground">
              Short text labels inlined with the input for protocol prefixes, domain suffixes, and currency symbols.
            </p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              {/* URL prefix */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">URL prefix</p>
                <div className="relative flex items-center">
                  <div className="absolute left-3 flex h-full items-center border-r border-input pr-2 text-sm text-muted-foreground pointer-events-none">
                    https://
                  </div>
                  <Input className="pl-[4.5rem]" placeholder="your-site.com" />
                </div>
              </div>
              {/* Domain suffix */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Domain suffix</p>
                <div className="relative">
                  <Input className="pr-14" placeholder="username" />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                    .com
                  </div>
                </div>
              </div>
              {/* Currency */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Currency</p>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
                    $
                  </div>
                  <Input className="pl-6 pr-12" placeholder="0.00" />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-muted-foreground pointer-events-none">
                    USD
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: textPrefixSuffixCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Demo Block 3: Button Addons ── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Button Addons</h3>
            <p className="text-sm text-muted-foreground">
              Suffix buttons inset inside the input border for search submission and copy-to-clipboard interactions.
            </p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              {/* Search button */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Search button</p>
                <div className="relative">
                  <Input className="pr-20" placeholder="Search products..." />
                  <Button
                    type="button"
                    size="sm"
                    variant="default"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-8"
                  >
                    Search
                  </Button>
                </div>
              </div>
              {/* Copy to clipboard */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Copy to clipboard</p>
                <div className="relative">
                  <Input
                    value={copyValue}
                    onChange={(e) => setCopyValue(e.target.value)}
                    className="pr-20"
                    placeholder="Paste or type something..."
                  />
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-8 px-2"
                    onClick={() => {
                      navigator.clipboard.writeText(copyValue)
                      setCopied(true)
                      setTimeout(() => setCopied(false), 2000)
                    }}
                  >
                    {copied ? (
                      <><Check className="h-3.5 w-3.5 mr-1" />Copied</>
                    ) : (
                      <><Copy className="h-3.5 w-3.5 mr-1" />Copy</>
                    )}
                  </Button>
                </div>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: buttonAddonCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Demo Block 4: Stacked Addon Examples ── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Stacked Addon Examples</h3>
            <p className="text-sm text-muted-foreground">
              Real-world compositions: URL fields, currency selectors, and phone inputs with country code buttons.
            </p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              {/* Website URL */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Website URL</p>
                <div className="relative flex items-center">
                  <div className="absolute left-3 flex h-full items-center border-r border-input pr-2 text-sm text-muted-foreground pointer-events-none">
                    https://
                  </div>
                  <Input className="pl-[4.5rem]" placeholder="your-site.com" />
                </div>
              </div>
              {/* Amount with currency */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Amount with currency</p>
                <div className="flex">
                  <Input className="rounded-r-none flex-1" placeholder="0.00" />
                  <select className="h-10 rounded-l-none rounded-r-md border border-input bg-background px-2 text-sm text-muted-foreground appearance-none">
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                  </select>
                </div>
              </div>
              {/* Phone with country code */}
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Phone with country code</p>
                <div className="flex">
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-r-none border-r-0 shrink-0 px-3 font-normal text-muted-foreground"
                  >
                    +1
                  </Button>
                  <Input className="rounded-l-none" placeholder="(555) 000-0000" />
                </div>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: stackedAddonCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* Dos and Don'ts */}
      <Section title="Dos and Don'ts">
        <DosDonts
          dos={[
            { text: "Use icon addons for visual context (search, email, currency)" },
            { text: "Keep text addons short — 3 to 5 characters maximum" },
            { text: "Always ensure the clickable suffix button has a sufficient touch target" },
            { text: "Use consistent addon placement across similar fields in a form" },
          ]}
          donts={[
            { text: "Don't add both a prefix and suffix button simultaneously" },
            { text: "Don't use addons when a plain label is clearer" },
            { text: "Don't use addons on disabled inputs without also disabling the addon" },
            { text: "Don't use addons that obscure the input's purpose" },
          ]}
        />
      </Section>

      {/* Keyboard */}
      <Section title="Keyboard Interaction">
        <KeyboardTable
          rows={[
            { keys: ["Tab"], action: "Move from input to suffix button" },
            { keys: ["Enter"], action: "Activate suffix button when focused" },
            { keys: ["Space"], action: "Activate suffix button when focused" },
          ]}
        />
      </Section>

      {/* Props / Spacing Reference */}
      <Section title="Spacing Reference">
        <PropsTable
          props={[
            {
              name: "className on Input",
              type: "string",
              default: "—",
              description: "Use pl-9 for icon prefix, pl-[4.5rem] for text prefix, pr-[5rem] for button suffix",
            },
            {
              name: "Icon position",
              type: "—",
              default: "left-2.5 top-1/2 -translate-y-1/2 absolute",
              description: "Standard icon prefix positioning",
            },
            {
              name: "Text addon position",
              type: "—",
              default: "left-3 or right-3 absolute top-1/2 -translate-y-1/2",
              description: "Text label addon positioning",
            },
            {
              name: "Button addon position",
              type: "—",
              default: "right-1 absolute inset-y-1",
              description: "Suffix button inset positioning",
            },
          ]}
        />
      </Section>
    </ComponentLayout>
  )
}
