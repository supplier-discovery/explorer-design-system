import { useState } from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import type { DateRange } from "react-day-picker"
import { ComponentLayout, InfoGrid } from "@/components/portal/ComponentLayout"
import { Section, DosDonts, PropsTable, KeyboardTable } from "@/components/portal/Section"
import { CodeTabs } from "@/components/portal/CodeBlock"

// ─── Code snippets ────────────────────────────────────────────────────────────

const basicDatePickerCode = `// Install: npx shadcn@latest add calendar popover

import { useState } from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const [date, setDate] = useState<Date | undefined>()

<Popover>
  <PopoverTrigger asChild>
    <Button
      variant="outline"
      className={cn(
        "w-[240px] justify-start text-left font-normal",
        !date && "text-muted-foreground"
      )}
    >
      <CalendarIcon className="mr-2 h-4 w-4" />
      {date ? format(date, "PPP") : <span>Pick a date</span>}
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-auto p-0" align="start">
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      initialFocus
    />
  </PopoverContent>
</Popover>`

const dateRangePickerCode = `// Date Range Picker — two-month calendar overlay

import { useState } from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import type { DateRange } from "react-day-picker"

const [dateRange, setDateRange] = useState<DateRange | undefined>()

<Popover>
  <PopoverTrigger asChild>
    <Button
      variant="outline"
      className={cn(
        "w-[300px] justify-start text-left font-normal",
        !dateRange && "text-muted-foreground"
      )}
    >
      <CalendarIcon className="mr-2 h-4 w-4" />
      {dateRange?.from ? (
        dateRange.to ? (
          <>
            {format(dateRange.from, "LLL dd, y")} – {format(dateRange.to, "LLL dd, y")}
          </>
        ) : (
          format(dateRange.from, "LLL dd, y")
        )
      ) : (
        <span>Pick a date range</span>
      )}
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-auto p-0" align="start">
    <Calendar
      mode="range"
      selected={dateRange}
      onSelect={setDateRange}
      numberOfMonths={2}
      initialFocus
    />
  </PopoverContent>
</Popover>`

// ─── DatePickerPage ───────────────────────────────────────────────────────────

export default function DatePickerPage() {
  const [date, setDate] = useState<Date | undefined>()
  const [dateRange, setDateRange] = useState<DateRange | undefined>()

  return (
    <ComponentLayout
      name="Date Picker"
      description="A date picker built on Calendar + Popover — click the trigger to open a calendar overlay and select a date."
      category="Forms"
      status="stable"
      tags={["Radix UI", "Calendar", "Accessible"]}
    >
      <InfoGrid items={[
        { label: "Built on", value: "Calendar + Popover" },
        { label: "Library",  value: "react-day-picker"   },
        { label: "Format",   value: "Configurable"       },
        { label: "WCAG",     value: "AA 2.2"             },
      ]} />

      {/* Component API */}
      <Section title="Component API">
        <div className="rounded-xl border border-border overflow-hidden text-sm">
          <div className="bg-neutral-50 dark:bg-neutral-900 px-5 py-3 border-b border-border font-mono text-xs text-muted-foreground">
            {`import { Calendar } from "@/components/ui/calendar"`}
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-900 px-5 py-3 border-b border-border font-mono text-xs text-muted-foreground">
            {`import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"`}
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-900 px-5 py-3 border-b border-border font-mono text-xs text-muted-foreground">
            {`import { format } from "date-fns"`}
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-900 px-5 py-3 border-b border-border font-mono text-xs text-muted-foreground">
            {`import type { DateRange } from "react-day-picker"`}
          </div>
          <div className="px-5 py-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              The Date Picker is a composition of{" "}
              <code className="font-mono text-primary">Popover</code> and{" "}
              <code className="font-mono text-primary">Calendar</code>. The{" "}
              <code className="font-mono text-primary">Calendar</code> component is built on{" "}
              <code className="font-mono text-primary">react-day-picker</code> and supports single,
              range, and multiple selection modes. Use{" "}
              <code className="font-mono text-primary">date-fns format()</code> to display the
              selected value in any locale or format you need.
            </p>
          </div>
        </div>
      </Section>

      {/* Overview */}
      <Section title="Overview">
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            The Date Picker gives users a visual calendar overlay to select dates rather than
            requiring them to type. It is the right choice when precision matters and the user
            benefits from seeing the day of the week or surrounding dates in context.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-success/20 bg-success/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When to Use</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Date of birth selection</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Scheduling and booking flows</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Date range selection (hotel check-in/out, report periods)</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />Event creation forms</li>
              </ul>
            </div>
            <div className="rounded-xl border border-warning/20 bg-warning/5 p-4">
              <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">When NOT to Use</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Time selection only — use a time input</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />Relative dates ("in 3 days") — use a different control</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />When typing a date is faster — for power users a plain input may be better</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <hr className="border-border" />

      {/* ── Basic Date Picker ────────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Basic Date Picker</h3>
            <p className="text-sm text-muted-foreground">
              Single-date selection. The trigger displays the formatted date using{" "}
              <code className="font-mono">format(date, "PPP")</code> from date-fns (e.g., "June 22nd, 2026"),
              and falls back to a placeholder when no date is chosen.
            </p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 p-4 flex items-center justify-center min-h-[160px]">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-[240px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[
                { label: "shadcn/ui", language: "tsx", code: basicDatePickerCode },
              ]} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Date Range Picker ────────────────────────────────────────────────── */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Date Range Picker</h3>
            <p className="text-sm text-muted-foreground">
              Set <code className="font-mono">mode="range"</code> and <code className="font-mono">numberOfMonths={"{2}"}</code> for a
              side-by-side two-month calendar. The trigger shows the start and end dates separated by an en-dash.
            </p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 p-4 flex items-center justify-center min-h-[160px]">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-[300px] justify-start text-left font-normal",
                      !dateRange && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateRange?.from ? (
                      dateRange.to ? (
                        <>
                          {format(dateRange.from, "LLL dd, y")} &ndash; {format(dateRange.to, "LLL dd, y")}
                        </>
                      ) : (
                        format(dateRange.from, "LLL dd, y")
                      )
                    ) : (
                      <span>Pick a date range</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="range"
                    selected={dateRange}
                    onSelect={setDateRange}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[
                { label: "shadcn/ui", language: "tsx", code: dateRangePickerCode },
              ]} />
            </div>
          </div>
        </div>
      </div>

      {/* Do's and Don'ts */}
      <Section title="Do's and Don'ts">
        <DosDonts
          dos={[
            { text: "Use format() from date-fns for consistent, locale-aware date display." },
            { text: "Show a clear 'Pick a date' placeholder so users know the field is interactive." },
            { text: "Set initialFocus on Calendar so keyboard users land in the calendar immediately on open." },
            { text: "Provide clear date format guidance (e.g., helper text like 'MM/DD/YYYY') when the format matters." },
          ]}
          donts={[
            { text: "Don't use the Date Picker for time-only selection — use a dedicated time input instead." },
            { text: "Don't format dates inconsistently across the app — pick one format and apply it everywhere." },
            { text: "Don't skip the placeholder text — an empty trigger gives no affordance that it's clickable." },
            { text: "Don't allow past dates for future-only events — use the disabled prop to block invalid dates." },
          ]}
        />
      </Section>

      {/* Keyboard & Accessibility */}
      <Section title="Keyboard & Accessibility">
        <KeyboardTable rows={[
          { keys: ["Enter", "Space"],          action: "Open the calendar / select a date" },
          { keys: ["↑", "↓", "←", "→"],       action: "Navigate the calendar grid" },
          { keys: ["Page Up", "Page Down"],    action: "Navigate months" },
          { keys: ["Escape"],                  action: "Close the calendar" },
        ]} />
      </Section>

      {/* Props */}
      <Section title="Props" description="Calendar accepts react-day-picker props. Key ones are listed below.">
        <PropsTable props={[
          { name: "Calendar.mode",           type: '"single" | "range" | "multiple"', default: '"single"', description: "Selection mode — controls how many dates can be selected." },
          { name: "Calendar.selected",       type: "Date | DateRange | Date[]",       default: "—",        description: "Currently selected date(s)." },
          { name: "Calendar.onSelect",       type: "(date) => void",                  default: "—",        description: "Called when a date is selected." },
          { name: "Calendar.initialFocus",   type: "boolean",                         default: "false",    description: "Focuses the calendar when the popover opens — required for keyboard accessibility." },
          { name: "Calendar.numberOfMonths", type: "number",                          default: "1",        description: "Number of months to display side by side (use 2 for range pickers)." },
          { name: "Calendar.disabled",       type: "Matcher | Matcher[]",             default: "—",        description: "Dates to disable (e.g., { before: new Date() } to block past dates)." },
        ]} />
      </Section>
    </ComponentLayout>
  )
}
