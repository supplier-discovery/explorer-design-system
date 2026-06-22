import * as React from "react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// ─── FormField ─────────────────────────────────────────────────────────────────
// Compound component: shadcn Input + Label + helper text + error message + icon slots.
// Supports both standard (label above) and floating label (label animates inside) modes.

export interface FormFieldProps {
  id?: string
  label?: string
  placeholder?: string
  helperText?: string
  error?: string
  disabled?: boolean
  readOnly?: boolean
  type?: string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  required?: boolean
  value?: string
  defaultValue?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  floatingLabel?: boolean
  className?: string
}

export function FormField({
  id,
  label,
  placeholder,
  helperText,
  error,
  disabled,
  readOnly,
  type = "text",
  prefix,
  suffix,
  required,
  value,
  defaultValue,
  onChange,
  floatingLabel = false,
  className,
}: FormFieldProps) {
  const generatedId = React.useId()
  const inputId = id ?? generatedId
  const errorId = `${inputId}-error`
  const helperId = `${inputId}-helper`

  // Track focus + internal value for floating label animation
  const [isFocused, setIsFocused] = React.useState(false)
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? "")

  const currentValue = value !== undefined ? value : internalValue
  const isFloated = floatingLabel && (isFocused || currentValue.length > 0)

  // ── Floating label variant ─────────────────────────────────────────────────
  if (floatingLabel) {
    return (
      <div className={cn("flex flex-col gap-1.5 w-full max-w-sm", className)}>
        <div className="relative flex items-center">
          {prefix && (
            <div className="pointer-events-none absolute left-3 flex items-center text-muted-foreground z-10">
              {prefix}
            </div>
          )}

          <Input
            id={inputId}
            type={type}
            placeholder={isFocused ? (placeholder ?? "") : ""}
            disabled={disabled}
            readOnly={readOnly}
            value={value !== undefined ? value : internalValue}
            onChange={(e) => {
              if (value === undefined) setInternalValue(e.target.value)
              onChange?.(e)
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : helperText ? helperId : undefined}
            className={cn(
              "rounded-lg transition-colors h-14 pt-5 pb-1",
              prefix ? "pl-9" : "pl-4",
              suffix ? "pr-9" : "pr-4",
              error
                ? "border-error focus-visible:ring-error/30 bg-error/5"
                : "hover:border-neutral-400 dark:hover:border-neutral-500",
              readOnly && "cursor-default bg-neutral-50 dark:bg-neutral-800/50"
            )}
          />

          {label && (
            <label
              htmlFor={inputId}
              className={cn(
                "absolute pointer-events-none select-none transition-all duration-200",
                prefix ? "left-9" : "left-4",
                isFloated
                  ? "top-2.5 text-xs"
                  : "top-1/2 -translate-y-1/2 text-sm",
                isFloated
                  ? error ? "text-error" : "text-primary"
                  : "text-muted-foreground",
                disabled && "opacity-40",
              )}
            >
              {label}
              {required && <span className="ml-0.5 text-error" aria-hidden="true">*</span>}
            </label>
          )}

          {suffix && (
            <div className="absolute right-3 flex items-center text-muted-foreground">
              {suffix}
            </div>
          )}
        </div>

        {error && (
          <p id={errorId} className="text-xs text-error" role="alert">{error}</p>
        )}
        {!error && helperText && (
          <p id={helperId} className="text-xs text-muted-foreground">{helperText}</p>
        )}
      </div>
    )
  }

  // ── Standard label variant ─────────────────────────────────────────────────
  return (
    <div className={cn("flex flex-col gap-1.5 w-full max-w-sm", className)}>
      {label && (
        <Label htmlFor={inputId}>
          {label}
          {required && <span className="ml-1 text-error" aria-hidden="true">*</span>}
        </Label>
      )}

      <div className="relative flex items-center">
        {prefix && (
          <div className="pointer-events-none absolute left-3 flex items-center text-muted-foreground">
            {prefix}
          </div>
        )}

        <Input
          id={inputId}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          value={value}
          defaultValue={value === undefined ? defaultValue : undefined}
          onChange={onChange}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={cn(
            "rounded-lg transition-colors",
            prefix ? "pl-9" : "pl-4",
            suffix ? "pr-9" : "pr-4",
            error
              ? "border-error focus-visible:ring-error/30 bg-error/5"
              : "hover:border-neutral-400 dark:hover:border-neutral-500",
            readOnly && "cursor-default bg-neutral-50 dark:bg-neutral-800/50"
          )}
        />

        {suffix && (
          <div className="absolute right-3 flex items-center text-muted-foreground">
            {suffix}
          </div>
        )}
      </div>

      {error && (
        <p id={errorId} className="text-xs text-error" role="alert">{error}</p>
      )}
      {!error && helperText && (
        <p id={helperId} className="text-xs text-muted-foreground">{helperText}</p>
      )}
    </div>
  )
}
