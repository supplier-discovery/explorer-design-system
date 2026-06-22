import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        // shadcn legacy
        default:     "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:   "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline:     "text-foreground",
        // Design System semantic variants
        success:     "border-success/20 bg-success/15 text-success",
        warning:     "border-warning/20 bg-warning/15 text-warning",
        neutral:     "border-transparent bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export type BadgeVariant = NonNullable<VariantProps<typeof badgeVariants>["variant"]>

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean
}

const dotColorMap: Record<string, string> = {
  default:     "bg-white",
  secondary:   "bg-white",
  destructive: "bg-white",
  outline:     "bg-foreground",
  success:     "bg-success",
  warning:     "bg-warning",
  neutral:     "bg-neutral-500",
}

function Badge({ className, variant, dot, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {dot && (
        <span
          className={cn(
            "h-1.5 w-1.5 shrink-0 rounded-full",
            dotColorMap[(variant as string) ?? "default"] ?? "bg-white"
          )}
        />
      )}
      {children}
    </div>
  )
}

export { Badge, badgeVariants }
