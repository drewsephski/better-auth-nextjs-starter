"use client";

import { AuthView } from "@daveyplate/better-auth-ui";
import Link from "next/link";

interface AuthPageClientProps {
  initialPath: string;
}

export function AuthPageClient({ initialPath }: AuthPageClientProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main content */}
      <div className="w-full max-w-sm flex flex-col gap-4 relative z-10">
        <AuthView path={initialPath} />

        {!["callback", "sign-out"].includes(initialPath) && (
          <p className="w-3xs text-center text-muted-foreground text-xs mx-auto max-w-sm">
            By continuing, you agree to our{" "}
            <Link
              className="text-warning underline hover:text-warning/80 transition-colors"
              href="/terms"
              target="_blank"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              className="text-warning underline hover:text-warning/80 transition-colors"
              href="/privacy"
              target="_blank"
            >
              Privacy Policy
            </Link>
            .
          </p>
        )}
      </div>
    </div>
  );
}
