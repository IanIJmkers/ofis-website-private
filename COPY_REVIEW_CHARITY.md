# Orchestra Charity Office — Copy Review

Proposed copy for the charity-side site (orchestra-website-2). Same workflow as the private-office review: mark up the "Edits / notes" line under each block with what you'd change, or leave blank to keep as-is. Once you've marked it up, I'll fold the edits into [src/locales/nl.js](../orchestra-website-2/src/locales/nl.js) and [src/locales/en.js](../orchestra-website-2/src/locales/en.js).

Dutch is primary. English mirror follows each Dutch block.

The structure mirrors the private-office COPY_REVIEW but is adapted for charity audiences: the L1 institutional-authority argument is reframed as "institutional discipline applied to charity treasury", and the L2 fee-model argument gains a moral lever — every basis point taken by AUM-based fees is money that does not reach beneficiaries.

---

## Strategic foundation

### Positioning statement

> Orchestra Charity Office is een Nederlands kantoor voor integraal financieel beheer van stichtingen en goede doelen. Wij voeren het vermogensbeheer met institutionele discipline en organiseren daaromheen de administratie, governance en compliance van uw stichting als één samenhangend systeem. Wij vervangen versnipperde dienstverlening door regie. En omdat ons werk niet schaalt met de omvang van uw vermogen, factureren wij niet op vermogen, maar op verantwoordelijkheid — een vaste vergoeding per jaar. Iedere basispunt aan AUM-percentage die uw stichting bespaart, is een basispunt dat naar uw missie kan.

### The L0 → L4 rule (mirrors private-office)

| Layer | Function | What it says on the charity site |
|---|---|---|
| L0 — Frame | Name the category | "Het Charity Office van Nederland" — sharpen the boulevard claim |
| L1 — Authority | Institutional credibility | Pension-fund-grade investing + meer-ogen governance + sector-exclusive expertise |
| L2 — Economics | Fee logic as conclusion | "Factureren op verantwoordelijkheid, niet op vermogen — elke basispunt is een euro voor uw missie" |
| L3 — Friction | Acknowledge board anxiety | "Voor sommige bestuursleden voelt dit eerst vreemd" |
| L4 — Invitation | CTA | Verkennend gesprek / spreek met een Charity Office specialist |

**Rule:** L2 never appears before L1. The current Home page introduces fees on the Services/Wealth Management page; that's fine, but the home page should establish institutional discipline before pricing comes up at all.

### Tone discipline

- Keep the existing warm-accessible voice on operational sections ("Nooit meer wakker liggen van uw administratie" works — don't sterilise it).
- Tighten formal-corporate language on About / Mission / Vision (currently slightly drifts).
- Avoid: "disruptief", "vernieuwend", "goedkoper". Use: "logischer", "in verhouding tot het werk", "minder versnippering, meer regie".
- The arithmetic argument on charity is sharper than on private-office because the moral framing is real: AUM-based fees on a charity's endowment literally reduce grant-making capacity. Lean into it without becoming preachy.

---

## Home

### Hero
*Location: `src/locales/{nl,en}.js` → `home.heroEyebrow`, `home.heroTitle`, `home.heroHighlight`*

**NL**
Eyebrow: Het Charity Office van Nederland
Title: Vermogensbeheer, administratie en governance —
Highlight: in één samenhangend kantoor.
Subtitle: Het enige kantoor in Nederland dat zich uitsluitend richt op stichtingen en goede doelen. Wij voeren het vermogensbeheer met institutionele discipline en organiseren daaromheen de administratie, governance en compliance — als één systeem, tegen een vaste jaarlijkse vergoeding.

**EN**
Eyebrow: The Charity Office of the Netherlands
Title: Wealth management, administration and governance —
Highlight: in one coherent office.
Subtitle: The only firm in the Netherlands dedicated exclusively to foundations and charities. We manage your investments with institutional discipline and organise the administration, governance and compliance around them — as a single system, for a fixed annual fee.

Edits / notes:
_____

---

### Category section (NEW)
*Location: `src/locales/{nl,en}.js` → propose new keys under `home.category.*`*

Same intent as the private-office Category section. Resolves the "is Orchestra just another financial-services provider with a charity sideline?" question in 90 seconds of scroll. Plain language, no metaphor (the meubelboulevard belongs in a future News piece).

**NL**
Eyebrow: Een aparte categorie
Title: Wij staan niet op de boulevard van financiële dienstverleners die stichtingen 'erbij' bedienen.
Body 1: De Nederlandse financiële sector heeft de stichtingen-niche al decennia bediend — meestal als bijproduct. Banken, accountantskantoren, algemene vermogensbeheerders, juristen. Allemaal vakkundig. Allemaal met stichtingen als één van vele klantgroepen. Allemaal met dezelfde economische logica: percentage van vermogen, uurtarieven, of fee-arrangementen die niet stoppen bij waar het werk stopt.
Body 2: Orchestra is anders georganiseerd. Wij bedienen uitsluitend stichtingen en goede doelen — geen private banking erbij, geen corporate cliënten erbij. Eén kantoor, één doelgroep, één economische logica die past bij die doelgroep: vaste vergoeding, institutionele discipline, regie over het geheel. Dat is geen positionering. Dat is hoe het bedrijf gebouwd is.

**EN**
Eyebrow: A different category
Title: We are not on the boulevard of financial firms that serve foundations 'on the side'.
Body 1: The Dutch financial sector has served the foundations niche for decades — usually as a by-product. Banks, accountancy firms, generalist asset managers, lawyers. All competent. All with foundations as one of many client groups. All operating on the same economic logic: a percentage of assets, hourly rates, or fee arrangements that do not stop where the work stops.
Body 2: Orchestra is organised differently. We serve only foundations and charities — no private banking on the side, no corporate clients on the side. One firm, one audience, one economic logic built for that audience: fixed fee, institutional discipline, stewardship of the whole. That is not positioning. It is how the firm is built.

Edits / notes:
_____

---

### Mission / Impact bridge
*Location: existing `home.servicesEyebrow`, `home.servicesTitle`, `home.servicesSubtitle` block + propose new `home.impactBridge.*`*

Current copy is generic ("Integrale financiële dienstverlening"). Strengthen the link between the financial service and the mission outcome.

**NL**
Eyebrow: Onze diensten
Title: Drie diensten. Eén verantwoordelijkheid: dat uw missie de aandacht krijgt die ze verdient.
Subtitle: Vermogensbeheer, administratie en governance — geïntegreerd uitgevoerd, zodat het bestuur kan besturen, het beleid kan groeien, en elke euro die niet aan operationele frictie wordt besteed naar de missie kan.

**EN**
Eyebrow: Our services
Title: Three services. One responsibility: that your mission gets the attention it deserves.
Subtitle: Wealth management, administration and governance — delivered as an integrated whole, so the board can govern, the policy can grow, and every euro not spent on operational friction can go to the mission.

Edits / notes:
_____

---

### Founder Letter (NEW — Essence equivalent)
*Location: propose new `home.essence.*` keys; render as a new EssenceSection on Home, signed by Roderik Bolle. Adapted from the private-office Essence pattern but charity-voiced.*

**NL**
Eyebrow: Een woord van onze oprichter
Title: Stichtingen verdienen institutionele discipline. Niet institutionele tarifering.
Intro: Veel stichtingen worden financieel in stukjes beheerd. De vermogensbeheerder kijkt naar de portefeuille. De accountant naar de jaarrekening. Het bestuur naar de governance. De fondsbeheerder naar de subsidies. Allemaal goed, allemaal apart. Wat ontbreekt is een kantoor dat het geheel als één systeem ziet — en daar verantwoordelijkheid voor neemt.
Body 1: Wij richten dat kantoor in. Een vast team dat uw vermogen beheert, uw administratie voert, uw bestuur ondersteunt en de mensen om uw stichting heen — bank, accountant, notaris, toezichthouder — regisseert. Het bestuur stuurt op de missie. Wij sturen op de structuur eromheen.
Body 2: En wij doen dat tegen een vaste jaarlijkse vergoeding. Geen percentage van uw vermogen. Geen percentage van uw donaties. Geen verborgen marges in producten. Omdat ons werk niet meeschaalt met de groei van uw vermogen, zou ons tarief dat ook niet moeten doen. Iedere basispunt aan AUM-percentage die uw stichting bespaart, is een basispunt dat naar uw beneficianten kan.
Body 3: Dit soort relatie vraagt om een proces van wederzijdse verkenning. Wij nemen daar graag alle tijd voor die u nodig heeft. Ik nodig uw bestuur van harte uit om met ons te verkennen óf en hoe deze manier van werken bij uw stichting zou passen.
Signature: Met vriendelijke groet,
Signature name: Roderik Bolle
Signature role: Managing Director, Orchestra
PS: PS: Onze uitnodiging geldt uiteraard ook voor besturen die slechts een second opinion willen over hun huidige financiële organisatie — zonder verplichting tot samenwerking.

**EN**
Eyebrow: A word from our founder
Title: Foundations deserve institutional discipline. Not institutional pricing.
Intro: Many foundations are managed financially in fragments. The asset manager looks at the portfolio. The accountant at the annual statements. The board at governance. The grants officer at subsidies. All competent, all separate. What is missing is one office that sees the whole as a single system — and takes responsibility for it.
Body 1: We are that office. A permanent team that manages your assets, runs your administration, supports your board and orchestrates the people around your foundation — bank, accountant, notary, regulator. The board steers the mission. We steer the structure around it.
Body 2: And we do it for a fixed annual fee. No percentage of your assets. No percentage of your donations. No hidden margins in products. Because our work does not scale with the growth of your wealth, our fee should not scale with it either. Every basis point your foundation saves on AUM-based fees is a basis point that can reach your beneficiaries.
Body 3: This kind of relationship asks for a process of mutual exploration. We are happy to take whatever time you need. I warmly invite your board to explore with us whether, and how, this way of working might suit your foundation.
Signature: Kind regards,
Signature name: Roderik Bolle
Signature role: Managing Director, Orchestra
PS: PS: Our invitation extends equally to boards that only want a second opinion on their current financial setup — without any obligation to engage further.

Edits / notes:
_____

---

### Fee Logic section (NEW on Home)
*Location: propose new `home.feeLogic.*` keys. Mirrors the private-office home Fee Logic section. Currently the fee argument lives buried inside the Wealth Management service page (`serviceWealth.feeTitle`/`feeText1`/`feeText2`) — give it standalone billing on the homepage too.*

**NL**
Eyebrow: De economische conclusie
Title: Wij factureren op genomen verantwoordelijkheid. Niet op vermogen.
Intro: Als u institutioneel denkt over het vermogen van uw stichting, dan denkt u ook institutioneel over kosten. Een tarief dat meeschaalt met de omvang van uw vermogen wordt op een gegeven moment groter dan het werk rechtvaardigt — en groeit door, ook als niets méér voor wordt gedaan. Voor een commerciële cliënt is dat ongelukkig. Voor een stichting is het inhoudelijk verkeerd: elke euro die meegroeit met uw vermogen, is een euro die niet meer naar uw missie kan.
Subhead: Een vaste jaarlijkse vergoeding. Geen percentage. Geen uurtarieven. Geen retrocessies.
Analogy 1: Uw advocaat factureert u niet op een percentage van uw bezittingen.
Analogy 2: Uw accountant factureert u niet op de omvang van uw balans.
Analogy 3: Uw notaris factureert u niet op de waarde van uw testament.
Synthesis: Vermogensbeheer, administratie en governance voor stichtingen zijn — als zij serieus gedaan worden — professionele dienstverlening. Wij behandelen het ook zo.
Read more link: Bekijk de volledige onderbouwing

**EN**
Eyebrow: The economic conclusion
Title: We charge for assumed responsibility. Not for assets.
Intro: If you think institutionally about your foundation's wealth, you also think institutionally about costs. A fee that scales with the size of your assets eventually grows larger than the work justifies — and keeps growing, even if nothing more is done. For a commercial client, that is unfortunate. For a foundation, it is substantively wrong: every euro that scales with your wealth is a euro that no longer reaches your mission.
Subhead: A fixed annual fee. No percentage. No hourly rates. No retrocessions.
Analogy 1: Your lawyer does not bill you a percentage of your holdings.
Analogy 2: Your accountant does not bill you a percentage of your balance sheet.
Analogy 3: Your notary does not bill you a percentage of the value of your will.
Synthesis: Wealth management, administration and governance for foundations — when done seriously — are professional services. We treat them as such.
Read more link: Read the full argument

Edits / notes:
_____

---

### Friction acknowledgement (NEW)
*Location: propose new `home.friction.*` keys. Mirrors private-office Friction; charity-tuned.*

**NL**
Eyebrow: Eerlijke voetnoot
Title: Voor sommige bestuursleden voelt dit eerst vreemd.
Body: In een sector waarin tarieven al decennia meeschalen met vermogen, voelt een vaste vergoeding soms welhaast verdacht. "Waar zit de catch?" — die vraag krijgen we bijna altijd in het eerste gesprek met een bestuur. Het antwoord is eenvoudig: er is geen catch. Er is alleen een andere economische logica, gebouwd voor stichtingen in plaats van eromheen. En het kost meestal slechts dat eerste gesprek om dat te laten zien.

**EN**
Eyebrow: An honest footnote
Title: For some board members, this feels unusual at first.
Body: In a sector that has scaled fees with assets for decades, a fixed fee can feel suspicious. "Where is the catch?" — almost every first conversation with a board starts there. The answer is simple: there is no catch. There is only a different economic logic, built for foundations rather than around them. And it usually takes just that first conversation to show why.

Edits / notes:
_____

---

### Value props ("Waarom Orchestra")
*Location: `src/data/valueProps.js` (NL + EN arrays, 5 items)*

Current order: De Specialist · Transparante Tarieven · Altijd Compliant · One-Stop-Shop · 24/7 Inzicht. Reorder to lead with the most distinctive claim (sector-exclusive specialisation) and lift fee transparency to second. "24/7 Inzicht" reads tactical compared to the others — keep but reword to platform language.

**NL (proposed in new order)**
1. **De Specialist** — Wij werken uitsluitend met stichtingen en goede doelen. Geen private banking erbij, geen corporate cliënten erbij. Eén doelgroep, één economische logica, één manier van werken.
2. **Tarief op Verantwoordelijkheid** — Eén vaste jaarlijkse vergoeding. Geen percentages, geen retrocessies, geen verrassingen. Elke basispunt die u bespaart, gaat naar uw missie.
3. **Institutioneel Toezicht** — Vermogensbeheer met institutionele discipline, governance volgens het meer-ogen-principe, administratie met audit-trail. De rigor van een groot kantoor, geleverd aan de schaal van uw stichting.
4. **One-Stop Office** — Vermogensbeheer, administratie en governance onder één dak. Geen versnipperde dienstverleners om te coördineren — wij voeren de regie.
5. **Mijn Orchestra** — Real-time online toegang tot uw volledige financiële positie, voor bestuur, penningmeester en geautoriseerde belanghebbenden. Altijd actueel, altijd inzichtelijk.

**EN (proposed in new order)**
1. **The Specialist** — We work exclusively with foundations and charities. No private banking on the side, no corporate clients on the side. One audience, one economic logic, one way of working.
2. **Fee on Responsibility** — One fixed annual fee. No percentages, no retrocessions, no surprises. Every basis point you save reaches your mission.
3. **Institutional Oversight** — Wealth management with institutional discipline, governance under the four-eyes principle, administration with full audit trail. The rigour of a large firm, delivered at the scale of your foundation.
4. **One-Stop Office** — Wealth management, administration and governance under one roof. No fragmented providers to coordinate — we hold the stewardship.
5. **My Orchestra** — Real-time online access to your full financial position, for board, treasurer and authorised stakeholders. Always current, always visible.

Edits / notes:
_____

---

### CTA section (Home)
*Location: `src/locales/{nl,en}.js` → `home.ctaTitle`, `home.ctaSubtitle`*

**NL**
Title: Klaar om uw bestuur de regie terug te geven over de missie?
Subtitle: Een verkennend gesprek met een Charity Office specialist duurt doorgaans één uur. Geen pitch deck. Geen verkoopgesprek. Een gesprek.

**EN**
Title: Ready to give your board back the focus on the mission?
Subtitle: An exploratory conversation with a Charity Office specialist typically takes an hour. No pitch deck. No sales pitch. A conversation.

Edits / notes:
_____

---

## Services Overview page

### Hero
*Location: `src/locales/{nl,en}.js` → `servicesOverview.hero*`*

**NL**
Eyebrow: Onze diensten
Title: Drie diensten, één kantoor, één
Highlight: verantwoordelijkheid.
Description: Vermogensbeheer, administratie en governance — apart aanbesteed bij andere partijen, geïntegreerd uitgevoerd hier. Eén team dat de samenhang bewaakt, één tarief dat niet meeschaalt met uw vermogen, één dashboard waar bestuur en penningmeester elk moment weten waar de stichting staat.

**EN**
Eyebrow: Our services
Title: Three services, one office, one
Highlight: responsibility.
Description: Wealth management, administration and governance — tendered separately at other firms, delivered as a unified whole here. One team that maintains the coherence, one fee that does not scale with your wealth, one dashboard where board and treasurer know at every moment where the foundation stands.

Edits / notes:
_____

---

### Approach section
*Location: `src/locales/{nl,en}.js` → `servicesOverview.approach*`*

**NL**
Eyebrow: Onze aanpak
Title: Een geïntegreerde methodiek, gebouwd voor stichtingen.
Text 1: Vermogensbeheer, administratie en governance werken alleen goed samen als ze ook samen worden geleverd. Onze methodiek borgt dat institutionele discipline op het ene domein niet versnippert door operationele zwakte op het andere. Eén team. Eén methodiek. Eén verantwoordelijkheid voor het geheel.
Text 2: Als onafhankelijke partij zijn wij geen bank, geen broker en geen accountantskantoor met een goede-doelen-tak. Wij hebben geen producten te verkopen en geen retrocessies te ontvangen. Het belang van uw stichting is het enige belang dat ons werk stuurt.

**EN**
Eyebrow: Our approach
Title: An integrated methodology, built for foundations.
Text 1: Wealth management, administration and governance only work well together when they are delivered together. Our methodology ensures that institutional discipline in one domain is not undone by operational weakness in another. One team. One methodology. One responsibility for the whole.
Text 2: As an independent firm, we are neither a bank, nor a broker, nor an accountancy firm with a charity sideline. We have no products to sell and no retrocessions to receive. The interest of your foundation is the only interest that shapes our work.

Edits / notes:
_____

---

### Sequence block (NEW)
*Location: propose new `servicesOverview.sequence*` keys. Render between Approach and the three-card grid. Mirrors private-office Sequence pattern — makes the L1-first ordering explicit.*

**NL**
Title: De volgorde is bewust.
Body: Eerst leggen wij het beleggingsfundament met institutionele discipline. Daarop bouwen wij de governance — meer-ogen, beleidskaders, autorisatielagen — die ervoor zorgt dat dat fundament jaar in jaar uit overeind blijft. En daaromheen organiseren wij de administratie: boekhouding, donatiestromen, jaarrekeningen, ANBI- en CBF-verplichtingen. In díe volgorde — omdat slecht ingericht vermogensbeheer niet wordt gered door goede administratie, maar goed vermogensbeheer wel kan worden ondermijnd door zwakke governance.

**EN**
Title: The order is deliberate.
Body: First we build the investment foundation with institutional discipline. On top of that we build the governance — four-eyes, policy frameworks, authorisation layers — that keeps that foundation intact year after year. And around it we organise the administration: bookkeeping, grant flows, annual accounts, ANBI and CBF obligations. In that order — because poorly built wealth management is not rescued by good administration, but good wealth management can be undone by weak governance.

Edits / notes:
_____

---

### Three-card service intro
*Location: `src/locales/{nl,en}.js` → `servicesOverview.gridTitle`, `gridSubtitle`*

**NL**
Eyebrow: Wat wij doen
Title: Drie diensten die afzonderlijk goed zijn — en samen sterker.
Subtitle: Elke dienst kan zelfstandig worden afgenomen. Maar omdat zij elkaar versterken — en wij geen prikkel hebben om u één dienst te verkopen en de andere niet — adviseren wij vrijwel altijd het geheel. Wat het beste past hangt af van uw stichting, niet van ons aanbod.

**EN**
Eyebrow: What we do
Title: Three services that are good on their own — and stronger together.
Subtitle: Each service can be engaged independently. But because they reinforce each other — and because we have no incentive to sell you one and not the other — we almost always recommend the whole. What fits best depends on your foundation, not on our offering.

Edits / notes:
_____

---

### "Why Orchestra" (Services Overview)
*Location: `src/locales/{nl,en}.js` → `servicesOverview.whyItem1-4*`*

Currently four items: Werkelijk Onafhankelijk · Vast Jaarlijks Tarief · Digitaal Platform · Volledige Compliance. Sharpen each.

**NL**
Item 1: **Werkelijk onafhankelijk** — Geen banden met banken, brokers, vermogensbeheerders of accountantskantoren. Geen retrocessies. Geen productverkoop. Het belang van uw stichting is het enige belang dat ons werk stuurt.
Item 2: **Tarief op verantwoordelijkheid** — Eén vaste jaarlijkse vergoeding, vooraf afgesproken, alleen voor inflatie aangepast. Geen vermogensafhankelijke kosten. Elke basispunt die uw stichting bespaart is een basispunt dat naar uw missie kan.
Item 3: **Mijn Orchestra** — Eén platform voor het hele bestuur. Real-time inzicht in portefeuille, donatiestromen, jaarrekening en governance-documenten. Geautoriseerde toegang voor bestuursleden, penningmeester en accountant.
Item 4: **Volledige compliance** — Gereguleerd door DNB en AFM. ANBI- en CBF-frameworks volledig ingebed in onze processen. Wat de toezichthouder vereist, doen wij standaard — niet als project.

**EN**
Item 1: **Truly independent** — No ties to banks, brokers, asset managers or accountancy firms. No retrocessions. No product sales. The interest of your foundation is the only interest that shapes our work.
Item 2: **Fee on responsibility** — One fixed annual fee, agreed in advance, adjusted only for inflation. No asset-based charges. Every basis point your foundation saves is a basis point that reaches your mission.
Item 3: **My Orchestra** — One platform for the whole board. Real-time insight into portfolio, donation flows, annual accounts and governance documents. Authorised access for board members, treasurer and accountant.
Item 4: **Full compliance** — Regulated by DNB and AFM. ANBI and CBF frameworks fully embedded in our processes. What the regulator requires, we deliver by default — not as a project.

Edits / notes:
_____

---

## Service: Wealth Management

### Hero
*Location: `src/locales/{nl,en}.js` → `serviceWealth.hero*`, `overviewTitle`, `overviewText1`, `overviewText2`*

**NL**
Eyebrow: Vermogensbeheer
Title: Het vermogen van uw stichting verdient
Highlight: institutionele discipline.
Overview title: Een breed controlebereik over beleggingen, treasury en liquiditeit.
Overview text 1: Wij beheren het vermogen van uw stichting zoals pensioenfondsen en universiteitsendowments het hunne beheren: portefeuilles ontworpen tegen de verplichtingen en doelstellingen van uw stichting, niet tegen een externe benchmark. Kostenbeheersing als structurele variabele. Risicokaders, beleggingscommissie, vier-ogen-principe op iedere transactie.
Overview text 2: Als onafhankelijke partij zijn wij geen bank, geen broker, geen fondshuis. Wij ontvangen geen retrocessies en hebben geen producten te verkopen. Elke aanbeveling die wij doen is gericht op het belang van uw stichting — en op niets anders.

**EN**
Eyebrow: Wealth management
Title: Your foundation's wealth deserves
Highlight: institutional discipline.
Overview title: A broad span of control over investments, treasury and liquidity.
Overview text 1: We manage your foundation's wealth the way pension funds and university endowments manage theirs: portfolios designed against the liabilities and objectives of your foundation, not against an external benchmark. Cost control as a structural variable. Risk frameworks, investment committee, four-eyes principle on every transaction.
Overview text 2: As an independent firm, we are neither a bank, nor a broker, nor a fund house. We receive no retrocessions and have no products to sell. Every recommendation we make is shaped by the interest of your foundation — and by nothing else.

Edits / notes:
_____

---

### Fee transparency block
*Location: `src/locales/{nl,en}.js` → `serviceWealth.feeTitle`, `feeText1`, `feeText2`, plus three bullets*

**NL**
Title: Vast tarief — omdat ons werk niet meeschaalt met uw vermogen.
Text 1: Wij hanteren een vaste jaarlijkse vergoeding die nooit gebaseerd is op de omvang van uw beheerd vermogen. Dat is geen marketingkeuze. Het is een economische conclusie: als uw vermogen verdubbelt, verdubbelt ons werk doorgaans niet. Een tarief dat wél meeschaalt, groeit buiten verhouding tot het werk — en voor een stichting betekent dat letterlijk: minder middelen voor de missie.
Text 2: Voor stichtingen is dit niet alleen een prijsargument; het is een fiduciair argument. Een bestuur dat een AUM-percentage accepteert op het stichtingsvermogen, accepteert dat een deel van dat vermogen structureel niet naar de doelstelling gaat. Onze vaste vergoeding maakt dat onmogelijk: wat u bespaart op kosten, kan naar uw missie.
Bullet 1: Vast jaarlijks tarief / Vooraf afgesproken
Bullet 2: Geen verborgen kosten / Volledige transparantie in onze rapportage
Bullet 3: Geen retrocessies / Geen prikkel tot productverkoop

Cross-link (NEW): Bekijk de volledige onderbouwing op de pagina Vaste vergoeding voor stichtingen →

**EN**
Title: Fixed fee — because our work does not scale with your wealth.
Text 1: We charge a fixed annual fee that is never based on the size of the assets we manage. That is not a marketing choice. It is an economic conclusion: when your wealth doubles, our work generally does not. A fee that does scale grows out of proportion to the work — and for a foundation, that literally means: fewer resources for the mission.
Text 2: For foundations, this is not just a pricing argument; it is a fiduciary one. A board that accepts an AUM percentage on the foundation's assets accepts that a portion of those assets structurally does not reach the cause. Our fixed fee makes that impossible: what you save on costs can reach your mission.
Bullet 1: Fixed annual fee / Agreed in advance
Bullet 2: No hidden costs / Full transparency in our reporting
Bullet 3: No retrocessions / No incentive to sell products

Cross-link (NEW): Read the full argument on the Fixed fee for foundations page →

Edits / notes:
_____

---

### Process steps (Wealth Management page)
*Location: `src/locales/{nl,en}.js` → `serviceWealth.processStep1Title`/Desc through Step3*

Light rewrites — the three-step framing (Strategische Beoordeling · Portefeuille Constructie · Doorlopend Toezicht) is sound. Sharpen language slightly.

**NL**
Step 1 — Strategische beoordeling: Wij beginnen bij de werkelijkheid van uw stichting: missie, verplichtingen, uitkeringsbeleid, risicotolerantie, tijdshorizon. Daaruit ontstaat een schriftelijk beleggingsstatuut — niet een beleggingsvoorstel. Het statuut bepaalt het werk; het werk levert het statuut uit.
Step 2 — Portefeuilleconstructie: Op basis van het statuut bouwen wij een portefeuille uit institutionele bouwstenen — passieve en actieve mandaten, treasury, liquiditeit. Kosten als structurele variabele. Geen retrocessies; transparante kostenrapportage op iedere positie.
Step 3 — Doorlopend toezicht: Maandelijkse integrale rapportage aan het bestuur. Periodieke herbalancering binnen het statuut. Jaarlijkse heroverweging tegen veranderde verplichtingen of doelstellingen. Vier-ogen-principe op iedere transactie. Alle rapportage real-time inzichtelijk op Mijn Orchestra.

**EN**
Step 1 — Strategic assessment: We begin with the reality of your foundation: mission, liabilities, distribution policy, risk tolerance, time horizon. From this emerges a written investment policy statement — not an investment proposal. The statement governs the work; the work delivers against the statement.
Step 2 — Portfolio construction: Based on the statement we build a portfolio from institutional building blocks — passive and active mandates, treasury, liquidity. Costs as a structural variable. No retrocessions; transparent cost reporting on every position.
Step 3 — Ongoing oversight: Monthly integral reporting to the board. Periodic rebalancing within the statement. Annual review against changed liabilities or objectives. Four-eyes principle on every transaction. All reporting available in real time on My Orchestra.

Edits / notes:
_____

---

## Service: Administration

### Hero
*Location: `src/locales/{nl,en}.js` → `serviceAdmin.hero*`, `overviewTitle`, `overviewText1`, `overviewText2`*

The current "Nooit meer wakker liggen van uw administratie" is good — keep the warm voice but strengthen the mission-impact link.

**NL**
Eyebrow: Administratie
Title: Nooit meer wakker liggen van uw
Highlight: administratie.
Overview title: Nauwgezette financiële administratie, geleverd met institutionele precisie.
Overview text 1: Van dagelijkse boekhouding en betalingsverwerking tot subsidie-administratie, jaarrekeningen en belastingaangiftes — wij voeren elk aspect van uw financiële administratie met dezelfde precisie waarmee wij beleggingen beheren. Niet als operationeel bijproduct, maar als zelfstandige discipline.
Overview text 2: Of u nu subsidieprogramma's, een endowment of operationele middelen beheert, ons administratieteam zorgt ervoor dat elke transactie is vastgelegd, elke rapportage tijdig is opgeleverd en aan elke wettelijke vereiste wordt voldaan. Het resultaat is concreet: minder uren van bestuur en penningmeester aan operationele frictie, meer uren aan de missie.

**EN**
Eyebrow: Administration
Title: Never lose sleep over your
Highlight: administration again.
Overview title: Meticulous financial administration, delivered with institutional precision.
Overview text 1: From daily bookkeeping and payment processing to grant administration, annual accounts and tax filings — we run every aspect of your financial administration with the same precision we bring to investments. Not as an operational by-product, but as a discipline in its own right.
Overview text 2: Whether you manage grant programmes, an endowment or operational funds, our administration team ensures that every transaction is recorded, every report is delivered on time, and every legal requirement is met. The outcome is concrete: fewer board and treasurer hours spent on operational friction, more hours spent on the mission.

Edits / notes:
_____

---

### Platform section (Mijn Orchestra on Admin page)
*Location: `src/locales/{nl,en}.js` → `serviceAdmin.platform*`*

Current copy is functional. Tighten and lead with the board-experience benefit.

**NL**
Eyebrow: Digitaal platform
Title: Mijn Orchestra — één dashboard voor het hele bestuur.
Text 1: Op Mijn Orchestra ziet uw bestuur op elk moment waar de stichting financieel staat. Geen wachten op kwartaalrapportages, geen e-mails over en weer met de penningmeester. Real-time, geautoriseerd, op één plek.
Text 2: Bestuursleden zien wat zij moeten zien om te kunnen besturen. De penningmeester ziet wat zij of hij moet zien om zijn rol uit te oefenen. De accountant heeft toegang tot wat de jaarrekening voedt. Rolgebaseerde autorisatie zorgt dat ieders informatiebehoefte is gedekt zonder dat governance-grenzen vervagen.

**EN**
Eyebrow: Digital platform
Title: My Orchestra — one dashboard for the whole board.
Text 1: On My Orchestra, your board sees at every moment where the foundation stands financially. No waiting for quarterly reports, no emails back and forth with the treasurer. Real-time, authorised, in one place.
Text 2: Board members see what they need to govern. The treasurer sees what they need to do their role. The accountant has access to what feeds the annual accounts. Role-based authorisation ensures everyone's information need is met without governance boundaries blurring.

Edits / notes:
_____

---

## Service: Governance

### Hero
*Location: `src/locales/{nl,en}.js` → `serviceGovernance.hero*`, `overviewTitle`, `overviewText1`, `overviewText2`*

**NL**
Eyebrow: Governance
Title: Uw governance,
Highlight: veilig georkestreerd.
Overview title: Het fundament van iedere stichting die haar fiduciaire plicht serieus neemt.
Overview text 1: Goede governance gaat verder dan compliance afvinken. Het betekent dat de juiste structuren, processen en toezichtmechanismen aanwezig zijn om ervoor te zorgen dat uw stichting opereert met integriteit, verantwoording en een onvermijdelijke focus op haar missie. Niet als project, maar als doorlopend organisatieprincipe.
Overview text 2: Wij bieden de inhoudelijke ondersteuning en operationele uitvoering die uw bestuur nodig heeft om zijn fiduciaire verantwoordelijkheden met vertrouwen uit te oefenen, met behoud van de hoogste normen voor transparantie en verantwoording. De rigor van een groot kantoor, geleverd op de schaal van uw stichting.

**EN**
Eyebrow: Governance
Title: Your governance,
Highlight: safely orchestrated.
Overview title: The foundation of every foundation that takes its fiduciary duty seriously.
Overview text 1: Good governance is more than ticking compliance boxes. It means the right structures, processes and oversight mechanisms are in place so your foundation operates with integrity, accountability and an unwavering focus on its mission. Not as a project, but as a continuous organising principle.
Overview text 2: We provide the substantive support and operational delivery your board needs to discharge its fiduciary responsibilities with confidence, while maintaining the highest standards of transparency and accountability. The rigour of a large firm, delivered at the scale of your foundation.

Edits / notes:
_____

---

### Meer-ogen principle section
*Location: `src/locales/{nl,en}.js` → `serviceGovernance.principleTitle`, `principleText1`, `principleText2`, `principleText3`*

**NL**
Title: Het meer-ogen-principe.
Text 1: De kern van onze governance-aanpak is het meer-ogen-principe: elke belangrijke beslissing, transactie en elk proces wordt door meerdere gekwalificeerde professionals beoordeeld voor uitvoering. Niet als formaliteit, maar als ingebouwde discipline.
Text 2: Dit principe vermindert het risico op fouten, fraude en slechte besluitvorming. Het creëert een cultuur van verantwoording waarin transparantie geen beleid is, maar een praktijk — ingebed in elk werkproces dat wij voor uw stichting uitvoeren.
Text 3: Van betalingsautorisaties tot beleggingsbeslissingen, van subsidietoewijzingen tot wettelijke rapportages — het meer-ogen-principe zorgt ervoor dat uw stichting profiteert van collectieve expertise en grondige controle bij elke stap. Het is dezelfde discipline die pensioenfondsen en grote endowments hanteren — toegepast op de schaal van uw stichting.

**EN**
Title: The four-eyes principle.
Text 1: At the heart of our governance approach is the four-eyes principle: every significant decision, transaction and process is reviewed by multiple qualified professionals before execution. Not as a formality, but as built-in discipline.
Text 2: This principle reduces the risk of errors, fraud and poor decision-making. It creates a culture of accountability in which transparency is not a policy but a practice — embedded in every workflow we run for your foundation.
Text 3: From payment authorisations to investment decisions, from grant allocations to statutory reporting — the four-eyes principle ensures your foundation benefits from collective expertise and thorough review at every step. It is the same discipline pension funds and large endowments operate under — applied at the scale of your foundation.

Edits / notes:
_____

---

### Governance framework bullets
*Location: `src/locales/{nl,en}.js` → `serviceGovernance.frameworkItem1-6*`*

Currently six items: Bestuursadvies · Beleid & Compliance · Risicotoezicht · Jaarrekeningen · Stakeholderrapportage · Digitale Governance. Light edits to anchor each in the fiduciary-duty frame.

**NL**
Item 1 — Bestuursadvies: Strategisch advies over bestuurssamenstelling, governance-structuren, beleidskaders en organisatorische besluitvorming. Onafhankelijk, sectorspecifiek, gericht op de fiduciaire plicht van het bestuur.
Item 2 — Beleid & Compliance: Opstellen en bijhouden van governance-beleid, compliance-kaders en interne regelgeving conform ANBI, CBF en sectornormen. Wat de toezichthouder vereist, leveren wij standaard.
Item 3 — Risicotoezicht: Systematische identificatie, beoordeling en mitigatie van organisatorische, financiële en reputationele risico's. Periodieke risicorapportage aan het bestuur, niet alleen wanneer er iets gebeurt.
Item 4 — Jaarrekeningen: Professionele voorbereiding van jaarverslag, financiële overzichten en management letter aan uw externe accountant. Volledig conform de specifieke rapportagestandaarden voor stichtingen.
Item 5 — Stakeholderrapportage: Heldere, transparante communicatie naar donoren, toezichthouders, beneficianten en andere belanghebbenden. Geen jargon, geen verborgen aannames — wat uw stichting doet en met welk resultaat.
Item 6 — Digitale governance: Beveiligde, georganiseerde toegang tot alle governance-documenten, bestuursnotulen en besluitregisters via Mijn Orchestra. Eén plek waar de hele geschiedenis van het bestuurlijk werk zichtbaar is.

**EN**
Item 1 — Board advisory: Strategic advice on board composition, governance structures, policy frameworks and organisational decision-making. Independent, sector-specific, focused on the board's fiduciary duty.
Item 2 — Policy & Compliance: Drafting and maintenance of governance policy, compliance frameworks and internal rules aligned with ANBI, CBF and sector standards. What the regulator requires, we deliver by default.
Item 3 — Risk oversight: Systematic identification, assessment and mitigation of organisational, financial and reputational risks. Periodic risk reporting to the board — not only when something happens.
Item 4 — Annual accounts: Professional preparation of the annual report, financial statements and management letter for your external auditor. Fully compliant with the specific reporting standards for foundations.
Item 5 — Stakeholder reporting: Clear, transparent communication to donors, regulators, beneficiaries and other stakeholders. No jargon, no hidden assumptions — what your foundation does and with what result.
Item 6 — Digital governance: Secure, organised access to all governance documents, board minutes and decision registers via My Orchestra. One place where the full history of the board's work is visible.

Edits / notes:
_____

---

## Clients Overview

### Hero
*Location: `src/locales/{nl,en}.js` → `clientsOverview.hero*`*

**NL**
Eyebrow: Onze klanten
Title: Vertrouwd door toonaangevende stichtingen.
Description: Al meer dan twee decennia kiezen Nederlandse vermogensfondsen, familiestichtingen en fondsenwervende organisaties Orchestra als hun financiële kantoor. Niet als één van vele dienstverleners, maar als de partij die de regie voert.

**EN**
Eyebrow: Our clients
Title: Trusted by leading foundations.
Description: For more than two decades, Dutch endowment funds, family foundations and fundraising organisations have chosen Orchestra as their financial office. Not as one of many providers, but as the firm that holds the stewardship.

Edits / notes:
_____

---

### Two-pillar segment intro
*Location: `src/locales/{nl,en}.js` → `clientsOverview.typesEyebrow`, `typesTitle`, `typesSubtitle`*

**NL**
Eyebrow: Wie wij bedienen
Title: Twee soorten stichtingen, één manier van werken.
Subtitle: Vermogensfondsen en familiestichtingen hebben andere behoeften dan fondsenwervende goede doelen — andere regelgeving, andere besluitvormingscycli, andere stakeholders. Onze dienstverlening is voor beide ontworpen vanuit dezelfde principes: institutionele discipline, vaste vergoeding, regie over het geheel.

**EN**
Eyebrow: Who we serve
Title: Two kinds of foundations, one way of working.
Subtitle: Endowment funds and family foundations have different needs than fundraising charities — different regulation, different decision cycles, different stakeholders. Our service is designed for both from the same principles: institutional discipline, fixed fee, stewardship of the whole.

Edits / notes:
_____

---

## Clients: Endowment Funds

### Hero & sections
*Location: `src/locales/{nl,en}.js` → `clientsEndowment.*`*

**NL**
Eyebrow: Vermogensfondsen
Title: Toegewijde dienstverlening voor vermogensfondsen en familiestichtingen.
Description: Vermogensfondsen denken in decennia. Hun beleggingshorizon overstijgt bestuurstermijnen. Hun fiduciaire verantwoordelijkheid is niet alleen aan huidige bestuursleden, maar aan opvolgers, aan donateurs van het oorspronkelijke vermogen, en aan de begunstigden van de komende generatie. Dat vraagt om een partner die ook in decennia denkt.

Why Orchestra title: Gebouwd voor de lange termijn.
Why text 1: Vermogensfondsen hebben een partner nodig die in decennia denkt, niet in kwartalen — en die niet meedeint met markthypes. Het vaste-vergoedingsmodel van Orchestra zorgt ervoor dat onze kosten niet stijgen naarmate uw fonds groeit. Onze exclusieve sectorfocus zorgt ervoor dat elke beslissing is gebaseerd op diepgaande expertise in stichtingenfinanciering — niet op generiek vermogensbeheer met een charity-tintje.
Why text 2: Van kapitaalbehoud en uitkeringsbeleid tot subsidieadministratie en ANBI-compliance — wij leveren de financiële infrastructuur die uw bestuur in staat stelt zich volledig op de strategie en de missie te richten. Generaties lang, niet bestuurstermijn na bestuurstermijn.

**EN**
Eyebrow: Endowment funds
Title: Dedicated service for endowment funds and family foundations.
Description: Endowment funds think in decades. Their investment horizon outlasts board terms. Their fiduciary responsibility is not only to current board members, but to successors, to original donors, and to the beneficiaries of generations to come. That requires a partner that also thinks in decades.

Why Orchestra title: Built for the long term.
Why text 1: Endowment funds need a partner that thinks in decades, not in quarters — and that does not drift with market hype. Orchestra's fixed-fee model means our costs do not rise as your fund grows. Our exclusive sector focus ensures every decision is grounded in deep expertise in foundation finance — not generic asset management with a charity tint.
Why text 2: From capital preservation and distribution policy to grant administration and ANBI compliance — we deliver the financial infrastructure that enables your board to focus fully on strategy and mission. Across generations, not just board term by board term.

Edits / notes:
_____

---

## Clients: Charities

### Hero & sections
*Location: `src/locales/{nl,en}.js` → `clientsCharities.*`*

**NL**
Eyebrow: Goede doelen
Title: Ondersteuning voor goede doelen met fondsenwervende activiteiten.
Description: Fondsenwervende stichtingen leven van vertrouwen. Donateurs willen weten dat hun gift terechtkomt waar het hoort. Toezichthouders willen zien dat regelgeving wordt nageleefd. Begunstigden willen weten dat de organisatie er over tien jaar nog staat. Dat vraagt om financiële infrastructuur die niet alleen werkt, maar zichtbaar werkt.

Expertise title: Wij begrijpen uw missie. En het werk eromheen.
Expertise text 1: Goede doelen opereren in een uniek landschap waar financieel beheer rechtstreeks van invloed is op het vermogen om goed te doen. Elke euro die niet wegloopt naar onnodige administratie, naar AUM-percentages of naar versnipperde dienstverleners, is een euro die naar de missie kan. Daarom is de manier waarop uw stichting financieel is georganiseerd geen administratief detail — het is een fiduciaire keuze.
Expertise text 2: De exclusieve focus van Orchestra op de stichtingensector betekent dat wij het regelgevende landschap, de donateursverwachtingen en de governance-eisen begrijpen die uw werk vormgeven. Wij beheren niet alleen uw geld — wij helpen het vermogen van uw stichting om impact te creëren beschermen. CBF-erkenning, ANBI-status, subsidiestromen van VWS, donateursrapportages: standaard ingebed in onze dienstverlening, niet als project.

Expertise bullets (light rewrites):
1. CBF- en ANBI-compliance, ingebed in elk proces
2. Vaste vergoeding — elke basispunt naar uw missie
3. Toegewijde sectorspecialisten, geen generieke afdeling
4. Geïntegreerd financieel toezicht, geen losse rapportages

**EN**
Eyebrow: Charities
Title: Support for charities with fundraising activities.
Description: Fundraising foundations live on trust. Donors want to know their gift reaches its intended purpose. Regulators want to see compliance is met. Beneficiaries want to know the organisation will still be there in ten years. That requires financial infrastructure that not only works, but is visibly seen to work.

Expertise title: We understand your mission. And the work around it.
Expertise text 1: Charities operate in a unique landscape where financial management directly affects the capacity to do good. Every euro that does not leak away into unnecessary administration, AUM percentages, or fragmented providers is a euro that can reach the mission. That is why the way your foundation is financially organised is not an administrative detail — it is a fiduciary choice.
Expertise text 2: Orchestra's exclusive focus on the foundations sector means we understand the regulatory landscape, donor expectations and governance requirements that shape your work. We do not just manage your money — we help protect your foundation's capacity to create impact. CBF recognition, ANBI status, government grant flows, donor reporting: embedded as standard in our service, not delivered as a project.

Expertise bullets:
1. CBF and ANBI compliance, embedded in every process
2. Fixed fee — every basis point to your mission
3. Dedicated sector specialists, not a generic team
4. Integrated financial oversight, not separate reports

Edits / notes:
_____

---

## About: Overview (Mission & Vision)

### Hero
*Location: `src/locales/{nl,en}.js` → `about.heroEyebrow`, `heroTitle`, `heroDescription`*

**NL**
Eyebrow: Over Orchestra
Title: Het Charity Office van Nederland.
Description: Orchestra is het enige onafhankelijke kantoor in Nederland dat zich uitsluitend richt op het financieel beheer van stichtingen en goede doelen. Vermogensbeheer, administratie en governance — onder één dak, vanuit één team, tegen één vaste jaarlijkse vergoeding.

**EN**
Eyebrow: About Orchestra
Title: The Charity Office of the Netherlands.
Description: Orchestra is the only independent firm in the Netherlands focused exclusively on the financial stewardship of foundations and charities. Wealth management, administration and governance — under one roof, by one team, for one fixed annual fee.

Edits / notes:
_____

---

### Mission
*Location: `src/locales/{nl,en}.js` → `about.missionEyebrow`, `missionTitle`, `missionText1`, `missionText2`*

**NL**
Eyebrow: Onze missie
Title: Besturen ontlasten van financiële versnippering, zodat zij kunnen besturen.
Text 1: Orchestra bestaat om stichtingen en goede doelen te ontlasten van de complexiteit en versnippering van financieel beheer — niet door dat werk te verbergen, maar door het te integreren onder één dak, in één team, onder één verantwoordelijkheid.
Text 2: Door vermogensbeheer, administratie en governance geïntegreerd aan te bieden tegen een vaste jaarlijkse vergoeding, zorgen wij ervoor dat elke stichting de financiële infrastructuur heeft om met vertrouwen, compliance en — vooral — met de aandacht voor haar eigenlijke missie te opereren.

**EN**
Eyebrow: Our mission
Title: Free boards from financial fragmentation, so they can govern.
Text 1: Orchestra exists to free foundations and charities from the complexity and fragmentation of financial management — not by hiding that work, but by integrating it under one roof, in one team, under one responsibility.
Text 2: By delivering wealth management, administration and governance as an integrated whole for a fixed annual fee, we ensure every foundation has the financial infrastructure to operate with confidence, compliance, and — above all — with attention free for its actual mission.

Edits / notes:
_____

---

### Vision
*Location: `src/locales/{nl,en}.js` → `about.visionEyebrow`, `visionTitle`, `visionText1`, `visionText2`*

**NL**
Eyebrow: Onze visie
Title: Institutioneel niveau, voor elke stichting.
Text 1: Wij zien een stichtingensector voor ons waarin organisaties van alle omvangen toegang hebben tot financieel beheer van institutionele kwaliteit — dezelfde discipline die pensioenfondsen, universitaire endowments en multinationals voor zichzelf inrichten — geleverd op de schaal en tegen de kostenstructuur die past bij een stichting.
Text 2: Door voortdurende vernieuwing in onze dienstverlening, diepgaande sectorexpertise en een onwrikbare toewijding aan transparantie, willen wij het natuurlijke financiële kantoor zijn voor elke serieuze Nederlandse stichting — en uiteindelijk daarbuiten.

**EN**
Eyebrow: Our vision
Title: Institutional standards, for every foundation.
Text 1: We envision a foundations sector in which organisations of all sizes have access to financial stewardship of institutional quality — the same discipline pension funds, university endowments and multinationals arrange for themselves — delivered at the scale and cost structure that fits a foundation.
Text 2: Through continuous innovation in our service, deep sector expertise, and an unwavering commitment to transparency, we aim to be the natural financial office for every serious Dutch foundation — and ultimately, beyond.

Edits / notes:
_____

---

## About: Team

### Hero & culture
*Location: `src/locales/{nl,en}.js` → `aboutTeam.*`*

> ⚠️ **Founder verify before publishing:** The specifics on team backgrounds (pension funds, endowments, Big Four, ANBI/CBF advisory) below should match actual current team composition. If the charity team has different backgrounds than the private-office one, adjust.

**NL**
Hero eyebrow: Ons team
Hero title: De mensen achter het Charity Office.
Hero description: Ons team combineert decennia aan ervaring uit institutionele financiële dienstverlening met een oprechte verbondenheid met de stichtingensector. Geen generieke afdeling, geen tijdelijke charity-tak — toegewijde specialisten die hier werken omdat zij hier willen werken.

Grid eyebrow: Maak kennis met de specialisten
Grid title: Negen toegewijde professionals.
Grid subtitle: Onze portefeuillemanagers komen uit institutionele beleggingsachtergronden: pensioenfondsen, universiteitsendowments, fiduciair beheer. Onze controllers en accountants komen uit Big Four en stichtingsachtergronden. Onze governance- en compliance-specialisten werken vanuit ANBI-, CBF- en bestuurlijke praktijken. De gemene deler: iedereen heeft eerder gewerkt voor stichtingen, voor stichtingen, of beide.

Culture title: Verbonden door één overtuiging.
Culture text: Wat ons team verenigt is een gedeelde overtuiging dat stichtingen dezelfde kwaliteit van financiële expertise verdienen als de grootste commerciële instellingen — geleverd met institutionele discipline én met persoonlijke aandacht voor de missie waaraan zij dienen.

**EN**
Hero eyebrow: Our team
Hero title: The people behind the Charity Office.
Hero description: Our team combines decades of experience from institutional financial services with a genuine connection to the foundations sector. No generic department, no temporary charity practice — dedicated specialists who work here because they want to work here.

Grid eyebrow: Meet the specialists
Grid title: Nine dedicated professionals.
Grid subtitle: Our portfolio managers come from institutional investing backgrounds: pension funds, university endowments, fiduciary management. Our controllers and accountants come from Big Four and foundation backgrounds. Our governance and compliance specialists work from ANBI, CBF and board advisory practices. The common denominator: everyone has worked for or with foundations before — or both.

Culture title: Bound by one conviction.
Culture text: What unites our team is a shared belief that foundations deserve the same quality of financial expertise as the largest commercial institutions — delivered with institutional discipline and with personal attention to the mission they serve.

Edits / notes:
_____

---

## About: Methodology

### Hero & journey
*Location: `src/locales/{nl,en}.js` → `aboutMethodology.*` plus `src/data/processSteps.js`*

> ⚠️ **Founder verify before publishing:** The five-step specifics below (Nulmeting, Offerte, Onboarding, Zekerheid, Inzicht) should reflect actual practice; the current copy is generic. Adjust any step where the named output does not match what cliënten actually receive.

**NL — Hero**
Eyebrow: Onze methodiek
Title: Een bewezen vijf-stappen aanpak.
Description: Onze methodiek is verfijnd over twee decennia van werken voor stichtingen. Elke stap is ontworpen voor stichtingsbesturen die zorgvuldig willen kiezen — niet snel. Een transparante beoordeling vooraf, een vast bedrag in de offerte, een naadloze transitie, en blijvende operationele rust daarna.

Journey title: Van eerste kennismaking tot volledige rust.
Journey text: Elk partnerschap met Orchestra begint met begrijpen waar uw stichting nu staat. Onze gestructureerde aanpak zorgt dat wij grondig beoordelen, een transparant voorstel uitbrengen, en u door elke fase van de onboarding begeleiden. Geen verrassingen onderweg.

Result title: Volledige gemoedsrust.
Result text: Aan het einde van het vijf-stappen proces beschikt uw stichting over een volledig geïntegreerde financiële infrastructuur — institutioneel beheerd, volledig compliant, real-time inzichtelijk via Mijn Orchestra. En het bestuur heeft de tijd en aandacht terug die voorheen aan financiële versnippering werd besteed.

**EN — Hero**
Eyebrow: Our methodology
Title: A proven five-step approach.
Description: Our methodology has been refined over two decades of working with foundations. Each step is designed for foundation boards that want to choose carefully — not quickly. A transparent baseline assessment up front, a fixed price in the proposal, a seamless transition, and lasting operational calm thereafter.

Journey title: From first conversation to full peace of mind.
Journey text: Every partnership with Orchestra begins with understanding where your foundation stands now. Our structured approach ensures we assess thoroughly, deliver a transparent proposal, and guide you through every phase of onboarding. No surprises along the way.

Result title: Full peace of mind.
Result text: At the end of the five-step process your foundation has a fully integrated financial infrastructure — institutionally managed, fully compliant, available in real time on My Orchestra. And the board has back the time and attention previously spent on financial fragmentation.

**Five process steps (`src/data/processSteps.js`):**

NL:
1. **De nulmeting** — Wij beoordelen grondig uw huidige financiële organisatie: beleggingen, administratie, governance, kostenpositie, compliance. Resultaat is een schriftelijke nulmeting — niet een verkoopgesprek.
2. **De offerte** — Op basis van de nulmeting ontvangt u een schriftelijke offerte met een vast jaarlijks tarief. Wat erin zit, wat niet, en waarom. Geen meerwerkclausules, geen open einden.
3. **De onboarding** — Wij voeren de transitie vanuit uw huidige dienstverleners. Beleggingen worden overgeboekt, administratie wordt overgedragen, governance-documenten worden gemigreerd naar Mijn Orchestra. Bestuur ervaart minimale verstoring.
4. **De zekerheid** — Na onboarding ontvangt u een formele bevestiging dat alle financiële, fiscale, juridische en compliance-aspecten op orde zijn. Vanaf dat moment werken wij doorlopend onder vier-ogen-principe.
5. **Het inzicht** — Mijn Orchestra geeft het hele bestuur 24/7 real-time toegang tot portefeuille, administratie, governance-documenten en rapportages. Geautoriseerde toegang voor bestuursleden, penningmeester, accountant.

EN:
1. **The baseline assessment** — We thoroughly assess your current financial organisation: investments, administration, governance, cost position, compliance. The output is a written baseline assessment — not a sales pitch.
2. **The proposal** — Based on the baseline you receive a written proposal with a fixed annual fee. What is included, what is not, and why. No additional-work clauses, no open ends.
3. **The onboarding** — We execute the transition from your current providers. Investments are transferred, administration is handed over, governance documents are migrated to My Orchestra. The board experiences minimal disruption.
4. **The assurance** — After onboarding you receive formal confirmation that all financial, fiscal, legal and compliance aspects are in order. From that point on we operate continuously under the four-eyes principle.
5. **The insight** — My Orchestra gives the whole board 24/7 real-time access to portfolio, administration, governance documents and reports. Authorised access for board members, treasurer, and accountant.

Edits / notes:
_____

---

## About: FAQs

### Hero + intro
*Location: `src/locales/{nl,en}.js` → `aboutFaqs.*`*

**NL**
Eyebrow: Veelgestelde vragen
Title: Wat besturen vooraf willen weten.
Description: Eerlijke antwoorden op de vragen die bijna elk stichtingsbestuur stelt in een eerste gesprek. Heeft u een vraag die hier niet staat? Wij staan klaar voor een persoonlijk, vrijblijvend gesprek.

Grid title: Antwoorden voor bestuurders en penningmeesters.

**EN**
Eyebrow: Frequently asked questions
Title: What boards want to know up front.
Description: Honest answers to the questions almost every foundation board asks in a first conversation. Have a question that is not here? We are happy to have a personal, no-obligation conversation.

Grid title: Answers for board members and treasurers.

Edits / notes:
_____

---

### Proposed new FAQ entries
*Location: charity FAQ data file (currently `src/data/faqs.js` if it exists, or in locales). Propose adding these as new questions.*

> ⚠️ **Founder verify before publishing:** Q3 mentions VWS subsidies as the example — adjust to whichever government grantor is most common in your client base.

**FAQ A — Hoe verhoudt dit zich tot onze ANBI-status?**
NL: Onze processen zijn standaard ontworpen voor ANBI-compliance. Inkomstenregistratie, bestedingsverhouding, publicatievereisten, transactietransparantie — alles wat de Belastingdienst en het CBF vragen, leveren wij als onderdeel van onze reguliere dienstverlening. Niet als project. Niet tegen meerwerk. ANBI-status verlies door administratieve omissie behoort tot het soort risico dat onze dienstverlening juist elimineert.

EN: Our processes are designed for ANBI compliance by default. Income registration, expense ratios, publication requirements, transaction transparency — everything the Belastingdienst and the CBF require, we deliver as part of our regular service. Not as a project. Not as additional work. Losing ANBI status through administrative oversight is exactly the kind of risk our service eliminates.

**FAQ B — Wat als wij grote subsidiestromen ontvangen (VWS, gemeente, EU)?**
NL: Subsidiestromen zijn een aparte specialisatie binnen onze administratiedienstverlening. Aanvraag-administratie, project-administratie per subsidie, voortgangsrapportage, eindverantwoording — wij houden de relatie tussen subsidievoorwaarden en bestede middelen automatisch zichtbaar in Mijn Orchestra. Voor bestuursleden, voor de subsidieverstrekker en voor uw accountant.

EN: Government grant flows are a distinct specialisation within our administration service. Application administration, project accounting per grant, progress reporting, final accountability — we automatically keep the relationship between grant conditions and money spent visible on My Orchestra. For board members, for the granting authority, and for your accountant.

**FAQ C — Wat verandert er voor onze huidige accountant?**
NL: In principe niets verplichts. Veel cliënten houden hun huidige externe accountant aan voor de wettelijke controle van de jaarrekening — die rol is gescheiden van ons werk en blijft onafhankelijk. Wij leveren de management letter en alle onderliggende stukken. In de praktijk verbetert de samenwerking met accountants doordat onze administratie audit-ready aangeleverd wordt; controle-uren bij de accountant nemen vaak af.

EN: In principle nothing is required to change. Many clients keep their current external accountant for the statutory audit of the annual accounts — that role is separate from our work and remains independent. We deliver the management letter and all underlying documentation. In practice the relationship with auditors improves because our administration is delivered audit-ready; audit hours typically go down.

**FAQ D — Waar zit de catch in de vaste vergoeding?**
NL: Er is geen catch. Wij ontvangen een vaste jaarlijkse vergoeding voor het integrale beheer van uw stichting, vooraf afgesproken en alleen voor inflatie aangepast. Geen retrocessies, geen productverkoop, geen verborgen marges. De vergoeding wordt niet hoger als uw vermogen groeit. Voor sommige besturen voelt dat eerst vreemd — dat begrijpen wij. Eén gesprek volstaat meestal om die vreemdheid weg te nemen.

EN: There is no catch. We receive a fixed annual fee for the integrated stewardship of your foundation, agreed in advance and adjusted only for inflation. No retrocessions, no product sales, no hidden margins. The fee does not rise as your assets grow. For some boards that feels unusual at first — we understand. One conversation usually removes the unfamiliarity.

**FAQ E — Voor welke stichtingsomvang is dit zinvol?**
NL: Onze dienstverlening is structureel gebouwd voor stichtingen waarin de complexiteit van vermogensbeheer, fiscaliteit, governance en administratie reëel begint te wegen — doorgaans bij stichtingsvermogens vanaf indicatief enkele miljoenen euro of bij fondsenwervende organisaties met substantiële operationele begrotingen. Voor kleinere stichtingen kan dat omslagpunt liggen bij het moment dat het bestuur meer tijd kwijt is aan financiële versnippering dan aan de missie.

EN: Our service is structurally built for foundations where the complexity of investment management, taxation, governance and administration begins to weigh meaningfully — typically foundations with assets from indicatively several million euros, or fundraising organisations with substantial operational budgets. For smaller foundations the threshold often shows up the moment the board spends more time on financial fragmentation than on the mission.

**FAQ F — Kan ons bestuur eerst een second opinion krijgen?**
NL: Ja natuurlijk. Veel besturen beginnen daarmee. Wij geven graag een onafhankelijke beoordeling van hoe uw stichting op dit moment financieel is georganiseerd — beleggingsstrategie, kostenposities, administratieve inrichting, governance-discipline, compliance — zonder enige verplichting tot samenwerking. Voor veel besturen is dat het eerste moment waarop het volledige financiële plaatje van de eigen stichting op één pagina staat.

EN: Yes, of course. Many boards begin there. We are happy to give an independent assessment of how your foundation is currently organised financially — investment strategy, cost positions, administrative setup, governance discipline, compliance — without any obligation to engage further. For many boards this is the first time the full financial picture of their own foundation appears on a single page.

Edits / notes:
_____

---

## NEW page: Vaste vergoeding voor stichtingen (`/vaste-vergoeding-stichtingen` · `/en/fixed-fee-foundations`)

Mirrors the private-office FixedFee page. Surfaced from the home Fee Logic "Read more" link and from a new footer Legal-column link. Not in primary navigation.

### Hero
*Location: propose new `fixedFee.*` namespace in locales*

**NL**
Eyebrow: Vaste vergoeding voor stichtingen
Title: Wij factureren op verantwoordelijkheid. Niet op vermogen.
Subtitle: Een uitgewerkte onderbouwing van waarom een vaste jaarlijkse vergoeding voor stichtingen geen marketingkeuze is, maar de economische conclusie van institutioneel denken — en waarom voor een stichting elke basispunt op kosten letterlijk een basispunt voor de missie is.

**EN**
Eyebrow: Fixed fee for foundations
Title: We charge for responsibility. Not for assets.
Subtitle: A worked argument for why a fixed annual fee for foundations is not a marketing choice but the economic conclusion of institutional thinking — and why, for a foundation, every basis point on costs is literally a basis point for the mission.

Edits / notes:
_____

---

### Arithmetic block (NEW — charity-specific)
*Location: propose new `fixedFee.arithmetic*` keys*

> ⚠️ **Founder verify before publishing:** The €16M / €14M / €13M / €12.5M values are indicative only; they assume a €5M endowment growing at 6% gross over 25 years with ~€25K/year indicative fixed fee. Replace with values from your actual fixed-fee tier, or commission a more careful calculation. The footnote already calls the numbers indicative.

**NL**
Title: Wat 1% jaarlijkse kosten over vijfentwintig jaar betekent voor uw missie.
Intro: Een procentpunt aan jaarlijkse kosten lijkt klein. Voor een commerciële belegger is het ongelukkig. Voor een stichting is het inhoudelijk verkeerd: elke euro die jaar in jaar uit aan een AUM-percentage wordt betaald, is een euro die niet aan de missie kan worden besteed. Op een stichtingsvermogen van vijf miljoen euro, bij een verondersteld bruto rendement van zes procent over vijfentwintig jaar, ontstaat het volgende beeld:
Column 1 header: Tariefmodel
Column 2 header: Vermogen na 25 jaar
Column 3 header: Niet beschikbaar voor missie
Row 1: Vast tarief (indicatief, ~€25K/jr) · ca. € 16 mln · —
Row 2: 0,75% AUM · ca. € 14 mln · − € 2 mln
Row 3: 1,00% AUM · ca. € 13 mln · − € 3 mln
Row 4: 1,25% AUM · ca. € 12,5 mln · − € 3,5 mln
Footnote: Indicatieve berekening; werkelijke uitkomsten variëren met markt, in- en uitstromen, belastingdruk en uitkeringsbeleid. Het mechanisme — kosten als cumulatieve variabele op het stichtingsvermogen — is wat blijft. En wat blijft is dit: drie tot drieënhalf miljoen euro dat aan een tariefstructuur ging in plaats van aan begunstigden, over één bestuurstermijn-overstijgende horizon.

**EN**
Title: What 1% of annual costs over twenty-five years means for your mission.
Intro: One percentage point in annual costs seems small. For a commercial investor it is unfortunate. For a foundation it is substantively wrong: every euro paid year on year to an AUM percentage is a euro not spent on the mission. On a foundation endowment of five million euros, assuming a gross return of six percent over twenty-five years, the picture looks like this:
Column 1 header: Fee model
Column 2 header: Wealth after 25 years
Column 3 header: Not available for the mission
Row 1: Fixed fee (indicative, ~€25K/yr) · ca. € 16m · —
Row 2: 0.75% AUM · ca. € 14m · − € 2m
Row 3: 1.00% AUM · ca. € 13m · − € 3m
Row 4: 1.25% AUM · ca. € 12.5m · − € 3.5m
Footnote: Indicative calculation; actual outcomes vary with markets, inflows/outflows, tax and distribution policy. The mechanism — costs as a cumulative variable on the foundation's wealth — is what remains. And what remains is this: three to three-and-a-half million euros that went to a fee structure rather than to beneficiaries, over a horizon longer than any single board term.

Edits / notes:
_____

---

### FAQ on Fixed Fee page
*Location: propose new `fixedFee.faq*` keys*

**Q1 — Waar zit de catch?**
NL: Geen catch. Wij ontvangen een vaste jaarlijkse vergoeding voor het integrale beheer van uw stichting — vooraf afgesproken en alleen voor inflatie aangepast. Geen retrocessies, geen productverkoop, geen verborgen marges. De vergoeding wordt niet hoger als uw stichtingsvermogen groeit. Wat u jaarlijks bespaart ten opzichte van een AUM-percentage, blijft op de balans van de stichting.

EN: There is no catch. We receive a fixed annual fee for the integrated stewardship of your foundation — agreed in advance and adjusted only for inflation. No retrocessions, no product sales, no hidden margins. The fee does not rise as your foundation's wealth grows. What you save annually compared with an AUM percentage remains on the foundation's balance sheet.

**Q2 — Hoe kan dit goedkoper zijn dan een traditionele aanbieder?**
NL: "Goedkoper" is niet het juiste woord. "Logischer" is het. Als uw stichtingsvermogen verdubbelt, verdubbelt ons werk doorgaans niet. Een tarief dat met uw vermogen meegroeit, groeit op een gegeven moment buiten verhouding tot het werk — en voor een stichting betekent dat: structureel minder middelen voor de missie. Een vaste vergoeding blijft in verhouding tot de oorspronkelijk afgesproken dienstverlening.

EN: "Cheaper" is not the right word. "Logical" is. If your foundation's wealth doubles, our work generally does not. A fee that scales with your wealth eventually grows out of proportion to the work — and for a foundation, that means structurally fewer resources for the mission. A fixed fee stays in proportion to the originally agreed scope.

**Q3 — Werken jullie samen met onze huidige bank of fondsbeheerder?**
NL: Ja. In veel gevallen blijven cliënten posities aanhouden bij meerdere banken en (fonds)beheerders — zeker tijdens een transitie. Wij zorgen dat het geheel zichtbaar, gemeten en samenhangend beheerd blijft via Mijn Orchestra. Welke partijen het werk uitvoeren is voor ons secundair; dat het geheel onder één regie staat, is primair.

EN: Yes. In many cases clients keep positions with multiple banks and (fund) managers — especially during a transition. We ensure the whole remains visible, measured, and managed coherently via My Orchestra. Which parties execute the work is secondary; that the whole is held under one stewardship is primary.

**Q4 — Voor welke stichtingsomvang is dit zinvol?**
NL: Onze dienstverlening is structureel gebouwd voor die stichtingen waar de complexiteit van vermogensbeheer, governance en administratie reëel begint te wegen — doorgaans vanaf stichtingsvermogens van indicatief enkele miljoenen euro of fondsenwervende organisaties met substantiële operationele begrotingen. Voor zuiver beleggingsdienstverlening zijn wij door onze vaste tarifering vooral economisch interessant voor grotere stichtingsvermogens; voor het integrale Charity Office (beheer + administratie + governance) ligt het omslagpunt lager — daar wint elke stichting waar het bestuur meer aan financiële versnippering kwijt is dan aan de missie.

EN: Our service is structurally built for foundations where the complexity of wealth management, governance and administration begins to weigh meaningfully — typically from foundation assets of indicatively several million euros, or fundraising organisations with substantial operational budgets. For pure investment management our fixed-fee approach is most economically relevant for larger foundation portfolios; for the full Charity Office (management + administration + governance) the threshold is lower — every foundation where the board spends more time on financial fragmentation than on the mission stands to gain.

**Q5 — Wat zit er in het vaste tarief?**
NL: Dat is volledig afhankelijk van wat er voor uw stichting nodig is om financieel georkestreerd te worden. Wat het integrale Charity Office kan omvatten: vermogensbeheer, het opstellen en bewaken van het beleggingsstatuut, alle financiële administratie en boekhouding, subsidie- en donatieadministratie, jaarrekeningen, ANBI- en CBF-rapportages, governance-advies, bestuursondersteuning, coördinatie met externe accountant, en de volledige Mijn Orchestra omgeving voor het hele bestuur. Externe kosten (transactiekosten op beleggingen, fondskosten, kosten van derden zoals notaris of advocaat) worden separaat en transparant gerapporteerd, en continu getoetst aan potentieel efficiëntere alternatieven.

EN: That is fully dependent on what your foundation requires to be financially orchestrated. What the full Charity Office can include: wealth management, drafting and monitoring of the investment policy statement, all financial administration and bookkeeping, grant and donation administration, annual accounts, ANBI and CBF reporting, governance advisory, board support, coordination with external auditor, and the full My Orchestra environment for the entire board. External costs (transaction costs on investments, fund costs, third-party costs such as notary or lawyer) are reported separately and transparently, and continuously assessed against potentially more efficient alternatives.

**Q6 — Kan ons bestuur eerst een second opinion krijgen?**
NL: Ja natuurlijk. Veel besturen beginnen daarmee. Wij geven graag een onafhankelijke beoordeling van hoe uw stichting op dit moment financieel is georganiseerd — beleggingsstrategie, kostenposities, administratieve inrichting, governance-discipline, compliance — zonder enige verplichting tot samenwerking. Voor veel besturen is dat het eerste moment waarop het volledige financiële plaatje van de eigen stichting op één pagina staat.

EN: Yes, of course. Many boards begin there. We are happy to give an independent assessment of how your foundation is currently organised financially — investment strategy, cost positions, administrative setup, governance discipline, compliance — without any obligation to engage further. For many boards this is the first time the full financial picture of their own foundation appears on a single page.

Edits / notes:
_____

---

## News & Opinion

### Subtitle
*Location: `src/locales/{nl,en}.js` → `news.heroDescription` and/or `articlesSubtitle`*

**NL**
Observaties, opvattingen en argumenten over hoe stichtingen financieel georganiseerd zouden moeten zijn. Voor bestuursleden, penningmeesters, en iedereen die in de stichtingensector werkt.

**EN**
Observations, opinions and arguments on how foundations should be financially organised. For board members, treasurers, and anyone working in the foundations sector.

Edits / notes:
_____

---

## Contact

### Hero subtitle
*Location: `src/locales/{nl,en}.js` → `contact.heroDescription`*

**NL**
Voor de meeste besturen begint het met één gesprek waarin wij verkennen of de manier waarop wij denken bij uw stichting past. Geen pitch deck. Geen verkoopgesprek. Een gesprek — bij voorkeur met een kleine afvaardiging van het bestuur, want besluiten over financiële organisatie worden zelden door één persoon genomen.

**EN**
For most boards it begins with one conversation in which we explore whether the way we think fits your foundation. No pitch deck. No sales pitch. A conversation — preferably with a small delegation from the board, because decisions about financial organisation are rarely made by one person.

Edits / notes:
_____

---

## Footer

### Add: Fixed-fee deep-link
*Location: `src/locales/{nl,en}.js` → `footer.*` — propose new `footer.tariff`*

**NL**
Vaste vergoeding voor stichtingen

**EN**
Fixed fee for foundations

Edits / notes:
_____

---

## Appendix — Structural changes (not editable here)

These are structural/code changes the rewrite implies. Listed for awareness so the rewrite can be implemented coherently when you're ready.

- **Home page section order:** Hero → Category (NEW) → Mission/Impact bridge (rewrite) → Services overview → Founder Letter (NEW) → Fee Logic (NEW) → Friction (NEW) → Value props → Process Steps → Testimonials → Trust Badges → CTA
- **Services Overview page:** insert new Sequence block between the Approach block and the three-card grid
- **Service: Wealth Management:** add a cross-link from the Fee transparency block to the new dedicated `/vaste-vergoeding-stichtingen` page
- **Service: Administration:** no structural changes; copy-only rewrites
- **Service: Governance:** no structural changes; copy-only rewrites
- **About Overview / Team / Methodology / FAQs:** no structural changes; copy + new FAQ entries
- **NEW page:** `/vaste-vergoeding-stichtingen` (NL) and `/en/fixed-fee-foundations` (EN). Page structure mirrors the private-office FixedFee page: Hero on navy → reused Fee Logic block → Arithmetic block → 6 FAQs → CTA. New route in router, new path mapping in LanguageContext, new footer Legal-column link
- **Footer Legal column:** add "Vaste vergoeding voor stichtingen" / "Fixed fee for foundations" link as first entry (mirrors private-office footer change)

## Appendix — Founder-verify items

Items needing fact-check by Roderik / charity-team lead before any of this copy goes live:

1. **About Team** — pension funds / endowments / Big Four / ANBI-CBF advisory backgrounds. Adjust to actual current charity-team composition.
2. **Methodology five-step specifics** — Nulmeting, Offerte, Onboarding, Zekerheid, Inzicht. The named outputs and what cliënten actually receive at each stage should match practice. If a stage names a deliverable that does not exist in practice (e.g. "formele bevestiging dat alle compliance op orde is"), tighten to what is actually delivered.
3. **Fixed Fee arithmetic block — row values** — €16M / €14M / €13M / €12.5M are derived from €5M starting / 6% gross / 25 years / ~€25K/yr indicative fixed fee. Replace with values from your actual fixed-fee tier on whatever reference scenario you prefer.
4. **FAQ Q4 (size threshold)** — currently "enkele miljoenen euro" / "several million euros". Tighten to your actual minimum if there is one.
5. **FAQ B (subsidy flows)** — currently names VWS as the example government grantor. Adjust to whichever government grantor is most common in your client base.
6. **Founder Letter signature** — currently Roderik Bolle, Managing Director, Orchestra. Confirm correct role title for the charity-side signature, or whether a different "charity practice lead" name should sign on this side specifically.
