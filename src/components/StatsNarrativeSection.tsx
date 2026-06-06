"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "100K+", numeric: 100, suffix: "K+", label: "Monthly Readers", textColor: "text-tertiary" },
  { value: "500+", numeric: 500, suffix: "+", label: "Articles Published", textColor: "text-on-surface" },
  { value: "50+", numeric: 50, suffix: "+", label: "Writers Worldwide", textColor: "text-on-surface" },
  { value: "0", numeric: 0, suffix: "", label: "Fucks Given", textColor: "text-secondary" },
];

const traits = [
  { icon: "edit_note", title: "Fearless Writing", desc: "No sacred cows, no pulled punches. We write what they can't say." },
  { icon: "verified", title: "Factual Absurdity", desc: "We don't invent the news—we just format it so you can see the madness." },
  { icon: "bolt", title: "Relentless Energy", desc: "Like our namesake, we don't stop. We thrive in the dark and survive the blast." },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    if (target === 0) return;
    const duration = 1500;
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, [started, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function StatsNarrativeSection() {
  const ref = useScrollReveal();

  return (
    <section id="about" ref={ref} className="py-24 px-4 md:px-12 bg-surface-container-lowest overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 space-y-12">
            <div>
              <span className="text-tertiary uppercase tracking-widest block mb-2 font-bold text-sm reveal">
                — ABOUT US
              </span>
              <h2
                className="text-[32px] md:text-[40px] mb-6 uppercase reveal"
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}
              >
                Why We Chose the <span className="text-tertiary">Name</span>
              </h2>
              <p className="text-on-surface-variant reveal" style={{ fontSize: "18px", lineHeight: 1.6 }}>
                When the Chief Justice of India compared unemployed youth to
                &ldquo;parasitic cockroaches,&rdquo; he meant it as an insult.
                We took it as a business plan. CockroachExpress is India&apos;s
                most honest news source—a satirical platform built by the
                unemployed, for the unemployed, powered by spite and free WiFi.
              </p>
            </div>
            <div className="stagger-children grid grid-cols-1 sm:grid-cols-3 gap-6">
              {traits.map((trait) => (
                <div
                  key={trait.title}
                  className="scanline-hover p-6 border border-surface-container-highest bg-surface-container hover:border-tertiary hover:translate-y-[-2px] transition-all duration-200"
                >
                  <span className="material-symbols-outlined text-tertiary mb-3 hover:scale-125 transition-transform duration-200">
                    {trait.icon}
                  </span>
                  <h4 className="text-on-surface mb-2 uppercase text-sm font-bold">
                    {trait.title}
                  </h4>
                  <p className="text-on-surface-variant text-xs">
                    {trait.desc}
                  </p>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn-ripple flex items-center gap-2 uppercase text-sm text-tertiary hover:underline transition-all font-bold cursor-pointer reveal group">
              READ OUR FULL STORY{" "}
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform duration-200">arrow_right_alt</span>
            </Link>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <div className="stagger-children grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="stat-counter bg-surface-container p-6 text-center brutalist-border border-outline hover:border-tertiary transition-all duration-200"
                >
                  <p
                    className={`text-[24px] mb-1 ${stat.textColor}`}
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      fontWeight: 900,
                    }}
                  >
                    <CountUp target={stat.numeric} suffix={stat.suffix} />
                  </p>
                  <p className="text-on-surface-variant uppercase text-[9px] tracking-tighter font-bold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="relative group overflow-hidden brutalist-border reveal">
              <Image
                alt="Gritty office terminal environment"
                className="w-full h-56 object-cover grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 grayscale-themed"
                width={500}
                height={224}
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
        </div>
      </div>
    </section>
  );
}
