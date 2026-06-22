import { createHashRouter } from "react-router-dom"
import PortalLayout from "@/layouts/PortalLayout"
import OverviewPage from "@/pages/OverviewPage"
import ButtonPage from "@/pages/ButtonPage"
import BadgePage from "@/pages/BadgePage"
import InputPage from "@/pages/InputPage"
import AlertPage from "@/pages/AlertPage"
import CardPage from "@/pages/CardPage"
import DialogPage from "@/pages/DialogPage"
import TypographyPage from "@/pages/TypographyPage"
import PillTabsPage from "@/pages/PillTabsPage"
import SelectionControlsPage from "@/pages/SelectionControlsPage"
import InputOTPPage from "@/pages/InputOTPPage"
import FieldPage from "@/pages/FieldPage"
import SwitchPage from "@/pages/SwitchPage"
import TextareaPage from "@/pages/TextareaPage"
import SelectPage from "@/pages/SelectPage"
import NativeSelectPage from "@/pages/NativeSelectPage"
import TogglePage from "@/pages/TogglePage"
import ToggleGroupPage from "@/pages/ToggleGroupPage"
import ComboboxPage from "@/pages/ComboboxPage"
import DatePickerPage from "@/pages/DatePickerPage"
import InputGroupPage from "@/pages/InputGroupPage"
import PlaceholderPage from "@/pages/PlaceholderPage"

// Routes are ordered from most-specific to least-specific.
// The catch-all /components/:slug always renders PlaceholderPage for unimplemented components.

export const router = createHashRouter([
  {
    path: "/",
    element: <PortalLayout />,
    children: [
      // Overview
      { index: true, element: <OverviewPage /> },

      // Fully implemented component pages
      { path: "components/button",            element: <ButtonPage /> },
      { path: "components/badge",             element: <BadgePage /> },
      { path: "components/input",             element: <InputPage /> },
      { path: "components/alert",             element: <AlertPage /> },
      { path: "components/card",              element: <CardPage /> },
      { path: "components/dialog",            element: <DialogPage /> },
      { path: "components/typography",        element: <TypographyPage /> },
      { path: "components/pill-tabs",         element: <PillTabsPage /> },
      { path: "components/selection-controls",element: <SelectionControlsPage /> },
      { path: "components/switch",            element: <SwitchPage /> },
      { path: "components/textarea",          element: <TextareaPage /> },
      { path: "components/select",            element: <SelectPage /> },
      { path: "components/native-select",     element: <NativeSelectPage /> },
      { path: "components/toggle",            element: <TogglePage /> },
      { path: "components/toggle-group",      element: <ToggleGroupPage /> },
      { path: "components/combobox",          element: <ComboboxPage /> },
      { path: "components/date-picker",       element: <DatePickerPage /> },
      { path: "components/input-otp",         element: <InputOTPPage /> },
      { path: "components/field",             element: <FieldPage /> },
      { path: "components/input-group",       element: <InputGroupPage /> },

      // Catch-all for all other components
      { path: "components/:slug", element: <PlaceholderPage /> },
    ],
  },
])
