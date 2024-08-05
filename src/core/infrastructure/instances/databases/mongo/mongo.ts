import * as dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const client = new MongoClient(process.env.DATABASE_URL ?? '');
export const mongodb = client.db();
