// src/app/privacy/page.tsx
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg dark:prose-invert">
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us when you create an account, 
            update your profile, or communicate with us. This may include your name, email 
            address, profile picture, and any other information you choose to provide.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, 
            to communicate with you, and to personalize your experience. This includes:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Creating and managing your account</li>
            <li>Providing customer support</li>
            <li>Sending you technical notices and updates</li>
            <li>Protecting the security and integrity of our service</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third 
            parties without your consent. We may share your information in the following 
            circumstances:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>With your consent</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and property</li>
            <li>With service providers who assist us in operating our service</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your 
            personal information against unauthorized or unlawful processing and against 
            accidental loss, destruction, or damage.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to provide our 
            services and comply with legal obligations. When we no longer need your 
            information, we will securely delete it.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal information at 
            any time. You may also have the right to object to or restrict certain 
            processing of your information.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any 
            changes by posting the new Privacy Policy on this page and updating the 
            "Last updated" date.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <Link href="mailto:privacy@better-auth-starter.com" className="text-primary hover:underline">
              privacy@better-auth-starter.com
            </Link>.
          </p>
        </section>
      </div>
    </div>
  );
}