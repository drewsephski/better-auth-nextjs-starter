'use client';

import { GitHubIcon, UserButton } from '@daveyplate/better-auth-ui';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';
import { AnimatedText } from './animated-text';

export function Header() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return null; // Prevent flash of unstyled content
  }

  return (
    <header className="sticky top-0 z-50 flex h-12 justify-between border-b bg-background/60 px-safe-or-4 backdrop-blur md:h-14 md:px-safe-or-6">
      <Link href="/" className="flex items-center gap-2">
        <svg
          className="size-5"
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
          as="span"
          className="font-mono text-sm font-medium tracking-wider"
          delay={0.2}
          duration={0.6}
          stagger={0.02}
        >
          BETTER-AUTH. STARTER
        </AnimatedText>
      </Link>

      <div className="flex items-center gap-4">
        <nav className="flex items-center gap-4">
          <AnimatedText
            as="span"
            delay={0.4}
            duration={0.5}
            stagger={0.03}
          >
            <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
              Dashboard
            </Link>
          </AnimatedText>
          <AnimatedText
            as="span"
            delay={0.5}
            duration={0.5}
            stagger={0.03}
          >
            <Link href="/profile" className="text-sm font-medium transition-colors hover:text-primary">
              Profile
            </Link>
          </AnimatedText>
          <AnimatedText
            as="span"
            delay={0.6}
            duration={0.5}
            stagger={0.03}
          >
            <Link href="/settings" className="text-sm font-medium transition-colors hover:text-primary">
              Settings
            </Link>
          </AnimatedText>
          <AnimatedText
            as="span"
            delay={0.7}
            duration={0.5}
            stagger={0.03}
          >
            <Link href="/admin" className="text-sm font-medium transition-colors hover:text-primary">
              Admin
            </Link>
          </AnimatedText>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="https://github.com/drewsephski/better-auth-nextjs-starter"
            target="_blank"
          >
            <Button variant="outline" size="icon" className="size-8 rounded-full">
              <GitHubIcon />
            </Button>
          </Link>

          <ModeToggle />
          <UserButton size="icon" />
        </div>
      </div>
    </header>
  );
}