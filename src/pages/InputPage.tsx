import { useState } from "react"
import { Eye, EyeOff, Search, Mail, Lock } from "lucide-react"
import { cn } from "@/lib/utils"
import { ComponentLayout, InfoGrid } from "@/components/portal/ComponentLayout"
import { Section, DosDonts, PropsTable, KeyboardTable } from "@/components/portal/Section"
import { PreviewBox, PreviewRow } from "@/components/portal/PreviewBox"
import { CodeTabs } from "@/components/portal/CodeBlock"

// ─── Inline Input ─────────────────────────────────────────────────────────────

interface InputProps {
  label?: string
  placeholder?: string
  helperText?: string
  error?: string
  disabled?: boolean
  type?: string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  required?: boolean
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Input({ label, placeholder, helperText, error, disabled, type = "text", prefix, suffix, required, value, onChange }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5 w-full max-w-sm">
      {label && (
        <label className="text-sm font-medium text-foreground">
          {label}
          {required && <span className="ml-1 text-error" aria-hidden="true">*</span>}
        </label>
      )}
      <div className="relative flex items-center">
        {prefix && (
          <div className="pointer-events-none absolute left-3 flex items-center text-muted-foreground">
            {prefix}
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={onChange}
          aria-invalid={!!error}
          aria-describedby={error ? "input-error" : helperText ? "input-helper" : undefined}
          className={cn(
            "h-10 w-full rounded-lg border bg-background py-2 text-sm text-foreground",
            "placeholder:text-muted-foreground",
            "transition-colors duration-fast",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0 focus:border-transparent",
            "disabled:cursor-not-allowed disabled:opacity-40",
            prefix ? "pl-9" : "pl-4",
            suffix ? "pr-9" : "pr-4",
            error
              ? "border-error focus:ring-error/30 bg-error/5"
              : "border-border hover:border-neutral-400 dark:hover:border-neutral-500"
          )}
        />
        {suffix && (
          <div className="absolute right-3 flex items-center text-muted-foreground">
            {suffix}
          </div>
        )}
      </div>
      {error && (
        <p id="input-error" className="text-xs text-error" role="alert">{error}</p>
      )}
      {!error && helperText && (
        <p id="input-helper" className="text-xs text-muted-foreground">{helperText}</p>
      )}
    </div>
  )
}

// ─── Code examples ────────────────────────────────────────────────────────────

const reactCode = `import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Basic
<div className="grid w-full max-w-sm gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@company.com" />
</div>

// With helper text
<div className="grid w-full max-w-sm gap-1.5">
  <Label htmlFor="username">Username</Label>
  <Input id="username" placeholder="Enter username" />
  <p className="text-xs text-muted-foreground">
    Must be 3–20 characters.
  </p>
</div>

// Error state
<div className="grid w-full max-w-sm gap-1.5">
  <Label htmlFor="email-error">Email</Label>
  <Input
    id="email-error"
    type="email"
    placeholder="you@company.com"
    aria-invalid="true"
    className="border-error focus-visible:ring-error/30"
  />
  <p className="text-xs text-error">Enter a valid email address.</p>
</div>

// Disabled
<Input disabled placeholder="Not editable" />

// With icon (using a wrapper div)
<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
  <Input className="pl-9" placeholder="Search…" />
</div>`

const htmlCode = `<!-- Standard input -->
<div class="grid gap-1.5">
  <label for="name" class="text-sm font-medium">Full Name</label>
  <input
    id="name"
    type="text"
    placeholder="John Smith"
    class="h-10 w-full rounded-lg border border-[#EEEEEE] bg-white px-4 py-2 text-sm
           placeholder:text-[#9E9E9E]
           focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#02332E]
           disabled:cursor-not-allowed disabled:opacity-40"
  />
</div>

<!-- Error state -->
<div class="grid gap-1.5">
  <label for="email" class="text-sm font-medium">Email</label>
  <input
    id="email"
    type="email"
    aria-invalid="true"
    aria-describedby="email-error"
    class="h-10 w-full rounded-lg border border-[#D32F2F] bg-[#FEEBEE]/50 px-4 py-2 text-sm"
  />
  <p id="email-error" class="text-xs text-[#D32F2F]" role="alert">
    Enter a valid email address.
  </p>
</div>`

const tailwindCode = `{/* Base input */}
<input
  type="text"
  placeholder="Enter value"
  className="h-10 w-full rounded-lg border border-border bg-background px-4 py-2 text-sm
    placeholder:text-muted-foreground
    hover:border-neutral-400
    focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent
    disabled:cursor-not-allowed disabled:opacity-40
    transition-colors duration-fast"
/>

{/* Error state */}
<input
  aria-invalid="true"
  className="h-10 w-full rounded-lg border border-error bg-error/5 px-4 py-2 text-sm
    focus:outline-none focus:ring-2 focus:ring-error/30 focus:border-transparent"
/>

{/* With icon prefix */}
<div className="relative">
  <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
  <input className="h-10 w-full rounded-lg border border-border pl-9 pr-4 text-sm ..." />
</div>`

const shadcnInstall = `# Install components
npx shadcn@latest add input label

# Usage
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function EmailForm() {
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="email">Email address</Label>
      <Input id="email" type="email" placeholder="you@company.com" />
    </div>
  )
}`

// ─── InputPage ────────────────────────────────────────────────────────────────

export default function InputPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  return (
    <ComponentLayout
      name="Input"
      description="A form text input field with full support for labels, helper text, error states, icons, and accessibility."
      category="Forms"
      status="stable"
      tags={["shadcn/ui", "Accessible", "Form"]}
    >
      <InfoGrid items={[
        { label: "States",    value: "5"      },
        { label: "Types",     value: "text, email, password, search, number, …" },
        { label: "WCAG",      value: "AA 2.2" },
        { label: "Label",     value: "Required" },
      ]} />

      {/* Overview */}
      <Section title="Overview">
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            Inputs let users enter and edit text. Every input must have an associated label —
            either visible or accessible via <code className="font-mono">aria-label</code>.
            Helper text and error messages are placed below the field and linked via <code className="font-mono">aria-describedby</code>.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-success/20 bg-success/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When to Use</p>
              <ul className="space-y-1.5">
                {["Single-line text entry (name, email, password)", "Search fields", "Numeric values with text fallback", "URL or path inputs", "Any free-form text field in a form"].map((i) => (
                  <li key={i} className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />{i}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-warning/20 bg-warning/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When NOT to Use</p>
              <ul className="space-y-1.5">
                {["Multi-line text — use Textarea", "Fixed option selection — use Select or Radio Group", "Dates — use Date Picker", "Entering a number in a range — use Slider"].map((i) => (
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
          <PreviewRow label="Default">
            <Input label="Full Name" placeholder="Enter your full name" helperText="As it appears on your ID." />
          </PreviewRow>
          <PreviewRow label="With email type">
            <Input label="Email Address" type="email" placeholder="you@company.com" required />
          </PreviewRow>
          <PreviewRow label="Error state">
            <Input label="Email" type="email" placeholder="you@company.com" error="Please enter a valid email address." />
          </PreviewRow>
          <PreviewRow label="Disabled">
            <Input label="Account ID" placeholder="ACC-12345" disabled helperText="This field cannot be edited." />
          </PreviewRow>
          <PreviewRow label="With prefix icon (Search)">
            <div className="w-full max-w-sm">
              <Input
                placeholder="Search…"
                prefix={<Search className="h-4 w-4" />}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </PreviewRow>
          <PreviewRow label="Password with visibility toggle">
            <div className="w-full max-w-sm">
              <Input
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                prefix={<Lock className="h-4 w-4" />}
                suffix={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="pointer-events-auto text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                }
              />
            </div>
          </PreviewRow>
          <PreviewRow label="With email icon">
            <Input label="Work Email" type="email" placeholder="you@company.com" prefix={<Mail className="h-4 w-4" />} />
          </PreviewRow>
        </PreviewBox>
      </Section>

      {/* Code Examples */}
      <Section title="Code Examples">
        <CodeTabs tabs={[
          { label: "React",      code: reactCode,    language: "tsx"  },
          { label: "HTML",       code: htmlCode,     language: "html" },
          { label: "Tailwind",   code: tailwindCode, language: "tsx"  },
          { label: "shadcn/ui",  code: shadcnInstall, language: "bash" },
        ]} />
      </Section>

      {/* States */}
      <Section title="States">
        <div className="rounded-xl border border-border overflow-hidden text-sm">
          {[
            { state: "Default",  desc: "Normal resting state. Border uses the neutral token."   },
            { state: "Hover",    desc: "Border darkens slightly (neutral-400). No ring."         },
            { state: "Focus",    desc: "Ring-2 in ring colour (primary). Border removed."        },
            { state: "Error",    desc: "Border becomes error token. Ring becomes error/30. Helper text turns red." },
            { state: "Disabled", desc: "opacity-40 applied to entire field. pointer-events-none. Cursor shows not-allowed." },
          ].map(({ state, desc }) => (
            <div key={state} className="flex gap-4 border-b border-border last:border-0 px-5 py-3">
              <p className="w-24 shrink-0 font-medium text-foreground">{state}</p>
              <p className="text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Do's and Don'ts */}
      <Section title="Do's and Don'ts">
        <DosDonts
          dos={[
            { text: "Always associate a visible label — every input needs <label> with htmlFor matching the input's id." },
            { text: "Show error messages inline below the field immediately after failed validation." },
            { text: "Use placeholder text as a hint example, not as a substitute for a label." },
            { text: "Mark required fields with an asterisk (*) and explain in the form header." },
            { text: "Provide autocomplete attributes (email, current-password, etc.) for common fields." },
          ]}
          donts={[
            { text: "Don't use placeholder text as the sole label — it disappears when the user starts typing." },
            { text: "Don't validate on every keystroke — validate on blur or form submission." },
            { text: "Don't use red border alone to indicate an error — add an error message text." },
            { text: "Don't disable submit buttons to prevent submission — show inline errors instead." },
          ]}
        />
      </Section>

      {/* Props */}
      <Section title="Props" description="shadcn/ui Input extends native HTML input attributes.">
        <PropsTable props={[
          { name: "type",          type: "string",                 default: '"text"',  description: "HTML input type (text, email, password, number, search, url, …)" },
          { name: "placeholder",   type: "string",                 default: "—",      description: "Hint text shown when the field is empty." },
          { name: "disabled",      type: "boolean",                default: "false",  description: "Prevents interaction and applies opacity." },
          { name: "value",         type: "string",                 default: "—",      description: "Controlled input value." },
          { name: "onChange",      type: "ChangeEventHandler",     default: "—",      description: "Controlled change handler." },
          { name: "aria-invalid",  type: '"true" | "false"',       default: "—",      description: "Marks the field as invalid for assistive technology." },
          { name: "aria-describedby", type: "string",              default: "—",      description: "ID of the error or helper text element." },
          { name: "className",     type: "string",                 default: "—",      description: "Additional Tailwind classes." },
        ]} />
      </Section>

      {/* Accessibility */}
      <Section title="Accessibility">
        <KeyboardTable rows={[
          { keys: ["Tab"],        action: "Move focus to the input" },
          { keys: ["Shift+Tab"],  action: "Move focus away from the input" },
          { keys: ["Escape"],     action: "Clears the field value (search inputs)" },
        ]} />
        <div className="mt-4 rounded-xl border border-border p-5 space-y-3 text-sm">
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-2"><span className="text-primary font-mono shrink-0">label</span><span>Every input must have a <code className="font-mono">&lt;label&gt;</code>. Use <code className="font-mono">htmlFor</code> matching the input <code className="font-mono">id</code>.</span></li>
            <li className="flex gap-2"><span className="text-primary font-mono shrink-0">aria-required</span><span>Add <code className="font-mono">required</code> (native) or <code className="font-mono">aria-required="true"</code> for mandatory fields.</span></li>
            <li className="flex gap-2"><span className="text-primary font-mono shrink-0">aria-invalid</span><span>Set to <code className="font-mono">"true"</code> when the field has a validation error.</span></li>
            <li className="flex gap-2"><span className="text-primary font-mono shrink-0">aria-describedby</span><span>Points to the id of the error message or helper text element below the field.</span></li>
          </ul>
        </div>
      </Section>
    </ComponentLayout>
  )
}
