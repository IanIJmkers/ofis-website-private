import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function PdfModal({ isOpen, onClose, src, title }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60" onClick={onClose} />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-5xl h-[85vh] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-warm-gray-200 bg-warm-gray-50 shrink-0">
              <h3 className="text-sm font-semibold text-navy-900 truncate pr-4">
                {title}
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href={src}
                  download
                  className="text-xs text-navy-600 hover:text-navy-900 transition-colors"
                >
                  Download
                </a>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-warm-gray-200 transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <svg className="w-4 h-4 text-warm-gray-500" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4l8 8M12 4l-8 8" />
                  </svg>
                </button>
              </div>
            </div>

            {/* PDF viewer */}
            <div className="grow">
              <iframe
                src={src}
                title={title}
                className="w-full h-full border-0"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
