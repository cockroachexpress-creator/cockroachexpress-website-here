import { notFound } from "next/navigation";
import { getArticleBySlug, getAllArticles } from "@/lib/articles";
import ArticleDetail from "./ArticleDetail";

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return { title: "Not Found" };
  return {
    title: `${article.title} | COCKROACH EXPRESS`,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [article, allArticles] = await Promise.all([
    getArticleBySlug(slug),
    getAllArticles(),
  ]);
  if (!article) notFound();
  return <ArticleDetail article={article} allArticles={allArticles} />;
}
