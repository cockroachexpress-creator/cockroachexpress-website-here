"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Article } from "@/lib/articles";
import { useTheme } from "@/components/ThemeProvider";

export default function ArticleDetail({ article, allArticles }: { article: Article; allArticles: Article[] }) {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  const related = allArticles.filter((a) => a.slug !== article.slug).slice(0, 2);

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

      <main className="max-w-[900px] mx-auto px-4 md:px-12 py-12 md:py-20">
        <div
          className={`transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-secondary-container text-on-secondary-container px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
              {article.category}
            </span>
            <span className="text-on-surface-variant text-[11px] uppercase tracking-widest">
              {article.date}
            </span>
          </div>

          <h1
            className="text-[28px] md:text-[48px] text-on-surface leading-tight mb-8"
            style={{
              fontFamily: "var(--font-montserrat)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            {article.title}
          </h1>

          <div className="flex items-center gap-4 mb-10 pb-8 border-b border-surface-container-highest">
            <div className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center text-surface font-black text-sm">
              {article.authorInitials}
            </div>
            <div>
              <p className="text-on-surface font-bold text-sm">{article.author}</p>
              <p className="text-on-surface-variant text-xs uppercase tracking-widest">
                CockroachExpress Correspondent
              </p>
            </div>
          </div>
        </div>

        <div
          className={`relative mb-12 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="brutalist-border brutalist-shadow-tertiary p-2 bg-surface-container">
            <Image
              alt={article.imageAlt}
              className="w-full h-[300px] md:h-[450px] object-cover"
              width={900}
              height={450}
              src={article.image}
              unoptimized
            />
          </div>
        </div>

        <div
          className={`space-y-6 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          {article.body.map((paragraph, i) => (
            <p
              key={i}
              className="text-on-surface-variant leading-relaxed text-[17px]"
              style={{ lineHeight: 1.8 }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t-2 border-surface-container-highest">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex gap-3">
                <button className="brutalist-border px-4 py-2 text-sm font-bold uppercase text-on-surface-variant hover:text-tertiary hover:border-tertiary transition-all cursor-pointer flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">share</span>
                  Share
                </button>
                <button className="brutalist-border px-4 py-2 text-sm font-bold uppercase text-on-surface-variant hover:text-secondary hover:border-secondary transition-all cursor-pointer flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">bookmark</span>
                  Save
                </button>
              </div>
            </div>
            <Link
              href="/#trending"
              className="text-tertiary hover:underline font-bold text-sm uppercase tracking-tighter flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              Back to all articles
            </Link>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-0.5 w-12 bg-tertiary"></div>
              <h2
                className="text-[24px] text-on-surface uppercase"
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontWeight: 700,
                  lineHeight: 1.3,
                }}
              >
                More Cockroaches
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link key={r.slug} href={`/article/${r.slug}`} className="block group">
                  <article className="bg-surface-container brutalist-border hover:border-tertiary transition-colors p-4 scanline-hover">
                    <div className="flex gap-4">
                      <Image
                        alt={r.imageAlt}
                        className="w-24 h-24 object-cover brutalist-border shrink-0 group-hover:border-tertiary transition-colors"
                        width={96}
                        height={96}
                        src={r.image}
                        unoptimized
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-tertiary text-[10px] uppercase tracking-widest font-bold">
                          {r.category}
                        </span>
                        <h3
                          className="text-on-surface text-[14px] leading-snug mt-1 group-hover:text-tertiary transition-colors line-clamp-2"
                          style={{
                            fontFamily: "var(--font-montserrat)",
                            fontWeight: 700,
                          }}
                        >
                          {r.title}
                        </h3>
                        <p className="text-on-surface-variant text-[11px] mt-2 uppercase">
                          {r.date}
                        </p>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="px-4 md:px-12 py-8 border-t-2 border-surface-container-highest text-center">
        <p className="text-on-surface-variant uppercase text-xs font-bold tracking-widest">
          © 2024 COCKROACH EXPRESS. SURVIVING THE BLAST.
        </p>
      </footer>
    </div>
  );
}
