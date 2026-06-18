import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Merges Tailwind classes without conflicts. Use this instead of plain template strings.
// Example: cn("px-4 py-2", isActive && "bg-primary", className)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
