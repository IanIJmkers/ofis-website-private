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
  { project: "Projecten", relatie: "Stichting Kunst en Cultuur", datum: "17-12-2025", bedrag: "1.000,00", openstaand: "200,00", bron: "Gift: AV20250012: Kunst in de Wijk" },
  { project: "Projecten", relatie: "Stichting Geluid van de Stad", datum: "10-12-2025", bedrag: "1.000,00", openstaand: "200,00", bron: "Gift: AV20250011: test" },
  { project: "Projecten", relatie: "Stichting Vrienden", datum: "17-11-2025", bedrag: "1.245,00", openstaand: "1.245,00", bron: "Gift: AV20250009: test" },
  { project: "Projecten", relatie: "Stichting Phantasia", datum: "29-10-2025", bedrag: "5.000,00", openstaand: "5.000,00", bron: "Gift: AV20250008: test" },
  { project: "Projecten", relatie: "Stichting Natuurklanken", datum: "9-10-2025", bedrag: "5.000,00", openstaand: "1.000,00", bron: "Gift: AV20250007: Symfonie van de Natuur" },
  { project: "Projecten", relatie: "Stichting Natuurklanken", datum: "9-10-2025", bedrag: "2.000,00", openstaand: "2.000,00", bron: "Loan: AV20250007: Symfonie van de Natuur" },
  { project: "Definitieve aanvraag", relatie: "St. Levi Lassen", datum: "15-08-2025", bedrag: "1.000,00", openstaand: "1.000,00", bron: "Gift: AV20250006: Test aanvraag" },
  { project: "Projecten", relatie: "Stichting De Groote Beer", datum: "16-07-2025", bedrag: "2.500,00", openstaand: "2.500,00", bron: "Gift: AV20230004: Grote Loep" },
  { project: "Onderwijs", relatie: "Dok 99", datum: "8-07-2025", bedrag: "7.000,00", openstaand: "1.400,00", bron: "Gift: AV20250005: Apply for grant Emma" },
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
    { label: "Omschrijving:", value: "Aflossing: AV20250007: Symfonie van de Natuur" },
    { label: "Document:", value: "" },
  ],
  items: [
    { grootboekrekening: "ABN betaalrekening", code: "1500", bedrag: "1.000,00", kostenplaats: "" },
    { grootboekrekening: "Debiteuren", code: "2121", bedrag: "-1.000,00", kostenplaats: "" },
  ],
  referenties: [
    {
      type: "LOAN",
      label: "AV20250007: Symfonie van de Natuur",
      relatie: "Stichting Natuurklanken",
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
      tegenrekeningNaam: "Automated Design", tegenrekeningIban: "NL74 INGB 5350 2444 69",
      bedrag: "2.000,00", herkomst: null, oordeel: null, beoordelingen: "",
      omschrijving: "Werkzaamheden februari", betalingskenmerk: "",
      bankrekening: { naam: "Bankrekening bedrijf", iban: "NL85 RAB0 7467 5394 36" },
      document: null,
    },
    {
      id: 67, datum: "2026-02-12",
      tegenrekeningNaam: "Charta Software", tegenrekeningIban: "NL83 ABNA 1584 1598 84",
      bedrag: "200,00", herkomst: null, oordeel: null, beoordelingen: "",
      omschrijving: "febr", betalingskenmerk: "",
      bankrekening: { naam: "Bankrekening bedrijf", iban: "NL85 RAB0 7467 5394 36" },
      document: null,
    },
    {
      id: 66, datum: "2026-02-12",
      tegenrekeningNaam: "Badminton Association Deventer", tegenrekeningIban: "NL88 INGB 3184 7524 88",
      bedrag: "2.000,00", herkomst: null, oordeel: null, beoordelingen: "",
      omschrijving: "Test feb", betalingskenmerk: "",
      bankrekening: { naam: "Bankrekening bedrijf", iban: "NL85 RAB0 7467 5394 36" },
      document: null,
    },
    {
      id: 65, datum: "2026-01-23",
      tegenrekeningNaam: "FuelOurbody", tegenrekeningIban: "NL58 ABNA 3286 4980 58",
      bedrag: "2.300,00", herkomst: null, oordeel: null, beoordelingen: "",
      omschrijving: "Januari test 2", betalingskenmerk: "",
      bankrekening: { naam: "Bankrekening bedrijf", iban: "NL85 RAB0 7467 5394 36" },
      document: "Factuur_F2025-1076312.pdf",
    },
    {
      id: 64, datum: "2026-01-23",
      tegenrekeningNaam: "FuelOurbody", tegenrekeningIban: "NL58 ABNA 3286 4980 58",
      bedrag: "2.300,00", herkomst: null, oordeel: null, beoordelingen: "",
      omschrijving: "Januari test 2", betalingskenmerk: "",
      bankrekening: { naam: "Bankrekening bedrijf", iban: "NL85 RAB0 7467 5394 36" },
      document: null,
    },
    {
      id: 63, datum: "2026-01-21",
      tegenrekeningNaam: "Automated Design", tegenrekeningIban: "NL74 INGB 5350 2444 69",
      bedrag: "1.520,00", herkomst: null, oordeel: null, beoordelingen: "",
      omschrijving: "Januari test 26", betalingskenmerk: "",
      bankrekening: { naam: "Bankrekening bedrijf", iban: "NL85 RAB0 7467 5394 36" },
      document: null,
    },
    {
      id: 62, datum: "2025-12-17",
      tegenrekeningNaam: "Stichting Kunst en Cultuur", tegenrekeningIban: "NL37 ABNA 5373 3884 66",
      bedrag: "800,00",
      herkomst: { type: "toekenning", ref: "AV20250012", relatie: "Stichting Kunst en Cultuur", bedrag: "800,00", datum: "2025-12-17" },
      oordeel: "approved", beoordelingen: "Arjan van Gulick\n2025-12-17 15:03",
      omschrijving: "AV20250012 Toekenning", betalingskenmerk: "AV20250012",
      bankrekening: { naam: "Stichting", iban: "NL36 ABNA 1157 5383 03" },
      document: null,
    },
    {
      id: 61, datum: "2025-12-10",
      tegenrekeningNaam: "test", tegenrekeningIban: "NL51 INGB 3984 2127 98",
      bedrag: "800,00",
      herkomst: { type: "toekenning", ref: "AV20250011", relatie: "test", bedrag: "800,00", datum: "2025-12-10" },
      oordeel: null, beoordelingen: "",
      omschrijving: "AV20250011 Toekenning", betalingskenmerk: "AV20250011",
      bankrekening: { naam: "Stichting", iban: "NL36 ABNA 1157 5383 03" },
      document: null,
    },
    {
      id: 60, datum: "2025-10-09",
      tegenrekeningNaam: "Stichting Natuurklanken", tegenrekeningIban: "NL90 INGB 5525 2550 73",
      bedrag: "2.000,00",
      herkomst: { type: "lening", ref: "AV20250007", label: "Symfonie van de Natuur", relatie: "Stichting Natuurklanken", bedrag: "2.000,00" },
      oordeel: "approved", beoordelingen: "Arjan van Gulick\n2025-10-09 11:46",
      omschrijving: "AV20250007: Symfonie van de Natuur", betalingskenmerk: "AV20250007",
      bankrekening: { naam: "Stichting", iban: "NL36 ABNA 1157 5383 03" },
      document: null,
    },
    {
      id: 59, datum: "2025-10-09",
      tegenrekeningNaam: "Stichting Natuurklanken", tegenrekeningIban: "NL90 INGB 5525 2550 73",
      bedrag: "4.000,00",
      herkomst: { type: "toekenning", ref: "AV20250007", relatie: "Stichting Natuurklanken", bedrag: "4.000,00", datum: "2025-10-09" },
      oordeel: null, beoordelingen: "",
      omschrijving: "AV20250007 Toekenning", betalingskenmerk: "AV20250007",
      bankrekening: { naam: "Stichting", iban: "NI 36 ABNA 1157 5383 03" },
      document: null,
    },
  ],
};

/* ─── Projecten: Budget data ─── */
export const projectenData = {
  dateRange: "01-01-2023 - 31-12-2023",
  chartCategories: [
    { label: "Definitieve aanvraag", percentage: 35, color: "#0B2A48" },
    { label: "Pré aanvraag", percentage: 20, color: "#3D6995" },
    { label: "Natuur", percentage: 15, color: "#9FB5CB" },
    { label: "Onderwijs", percentage: 12, color: "#E8C872" },
    { label: "Culturele projecten", percentage: 10, color: "#AA8C2B" },
    { label: "Projecten", percentage: 8, color: "#D4762C" },
  ],
  budget: "€ 2.950.000,00",
  toegekend: "€ 33.784,56",
  resterend: "€ 2.916.215,44",
  monthlyChart: {
    months: ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
    giften:   [0, 0, 1000, 0, 5000, 0, 7500, 0, 5000, 4000, 1245, 1000],
    leningen: [0, 0, 0, 0, 0, 0, 0, 0, 2000, 0, 0, 0],
  },
  aanvragenTable: [
    { nummer: "AV20250012", aanvrager: "Stichting Kunst en Cultuur", categorie: "Culturele projecten", gift: "1.000,00", lening: "0,00", status: "Toegekend", datum: "17-12-2025" },
    { nummer: "AV20250011", aanvrager: "Stichting Geluid van de Stad", categorie: "Definitieve aanvraag", gift: "1.000,00", lening: "0,00", status: "Toegekend", datum: "10-12-2025" },
    { nummer: "AV20250010", aanvrager: "Stichting Kunst en Cultuur", categorie: "Culturele projecten", gift: "7.500,00", lening: "0,00", status: "Toegekend", datum: "09-10-2025" },
    { nummer: "AV20250009", aanvrager: "Stichting Vrienden", categorie: "Onderwijs", gift: "1.245,00", lening: "0,00", status: "Toegekend", datum: "15-09-2025" },
    { nummer: "AV20250008", aanvrager: "Stichting Phantasia", categorie: "Natuur", gift: "5.000,00", lening: "0,00", status: "Toegekend", datum: "20-08-2025" },
    { nummer: "AV20250007", aanvrager: "Stichting Natuurklanken", categorie: "Natuur", gift: "5.000,00", lening: "2.000,00", status: "Toegekend", datum: "09-10-2025" },
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
    { label: "Leverancier", value: "New Babylon Gardens" },
    { label: "Geautoriseerd", value: "✓ Ian IJmkers (17-04-2025, 15:15)" },
  ],
  invoicePreview: {
    company: "Bedrijfsnaam",
    address: "Middelweg 100, 1130 Brussel, België",
    phone: "Telefoon: 1234 567 890",
    to: "DEMO STICHTING\nAdam Peeters\nStraatnaam 10\n1000 Brussel",
    number: "12345",
    date: "14-3-2025",
    lines: [
      { desc: "Product", aantal: 5, eenheid: "Stuk", tarief: "60 €", totaal: "300,00 €" },
      { desc: "Werk", aantal: 10, eenheid: "Uur", tarief: "105 €", totaal: "1 050,00 €" },
    ],
    total: "1 350,00 €",
  },
  referenties: [
    { type: "RELATIE", label: "New Babylon Gardens" },
    { type: "BETAALOPDRACHT", label: "12345" },
  ],
  opmerkingen: [],
};

/* ─── Relaties: Contact table ─── */
export const relatiesData = [
  { type: "Persoon", naam: "Jan de Vries", adres: "", postcode: "", plaats: "", land: "", telefoon: "+31612345678", email: "jan.devries@muziekeducatie.nl" },
  { type: "Organisatie", naam: "Stichting Kunst en Cultuur", adres: "Cultuurplein 5", postcode: "5678 CD", plaats: "Rotterdam", land: "NL", telefoon: "+31109876543", email: "info@kunstcultuur.nl" },
  { type: "Persoon", naam: "Lisa van den Berg", adres: "", postcode: "", plaats: "", land: "", telefoon: "+31687654321", email: "lisa.vandenberg@kunstcultuur.nl" },
  { type: "Organisatie", naam: "Stichting Geluid van de Stad", adres: "Stadsplein 22", postcode: "3011 AA", plaats: "Rotterdam", land: "NL", telefoon: "+31106543210", email: "info@geluidvandestad.nl" },
  { type: "Organisatie", naam: "Stichting Vrienden", adres: "Stadsplein 450", postcode: "3011 AD", plaats: "Rotterdam", land: "NL", telefoon: "+31615627328", email: "StichtingVrienden@gmail.com" },
  { type: "Organisatie", naam: "Stichting Phantasia", adres: "Stadsplein 458", postcode: "3011 AR", plaats: "Rotterdam", land: "NL", telefoon: "0615627398", email: "Stichting Phantasia@gmail.com" },
];

/* ─── Donaties: Monthly data + table ─── */
export const donatiesData = {
  chartMonths: ["0", "2", "4", "6", "8", "10", "12"],
  chartValues: [0, 800, 1500, 2200, 3000, 3800, 4800, 5500],
  table: [
    { id: 30, afkomst: "Periodiek", donateur: "Daniel den Hoed", bedrag: "500,00", datum: "2025-12-01", omschrijving: "Maandelijkse donatie", oormerk: "Daniel den Hoed", status: "Open" },
    { id: 29, afkomst: "Periodiek", donateur: "Daniel den Hoed", bedrag: "500,00", datum: "2025-11-01", omschrijving: "Maandelijkse donatie", oormerk: "Daniel den Hoed", status: "Open" },
    { id: 28, afkomst: "Periodiek", donateur: "Daniel den Hoed", bedrag: "500,00", datum: "2025-10-01", omschrijving: "Maandelijkse donatie", oormerk: "Daniel den Hoed", status: "Open" },
    { id: 27, afkomst: "Periodiek", donateur: "Daniel den Hoed", bedrag: "500,00", datum: "2025-09-01", omschrijving: "Maandelijkse donatie", oormerk: "Daniel den Hoed", status: "Open" },
    { id: 26, afkomst: "Periodiek", donateur: "Daniel den Hoed", bedrag: "500,00", datum: "2025-08-01", omschrijving: "Maandelijkse donatie", oormerk: "Daniel den Hoed", status: "Open" },
  ],
  totaal: "€ 14.130,00",
};

/* ─── Documenten: File listing ─── */
export const documentenData = [
  { id: 654, naam: "Notulen_Bestuursvergadering_Demo.pdf", grootte: "84488", gewijzigd: "2026-02-02 10:51", aangemaakt: "2026-02-02 10:51", labels: [] },
  { id: 653, naam: "Factuur_F2025-1076312.pdf", grootte: "59202", gewijzigd: "2026-02-02 10:50", aangemaakt: "2026-02-02 10:50", labels: [] },
  { id: 652, naam: "Factuur_F2025-1172228.pdf", grootte: "59175", gewijzigd: "2026-02-02 10:49", aangemaakt: "2026-02-02 10:49", labels: [] },
  { id: 624, naam: "Effecten__portefeuille.pdf", grootte: "841272", gewijzigd: "2025-09-05 15:46", aangemaakt: "2025-09-05 15:46", labels: [] },
  { id: 623, naam: "KSA discussiestuk Orchestra.pdf", grootte: "984074", gewijzigd: "2025-09-05 08:28", aangemaakt: "2025-09-05 08:28", labels: ["2024", "beleidsplan"] },
  { id: 622, naam: "944 pdf.pdf", grootte: "208990", gewijzigd: "2025-09-02 13:38", aangemaakt: "2025-09-02 13:38", labels: [] },
  { id: 577, naam: "Combine.pdf", grootte: "111131", gewijzigd: "2025-01-02 15:22", aangemaakt: "2025-01-02 15:22", labels: ["Facturen"] },
  { id: 572, naam: "My Orchestra.pdf", grootte: "326979", gewijzigd: "2024-11-18 14:09", aangemaakt: "2024-11-18 14:09", labels: [] },
];

/* ─── Organizer: Meeting view ─── */
export const organizerData = {
  meeting: {
    title: "Vergadering voorbeeld",
    omschrijving: "Vergadering voorbeeld",
    start: "27-1-2026",
    eind: "-",
    locatie: "-",
    notulist: "Arjan van Gulick",
    gesloten: "-",
  },
  genodigden: [
    { naam: "Arjan van Gulick", aanwezig: true, ondertekend: false },
  ],
  aanvragen: [
    { aanvrager: "Stichting Kunst en Cultuur", nummer: "AV20250012", status: "Toegekend", gift: "1.000,00", lening: "0,00", stemmer: "Arjan van Gulick" },
    { aanvrager: "Stichting Geluid van de Stad", nummer: "AV20250011", status: "Toegekend", gift: "1.000,00", lening: "0,00", stemmer: "Arjan van Gulick" },
    { aanvrager: "Stichting Kunst en Cultuur", nummer: "AV20250010", status: "Toegekend", gift: "7.500,00", lening: "0,00", stemmer: "Arjan van Gulick" },
    { aanvrager: "Stichting Vrienden", nummer: "AV20250009", status: "Toegekend", gift: "1.245,00", lening: "0,00", stemmer: "Arjan van Gulick" },
    { aanvrager: "Stichting Phantasia", nummer: "AV20250008", status: "Toegekend", gift: "5.000,00", lening: "0,00", stemmer: "Arjan van Gulick" },
    { aanvrager: "Stichting Natuurklanken", nummer: "AV20250007", status: "Toegekend", gift: "5.000,00", lening: "2.000,00", stemmer: "Arjan van Gulick" },
  ],
  acties: [
    { gebruiker: "Wouter Hofhuis", omschrijving: "Voorstel budget lustrum", aangemaakt: "", deadline: "13-04-2021", uitgevoerd: false },
    { gebruiker: "Arjan van Gulick", omschrijving: "Notulen versturen naar bestuur", aangemaakt: "27-01-2026", deadline: "03-02-2026", uitgevoerd: false },
  ],
  besluiten: [
    { omschrijving: "accept test application" },
    { omschrijving: "Het bestuur besluit het beleidsplan 2026 in de volgende vergadering te bespreken." },
  ],
  aanvragenSummary: {
    open: { count: 1, bedrag: "5.000,00" },
    goedgekeurd: { count: 1, bedrag: "7.000,00" },
    afgekeurd: { count: 0, bedrag: "0,00" },
  },
};
