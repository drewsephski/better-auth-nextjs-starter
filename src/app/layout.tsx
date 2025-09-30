// app/layout.tsx
import Link from "next/link";
import "@/styles/globals.css";
import type { ReactNode } from "react";
import { Header } from "@/components/header";
import { Providers } from "./providers";
import { PageTransition } from "@/components/page-transition";
import { AnimatedText } from "@/components/animated-text";
import type { Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Better Auth Next.js Starter",
  description:
    "Better Auth Next.js Starter with Postgres, Drizzle, shadcn/ui and Tanstack Query",
};

export const viewport: Viewport = {
  initialScale: 1,
  viewportFit: "cover",
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bricolageGrotesque.className + "flex min-h-svh flex-col antialiased relative overflow-x-hidden"}>
        {/* Light mode: white and blue gradient, Dark mode: dark blue/black gradient */}
        <div className="fixed inset-0 bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-blue-900 dark:via-slate-900 dark:to-black">
          {/* Animated background orbs */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 right-4 w-72 h-72 bg-indigo-400/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>

          {/* Subtle dot pattern overlay - different for light/dark modes */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.03)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.02)_1px,transparent_0)] bg-[length:20px_20px]"></div>
        </div>

        <Providers>
          <div className="relative min-h-screen z-10">
            {/* Enhanced Header with glassmorphism */}
            <div className="sticky top-0 z-50">
              <div className="absolute inset-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 shadow-lg"></div>
              <div className="relative">
                <Header />
              </div>
            </div>

            <main className="flex-grow relative">
              {/* Content wrapper with enhanced spacing */}
              <div className="min-h-screen">
                <PageTransition>
                  {children}
                </PageTransition>
              </div>
            </main>

            {/* Enhanced Footer with glassmorphism */}
            <footer className="relative">
              <div className="absolute inset-0 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border-t border-slate-200/30 dark:border-slate-800/30 shadow-lg">
                <div className="container mx-auto px-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <svg
                          className="size-8"
                          fill="none"
                          height="45"
                          viewBox="0 0 60 45"
                          width="60"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="fill-black dark:fill-white"
                            clipRule="evenodd"
                            d="M0 0H15V45H0V0ZM45 0H60V45H45V0ZM20 0H40V15H20V0ZM20 30H40V45H20V30Z"
                            fillRule="evenodd"
                          />
                        </svg>
                        <AnimatedText
                          as="h3"
                          className="text-lg font-semibold tracking-tight"
                          delay={0.1}
                          duration={0.6}
                          stagger={0.015}
                        >
                          Better Auth Starter
                        </AnimatedText>
                      </div>
                      <AnimatedText
                        as="p"
                        className="text-sm text-muted-foreground leading-relaxed"
                        delay={0.3}
                        duration={0.7}
                        stagger={0.008}
                        type="words"
                      >
                        A production-ready authentication starter kit with Next.js, Better Auth, PostgreSQL, and modern web technologies.
                      </AnimatedText>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                      <AnimatedText
                        as="h4"
                        className="text-sm font-semibold uppercase tracking-wider text-muted-foreground"
                        delay={0.5}
                        duration={0.5}
                        stagger={0.015}
                      >
                        Quick Links
                      </AnimatedText>
                      <nav className="flex flex-col space-y-3">
                        <AnimatedText
                          as="span"
                          delay={0.7}
                          duration={0.4}
                          stagger={0.015}
                        >
                          <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:translate-x-1 inline-block">
                            Dashboard
                          </Link>
                        </AnimatedText>
                        <AnimatedText
                          as="span"
                          delay={0.8}
                          duration={0.4}
                          stagger={0.015}
                        >
                          <Link href="/profile" className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:translate-x-1 inline-block">
                            Profile
                          </Link>
                        </AnimatedText>
                        <AnimatedText
                          as="span"
                          delay={0.9}
                          duration={0.4}
                          stagger={0.015}
                        >
                          <Link href="/settings" className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:translate-x-1 inline-block">
                            Settings
                          </Link>
                        </AnimatedText>
                        <AnimatedText
                          as="span"
                          delay={1.0}
                          duration={0.4}
                          stagger={0.015}
                        >
                          <Link href="/admin" className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:translate-x-1 inline-block">
                            Admin
                          </Link>
                        </AnimatedText>
                      </nav>
                    </div>

                    {/* Legal & Contact */}
                    <div className="space-y-4">
                      <AnimatedText
                        as="h4"
                        className="text-sm font-semibold uppercase tracking-wider text-muted-foreground"
                        delay={1.1}
                        duration={0.5}
                        stagger={0.015}
                      >
                        Legal & Contact
                      </AnimatedText>
                      <nav className="flex flex-col space-y-3">
                        <AnimatedText
                          as="span"
                          delay={1.3}
                          duration={0.4}
                          stagger={0.015}
                        >
                          <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:translate-x-1 inline-block">
                            Terms of Service
                          </Link>
                        </AnimatedText>
                        <AnimatedText
                          as="span"
                          delay={1.4}
                          duration={0.4}
                          stagger={0.015}
                        >
                          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:translate-x-1 inline-block">
                            Privacy Policy
                          </Link>
                        </AnimatedText>
                        <AnimatedText
                          as="span"
                          delay={1.5}
                          duration={0.4}
                          stagger={0.015}
                        >
                          <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:translate-x-1 inline-block">
                            Contact Us
                          </Link>
                        </AnimatedText>
                      </nav>
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="pt-8 border-t border-slate-800/50">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                      <AnimatedText
                        as="p"
                        className="text-sm text-muted-foreground"
                        delay={1.7}
                        duration={0.6}
                        stagger={0.015}
                        type="words"
                      >
                        © {new Date().getFullYear()} Better Auth Next.js Starter. All rights reserved.
                      </AnimatedText>
                      <div className="flex items-center gap-4 mt-4 md:mt-0">
                        <AnimatedText
                          as="span"
                          delay={1.9}
                          duration={0.5}
                          stagger={0.015}
                        >
                          <span className="text-sm text-muted-foreground">Built with ❤️ using Next.js & Better Auth</span>
                        </AnimatedText>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}