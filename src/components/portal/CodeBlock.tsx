import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import { cn } from "@/lib/utils"

// ─── Copy button ─────────────────────────────────────────────────────────────

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      aria-label={copied ? "Copied" : "Copy code"}
      className="flex items-center gap-1.5 rounded px-2 py-1 text-xs text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-white"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-secondary" />
          <span>Copied</span>
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" />
          <span>Copy</span>
        </>
      )}
    </button>
  )
}

// ─── CodeBlock ───────────────────────────────────────────────────────────────

interface CodeBlockProps {
  code: string
  language?: string
  showLineNumbers?: boolean
  className?: string
}

export function CodeBlock({ code, language = "tsx", showLineNumbers = false, className }: CodeBlockProps) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-border", className)}>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-neutral-700 bg-neutral-900 px-4 py-2">
        <span className="font-mono text-xs text-neutral-400">{language}</span>
        <CopyButton code={code.trim()} />
      </div>

      {/* Code */}
      <SyntaxHighlighter
        language={language}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        style={vscDarkPlus as any}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          borderRadius: 0,
          fontSize: "13px",
          lineHeight: "1.65",
          maxHeight: "480px",
          overflowY: "auto",
          padding: "1.25rem 1.5rem",
        }}
        codeTagProps={{
          style: { fontFamily: "'JetBrains Mono', monospace" },
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  )
}

// ─── CodeTabs ────────────────────────────────────────────────────────────────
// Tabbed code view — React / HTML / CSS / shadcn/ui / etc.

export interface CodeTab {
  label: string
  code: string
  language?: string
}

interface CodeTabsProps {
  tabs: CodeTab[]
  className?: string
}

export function CodeTabs({ tabs, className }: CodeTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = tabs[activeIndex]

  return (
    <div className={cn("overflow-hidden rounded-xl border border-border", className)}>
      {/* Tab bar */}
      <div className="flex items-center overflow-x-auto border-b border-neutral-700 bg-neutral-900 px-1">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActiveIndex(i)}
            className={cn(
              "shrink-0 px-4 py-2.5 text-xs font-medium transition-colors",
              activeIndex === i
                ? "border-b-2 border-secondary text-white"
                : "text-neutral-400 hover:text-neutral-200"
            )}
          >
            {tab.label}
          </button>
        ))}
        <div className="flex-1" />
        <div className="px-2">
          <CopyButton code={active.code.trim()} />
        </div>
      </div>

      {/* Code panel */}
      <SyntaxHighlighter
        language={active.language || "tsx"}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        style={vscDarkPlus as any}
        customStyle={{
          margin: 0,
          borderRadius: 0,
          fontSize: "13px",
          lineHeight: "1.65",
          maxHeight: "480px",
          overflowY: "auto",
          padding: "1.25rem 1.5rem",
        }}
        codeTagProps={{
          style: { fontFamily: "'JetBrains Mono', monospace" },
        }}
      >
        {active.code.trim()}
      </SyntaxHighlighter>
    </div>
  )
}
