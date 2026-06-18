import { useState, useEffect, useRef } from "react"
import { Outlet, Link, useLocation } from "react-router-dom"
import { Moon, Sun, Menu, X } from "lucide-react"
import { NavSidebar } from "@/components/portal/NavSidebar"

// ─── PortalLayout ─────────────────────────────────────────────────────────────
// h-screen flex-col layout:
//   - Header is flex-none at the top (always visible, no scroll)
//   - Sidebar is flex-none in the body row (full remaining height, internal scroll)
//   - Main is flex-1 overflow-y-auto (the ONLY scrollable region)

export default function PortalLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isDark, setIsDark] = useState(() =>
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  )
  const mainRef = useRef<HTMLElement>(null)
  const { pathname } = useLocation()

  // Apply dark mode class
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  // Scroll main content to top on route change, close mobile sidebar
  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0, behavior: "instant" })
    setMobileOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-neutral-100 dark:bg-background font-sans">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header className="flex-none z-50 bg-background dark:bg-card shadow-elevation-1">
        <div className="flex h-14 items-center gap-3 px-4">

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-surface-hover hover:text-foreground lg:hidden"
          >
            <Menu className="h-4 w-4" />
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-1 min-w-0">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary">
              <span className="text-xs font-bold text-white leading-none select-none">EDS</span>
            </div>
            <div className="hidden sm:block min-w-0">
              <p className="truncate text-sm font-semibold text-foreground leading-none">
                Explorer Design System
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">v1.0.0</p>
            </div>
          </Link>

          {/* Right actions */}
          <div className="flex shrink-0 items-center gap-2">
            <button
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle dark mode"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-surface-hover hover:text-foreground"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Body ───────────────────────────────────────────────────────────── */}
      <div className="flex flex-1 overflow-hidden">

        {/* Desktop sidebar — floating card panel with gap on all sides */}
        <aside className="hidden lg:flex w-[300px] flex-none flex-col bg-neutral-100 dark:bg-background p-3">
          <div className="flex flex-1 flex-col min-h-0 rounded-2xl bg-primary shadow-elevation-3 overflow-hidden">
            <NavSidebar />
          </div>
        </aside>

        {/* Mobile sidebar — off-canvas overlay */}
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40 bg-surface-overlay lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer panel */}
            <div
              role="dialog"
              aria-label="Navigation"
              className="fixed inset-y-0 left-0 z-50 flex w-[260px] flex-col bg-primary border-r border-white/[0.08] lg:hidden"
            >
              {/* Drawer header */}
              <div className="flex h-14 items-center justify-between border-b border-white/[0.1] px-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white/[0.15]">
                    <span className="text-xs font-bold text-white leading-none">EDS</span>
                  </div>
                  <span className="text-sm font-semibold text-white">Navigation</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close navigation"
                  className="flex h-7 w-7 items-center justify-center rounded text-white/60 hover:text-white transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Sidebar nav */}
              <div className="flex-1 overflow-hidden">
                <NavSidebar onItemClick={() => setMobileOpen(false)} />
              </div>
            </div>
          </>
        )}

        {/* Main content — the ONLY scrollable region */}
        <main
          ref={mainRef}
          className="flex-1 min-w-0 overflow-y-auto"
        >
          <Outlet />

          {/* Footer */}
          <footer className="mt-16 border-t border-border py-6 text-center">
            <p className="text-sm text-muted-foreground">
              Explorer Design System · v1.0.0 · React · TypeScript · Tailwind CSS · shadcn/ui · WCAG 2.2 AA
            </p>
          </footer>
        </main>
      </div>
    </div>
  )
}
