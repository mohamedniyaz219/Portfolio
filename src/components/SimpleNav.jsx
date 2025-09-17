import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function SimpleNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <header className="site-nav" role="banner">
      <div className="nav-inner">
        <a href="#hero" className="brand" aria-label="Homepage">
          <img src={logo} alt="Mohamed Niyaz logo" className="brand-logo" />
          <span className="brand-text">Mohamed Niyaz</span>
        </a>
        <button
          className="nav-burger"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav aria-label="Primary" className="nav-links-wrapper">
          <ul className="nav-links" role="menubar">
            {navItems.map((item) => (
              <li key={item.href} role="none">
                <a role="menuitem" href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className={`mobile-nav ${open ? "open" : ""}`}
        >
          <ul role="menubar">
            {navItems.map((item) => (
              <li key={item.href} role="none">
                <a role="menuitem" href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
