import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

interface TextAnimationOptions {
  delay?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
  yOffset?: number;
  type?: 'chars' | 'words' | 'lines';
  trigger?: 'mount' | 'viewport';
}

export const useTextAnimation = (options: TextAnimationOptions = {}) => {
  const elementRef = useRef<HTMLElement>(null);
  const splitTextRef = useRef<SplitText | null>(null);
  const animationRef = useRef<GSAPTimeline | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const {
    delay = 0,
    duration = 0.4,
    stagger = 0.03,
    ease = 'power2.out',
    yOffset = 10,
    type = 'chars',
    trigger = 'mount'
  } = options;

  useEffect(() => {
    if (!elementRef.current || hasAnimated) return;

    // Register SplitText plugin if not already registered
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(SplitText);
    }

    const element = elementRef.current;

    // Create SplitText instance
    splitTextRef.current = new SplitText(element, {
      type: type,
      charsClass: 'char-animation',
      wordsClass: 'word-animation',
      linesClass: 'line-animation'
    });

    // Create animation timeline
    animationRef.current = gsap.timeline({ delay });

    // Animate based on type
    const targets = type === 'chars' ? splitTextRef.current.chars :
                   type === 'words' ? splitTextRef.current.words :
                   splitTextRef.current.lines;

    if (targets && targets.length > 0) {
      animationRef.current
        .fromTo(targets,
          {
            y: yOffset,
            opacity: 0,
            rotationX: -30,
            transformOrigin: 'center bottom'
          },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration,
            stagger,
            ease,
            transformOrigin: 'center bottom',
            onComplete: () => {
              setHasAnimated(true);
            }
          }
        );
    }

    // Cleanup function
    return () => {
      if (splitTextRef.current) {
        splitTextRef.current.revert();
      }
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [delay, duration, stagger, ease, yOffset, type, hasAnimated]);

  return elementRef;
};

export default useTextAnimation;
