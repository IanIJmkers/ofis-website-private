import { useState, useCallback } from "react";
import { Link } from "react-router";
import { useLanguage } from "../../context/LanguageContext";
import { getSiteMetadata } from "../../data/siteMetadata";
import { getRegulators } from "../../data/regulators";
import PdfModal from "../ui/PdfModal";
import orchestraWhite from "../../assets/images/OrchestraWhite.png";

const quickLinkPaths = [
  "/de-essentie",
  "/uw-private-office",
  "/over-ons",
  "/nieuws-opinie",
  "/contact",
];

const legalDocs = [
  { key: "legalLink1", src: "/docs/voorwaarden-orchestra-bv.pdf" },
  { key: "legalLink2", src: "/docs/voorwaarden-orchestra-ga.pdf" },
  { key: "legalLink3", src: "/docs/voorwaarden-myorchestra.pdf" },
  { key: "legalLink4", src: "/docs/privacy-cookieverklaring.pdf" },
  { key: "legalLink5", src: "/docs/duurzaamheid.pdf" },
  { key: "legalLink6", src: "/docs/beloningsbeleid.pdf" },
];

export default function Footer() {
  const { language, t } = useLanguage();
  const meta = getSiteMetadata(language);
  const regs = getRegulators(language);

  const [pdfModal, setPdfModal] = useState({ open: false, src: "", title: "" });
  const openPdf = useCallback((src, title) => setPdfModal({ open: true, src, title }), []);
  const closePdf = useCallback(() => setPdfModal({ open: false, src: "", title: "" }), []);

  const quickLinks = quickLinkPaths.map((path, i) => ({
    label: t("footer", `quickLink${i + 1}`),
    path,
  }));

  const legalLinks = legalDocs.map((doc) => ({
    label: t("footer", doc.key),
    src: doc.src,
  }));

  return (
    <>
      <footer className="bg-navy-900">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Company */}
            <div>
              <img
                src={orchestraWhite}
                alt="Orchestra"
                className="h-8 w-auto mb-4"
              />
              <p className="text-navy-300 text-sm leading-relaxed mb-6">
                {meta.description}
              </p>
              <a
                href={meta.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-navy-300 hover:text-gold-400 transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold tracking-wider uppercase text-gold-400 mb-6">
                {t("footer", "quickLinksTitle")}
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-navy-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold tracking-wider uppercase text-gold-400 mb-6">
                {t("footer", "legalTitle")}
              </h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => openPdf(link.src, link.label)}
                      className="text-sm text-navy-300 hover:text-white transition-colors duration-200 cursor-pointer text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold tracking-wider uppercase text-gold-400 mb-6">
                {t("footer", "contactTitle")}
              </h4>
              <address className="not-italic space-y-3 text-sm text-navy-300">
                <p>
                  {meta.address.street}
                  <br />
                  {meta.address.postalCode} {meta.address.city}
                  <br />
                  {meta.address.country}
                </p>
                <p>
                  <a
                    href={`tel:${meta.phone.replace(/\s/g, "")}`}
                    className="hover:text-white transition-colors"
                  >
                    {meta.phone}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${meta.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {meta.email}
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
            {/* Regulatory badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
              {regs.map((reg) => (
                <span
                  key={reg.abbreviation}
                  className="text-xs text-navy-400 font-medium tracking-wide"
                  title={reg.name}
                >
                  {reg.abbreviation}
                </span>
              ))}
            </div>
            <p className="text-center text-xs text-navy-500">
              &copy; {new Date().getFullYear()} {meta.fullName}.{" "}
              {t("footer", "allRightsReserved")}
            </p>
          </div>
        </div>
      </footer>

      <PdfModal
        isOpen={pdfModal.open}
        onClose={closePdf}
        src={pdfModal.src}
        title={pdfModal.title}
      />
    </>
  );
}
