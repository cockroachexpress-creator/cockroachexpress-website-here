"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const contactCards = [
  {
    icon: "mail",
    iconColor: "text-secondary",
    title: "Email Us",
    value: "support@cockroachexpress.com",
    subtitle: "We reply within 3-5 business days",
    bg: "bg-surface-container-low brutalist-border hover:border-tertiary transition-all hover:translate-y-[-2px]",
  },
  {
    icon: "forum",
    iconColor: "text-secondary",
    title: "DM Us",
    value: "@cockroach.express on Instagram",
    subtitle: "Faster than most government services",
    bg: "bg-surface-container-low brutalist-border hover:border-tertiary transition-all hover:translate-y-[-2px]",
  },
];

export default function ContactSection() {
  const ref = useScrollReveal();

  return (
    <section id="contact" ref={ref} className="py-24 px-4 md:px-12 bg-background border-t-2 border-surface-container-highest">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12">
          <span className="text-secondary uppercase tracking-widest block mb-2 font-bold text-sm reveal">
            — CONTACT
          </span>
          <h2
            className="text-[32px] md:text-[40px] text-on-surface uppercase reveal"
            style={{
              fontFamily: "var(--font-montserrat)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Get in <span className="text-secondary">Touch.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 stagger-children">
          <div className="lg:col-span-1 space-y-4">
            {contactCards.map((card) => (
              <div key={card.title} className={`p-6 ${card.bg}`}>
                <span className={`material-symbols-outlined ${card.iconColor} mb-3 hover:scale-125 transition-transform duration-200`}>
                  {card.icon}
                </span>
                <h4 className="text-on-surface uppercase mb-1 font-bold text-sm">
                  {card.title}
                </h4>
                <p className="text-on-surface-variant text-sm">{card.value}</p>
                <p className="text-outline mt-2 italic text-xs">{card.subtitle}</p>
              </div>
            ))}
            <div className="p-6 bg-tertiary text-surface brutalist-border hover:translate-x-1 transition-all duration-200">
              <span
                className="material-symbols-outlined mb-3 hover:rotate-45 transition-transform duration-300"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                lightbulb
              </span>
              <h4 className="uppercase mb-1 font-bold text-sm">Did you know?</h4>
              <p className="text-sm font-medium">
                Cockroaches can survive for a week without their head. We
                basically do the same thing every Monday.
              </p>
            </div>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScKfBc9c00arsdsPu6Tm0JChJfsu0x8ywhy0aCdc62znV7XvQ/alreadyresponded"
            target="_blank"
            rel="noopener noreferrer"
            className="scanline-hover lg:col-span-2 brutalist-border bg-surface-container-lowest overflow-hidden flex flex-col items-center justify-center p-12 text-center min-h-[400px] group cursor-pointer hover:border-tertiary transition-colors"
          >
            <span
              className="material-symbols-outlined text-tertiary mb-6 group-hover:scale-125 transition-transform duration-300"
              style={{ fontSize: "64px" }}
            >
              description
            </span>
            <h3
              className="text-on-surface mb-2"
              style={{
                fontFamily: "var(--font-montserrat)",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: 1.3,
              }}
            >
              Got a scoop? A hot take? A conspiracy theory?
            </h3>
            <p className="text-on-surface-variant mb-6 max-w-md">
              Fill out our tip line form and we might just turn your chaos into
              headlines.
            </p>
            <span className="px-8 py-3 bg-tertiary text-surface brutalist-border font-bold uppercase text-sm tracking-wider group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200">
              <span className="material-symbols-outlined align-middle mr-2 text-[16px]">
                open_in_new
              </span>
              Submit Your Story
            </span>
            <p className="text-[10px] text-outline-variant mt-6 uppercase font-bold tracking-[0.2em] group-hover:text-tertiary transition-colors duration-500">
              COCKROACH TIP LINE — POWERED BY GOOGLE FORMS
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
