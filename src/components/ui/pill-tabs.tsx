import * as React from "react"
import { cn } from "@/lib/utils"

// ─── Types ────────────────────────────────────────────────────────────────────

export interface PillTabItem {
  value:    string
  label:    string
  icon?:    React.ReactNode   // e.g. <CheckCircle2 /> or <Clock />
  badge?:   string | number   // count displayed after the label
  disabled?: boolean
}

export type PillTabsShape = "standard" | "pill"
export type PillTabsSize  = "sm" | "default" | "lg"

export interface PillTabsProps {
  tabs:      PillTabItem[]
  value:     string
  onChange:  (value: string) => void
  /** "standard" — radius scales with size (matches button system)
   *  "pill"     — rounded-full on every size */
  shape?:    PillTabsShape
  size?:     PillTabsSize
  /** Stretch tabs to fill the full container width */
  fullWidth?: boolean
  /** Disable the entire group */
  disabled?:  boolean
  className?: string
  "aria-label"?: string
}

// ─── Style maps ───────────────────────────────────────────────────────────────

// Tab item border-radius — matches button.tsx size scale for "standard"
const tabRadius: Record<PillTabsShape, Record<PillTabsSize, string>> = {
  standard: { sm: "rounded-sm", default: "rounded-md", lg: "rounded-lg" },
  pill:     { sm: "rounded-full", default: "rounded-full", lg: "rounded-full" },
}

// Height, padding, and font size — intentionally mirrors button sizes
const sizeClasses: Record<PillTabsSize, string> = {
  sm:      "h-8  px-3 text-xs  gap-1.5",
  default: "h-9  px-4 text-sm  gap-2",
  lg:      "h-11 px-5 text-base gap-2",
}

// ─── PillTabs ─────────────────────────────────────────────────────────────────
//
// Visual model (reference image):
//   Active tab   → filled primary background, white text  (= filled Button)
//   Inactive tab → transparent bg, border-border          (= outline Button)
//   Disabled     → opacity-40, pointer-events-none
//
// WCAG 2.2 AA keyboard pattern (WAI-ARIA "automatic activation"):
//   Tab         → enter / exit the tab group (roving tabindex)
//   Arrow ←/→   → move focus + select prev / next enabled tab (wraps)
//   Arrow ↑/↓   → same as ←/→
//   Home / End  → first / last enabled tab
//   aria-selected, aria-disabled, role="tablist", role="tab"

export function PillTabs({
  tabs,
  value,
  onChange,
  shape     = "standard",
  size      = "default",
  fullWidth = false,
  disabled  = false,
  className,
  "aria-label": ariaLabel,
}: PillTabsProps) {
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([])

  const enabledIndices = tabs
    .map((t, i) => ({ ...t, i }))
    .filter((t) => !t.disabled && !disabled)
    .map((t) => t.i)

  function moveFocus(
    fromIndex: number,
    direction: "next" | "prev" | "first" | "last",
  ) {
    const pos = enabledIndices.indexOf(fromIndex)
    let nextPos: number
    if      (direction === "first") nextPos = 0
    else if (direction === "last")  nextPos = enabledIndices.length - 1
    else if (direction === "next")  nextPos = (pos + 1) % enabledIndices.length
    else                            nextPos = (pos - 1 + enabledIndices.length) % enabledIndices.length
    const nextIndex = enabledIndices[nextPos]
    if (nextIndex === undefined) return
    tabRefs.current[nextIndex]?.focus()
    onChange(tabs[nextIndex].value)
  }

  function handleKeyDown(e: React.KeyboardEvent, index: number) {
    if (disabled || tabs[index].disabled) return
    switch (e.key) {
      case "ArrowRight": case "ArrowDown":
        e.preventDefault(); moveFocus(index, "next"); break
      case "ArrowLeft": case "ArrowUp":
        e.preventDefault(); moveFocus(index, "prev"); break
      case "Home":
        e.preventDefault(); moveFocus(index, "first"); break
      case "End":
        e.preventDefault(); moveFocus(index, "last"); break
    }
  }

  return (
    <div
      className={cn(
        "overflow-x-auto",
        fullWidth ? "w-full" : "inline-block",
        className,
      )}
    >
      <div
        role="tablist"
        aria-label={ariaLabel}
        aria-orientation="horizontal"
        className={cn(
          "flex items-center gap-2",
          fullWidth ? "w-full" : "inline-flex",
          disabled && "pointer-events-none opacity-50",
        )}
      >
        {tabs.map((tab, index) => {
          const isActive   = tab.value === value
          const isDisabled = disabled || !!tab.disabled

          return (
            <button
              key={tab.value}
              ref={(el) => { tabRefs.current[index] = el }}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-disabled={isDisabled || undefined}
              disabled={isDisabled}
              tabIndex={isActive ? 0 : -1}
              onClick={() => !isDisabled && onChange(tab.value)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={cn(
                // Base
                "inline-flex items-center justify-center font-medium",
                "whitespace-nowrap select-none transition-all duration-fast",
                // Focus ring
                "focus-visible:outline-none focus-visible:ring-2",
                "focus-visible:ring-ring focus-visible:ring-offset-2",
                // Disabled
                "disabled:pointer-events-none disabled:opacity-40",
                // Size + shape
                tabRadius[shape][size],
                sizeClasses[size],
                fullWidth && "flex-1",
                // Active ↔ Inactive visual model
                isActive
                  ? [
                      "bg-primary text-primary-foreground shadow-elevation-1",
                      "hover:bg-primary/90",
                    ]
                  : [
                      "bg-background border border-border text-muted-foreground",
                      "hover:border-neutral-400 hover:text-foreground",
                      "dark:hover:border-neutral-500",
                    ],
              )}
            >
              {tab.icon && (
                <span className="shrink-0 [&_svg]:size-4">{tab.icon}</span>
              )}
              {tab.label}
              {tab.badge !== undefined && (
                <span
                  className={cn(
                    "inline-flex items-center justify-center rounded-full",
                    "px-1.5 min-w-[18px] text-[10px] font-semibold leading-none",
                    isActive
                      ? "bg-white/20 text-primary-foreground"
                      : "bg-neutral-200 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300",
                  )}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
