import * as dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

export const client = new MongoClient(process.env.DATABASE_URL ?? '');
export const mongodb = client.db();
