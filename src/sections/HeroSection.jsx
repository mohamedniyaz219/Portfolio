import BlurText from "../components/BlurText.jsx";
import TypewriterText from "../components/TypewriterText.jsx";
import InteractiveHoverButton from "../components/InteractiveHoverButton.jsx";
import Orb from "../components/Orb.jsx";
import FadeInUp from "../components/FadeInUp.jsx";
import { FaGithub, FaLinkedin, FaEnvelope, FaMediumM } from "react-icons/fa";
import resumePdf from "../assets/Mohamed-Niyaz-A-Resume.pdf?url";

export default function HeroSection() {
  return (
    <section id="hero" className="hero-section text-center">
      <div className="spline-bg" aria-hidden="true">
        <Orb
          hue={75}
          hoverIntensity={0.22}
          rotateOnHover
          forceHoverState={false}
        />
      </div>
      <header
        className="container hero-header"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "1.5rem",
          marginTop: "0.25rem",
        }}
      >
        <a
          href={
            import.meta.env.VITE_SOCIAL_GITHUB ||
            "https://github.com/mohamedniyaz219"
          }
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
          className="social-link"
        >
          <FaGithub size={28} />
        </a>
        <a
          href={
            import.meta.env.VITE_SOCIAL_LINKEDIN ||
            "https://www.linkedin.com/in/mohamedniyaz219/"
          }
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
          className="social-link"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href={`mailto:${
            import.meta.env.VITE_CONTACT_EMAIL || "mohamed.niyaz219@gmail.com"
          }`}
          aria-label="Email"
          className="social-link"
        >
          <FaEnvelope size={28} />
        </a>
        <a
          href={
            import.meta.env.VITE_SOCIAL_MEDIUM ||
            "https://medium.com/@mohamed.niyaz219"
          }
          target="_blank"
          rel="noopener"
          aria-label="Medium"
          className="social-link"
        >
          <FaMediumM size={28} />
        </a>
      </header>
      <div className="container hero-content">
        <BlurText
          text="Mohamed Niyaz"
          delay={200}
          animateBy="words"
          direction="bottom"
          className=""
          as="h1"
          style={{
            fontSize: "clamp(2.6rem,4vw,3.2rem)",
            fontWeight: 550,
            margin: "0 0 1rem",
            color: "var(--color-text)",
          }}
        />
        <TypewriterText
          text="A final-year Software Engineering student passionate about building scalable web applications and solving complex problems."
          speed={28}
          startDelay={650}
          as="p"
          className=""
          style={{
            fontSize: "1.15rem",
            color: "var(--color-text-soft)",
            maxWidth: 820,
            margin: "0 auto 2rem",
          }}
          ariaLabel="Intro summary typed text"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
            marginTop: "0.5rem",
          }}
        >
          <FadeInUp delay={850}>
            <InteractiveHoverButton href="#projects" variant="primary">
              View My Projects
            </InteractiveHoverButton>
          </FadeInUp>
          <FadeInUp delay={950}>
            <InteractiveHoverButton
              href="https://drive.google.com/file/d/1lG2rVEfW0l1N9ce0yyXJZqyEzft7Pfzi/view?usp=sharing"
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </InteractiveHoverButton>
          </FadeInUp>
          {/* <FadeInUp delay={1050}>
            <InteractiveHoverButton
              href={resumePdf}
              variant="outline"
              download="Mohamed-Niyaz-A-Resume.pdf"
            >
              Download Resume
            </InteractiveHoverButton>
          </FadeInUp> */}
        </div>
      </div>
    </section>
  );
}
