"use client";

import { useTheme } from "@/components/ThemeProvider";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header className="flex justify-between items-center w-full px-4 md:px-12 py-4 sticky top-0 z-50 bg-background border-b-2 border-tertiary">
      <div className="flex items-center gap-4">
        <h1
          className="logo-glitch logo-glow text-[28px] md:text-[28px] italic font-black uppercase tracking-tighter leading-none transition-all duration-75 hover:translate-x-1 cursor-pointer"
          data-text="COCKROACH EXPRESS"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-secondary">COCKROACH</span>
          <span className="ml-2 text-tertiary">EXPRESS</span>
        </h1>
      </div>

      <nav className="hidden md:flex gap-8 items-center">
        <button
          onClick={() => scrollTo("trending")}
          className="nav-link-underline uppercase tracking-tighter text-tertiary pb-1 text-sm font-bold border-b-2 border-tertiary cursor-pointer"
        >
          TRENDING
        </button>
        <button
          onClick={() => scrollTo("opinion")}
          className="nav-link-underline uppercase tracking-tighter text-on-surface hover:text-tertiary transition-colors text-sm font-bold cursor-pointer"
        >
          OPINION
        </button>
        <button
          onClick={() => scrollTo("manifesto")}
          className="nav-link-underline uppercase tracking-tighter text-on-surface hover:text-tertiary transition-colors text-sm font-bold cursor-pointer"
        >
          BLOG
        </button>
        <button
          onClick={() => scrollTo("about")}
          className="nav-link-underline uppercase tracking-tighter text-on-surface hover:text-tertiary transition-colors text-sm font-bold cursor-pointer"
        >
          ABOUT US
        </button>
        <button
          onClick={() => scrollTo("contact")}
          className="nav-link-underline uppercase tracking-tighter text-on-surface hover:text-tertiary transition-colors text-sm font-bold cursor-pointer"
        >
          CONTACT US
        </button>

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
    </header>
  );
}
