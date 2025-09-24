// src/app/api/test-db/route.ts
import { db } from "@/database/db";
import { users } from "@/database/schema";
import { NextResponse } from "next/server";
import { count } from "drizzle-orm";

export async function GET() {
  try {
    // Test the database connection by counting users
    const result = await db!.select({ count: count() }).from(users);
    
    return NextResponse.json({
      success: true,
      message: "Database connection successful",
      userCount: result[0].count
    });
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Database connection failed",
        error: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}