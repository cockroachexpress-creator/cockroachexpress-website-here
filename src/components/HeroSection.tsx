"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[600px] flex items-center bg-surface overflow-hidden border-b-2 border-surface-container-highest">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Gritty cinematic urban background"
          className="w-full h-full object-cover hero-bg-img"
          fill
          src="/herobackground.jpeg"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>
      <div className="relative z-10 w-full px-4 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
        <div className="space-y-6">
          <span
            className={`inline-block bg-secondary text-on-secondary px-3 py-1 text-[12px] uppercase tracking-widest font-bold transition-all duration-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            NEWS
          </span>
          <h2
            className="text-[32px] md:text-[40px] text-on-surface leading-tight"
            style={{
              fontFamily: "var(--font-montserrat)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            <span
              className={`inline-block transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0.3s" }}
            >
              VOICE OF YOUTH IS OUR
            </span>
            <br />
            <span
              className={`text-tertiary inline-block transition-all duration-700 ${
                mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "0.6s" }}
            >
              TRUTH.
            </span>
          </h2>
          <p
            className={`text-on-surface-variant max-w-xl transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ fontSize: "18px", lineHeight: 1.6, transitionDelay: "0.8s" }}
          >
            When the mainstream media looks away, we stare back. Cockroach
            Express is the digital frontline for the resilient, the unfiltered,
            and the survivors of the status quo.
          </p>
          <button
            onClick={() => {
              const el = document.getElementById("trending");
              if (el) {
                const offset = 80;
                const top = el.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }}
            className={`btn-ripple bg-secondary text-on-secondary px-8 py-4 uppercase font-bold text-sm brutalist-border brutalist-shadow-secondary flex items-center gap-2 hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all cursor-pointer ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "1s" }}
          >
            READ MORE{" "}
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>
        <div className="hidden lg:block">
          <div className="hero-image-float bg-surface-container brutalist-border p-4 brutalist-shadow-tertiary">
            <div className="relative w-full aspect-[4/3] overflow-hidden brutalist-border">
              <Image
                alt="Cockroach Express reporter on the field"
                fill
                className="object-cover"
                src="/website_reporter_frame.png"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="mt-4 text-center italic font-bold text-tertiary text-sm">
              &ldquo;They tried to step on us. We came back.&rdquo;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
