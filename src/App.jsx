import { useState, useEffect, useRef } from "react";
import "./styles/App.css";
import SimpleNav from "./components/SimpleNav.jsx";
import ExperienceTerminal from "./components/ExperienceTerminal.jsx";
import ContactSection from "./components/ContactSection.jsx";
import { FaAws, FaJava } from "react-icons/fa";
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
import { tagIconMap, tagColorMap } from "./constants/tags.js";
import { projects } from "./data/projects.js";
import { certifications } from "./data/certifications.js";
import HeroSection from "./sections/HeroSection.jsx";
import AboutSection from "./sections/AboutSection.jsx";
import SkillsSection from "./sections/SkillsSection.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import ProjectsSection from "./sections/ProjectsSection.jsx";
import CertificationsSection from "./sections/CertificationsSection.jsx";
import Footer from "./components/Footer.jsx";

function App() {
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

  const loopLogos = skills.map((s) => ({
    node: <s.Icon style={{ color: s.color }} />,
    title: s.name,
  }));

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
    const DURATION = 500;

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
      history.replaceState(null, "", href);
    }

    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  useEffect(() => {
    const el = aboutRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowAboutAnim(true);
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
      <HeroSection />
      <AboutSection aboutRef={aboutRef} showAboutAnim={showAboutAnim} />
      <SkillsSection skills={skills} />
      <ExperienceSection
        experiences={experiences}
        loopLogos={loopLogos}
        onSelectExperience={(idx) => openExp(idx)}
      />
      <ExperienceTerminal
        open={openExpIdx >= 0}
        onClose={closeExp}
        exp={experiences[openExpIdx] || {}}
      />
      <ProjectsSection
        projects={projects}
        tagIconMap={tagIconMap}
        tagColorMap={tagColorMap}
      />
      <CertificationsSection certifications={certifications} />
      <ContactSection />

      <Footer />
    </div>
  );
}

export default App;
