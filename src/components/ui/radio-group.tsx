import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { cn } from "@/lib/utils"

// ─── Context ──────────────────────────────────────────────────────────────────
// Passes error / success colour intent from RadioGroup → RadioItem.
// Radix manages name, value, and onValueChange internally via its own context.

interface RadioGroupCtx {
  error?: boolean
  success?: boolean
}

const RadioGroupContext = React.createContext<RadioGroupCtx>({})

// ─── RadioGroup ───────────────────────────────────────────────────────────────
// Built on @radix-ui/react-radio-group. Radix provides:
//   • Arrow key navigation between items (vertical ↑↓, horizontal ←→)
//   • role="radiogroup" + aria-orientation on the root
//   • Roving tabindex — only the selected item (or first) is in the tab order

export interface RadioGroupProps {
  name: string
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  disabled?: boolean
  error?: boolean
  success?: boolean
  orientation?: "horizontal" | "vertical"
  className?: string
  children: React.ReactNode
  "aria-label"?: string
  "aria-labelledby"?: string
}

function RadioGroup({
  name,
  value,
  defaultValue,
  onValueChange,
  disabled,
  error,
  success,
  orientation = "vertical",
  className,
  children,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
}: RadioGroupProps) {
  return (
    <RadioGroupContext.Provider value={{ error, success }}>
      <RadioGroupPrimitive.Root
        name={name}
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        disabled={disabled}
        orientation={orientation}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        className={cn(
          "flex",
          orientation === "vertical" ? "flex-col gap-2" : "flex-row flex-wrap gap-4",
          className,
        )}
      >
        {children}
      </RadioGroupPrimitive.Root>
    </RadioGroupContext.Provider>
  )
}

// ─── RadioItem ────────────────────────────────────────────────────────────────
// Built on RadioGroupPrimitive.Item, which renders as <button role="radio">.
//
// Radix sets data-state="checked" | "unchecked" on each item so we use
// data-[state=checked]: Tailwind variants for the selected border/fill —
// no z-index or overlay tricks needed (the button itself is the click target).
//
// <label htmlFor={id}> association works because <button> is a labelable element
// per the HTML spec — clicking the label focuses and activates the button.

export interface RadioItemProps {
  value: string
  id?: string
  disabled?: boolean
  error?: boolean
  success?: boolean
  "aria-label"?: string
  "aria-labelledby"?: string
  "aria-describedby"?: string
  className?: string
}

const RadioItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioItemProps
>(
  (
    {
      value,
      id,
      disabled: itemDisabled,
      error: itemError,
      success: itemSuccess,
      className,
      ...rest
    },
    ref,
  ) => {
    const ctx = React.useContext(RadioGroupContext)
    const hasError   = ctx.error   || itemError
    const hasSuccess = ctx.success || itemSuccess

    const dotColor = hasError ? "bg-error" : hasSuccess ? "bg-success" : "bg-primary"

    return (
      <RadioGroupPrimitive.Item
        ref={ref}
        id={id}
        value={value}
        disabled={itemDisabled}
        className={cn(
          // Layout — 16×16 circle
          "relative inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 bg-background",
          // Motion
          "transition-all duration-fast",
          // Keyboard focus ring
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          // Disabled
          "disabled:cursor-not-allowed disabled:opacity-40",
          // ── Default palette ───────────────────────────────────────────────
          !hasError && !hasSuccess && [
            "border-border hover:border-neutral-400 dark:hover:border-neutral-500",
            "data-[state=checked]:border-primary",
          ],
          // ── Error palette ─────────────────────────────────────────────────
          hasError  && "border-error  data-[state=checked]:border-error",
          // ── Success palette ───────────────────────────────────────────────
          hasSuccess && "border-success data-[state=checked]:border-success",
          className,
        )}
        {...rest}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <span className={cn("h-1.5 w-1.5 rounded-full", dotColor)} />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
    )
  },
)
RadioItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioItem }
