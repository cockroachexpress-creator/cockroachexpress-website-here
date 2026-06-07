"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const quickLinks = [
  { label: "TRENDING", target: "trending" },
  { label: "OPINION", target: "opinion" },
  { label: "ABOUT US", target: "about" },
  { label: "CONTACT US", target: "contact" },
];

const socialLinks = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    href: "https://www.instagram.com/cockroach.express?igsh=YW40MW42bmE4djdn&utm_source=qr",
    aria: "Instagram",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    href: "https://www.facebook.com/people/Cockroach-Xpress/61590144633676/?mibextid=wwXIfr&rdid=Ad2zlAOwQsZjXZO5&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EAGiSCQB4%2F%3Fmibextid%3DwwXIfr", 
    aria: "Facebook",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 192 192" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z" />
      </svg>
    ),
    href: "https://www.threads.com/@cockroach.express?igshid=NTc4MTIwNjQ2YQ==", 
    aria: "Threads",
  },
  {
    icon: (
      <svg width="20" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    href: "https://x.com/cockroachxpress?s=21",
    aria: "X",
  },
];

export default function Footer() {
  const ref = useScrollReveal();

  return (
    <footer
      ref={ref}
      className="w-full px-4 md:px-12 py-8 md:py-12 flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8 bg-surface-container-lowest border-t-4 border-secondary-container"
    >
      <div className="space-y-3 md:space-y-4 max-w-xs reveal">
        <h2
          className="text-[20px] md:text-[24px] font-black text-secondary uppercase leading-none"
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
          © 2026 COCKROACH EXPRESS. SURVIVING THE BLAST.
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
      </div>
      <div className="space-y-4 reveal">
        <h4 className="text-secondary uppercase tracking-widest text-[10px] font-bold">
          FOLLOW THE COCKROACHES
        </h4>
        <div className="flex gap-3 md:gap-4">
          {socialLinks.map((social, i) => (
            <Link
              key={social.aria}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.aria}
              className="w-10 h-10 flex items-center justify-center brutalist-border text-on-surface hover:bg-secondary hover:text-surface hover:translate-y-[-3px] brutalist-shadow-secondary-container-hover hover:border-secondary transition-all duration-200"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
