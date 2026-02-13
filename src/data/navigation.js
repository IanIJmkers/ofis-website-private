const data = {
  nl: [
    { label: "Home", path: "/" },
    { label: "De Essentie", path: "/de-essentie" },
    { label: "Uw Private Office", path: "/uw-private-office" },
    { label: "Over Ons", path: "/over-ons" },
    { label: "Nieuws & Opinie", path: "/nieuws-opinie" },
    { label: "Contact", path: "/contact" },
  ],
  en: [
    { label: "Home", path: "/" },
    { label: "The Essence", path: "/de-essentie" },
    { label: "Your Private Office", path: "/uw-private-office" },
    { label: "About Us", path: "/over-ons" },
    { label: "News & Opinion", path: "/nieuws-opinie" },
    { label: "Contact", path: "/contact" },
  ],
};

export const navigation = data.nl;
export const getNavigation = (lang) => data[lang] || data.nl;
