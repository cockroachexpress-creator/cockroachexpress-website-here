"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Article } from "@/lib/articles";

const FILTERS = [
  { label: "ALL", value: "ALL" },
  { label: "POLITICS", value: "POLITICS" },
  { label: "SPORTS", value: "SPORTS" },
  { label: "TECH", value: "TECH" },
  { label: "ECONOMY", value: "ECONOMY" },
  { label: "CULTURE", value: "CULTURE" },
  { label: "HEALTH", value: "HEALTH" },
  { label: "RESEARCH", value: "RESEARCH" },
];

export default function TrendingGrid({ articles }: { articles: Article[] }) {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filtered =
    activeFilter === "ALL"
      ? articles
      : articles.filter((a) => a.category === activeFilter);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {FILTERS.map((f) => {
          const isActive = activeFilter === f.value;
          const count =
            f.value === "ALL"
              ? articles.length
              : articles.filter((a) => a.category === f.value).length;



          return (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-2 brutalist-border uppercase font-bold text-xs tracking-widest transition-all cursor-pointer ${
                isActive
                  ? "bg-secondary text-on-secondary border-secondary"
                  : "bg-surface-container-low text-on-surface-variant hover:border-secondary hover:text-secondary"
              }`}
            >
              {f.label}
              {count > 0 && (
                <span
                  className={`ml-2 text-[10px] ${
                    isActive
                      ? "text-on-secondary/70"
                      : "text-on-surface-variant/50"
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Articles grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 border-2 border-dashed border-outline-variant brutalist-border">
          <span className="material-symbols-outlined text-[48px] text-on-surface-variant mb-4 block">
            filter_list_off
          </span>
          <p className="text-on-surface-variant uppercase font-bold tracking-widest text-sm">
            No articles in this category yet
          </p>
          <p className="text-on-surface-variant text-xs mt-2">
            Check back soon — the cockroaches are scouting
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((article) => (
            <Link
              key={article.slug}
              href={`/article/${article.slug}`}
              className="block"
            >
              <article className="scanline-hover border-glow bg-surface-container-low brutalist-border hover:border-tertiary transition-colors group h-full">
                <div className="relative h-64 overflow-hidden border-b-2 border-surface-container-highest">
                  <Image
                    alt={article.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    width={600}
                    height={256}
                    src={article.image}
                    unoptimized
                  />
                  <span className="absolute top-3 right-3 bg-surface-container-lowest/90 text-tertiary px-2 py-0.5 text-[10px] uppercase font-bold brutalist-border">
                    {article.category}
                  </span>
                </div>
                <div className="p-6 space-y-4">
                  <h3
                    className="text-on-surface leading-tight group-hover:text-tertiary transition-colors"
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      fontWeight: 700,
                      fontSize: "24px",
                      lineHeight: 1.3,
                    }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-on-surface-variant line-clamp-2">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-surface-container-highest">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-tertiary flex items-center justify-center text-surface font-black text-sm transition-transform duration-200 group-hover:scale-110 group-hover:rotate-12">
                        {article.authorInitials}
                      </div>
                      <div>
                        <p className="text-on-surface font-bold text-xs">
                          {article.author}
                        </p>
                        <p className="text-[10px] text-on-surface-variant uppercase">
                          {article.date}
                        </p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-tertiary opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-200">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
