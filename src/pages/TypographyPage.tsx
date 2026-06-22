import { cn } from "@/lib/utils"
import { ComponentLayout, InfoGrid } from "@/components/portal/ComponentLayout"
import { Section, DosDonts, PropsTable } from "@/components/portal/Section"
import { CodeTabs } from "@/components/portal/CodeBlock"

// ─── Code examples ────────────────────────────────────────────────────────────

const reactCode = `{/* Headings */}
<h1 className="text-5xl font-bold tracking-tight text-foreground">Heading 1</h1>
<h2 className="text-4xl font-bold tracking-tight text-foreground">Heading 2</h2>
<h3 className="text-3xl font-semibold text-foreground">Heading 3</h3>
<h4 className="text-2xl font-semibold text-foreground">Heading 4</h4>
<h5 className="text-xl font-semibold text-foreground">Heading 5</h5>
<h6 className="text-lg font-semibold text-foreground">Heading 6</h6>

{/* Body */}
<p className="text-lg text-foreground leading-relaxed">Body Large — introductory copy</p>
<p className="text-base text-foreground leading-relaxed">Body — standard paragraph text</p>
<p className="text-sm text-muted-foreground leading-relaxed">Small — helper text, labels</p>
<p className="text-xs text-muted-foreground">Caption — metadata, timestamps</p>

{/* Weight variations */}
<p className="font-normal">Normal (400)</p>
<p className="font-medium">Medium (500)</p>
<p className="font-semibold">Semibold (600)</p>
<p className="font-bold">Bold (700)</p>
<p className="font-extrabold">Extra Bold (800)</p>

{/* Code / Mono */}
<code className="font-mono text-sm bg-muted rounded px-1.5 py-0.5">
  const value = tokens.color.primary
</code>

{/* Muted text */}
<p className="text-muted-foreground">Muted description text</p>

{/* Truncate long text */}
<p className="truncate max-w-xs">
  This is a very long string that will be truncated at the container width.
</p>`

const tailwindCode = `{/* Tracking (letter-spacing) utilities */}
<h1 className="tracking-tight">Tight — headings</h1>
<p className="tracking-normal">Normal — body text</p>
<p className="tracking-wide uppercase text-xs font-medium">Wide — labels, caps</p>

{/* Leading (line-height) utilities */}
<p className="leading-none">leading-none (1.0)</p>
<p className="leading-tight">leading-tight (1.25)</p>
<p className="leading-snug">leading-snug (1.375)</p>
<p className="leading-normal">leading-normal (1.5)</p>
<p className="leading-relaxed">leading-relaxed (1.625)</p>
<p className="leading-loose">leading-loose (2.0)</p>

{/* Colour utilities */}
<p className="text-foreground">Primary foreground</p>
<p className="text-muted-foreground">Muted / secondary text</p>
<p className="text-primary">Brand primary green</p>
<p className="text-secondary">Accent green</p>

{/* Decoration */}
<p className="underline">Underlined</p>
<p className="line-through">Strikethrough</p>
<p className="italic">Italic</p>`

const htmlCode = `<!-- Headings -->
<h1 style="font-size:3rem; font-weight:700; letter-spacing:-0.025em; color:#212121;">
  Heading 1
</h1>

<!-- Body paragraph -->
<p style="font-size:1rem; line-height:1.5; color:#212121;">
  The quick brown fox jumps over the lazy dog.
</p>

<!-- Muted helper text -->
<p style="font-size:0.875rem; color:#9E9E9E;">
  This is helper text or a caption.
</p>

<!-- Monospace code -->
<code style="font-family:monospace; font-size:0.875rem; background:#F5F5F5; padding:2px 6px; border-radius:4px;">
  const value = 42
</code>`

// ─── Scale entry component ────────────────────────────────────────────────────

interface ScaleEntry {
  name: string
  tag: string
  size: string
  weight: string
  cls: string
  tracking?: string
}

const typeScale: ScaleEntry[] = [
  { name: "Display",     tag: "h1", size: "48px / 3rem",   weight: "700 Bold",     cls: "text-5xl font-bold tracking-tight",     tracking: "-0.025em" },
  { name: "Heading 1",   tag: "h1", size: "36px / 2.25rem", weight: "700 Bold",    cls: "text-4xl font-bold tracking-tight",     tracking: "-0.025em" },
  { name: "Heading 2",   tag: "h2", size: "30px / 1.875rem", weight: "600 Semibold", cls: "text-3xl font-semibold",             tracking: "-0.015em" },
  { name: "Heading 3",   tag: "h3", size: "24px / 1.5rem",  weight: "600 Semibold", cls: "text-2xl font-semibold",             tracking: "0"        },
  { name: "Heading 4",   tag: "h4", size: "20px / 1.25rem", weight: "600 Semibold", cls: "text-xl font-semibold",              tracking: "0"        },
  { name: "Heading 5",   tag: "h5", size: "18px / 1.125rem", weight: "600 Semibold", cls: "text-lg font-semibold",             tracking: "0"        },
  { name: "Body Large",  tag: "p",  size: "18px / 1.125rem", weight: "400 Normal",  cls: "text-lg leading-relaxed",            tracking: "0"        },
  { name: "Body",        tag: "p",  size: "16px / 1rem",    weight: "400 Normal",   cls: "text-base leading-relaxed",          tracking: "0"        },
  { name: "Body Small",  tag: "p",  size: "14px / 0.875rem", weight: "400 Normal",  cls: "text-sm leading-relaxed",            tracking: "0"        },
  { name: "Caption",     tag: "p",  size: "12px / 0.75rem", weight: "400 Normal",   cls: "text-xs",                            tracking: "0"        },
  { name: "Label",       tag: "p",  size: "12px / 0.75rem", weight: "500 Medium",   cls: "text-xs font-medium uppercase tracking-widest", tracking: "0.1em" },
  { name: "Code",        tag: "code", size: "14px / 0.875rem", weight: "400 Normal", cls: "font-mono text-sm",                 tracking: "0"        },
]

const fontWeights = [
  { name: "Normal",     weight: "400", cls: "font-normal"     },
  { name: "Medium",     weight: "500", cls: "font-medium"     },
  { name: "Semibold",   weight: "600", cls: "font-semibold"   },
  { name: "Bold",       weight: "700", cls: "font-bold"       },
  { name: "Extra Bold", weight: "800", cls: "font-extrabold"  },
]

// ─── TypographyPage ───────────────────────────────────────────────────────────

export default function TypographyPage() {
  return (
    <ComponentLayout
      name="Typography"
      description="The complete type system: scale, weights, spacing, and semantic text styles. All powered by the Jost font family with design token values."
      category="Foundation"
      status="stable"
      tags={["Foundation", "Tokens", "Accessible"]}
    >
      <InfoGrid items={[
        { label: "Typeface",  value: "Jost (primary) · JetBrains Mono (code)" },
        { label: "Scale",     value: "12 steps"                               },
        { label: "Weights",   value: "400 · 500 · 600 · 700 · 800"           },
        { label: "WCAG",      value: "AA 2.2 (4.5:1 contrast minimum)"        },
      ]} />

      {/* Overview */}
      <Section title="Overview">
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            The type system establishes visual hierarchy through a 12-step scale.
            <strong className="text-foreground"> Jost</strong> is the primary typeface — a geometric sans-serif
            that reads cleanly at both display and body sizes.
            <strong className="text-foreground"> JetBrains Mono</strong> is reserved for code, data values, and
            token references.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Base unit",    value: "16px (1rem)", desc: "Browser default. All sizes scale proportionally." },
              { label: "Line height",  value: "1.5 (body)",  desc: "Relaxed for body text, tighter for headings." },
              { label: "Colour rule",  value: "Semantic only", desc: "Always use text-foreground, text-muted-foreground, or intent colours — never hardcode hex." },
            ].map(({ label, value, desc }) => (
              <div key={label} className="rounded-xl border border-border p-4 shadow-elevation-1">
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="mt-1 font-semibold text-foreground">{value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <hr className="border-border" />

      {/* Type Scale */}
      <Section title="Type Scale">
        <div className="rounded-xl border border-border overflow-hidden">
          {typeScale.map(({ name, tag: Tag, size, weight, cls }) => (
            <div
              key={name}
              className="flex items-baseline gap-6 border-b border-border px-5 py-4 last:border-0 hover:bg-surface-hover transition-colors"
            >
              <div className="w-28 shrink-0">
                <p className="font-mono text-xs font-medium text-foreground">{name}</p>
                <p className="font-mono text-[10px] text-muted-foreground">{size}</p>
              </div>
              <div className="w-32 shrink-0 hidden sm:block">
                <p className="font-mono text-xs text-muted-foreground">{weight}</p>
              </div>
              {/* @ts-ignore — dynamic tag */}
              <Tag className={cn(cls, "text-foreground flex-1 leading-tight")}>
                The quick brown fox
              </Tag>
            </div>
          ))}
        </div>
      </Section>

      {/* Font Weights */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Font Weights</h3>
            <p className="text-sm text-muted-foreground">Five weight steps — from Normal (400) to Extra Bold (800). Only use Extra Bold for display and hero headings.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 p-5">
              <div className="space-y-3">
                {fontWeights.map(({ name, weight, cls }) => (
                  <div key={name} className="flex items-baseline gap-6">
                    <div className="w-24 shrink-0">
                      <p className="text-xs text-muted-foreground">{name}</p>
                      <code className="font-mono text-[10px] text-muted-foreground">{weight}</code>
                    </div>
                    <p className={cn("text-xl text-foreground", cls)}>Explorer Design System</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="sticky top-6">
              <CodeTabs tabs={[
                { label: "React",    code: reactCode,    language: "tsx"  },
                { label: "Tailwind", code: tailwindCode, language: "tsx"  },
                { label: "HTML",     code: htmlCode,     language: "html" },
              ]} />
            </div>
          </div>
        </div>
      </div>

      {/* Semantic Text Colours */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Semantic Text Colours</h3>
            <p className="text-sm text-muted-foreground">Always use semantic token classes — never hardcode hex values for text colour.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 p-5">
            <div className="space-y-3">
              {[
                { token: "text-foreground",      desc: "Primary content text — headings, body, labels",       sample: "The quick brown fox" },
                { token: "text-muted-foreground", desc: "Secondary text — descriptions, metadata, captions",   sample: "The quick brown fox" },
                { token: "text-primary",          desc: "Brand colour — links, active states, CTAs",           sample: "The quick brown fox" },
                { token: "text-secondary",        desc: "Accent colour — highlights, success-aligned actions", sample: "The quick brown fox" },
                { token: "text-success",          desc: "Positive status — success messages, online states",   sample: "The quick brown fox" },
                { token: "text-warning",          desc: "Caution — warning messages, pending states",          sample: "The quick brown fox" },
                { token: "text-error",            desc: "Negative status — errors, destructive labels",        sample: "The quick brown fox" },
              ].map(({ token, desc, sample }) => (
                <div key={token} className="flex items-center gap-6">
                  <code className="w-52 shrink-0 font-mono text-xs text-muted-foreground">{token}</code>
                  <p className={cn("flex-1 text-sm", token)}>{sample}</p>
                  <p className="hidden sm:block text-xs text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fonts in Use */}
      <div className="rounded-xl bg-background dark:bg-card shadow-elevation-3 overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <div className="border-l-4 border-warning pl-4 space-y-1">
            <h3 className="text-base font-semibold text-foreground">Fonts in Use</h3>
            <p className="text-sm text-muted-foreground">Jost for all UI text. JetBrains Mono for code, tokens, and numeric values.</p>
          </div>
        </div>
        <div className="p-6">
          <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/50 divide-y divide-border overflow-hidden">
            <div className="px-4 py-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Jost — Primary typeface</p>
              <div className="space-y-4 font-sans">
                <p className="text-3xl font-bold text-foreground">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                <p className="text-3xl font-bold text-foreground">abcdefghijklmnopqrstuvwxyz</p>
                <p className="text-xl text-muted-foreground">0123456789 !@#$%^&amp;*()_+ .,;:'"?/</p>
                <p className="text-sm text-muted-foreground">The five boxing wizards jump quickly. Pack my box with five dozen liquor jugs.</p>
              </div>
            </div>
            <div className="px-4 py-5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">JetBrains Mono — Code typeface</p>
              <div className="space-y-3 font-mono">
                <p className="text-xl text-foreground">const tokens = {"{"} primary: '#02332E' {"}"}</p>
                <p className="text-base text-muted-foreground">function buildClass(variant: string): string {"{"}</p>
                <p className="text-base text-muted-foreground ml-4">return cn('base-class', variantMap[variant])</p>
                <p className="text-base text-muted-foreground">{"}"}</p>
                <code className="text-sm bg-muted rounded-lg px-3 py-1.5 inline-block">npm run build</code>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Do's and Don'ts */}
      <Section title="Do's and Don'ts">
        <DosDonts
          dos={[
            { text: "Use the semantic scale — pick the appropriate step (h1–h6, body, caption) for each context." },
            { text: "Apply text-foreground for primary copy and text-muted-foreground for supporting text." },
            { text: "Use font-mono (JetBrains Mono) for code, token values, and numeric data." },
            { text: "Maintain a visual hierarchy — do not use bold on every line." },
            { text: "Test all text at both light and dark mode for minimum 4.5:1 contrast." },
          ]}
          donts={[
            { text: "Don't hardcode hex colours for text — always use semantic Tailwind token classes." },
            { text: "Don't use font-extrabold for body text — reserve it for display and hero headings." },
            { text: "Don't set arbitrary font sizes outside the defined scale." },
            { text: "Don't rely on colour alone to convey meaning — pair with weight or style." },
          ]}
        />
      </Section>

      {/* Props reference */}
      <Section title="Tailwind Token Reference">
        <PropsTable props={[
          { name: "font-sans",        type: "font-family",   default: "—",    description: "Jost — all primary UI text." },
          { name: "font-mono",        type: "font-family",   default: "—",    description: "JetBrains Mono — code, tokens, data values." },
          { name: "text-{step}",      type: "font-size",     default: "—",    description: "xs / sm / base / lg / xl / 2xl / 3xl / 4xl / 5xl" },
          { name: "font-{weight}",    type: "font-weight",   default: "—",    description: "normal (400) / medium (500) / semibold (600) / bold (700) / extrabold (800)" },
          { name: "leading-{step}",   type: "line-height",   default: "—",    description: "none / tight / snug / normal / relaxed / loose" },
          { name: "tracking-{step}",  type: "letter-spacing", default: "—",   description: "tight / normal / wide / wider / widest" },
          { name: "text-foreground",  type: "color",         default: "—",    description: "Primary text — dark on light, light on dark." },
          { name: "text-muted-foreground", type: "color",    default: "—",    description: "Secondary / muted text." },
        ]} />
      </Section>
    </ComponentLayout>
  )
}
