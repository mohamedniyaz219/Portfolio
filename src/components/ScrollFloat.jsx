import React, { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  containerStyle,
  textStyle,
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "top bottom",
  scrollEnd = "bottom center",
  stagger = 0.03,
  scrub = false,
  once = true,
  toggleActions = "play none none none",
  as: Tag = "h2",
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split("").map((char, index) => (
      <span className="inline-block word" key={index}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const charElements = el.querySelectorAll(".inline-block");

    const stBase = {
      trigger: el,
      scroller,
      start: scrollStart,
      once,
      toggleActions,
    };
    if (scrub) {
      stBase.scrub = true;
      stBase.end = scrollEnd;
    }

    const mm = gsap.matchMedia();

    const build = (dur, stag) =>
      gsap.fromTo(
        charElements,
        {
          willChange: "opacity, transform",
          opacity: 0,
          yPercent: 120,
          scaleY: 2.3,
          scaleX: 0.7,
          transformOrigin: "50% 0%",
        },
        {
          duration: dur,
          ease,
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          stagger: stag,
          scrollTrigger: stBase,
        }
      );

    // Under 640px: shorter duration and stagger for tighter pacing
    mm.add("(max-width: 640px)", () => {
      const dur = Math.max(0.5, animationDuration * 0.85);
      const stag = Math.max(0.02, stagger * 0.8);
      return build(dur, stag);
    });

    // 641px and up: use provided values
    mm.add("(min-width: 641px)", () => build(animationDuration, stagger));

    return () => mm.revert();
  }, [
    scrollContainerRef,
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger,
    scrub,
    once,
    toggleActions,
  ]);

  return (
    <Tag
      ref={containerRef}
      className={containerClassName}
      style={{ overflow: "hidden", ...(containerStyle || {}) }}
    >
      <span
        className={`inline-block ${textClassName}`}
        style={{
          display: "inline-block",
          lineHeight: 1.2,
          ...(textStyle || {}),
        }}
      >
        {splitText}
      </span>
    </Tag>
  );
};

export default ScrollFloat;
