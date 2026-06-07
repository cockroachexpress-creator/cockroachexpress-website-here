"use client";

import Image from "next/image";
import Link from "next/link";
import { Article } from "@/lib/articles";

export default function TrendingGrid({ articles }: { articles: Article[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {articles.map((article) => (
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
  );
}
