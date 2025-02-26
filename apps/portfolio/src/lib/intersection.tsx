"use client";

import { useState, useEffect, useRef } from "react";

type IntersectionProps = {
  children: React.ReactNode;
  classSuffix: string;
};

export function Intersection({ children, classSuffix }: IntersectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const ref = elementRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // Use the browser viewport as the root
        rootMargin: "0px", // No margin around the viewport
        threshold: 0.01, // Trigger when 50% of the element is visible
      },
    );

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (!ref) return;
      observer.unobserve(ref);
    };
  }, []);

  const stateClassName = isVisible
    ? `visible-then ${classSuffix}`
    : "not-visible";
  const className = `intersection-observed ${stateClassName}`;

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
