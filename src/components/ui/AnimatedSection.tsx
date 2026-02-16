/**
 * AnimatedSection.tsx — Scroll-triggered animation wrapper.
 *
 * Wrap any content in <AnimatedSection> to animate it when it scrolls
 * into the viewport. Uses IntersectionObserver so the animation only
 * fires once (no repeated triggers on scroll back up).
 *
 * Props:
 *   animation — which CSS animation to apply (default: "fade-in")
 *   delay     — stagger delay in ms (maps to a .delay-{n} CSS class)
 *   className — extra Tailwind / CSS classes to merge in
 */

"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?:
    | "fade-in"
    | "fade-in-left"
    | "fade-in-right"
    | "scale-in"
    | "slide-down";
  delay?: number;
  className?: string;
}

export default function AnimatedSection({
  children,
  animation = "fade-in",
  delay = 0,
  className = "",
}: AnimatedSectionProps) {
  // Track whether the section has scrolled into view.
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create an IntersectionObserver that fires when 10% of the element
    // is visible, with a 50px buffer so animations start slightly early.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect after first trigger — animation is one-shot.
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Build animation class names from the props.
  const animationClass = `animate-${animation}`;
  const delayClass = delay > 0 ? `delay-${delay}` : "";

  return (
    <div
      ref={sectionRef}
      className={`${className} ${
        isVisible ? `${animationClass} ${delayClass}` : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
