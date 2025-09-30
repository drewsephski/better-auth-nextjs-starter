import { authViewPaths } from "@daveyplate/better-auth-ui/server";
import { AuthPageClient } from "./client";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.values(authViewPaths).map((path) => ({ path }));
}

export default async function AuthPage({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const { path } = await params;

  return <AuthPageClient initialPath={path} />;
}