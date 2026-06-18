import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Search, ChevronDown, ChevronRight, CheckCircle2, Circle } from "lucide-react"
import { cn } from "@/lib/utils"
import { navigation, type NavGroup, type NavItem } from "@/data/navigation"

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getHref(slug: string) {
  return slug === "" ? "/" : `/components/${slug}`
}

function matchesSearch(item: NavItem, query: string) {
  return item.label.toLowerCase().includes(query.toLowerCase())
}

// ─── NavItemLink ──────────────────────────────────────────────────────────────

interface NavItemLinkProps {
  item: NavItem
  isActive: boolean
  onClick?: () => void
}

function NavItemLink({ item, isActive, onClick }: NavItemLinkProps) {
  return (
    <Link
      to={getHref(item.slug)}
      onClick={onClick}
      className={cn(
        "group flex items-center justify-between rounded-lg px-3 py-2 text-base transition-all duration-fast",
        isActive
          ? "bg-secondary font-semibold text-neutral shadow-sm"
          : "text-white/65 hover:bg-white/[0.08] hover:text-white"
      )}
    >
      <span className="truncate">{item.label}</span>
      <div className="flex items-center gap-1 shrink-0 ml-1">
        {item.isNew && (
          <span className="rounded-full bg-secondary/25 px-1.5 py-0.5 text-[10px] font-semibold text-secondary">
            New
          </span>
        )}
        {item.status === "done" ? (
          <CheckCircle2 className="h-3 w-3 text-success" />
        ) : (
          <Circle className="h-3 w-3 text-white/20" />
        )}
      </div>
    </Link>
  )
}

// ─── NavGroupSection ──────────────────────────────────────────────────────────

interface NavGroupSectionProps {
  group: NavGroup
  filteredItems: NavItem[]
  isOpen: boolean
  onToggle: () => void
  activeSlug: string
  onItemClick?: () => void
}

function NavGroupSection({ group, filteredItems, isOpen, onToggle, activeSlug, onItemClick }: NavGroupSectionProps) {
  if (filteredItems.length === 0) return null

  const doneCount = filteredItems.filter((i) => i.status === "done").length

  return (
    <div>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-lg px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white/35 hover:text-white/60 transition-colors"
      >
        <span>{group.label}</span>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-normal text-white/30">
            {doneCount}/{filteredItems.length}
          </span>
          {isOpen ? (
            <ChevronDown className="h-3 w-3" />
          ) : (
            <ChevronRight className="h-3 w-3" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="mt-0.5 space-y-0.5 pl-1">
          {filteredItems.map((item) => (
            <NavItemLink
              key={item.slug}
              item={item}
              isActive={activeSlug === item.slug}
              onClick={onItemClick}
            />
          ))}
        </div>
      )}
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

  // All groups start open; collapse groups that don't contain the active item
  const initialOpen = navigation.map((g) => g.label)
  const [openGroups, setOpenGroups] = useState<string[]>(initialOpen)

  function toggleGroup(label: string) {
    setOpenGroups((prev) =>
      prev.includes(label)
        ? prev.filter((g) => g !== label)
        : [...prev, label]
    )
  }

  // Filter items by search query
  const filtered = navigation.map((group) => ({
    group,
    items: search
      ? group.items.filter((item) => matchesSearch(item, search))
      : group.items,
  }))

  const hasResults = filtered.some((f) => f.items.length > 0)

  return (
    <div className="flex h-full flex-col">
      {/* Search */}
      <div className="px-3 py-3 border-b border-white/[0.08]">
        <div className="relative">
          <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-white/35" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search components…"
            aria-label="Search components"
            className="w-full rounded-lg border border-white/[0.1] bg-white/[0.06] py-2 pl-8 pr-3 text-sm text-white placeholder:text-white/35 focus:border-secondary/50 focus:outline-none focus:ring-1 focus:ring-secondary/30 transition-colors"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Nav groups */}
      <nav aria-label="Component navigation" className="flex-1 overflow-y-auto p-3 space-y-3 sidebar-scroll">
        {!hasResults && (
          <p className="py-6 text-center text-sm text-white/50">
            No components match "{search}"
          </p>
        )}

        {filtered.map(({ group, items }) => (
          <NavGroupSection
            key={group.label}
            group={group}
            filteredItems={items}
            isOpen={openGroups.includes(group.label)}
            onToggle={() => toggleGroup(group.label)}
            activeSlug={activeSlug}
            onItemClick={onItemClick}
          />
        ))}
      </nav>

      {/* Footer hint */}
      <div className="border-t border-white/[0.08] px-4 py-2.5">
        <div className="flex items-center justify-center gap-3">
          <span className="flex items-center gap-1 text-[10px] text-white/30">
            <CheckCircle2 className="h-2.5 w-2.5 text-success" /> done
          </span>
          <span className="text-white/20">·</span>
          <span className="flex items-center gap-1 text-[10px] text-white/30">
            <Circle className="h-2.5 w-2.5 text-white/20" /> coming soon
          </span>
        </div>
      </div>
    </div>
  )
}
