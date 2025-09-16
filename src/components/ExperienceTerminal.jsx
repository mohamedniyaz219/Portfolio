import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ExperienceTerminal({ open, onClose, exp }) {
  const overlayRef = useRef(null);
  const [show, setShow] = useState(open);
  const [closing, setClosing] = useState(false);
  const springIn = { type: "spring", stiffness: 460, damping: 28, mass: 0.7 };

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose?.();
    }
    if (show) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [show, onClose]);

  // Control mount/unmount to allow exit animations (unmount on animation complete)
  useEffect(() => {
    if (open) {
      setShow(true);
      setClosing(false);
    } else if (show) {
      setClosing(true);
    }
  }, [open]);

  // Lock scroll while visible (including during closing)
  useEffect(() => {
    if (!show) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [show]);

  if (!show) return null;

  return (
    <div
      ref={overlayRef}
      className={`modal-overlay ${closing ? "" : "open"}`}
      onMouseDown={(e) => {
        if (e.target === overlayRef.current) onClose?.();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Experience details"
    >
      <motion.div
        className="modal-panel"
        onMouseDown={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, y: 16, opacity: 0 }}
        animate={
          closing
            ? {
                // Bouncy exit: slight up then down and fade
                scale: [1, 1.03, 0.9],
                y: [0, -4, 12],
                opacity: [1, 1, 0],
                transition: {
                  duration: 0.3,
                  times: [0, 0.35, 1],
                  ease: ["easeOut", "easeInOut", "easeIn"],
                },
              }
            : { scale: 1, y: 0, opacity: 1, transition: springIn }
        }
        onAnimationComplete={() => {
          if (closing) {
            setShow(false);
            setClosing(false);
          }
        }}
      >
        <div className="modal-inner">
          <div className="terminal">
            <div className="terminal-bar">
              <span
                className="dot red"
                onClick={onClose}
                role="button"
                aria-label="Close"
              />
              <span className="dot yellow" />
              <span className="dot green" />
              <div className="title">Experience.details</div>
            </div>
            <div className="terminal-body">
              <div className="prompt">$ cat experience.json</div>
              <div className="term-line">
                <strong>Company:</strong> {exp.company}
              </div>
              <div className="term-line">
                <strong>Duration:</strong> {exp.duration}
              </div>
              <div className="term-line">
                <strong>Role:</strong> {exp.role}
              </div>
              <div className="term-line">
                <strong>Description:</strong> {exp.description}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
