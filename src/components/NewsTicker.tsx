import { getLatestHeadlines } from "@/lib/articles";

export default async function NewsTicker() {
  const headlines = await getLatestHeadlines(6);

  if (headlines.length === 0) {
    return (
      <div className="bg-surface-container-lowest py-2 border-b-2 border-secondary-container">
        <div className="ticker-wrap">
          <div className="ticker-move flex gap-8">
            <span className="text-secondary uppercase font-bold text-sm whitespace-nowrap">
              COCKROACH EXPRESS — LIVE NEWS LOADING... •
            </span>
          </div>
        </div>
      </div>
    );
  }

  const doubled = [...headlines, ...headlines];

  return (
    <div className="bg-surface-container-lowest py-2 border-b-2 border-secondary-container">
      <div className="ticker-wrap">
        <div className="ticker-move flex gap-8">
          {doubled.map((headline, i) => (
            <span key={i} className="text-secondary uppercase font-bold text-sm whitespace-nowrap">
              {headline}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
