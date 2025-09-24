// src/app/api/user/update/route.ts
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  try {
    const session = await auth.api.getSession({ headers: await headers() });
    
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const name = formData.get("name") as string;

    // In a real implementation, you would update the user in your database here
    // For now, we'll just return a success response
    return NextResponse.json({
      success: true,
      message: "Profile updated successfully",
      user: {
        ...session.user,
        name: name || session.user.name,
      }
    });
  } catch (error) {
    console.error("Error updating user data:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}