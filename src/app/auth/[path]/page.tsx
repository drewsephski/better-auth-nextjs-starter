import { AuthView } from "@daveyplate/better-auth-ui";
import { authViewPaths } from "@daveyplate/better-auth-ui/server";
import Link from "next/link";

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

  return (
    <main className="container flex grow flex-col items-center justify-center gap-4 self-center p-4 md:p-6">
      <div className="w-full max-w-sm flex flex-col gap-4 mx-auto pl-12 mt-28">
        <AuthView path={path} />
      </div>

      {!["callback", "sign-out"].includes(path) && (
        <p className="w-3xs text-center text-muted-foreground text-xs mx-auto max-w-sm">
          By continuing, you agree to our{" "}
          <Link
            className="text-warning underline"
            href="/terms"
            target="_blank"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            className="text-warning underline"
            href="/privacy"
            target="_blank"
          >
            Privacy Policy
          </Link>
          .
        </p>
      )}
    </main>
  );
}