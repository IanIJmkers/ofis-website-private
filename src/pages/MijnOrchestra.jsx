import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import PageTransition from "../components/animation/PageTransition";
import AnimatedSection from "../components/animation/AnimatedSection";
import StaggerChildren, { staggerItem } from "../components/animation/StaggerChildren";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import { useLanguage } from "../context/LanguageContext";
import {
  balansData,
  journaalpostData, bankTransactiesData, projectenData,
  factuurData, relatiesData, donatiesData, documentenData, organizerData,
} from "../data/dashboardMockData";

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
  { label: "Overzicht", icon: "overview" },
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

/* ─── URL paths for each module ─── */
const modulePaths = {
  Overzicht: "DEMOSTICHTING/Overview",
  Rapporten: "DEMOSTICHTING/Overviews/Balance/Report",
  Boekhouding: "DEMOSTICHTING/Accounting",
  Bankzaken: "DEMOSTICHTING/Banking",
  Projecten: "DEMOSTICHTING/ProjectAdministration/Reporting",
  Facturatie: "DEMOSTICHTING/Invoicing/Incoming/Invoices/22",
  Relaties: "DEMOSTICHTING/RelationsManagement/Relations",
  Donaties: "DEMOSTICHTING/DonationManagement/Overview",
  Documenten: "DEMOSTICHTING/DocumentManagement/Documents",
  Organizer: "DEMOSTICHTING/Organizer/Meetings/10",
};

/* ─── Dashboard cards data (for Overzicht) ─── */
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

/* ═══════════════════════════════════════════════
   Module Content Components
   ═══════════════════════════════════════════════ */

function ModuleHeading({ icon, title }) {
  return (
    <h3 className="text-lg font-heading text-navy-900 mb-4 flex items-center gap-2">
      <SidebarIcon type={icon} className="w-5 h-5 text-navy-700" />
      {title}
    </h3>
  );
}

/* ─── Shared: Monthly Bar Chart ─── */
function MonthlyBarChart({ months, giften, leningen, title, subtitle }) {
  const maxVal = Math.max(...giften, ...leningen, 1);
  const barH = 130;
  return (
    <div className="bg-white rounded-lg border border-warm-gray-100 shadow-card overflow-hidden">
      <div className="px-4 py-2.5 border-b border-warm-gray-100 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-navy-900">{title}</h4>
        {subtitle && <span className="text-[10px] text-warm-gray-400">{subtitle}</span>}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center gap-1.5 text-[10px] text-warm-gray-600">
            <span className="w-3 h-3 rounded-sm bg-navy-900" /> Giften ({subtitle || "2023"})
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-warm-gray-600">
            <span className="w-3 h-3 rounded-sm bg-gold-600" /> Leningen ({subtitle || "2023"})
          </div>
        </div>
        <svg viewBox="0 0 480 160" className="w-full h-40" preserveAspectRatio="xMidYMid meet">
          {[0, 0.25, 0.5, 0.75, 1].map((pct) => (
            <line key={pct} x1="20" y1={barH * (1 - pct) + 10} x2="476" y2={barH * (1 - pct) + 10} stroke="#E4E4DE" strokeWidth="0.5" />
          ))}
          {months.map((month, i) => {
            const gH = (giften[i] / maxVal) * barH;
            const lH = (leningen[i] / maxVal) * barH;
            const x = 20 + i * 38;
            return (
              <g key={month}>
                <rect x={x} y={barH - gH + 10} width={14} height={Math.max(gH, 0)} fill="#0B2A48" rx={2} />
                <rect x={x + 16} y={barH - lH + 10} width={14} height={Math.max(lH, 0)} fill="#AA8C2B" rx={2} />
                <text x={x + 15} y={155} textAnchor="middle" fontSize="8" fill="#A8A89E">{month}</text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

/* ─── Overzicht ─── */
function OverzichtContent() {
  return (
    <>
      <ModuleHeading icon="overview" title="Overzicht" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {dashboardCards.map((card) => (
          <DashboardCard key={card.title} {...card} />
        ))}
      </div>
    </>
  );
}

/* ─── Rapporten: Balance Sheet + Chart + Table ─── */
function RapportenContent() {
  const [expandedRows, setExpandedRows] = useState({});
  const toggleRow = (label) =>
    setExpandedRows((prev) => ({ ...prev, [label]: !prev[label] }));

  const renderRows = (rows) =>
    rows.flatMap((row) => [
      <tr
        key={row.label}
        className="border-b border-warm-gray-50 hover:bg-warm-gray-50/50 cursor-pointer"
        onClick={() => row.children && toggleRow(row.label)}
      >
        <td className="px-4 py-1.5 text-warm-gray-600 pl-8 flex items-center gap-1.5">
          {row.children && (
            <svg
              className={`w-3 h-3 text-warm-gray-400 shrink-0 transition-transform duration-150 ${expandedRows[row.label] ? "rotate-90" : ""}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
          {!row.children && <span className="w-3" />}
          {row.label}
        </td>
        {row.values.map((v, i) => (
          <td key={i} className="px-4 py-1.5 text-right text-warm-gray-700 tabular-nums">{v}</td>
        ))}
      </tr>,
      ...(expandedRows[row.label] && row.children
        ? row.children.map((child) => (
            <tr key={child.label} className="border-b border-warm-gray-50 bg-warm-gray-50/30">
              <td className="px-4 py-1 text-warm-gray-500 pl-14 text-[11px]">{child.label}</td>
              {child.values.map((v, i) => (
                <td key={i} className="px-4 py-1 text-right text-warm-gray-500 tabular-nums text-[11px]">{v}</td>
              ))}
            </tr>
          ))
        : []),
    ]);

  return (
    <>
      <ModuleHeading icon="reports" title="Rapporten" />

      {/* Balance sheet */}
      <div className="bg-white rounded-lg border border-warm-gray-100 shadow-card overflow-hidden">
        <div className="bg-navy-900 px-4 py-2.5">
          <h4 className="text-sm font-semibold text-white">Balans</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-warm-gray-200">
                <th className="text-left px-4 py-2 text-warm-gray-500 font-medium" />
                {balansData.years.map((y) => (
                  <th key={y} className="text-right px-4 py-2 text-warm-gray-500 font-medium">{y}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr><td colSpan={3} className="px-4 pt-3 pb-1 font-semibold text-navy-900">Activa</td></tr>
              {renderRows(balansData.activa)}
              <tr className="border-t border-warm-gray-200 font-semibold">
                <td className="px-4 py-2 text-navy-900">Totaal activa</td>
                {balansData.activaTotal.map((v, i) => (
                  <td key={i} className="px-4 py-2 text-right text-navy-900 tabular-nums">{v}</td>
                ))}
              </tr>
              <tr><td colSpan={3} className="px-4 pt-4 pb-1 font-semibold text-navy-900">Passiva</td></tr>
              {renderRows(balansData.passiva)}
              <tr className="border-t border-warm-gray-200 font-semibold">
                <td className="px-4 py-2 text-navy-900">Totaal passiva</td>
                {balansData.passivaTotal.map((v, i) => (
                  <td key={i} className="px-4 py-2 text-right text-navy-900 tabular-nums">{v}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

/* ─── Boekhouding: Journal Post Detail ─── */
function BoekhoudingContent() {
  return (
    <>
      <ModuleHeading icon="accounting" title="Boekhouding" />

      {/* Page title with status badge */}
      <div className="flex items-center gap-2 mb-3">
        <svg className="w-4 h-4 text-warm-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
        <h4 className="text-sm font-semibold text-navy-900">Journaalpost {journaalpostData.id}</h4>
        <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-semibold bg-green-50 text-green-700">
          {journaalpostData.status}
        </span>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-4 border-b border-warm-gray-200">
        {journaalpostData.tabs.map((tab, i) => (
          <span
            key={tab}
            className={`text-xs pb-2 cursor-pointer ${
              i === 0
                ? "font-medium text-navy-900 border-b-2 border-navy-900 -mb-px"
                : "text-warm-gray-400 hover:text-warm-gray-600"
            }`}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* Details panel — 2-column grid with navy header */}
      <div className="bg-white rounded-lg border border-warm-gray-100 shadow-card overflow-hidden mb-4">
        <div className="bg-navy-900 px-4 py-2.5">
          <h4 className="text-sm font-semibold text-white">Details</h4>
        </div>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
          {journaalpostData.details.map((field) => (
            <div key={field.label} className="flex text-xs gap-3">
              <span className="text-navy-900 font-semibold w-28 shrink-0">{field.label}</span>
              <span className={field.isLink ? "text-blue-600" : "text-warm-gray-700"}>
                {field.value || "\u2014"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Items table with totals row */}
      <div className="bg-white rounded-lg border border-warm-gray-100 shadow-card overflow-hidden mb-4">
        <div className="px-3 py-2 border-b border-warm-gray-100 flex items-center justify-between">
          <h4 className="text-sm font-semibold text-navy-900">Items</h4>
          <span className="text-[10px] text-warm-gray-400">
            1-{journaalpostData.items.length} &nbsp; {journaalpostData.items.length}
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-warm-gray-50 border-b border-warm-gray-200">
                <th className="text-left px-3 py-2 text-warm-gray-500 font-medium">Grootboekrekening</th>
                <th className="text-right px-3 py-2 text-warm-gray-500 font-medium">Bedrag (Euro)</th>
                <th className="text-left px-3 py-2 text-warm-gray-500 font-medium">Kostenplaats</th>
              </tr>
            </thead>
            <tbody>
              {journaalpostData.items.map((item, i) => (
                <tr key={i} className="border-b border-warm-gray-50 hover:bg-warm-gray-50/50">
                  <td className="px-3 py-2">
                    <span className="text-blue-600">{item.grootboekrekening}</span>
                    <span className="text-warm-gray-400 ml-1 block text-[10px]">{item.code}</span>
                  </td>
                  <td className="px-3 py-2 text-right text-warm-gray-700 tabular-nums whitespace-nowrap">
                    &euro; {item.bedrag}
                  </td>
                  <td className="px-3 py-2 text-warm-gray-600">{item.kostenplaats || ""}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-warm-gray-200 bg-warm-gray-50">
                <td className="px-3 py-2 text-navy-900 font-semibold">Totaal</td>
                <td className="px-3 py-2 text-right text-navy-900 font-semibold tabular-nums whitespace-nowrap">&euro; 0,00</td>
                <td className="px-3 py-2" />
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Referenties — enhanced cards */}
      <div className="bg-white rounded-lg border border-warm-gray-100 shadow-card overflow-hidden mb-4">
        <div className="px-3 py-2 border-b border-warm-gray-100">
          <h4 className="text-sm font-semibold text-navy-900">
            Referenties ({journaalpostData.referenties.length})
          </h4>
        </div>
        <div className="p-3 space-y-2">
          {journaalpostData.referenties.map((ref, i) => (
            <div key={i} className="flex items-start gap-3 text-xs p-2.5 rounded-md bg-warm-gray-50/50 border border-warm-gray-100">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-navy-900/10 text-navy-700 shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <div className="grow">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-navy-100 text-navy-700 uppercase tracking-wide">
                    {ref.type}
                  </span>
                  <span className="text-blue-600 font-medium">{ref.label}</span>
                </div>
                <div className="text-[10px] text-warm-gray-400">
                  {ref.relatie} &nbsp;&bull;&nbsp; &euro; {ref.bedrag}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Documenten — filled */}
      <div className="bg-white rounded-lg border border-warm-gray-100 shadow-card overflow-hidden">
        <div className="px-3 py-2 border-b border-warm-gray-100 flex items-center justify-between">
          <h4 className="text-sm font-semibold text-navy-900">Documenten</h4>
          <span className="text-[10px] text-warm-gray-400">
            1-{journaalpostData.documenten.length} &nbsp; {journaalpostData.documenten.length}
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-warm-gray-50 border-b border-warm-gray-200">
                <th className="text-left px-3 py-2 text-warm-gray-500 font-medium">Document</th>
                <th className="text-left px-3 py-2 text-warm-gray-500 font-medium">Datum</th>
                <th className="text-right px-3 py-2 text-warm-gray-500 font-medium">Grootte</th>
              </tr>
            </thead>
            <tbody>
              {journaalpostData.documenten.map((doc, i) => (
                <tr key={i} className="border-b border-warm-gray-50 hover:bg-warm-gray-50/50">
                  <td className="px-3 py-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-blue-600">{doc.naam}</span>
                  </td>
                  <td className="px-3 py-2 text-warm-gray-600">{doc.datum}</td>
                  <td className="px-3 py-2 text-right text-warm-gray-400">{doc.grootte}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

/* ─── Bankzaken: Bank Transaction Table ─── */
function BankzakenContent() {
  return (
    <>
      <ModuleHeading icon="banking" title="Bankzaken" />

      {/* Tabs */}
      <div className="flex gap-4 mb-4 border-b border-warm-gray-200">
        {bankTransactiesData.tabs.map((tab, i) => (
          <span
            key={tab}
            className={`text-xs pb-2 cursor-pointer ${
              i === 0
                ? "font-medium text-navy-900 border-b-2 border-navy-900 -mb-px"
                : "text-warm-gray-400 hover:text-warm-gray-600"
            }`}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <span className="text-[10px] text-warm-gray-400">
          1-50 &nbsp; {bankTransactiesData.totalRows}
        </span>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-medium bg-green-50 text-green-700 cursor-default">
            Keur goed
            <span className="inline-flex items-center justify-center min-w-4.5 h-4.5 rounded-full bg-gold-600 text-white text-[9px] font-bold px-1">
              {bankTransactiesData.approveCount}
            </span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-medium bg-red-50 text-red-700 cursor-default">
            Wijs af
            <span className="inline-flex items-center justify-center min-w-4.5 h-4.5 rounded-full bg-gold-600 text-white text-[9px] font-bold px-1">
              {bankTransactiesData.rejectCount}
            </span>
          </span>
          <span className="px-3 py-1.5 rounded text-[11px] font-medium bg-warm-gray-100 text-warm-gray-600 cursor-default">
            Beoordeel
          </span>
        </div>
      </div>

      {/* Transaction table */}
      <div className="bg-white rounded-lg border border-warm-gray-100 shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs min-w-300">
            <thead>
              <tr className="bg-warm-gray-50 border-b border-warm-gray-200">
                {["ID", "Datum", "Tegenrekening", "Bedrag", "Herkomst", "Oordeel", "Beoordelingen", "Omschrijving", "Betalingskenmerk", "Bankrekening", "Document"].map((col) => (
                  <th key={col} className="text-left px-3 py-2 text-warm-gray-500 font-medium whitespace-nowrap">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bankTransactiesData.transacties.map((row) => (
                <tr key={row.id} className="border-b border-warm-gray-50 hover:bg-warm-gray-50/50">
                  <td className="px-3 py-2 text-warm-gray-400">{row.id}</td>
                  <td className="px-3 py-2 text-warm-gray-600 whitespace-nowrap">{row.datum}</td>
                  <td className="px-3 py-2">
                    <div className="text-navy-700 font-medium whitespace-nowrap">{row.tegenrekeningNaam}</div>
                    <div className="text-[10px] text-warm-gray-400">{row.tegenrekeningIban}</div>
                  </td>
                  <td className="px-3 py-2 text-warm-gray-700 tabular-nums whitespace-nowrap">
                    &euro; &nbsp; {row.bedrag}
                  </td>
                  <td className="px-3 py-2">
                    {row.herkomst ? (
                      <div>
                        <div className="text-blue-600 text-[10px] font-medium">
                          {row.herkomst.ref}: {row.herkomst.label || (row.herkomst.type === "toekenning" ? "Toekenning" : "Lening")}
                        </div>
                        <div className="text-[10px] text-warm-gray-400">
                          {row.herkomst.relatie} &nbsp;&nbsp;&bull;&nbsp;&nbsp; &euro; {row.herkomst.bedrag}
                        </div>
                      </div>
                    ) : ""}
                  </td>
                  <td className="px-3 py-2 text-center">
                    {row.oordeel === "approved" ? (
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100">
                        <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </span>
                    ) : ""}
                  </td>
                  <td className="px-3 py-2 text-[10px] text-warm-gray-500 whitespace-pre-line">{row.beoordelingen}</td>
                  <td className="px-3 py-2 text-warm-gray-600 whitespace-nowrap">{row.omschrijving}</td>
                  <td className="px-3 py-2 text-warm-gray-600 whitespace-nowrap">{row.betalingskenmerk || ""}</td>
                  <td className="px-3 py-2">
                    <div className="text-warm-gray-600 whitespace-nowrap">{row.bankrekening.naam}</div>
                    <div className="text-[10px] text-warm-gray-400 whitespace-nowrap">{row.bankrekening.iban}</div>
                  </td>
                  <td className="px-3 py-2 text-warm-gray-600 whitespace-nowrap">
                    {row.document ? (
                      <span className="text-blue-600 text-[10px]">{row.document}</span>
                    ) : ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

/* ─── Projecten: Chart + Budget + Bar Chart + Table ─── */
function ProjectenContent() {
  const { chartCategories, budget, toegekend, resterend, dateRange, monthlyChart, aanvragenTable } = projectenData;

  return (
    <>
      <ModuleHeading icon="projects" title="Projecten" />
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-white border border-warm-gray-200 rounded-md px-3 py-1.5 text-xs text-warm-gray-500">
          {dateRange}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Donut chart card */}
        <div className="lg:col-span-3 bg-white rounded-lg border border-warm-gray-100 shadow-card p-5">
          <h4 className="text-sm font-semibold text-navy-900 mb-4">Verdeling toekenningen</h4>
          <div className="flex items-center gap-8">
            <div
              className="w-32 h-32 rounded-full shrink-0"
              style={{
                background: `conic-gradient(${chartCategories
                  .reduce((acc, cat, i) => {
                    const start = chartCategories.slice(0, i).reduce((s, c) => s + c.percentage, 0);
                    return `${acc}${i > 0 ? ", " : ""}${cat.color} ${start}% ${start + cat.percentage}%`;
                  }, "")})`,
                mask: "radial-gradient(circle at center, transparent 38%, black 39%)",
                WebkitMask: "radial-gradient(circle at center, transparent 38%, black 39%)",
              }}
            />
            <div className="space-y-2">
              {chartCategories.map((cat) => (
                <div key={cat.label} className="flex items-center gap-2 text-xs">
                  <span className="w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: cat.color }} />
                  <span className="text-warm-gray-600">{cat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Budget insight card */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-warm-gray-100 shadow-card p-5">
          <h4 className="text-sm font-semibold text-navy-900 mb-4">Budget inzicht</h4>
          <div className="space-y-3">
            {[
              { label: "Budget", value: budget },
              { label: "Toegekend", value: toegekend },
              { label: "Resterend", value: resterend },
            ].map((row) => (
              <div key={row.label} className="flex justify-between items-center">
                <span className="text-xs text-warm-gray-500">{row.label}</span>
                <span className="text-sm font-semibold tabular-nums text-navy-900">{row.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 h-2 bg-warm-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-gold-600 rounded-full" style={{ width: "1.15%" }} />
          </div>
          <p className="text-[10px] text-warm-gray-400 mt-1">1,15% van budget toegekend</p>
        </div>
      </div>

      {/* Monthly allocations bar chart */}
      <div className="mt-4">
        <MonthlyBarChart
          months={monthlyChart.months}
          giften={monthlyChart.giften}
          leningen={monthlyChart.leningen}
          title="Maandelijkse verdeling toekenningen"
          subtitle={dateRange}
        />
      </div>

      {/* Allocations table */}
      <div className="bg-white rounded-lg border border-warm-gray-100 shadow-card overflow-hidden mt-4">
        <div className="px-4 py-2.5 border-b border-warm-gray-100">
          <h4 className="text-sm font-semibold text-navy-900">Toekenningen ({aanvragenTable.length})</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-warm-gray-50 border-b border-warm-gray-200">
                {["Aanvraagnummer", "Aanvrager", "Categorie", "Gift", "Lening", "Status", "Datum"].map((col) => (
                  <th key={col} className="text-left px-3 py-2 text-warm-gray-500 font-medium whitespace-nowrap">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {aanvragenTable.map((row) => (
                <tr key={row.nummer} className="border-b border-warm-gray-50 hover:bg-warm-gray-50/50">
                  <td className="px-3 py-2 text-blue-600 font-medium">{row.nummer}</td>
                  <td className="px-3 py-2 text-navy-700 font-medium">{row.aanvrager}</td>
                  <td className="px-3 py-2 text-warm-gray-600">{row.categorie}</td>
                  <td className="px-3 py-2 text-warm-gray-700 tabular-nums whitespace-nowrap">&euro; {row.gift}</td>
                  <td className="px-3 py-2 text-warm-gray-700 tabular-nums whitespace-nowrap">&euro; {row.lening}</td>
                  <td className="px-3 py-2">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-green-50 text-green-700">
                      {row.status}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-warm-gray-600">{row.datum}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

/* ─── Facturatie: Invoice Detail + Referenties + Opmerkingen ─── */
function FacturatieContent() {
  const { fields, invoicePreview, referenties, opmerkingen } = factuurData;

  return (
    <>
      <ModuleHeading icon="invoicing" title="Facturatie" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Invoice details */}
        <div className="bg-white rounded-lg border border-warm-gray-100 shadow-card overflow-hidden">
          <div className="bg-navy-900 px-4 py-2.5">
            <h4 className="text-sm font-semibold text-white">Details</h4>
          </div>
          <div className="p-4 space-y-2.5">
            {fields.map((field, idx) => (
              <div key={field.label}>
                {idx === fields.length - 1 && <div className="border-t border-warm-gray-100 mb-2.5" />}
                <div className="flex justify-between text-xs gap-4">
                  <span className="text-warm-gray-400 shrink-0">{field.label}</span>
                  <span className={`font-medium text-right ${field.label === "Geautoriseerd" ? "text-green-700" : "text-warm-gray-700"}`}>
                    {field.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Invoice preview */}
        <div className="bg-white rounded-lg border border-warm-gray-100 shadow-card p-4">
          <div className="border border-warm-gray-200 rounded p-4 h-full bg-white">
            {/* Invoice header */}
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-[8px] font-bold text-red-600">Logo</span>
              </div>
              <div className="text-right">
                <p className="text-xs font-semibold text-navy-900">{invoicePreview.company}</p>
                <p className="text-[9px] text-warm-gray-400">{invoicePreview.address}</p>
                <p className="text-[9px] text-warm-gray-400">{invoicePreview.phone}</p>
              </div>
            </div>

            <div className="text-center mb-3">
              <span className="text-lg font-bold text-red-600">Factuur</span>
            </div>

            {/* To + meta */}
            <div className="flex justify-between text-[9px] text-warm-gray-500 mb-3">
              <div>
                <p className="font-medium text-warm-gray-600 mb-0.5">Naar</p>
                {invoicePreview.to.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <div className="text-right space-y-0.5">
                <p><span className="text-warm-gray-400">Factuurnummer</span> {invoicePreview.number}</p>
                <p><span className="text-warm-gray-400">Factuurdatum</span> {invoicePreview.date}</p>
                <p><span className="text-warm-gray-400">Vervaldag</span> {invoicePreview.date}</p>
              </div>
            </div>

            {/* Line items */}
            <table className="w-full text-[9px] mb-3">
              <thead>
                <tr className="border-b border-warm-gray-200">
                  <th className="text-left py-1 text-warm-gray-500 font-medium">Beschrijving</th>
                  <th className="text-right py-1 text-warm-gray-500 font-medium">Aantal</th>
                  <th className="text-right py-1 text-warm-gray-500 font-medium">Eenheid</th>
                  <th className="text-right py-1 text-warm-gray-500 font-medium">Tarief</th>
                  <th className="text-right py-1 text-warm-gray-500 font-medium">Totaal</th>
                </tr>
              </thead>
              <tbody>
                {invoicePreview.lines.map((line) => (
                  <tr key={line.desc} className="border-b border-warm-gray-50">
                    <td className="py-1 text-warm-gray-600">{line.desc}</td>
                    <td className="py-1 text-right text-warm-gray-600">{line.aantal}</td>
                    <td className="py-1 text-right text-warm-gray-600">{line.eenheid}</td>
                    <td className="py-1 text-right text-warm-gray-600">{line.tarief}</td>
                    <td className="py-1 text-right text-warm-gray-600">{line.totaal}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-end">
              <div className="text-right">
                <span className="text-xs font-semibold text-red-600">Totaalbedrag </span>
                <span className="text-xs font-bold text-red-600">{invoicePreview.total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Referenties */}
      <div className="bg-white rounded-lg border border-warm-gray-100 shadow-card overflow-hidden mt-4">
        <div className="px-4 py-2.5 border-b border-warm-gray-100">
          <h4 className="text-sm font-semibold text-navy-900">Referenties ({referenties.length})</h4>
        </div>
        <div className="p-4 space-y-3">
          {referenties.map((ref, i) => (
            <div key={i} className="flex items-center gap-4 text-xs">
              <span className="text-navy-900 font-semibold w-36 shrink-0 uppercase text-[10px] tracking-wide">{ref.type}</span>
              <span className="text-blue-600 font-medium">{ref.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Opmerkingen */}
      <div className="bg-white rounded-lg border border-warm-gray-100 shadow-card overflow-hidden mt-4">
        <div className="px-4 py-2.5 border-b border-warm-gray-100 flex items-center justify-between">
          <h4 className="text-sm font-semibold text-navy-900">Opmerkingen</h4>
          <span className="text-[10px] text-warm-gray-400">1-0 van 0</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-warm-gray-50 border-b border-warm-gray-200">
                {["Behandeld", "Opmerking", "Laatst gewijzigd"].map((col) => (
                  <th key={col} className="text-left px-3 py-2 text-warm-gray-500 font-medium whitespace-nowrap">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {opmerkingen.length === 0 && (
                <tr>
                  <td colSpan={3} className="px-3 py-4 text-center text-warm-gray-400 text-[11px]">
                    Geen opmerkingen
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

/* ─── Relaties: Contact Table ─── */
function RelatiesContent() {
  return (
    <>
      <ModuleHeading icon="relations" title="Relaties" />
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-4">
        {["Klanten", "Leveranciers", "Donateurs", "Projectrelaties", "Personeel"].map((filter) => (
          <span key={filter} className="px-3 py-1 rounded-full text-[10px] font-medium bg-warm-gray-100 text-warm-gray-600 cursor-pointer hover:bg-warm-gray-200 transition-colors">
            {filter}
          </span>
        ))}
      </div>
      <div className="bg-white rounded-lg border border-warm-gray-100 shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs min-w-175">
            <thead>
              <tr className="bg-warm-gray-50 border-b border-warm-gray-200">
                {["Type", "Naam", "Adres", "Postcode", "Plaats", "Telefoon", "E-mailadres", "Status"].map((col) => (
                  <th key={col} className="text-left px-3 py-2 text-warm-gray-500 font-medium whitespace-nowrap">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {relatiesData.map((row, i) => (
                <tr key={i} className="border-b border-warm-gray-50 hover:bg-warm-gray-50/50">
                  <td className="px-3 py-2 text-warm-gray-500">
                    {row.type === "Persoon" ? (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" /></svg>
                    ) : (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>
                    )}
                  </td>
                  <td className="px-3 py-2 text-navy-900 font-medium whitespace-nowrap">{row.naam}</td>
                  <td className="px-3 py-2 text-warm-gray-600 whitespace-nowrap">{row.adres || "-"}</td>
                  <td className="px-3 py-2 text-warm-gray-600">{row.postcode || "-"}</td>
                  <td className="px-3 py-2 text-warm-gray-600">{row.plaats || "-"}</td>
                  <td className="px-3 py-2 text-warm-gray-600 whitespace-nowrap">{row.telefoon}</td>
                  <td className="px-3 py-2 text-warm-gray-600 whitespace-nowrap">{row.email}</td>
                  <td className="px-3 py-2">
                    <span className="inline-flex items-center justify-center w-4 h-4 text-green-600">✓</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-3 py-2 text-[10px] text-warm-gray-400 border-t border-warm-gray-100">
          1 – {relatiesData.length} van 112
        </div>
      </div>
    </>
  );
}

/* ─── Donaties: Chart + Table ─── */
function DonatiesContent() {
  const { chartValues, table, totaal } = donatiesData;
  const max = Math.max(...chartValues);
  const chartW = 100;
  const chartH = 50;
  const points = chartValues
    .map((v, i) => `${(i / (chartValues.length - 1)) * chartW},${chartH - (v / max) * chartH}`)
    .join(" ");
  const areaPoints = `0,${chartH} ${points} ${chartW},${chartH}`;

  return (
    <>
      <ModuleHeading icon="donations" title="Donaties" />

      {/* Tabs */}
      <div className="flex gap-4 mb-4 border-b border-warm-gray-200">
        <span className="text-xs font-medium text-navy-900 pb-2 border-b-2 border-navy-900 -mb-px">Cumulatief maandelijks gedoneerd bedrag</span>
        <span className="text-xs text-warm-gray-400 pb-2 cursor-pointer hover:text-warm-gray-600">Donaties per oormerk</span>
      </div>

      {/* Area chart */}
      <div className="bg-white rounded-lg border border-warm-gray-100 shadow-card p-4 mb-4">
        <svg viewBox={`-2 -2 ${chartW + 4} ${chartH + 14}`} className="w-full h-36" preserveAspectRatio="none">
          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((pct) => (
            <line key={pct} x1="0" y1={chartH * (1 - pct)} x2={chartW} y2={chartH * (1 - pct)} stroke="#e5e5e5" strokeWidth="0.2" />
          ))}
          <polygon points={areaPoints} fill="rgba(11, 42, 72, 0.1)" />
          <polyline points={points} fill="none" stroke="#0B2A48" strokeWidth="0.6" />
        </svg>
        <div className="flex justify-between text-[9px] text-warm-gray-400 mt-1 px-1">
          {["0", "2", "4", "6", "8", "10", "12"].map((m) => <span key={m}>{m}</span>)}
        </div>
        <p className="text-center text-[9px] text-warm-gray-400 mt-1">Maand</p>
      </div>

      {/* Donations table */}
      <div className="bg-white rounded-lg border border-warm-gray-100 shadow-card overflow-hidden">
        <div className="px-4 py-2.5 border-b border-warm-gray-100">
          <h4 className="text-sm font-semibold text-navy-900">Alle donaties</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs min-w-162.5">
            <thead>
              <tr className="bg-warm-gray-50 border-b border-warm-gray-200">
                {["ID", "Afkomst", "Donateur", "Bedrag", "Datum", "Omschrijving", "Oormerk", "Incasso status"].map((col) => (
                  <th key={col} className="text-left px-3 py-2 text-warm-gray-500 font-medium whitespace-nowrap">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.map((row) => (
                <tr key={row.id} className="border-b border-warm-gray-50 hover:bg-warm-gray-50/50">
                  <td className="px-3 py-2 text-warm-gray-400">{row.id}</td>
                  <td className="px-3 py-2 text-warm-gray-600">{row.afkomst}</td>
                  <td className="px-3 py-2 text-warm-gray-600">{row.donateur}</td>
                  <td className="px-3 py-2 text-warm-gray-600 tabular-nums">€ {row.bedrag}</td>
                  <td className="px-3 py-2 text-warm-gray-600">{row.datum}</td>
                  <td className="px-3 py-2 text-warm-gray-600">{row.omschrijving}</td>
                  <td className="px-3 py-2 text-warm-gray-600">{row.oormerk}</td>
                  <td className="px-3 py-2 text-warm-gray-500">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-4 py-2 text-xs text-warm-gray-500 border-t border-warm-gray-100 text-right tabular-nums">
          {totaal}
        </div>
      </div>
    </>
  );
}

/* ─── Documenten: File Listing ─── */
function DocumentenContent() {
  function formatSize(bytes) {
    const num = parseInt(bytes, 10);
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)} MB`;
    return `${(num / 1000).toFixed(0)} KB`;
  }

  return (
    <>
      <ModuleHeading icon="documents" title="Documenten" />
      <div className="bg-white rounded-lg border border-warm-gray-100 shadow-card overflow-hidden">
        <div className="px-3 py-2 border-b border-warm-gray-100 flex items-center justify-between">
          <span className="text-[10px] text-warm-gray-400">1-{documentenData.length} van 134</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs min-w-162.5">
            <thead>
              <tr className="bg-warm-gray-50 border-b border-warm-gray-200">
                {["ID", "Naam", "Grootte", "Laatst gewijzigd", "Aangemaakt", "Labels"].map((col) => (
                  <th key={col} className="text-left px-3 py-2 text-warm-gray-500 font-medium whitespace-nowrap">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {documentenData.map((doc) => (
                <tr key={doc.id} className="border-b border-warm-gray-50 hover:bg-warm-gray-50/50">
                  <td className="px-3 py-2 text-warm-gray-400">{doc.id}</td>
                  <td className="px-3 py-2 text-navy-900 font-medium whitespace-nowrap">{doc.naam}</td>
                  <td className="px-3 py-2 text-warm-gray-600 tabular-nums">{formatSize(doc.grootte)}</td>
                  <td className="px-3 py-2 text-warm-gray-600">{doc.gewijzigd}</td>
                  <td className="px-3 py-2 text-warm-gray-600">{doc.aangemaakt}</td>
                  <td className="px-3 py-2">
                    <div className="flex gap-1 flex-wrap">
                      {doc.labels.map((label) => (
                        <span key={label} className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-warm-gray-100 text-warm-gray-600">
                          {label}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

/* ─── Organizer: Meeting View + Acties + Besluiten ─── */
function OrganizerContent() {
  const { meeting, genodigden, aanvragen, acties, besluiten, aanvragenSummary } = organizerData;

  return (
    <>
      <ModuleHeading icon="organizer" title="Organizer" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        {/* Meeting details */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-warm-gray-100 shadow-card overflow-hidden">
          <div className="bg-navy-900 px-4 py-2.5">
            <h4 className="text-sm font-semibold text-white">{meeting.title}</h4>
          </div>
          <div className="p-4 space-y-2">
            {[
              { label: "Omschrijving", value: meeting.omschrijving },
              { label: "Start", value: meeting.start },
              { label: "Eind", value: meeting.eind },
              { label: "Locatie", value: meeting.locatie },
              { label: "Notulist", value: meeting.notulist },
              { label: "Gesloten", value: meeting.gesloten },
            ].map((row) => (
              <div key={row.label} className="flex text-xs gap-4">
                <span className="text-warm-gray-400 w-24 shrink-0">{row.label}</span>
                <span className="text-warm-gray-700">{row.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Attendees */}
        <div className="bg-white rounded-lg border border-warm-gray-100 shadow-card overflow-hidden">
          <div className="bg-navy-900 px-4 py-2.5">
            <h4 className="text-sm font-semibold text-white">Genodigden</h4>
          </div>
          <div className="p-4">
            <div className="flex text-[10px] text-warm-gray-400 gap-4 mb-2 pb-1 border-b border-warm-gray-100">
              <span className="grow">Gebruiker</span>
              <span className="w-16 text-center">Aanwezig</span>
              <span className="w-16 text-center">Ondertekend</span>
            </div>
            {genodigden.map((g) => (
              <div key={g.naam} className="flex items-center text-xs gap-4 py-1.5">
                <span className="text-navy-900 font-medium grow">{g.naam}</span>
                <span className="w-16 text-center">{g.aanwezig ? "✓" : ""}</span>
                <span className="w-16 text-center">{g.ondertekend ? "✓" : ""}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Aanvragen summary cards */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { label: "Open aanvragen", count: aanvragenSummary.open.count, bedrag: aanvragenSummary.open.bedrag, color: "bg-blue-50 text-blue-700" },
          { label: "Goedgekeurde aanvragen", count: aanvragenSummary.goedgekeurd.count, bedrag: aanvragenSummary.goedgekeurd.bedrag, color: "bg-green-50 text-green-700" },
          { label: "Afgekeurde aanvragen", count: aanvragenSummary.afgekeurd.count, bedrag: aanvragenSummary.afgekeurd.bedrag, color: "bg-red-50 text-red-700" },
        ].map((card) => (
          <div key={card.label} className="bg-white rounded-lg border border-warm-gray-100 shadow-card p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] text-warm-gray-500 font-medium">{card.label} ({card.count})</span>
            </div>
            <p className="text-sm font-semibold text-navy-900 tabular-nums">&euro; {card.bedrag} &rsaquo;</p>
          </div>
        ))}
      </div>

      {/* Applications table */}
      <div className="bg-white rounded-lg border border-warm-gray-100 shadow-card overflow-hidden">
        <div className="px-4 py-2.5 border-b border-warm-gray-100">
          <h4 className="text-sm font-semibold text-navy-900">Goedgekeurde aanvragen ({aanvragen.length})</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs min-w-150">
            <thead>
              <tr className="bg-warm-gray-50 border-b border-warm-gray-200">
                {["Aanvrager", "Aanvraagnummer", "Status", "Gift", "Lening", "Voor stemmers", "Consensus"].map((col) => (
                  <th key={col} className="text-left px-3 py-2 text-warm-gray-500 font-medium whitespace-nowrap">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {aanvragen.map((a, i) => (
                <tr key={i} className="border-b border-warm-gray-50 hover:bg-warm-gray-50/50">
                  <td className="px-3 py-2 text-navy-700 font-medium">{a.aanvrager}</td>
                  <td className="px-3 py-2 text-warm-gray-600">{a.nummer}</td>
                  <td className="px-3 py-2">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-green-50 text-green-700">
                      {a.status}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-warm-gray-700 tabular-nums">&euro; {a.gift}</td>
                  <td className="px-3 py-2 text-warm-gray-700 tabular-nums">&euro; {a.lening}</td>
                  <td className="px-3 py-2 text-warm-gray-600">{a.stemmer}</td>
                  <td className="px-3 py-2 text-center">✓</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Acties */}
      <div className="bg-white rounded-lg border border-warm-gray-100 shadow-card overflow-hidden mt-4">
        <div className="px-4 py-2.5 border-b border-warm-gray-100">
          <h4 className="text-sm font-semibold text-navy-900">Acties ({acties.length})</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-warm-gray-50 border-b border-warm-gray-200">
                {["Gebruiker", "Omschrijving", "Aangemaakt", "Deadline", "Uitgevoerd"].map((col) => (
                  <th key={col} className="text-left px-3 py-2 text-warm-gray-500 font-medium whitespace-nowrap">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {acties.map((actie, i) => (
                <tr key={i} className="border-b border-warm-gray-50 hover:bg-warm-gray-50/50">
                  <td className="px-3 py-2 text-navy-700 font-medium">{actie.gebruiker}</td>
                  <td className="px-3 py-2 text-warm-gray-600">{actie.omschrijving}</td>
                  <td className="px-3 py-2 text-warm-gray-600">{actie.aangemaakt || "\u2014"}</td>
                  <td className="px-3 py-2 text-warm-gray-600">{actie.deadline}</td>
                  <td className="px-3 py-2 text-warm-gray-500">{actie.uitgevoerd ? "✓" : "✗"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Besluiten */}
      <div className="bg-white rounded-lg border border-warm-gray-100 shadow-card overflow-hidden mt-4">
        <div className="px-4 py-2.5 border-b border-warm-gray-100">
          <h4 className="text-sm font-semibold text-navy-900">Besluiten ({besluiten.length})</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-warm-gray-50 border-b border-warm-gray-200">
                <th className="text-left px-3 py-2 text-warm-gray-500 font-medium">Omschrijving</th>
              </tr>
            </thead>
            <tbody>
              {besluiten.map((besluit, i) => (
                <tr key={i} className="border-b border-warm-gray-50 hover:bg-warm-gray-50/50">
                  <td className="px-3 py-2 text-warm-gray-600">{besluit.omschrijving}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

/* ─── Module Content Dispatcher ─── */
function renderModuleContent(module) {
  switch (module) {
    case "Overzicht":     return <OverzichtContent />;
    case "Rapporten":     return <RapportenContent />;
    case "Boekhouding":   return <BoekhoudingContent />;
    case "Bankzaken":     return <BankzakenContent />;
    case "Projecten":     return <ProjectenContent />;
    case "Facturatie":    return <FacturatieContent />;
    case "Relaties":      return <RelatiesContent />;
    case "Donaties":      return <DonatiesContent />;
    case "Documenten":    return <DocumentenContent />;
    case "Organizer":     return <OrganizerContent />;
    default:              return <OverzichtContent />;
  }
}

/* ─── Interactive Dashboard Mockup ─── */
function DashboardMockup() {
  const [activeModule, setActiveModule] = useState("Overzicht");

  return (
    <div className="flex flex-col items-center">
      {/* Monitor bezel */}
      <div className="w-full rounded-2xl border-8 border-[#1a1a1a] bg-[#1a1a1a] shadow-[0_8px_40px_rgba(0,0,0,0.25)] overflow-hidden">
        {/* Screen area */}
        <div className="rounded-lg overflow-hidden">
          {/* Chrome-style tab bar */}
          <div className="bg-[#dee1e6] pt-2 px-2 flex items-end gap-0">
            {/* Traffic lights */}
            <div className="flex gap-1.5 px-2 pb-2.5 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
            </div>
            {/* Active tab */}
            <div className="flex items-center gap-2 bg-white rounded-t-lg px-4 py-1.5 max-w-48 min-w-0">
              <svg className="w-3.5 h-3.5 shrink-0 text-gold-600" viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="8" r="7" /></svg>
              <span className="text-[11px] text-warm-gray-600 truncate">Mijn Orchestra</span>
              <svg className="w-3 h-3 shrink-0 text-warm-gray-400" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3l6 6M9 3l-6 6" /></svg>
            </div>
            {/* New tab button */}
            <div className="pb-1.5 px-1">
              <svg className="w-4 h-4 text-warm-gray-400" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 3v10M3 8h10" /></svg>
            </div>
          </div>
          {/* Chrome-style address bar */}
          <div className="bg-white px-3 py-1.5 flex items-center gap-2 border-b border-warm-gray-200">
            {/* Nav buttons */}
            <div className="flex items-center gap-1 shrink-0">
              <svg className="w-4 h-4 text-warm-gray-300" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 3L5 8l5 5" /></svg>
              <svg className="w-4 h-4 text-warm-gray-300" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 3l5 5-5 5" /></svg>
              <svg className="w-4 h-4 text-warm-gray-400 ml-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13.5 8A5.5 5.5 0 113 6" /><path d="M1 3.5L3 6l2.5-2" /></svg>
            </div>
            {/* Address bar */}
            <div className="grow flex items-center bg-[#f1f3f4] rounded-full px-3 py-1 gap-2 min-w-0">
              <svg className="w-3 h-3 shrink-0 text-warm-gray-400" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1a4 4 0 00-4 4v2H3a1 1 0 00-1 1v6a1 1 0 001 1h10a1 1 0 001-1V8a1 1 0 00-1-1h-1V5a4 4 0 00-4-4zm2.5 6h-5V5a2.5 2.5 0 015 0v2z" /></svg>
              <span className="text-[11px] text-warm-gray-500 truncate">ofis.orchestrabeheer.nl/{modulePaths[activeModule] || activeModule}</span>
            </div>
            {/* Right icons */}
            <div className="flex items-center gap-1.5 shrink-0">
              <svg className="w-4 h-4 text-warm-gray-400" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 2l1.8 3.6L14 6.4l-3 2.9.7 4.1L8 11.3 4.3 13.4l.7-4.1-3-2.9 4.2-.8z" /></svg>
              <svg className="w-4 h-4 text-warm-gray-400" viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="3" r="1.5" /><circle cx="8" cy="8" r="1.5" /><circle cx="8" cy="13" r="1.5" /></svg>
            </div>
          </div>

          {/* Dashboard body — fixed height, scrollable content */}
          <div className="flex h-[520px] bg-cream">
            {/* Mobile tab bar */}
            <div className="flex sm:hidden overflow-x-auto border-b border-navy-800 bg-navy-900 px-2 py-1.5 gap-1 absolute left-0 right-0 z-10">
              {sidebarItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => setActiveModule(item.label)}
                  className={`shrink-0 px-3 py-1.5 rounded text-[10px] transition-colors whitespace-nowrap cursor-pointer ${
                    activeModule === item.label
                      ? "bg-navy-800 text-white"
                      : "text-navy-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Sidebar */}
            <div className="hidden sm:flex flex-col w-44 bg-navy-900 shrink-0 py-4">
              {sidebarItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => setActiveModule(item.label)}
                  className={`flex items-center gap-2.5 px-4 py-2 text-xs transition-colors text-left cursor-pointer ${
                    activeModule === item.label
                      ? "text-white bg-navy-800 border-l-2 border-gold-500"
                      : "text-navy-300 hover:text-white border-l-2 border-transparent"
                  }`}
                >
                  <SidebarIcon type={item.icon} className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Main content — scrollable */}
            <div className="grow p-4 sm:p-6 overflow-y-auto overflow-x-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeModule}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {renderModuleContent(activeModule)}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Monitor stand */}
      <div className="w-28 h-10 bg-linear-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-b-sm" />
      <div className="w-48 h-2.5 bg-linear-to-b from-[#333] to-[#222] rounded-full shadow-sm" />
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
