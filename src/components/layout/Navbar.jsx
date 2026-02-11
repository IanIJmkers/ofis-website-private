import { useState } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { navigation } from "../../data/navigation";
import { siteMetadata } from "../../data/siteMetadata";
import useScrollDirection from "../../hooks/useScrollDirection";
import NavDropdown from "./NavDropdown";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollDirection, scrollY } = useScrollDirection();
  const location = useLocation();

  const isScrolled = scrollY > 20;
  const isHidden = scrollDirection === "down" && scrollY > 200;

  const isHomePage = location.pathname === "/";
  const useTransparent = isHomePage && !isScrolled;

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          useTransparent
            ? "bg-transparent"
            : "bg-white/95 backdrop-blur-md shadow-nav"
        }`}
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <span
                className={`text-2xl font-heading ${
                  useTransparent ? "text-white" : "text-navy-900"
                }`}
              >
                {siteMetadata.companyName}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && setOpenDropdown(item.path)
                  }
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 relative group ${
                      useTransparent
                        ? "text-white/90 hover:text-white"
                        : "text-warm-gray-600 hover:text-navy-900"
                    } ${
                      location.pathname === item.path ||
                      location.pathname.startsWith(item.path + "/")
                        ? useTransparent
                          ? "text-white"
                          : "text-navy-900"
                        : ""
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <svg
                        className="inline-block ml-1 w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                    <span
                      className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gold-700 transition-transform duration-200 origin-left ${
                        location.pathname === item.path ||
                        location.pathname.startsWith(item.path + "/")
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && openDropdown === item.path && (
                      <NavDropdown items={item.children} />
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={siteMetadata.myOrchestra}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase bg-gold-700 text-white rounded-md hover:bg-gold-600 transition-colors duration-200"
              >
                Mijn Orchestra
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <svg
                className={`w-6 h-6 ${
                  useTransparent ? "text-white" : "text-navy-900"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
