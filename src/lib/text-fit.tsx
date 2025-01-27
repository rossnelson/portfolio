"use client";

import { useEffect, useRef, useState } from "react";

type TextFitParams = {
  children: React.ReactNode;
  className?: string;
};

export function TextFit({ children, className }: TextFitParams) {
  const [fontSize, setFontSize] = useState(16);

  const containerRef = useRef(null as HTMLDivElement | null);
  const textElement = useRef(null as HTMLSpanElement | null);

  useEffect(() => {
    const adjustFontSize = () => {
      if (!containerRef.current || !textElement.current) return;

      let newFontSize = fontSize;
      textElement.current.style.fontSize = newFontSize + "px";

      const hault = 500;

      while (
        textElement.current.offsetWidth < containerRef.current.offsetWidth
      ) {
        if (newFontSize >= hault) break;
        newFontSize += 1;
        textElement.current.style.fontSize = newFontSize + "px";
      }

      setFontSize(newFontSize);
    };

    adjustFontSize();
    window.addEventListener("resize", adjustFontSize);

    return () => window.removeEventListener("resize", adjustFontSize);
  }, []);

  const containerClasses = `${className}`;
  const textClasses = ` whitespace-nowrap`;

  return (
    <div ref={containerRef} className={containerClasses}>
      <span
        ref={textElement}
        className={textClasses}
        style={{ fontSize: fontSize }}
      >
        {children}
      </span>
    </div>
  );
}
