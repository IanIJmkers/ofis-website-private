const data = {
  nl: [
    {
      id: "governance",
      title: "Governance",
      shortDescription:
        "Structureel toezicht en beleidsbewaking over uw gehele vermogen. Van familiestatuut tot financieel en fiscaal toezicht.",
      fullDescription:
        "Goed bestuur vormt de basis van beheerst vermogen. Wij stellen familiestatuten of beleggingsstatuuten op, bewaken deze en bieden kritisch tegengas waar nodig. Het vier-ogenprincipe geldt bij ons voor investeringen, bestedingen en kasstromen.",
      icon: "governance",
      features: [
        {
          title: "Familiestatuut & Beleggingsstatuut",
          description:
            "Opstellen, onderhouden en bewaken van uw familiestatuut of investment policy statement.",
        },
        {
          title: "Vier-ogenprincipe",
          description:
            "Onafhankelijke controle op investeringen, bestedingen en kasstromen.",
        },
        {
          title: "Kritisch Tegengas",
          description:
            "Adviesondersteuning met de mogelijkheid tot onafhankelijk tegengas op financiële beslissingen.",
        },
        {
          title: "Financieel & Fiscaal Toezicht",
          description:
            "Overkoepelend toezicht op financieel, fiscaal, juridisch en administratief gebied.",
        },
      ],
    },
    {
      id: "vermogensbeheer",
      title: "Vermogensbeheer",
      shortDescription:
        "Structurering en beheer van uw beleggingsportefeuille met geïntegreerde vermogensoverzichten en kostenbeheersing.",
      fullDescription:
        "Wij structureren en beheren uw beleggingsportefeuille als onafhankelijke partij. U ontvangt geïntegreerde vermogensoverzichten die uw volledige financiële positie inzichtelijk maken, met actieve monitoring en beheersing van kosten.",
      icon: "wealth-management",
      features: [
        {
          title: "Portefeuillebeheer",
          description:
            "Professionele structurering en actief beheer van uw beleggingsportefeuille.",
        },
        {
          title: "Geïntegreerde Vermogensoverzichten",
          description:
            "Volledig overzicht van al uw vermogensonderdelen in één geconsolideerd overzicht.",
        },
        {
          title: "Kostenbeheersing",
          description:
            "Actieve monitoring en beheersing van alle kosten gerelateerd aan uw vermogen.",
        },
      ],
    },
    {
      id: "orkestratie",
      title: "Orkestratie",
      shortDescription:
        "Actieve orchestratie van alle onderdelen van uw vermogen. Van documentbeheer tot begeleiding van de volgende generatie.",
      fullDescription:
        "Orkestratie is de kern van wat wij doen. Wij bewaken de naleving van uw familiestatuut, begeleiden de volgende generatie, monitoren alle dienstverleners en verzorgen de complete administratieve ondersteuning.",
      icon: "orchestration",
      features: [
        {
          title: "Volgende Generatie",
          description:
            "Bewaking van het familiestatuut en begeleiding van de volgende generatie in vermogensbeheer.",
        },
        {
          title: "Dienstverlener Monitoring",
          description:
            "Dossiermonitoring van alle dienstverleners en bewaking van compliance.",
        },
        {
          title: "Administratie & Jaarrekeningen",
          description:
            "Administratieve ondersteuning en opstellen van persoonlijke jaarrekeningen.",
        },
        {
          title: "Documentbeheer & Besluitenlijsten",
          description:
            "Beheer van alle documentatie, besluitenlijsten en opvolgingsacties.",
        },
        {
          title: "Verzekeringen & Hypotheken",
          description:
            "Regelen en bewaken van verzekeringen, hypotheken en bijbehorende documentatie.",
        },
      ],
    },
  ],
  en: [
    {
      id: "governance",
      title: "Governance",
      shortDescription:
        "Structural oversight and policy monitoring of your entire wealth. From family charter to financial and fiscal supervision.",
      fullDescription:
        "Good governance forms the foundation of controlled wealth. We draft family charters or investment policy statements, monitor these and provide critical pushback where needed. The four-eyes principle applies to investments, expenditures and cash flows.",
      icon: "governance",
      features: [
        {
          title: "Family Charter & Investment Policy",
          description:
            "Drafting, maintaining and monitoring your family charter or investment policy statement.",
        },
        {
          title: "Four-Eyes Principle",
          description:
            "Independent oversight of investments, expenditures and cash flows.",
        },
        {
          title: "Critical Pushback",
          description:
            "Advisory support with the ability to provide independent pushback on financial decisions.",
        },
        {
          title: "Financial & Fiscal Oversight",
          description:
            "Comprehensive oversight across financial, fiscal, legal and administrative domains.",
        },
      ],
    },
    {
      id: "vermogensbeheer",
      title: "Wealth Management",
      shortDescription:
        "Structuring and management of your investment portfolio with integrated wealth overviews and cost control.",
      fullDescription:
        "We structure and manage your investment portfolio as an independent party. You receive integrated wealth overviews that provide insight into your complete financial position, with active monitoring and cost control.",
      icon: "wealth-management",
      features: [
        {
          title: "Portfolio Management",
          description:
            "Professional structuring and active management of your investment portfolio.",
        },
        {
          title: "Integrated Wealth Overviews",
          description:
            "Complete overview of all your wealth components in one consolidated overview.",
        },
        {
          title: "Cost Control",
          description:
            "Active monitoring and control of all costs related to your wealth.",
        },
      ],
    },
    {
      id: "orkestratie",
      title: "Orchestration",
      shortDescription:
        "Active orchestration of all components of your wealth. From document management to guiding the next generation.",
      fullDescription:
        "Orchestration is at the core of what we do. We monitor compliance with your family charter, guide the next generation, monitor all service providers and handle complete administrative support.",
      icon: "orchestration",
      features: [
        {
          title: "Next Generation",
          description:
            "Monitoring the family charter and guiding the next generation in wealth management.",
        },
        {
          title: "Service Provider Monitoring",
          description:
            "File monitoring of all service providers and compliance oversight.",
        },
        {
          title: "Administration & Annual Accounts",
          description:
            "Administrative support and preparation of personal annual accounts.",
        },
        {
          title: "Document Management & Action Lists",
          description:
            "Management of all documentation, decision lists and follow-up actions.",
        },
        {
          title: "Insurance & Mortgages",
          description:
            "Arranging and monitoring insurance, mortgages and related documentation.",
        },
      ],
    },
  ],
};

export const pillars = data.nl;
export const getPillars = (lang) => data[lang] || data.nl;
