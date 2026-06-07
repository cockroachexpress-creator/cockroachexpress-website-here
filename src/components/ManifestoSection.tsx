"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ManifestoSection() {
  const ref = useScrollReveal();

  return (
    <section id="manifesto" ref={ref} className="py-16 md:py-24 bg-background relative border-y-2 border-surface-container-highest">
      <div className="max-w-4xl mx-auto px-4 text-center mb-10 md:mb-16">
        <span className="material-symbols-outlined text-secondary text-3xl md:text-4xl mb-4 reveal inline-block hover:rotate-180 transition-transform duration-700 cursor-default">
          public
        </span>
        <h2
          className="text-[26px] sm:text-[32px] md:text-[40px] uppercase mb-4 md:mb-6 italic reveal"
          style={{
            fontFamily: "var(--font-montserrat)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
          }}
        >
          The News That <br />
          <span className="text-tertiary">Won&apos;t Die.</span>
        </h2>
        <p className="text-on-surface-variant mx-auto reveal text-sm md:text-[18px]" style={{ lineHeight: 1.6 }}>
          We don&apos;t walk on eggshells. We crawl straight through the cracks
          to uncover the raw, unfiltered truth. Mainstream media might dismiss
          our generation, but Cockroach Express is built to be resilient, highly
          adaptable, and impossible to crush.
        </p>
      </div>
      <div className="max-w-[1200px] mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-4 stagger-children">
        <div className="bg-surface-container p-6 md:p-8 brutalist-border brutalist-shadow-tertiary hover:translate-x-[-2px] hover:translate-y-[-2px] brutalist-shadow-tertiary-hover transition-all duration-200">
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <span
              className="material-symbols-outlined text-tertiary text-3xl md:text-4xl hover:scale-110 transition-transform duration-200"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              visibility
            </span>
            <div>
              <h3
                className="text-on-surface"
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontWeight: 700,
                  fontSize: "clamp(18px, 2.5vw, 24px)",
                  lineHeight: 1.3,
                }}
              >
                Our Vision
              </h3>
              <p className="text-tertiary uppercase tracking-widest text-xs font-bold">
                Absolute Accountability.
              </p>
            </div>
          </div>
          <p className="text-on-surface-variant mb-4 md:mb-6 text-sm md:text-base">
            We envision a media landscape where power is unapologetically held
            to account. We refuse to normalize corporate corruption as
            &ldquo;strategic spending&rdquo; or look away while the political
            elite holidays on the taxpayer&apos;s dime.
          </p>
          <div className="p-3 md:p-4 bg-background border-l-4 border-tertiary italic text-tertiary font-bold text-xs md:text-sm">
            &ldquo;Where did the money go?&rdquo;
          </div>
        </div>
        <div className="bg-surface-container p-6 md:p-8 brutalist-border brutalist-shadow-secondary hover:translate-x-[-2px] hover:translate-y-[-2px] brutalist-shadow-secondary-hover transition-all duration-200">
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <span
              className="material-symbols-outlined text-secondary text-3xl md:text-4xl hover:scale-110 transition-transform duration-200"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              rocket_launch
            </span>
            <div>
              <h3
                className="text-on-surface"
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontWeight: 700,
                  fontSize: "clamp(18px, 2.5vw, 24px)",
                  lineHeight: 1.3,
                }}
              >
                Our Mission
              </h3>
              <p className="text-secondary uppercase tracking-widest text-xs font-bold">
                Weaponizing Satire. Empowering Youth.
              </p>
            </div>
          </div>
          <p className="text-on-surface-variant mb-4 md:mb-6 text-sm md:text-base">
            Our mission is to build an un-ignorable digital platform for the
            young people who have been dismissed as lazy, chronically online, or
            treated as political afterthoughts. We are reclaiming the insults
            thrown at our generation.
          </p>
          <div className="p-3 md:p-4 bg-background border-l-4 border-secondary italic text-secondary font-bold text-xs md:text-sm">
            &ldquo;That&apos;s it. That&apos;s the mission. The rest is
            satire.&rdquo;
          </div>
        </div>
      </div>
    </section>
  );
}
