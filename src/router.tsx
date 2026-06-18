import { createBrowserRouter } from "react-router-dom"
import PortalLayout from "@/layouts/PortalLayout"
import OverviewPage from "@/pages/OverviewPage"
import ButtonPage from "@/pages/ButtonPage"
import BadgePage from "@/pages/BadgePage"
import InputPage from "@/pages/InputPage"
import AlertPage from "@/pages/AlertPage"
import CardPage from "@/pages/CardPage"
import DialogPage from "@/pages/DialogPage"
import TypographyPage from "@/pages/TypographyPage"
import PlaceholderPage from "@/pages/PlaceholderPage"

// Routes are ordered from most-specific to least-specific.
// The catch-all /components/:slug always renders PlaceholderPage for unimplemented components.

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PortalLayout />,
    children: [
      // Overview
      { index: true, element: <OverviewPage /> },

      // Fully implemented component pages
      { path: "components/button",     element: <ButtonPage /> },
      { path: "components/badge",      element: <BadgePage /> },
      { path: "components/input",      element: <InputPage /> },
      { path: "components/alert",      element: <AlertPage /> },
      { path: "components/card",       element: <CardPage /> },
      { path: "components/dialog",     element: <DialogPage /> },
      { path: "components/typography", element: <TypographyPage /> },

      // Catch-all for all other components
      { path: "components/:slug", element: <PlaceholderPage /> },
    ],
  },
])
