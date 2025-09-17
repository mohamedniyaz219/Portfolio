import React, { useEffect, useMemo, useRef, useState } from "react";
export default function LogoLoop({
  logos = [],
  speed = 100,
  direction = "left",
  logoHeight = 36,
  gap = 32,
  pauseOnHover = false,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = "var(--color-bg)",
  ariaLabel = "Scrolling logos",
}) {
  const groupRef = useRef(null);
  const [duration, setDuration] = useState(20);

  const items = useMemo(() => logos.filter(Boolean), [logos]);

  useEffect(() => {
    function computeDuration() {
      const el = groupRef.current;
      if (!el) return;
      const width = el.getBoundingClientRect().width;
      const pxPerSec = Math.max(20, speed || 100);
      const seconds = width / pxPerSec;
      setDuration(Math.max(6, Math.min(90, seconds)));
    }
    computeDuration();
    const ro = new ResizeObserver(computeDuration);
    if (groupRef.current) ro.observe(groupRef.current);
    window.addEventListener("resize", computeDuration);
    return () => {
      window.removeEventListener("resize", computeDuration);
      ro.disconnect();
    };
  }, [speed, items]);

  const styleVars = {
    "--logo-height": `${logoHeight}px`,
    "--gap": `${gap}px`,
    "--loop-duration": `${duration}s`,
    "--fade-color": fadeOutColor,
  };

  const loopClass = [
    "logo-loop",
    fadeOut ? "logo-loop--fade" : "",
    pauseOnHover ? "logo-loop--pause" : "",
    scaleOnHover ? "logo-loop--scale" : "",
    direction === "right" ? "logo-loop--right" : "logo-loop--left",
  ]
    .filter(Boolean)
    .join(" ");

  const renderItem = (item, idx) => {
    const content = item.node ? (
      React.isValidElement(item.node) ? (
        React.cloneElement(item.node, {
          size: logoHeight,
          style: {
            ...(item.node.props?.style || {}),
            width: logoHeight,
            height: logoHeight,
          },
        })
      ) : (
        item.node
      )
    ) : item.src ? (
      <img
        src={item.src}
        alt={item.alt || item.title || "logo"}
        style={{ height: logoHeight, width: "auto" }}
        loading="lazy"
      />
    ) : null;

    const inner = (
      <div className="logo-item" title={item.title || undefined}>
        {content}
      </div>
    );

    return item.href ? (
      <a
        key={idx}
        className="logo-link"
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={item.title || item.alt || "Logo link"}
      >
        {inner}
      </a>
    ) : (
      <div key={idx} className="logo-link" aria-hidden>
        {inner}
      </div>
    );
  };

  if (!items.length) return null;

  return (
    <div
      className={loopClass}
      style={styleVars}
      aria-label={ariaLabel}
      role="marquee"
    >
      <div className="logo-viewport">
        <div className="loop-track">
          <div className="loop-group" ref={groupRef}>
            {items.map(renderItem)}
          </div>
          <div className="loop-group" aria-hidden>
            {items.map((it, i) => renderItem(it, `dup-${i}`))}
          </div>
        </div>
        {fadeOut && (
          <>
            <div className="loop-fade loop-fade--left" />
            <div className="loop-fade loop-fade--right" />
          </>
        )}
      </div>
    </div>
  );
}
