import { useState } from "react";
import { motion } from "motion/react";
import PageTransition from "../components/animation/PageTransition";
import AnimatedSection from "../components/animation/AnimatedSection";
import SectionWrapper from "../components/layout/SectionWrapper";
import Button from "../components/ui/Button";
import CTASection from "../components/sections/CTASection";
import { siteMetadata } from "../data/siteMetadata";

export default function Contact() {
  const [form, setForm] = useState({
    helpType: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const showName = form.helpType === "vraag" || form.helpType === "afspraak";
  const showEmail = form.helpType === "vraag" || form.helpType === "nieuwsbrief";
  const showPhone = form.helpType === "vraag" || form.helpType === "afspraak";
  const showMessage = form.helpType === "vraag";

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
            Neem Contact Op
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading text-white leading-[1.1] mb-6"
          >
            Neem Contact Op
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg text-navy-200 leading-relaxed max-w-2xl"
          >
            Wij bespreken graag hoe Orchestra uw vermogen beheerst kan maken.
            Neem contact op voor een vrijblijvend gesprek met een van onze
            specialisten.
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
                Stuur Ons een Bericht
              </h2>
              <div className="h-0.75 w-10 bg-gold-700 mb-6" />
              <p className="text-sm text-warm-gray-500 leading-relaxed mb-8">
                Vul het onderstaande formulier in en wij nemen binnen twee
                werkdagen contact met u op.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Help type dropdown */}
                <div>
                  <label
                    htmlFor="helpType"
                    className="block text-xs font-body font-semibold tracking-wider uppercase text-navy-800 mb-2"
                  >
                    Waar kunnen wij u mee helpen?{" "}
                    <span className="text-gold-700">*</span>
                  </label>
                  <select
                    id="helpType"
                    name="helpType"
                    required
                    value={form.helpType}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="">Selecteer een optie</option>
                    <option value="vraag">Ik heb een vraag</option>
                    <option value="afspraak">
                      Ik wil gebeld worden voor een afspraak
                    </option>
                    <option value="nieuwsbrief">
                      Ik wil nieuwsbrieven ontvangen
                    </option>
                  </select>
                </div>

                {/* Conditional fields */}
                {form.helpType && (
                  <>
                    {/* Name */}
                    {showName && (
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-body font-semibold tracking-wider uppercase text-navy-800 mb-2"
                        >
                          Naam <span className="text-gold-700">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Uw volledige naam"
                          className={inputClasses}
                        />
                      </div>
                    )}

                    {/* Email + Phone row */}
                    {(showEmail || showPhone) && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {showEmail && (
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-xs font-body font-semibold tracking-wider uppercase text-navy-800 mb-2"
                            >
                              E-mail <span className="text-gold-700">*</span>
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={form.email}
                              onChange={handleChange}
                              placeholder="you@example.com"
                              className={inputClasses}
                            />
                          </div>
                        )}
                        {showPhone && (
                          <div>
                            <label
                              htmlFor="phone"
                              className="block text-xs font-body font-semibold tracking-wider uppercase text-navy-800 mb-2"
                            >
                              Telefoon{" "}
                              {form.helpType === "afspraak" && (
                                <span className="text-gold-700">*</span>
                              )}
                            </label>
                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              required={form.helpType === "afspraak"}
                              value={form.phone}
                              onChange={handleChange}
                              placeholder="+31 (0)6 ..."
                              className={inputClasses}
                            />
                          </div>
                        )}
                      </div>
                    )}

                    {/* Message */}
                    {showMessage && (
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-xs font-body font-semibold tracking-wider uppercase text-navy-800 mb-2"
                        >
                          Bericht <span className="text-gold-700">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Hoe kunnen wij u helpen?"
                          className={`${inputClasses} resize-none`}
                        />
                      </div>
                    )}

                    <Button type="submit" variant="primary" size="lg">
                      Verzenden
                    </Button>
                  </>
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
                  Contactgegevens
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
                      Adres
                    </p>
                    <p className="text-sm text-navy-900 leading-relaxed">
                      {siteMetadata.address.street}
                      <br />
                      {siteMetadata.address.postalCode}{" "}
                      {siteMetadata.address.city}
                      <br />
                      {siteMetadata.address.country}
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
                      Telefoon
                    </p>
                    <a
                      href={`tel:${siteMetadata.phone.replace(/\s/g, "")}`}
                      className="text-sm text-navy-900 hover:text-gold-700 transition-colors duration-200"
                    >
                      {siteMetadata.phone}
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
                      E-mail
                    </p>
                    <a
                      href={`mailto:${siteMetadata.email}`}
                      className="text-sm text-navy-900 hover:text-gold-700 transition-colors duration-200 break-all"
                    >
                      {siteMetadata.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Parking info */}
              <div className="bg-white rounded-lg shadow-card p-8">
                <h3 className="text-lg font-heading text-navy-900 mb-4">
                  Parkeren
                </h3>
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
                        d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-warm-gray-500 leading-relaxed">
                    {siteMetadata.parkingInstructions}
                  </p>
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
                  Volg Ons op LinkedIn
                </h3>
                <p className="text-sm text-navy-200 mb-6">
                  Blijf op de hoogte van ons laatste nieuws en inzichten.
                </p>
                <Button
                  href={siteMetadata.linkedin}
                  external
                  variant="outline-light"
                  size="md"
                >
                  Bezoek LinkedIn
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      <CTASection
        title="Liever een persoonlijk gesprek?"
        subtitle="Ons team is beschikbaar voor een persoonlijke ontmoeting op ons kantoor in Den Haag of via een videogesprek."
      />
    </PageTransition>
  );
}
