import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import PrivateOffice from "../pages/PrivateOffice";
import About from "../pages/About";
import News from "../pages/News";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

const pages = [
  {
    nlPath: "",
    enPath: "",
    element: <Home />,
    nlTitle: "Home",
    enTitle: "Home",
    index: true,
  },
  {
    nlPath: "uw-private-office",
    enPath: "your-private-office",
    element: <PrivateOffice />,
    nlTitle: "Úw Private Office",
    enTitle: "Your Private Office",
  },
  {
    nlPath: "over-ons",
    enPath: "about",
    element: <About />,
    nlTitle: "Over Ons",
    enTitle: "About",
  },
  {
    nlPath: "nieuws",
    enPath: "news",
    element: <News />,
    nlTitle: "Nieuws & Opinie",
    enTitle: "News & Opinion",
  },
  {
    nlPath: "contact",
    enPath: "contact",
    element: <Contact />,
    nlTitle: "Contact",
    enTitle: "Contact",
  },
];

// Build Dutch routes
const nlChildren = pages.map((page) =>
  page.index
    ? { index: true, element: page.element, handle: { title: page.nlTitle } }
    : {
        path: page.nlPath,
        element: page.element,
        handle: { title: page.nlTitle },
      }
);

// Build English routes
const enChildren = pages.map((page) =>
  page.index
    ? { index: true, element: page.element, handle: { title: page.enTitle } }
    : {
        path: page.enPath,
        element: page.element,
        handle: { title: page.enTitle },
      }
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      ...nlChildren,
      {
        path: "en",
        children: enChildren,
      },
    ],
  },
]);
