export const typography = {
  fontFamily: {
    primary: ["Jost", "system-ui", "-apple-system", "Segoe UI", "Metropolis", "sans-serif"],
    monospace: ["JetBrains Mono", "monospace"],
  },

  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  fontSize: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "30px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "60px",
  },

  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.7,
  },

  letterSpacing: {
    tight: "-0.0075em",
    normal: "0",
    wide: "0.0075em",
  },

  heading: {
    h1: { fontSize: "48px", fontWeight: 700, lineHeight: 1.2 },
    h2: { fontSize: "36px", fontWeight: 700, lineHeight: 1.2 },
    h3: { fontSize: "30px", fontWeight: 600, lineHeight: 1.3 },
    h4: { fontSize: "24px", fontWeight: 600, lineHeight: 1.3 },
    h5: { fontSize: "20px", fontWeight: 600, lineHeight: 1.4 },
    h6: { fontSize: "18px", fontWeight: 600, lineHeight: 1.4 },
  },

  body: {
    large: { fontSize: "18px", fontWeight: 400, lineHeight: 1.6 },
    medium: { fontSize: "16px", fontWeight: 400, lineHeight: 1.5 },
    small: { fontSize: "14px", fontWeight: 400, lineHeight: 1.5 },
    caption: { fontSize: "12px", fontWeight: 400, lineHeight: 1.4 },
  },
} as const

export type TypographyToken = typeof typography
