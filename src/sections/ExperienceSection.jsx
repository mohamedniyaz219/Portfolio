import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import SectionHeading from "../components/SectionHeading.jsx";
import FadeInUp from "../components/FadeInUp.jsx";
import AnimatedList from "../components/AnimatedList.jsx";
import LogoLoop from "../components/LogoLoop.jsx";
import officeWorkLottie from "../assets/lottie/Office work.lottie?url";

export default function ExperienceSection({
  experiences,
  loopLogos,
  onSelectExperience,
}) {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <SectionHeading>Professional Experience</SectionHeading>

        <div className="experience-grid">
          <FadeInUp as="div" delay={80}>
            <div className="experience-panel">
              <AnimatedList
                items={experiences.map(
                  (e) => `${e.role} · ${e.company} · ${e.duration}`
                )}
                onItemSelect={(_, idx) => onSelectExperience(idx)}
              />
            </div>
          </FadeInUp>

          <FadeInUp as="div" delay={160}>
            <div className="experience-lottie">
              <DotLottieReact src={officeWorkLottie} loop autoplay />
            </div>
          </FadeInUp>
        </div>

        <FadeInUp as="div" className="skills-loop" delay={260}>
          <LogoLoop
            logos={loopLogos}
            speed={120}
            direction="left"
            logoHeight={32}
            gap={36}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="var(--color-bg)"
            ariaLabel="Technology logos"
          />
        </FadeInUp>
      </div>
    </section>
  );
}
