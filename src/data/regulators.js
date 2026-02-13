const data = {
  nl: [
    {
      name: "De Nederlandsche Bank",
      abbreviation: "DNB",
      description: "Prudentieel toezicht",
    },
    {
      name: "Autoriteit Financiële Markten",
      abbreviation: "AFM",
      description: "Gedragstoezicht",
    },
    {
      name: "Autoriteit Persoonsgegevens",
      abbreviation: "AP",
      description: "Privacy en gegevensbescherming",
    },
    {
      name: "Dutch Securities Institute",
      abbreviation: "DSI",
      description: "Beroepsnormen financiële sector",
    },
    {
      name: "KiFid",
      abbreviation: "KiFid",
      description: "Klachteninstituut Financiële Dienstverlening",
    },
  ],
  en: [
    {
      name: "De Nederlandsche Bank",
      abbreviation: "DNB",
      description: "Prudential supervision",
    },
    {
      name: "Authority for the Financial Markets",
      abbreviation: "AFM",
      description: "Conduct supervision",
    },
    {
      name: "Dutch Data Protection Authority",
      abbreviation: "AP",
      description: "Privacy and data protection",
    },
    {
      name: "Dutch Securities Institute",
      abbreviation: "DSI",
      description: "Professional standards financial sector",
    },
    {
      name: "KiFid",
      abbreviation: "KiFid",
      description: "Financial Services Complaints Institute",
    },
  ],
};

export const regulators = data.nl;
export const getRegulators = (lang) => data[lang] || data.nl;
