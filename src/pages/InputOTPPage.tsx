import { useState } from "react"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp"
import { ComponentLayout, InfoGrid } from "@/components/portal/ComponentLayout"
import { Section, DosDonts, PropsTable, KeyboardTable } from "@/components/portal/Section"
import { CodeTabs } from "@/components/portal/CodeBlock"

const basicCode = `import { useState } from "react"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export function BasicOTP() {
  const [otp, setOtp] = useState("")
  return (
    <>
      <InputOTP maxLength={6} value={otp} onChange={setOtp}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <p className="mt-2 text-sm text-muted-foreground">Value: {otp}</p>
    </>
  )
}`

const separatorCode = `import { useState } from "react"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp"

export function OTPWithSeparator() {
  const [otpSep, setOtpSep] = useState("")
  return (
    <InputOTP maxLength={6} value={otpSep} onChange={setOtpSep}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}`

const pinCode = `import { useState } from "react"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export function FourDigitPIN() {
  const [pin, setPin] = useState("")
  return (
    <InputOTP maxLength={4} value={pin} onChange={setPin}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  )
}`

const validationCode = `import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

// Success — all 6 digits filled
<InputOTP maxLength={6} value="123456" className="[&_input]:border-success">
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>

// Error — partial fill
<InputOTP maxLength={6} value="12" className="[&_input]:border-error">
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`

const apiCode = `import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp"`

export default function InputOTPPage() {
  const [otp, setOtp] = useState("")
  const [otpSep, setOtpSep] = useState("")
  const [pin, setPin] = useState("")

  return (
    <ComponentLayout
      name="Input OTP"
      description="An accessible one-time password input with automatic focus advancement and paste support. Built on the input-otp library."
      category="Forms"
      status="stable"
      tags={["Accessible", "Form", "OTP"]}
    >
      <InfoGrid
        items={[
          { label: "Library", value: "input-otp" },
          { label: "Lengths", value: "4 · 6 digits" },
          { label: "Separator", value: "Supported" },
          { label: "Paste", value: "Supported" },
        ]}
      />

      {/* Component API */}
      <Section title="Component API">
        <div className="space-y-4">
          <CodeTabs tabs={[{ label: "shadcn/ui", code: apiCode, language: "tsx" }]} />
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted text-left">
                  <th className="px-4 py-2 font-semibold text-foreground">Subcomponent</th>
                  <th className="px-4 py-2 font-semibold text-foreground">Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { name: "InputOTP", role: "Root component — manages state and focus" },
                  { name: "InputOTPGroup", role: "Groups a set of slots together" },
                  { name: "InputOTPSlot", role: "Individual digit slot — requires index prop" },
                  { name: "InputOTPSeparator", role: "Visual divider between slot groups" },
                ].map((row) => (
                  <tr key={row.name} className="hover:bg-muted/50">
                    <td className="px-4 py-2 font-mono text-xs text-foreground">{row.name}</td>
                    <td className="px-4 py-2 text-muted-foreground">{row.role}</td>
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
              <li>Email/phone verification codes</li>
              <li>Two-factor authentication flows</li>
              <li>PIN entry screens</li>
              <li>SMS verification flows</li>
            </ul>
          </div>
          <div className="rounded-lg border border-warning/25 bg-warning/5 p-4 space-y-2">
            <p className="text-sm font-semibold text-warning">When NOT to use</p>
            <ul className="space-y-1 text-sm text-foreground list-disc list-inside">
              <li>Regular text input — use Input instead</li>
              <li>Password entry — use password Input instead</li>
              <li>Non-numeric codes — custom pattern needed</li>
            </ul>
          </div>
        </div>
      </Section>

      <hr className="border-border" />

      {/* Demo Block 1: Basic 6-digit OTP */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Basic 6-digit OTP</h3>
            <p className="text-sm text-muted-foreground">Standard OTP input with six sequential slots and automatic focus advancement.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">6-digit code</p>
                <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                <p className="mt-2 text-sm text-muted-foreground">Value: {otp}</p>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: basicCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* Demo Block 2: With Separator */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">With Separator</h3>
            <p className="text-sm text-muted-foreground">Split into two groups of three with an InputOTPSeparator for improved readability.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">3 — 3 split</p>
                <InputOTP maxLength={6} value={otpSep} onChange={setOtpSep}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: separatorCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* Demo Block 3: 4-digit PIN */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">4-digit PIN</h3>
            <p className="text-sm text-muted-foreground">Shorter variant for PIN entry with four slots.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">4-digit PIN</p>
                <InputOTP maxLength={4} value={pin} onChange={setPin}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: pinCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* Demo Block 4: Validation States */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Validation States</h3>
            <p className="text-sm text-muted-foreground">Apply success or error styling via the className prop to communicate validation feedback.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Success (filled)</p>
                <InputOTP maxLength={6} value="123456" className="[&_input]:border-success">
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Error state</p>
                <InputOTP maxLength={6} value="12" className="[&_input]:border-error">
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[{ label: "shadcn/ui", code: validationCode, language: "tsx" }]} />
            </div>
          </div>
        </div>
      </div>

      {/* Do's and Don'ts */}
      <Section title="Do's and Don'ts">
        <DosDonts
          dos={[
            { text: "Use InputOTPSeparator to break long codes visually" },
            { text: "Show value feedback below the input" },
            { text: "Auto-submit when all digits are entered" },
            { text: "Support paste for full OTP string" },
          ]}
          donts={[
            { text: "Don't use for passwords" },
            { text: "Don't prevent paste" },
            { text: "Don't use more than 8 slots" },
            { text: "Don't forget to validate server-side" },
          ]}
        />
      </Section>

      {/* Keyboard & Accessibility */}
      <Section title="Keyboard & Accessibility">
        <KeyboardTable
          rows={[
            { keys: ["Type digits"], action: "Fill slots sequentially, focus advances automatically" },
            { keys: ["Backspace"], action: "Clear current slot and move focus back" },
            { keys: ["Ctrl+V", "Cmd+V"], action: "Paste full OTP string" },
            { keys: ["←", "→"], action: "Move between slots" },
          ]}
        />
      </Section>

      {/* All Props */}
      <Section title="All Props" description="Props accepted by the InputOTP root component.">
        <PropsTable
          props={[
            { name: "maxLength", type: "number", required: true, description: "Number of OTP digits" },
            { name: "value", type: "string", description: "Controlled value" },
            { name: "onChange", type: "(value: string) => void", description: "Called on input" },
            { name: "pattern", type: "string", description: "Validates input pattern (e.g., REGEXP_ONLY_DIGITS)" },
            { name: "disabled", type: "boolean", default: "false", description: "Disables all slots" },
          ]}
        />
      </Section>
    </ComponentLayout>
  )
}
