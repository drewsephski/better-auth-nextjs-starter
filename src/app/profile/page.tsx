// app/profile/page.tsx
"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Profile() {
  const [session, setSession] = useState<any>(null);
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const result = await authClient.getSession();
        if (result.data) {
          setSession(result.data);
          setName(result.data.user.name || "");
        } else {
          // Redirect to sign in if no session
          router.push("/sign-in");
        }
      } catch (error) {
        console.error("Error fetching session:", error);
        router.push("/sign-in");
      }
    };

    fetchSession();
  }, [router]);

  if (!session) {
    return <div className="container mx-auto py-8">Loading...</div>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("name", name);

      const response = await fetch("/api/user/update", {
        method: "PUT",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Profile updated successfully!");
        // Refresh the session to get updated data
        const result = await authClient.getSession();
        if (result.data) {
          setSession(result.data);
        }
      } else {
        toast.error(data.error || "Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("An error occurred while updating your profile");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Profile Settings</h1>
        <p className="text-muted-foreground">
          Manage your profile information and preferences
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>
              Update your personal details here
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={session.user.email} 
                  placeholder="your.email@example.com"
                  disabled
                />
                <p className="text-xs text-muted-foreground">
                  Email can't be changed
                </p>
              </div>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save Changes"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Profile Picture</CardTitle>
            <CardDescription>
              Update your profile picture
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center gap-4">
              {session.user.image ? (
                <img 
                  src={session.user.image} 
                  alt="Profile" 
                  className="rounded-full w-24 h-24 object-cover"
                />
              ) : (
                <div className="bg-muted rounded-full w-24 h-24 flex items-center justify-center">
                  <span className="text-2xl font-bold">
                    {session.user.name?.charAt(0) || session.user.email.charAt(0)}
                  </span>
                </div>
              )}
              <div className="flex gap-2">
                <Button variant="outline">Upload New</Button>
                <Button variant="outline">Remove</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}