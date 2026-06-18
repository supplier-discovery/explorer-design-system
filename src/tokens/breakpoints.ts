export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const

export const container = {
  sm: "600px",
  md: "900px",
  lg: "1200px",
  xl: "1440px",
} as const

export const grid = {
  columns: 12,
  columnGap: "24px",
  rowGap: "24px",
} as const

export type BreakpointToken = typeof breakpoints
export type ContainerToken = typeof container
