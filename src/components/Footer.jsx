import {
  FaGithub as FaGh,
  FaLinkedin as FaLi,
  FaMediumM as FaMd,
} from "react-icons/fa";

export default function Footer() {
  const GH =
    import.meta.env.VITE_SOCIAL_GITHUB || "https://github.com/mohamedniyaz219";
  const LI =
    import.meta.env.VITE_SOCIAL_LINKEDIN ||
    "https://www.linkedin.com/in/mohamedniyaz219/";
  const MD =
    import.meta.env.VITE_SOCIAL_MEDIUM ||
    "https://medium.com/@mohamed.niyaz219";
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-left">©mohamedniyaz219</div>
        <div className="footer-center">All rights reserved</div>
        <div className="footer-right">
          <a
            className="social-link"
            href={GH}
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
          >
            <FaGh size={22} />
          </a>
          <a
            className="social-link"
            href={LI}
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
          >
            <FaLi size={22} />
          </a>
          <a
            className="social-link"
            href={MD}
            target="_blank"
            rel="noopener"
            aria-label="Medium"
          >
            <FaMd size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
