import 'dotenv/config';
import { MongoClient } from "mongodb";

const connectionString = process.env.MONGO_URI || "";

const client = new MongoClient(connectionString);

let db;

try {
  const conn = await client.connect();
  db = conn.db('wp1');
  console.log('Connected to MongoDB');
} catch (error) {
  console.error('MongoDB connection error:', error);
}

export default db;