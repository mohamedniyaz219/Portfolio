import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import SectionHeading from "../components/SectionHeading.jsx";
import FadeInUp from "../components/FadeInUp.jsx";
import TerminalAbout from "../components/TerminalAbout.jsx";
import aiMarketingLottie from "../assets/lottie/Blogging Black & White.lottie?url";

export default function AboutSection({ aboutRef, showAboutAnim }) {
  return (
    <section id="about" ref={aboutRef} className="container section-full">
      <div className="about-grid">
        <div>
          <SectionHeading>About Me</SectionHeading>
          <FadeInUp as="div" className="about-animation" delay={120}>
            {showAboutAnim && (
              <DotLottieReact
                src={aiMarketingLottie}
                loop
                autoplay
                style={{ width: "min(520px, 90vw)" }}
              />
            )}
          </FadeInUp>
        </div>
        <FadeInUp as="div" delay={240}>
          {showAboutAnim && (
            <TerminalAbout
              lines={[
                "I'm a dedicated and curious software engineering student with a strong foundation in computer science and a passion for turning complex ideas into elegant, user-friendly solutions. I am driven by the challenge of building efficient and scalable software. My goal is to join a forward-thinking company where I can contribute to meaningful projects and continue to grow as an engineer.",
              ]}
            />
          )}
        </FadeInUp>
      </div>
    </section>
  );
}
