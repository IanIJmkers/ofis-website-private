import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import DeEssentie from "../pages/DeEssentie";
import UwPrivateOffice from "../pages/UwPrivateOffice";
import OverOns from "../pages/OverOns";
import NieuwsOpinie from "../pages/NieuwsOpinie";
import NieuwsArtikel from "../pages/NieuwsArtikel";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home />, handle: { titleKey: "home" } },
      { path: "de-essentie", element: <DeEssentie />, handle: { titleKey: "deEssentie" } },
      { path: "uw-private-office", element: <UwPrivateOffice />, handle: { titleKey: "uwPrivateOffice" } },
      { path: "over-ons", element: <OverOns />, handle: { titleKey: "overOns" } },
      {
        path: "nieuws-opinie",
        children: [
          { index: true, element: <NieuwsOpinie />, handle: { titleKey: "nieuwsOpinie" } },
          { path: ":slug", element: <NieuwsArtikel />, handle: { titleKey: "artikel" } },
        ],
      },
      { path: "contact", element: <Contact />, handle: { titleKey: "contact" } },
    ],
  },
]);
