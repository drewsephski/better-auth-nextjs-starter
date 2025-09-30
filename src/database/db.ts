import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "@/database/schema";

let dbInstance: ReturnType<typeof drizzle> | null = null;

// This file should only be imported on the server side
if (typeof window === "undefined") {
  // For development and production, use environment variables
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    // Supabase-specific settings
    ssl: {
      rejectUnauthorized: false,
    },
    // Connection pooling settings optimized for Supabase
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000,
    query_timeout: 10000,
  });

  dbInstance = drizzle(pool, { schema });
}

export const db = dbInstance;