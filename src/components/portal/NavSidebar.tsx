import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Search, ChevronRight, CheckCircle2, Circle } from "lucide-react"
import { cn } from "@/lib/utils"
import { navSections, getCategoryLabel, type NavSection, type NavItem } from "@/data/navigation"

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getHref(slug: string) {
  return slug === "" ? "/" : `/components/${slug}`
}

function matchesSearch(item: NavItem, query: string) {
  return item.label.toLowerCase().includes(query.toLowerCase())
}

function findActiveLocation(slug: string): { sectionId: string; catKey: string | null } | null {
  for (const section of navSections) {
    if (section.items?.some((i) => i.slug === slug)) {
      return { sectionId: section.id, catKey: null }
    }
    for (const cat of section.categories ?? []) {
      if (cat.items.some((i) => i.slug === slug)) {
        return { sectionId: section.id, catKey: `${section.id}::${cat.label}` }
      }
    }
  }
  return null
}

function computeInitialOpenCategories(slug: string): Set<string> {
  const loc = findActiveLocation(slug)
  if (loc?.catKey) return new Set([loc.catKey])
  // Default: open Actions (first category)
  return new Set(["components::Actions"])
}

// ─── NavItemLink ──────────────────────────────────────────────────────────────

interface NavItemLinkProps {
  item: NavItem
  isActive: boolean
  indent: "flat" | "nested"
  onClick?: () => void
}

function NavItemLink({ item, isActive, indent, onClick }: NavItemLinkProps) {
  const isDone = item.status === "done"

  return (
    <Link
      to={getHref(item.slug)}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "group flex items-center justify-between rounded-lg pr-3 py-1.5 text-sm transition-all duration-150",
        indent === "nested" ? "pl-7" : "pl-4",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-primary",
        isActive
          ? "bg-secondary font-medium text-neutral-900 shadow-sm"
          : [
              isDone ? "text-white" : "text-white/45",
              "hover:bg-sidebar-chrome/[0.12] hover:text-white",
            ]
      )}
    >
      <span className="truncate">{item.label}</span>
      <div className="flex items-center shrink-0 ml-1">
        {isDone ? (
          <CheckCircle2 className="h-3 w-3 text-success" />
        ) : (
          <Circle className="h-3 w-3 text-sidebar-chrome/25" />
        )}
      </div>
    </Link>
  )
}

// ─── CategorySection ──────────────────────────────────────────────────────────

interface CategorySectionProps {
  sectionId: string
  label: string
  items: NavItem[]
  isOpen: boolean
  onToggle: () => void
  activeSlug: string
  onItemClick?: () => void
}

function CategorySection({
  sectionId,
  label,
  items,
  isOpen,
  onToggle,
  activeSlug,
  onItemClick,
}: CategorySectionProps) {
  const catKey = `${sectionId}::${label}`
  const doneCount = items.filter((i) => i.status === "done").length

  return (
    <div>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`cat-${catKey}`}
        className={cn(
          "flex w-full items-center justify-between rounded-lg px-3 py-1.5",
          "text-[11px] font-semibold text-white/60",
          "hover:bg-sidebar-chrome/[0.08] hover:text-white/85 transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-primary",
        )}
      >
        <div className="flex items-center gap-1.5">
          <ChevronRight
            className={cn(
              "h-3 w-3 text-white/35 shrink-0 transition-transform duration-200",
              isOpen ? "rotate-90" : "rotate-0"
            )}
          />
          <span>{label}</span>
        </div>
        <span className="text-[10px] text-white/30 font-normal">
          {doneCount}/{items.length}
        </span>
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-200 ease-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden min-h-0">
          <div id={`cat-${catKey}`} className="mt-0.5 space-y-0.5 pb-1">
            {items.map((item) => (
              <NavItemLink
                key={item.slug}
                item={item}
                isActive={activeSlug === item.slug}
                indent="nested"
                onClick={onItemClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── SectionBlock ─────────────────────────────────────────────────────────────

interface SectionBlockProps {
  section: NavSection
  isOpen: boolean
  onToggle: () => void
  openCategories: Set<string>
  onCategoryToggle: (catKey: string) => void
  activeSlug: string
  isFirst: boolean
  onItemClick?: () => void
}

function SectionBlock({
  section,
  isOpen,
  onToggle,
  openCategories,
  onCategoryToggle,
  activeSlug,
  isFirst,
  onItemClick,
}: SectionBlockProps) {
  // Count done vs total for this section
  const allItems = [
    ...(section.items ?? []),
    ...(section.categories ?? []).flatMap((c) => c.items),
  ]
  const doneCount = allItems.filter((i) => i.status === "done").length

  return (
    <div className={cn(!isFirst && "border-t border-sidebar-chrome/[0.08] mt-3 pt-1")}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`section-${section.id}`}
        className={cn(
          "flex w-full items-center justify-between rounded-lg px-3 py-1.5",
          "text-[10px] font-extrabold uppercase tracking-widest text-white/40",
          "hover:text-white/65 transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-primary",
        )}
      >
        <span>{section.label}</span>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-normal text-white/30">
            {doneCount}/{allItems.length}
          </span>
          <ChevronRight
            className={cn(
              "h-3 w-3 transition-transform duration-200",
              isOpen ? "rotate-90" : "rotate-0"
            )}
          />
        </div>
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-200 ease-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden min-h-0">
          <div id={`section-${section.id}`} className="mt-0.5 space-y-0.5 pb-1">
            {/* Flat items (Overview, Foundations) */}
            {section.items?.map((item) => (
              <NavItemLink
                key={item.slug}
                item={item}
                isActive={activeSlug === item.slug}
                indent="flat"
                onClick={onItemClick}
              />
            ))}

            {/* Nested categories (Components) */}
            {section.categories?.map((cat) => {
              const catKey = `${section.id}::${cat.label}`
              return (
                <CategorySection
                  key={cat.label}
                  sectionId={section.id}
                  label={cat.label}
                  items={cat.items}
                  isOpen={openCategories.has(catKey)}
                  onToggle={() => onCategoryToggle(catKey)}
                  activeSlug={activeSlug}
                  onItemClick={onItemClick}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── NavSidebar ───────────────────────────────────────────────────────────────

interface NavSidebarProps {
  onItemClick?: () => void
}

export function NavSidebar({ onItemClick }: NavSidebarProps) {
  const location = useLocation()
  const [search, setSearch] = useState("")

  // Derive the active slug from the current pathname
  const activeSlug = (() => {
    if (location.pathname === "/") return ""
    const match = location.pathname.match(/^\/components\/(.+)$/)
    return match ? match[1] : ""
  })()

  // All sections start open
  const [openSections, setOpenSections] = useState<Set<string>>(
    () => new Set(navSections.map((s) => s.id))
  )

  // Only the category of the active item is open initially
  const [openCategories, setOpenCategories] = useState<Set<string>>(
    () => computeInitialOpenCategories(activeSlug)
  )

  // Auto-expand section + category when active slug changes (e.g. navigation)
  useEffect(() => {
    const loc = findActiveLocation(activeSlug)
    if (!loc) return

    setOpenSections((prev) => {
      if (prev.has(loc.sectionId)) return prev
      const next = new Set(prev)
      next.add(loc.sectionId)
      return next
    })

    if (loc.catKey) {
      setOpenCategories((prev) => {
        if (prev.has(loc.catKey!)) return prev
        const next = new Set(prev)
        next.add(loc.catKey!)
        return next
      })
    }
  }, [activeSlug])

  function toggleSection(id: string) {
    setOpenSections((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  function toggleCategory(catKey: string) {
    setOpenCategories((prev) => {
      const next = new Set(prev)
      if (next.has(catKey)) next.delete(catKey)
      else next.add(catKey)
      return next
    })
  }

  // Search: flat list of matching items across all sections
  const searchResults = search
    ? navSections.flatMap((s) => [
        ...(s.items ?? []),
        ...(s.categories ?? []).flatMap((c) => c.items),
      ]).filter((item) => matchesSearch(item, search))
    : []

  const hasResults = searchResults.length > 0

  return (
    <div className="flex h-full flex-col">

      {/* Search */}
      <div className="px-3 py-3 border-b border-sidebar-chrome/[0.08]">
        <div className="relative">
          <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-sidebar-chrome/35" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search components…"
            aria-label="Search components"
            aria-controls="nav-search-results"
            className={cn(
              "w-full rounded-lg border border-sidebar-chrome/[0.08] bg-sidebar-chrome/[0.05]",
              "py-2 pl-8 pr-3 text-sm text-white",
              "placeholder:text-sidebar-chrome/35",
              "focus:border-secondary/40 focus:outline-none focus:ring-1 focus:ring-secondary/25",
              "transition-colors",
            )}
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className={cn(
                "absolute right-2.5 top-1/2 -translate-y-1/2",
                "min-h-[44px] min-w-[44px] flex items-center justify-center",
                "text-sidebar-chrome/40 hover:text-sidebar-chrome active:text-sidebar-chrome/60 transition-colors",
                "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded",
              )}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Nav content */}
      <nav
        id="nav-search-results"
        aria-label="Component navigation"
        aria-live="polite"
        className="flex-1 overflow-y-auto p-3 sidebar-scroll"
      >
        {/* Search results — flat list */}
        {search && (
          <>
            {!hasResults && (
              <p className="py-6 text-center text-sm text-white/60">
                No components match "{search}"
              </p>
            )}
            {hasResults && (
              <div className="space-y-1">
                {searchResults.map((item) => (
                  <div key={item.slug}>
                    <div className="px-3 pt-2 pb-0.5 text-[10px] text-white/40 uppercase tracking-wide">
                      {getCategoryLabel(item.slug)}
                    </div>
                    <NavItemLink
                      item={item}
                      isActive={activeSlug === item.slug}
                      indent="flat"
                      onClick={onItemClick}
                    />
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Full hierarchy — shown when not searching */}
        {!search && (
          <div className="space-y-0.5">
            {navSections.map((section, index) => (
              <SectionBlock
                key={section.id}
                section={section}
                isOpen={openSections.has(section.id)}
                onToggle={() => toggleSection(section.id)}
                openCategories={openCategories}
                onCategoryToggle={toggleCategory}
                activeSlug={activeSlug}
                isFirst={index === 0}
                onItemClick={onItemClick}
              />
            ))}
          </div>
        )}
      </nav>

      {/* Footer legend */}
      <div className="border-t border-sidebar-chrome/[0.08] px-4 py-2.5">
        <div className="flex items-center justify-center gap-3">
          <span className="flex items-center gap-1 text-[10px] text-white/50">
            <CheckCircle2 className="h-2.5 w-2.5 text-success" /> done
          </span>
          <span className="text-sidebar-chrome/20" aria-hidden="true">·</span>
          <span className="flex items-center gap-1 text-[10px] text-white/50">
            <Circle className="h-2.5 w-2.5 text-sidebar-chrome/20" /> coming soon
          </span>
        </div>
      </div>

    </div>
  )
}
