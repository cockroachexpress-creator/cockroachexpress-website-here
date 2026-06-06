import Image from "next/image";
import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export default async function TrendingSection() {
  const articles = await getAllArticles();

  return (
    <section id="trending" className="px-4 md:px-12 py-20 bg-background max-w-[1200px] mx-auto">
      <div className="mb-12">
        <span className="text-secondary uppercase tracking-widest block mb-2 font-bold text-sm">
          — TRENDING
        </span>
        <h2
          className="text-[32px] md:text-[40px] text-on-surface uppercase"
          style={{
            fontFamily: "var(--font-montserrat)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
          }}
        >
          Cockroaches
        </h2>
      </div>
      {articles.length === 0 ? (
        <div className="text-center py-20 border-2 border-dashed border-outline-variant brutalist-border">
          <span className="material-symbols-outlined text-[48px] text-on-surface-variant mb-4 block">
            newspaper
          </span>
          <p className="text-on-surface-variant uppercase font-bold tracking-widest text-sm">
            Loading the latest news...
          </p>
          <p className="text-on-surface-variant text-xs mt-2">
            News auto-refreshes every 15 minutes
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articles.map((article) => (
            <Link key={article.slug} href={`/article/${article.slug}`} className="block">
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
                        <p className="text-on-surface font-bold text-xs">{article.author}</p>
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
      <div className="mt-12 text-center">
        <button className="btn-ripple px-8 py-3 brutalist-border uppercase font-bold text-sm text-on-surface-variant hover:text-tertiary hover:border-tertiary transition-all cursor-pointer">
          <span className="material-symbols-outlined align-middle mr-2 text-[16px]">
            history
          </span>
          No more latest news
        </button>
      </div>
    </section>
  );
}
