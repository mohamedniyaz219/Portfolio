import logo from "./assets/logo.svg";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// A minimal, modern, accessible, sticky navigation bar.
// No animations / GSAP – purely CSS + semantic HTML.
export default function SimpleNav() {
  return (
    <header className="site-nav" role="banner">
      <div className="nav-inner">
        <a href="#hero" className="brand" aria-label="Homepage">
          <img src={logo} alt="Mohamed Niyaz logo" className="brand-logo" />
          <span className="brand-text">Mohamed Niyaz</span>
        </a>
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
      </div>
    </header>
  );
}
