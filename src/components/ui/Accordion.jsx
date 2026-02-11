import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Accordion({ items, className = "" }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`border rounded-lg transition-colors duration-200 ${
            openIndex === index
              ? "border-l-4 border-l-gold-700 border-warm-gray-200"
              : "border-warm-gray-200"
          }`}
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between p-5 text-left"
          >
            <span className="font-heading text-lg text-navy-900 pr-4">
              {item.question}
            </span>
            <span className="shrink-0 text-gold-700 text-xl">
              {openIndex === index ? "\u2212" : "+"}
            </span>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5 text-warm-gray-500 leading-relaxed">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
