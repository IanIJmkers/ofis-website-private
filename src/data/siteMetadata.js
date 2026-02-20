const shared = {
  companyName: "Orchestra",
  fullName: "Orchestra Private",
  address: {
    street: "Mauritskade 25",
    postalCode: "2514 HD",
    city: "Den Haag",
  },
  phone: "+31 (0)70 205 11 81",
  email: "contact@orchestra-contact.com",
  linkedin: "https://www.linkedin.com/company/orchestra-familycharityoffice/",
  myOrchestra: "https://my-orchestra.com/",
};

const data = {
  nl: {
    ...shared,
    tagline: "Beheerst Vermogen",
    description:
      "Uw persoonlijke kantoor voor elk aspect van uw vermogen, uw familie, uw ambities maar ook uw gemoedsrust. Wij orchestreren actief alle onderdelen van uw vermogen.",
    address: { ...shared.address, country: "Nederland" },
    parkingInstructions:
      "U kunt bij ons parkeren achter het kantoor. Ga via de poort onder Parkstraat nummer 101, sla na de poort linksaf en rijd recht op ons parkeerterrein af.",
  },
  en: {
    ...shared,
    tagline: "Controlled Wealth",
    description:
      "Your personal office for every aspect of your wealth, your family, your ambitions and your peace of mind. We actively orchestrate all components of your wealth.",
    address: { ...shared.address, country: "The Netherlands" },
    parkingInstructions:
      "You can park behind our office. Enter through the gate under Parkstraat number 101, turn left after the gate and drive straight onto our parking lot.",
  },
};

export const siteMetadata = data.nl;
export const getSiteMetadata = (lang) => data[lang] || data.nl;
