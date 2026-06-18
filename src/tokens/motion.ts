export const motion = {
  duration: {
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
  },
  easing: {
    default: "ease",
    in: "ease-in",
    out: "ease-out",
    inOut: "ease-in-out",
  },
} as const

export type MotionToken = typeof motion
