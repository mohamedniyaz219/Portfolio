import React, { useMemo } from "react";

/**
 * BlurText - Animated text reveal with blur and directional slide.
 * Props:
 * - text: string (required)
 * - delay: number ms between segments (default 120)
 * - animateBy: 'words' | 'letters' (default 'words')
 * - direction: 'top' | 'bottom' | 'left' | 'right' (default 'top')
 * - onAnimationComplete: () => void (optional)
 * - className: string (optional)
 * - as: element tag, e.g., 'h1' | 'div' | 'span' (default 'h1')
 * - style: React.CSSProperties (optional)
 */
export default function BlurText({
  text,
  delay = 120,
  animateBy = "words",
  direction = "top",
  onAnimationComplete,
  className,
  as: Tag = "h1",
  style,
}) {
  const segments = useMemo(() => {
    if (!text) return [];
    return animateBy === "letters" ? Array.from(text) : text.split(" ");
  }, [text, animateBy]);

  const dirClass = `blur-${direction}`; // blur-top | blur-bottom | blur-left | blur-right

  return (
    <Tag
      className={["blur-text", dirClass, className].filter(Boolean).join(" ")}
      style={style}
    >
      {segments.map((seg, i) => {
        const isSpace = seg === " " && animateBy === "letters";
        const content = isSpace ? "\u00A0" : seg; // preserve spacing
        const isLast = i === segments.length - 1;
        return (
          <span
            key={i}
            className="blur-segment"
            style={{
              animationDelay: `${i * delay}ms`,
              ...(animateBy === "words" && !isLast
                ? { marginRight: "0.35em" }
                : null),
            }}
            onAnimationEnd={isLast ? onAnimationComplete : undefined}
          >
            {content}
          </span>
        );
      })}
    </Tag>
  );
}
