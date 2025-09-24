import * as authSchema from "@/../auth-schema";

// Export all schema items
export * from "@/../auth-schema";

// Export the schema object for use in the drizzle adapter
export { authSchema };

// Export individual tables with names that Better Auth expects
export const user = authSchema.users;
export const session = authSchema.sessions;
export const account = authSchema.accounts;
export const verification = authSchema.verifications;