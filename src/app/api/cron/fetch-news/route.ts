import { NextResponse } from "next/server";
import { fetchAndStoreNews } from "@/lib/news-fetcher";

export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  const authHeader = request.headers.get("authorization");

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const articles = await fetchAndStoreNews();

    if (articles.length === 0) {
      return NextResponse.json(
        { success: true, message: "No new articles to post" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { success: true, count: articles.length, articles },
      { status: 200 }
    );
  } catch (error) {
    console.error("Cron fetch-news error:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch news",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
