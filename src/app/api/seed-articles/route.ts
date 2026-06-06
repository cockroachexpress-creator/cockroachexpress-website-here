import { NextResponse } from "next/server";
import { fetchAndStoreNews } from "@/lib/news-fetcher";

export async function POST() {
  try {
    const articles = await fetchAndStoreNews();

    if (articles.length === 0) {
      return NextResponse.json(
        { message: "No new articles fetched from API" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { success: true, fetched: articles.length, articles },
      { status: 201 }
    );
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json(
      { error: "Seed failed", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
