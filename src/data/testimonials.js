const data = {
  nl: [
    {
      quote:
        "Orchestra biedt ons volledige controle over ons familievermogen. Hun integrale aanpak en persoonlijke benadering zijn precies wat wij zochten.",
      name: "Bestuurder",
      organization: "Familiefonds",
    },
    {
      quote:
        "De transitie naar Orchestra verliep uiterst soepel. Ons gehele vermogen wordt nu beheerst vanuit één punt, met volledig inzicht via Mijn Orchestra.",
      name: "Particulier",
      organization: "Vermogensbeheer cliënt",
    },
    {
      quote:
        "Wat Orchestra onderscheidt is hun proactieve houding. Zij wachten niet af, maar signaleren kansen en risico's voordat wij er zelf aan denken.",
      name: "Familie",
      organization: "Private Office cliënt",
    },
    {
      quote:
        "Het vaste tarief en de transparantie geven ons rust. Geen verborgen kosten, geen onverwachte verrassingen. Orchestra doet precies wat zij beloven.",
      name: "Oprichter",
      organization: "Familiestichting",
    },
  ],
  en: [
    {
      quote:
        "Orchestra offers us complete control over our family wealth. Their integrated approach and personal touch are exactly what we were looking for.",
      name: "Board Member",
      organization: "Family Fund",
    },
    {
      quote:
        "The transition to Orchestra went extremely smoothly. Our entire wealth is now controlled from one point, with full insight via My Orchestra.",
      name: "Individual",
      organization: "Wealth management client",
    },
    {
      quote:
        "What sets Orchestra apart is their proactive attitude. They don't wait, but identify opportunities and risks before we think of them ourselves.",
      name: "Family",
      organization: "Private Office client",
    },
    {
      quote:
        "The fixed fee and transparency give us peace of mind. No hidden costs, no unexpected surprises. Orchestra does exactly what they promise.",
      name: "Founder",
      organization: "Family Foundation",
    },
  ],
};

export const testimonials = data.nl;
export const getTestimonials = (lang) => data[lang] || data.nl;
