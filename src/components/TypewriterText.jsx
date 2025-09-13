import React, { useEffect, useRef, useState } from "react";

export default function TypewriterText({
  text = "",
  speed = 35, // ms per character
  startDelay = 400, // initial delay before typing
  className = "",
  as: Tag = "p",
  showCaret = true,
  onComplete,
  ariaLabel,
  style,
}) {
  const [output, setOutput] = useState("");
  const [done, setDone] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    // Respect reduced-motion preferences
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const noAnim = mql.matches || speed <= 0;

    if (noAnim) {
      setOutput(text);
      setDone(true);
      onComplete && onComplete();
      return;
    }

    let rafId;
    let timeoutId = setTimeout(() => {
      const tick = () => {
        indexRef.current += 1;
        setOutput(text.slice(0, indexRef.current));
        if (indexRef.current >= text.length) {
          setDone(true);
          onComplete && onComplete();
          return;
        }
        rafId = setTimeout(tick, speed);
      };
      tick();
    }, Math.max(0, startDelay));

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(rafId);
    };
  }, [text, speed, startDelay, onComplete]);

  return (
    <Tag className={className} aria-label={ariaLabel} style={style}>
      <span>{output}</span>
      {showCaret && (
        <span
          className={`tw-caret ${done ? "tw-caret--done" : ""}`}
          aria-hidden="true"
        >
          |
        </span>
      )}
    </Tag>
  );
}
