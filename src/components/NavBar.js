import { useState, useEffect } from "react";
import { Menu, X, FileDown } from "lucide-react";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "expertise", label: "Expertise" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const RESUME_URL = process.env.PUBLIC_URL + "/Arsil_Malek_Resume.pdf";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = "home";
      for (const link of LINKS) {
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top <= 120) current = link.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={scrolled ? "nav scrolled" : "nav"}>
      <div className="nav-inner">
        <a href="#home" className="nav-logo">
          arsil<span>.</span>malek
        </a>
        <ul className={open ? "nav-links open" : "nav-links"}>
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={active === link.id ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="nav-cta" href={RESUME_URL} target="_blank" rel="noopener noreferrer">
          <FileDown size={16} /> Resume
        </a>
        <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </nav>
  );
};
