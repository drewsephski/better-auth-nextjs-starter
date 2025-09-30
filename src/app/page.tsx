// src/app/page.tsx
'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserIcon, LockIcon, SettingsIcon, BarChartIcon } from "lucide-react";
import { AnimatedText } from "@/components/animated-text";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return null; // Prevent flash of unstyled content
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <AnimatedText
            as="h1"
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            delay={0.1}
            duration={0.8}
            stagger={0.03}
            type="words"
          >
            Better Auth Next.js Starter
          </AnimatedText>
          <AnimatedText
            as="p"
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
            delay={0.6}
            duration={0.7}
            stagger={0.015}
            type="words"
          >
            A production-ready authentication starter kit with Next.js, Better Auth, PostgreSQL, and Drizzle ORM.
          </AnimatedText>
          <div className="mt-10 flex gap-4">
            <Button asChild size="lg">
              <Link href="/auth/sign-up">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/auth/sign-in">Sign In</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-16">
        <AnimatedText
          as="h2"
          className="text-3xl font-bold text-center mb-12"
          delay={1.3}
          duration={0.6}
          stagger={0.03}
          type="words"
        >
          Features
        </AnimatedText>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <AnimatedText
            as="div"
            delay={1.5}
            duration={0.5}
            stagger={0.02}
          >
            <Card>
              <CardHeader>
                <UserIcon className="h-8 w-8 mb-4 text-primary" />
                <CardTitle>User Authentication</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Secure email/password authentication with session management
                </CardDescription>
              </CardContent>
            </Card>
          </AnimatedText>

          <AnimatedText
            as="div"
            delay={1.6}
            duration={0.5}
            stagger={0.02}
          >
            <Card>
              <CardHeader>
                <LockIcon className="h-8 w-8 mb-4 text-primary" />
                <CardTitle>Social Login</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Sign in with Google and other social providers
                </CardDescription>
              </CardContent>
            </Card>
          </AnimatedText>

          <AnimatedText
            as="div"
            delay={1.7}
            duration={0.5}
            stagger={0.02}
          >
            <Card>
              <CardHeader>
                <SettingsIcon className="h-8 w-8 mb-4 text-primary" />
                <CardTitle>Profile Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Update your profile information and preferences
                </CardDescription>
              </CardContent>
            </Card>
          </AnimatedText>

          <AnimatedText
            as="div"
            delay={1.8}
            duration={0.5}
            stagger={0.02}
          >
            <Card>
              <CardHeader>
                <BarChartIcon className="h-8 w-8 mb-4 text-primary" />
                <CardTitle>Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Beautiful dashboard with user statistics and activity
                </CardDescription>
              </CardContent>
            </Card>
          </AnimatedText>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="container mx-auto py-16">
        <AnimatedText
          as="h2"
          className="text-3xl font-bold text-center mb-12"
          delay={2.0}
          duration={0.6}
          stagger={0.03}
          type="words"
        >
          Technology Stack
        </AnimatedText>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatedText
            as="div"
            delay={2.2}
            duration={0.5}
            stagger={0.02}
          >
            <Card>
              <CardHeader>
                <CardTitle>Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Next.js 14+</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• shadcn/ui Components</li>
                </ul>
              </CardContent>
            </Card>
          </AnimatedText>

          <AnimatedText
            as="div"
            delay={2.3}
            duration={0.5}
            stagger={0.02}
          >
            <Card>
              <CardHeader>
                <CardTitle>Authentication</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Better Auth</li>
                  <li>• Session Management</li>
                  <li>• Social Providers</li>
                  <li>• Password Reset</li>
                </ul>
              </CardContent>
            </Card>
          </AnimatedText>

          <AnimatedText
            as="div"
            delay={2.4}
            duration={0.5}
            stagger={0.02}
          >
            <Card>
              <CardHeader>
                <CardTitle>Database</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• PostgreSQL</li>
                  <li>• Drizzle ORM</li>
                  <li>• Database Migrations</li>
                  <li>• Schema Management</li>
                </ul>
              </CardContent>
            </Card>
          </AnimatedText>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto py-16 text-center">
        <AnimatedText
          as="h2"
          className="text-3xl font-bold mb-6"
          delay={2.6}
          duration={0.6}
          stagger={0.03}
          type="words"
        >
          Ready to Get Started?
        </AnimatedText>
        <AnimatedText
          as="p"
          className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8"
          delay={2.9}
          duration={0.6}
          stagger={0.015}
          type="words"
        >
          Join thousands of developers who are building secure applications with Better Auth.
        </AnimatedText>
        <Button asChild size="lg">
          <Link href="/auth/sign-up">Create Your Account</Link>
        </Button>
      </section>
    </div>
  );
}
