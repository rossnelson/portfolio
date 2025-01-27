"use client";

import { useState, useEffect, useRef } from "react";

type IntersectionProps = {
  children: React.ReactNode;
};

export function Intersection({ children }: IntersectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("is intersecting", entry.isIntersecting);
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // Use the browser viewport as the root
        rootMargin: "0px", // No margin around the viewport
        threshold: 0.5, // Trigger when 50% of the element is visible
      },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`intersection-observed ${isVisible ? "visible" : ""}`}
    >
      {children}
    </div>
  );
}
