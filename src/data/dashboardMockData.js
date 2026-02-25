/* ─── Mock data for the interactive dashboard mockup ─── */

/* ─── Rapporten: Balance Sheet (Balans) ─── */
export const balansData = {
  years: ["31-12-2023", "31-12-2022"],
  activa: [
    { label: "Materiële vaste activa", values: ["7.167", "7.167"], children: [
      { label: "Inventaris", values: ["5.000", "5.000"] },
      { label: "Computers en apparatuur", values: ["2.167", "2.167"] },
    ] },
    { label: "Financiële vaste activa", values: ["7.513.751", "6.541.751"], children: [
      { label: "Leningen u/g", values: ["982.525", "496.525"] },
      { label: "Overige vorderingen", values: ["6.531.226", "6.045.226"] },
    ] },
    { label: "Effecten", values: ["41.788.949", "41.010.875"], children: [
      { label: "Aandelen", values: ["28.450.000", "27.800.000"] },
      { label: "Obligaties", values: ["10.338.949", "10.210.875"] },
      { label: "Overige effecten", values: ["3.000.000", "3.000.000"] },
    ] },
    { label: "Vorderingen en overlopende activa", values: ["7.450", "6.812"], children: [
      { label: "Debiteuren", values: ["4.200", "3.500"] },
      { label: "Overlopende activa", values: ["3.250", "3.312"] },
    ] },
    { label: "Liquide middelen", values: ["1.672.095", "1.117.250"], children: [
      { label: "ABN betaalrekening", values: ["1.200.000", "800.000"] },
      { label: "Spaarrekening", values: ["472.095", "317.250"] },
    ] },
  ],
  activaTotal: ["50.989.411", "48.683.854"],
  passiva: [
    { label: "Reserves", values: ["46.372.147", "45.542.733"], children: [
      { label: "Algemene reserve", values: ["40.000.000", "39.500.000"] },
      { label: "Bestemmingsreserve", values: ["6.372.147", "6.042.733"] },
    ] },
    { label: "Fondsen", values: ["3.595.826", "2.623.826"], children: [
      { label: "Fonds natuur", values: ["1.500.000", "1.200.000"] },
      { label: "Fonds cultuur", values: ["1.095.826", "823.826"] },
      { label: "Fonds onderwijs", values: ["1.000.000", "600.000"] },
    ] },
    { label: "Langlopende schulden", values: ["982.525", "496.525"], children: [
      { label: "Leningen", values: ["982.525", "496.525"] },
    ] },
    { label: "Kortlopende schulden", values: ["38.914", "20.770"], children: [
      { label: "Crediteuren", values: ["25.000", "12.000"] },
      { label: "Overlopende passiva", values: ["13.914", "8.770"] },
    ] },
  ],
  passivaTotal: ["50.989.411", "48.683.854"],
};

/* ─── Rapporten: Monthly chart data ─── */
export const rapportenChartData = {
  title: "Maandelijkse verdeling toekenningen",
  year: "2023",
  months: ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
  giften:   [2200, 1500, 1700, 1600, 1700, 1500, 1100, 2900, 4200, 5200, 7500, 8000],
  leningen: [0, 0, 0, 0, 0, 0, 0, 0, 0, 2000, 0, 0],
};

/* ─── Rapporten: Outstanding allocations ─── */
export const openstaandeToekenningen = [
  { project: "Projecten", relatie: "Stichting De Horizon", datum: "17-12-2025", bedrag: "1.000,00", openstaand: "200,00", bron: "Gift: AV20250012: Samen Vooruit" },
  { project: "Projecten", relatie: "Stichting Klankbord", datum: "10-12-2025", bedrag: "1.000,00", openstaand: "200,00", bron: "Gift: AV20250011: Voorbeeldproject" },
  { project: "Projecten", relatie: "Stichting Buurtkracht", datum: "17-11-2025", bedrag: "1.245,00", openstaand: "1.245,00", bron: "Gift: AV20250009: Voorbeeldproject" },
  { project: "Projecten", relatie: "Stichting Zonnestraal", datum: "29-10-2025", bedrag: "5.000,00", openstaand: "5.000,00", bron: "Gift: AV20250008: Voorbeeldproject" },
  { project: "Projecten", relatie: "Stichting Groene Toekomst", datum: "9-10-2025", bedrag: "5.000,00", openstaand: "1.000,00", bron: "Gift: AV20250007: Melodie van het Bos" },
  { project: "Projecten", relatie: "Stichting Groene Toekomst", datum: "9-10-2025", bedrag: "2.000,00", openstaand: "2.000,00", bron: "Loan: AV20250007: Melodie van het Bos" },
  { project: "Definitieve aanvraag", relatie: "Stichting Het Kompas", datum: "15-08-2025", bedrag: "1.000,00", openstaand: "1.000,00", bron: "Gift: AV20250006: Demo aanvraag" },
  { project: "Projecten", relatie: "Stichting De Boomgaard", datum: "16-07-2025", bedrag: "2.500,00", openstaand: "2.500,00", bron: "Gift: AV20230004: Groene Wereld" },
  { project: "Onderwijs", relatie: "Stichting Leerpad", datum: "8-07-2025", bedrag: "7.000,00", openstaand: "1.400,00", bron: "Gift: AV20250005: Beurs aanvraag demo" },
];

/* ─── Boekhouding: Journal post detail ─── */
export const journaalpostData = {
  id: 90,
  status: "Geboekt",
  tabs: ["Details", "Historie"],
  details: [
    { label: "ID:", value: "90" },
    { label: "Boekperiode:", value: "2023-01-01  2023-12-31", isLink: true },
    { label: "Datum:", value: "2023-10-09" },
    { label: "Omschrijving:", value: "Aflossing: AV20250007: Melodie van het Bos" },
    { label: "Document:", value: "" },
  ],
  items: [
    { grootboekrekening: "ABN betaalrekening", code: "1500", bedrag: "1.000,00", kostenplaats: "" },
    { grootboekrekening: "Debiteuren", code: "2121", bedrag: "-1.000,00", kostenplaats: "" },
  ],
  referenties: [
    {
      type: "LOAN",
      label: "AV20250007: Melodie van het Bos",
      relatie: "Stichting Groene Toekomst",
      bedrag: "2.000,00",
    },
  ],
  documenten: [
    { naam: "Aflossing_AV20250007.pdf", datum: "2023-10-09", grootte: "42 KB" },
  ],
};

/* ─── Bankzaken: Bank transaction table ─── */
export const bankTransactiesData = {
  tabs: ["Alle", "Te autoriseren"],
  approveCount: 56,
  rejectCount: 56,
  totalRows: 68,
  transacties: [
    {
      id: 68, datum: "2026-02-13",
      tegenrekeningNaam: "Demo Consultancy B.V.", tegenrekeningIban: "NL74 INGB 0000 0000 01",
      bedrag: "2.000,00", herkomst: null, oordeel: null, beoordelingen: "",
      omschrijving: "Werkzaamheden februari", betalingskenmerk: "",
      bankrekening: { naam: "Bankrekening bedrijf", iban: "NL85 RABO 0000 0000 02" },
      document: null,
    },
    {
      id: 67, datum: "2026-02-12",
      tegenrekeningNaam: "Voorbeeld Software B.V.", tegenrekeningIban: "NL83 ABNA 0000 0000 03",
      bedrag: "200,00", herkomst: null, oordeel: null, beoordelingen: "",
      omschrijving: "Licentie februari", betalingskenmerk: "",
      bankrekening: { naam: "Bankrekening bedrijf", iban: "NL85 RABO 0000 0000 02" },
      document: null,
    },
    {
      id: 66, datum: "2026-02-12",
      tegenrekeningNaam: "Sportvereniging De Adelaar", tegenrekeningIban: "NL88 INGB 0000 0000 04",
      bedrag: "2.000,00", herkomst: null, oordeel: null, beoordelingen: "",
      omschrijving: "Subsidie februari", betalingskenmerk: "",
      bankrekening: { naam: "Bankrekening bedrijf", iban: "NL85 RABO 0000 0000 02" },
      document: null,
    },
    {
      id: 65, datum: "2026-01-23",
      tegenrekeningNaam: "Catering Van Dijk", tegenrekeningIban: "NL58 ABNA 0000 0000 05",
      bedrag: "2.300,00", herkomst: null, oordeel: null, beoordelingen: "",
      omschrijving: "Factuur januari", betalingskenmerk: "",
      bankrekening: { naam: "Bankrekening bedrijf", iban: "NL85 RABO 0000 0000 02" },
      document: "Factuur_F2025-0001234.pdf",
    },
    {
      id: 64, datum: "2026-01-23",
      tegenrekeningNaam: "Catering Van Dijk", tegenrekeningIban: "NL58 ABNA 0000 0000 05",
      bedrag: "2.300,00", herkomst: null, oordeel: null, beoordelingen: "",
      omschrijving: "Correctie januari", betalingskenmerk: "",
      bankrekening: { naam: "Bankrekening bedrijf", iban: "NL85 RABO 0000 0000 02" },
      document: null,
    },
    {
      id: 63, datum: "2026-01-21",
      tegenrekeningNaam: "Demo Consultancy B.V.", tegenrekeningIban: "NL74 INGB 0000 0000 01",
      bedrag: "1.520,00", herkomst: null, oordeel: null, beoordelingen: "",
      omschrijving: "Advieskosten januari", betalingskenmerk: "",
      bankrekening: { naam: "Bankrekening bedrijf", iban: "NL85 RABO 0000 0000 02" },
      document: null,
    },
    {
      id: 62, datum: "2025-12-17",
      tegenrekeningNaam: "Stichting De Horizon", tegenrekeningIban: "NL37 ABNA 0000 0000 06",
      bedrag: "800,00",
      herkomst: { type: "toekenning", ref: "AV20250012", relatie: "Stichting De Horizon", bedrag: "800,00", datum: "2025-12-17" },
      oordeel: "approved", beoordelingen: "Thomas de Groot\n2025-12-17 15:03",
      omschrijving: "AV20250012 Toekenning", betalingskenmerk: "AV20250012",
      bankrekening: { naam: "Stichting", iban: "NL36 ABNA 0000 0000 07" },
      document: null,
    },
    {
      id: 61, datum: "2025-12-10",
      tegenrekeningNaam: "Stichting Klankbord", tegenrekeningIban: "NL51 INGB 0000 0000 08",
      bedrag: "800,00",
      herkomst: { type: "toekenning", ref: "AV20250011", relatie: "Stichting Klankbord", bedrag: "800,00", datum: "2025-12-10" },
      oordeel: null, beoordelingen: "",
      omschrijving: "AV20250011 Toekenning", betalingskenmerk: "AV20250011",
      bankrekening: { naam: "Stichting", iban: "NL36 ABNA 0000 0000 07" },
      document: null,
    },
    {
      id: 60, datum: "2025-10-09",
      tegenrekeningNaam: "Stichting Groene Toekomst", tegenrekeningIban: "NL90 INGB 0000 0000 09",
      bedrag: "2.000,00",
      herkomst: { type: "lening", ref: "AV20250007", label: "Melodie van het Bos", relatie: "Stichting Groene Toekomst", bedrag: "2.000,00" },
      oordeel: "approved", beoordelingen: "Thomas de Groot\n2025-10-09 11:46",
      omschrijving: "AV20250007: Melodie van het Bos", betalingskenmerk: "AV20250007",
      bankrekening: { naam: "Stichting", iban: "NL36 ABNA 0000 0000 07" },
      document: null,
    },
    {
      id: 59, datum: "2025-10-09",
      tegenrekeningNaam: "Stichting Groene Toekomst", tegenrekeningIban: "NL90 INGB 0000 0000 09",
      bedrag: "4.000,00",
      herkomst: { type: "toekenning", ref: "AV20250007", relatie: "Stichting Groene Toekomst", bedrag: "4.000,00", datum: "2025-10-09" },
      oordeel: null, beoordelingen: "",
      omschrijving: "AV20250007 Toekenning", betalingskenmerk: "AV20250007",
      bankrekening: { naam: "Stichting", iban: "NL36 ABNA 0000 0000 07" },
      document: null,
    },
  ],
};

/* ─── Facturatie: Invoice detail ─── */
export const factuurData = {
  fields: [
    { label: "Datum", value: "14-3-2025" },
    { label: "Vervaldatum", value: "-" },
    { label: "Factuurnummer (extern)", value: "12345" },
    { label: "Omschrijving", value: "12345" },
    { label: "Bedrag (excl. BTW)", value: "€ 1.350,00" },
    { label: "BTW Bedrag", value: "€ 0,00" },
    { label: "Leverancier", value: "Voorbeeld Kantoor B.V." },
    { label: "Geautoriseerd", value: "✓ Maria Jansen (17-04-2025, 15:15)" },
  ],
  invoicePreview: {
    company: "Bedrijfsnaam",
    address: "Voorbeeldweg 100, 1000 AB Amsterdam",
    phone: "Telefoon: 020 123 4567",
    to: "DEMO STICHTING\nPieter Bakker\nVoorbeeldstraat 10\n1000 AB Amsterdam",
    number: "12345",
    date: "14-3-2025",
    lines: [
      { desc: "Product", aantal: 5, eenheid: "Stuk", tarief: "60 €", totaal: "300,00 €" },
      { desc: "Werk", aantal: 10, eenheid: "Uur", tarief: "105 €", totaal: "1 050,00 €" },
    ],
    total: "1 350,00 €",
  },
  referenties: [
    { type: "RELATIE", label: "Voorbeeld Kantoor B.V." },
    { type: "BETAALOPDRACHT", label: "12345" },
  ],
  opmerkingen: [],
};

/* ─── Relaties: Contact table ─── */
export const relatiesData = [
  { type: "Persoon", naam: "Eva de Wit", adres: "", postcode: "", plaats: "", land: "", telefoon: "+31600000001", email: "eva.dewit@voorbeeld.nl" },
  { type: "Organisatie", naam: "Stichting De Horizon", adres: "Keizersgracht 100", postcode: "1015 AA", plaats: "Amsterdam", land: "NL", telefoon: "+31200000001", email: "info@dehorizon-demo.nl" },
  { type: "Persoon", naam: "Sophie Vermeer", adres: "", postcode: "", plaats: "", land: "", telefoon: "+31600000002", email: "sophie.vermeer@voorbeeld.nl" },
  { type: "Organisatie", naam: "Stichting Klankbord", adres: "Coolsingel 50", postcode: "3011 AA", plaats: "Rotterdam", land: "NL", telefoon: "+31100000001", email: "info@klankbord-demo.nl" },
  { type: "Organisatie", naam: "Stichting Buurtkracht", adres: "Mariaplaats 12", postcode: "3511 LH", plaats: "Utrecht", land: "NL", telefoon: "+31300000001", email: "info@buurtkracht-demo.nl" },
  { type: "Organisatie", naam: "Stichting Zonnestraal", adres: "Grote Markt 8", postcode: "9711 LV", plaats: "Groningen", land: "NL", telefoon: "+31500000001", email: "info@zonnestraal-demo.nl" },
];

/* ─── Donaties: Monthly data + table ─── */
export const donatiesData = {
  chartMonths: ["0", "2", "4", "6", "8", "10", "12"],
  chartValues: [0, 800, 1500, 2200, 3000, 3800, 4800, 5500],
  table: [
    { id: 30, afkomst: "Periodiek", donateur: "Stichting Welzijn", bedrag: "500,00", datum: "2025-12-01", omschrijving: "Maandelijkse donatie", oormerk: "Algemeen", status: "Open" },
    { id: 29, afkomst: "Periodiek", donateur: "Stichting Welzijn", bedrag: "500,00", datum: "2025-11-01", omschrijving: "Maandelijkse donatie", oormerk: "Algemeen", status: "Open" },
    { id: 28, afkomst: "Periodiek", donateur: "Stichting Welzijn", bedrag: "500,00", datum: "2025-10-01", omschrijving: "Maandelijkse donatie", oormerk: "Algemeen", status: "Open" },
    { id: 27, afkomst: "Periodiek", donateur: "Stichting Welzijn", bedrag: "500,00", datum: "2025-09-01", omschrijving: "Maandelijkse donatie", oormerk: "Algemeen", status: "Open" },
    { id: 26, afkomst: "Periodiek", donateur: "Stichting Welzijn", bedrag: "500,00", datum: "2025-08-01", omschrijving: "Maandelijkse donatie", oormerk: "Algemeen", status: "Open" },
  ],
  totaal: "€ 14.130,00",
};

/* ─── Documenten: File listing ─── */
export const documentenData = [
  { id: 654, naam: "Notulen_Bestuursvergadering_Demo.pdf", grootte: "84488", gewijzigd: "2026-02-02 10:51", aangemaakt: "2026-02-02 10:51", labels: [] },
  { id: 653, naam: "Factuur_F2025-0001234.pdf", grootte: "59202", gewijzigd: "2026-02-02 10:50", aangemaakt: "2026-02-02 10:50", labels: [] },
  { id: 652, naam: "Factuur_F2025-0005678.pdf", grootte: "59175", gewijzigd: "2026-02-02 10:49", aangemaakt: "2026-02-02 10:49", labels: [] },
  { id: 624, naam: "Jaarverslag_2024.pdf", grootte: "841272", gewijzigd: "2025-09-05 15:46", aangemaakt: "2025-09-05 15:46", labels: [] },
  { id: 623, naam: "Beleidsplan_2025.pdf", grootte: "984074", gewijzigd: "2025-09-05 08:28", aangemaakt: "2025-09-05 08:28", labels: ["2024", "beleidsplan"] },
  { id: 622, naam: "Uittreksel_KvK.pdf", grootte: "208990", gewijzigd: "2025-09-02 13:38", aangemaakt: "2025-09-02 13:38", labels: [] },
  { id: 577, naam: "Overzicht_Donaties.pdf", grootte: "111131", gewijzigd: "2025-01-02 15:22", aangemaakt: "2025-01-02 15:22", labels: ["Facturen"] },
  { id: 572, naam: "Mijn_Orchestra_Handleiding.pdf", grootte: "326979", gewijzigd: "2024-11-18 14:09", aangemaakt: "2024-11-18 14:09", labels: [] },
];

/* ─── Organizer: Meeting view ─── */
export const organizerData = {
  meeting: {
    title: "Vergadering voorbeeld",
    omschrijving: "Vergadering voorbeeld",
    start: "27-1-2026",
    eind: "-",
    locatie: "-",
    notulist: "Thomas de Groot",
    gesloten: "-",
  },
  genodigden: [
    { naam: "Thomas de Groot", aanwezig: true, ondertekend: false },
  ],
  aanvragen: [
    { aanvrager: "Stichting De Horizon", nummer: "AV20250012", status: "Toegekend", gift: "1.000,00", lening: "0,00", stemmer: "Thomas de Groot" },
    { aanvrager: "Stichting Klankbord", nummer: "AV20250011", status: "Toegekend", gift: "1.000,00", lening: "0,00", stemmer: "Thomas de Groot" },
    { aanvrager: "Stichting De Horizon", nummer: "AV20250010", status: "Toegekend", gift: "7.500,00", lening: "0,00", stemmer: "Thomas de Groot" },
    { aanvrager: "Stichting Buurtkracht", nummer: "AV20250009", status: "Toegekend", gift: "1.245,00", lening: "0,00", stemmer: "Thomas de Groot" },
    { aanvrager: "Stichting Zonnestraal", nummer: "AV20250008", status: "Toegekend", gift: "5.000,00", lening: "0,00", stemmer: "Thomas de Groot" },
    { aanvrager: "Stichting Groene Toekomst", nummer: "AV20250007", status: "Toegekend", gift: "5.000,00", lening: "2.000,00", stemmer: "Thomas de Groot" },
  ],
  acties: [
    { gebruiker: "Maria Jansen", omschrijving: "Voorstel budget lustrum", aangemaakt: "", deadline: "13-04-2021", uitgevoerd: false },
    { gebruiker: "Thomas de Groot", omschrijving: "Notulen versturen naar bestuur", aangemaakt: "27-01-2026", deadline: "03-02-2026", uitgevoerd: false },
  ],
  besluiten: [
    { omschrijving: "Het bestuur besluit de aanvraag goed te keuren." },
    { omschrijving: "Het bestuur besluit het beleidsplan 2026 in de volgende vergadering te bespreken." },
  ],
  aanvragenSummary: {
    open: { count: 1, bedrag: "5.000,00" },
    goedgekeurd: { count: 1, bedrag: "7.000,00" },
    afgekeurd: { count: 0, bedrag: "0,00" },
  },
};
