import { Link } from "react-router";
import { siteMetadata } from "../../data/siteMetadata";
import { regulators } from "../../data/regulators";

const quickLinks = [
  { label: "De Essentie", path: "/de-essentie" },
  { label: "Uw Private Office", path: "/uw-private-office" },
  { label: "Over Ons", path: "/over-ons" },
  { label: "Nieuws & Opinie", path: "/nieuws-opinie" },
  { label: "Contact", path: "/contact" },
];

const legalLinks = [
  { label: "Algemene Voorwaarden Orchestra B.V.", path: "#" },
  { label: "Algemene Voorwaarden Orchestra G&A", path: "#" },
  { label: "Algemene Voorwaarden MyOrchestra BV", path: "#" },
  { label: "Privacy- & Cookiebeleid", path: "#" },
  { label: "Duurzaamheidsverklaring", path: "#" },
  { label: "Beloningsbeleid", path: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company */}
          <div>
            <h3 className="text-2xl font-heading text-white mb-4">
              {siteMetadata.companyName}
            </h3>
            <p className="text-navy-300 text-sm leading-relaxed mb-6">
              {siteMetadata.description}
            </p>
            <a
              href={siteMetadata.linkedin}
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
              Snelkoppelingen
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
              Juridisch
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
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

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-gold-400 mb-6">
              Contact
            </h4>
            <address className="not-italic space-y-3 text-sm text-navy-300">
              <p>
                {siteMetadata.address.street}
                <br />
                {siteMetadata.address.postalCode} {siteMetadata.address.city}
                <br />
                {siteMetadata.address.country}
              </p>
              <p>
                <a
                  href={`tel:${siteMetadata.phone.replace(/\s/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {siteMetadata.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteMetadata.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteMetadata.email}
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
            {regulators.map((reg) => (
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
            &copy; {new Date().getFullYear()} {siteMetadata.fullName}. Alle
            rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
