import { getPoliticalArticles } from "@/lib/articles";
import TrendingGrid from "./TrendingGrid";

export default async function TrendingSection() {
  const articles = await getPoliticalArticles();

  return (
    <section id="trending" className="px-4 md:px-12 py-12 md:py-20 bg-background max-w-[1200px] mx-auto">
      <div className="mb-8 md:mb-12">
        <span className="text-secondary uppercase tracking-widest block mb-2 font-bold text-xs md:text-sm">
          — TRENDING
        </span>
        <h2
          className="text-[26px] sm:text-[32px] md:text-[40px] text-on-surface uppercase"
          style={{
            fontFamily: "var(--font-montserrat)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
          }}
        >
          Political Cockroaches
        </h2>
      </div>
      {articles.length === 0 ? (
        <div className="text-center py-20 border-2 border-dashed border-outline-variant brutalist-border">
          <span className="material-symbols-outlined text-[48px] text-on-surface-variant mb-4 block">
            newspaper
          </span>
          <p className="text-on-surface-variant uppercase font-bold tracking-widest text-sm">
            Loading the latest political news...
          </p>
          <p className="text-on-surface-variant text-xs mt-2">
            News auto-refreshes every 15 minutes
          </p>
        </div>
      ) : (
        <TrendingGrid articles={articles} />
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
