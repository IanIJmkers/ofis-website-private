import { useState } from "react";
import { motion } from "motion/react";
import PageTransition from "../components/animation/PageTransition";
import AnimatedSection from "../components/animation/AnimatedSection";
import SectionWrapper from "../components/layout/SectionWrapper";
import Button from "../components/ui/Button";
import CTASection from "../components/sections/CTASection";
import { getSiteMetadata } from "../data/siteMetadata";
import { submitContactForm } from "../lib/contact";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { language, t } = useLanguage();
  const metadata = getSiteMetadata(language);

  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await submitContactForm(form);
      setStatus("success");
      setForm({
        name: "",
        organization: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full px-4 py-3 bg-white border border-warm-gray-200 rounded-md font-body text-sm text-navy-900 placeholder:text-warm-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-colors duration-200";

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full border border-white/20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block text-xs font-body font-semibold tracking-[0.25em] uppercase text-gold-400 mb-4"
          >
            {t("contact", "heroEyebrow")}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading text-white leading-[1.1] mb-6"
          >
            {t("contact", "heroTitle")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg text-navy-200 leading-relaxed max-w-2xl"
          >
            {t("contact", "heroDescription")}
          </motion.p>
        </div>
      </section>

      {/* Contact form + info */}
      <SectionWrapper bg="cream" size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Form */}
          <AnimatedSection className="lg:col-span-3" direction="left">
            <div className="bg-white rounded-lg shadow-card p-8 sm:p-10">
              <h2 className="text-2xl font-heading text-navy-900 mb-2">
                {t("contact", "formTitle")}
              </h2>
              <div className="h-0.75 w-10 bg-gold-700 mb-6" />
              <p className="text-sm text-warm-gray-500 leading-relaxed mb-8">
                {t("contact", "formDescription")}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name + Organisation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-body font-semibold tracking-wider uppercase text-navy-800 mb-2"
                    >
                      {t("contact", "labelName")}{" "}
                      <span className="text-gold-700">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder={t("contact", "placeholderName")}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-xs font-body font-semibold tracking-wider uppercase text-navy-800 mb-2"
                    >
                      {t("contact", "labelOrganization")}
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      value={form.organization}
                      onChange={handleChange}
                      placeholder={t("contact", "placeholderOrg")}
                      className={inputClasses}
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-body font-semibold tracking-wider uppercase text-navy-800 mb-2"
                    >
                      {t("contact", "labelEmail")}{" "}
                      <span className="text-gold-700">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder={t("contact", "placeholderEmail")}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-body font-semibold tracking-wider uppercase text-navy-800 mb-2"
                    >
                      {t("contact", "labelPhone")}{" "}
                      <span className="text-gold-700">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder={t("contact", "placeholderPhone")}
                      className={inputClasses}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-body font-semibold tracking-wider uppercase text-navy-800 mb-2"
                  >
                    {t("contact", "labelMessage")}{" "}
                    <span className="text-gold-700">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t("contact", "placeholderMessage")}
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={status === "sending"}
                >
                  {status === "sending"
                    ? t("contact", "submitSending")
                    : t("contact", "submitButton")}
                </Button>

                {status === "success" && (
                  <div className="mt-4 p-4 rounded-md bg-green-50 border border-green-200">
                    <p className="text-sm font-semibold text-green-800">
                      {t("contact", "successTitle")}
                    </p>
                    <p className="text-sm text-green-700 mt-1">
                      {t("contact", "successMessage")}
                    </p>
                  </div>
                )}

                {status === "error" && (
                  <div className="mt-4 p-4 rounded-md bg-red-50 border border-red-200">
                    <p className="text-sm text-red-700">
                      {t("contact", "errorMessage")}
                    </p>
                  </div>
                )}
              </form>
            </div>
          </AnimatedSection>

          {/* Right: Contact info */}
          <AnimatedSection
            className="lg:col-span-2"
            direction="right"
            delay={0.15}
          >
            <div className="space-y-8">
              {/* Contact info card */}
              <div className="bg-white rounded-lg shadow-card p-8">
                <h3 className="text-lg font-heading text-navy-900 mb-6">
                  {t("contact", "contactDetailsTitle")}
                </h3>

                {/* Address */}
                <div className="flex gap-4 mb-6">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-navy-50 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-navy-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-body font-semibold tracking-wider uppercase text-warm-gray-400 mb-1">
                      {t("contact", "addressLabel")}
                    </p>
                    <p className="text-sm text-navy-900 leading-relaxed">
                      {metadata.address.street}
                      <br />
                      {metadata.address.postalCode} {metadata.address.city}
                      <br />
                      {metadata.address.country}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 mb-6">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-navy-50 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-navy-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-body font-semibold tracking-wider uppercase text-warm-gray-400 mb-1">
                      {t("contact", "phoneLabel")}
                    </p>
                    <a
                      href={`tel:${metadata.phone.replace(/\s/g, "")}`}
                      className="text-sm text-navy-900 hover:text-gold-700 transition-colors duration-200"
                    >
                      {metadata.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-navy-50 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-navy-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-body font-semibold tracking-wider uppercase text-warm-gray-400 mb-1">
                      {t("contact", "emailLabel")}
                    </p>
                    <a
                      href={`mailto:${metadata.email}`}
                      className="text-sm text-navy-900 hover:text-gold-700 transition-colors duration-200 break-all"
                    >
                      {metadata.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* LinkedIn card */}
              <div className="bg-navy-900 rounded-lg p-8 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <h3 className="text-lg font-heading text-white mb-2">
                  {t("contact", "linkedInTitle")}
                </h3>
                <p className="text-sm text-navy-200 mb-6">
                  {t("contact", "linkedInDesc")}
                </p>
                <Button
                  href={metadata.linkedin}
                  external
                  variant="outline-light"
                  size="md"
                >
                  {t("contact", "linkedInButton")}
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      <CTASection
        title={t("contact", "ctaTitle")}
        subtitle={t("contact", "ctaSubtitle")}
      />
    </PageTransition>
  );
}
