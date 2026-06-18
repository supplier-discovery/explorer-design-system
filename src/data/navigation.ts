// Navigation data — single source of truth for the portal sidebar.
// To add a new component: append a NavItem to the appropriate group.
// slug "" = Overview (routes to "/"), otherwise routes to "/components/{slug}".

export interface NavItem {
  label: string
  slug: string
  description: string
  status: "done" | "coming-soon"
  isNew?: boolean
}

export interface NavGroup {
  label: string
  icon: string
  items: NavItem[]
}

export const navigation: NavGroup[] = [
  {
    label: "Overview",
    icon: "layout-dashboard",
    items: [
      {
        label: "Introduction",
        slug: "",
        description: "Design system overview, design principles, color palette, typography, spacing, and token reference.",
        status: "done",
      },
    ],
  },

  {
    label: "Layout",
    icon: "layout",
    items: [
      { label: "Aspect Ratio", slug: "aspect-ratio", description: "Displays content within a desired ratio.", status: "coming-soon" },
      { label: "Resizable",    slug: "resizable",    description: "Accessible resizable panel groups and layouts.", status: "coming-soon" },
      { label: "Scroll Area",  slug: "scroll-area",  description: "Augments native scroll functionality for custom cross-browser styling.", status: "coming-soon" },
      { label: "Separator",    slug: "separator",    description: "Visually or semantically separates content.", status: "coming-soon" },
    ],
  },

  {
    label: "Typography",
    icon: "type",
    items: [
      { label: "Typography", slug: "typography", description: "Headings, body text, captions, and all text styles in the system.", status: "done" },
      { label: "Kbd",        slug: "kbd",        description: "Represents keyboard input or hotkey combinations.", status: "coming-soon" },
      { label: "Label",      slug: "label",      description: "Renders an accessible label associated with controls.", status: "coming-soon" },
    ],
  },

  {
    label: "Navigation",
    icon: "navigation",
    items: [
      { label: "Breadcrumb",      slug: "breadcrumb",      description: "Displays the path to the current resource using a hierarchy of links.", status: "coming-soon" },
      { label: "Menubar",         slug: "menubar",         description: "A visually persistent menu common in desktop applications.", status: "coming-soon" },
      { label: "Navigation Menu", slug: "navigation-menu", description: "A collection of links for navigating websites.", status: "coming-soon" },
      { label: "Pagination",      slug: "pagination",      description: "Allows navigation between pages with numbered page links.", status: "coming-soon" },
      { label: "Sidebar",         slug: "sidebar",         description: "Composable, themeable and customizable sidebar component.", status: "coming-soon" },
      { label: "Tabs",            slug: "tabs",            description: "A set of layered sections of content — tabList and tabPanel.", status: "coming-soon" },
    ],
  },

  {
    label: "Forms",
    icon: "form-input",
    items: [
      { label: "Button",        slug: "button",        description: "Triggers an action or event when clicked.", status: "done" },
      { label: "Button Group",  slug: "button-group",  description: "Groups related buttons together with consistent styling.", status: "coming-soon" },
      { label: "Checkbox",      slug: "checkbox",      description: "A control that allows the user to toggle between checked and unchecked.", status: "coming-soon" },
      { label: "Combobox",      slug: "combobox",      description: "Autocomplete input and command palette with a list of suggestions.", status: "coming-soon" },
      { label: "Date Picker",   slug: "date-picker",   description: "A date picker component with range and presets.", status: "coming-soon" },
      { label: "Field",         slug: "field",         description: "A form field wrapper with label, input, and helper text.", status: "coming-soon" },
      { label: "Input",         slug: "input",         description: "Displays a form input field with label, validation, and helper text.", status: "done" },
      { label: "Input Group",   slug: "input-group",   description: "Groups an input with prefix/suffix addons.", status: "coming-soon" },
      { label: "Input OTP",     slug: "input-otp",     description: "Accessible one-time password component with copy paste functionality.", status: "coming-soon" },
      { label: "Native Select", slug: "native-select", description: "A native HTML select element with consistent styling.", status: "coming-soon" },
      { label: "Radio Group",   slug: "radio-group",   description: "A set of checkable buttons where only one can be checked at a time.", status: "coming-soon" },
      { label: "Select",        slug: "select",        description: "Displays a list of options for the user to pick from.", status: "coming-soon" },
      { label: "Slider",        slug: "slider",        description: "An input where the user selects a value from within a given range.", status: "coming-soon" },
      { label: "Switch",        slug: "switch",        description: "A control that allows the user to toggle between checked and not checked.", status: "coming-soon" },
      { label: "Textarea",      slug: "textarea",      description: "Displays a multi-line text input field.", status: "coming-soon" },
      { label: "Toggle",        slug: "toggle",        description: "A two-state button that can be either on or off.", status: "coming-soon" },
      { label: "Toggle Group",  slug: "toggle-group",  description: "A set of two-state buttons that can be toggled on or off.", status: "coming-soon" },
    ],
  },

  {
    label: "Data Display",
    icon: "bar-chart",
    items: [
      { label: "Avatar",      slug: "avatar",      description: "An image element with a fallback for representing the user.", status: "coming-soon" },
      { label: "Badge",       slug: "badge",       description: "Displays a small status descriptor for UI elements.", status: "done" },
      { label: "Calendar",    slug: "calendar",    description: "A date field component that allows users to enter and edit date.", status: "coming-soon" },
      { label: "Card",        slug: "card",        description: "A container component for grouping related content and actions.", status: "done" },
      { label: "Carousel",    slug: "carousel",    description: "A carousel with motion and swipe built using Embla.", status: "coming-soon" },
      { label: "Chart",       slug: "chart",       description: "Build charts with Recharts, wrapped in a composable component.", status: "coming-soon" },
      { label: "Data Table",  slug: "data-table",  description: "Powerful table with sorting, filtering, and pagination.", status: "coming-soon" },
      { label: "Item",        slug: "item",        description: "A flexible list item with icon, label, and optional actions.", status: "coming-soon" },
      { label: "Table",       slug: "table",       description: "A responsive table component for displaying tabular data.", status: "coming-soon" },
    ],
  },

  {
    label: "Feedback",
    icon: "bell",
    items: [
      { label: "Alert",        slug: "alert",        description: "Displays a callout for user attention with severity levels.", status: "done" },
      { label: "Alert Dialog", slug: "alert-dialog", description: "A modal dialog that interrupts the user with important content.", status: "coming-soon" },
      { label: "Progress",     slug: "progress",     description: "Displays an indicator showing the completion progress of a task.", status: "coming-soon" },
      { label: "Skeleton",     slug: "skeleton",     description: "Use to show a placeholder while content is loading.", status: "coming-soon" },
      { label: "Sonner",       slug: "sonner",       description: "An opinionated toast component for React.", status: "coming-soon" },
      { label: "Spinner",      slug: "spinner",      description: "An animated loading indicator for async operations.", status: "coming-soon" },
      { label: "Toast",        slug: "toast",        description: "A succinct message that is displayed temporarily.", status: "coming-soon" },
    ],
  },

  {
    label: "Overlays",
    icon: "layers",
    items: [
      { label: "Context Menu",  slug: "context-menu",  description: "Displays a menu on right-click with relevant actions.", status: "coming-soon" },
      { label: "Dialog",        slug: "dialog",        description: "A window overlaid on the primary window, blocking interactions.", status: "done" },
      { label: "Drawer",        slug: "drawer",        description: "A panel that slides in from the edge of the screen.", status: "coming-soon" },
      { label: "Dropdown Menu", slug: "dropdown-menu", description: "Displays a menu to the user — triggered by a button.", status: "coming-soon" },
      { label: "Hover Card",    slug: "hover-card",    description: "For sighted users to preview content available behind a link.", status: "coming-soon" },
      { label: "Popover",       slug: "popover",       description: "Displays rich content in a portal, triggered by a button.", status: "coming-soon" },
      { label: "Sheet",         slug: "sheet",         description: "Extends the Dialog component to display from edge of screen.", status: "coming-soon" },
      { label: "Tooltip",       slug: "tooltip",       description: "A popup that displays information related to an element on hover.", status: "coming-soon" },
    ],
  },

  {
    label: "Disclosure",
    icon: "chevrons-down",
    items: [
      { label: "Accordion",   slug: "accordion",   description: "A vertically stacked set of interactive headings that reveal content.", status: "coming-soon" },
      { label: "Collapsible", slug: "collapsible", description: "An interactive component which expands/collapses a panel.", status: "coming-soon" },
    ],
  },

  {
    label: "Utility",
    icon: "wrench",
    items: [
      { label: "Command",   slug: "command",   description: "Fast, composable, unstyled command menu for React.", status: "coming-soon" },
      { label: "Direction", slug: "direction", description: "A helper to set the text direction (LTR/RTL) for a subtree.", status: "coming-soon" },
      { label: "Empty",     slug: "empty",     description: "An empty state component for no-data scenarios.", status: "coming-soon" },
    ],
  },
]

// Flat lookup: slug → NavItem (used by PlaceholderPage)
export const componentBySlug = new Map<string, NavItem>(
  navigation.flatMap((g) => g.items).map((item) => [item.slug, item])
)

// All slugs that have a full dedicated page
export const implementedSlugs = new Set([
  "",
  "button",
  "badge",
  "input",
  "alert",
  "card",
  "typography",
  "dialog",
])
