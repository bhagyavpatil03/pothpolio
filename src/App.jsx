import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X, Pill, ShieldAlert } from "lucide-react";

import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

// Set VITE_DISABLE_DEVTOOLS=true in .env to turn protection on
const PROTECTION_ON = import.meta.env.VITE_DISABLE_DEVTOOLS === "true";

const GUARD_MESSAGE =
  import.meta.env.VITE_GUARD_MESSAGE ||
  "This portfolio is protected. Inspecting or copying the page is turned off.";

function App() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState(() =>
    window.localStorage.getItem("portfolio-theme") === "dark" ? "dark" : "light"
  );

  // Guard popup state
  const [notice, setNotice] = useState(false); // right-click / shortcut popup
  const [devToolsOpen, setDevToolsOpen] = useState(false); // inspector detected

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  // Highlight the nav link of the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("main > .home-page, main > .section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );

    sections.forEach((section) => {
      section.classList.add("reveal-ready");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Close the mobile menu with the Escape key
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // ------------------------------------------------------
  // Right-click / inspect protection (controlled by .env)
  // ------------------------------------------------------
  useEffect(() => {
    if (!PROTECTION_ON) return;

    const onContextMenu = (e) => {
      e.preventDefault();
      setNotice(true);
    };

    const onKeyDown = (e) => {
      const ctrl = e.ctrlKey || e.metaKey;

      const blocked =
        e.key === "F12" ||
        // Ctrl/Cmd + Shift + I / J / C
        (ctrl && e.shiftKey && ["KeyI", "KeyJ", "KeyC"].includes(e.code)) ||
        // Ctrl/Cmd + U (view source)
        (ctrl && e.code === "KeyU") ||
        // Mac: Cmd + Option + I / J / C / U
        (e.metaKey && e.altKey && ["KeyI", "KeyJ", "KeyC", "KeyU"].includes(e.code));

      if (blocked) {
        e.preventDefault();
        setNotice(true);
      }
    };

    // Detect a docked inspector panel (desktop mouse devices only)
    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    const checkSize = () => {
      if (!isDesktop) return;
      const widthGap = window.outerWidth - window.innerWidth > 160;
      const heightGap = window.outerHeight - window.innerHeight > 160;
      setDevToolsOpen(widthGap || heightGap);
    };

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", checkSize);
    const timer = setInterval(checkSize, 1000);
    checkSize();

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", checkSize);
      clearInterval(timer);
    };
  }, []);

  // Auto-hide the right-click / shortcut popup after 4 seconds
  useEffect(() => {
    if (!notice) return;
    const t = setTimeout(() => setNotice(false), 4000);
    return () => clearTimeout(t);
  }, [notice]);

  const goTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const showGuard = PROTECTION_ON && (notice || devToolsOpen);

  return (
    <>
      <header className="navbar">
        <div className="nav-inner">
          <button
            type="button"
            className="brand"
            onClick={() => goTo("home")}
            aria-label="Go to top"
          >
            <span className="brand-mark">
              <Pill size={18} />
            </span>
            <span>
              Bhagya Patil
              <small>B.Pharm Graduate</small>
            </span>
          </button>

          <nav
            id="main-nav"
            className={`nav-links ${open ? "is-open" : ""}`}
            aria-label="Main"
          >
            {LINKS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                className={active === id ? "is-active" : ""}
                aria-current={active === id ? "true" : undefined}
                onClick={() => goTo(id)}
              >
                {label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            className="theme-toggle"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            aria-pressed={theme === "dark"}
            title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <Home />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>

      <footer className="footer">
        <p>© 2026 Bhagya Patil. B.Pharm graduate, RGUHS Karnataka.</p>
      </footer>

      {/* Custom protection popup */}
      {showGuard && (
        <div className="guard-overlay" role="alertdialog" aria-modal="true">
          <div className="guard-card">
            <span className="guard-icon">
              <ShieldAlert size={28} />
            </span>
            <h3>Action not allowed</h3>
            <p>{GUARD_MESSAGE}</p>
            {devToolsOpen ? (
              <small>Close the developer tools to continue.</small>
            ) : (
              <button
                type="button"
                className="primary-button"
                onClick={() => setNotice(false)}
              >
                OK, got it
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default App;