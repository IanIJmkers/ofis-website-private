const data = {
  nl: [
    {
      title: "Beheerst Vermogen",
      description:
        "Niet alleen beheerd, maar beheerst. Wij bieden volledige controle over uw vermogen, uw familie en uw ambities — vandaag en in de toekomst.",
      icon: "specialist",
    },
    {
      title: "Vast Jaarlijks Tarief",
      description:
        "Eén vast jaarlijks tarief. Geen uurtarieven, geen percentages, geen verborgen kosten. Geen financieel belangenconflict in onze adviesrelatie.",
      icon: "transparency",
    },
    {
      title: "25+ Specialisten",
      description:
        "Een team van meer dan 25 specialisten, waaronder portfoliomanagers, registeraccountants, administratieve controllers en vertrouwde adviseurs.",
      icon: "onestop",
    },
    {
      title: "Mijn Orchestra",
      description:
        "24/7 wereldwijd online toegang tot uw volledige vermogensoverzicht via het Mijn Orchestra platform. Geïntegreerd overzicht, controle en transparantie.",
      icon: "oversight",
    },
    {
      title: "Vertrouwde Adviseur",
      description:
        "Servicegericht, maar niet serviel. Prudent, maar ook proactief. Wij zijn uw persoonlijke kantoor met een eigen geluid.",
      icon: "compliance",
    },
  ],
  en: [
    {
      title: "Controlled Wealth",
      description:
        "Not just managed, but controlled. We offer complete control over your wealth, your family and your ambitions — today and in the future.",
      icon: "specialist",
    },
    {
      title: "Fixed Annual Fee",
      description:
        "One fixed annual fee. No hourly rates, no percentages, no hidden costs. No financial conflict of interest in our advisory relationship.",
      icon: "transparency",
    },
    {
      title: "25+ Specialists",
      description:
        "A team of more than 25 specialists, including portfolio managers, chartered accountants, administrative controllers and trusted advisors.",
      icon: "onestop",
    },
    {
      title: "My Orchestra",
      description:
        "24/7 worldwide online access to your complete wealth overview via the My Orchestra platform. Integrated oversight, control and transparency.",
      icon: "oversight",
    },
    {
      title: "Trusted Advisor",
      description:
        "Service-oriented, but not servile. Prudent, but also proactive. We are your personal office with a distinctive voice.",
      icon: "compliance",
    },
  ],
};

export const valueProps = data.nl;
export const getValueProps = (lang) => data[lang] || data.nl;
