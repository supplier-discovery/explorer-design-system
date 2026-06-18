import { useParams, Link } from "react-router-dom"
import { Clock, ArrowLeft, ExternalLink } from "lucide-react"
import { componentBySlug, navigation } from "@/data/navigation"

// Converts a slug like "alert-dialog" to "Alert Dialog"
function slugToLabel(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}

// Gets the category name for a slug
function getCategory(slug: string) {
  for (const group of navigation) {
    if (group.items.some((i) => i.slug === slug)) return group.label
  }
  return "Components"
}

export default function PlaceholderPage() {
  const { slug = "" } = useParams<{ slug: string }>()
  const item = componentBySlug.get(slug)
  const name = item?.label ?? slugToLabel(slug)
  const description = item?.description ?? "Component documentation coming soon."
  const category = getCategory(slug)

  // shadcn/ui docs URL (best-effort mapping)
  const shadcnSlug = slug.replace(/-/g, "-")
  const shadcnUrl = `https://ui.shadcn.com/docs/components/${shadcnSlug}`

  return (
    <div className="mx-auto max-w-4xl px-6 py-10 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-1.5 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground transition-colors">Overview</Link>
        <span>/</span>
        <span>{category}</span>
        <span>/</span>
        <span className="font-medium text-foreground">{name}</span>
      </nav>

      {/* Coming soon card */}
      <div className="rounded-2xl border border-border p-10 text-center space-y-5 shadow-elevation-1">
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-warning/10">
            <Clock className="h-8 w-8 text-warning" />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-3xl font-bold text-foreground">{name}</h1>
            <span className="inline-flex items-center rounded-full bg-warning/10 px-2.5 py-0.5 text-xs font-semibold text-warning border border-warning/20">
              Coming Soon
            </span>
          </div>
          <p className="text-muted-foreground max-w-md mx-auto">{description}</p>
        </div>

        <div className="h-px bg-border max-w-xs mx-auto" />

        <div className="space-y-2 text-sm text-muted-foreground max-w-md mx-auto">
          <p className="font-medium text-foreground">What will be documented here:</p>
          <ul className="space-y-1 text-left">
            {[
              "Live component preview with all variants",
              "Code examples: React / HTML / Tailwind",
              "Component props and API reference",
              "States: default, hover, focus, disabled",
              "Do's and Don'ts — common usage mistakes",
              "Accessibility — keyboard support & ARIA",
              "Responsive behavior guidelines",
              "Enterprise UX best practices",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/40 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Overview
          </Link>
          <a
            href={shadcnUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
          >
            View in shadcn/ui docs
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Related implemented components */}
      <div className="mt-8">
        <p className="text-sm font-medium text-muted-foreground mb-3">Explore implemented components:</p>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "Button",     slug: "button"     },
            { label: "Badge",      slug: "badge"      },
            { label: "Input",      slug: "input"      },
            { label: "Alert",      slug: "alert"      },
            { label: "Card",       slug: "card"       },
            { label: "Dialog",     slug: "dialog"     },
            { label: "Typography", slug: "typography" },
          ].map((comp) => (
            <Link
              key={comp.slug}
              to={`/components/${comp.slug}`}
              className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover hover:border-primary/30"
            >
              {comp.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
