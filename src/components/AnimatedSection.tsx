'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'slide-down';
  delay?: number;
  className?: string;
}

export default function AnimatedSection({
  children,
  animation = 'fade-in',
  delay = 0,
  className = '',
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animationClass = `animate-${animation}`;
  const delayClass = delay > 0 ? `delay-${delay}` : '';

  return (
    <div
      ref={sectionRef}
      className={`${className} ${isVisible ? `${animationClass} ${delayClass}` : 'opacity-0'}`}
    >
      {children}
    </div>
  );
}