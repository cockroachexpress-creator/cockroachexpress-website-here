export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string[];
  author: string;
  authorInitials: string;
  date: string;
  category: string;
  image: string;
  imageAlt: string;
}

export async function getAllArticles(): Promise<Article[]> {
  const { getArticlesCollection } = await import("./mongodb");
  const collection = await getArticlesCollection();
  const docs = await collection
    .find({ sourceUrl: { $ne: null, $exists: true } })
    .sort({ createdAt: -1 })
    .project({
      slug: 1,
      title: 1,
      description: 1,
      body: 1,
      author: 1,
      authorInitials: 1,
      date: 1,
      category: 1,
      image: 1,
      imageAlt: 1,
      _id: 0,
    })
    .toArray();
  return docs as unknown as Article[];
}

export async function getPoliticalArticles(): Promise<Article[]> {
  const { getArticlesCollection } = await import("./mongodb");
  const collection = await getArticlesCollection();
  const docs = await collection
    .find({ sourceUrl: { $ne: null, $exists: true }, category: "POLITICS" })
    .sort({ createdAt: -1 })
    .project({
      slug: 1,
      title: 1,
      description: 1,
      body: 1,
      author: 1,
      authorInitials: 1,
      date: 1,
      category: 1,
      image: 1,
      imageAlt: 1,
      _id: 0,
    })
    .toArray();
  return docs as unknown as Article[];
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const { getArticlesCollection } = await import("./mongodb");
  const collection = await getArticlesCollection();
  const doc = await collection.findOne(
    { slug },
    {
      projection: {
        slug: 1,
        title: 1,
        description: 1,
        body: 1,
        author: 1,
        authorInitials: 1,
        date: 1,
        category: 1,
        image: 1,
        imageAlt: 1,
        _id: 0,
      },
    }
  );
  return doc as unknown as Article | null;
}

export async function getLatestHeadlines(limit = 6): Promise<string[]> {
  const { getArticlesCollection } = await import("./mongodb");
  const collection = await getArticlesCollection();
  const docs = await collection
    .find({ sourceUrl: { $ne: null, $exists: true } })
    .sort({ createdAt: -1 })
    .limit(limit)
    .project({ title: 1, _id: 0 })
    .toArray();
  return docs.map((d) => d.title.toUpperCase() + " \u2022");
}
