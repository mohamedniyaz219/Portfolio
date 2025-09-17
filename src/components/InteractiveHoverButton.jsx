import React, { useCallback, useRef } from "react";
export default function InteractiveHoverButton({
  text,
  children,
  className = "",
  variant = "primary",
  href,
  onMouseMove,
  onMouseLeave,
  ...rest
}) {
  const ref = useRef(null);

  const handleMouseMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
      onMouseMove && onMouseMove(e);
    },
    [onMouseMove]
  );

  const handleMouseLeave = useCallback(
    (e) => {
      const el = ref.current;
      if (el) {
        el.style.removeProperty("--x");
        el.style.removeProperty("--y");
      }
      onMouseLeave && onMouseLeave(e);
    },
    [onMouseLeave]
  );

  const classes = [
    "ihb",
    variant === "outline" ? "ihb--outline" : "ihb--primary",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <span className="ihb-label">{children || text || "Button"}</span>
  );

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        className={classes}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type="button"
      className={classes}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {content}
    </button>
  );
}
