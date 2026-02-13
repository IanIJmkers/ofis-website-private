import { motion } from "motion/react";
import PageTransition from "../components/animation/PageTransition";
import AnimatedSection from "../components/animation/AnimatedSection";
import StaggerChildren, { staggerItem } from "../components/animation/StaggerChildren";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import { useLanguage } from "../context/LanguageContext";

const OFIS_URL = "https://ofis.orchestrabeheer.nl/Ofis/Client";

const featureIcons = [
  // Dashboard
  <svg key="dash" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  </svg>,
  // Documents
  <svg key="docs" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
  </svg>,
  // Reports
  <svg key="reports" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>,
  // Tasks
  <svg key="tasks" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>,
];

/* ─── Sidebar items for the dashboard mockup ─── */
const sidebarItems = [
  { label: "Overzicht", icon: "overview", active: true },
  { label: "Rapporten", icon: "reports" },
  { label: "Boekhouding", icon: "accounting" },
  { label: "Bankzaken", icon: "banking" },
  { label: "Projecten", icon: "projects" },
  { label: "Facturatie", icon: "invoicing" },
  { label: "Relaties", icon: "relations" },
  { label: "Donaties", icon: "donations" },
  { label: "Documenten", icon: "documents" },
  { label: "Organizer", icon: "organizer" },
];

/* ─── Dashboard cards data ─── */
const dashboardCards = [
  { title: "Rapporten", items: [] },
  {
    title: "Boekhouding",
    items: [
      { text: "Ongeboekte banktransacties", count: 2 },
      { text: "Bankrekeningen in ongeboekte banktransacties", count: 1 },
    ],
    more: 4,
  },
  {
    title: "Bankzaken",
    items: [
      { text: "Betaalopdrachten kunnen beoordeeld worden", count: 56 },
      { text: "Onautoriseerde betaalopdrachten", count: 56 },
    ],
    more: 3,
  },
  {
    title: "Projecten",
    items: [
      { text: "Voorstellen moeten beoordeeld worden", count: 2 },
      { text: "Gesloten aanvragen", count: 10 },
    ],
    more: 3,
  },
  {
    title: "Facturatie",
    items: [
      { text: "Niet verwerkte factuur documenten", count: 3 },
      { text: "Facturen met een opmerking", count: 1 },
      { text: "Binnenkomende facturen kunnen beoordeeld worden", count: 4 },
    ],
  },
  { title: "Relaties", items: [{ text: "Relatieherinnering", count: 5 }] },
  { title: "Donaties", items: [] },
  { title: "Documenten", items: [] },
];

/* ─── Sidebar icon component ─── */
function SidebarIcon({ type, className = "w-4 h-4" }) {
  const icons = {
    overview: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    reports: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    accounting: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    banking: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    projects: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
      </svg>
    ),
    invoicing: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    relations: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    donations: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    documents: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
      </svg>
    ),
    organizer: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  };
  return icons[type] || null;
}

/* ─── Dashboard Card ─── */
function DashboardCard({ title, items, more }) {
  return (
    <div className="bg-white rounded-lg border border-warm-gray-100 overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300">
      <div className="bg-navy-900 px-4 py-2.5">
        <h4 className="text-sm font-semibold text-white">{title}</h4>
      </div>
      <div className="p-4 min-h-[80px]">
        {items.map((item) => (
          <div key={item.text} className="flex items-start justify-between gap-3 mb-2 last:mb-0">
            <span className="text-xs text-warm-gray-600 leading-snug">{item.text}</span>
            <span className="shrink-0 inline-flex items-center justify-center min-w-[22px] h-[22px] rounded-full bg-gold-600 text-white text-[10px] font-bold px-1.5">
              {item.count}
            </span>
          </div>
        ))}
        {more && (
          <p className="text-[11px] text-warm-gray-400 mt-2">En {more} meer</p>
        )}
      </div>
    </div>
  );
}

/* ─── Interactive Dashboard Mockup ─── */
function DashboardMockup() {
  return (
    <div className="rounded-xl overflow-hidden shadow-card border border-warm-gray-200">
      {/* Browser bar */}
      <div className="bg-warm-gray-100 px-4 py-2.5 flex items-center gap-3">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-warm-gray-300" />
          <span className="w-3 h-3 rounded-full bg-warm-gray-300" />
          <span className="w-3 h-3 rounded-full bg-warm-gray-300" />
        </div>
        <div className="grow flex justify-center">
          <div className="bg-white rounded-md px-4 py-1 text-xs text-warm-gray-400 max-w-xs w-full text-center">
            ofis.orchestrabeheer.nl
          </div>
        </div>
        <div className="w-12" />
      </div>

      {/* Dashboard body */}
      <div className="flex min-h-[400px] bg-cream">
        {/* Sidebar */}
        <div className="hidden sm:flex flex-col w-44 bg-navy-900 shrink-0 py-4">
          {sidebarItems.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2.5 px-4 py-2 text-xs transition-colors ${
                item.active
                  ? "text-white bg-navy-800 border-l-2 border-gold-500"
                  : "text-navy-300 hover:text-white border-l-2 border-transparent"
              }`}
            >
              <SidebarIcon type={item.icon} className="w-4 h-4" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="grow p-4 sm:p-6">
          <h3 className="text-lg font-heading text-navy-900 mb-4 flex items-center gap-2">
            <SidebarIcon type="overview" className="w-5 h-5 text-navy-700" />
            Overzicht
          </h3>
          <StaggerChildren
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
            staggerDelay={0.06}
          >
            {dashboardCards.map((card) => (
              <motion.div key={card.title} variants={staggerItem}>
                <DashboardCard {...card} />
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </div>
  );
}

/* ─── Page Component ─── */
export default function MijnOrchestra() {
  const { t } = useLanguage();

  const features = [
    { icon: featureIcons[0], title: t("mijnOrchestra", "feature1Title"), description: t("mijnOrchestra", "feature1Desc") },
    { icon: featureIcons[1], title: t("mijnOrchestra", "feature2Title"), description: t("mijnOrchestra", "feature2Desc") },
    { icon: featureIcons[2], title: t("mijnOrchestra", "feature3Title"), description: t("mijnOrchestra", "feature3Desc") },
    { icon: featureIcons[3], title: t("mijnOrchestra", "feature4Title"), description: t("mijnOrchestra", "feature4Desc") },
  ];

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full border border-white/20" />
          <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full border border-white/10" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block text-xs font-body font-semibold tracking-[0.25em] uppercase text-gold-400 mb-6"
            >
              {t("mijnOrchestra", "heroEyebrow")}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading text-white leading-[1.1] mb-6"
            >
              {t("mijnOrchestra", "heroTitle")}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-0.75 w-10 bg-gold-400 origin-left mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg lg:text-xl text-navy-200 leading-relaxed max-w-2xl mb-10"
            >
              {t("mijnOrchestra", "heroDescription")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button href={OFIS_URL} external variant="primary" size="lg">
                {t("mijnOrchestra", "heroLoginCta")}
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform overview */}
      <SectionWrapper bg="cream" size="lg">
        <SectionHeading
          eyebrow={t("mijnOrchestra", "overviewEyebrow")}
          title={t("mijnOrchestra", "overviewTitle")}
          subtitle={t("mijnOrchestra", "overviewSubtitle")}
        />

        <StaggerChildren className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <motion.div key={f.title} variants={staggerItem}>
              <div className="bg-white border border-warm-gray-100 rounded-lg p-6 h-full shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <div className="text-gold-700 mb-4">{f.icon}</div>
                <h3 className="text-lg font-heading text-navy-900 mb-2">{f.title}</h3>
                <p className="text-sm text-warm-gray-500 leading-relaxed">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </SectionWrapper>

      {/* Interactive dashboard */}
      <SectionWrapper bg="white" size="lg">
        <SectionHeading
          eyebrow={t("mijnOrchestra", "dashboardEyebrow")}
          title={t("mijnOrchestra", "dashboardTitle")}
          subtitle={t("mijnOrchestra", "dashboardSubtitle")}
        />

        <AnimatedSection className="mt-16" delay={0.2}>
          <DashboardMockup />
        </AnimatedSection>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper bg="navy">
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-6">
            {t("mijnOrchestra", "ctaTitle")}
          </h2>
          <p className="text-lg text-navy-200 mb-10">
            {t("mijnOrchestra", "ctaSubtitle")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href={OFIS_URL} external variant="primary" size="lg">
              {t("mijnOrchestra", "heroLoginCta")}
            </Button>
            <Button href="/contact" variant="outline-light" size="lg">
              {t("common", "contactUs")}
            </Button>
          </div>
        </AnimatedSection>
      </SectionWrapper>
    </PageTransition>
  );
}
