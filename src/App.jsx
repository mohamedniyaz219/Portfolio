import { useState, useEffect, useRef } from "react";
import BlurText from "./BlurText";
import TypewriterText from "./components/TypewriterText.jsx";
import Orb from "./components/Orb.jsx";
import "./App.css"; // restore design system styles
import SimpleNav from "./SimpleNav.jsx";
import TerminalAbout from "./components/TerminalAbout.jsx";
import LogoLoop from "./components/LogoLoop.jsx";
import ScrollFloat from "./components/ScrollFloat.jsx";
import InteractiveHoverButton from "./components/InteractiveHoverButton.jsx";
import CertificateCard from "./components/CertificateCard.jsx";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import aiMarketingLottie from "./assets/Blogging Black & White.lottie?url";
import FadeInUp from "./components/FadeInUp.jsx";
// Removed import for spacediveImg

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaExternalLinkAlt,
  FaCodeBranch,
  FaMediumM,
  FaAws,
  FaJava,
} from "react-icons/fa";
import {
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiReact,
  SiJavascript,
  SiPython,
  SiC,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiUnity,
  SiHtml5,
  SiCss3,
  SiHuggingface,
  SiDocker,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

// Data
const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  {
    title: "SpaceDive",
    desc: "Frontend project which fetches real time data of position of asteroids using NASA public API and displays them in a 3D visualization and their relative positon.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://spacedive-60033339891.development.catalystserverless.in/app/index.html",
    code: "https://github.com/mohamedniyaz219/Nasa-Space-apps-Challenge.git",
    image: `${import.meta.env.BASE_URL}spacedive.png`,
  },
  {
    title: "Thozhilali",
    desc: "A one stop solution to connect technical workers to users.",
    tags: ["HTML", "CSS"],
    demo: "https://www.thozhilali.in/",
    image: `${import.meta.env.BASE_URL}thozhilali.png`,
  },
  {
    title: "SnapTap",
    desc: "A Multi-tenant RBAC application for institures, parents, students and merchants to spend smart within the campus.",
    tags: ["React", "Express", "Node.js", "PostgreSQL", "Python"],
    demo: "#",
    code: "#",
  },
];

function App() {
  // (Active indicator removed in PillNav, state retained if later needed)
  const [activeHref] = useState("#hero");
  const [showAboutAnim, setShowAboutAnim] = useState(false);
  const aboutRef = useRef(null);

  const skills = [
    { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", Icon: SiCss3, color: "#1572B6" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { name: "React", Icon: SiReact, color: "#61DAFB" },
    { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
    { name: "Express.js", Icon: SiExpress, color: "#ffffff" },
    { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
    { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
    { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
    { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
    { name: "Python", Icon: SiPython, color: "#3776AB" },
    { name: "AWS", Icon: FaAws, color: "#FF9900" },
    { name: "Java", Icon: FaJava, color: "#007396" },
    { name: "C", Icon: SiC, color: "#A8B9CC" },
    { name: "Git", Icon: SiGit, color: "#F05032" },
    { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
    { name: "Unity", Icon: SiUnity, color: "#FFFFFF" },
    { name: "Hugging Face", Icon: SiHuggingface, color: "#FF9D00" },
    { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  ];

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2024",
      image: "",
      details: ["Cloud fundamentals", "AWS services", "Billing & Pricing"],
      link: "#",
    },
    {
      title: "Python for Everybody Specialization",
      issuer: "University of Michigan",
      year: "2025",
      image: "",
      details: ["Python Programming", "Data Structures"],
      link: "#",
    },
    {
      title: "Meta Frontend Developer Professional Certificate",
      issuer: "Meta",
      year: "2024",
      image: "",
      details: ["HTML/CSS/JS", "React"],
      link: "#",
    },
  ];

  // Use ALL skills in the logo loop
  const loopLogos = skills.map(({ name, Icon, color }) => ({
    node: <Icon style={{ color }} />, // color preserved; size set by LogoLoop
    title: name,
  }));

  useEffect(() => {
    // Smooth scroll polyfill fallback could go here if needed
  }, []);

  useEffect(() => {
    // Reveal the About animation when the section enters viewport
    const el = aboutRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowAboutAnim(true);
            // Once visible, we can unobserve to avoid retriggering
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ paddingTop: "var(--nav-height)", minHeight: "100vh" }}>
      <SimpleNav />

      {/* Social Links moved inside hero */}

      {/* Hero with Orb (OGL) background */}
      <section id="hero" className="hero-section text-center">
        <div className="spline-bg" aria-hidden="true">
          <Orb
            hue={75}
            hoverIntensity={0.22}
            rotateOnHover={true}
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
            href="https://github.com/mohamedniyaz219"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            className="social-link"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamedniyaz219/"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            className="social-link"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="mailto:mohamed.niyaz219@gmail.com"
            aria-label="Email"
            className="social-link"
          >
            <FaEnvelope size={28} />
          </a>
          <a
            href="https://medium.com/@mohamed.niyaz219"
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
            onAnimationComplete={() => {
              /* no-op for now */
            }}
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
            <InteractiveHoverButton href="#projects" variant="primary">
              View My Projects
            </InteractiveHoverButton>
            <InteractiveHoverButton
              href="/resume.pdf"
              variant="outline"
              download
            >
              Download Resume
            </InteractiveHoverButton>
          </div>
        </div>
      </section>

      {/* About - full screen with animation on scroll */}
      <section id="about" ref={aboutRef} className="container section-full">
        <div className="about-grid">
          <div>
            <ScrollFloat
              as="h2"
              containerClassName="animate__animated animate__fadeInUp"
              textClassName=""
              scrollStart="top bottom"
              scrub={false}
              once={true}
              toggleActions="play none none none"
            >
              About Me
            </ScrollFloat>
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

      {/* Skills - full screen cards grid */}
      <section id="skills" className="container section-full">
        <div
          className="text-center animate__animated animate__fadeInUp"
          style={{ marginTop: 0, marginBottom: "2rem" }}
        >
          <ScrollFloat
            as="h2"
            scrollStart="top bottom"
            scrub={false}
            once={true}
            toggleActions="play none none none"
            animationDuration={0.7}
            stagger={0.06}
          >
            My Technical Skills
          </ScrollFloat>
        </div>
        <div className="skills-grid">
          {skills.map(({ name, Icon, color }, idx) => (
            <FadeInUp
              key={idx}
              as="div"
              className="skill-card"
              delay={idx * 40}
            >
              <div className="skill-icon" style={{ color }}>
                <Icon size={28} />
              </div>
              <div className="skill-name">{name.toUpperCase()}</div>
            </FadeInUp>
          ))}
        </div>
        <FadeInUp as="div" className="skills-loop" delay={220}>
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
      </section>

      {/* Projects */}
      <section id="projects" className="section container">
        <div
          className="text-center animate__animated animate__fadeInUp"
          style={{ marginTop: 0, marginBottom: "2.2rem" }}
        >
          <ScrollFloat
            as="h2"
            scrollStart="top bottom"
            scrub={false}
            once={true}
            toggleActions="play none none none"
            animationDuration={0.7}
            stagger={0.06}
          >
            Featured Projects
          </ScrollFloat>
        </div>
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <FadeInUp
              key={idx}
              as="div"
              className="project-card"
              delay={idx * 80}
            >
              <div className="project-media">
                {proj.image ? (
                  <img
                    src={proj.image}
                    alt={`${proj.title} screenshot`}
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://placehold.co/640x480?text=No+Image";
                      e.currentTarget.onerror = null;
                    }}
                  />
                ) : (
                  <span>Image</span>
                )}
              </div>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.desc}</p>
              <div className="project-tags">
                {proj.tags.map((tag, i) => (
                  <span key={i} className="tag" style={{ fontSize: ".75rem" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-actions">
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener"
                    style={{
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                      gap: ".3em",
                    }}
                  >
                    Live Demo <FaExternalLinkAlt size={16} />
                  </a>
                )}
                {proj.code && (
                  <a
                    href={proj.code}
                    target="_blank"
                    rel="noopener"
                    style={{
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                      gap: ".3em",
                    }}
                  >
                    View Code <FaCodeBranch size={16} />
                  </a>
                )}
              </div>
            </FadeInUp>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="section">
        <div className="container text-center">
          <ScrollFloat
            as="h2"
            scrollStart="top bottom"
            scrub={false}
            once={true}
            toggleActions="play none none none"
            animationDuration={0.7}
            stagger={0.06}
            containerClassName="animate__animated animate__fadeInUp"
          >
            My Certifications
          </ScrollFloat>
          <FadeInUp as="p" className="certs-lead" delay={120}>
            Professional certifications that demonstrate my expertise and
            commitment to continuous learning. Hover over each certificate to
            see more details.
          </FadeInUp>
          <div className="certs-grid">
            {certifications.map((c, idx) => (
              <FadeInUp key={idx} as="div" delay={idx * 90}>
                <CertificateCard {...c} />
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section section-alt">
        <div className="container text-center">
          <div style={{ marginTop: 0, marginBottom: "1.2rem" }}>
            <ScrollFloat
              as="h2"
              scrollStart="top bottom"
              scrub={false}
              once={true}
              toggleActions="play none none none"
              animationDuration={0.7}
              stagger={0.06}
            >
              Get In Touch
            </ScrollFloat>
          </div>
          <p style={{ maxWidth: 760, margin: "0 auto 1.5rem" }}>
            I'm currently seeking new opportunities. Feel free to reach out via
            email or connect with me on LinkedIn.
          </p>
          <div className="inline-list" style={{ fontSize: "1.05rem" }}>
            <span>
              <FaEnvelope style={{ marginRight: 8 }} /> your-email@example.com
            </span>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener"
              style={{
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: ".3em",
              }}
            >
              <FaLinkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
