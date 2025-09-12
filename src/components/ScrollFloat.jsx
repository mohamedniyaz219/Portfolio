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

    const ctx = gsap.context(() => {
      const stConfig = {
        trigger: el,
        scroller,
        start: scrollStart,
        once,
        toggleActions,
      };
      if (scrub) {
        stConfig.scrub = true;
        stConfig.end = scrollEnd;
      }
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
          duration: animationDuration,
          ease,
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          stagger,
          scrollTrigger: stConfig,
        }
      );
    }, el);

    return () => ctx.revert();
  }, [
    scrollContainerRef,
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger,
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
