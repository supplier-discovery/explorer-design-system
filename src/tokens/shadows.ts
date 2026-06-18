export const shadows = {
  elevation0: "none",
  elevation1: "0px 1px 2px rgba(0,0,0,0.05)",
  elevation2: "0px 4px 6px rgba(0,0,0,0.1)",
  elevation3: "0px 10px 15px rgba(0,0,0,0.1)",
  elevation4: "0px 20px 25px rgba(0,0,0,0.1)",
  elevation5: "0px 25px 50px rgba(0,0,0,0.15)",
  hover: "0px 8px 20px rgba(0,0,0,0.1)",
} as const

export type ShadowToken = typeof shadows
