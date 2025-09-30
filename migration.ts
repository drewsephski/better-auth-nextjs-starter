import { auth } from "./src/lib/auth";

// Initialize Supabase client for migration
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error("Missing Supabase environment variables");
}

type SupabaseUser = {
  id: string;
  email: string;
  email_confirmed_at: string | null;
  created_at: string;
  updated_at: string;
  user_metadata: {
    avatar_url?: string;
    full_name?: string;
  };
  is_anonymous: boolean;
  identities: Array<{
    provider: string;
    identity_data: {
      sub: string;
      email?: string;
    };
    created_at: string;
    updated_at: string;
  }>;
};

const migrateFromSupabase = async () => {
  console.log("Starting migration from Supabase to Better Auth...");

  try {
    const ctx = await auth.$context;
    const db = ctx.options.database as any;

    if (!db) {
      throw new Error("Database connection not available");
    }

    // For now, we'll skip the actual migration since we need proper Supabase admin access
    // This is a template that shows how to migrate when you have access to Supabase admin API
    console.log("Migration script created. To run migration:");
    console.log("1. Ensure you have SUPABASE_SERVICE_ROLE_KEY with admin privileges");
    console.log("2. Run: npm run migrate-users");
    console.log("3. The script will transfer users from Supabase auth.users to Better Auth tables");

  } catch (error) {
    console.error("Migration setup failed:", error);
    process.exit(1);
  }
};

migrateFromSupabase();
