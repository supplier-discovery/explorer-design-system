import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

// ─── Variant + Color + Shape + Size matrix ────────────────────────────────────
// variant: filled | outline | link (structural style)
// color:   primary | success | warning | danger | neutral | default (token)
// size:    sm | default | lg | icon
// shape:   default | rounded | pill

const buttonVariants = cva(
  // Base classes shared by every button
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium",
    "ring-offset-background transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ],
  {
    variants: {
      // ── structural style ──────────────────────────────────────────────────
      variant: {
        filled:  "shadow-elevation-1",
        outline: "border bg-transparent",
        link:    "underline-offset-4 hover:underline",
        // shadcn/ui compat aliases
        default:     "shadow-elevation-1 bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "shadow-elevation-1 bg-error   text-white              hover:bg-error/90",
        secondary:   "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:       "hover:bg-accent hover:text-accent-foreground",
      },
      // ── color token ───────────────────────────────────────────────────────
      color: {
        primary: "",
        success: "",
        warning: "",
        danger:  "",
        neutral: "",
        default: "",
      },
      // ── size ──────────────────────────────────────────────────────────────
      size: {
        sm:      "h-8  px-3   text-xs  gap-1.5",
        default: "h-10 px-4   text-sm",
        lg:      "h-11 px-5   text-base",
        icon:    "h-10 w-10",
      },
      // ── border radius ─────────────────────────────────────────────────────
      shape: {
        default: "",   // radius driven by size compound variant below
        rounded: "rounded-2xl",
        pill:    "rounded-full",
      },
    },
    // ── compound: filled + color ──────────────────────────────────────────
    compoundVariants: [
      { variant: "filled", color: "primary", className: "bg-primary   text-primary-foreground hover:bg-primary/90" },
      { variant: "filled", color: "success", className: "bg-success   text-white              hover:bg-success/90" },
      { variant: "filled", color: "warning", className: "bg-warning   text-white              hover:bg-warning/90" },
      { variant: "filled", color: "danger",  className: "bg-error     text-white              hover:bg-error/90" },
      { variant: "filled", color: "neutral", className: "bg-neutral-500 text-white            hover:bg-neutral-600" },
      // ── compound: outline + color ─────────────────────────────────────────
      { variant: "outline", color: "primary", className: "border-primary   text-primary   hover:bg-primary/10" },
      { variant: "outline", color: "success", className: "border-success   text-success   hover:bg-success/10" },
      { variant: "outline", color: "warning", className: "border-warning   text-warning   hover:bg-warning/10" },
      { variant: "outline", color: "danger",  className: "border-error     text-error     hover:bg-error/10" },
      { variant: "outline", color: "neutral", className: "border-neutral-400 text-neutral-600 hover:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-400" },
      { variant: "outline", color: "default", className: "border-input text-foreground hover:bg-accent hover:text-accent-foreground" },
      // ── compound: link + color ────────────────────────────────────────────
      { variant: "link", color: "primary", className: "text-primary" },
      { variant: "link", color: "success", className: "text-success" },
      { variant: "link", color: "warning", className: "text-warning" },
      { variant: "link", color: "danger",  className: "text-error" },
      { variant: "link", color: "neutral", className: "text-neutral-600 dark:text-neutral-400" },
      // ── compound: size + default shape (radius) ───────────────────────────
      { size: "sm",      shape: "default", className: "rounded-sm" },
      { size: "default", shape: "default", className: "rounded-md" },
      { size: "lg",      shape: "default", className: "rounded-lg" },
      { size: "icon",    shape: "default", className: "rounded-md" },
    ],
    defaultVariants: {
      variant: "default",
      color:   "default",
      size:    "default",
      shape:   "default",
    },
  }
)

export type ButtonColor = "primary" | "success" | "warning" | "danger" | "neutral" | "default"

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  asChild?: boolean
  variant?: "filled" | "outline" | "link" | "default" | "destructive" | "secondary" | "ghost" | null
  color?: ButtonColor | null
  size?: "sm" | "default" | "lg" | "icon" | null
  shape?: "default" | "rounded" | "pill" | null
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, color, size, shape, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, color, size, shape, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
