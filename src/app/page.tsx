// src/app/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserIcon, LockIcon, SettingsIcon, BarChartIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Better Auth Next.js Starter
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A production-ready authentication starter kit with Next.js, Better Auth, PostgreSQL, and Drizzle ORM.
          </p>
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
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Technology Stack</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
          Join thousands of developers who are building secure applications with Better Auth.
        </p>
        <Button asChild size="lg">
          <Link href="/sign-up">Create Your Account</Link>
        </Button>
      </section>
    </div>
  );
}