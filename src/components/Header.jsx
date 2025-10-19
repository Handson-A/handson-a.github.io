import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = () => setOpen((v) => !v);

  return (
    <header className={`header ${scrolled ? "header-shadow" : ""}`}>
      <div className="header-inner">
        <a className="logo" href="#home">
          Handson Ayelgum
        </a>

        <nav className={`nav ${open ? "open" : ""}`}>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#skills" onClick={() => setOpen(false)}>
            Skills
          </a>
          <a href="#projects" onClick={() => setOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </nav>

        <button className="menu-toggle" onClick={toggle} aria-label="Menu">
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>
    </header>
  );
}

export default Header;
