import { useEffect, useState } from "react";
import { navLinks, site } from "../data/site.js";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lightTheme, setLightTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    return savedTheme
      ? savedTheme === "light"
      : window.matchMedia("(prefers-color-scheme: light)").matches;
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    document.documentElement.dataset.theme = lightTheme ? "light" : "dark";
    window.localStorage.setItem("portfolio-theme", lightTheme ? "light" : "dark");
  }, [lightTheme]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a className="navbar__logo" href="#home" onClick={closeMenu}>
          {site.name}
        </a>

        <div className="navbar__actions">
          <button
            className="navbar__theme-toggle"
            type="button"
            aria-label={`Switch to ${lightTheme ? "dark" : "light"} theme`}
            title={`Switch to ${lightTheme ? "dark" : "light"} theme`}
            onClick={() => setLightTheme((value) => !value)}
          >
            <span aria-hidden="true">{lightTheme ? "☾" : "☼"}</span>
          </button>

          <button
            className="navbar__toggle"
            type="button"
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="navbar__toggle-bar" />
          </button>
        </div>

        <nav
          id="primary-navigation"
          className={`navbar__nav ${open ? "is-open" : ""}`}
          aria-label="Primary"
        >
          <ul className="navbar__list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
