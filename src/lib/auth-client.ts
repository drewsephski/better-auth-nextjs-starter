import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:3000",
});

// Export the individual functions for easier usage
export const { signIn, signOut, signUp } = authClient;

// Also export the email method for signUp
export const signUpEmail = signUp.email;