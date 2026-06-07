"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const opinions = [
  {
    title: "Why Traditional Journalism is Just a Fancy Way to Lie",
    body: "The 9 PM news isn't reporting; it's a competitive screaming match sponsored by pan masala brands. We deserve better lies, or at least cheaper ones.",
    author: "The Outsider",
    initials: "OP",
    date: "02 JUNE 2024",
  },
  {
    title: "The Ministry of Chilling: Why Staring at the Ceiling is a Revolutionary Act",
    body: "Productivity is a corporate scam. In a world of hustle culture, doing absolutely nothing is the only way to reclaim your soul. Reclaiming space.",
    author: "Lazy Bones",
    initials: "OP",
    date: "01 JUNE 2024",
  },
];

export default function OpinionSection() {
  const ref = useScrollReveal();

  return (
    <section id="opinion" ref={ref} className="px-4 md:px-12 py-12 md:py-20 bg-surface-container-lowest">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-8 md:mb-12">
          <span className="text-tertiary uppercase tracking-widest block mb-2 font-bold text-xs md:text-sm reveal">
            — OPINION
          </span>
          <h2
            className="text-[26px] sm:text-[32px] md:text-[40px] text-on-surface uppercase reveal"
            style={{
              fontFamily: "var(--font-montserrat)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Opinion
          </h2>
        </div>
        <div className="stagger-children grid grid-cols-1 md:grid-cols-2 gap-4">
          {opinions.map((op) => (
            <article
              key={op.title}
              className="scanline-hover bg-surface-container-low border-l-4 border-tertiary p-6 md:p-8 flex flex-col group transition-all hover:bg-surface-container hover:translate-x-1"
            >
              <span className="bg-tertiary text-surface px-2 py-0.5 text-[10px] uppercase self-start mb-6 font-bold transition-transform duration-200 group-hover:scale-105 group-hover:-rotate-1">
                Opinion
              </span>
              <h3
                className="text-on-surface mb-3 md:mb-4 font-bold group-hover:text-tertiary transition-colors"
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontWeight: 700,
                  fontSize: "clamp(18px, 2.5vw, 24px)",
                  lineHeight: 1.3,
                }}
              >
                {op.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed text-sm md:text-base mb-6 md:mb-8">
                {op.body}
              </p>
              <div className="mt-auto flex items-center gap-3 text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">
                <span className="w-8 h-8 bg-tertiary flex items-center justify-center text-[12px] text-surface font-black transition-transform duration-200 group-hover:scale-110">
                  {op.initials}
                </span>
                <div>
                  <p className="text-on-surface">{op.author}</p>
                  <p className="text-on-surface-variant opacity-80">{op.date}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center reveal">
          <button className="btn-ripple w-full md:w-auto px-12 py-4 border-2 border-outline-variant bg-surface-container-highest text-on-surface-variant uppercase text-[12px] flex items-center justify-center gap-2 mx-auto hover:text-tertiary transition-colors font-bold cursor-pointer">
            <span className="material-symbols-outlined text-[16px]">block</span>{" "}
            NO MORE OPINIONS
          </button>
        </div>
      </div>
    </section>
  );
}
