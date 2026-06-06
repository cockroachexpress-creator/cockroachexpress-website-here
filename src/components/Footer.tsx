"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const quickLinks = [
  { label: "TRENDING", target: "trending" },
  { label: "OPINION", target: "opinion" },
  { label: "ABOUT US", target: "about" },
  { label: "CONTACT US", target: "contact" },
];
const legalLinks = ["RESISTANCE", "PRIVACY", "THE VAULT"];
const socialLinks = [
  { icon: "close", href: "#", aria: "X / Twitter" },
  { icon: "photo_camera", href: "#", aria: "Instagram" },
  { icon: "videocam", href: "#", aria: "YouTube" },
  { icon: "send", href: "#", aria: "Telegram" },
];

export default function Footer() {
  const ref = useScrollReveal();

  return (
    <footer
      ref={ref}
      className="w-full px-4 md:px-12 py-12 flex flex-col md:flex-row justify-between items-start gap-6 bg-surface-container-lowest border-t-4 border-secondary-container"
    >
      <div className="space-y-4 max-w-xs reveal">
        <h2
          className="text-[24px] font-black text-secondary uppercase leading-none"
          style={{
            fontFamily: "var(--font-montserrat)",
            fontWeight: 700,
            lineHeight: 1.3,
          }}
        >
          COCKROACH EXPRESS
        </h2>
        <p className="text-on-surface-variant italic text-sm">
          Fearless. Satirical. Unemployed. India&apos;s most honest news source
          — because reality writes better satire than we ever could.
        </p>
        <p className="text-on-surface-variant uppercase text-xs font-bold mt-8">
          © 2024 COCKROACH EXPRESS. SURVIVING THE BLAST.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-12 reveal">
        <div className="space-y-4">
          <h4 className="text-secondary uppercase tracking-widest text-[10px] font-bold">
            QUICK LINKS
          </h4>
          <ul className="space-y-2 text-[12px]">
            {quickLinks.map((link, i) => (
              <li
                key={link.label}
                className="transition-transform hover:translate-x-2"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <button
                  onClick={() => {
                    const el = document.getElementById(link.target);
                    if (el) {
                      const top = el.getBoundingClientRect().top + window.scrollY - 80;
                      window.scrollTo({ top, behavior: "smooth" });
                    }
                  }}
                  className="text-on-surface-variant hover:text-secondary transition-colors font-bold text-[12px] cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-secondary uppercase tracking-widest text-[10px] font-bold">
            LEGAL
          </h4>
          <ul className="space-y-2 text-[12px]">
            {legalLinks.map((link, i) => (
              <li
                key={link}
                className="transition-transform hover:translate-x-2"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <Link
                  href="#"
                  className="text-on-surface-variant hover:text-secondary transition-colors font-bold"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="space-y-4 reveal">
        <h4 className="text-secondary uppercase tracking-widest text-[10px] font-bold">
          FOLLOW THE RESISTANCE
        </h4>
        <div className="flex gap-4">
          {socialLinks.map((social, i) => (
            <Link
              key={social.icon}
              href={social.href}
              aria-label={social.aria}
              className="w-10 h-10 flex items-center justify-center brutalist-border text-on-surface hover:bg-secondary hover:text-surface hover:translate-y-[-3px] brutalist-shadow-secondary-container-hover hover:border-secondary transition-all duration-200"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className="material-symbols-outlined text-[20px]">{social.icon}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
