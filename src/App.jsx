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
import officeWorkLottie from "./assets/Office work.lottie?url";
import FadeInUp from "./components/FadeInUp.jsx";
import AnimatedList from "./components/AnimatedList.jsx";
import ExperienceTerminal from "./components/ExperienceTerminal.jsx";
import resumePdf from "./assets/Mohamed-Niyaz-A-Resume.pdf?url";
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

// Map project tag strings to icons (and optional brand colors)
const tagIconMap = {
  HTML: SiHtml5,
  CSS: SiCss3,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  Node: SiNodedotjs,
  Express: SiExpress,
  "Express.js": SiExpress,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  Python: SiPython,
  Docker: SiDocker,
  AWS: FaAws,
  Java: FaJava,
};

const tagColorMap = {
  HTML: "#E34F26",
  CSS: "#1572B6",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  React: "#61DAFB",
  "Next.js": "#FFFFFF",
  "Node.js": "#339933",
  Node: "#339933",
  Express: "#FFFFFF",
  "Express.js": "#FFFFFF",
  PostgreSQL: "#336791",
  MySQL: "#4479A1",
  MongoDB: "#47A248",
  Firebase: "#FFCA28",
  Python: "#3776AB",
  Docker: "#2496ED",
  AWS: "#FF9900",
  Java: "#007396",
};

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
    image: `${import.meta.env.BASE_URL}snaptap.jpeg`,
  },
];

function App() {
  // (Active indicator removed in PillNav, state retained if later needed)
  const [activeHref] = useState("#hero");
  const [showAboutAnim, setShowAboutAnim] = useState(false);
  const aboutRef = useRef(null);

  const skills = [
    // Custom logo component for LottieFiles (uses Simple Icons CDN)
    // Placed here to keep component local without extra files

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
    {
      name: "LottieFiles",
      Icon: ({ size = 28 }) => (
        <img
          src="https://cdn.simpleicons.org/lottiefiles/00DDB3"
          alt="LottieFiles"
          width={size}
          height={size}
          style={{ display: "block" }}
        />
      ),
      color: "#00DDB3",
    },
  ];

  const certifications = [
    {
      title: "Galactic Problem Solver",
      issuer: "NASA SpaceApps",
      year: "2024",
      image: `${import.meta.env.BASE_URL}galactic.png`,
      details: [
        "NASA API Integration",
        "Three JS",
        "HTML/CSS/JS",
        "International Hackathon",
        "Adressing Real-world Problems",
      ],
      link: "https://drive.google.com/file/d/1qdvhulItg3UPZxKraBcD-2S_59p-W-w0/view",
    },
    {
      title: "Journey to Cloud: Envisioning Your Solution",
      issuer: "IBM SkillsBuild",
      year: "2024",
      image: `${import.meta.env.BASE_URL}ibm.png`,
      details: [
        "Cloud Computing",
        "IBM Code Engine",
        "IaaS",
        "Microservices",
        "Enterprise Design Thinking",
        "SaaS",
        "PaaS",
      ],
      link: "https://www.credly.com/badges/10caeaa0-cbbc-47d5-bf3d-3f052c125cbe/public_url",
    },
    {
      title: "AWS Knowledge: Cloud Essentials",
      issuer: "Amazon Web Services Training and Certification",
      year: "2024",
      image: `${import.meta.env.BASE_URL}aws.png`,
      details: [
        "Amazon Web Services (AWS)",
        "AWS Cloud",
        "AWS Databases",
        "AWS Compute",
        "AWS Networking",
        "AWS Security",
      ],
      link: "https://www.credly.com/badges/fbddd02d-f0ea-406e-aacb-fd3a5c035127/public_url",
    },
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services Training and Certification",
      year: "2024",
      image: `${import.meta.env.BASE_URL}aws1.png`,
      details: [
        "AWS Architecture",
        "AWS Cloud",
        "AWS Core Services",
        "AWS Pricing",
        "AWS Support",
      ],
      link: "https://www.credly.com/badges/24bcdd7e-3f65-4414-ba20-7e4d5b27131a/public_url",
    },
    {
      title:
        "Build Real World AI Applications with Gemini and Imagen Skill Badge",
      issuer: "Google Cloud",
      year: "2025",
      image: `${import.meta.env.BASE_URL}gc1.png`,
      details: [
        "Natural Language Processing (NLP)",
        "AI/ML",
        "Gemini",
        "Imagen",
        "Vertex AI",
      ],
      link: "https://www.credly.com/badges/43674da2-3545-4822-b833-813756fc7668/public_url",
    },
    {
      title: "Explore Generative AI with the Vertex AI Gemini API Skill Badge",
      issuer: "Google Cloud",
      year: "2025",
      image: `${import.meta.env.BASE_URL}gc2.png`,
      details: ["Python", "Generative AI", "Gemini", "Vertex AI"],
      link: "https://www.credly.com/badges/3753390d-a7a7-45f2-9807-b79148638d54/public_url",
    },
    {
      title: "Prompt Design in Vertex AI Skill Badge",
      issuer: "Google Cloud",
      year: "2025",
      image: `${import.meta.env.BASE_URL}gc3.png`,
      details: [
        "Artificial Intelligence (AI)",
        "Generative AI",
        "Gemini APIs",
        "Prompt Engineering",
      ],
      link: "https://www.credly.com/badges/00b585dc-4f90-499a-add3-4a73c9967e76/public_url",
    },
    {
      title: "Agentic AI Day CERTIFICATE OF PARTICIPATION",
      issuer: "Google Cloud & Hack2skill",
      year: "2025",
      image: `${import.meta.env.BASE_URL}gc4.png`,
      details: ["Artificial Intelligence (AI)", "Agentic AI", "AI Agents"],
      link: "https://drive.google.com/file/d/14CIEBHMgJ2D-aWajQJ7qHASHRbcfk2N9/view",
    },
    {
      title: "outstanding completion of ‘Unity’ (Semester 6) Hackathon finale",
      issuer:
        "Government of Tamil Nadu - Tamil Nadu Skill Development Corporation & E16 AI",
      year: "2025",
      image: `${import.meta.env.BASE_URL}nm.png`,
      details: ["Unity", "AR applications", "AI Chatbots", "Hackathon"],
      link: "https://drive.google.com/file/d/1pjnIz-Nyc2ayX5FYvor1qcZDvVf62Yps/view?usp=sharing",
    },
    {
      title: "Artificially Intelligent Tools",
      issuer: "Skill Nation",
      year: "2025",
      image: `${import.meta.env.BASE_URL}skn.png`,
      details: ["AI Tools", "Context Engineering", "AI Tricks"],
      link: "https://drive.google.com/file/d/1drVdHutuPZKb93Bt-aGXL1vwXwJtWkFi/view?usp=sharing",
    },
  ];

  // Use ALL skills in the logo loop
  const loopLogos = skills.map(({ name, Icon, color }) => ({
    node: <Icon style={{ color }} />, // color preserved; size set by LogoLoop
    title: name,
  }));

  // Experience items (structured like projects/certifications)
  const experiences = [
    {
      company: "Ifelse Technologies",
      duration: "July 2025 - September 2025",
      role: "Full‑Stack Developer Intern with AI/ML integration",
      description:
        "Built multi-tenant RBAC Student Wallet System with React, Node.js/Express.js, and PostgreSQL; worked on Backend development and integrated Deepface Model for face verification.",
    },
    {
      company: "Thozhilali",
      duration: "2022",
      role: "Startup Co-Founder & Web Developer",
      description:
        "Developed a online website which acts as a connecting bridge between job seeking technicians and the people in need of them.",
    },
  ];

  const [openExpIdx, setOpenExpIdx] = useState(-1);
  const openExp = (idx) => setOpenExpIdx(idx);
  const closeExp = () => setOpenExpIdx(-1);

  useEffect(() => {
    // Smooth scroll fallback for browsers without CSS scroll-behavior support
    const supportsNative = "scrollBehavior" in document.documentElement.style;
    if (supportsNative) return;

    const root = document.documentElement;
    const getOffsetTop = () => {
      const cs = getComputedStyle(root);
      const navH = parseFloat(cs.getPropertyValue("--nav-height")) || 0;
      const navB = parseFloat(cs.getPropertyValue("--nav-border")) || 0;
      return navH + navB;
    };

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const DURATION = 500; // ms

    function smoothScrollTo(targetY) {
      const prefersReduced =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) {
        window.scrollTo(0, targetY);
        return;
      }
      const startY = window.scrollY || window.pageYOffset;
      const startTime = performance.now();
      function step(now) {
        const elapsed = now - startTime;
        const t = Math.min(1, elapsed / DURATION);
        const eased = easeInOutCubic(t);
        window.scrollTo(0, startY + (targetY - startY) * eased);
        if (t < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    function onDocClick(e) {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const id = href.slice(1);
      const el = id ? document.getElementById(id) : null;
      if (!el) return;
      e.preventDefault();
      const y =
        el.getBoundingClientRect().top + window.pageYOffset - getOffsetTop();
      smoothScrollTo(y);
      // update URL hash without causing an instant jump
      history.replaceState(null, "", href);
    }

    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
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
              href={resumePdf}
              variant="outline"
              download="Mohamed-Niyaz-A-Resume.pdf"
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
      </section>

      {/* Professional Experience */}
      <section id="experience" className="experience-section">
        <div className="container">
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
              Professional Experience
            </ScrollFloat>
          </div>

          <div className="experience-grid">
            <FadeInUp as="div" delay={80}>
              <div className="experience-panel">
                <AnimatedList
                  items={experiences.map(
                    (e) => `${e.role} · ${e.company} · ${e.duration}`
                  )}
                  onItemSelect={(_, idx) => openExp(idx)}
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

      {/* Experience Terminal Modal */}
      <ExperienceTerminal
        open={openExpIdx >= 0}
        onClose={closeExp}
        exp={experiences[openExpIdx] || {}}
      />

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
              <div
                className="project-card__inner"
                tabIndex={0}
                aria-label={`${proj.title} project card, flip for details`}
              >
                {/* FRONT */}
                <div className="project-card__face project-card__front">
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
                  <div className="project-tags">
                    {proj.tags.map((tag, i) => {
                      const IconComp = tagIconMap[tag] || null;
                      const brand = tagColorMap[tag];
                      const iconColor = brand || undefined; // allow white logos to stay white
                      return (
                        <span key={i} className="tag tag--icon" title={tag}>
                          {IconComp ? (
                            <IconComp size={16} color={iconColor} />
                          ) : (
                            tag
                          )}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* BACK */}
                <div className="project-card__face project-card__back">
                  <h3 className="project-title">{proj.title}</h3>
                  <p className="project-desc">{proj.desc}</p>
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
                </div>
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
