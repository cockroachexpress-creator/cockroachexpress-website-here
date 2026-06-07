"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

const timeline = [
  {
    date: "JUNE 2024",
    title: "The Slur Heard Around India",
    body: "The Chief Justice of India compared unemployed youth to \"parasitic cockroaches.\" The internet erupted. We registered a domain name.",
  },
  {
    date: "JUNE 2024",
    title: "Cockroach Janta Party is Born",
    body: "What started as a viral tweet became a full-blown political movement. 100,000 members in 72 hours. No funding. No godfathers. Just spite and free WiFi.",
  },
  {
    date: "JULY 2024",
    title: "First Article Published",
    body: "\"Local Cockroach Elected as Deputy Mayor, Promises More Drainage Access\" — our first piece of \"journalism.\" It got more reads than most OpEds in national newspapers.",
  },
  {
    date: "DEC 2024",
    title: "500 Articles & Counting",
    body: "From satire to investigative pieces, we covered it all. Elections, corruption, unemployment — all through the lens of a cockroach who refused to die.",
  },
  {
    date: "2025",
    title: "The Resistance Grows",
    body: "50+ writers worldwide. Translations in Hindi and Punjabi. Cockroach Express became a movement, not just a website.",
  },
  {
    date: "2026",
    title: "Eurasia Review Takes Notice",
    body: "An actual serious academic publication wrote about us. We're still not sure if we should be flattered or concerned.",
  },
];

const values = [
  {
    icon: "edit_note",
    title: "Fearless Writing",
    desc: "No sacred cows, no pulled punches. We write what they can't say, what they won't print, and what they hope you never read.",
  },
  {
    icon: "verified",
    title: "Factual Absurdity",
    desc: "We don't invent the news — we just format it so you can see the madness. Every headline is real. The commentary is the satire.",
  },
  {
    icon: "bolt",
    title: "Relentless Energy",
    desc: "Like our namesake, we don't stop. We thrive in the dark and survive the blast. Cut off our funding? We'll write on napkins.",
  },
  {
    icon: "groups",
    title: "Community First",
    desc: "Built by the unemployed, for the unemployed. Every writer, every contributor started as a reader who got angry enough to write.",
  },
  {
    icon: "visibility_lock",
    title: "Anti-Censorship",
    desc: "We've been taken down, flagged, and \"reviewed.\" Every time they censor us, we come back stronger. You can't kill a cockroach.",
  },
  {
    icon: "psychology_alt",
    title: "Spite-Powered",
    desc: "Our fuel isn't venture capital or ad revenue. It's pure, unfiltered spite. Every insult thrown at our generation powers the next article.",
  },
];

const stats = [
  { value: "100K+", label: "Monthly Readers", color: "text-tertiary" },
  { value: "500+", label: "Articles Published", color: "text-on-surface" },
  { value: "50+", label: "Writers Worldwide", color: "text-on-surface" },
  { value: "3", label: "Languages", color: "text-secondary" },
  { value: "0", label: "Fucks Given", color: "text-error" },
  { value: "∞", label: "Spite Level", color: "text-tertiary" },
];

const team = [
  {
    name: "Cockroach Ji",
    role: "Editor-in-Chief",
    initials: "CJ",
    bio: "Started this whole thing with a tweet and a bad attitude. Hasn't slept since 2024.",
  },
  {
    name: "The Outsider",
    role: "Senior Opinion Writer",
    initials: "OP",
    bio: "Former journalist who got tired of writing \"balanced\" pieces about things that are clearly insane.",
  },
  {
    name: "Lazy Bones",
    role: "Culture & Lifestyle",
    initials: "LB",
    bio: "Expert in doing nothing professionally. Believes staring at the ceiling is a revolutionary act.",
  },
  {
    name: "Anonymous #47",
    role: "Investigative Reporter",
    initials: "A4",
    bio: "Identity hidden for reasons. Writes the pieces that keep getting us \"reviewed\" by platforms.",
  },
];

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen bg-background">
      <div className="grain-overlay" />

      <nav className="flex items-center gap-4 px-4 md:px-12 py-4 bg-background border-b-2 border-tertiary sticky top-0 z-50">
        <Link
          href="/"
          className="text-tertiary hover:text-secondary transition-colors flex items-center gap-2 font-bold text-sm uppercase tracking-tighter"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          BACK
        </Link>
        <div className="flex-1 text-center">
          <span
            className="text-tertiary italic font-black uppercase tracking-tighter text-lg md:text-2xl"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            COCKROACH EXPRESS
          </span>
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 hover:bg-surface-container-highest transition-all active:translate-x-0.5 active:translate-y-0.5 cursor-pointer hover:scale-110"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          <span className="material-symbols-outlined text-tertiary">
            {theme === "dark" ? "light_mode" : "dark_mode"}
          </span>
        </button>
      </nav>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b-2 border-surface-container-highest">
          <div className="absolute inset-0 z-0">
            <Image
              alt="Cinematic dark background"
              className="w-full h-full object-cover about-bg-img"
              fill
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjyWNf-aazikKjzipv_fRn5ZM4egyChazAp83kurVphPdVxR0l0_OW5LktTHYBQ9iMpZSgmTLtvSyWWlYw60ANVLRL_NZKVtyntrn2eqhWusQ3okVpA_naH4UO8kUyXswiJt9yf0Y1bdRb6VGx5DMS8d5Zvz-eNbEfHdB1V-jRhRpxb67LoSH3OALkwn8AulrJCX5A7Fw5DG1Khwl-6ZbSD2LY1FVUXQuoecD8pxES1iwZnCS_q-1il_G-BrWoVkslMRvH5DDjZAM"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
          </div>
          <div className="relative z-10 max-w-[900px] mx-auto px-4 md:px-12 py-16 md:py-24 lg:py-32 text-center">
            <span
              className={`inline-block bg-secondary-container text-on-secondary-container px-4 py-1 text-[10px] sm:text-[11px] uppercase tracking-widest font-bold mb-6 md:mb-8 transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
              style={{ transitionDelay: "0.1s" }}
            >
              About Us
            </span>
            <h1
              className={`text-[28px] sm:text-[32px] md:text-[56px] text-on-surface leading-none mb-4 md:mb-6 transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                fontFamily: "var(--font-montserrat)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                transitionDelay: "0.3s",
              }}
            >
              WHY WE CHOSE <br />
              THE <span className="text-tertiary italic">COCKROACH.</span>
            </h1>
            <p
              className={`text-on-surface-variant max-w-2xl mx-auto transition-all duration-700 text-sm md:text-[18px] ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ lineHeight: 1.6, transitionDelay: "0.5s" }}
            >
              When the Chief Justice of India compared unemployed youth to
              &ldquo;parasitic cockroaches,&rdquo; he meant it as an insult.
              We took it as a compliment, a business plan, and a brand identity —
              all in one afternoon.
            </p>
          </div>
        </section>

        {/* The Origin Story */}
        <section className="max-w-[900px] mx-auto px-4 md:px-12 py-12 md:py-20">
          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <div className="h-0.5 w-12 bg-tertiary"></div>
            <span className="text-tertiary uppercase tracking-widest text-xs font-bold">
              THE ORIGIN STORY
            </span>
          </div>
          <div className="space-y-4 md:space-y-6 text-on-surface-variant text-sm md:text-[17px]" style={{ lineHeight: 1.8 }}>
            <p>
              It started, like most revolutions do, with a tweet. Someone in a position
              of immense authority — a Chief Justice, no less — decided that the best
              way to describe millions of young Indians struggling with systemic
              unemployment was to call them &ldquo;parasitic cockroaches.&rdquo;
            </p>
            <p>
              The statement was meant to sting. It was designed to shame. Instead,
              something unexpected happened: the youth of India looked at each other,
              looked back at the insult, and said, &ldquo;Fine. Cockroaches it is.&rdquo;
            </p>
            <p>
              Because here&apos;s the thing about cockroaches that the honourable judge
              perhaps didn&apos;t consider: they are the most resilient creatures on the
              planet. They&apos;ve survived every mass extinction event in Earth&apos;s
              history. They can live without food for a month, without their head for
              a week, and they can hold their breath for 40 minutes. In other words,
              they&apos;re basically unemployed graduates with better survival skills.
            </p>
            <p>
              <span className="text-tertiary font-bold">CockroachExpress</span> was
              born in that moment of radical reclamation. We took the worst thing anyone
              could call us and turned it into a media empire powered by spite, satire,
              and an unwavering commitment to making powerful people uncomfortable.
            </p>
          </div>

          <div className="mt-12 p-6 bg-surface-container brutalist-border brutalist-shadow-tertiary">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-tertiary text-3xl mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                format_quote
              </span>
              <div>
                <p className="text-on-surface font-bold text-lg mb-2" style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, lineHeight: 1.4 }}>
                  &ldquo;They called us cockroaches. We didn&apos;t just accept the name —
                  we registered the domain.&rdquo;
                </p>
                <p className="text-tertiary text-xs uppercase tracking-widest font-bold">
                  CockroachExpress Founding Principle
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="bg-surface-container-lowest py-12 md:py-20 border-y-2 border-surface-container-highest">
          <div className="max-w-[1200px] mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-surface-container p-6 md:p-10 brutalist-border brutalist-shadow-tertiary hover:translate-x-[-2px] hover:translate-y-[-2px] brutalist-shadow-tertiary-hover transition-all duration-200">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <span className="material-symbols-outlined text-tertiary text-3xl md:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
                <div>
                  <h3 className="text-on-surface" style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "clamp(18px, 2.5vw, 24px)", lineHeight: 1.3 }}>
                    Our Vision
                  </h3>
                  <p className="text-tertiary uppercase tracking-widest text-xs font-bold">
                    Absolute Accountability.
                  </p>
                </div>
              </div>
              <p className="text-on-surface-variant mb-4 md:mb-6 text-sm md:text-base" style={{ lineHeight: 1.7 }}>
                We envision a media landscape where power is unapologetically held to
                account. Where &ldquo;strategic spending&rdquo; is called what it is —
                corruption. Where &ldquo;youth engagement&rdquo; doesn&apos;t mean
                &ldquo;using them for votes and discarding them after elections.&rdquo;
                We refuse to look away while the political elite holidays on the
                taxpayer&apos;s dime.
              </p>
              <div className="p-4 bg-background border-l-4 border-tertiary italic text-tertiary font-bold text-sm">
                &ldquo;Where did the money go?&rdquo;
              </div>
            </div>
            <div className="bg-surface-container p-6 md:p-10 brutalist-border brutalist-shadow-secondary hover:translate-x-[-2px] hover:translate-y-[-2px] brutalist-shadow-secondary-hover transition-all duration-200">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <span className="material-symbols-outlined text-secondary text-3xl md:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                <div>
                  <h3 className="text-on-surface" style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "clamp(18px, 2.5vw, 24px)", lineHeight: 1.3 }}>
                    Our Mission
                  </h3>
                  <p className="text-secondary uppercase tracking-widest text-xs font-bold">
                    Weaponizing Satire. Empowering Youth.
                  </p>
                </div>
              </div>
              <p className="text-on-surface-variant mb-4 md:mb-6 text-sm md:text-base" style={{ lineHeight: 1.7 }}>
                Our mission is to build an un-ignorable digital platform for the young
                people who have been dismissed as lazy, chronically online, or treated
                as political afterthoughts. We are reclaiming the insults thrown at our
                generation and using them as ammunition. Satire is our weapon. Truth is
                our target. Employment is our demand.
              </p>
              <div className="p-4 bg-background border-l-4 border-secondary italic text-secondary font-bold text-sm">
                &ldquo;That&apos;s it. That&apos;s the mission. The rest is satire.&rdquo;
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-12 py-12 md:py-20">
          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <div className="h-0.5 w-12 bg-secondary"></div>
            <span className="text-secondary uppercase tracking-widest text-xs font-bold">
              WHAT WE STAND FOR
            </span>
          </div>
          <h2
              className="text-[26px] sm:text-[32px] md:text-[40px] text-on-surface uppercase mb-8 md:mb-12"
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.2 }}
          >
            Our <span className="text-tertiary">Values</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="scanline-hover p-6 border border-surface-container-highest bg-surface-container hover:border-tertiary hover:translate-y-[-2px] transition-all duration-200"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="material-symbols-outlined text-tertiary mb-3 hover:scale-125 transition-transform duration-200">
                  {v.icon}
                </span>
                <h4 className="text-on-surface mb-2 uppercase text-sm font-bold">{v.title}</h4>
                <p className="text-on-surface-variant text-xs" style={{ lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-surface-container-lowest py-12 md:py-20 border-y-2 border-surface-container-highest">
          <div className="max-w-[900px] mx-auto px-4 md:px-12">
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <div className="h-0.5 w-12 bg-tertiary"></div>
              <span className="text-tertiary uppercase tracking-widest text-xs font-bold">
                THE JOURNEY
              </span>
            </div>
            <h2
              className="text-[26px] sm:text-[32px] md:text-[40px] text-on-surface uppercase mb-10 md:mb-16"
              style={{ fontFamily: "var(--font-montserrat)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.2 }}
            >
              A Brief <span className="text-secondary">History</span>
            </h2>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-surface-container-highest md:-translate-x-px" />
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-12 last:mb-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-tertiary -translate-x-1.5 md:-translate-x-1.5 mt-2 z-10" />
                  <div className={`flex-1 pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                    <span className="text-tertiary text-xs font-bold uppercase tracking-widest">{item.date}</span>
                    <h3 className="text-on-surface mt-1 mb-2" style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700, fontSize: "18px", lineHeight: 1.3 }}>
                      {item.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm" style={{ lineHeight: 1.6 }}>{item.body}</p>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="max-w-[900px] mx-auto px-4 md:px-12 py-12 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-counter bg-surface-container p-8 text-center brutalist-border border-outline hover:border-tertiary transition-all duration-200">
                <p className={`text-[24px] md:text-[32px] mb-1 ${stat.color}`} style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900 }}>
                  {stat.value}
                </p>
                <p className="text-on-surface-variant uppercase text-[9px] md:text-[10px] tracking-tighter font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="bg-surface-container-lowest py-12 md:py-20 border-y-2 border-surface-container-highest">
          <div className="max-w-[1200px] mx-auto px-4 md:px-12">
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <div className="h-0.5 w-12 bg-secondary"></div>
              <span className="text-secondary uppercase tracking-widest text-xs font-bold">
                THE RESISTANCE
              </span>
            </div>
            <h2
            className="text-[26px] sm:text-[32px] md:text-[40px] text-on-surface uppercase mb-8 md:mb-12"
              style={{ fontFamily: "var(--font-montserrat)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.2 }}
            >
              Meet the <span className="text-secondary">Cockroaches</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-surface-container p-6 brutalist-border hover:border-tertiary transition-all duration-200 hover:translate-y-[-2px] text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-tertiary flex items-center justify-center text-surface font-black text-lg mx-auto mb-4">
                    {member.initials}
                  </div>
                  <h4 className="text-on-surface font-bold text-sm mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>
                    {member.name}
                  </h4>
                  <p className="text-tertiary text-[10px] uppercase tracking-widest font-bold mb-3">
                    {member.role}
                  </p>
                  <p className="text-on-surface-variant text-xs" style={{ lineHeight: 1.5 }}>
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Manifesto Quote */}
        <section className="py-16 md:py-24">
          <div className="max-w-[800px] mx-auto px-4 md:px-12 text-center">
            <span className="material-symbols-outlined text-secondary text-3xl md:text-4xl mb-4 md:mb-6 inline-block">auto_stories</span>
            <h2
              className="text-[24px] sm:text-[28px] md:text-[40px] text-on-surface uppercase mb-6 md:mb-8 italic"
              style={{ fontFamily: "var(--font-montserrat)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.2 }}
            >
              The News That <span className="text-tertiary">Won&apos;t Die.</span>
            </h2>
            <p className="text-on-surface-variant mx-auto mb-6 md:mb-8 text-sm md:text-[18px]" style={{ lineHeight: 1.6 }}>
              We don&apos;t walk on eggshells. We crawl straight through the cracks to
              uncover the raw, unfiltered truth. Mainstream media might dismiss our
              generation, but Cockroach Express is built to be resilient, highly
              adaptable, and impossible to crush.
            </p>
            <div className="relative group overflow-hidden brutalist-border brutalist-shadow-tertiary inline-block">
              <Image
                alt="Gritty office terminal environment"
                className="w-full max-w-[600px] h-48 md:h-64 object-cover grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 grayscale-themed"
                width={600}
                height={256}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdwCpMvEy8kRV17jZXuICBC3uDk8BiJIatzzs_FsHWYUep_2fQr5FkMr0qTWRnrogANjtjg-9Qb9EpIRzDHJ_Q0ofJ8y8eD6FcW6eIETK9HLhkbw9u-PUaMiC9dG4OsD9aZobWQDYanBIPMjW7etKOrRuRlTfMXWEbTPSWstq878gcGTX5u1cYHEgzMcd8WQY_wBIPQfG8zCECR8X-tQ_TEtWJe-5bLqJVHenX6k8JCvyggiVBUrhmOEKhFqAG5LbSwn7-Juw7MMo"
                unoptimized
              />
              <div className="absolute inset-0 bg-surface/70 flex items-center justify-center p-6 text-center">
                <p className="italic text-on-surface text-sm font-bold">
                  &ldquo;We don&apos;t need funding. We need employment. If you
                  want to help, hire someone.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-4 md:px-12 py-8 border-t-2 border-surface-container-highest text-center">
        <Link
          href="/"
          className="text-tertiary hover:underline font-bold text-sm uppercase tracking-tighter flex items-center gap-2 justify-center"
        >
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          Back to Home
        </Link>
      </footer>
    </div>
  );
}
