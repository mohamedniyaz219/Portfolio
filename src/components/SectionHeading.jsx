import ScrollFloat from "./ScrollFloat.jsx";

export default function SectionHeading({ children, as = "h2" }) {
  return (
    <div className="section-heading text-center animate__animated animate__fadeInUp">
      <ScrollFloat
        as={as}
        scrollStart="top bottom"
        scrub={false}
        once
        toggleActions="play none none none"
        animationDuration={0.7}
        stagger={0.06}
        textClassName=""
      >
        {children}
      </ScrollFloat>
    </div>
  );
}
