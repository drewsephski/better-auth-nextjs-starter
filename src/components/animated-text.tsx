'use client';

import { JSX, useEffect, useRef, useState } from 'react';
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

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  as: Component = 'div',
  className = '',
  delay = 0,
  duration = 0.4,
  stagger = 0.03,
  type = 'chars',
  trigger = 'mount'
}) => {
  const elementRef = useTextAnimation({
    delay,
    duration,
    stagger,
    type,
    trigger,
    ease: 'power2.out',
    yOffset: 10
  });

  return (
    <Component ref={elementRef} className={className}>
      {children}
    </Component>
  );
};

export default AnimatedText;
