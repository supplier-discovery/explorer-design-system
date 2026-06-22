import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { Check, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

// ─── Checkbox ─────────────────────────────────────────────────────────────────
// Built on @radix-ui/react-checkbox — replaces the previous native-input +
// absolute-overlay approach, which failed because the decorative visual span
// was rendered after the input in DOM order and intercepted all pointer events.
//
// Radix renders CheckboxPrimitive.Root as <button role="checkbox"> and manages
// checked / indeterminate state, keyboard (Space), and aria-checked="mixed"
// automatically. No z-index tricks required.

export interface CheckboxProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    "onCheckedChange"
  > {
  // Radix's onCheckedChange passes boolean | "indeterminate"; our API narrows to
  // boolean so callers can pass React.Dispatch<SetStateAction<boolean>> directly.
  onCheckedChange?: (checked: boolean) => void
  error?: boolean
  success?: boolean
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, error, success, checked, onCheckedChange, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    checked={checked}
    onCheckedChange={(v) =>
      // Radix only fires "indeterminate" for uncontrolled initial-indeterminate;
      // normal user clicks always produce true/false.
      onCheckedChange?.(v === "indeterminate" ? true : v)
    }
    className={cn(
      // Layout — 16×16 square, consistent shrink-0 for flex rows
      "peer inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border",
      // Motion
      "transition-colors duration-fast",
      // Keyboard focus ring
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      // Disabled
      "disabled:cursor-not-allowed disabled:opacity-40",
      // ── Default palette ───────────────────────────────────────────────────
      !error && !success && [
        "bg-background border-border hover:border-neutral-400 dark:hover:border-neutral-500",
        "data-[state=checked]:bg-primary       data-[state=checked]:border-primary",
        "data-[state=indeterminate]:bg-primary  data-[state=indeterminate]:border-primary",
      ],
      // ── Error palette ─────────────────────────────────────────────────────
      error && [
        "bg-background border-error",
        "data-[state=checked]:bg-error       data-[state=checked]:border-error",
        "data-[state=indeterminate]:bg-error  data-[state=indeterminate]:border-error",
      ],
      // ── Success palette ───────────────────────────────────────────────────
      success && [
        "bg-background border-success",
        "data-[state=checked]:bg-success       data-[state=checked]:border-success",
        "data-[state=indeterminate]:bg-success  data-[state=indeterminate]:border-success",
      ],
      className,
    )}
    {...props}
  >
    {/* forceMount keeps the indicator in the DOM so opacity transitions are
        possible later. data-[state=unchecked]:invisible hides it visually. */}
    <CheckboxPrimitive.Indicator
      forceMount
      className="flex items-center justify-center text-current data-[state=unchecked]:invisible"
    >
      {checked === "indeterminate" ? (
        <Minus className="h-2.5 w-2.5 text-primary-foreground" strokeWidth={3} />
      ) : (
        <Check className="h-2.5 w-2.5 text-primary-foreground" strokeWidth={3} />
      )}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

// ─── CheckboxToggle ───────────────────────────────────────────────────────────
// Pill-shaped switch built on @radix-ui/react-switch.
//
// Previous approach (label + sr-only input) failed because the browser's
// label→descendant-input activation chain is unreliable across browsers — clicks
// on the track span didn't consistently propagate through it.
//
// SwitchPrimitive.Root renders as <button role="switch"> so the click target IS
// the element itself. No delegation, no sr-only tricks. Keyboard (Space) works
// out of the box. Thumb uses translate-x for a smooth CSS slide animation.
//
// Track sizing / thumb travel:
//   sm:      h-4  w-7  (16×28px) border-2 → 12×24px interior, thumb h-3  w-3  → travel translate-x-3
//   default: h-5  w-9  (20×36px) border-2 → 16×32px interior, thumb h-4  w-4  → travel translate-x-4
//   lg:      h-6  w-11 (24×44px) border-2 → 20×40px interior, thumb h-5  w-5  → travel translate-x-5

export interface CheckboxToggleProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
    "asChild"
  > {
  size?: "sm" | "default" | "lg"
}

function CheckboxToggle({
  size = "default",
  className,
  ...props
}: CheckboxToggleProps) {
  const trackSize  = size === "sm" ? "h-4 w-7"  : size === "lg" ? "h-6 w-11" : "h-5 w-9"
  const thumbSize  = size === "sm" ? "h-3 w-3"  : size === "lg" ? "h-5 w-5"  : "h-4 w-4"
  const thumbTravel = size === "sm" ? "data-[state=checked]:translate-x-3"
                    : size === "lg" ? "data-[state=checked]:translate-x-5"
                    :                 "data-[state=checked]:translate-x-4"

  return (
    <SwitchPrimitive.Root
      className={cn(
        // Track
        "relative inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent",
        "transition-colors duration-200",
        // Focus ring
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        // Disabled
        "disabled:cursor-not-allowed disabled:opacity-40",
        // Color
        "bg-neutral-300 dark:bg-neutral-600 data-[state=checked]:bg-primary",
        trackSize,
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "pointer-events-none block rounded-full bg-white shadow-sm",
          "transition-transform duration-200 translate-x-0",
          thumbTravel,
          thumbSize,
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Checkbox, CheckboxToggle }
