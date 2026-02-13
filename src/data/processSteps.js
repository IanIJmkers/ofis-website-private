const data = {
  nl: [
    {
      number: 1,
      title: "De Verkenning",
      description:
        "Wij nemen de tijd om uw volledige situatie te begrijpen: uw vermogen, uw familie, uw ambities en uw zorgen. Een open gesprek zonder verplichtingen.",
    },
    {
      number: 2,
      title: "De Herkenning",
      description:
        "Samen bepalen wij of er een wederzijdse klik is. Wij geloven dat een goede samenwerking begint bij herkenning en vertrouwen.",
    },
    {
      number: 3,
      title: "Het Voorstel",
      description:
        "Op basis van onze verkenning ontvangt u een voorstel op maat met een vast jaarlijks tarief. Helder, transparant en zonder verrassingen.",
    },
    {
      number: 4,
      title: "De Transitie",
      description:
        "Orchestra neemt alle transitielogistiek op zich. Wij zorgen voor een zorgeloze overgang zodat u zich nergens druk over hoeft te maken.",
    },
    {
      number: 5,
      title: "Het Inzicht",
      description:
        "Via Mijn Orchestra heeft u 24/7 toegang tot uw volledige vermogensoverzicht. Geïntegreerd inzicht, controle en transparantie.",
    },
  ],
  en: [
    {
      number: 1,
      title: "The Exploration",
      description:
        "We take the time to understand your complete situation: your wealth, your family, your ambitions and your concerns. An open conversation without obligations.",
    },
    {
      number: 2,
      title: "The Recognition",
      description:
        "Together we determine whether there is a mutual connection. We believe that a good collaboration starts with recognition and trust.",
    },
    {
      number: 3,
      title: "The Proposal",
      description:
        "Based on our exploration, you receive a tailored proposal with a fixed annual fee. Clear, transparent and without surprises.",
    },
    {
      number: 4,
      title: "The Transition",
      description:
        "Orchestra handles all transition logistics. We ensure a worry-free transition so you don't have to worry about anything.",
    },
    {
      number: 5,
      title: "The Insight",
      description:
        "Via My Orchestra you have 24/7 access to your complete wealth overview. Integrated insight, control and transparency.",
    },
  ],
};

export const processSteps = data.nl;
export const getProcessSteps = (lang) => data[lang] || data.nl;
