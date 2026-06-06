import { MongoClient, Db } from "mongodb";

const DB_NAME = "cockroachexpress";

declare global {
  var _mongoClient: MongoClient | undefined;
}

let client: MongoClient;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClient) {
    const mongodbUri = process.env.MONGODB_URI;
    if (!mongodbUri) {
      throw new Error("MONGODB_URI environment variable is not defined");
    }
    global._mongoClient = new MongoClient(mongodbUri, {
      serverSelectionTimeoutMS: 15000,
      connectTimeoutMS: 15000,
      socketTimeoutMS: 30000,
    });
  }
  client = global._mongoClient;
} else {
  const mongodbUri = process.env.MONGODB_URI;
  if (!mongodbUri) {
    throw new Error("MONGODB_URI environment variable is not defined");
  }
  client = new MongoClient(mongodbUri, {
    serverSelectionTimeoutMS: 15000,
    connectTimeoutMS: 15000,
    socketTimeoutMS: 30000,
  });
}

export async function getDb(): Promise<Db> {
  await client.connect();
  return client.db(DB_NAME);
}

export async function getArticlesCollection() {
  const database = await getDb();
  return database.collection("articles");
}
