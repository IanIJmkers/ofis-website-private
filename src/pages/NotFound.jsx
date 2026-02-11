import { motion } from "motion/react";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy-900 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-navy-950 via-navy-900 to-navy-800" />

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-white/20" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full border border-white/10" />
      </div>

      <div className="relative text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs font-body font-semibold tracking-[0.25em] uppercase text-gold-400 mb-6"
        >
          Fout
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[8rem] sm:text-[10rem] lg:text-[12rem] font-heading text-white leading-none mb-2"
        >
          404
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="h-0.75 w-16 bg-gold-700 mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-2xl sm:text-3xl font-heading text-white mb-4"
        >
          Pagina niet gevonden
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base text-navy-200 max-w-md mx-auto mb-10 leading-relaxed"
        >
          De pagina die u zoekt bestaat niet of is verplaatst.
          Laat ons u terugbrengen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Button href="/" variant="primary" size="lg">
            Terug naar Home
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
