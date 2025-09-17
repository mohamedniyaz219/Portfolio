import { useMemo, createElement } from "react";
export default function BlurText({
  text,
  delay = 120,
  animateBy = "words",
  direction = "top",
  onAnimationComplete,
  className,
  as: asTag = "h1",
  style,
}) {
  const segments = useMemo(() => {
    if (!text) return [];
    return animateBy === "letters" ? Array.from(text) : text.split(" ");
  }, [text, animateBy]);

  const dirClass = `blur-${direction}`;

  return createElement(
    asTag,
    {
      className: ["blur-text", dirClass, className].filter(Boolean).join(" "),
      style,
    },
    segments.map((seg, i) => {
      const isSpace = seg === " " && animateBy === "letters";
      const content = isSpace ? "\u00A0" : seg;
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
    })
  );
}
