import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export function VideoModal({
  open,
  src,
  title,
  onClose,
}: {
  open: boolean;
  src: string;
  title: string;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[90] grid place-items-center bg-background/70 p-4 backdrop-blur-lg"
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong relative w-full max-w-4xl overflow-hidden rounded-2xl shadow-elevated"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <div>
                <p className="text-xs uppercase tracking-widest text-primary">Demo</p>
                <h3 className="font-display text-base font-bold">{title}</h3>
              </div>
              <button
                onClick={onClose}
                className="grid h-9 w-9 place-items-center rounded-lg border border-border text-foreground transition hover:border-primary/50 hover:text-primary"
                aria-label="Close video"
              >
                <X size={16} />
              </button>
            </div>
            <video
              src={src}
              controls
              autoPlay
              playsInline
              className="aspect-video w-full bg-black"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
