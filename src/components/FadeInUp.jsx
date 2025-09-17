import React, { useEffect, useRef, useState } from "react";
export default function FadeInUp({
  as = "div",
  children,
  className = "",
  style,
  delay = 0,
  once = true,
  threshold = 0.15,
  root = null,
  rootMargin = "0px",
}) {
  const Tag = as || "div";
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, root, rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold, root, rootMargin]);

  const combinedClass = [
    className,
    visible ? "animate__animated animate__fadeInUp" : "pre-animate",
  ]
    .filter(Boolean)
    .join(" ");

  const combinedStyle = {
    ...(style || {}),
    ...(delay ? { animationDelay: `${delay}ms` } : {}),
  };

  return (
    <Tag ref={ref} className={combinedClass} style={combinedStyle}>
      {children}
    </Tag>
  );
}
