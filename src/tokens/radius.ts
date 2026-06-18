export const radius = {
  none: "0px",
  xs: "2px",
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  "2xl": "24px",
  full: "9999px",
} as const

export const shape = {
  card: {
    radius: "16px",
    padding: "24px",
    borderWidth: "1px",
  },
  input: {
    radius: "8px",
    paddingX: "16px",
    paddingY: "12px",
    borderWidth: "1px",
  },
  dialog: {
    radius: "20px",
    padding: "24px",
  },
} as const

export type RadiusToken = typeof radius
export type ShapeToken = typeof shape
