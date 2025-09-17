import SectionHeading from "../components/SectionHeading.jsx";
import FadeInUp from "../components/FadeInUp.jsx";
import { createElement } from "react";

export default function SkillsSection({ skills }) {
  return (
    <section id="skills" className="container section-full">
      <SectionHeading>My Technical Skills</SectionHeading>
      <div className="skills-grid">
        {skills.map((s, idx) => (
          <FadeInUp key={idx} as="div" className="skill-card" delay={idx * 40}>
            <div className="skill-icon" style={{ color: s.color }}>
              {createElement(s.Icon, { size: 28 })}
            </div>
            <div className="skill-name">{s.name.toUpperCase()}</div>
          </FadeInUp>
        ))}
      </div>
    </section>
  );
}
