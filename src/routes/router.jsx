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
      { index: true, element: <Home />, handle: { title: "Home" } },
      { path: "de-essentie", element: <DeEssentie />, handle: { title: "De Essentie" } },
      { path: "uw-private-office", element: <UwPrivateOffice />, handle: { title: "Uw Private Office" } },
      { path: "over-ons", element: <OverOns />, handle: { title: "Over Ons" } },
      {
        path: "nieuws-opinie",
        children: [
          { index: true, element: <NieuwsOpinie />, handle: { title: "Nieuws & Opinie" } },
          { path: ":slug", element: <NieuwsArtikel />, handle: { title: "Artikel" } },
        ],
      },
      { path: "contact", element: <Contact />, handle: { title: "Contact" } },
    ],
  },
]);
