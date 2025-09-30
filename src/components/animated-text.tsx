'use client';

import React, { JSX } from 'react';
import { useTextAnimation } from '@/lib/use-text-animation';

interface AnimatedTextProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  type?: 'chars' | 'words' | 'lines';
  trigger?: 'mount' | 'viewport';
}

export const AnimatedText = React.forwardRef<
  HTMLElement,
  AnimatedTextProps & { as?: keyof JSX.IntrinsicElements }
>(({
  children,
  as: Component = 'div',
  className = '',
  delay = 0,
  duration = 0.4,
  stagger = 0.03,
  type = 'chars',
  trigger = 'mount',
  ...props
}, ref) => {
  const elementRef = useTextAnimation({
    delay,
    duration,
    stagger,
    type,
    trigger,
    ease: 'power2.out',
    yOffset: 10
  });

  // Use the provided ref if available, otherwise use our animation ref
  const combinedRef = ref || elementRef;

  return React.createElement(
    Component as any,
    { ...props, ref: combinedRef, className },
    children
  );
});

AnimatedText.displayName = 'AnimatedText';

export default AnimatedText;
