"use client";

import { useTheme } from "@/components/ThemeProvider";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "TRENDING", target: "trending", active: true },
  { label: "OPINION", target: "opinion", active: false },
  { label: "BLOG", target: "manifesto", active: false },
  { label: "ABOUT US", target: "about", active: false },
  { label: "CONTACT US", target: "contact", active: false },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <>
      <header className="flex justify-between items-center w-full px-4 md:px-12 py-4 sticky top-0 z-50 bg-background border-b-2 border-tertiary">
        <div className="flex items-center gap-4">
          <h1
            className="logo-glitch logo-glow text-[22px] md:text-[28px] italic font-black uppercase tracking-tighter leading-none transition-all duration-75 hover:translate-x-1 cursor-pointer"
            data-text="COCKROACH EXPRESS"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-secondary">COCKROACH</span>
            <span className="ml-1 md:ml-2 text-tertiary">EXPRESS</span>
          </h1>
        </div>

        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => scrollTo(link.target)}
              className={`nav-link-underline uppercase tracking-tighter pb-1 text-sm font-bold cursor-pointer transition-colors ${
                link.active
                  ? "text-tertiary border-b-2 border-tertiary"
                  : "text-on-surface hover:text-tertiary"
              }`}
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-surface-container-highest transition-all active:translate-x-0.5 active:translate-y-0.5 cursor-pointer hover:scale-110"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <span className="material-symbols-outlined text-secondary">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center cursor-pointer"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <div className="hamburger-icon">
            <span
              className={`block absolute h-0.5 w-6 bg-on-surface transition-all duration-300 ${
                menuOpen ? "rotate-45 top-3.5" : "top-1.5"
              }`}
            />
            <span
              className={`block absolute h-0.5 w-6 bg-on-surface top-3.5 transition-all duration-300 ${
                menuOpen ? "opacity-0 left-4" : "opacity-100 left-1"
              }`}
            />
            <span
              className={`block absolute h-0.5 w-6 bg-on-surface transition-all duration-300 ${
                menuOpen ? "-rotate-45 top-3.5" : "top-5.5"
              }`}
            />
          </div>
        </button>
      </header>

      <div
        className={`mobile-menu-backdrop fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`mobile-menu-panel fixed top-0 right-0 h-full w-[280px] bg-surface-container-lowest z-[70] brutalist-border border-r-0 border-t-0 border-b-0 transition-transform duration-300 ease-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-4 border-b-2 border-surface-container-highest">
            <h2
              className="italic font-black uppercase tracking-tighter leading-none text-[18px]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              <span className="text-secondary">COCKROACH</span>
              <span className="ml-1 text-tertiary">EXPRESS</span>
            </h2>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-1 cursor-pointer hover:bg-surface-container-highest transition-colors"
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined text-on-surface">
                close
              </span>
            </button>
          </div>

          <nav className="flex-1 flex flex-col py-6 px-4">
            {navLinks.filter((link) => link.label !== "BLOG").map((link, i) => (
              <button
                key={link.target}
                onClick={() => scrollTo(link.target)}
                className={`text-left px-4 py-4 uppercase tracking-tighter font-bold text-[15px] transition-all duration-200 cursor-pointer border-b border-surface-container-highest hover:bg-surface-container hover:text-tertiary hover:translate-x-2 ${
                  i === 0 ? "text-tertiary" : "text-on-surface"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="px-6 py-6 border-t-2 border-surface-container-highest">
            <button
              onClick={() => {
                toggleTheme();
              }}
              className="flex items-center gap-3 text-on-surface-variant hover:text-tertiary transition-colors cursor-pointer w-full px-2 py-3"
            >
              <span className="material-symbols-outlined text-secondary">
                {theme === "dark" ? "light_mode" : "dark_mode"}
              </span>
              <span className="text-sm font-bold uppercase tracking-widest">
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
