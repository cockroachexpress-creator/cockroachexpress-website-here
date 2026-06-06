import { Article } from "./articles";
import { getArticlesCollection } from "./mongodb";

const THE_NEWS_API_TOKEN = process.env.THE_NEWS_API_TOKEN;
const THE_NEWS_API_URL = "https://api.thenewsapi.com/v1/news/top";

const CATEGORIES = [
  "general",
  "politics",
  "business",
  "tech",
  "entertainment",
  "health",
  "science",
  "sports",
];

const AUTHORS = [
  { name: "Cockroach Ji", initials: "C" },
  { name: "The Outsider", initials: "TO" },
  { name: "Lazy Bones", initials: "LB" },
  { name: "Midnight Reporter", initials: "MR" },
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80);
}

function formatDate(date: Date): string {
  const months = [
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
  ];
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

function mapCategory(apiCategories: string[]): string {
  const catMap: Record<string, string> = {
    politics: "POLITICS",
    tech: "TECH",
    business: "ECONOMY",
    entertainment: "CULTURE",
    health: "HEALTH",
    science: "RESEARCH",
    sports: "SPORTS",
    general: "TRENDING",
    food: "CULTURE",
    travel: "CULTURE",
  };
  for (const cat of apiCategories) {
    const mapped = catMap[cat.toLowerCase()];
    if (mapped && mapped !== "TRENDING") return mapped;
  }
  return "TRENDING";
}

const FALLBACK_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuBhQ8C3b37T_cm5RsY0H0lb2LPc0PmNnHlWzyVqlFTvkgBRzbpOSE5FdRh5ruCS1lNgeaG3sMMZ4n3397rUebQ8tycHHg3h752j_3VERpnNt_F7NePtat-b1ENhK9wEEAutdeSBbJQQ3C8I_UfFBVJCyF1_Gq2AZILT75KUJ78UdTWdwClPZI5mDDN_eIVwuEWeiKsua2osDlvYvGnDLIPZeZzQSrvOZ1E9_liknCUFEhvqqXOeMRTjkEfO3Ola59dK6rCwf_FRyfU";

export async function deleteOldArticles(): Promise<number> {
  const collection = await getArticlesCollection();
  const fourDaysAgo = new Date(Date.now() - 4 * 24 * 60 * 60 * 1000);
  const result = await collection.deleteMany({
    createdAt: { $lt: fourDaysAgo },
    sourceUrl: { $ne: null },
  });
  return result.deletedCount;
}

export async function fetchAndStoreNews(): Promise<Article[]> {
  if (!THE_NEWS_API_TOKEN) {
    throw new Error("THE_NEWS_API_TOKEN environment variable is not defined");
  }

  await deleteOldArticles();

  const hour = new Date().getUTCHours();
  const categoryIndex = Math.floor(hour / 3) % CATEGORIES.length;
  const category = CATEGORIES[categoryIndex];

  const url = new URL(THE_NEWS_API_URL);
  url.searchParams.set("api_token", THE_NEWS_API_TOKEN);
  url.searchParams.set("locale", "in");
  url.searchParams.set("language", "en");
  url.searchParams.set("categories", category);
  url.searchParams.set("limit", "3");
  url.searchParams.set("sort", "published_at");

  const response = await fetch(url.toString());

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`TheNewsAPI error: ${response.status} - ${errorBody}`);
  }

  const data = await response.json();

  if (!data.data || data.data.length === 0) {
    return [];
  }

  const collection = await getArticlesCollection();
  const storedArticles: Article[] = [];

  for (const newsItem of data.data) {
    if (!newsItem.title || !newsItem.description) {
      continue;
    }

    const existingTitle = await collection.findOne({
      title: newsItem.title,
    });

    if (existingTitle) continue;

    const slug = slugify(newsItem.title) + "-" + Date.now().toString(36);
    const author = AUTHORS[Math.floor(Math.random() * AUTHORS.length)];
    const now = new Date();

    const body = [];
    if (newsItem.description) body.push(newsItem.description);
    if (newsItem.snippet && newsItem.snippet.trim()) {
      body.push(newsItem.snippet.trim());
    }
    if (body.length === 0) {
      body.push(`${newsItem.title}. Read more about this trending story on Cockroach Express.`);
    }

    const article: Article = {
      slug,
      title: newsItem.title,
      description: newsItem.description || newsItem.title,
      body,
      author: author.name,
      authorInitials: author.initials,
      date: formatDate(now),
      category: mapCategory(newsItem.categories || ["general"]),
      image: newsItem.image_url || FALLBACK_IMAGE,
      imageAlt: newsItem.title.slice(0, 50),
    };

    await collection.insertOne({
      ...article,
      createdAt: now,
      sourceUrl: newsItem.url,
      sourceName: newsItem.source,
    });

    storedArticles.push(article);
  }

  return storedArticles;
}
